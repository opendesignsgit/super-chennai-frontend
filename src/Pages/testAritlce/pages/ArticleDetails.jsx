import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../../config";
import { useArticleBySlug } from "../hooks/useArticles";
import "../style.css";

/* ==============================
   HELPERS
============================== */

const withBaseUrl = (url) =>
  url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";

/* ==============================
   LEXICAL RENDERER
============================== */

const FORMAT = {
  BOLD: 1,
  ITALIC: 1 << 3,
  UNDERLINE: 1 << 1,
  STRIKETHROUGH: 1 << 2,
  CODE: 1 << 4,
};

const parseStyleString = (styleString) => {
  if (!styleString) return {};
  return Object.fromEntries(
    styleString
      .split(";")
      .filter(Boolean)
      .map((rule) => {
        const [key, value] = rule.split(":");
        return [key.trim(), value.trim()];
      })
  );
};

const renderTextChildren = (children) => {
  if (!Array.isArray(children)) return null;

  return children.map((child, i) => {
    /* TEXT NODE */
    if (child.type === "text") {
      let element = <>{child.text}</>;

      if (child.format & FORMAT.BOLD)
        element = <strong>{element}</strong>;

      if (child.format & FORMAT.ITALIC)
        element = <em>{element}</em>;

      if (child.format & FORMAT.UNDERLINE)
        element = <u>{element}</u>;

      if (child.format & FORMAT.STRIKETHROUGH)
        element = <s>{element}</s>;

      if (child.format & FORMAT.CODE)
        element = (
          <code className="bg-gray-100 px-1 rounded text-sm">
            {element}
          </code>
        );

      return (
        <span key={i} style={parseStyleString(child.style)}>
          {element}
        </span>
      );
    }

    /* LINK NODE */
    if (child.type === "link") {
      return (
        <a
          key={i}
          href={child.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 underline"
        >
          {renderTextChildren(child.children)}
        </a>
      );
    }

    if (child.type === "linebreak") return <br key={i} />;

    if (child.children) {
      return (
        <span key={i}>
          {renderTextChildren(child.children)}
        </span>
      );
    }

    return null;
  });
};

const headingClasses = {
  h1: "blog-h1",
  h2: "blog-h2",
  h3: "blog-h3",
  h4: "blog-h4",
  h5: "blog-h5",
  h6: "blog-h6",
};

const parseLexical = (blocks) => {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, index) => {

    /* PARAGRAPH */
    if (block.type === "paragraph") {
      return (
        <p key={index} className="blog-paragraph">
          {renderTextChildren(block.children)}
        </p>
      );
    }

    /* HEADING */
    if (block.type === "heading") {
      const Tag = block.tag || "h2";
      const className = headingClasses[Tag] || "blog-h2";

      return (
        <Tag key={index} className={className}>
          {renderTextChildren(block.children)}
        </Tag>
      );
    }

    return null;
  });
};

/* ==============================
   AD COMPONENTS
============================== */

const SingleAdCard = ({ ad, onClose }) => (
  <div className="border rounded p-3 relative">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center
      rounded-full bg-white shadow text-gray-500 hover:text-gray-900"
    >
      ✕
    </button>

    <img
      src={withBaseUrl(ad.media?.url)}
      alt={ad.altText || ad.title}
      className="w-full rounded mb-2"
    />

    <p className="font-semibold text-sm">{ad.title}</p>

    <Link to={`/ads/${ad.slug}`} className="text-pink-600 text-xs">
      Learn More
    </Link>
  </div>
);

const AdBox = ({ ads, onAllClosed }) => {
  const [visibleAds, setVisibleAds] = useState(ads);

  useEffect(() => {
    setVisibleAds(ads);
  }, [ads]);

  if (!visibleAds?.length) {
    onAllClosed?.();
    return null;
  }

  return (
    <div className="sticky top-6 space-y-4">
      {visibleAds.map((ad) => (
        <SingleAdCard
          key={ad.id}
          ad={ad}
          onClose={() =>
            setVisibleAds((prev) => prev.filter((a) => a.id !== ad.id))
          }
        />
      ))}
    </div>
  );
};

