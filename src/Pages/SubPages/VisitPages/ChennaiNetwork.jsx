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

export default function ChennaiNetworks() {
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
      category: " Startup & Entrepreneurial Ecosystem",
      places: [
        {
          name: "TiE Chennai",
          desc: "Mentorship, pitch events, and growth programs for founders",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "SaaSBOOMi & NASSCOM",
          desc: "Industry-specific forums for SaaS, IT, and tech innovators",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "StartupTN & IITM Incubation Cell",
          desc: "Government-backed and academic-led platforms for early-stage startups",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Events & Demo Days",
          desc: "Founders Unfiltered, Headstart Chennai, and city-based startup showcases",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Professional Communities & Co-Working Spaces",
      places: [
        {
          name: "Co-working hubs",
          desc: "Workafella, The Hive, WeWork, and Spaces host regular networking events",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "LinkedIn Locals Chennai",
          desc: "Real-world meetups for digital professionals",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Industry Forums",
          desc: "FICCI, CII, Madras Management Association for corporate and leadership networking",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Creative Meetups",
          desc: "Indie music, design, content creator and photography groups (via Meetup or Instagram)",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Expat & International Circles",
      places: [
        {
          name: "InterNations Chennai",
          desc: "Global expat network hosting meetups, cultural nights, and lifestyle mixers",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Cultural Institutes",
          desc: "Goethe-Institut, Alliance Française, InKo Centre often run community-led programs",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Language Exchanges",
          desc: "Regular meetups for English, French, German, Korean, and Tamil learning communities",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Student & Young Professional Networks",
      places: [
        {
          name: "College Chapters & Hackathons",
          desc: "IIT Madras, Loyola College, and Anna University host regular events",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Toastmasters & Rotaract Clubs",
          desc: "Communication, leadership, and volunteering circles across the city",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Skill-building workshops",
          desc: "Google Developer Groups, Women Who Code, and Product School meetups",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Platforms to Stay Connected",
      places: [
        {
          name: "Meetup.com & Eventbrite",
          desc: "For public networking events by theme or interest",
          locations: [
            { name: "-", link: "#" },
          ],
        },
        {
          name: "LinkedIn & WhatsApp Communities ",
          desc: "Many industry-specific or city-based groups",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Instagram & Telegram Channels",
          desc: "Widely used by creators, artists, and workshop organizers",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "BookMyShow & Insider",
          desc: "For events that mix entertainment with social interaction",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
       {
      category: "Why It Matters",
      places: [
        {
          name: "Networking in Chennai",
          desc: "It is accessible, diverse, and industry-rich",
          locations: [
            { name: "-", link: "#" },
          ],
        },
        {
          name: "The city balances",
          desc: "Structured professional forums with casual, creative, and community-led spaces",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Real connections",
          desc: "It’s a place to build real connections — not just contacts",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    
    {
      category: "Pro Tips",
      places: [
        {
          name: "Show up regularly",
          desc: "Many groups value consistency over formality",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Bring your curiosity, not just a business card",
          desc: "Chennai is warm, but relationship-driven",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Follow up online",
          desc: "Many connections strengthen digitally post-event",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    }

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
              <h3>Night Life</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> - <a href="">Night Life</a>
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
              <p>
                Night Life &nbsp; in Chennai &nbsp; Night Life &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3> A City Where People, Ideas, and Opportunities Connect</h3>
              <p>
                Chennai offers a thriving ecosystem for networking — driven by
                its expanding startup scene, robust professional communities,
                active expat circles, and a culture of collaboration across
                industries. Whether you're a founder looking for investors, a
                creative seeking inspiration, or a new resident hoping to make
                social or business connections, the city has platforms, spaces,
                and events to help you plug in.
              </p>
              <p>
                From formal meetups and conferences to relaxed cafés, co-working hubs, and interest-based groups, Chennai is a city where your next opportunity might be a conversation away.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
             Where & How to Network in Chennai
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
