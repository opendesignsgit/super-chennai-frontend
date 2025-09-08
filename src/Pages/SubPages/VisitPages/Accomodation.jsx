import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/Accomodation.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";
import VisitSlider from "./VisitSlider";
import { Helmet } from "react-helmet-async";

export default function Accomodation() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const AccomodSections = [
    {
      title: "LUXURY HOTELS",
      description:
        "Chennai blends cultural heritage with contemporary luxury, offering iconic hotels and serene resorts. From business stays to family getaways, experience warm hospitality and timeless charm across the city’s finest accommodations.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      imgAlt: "",
      linkText: "Explore More",
      linkUrl: "/visit/accomadation/luxury-hotels-in-chennai",
    },
    {
      title: "AFFORDABLE HOTELS",
      description:
        "Chennai offers Value Stays  that blend comfort, convenience, and value. Ideal for business or leisure, these stays promise warm hospitality, modern amenities, and easy access to the city’s key locations.",
      image: "/images/Visit-Images/AccommodationImage2.jpg",
      imgAlt: "luxury hotels in chennai",
      linkText: "Explore More",
      linkUrl: "/visit/accomadation/affordable-hotels-in-chennai",
    },
    {
      title: "BUDGET STAYS",
      description:
        "Your stay in Chennai can be affordable without compromising on comfort. Discover our curated list of budget-friendly hotels that offer great value, central locations, and a reliable, hassle-free experience.",
      image: "/images/Visit-Images/AccommodationImage3.jpg",
      imgAlt: "5 star hotels in chennai",
      linkText: "Explore More",
      linkUrl: "/visit/accomadation/budget-stay-in-chennai",
    },
    {
      title: "SERVICED APARTMENTS",
      description:
        "Chennai’s serviced apartments offer kitchens, laundry, workspaces, and more — ideal for families and long-stay guests, combining home comforts with hotel-style services and amenities.",
      image: "/images/Visit-Images/AccommodationImage4.jpg",
      imgAlt: "hotels in chennai india",
      linkText: "Explore More",
      linkUrl: "/visit/accomadation/serviced-apartments-in-chennai",
    },
    {
      title: "RESORTS AND VILLAS",
      description:
        "Chennai’s resorts and villas offer the perfect blend of privacy, comfort, and scenic charm — ideal for travellers seeking beachfront serenity, family time, or a luxurious escape just beyond the city.",
      image: "/images/Visit-Images/AccommodationImage5.jpg",
      imgAlt: "beach resorts in chennai",
      linkText: "Explore More",
      linkUrl: "/visit/accomadation/resorts-in-chennai",
    },
  ];

  // const images = [
  //   { src: "/images/sldier1.png", title: "Place to Visit", link: "/page1" },
  //   { src: "/images/sldier1.png", title: "Restaurants", link: "/page2" },
  //   { src: "/images/sldier1.png", title: "Shopping", link: "/page3" },
  //   { src: "/images/sldier1.png", title: "Hidden Gems", link: "/page4" },
  //   { src: "/images/sldier1.png", title: "Place to Visit", link: "/page5" },
  // ];

  const images = [
    {
      src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accommodation",
      link: "/visit/hotel-accommodation-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/restaurants-slide.jpg",
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
      <Helmet>
        <title>Hotel Accommodation in Chennai | Resorts in Chennai</title>
        <meta
          name="description"
          content="Discover premium hotel accommodation in Chennai with luxury resorts, serviced apartments & villas. Comfort & convenience await your perfect stay."
        />
        <link rel="canonical" href="/visit/hotel-accommodation-in-chennai" />
      </Helmet>
      <div>
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img
              src="/images/AccodomationBannerr.jpg"
              alt="chennai accomadation"
            />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>ACCOMMODATION</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai">VISIT</Link> -{" "}
                <Link href="">ACCOMMODATION</Link>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------Accodimation-Banner----------- */}

        {/*--------------- Hotels-Chennai----------------- */}

        <div className="AccodomationPageBecameVolunteerBg">
          <div
            className={`AccodomationTextBackground ${
              scrollDir === "right"
                ? "scroll-rightAccomodation"
                : "scroll-leftAccomodation"
            }`}
            ref={bgTextRef}
          >
            <p>Visit &nbsp; Chennai &nbsp; Visit &nbsp; Chennai</p>
          </div>

          <div className="container max-w-7xl mx-auto px-4">
            {AccomodSections.map((section, index) => (
              <div className="AccodoSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.imgAlt} />
                    <div className="AccodContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="AccodContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage1">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div>
                    </div>
                    <img src={section.image} alt={section.imgAlt} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/*--------------- Hotels-Chennai----------------- */}

        {/*--------------- Explore More Chennai----------------- */}

        <VisitSlider />

        {/*--------------- Explore More Chennai----------------- */}

        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>

        <Becameavolunteer />
      </div>
    </>
  );
}
