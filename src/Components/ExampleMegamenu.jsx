import { useState, useEffect } from "react";
import "../assets/Css/ExampleHeader.css";
import MenuBar from "./MenuBar";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../Components/LanguageDropdown/Language"
const menuItems = [
  {
    label: "Live",
    labellink: "/live-in-chennai",
    content: [
      {
        title: "Cost of Living",
        // desc: "Live large without spending big",
        desc: "In Chennai",
        link: "/live/cost-of-living-in-chennai",
      },
      {
        title: "Residency",
        // desc: "Stay your way - flexible and easy",
        desc: "In Chennai",
        link: "/live/residential-properties-in-chennai",
      },
      {
        title: "Employment",
        // desc: "Work where ambition meets opportunity.",
        // desc: "Thriving hub for every professional",
        desc: "In Chennai",
        link: "/live/employment-in-chennai",
      },
      {
        title: "Transportation",
        // desc: "Move smart with global connectivity",
        desc: "In Chennai",
        link: "/live/transportation-in-chennai",
      },
      {
        title: "Healthcare",
        // desc: "Top-tier care, right around the corner",
        desc: "In Chennai",
        link: "/live/healthcare-in-chennai",
      },
      {
        // title: "Cultural Attractions",
        title: "Places of worship",
        // desc: "Heritage vibes with a modern twist",
        desc: "In Chennai",
        link: "/live/worship-in-chennai",
      },
      {
        title: "Things to Do",
        // desc: "Play hard, chill harder",
        desc: "In Chennai",
        link: "/visit/things-to-do-in-chennai",
      },
      {
        title: "Neighbourhood",
        // desc: "Find your vibe, find your tribe",
        desc: "In Chennai",
        link: "/live/places-near-chennai",
      },
      {
        title: "Quality of Life",
        // desc: "Comfort, calm, and city cool",
        desc: "In Chennai",
        link: "/live/quality-of-life-in-chennai",
      },
      {
        title: "Future Forward",
        // title: "Future Growth & Development",

        // desc: "A city that’s always leveling up",
        desc: "In Chennai",
        link: "/live/infrastructure-development-in-chennai",
      },
      {
        title: "Learning Link",
        // title: "Educational Institutions",
        // desc: "Learn big in bold spaces",
        desc: "In Chennai",
        link: "/live/educational-institutions-in-chennai",
      },
    ],
  },
  {
    label: "Visit",
    labellink: "/visit-chennai",
    content: [
      {
        title: "Accommodation",
        // desc: "Cozy, stylish stays in Chennai",
        desc: "In Chennai",
        link: "/visit/hotel-accommodation-in-chennai",
      },
      {
        title: "Restaurants",
        // desc: "Global flavours with local flair",
        desc: "In Chennai",
        link: "/visit/restaurants-in-chennai",
      },
      {
        title: "Things to do",
        // desc: "Make memories across the city",
        desc: "In Chennai",
        link: "/visit/things-to-do-in-chennai",
      },
      {
        title: "Places to Visit",
        // desc: "Explore iconic spots and hidden marvels",
        desc: "In Chennai",
        link: "/visit/places-to-visit-in-chennai",
      },
      {
        title: "Itinerary",
        // desc: "Curated trails for cultural discovery",
        desc: "In Chennai",
        link: "/visit/chennai-itinerary",
      },
      {
        title: "Hidden Gems",
        // desc: "Uncover Chennai’s best-kept secrets",
        desc: "In Chennai",
        link: "/visit/hidden-places-in-chennai",
      },
      {
        title: "Shopping",
        // desc: "Find everything from luxe to local",
        desc: "In Chennai",
        link: "/visit/shopping-areas-in-chennai",
      },
      {
        title: "Travel Tips",
        // desc: "Smart hacks for smooth travel",
        desc: "In Chennai",
        link: "/visit/travels-chennai",
      },
      {
        title: "Wellness",
        // desc: "Refresh with urban wellness escapes",
        desc: "In Chennai",
        link: "/visit/wellness-centres-in-chennai",
      },
      {
        title: "Events",
        // desc: "Catch what’s buzzing right now",
        desc: "In Chennai",
        link: "/visit/events-in-chennai",
      },
      {
        title: "Conferences",
        // desc: "Connect at top business forums",
        desc: "In Chennai",
        link: "/visit/conferences-in-chennai",
      },
    ],
  },
  {
    label: "Work",
    labellink: "/work-in-chennai",
    content: [
      {
        title: "Business Permits",
        // desc: "Hassle-free legal setup guide",
        desc: "In Chennai",
        link: "/work/business-registration-in-chennai",
      },
      {
        title: "Unicorns",
        // desc: "Chennai’s booming startup scene",
        desc: "In Chennai",
        link: "/work/unicorn-startups",
      },
      {
        title: "Co-Working Spaces",
        // desc: "Work smart in flexible shared hubs",
        desc: "In Chennai",
        link: "/work/coworking-space-in-chennai",
      },
      {
        title: "Paying Guest",
        // desc: "Stay affordably with ease",
        desc: "In Chennai",
        link: "/work/pg-in-chennai",
      },
      {
        title: "Pay Perk",
        // desc: "Explore salaries, perks, and benefits",
        desc: "In Chennai",
        link: "/work/chennai-job-salary",
      },
      {
        title: "Career Growth",
        // desc: "Unlock new skills and opportunities",
        desc: "In Chennai",
        link: "/work/job-opportunities-in-chennai",
      },
      {
        title: "Networking",
        // desc: "Grow through real connections",
        desc: "In Chennai",
        link: "/work/chennai-networks",
      },
      {
        title: "Worklife Balance",
        // desc: "Thrive with a balanced lifestyle",
        desc: "In Chennai",
        link: "/work/working-in-chennai",
      },
    ],
  },
  {
    label: "Invest",
    labellink: "/invest-in-chennai",
    content: [
      {
        title: "Real Estate",
        // desc: "Invest smart in property",
        desc: "In Chennai",
        link: "/invest/chennai-real-estate",
      },
      {
        title: "Franchise",
        // desc: "Grow with proven models",
        desc: "In Chennai",
        link: "/invest/franchise-business-in-chennai",
      },
      {
        title: "Startups",
        // desc: "Fuel innovation with smart capital",
        desc: "In Chennai",
        link: "/invest/startup-companies-in-chennai",
      },
      {
        title: "Green Power",
        // desc: "Support clean energy growth",
        desc: "In Chennai",
        link: "/invest/solar-companies-in-chennai",
      },
      {
        title: "Chill Nest",
        // desc: "Retire easy in Chennai",
        desc: "In Chennai",
        link: "/invest/retirement-in-chennai",
      },
      {
        title: "Policy Boost",
        // desc: "Help from government rules",
        desc: "In Chennai",
        link: "/invest/government-projects-in-chennai",
      },
      {
        title: "Legal Flow",
        // desc: "Simplify legal investment steps",
        desc: "In Chennai",
        link: "/invest/law-firms-in-chennai",
      },
      {
        title: "News",
        // desc: "Stay ahead with investment insights",
        desc: "In Chennai",
        link: "/invest/news-in-chennai",
      },
      {
        title: "Events",
        // desc: "Connect, learn, and grow opportunities",
        desc: "In Chennai",
        link: "/invest/chennai-events",
      },
      {
        title: "Exhibitions",
        // desc: "Explore markets, pitch, and invest",
        desc: "In Chennai",
        link: "/invest/exhibitions-in-chennai",
      },
    ],
  },
  {
    label: "Innovate",
    labellink: "/innovate-chennai",
    content: [
      {
        title: "IT & Software",
        // desc: "Build digital-first futures",
        desc: "In Chennai",
        link: "/innovate/it-companies-in-chennai",
      },
      {
        title: "AI",
        // desc: "Automate smarter with intelligence",
        desc: "In Chennai",
        link: "/innovate/ai-companies-in-chennai",
      },
      {
        title: "EV Mobility",
        // desc: "Drive green with tech",
        desc: "In Chennai",
        link: "/innovate/ev-vehicles-in-chennai",
      },
      {
        title: "Smart Cities",
        // desc: "Connect life and tech",
        desc: "In Chennai",
        link: "/innovate/smart-city-chennai",
      },
      {
        title: "Health Tech",
        // desc: "Empower care digitally",
        desc: "In Chennai",
        link: "/innovate/health-tech-in-chennai",
      },
      {
        title: "Robotics",
        // desc: "Optimize with smart machines",
        desc: "In Chennai",
        link: "/innovate/robotics-in-chennai",
      },
      {
        title: "Blockchain",
        // desc: "Safe and smart money tech",
        desc: "In Chennai",
        link: "/innovate/blockchain-course-in-chennai",
      },
      {
        title: "Auto Tech",
        // desc: "Mobility meets innovation",
        desc: "In Chennai",
        link: "/innovate/autotech-chennai",
      },
      {
        title: "Edu Tech ",
        // desc: "Expand smarter learning",
        desc: "In Chennai",
        link: "/innovate/edutech-chennai",
      },
      {
        title: "3D Printing",
        // desc: "Create with precision tech",
        desc: "In Chennai",
        link: "/innovate/3d-printing-in-chennai",
      },
      {
        title: "AR/VR",
        // desc: "Experience new realities",
        desc: "In Chennai",
        link: "/innovate/ar-vr-companies-in-chennai",
      },
      {
        title: "Agri Tech",
        // desc: "Modernize farms smartly",
        desc: "In Chennai",
        link: "/innovate/agri-tech-companies-in-chennai",
      },
    ],
  },
  {
    label: "Volunteer",
    labellink: "/volunteer-in-chennai",

    content: [
      {
        title: "Digital",
        // desc: "Connect and collaborate online",
        desc: "In Chennai",
        link: "/volunteer-in-chennai",
      },
      {
        title: "Events",
        // desc: "Help run volunteer meets",
        desc: "In Chennai",
        link: "/volunteer-in-chennai",
      },
      {
        title: "Content Creators",
        // desc: "Share inspiring volunteer stories",
        desc: "In Chennai",
        link: "/volunteer-in-chennai",
      },
      {
        title: "Design &  Art",
        // desc: "Showcase causes through creativity",
        desc: "In Chennai",
        link: "/volunteer-in-chennai",
      },
      {
        title: "Influencers",
        // desc: "Promote action through your voice",
        desc: "In Chennai",
        link: "/volunteer-in-chennai",
      },
      {
        title: "Mentors",
        // desc: "Guide new volunteer minds",
        desc: "In Chennai",
        link: "/volunteer-in-chennai",
      },
    ],
  },
];

