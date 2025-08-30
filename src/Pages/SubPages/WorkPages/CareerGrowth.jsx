import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import SliderWorkPage from "./SliderWorkPage";
import { Helmet } from "react-helmet-async";

export default function CareerGrowth() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const benefitSections = [
    {
      sectionTitle: " Information Technology (IT)",
      sectionDesc:
        "By raising salaries via skill development, IT has helped professionals go from entry-level to higher-level positions and progressively boost their financial growth.",
      label: "Information Technology ",
      image: "/images/Work-Images/SubPages/Information-Technology.jpg",
      benefits: [
        {
          id: 1,
          title: "Skill Development",
          para: "Professionals should acquire and improve their knowledge in artificial intelligence (AI), cloud computing, digital marketing, cybersecurity, and many other areas in order to remain competitive.",
          imgs: "/images/Work-Images/SubPages/Icons/Skill-Development.svg",
        },
        {
          id: 2,
          title: "Opportunities",
          para: "Emerging industries like IoT, blockchain development, web development, machine learning, etc., have a number of opportunities thanks to IT sectors.",
          imgs: "/images/Work-Images/SubPages/Icons/Opportunities.svg",
        },
        {
          id: 3,
          title: "Leadership Roles",
          para: "With their knowledge and abilities, seasoned professionals will advance to leadership positions like project manager, senior manager, and team leader.",
          imgs: "/images/Work-Images/SubPages/Icons/Leadership-Roles.svg",
        },
      ],
    },
    {
      sectionTitle: " Non-IT Sectors ",
      sectionDesc:
        "Core industries, manufacturing and services with government skill assistance, and developing technology are examples of non-IT sectors.",
      label: "Non-IT Sectors",
      image: "/images/Work-Images/SubPages/Non-IT-Sectors.jpg",
      benefits: [
        {
          id: 1,
          title: "Core Industries",
          para: "Government-initiated programs that call for technical expertise with machines and hands-on experience with them frequently help core industries.",
          imgs: "/images/Work-Images/SubPages/Icons/Core-Industries.svg",
        },
        {
          id: 2,
          title: "Skill Requirements and Career Ladders",
          para: "To advance in your core career, you must have certain abilities and certifications in the field you work in. These will help you advance along clearly defined career routes.",
          imgs: "/images/Work-Images/SubPages/Icons/Skill-Requirements-and-Career-Ladders.svg",
        },
        {
          id: 3,
          title: "Automation",
          para: " Automation has an impact on career advancement by changing job functions and necessitating that employees adjust to new domain skills. ",
          imgs: "/images/Work-Images/SubPages/Icons/Automation.svg",
        },
      ],
    },
    {
      sectionTitle: "Other Non-IT Sectors",
      sectionDesc:
        " Chennai's many non-IT industries, including retail, healthcare, education, and finance, provide a range of employment paths.",
      label: "Other Non-IT Sectors",
      image: "/images/Work-Images/SubPages/other-Non-IT-Sectors.jpg",
      benefits: [
        {
          id: 1,
          title: "Professional Paths",
          para: " A person must have a certain level of education and experience in order to advance to the next higher job in their professional path.",
          imgs: "/images/Work-Images/SubPages/Icons/professional-paths.svg",
        },
        {
          id: 2,
          title: "Required Qualifications",
          para: " The advancement is determined by your industry-specific soft skills, technical expertise, and pertinent credentials.",
          imgs: "/images/Work-Images/SubPages/Icons/Required-Qualifications.svg",
        },
        {
          id: 3,
          title: "Technology and Digitalization",
          para: " Even in non-IT industries, employers are requesting digital literacy and tech-related abilities due to the rapid advancement of technology.",
          imgs: "/images/Work-Images/SubPages/Icons/Technology-and-Digitalization.svg",
        },
      ],
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
          Job Opportunity in Chennai: Careers Across Industries & Sectors
        </title>
        <meta
          name="description"
          content="Job opportunity in Chennai spans IT, manufacturing, and services, offering diverse career paths, competitive salaries, and growth for freshers & professionals alike."
        />
        <link rel="canonical" href="/work/job-opportunities-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Work-Images/SubPages/career-growth.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Career Growth </h3>
              <div className="breadCrum">
                <Link to="/work-in-chennai"> Work </Link> -{" "}
                <a href="">Career Growth</a>
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
              <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Career Growth</h3>
              <p>
                Chennai offers a wide range of employment options in core,
                non-core, and IT industries. Strategic career planning, adoption
                of innovative technology, and ongoing upskilling could give rise
                to a wealth of professional progression prospects. Technological
                developments and governmental regulations further stimulated the
                profession.
              </p>
            </div>
          </div>
        </div>
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
              <h3>Your Companion for Relaxation and Enjoyment </h3>
              <p>
                Chennai offers a wide range of employment options in core,
                non-core, and IT industries. Strategic career planning, adoption
                of innovative technology, and ongoing upskilling could give rise
                to a wealth of professional progression prospects. Technological
                developments and governmental regulations further stimulated the
                profession.
              </p>
            </div>
          </div>
        </div> */}

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                  {/* <div className="boxttlsec">{section.label}</div> */}
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
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
        ))}

        <SliderWorkPage />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
