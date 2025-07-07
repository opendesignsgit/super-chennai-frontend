import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ContinentalCuisineinChennai() {
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
      category: "Fine Dining & Boutique Settings",
      places: [
        {
          name: "The Flying Elephant – Park Hyatt ",
          desc: "Multi-level dining, European mains, signature cocktails",
          locations: [
            {
              name: "Park Hyatt, Guindy ",
              link: "https://maps.app.goo.gl/Nam3BFr8S3Mi9mpt5",
            },
          ],
        },
        {
          name: "Upper Deck – Vivanta by Taj (Fisherman’s Cove)",
          desc: "Beachfront luxury with grilled seafood and continental classics",
          locations: [
            {
              name: "Kovalam (Fisherman's Cove)",
              link: "https://maps.app.goo.gl/LnEhA3G7z7HoMp218",
            },
          ],
        },
        // {
        //   name: "On D Roof",
        //   desc: "Rooftop bistro known for sizzlers and steaks",
        //   locations: [{ name: "Kodambakkam", link: "#" }],
        // },
      ],
    },
    // {
    //   category: "Upscale & Rooftop Dining",
    //   places: [
    //     {
    //       name: "Peshawri – ITC Grand Chola",
    //       desc: "Slow-cooked NW Frontier cuisine in a rustic setting",
    //       locations: [{ name: "Guindy", link: "#" }],
    //     },
    //     {
    //       name: "The Great Kabab Factory – Radisson Blu",
    //       desc: "Unlimited kabab platters and regional specials",
    //       locations: [{ name: "Egmore", link: "#" }],
    //     },
    //     {
    //       name: "Above Sea Level (The Raintree Hotel)",
    //       desc: "Rooftop dining with North Indian grills and views",
    //       locations: [{ name: "-", link: "#" }],
    //     },
    //   ],
    // },
    {
      category: "Cafés & Casual Chic",
      places: [
        {
          name: "Wild Garden – Amethyst",
          desc: " Elegant garden café with sandwiches, salads, and European cakes",
          locations: [
            {
              name: "Royapettah",
              link: "https://maps.app.goo.gl/haC4trEswB7sRhM96",
            },
          ],
        },
        {
          name: "Ciclo Café",
          desc: "Bike-themed café with continental small plates and wholesome mains",
          locations: [
            {
              name: "Kotturpuram",
              link: "https://maps.app.goo.gl/6RM1VPLNCitJaqFH8",
            },
          ],
        },
      ],
    },
    {
      category: "Bistros & Brunches",
      places: [
        {
          name: "Kipling Cafe",
          desc: "Outdoor seating with a laid-back, global menu",
          locations: [
            {
              name: "ECR (Akkarai)",
              link: "https://maps.app.goo.gl/bFevxvTb7wzAqHcw7",
            },
          ],
        },
        // {
        //   name: "Lloyds Tea House",
        //   desc: "Continental fare with afternoon tea charm",
        //   locations: [{ name: "Gopalapuram", link: "#" }],
        // },
        {
          name: "The Brew Room (Savera Hotel)",
          desc: "Stylish garden café with all-day continental breakfasts",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/pzd8pAdKjzXtNX289",
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
            src="images/Visit-Images/SubPages/continental-cuisine-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Continental Cuisine in Chennai</h3>
              <div className="breadCrum">
                <Link to="/visit"> Visit </Link> -{" "}
                <Link to="/food"> Food </Link> -{" "}
                <a href=""> Continental Cuisine in Chennai </a>
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
              <h3>
                Continental Cuisine in Chennai- Global Comfort with a Gourmet
                Touch
              </h3>
              <p>
                Continental cuisine in Chennai brings together classic European
                and Western dishes — think grilled meats, creamy pastas, flaky
                quiches, roasted vegetables, and buttery sauces. Whether it’s a
                brunch of eggs Benedict, a hearty steak dinner, or a crisp salad
                with wine, the city offers refined experiences in cozy cafés,
                fine-dining restaurants, and stylish bistros.
              </p>
              <p>
                {" "}
                Blending French, Italian, Spanish, and Mediterranean influences,
                Chennai’s continental food scene balances authenticity with
                local creativity — perfect for casual elegance or business meals
                with international flair.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Top Continental Restaurants in Chennai
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
