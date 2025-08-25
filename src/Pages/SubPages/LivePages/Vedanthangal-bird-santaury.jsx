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

export default function VedanthangalBirdSantuary() {
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
      points: ["Approx. 90 km via NH32 – around 2 to 2.5 hours’ drive"],
    },
    {
      title: "By Train",
      points: [
        "Nearest railway station is Chengalpattu Junction (about 40 km away), with good connectivity from Chennai",
      ],
    },
  ];

  const data3 = [
    {
      title: "Ideal for",
      points: [
        "Bird watchers, wildlife photographers, school trips, families, and anyone seeking a peaceful nature escape close to Chennai.",
      ],
    },
  ];

  const data1 = [
    {
      title: "Top Sightseeing Highlights",
      points: [
        <>
          <strong>Bird Viewing Towers:</strong> Panoramic views of nesting and
          feeding birds
        </>,
        <>
          <strong>Interpretation Centre:</strong>Insight into bird species and
          migration patterns
        </>,
        <>
          <strong>Watch the Migratory Season (Nov–Feb):</strong> Spot pelicans,
          herons, ibises, storks, and more
        </>,
        <>
          <strong>Lake and Marshlands: </strong>Peaceful walks alongside the
          bird habitats
        </>,
      ],
    },
  ];

  const data2 = [
    {
      title: "What to Explore",
      points: [
        <>Early morning or evening birdwatching sessions</>,
        <>Nature walks guided by forest staff</>,
        <>Photography sessions amid the serene wetland landscape</>,
        <>Educational visits for children and school groups</>,
        <>Seasonal visits to see birds nesting in colonies</>,
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
            src="/images/Live-Images/SubPages/vedanthangal-bird-sanctuary-2.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Vedanthangal Bird Sanctuary </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <Link to="/neighbourhood"> Neighbourhood </Link> -{" "}
                <a href="">Vedanthangal Bird Sanctuary </a>
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
              <h3>Vedanthangal Bird Sanctuary </h3>
              <p>
                Vedanthangal, a serene village sanctuary in Tamil Nadu, is home
                to one of India’s oldest bird sanctuaries. Known for its
                seasonal wetlands and large flocks of migratory birds,
                especially painted storks and pelicans, it offers a peaceful
                retreat into nature’s rhythm.
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

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
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
