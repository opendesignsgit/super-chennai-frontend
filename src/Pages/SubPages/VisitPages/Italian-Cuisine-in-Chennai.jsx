import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ItalianCuisineinChennai() {
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
    category: "Top Italian Spots in Chennai",
    places: [
      {
        name: "Toscana (Alwarpet / Nungambakkam)",
        desc: " Award-winning, elegant and authentic",
        locations: [
          { name: "Alwarpet", link: "#" },
          { name: "Nungambakkam", link: "#" },
          ],
      },
      {
        name: "Little Italy",
        desc: "Purely vegetarian Italian classics",
        locations: [
          { name: "Besant Nagar", link: "#" },
          { name: "Anna Nagar", link: "#" },
        ],
         
      },
      {
        name: "The Pasta Bar Veneto",
        desc: " Affordable, family-friendly trattoria-style food",
        locations: [
          { name: "Velachery", link: "#" },
          { name: "Nungambakkam", link: "#" },
        ],
          
      },
      {
        name: "Azzuri Bay",
        desc: " Italian-Asian fusion with an ambient rooftop setting",
        locations: [{ name: "Adyar", link: "#" }],
      },
      {
        name: "Focaccia at Hyatt Regency",
        desc: " Luxury fine-dining with wood-fired excellence",
        locations: [{ name: "Teynampet", link: "#" }],
      },
      {
        name: "La Pino'z Pizza",
        desc: "Fast-casual pizza with Indian-Italian flair",
        locations: [
          { name: "Velachery", link: "#" },
          { name: "Nungambakkam", link: "#" }
        ],
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
              <h3>Italian Cuisine in Chennai </h3>
              <div className="breadCrum">
              <Link to="/visit"> Visit </Link> - <Link to="/food"> Food </Link> - <a href=""> Italian Cuisine in Chennai </a>
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
              <h3>Rustic, Refined, and Ready to Impress </h3>
              <p> From hand-tossed pizzas to silky pastas and creamy risottos, Italian cuisine has found a delicious second home in Chennai. Whether you're looking for a candlelit meal with burrata and red wine or a casual slice of Neapolitan pizza on the go, the city offers a taste of Italy at every price point.
 </p>
<p> Expect authentic ingredients — think extra virgin olive oil, sun-dried tomatoes, and fresh basil — served with flair in settings that range from open-kitchen pizzerias to rooftop trattorias. It’s not just a meal; it’s a celebration of simple, soul-satisfying flavors.
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
