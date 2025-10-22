import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InvestSlider from "./InvestSlider";

export default function InvestRenewableEnergyChennai() {
  const investmentCategories = [
    "Solar Power Projects",
    "Wind Energy Farms",
    "Renewable Energy",
  ];
  // Step 2: Category description mapping
  const categoryInfo = {
    "Solar Power Projects": {
      title: "Solar Power Projects",
      description:
        "Numerous residential, business, and industrial districts are concentrated in Chenani. Make the most of sunshine by investing in solar projects and putting them into place wherever they can save power costs and increase your revenue.",
    },
    "Wind Energy Farms": {
      title: "Wind Energy Farms",
      description:
        "Investigate prospective wind power generation prospects in areas close to Chennai with abundant wind resources, then make an investment.",
    },
    "Renewable Energy": {
      title: "Renewable Energy",
      description:
        "Renewable energy technologies are now gaining popularity in Chennai; investigating and making an investment in this energy will yield long-term financial gains.",
    },
  };
  const buildingData = [
    {
      title: "Rooftop Solar Installations",
      category: "Solar Power Projects",
      description:
        "Take advantage of these government programs and save power costs for property owners by installing them where they are required.",
      image: "/images/Invest-Images/SubPages/solar/rooftop.jpg",
      imgAlt: "solar companies in chennai",
    },
    {
      title: "Ground-mounted Solar Farms",
      category: "Solar Power Projects",
      description:
        "Create a revenue stream and provide clean energy to the grid for huge utility-scale projects.",
      image: "/images/Invest-Images/SubPages/solar/ground.jpg",
      imgAlt: "ground mounted solar",
    },
    {
      title: "Solar Power for Industrial Units",
      category: "Solar Power Projects",
      description:
        "Ambattur, Guindy, and Sriperumbudur are among the industrial estates that require solar electricity the most. You are able to supply manufacturers with sustainable and reasonably priced power solutions.",
      image: "/images/Invest-Images/SubPages/solar/industrial.jpg",
      imgAlt: "solar companies in chennai",
    },
    {
      title: "Solar-Powered Water Pumps",
      category: "Solar Power Projects",
      description:
        "To promote sustainable irrigation and lessen dependency on conventional power sources, you can target and install solar electricity in Chennai's agricultural areas.",
      image: "/images/Invest-Images/SubPages/solar/water-pumps.jpg",
      imgAlt: "solar water pump",
    },
    {
      title: "Hospitals and Educational Institutions",
      category: "Solar Power Projects",
      description:
        "Support green projects in vital service sectors, including blood banks, medical clinics, labs, hospitals, and educational institutions.",
      image: "/images/Invest-Images/SubPages/solar/hospitals.jpg",
      imgAlt: "chennai hospitals",
    },

    {
      title: "Wind Farms",
      category: "Wind Energy Farms",
      description:
        "These are places where wind speeds are feasible, maybe along the coast or in mountainous terrain. Invest in this firm and learn how to use wind to create power.",
      image: "/images/Invest-Images/SubPages/wind/wind-farms.jpg",
      imgAlt: "",
    },
    {
      title: "Wind-solar Hybrid Projects",
      category: "Wind Energy Farms",
      description:
        "By combining solar and wind energy, these projects optimize energy production and grid stability.",
      image: "/images/Invest-Images/SubPages/wind/wind-solar.jpg",
      imgAlt: "",
    },
    {
      title: "Small Wind Turbines",
      category: "Wind Energy Farms",
      description:
        "You could provide localized Renewable Energy solutions with these wind turbines, which are best suited for individual usage in coastal or elevated locations.",
      image: "/images/Invest-Images/SubPages/wind/small-wind-turbines.jpg",
      imgAlt: "",
    },
    {
      title: "Wind Turbine Installation and Maintenance",
      category: "Wind Energy Farms",
      description:
        "Installing and maintaining wind turbines is appropriate for industrial locations where you can support the infrastructure for wind energy.",
      image: "/images/Invest-Images/SubPages/wind/installation-maintenance.jpg",
      imgAlt: "",
    },
    {
      title: "Research and Development",
      category: "Wind Energy Farms",
      description:
        "To support industry improvements, if you are currently operating a wind energy installation, you can invest in research and development in academic and industrial areas.",
      image: "/images/Invest-Images/SubPages/wind/research-and-development.jpg",
      imgAlt: "",
    },

    {
      title: "Biomass Energy",
      category: "Renewable Energy",
      description:
        "You could install it for landowners or turn agricultural waste into electricity if you own agricultural property.",
      image: "/images/Invest-Images/SubPages/renewable/biomass-energy.jpg",
      imgAlt: "",
    },
    {
      title: "Waste-to-Energy Plants",
      category: "Renewable Energy",
      description:
        "Municipal solid waste may be converted into energy for use in a variety of ways. It is intended for use in industrial areas.",
      image: "/images/Invest-Images/SubPages/renewable/waste-to-energy.jpg",
      imgAlt: "",
    },
    {
      title: "Energy Storage Solutions",
      category: "Renewable Energy",
      description:
        "They facilitate the effective use of renewable energy sources and system stability. Putting money into this might benefit multiple organizations in different parts of Chennai.",
      image: "/images/Invest-Images/SubPages/renewable/energy-storage.jpg",
      imgAlt: "",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Solar Power Projects"
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
        <title>Solar Companies in Chennai | Chennai Wind Energy</title>
        <meta
          name="description"
          content="Invest smart with solar companies in Chennai that provide sustainable energy solutions, ensuring long-term savings and eco-friendly growth."
        />
        <link rel="canonical" href="/invest/solar-companies-in-chennai" />
      </Helmet>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img
            src="/images/Invest-Images/SubPages/renewable-energy-banner.jpg"
            alt="investment companies in chennai"
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Renewable Energy</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai"> Invest </Link> -{" "}
              <span>Renewable Energy</span>{" "}
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
              Invest &nbsp; Renewable Energy &nbsp; in Chennai &nbsp; Invest
              &nbsp; Renewable Energy &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h1>Renewable Energy in Chennai</h1>
            <h1 className="hidden"> Solar Panel Installation in Chennai</h1>
            <h1 className="hidden"> Wind Energy in Chennai</h1>
            <p>
              Chennai offers a wealth of Renewable Energy investment prospects.
              Investigate wind energy along the shore. Study up on
              waste-to-energy. Promising prospects include a sustainable future
              and long-term profits.
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
                  <div className="bulidingSection" key={index}>
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
                          style={{ cursor: "default" }}
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
