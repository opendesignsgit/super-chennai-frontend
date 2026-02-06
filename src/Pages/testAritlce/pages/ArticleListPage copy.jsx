import { useState } from "react";
import { Link } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import { API_BASE_URL } from "../../../../config";

/* ==============================
   AD COMPONENTS
============================== */

const withBaseUrl = (url) =>
  url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";

const AdBox = ({ ads }) => {
  if (!ads?.length) return null;

  return (
    <div className="sticky top-6 space-y-4">
      {ads.map((ad) => (
        <SingleAdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
};

const SingleAdCard = ({ ad }) => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="border rounded p-3 relative">
      {/* CLOSE */}
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 text-sm text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <img
        src={withBaseUrl(ad.media?.url)}
        alt={ad.altText || ad.title}
        className="w-full object-cover rounded mb-2"
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
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 bg-white/80 rounded-full px-2 text-sm shadow hover:bg-white"
      >
        ✕
      </button>

      <img
        src={withBaseUrl(ad.media?.url)}
        alt={ad.altText || ad.title}
        className="w-full h-[160px] object-cover rounded-lg"
      />
    </div>
  );
};

/* ==============================
   PAGE
============================== */

export default function ArticleListPage() {
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
  const mainCol =
    leftAds && rightAds
      ? "lg:col-span-8"
      : leftAds || rightAds
        ? "lg:col-span-10"
        : "lg:col-span-12";

  console.log("useArticles →", articleData);

  return (
    <>
      {/* Banner */}
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

      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {leftAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox ads={leftAds} />
            </div>
          )}

          <div className={mainCol}>
            {featured && (
              <div className="grid lg:grid-cols-2 gap-6 mb-10 items-center">
                <div>
                  {/* Category */}
                  <p className="text-pink-600 text-sm font-semibold">
                    {featured.Articlecategory?.label}
                  </p>

                  {/* Title */}
                  <h1 className="text-3xl font-bold mt-2">{featured.title}</h1>

                  {/* Description */}
                  <p className="text-gray-600 mt-3">{featured.excerpt}</p>

                  {/* Meta */}
                  <p className="text-xs text-gray-500 mt-2">
                    {featured.populatedAuthors?.[0]?.name} ·{" "}
                    {featured.readingTime} min read
                  </p>
                </div>

                {/* Image */}
                <img
                  src={`${API_BASE_URL}${featured.heroImage?.url || featured.thumbnailImage?.url}`}
                  alt={featured.title}
                  className="rounded-lg w-full h-[320px] object-cover"
                />
              </div>
            )}

            {/* Articles */}
            {loading ? (
              <p className="text-center py-10">Loading articles...</p>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  {articles.map((a, i) => {
                    const image =
                      a.thumbnailImage?.url ||
                      a.heroImage?.url ||
                      "/images/placeholder.jpg";

                    return (
                      <div key={a.id} className="contents">
                        <div className="bg-white rounded-md overflow-hidden">
                          <img
                            src={`${API_BASE_URL}${image}`}
                            alt={a.title}
                            className="rounded-lg w-full h-[320px] object-cover"
                          />

                          <p className="text-pink-600 text-sm mt-2 font-semibold">
                            {a.Articlecategory?.label}
                          </p>

                          <h3 className="font-semibold mt-1">{a.title}</h3>

                          <p className="text-xs text-gray-500 mt-1">
                            {a.populatedAuthors?.[0]?.name} · {a.readingTime}{" "}
                            min read
                          </p>
                        </div>

                        <InlineAd ad={inlineAds} />
                      </div>
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-4 mt-10">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-4 py-2 border rounded"
                  >
                    Prev
                  </button>

                  <span>
                    Page {page} of {totalPages}
                  </span>

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-4 py-2 border rounded"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>

          {rightAds?.length > 0 && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox ads={rightAds} />
            </div>
          )}
        </div>
      </div>

      <BottomAdBox ads={bottomAds} />
    </>
  );
}