const BottomAdBox = ({ ads }) => {
  const [show, setShow] = useState(true);
  if (!show || !ads?.length) return null;

  const ad = ads[0];

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img
          src={withBaseUrl(ad.media?.url)}
          alt={ad.altText || ad.title}
          className="h-12 rounded"
        />
        <p className="font-semibold text-sm">{ad.title}</p>
        <button onClick={() => setShow(false)}>✕</button>
      </div>
    </div>
  );
};

/* ==============================
   PAGE
============================== */

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const { article, ads, loading } = useArticleBySlug(slug);

  const [showLeftAds, setShowLeftAds] = useState(true);
  const [showRightAds, setShowRightAds] = useState(true);

  const blocks = article?.content?.root?.children || [];

  const sortByPriority = (items = []) =>
    [...items].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));

  const filterAds = (position) =>
    sortByPriority(
      ads?.filter((a) => a.position === position)?.flatMap((a) => a.ads) || []
    );

  const leftAds = filterAds("left");
  const rightAds = filterAds("right");
  const topAds = filterAds("top");
  const bottomAds = filterAds("bottom");

  const mainCol =
    showLeftAds && showRightAds
      ? "lg:col-span-8"
      : showLeftAds || showRightAds
      ? "lg:col-span-10"
      : "lg:col-span-12";

  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-[380px] overflow-hidden">
        {article?.heroImage?.url && (
          <img
            src={withBaseUrl(article.heroImage.url)}
            alt={article?.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
          <h1>{loading ? "Loading..." : article?.title}</h1>
          <div>
            <Link to="/">Home</Link> - <Link to="/blog">Articles</Link>
          </div>
        </div>
      </div>

      {/* TOP ADS */}
      {topAds?.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-6 grid md:grid-cols-2 gap-6">
          {topAds.map((ad) => (
            <img
              key={ad.id}
              src={withBaseUrl(ad.media?.url)}
              alt={ad.title}
              className="rounded-lg"
            />
          ))}
        </div>
      )}

      {/* CONTENT + SIDE ADS */}
      <div className="max-w-7xl mx-auto px-4 mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {showLeftAds && leftAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox
                ads={leftAds}
                onAllClosed={() => setShowLeftAds(false)}
              />
            </div>
          )}

          <div className={mainCol}>
            {loading && <p>Loading...</p>}

            {!loading && article && (
              <>
                <h1 className="mt-2">{article.title}</h1>

                {article.heroImage?.url && (
                  <img
                    src={withBaseUrl(article.heroImage.url)}
                    alt={article.title}
                    className="w-full rounded-lg mb-6"
                  />
                )}

                <div className="space-y-6">
                  {blocks.map((block, index) => {
                    /* RICH TEXT */
                    if (block.type === "paragraph" || block.type === "heading") {
                      return parseLexical([block]);
                    }

                    /* MEDIA BLOCK */
                    if (
                      block.type === "block" &&
                      block.fields?.blockType === "mediaBlock"
                    ) {
                      return (
                        <img
                          key={index}
                          src={withBaseUrl(block.fields.media?.url)}
                          alt=""
                          className="w-full rounded-lg"
                        />
                      );
                    }

                    /* INLINE AD BLOCK */

                    // if (
                    //   block.type === "block" &&
                    //   block.fields?.blockType === "adBlock"
                    // ) {
                    //   const inlineAds = block.fields?.ads || [];
                    //   return (
                    //     <div key={index} className="my-6">
                    //       <AdBox ads={inlineAds} />
                    //     </div>
                    //   );
                    // }

                    return null;
                  })}
                </div>
              </>
            )}
          </div>

          {showRightAds && rightAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox
                ads={rightAds}
                onAllClosed={() => setShowRightAds(false)}
              />
            </div>
          )}
        </div>
      </div>

      <BottomAdBox ads={bottomAds} />
    </>
  );
}
