import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InvestSlider from "./InvestSlider";

export default function InvestStartupsChennai() {
  const investmentCategories = [
    "Emerging tech sectors",
    "Growth-Stage Investment Areas",
  ];
  // Step 2: Category description mapping
  const categoryInfo = {
    "Emerging tech sectors": {
      title: "Emerging tech sectors",
      description:
        "If you provide exceptional customer service, investing your money to launch new businesses in technology-related disciplines will generate revenue.",
    },
    "Growth-Stage Investment Areas": {
      title: "Growth-Stage Investment Areas",
      description:
        "You can additionally invest money into places where the commercial sector is just starting out and developing in order to achieve growth success, which calls for bigger investments.",
    },
  };
  const buildingData = [
    {
      title: "SaaS",
      category: "Emerging tech sectors",
      description:
        "Software development is a one-time expenditure. However, it can provide you with lifetime income.",
      image: "/images/Invest-Images/SubPages/Emerging-tech/saas.jpg",
      imgAlt: "saas companies in chennai",
      link: "/IT-ITeS-SaaS",
    },
    {
      title: "Fintech",
      category: "Emerging tech sectors",
      description:
        "Establishing a financial business and charging interest will increase revenue.",
      image: "/images/Invest-Images/SubPages/Emerging-tech/fintech.jpg",
      imgAlt: "fintech chennai",
      link: "/Fintech-in-Chennai",
    },
    {
      title: "Health",
      category: "Emerging tech sectors",
      description:
        "As the healthcare sector expands, opening a business in a medically linked area, like a medical store or blood research facility, will be a wise choice.",
      image: "/images/Invest-Images/SubPages/Emerging-tech/health.jpg",
      imgAlt: "multispeciality hospital chennai",
      link: "/live/healthcare-in-chennai",
    },

    {
      title: "EdTech",
      category: "Emerging tech sectors",
      description:
        "Aspirants in their desired niches are drawn to academies that deal with both IT and non-IT, TNPSC coaching centers, and tuition centers.",
      image: "/images/Invest-Images/SubPages/Emerging-tech/edtech.jpg",
      imgAlt: "edutech chennai",
      link: "/EduTech",
    },

    {
      title: "Deep tech and AI",
      category: "Emerging tech sectors",
      description:
        "Chennai government provides strong support policies in this sector for startups. This metropolis also provides skilled professionals, and strong infrastructure",
      image: "/images/Invest-Images/SubPages/Emerging-tech/Depp-Tech-AI.jpg",
      imgAlt: "innovation in chennai",
      link: "/DeepTech-AI-Startups-in-Chennai",
    },
    {
      title: "Direct-to-Consumer (D2C) and e-commerce",
      category: "Growth-Stage Investment Areas",
      description:
        "Find and fund e-commerce sites that have already amassed a sizable and devoted clientele.",
      image: "/images/Invest-Images/SubPages/Growth-Stage/direct.jpg",
      imgAlt: "",
    },
    {
      title: "Logistics and Supply Chain Tech",
      category: "Growth-Stage Investment Areas",
      description:
        "You can also make investments in logistics and supply chain technology in Chennai, a major metropolis where a lot of people import and export goods.",
      image: "/images/Invest-Images/SubPages/Growth-Stage/logistics.jpg",
      imgAlt: "",
    },
    {
      title: "Consumer internet platforms",
      category: "Growth-Stage Investment Areas",
      description:
        "finding and supporting consumer online platforms that have already drawn a sizable user base and shown engagement.",
      image: "/images/Invest-Images/SubPages/Growth-Stage/consumer.jpg",
      imgAlt: "",
    },
    {
      title: "Automotive",
      category: "Growth-Stage Investment Areas",
      description:
        "Chennai offers prime automotive investment opportunities, driven by its robust ecosystem, skilled workforce, and government support.",
      image: "/images/Invest-Images/SubPages/Growth-Stage/Automotive-img.jpg",
      imgAlt: "",
      link: "/Automotive",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Emerging tech sectors"
  );
  const filteredBuildings = buildingData.filter(
    (item) => item.category === selectedCategory
  );
  const categoryContent = categoryInfo[selectedCategory];

  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

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
        <title>Startup Companies in Chennai - Super Chennai</title>
        <meta
          name="description"
          content="Startup companies in Chennai bring together talent, innovation, and investment, making the city a hub for entrepreneurs and business growth."
        />
        <link rel="canonical" href="/invest/startup-companies-in-chennai" />
      </Helmet>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img
            src="/images/Invest-Images/SubPages/startups-banner.jpg"
            alt="best investment in chennai"
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Startups</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai"> Invest </Link> -{" "}
              <span>Startups</span>{" "}
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
              Invest &nbsp; in Startups &nbsp; in Chennai &nbsp; Invest &nbsp;
              in Startups &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h1>Startups in Chennai</h1>
            <p>
              If you have expertise in any service or product, you can start
              your own business in an area where your target market is present
              and you can begin making money from the service you offer.
              Investing in a Chennai startup now might significantly increase
              your brand's future growth.
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
                    onClick={() => {
                      navigate(item.link);
                      window.scrollTo({ top: 0 });
                    }}
                    className="bulidingSection"
                    key={index}
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
                            onClick={() => {
                              navigate(item.link);
                              window.scrollTo({ top: 0 });
                            }}
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
                                  className="buildingImage w-full md:w-1/2"
                                  src={item.image}
                                  alt={item.imgAlt}
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  className="buildingImage1 w-full md:w-1/2"
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
