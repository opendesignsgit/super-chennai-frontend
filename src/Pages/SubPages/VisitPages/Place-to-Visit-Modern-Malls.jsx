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

export default function PlacetoVisitModernMalls() {
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
      title: "Phoenix MarketCity (Velachery)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/modern-malls/phoenix-marketcity.jpg",
      link1: "https://www.phoenixmarketcity.com/chennai",
      link2: "https://maps.app.goo.gl/cSZ7c7XA4PFotP2i7",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Express Avenue Mall (Royapettah)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/modern-malls/express-avenue-mall.jpg",
      link1: "https://www.expressavenue.in/",
      link2: "https://maps.app.goo.gl/785Ei7GZuqecsJyM9",
      rating: 4.4,
    },
    {
      id: 3,
      title: "VR Chennai (Anna Nagar)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/modern-malls/vr-chennai.jpg",
      link1: "https://vrchennai.com/",
      link2: "https://maps.app.goo.gl/jpviGt8k9kYBRAsr9",
      rating: 4.5,
    },
    {
      id: 4,
      title: "Forum Vijaya Mall (Vadapalani)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/modern-malls/forum[vijaya-mall.jpg",
      link1: "https://www.nexusselecttrust.com/nexus-vijaya",
      link2: "https://maps.app.goo.gl/UGhZrwTqK5TTRmXGA",
      rating: 4.4,
    },
    {
      id: 5,
      title: "Spencer Plaza (Anna Salai)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/modern-malls/spencer-plaza.jpg",
      link1: "https://www.spencerplaza.co.in/",
      link2: "https://maps.app.goo.gl/GcbjjwLoK5ntDMUE8",
      rating: 4.0,
    },
    {
      id: 6,
      title: "Aero Hub ",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOsKDuedBt5QDUCjhYE4bUuD1nAXGrtb1Tsy8nd=s3072-v1",
      link1: "https://aerohub.in/",
      link2: "https://maps.app.goo.gl/TyvMbuDgepEyoRYU7",
      rating: 4.0,
    },
  ];

  const UpcomingMalls = [
    {
      id: 1,
      title: "XB Towers Mall (Velachery)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/modern-malls/XB-Tower.jpg",
      link1: "",
      link2: "https://maps.app.goo.gl/FGM7S4DtHFaXissS6",
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
        <title>Malls in Chennai | Entertainment in Chennai</title>
        <meta
          name="description"
          content="Step into the bustling malls in Chennai where fashion trends, eateries, and entertainment come alive — ideal for family outings or casual hangouts."
        />
        <link rel="canonical" href="/visit/place-to-visit/malls-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/placeToVisit/modern-malls.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Modern Malls</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <Link to="/visit/places-to-visit-in-chennai">
                  {" "}
                  Places to Visit{" "}
                </Link>{" "}
                - <a href="">Modern Malls</a>
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
              <h3>Modern Malls</h3>
              <p>
                Enjoy a variety of culinary options, entertainment, and retail
                therapy at the city's modern centers.
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

        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="workIntro">
            <h3>Upcoming Malls</h3>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8">
          {UpcomingMalls.map((section) => {
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
