import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../../config";
import { useArticleBySlug } from "../hooks/useArticles";
import "../style.css";
import { useLocation } from "react-router-dom";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
import ViewsIcon from "../../../../public/images/icons/blog-views.svg";
import MobileAdMedia from "../components/MobileAdMedia";
import { motion, AnimatePresence } from "framer-motion";

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
      }),
  );
};

const renderTextChildren = (children) => {
  if (!Array.isArray(children)) return null;

  return children.map((child, i) => {
    /* TEXT NODE */
    if (child.type === "text") {
      let element = <>{child.text}</>;

      if (child.format & FORMAT.BOLD) element = <strong>{element}</strong>;

      if (child.format & FORMAT.ITALIC) element = <em>{element}</em>;

      if (child.format & FORMAT.UNDERLINE) element = <u>{element}</u>;

      if (child.format & FORMAT.STRIKETHROUGH) element = <s>{element}</s>;

      if (child.format & FORMAT.CODE)
        element = (
          <code className="bg-gray-100 px-1 rounded text-sm">{element}</code>
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
      return <span key={i}>{renderTextChildren(child.children)}</span>;
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
      rounded-full bg-white shadow text-gray-500 hover:text-gray-900 buttonstyleadd"
    >
      ✕
    </button>

    <AdMedia ad={ad} />

    {/* <p className="font-semibold text-sm">{ad.title}</p> */}

    {/* <Link to={`/ads/${ad.slug}`} className="text-pink-600 text-xs">
      Learn More
    </Link> */}
  </div>
);

const AdMedia = ({ ad, className = "", isMobile = false }) => {
  const mediaType = isMobile
    ? ad?.mobileSettings?.mobileMediaType || ad.mediaType
    : ad.mediaType;

  const mediaUrl = isMobile
    ? ad?.mobileSettings?.mobileMediaUrl || ad.mediaUrl
    : ad.mediaUrl;

  const media = isMobile
    ? ad?.mobileSettings?.mobileMedia || ad.media
    : ad.media;

  const altText = isMobile
    ? ad?.mobileSettings?.mobileAltText || ad.altText
    : ad.altText;

  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Responsive variants based on device
  const containerVariants = {
    initial: { opacity: 0, scale: isMobile ? 0.92 : 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: { opacity: 0, scale: isMobile ? 0.92 : 0.95 },
  };

  const imageVariants = {
    initial: { opacity: 0, y: isMobile ? 15 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: isMobile ? 1.015 : 1.02,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  /* VIDEO - Premium Animated Version */
  if (mediaType === "video" && mediaUrl) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`relative aspect-video w-full rounded-2xl overflow-hidden group shadow-xl ${className}`}
      >
        {/* Video Container */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            className="w-full h-full rounded-2xl shadow-2xl"
            src={convertToEmbedUrl(mediaUrl)}
            title={ad.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </motion.div>

        {/* Premium Video Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Play Button Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 group-hover:scale-110">
            <span className="text-3xl font-bold text-white">▶️</span>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  /* IMAGE - Premium Animated Version */
  if (media?.url) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`relative w-full rounded-2xl overflow-hidden group cursor-pointer shadow-xl ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Premium Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Dynamic Gradient Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Main Image */}

        <a
          href={ad.targetUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative "
        >
          <motion.img
            src={withBaseUrl(media.url)}
            alt={altText || ad.title}
            className="w-full h-auto rounded-2xl object-cover shadow-2xl pointer-events-none "
            variants={imageVariants}
            initial={false}
            animate={imageLoaded ? "animate" : "initial"}
            onLoad={() => setImageLoaded(true)}
            whileHover={hoverVariants.hover}
          />
        </a>

        {/* Premium Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: -12, opacity: 1 } : { y: 20, opacity: 0 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/30 flex items-center space-x-1"
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>Advertisement</span>
        </motion.div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-bold text-gray-800 shadow-2xl border-2 border-white/50 flex items-center space-x-2"
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>👆</span>
          <span>{isMobile ? "Tap" : "Click"} to Explore</span>
          <span>→</span>
        </motion.div>

        {/* Mobile-specific optimizations */}
        {isMobile && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </motion.div>
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
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 shadow-lg bottomadss">
      <div className="relative flex items-center justify-between px-4 py-2 botttomflexxxx">
        <div className="w-24 bottomimagewidths">
          <AdMedia ad={ad} />

          <button
            onClick={() => setShow(false)}
            className="ml-3 text-[#000] text-lg closebutttotttn "
          >
            ✕
          </button>
        </div>

        {/* <p className="text-sm font-semibold ml-3 truncate">{ad.title}</p> */}
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

// MOBILE AD SETTINGS

// {isMobile &&}

const MobileTopAd = ({ ads }) => {
  if (!ads?.length) return null;

  return (
    // <div className="lg:hidden px-4 mt-4 space-y-3">
    //   {ads.map((ad) => (
    //     <MobileAdMedia key={ad.id} ad={ad} />
    //   ))}
    // </div>

    <div className="relative bg-white p-2 rounded-lg shadow mobileeaddd">
      <button
        onClick={() => setShow(false)}
        className="absolute -top-2 -right-2 bg-white text-xs rounded-full w-5 h-5 buttonstyleadd"
      >
        ✕
      </button>

      {ads.map((ad) => (
        <MobileAdMedia key={ad.id} ad={ad} />
      ))}
    </div>
  );
};

const MobileBottomAd = ({ ads }) => {
  const [show, setShow] = useState(true);
  if (!ads?.length || !show) return null;

  const ad = ads[0];

  return (
    <div className="lg:hidden fixed bottom-2 left-2 right-2 z-50 mobileeaddd">
      <div className="relative bg-white rounded-xl shadow border p-2">
        <button
          onClick={() => setShow(false)}
          className="absolute top-1 right-1 text-sm buttonstyleadd"
        >
          ✕
        </button>

        <MobileAdMedia ad={ad} />
      </div>
    </div>
  );
};

const MobileFloatingAd = ({ ad, position = "left" }) => {
  const [show, setShow] = useState(true);
  if (!ad || !show) return null;

  return (
    // <div
    //   className={`lg:hidden fixed bottom-100 z-50 w-28 ${
    //     position === "left" ? "left-2" : "right-2"
    //   }`}
    // >
    <div className="relative bg-white p-2 rounded-lg shadow mt-5 mobileeaddd">
      <button
        onClick={() => setShow(false)}
        className="absolute -top-2 -right-2 bg-white text-xs rounded-full w-5 h-5 buttonstyleadd"
      >
        ✕
      </button>

      <MobileAdMedia ad={ad} />
    </div>
    // </div>
  );
};

const MobileInlineAd = ({ ads }) => {
  if (!ads?.length) return null;

  return (
    <div className="lg:hidden my-6 space-y-4">
      {ads.map((ad) => (
        <MobileAdMedia key={ad.id} ad={ad} />
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

  console.log("ads-detail", ads);

  const [showLeftAds, setShowLeftAds] = useState(true);
  const [showRightAds, setShowRightAds] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const blocks = article?.content?.root?.children || [];

  const paragraphBlocks = blocks.filter(
    (block) => block.type === "paragraph" || block.type === "heading",
  );

  const sortByPriority = (items = []) =>
    [...items].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));

  const filterAds = (position) =>
    sortByPriority(
      ads?.filter((a) => a.position === position)?.flatMap((a) => a.ads) || [],
    );

  const leftAds = filterAds("left");
  const rightAds = filterAds("right");
  const topAds = filterAds("top");
  const bottomAds = filterAds("bottom");

  const hasLeft = showLeftAds && leftAds?.length > 0;
  const hasRight = showRightAds && rightAds?.length > 0;

  const hasSideAds = hasLeft || hasRight;

  const mainCol = hasSideAds ? "lg:col-span-8" : "lg:col-span-12";

  const visibleBlocks = expanded ? blocks : blocks.slice(0, 12);

  const author =
    article?.populatedAuthors?.[0] || article?.authors?.[0] || null;

  const hasViewed = useRef(false);

  const [localArticle, setLocalArticle] = useState(null);

  useEffect(() => {
    setLocalArticle(article);
  }, [article]);

  /* ---------------------------------------------
    INCREMENT VIEW (RUNS ONLY ONCE)
 --------------------------------------------- */
  useEffect(() => {
    if (!localArticle?.id || hasViewed.current) return;

    hasViewed.current = true;

    axios
      .patch(`${API_BASE_URL}/api/articles/${localArticle.id}`, {
        views: (localArticle.views || 0) + 1,
      })
      .catch(() => {});

    setLocalArticle((prev) => ({
      ...prev,
      views: (prev?.views || 0) + 1,
    }));
  }, [localArticle?.id]);

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
          {/* Desktop */}
          <div className="hidden lg:grid md:grid-cols-2 gap-6">
            {topAds.map((ad) => (
              <TopAdCard key={ad.id} ad={ad} />
            ))}
          </div>

          {/* Mobile */}
          <MobileTopAd ads={topAds} />

          {hasLeft && <MobileFloatingAd ad={leftAds[0]} position="left" />}
        </div>
      )}

      <div
        className={`mx-auto px-4 mt-10 mb-10 ${
          hasSideAds ? "max-w-8xl" : "max-w-6xl"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {hasLeft ? (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox ads={leftAds} onAllClosed={() => setShowLeftAds(false)} />
            </div>
          ) : hasSideAds ? (
            <div className="hidden lg:block lg:col-span-2" />
          ) : null}

          {/* {hasLeft && <MobileFloatingAd ad={leftAds[0]} position="left" />} */}

          <div className={mainCol}>
            {loading && <p>Loading...</p>}

            {!loading && article && (
              <>
                <div className="flex items-center gap-4 mb-2">
                  {author?.profileImage?.url ? (
                    <img
                      src={withBaseUrl(author.profileImage.url)}
                      alt={author.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold">
                      {author?.name?.charAt(0) || "A"}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-gray-800">
                      {author?.name || "Unknown Author"}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                          timeZone: "Asia/Kolkata",
                        },
                      )}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <img src={ViewsIcon} alt="Views" className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {visibleBlocks.map((block, index) => {
                    if (
                      block.type === "paragraph" ||
                      block.type === "heading"
                    ) {
                      return parseLexical([block]);
                    }

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
                        <>
                          {/* Desktop */}
                          <div className="hidden lg:block">
                            <InlineAdBox ads={block.fields?.ads} />
                          </div>

                          {/* Mobile */}
                          <div className="lg:hidden">
                            <MobileInlineAd ads={block.fields?.ads} />
                          </div>
                        </>
                      );
                    }

                    return null;
                  })}

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

          {/* #######MOBILE AD RIGHT  ######### */}

          {hasRight && <MobileFloatingAd ad={rightAds[0]} position="right" />}
        </div>
        <div className="mt-12">
          <Link to="/article" className="text-[#232b91ff] font-medium">
            ← Back to Article List
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <BottomAdBox ads={bottomAds} />
      </div>

      {/* Mobile */}
      <MobileBottomAd ads={bottomAds} />
    </>
  );
}
