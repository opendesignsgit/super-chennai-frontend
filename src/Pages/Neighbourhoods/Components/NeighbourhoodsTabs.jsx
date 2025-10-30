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
    <div className="educationalPageStyle prideofchennaipage">
      {/* Sticky Filter Bar */}
      <div
        className={`stickyPositionContainer w-full transition-transform duration-300 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
            : "relative"
        }`}
      >
        {/* Category Tabs */}
        <div className="flex justify-center mb-8 chennaiInvestmentsButtons">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`newsLetterButton ${
                activeTab === category.value ? "active" : ""
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
          <div className="flex justify-center gap-4 mb-6 secondButtonFlexpRIDE">
            {activeCategory.subcats.map((sub, index) => (
              <button
                key={index}
                className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
                  activeSubTab === sub.name
                    ? "!bg-[#a44294] text-white"
                    : "bg-gray-200 text-gray-800"
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
          <div className="prideofchennairow">
            {prideData.map((card, index) => (
              <div
                key={index}
                className="prideofchennaicards cursor-pointer"
                onClick={() => setSelectedCard(card)}
              >
                <div className="pride-cards-image">
                  <img
                    src={`${API_BASE_URL}${card.image?.url || ""}`}
                    alt={card.name}
                  />
                </div>
                <h3>{card.name}</h3>
                <p>{card.nature}</p>
                <a className="cursor-pointer">Know More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Section */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl relative w-auto max-w-lg"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
              >
                ×
              </button>
              <h2 className="text-[#a44294] font-semibold mb-4 text-lg">
                Achievements
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
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
