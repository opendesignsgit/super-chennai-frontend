import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLiveDetailBySlug } from "./Services/Neighbourhoods";
import { API_BASE_URL } from "../../../config";

const NeighbourhoodDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("useEffect triggered for slug:", slug); 

    const fetchPage = async () => {
      try {
        console.log("Fetching live detail for slug:", slug); // before API call
        const data = await getLiveDetailBySlug(slug);
        console.log("API response:", data); // log full API response

        if (!data) {
          console.warn("No data found for slug:", slug);
          throw new Error("Not found");
        }

        setPage(data);
        console.log("Page state set with data:", data); // after setting state
      } catch (e) {
        console.error("Error fetching live detail:", e);
        setError(true);
      } finally {
        console.log("Fetch attempt finished, setting loading to false");
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  // ---------- LOADING ----------
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // ---------- ERROR ----------
  if (error || !page) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p>Page not found</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // ---------- DATA EXTRACTION ----------
  const title = page.title;

  const heroImage =
    page.heroImage?.sizes?.medium?.url || page.heroImage?.url || null;

  // Get neighbourhood cards (deep path)
  const neighbourhoodCategories =
    page.content?.root?.children?.[0]?.fields?.neighbourhoodCategories || [];

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh]">
        {heroImage ? (
          <img
            src={`${API_BASE_URL}${heroImage}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}

        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute bottom-10 left-10 text-white text-4xl font-bold">
          {title}
        </h1>
      </section>

      {/* ================= CATEGORIES & CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {neighbourhoodCategories.map((cat) => (
          <div key={cat.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{cat.categoryTitle}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.neighbourhoodCards.map((card) => {
                const image =
                  card.neighbourhoodImage?.sizes?.medium?.url ||
                  card.neighbourhoodImage?.url ||
                  null;

                return (
                  <div
                    key={card.id}
                    className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                    onClick={() =>
                      navigate(`/neighbourhood/${card.neighbourhood.slug}`)
                    }
                  >
                    <div className="h-48 bg-gray-100">
                      {image ? (
                        <img
                          src={`${API_BASE_URL}${image}`}
                          alt={card.neighbourhoodName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        {card.neighbourhoodName}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {card.neighbourhoodType}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ================= BACK ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
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
