import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { motion, AnimatePresence } from "framer-motion";
import LiveSlider from "./LiveSlider";

export default function Tiruvannamalai() {
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

  const data = [
    {
      title: "By Road",
      points: ["Approx. 195 km via NH38/NH77 – around 4.5 to 5 hours’ drive"],
    },
    {
      title: "By Train",
      points: [
        "Connected via direct trains from Chennai Egmore/Central (approx. 5 hours)",
      ],
    },
  ];

  const data3 = [
    {
      title: "Ideal for",
      points: [
        "Spiritual seekers, meditators, pilgrims, heritage lovers, solo travelers, weekend trippers, and those drawn to mystic traditions and mountain energy.",
      ],
    },
  ];

  const data1 = [
    {
      title: "Top Sightseeing Highlights",
      points: [
        <>
          <strong>Annamalaiyar Temple:</strong> Majestic gopurams and deeply
          spiritual ambiance
        </>,
        <>
          <strong>Girivalam Path: </strong> 14-km circumambulation around the
          holy hill, done barefoot
        </>,
        <>
          <strong>Ramana Maharshi Ashram: </strong> Meditation, silence, and
          teachings of a revered sage
        </>,
        <>
          <strong>Sathanur Dam: </strong>A serene escape with gardens and
          crocodile park nearby
        </>,
        <>
          <strong>Virupaksha Cave & Skandashramam: </strong>Spiritual hiking
          spots above the ashram
        </>,
      ],
    },
  ];

  const data2 = [
    {
      title: "What to Explore",
      points: [
        <>
          Full moon <strong>Girivalam </strong> – Join lakhs of devotees walking
          in spiritual unity
        </>,
        <>
          <strong>Karthigai Deepam Festival </strong>– A massive flame lit atop
          the hill visible for miles
        </>,
        <>Meditate in ancient caves and attend satsangs at the ashrams</>,
        <>Explore heritage shops, traditional food joints, and local crafts</>,
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
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/SubPages/tiruvannamalai-–-the-sacred-flame-of-tamil-nadu-1.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Tiruvannamalai </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <Link to="/neighbourhood"> Neighbourhood </Link> -{" "}
                <a href="">Tiruvannamalai </a>
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
              <h3>Tiruvannamalai </h3>
              <p>
                Tiruvannamalai is a spiritually charged town nestled at the base
                of the Annamalai Hills, famous for the Annamalaiyar Temple, one
                of the Pancha Bhoota Sthalams representing fire (Agni). The town
                is steeped in Shaivite tradition, attracting seekers, saints,
                and tourists from around the globe.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}

        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec neighbourhood">
          <div className="mx-auto p-6 text-gray-800 cards listdatacontent !mb-0">
            <h2 className="text-2xl font-bold text-center mb-6">
              Distance from Chennai
            </h2>
            {data.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent !mb-0">
            {/* <h2 className="text-2xl font-bold text-center mb-6">  What to Explore in Kanchipuram  </h2> */}
            {data1.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent !mb-0">
            {/* <h2 className="text-2xl font-bold text-center mb-6">  Ideal For   </h2> */}
            {data2.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent ">
            {data3.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/*--------------- Explore More Chennai----------------- */}

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
