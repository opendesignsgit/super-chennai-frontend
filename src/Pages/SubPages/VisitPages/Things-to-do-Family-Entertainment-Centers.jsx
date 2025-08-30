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

export default function ThingstoFamilyEntertainmentCenters() {
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
      title: "Nassaa Uth Hub: Besant Nagar, ECR, Marina Mall",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/nassaa-uth-hub.jpg",
      link1: "https://nassaa.in/ecr/",
      link2: "https://maps.app.goo.gl/nFN9YxBWXQMAC8bR9",
      rating: 4.0,
    },
    {
      id: 2,
      title: "Fun City: Express Avenue Mall (Royapettah), VR Mall (Anna Nagar)",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/down-under.jpg",
      link1: "https://expressavenue.in/funcity.html",
      link2: "https://maps.app.goo.gl/ugGptJn4qhFrY5938",
      rating: 5.0,
    },
    {
      id: 3,
      title:
        "Forum Vijaya Mall (Vadapalani), Nelson Manickam Road (Aminjikarai)",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/lets-bowl.jpg",
      link1: "https://www.forummalls.in/",
      link2: "https://maps.app.goo.gl/86tyZQCdtHLoWeDu5",
      rating: 4.4,
    },
    {
      id: 4,
      title: "VGP Universal Kingdom: ECR",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/timezone-vr-mall.jpg",
      link1: "https://vgpuniversalkingdom.extraa.in/",
      link2: "https://maps.app.goo.gl/uEw7kfDXV6UN2RFn9",
      rating: 4.4,
    },
    {
      id: 5,
      title:
        "Snow Kingdom: Thousand Lights, within VGP Universal Kingdom (ECR)",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/masti-zone.jpg",
      link1: "https://www.snowkingdom.com/chennai.php",
      link2: "https://maps.app.goo.gl/osyXEdjJW2tCDFkWA",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Realite Gaming Cafe: T Nagar",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/mayajaal-bowling-alley.jpg",
      link1: "https://www.realitetechno.com/",
      link2: "https://maps.app.goo.gl/DcUii5SCKtvueJu86",
      rating: 4.4,
    },
    {
      id: 7,
      title: "Ctrl VR: Egmore",
      image:
        "/images/Visit-Images/SubPages/Things-to-do/Bowling Alleys/mayajaal-bowling-alley.jpg",
      link1: "https://www.realitetechno.com/",
      link2: "https://maps.app.goo.gl/DcUii5SCKtvueJu86",
      rating: 4.4,
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
          Family Entertainment Centers in Chennai : Explore the Malls
        </title>
        <meta
          name="description"
          content="From kids’ play zones to gaming & bowling, Family Entertainment Centers in Chennai create the perfect mix of fun, thrill & bonding for every age group."
        />
        <link
          rel="canonical"
          href="/visit/things-to-do/chennai-family-entertainment-centers"
        />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/thingsDoChild/family-entertainment-centers.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Family Entertainment Centers</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <Link to="/visit/things-to-do-in-chennai">Things to do </Link> -{" "}
                <a href="">Family Entertainment Centers</a>
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
              <h3>Family Entertainment Centers</h3>
              <p>
                These are the venues that offer a greater number of recreational
                activities for all age groups.
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
