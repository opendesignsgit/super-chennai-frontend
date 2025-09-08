import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/Css/VisitPage.css";
import Becameavolunteer from "../Components/BecameAVolunteer";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import VisitChennaiMarquee from "../Components/VisitChennaiMarquee";
// import { Helmet } from "react-helmet";
import SEO from "../Components/SEO";
import { Helmet } from "react-helmet-async";

export default function Visit() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const [previewSrc, setPreviewSrc] = useState(
    "/images/Work-Images/employment.jpg"
  );
  const [hoverIndex, setHoverIndex] = useState(null);
  const [fade, setFade] = useState(true);
  const tooltipRef = useRef(null);

  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbSlider.current);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    arrows: true,
    fade: true,
    infinite: false,
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: 11,
    focusOnSelect: true,
    infinite: false,
    vertical: true,
    arrows: false,
    verticalSwiping: false,
  };

  // New-Update

  const items = [
    {
      label: "Accommodation",
      image: "/images/Visit-Images/accomodation.jpg",
      link: "/visit/hotel-accommodation-in-chennai",
      imgAlt: "hotel accommodation in chennai",
    },
    {
      label: "Restaurants",
      image: "/images/Visit-Images/food.jpg",
      link: "/visit/restaurants-in-chennai",
      imgAlt: "mexican food chennai",
    },
    {
      label: "Places to visit",
      image: "/images/Visit-Images/places-to-visit.jpg",
      link: "/visit/places-to-visit-in-chennai",
      imgAlt: "places to visit in chennai",
    },
    {
      label: "Things to do",
      image: "/images/Visit-Images/things-to-do.jpg",
      link: "/visit/things-to-do-in-chennai",
      imgAlt: "things to do in chennai",
    },
    {
      label: "Itinerary",
      image: "/images/Visit-Images/itinerary.jpg?",
      link: "/visit/chennai-itinerary",
      imgAlt: "chennai itinerary",
    },
    {
      label: "Hidden Gems",
      image: "/images/Visit-Images/hidden-gems.jpg",
      link: "/visit/hidden-places-in-chennai",
      imgAlt: "hidden places in chennai",
    },
    {
      label: "Shopping",
      image: "/images/Visit-Images/shopping.jpg",
      link: "/visit/shopping-areas-in-chennai",
      imgAlt: "best shopping malls in chennai",
    },
    {
      label: "Travel Tips",
      image: "/images/Visit-Images/travel-tips.jpg",
      link: "/visit/travels-chennai",
      imgAlt: "travels chennai",
    },
    {
      label: "Wellness",
      image: "/images/Visit-Images/wellness.jpg",
      link: "/visit/wellness-centres-in-chennai",
      imgAlt: "wellness clinic chennai",
    },
    {
      label: "Events",
      image: "/images/Visit-Images/events.jpg?text=Image+10",
      link: "/visit/events-in-chennai",
      imgAlt: "business events in chennai",
    },

    {
      label: "Conferences",
      image: "/images/Visit-Images/conferences.jpg",
      link: "/visit/conferences-in-chennai",
      imgAlt: "conferences in chennai",
    },
  ];

  // Tooltip follows cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (tooltipRef.current) {
        tooltipRef.current.style.top = `${e.clientY + 20}px`;
        tooltipRef.current.style.left = `${e.clientX + 20}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const infoData = [
    {
      title: "Scenic & Relaxing",
      desc: "Unwind at some of the most popular beaches in Chennai, like Marina, Elliot’s, and Thiruvanmiyur. From sunrise yoga and cycling trails to seaside cafés, these coastal spots offer the perfect blend of calm and charm.",
      icon: "/images/Visit-Images/icons/Scenic-Relaxing.svg",
      imgAlt: "attractions chennai",
    },
    {
      title: "Buzzing City Life",
      desc: "Experience the vibrant pulse of Chennai through its premium lifestyle destinations. Top malls in Chennai like Phoenix Marketcity, Express Avenue, and VR Chennai house everything from luxury brands to gaming zones and fine dining. Enjoy the latest blockbusters at popular Chennai multiplexes, or unwind with art exhibits and live events that keep the city buzzing.",
      icon: "/images/Visit-Images/icons/Buzzing-City-Life.svg",
      imgAlt: "chennai sightseeing",
    },
    {
      title: "Where Flavour Meets Culture",
      desc: "The soul of the city is on your plate. Explore iconic Chennai restaurants, aromatic South Indian breakfasts, and contemporary cafes in Chennai that blend local charm with global flair — perfect for casual bites or gourmet evenings.",
      icon: "/images/Visit-Images/icons/Where-Flavour-Meets-Culture.svg",
      imgAlt: "indo chinese restaurant chennai",
    },
    {
      title: "Weekend Getaways, Chennai Style",
      desc: "Chennai offers stays for every budget — from affordable city hotels and serviced apartments to scenic beach resorts in Chennai along ECR. Enjoy a cozy budget stay in Chennai or unwind in luxury by the sea.",
      icon: "/images/Visit-Images/icons/Weekend-Getaways-Chennai-Style.svg",
      imgAlt: "chennai weekend places",
    },
    {
      title: "Timeless Chennai – Where Culture Evolves Gracefully",
      desc: "From heritage places in Chennai like Kapaleeshwarar Temple and forts in Chennai to modern hubs like Express Avenue, the city blends tradition with trend. Immerse in Chennai culture, then unwind with fusion cuisine or a show at a Chennai theatre.",
      icon: "/images/Visit-Images/icons/Timeless-Chennai-Where-Culture-Evolves-Gracefully.svg",
      imgAlt: "best temple in chennai",
    },
  ];
  const infoData1 = [
    {
      title: "Catch the Waves or Cruise the Track",
      desc: "Try surfing in Kovalam, race go-karts at a karting zone, or plan a heritage day trip to Mahabalipuram’s UNESCO-listed sites.",
      icon: "/images/Visit-Images/icons/Catch-the-Waves-or-Cruise-the-Track.svg",
      imgAlt: "places to go chennai",
    },
    {
      title: "Shop the Spectrum",
      desc: "From silk sarees at T. Nagar to designer finds on Khader Nawaz Khan Road and quirky picks at local flea markets, Chennai shopping has it all.",
      icon: "/images/Visit-Images/icons/Shop-the-Spectrum.svg",
      imgAlt: "shopping malls in chennai",
    },
    {
      title: "Unwind with Art & Entertainment",
      desc: "Attend live concerts, stand-up comedy, indie theatre, or cultural festivals that light up Chennai’s nightlife and creative scene.",
      icon: "/images/Visit-Images/icons/Unwind-with-Art-Entertainment.svg",
      imgAlt: "chennai events",
    },
    {
      title: "Kid-Friendly Adventures",
      desc: "Spend a fun day at Guindy National Park or explore exotic reptiles at the Chennai Snake Park — great weekend picks for families.",
      icon: "/images/Visit-Images/icons/Kid-Friendly-Adventures.svg",
      imgAlt: "",
    },
  ];
  return (
    <>
      <div>
        <Helmet>
          <title>Top Places to Visit & Stay in Chennai</title>
          <meta
            name="description"
            content="Discover the best places to visit in Chennai, top things to do, and comfortable accommodation in Chennai — from beaches and temples to cafes, malls, and events."
          />
          <link rel="canonical" href="/visit-chennai" />
        </Helmet>
        <div
          className="VolunteerBgSection visitBgSection notHome"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img
                  src="/images/Visit-Images/visitBanner.jpg"
                  alt="mahabalipuram beach"
                />
              </div>
              <h3 className="voluntterContent">Visit</h3>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        <div
          className="visitIntroParaSection"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className=" container max-w-7xl mx-auto px-4">
            <div
              className={`VolunteeerTextBackground ${
                scrollDir === "right" ? "scroll-right" : "scroll-left"
              }`}
              ref={bgTextRef}
            >
              <p>
                Visit&nbsp; Chennai &nbsp; Visit&nbsp; Chennai&nbsp; Visit&nbsp;
                Chennai&nbsp;
              </p>
            </div>
            <div className="workIntro">
              <h3>Visit Chennai – Beaches, Biryani & Big City Vibes </h3>
              <p>
                <strong>
                  Whether you're flying in for a weekend getaway, a work trip,
                  or a long vacation, Chennai is more than just a cultural
                  capital — it’s a city that balances tradition with trend, and
                  calm with buzz.
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div
          className="newupdatewhychennai"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="workIntro">
            <h3 className="newupdatewhychennai">Why Visit Chennai ?</h3>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  // src="/images/Visit-Images/marina-beach.jpg"
                  src="/images/Visit-Images/Why-Visit-Chennai.jpg"
                  alt="Main Side Visual"
                />
              </div>

              <div className="section-right-content">
                {infoData.map((item, index) => (
                  <div className="info-item-block" key={index}>
                    <img
                      src={item.icon}
                      alt={item.imgAlt}
                      className="info-icon"
                    />
                    <div className="info-text-block">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="newupdatewhychennai"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="workIntro">
            <h3 className="newupdatewhychennai">
              Popular Things to Do in Chennai
            </h3>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-right-content">
                {infoData1.map((item, index) => (
                  <div className="info-item-block" key={index}>
                    <img
                      src={item.icon}
                      alt={item.imgAlt}
                      className="info-icon"
                    />
                    <div className="info-text-block">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-left-image">
                <img
                  src="/images/Visit-Images/standup-show.jpg"
                  alt="stand up comedy show in chennai"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="visitslideOut" data-aos="fade-up" data-aos-delay="1000">
          <div className="visitslideTop container max-w-7xl mx-auto px-4">
            <h3>visit chennai</h3>
            <p>
              When you visit Chennai seldom or for the first time, how about
              navigating the city and locating everything you need without a
              guide? Isn't it amazing? Super Chennai does this for you, though.
            </p>
          </div>

          <div className="sliderSection">
            <div className="visitslideImg">
              <Slider {...mainSettings} ref={mainSlider}>
                {images.map((img, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <img src={img.src} alt={img.label} />
                    <Link to={img.link}>
                      <div className="titleOut">
                        <h4>{img.label}</h4>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="visitContSlide">
              <Slider {...thumbSettings} ref={thumbSlider}>
                {images.map((img, index) => (
                  <div key={index}>
                    <Link to={img.link}>
                      <img
                        src={img.src}
                        alt={img.label}
                        style={{
                          width: "100%",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "4px",
                        }}
                      />
                    </Link>

                    <h3>
                      <Link to={img.link}>{img.label}</Link>
                    </h3>

                    <p>
                      {img.description} <Link to={img.link}>Learn more</Link>
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div> */}

        {/* Desktop - Hover Preview */}
        <div
          className="hidden md:block workImageSection"
          data-aos="fade-up"
          data-aos-delay="800"
          style={{
            backgroundImage:
              "linear-gradient(to right,#191c81,#763ca7 50%,#490e75 90%)",
          }}
        >
          <h4>
            Visit <br />
            chennai
          </h4>
          <div className="container max-w-7xl mx-auto px-4">
            <div className="workimgIn flex">
              <div className="flex-4">
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => {
                        setPreviewSrc(item.image);
                        setHoverIndex(index);
                        if (tooltipRef.current) {
                          tooltipRef.current.style.display = "block";
                        }
                      }}
                      onMouseLeave={() => {
                        setHoverIndex(null);
                        if (tooltipRef.current) {
                          tooltipRef.current.style.display = "none";
                        }
                      }}
                      className={
                        hoverIndex === index ||
                        (hoverIndex === null && index === 0)
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to={item.link}
                        className={`text-white font-bold text-lg transition-opacity ${
                          hoverIndex === index ||
                          (hoverIndex === null && index === 0)
                            ? "opacity-100"
                            : "opacity-20"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Tooltip */}
                <span
                  ref={tooltipRef}
                  id="tooltip"
                  className="fixed z-50 bg-black text-white text-xs px-2 py-1 rounded hidden md:block pointer-events-none"
                  style={{ transition: "opacity 0.2s ease" }}
                >
                  <button>Explore More</button>
                </span>
              </div>

              <div className="flex-2 flex items-center justify-center hoverRightimg">
                <img
                  src={previewSrc}
                  alt=""
                  className="hoverRightimg"
                  style={{ opacity: fade ? 1 : 0, transition: "opacity 0.3s" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div
          className="block md:hidden my-8 px-4 mobileCardsWorkMainContainer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="overflow-x-auto flex space-x-4 pb-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 mobileCardsWork"
              >
                <img
                  src={item.image}
                  alt={item.imgAlt}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-2 CardTitleWork">
                    {item.label}
                  </h5>
                  <Link
                    to={item.link}
                    className="text-blue-500 hover:underline text-sm CardLinkWork"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
