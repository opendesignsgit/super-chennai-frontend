import { useState } from "react";
import { Link } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import { API_BASE_URL } from "../../../../config";
import Pagination from "../components/Pagination";
import "../styles.css";
import { useEffect } from "react";

/* ==============================
   AD COMPONENTS
============================== */

const withBaseUrl = (url) =>
  url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";

const AdBox = ({ ads, onAllClosed }) => {
  const [visibleAds, setVisibleAds] = useState(ads);

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

const SingleAdCard = ({ ad, onClose }) => {
  return (
    <div className="border rounded p-3 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center
        rounded-full bg-white/90 shadow text-gray-500 hover:text-gray-900"
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
};

const BottomAdBox = ({ ads }) => {
  const [show, setShow] = useState(true);

  if (!show || !ads?.length) return null;

  const ad = ads[0];

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 justify-between">
        {/* IMAGE */}
        <img
          src={withBaseUrl(ad.media?.url)}
          alt={ad.altText || ad.title}
          className="h-12 object-cover rounded"
        />

        <p className="font-semibold text-sm">{ad.title}</p>

        <div className="flex gap-3">
          <Link
            to={`/ads/${ad.slug}`}
            className="bg-pink-600 text-white px-4 py-2 rounded text-sm"
          >
            Learn More
          </Link>

          <button onClick={() => setShow(false)}>✕</button>
        </div>
      </div>
    </div>
  );
};

const InlineAd = ({ ad }) => {
  const [show, setShow] = useState(true);
  if (!show || !ad) return null;

  return (
    <div className="col-span-full my-6 bg-gray-100 rounded p-4 flex items-center gap-4 relative">
      {/* CLOSE */}
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 text-sm text-gray-600"
      >
        ✕
      </button>

      <img
        src={withBaseUrl(ad.media?.url)}
        alt={ad.altText || ad.title}
        className="h-20 object-cover rounded"
      />

      <div className="flex-1">
        <p className="font-semibold">{ad.title}</p>

        <Link to={`/ads/${ad.slug}`} className="text-pink-600 text-sm">
          Learn More
        </Link>
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

      <img
        src={withBaseUrl(ad.media?.url)}
        alt={ad.altText || ad.title}
        className="w-full h-[160px] object-cover rounded-lg"
      />
    </div>
  );
};

const INLINE_AD_INTERVAL = 3;

/* ==============================
   PAGE
============================== */

export default function ArticleDetailPage() {
 
 
 
  const [showLeftAds, setShowLeftAds] = useState(true);
  const [showRightAds, setShowRightAds] = useState(true);

  const [page, setPage] = useState(1);
  const { featured, articles, totalPages, loading, ads, articleData } =
    useArticles(page);
  const sortByPriority = (ads) =>
    ads?.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  const leftAds = sortByPriority(
    ads?.filter((a) => a.position === "left").flatMap((a) => a.ads),
  );
  const rightAds = ads
    ?.filter((a) => a.position === "right")
    .flatMap((a) => a.ads);
  const inlineAds = ads
    ?.filter((a) => a.position === "inline")
    .flatMap((a) => a.ads);
  const topAds = ads?.filter((a) => a.position === "top").flatMap((a) => a.ads);
  const bottomAds = topAds;


useEffect(() => {
  if (!leftAds || leftAds.length === 0) {
    setShowLeftAds(false);
  }

  if (!rightAds || rightAds.length === 0) {
    setShowRightAds(false);
  }
}, [leftAds, rightAds]);



  const mainCol =
    showLeftAds && showRightAds
      ? "lg:col-span-8"
      : showLeftAds || showRightAds
        ? "lg:col-span-10"
        : "lg:col-span-12";

  console.log("useArticles → ads", ads);


  return (
    <>
      <div className="accaodomationBannerSection relative w-full h-[280px] overflow-hidden">
        <img src="/images/banner-blog.jpg" alt="Blog Banner" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Blog</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="/blog">Blog</Link>
            </div>
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

      <div className="max-w-7xl mx-auto px-4 mt-6 mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {showLeftAds && leftAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox ads={leftAds} onAllClosed={() => setShowLeftAds(false)} />
            </div>
          )}

          <div className={mainCol}>

           

           {/* DEATAIL PAGE ADS CONTENT  */}






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
