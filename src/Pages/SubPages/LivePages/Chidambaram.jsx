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

export default function Chidambaram() {
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
      points: [
        " Approx. 235 km via East Coast Road (ECR) or NH32 – around 5 to 5.5 hours’ drive",
      ],
    },
    {
      title: "By Train",
      points: [
        "Direct trains from Chennai Egmore to Chidambaram Railway Station (approx. 4.5 to 5 hours)",
      ],
    },
  ];

  const data3 = [
    {
      title: "Ideal for",
      points: [
        " Devotees, cultural historians, architecture lovers, classical art enthusiasts, spiritual travelers, and weekend explorers seeking a blend of divinity and heritage.",
      ],
    },
  ];

  const data1 = [
    {
      title: "Top Sightseeing Highlights",
      points: [
        <>
          <strong>Thillai Nataraja Temple:</strong> Grand Dravidian
          architecture, Chit Sabha, and the famed Chidambara Rahasyam
        </>,
        <>
          <strong>Govindaraja Perumal Temple:</strong> A significant Vishnu
          temple in the same complex
        </>,
        <>
          <strong>Annamalai University Campus:</strong> A walk through academic
          heritage
        </>,
        <>
          <strong>Pichavaram Mangrove Forest (nearby) :</strong> Second-largest
          mangrove forest in the world with boat rides through lush green
          waterways
        </>,
        <>
          <strong>Kali Temple & Sivakami Amman Shrine</strong>
        </>,
      ],
    },
  ];

  const data2 = [
    {
      title: "What to Explore",
      points: [
        <>
          Witness <strong> daily temple rituals </strong> and{" "}
          <strong> evening deeparadhana </strong> in the golden Chit Sabha
        </>,
        <>
          Learn about the <strong> Chidambara Rahasyam </strong> – the “Secret
          of Chidambaram” believed to signify formlessness or the cosmic space
          (Akasha)
        </>,
        <>
          Classical dance performances, especially{" "}
          <strong> Bharatanatyam,</strong> are sometimes held at the temple
          premises
        </>,
        <>
          Combine your trip with a nature visit to <strong>Pichavaram </strong>{" "}
          (just 15 km away)
        </>,
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
            src="/images/Live-Images/SubPages/chidambaram-1.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Chidambaram</h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <Link to="/neighbourhood"> Neighbourhood </Link> -{" "}
                <a href="">Chidambaram</a>
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
              <h3>Chidambaram</h3>
              <p>
                Chidambaram is an ancient temple town celebrated for the Thillai
                Nataraja Temple, dedicated to Lord Shiva in his cosmic dancer
                form – Nataraja. The town is a spiritual and cultural landmark
                in Tamil Nadu, reflecting classical art, temple architecture,
                and deep Saiva Siddhanta traditions.
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
