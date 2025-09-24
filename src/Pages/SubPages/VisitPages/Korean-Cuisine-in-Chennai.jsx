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

export default function KoreanCuisineinChennai() {
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
      category: "Top Korean Restaurants in Chennai",
      places: [
        {
          name: "Aeseo",
          desc: "Experience authentic Korean flavors with traditional BBQ, bibimbap, and savory stews in a cozy setting.",
          locations: [
            {
              name: "Raja Annamalai Puram ",
              link: "https://maps.app.goo.gl/3NKKG3tyi46Nn2ws6",
            },
          ],
        },
        {
          name: "Kims BBQ",
          desc: "Savor sizzling Korean BBQ grills paired with classic sides like kimchi and flavorful Korean appetizers.",
          locations: [
            {
              name: "Kotturpuram",
              link: "https://maps.app.goo.gl/qor4VPky9nT4SCEt8",
            },
          ],
        },
        {
          name: "Samchon Bunsik",
          desc: "Enjoy casual Korean street food favorites including tteokbokki, kimbap, and crispy fried chicken in a vibrant atmosphere.",
          locations: [
            {
              name: "Thiruvanmiyur",
              link: "https://maps.app.goo.gl/M3P1mQ7kC6M948mY8",
            },
          ],
        },
        {
          name: "Ambrosia",
          desc: "Annyeong Haseyo! Ambrosia is back with a refreshed look, serving the best of Korean & Japanese delicacies in a cozy, beautifully designed space.",
          locations: [
            {
              name: "Teynampet",
              link: "https://maps.app.goo.gl/xqh9EzJZoKCc2ENt6",
            },
          ],
        },
        {
          name: "Another Kitchen",
          desc: "It brings you a fine dining experience with global flavors, crafted from fresh ingredients for a truly memorable meal.",
          locations: [
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/TNgitjovztMJiniU7",
            },
          ],
        },
        {
          name: "Café Dokebi",
          desc: "Café Dokebi is a quaint little spot perfect for enjoying authentic Korean flavors with a warm vibe.",
          locations: [
            {
              name: "Adyar Club Gate Road",
              link: "https://maps.app.goo.gl/dcXteLEQpufQFzdG6",
            },
          ],
        },
        {
          name: "Korean Culture Café",
          desc: "Korean Culture Café in Anna Nagar offers an immersive experience with comforting Korean food and a touch of Seoul’s vibrant culture.",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/HYQZ38SFAdro2pci6",
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
          <img src="/images/HomePage-Images/korean-cuisine-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Korean Cuisine in Chennai</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <a href=""> Korean Cuisine in Chennai </a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection detailIntro !mb-0">
          <div className="container max-w-7xl mx-auto px-4 !mb-0">
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
              <h3>Bold Kimchi, Sizzling BBQ & Timeless Korean Flavors</h3>
              <p>
                Savor the vibrant and bold flavors of Korean cuisine in Chennai
                that bring the heart of Seoul to your table. From sizzling
                Korean BBQ grills and spicy kimchi stews to colorful bibimbap
                bowls and savory pajeon pancakes, our Korean restaurants
                specialize in authentic recipes crafted with premium
                ingredients. Whether you’re dining at casual Korean grill
                restaurants, traditional eateries, or trendy Korean bistros in
                Chennai, experience warm hospitality and dynamic flavors.
                Perfect for lovers of Korean food near me, these restaurants
                deliver a true taste of Korea’s rich culinary culture and modern
                innovations.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife !mt-0">
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
