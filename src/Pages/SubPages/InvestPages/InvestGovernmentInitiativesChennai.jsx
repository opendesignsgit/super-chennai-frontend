import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Helmet } from "react-helmet-async";
import InvestSlider from "./InvestSlider";

export default function InvestGovernmentInitiativesChennai() {
  const investmentCategories = [
    "Infrastructure Development Projects",
    "Industrial and Economic Growth Schemes",
    "Social and Welfare Programs",
  ];
  // Step 2: Category description mapping
  const categoryInfo = {
    "Infrastructure Development Projects": {
      title: "Infrastructure Development Projects",
      description:
        "Invest in this for Chennai's infrastructure development, connectivity, and economic expansion.",
    },
    "Industrial and Economic Growth Schemes": {
      title: "Industrial and Economic Growth Schemes",
      description:
        "Examine the potential presented by government programs aimed at promoting economic growth.",
    },
    "Social and Welfare Programs": {
      title: "Social and Welfare Programs",
      description:
        "Consider emphasizing the well-being and quality of life of Chennai's citizens. For greater profits, you could make investments here since the government plans several projects in this area.",
    },
  };
  const buildingData = [
    {
      title: "Metro Rail Expansion",
      category: "Infrastructure Development Projects",
      description:
        "Chennai would gain from better public transit and higher property values along metro lines, which will also bring in money for you as an investor.",
      image: "/images/Invest-Images/SubPages/Infrastructure/metro.jpg",
      imgAlt: "chennai metro",
    },
    {
      title: "New Flyovers and Roads",
      category: "Infrastructure Development Projects",
      description:
        "Support initiatives to improve commuting times and lessen traffic congestion by building new flyovers and roads.",
      image: "/images/Invest-Images/SubPages/Infrastructure/new-flyovers.jpg",
      imgAlt: "",
    },
    {
      title: "Drainage and Flood Management",
      category: "Infrastructure Development Projects",
      description:
        "Enhance the city's resilience and lower the dangers of floods by wastewater management.",
      image: "/images/Invest-Images/SubPages/Infrastructure/drainage.jpg",
      imgAlt: "",
    },
    {
      title: "Multimodal Transportation Hubs",
      category: "Infrastructure Development Projects",
      description:
        "Take part in hubs that combine different transportation options, such as Guindy.",
      image: "/images/Invest-Images/SubPages/Infrastructure/multimodal.jpg",
      imgAlt: "chennai bus terminal",
    },
    {
      title: "Adyar River Restoration",
      category: "Infrastructure Development Projects",
      description:
        "By improving the city's green areas and attractiveness, you can encourage environmental projects.",
      image: "/images/Invest-Images/SubPages/Infrastructure/adyar-river.jpg",
      imgAlt: "adyar river",
    },

    {
      title: "Fintech City Development",
      category: "Industrial and Economic Growth Schemes",
      description:
        "Invest in Chennai's development as a major worldwide center for financial services.",
      image: "/images/Invest-Images/SubPages/Industrial/fintech.jpg",
      imgAlt: "",
    },
    {
      title: "Aerospace",
      category: "Industrial and Economic Growth Schemes",
      description:
        "Select the Aerospace and Defense Park (Sriperumbudur) and encourage the growth of the aerospace industry.",
      image: "/images/Invest-Images/SubPages/Industrial/aerospace.jpg",
      imgAlt: "",
    },
    {
      title: "Tamil Nadu Defence Industrial Corridor",
      category: "Industrial and Economic Growth Schemes",
      description:
        "You could get your return on investment by investing in research, even in defense management.",
      image: "/images/Invest-Images/SubPages/Industrial/tamilnadu-defence.jpg",
      imgAlt: "",
    },
    {
      title: "Micro, Small, and Medium-sized Companies (MSMEs)",
      category: "Industrial and Economic Growth Schemes",
      description:
        "Invest in and support small businesses so they may expand and reap future benefits.",
      image: "/images/Invest-Images/SubPages/Industrial/micro.jpg",
      imgAlt: "",
    },

    {
      title: "Affordable Housing Projects",
      category: "Social and Welfare Programs",
      description:
        "To meet the rising demand for reasonably priced living spaces, they will be built in Chennai's suburbs.",
      image: "/images/Invest-Images/SubPages/Social/affordable.jpg",
      imgAlt: "",
    },
    {
      title: "Healthcare Infrastructure",
      category: "Social and Welfare Programs",
      description:
        "Fund projects that promote public health and well-being by enhancements.",
      image: "/images/Invest-Images/SubPages/Social/healthcare.jpg",
      imgAlt: "",
    },
    {
      title: "Education and Skill Development",
      category: "Social and Welfare Programs",
      description:
        "It helps children in government schools learn; thus, investing here will be the greatest option.",
      image: "/images/Invest-Images/SubPages/Social/education.jpg",
      imgAlt: "",
    },
    {
      title: "Waste Management",
      category: "Social and Welfare Programs",
      description:
        "Projects pertaining to environmental sustainability are carried out in specific areas where you can get involved and take part in initiatives aimed at creating a cleaner, greener city.",
      image: "/images/Invest-Images/SubPages/Social/waste.jpg",
      imgAlt: "",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Infrastructure Development Projects"
  );
  const filteredBuildings = buildingData.filter(
    (item) => item.category === selectedCategory
  );
  const categoryContent = categoryInfo[selectedCategory];

  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const accordionRefs = useRef([]);

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

  return (
    <>
      <Helmet>
        <title>Government Projects in Chennai - Super Chennai</title>
        <meta
          name="description"
          content="With progressive government projects in Chennai, the city is evolving into a business-friendly, sustainable, and globally competitive investment destination."
        />
        <link rel="canonical" href="/invest/government-projects-in-chennai" />
      </Helmet>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img
            src="/images/Invest-Images/SubPages/mepz-banner.jpg"
            alt="investment in chennai"
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Government Initiatives</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai"> Invest </Link> -{" "}
              <span>Government Initiatives</span>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*----------------Accodimation-Banner----------- */}

      <div className="visitIntroParaSection detailIntro">
        <div className="container max-w-7xl mx-auto px-4">
          <div
            className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
          >
            <p>
              Invest &nbsp; Government Initiatives &nbsp; in Chennai &nbsp;
              Invest &nbsp; Government Initiatives &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h3>Invest in Government Initiatives in Chennai</h3>
            <p>
              Creating a Future-Ready City for Investors, Innovators &
              Industries Chennai stands as a strategic destination for
              investment, empowered by progressive government initiatives aimed
              at making the city business-friendly, sustainable, and globally
              competitive. From digital transformation to industrial corridor
              development, the Tamil Nadu Government and local agencies are
              driving reforms and incentives across sectors.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
          <div className="Tabs-wrapper ">
            <div className="chennaiInvestmentsButtons justify-center">
              {investmentCategories.map((category, index) => (
                <button
                  key={index}
                  className={category === selectedCategory ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="tabscontainer">
              {categoryContent && (
                <div className="category-info mt-[8vh] flex flex-col items-center w-[80%] text-center mx-auto">
                  <h2 className="text-4xl space-x-0.5 font-bold mb-[10px] text-[#a44294]">
                    {categoryContent.title}
                  </h2>
                  <p>{categoryContent.description}</p>
                </div>
              )}
              <div className="buildingSectionFlex">
                {filteredBuildings.map((item, index) => (
                  <div
                    className="bulidingSection"
                    key={index}
                    style={{ cursor: "default" }}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div
                          className="builidngContent"
                          style={{ cursor: "default" }}
                        >
                          <h3>{item.title}</h3>
                          <h5>{item.description}</h5>
                        </div>
                        <img
                          className="buildingImage"
                          src={item.image}
                          alt={item.imgAlt}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="buildingImage1"
                          src={item.image}
                          alt={item.imgAlt}
                          style={{ cursor: "default" }}
                        />
                        <div
                          className="builidngContent1"
                          style={{ cursor: "default" }}
                        >
                          <h3>{item.title}</h3>
                          <h5>{item.description}</h5>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-wrapper space-y-4 mt-10">
            {investmentCategories.map((category, index) => {
              const isOpen = selectedCategory === category;
              const buildings = buildingData.filter(
                (item) => item.category === category
              );
              const content = categoryInfo[category];

              const handleAccordionClick = () => {
                if (!isOpen) {
                  setSelectedCategory(category);

                  // Scroll into view after state update
                  setTimeout(() => {
                    accordionRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                } else {
                  setSelectedCategory(""); // collapse on second click
                }
              };

              return (
                <div
                  key={index}
                  ref={(el) => (accordionRefs.current[index] = el)}
                  className="accordion-item border border-gray-300 rounded-lg overflow-hidden"
                >
                  <button
                    className={`w-full text-left px-4 py-3 font-semibold bg-[#f7f7f7] hover:bg-[#eaeaea] transition duration-200 ${
                      isOpen ? "text-[#a44294]" : "text-gray-800"
                    }`}
                    onClick={handleAccordionClick}
                  >
                    {category}
                  </button>

                  {isOpen && (
                    <div className="accordion-content px-4 py-4">
                      {content && (
                        <div className="mb-6 text-center">
                          <h2 className="text-2xl font-bold text-[#a44294] mb-2">
                            {content.title}
                          </h2>
                          <p>{content.description}</p>
                        </div>
                      )}

                      <div className="buildingSectionFlex flex gap-6">
                        {buildings.map((item, idx) => (
                          <div
                            className="bulidingSection flex flex-col items-center"
                            key={idx}
                          >
                            {idx % 2 === 0 || window.innerWidth < 768 ? (
                              <>
                                <div className="builidngContent">
                                  <h3 className="text-xl font-semibold">
                                    {item.title}
                                  </h3>
                                  <h5 className="text-gray-600">
                                    {item.description}
                                  </h5>
                                </div>
                                <img
                                  className="buildingImage w-full md:w-1/2 "
                                  src={item.image}
                                  alt={item.imgAlt}
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  className="buildingImage1 w-full md:w-1/2 "
                                  src={item.image}
                                  alt={item.imgAlt}
                                />
                                <div className="builidngContent1">
                                  <h3 className="text-xl font-semibold">
                                    {item.title}
                                  </h3>
                                  <h5 className="text-gray-600">
                                    {item.description}
                                  </h5>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/*--------------- Explore More Chennai----------------- */}

        <InvestSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
