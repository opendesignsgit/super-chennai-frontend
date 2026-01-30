import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ==============================
   API CONFIG
============================== */
const API_URL = "http://localhost:3000/api";

/* ==============================
   API FUNCTIONS
============================== */
const fetchFeaturedArticle = async () => {
  const res = await fetch(`${API_URL}/articles?featured=true&limit=1`);
  const data = await res.json();
  return data.docs?.[0];
};

const fetchArticles = async (page = 1, limit = 9) => {
  const res = await fetch(`${API_URL}/articles?page=${page}&limit=${limit}`);

  setArticles(data?.docs || []);
  console.log("resArt",res.json);
  return res.json();
};

/* ==============================
   AD COMPONENTS
============================== */
const AdBox = ({ image }) => (
  <div className="sticky top-6">
    <img src={image} className="rounded-md mb-3 w-full object-cover" />
    <button className="bg-pink-600 text-white w-full py-2 rounded">
      Learn More
    </button>
  </div>
);

const BottomAdBox = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            className="w-20 h-14 rounded object-cover"
          />
          <div>
            <p className="font-semibold text-sm">Boost Your Career</p>
            <p className="text-xs text-gray-500">Enroll now</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="bg-pink-600 text-white px-4 py-2 rounded text-sm">
            Get Started
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-gray-400 text-lg"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

/* ==============================
   MAIN PAGE
============================== */
export default function ArticleListPage() {
  const [featured, setFeatured] = useState(null);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Toggle ads (API / config driven in real prod)
  const showLeftAd = true;
  const showRightAd = true;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [feat, list] = await Promise.all([
        fetchFeaturedArticle(),
        fetchArticles(page),
      ]);
      setFeatured(feat);
      setArticles(list.docs || []);
      setTotalPages(list.totalPages || 1);
      setLoading(false);
    };
    load();
  }, [page]);

  const mainCol =
    showLeftAd && showRightAd
      ? "lg:col-span-8"
      : showLeftAd || showRightAd
      ? "lg:col-span-10"
      : "lg:col-span-12";

  return (
    <>
      {/* ================= Banner ================= */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src="/images/banner-blog.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h3 className="text-3xl font-bold">Blog</h3>
            <div className="text-sm mt-2">
              <Link to="/">Home</Link> / Blog
            </div>
          </div>
        </div>
      </div>

      {/* ================= Layout ================= */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {showLeftAd && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" />
            </div>
          )}

          {/* ================= CONTENT ================= */}
          <div className={mainCol}>
            {/* Featured */}
            {featured && (
              <div className="grid lg:grid-cols-2 gap-6 mb-10">
                <div>
                  <p className="text-pink-600 text-sm font-semibold">
                    {featured.category}
                  </p>
                  <h1 className="text-3xl font-bold mt-2">
                    {featured.title}
                  </h1>
                  <p className="text-gray-600 mt-3">
                    {featured.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    {featured.author} · {featured.views} · {featured.time}
                  </p>
                </div>

                <img
                  src={featured.image}
                  className="rounded-lg w-full h-[320px] object-cover"
                />
              </div>
            )}

            {/* Article Grid */}
            {loading ? (
              <p className="text-center py-10">Loading articles...</p>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  {articles.map((a, i) => (
                    <div key={a.id}>
                      <img
                        src={a.image}
                        className="rounded-md h-40 w-full object-cover"
                      />
                      <p className="text-pink-600 text-sm mt-2 font-semibold">
                        {a.category}
                      </p>
                      <h3 className="font-semibold mt-1">{a.title}</h3>
                      <p className="text-xs text-gray-500">
                        {a.author} · {a.views}
                      </p>

                      {/* Inline Ad */}
                      {i === 4 && (
                        <div className="my-6 bg-gray-100 text-center py-6 rounded">
                          ADVERTISEMENT
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-10">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-4 py-2 border rounded disabled:opacity-40"
                  >
                    Prev
                  </button>

                  <span className="text-sm">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-4 py-2 border rounded disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>

          {showRightAd && (
            <div className="hidden lg:block lg:col-span-2">
              <AdBox image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" />
            </div>
          )}
        </div>
      </div>

      <BottomAdBox />
    </>
  );
}
