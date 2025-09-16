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
  const [activeSection, setActiveSection] = useState("IB Schools");
  const [activeSection1, setActiveSection1] = useState("Top Colleges");
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

  // Create refs for each section
  const refs = {
    "IB Schools": useRef(null),
    "IGCSE Schools": useRef(null),
    "ICSE Schools": useRef(null),
    "CBSE Schools": useRef(null),
    "Matriculation Schools": useRef(null),
    "State Board Schools": useRef(null),
    "Top Colleges": useRef(null),
    "Arts, Science & Commerce Colleges": useRef(null),
    "Law Colleges": useRef(null),
    "Business & Management Colleges": useRef(null),
    "Colleges and Universities": useRef(null),
  };

  const handleTabClick = (name) => {
    refs[name]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleTabClick1 = (name) => {
    refs[name]?.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        {/* <div className="visitIntroParaSection detailIntro">
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
        </div> */}

        {/* <div className="educationalPageStyle">
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
              className={`newsLetterButton ${
                tab1 === "active" ? "active" : ""
              }`}
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
                        onClick={() => (
                          handleTabClick(name), setActiveSection(name)
                        )}
                        className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
                          activeSection === name
                            ? "!bg-[#a44294] text-white !font-medium"
                            : "bg-gray-200 text-gray-800 !font-medium"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={refs["IB Schools"]} className="scroll-target">
                <IBSchool />
              </div>

              <div ref={refs["IGCSE Schools"]} className="scroll-target">
                <IGCSESchool />
              </div>

              <div ref={refs["ICSE Schools"]} className="scroll-target">
                <ICSESchool />
              </div>

              <div ref={refs["CBSE Schools"]} className="scroll-target">
                <CBSESchool />
              </div>

              <div
                ref={refs["Matriculation Schools"]}
                className="scroll-target"
              >
                <MatricSchool />
              </div>

              <div ref={refs["State Board Schools"]} className="scroll-target">
                <StateBoardSchool />
              </div>
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
                        onClick={() => (
                          handleTabClick1(name), setActiveSection1(name)
                        )}
                        className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
                          activeSection1 === name
                            ? "!bg-[#a44294] text-white !font-medium"
                            : "bg-gray-200 text-gray-800 !font-medium"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={refs["Top Colleges"]} className="scroll-target">
                <TopColleges />
              </div>

              <div
                ref={refs["Arts, Science & Commerce Colleges"]}
                className="scroll-target"
              >
                <ArtsScienceColleges />
              </div>

              <div ref={refs["Law Colleges"]} className="scroll-target">
                <LawColleges />
              </div>

              <div
                ref={refs["Business & Management Colleges"]}
                className="scroll-target"
              >
                <BusinessManagementColleges />
              </div>

              <div
                ref={refs["Colleges and Universities"]}
                className="scroll-target"
              >
                <CollegeUniversities />
              </div>
            </>
          )}
        </div> */}

        <div class="visitIntroParaSection detailIntro">
          <div class="container max-w-7xl mx-auto px-4">
            <div class="CostOflivingBackground scroll-rightCostofLiving">
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div class="workIntro">
              <h3>Your Educational Journey Starts Here</h3>
              <p>
                Chennai has a wide range of educational possibilities, from
                kindergarten to high school schooling and colleges, from
                undergraduate to doctoral degrees in fields like medicine,
                engineering, business, photography, and the arts and sciences,
                and more, from public to private schools and institutions.
              </p>
            </div>
          </div>
        </div>

        <section
          class="clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    bg-white whitebgsec 
    pattern-a"
        >
          <div class="clcscrlCol clcscrlLft relative">
            <div class="clcscrlinLBox sticky top-0">
              <img
                alt="Renowned Educational Institutions"
                src="/images/Live-Images/SubPages/renowned.jpg"
              />
              <div class="clcscrLtitle relative bg-[#7d377c]">
                <h2 class="flex flex-col text-white">
                  <small>Renowned Educational Institutions</small>
                </h2>
                <p>
                  Chennai hosts many reputable school groups and individual
                  schools recognized for their academic achievements.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="clcscrlCol clcscrlRight padbtm">
            <div class="clcscrlinRBox MainSectionHovered">
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="International Schools"
                    src="/images/Live-Images/SubPages/Icons/International-Schools.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>International Schools</h3>
                  <p>
                    Establishments such as the American International School and
                    the British International School provide worldwide
                    acknowledged curricula and varied educational settings.{" "}
                  </p>
                </div>
              </div>
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Notable School Groups"
                    src="/images/Live-Images/SubPages/Icons/Notable-School-Groups.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Notable School Groups</h3>
                  <p>
                    Renowned institutions in Chennai's educational landscape
                    consist of the PSBB Group of Schools, Chettinad Vidyashram,
                    and SBOA School &amp; Junior College.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    bg-[#7d377d] colorbgsec 
    pattern-b"
        >
          <div class="clcscrlCol clcscrlLft relative">
            <div class="clcscrlinLBox sticky top-0">
              <img
                alt="Newcomers"
                src="/images/Live-Images/SubPages/Birla-Open-Minds-International-School.jpg"
              />
              <div class="clcscrLtitle relative bg-[#672866]">
                <h2 class="flex flex-col text-white">
                  <small>Newcomers</small>
                </h2>
                <p>
                  Chennai offers a wide variety of schooling options with a
                  strong emphasis on academics, extracurriculars, and cultural
                  values. Here’s what newcomers should know
                </p>
              </div>
            </div>
          </div>
          <div class="clcscrlCol clcscrlRight padbtm">
            <div class="clcscrlinRBox MainSectionHovered">
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Local and Neighborhood Schools"
                    src="/images/Live-Images/SubPages/Icons/Local-and-Neighborhood-Schools.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Local and Neighborhood Schools</h3>
                  <p>
                    Numerous schools in Chennai adhere to the State Board and
                    Matriculation curricula, firmly embedded in the regional
                    educational system. National Uniformity: The CBSE (Central
                    Board of Secondary Education) curriculum is a favored option
                    for families looking for a consistently recognized and
                    uniform educational standard throughout India.
                  </p>
                </div>
              </div>
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Wide English-Medium Method"
                    src="/images/Live-Images/SubPages/Icons/Wide-English-Medium-Method.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Wide English-Medium Method</h3>
                  <p>
                    Institutions such as Sishya typically provide the ICSE/ISC
                    curriculum, recognized for its English-medium teaching and
                    an extensive variety of subjects.
                  </p>
                </div>
              </div>
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Global Views"
                    src="/images/Live-Images/SubPages/Icons/Global-Views.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Global Views</h3>
                  <p>
                    Esteemed private and overseas institutions, including
                    American International School and The British International
                    School, offer international curricula such as IB
                    (International Baccalaureate) and Cambridge (IGCSE).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    bg-white whitebgsec 
    pattern-c"
        >
          <div class="clcscrlCol clcscrlLft relative">
            <div class="clcscrlinLBox sticky top-0">
              <img
                alt="Linguistic Variety in Education"
                src="/images/Live-Images/SubPages/Linguistic-Variety-in-Education.jpg"
              />
              <div class="clcscrLtitle relative bg-[#7d377c]">
                <h2 class="flex flex-col text-white">
                  <small>Linguistic Variety in Education</small>
                </h2>
                <p>
                  Schools in Chennai provide a range of language choices to
                  serve its diverse linguistic community.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="clcscrlCol clcscrlRight padbtm">
            <div class="clcscrlinRBox MainSectionHovered">
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Local Language Emphasis"
                    src="/images/Live-Images/SubPages/Icons/Local-Language-Emphasis.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Local Language Emphasis</h3>
                  <p>
                    Tamil serves as a main medium of instruction in numerous
                    schools, showcasing the local linguistic culture.{" "}
                  </p>
                </div>
              </div>
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="National and International Languages"
                    src="/images/Live-Images/SubPages/Icons/National-and-International-Languages.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>National and International Languages</h3>
                  <p>
                    {" "}
                    Learners frequently get the chance to study Hindi and
                    English, in addition to global languages such as French and
                    Spanish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    bg-[#7d377d] colorbgsec 
    pattern-a"
        >
          <div class="clcscrlCol clcscrlLft relative">
            <div class="clcscrlinLBox sticky top-0">
              <img
                alt="Mapping Your Higher Education"
                src="/images/Live-Images/SubPages/mapping.jpg"
              />
              <div class="clcscrLtitle relative bg-[#672866]">
                <h2 class="flex flex-col text-white">
                  <small>Mapping Your Higher Education</small>
                </h2>
                <p>
                  In addition to schools, Chennai has several top universities
                  that educate students and produce a large number of UG and PG
                  graduates annually.
                </p>
              </div>
            </div>
          </div>
          <div class="clcscrlCol clcscrlRight padbtm">
            <div class="clcscrlinRBox MainSectionHovered">
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="A Range of Fields"
                    src="/images/Live-Images/SubPages/Icons/A-Range-of-Fields.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>A Range of Fields</h3>
                  <p>
                    Various colleges and universities, such as VIT, SRM, and
                    Loyola colleges in Chennai, offer programs in a diverse
                    selection of areas, spanning from arts and sciences to
                    engineering and healthcare.{" "}
                  </p>
                </div>
              </div>
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Selecting Your Specialization"
                    src="/images/Live-Images/SubPages/Icons/Selecting-Your-Specialization.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Selecting Your Specialization</h3>
                  <p>
                    {" "}
                    Investigate schools recognized for their unique expertise in
                    certain fields to match your professional goals.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    bg-white whitebgsec 
    pattern-b"
        >
          <div class="clcscrlCol clcscrlLft relative">
            <div class="clcscrlinLBox sticky top-0">
              <img
                alt="Advancing Your Development"
                src="/images/Live-Images/SubPages/advancing.jpg"
              />
              <div class="clcscrLtitle relative bg-[#7d377c]">
                <h2 class="flex flex-col text-white">
                  <small>Advancing Your Development</small>
                </h2>
                <p>
                  If you want to pursue a PhD after completing your postgraduate
                  studies, Chennai also has prestigious universities that could
                  assist you in becoming an expert in that field.
                </p>
              </div>
            </div>
          </div>
          <div class="clcscrlCol clcscrlRight padbtm">
            <div class="clcscrlinRBox MainSectionHovered">
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Prospects for Comprehensive Education"
                    src="/images/Live-Images/SubPages/Icons/Prospects-for-Comprehensive-Education.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Prospects for Comprehensive Education</h3>
                  <p>
                    {" "}
                    Chennai features establishments focused on advanced studies
                    and innovative research in multiple fields.{" "}
                  </p>
                </div>
              </div>
              <div class="clcboxItemss flex">
                <div class="clcboxIImg">
                  <img
                    alt="Participating in Knowledge Development"
                    src="/images/Live-Images/SubPages/Icons/Participating-in-Knowledge-Development.svg"
                  />
                </div>
                <div class="clcboxICont">
                  <h3>Participating in Knowledge Development</h3>
                  <p>
                    If you're keen on expanding frontiers and uncovering new
                    insights, look into research-oriented universities and
                    institutions.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
