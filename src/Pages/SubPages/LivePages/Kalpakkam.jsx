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

export default function Kalpakkam() {
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
        "Approx. 70 km via East Coast Road (ECR); around 1.5 to 2 hours’ drive",
      ],
    },
    {
      title: "By Train",
      points: [
        "No direct train station in Kalpakkam; nearest major station is Chengalpattu, about 35 km away",
      ],
    },
  ];

  const data1 = [
    {
      title: "Top Sightseeing Highlights",
      points: [
        <>
          <strong>Kalpakkam Beach:</strong> A clean and lesser-known beach with
          calm surroundings
        </>,
        <>
          <strong>Science & Technology Exhibits:</strong> (entry restricted, for
          those with permission or special events)
        </>,
        <>
          <strong>Sadras Dutch Fort:</strong> A 17th-century fort by the Dutch
          East India Company, 10 km away
        </>,
        <>
          <strong>Mahabalipuram :</strong> UNESCO World Heritage site just 25 km
          north
        </>,
      ],
    },
  ];

  const data2 = [
    {
      title: "What to Explore",
      points: [
        <>Stroll along the tranquil Kalpakkam shoreline</>,
        <>
          Visit <strong>Sadras Fort </strong> for a glimpse into colonial
          maritime history
        </>,
        <>
          Enjoy a quick heritage drive to <strong> Mahabalipuram </strong>or
          temple towns like “Thirukazhukundram”
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
            src="/images/Live-Images/SubPages/kalpakkam-1.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Kalpakkam</h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <Link to="/neighbourhood"> Neighbourhood </Link> -{" "}
                <a href="">Kalpakkam</a>
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
              <h3>Kalpakkam</h3>
              <p>
                Kalpakkam is a serene coastal town located south of Chennai,
                best known for housing India's premier nuclear research centers
                like IGCAR and Madras Atomic Power Station (MAPS). Apart from
                its scientific significance, it offers peaceful beachside charm
                and proximity to heritage sites.
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

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
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
