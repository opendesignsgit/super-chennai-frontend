import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL } from "../../../../config";
import { getNeighbourhoodsData } from "../Services/Neighbourhoods";

export default function NeighbourhoodsData() {
  const [pageData, setPageData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect triggered");
    const fetchData = async () => {
      try {
        const res = await getNeighbourhoodsData();
        console.log("API response:", res);
        const data = res.data?.[0] || res.docs?.[0] || res;
        console.log("data", data);

        if (!data) return;

        const categoriesMapped =
          data?.content?.root?.children?.[0]?.fields?.neighbourhoodCategories.map(
            (cat) => ({
              title: cat.categoryTitle,
              name: cat.categoryTitle,
              prideData: cat.neighbourhoodCards?.map((card) => ({
                name: card.neighbourhoodName,
                nature: card.neighbourhoodType,
                image:
                  card.neighbourhoodImage?.sizes?.medium?.url ||
                  card.neighbourhoodImage?.url ||
                  null,
                neighbourhood: card.neighbourhood,
              })),
            })
          );

        console.log("Mapped Categories:", categoriesMapped);
        setPageData(data);
        if (categoriesMapped?.length) {
          setCategories(categoriesMapped);
          setActiveCategory(categoriesMapped[0]);
        }
      } catch (err) {
        console.error("Neighbourhood fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading neighbourhoods…
      </div>
    );
  }

  if (!categories.length) {
    return (
      <div className="py-20 text-center text-gray-500">
        No neighbourhood data available.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* ================= HERO ================= */}
      {/* {pageData?.heroImage?.url && (
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <img
            src={`${API_BASE_URL}${pageData.heroImage.url}`}
            alt={pageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {pageData.title}
            </h1>
          </div>
        </section>
      )} */}

      {/* ================= CATEGORY TABS ================= */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                activeCategory?.name === category.name
                  ? "bg-[#a44294] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-[#a44294]/10 hover:text-[#a44294]"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory?.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeCategory?.prideData?.map((card, index) => (
                <motion.article
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer group"
                  onClick={() => {
                    if (card.neighbourhood?.slug) {
                      window.location.href = `/neighbourhood/${card.neighbourhood.slug}`;
                    }
                  }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {card.image ? (
                      <img
                        src={`${API_BASE_URL}${card.image}`}
                        alt={card.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#a44294] transition">
                      {card.name}
                    </h3>
                    {card.nature && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {card.nature}
                      </p>
                    )}
                    <span className="inline-block mt-4 text-[#a44294] font-medium">
                      Know More →
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
