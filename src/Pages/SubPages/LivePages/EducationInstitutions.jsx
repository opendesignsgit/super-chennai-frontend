import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";
import LiveSlider from "./LiveSlider";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import IBSchool from "./EducationPageComponents/IBSchools";
import IGCSESchool from "./EducationPageComponents/IGCSESchools";
import ICSESchool from "./EducationPageComponents/ICSESchools";
import CBSESchool from "./EducationPageComponents/CBSCSchools";
import MatricSchool from "./EducationPageComponents/MatricSchools";
import StateBoardSchool from "./EducationPageComponents/StateBoardSchools";
import TopColleges from "./EducationPageComponents/TopCollege";
import ArtsScienceColleges from "./EducationPageComponents/ArtsScienceCollges";
import LawColleges from "./EducationPageComponents/LawColleges";
import BusinessManagementColleges from "./EducationPageComponents/BusinnesManagmentColleges";
import CollegeUniversities from "./EducationPageComponents/CollegeUniversties";

export default function EducationInstitutions() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const [isSticky, setIsSticky] = useState(false);
  const bgTextRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Central Chennai");
  const [selectedTabForScroll, setSelectedTabForScroll] = useState("");

  const [tab, setTab] = useState("active");
  const [tab1, setTab1] = useState("");

  const tabNames = [
    "IB Schools",
    "IGCSE Schools",
    "ICSE Schools",
    "CBSE Schools",
    "Matriculation Schools",
    "State Board Schools",
  ];

  const tabNames1 = [
    "Top Colleges",
    "Arts, Science & Commerce Colleges",
    "Law Colleges",
    "Business & Management Colleges",
    "Colleges and Universities",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  // Load from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTabForScroll");
    if (savedTab && tabNames.includes(savedTab)) {
      setSelectedTabForScroll(savedTab);
    } else {
      setSelectedTabForScroll(tabNames[0]); // default to first tab
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Super Chennai on Educational Institutions in Chennai</title>
        <meta
          name="description"
          content="Super Chennai explores top educational institutions in Chennai, highlighting schools, colleges & universities that make the city a hub of learning & opportunity."
        />
        <link
          rel="canonical"
          href="/live/educational-institutions-in-chennai"
        />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/Educational-Institutions-Banner.jpg"
            alt="education in chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Educational Institutions</h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Educational Institutions </a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
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
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Your Educational Journey Starts Here</h3>
              <p>
                Chennai has a wide range of educational possibilities, from
                kindergarten to high school and colleges, from undergraduate to
                doctoral degrees in fields like medicine, engineering, business,
                photography, and the arts and sciences, and more, from public to
                private schools and institutions.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}

        <div className="flex justify-center mb-8 chennaiInvestmentsButtons">
          <button
            className={`newsLetterButton ${tab === "active" ? "active" : ""}`}
            onClick={() => {
              setTab("active");
              setTab1("");
            }}
          >
            Schools
          </button>

          <button
            className={`newsLetterButton ${tab1 === "active" ? "active" : ""}`}
            onClick={() => {
              setTab1("active");
              setTab("");
            }}
          >
            Colleges
          </button>
        </div>

        {tab && (
          <>
            <div
              className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
                isSticky
                  ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                  : "relative"
              }`}
            >
              <div className="container max-w-7xl mx-auto px-4 pb-[25px]">
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  {tabNames.map((name) => (
                    <button
                      key={name}
                      className={`tabButton px-4 py-2 rounded font-semibold transition ${
                        activeSection === name
                          ? "!bg-[#a44294] text-white !font-medium"
                          : "bg-gray-200 text-gray-800 !font-medium"
                      }`}
                      onClick={() => handleTabClick(name)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <IBSchool />

            <IGCSESchool />

            <ICSESchool />

            <CBSESchool />

            <MatricSchool />

            <StateBoardSchool />
          </>
        )}

        {tab1 && (
          <>
            <div
              className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
                isSticky
                  ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                  : "relative"
              }`}
            >
              <div className="container max-w-7xl mx-auto px-4 pb-[25px] ">
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  {tabNames1.map((name) => (
                    <button
                      key={name}
                      className={`tabButton px-4 py-2 rounded font-semibold transition ${
                        activeSection === name
                          ? "!bg-[#a44294] text-white !font-medium"
                          : "bg-gray-200 text-gray-800 !font-medium"
                      }`}
                      onClick={() => handleTabClick(name)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <TopColleges />

            <ArtsScienceColleges />

            <LawColleges />

            <BusinessManagementColleges />

            <CollegeUniversities />
          </>
        )}

        <LiveSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
