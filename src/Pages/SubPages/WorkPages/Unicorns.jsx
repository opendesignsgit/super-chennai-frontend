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

export default function Unicorns() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const users = [
    {
      id: 1,
      title: "Tech firms",
      para: " Chennai is home to an increasing number of tech businesses that exhibit significant innovation and scalability in fields like finance, AI, and SaaS.",
      imgs: "/images/Work-Images/SubPages/Icons/Tech-firms.svg",
    },
    {
      id: 2,
      title: "Manufacturing Innovations",
      para: " Chennai-based businesses that use cutting-edge deep tech and manufacturing technologies offer distinctive unicorn potential. ",
      imgs: "/images/Work-Images/SubPages/Icons/Manufacturing-Innovations.svg",
    },
    {
      id: 3,
      title: "Businesses",
      para: "Chennai's customer base fosters e-commerce, ed-tech, and healthcare businesses that have room to develop quickly.",
      imgs: "/images/Work-Images/SubPages/Icons/Businesses.svg",
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
        <title>Super Chennai | Startups in Chennai : Innovation & Growth</title>
        <meta
          name="description"
          content="From tech ventures to creative enterprises, startups in Chennai are driving growth, offering opportunities, and building a strong ecosystem for future innovation."
        />
        <link rel="canonical" href="/work/unicorn-startups" />
      </Helmet>
      <div>
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img src="/images/Work-Images/SubPages/unicorns.jpg" alt="wfh jobs in chennai" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Unicorns </h3>
              <div className="breadCrum">
                <Link to="/work-in-chennai"> Work </Link> -{" "}
                <a href="">Unicorns </a>{" "}
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
              <h1>Unicorns in Chennai </h1>
              <p>
                The startup scene in Chennai is steadily creating unicorns. The
                foundation for upcoming international corporations in Chennai is
                being laid by the city's robust, skilled workforce, extensive
                industry expertise, and growing investor interest.
              </p>
            </div>
          </div>
        </div>

        <section className="clcSecscrl flex">
          <div className="clcscrlCol clcscrlLft relative">
            <div className="clcscrlinLBox sticky top-0">
              <img
                src="/images/Work-Images/SubPages/Possible-Unicorns.jpg"
                alt="remote jobs in chennai"
              />
              <div className="clcscrLtitle bg-[#7d377c] relative">
                <h2 className="flex flex-col">
                  <small> Possible </small> Unicorns{" "}
                </h2>
                <p>
                  {" "}
                  Chenani holds promise for the diverse startup landscape,
                  exhibiting rapid growth across several areas, suggesting the
                  potential for unicorns in this urban area in the future.
                </p>
              </div>
            </div>
          </div>
          <div className="clcscrlCol clcscrlRight padbtm">
            <div className="clcscrlinRBox MainSectionHovered">
              {users.map((user) => (
                <div key={user.id} className="clcboxItemss flex">
                  <div className="clcboxIImg">
                    <img src={user.imgs} alt={user.title} />
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
