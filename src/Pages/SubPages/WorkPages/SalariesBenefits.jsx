import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import MegaMenu from "../../../Components/Header";
import MenuBar from "../../../Components/MenuBar";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import SliderWorkPage from "./SliderWorkPage";
import { Helmet } from "react-helmet-async";

export default function SalariesBenefits() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const AccomodSections = [
    {
      title: "Salary Ranges by Industry",
      description:
        "Workers in Chennai's IT industries receive better compensation than those in manufacturing. Accurate expectations will result from researching certain industries.",
      image: "/images/Work-Images/SubPages/Salary-Ranges-by-Industry.jpg",
      imgAlt: "cognizant chennai salary",
      linkText: "Explore More",
      linkUrl: "/digital",
    },
    {
      title: "Salary Differences by Experience Level",
      description:
        " Freshers will start off with a modest wage of between 8,000 and 10,000, which will be raised gradually depending on their performance and advancement.",
      image: "/images/Work-Images/SubPages/Experience-Level.jpg",
      imgAlt: "web designer salary in chennai",
      linkText: "Explore More",
      linkUrl: "/education",
    },
  ];

  const users = [
    {
      id: 1,
      title: "Healthcare",
      para: "Some businesses consider the health of their employees and provide health insurance coverage to ensure that they have access to medical treatment. ",
      imgs: "/images/Work-Images/SubPages/Icons/Healthcare.svg",
      imgAlt: "",
    },
    {
      id: 2,
      title: "Retirement Plans",
      para: " In Chennai, provident funds (PF) are a popular retirement perk; however, some companies also provide pension plans or other gratuities. ",
      imgs: "/images/Work-Images/SubPages/Icons/Retirement-Plans.svg",
      imgAlt: "",
    },
    {
      id: 3,
      title: "Paid Time Off",
      para: " Some employers offer paid sick leave as an addition to the job package in an effort to increase employee confidence and productivity. ",
      imgs: "/images/Work-Images/SubPages/Icons/Paid-Time-Off.svg",
      imgAlt: "",
    },
    {
      id: 4,
      title: "Other Perks",
      para: "Free taxis, lunch vouchers, bonuses, and complimentary movie tickets for professional growth are extra perks in Chennai.",
      imgs: "/images/Work-Images/SubPages/Icons/Other-Perks.svg",
      imgAlt: "",
    },
  ];

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
        <title>
          Salary in Chennai: Job Trends, Pay Scale and Career Growth
        </title>
        <meta
          name="description"
          content="Salary in Chennai varies across IT, manufacturing & services, with competitive pay scales and growing opportunities attracting professionals from all over India."
        />
        <link rel="canonical" href="/work/chennai-job-salary" />
      </Helmet>
      <div>
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img
              src="/images/Work-Images/SubPages/Salaries-&-Benefits.jpg"
              alt="chennai job salary"
            />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Salaries & Benefits </h3>
              <div className="breadCrum">
                <Link to="/work-in-chennai"> Work </Link> -{" "}
                <a href="">Salaries Benefits </a>{" "}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------Accodimation-Banner----------- */}

        <div className="visitIntroParaSection detailIntro">
          <div className=" container max-w-7xl mx-auto px-4">
            <div
              className={`CostOflivingBackground ${
                scrollDir === "right"
                  ? "scroll-rightCostofLiving"
                  : "scroll-leftCostofLiving"
              }`}
              ref={bgTextRef}
            >
              <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
            </div>

            <div className="workIntro">
              <h3>Salaries & Benefits </h3>
              <p>
                The salary range offered by Chennai's job market varies based on
                factors such as IT, non-IT, core, government, experienced,
                fresh, company size, abilities, etc. Included are incentives,
                retirement, health care, and several more benefits that benefit
                the employee as a whole.
              </p>
            </div>
          </div>
        </div>

        {/*--------------- Hotels-Chennai----------------- */}

        <div className="AccodomationPageBecameVolunteerBg pt0">
          <div className="container max-w-7xl mx-auto px-4">
            {AccomodSections.map((section, index) => (
              <div className="AccodoSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.imgAlt} />
                    <div className="AccodContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      {/* <div className="AccomoddationPage">
                        <a href={section.linkUrl}>{section.linkText}</a>
                      </div> */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="AccodContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      {/* <div className="AccomoddationPage1">
                        <a href={section.linkUrl}>{section.linkText}</a>
                      </div> */}
                    </div>
                    <img src={section.image} alt={section.imgAlt} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="clcSecscrl flex">
          <div className="clcscrlCol clcscrlLft relative">
            <div className="clcscrlinLBox sticky top-0">
              <img
                src="/images/Work-Images/SubPages/Employee-Benefits.jpg"
                alt="high paying it companies in chennai"
              />
              <div className="clcscrLtitle bg-[#7d377c] relative">
                <h2 className="flex flex-col">
                  <small> Common Employee </small> Benefits{" "}
                </h2>
                <p>
                  {" "}
                  In addition to pay, Chennai offers maternity leave, savings,
                  health insurance, incentives, and even paid leave for some
                  employees.
                </p>
                {/* <div className="boxttlsec">Single</div> */}
              </div>
            </div>
          </div>
          <div className="clcscrlCol clcscrlRight padbtm">
            <div className="clcscrlinRBox MainSectionHovered">
              {users.map((user) => (
                <div key={user.id} className="clcboxItemss flex">
                  <div className="clcboxIImg">
                    <img src={user.imgs} alt={user.imgAlt} />
                  </div>
                  <div className="clcboxICont">
                    <h3>{user.title}</h3>
                    <p>{user.para}</p>
                    <p className="linkpara">
                      <a href="#">
                        <img
                          src="/images/Work-Images/SubPages/LinkArrowRightIcon.svg"
                          alt=""
                        />
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*--------------- Hotels-Chennai----------------- */}

        <SliderWorkPage />

        {/*--------------- Explore More Chennai----------------- */}

        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>

        <Becameavolunteer />
      </div>
    </>
  );
}
