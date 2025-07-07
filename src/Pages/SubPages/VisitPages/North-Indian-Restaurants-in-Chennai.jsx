import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function NorthIndianRestaurantsinChennai() {
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
      category: "Authentic & Family-Friendly",
      places: [
        {
          name: "Zaitoon ",
          desc: " Pan-North Indian with signature kebabs & biryanis",
          locations: [
            {
              name: "Adyar ",
              link: "https://maps.app.goo.gl/FKMYvrFsiBqRFWNa9",
            },
            {
              name: "Anna Nagar ",
              link: "https://maps.app.goo.gl/5FD4MBcwWccsv2nX9",
            },
            {
              name: "Nungambakkam ",
              link: "https://maps.app.goo.gl/RscMDGUcqK7fDMJc7",
            },
            {
              name: "Royapettah ",
              link: "https://maps.app.goo.gl/NcLsoJgJxsPvvvTGA",
            },
          ],
        },
        {
          name: "Kakada Ramprasad",
          desc: "Pure veg North Indian fare with chaats & mithai",
          locations: [
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/PYRyWhmiGLPkaegj9",
            },
            {
              name: "George Town",
              link: "https://maps.app.goo.gl/qfS4piRdnhVyYcs87",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/T72iDy66mJhC1u7W8",
            },
            {
              name: "Royapettah",
              link: "https://maps.app.goo.gl/XMjM6a4AuhdQLHJ56",
            },
          ],
        },
        {
          name: "Pakwan",
          desc: "  Royal North Indian thalis in an ornate setting",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/a31ys9iV3cZcPrTBA",
            },
          ],
        },
        {
          name: "Delhi Highway",
          desc: "Vegetarian delights from Delhi’s culinary lanes",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/sr9ZrDz3np63zFPH6",
            },
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/H7itBpfS1KXKwUcM7",
            },
          ],
        },
      ],
    },
    {
      category: "Grill & Tandoor Specialists",
      places: [
        // {
        //   name: "Sigree",
        //   desc: "Kebabs, curries & buffet spreads",
        //   locations: [
        //     { name: "Vadapalani", link: "#" },  { name: "Anna Nagar", link: "#" },
        //     ],
        // },
        {
          name: "Copper Chimney  (Cathedral Road / Phoenix Mall)",
          desc: "Long-standing favorite for smoky tandoor classics",
          locations: [
            {
              name: "Cathedral Road",
              link: "https://maps.app.goo.gl/1FXhBtZdZiqTjxwP9",
            },
            {
              name: "Velachery (Phoenix MarketCity)",
              link: "https://maps.app.goo.gl/PX3io55XXPBJhXhz5",
            },
          ],
        },
        {
          name: "Charminar Biryani Centre ",
          desc: "North-style biryanis with cult status",
          locations: [
            {
              name: "Royapettah",
              link: "https://maps.app.goo.gl/BwdB2v915gDqZsqC9",
            },
          ],
        },
      ],
    },
    {
      category: "Upscale & Rooftop Dining",
      places: [
        {
          name: "Peshawri – ITC Grand Chola",
          desc: "Slow-cooked NW Frontier cuisine in a rustic setting",
          locations: [
            {
              name: "Guindy",
              link: "https://maps.app.goo.gl/GuUi9U9MVx2YrHyB6",
            },
          ],
        },
        {
          name: "The Great Kabab Factory – Radisson Blu",
          desc: "Unlimited kabab platters and regional specials",
          locations: [
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/86WK75FdPKfuwxES6",
            },
          ],
        },
        {
          name: "Above Sea Level (The Raintree Hotel)",
          desc: "Rooftop dining with North Indian grills and views",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/3fReDyt2uRto9eS99",
            },
          ],
        },
      ],
    },
  ];

  const images = [
    {
      src: "images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accomodation",
      link: "/accomodation",
    },
    {
      src: "images/Visit-Images/SubPages/food-slide.jpg",
      title: "Food",
      link: "/food",
    },
    {
      src: "images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to Visit",
      link: "/places-to-visit",
    },
    {
      src: "images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to Do",
      link: "/things-to-do",
    },
    {
      src: "images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "itinerary",
      link: "/itinerary",
    },
    {
      src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hidden-gems",
    },
    {
      src: "images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/shopping",
    },
    {
      src: "images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/travel-tips",
    },
    {
      src: "images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/wellness",
    },
    {
      src: "images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/events",
    },
    {
      src: "images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/conferences",
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
            src="images/Visit-Images/SubPages/north-indian-cuisine-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>North Indian Restaurants in Chennai</h3>
              <div className="breadCrum">
                <Link to="/visit"> Visit </Link> -{" "}
                <Link to="/food"> Food </Link> -{" "}
                <a href=""> North Indian Restaurants in Chennai </a>
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
              <h3>Bold Spices, Rich Gravies & Timeless Tandoors</h3>
              <p>
                {" "}
                Chennai’s love for North Indian cuisine runs deep — rich
                curries, chargrilled kebabs, soft rotis, and comforting dal
                makhani are staples across the city. Whether you're looking for
                a festive Punjabi thali, a quiet bowl of butter paneer with
                naan, or an indulgent Mughlai biryani, Chennai’s food scene
                brings the North to the South with flair.
              </p>
              <p>
                {" "}
                Restaurants range from traditional dhabas and family-run
                kitchens to elegant rooftop lounges and five-star dining rooms,
                serving dishes from Delhi, Lucknow, Amritsar, and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Top North Indian Restaurants in Chennai
          </h1>
          {nightlifeData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn">
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>

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
