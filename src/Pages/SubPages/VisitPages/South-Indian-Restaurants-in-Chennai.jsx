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
      category: "Iconic & Traditional",
      places: [
        {
          name: "Saravana Bhavan (Multiple locations) ",
          desc: "Global ambassador of Tamil tiffin",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/8ahFSrQDkSE47kDV6",
            },
            {
              name: "Triplicane",
              link: "https://maps.app.goo.gl/DXzobJhPPGY96hK28",
            },
            {
              name: "CIT Nagar",
              link: "https://maps.app.goo.gl/gZKaRu5kqzJZvso78",
            },
            {
              name: "Perungudi",
              link: "https://maps.app.goo.gl/7Qum8QaE1Ydq5KaH7",
            },
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/A6FwkF2wocvf7JH17",
            },
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/BkFJR37YqDFZK9dH7",
            },
            {
              name: "Purasaiwakkam",
              link: "https://maps.app.goo.gl/6GFKcvwbVxgWeDkN7",
            },
            {
              name: "George Town",
              link: "https://maps.app.goo.gl/uwvUp3bk8w8cxKdi8",
            },
            {
              name: "Alandur",
              link: "https://maps.app.goo.gl/Nc4jsKDcg3xQcqEA8",
            },
            {
              name: "Maraimalai Nagar",
              link: "https://maps.app.goo.gl/S17wL3rSL3d48ksi6",
            },
          ],
        },
        {
          name: "Ratna Cafe",
          desc: "Idlis that melt in sambar",
          locations: [
            {
              name: "Triplicane",
              link: "https://maps.app.goo.gl/N4wPYJtuCjb2Tnov9",
            },
            // { name: "T. Nagar", link: "#" },
          ],
        },
        {
          name: "Rayar’s Mess",
          desc: " No-frills, timeless tiffin house",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/VzxauGLhQW9mF1xH9",
            },
          ],
        },
        {
          name: "Hotel Sangeetha (Multiple branches)",
          desc: "Popular for classic South Indian fare",
          locations: [
            {
              name: "Raja Annamalai Puram",
              link: "https://maps.app.goo.gl/3PzDKHPM1VeUuYxb9",
            },
            {
              name: "Nandambakkam",
              link: "https://maps.app.goo.gl/SfFrqcBsUkwmMNF36",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/5MhUqZRtxRYoVzTx6",
            },
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/swGCkCfxB7DfkG8x6",
            },
            {
              name: "Mandavelipakkam",
              link: "https://maps.app.goo.gl/ESVGQ8NxLHkQ4LWL9",
            },
            {
              name: "Thousand Lights",
              link: "https://maps.app.goo.gl/W9qU5Bk912GADzgL8",
            },
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/PU3EGFHeaE3Ra1qV8",
            },
            {
              name: "Parry's Corner",
              link: "https://maps.app.goo.gl/hxybAHf6oBGBWiSS9",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/PevsqiXgXagwAuxf6",
            },
          ],
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
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/HTmcRGRUZ6qr7QwE8",
            },
          ],
        },
        {
          name: "Southern Spice – Taj Coromandel",
          desc: "Regal ambiance, regional menus",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/sVbiiVr9jErSkeWp6",
            },
          ],
        },
        {
          name: "Mathsya ",
          desc: "Vegetarian favorites in an upscale format",
          locations: [
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/d2CZ3dsGtxAfJZo37",
            },
          ],
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
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/Af9cWPKJKYvzBGUr9",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/YVgvZdvcQ8Tu3KfK9",
            },
            {
              name: "Nandanam",
              link: "https://maps.app.goo.gl/XmX9ros525RdTDB16",
            },
            {
              name: "Guindy (Uptown)",
              link: "https://maps.app.goo.gl/YVgvZdvcQ8Tu3KfK9",
            },
          ],
        },
        {
          name: "Anjappar / Ponnusamy / Thalappakatti",
          desc: "Tamil Nadu’s most beloved Chettinad and biryani chains",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/L9SdwYjbjPW7G71v8",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/DRYyZZN3RFeyHnoTA",
            },
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/4w7kWDwVmvryBZvv8",
            },
          ],
        },
        {
          name: "Madras Maplai Restaurant",
          desc: "Traditional meals with a modern twist.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/j852haA2mKxR5SMr8",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/aJ6q1KdhN2yyVwMF9",
            },
          ],
        },
      ],
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
      link: "/things-to-do",
    },
    {
      src: "/images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "Itinerary",
      link: "/visit/chennai-itinerary",
    },
    {
      src: "/images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hidden-gems",
    },
    {
      src: "/images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/visit/shopping-areas-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/travel-tips",
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
            src="/images/Visit-Images/SubPages/south-indian-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>South Indian Restaurants in Chennai</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <a href=""> South Indian Restaurants in Chennai</a>
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
              <p>
                In Chennai, South Indian cuisine isn’t just a tradition — it’s a
                lifestyle. From dawn-breakfasts of crispy dosas and filter
                coffee to comforting meals served on banana leaves, the city is
                a living, breathing culinary map of the South. Each dish —
                whether from Tamil Nadu, Kerala, Karnataka, or Andhra — tells a
                story of spice, simplicity, and soul.
              </p>
              <p>
                Whether you’re craving ghee-laden pongal, fluffy idlis, spicy
                Chettinad chicken, or Andhra biryani, Chennai’s legendary
                eateries and hidden gems bring regional flavors to life with
                authenticity and pride.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Top South Indian Restaurants in Chennai
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

            <VisitSlider/>

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
