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

export default function PlacetoVisitUrbanBeaches() {
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
      title: "Marina Beach (Triplicane)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/urban-beach/marina-beach.jpg",
      //   link1: "https://www.cholamandalartistvillage.com/",
      link2: "https://maps.app.goo.gl/1BmCQvDJAtZhgmSUA",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Elliot's Beach (Besant Nagar)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/urban-beach/elliots-beach.jpg",
      //   link1: "https://www.dakshinachitra.net/",
      link2: "https://maps.app.goo.gl/N4UomwPCYLK3hiSX6",
      rating: 4.4,
    },
    {
      id: 3,
      title: "Neelankarai Beach (Neelankarai)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/urban-beach/neelankarai-beach.jpg",
      //   link1: "https://www.arthouz.com/",
      link2: "https://maps.app.goo.gl/TFYV3DuEBY86Q4D6A",
      rating: 4.4,
    },
    {
      id: 4,
      title: "Covelong Beach (Kovalam)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/urban-beach/covelong-beach.jpg",
      //   link1: "https://www.kalakshetra.in/",
      link2: "https://maps.app.goo.gl/j1QyfQgm8yYbxke77",
      rating: 4.5,
    },
    {
      id: 5,
      title: "Thiruvanmiyur Beach (Thiruvanmiyur)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/urban-beach/thiruvanmiyur-beach.jpg",
      //   link1: "https://www.arthouz.com/",
      link2: "https://maps.app.goo.gl/7riKjdXjMvKpkdSWA",
      rating: 4.4,
    },
  ];

  const images = [
    {
      src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accommodation",
      link: "/visit/hotel-accommodation-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/food-slide.jpg",
      title: "Restaurants",
      link: "/visit/restaurants-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to Visit",
      link: "/visit/places-to-visit-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to Do",
      link: "/visit/things-to-do-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "Itinerary",
      link: "/visit/chennai-itinerary",
    },
    {
      src: "/images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/visit/hidden-places-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/visit/shopping-areas-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/visit/travels-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/visit/wellness-centres-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/visit/events-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/visit/conferences-in-chennai",
    },
  ];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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
            src="/images/Visit-Images/SubPages/placeToVisit/urban-beaches.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Urban Beaches</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <Link to="/visit/places-to-visit-in-chennai">
                  {" "}
                  Places to Visit{" "}
                </Link>{" "}
                - <a href="">Urban Beaches</a>
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
              <h3>Urban Beaches</h3>
              <p>
                Take in the vibrant ambiance, stroll along the lengthy beach,
                and see the busy local life.
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
