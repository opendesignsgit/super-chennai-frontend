import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import VisitSlider from "./VisitSlider";
import { Helmet } from "react-helmet-async";

export default function PlacetoVisitStateMuseum() {
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

  const detailsections = [
    {
      id: 1,
      title: "Government Museum Chennai (Egmore)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/state-museum/government-museum-chennai.jpg",
      //   link1: "https://mylaikapaleeswarar.hrce.tn.gov.in/hrcehome/index_temple.php?tid=1",
      link2: "https://maps.app.goo.gl/unFV64nmeAQUF4XV9",
      rating: 4.3,
    },
    {
      id: 2,
      title: "Dakshinachitra Museum (Muttukadu)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/state-museum/dakshinachitra-museum.jpg",
      link1: "https://www.dakshinachitra.net/",
      link2: "https://maps.app.goo.gl/mu59MCvHZpsPaXEv9",
      rating: 4.4,
    },
    {
      id: 3,
      title: "Chennai Rail Museum (Villivakkam)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/state-museum/chennai-rail-museum.jpg",
      //   link1:
      //     "https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=87&action=temple_eo",
      link2: "https://maps.app.goo.gl/H7mJhvdVXrVyM2qZA",
      rating: 4.4,
    },
    {
      id: 4,
      title: "Fort Museum (George Town)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/state-museum/fort-museum.jpg",
      //   link1: "https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=169",
      link2: "https://maps.app.goo.gl/C2dGxC5HJmMyR6w86",
      rating: 4.3,
    },
    {
      id: 5,
      title: "India Seashell Museum",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/state-museum/india-seashell-museum.jpg",
      //   link1: "https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=169",
      link2: "https://maps.app.goo.gl/v8QtNdSEq7xBv3HN7",
      rating: 4.3,
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
        <title>Museums In Chennai : Visit the Iconic Museums</title>
        <meta name="description" content="Explore the finest museums in Chennai, where centuries of history, art, and culture await. Perfect for curious minds and heritage enthusiasts." />
        <link rel="canonical" href="/visit/place-to-visit/museums-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/placeToVisit/state-museum.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>State Museum</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <Link to="/visit/places-to-visit-in-chennai">
                  {" "}
                  Places to Visit{" "}
                </Link>{" "}
                - <a href="">State Museum</a>
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
              <p>Visit &nbsp; in Chennai &nbsp; Visit &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>State Museum</h3>
              <p>
                Explore centuries of art, archaeology, and culture at one of
                India’s oldest and most iconic museums.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8">
          {detailsections.map((section) => {
            const fullStars = Math.floor(section.rating);
            const hasHalfStar = section.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return (
              <div
                key={section.id}
                className="detailapiSec w-full bg-white shadow-md rounded-lg overflow-hidden mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 px-4 pt-4">
                  {section.title}
                </h2>

                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[700px] object-cover mt-4"
                />

                <div className="detailtextbox px-4 pb-4">
                  <h3 className="text-xl font-medium  text-gray-700">
                    {section.title}
                  </h3>

                  {/* Dynamic 5-Star Rating */}
                  <div className="flex items-center space-x-1 mb-6 text-xl">
                    {/* Full Stars */}
                    {[...Array(fullStars)].map((_, i) => (
                      <span key={`full-${i}`} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                    {/* Half Star */}
                    {hasHalfStar && <span className="text-yellow-500">⯪</span>}
                    {/* Empty Stars */}
                    {[...Array(emptyStars)].map((_, i) => (
                      <span key={`empty-${i}`} className="text-gray-300">
                        ★
                      </span>
                    ))}
                    {/* Text Rating */}
                    <span className="ml-2 text-sm text-gray-600">
                      ({section.rating} out of 5)
                    </span>
                  </div>
                  <ul>
                    <li className="flex space-x-6">
                      <a
                        href={section.link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Know More
                      </a>
                      <a
                        href={section.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <VisitSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
