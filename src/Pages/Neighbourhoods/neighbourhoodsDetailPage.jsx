import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { API_BASE_URL } from "../../../config";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";

/* ---------------------------------------------
   LEXICAL HELPERS (INLINE)
--------------------------------------------- */

const FORMAT = {
  BOLD: 1,
  UNDERLINE: 1 << 1,
  ITALIC: 1 << 3,
};

const renderTextChildren = (children, allowFormatting = true) => {
  if (!Array.isArray(children)) return null;

  return children.map((child, i) => {
    if (child.type === "text") {
      let el = child.text;

      if (allowFormatting) {
        if (child.format & FORMAT.BOLD) el = <strong>{el}</strong>;
        if (child.format & FORMAT.ITALIC) el = <em>{el}</em>;
        if (child.format & FORMAT.UNDERLINE) el = <u>{el}</u>;
      }

      return <span key={i}>{el}</span>;
    }

    if (child.type === "link") {
      return (
        <a
          key={i}
          href={child.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {renderTextChildren(child.children)}
        </a>
      );
    }

    if (child.type === "linebreak") return <br key={i} />;

    if (child.children) {
      return (
        <span key={i}>
          {renderTextChildren(child.children, allowFormatting)}
        </span>
      );
    }

    return null;
  });
};

const parseLexical = (content) => {
  if (!content?.root?.children) return null;

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p
            key={idx}
            className="mb-5 text-base text-gray-700 leading-relaxed"
          >
            {renderTextChildren(node.children)}
          </p>
        );

      case "heading": {
        const Tag = node.tag || "h2";
        return (
          <Tag
            key={idx}
            className="mt-8 mb-4 text-2xl font-bold text-gray-900"
          >
            {renderTextChildren(node.children)}
          </Tag>
        );
      }

      case "block": {
        const blockType = node.fields?.blockType;

        /* ---------- MEDIA BLOCK ---------- */
        if (blockType === "mediaBlock") {
          const media = node.fields?.media;
          if (!media?.url) return null;

          return (
            <figure key={idx} className="my-10">
              <img
                src={`${API_BASE_URL}${media.url}`}
                alt={media.alt || "Image"}
                className="w-full rounded-lg"
              />
              {media.caption && (
                <figcaption className="mt-2 text-sm text-gray-500 text-center italic">
                  {media.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        /* ---------- VIDEO BLOCK ---------- */
        if (blockType === "videoBlock") {
          const { source, url } = node.fields;
          if (!url) return null;

          if (source === "youtube") {
            let videoId = "";
            if (url.includes("v=")) {
              videoId = url.split("v=")[1]?.split("&")[0];
            } else if (url.includes("youtu.be/")) {
              videoId = url.split("youtu.be/")[1];
            }

            return (
              <div key={idx} className="my-10 w-full">
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube Video"
                  allowFullScreen
                />
              </div>
            );
          }

          return (
            <div key={idx} className="my-10">
              <video
                src={url}
                controls
                className="w-full rounded-lg"
              />
            </div>
          );
        }

        return null;
      }

      default:
        return null;
    }
  });
};

/* ---------------------------------------------
   COMPONENT
--------------------------------------------- */

const NeighbourhoodDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/neighbourhood?where[slug][equals]=${slug}`
        );

        const doc = res.data?.docs?.[0];
        if (!doc) throw new Error("Not found");

        setPage(doc);
      } catch (e) {
        console.error("Neighbourhood fetch error:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  /* ---------- STATES ---------- */

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );

  if (error || !page)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p>Page not found</p>
        <button
          className="mt-4 text-[#a44294]"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );

  const heroImage =
    page.heroImage?.url || page.FeaturedImage?.url || null;

  /* ---------------------------------------------
     RENDER
  --------------------------------------------- */

  return (
    <main className="bg-white">
      {/* HERO */}
    

      <div className="accaodomationBannerSection relative w-full overflow-hidden">
        <>
          <div className="bLogDetailBanner">
            {heroImage ? (
              <img src={`${API_BASE_URL}${heroImage}`} alt={page.title} />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-[#a34493]/610 to-[#8b3c82]/90"></div> */}
          </div>

          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText ">
              <div className="breadCrum mb-4">
                <a href="#">
                  <Link to="/blog">Neighbourhood</Link>
                </a>{" "}
              </div>
              <AutoShrinkText
                text={page.title}
                baseSize={60}
                minSize={40}
                maxChars={40}
                className="accodoamationBannerText"
                width="80%"
                maxLines={2}
              />
            </div>
          </div>
        </>
      </div>

      {/* CONTENT */}
      <section ref={contentRef} className="max-w-4xl mx-auto px-4 py-14 blog">
        {parseLexical(page.content)}
      </section>

      {/* BACK */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <button
          onClick={() => navigate(-1)}
          className="text-[#a44294] font-medium"
        >
          ← Back
        </button>
      </div>
    </main>
  );
};

export default NeighbourhoodDetail;



