import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getNeighbourhoodsData } from "../Services/Neighbourhoods";
import { API_BASE_URL } from "../../../../config";

export default function NeighbourhoodsData() {
  const [neighbourhoodData, setNeighbourhoodData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const mySectionRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNeighbourhoodsData();
      if (data) {
        setNeighbourhoodData(data);
        setCategories(data.categories || []);
        setActiveTab(data.categories?.[0]?.value || "");
        setActiveSubTab(data.categories?.[0]?.subcats?.[0]?.name || "");
      }
      console.log("Neighbourhoods Data:", data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleStickyScroll = () => {
      const section = document.getElementById("fourthSection");
      if (section) {
        const top = section.getBoundingClientRect().top;
        setIsSticky(top <= 0);
      }
    };
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);

  if (!neighbourhoodData) {
    return <p className="text-center py-10">Loading Neighbourhoods...</p>;
  }

  // 🧩 Get active subcategory pride data dynamically
  const activeCategory = categories.find((cat) => cat.value === activeTab);
  const activeSubcat = activeCategory?.subcats?.find(
    (sub) => sub.name === activeSubTab
  );
  const prideData = activeSubcat?.prideData || [];

  return (
    <div className="educationalPageStyle prideofchennaipage px-6 sm:px-10 py-10 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Sticky Filter Bar */}
      <div
        className={`stickyPositionContainer w-full transition-all duration-300 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-3"
            : "relative"
        }`}
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8 chennaiInvestmentsButtons">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`newsLetterButton px-5 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-sm ${
                activeTab === category.value
                  ? "bg-[#a44294] text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-[#a44294]/10 hover:text-[#a44294]"
              }`}
              onClick={() => {
                setActiveTab(category.value);
                setActiveSubTab(category.subcats?.[0]?.name || "");
                window.scrollTo({ top: 500, behavior: "smooth" });
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Subcategory Tabs */}
        {activeCategory?.subcats && (
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 secondButtonFlexpRIDE">
            {activeCategory.subcats.map((sub, index) => (
              <button
                key={index}
                className={`cursor-pointer tabButton px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeSubTab === sub.name
                    ? "bg-[#a44294] text-white shadow-md scale-105"
                    : "bg-gray-200 text-gray-800 hover:bg-[#a44294]/10 hover:text-[#a44294]"
                }`}
                onClick={() => {
                  setActiveSubTab(sub.name);
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cards Section */}
      <section id="fourthSection" ref={mySectionRef}>
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeSubTab}`} // re-renders on tab change
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="prideofchennairow"
            >
              {prideData.map((card, index) => (
                <motion.div
                  key={index}
                  className="prideofchennaicards cursor-pointer group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedCard(card)}
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={`${API_BASE_URL}${card.image?.url || ""}`}
                      alt={card.name}
                      className=" "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#a44294] transition">
                      {card.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {card.nature}
                    </p>
                    <a className="text-[#a44294] font-medium hover:underline cursor-pointer">
                      Know More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Popup Section */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl relative w-[90%] sm:w-auto max-w-lg shadow-2xl border border-gray-100"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#a44294] text-xl"
              >
                ×
              </button>
              <h2 className="text-[#a44294] font-semibold mb-4 text-xl">
                Achievements
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base leading-relaxed">
                {[
                  selectedCard.achievement1,
                  selectedCard.achievement2,
                  selectedCard.achievement3,
                ]
                  .filter(Boolean)
                  .map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
