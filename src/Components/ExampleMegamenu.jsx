import { useState, useEffect, useRef } from "react";
import "../assets/Css/ExampleHeader.css";
import MenuBar from "./MenuBar";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";
import { useTranslation } from "react-i18next";

import LoginIcon from "../../public/images/icons/user.svg";
import LoginIcon1 from "../../public/images/icons/user-mobile.svg";
// import LoginOtpModal from "../Pages/Auth/Loginsdfsdfsdf";

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
  // {
  //   label: "Volunteer",
  //   labellink: "/volunteer-in-chennai",

  //   content: [
  //     {
  //       title: "Digital",
  //       // desc: "Connect and collaborate online",
  //       desc: "In Chennai",
  //       link: "/volunteer-in-chennai",
  //     },
  //     {
  //       title: "Events",
  //       // desc: "Help run volunteer meets",
  //       desc: "In Chennai",
  //       link: "/volunteer-in-chennai",
  //     },
  //     {
  //       title: "Content Creators",
  //       // desc: "Share inspiring volunteer stories",
  //       desc: "In Chennai",
  //       link: "/volunteer-in-chennai",
  //     },
  //     {
  //       title: "Design &  Art",
  //       // desc: "Showcase causes through creativity",
  //       desc: "In Chennai",
  //       link: "/volunteer-in-chennai",
  //     },
  //     {
  //       title: "Influencers",
  //       // desc: "Promote action through your voice",
  //       desc: "In Chennai",
  //       link: "/volunteer-in-chennai",
  //     },
  //     {
  //       title: "Mentors",
  //       // desc: "Guide new volunteer minds",
  //       desc: "In Chennai",
  //       link: "/volunteer-in-chennai",
  //     },
  //   ],
  // },
   {
    label: "Arattai",
    labellink: "/arattai-with-aruna-sairam/carnatic-vocalist",
    content: [
      {
        title: "",
        desc: "",
        link: "",
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
   Arattai: "/images/aruna-inne-main-image-ham.jpeg",

};
const FullWidthHeaderMegaMenu = ({ setMenuBar, setMenuBar1 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(
    "/images/FirstSliderImage.png",
  );
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mobileAccordionOpenIndex, setMobileAccordionOpenIndex] =
    useState(null);
  const [open, setOpen] = useState(false);

  const [openCanva, setOpenMyAccount] = useState(false);

  const handleMobileMenuAccordionToggle = (index) => {
    setMobileAccordionOpenIndex(
      mobileAccordionOpenIndex === index ? null : index,
    );
  };
  const handleScrollToSearchForm = () => {
    const element = document.getElementById("SearchForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      mobileAccordionOpenIndex === index ? null : index,
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
      const timer = setTimeout(() => setMenuVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setMenuVisible(false);
    }
  }, [activeMenu]);

  useEffect(() => {
    setImageLoaded(false);
  }, [hoveredImage]);
  const { t } = useTranslation();

  const [user, setUser] = useState(null);

  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const checkAuth = () => {
    return !!localStorage.getItem("token");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(checkAuth);
  useEffect(() => {
    setIsLoggedIn(checkAuth());
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // destroy token
    localStorage.removeItem("user"); // optional
    setIsLoggedIn(false);
    setOpenMyAccount(false);
    navigate("/"); // redirect
  };

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
                      // onMouseEnter={() => {
                      //   setActiveMenu(item);
                      //   setMenuVisible(true);
                      //   setHoveredImage(
                      //     sectionImageMap[item.label] ||
                      //       "/images/FirstSliderImage.png",
                      //   );
                      // }}
                         onMouseEnter={() => {
                        // Only show mega menu if the item has content
                        if (item.content && item.content.length > 0) {
                          setActiveMenu(item);
                          setMenuVisible(true);
                          setHoveredImage(
                            sectionImageMap[item.label] ||
                              "/images/FirstSliderImage.png",
                          );
                        }
                      }}
                    >
                      <span>
                        {item.label}
                        <p className="navitemsArrowpart"></p>
                      </span>
                    </li>






                    // <li
                    //   key={i}
                    //   className={`Megamenumenuitem ${
                    //     activeMenu?.label === item.label
                    //       ? "activeMegamenuSection"
                    //       : ""
                    //   }`}
                    //   onClick={() => {
                    //     setActiveMenu(item);
                    //     setMenuVisible(false);
                    //     navigate(item.labellink);
                    //     window.scrollTo({ top: 0 });
                    //   }}
                      // onMouseEnter={() => {
                      //   // Only show mega menu if the item has content
                      //   if (item.content && item.content.length > 0) {
                      //     setActiveMenu(item);
                      //     setMenuVisible(true);
                      //     setHoveredImage(
                      //       sectionImageMap[item.label] ||
                      //         "/images/FirstSliderImage.png",
                      //     );
                      //   }
                      // }}
                     
                    // >
                    //   <span>
                    //     {item.label}
                    //     <p className="navitemsArrowpart"></p>
                    //   </span>
                    // </li>
                  ))}
                </ul>
              </div>

              <div>
                <div
                  className="Megamenulogo1 hidden cursor-pointer md:block"
                  onClick={() => setMenuBar(true)}
                >
                  MENU
                </div>
              </div>

              {/* <div className="mainloginflexmain">
                <div className="loginflexmain">
                  <div className="MegamenuAuth show-only-1100">
                    {!isLoggedIn ? (
                      // <button
                      //   className="authBtn login flex items-center gap-2"
                      //   onClick={() => setOpen(true)}
                      // >
                      //   <img src={LoginIcon} alt="login" className="w-4 h-4" />
                      //   <span>LOGIN</span>
                      // </button>
                      <Link to="/login-otp">
                        <button className="authBtn login flex items-center gap-2">
                          <img
                            src={LoginIcon}
                            alt="login"
                            className="w-4 h-4"
                          />
                          <span>LOGIN</span>
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="authBtn login flex items-center gap-2"
                        // onClick={() => navigate("/my-account")}
                        onClick={() => setOpenMyAccount(true)}
                      >
                        <span>MY ACCOUNT</span>
                      </button>
                    )}

                    <div
                      className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
                        openCanva
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      onClick={() => setOpenMyAccount(false)}
                    />
                  </div>
                  <div
                    className="Megamenulogo1 hidden md:block cursor-pointer"
                    onClick={() => setMenuBar(true)}
                  >
                    MENU
                  </div>
                </div>
              </div> */}
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
                <Link to="/chennai-events">
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
                  // onClick={() => setMenuBar1(true)}
                  // src="/images/HomePage-Images/Icons/mobile-Header-Search.svg"
                  src={LoginIcon1}
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
          </nav>
        </header>
      </div>

      {/* <LoginOtpModal open={open} onClose={() => setOpen(false)} /> */}

      <div
        onClick={() => setOpenMyAccount(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity 
        ${openCanva ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] z-9999 
        bg-white/90 backdrop-blur-xl shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        ${openCanva ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 -b">
          <h2 className="text-lg font-semibold tracking-wide">My Account</h2>
          <button
            onClick={() => setOpenMyAccount(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full
            hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* Profile */}
        <div className="px-5 py-6 -b flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold">
            U
          </div>
          <div>
            <p className="font-medium">Welcome Back</p>
            <p className="text-sm text-gray-500">user@email.com</p>
          </div>
        </div>

        {/* Menu */}
        <div className="p-5 space-y-2">
          <button
            onClick={() => navigate("/UserDashboard")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
             hover:bg-gray-100 transition font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-700"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </button>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-lg
            bg-red-500 text-white font-semibold
            hover:bg-red-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default FullWidthHeaderMegaMenu;
