import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function SouthIndianRestaurantsinChennai() {
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
    category: "Top South Indian Restaurants in Chennai",
    places: [
      {
        name: "Saravana Bhavan (Multiple locations) ",
        desc: "Global ambassador of Tamil tiffin",
        locations: [
          { name: "-", link: "#" },
          ],
      },
      {
        name: "Ratna Cafe",
        desc: "Idlis that melt in sambar",
        locations: [
          { name: "Triplicane", link: "#" },
          { name: "T. Nagar", link: "#" },
        ],
       
      },
      {
        name: "Rayar’s Mess",
        desc: " No-frills, timeless tiffin house",
        locations: [{ name: "Mylapore", link: "#" }],
      },
      {
        name: "Hotel Sangeetha (Multiple branches)",
        desc: "Popular for classic South Indian fare",
        locations: [{ name: "-", link: "#" }],
      },
     ],
  },
  {
    category: "Refined & Regional",
    places: [
      {
        name: "Dakshin – Crowne Plaza",
        desc: "High-end dining across Southern states",
        locations: [
          { name: "Alwarpet", link: "#" },
          ],
      },
      {
        name: "Southern Spice – Taj Coromandel",
        desc: "Regal ambiance, regional menus",
        locations: [{ name: "Nungambakkam", link: "#" }] 
      },
      {
        name: "Mathsya ",
        desc: "Vegetarian favorites in an upscale format",
        locations: [{ name: "Egmore", link: "#" }],
      },
     ],
  },
   {
    category: "Non-Vegetarian South Specialties",
    places: [
      {
        name: "Junior Kuppanna",
        desc: " Kongu-style biryanis and curries",
        locations: [
          { name: "T. Nagar", link: "#" },
           { name: "Velachery", link: "#" },
          ],
      },
      {
        name: "Anjappar / Ponnusamy / Thalappakatti",
        desc: "Tamil Nadu’s most beloved Chettinad and biryani chains",
        locations: [{ name: "-", link: "#" }] 
      },
      {
        name: "Maplai ",
        desc: "Traditional meals with a modern twist.",
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
          <img src="images/Visit-Images/SubPages/italian-cuisine-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>South Indian Restaurants in Chennai</h3>
              <div className="breadCrum">
              <Link to="/visit"> Visit </Link> - <Link to="/food"> Food </Link> - <a href=""> South Indian Restaurants in Chennai

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
              <h3>Where Heritage Meets Everyday Flavor</h3>
              <p>In Chennai, South Indian cuisine isn’t just a tradition — it’s a lifestyle. From dawn-breakfasts of crispy dosas and filter coffee to comforting meals served on banana leaves, the city is a living, breathing culinary map of the South. Each dish — whether from Tamil Nadu, Kerala, Karnataka, or Andhra — tells a story of spice, simplicity, and soul.</p>
<p>Whether you’re craving ghee-laden pongal, fluffy idlis, spicy Chettinad chicken, or Andhra biryani, Chennai’s legendary eateries and hidden gems bring regional flavors to life with authenticity and pride.
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
