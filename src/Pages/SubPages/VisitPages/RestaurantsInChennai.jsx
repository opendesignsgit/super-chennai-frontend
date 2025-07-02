import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
// import { label } from "framer-motion/client";

export default function Restaurants() {
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
      title: "South Indian Classics",
      points: [
        {
          name: "Ratna Café",
          description: "Iconic sambar idli",
          subDescription:
            "Ratna Café is known for its piping hot sambar generously poured over soft idlis.",
          locations: [
            {
              label: "Triplicane",
              link: "https://maps.app.goo.gl/jsKFfhTUAN2PStpe6",
            },
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/8Z4uxB6LtDsRXsw59",
            },
            {
              label: "Mylapore",
              link: "https://maps.app.goo.gl/BSX5Keo8yVGYpYrt9",
            },
            {
              label: "Kilpauk",
              link: "https://maps.app.goo.gl/G9RoTXizjG8xDnGx8",
            },
          ],
        },

        //########### MURUGAN IDLY KADAI ##########################
        {
          name: "Murugan Idli Shop",
          description: "Famous for soft idlis and podi dosas",
          subDescription:
            "",
          website: "https://muruganidlishop.com/",
          locations: [
            {
              label: "T. Nagar",
              link: "https://maps.app.goo.gl/kAf4oADve7sTTq5J7",
            },
            {
              label: "T. Nagar",
              link: "https://maps.app.goo.gl/ytFBt2v4yia6t8W68",
            },
            {
              label: "T. Nagar",
              link: "https://maps.app.goo.gl/rfuvfcS1PjwtaDNx9",
            },
            {
              label: "Velachery",
              link: "https://maps.app.goo.gl/ZcNSxB2Gq5t7rUfH9",
            },
            {
              label: "Besant Nagar",
              link: "https://maps.app.goo.gl/SztqnP2ProHiX18cA",
            },
            {
              label: "T. Nagar",
              link: "https://maps.app.goo.gl/fbEXawSoEeBrsrrU8",
            },
            {
              label: "West Mambalam",
              link: "https://maps.app.goo.gl/UxaLQwHeJ26cRDZV9",
            },
            {
              label: "Anna Nagar",
              link: "https://maps.app.goo.gl/XLj5mhfewyWSwgZq8",
            },
            {
              label: "Nanganallur",
              link: "https://maps.app.goo.gl/tTceYi9AzKxuwXi6A",
            },
            {
              label: "Parry's Corner",
              link: "https://maps.app.goo.gl/UPUE7ZCksxFmHhC39",
            },
            {
              label: "Porur",
              link: "https://maps.app.goo.gl/xiRbzP8hhJwd7YVN9",
            },
            {
              label: "Mogappair West",
              link: "https://maps.app.goo.gl/cgUtQis892wwcxoQA",
            },
            {
              label: "Mylapore",
              link: "https://maps.app.goo.gl/oTk7N4rreywFFCMYA",
            },
            {
              label: "Meenambakkam",
              link: "https://maps.app.goo.gl/dkT3AC6Hg6kNmuMH9",
            },
          ],
        },

        //###################### Sangeetha Veg Restaurant########################
        {
          name: "Sangeetha Veg Restaurant",
          description: "A family favorite across multiple locations",
          subDescription:
            "",
          website: "https://www.sangeethaveg.com/",
          locations: [
            {
              label: "R.A. Puram",
              link: "https://maps.app.goo.gl/3PzDKHPM1VeUuYxb9",
            },
            {
              label: "Ramapuram",
              link: "https://maps.app.goo.gl/SfFrqcBsUkwmMNF36",
            },
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/5MhUqZRtxRYoVzTx6",
            },
            {
              label: "T. Nagar",
              link: "https://maps.app.goo.gl/swGCkCfxB7DfkG8x6",
            },
            {
              label: "Santhome",
              link: "https://maps.app.goo.gl/ESVGQ8NxLHkQ4LWL9",
            },
            {
              label: "Greams Road",
              link: "https://maps.app.goo.gl/W9qU5Bk912GADzgL8",
            },
            {
              label: "Egmore",
              link: "https://maps.app.goo.gl/PU3EGFHeaE3Ra1qV8",
            },
            {
              label: "Koyambedu",
              link: "https://maps.app.goo.gl/hDmWq3r5UoWmdCAw7",
            },
            {
              label: "Parry's Corner",
              link: "https://maps.app.goo.gl/hxybAHf6oBGBWiSS9",
            },
            {
              label: "Jafferkhanpet",
              link: "https://maps.app.goo.gl/BLpPFp1xqVQSbL4L6",
            },
            {
              label: "Kovilambakkam",
              link: "https://maps.app.goo.gl/hVNttJ4vo5GR3s976",
            },
            {
              label: "Medavakkam",
              link: "https://maps.app.goo.gl/gZWwtr4Qq7BCvRqZA",
            },
            {
              label: "Perungalathur",
              link: "https://maps.app.goo.gl/tVfzqaFWv5SRufBR7",
            },
            {
              label: "Urapakkam",
              link: "https://maps.app.goo.gl/n2voRkVJpiztAycs5",
            },
            {
              label: "Guindy",
              link: "https://maps.app.goo.gl/tLDiENXoHsorAf1n7",
            },
          ],
        },

        {
          name: "Rayar’s Mess",
          description: "Hole-in-the-wall tiffin spot",
          subDescription:
            "",
          locations: [{ label: "Mylapore", link: "#" }],
        },
        {
          name: "ID (Sathyam Cinemas & Phoenix Mall)",
          description: "Contemporary take on classic tiffin",
          subDescription:
            "",
          locations: [
            { label: "Royapettah", link: "#" },
            { label: "Velachery", link: "#" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "North Indian & Multicuisine",
      points: [
        {
          name: "Annalakshmi",
          description: "Upscale vegetarian buffet",
          subDescription:
            "",
          locations: [{ label: "Egmore", link: "#" }],
        },
        {
          name: "Copper Chimney",
          description: "Classic North Indian fare",
          subDescription: "",
          locations: [{ label: "Nungambakkam", link: "#" }],
        },
        {
          name: "Sigree Global Grill",
          description: "Popular for buffets and group dining",
          subDescription:
            "",
          locations: [{ label: "Thoraipakkam", link: "#" }],
        },
        {
          name: "Pind",
          description: "Punjabi comfort food",
          subDescription:
            "",
          locations: [
            { label: "Velachery", link: "#" },
            { label: "Nungambakkam", link: "#" },
          ],
        },
        {
          name: "Bombay Brasserie",
          description: "Indian fusion in a chic setting",
          subDescription:
            "",
          locations: [{ label: "Alwarpet", link: "#" }],
        },
      ],
    },
    {
      id: 3,
      title: "Global & Continental Cuisine",
      points: [
        {
          name: "The Flying Elephant (Park Hyatt)",
          description: "Multi-level, multi-cuisine luxury dining",
          subDescription:
            "",
          locations: [{ label: "Guindy", link: "#" }],
        },
        {
          name: "Azzuri Bay",
          description: "Mediterranean and Pan-Asian with a rooftop view",
          subDescription: "",
          locations: [{ label: "Adyar", link: "#" }],
        },
        {
          name: "Wild Garden Café at Amethyst",
          description: "European café ambience with global bites",
          subDescription: "",
          locations: [{ label: "Royapettah", link: "#" }],
        },
        {
          name: "Ciclo Café",
          description: "Cycling-themed bistro",
          subDescription:
            "",
          locations: [{ label: "Kotturpuram", link: "#" }],
        },
        {
          name: "Lloyd’s Tea House",
          description: "English-style café",
          subDescription:
            "",
          locations: [{ label: "Alwarpet", link: "#" }],
        },
      ],
    },
    {
      id: 4,
      title: "Asian Cuisine",
      points: [
        {
          name: "Soy Soi",
          description: "Southeast Asian street-style dishes",
          subDescription:
            "",
          locations: [{ label: "Kotturpuram", link: "#" }],
        },
        {
          name: "Benjarong",
          description: "Elegant Thai dining",
          subDescription:
            "",
          locations: [{ label: "Teynampet", link: "#" }],
        },
        {
          name: "Teppan",
          description: "Japanese grill and sushi bar",
          subDescription:
            "",
          locations: [{ label: "T Nagar", link: "#" }],
        },
        {
          name: "Va Pho",
          description: "Youthful pan-Asian diner",
          subDescription: "",
          locations: [{ label: "Gopalapuram", link: "#" }],
        },
        {
          name: "Mandarin Chinese Restaurant",
          description: "Classic Chinese comfort food",
          subDescription: "",
          locations: [{ label: "Nungambakkam", link: "#" }],
        },
      ],
    },
    {
      id: 5,
      title: "Cafés & Casual Bites",
      points: [
        {
          name: "Chamiers Café",
          description: "Boutique café with breakfast and retail space",
          subDescription:
            "",
          locations: [{ label: "R.A. Puram", link: "#" }],
        },
        {
          name: "Writer’s Café",
          description: "Cozy space for books, coffee, and conversations",
          subDescription:
            "",
          locations: [{ label: "Gopalapuram", link: "#" }],
        },
        {
          name: "The Brew Room",
          description: "Artisanal coffee and brunch in a garden setting",
          subDescription: "",
          locations: [{ label: "College Road", link: "#" }],
        },
        {
          name: "Ashvita Bistro",
          description: "Hidden gem with a homey feel",
          subDescription: "",
          locations: [{ label: "Alwarpet", link: "#" }],
        },
        {
          name: "Gusto Café",
          description: "Vegan and health-forward options",
          subDescription:
            "",
          locations: [{ label: "Besant Nagar", link: "#" }],
        },
      ],
    },
    {
      id: 6,
      title: "Beachside & Rooftop Dining",
      points: [
        {
          name: "Upper Deck (Vivanta Fisherman’s Cove)",
          description: "Coastal fine dining by the sea",
          subDescription: "",
          locations: [{ label: "Covelong", link: "#" }],
        },
        {
          name: "Bay View (Taj Fisherman’s Cove)",
          description: "Romantic oceanfront seafood experience",
          subDescription: "",
          locations: [{ label: "Covelong", link: "#" }],
        },
        {
          name: "KooX – Rooftop Asian Grill",
          description: "Luxe rooftop dining at Novotel",
          subDescription: "",
          locations: [{ label: "OMR", link: "#" }],
        },
        {
          name: "Skyloft (Feathers Hotel)",
          description: "Panoramic views with curated menus",
          subDescription: "",
          locations: [{ label: "Manapakkam", link: "#" }],
        },
        {
          name: "BOATS (Besant Nagar)",
          description: "Chill beachside bistro and bar",
          subDescription: "",
          locations: [{ label: "Besant Nagar", link: "#" }],
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

  // ########## Custom Arrow Components ###############
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
            src="images/Visit-Images/SubPages/Luxury-Hotels-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3> Restaurants in Chennai</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> -{" "}
                <a href=""> Restaurants in Chennai </a>
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
              <p>Restaurants &nbsp; in Chennai &nbsp; Restaurants &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3> A City of Flavour — One Plate at a Time</h3>
              <p>
                Chennai’s restaurant scene is a rich tapestry of tradition and
                innovation — offering everything from age-old South Indian
                staples to experimental global cuisine. Whether you're in the
                mood for a beachside breakfast, rooftop fine dining, or comfort
                food at midnight, the city delivers a wide spectrum of culinary
                experiences. With strong vegetarian roots, a growing café
                culture, and an appetite for international trends, Chennai is
                where every meal tells a story
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8">
          {detailsections.map((section) => {
            return (
              <div
                key={section.id}
                className="detailapiSecRes w-full bg-white shadow-md rounded-lg overflow-hidden mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 px-4 pt-4">
                  {section.title}
                </h2>

                <div className="detailtextboxRes px-4 pb-4">
                  {Array.isArray(section.points) &&
                    section.points.length > 0 && (
                      <ul className="list-none text-gray-700 space-y-4 px-2 py-4">
                        {section.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-lg border-b border-gray-200 pb-4"
                          >
                            <span className="boldPointName">{point.name}</span>{" "}
                            – {point.description}
                            {point.subDescription && (
                              <p className="text-sm  SubDesc">
                                {point.subDescription}
                              </p>
                            )}
                            <div className="mt-3 flex  space-x-4">
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                {point.locations.map((loc, i) => (
                                  <div>
                                    <a
                                      key={i}
                                      href={loc.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className=" FlatListRest"
                                    >
                                      <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        style={{ color: "#993399" }}
                                        className="mr-1"
                                      />
                                      {loc.label}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </div>
            );
          })}
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
