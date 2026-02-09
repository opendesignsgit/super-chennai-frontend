import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../../config";
import ArticleSkeleton from "../components/ArticleSkeleton";
import Pagination from "../components/Pagination";
import { useArticlePageAds } from "../hooks/useArticlePageAds";
import { useArticles } from "../hooks/useArticles";
import "../styles.css";

/* ==============================
   AD COMPONENTS
============================== */

const withBaseUrl = (url) =>
  url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";

const AdBox = ({ ads }) => {
  const [visibleAds, setVisibleAds] = useState([]);

  useEffect(() => {
    setVisibleAds(ads || []);
  }, [ads]);

  if (!ads || ads.length === 0) return null;

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

  const ad = ads[0]; // rotate later if needed

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 justify-between">
        <img
          src={withBaseUrl(ad.media?.url)}
          alt={ad.altText || ad.title}
          className="h-12 object-contain rounded"
        />

        <p className="font-semibold text-sm truncate">{ad.title}</p>

        <div className="flex gap-3 items-center">
          <Link
            to={`/ads/${ad.slug}`}
            className="bg-pink-600 text-white px-4 py-2 rounded text-sm"
          >
            Learn More
          </Link>

          <button
            onClick={() => setShow(false)}
            className="h-8 w-8 flex items-center justify-center rounded-full
                       text-gray-500 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
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

/* ==============================
   PAGE
============================== */

export default function ArticleListPage() {
  const { ads: articleAds, loading: adsLoading } = useArticlePageAds();
  const structuredArticleAds = articleAds?.reduce((acc, ad) => {
    const pos = ad.position || "right";
    const existing = acc.find((a) => a.position === pos);
    if (existing) {
      existing.ads.push(ad);
    } else {
      acc.push({
        position: pos,
        ads: [ad],
      });
    }
    return acc;
  }, []);

  //################## POSTION ASIGN ###############

  const [showLeftAds, setShowLeftAds] = useState(true);
  const [showRightAds, setShowRightAds] = useState(true);
  const ARTICLES_PER_PAGE = 3;



  const [page, setPage] = useState(1);
  const { articles = [], loading, ads: embeddedAds } = useArticles();


  console.log("article data", articles);

  const featuredEventArticle = articles.find((a) => a.isFeatured === true);


  const normalArticles = articles.filter(
    (a) => a.id !== featuredEventArticle?.id,
  );
  const totalPages = Math.ceil(normalArticles.length / ARTICLES_PER_PAGE);

  const paginatedArticles = normalArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE,
  );

  const ads = structuredArticleAds;
  let leftAds =
    ads?.filter((a) => a.position === "left").flatMap((a) => a.ads) || [];

  let rightAds =
    ads?.filter((a) => a.position === "right").flatMap((a) => a.ads) || [];

  if (rightAds.length === 0 && leftAds.length > 1) {
    rightAds = leftAds.splice(1);
  }
  const topAds = ads?.filter((a) => a.position === "top").flatMap((a) => a.ads);

  const bottomAds = ads
    ?.filter((a) => a.position === "bottom")
    .flatMap((a) => a.ads);
  const mainCol =
    showLeftAds && showRightAds
      ? "lg:col-span-8"
      : showLeftAds || showRightAds
        ? "lg:col-span-10"
        : "lg:col-span-12";


  //##################### MORE SECTION DTATA STRING ##########################################

  const mostViewedArticles = [...articles]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 5);

  const popularArticles = [...articles]
    .sort((a, b) => {
      const scoreA = (a.views ?? 0) + (a.readingTime ?? 0) * 5;
      const scoreB = (b.views ?? 0) + (b.readingTime ?? 0) * 5;
      return scoreB - scoreA;
    })
    .slice(0, 6);
  const inlineAdIndex =
    embeddedAds?.length > 0 ? (page - 1) % embeddedAds.length : 0;

  return (
    <>
   

      <div className="accaodomationBannerSection relative w-full h-[280px] overflow-hidden">
        <img src="/images/banner-blog.jpg" alt="Blog Banner" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Articles</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="/blog">Articles</Link>
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

      <div className="max-w-8xl mx-auto px-4 mt-6 mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {leftAds?.length > 0 && (
            <>
              {/* Mobile & Tablet */}
              <div className="block lg:hidden mb-6">
                <AdBox ads={leftAds.slice(0, 1)} />
              </div>

              {/* Desktop */}
              {showLeftAds && (
                <div className="hidden lg:block lg:col-span-2">
                  <AdBox ads={leftAds} />
                </div>
              )}
            </>
          )}

          <div className={mainCol}>
            {featuredEventArticle && (
              <div className="grid lg:grid-cols-2 gap-6 mb-10 items-center ">
                <div>
                  <p className="text-pink-600 text-sm font-semibold">
                    {featuredEventArticle.Articlecategory?.label}
                  </p>
                  <h1 className=" themelink-color formheadingtheme-article mt-2">
                    {featuredEventArticle.title}
                  </h1>

                  <p className="text-gray-600 mt-3">
                    {featuredEventArticle.excerpt}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {featuredEventArticle.populatedAuthors?.[0]?.name} ·{" "}
                    {featuredEventArticle.readingTime} min read
                  </p>
                </div>

                <img
                  src={`${API_BASE_URL}${featuredEventArticle.heroImage?.url || featuredEventArticle.thumbnailImage?.url}`}
                  alt={featuredEventArticle.title}
                  className="rounded-lg w-full h-[320px] object-cover"
                />
              </div>
            )}

            {loading ? (
              <ArticleSkeleton count={ARTICLES_PER_PAGE} />
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  {paginatedArticles.map((a, i) => {
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

                          <h1 className=" themelink-color formheadingtheme-article-cards mt-2">
                            {a.title}
                          </h1>
                          <p className="text-gray-600 mt-3">{a.excerpt}</p>

                          <p className="text-xs text-gray-500 mt-1">
                            {a.populatedAuthors?.[0]?.name} · {a.readingTime}{" "}
                            min read
                          </p>
                        </div>

                        {i === 2 && embeddedAds?.length > 0 && (
                          <div className="md:hidden my-6">
                            <SingleAdCard ad={embeddedAds[inlineAdIndex]} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={(p) => {
                    setPage(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </>
            )}

            {mostViewedArticles.length > 0 && (
              <div className="max-w-7xl mx-auto px-4 mt-20 conclevesSectionHeading">
                <h3 className=" mb-8">Most Viewed Articles</h3>

                <div className="space-y-6">
                  {mostViewedArticles.map((a) => (
                    <Link
                      key={a.id}
                      to={`/blog/${a.slug}`}
                      className="flex flex-col md:flex-row gap-6 bg-white
                       rounded-xl overflow-hidden hover:shadow-lg transition"
                    >
                      {/* IMAGE */}
                      <img
                        src={`${API_BASE_URL}${a.thumbnailImage?.url || a.heroImage?.url}`}
                        alt={a.title}
                        className="w-full md:w-64 h-48 object-cover"
                      />

                      {/* CONTENT */}
                      <div className="flex-1 p-4">
                        <p className="text-pink-600 text-xs font-semibold">
                          {a.Articlecategory?.label}
                        </p>
                        <div className="formheadingtheme-article-cards">
                          <h4>{a.title}</h4>
                        </div>

                        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                          {a.excerpt}
                        </p>

                        {(a.views > 0 || a.readingTime > 0) && (
                          <div className="flex gap-6 text-xs text-gray-500 mt-4">
                            {a.views > 0 && <span>👁 {a.views} views</span>}
                            {a.readingTime > 0 && (
                              <span>{a.readingTime} min read</span>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {popularArticles.length > 0 && (
              <div className="mt-20 conclevesSectionHeading">
                <h3 className=" mb-8"> Popular Articles</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {popularArticles.map((a) => (
                    <div
                      key={a.id}
                      className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                      <img
                        src={`${API_BASE_URL}${a.thumbnailImage?.url || a.heroImage?.url}`}
                        alt={a.title}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-4">
                        <p className="text-pink-600 text-xs font-semibold">
                          {a.Articlecategory?.label}
                        </p>

                        <div className="formheadingtheme-article-cards">
                          <h4>{a.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                          {a.excerpt}
                        </p>

                        {(a.views > 0 || a.readingTime > 0) && (
                          <div className="flex justify-between text-xs text-gray-500 mt-2">
                            {a.views > 0 ? <span>👁 {a.views}</span> : <span />}
                            {a.readingTime > 0 ? (
                              <span>{a.readingTime} min read</span>
                            ) : (
                              <span />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {rightAds?.length > 0 && (
            <>
              {/* Mobile inline ad after articles */}
              <div className="block lg:hidden mt-10">
                <AdBox ads={rightAds.slice(0, 1)} />
              </div>

              {/* Desktop sidebar */}
              {showRightAds && (
                <div className="hidden lg:block lg:col-span-2">
                  <AdBox ads={rightAds} />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <BottomAdBox ads={bottomAds} />
    </>
  );
}
