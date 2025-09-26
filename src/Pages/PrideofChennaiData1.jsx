import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { prideofchennaidata } from "../Pages/EventData";

export default function PrideofChennaiData() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const [isSticky, setIsSticky] = useState(false);
  const bgTextRef = useRef(null);
  const [activeSection, setActiveSection] = useState("IB Schools");
  const [activeSection1, setActiveSection1] = useState("Top Colleges");
  const [selectedTabForScroll, setSelectedTabForScroll] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("left");
      } else {
        setScrollDir("right");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  const categories = [
    {
      label: "Sports",
      value: "sports",
      subcategories: [
        "Cricketers",
        "Chess",
        "Tennis",
        "Table Tennis",
        "Squash",
        "Football",
        "Bodybuilding",
      ],
    },
    {
      label: "Entertainment",
      value: "entertainment",
      subcategories: ["Films", "Music", "Dance"],
    },
    {
      label: "Culture & Religion",
      value: "culture_religion",
      subcategories: ["Religion", "Culture", "Social", "Tech", "Culture"],
    },
    {
      label: "Social / Tech / Chef",
      value: "social_tech_chef",
      subcategories: ["Social", "Tech", "Chef"],
    },
    {
      label: "Science and Research",
      value: "science_research",
      subcategories: ["Science", "Research"],
    },
    {
      label: "Beauty & Fitness",
      value: "beauty_fitness",
      subcategories: [" Makeup Artists"],
    },
  ];

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(categories[0].value);
  const [activeSubTab, setActiveSubTab] = useState(
    categories[0].subcategories[0]
  );

  const activeCategory = categories.find((cat) => cat.value === activeTab);

  // const prideofchennaidata = [
  //   {
  //     image: "/images/pride-of-chennai/ashwin-pride.jpg",
  //     name: "Mahesh Bhupathi - (Grand Slam Tennis Player)",
  //     profession: "Chennai, Tamil Nadu.",
  //     bornPlace: "Chennai, Tamil Nadu",
  //     natureofWork: "Right-arm off-spin bowler, Right-hand lower-order batsman",
  //     about:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
  //     knowmoreLink: "",
  //     popupContent: [
  //       <>
  //         Ravichandran Ashwin's achievements include being the fastest Indian to
  //         500 Test wickets, the only Indian to score a century and take five
  //         wickets in the same Test on four occasions, holding the record for the
  //         most Test wickets taken by an Indian bowler in India (383), and being
  //         a key all-rounder with over 3,000 Test runs and over 750 international
  //         wickets combined.
  //       </>,
  //       <>
  //         He is also recognized for his unique bowling style, including the
  //         "carrom ball," and his success across various formats of the game.
  //       </>,
  //     ],

  //     category: "Cricketers",
  //   },
  // ];

  const handleCategoryClick = (category) => {
    setActiveTab(category.value);
    setActiveSubTab(category.subcategories[0]); // Auto-select first subcategory
    // setSelectedCard(pride);
  };

  useEffect(() => {
    const selectedCategory = categories.find((cat) => cat.value === activeTab);
    if (selectedCategory && selectedCategory.subcategories?.length > 0) {
      setActiveSubTab(selectedCategory.subcategories[0]);
    } else {
      setActiveSubTab("");
    }
  }, [activeTab]);

  // useEffect(() => {
  //   if (popupIsOpen) {
  //     document.body.classList.add("popup-open");
  //   } else {
  //     document.body.classList.remove("popup-open");
  //   }
  // }, [popupIsOpen]);

  const handleStickyScroll = () => {
    const section = document.getElementById("fourthSection");
    if (section) {
      const top = section.getBoundingClientRect().top;
      setIsSticky(top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);
  // Load from localStorage on mount
  return (
    <>
      <div className="educationalPageStyle prideofchennaipage">
        <div
          className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
            isSticky
              ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
              : "relative"
          }`}
        >
          <div className="flex justify-center mb-8 chennaiInvestmentsButtons">
            {categories.map((category) => (
              <button
                style={{ fontWeight: "500" }}
                key={category.value}
                className={`newsLetterButton ${
                  activeTab === category.value ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab(category.value);
                  setActiveSubTab("");
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {activeCategory.subcategories && (
            <div className="flex justify-center gap-4 mb-6">
              {activeCategory.subcategories.map((sub, index) => (
                <button
                  key={index}
                  className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
                    activeSubTab === sub
                      ? "!bg-[#a44294] text-white !font-medium"
                      : "bg-gray-200 text-gray-800 !font-medium"
                  }`}
                  onClick={() => setActiveSubTab(sub)}
                >
                  {sub}
                  {console.log(sub)}
                </button>
              ))}
            </div>
          )}
        </div>

        <section id="fourthSection" className="pridepfchennaisection">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className="prideofchennairow"
              onClick={() => setSelectedCard(card)}
            >
              {prideofchennaidata
                .filter(
                  (pride) =>
                    activeSubTab === "" || pride.category === activeSubTab
                )
                .map((pride) => (
                  <div
                    className="prideofchennaicards cursor-pointer"
                    key={pride.name}
                    // onClick={() => setSelectedCard(pride)}
                    onClick={() => {
                      setSelectedCard(pride);
                      handleCategoryClick(category);
                    }}
                  >
                    <div className="pride-cards-image">
                      <img src={pride.image} alt={pride.name} />
                    </div>
                    <h3>{pride.name}</h3>
                    <h5>{pride.profession}</h5>
                    <p>{pride.natureofWork}</p>
                    <a
                      className="cursor-pointer"
                      onClick={() => setSelectedCard(card)}
                    >
                      Know More
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 prideofchenaipopoupsection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl w-auto relative popupSection"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="relative max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex">
                  {/* Blue Curved Strip */}
                  <div className="w-2 rounded-l-xl bg-[#a44294]"></div>

                  {/* Content */}
                  <div className="relative w-full p-6">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-semibold popupTableCloseButton"
                    >
                      ×
                    </button>

                    {/* Title */}
                    <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
                      Achievements
                    </h2>

                    {/* Bullet List */}
                    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed">
                      {selectedCard.popupContent.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
