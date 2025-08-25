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

export default function Itinerary() {
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
      sectionTitle: "1-Day Itinerary – The Essentials of Chennai",
      image:
        "/images/Visit-Images/SubPages/1-day-itinerary-the-essentials-of-chennai.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Morning",
              para: [
                <p key="1">
                  Start your day at <strong>Marina Beach,</strong>soaking in the
                  sunrise and walking along the longest urban beach in India.
                </p>,
                <p key="2">
                  Visit the historic{" "}
                  <strong>Parthasarathy Temple & Kapaleeshwarar Temple</strong>{" "}
                  in Mylapore, known for its Dravidian architecture and
                  spiritual energy.
                </p>,
                <p key="3">Enjoy a traditional South Indian breakfast.</p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Morning.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Midday",
              para: [
                <p key="1">
                  Head to the <strong>Government Museum (Egmore)</strong> to get
                  a glimpse of South India’s art, archaeology, and natural
                  history.
                </p>,
                <p key="2">Lunch</p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Afternoon.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Afternoon & Evening",
              para: [
                <p key="1">
                  Explore <strong>San Thome Basilica,</strong>a Gothic-style
                  church built over the tomb of St. Thomas the Apostle.
                </p>,
                <p key="2">
                  Stroll through <strong>Besant Nagar Beach,</strong>and enjoy a
                  street food snack or coffee.
                </p>,
                <p key="3">
                  Wrap up your day with shopping at <strong>T. Nagar</strong>or
                  a cultural performance at <strong>Kalakshetra </strong> or{" "}
                  <strong>Narada Gana Sabha (if available).</strong>
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Evening.svg",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "2-Day Itinerary – Culture & Coast",
      image:
        "/images/Visit-Images/SubPages/2-day-itinerary-culture-&-coast.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Day 1: City Heritage & Spiritual Trails",
              para: [
                "Follow the 1-day itinerary above and end with a sunset at Broken Bridge Viewpoint (optional).",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day1.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 2: Day Trip to Mahabalipuram",
              para: [
                <p key="1">
                  Take a road trip (~1.5 hrs) to the UNESCO-listed
                  Mahabalipuram, famous for its rock-cut temples, Shore Temple,
                  and Five Rathas.
                </p>,
                <p key="2">Enjoy lunch. </p>,
                <p key="3">
                  On the return, stop at Kovalam Beach, Mutukadu Boat House,
                  Crocodile Bank , & DakshinaChitra, a cultural centre
                  showcasing South Indian heritage through live crafts and
                  architecture.
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day2.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "3-Day Itinerary – Heritage, Arts & Shopping",
      // sectionDesc: " Set aside some time to discover Chennai's creative core.",
      // image: "/images/Visit-Images/SubPages/historical-tapestry.jpg",
      image:
        "/images/Visit-Images/SubPages/3-day-itinerary-heritage,-arts-shopping.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Day 1: Classic Chennai",
              para: ["As per 1-day itinerary."],
              imgs: "/images/Visit-Images/SubPages/Icons/day1.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 2: Coastal & Cultural Day Trip",
              para: [
                "As per Day 2 of 2-day itinerary (Mahabalipuram + DakshinaChitra).",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day2.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 3: Art & Local Life",
              para: [
                <p key="1">
                  Start at Kalakshetra Foundation (if open) for a serene
                  experience of Indian classical arts.
                </p>,
                <p key="2">
                  Visit Cholamandal Artists’ Village, India’s largest
                  self-sustained artists’ commune.{" "}
                </p>,
                <p key="3">Have lunch.</p>,
                <p key="4">
                  Explore George Town / Parrys’ Corner / Sowcarpet for a vibrant
                  market experience — perfect for spice, saree, and gold
                  shopping.
                </p>,
                <p key="5">
                  End the day at Phoenix Marketcity or Express Avenue Mall for
                  shopping or a movie night.
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day3.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "1-Week Itinerary – Deep Dive into Chennai & Beyond",
      // sectionDesc: " Set aside some time to discover Chennai's creative core.",
      // image: "/images/Visit-Images/SubPages/historical-tapestry.jpg",
      image:
        "/images/Visit-Images/SubPages/1-week-itinerary-deep-dive-into-chennai-&-beyond.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Day 1–3",
              para: ["Follow the 3-day itinerary."],
              imgs: "/images/Visit-Images/SubPages/Icons/day3.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 4",
              para: [
                <p key="1">Visit museum.</p>,
                <p key="2">Enjoy lunch. </p>,
                <p key="3">Check out Madhavaram Botanical Park.</p>,
                <p key="4">Check out the Valluvarkottam /T.nagar Shopping.</p>,
                <p key="5">
                  End the day at Phoenix Marketcity or Express Avenue Mall for
                  shopping or a movie night.
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day4.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 5",
              para: [
                <p key="1">
                  Day trip to <strong>Pulicat Lake</strong> (birdwatching,
                  boating, quiet retreat).
                </p>,
                <p key="2">
                  Visit the Dutch Cemetery and Lighthouse for a colonial touch.
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day5.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 6",
              para: [
                <p key="1">
                  Explore <strong>Guindy National Park</strong> and{" "}
                  <strong>Snake</strong>Park (great for families) or Vandalur
                  Zoo.
                </p>,
                <p key="2">
                  <strong>Lunch</strong>
                </p>,
                <p key="3">
                  Take a relaxed evening heritage walk at{" "}
                  <strong>Triplicane.</strong>
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day6.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Day 7",
              para: [
                <p key="1">
                  Choose from relaxation at a luxury resort (like Taj
                  Fisherman’s Cove or InterContinental) or dive into food trails
                  — explore <strong>Sowcarpet</strong> for chaat, sweets, and
                  North Indian street food.
                </p>,
                <p key="2">
                  Wrap up with a rooftop dinner at{" "}
                  <strong>
                    Above Sea Level (The Raintree) or Bayview (Vivanta).
                  </strong>
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/day7.svg",
              // link: "/urban-beaches",
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
        <title>Chennai Itinerary | Weekend Trip in Chennai</title>
        <meta
          name="description"
          content="Plan your perfect Chennai itinerary with temple tours, beach escapes, colonial landmarks & cultural delights tailored for every type of traveller."
        />
        <link rel="canonical" href="/visit/chennai-itinerary" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/itinerary-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Itinerary </h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <a href="">Itinerary </a>
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
              <h3> Explore the City at Your Pace</h3>
              <p>
                Whether you're stopping by for a day or settling in for a full
                week, Chennai offers something for every kind of traveller —
                from colonial charm and temple trails to coastal retreats and
                cultural experiences. Choose your pace, and let the city unfold.
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
                  ${
                    index % 2 === 0
                      ? "bg-white whitebgsec"
                      : "bg-[#f7f7f7] colorbgsec"
                  } 
                  ${
                    index % 3 === 0
                      ? "pattern-a"
                      : index % 3 === 1
                      ? "pattern-b"
                      : "pattern-c"
                  }`}
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
                            {/* <div className="exploreMorebuttonVisitChennai">
                              <a
                                href={item.link || "#"}
                                className="text-blue-600 hover:underline text-sm font-medium"
                              >
                                Explore More
                              </a>
                            </div> */}
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
