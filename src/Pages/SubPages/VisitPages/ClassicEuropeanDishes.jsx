import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ClassicEuropeanDishes() {
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
    title: "Pumpkin Tales Restaurant - Alwarpet",
    image: "/images/Visit-Images/SubPages/classic-european-dishes/pumpkin-tales-restaurant.jpg",
    link1: "https://www.pumpkintales.com/",
    link2: "https://maps.app.goo.gl/SZKjbAa5SsUGpfAs9",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Jonah's Bistro (Poes Garden)",
    image: "/images/Visit-Images/SubPages/classic-european-dishes/jonahs-bistro.jpg",
    link1: "https://jonahsbistro.in/",
    link2: "https://maps.app.goo.gl/nwgwe6JUeWpuMU2RA",
    rating: 4.4,
  },
  {
    id: 3,
    title: "Basil With a Twist - T. Nagar",
    image: "/images/Visit-Images/SubPages/classic-european-dishes/basil-with-a-twist.jpg",
    // link1: "https://maps.app.goo.gl/jSacFmeJcjZmx17u9",
    link2: "https://maps.app.goo.gl/qdkCvKmZcAGnVukr6",
    rating: 4.3,
  },
  {
    id: 4,
    title: "Hibiscus Cafe - Injambakkam",
    image: "/images/Visit-Images/SubPages/classic-european-dishes/hibiscus-cafe.jpg",
    // link1: "https://www.littleitaly.in/",
    link2: "https://maps.app.goo.gl/z9vT86957GkXTg4e9",
    rating: 4.2,
  },
  {
    id: 5,
    title: "East Coast at Madras Square - Neelankarai",
    image: "/images/Visit-Images/SubPages/classic-european-dishes/east-coast-at-madras-square.jpg",
    link1: "https://madrassquare.com/east-coast/",
    link2: "https://maps.app.goo.gl/LPs2CYZTZMwmNs2T6",
    rating: 4.4,
  },
];

  const images = [
    { src: "images/Visit-Images/SubPages/accomodation-slide.jpg", title: "Accomodation", link: "/accomodation" },
    { src: "images/Visit-Images/SubPages/food-slide.jpg", title: "Food", link: "/food" },
    { src: "images/Visit-Images/SubPages/places-to-visit-slide.jpg", title: "Places to Visit", link: "/places-to-visit" },
    { src: "images/Visit-Images/SubPages/things-to-do-slide.jpg", title: "Things to Do", link: "/things-to-do" },
    { src: "images/Visit-Images/SubPages/itinerary-slide.jpg", title: "itinerary", link: "/itinerary" },
     { src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg", title: "Hidden Gems", link: "/hidden-gems" },
      { src: "images/Visit-Images/SubPages/shopping-slide.jpg", title: "Shopping", link: "/shopping" },
       { src: "images/Visit-Images/SubPages/travel-tips-slide.jpg", title: "Travel Tips", link: "/travel-tips" },
        { src: "images/Visit-Images/SubPages/wellness-slide.jpg", title: "Wellness ", link: "/wellness" },
        { src: "images/Visit-Images/SubPages/events-slide.jpg", title: "Events ", link: "/events" },
        { src: "images/Visit-Images/SubPages/conferences-slide.jpg", title: "Conferences ", link: "/conferences" },

        
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
          <img src="images/Visit-Images/SubPages/continental-cuisine-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Classic European Dishes</h3>
              <div className="breadCrum">
              <Link to="/visit"> Visit </Link> - <Link to="/food"> Food </Link> - <a href=""> Classic European Dishes </a>
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
              <h3>Classic European Dishes</h3>
              <p>
               Savor well-known dishes like roasted chicken, grilled steaks, and creamy pasta dishes that showcase the variety of Continental cuisine.  

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
            <h2 className="text-2xl font-semibold text-gray-800 px-4 pt-4">{section.title}</h2>

            <img
              src={section.image}
              alt={section.title}
              className="w-full h-[700px] object-cover mt-4"
            />

          

            <div className="detailtextbox px-4 pb-4">
  <h3 className="text-xl font-medium  text-gray-700">{section.title}</h3>

    {/* Dynamic 5-Star Rating */}
            <div className="flex items-center space-x-1 mb-6 text-xl">
              {/* Full Stars */}
              {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`} className="text-yellow-500">★</span>
              ))}
              {/* Half Star */}
              {hasHalfStar && <span className="text-yellow-500">⯪</span>}
              {/* Empty Stars */}
              {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`} className="text-gray-300">★</span>
              ))}
              {/* Text Rating */}
              <span className="ml-2 text-sm text-gray-600">({section.rating} out of 5)</span>
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

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
                <h4>Explore more of Chennai</h4>
              <p>
                Chennai is a city full of sites where you may go exploring every
                single day. Explore the city's various hidden treasures based on
                your current mood.
              </p>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className="ExplorePageSliderImage">
                    <a href={img.link} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={img.src}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        {/* Gradient Background */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">
                          {img.title}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