const sectionImageMap = {
  Live: "/images/HomePage-Images/live-MegaMenu.jpg",
  Visit: "/images/HomePage-Images/Visit-MegaMenu.jpg",
  Work: "/images/HomePage-Images/work-MegaMenu.jpg",
  Invest: "/images/HomePage-Images/Invest-MegaMenu.jpg",
  Innovate: "/images/HomePage-Images/Innovate-MegaMenu.jpg",
  Volunteer: "/images/HomePage-Images/Volunteers-MegaMenu.jpg",
};

const FullWidthHeaderMegaMenu = ({ setMenuBar, setMenuBar1 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(
    "/images/FirstSliderImage.png"
  );

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [imageLoaded, setImageLoaded] = useState(false);

  const [mobileAccordionOpenIndex, setMobileAccordionOpenIndex] =
    useState(null);

  // Unique handler name to avoid conflicts
  const handleMobileMenuAccordionToggle = (index) => {
    setMobileAccordionOpenIndex(
      mobileAccordionOpenIndex === index ? null : index
    );
  };
  const handleScrollToSearchForm = () => {
    const element = document.getElementById("SearchForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const [menuBar, setMenuBar] = useState(false);
  const slideInFromLeft = {
    hidden: {
      opacity: 0,
      x: -200, // start far left
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0, // final position
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -100, // exit back to the left
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const toggleMobileAccordion = (index) => {
    setMobileAccordionOpenIndex(
      mobileAccordionOpenIndex === index ? null : index
    );
  };

  useEffect(() => {
    const hasNewMegaMenu = document.querySelector(".Newmegamenu") !== null;
    setIsActive(hasNewMegaMenu);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (activeMenu) {
      const timer = setTimeout(() => setMenuVisible(true), 10); // Trigger .show class
      return () => clearTimeout(timer);
    } else {
      setMenuVisible(false); // Remove .show class immediately
    }
  }, [activeMenu]);

  // Reset imageLoaded whenever hoveredImage changes
  useEffect(() => {
    setImageLoaded(false);
  }, [hoveredImage]);


  



const { t } = useTranslation();


  return (
    <>
     
      <div className="mainMegamenuContainers">
        <header
          className={`mainMegamenuContainer ${scrolled ? "scrolled" : ""}`}
        >
          
          <nav
            // className="Megamenunav"
            className={`Megamenunav ${isHome ? "HomePageStyle" : ""}`}
            onMouseLeave={() => {
              setMenuVisible(false);
              setTimeout(() => setActiveMenu(null), 300);
            }}
          >
            <div
              className={`Megamenutop-bar ${
                activeMenu ? "activeStateMegamenu" : ""
              }`}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                  setMenuVisible(false);
                  window.scrollTo({ top: 0 });
                }}
                className="Megamenulogo"
              ></div>
 {/* <LanguageDropdown/> */}

              <div className="Megamenumenuicon md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? "✖" : "☰"}
                </button>
              </div>

              <div className="MegamenumenuitemsMain">
                <ul className="Megamenumenudesktop">
                  {menuItems.map((item, i) => (
                    <li
                      key={i}
                      className={`Megamenumenuitem ${
                        activeMenu?.label === item.label
                          ? "activeMegamenuSection"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveMenu(item);
                        setMenuVisible(false);
                        navigate(item.labellink);
                        window.scrollTo({ top: 0 });
                      }}
                      onMouseEnter={() => {
                        setActiveMenu(item);
                        setMenuVisible(true);
                        setHoveredImage(
                          sectionImageMap[item.label] ||
                            "/images/FirstSliderImage.png"
                        );
                      }}
                    >
                      <span>
                        {item.label}
                        <p className="navitemsArrowpart"></p>
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
              <div
                style={{ cursor: "pointer" }}
                className="Megamenulogo1 hidden md:block"
                onClick={() => setMenuBar(true)}
              >
                MENU
              </div>
                             

            </div>
            {activeMenu && (
              <div
                className={`Newmegamenu hidden md:block ${
                  menuVisible ? "show" : ""
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMenu.label}
                    className="megamenuMainContainer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="Newmegamenuinner">
                      {activeMenu.content.map((block, index) => (
                        <div
                          key={index}
                          className="mega-link-wrapper"
                          onClick={() => {
                            navigate(block.link);
                            setMenuVisible(false);
                            window.scrollTo({ top: 0 });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <h4 className="mega-block-title">
                            {block.title.length > 15 &&
                            block.title.includes(" ")
                              ? (() => {
                                  const words = block.title.split(" ");
                                  const mid = Math.floor(words.length / 2);
                                  const before = words.slice(0, mid).join(" ");
                                  const after = words.slice(mid).join(" ");
                                  return (
                                    <>
                                      {before}
                                      <br />
                                      {after}
                                    </>
                                  );
                                })()
                              : block.title}
                          </h4>

                          <p className="mega-block-desc">{block.desc}</p>
                        </div>
                      ))}
                    </div>
                    <img
                      className="megamenuMainImage"
                      src={hoveredImage}
                      alt=""
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {mobileMenuOpen && (
              <div className="mobile-menu md:hidden">
                {menuItems.map((item, i) => (
                  <div key={i} className="mobile-section">
                    {/* Clickable main topic with icon */}
                    <div
                      onClick={() => handleMobileMenuAccordionToggle(i)}
                      className="mobile-title cursor-pointer flex justify-between items-center"
                    >
                      <span>{item.label}</span>
                      <span className="text-xl">
                        {mobileAccordionOpenIndex === i ? "−" : "+"}
                      </span>
                    </div>

                    {/* Accordion content */}
                    {mobileAccordionOpenIndex === i && (
                      <div className="mobile-content">
                        {item.content.map((block, j) => (
                          <Link
                            to={block.link}
                            key={j}
                            className="mobile-link-wrapper"
                          >
                            <p className="mobile-subtitle">{block.title}</p>
                            <p className="mobile-subdesc">{block.desc}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="Mobileheader">
              <div className="mobilesvgSize">
                <Link to="/events">
                  <img
                    src="/images/HomePage-Images/Icons/mobile-Header-Events.svg"
                    alt="chennai events "
                  />
                </Link>
              </div>
              <div className="mobilesvgSize">
                <Link to="mailto:hello@superchennai.com">
                  <img
                    src="/images/HomePage-Images/Icons/mobile-Header-Email.svg"
                    alt="email "
                  />
                </Link>
              </div>

              <div className="mobilesvgSize">
                <Link to="/">
                  <img
                    src="/images/HomePage-Images/Superchennai.png"
                    alt="Super Chennai"
                  />
                </Link>
              </div>

              <div className="mobilesvgSize" onClick={handleScrollToSearchForm}>
                <img
                  onClick={() => setMenuBar1(true)}
                  src="/images/HomePage-Images/Icons/mobile-Header-Search.svg"
                  alt="search in chennai"
                />
              </div>
              <div className="mobilesvgSize">
                <img
                  onClick={() => setMenuBar(true)}
                  src="/images/HomePage-Images/Icons/mobile-Header-Hamburger.svg"
                  alt="chennai humburger"
                />
              </div>
            </div>

            {/* <div className="SearchMobileBg">
              <div className="SearchMobileSection">
                <Search />
              </div>
            </div> */}
          </nav>
        </header>
      </div>
    </>
  );
};

export default FullWidthHeaderMegaMenu;
