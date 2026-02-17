import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../../config";
import { useArticleBySlug } from "../hooks/useArticles";
import "../style.css";
import { useLocation } from "react-router-dom";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";

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

   

    <AdMedia ad={ad} />

    <p className="font-semibold text-sm">{ad.title}</p>

    <Link to={`/ads/${ad.slug}`} className="text-pink-600 text-xs">
      Learn More
    </Link>
  </div>
);

const AdMedia = ({ ad, className = "" }) => {
  if (ad.mediaType === "video" && ad.mediaUrl) {
    return (
      <div className={`aspect-video w-full ${className}`}>
        <iframe
          className="w-full h-full rounded-lg"
          src={convertToEmbedUrl(ad.mediaUrl)}
          title={ad.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  if (ad.media?.url) {
    return (
      <img
        src={withBaseUrl(ad.media?.url)}
        alt={ad.altText || ad.title}
        className={`w-full rounded-lg ${className}`}
      />
    );
  }

  return null;
};

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
        {/* <img
          src={withBaseUrl(ad.media?.url)}
          alt={ad.altText || ad.title}
          className="h-12 rounded"
        /> */}
        <AdMedia ad={ad} className="mb-2 h-19 rounded" />

        <p className="font-semibold text-sm p-5">{ad.title}</p>
        <button onClick={() => setShow(false)} >✕</button>
      </div>
    </div>
  );
};

const TopAdCard = ({ ad }) => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full
             bg-white/90 backdrop-blur shadow-sm
             text-gray-500 hover:text-gray-900
             hover:bg-white transition"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
{/* 
      <img
        src={withBaseUrl(ad.media?.url)}
        alt={ad.altText || ad.title}
        className="w-full h-[160px] object-cover rounded-lg"
      /> */}

      <AdMedia ad={ad} />

    </div>
  );
};

const convertToEmbedUrl = (url) => {
  if (!url) return "";

  let videoId = "";

  if (url.includes("youtube.com/watch")) {
    videoId = new URL(url).searchParams.get("v");
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1];
  }

  if (!videoId) return "";

  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0`;
};

const InlineAdBox = ({ ads }) => {
  if (!ads?.length) return null;

  return (
    <div className="my-8">
      {ads.map((ad) => (
        <div key={ad.id} className="mb-6">
          {/* VIDEO AD */}
          {ad.mediaType === "video" && ad.mediaUrl ? (
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src={convertToEmbedUrl(ad.mediaUrl)}
                title={ad.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            /* IMAGE AD */
            ad.media?.url && (
              <a
                href={ad.targetUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={withBaseUrl(ad.media?.url)}
                  alt={ad.altText || ad.title}
                  className="w-full rounded-lg"
                />
              </a>
            )
          )}

          {ad.caption && (
            <p className="text-sm text-gray-500 mt-2">{ad.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
};



/* ==============================
   PAGE
============================== */

export default function ArticleDetailPage() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);


  const { slug } = useParams();
  const { article, ads, loading } = useArticleBySlug(slug);
  
  console.log("artcle data",article)
    console.log("ads-detail",ads)

  const [showLeftAds, setShowLeftAds] = useState(true);
  const [showRightAds, setShowRightAds] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const blocks = article?.content?.root?.children || [];

  const paragraphBlocks = blocks.filter(
  (block) =>
    block.type === "paragraph" ||
    block.type === "heading"
);


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


  const hasLeft = showLeftAds && leftAds?.length > 0;
  const hasRight = showRightAds && rightAds?.length > 0;

  // const mainCol =
  //   hasLeft && hasRight
  //     ? "lg:col-span-8"
  //     : hasLeft || hasRight
  //       ? "lg:col-span-10"
  //       : "lg:col-span-12";
  //        hasSideAds ? "lg:col-span-8" : "lg:col-span-12";

  const hasSideAds = hasLeft || hasRight;

const mainCol = hasSideAds
  ? "lg:col-span-8"
  : "lg:col-span-12";


  return (
    <>
      <div className="relative w-full h-[380px] overflow-hidden">
        {article?.heroImage?.url && (
          <img
            src={withBaseUrl(article.heroImage.url)}
            alt={article?.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <AutoShrinkText
              text={article?.title || "Super Chennai Article"}
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />
            <div className="breadCrum"></div>
          </div>
        </div>
      </div>

      {topAds?.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {topAds.map((ad) => (
              <TopAdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      )}

      <div
        className={`mx-auto px-4 mt-10 mb-10 ${
          hasSideAds ? "max-w-8xl" : "max-w-6xl"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* {showLeftAds && leftAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox ads={leftAds} onAllClosed={() => setShowLeftAds(false)} />
            </div>
          )} */}

          {hasLeft ? (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox ads={leftAds} onAllClosed={() => setShowLeftAds(false)} />
            </div>
          ) : hasSideAds ? (
            <div className="hidden lg:block lg:col-span-2" />
          ) : null}

          <div className={mainCol}>
            {loading && <p>Loading...</p>}

            {!loading && article && (
              <>
                <div className="space-y-6">
                  {/* {blocks.map((block, index) => { */}
                  {(expanded ? blocks : paragraphBlocks.slice(0, 12)).map(
                    (block, index) => {
                      /* RICH TEXT */
                      if (
                        block.type === "paragraph" ||
                        block.type === "heading"
                      ) {
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

                      if (
                        block.type === "block" &&
                        block.fields?.blockType === "adBlock" &&
                        block.fields?.position === "inline"
                      ) {
                        return (
                          <InlineAdBox key={index} ads={block.fields?.ads} />
                        );
                      }

                      return null;
                    },
                  )}

                  {paragraphBlocks.length > 1 && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* {showRightAds && rightAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox
                ads={rightAds}
                onAllClosed={() => setShowRightAds(false)}
              />
            </div>
          )} */}

          {hasRight ? (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox
                ads={rightAds}
                onAllClosed={() => setShowRightAds(false)}
              />
            </div>
          ) : hasSideAds ? (
            <div className="hidden lg:block lg:col-span-2" />
          ) : null}
        </div>
      </div>

      <BottomAdBox ads={bottomAds} />
    </>
  );
}
