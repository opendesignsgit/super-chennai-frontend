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

export default function JapaneseCuisineinChennai() {
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
      category: "Top Japanese Restaurants in Chennai",
      places: [
        {
          name: "Hokkaido Japanese Restaurant",
          desc: "Authentic Hokkaido Japanese cuisine featuring fresh seafood, ramen, and traditional northern Japan flavors in Chennai.",
          locations: [
            {
              name: "Alwarpet ",
              link: "https://maps.app.goo.gl/AnQtEdiBnavZRNDo7 ",
            },
          ],
        },
        {
          name: "Dahlia Restaurant",
          desc: "Elegant Japanese dining with sushi, sashimi, and seasonal ingredients, offering a refined culinary experience.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/i5ivQ3NENjjYJbBo7 ",
            },
          ],
        },
        {
          name: "KooX - Rooftop Asian Grill",
          desc: "Modern Japanese fusion restaurant in Chennai serving innovative sushi rolls, tempura, and grilled delicacies.",
          locations: [
            {
              name: "Nandhanam",
              link: "https://maps.app.goo.gl/YtsX41RuDU4KB4Tq6 ",
            },
          ],
        },
        {
          name: "Teppan Restaurant",
          desc: "Best teppanyaki grill experience in Chennai with live cooking, fresh seafood, and premium Japanese flavors.",
          locations: [
            {
              name: "Alwarpet ",
              link: "https://maps.app.goo.gl/CVUvdREDYd4kanuz8 ",
            },
          ],
        },
        {
          name: "Oyama Restaurant",
          desc: "Authentic Japanese restaurant specializing in kaiseki, sushi, and seasonal dishes crafted with fresh ingredients.",
          locations: [
            {
              name: "Adyar ",
              link: "https://maps.app.goo.gl/VCmfqPvePmmGmjhN7 ",
            },
          ],
        },
        {
          name: "Kuraaku Restaurant",
          desc: "Premium Japanese dining with authentic sushi, sashimi, and innovative fusion dishes in an upscale setting.",
          locations: [
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/wWPdsv2xTywW1A4RA",
            },
          ],
        },
        {
          name: "Oji Ramen Restaurant",
          desc: "Top ramen restaurant in Chennai serving rich broth, handmade noodles, and authentic Japanese flavors.",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/ZwJZbfAkxZEJgBY58",
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
      link: "/places-to-visit",
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
            src="/images/HomePage-Images/japanese-cuisine-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Japanese Cuisine in Chennai</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <a href=""> Japanese Cuisine in Chennai </a>
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
                Delicate Japanese Flavors, Fresh Sushi & Timeless Traditions
              </h3>
              <p>
                Experience authentic Japanese cuisine in Chennai that
                beautifully blends tradition and innovation. From expertly
                crafted sushi and sashimi to comforting bowls of ramen and
                crispy tempura, our restaurants offer an immersive taste of
                Japan’s rich culinary heritage. Whether you seek elegant kaiseki
                dining, casual Japanese sushi bars, or modern izakaya-style
                eateries, Chennai’s Japanese food scene provides fresh, seasonal
                ingredients and meticulous craftsmanship.
              </p>
              <p>
                Discover top Japanese restaurants in Chennai offering refined
                flavors, delicate presentations, and a serene ambiance perfect
                for both intimate dinners and group celebrations.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          {/* <h1 className="text-3xl font-bold mb-10 text-center">
            Top Continental Restaurants in Chennai
          </h1> */}
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
