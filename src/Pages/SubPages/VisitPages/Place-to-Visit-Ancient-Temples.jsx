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
import { Helmet } from "react-helmet-async";

export default function PlacetoVisitAncientTemples() {
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

  const detailsections = [
    {
      id: 1,
      title: "Kapaleeshwarar Temple (Mylapore)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/ancient-temples/kapaleeshwarar-temple.jpg",
      link1:
        "https://mylaikapaleeswarar.hrce.tn.gov.in/hrcehome/index_temple.php?tid=1",
      link2: "https://maps.app.goo.gl/jM4TRVLb7MaUen6J6",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Parthasarathy Temple (Triplicane)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/ancient-temples/parthasarathy-temple.jpg",
      link1: "https://parthasarathy.hrce.tn.gov.in/",
      link2: "https://maps.app.goo.gl/ZtG1ZotWLMrNv3Ja6",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Marundeeswarar Temple (Thiruvanmiyur)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/ancient-temples/marundeeswarar-temple.jpg",
      link1:
        "https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=87&action=temple_eo",
      link2: "https://maps.app.goo.gl/tV85EZ8rJ5Rawrff6",
      rating: 4.8,
    },
    {
      id: 4,
      title: "Ekambareswarar Temple (George Town)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/ancient-temples/ekambareswarar-temple.jpg",
      link1: "https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=169",
      link2: "https://maps.app.goo.gl/zX6deSdtN6FwD3XY6",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Vadapalani Andavar Temple (Vadapalani)",
      image:
        "/images/Visit-Images/SubPages/Place-to-visit/ancient-temples/vadapalani-andavar-temple.jpg",
      //   link1: "https://maps.app.goo.gl/bgMwW7J8hguy5kkH9",
      link2: "https://maps.app.goo.gl/bgMwW7J8hguy5kkH9",
      rating: 4.7,
    },

    {
      id: 6,
      title: "Arulmigu Adipureeswarar Sannathi",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrlGjfDUWSX5CqOW4CApDf5ycqJVi7ISbNm1hSgXDRn9eH88jlsiZ0CTU8TPJkKIFiWQy_DlHvem-RlRBPYtTi4uLpVZuq0aZ9W6BS0yPLL1sdWYuKoR_f2_ZRjSLE2_ElpS8bl=s680-w680-h510-rw",
      link2: "https://maps.app.goo.gl/urJEDwabDRxZyPb98",
      rating: 4.7,
    },

    // {
    //   id: 7,
    //   title: "Thiruvalleswarar Temple",
    //   image:
    //     "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqib5SFzGnANUbq346YR_MEtP-E-KOKxh5X-8fokY6t01mwLrCo5iTZx4xBl-oIj7qi8ZZJMyIJpPtgJKhXTC9-gqQm0wamwVVoyk10o1p8A13B_IuoIqLTKlyuf7keA5JJbKI=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/zyHqPA9RNfAxvrXq7",
    //   rating: 4.7,
    // },

    // {
    //   id: 8,
    //   title: "Thiruvalleswarar Temple",
    //   image:
    //     "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqib5SFzGnANUbq346YR_MEtP-E-KOKxh5X-8fokY6t01mwLrCo5iTZx4xBl-oIj7qi8ZZJMyIJpPtgJKhXTC9-gqQm0wamwVVoyk10o1p8A13B_IuoIqLTKlyuf7keA5JJbKI=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/zyHqPA9RNfAxvrXq7",
    //   rating: 4.7,
    // },
    // {
    //   id: 9,
    //   title: "Arulmigu Adipureeswarar Sannathi",
    //   image:
    //     "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrlGjfDUWSX5CqOW4CApDf5ycqJVi7ISbNm1hSgXDRn9eH88jlsiZ0CTU8TPJkKIFiWQy_DlHvem-RlRBPYtTi4uLpVZuq0aZ9W6BS0yPLL1sdWYuKoR_f2_ZRjSLE2_ElpS8bl=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/urJEDwabDRxZyPb98",
    //   rating: 4.9,
    // },
    // {
    //   id: 10,
    //   title: "Thiruvalleswarar Temple",
    //   image:
    //     "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqib5SFzGnANUbq346YR_MEtP-E-KOKxh5X-8fokY6t01mwLrCo5iTZx4xBl-oIj7qi8ZZJMyIJpPtgJKhXTC9-gqQm0wamwVVoyk10o1p8A13B_IuoIqLTKlyuf7keA5JJbKI=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/zyHqPA9RNfAxvrXq7",
    //   rating: 4.7,
    // },
    // {
    //   id: 11,
    //   title: "Karaneeswarar Temple",
    //   image:
    //     "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nosl0yjhlVlMb5TcFZWSirIini7WbXoCEBzFuy7Js14jNKB62Dat8aMr93mXp3aNHyAyZXmd0wwNQS5F9X4iPAHc8zFPhcTkemDJ3hyyZEAa7zZVC9y4lzJzF4agp6nbs7ts9aG=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/aEC7YiX8wdHPQUsv6",
    //   rating: "",
    // },
    // {
    //   id: 12,
    //   title: "Velleeswarar Temple",
    //   image:
    //   "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npg26wnnh6SnSIALySyZNx7az5F4w95enu5iP3EryweSoz2l5hJEL_s6cxUdJGx1ruqGE0ZeJtIXOXmz2MxSEkghf-5oqeoN5tu0AZbO15FV9ECeaRqDqVsTHqopsY_-815iQp2=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/FzEjGdFQzBoHfUAw8",
    //   rating: "",
    // },
    // {
    //   id: 12,
    //   title: "Kandaswamy Temple (Kandhakottam)",
    //   image:
    //     "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npEIzAuACsD_mtSph3RaoKba37QxDiuEIOl09jut7Kkx8eQ9NprpbZyhPKZKUEEguob6Kkmg7VUPkb2hVfWURYNa_WjP7C6sGFyUEah1jh5utvFLyB5hrySX2XyKRfSNNoqFk-Nnw=s680-w680-h510-rw",
    //   link2: "https://maps.app.goo.gl/ueP6Bg4wwojYARFh6",
    //   rating: "",
    // },
  ];

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
        <title>Ancient Temples in Chennai: History & Spirituality</title>
        <meta
          name="description"
          content="Discover ancient temples in Chennai, showcasing timeless Dravidian design, deep-rooted traditions, and a journey through history."
        />
        <link
          rel="canonical"
          href="/visit/place-to-visit/ancient-temples-in-chennai"
        />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/placeToVisit/ancient-temples.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Ancient Temples</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <Link to="/visit/places-to-visit-in-chennai">
                  {" "}
                  Places to Visit{" "}
                </Link>{" "}
                - <a href="">Ancient Temples</a>
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
              <h3>Ancient Temples</h3>
              <p>
                Step into centuries of heritage with temples that blend
                Dravidian architecture, rich history, and spiritual depth.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8">
          {detailsections.map((section) => {
            const fullStars = Math.floor(section.rating);
            const hasHalfStar = section.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return (
              <div
                key={section.id}
                className="detailapiSec w-full bg-white shadow-md rounded-lg overflow-hidden mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 px-4 pt-4">
                  {section.title}
                </h2>

                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[700px] object-cover mt-4"
                />

                <div className="detailtextbox px-4 pb-4">
                  <h3 className="text-xl font-medium  text-gray-700">
                    {section.title}
                  </h3>

                  {/* Dynamic 5-Star Rating */}
                  <div className="flex items-center space-x-1 mb-6 text-xl">
                    {/* Full Stars */}
                    {[...Array(fullStars)].map((_, i) => (
                      <span key={`full-${i}`} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                    {/* Half Star */}
                    {hasHalfStar && <span className="text-yellow-500">⯪</span>}
                    {/* Empty Stars */}
                    {[...Array(emptyStars)].map((_, i) => (
                      <span key={`empty-${i}`} className="text-gray-300">
                        ★
                      </span>
                    ))}
                    {/* Text Rating */}
                    <span className="ml-2 text-sm text-gray-600">
                      ({section.rating} out of 5)
                    </span>
                  </div>
                  <ul>
                    <li className="flex space-x-6">
                      <a
                        href={section.link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Know More
                      </a>
                      <a
                        href={section.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
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
