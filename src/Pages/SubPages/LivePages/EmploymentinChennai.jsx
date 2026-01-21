import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import LiveSlider from "./LiveSlider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function EmploymentinChennai() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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
    document.body.classList.add("iconImgdev");

    return () => {
      document.body.classList.remove("iconImgdev");
    };
  }, []);
  const single = [
    {
      id: 1,
      title: "Automotive and Engineering Leadership",
      para: 'Chennai, frequently referred to as the "Detroit of Asia," offers substantial job opportunities in the automotive and engineering fields, hosting many manufacturing facilities and support industries.',
      imgs: "/images/Live-Images/SubPages/Automotive-and-Engineering-Leadership.jpg",
      imgAlt: "automotive engineering",
    },
    {
      id: 2,
      title: " Electronics and Hardware Production",
      para: "The city has developed into a significant center for electronics and hardware production, generating employment in manufacturing, assembly, and associated sectors. ",
      imgs: "/images/Live-Images/SubPages/Electronics-and-Hardware-Production.jpg",
      imgAlt: "electronics in chennai",
    },
  ];
  const couple = [
    {
      id: 1,
      title: "Information Technology and Software Services",
      para: "Chennai serves as a prominent IT center, accommodating various local and global software firms, resulting in significant job opportunities in software creation, IT assistance, and associated positions.",
      imgs: "/images/Live-Images/SubPages/Information-Technology-and-Software-Services.jpg",
      imgAlt: "software solution in chennai",
    },
    {
      id: 2,
      title: "Banking, Finance, and Insurance",
      para: "The financial services industry is a major employer in Chennai, with numerous banks, financial entities, and insurance firms well-established in the area.",
      imgs: "/images/Live-Images/SubPages/Banking-Finance-and-Insurance.jpg",
      imgAlt: "banking finance in chennai",
    },
  ];
  const family = [
    {
      id: 1,
      title: "Healthcare and Medical Tourism",
      para: "Chennai's status as a healthcare hub promotes job opportunities in hospitals, clinics, and associated medical services.",
      imgs: "/images/Live-Images/SubPages/Healthcare-and-Medical-Tourism.jpg",
      imgAlt: "",
    },
    {
      id: 2,
      title: "Varied and Expanding Industries",
      para: "There are also prospects in areas such as petrochemicals, textiles, entertainment, and logistics, showcasing the city's diverse economy.",
      imgs: "/images/Live-Images/SubPages/Varied-and-Expanding-Industries.jpg",
      imgAlt: "",
    },
    // {
    //   id: 3,
    //   title: "Find some IT parks in Chennai here",
    //   para: "OMR (Old Mahabalipuram Road) – Commonly referred to as the IT Corridor, it hosts leading tech parks, software firms, and startups",
    //   imgs: "/images/Live-Images/SubPages/Find-some-IT-parks-in-Chennai-here.jpg",
    // },
    // {
    //   id: 4,
    //   title: "Tidel Park & Ramanujan IT City ",
    //   para: "Hub for multinational companies, fintech enterprises, and research labs. ",
    //   imgs: "/images/Live-Images/SubPages/Tidel-Park-&-Ramanujan-IT-City.jpg",
    // },
    // {
    //   id: 5,
    //   title: "Porur & DLF IT Park",
    //   para: " Fast-expanding technology center for IT/ITES firms",
    //   imgs: "/images/Live-Images/SubPages/Porur-DLF-IT-Park.jpg",
    // },
    // {
    //   id: 6,
    //   title: "Guindy & Taramani",
    //   para: "A combination of IT parks, governmental agencies, and industrial facilities with superb metro connectivity.",
    //   imgs: "/images/Live-Images/SubPages/Guindy-aramani.jpg",
    // },
    // {
    //   id: 7,
    //   title: "Ambattur Industrial Estate",
    //   para: "A vital area for production, engineering, and industrial assistance positions.",
    //   imgs: "/images/Live-Images/SubPages/Ambattur-Industrial-Estate.jpg",
    // },
    // {
    //   id: 8,
    //   title: "Chennai Central Business District (CBD)",
    //   para: "Comprises Nungambakkam, T. Nagar, and Mount Road – ideal for careers in finance, consulting, and retail.",
    //   imgs: "/images/Live-Images/SubPages/Chennai-Central-Business-District-CBD.jpg",
    // },
    // {
    //   id: 8,
    //   title: "Sriperumbudur and Oragadam",
    //   para: "Key centers for automotive, electronics, and large-scale manufacturing.",
    //   imgs: "/images/Live-Images/SubPages/Sriperumbudur-and-Oragadam.jpg",
    // },
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
        <title>Employment in Chennai | Industry Based Jobs & Careers</title>
        <meta
          name="description"
          content="Explore Employment in Chennai across IT hubs, automobile manufacturing, electronics parks, startups, and emerging business sectors."
        />
        <link rel="canonical" href="/employment-in-chennai" />
      </Helmet>
      {/*----------------- Banner ----------------*/}
      <div className="accaodomationBannerSection">
        <img src="/images/Live-Images/SubPages/Employment-Banner.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Employment</h3>
            <div className="breadCrum">
              <Link to="/live-in-chennai"> Live </Link> -{" "}
              <a href="">Employment </a>
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
            <p>
              Employment in chennai &nbsp; Employment in chennai &nbsp;
              Employment in chennai
            </p>
          </div>
          <div className="workIntro">
            <h1>Employment in Chennai</h1>

            <p>
              Chennai's strong economy provides a diverse array of job
              opportunities in multiple sectors, drawing skilled individuals
              from the surrounding area and further afield. The vibrant job
              market in the city accommodates both experienced professionals and
              individuals looking for beginner roles.
            </p>
          </div>
        </div>
      </div>

      <section className="clcSecscrl flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img
              src="/images/Live-Images/SubPages/Industrial-and-Manufacturing.jpg"
              alt="chennai industrial "
            />
            <div className="clcscrLtitle bg-[#7d377c] relative">
              <h2 className="flex flex-col">
                <small> A Robust Industrial and Manufacturing Foundation</small>
              </h2>
              <p>Providing essential sector employment opportunities.</p>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox MainSectionHovered">
            {single.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.imgAlt} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clcSecscrl clcSecscrlTwo bg-[#7d377c] flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img
              src="/images/Live-Images/SubPages/IT-and-Services-Industry.jpg"
              alt="it services in chennai"
            />
            <div className="clcscrLtitle bg-[#672866] relative">
              <h2 className="flex flex-col">
                <small>An Expanding IT and Services Industry</small>{" "}
              </h2>
              <p>Fueling contemporary employment opportunities. </p>
              {/* <div className="boxttlsec"> Couple</div> */}
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {couple.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.imgAlt} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="clcSecscrl clcSecscrlThree bg-[#ffffff] flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img
              src="/images/Live-Images/SubPages/Varied-Opportunities.jpg"
              alt=""
            />
            <div className="clcscrLtitle bg-[#672866] relative">
              <h2 className="flex flex-col">
                <small>Emerging and Varied Opportunities</small>{" "}
              </h2>
              <p>Broadening the Job Market.</p>
              <div className="boxttlsec"> Family</div> 
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {family.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/*--------------- Explore More Chennai----------------- */}

      <LiveSlider />

      {/*----------------- Social & CTA ----------------*/}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </>
  );
}
