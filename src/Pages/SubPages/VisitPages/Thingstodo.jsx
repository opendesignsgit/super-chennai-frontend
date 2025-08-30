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

export default function Thingstodo() {
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

  const imageSections = [
    {
      sectionTitle: "Adventure & Thrills",
      sectionDesc:
        "Experience the exhilaration of amusement park rides, water parks, horror houses, trampolines, and ziplines that splash into fun across the city.",
      image: "/images/Visit-Images/SubPages/adventure-thrills-first.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Theme Parks",
              para: [
                "Discover Chennai’s exciting hotspots for climbing, trekking, paintball, and more. Dive into action-packed escapes right in the city.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Adventure-places.svg",
              link: "/visit/things-to-do/adventure-places-in-chennai",
            },
          ],
        },

        {
          points: [
            {
              title: "Ziplines",
              para: [
                "Glide across scenic views on Chennai’s top zipline spots. Perfect for adrenaline junkies chasing a bird’s-eye thrill.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Ziplines.svg",
              link: "/visit/things-to-do/zipline-in-chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Horror Houses",
              para: [
                "The human will be made up like a ghost to create a fear in the visitors, which thrills you.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Horror-Houses.svg",
              link: "/visit/things-to-do/horror-house-in-chennai",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Interactive Entertainment",
      sectionDesc:
        "Play shooting games at a variety of Chennai locations and visit a number of interactive gaming establishments.",
      image: "/images/Visit-Images/SubPages/interactive-entertainment.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Trampoline Parks",
              para: [
                "They are interconnected trampolines for open jumping and other such games and aerial activities.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Trampoline-Parks.svg",
              link: "/visit/things-to-do/trampoline-parks-in-chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Gaming Arcades",
              para: [
                "It is an entertainment venue featuring video games, prize redemption counters, and even more.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Gaming-Arcades.svg",
              link: "/visit/things-to-do/arcade-games-in-chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Bowling Alleys",
              para: [
                "Here the players bowl balls to knock down pins with automated scoring. ",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Bowling-Alleys.svg",
              link: "/visit/things-to-do/bowling-alleys-in-chennai",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Leisure & Recreation",
      sectionDesc:
        " Relax in family entertainment centers, take in bowling alleys, gaming arcades, or the newest blockbuster at multiplexes or 3D theaters.",
      image: "/images/Visit-Images/SubPages/leisure-recreation.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Family Entertainment Centers",
              para: [
                "These are the venues that offer a greater number of recreational activities for all age groups.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Family-Entertainment-Centers.svg",
              link: "/visit/things-to-do/chennai-family-entertainment-centers",
            },
          ],
        },
        {
          points: [
            {
              title: "Multiplexes",
              para: [
                "A family can choose from a variety of screens at this family-friendly entertainment center, all in one place.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Multiplexes.svg",
              link: "/visit/things-to-do/multiplexes-in-chennai",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Sports and Recreational Activities",
      sectionDesc:
        "Sports-loving people can discover leisure and, more importantly, fuel their enthusiasm in Chennai's plethora of sports and leisure activities.",
      image:
        "/images/Visit-Images/SubPages/sports-and-recreational-activities.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Beachside Fun",
              para: [
                "Enjoy some beachside fun by playing beach volleyball at Marina or Eliot's. You can also attempt water sports or just take a stroll along the shore.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Beachside-Fun.svg",
              link: "/visit/place-to-visit/beaches-in-chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Turf Sports",
              para: [
                "You can engage in your favorite outdoor games on grass in a variety of locations across the city without any problems. ",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Turf-Sports.svg",
              link: "/visit/things-to-do/turf-courts-in-chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Nature Walk",
              para: [
                "It is nothing but a leisurely walk with green spaces such as parks and trails in the surrounding flora and fauna landscape.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Nature-Walk.svg",
              link: "/NatureWalk",
            },
          ],
        },
        {
          points: [
            {
              title: "Go-Karting",
              para: [
                "Here the participants drive a small, open-wheeled car for fun or racing.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Go-Karting.svg",
              link: "/visit/things-to-do/go-karting-in-chennai",
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
        <title>Things to Do in Chennai | Chennai Places to See</title>
        <meta
          name="description"
          content="Looking for unforgettable things to do in Chennai? Dive into history, embrace city vibes, stroll beaches, savor local flavors, and celebrate cultural diversity."
        />
        <link rel="canonical" href="/visit/things-to-do-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/things-to-do-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3> Things to Do </h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <Link to="">Things to Do </Link>
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
              <h3> Things to Do</h3>
              <p>
                Discover your inner adventurer in Chennai, a city full of
                chances to stimulate your senses and make lifelong experiences.
                Chennai has a wide range of activities, from enjoying the
                tranquility of bygone times to embracing the energy of
                contemporary life and indulging in cultural diversity.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        <div className="foodlistsec">
          {imageSections.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.sectionTitle} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.title} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                            <div className="exploreMorebuttonVisitChennai">
                              <Link
                                to={item.link || "#"}
                                className="text-blue-600 hover:underline text-sm font-medium"
                              >
                                Explore More
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
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
