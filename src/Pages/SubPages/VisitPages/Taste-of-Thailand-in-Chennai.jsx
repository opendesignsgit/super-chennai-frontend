import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function TasteofThailandinChennai() {
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

   const nightlifeData = [
  {
    category: "Thai Food in Chennai",
    places: [
      {
        name: "Benjarong ",
        desc: "Elegant setting, authentic flavors, exceptional service",
        locations: [
          { name: "T.T.K. Road", link: "#" },
          ],
      },
      {
        name: "Absolute Thai",
        desc: "Classic Thai menu with vibrant interiors",
        locations: [{ name: "Nungambakkam", link: "#" }],
        locations: [{ name: "Teynampet", link: "#" }],
      },
      {
        name: "Pan Asian at ITC Grand Chola",
        desc: "Luxury dining with regional Thai specialties",
        locations: [{ name: "-", link: "#" }],
      },
      {
        name: "InKo Thai",
        desc: "A chic space blending Thai and Korean influences",
        locations: [{ name: "Besant Nagar", link: "#" }],
      },
      {
        name: "Va Pho",
        desc: "Street-style Thai dishes with modern flair",
        locations: [
          { name: "Anna Salai", link: "#" },
          { name: "Nungambakkam", link: "#" }
        ],
      },
      {
        name: "Chap Chay (The Raintree Hotel, St. Mary's Road)",
        desc: "Customizable stir-fry and wok counter",
        locations: [{ name: "-", link: "#" }],
      },
      {
        name: "Mamagoto (Phoenix MarketCity)",
        desc: "Pan-Asian street food favorites in a vibrant setup",
        locations: [{ name: "-", link: "#" }],
      },
      {
        name: "Street Storyss",
        desc: "Vegetarian Asian street food, includes Thai-style tangy tamarind rice and dumplings.",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
    ],
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
          <img src="images/Visit-Images/SubPages/thai-cuisine-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Taste of Thailand in Chennai </h3>
              <div className="breadCrum">
              <Link to="/visit"> Visit </Link> - <Link to="/food"> Food </Link> - <a href=""> Taste of Thailand in Chennai
 </a>
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
              <h3>Aromatic, Vibrant, and Full of Zing</h3>
              <p>
                Chennai’s growing global palate has warmly embraced Thai cuisine, known for its bold flavors and fresh, fragrant ingredients. From spicy curries to delicate stir-fries, Thai food balances sweet, sour, salty, and spicy in every bite. </p>
<p>Whether you’re indulging in a warm bowl of Tom Yum soup, digging into Pad Thai, or savoring rich green and red curries with jasmine rice, Chennai offers a delightful variety of Thai dining experiences — from upscale fine-dining restaurants to cozy, casual cafes. 
  </p>
            </div>
          </div>
        </div>

    <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
       {nightlifeData.map((section, sectionIdx) => (
        <div key={sectionIdx} className="nightlifesecIn">
          <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.places.map((place, idx) => (
              <div
                key={idx}
                className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-700 mb-3">{place.desc}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {place.locations.map((loc, locIdx) => (
                    <a
                      key={locIdx}
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm bg-blue-50 px-2 py-1 rounded locicon"
                    >
                       {loc.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
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
