import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import "../../../../assets/Css/CostOfLiving.css";
import VisitSlider from "../VisitSlider";

// ################## DUMMY CONTENTS ###################################

const imageSections1 = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Chennai’s Growing Turf Scene",
            para: [
              <>Over 100+ active turfs across metro and suburbs</>,
              <>Popular among schools, corporates, and local sports clubs</>,
              <>Turf chains expanding to tier-2 cities from Chennai as base</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: " How to Book",
            para: [<>Most of these turfs are available via:</>],
            bookingLinks: [
              {
                name: "Playo App",
                link: "https://www.playo.co/",
              },
              {
                name: "Turfy",
                link: "https://www.turfy.in/",
              },
              {
                name: "BookMyTurf",
                link: "https://www.bookmyturf.com/",
              },
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
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
    link: "/visit/places-to-visit-in-chennai",
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

const trufcontent = [
  {
    places: [
      {
        name: "Tiki Taka Turf – Thoraipakkam",
        desc: "5-a-side & 7-a-side football turf. Excellent lighting & well-maintained grounds. Prime location on OMR, great crowd.",
      },
      {
        name: "Arena 360 – Perungudi",
        desc: "Premium turf with changing rooms & parking. Hosts tournaments and weekend leagues. Easy app-based booking via Playo.",
      },
      {
        name: "Turf Square – Anna Nagar",
        desc: "Centrally located, perfect for city players. Clean turf, ideal for both football & cricket. Friendly staff, high user reviews.",
      },
      {
        name: "Shootout Arena – Porur",
        desc: "Dual-use: box cricket + football. Economical pricing with flexible slots. Great for office and student groups.",
      },
      {
        name: "GameOn Turf – Velachery",
        desc: "Spacious play area with floodlights. Well-suited for group bookings and casual play. Late-night access till midnight.",
      },
      {
        name: "Kicktown – Ambattur",
        desc: "Budget-friendly turf for regular players. Clean, simple amenities and good service. Accessible for North-West Chennai users.",
      },
      {
        name: "Elite Turf – Madhavaram",
        desc: "Leading turf in North Chennai. Hosts youth coaching and weekend matches. Growing sports community hub.",
      },
      {
        name: "The Madras Turf – Multi Sports Hub",
        desc: "All-in-one turf for football, cricket, and more. Well-maintained ground with night lighting. Ideal for casual play, training, and local events.",
      },
      {
        name: "Tiki Taka Velachery",
        desc: "Popular 5-a-side football turf in South Chennai. Ideal for casual matches, group play, and weekend leagues. Well-lit ground with app-based booking options.",
      },
    ],
  },
];

const KyPoints = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Birdwatching Haven",
            para: [
              "The marshland is a paradise for bird enthusiasts, hosting over 115 species of birds, including migratory species like the greater flamingo, glossy ibis, and various raptors such as black kites and shikras. Seasonal shifts bring a dynamic avian population, making it a year-round destination for birdwatching.",
            ],
            imgs: "/images/Visit-Images/SubPages/NatureWalk/pallikaranai-marshland.jpg",
          },
        ],
      },
    ],
  },
];

export default function TurfCourts() {
  {
    /*#################### STATE VARIABLES ##################### */
  }

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  {
    /*#################### HELPERS  ##################### */
  }

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

  {
    /*#################### USEEFFECT HOOCKS  ##################### */
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  {
    /*########################### RENDER   ######################### */
  }

  return (
    <div className="FunchennaiDetailPage">
      {/*#################### Banner ########################## */}
      <div className="accaodomationBannerSection">
        <img
          src="/images/Visit-Images/SubPages/thingsDoChild/turf-sports.jpg"
          alt=""
        />{" "}
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Turf Courts in Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Home</Link> -{" "}
              <span>Turf Courts in Chennai</span>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*#################### Intro ###########################*/}
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
            <p>Play. Compete. Repeat.</p>
          </div>
          <div className="workIntro">
            <h3>Where Fun Rolls in Style</h3>
            <p>
              Chennai’s turf culture is booming — from early-morning footballers
              to late-night cricket leagues, turf courts have become the go-to
              space for urban sports lovers. With professional lighting,
              all-weather turf, and online booking, your game is just a few
              steps away.
            </p>
          </div>
        </div>
      </div>

      {/*#################### MAIN CONTENT  ####################*/}

      <div className="container max-w-7xl mx-auto px-4 py-8 nightlife ">
        <h1 className="text-3xl font-bold mb-10 text-center p-4">
          Top Turf Courts in Chennai
        </h1>

        {trufcontent.map((section, sectionIdx) => (
          <div
            key={sectionIdx}
            className="nightlifesecIn"
            style={{ marginBottom: "0", paddingBottom: "0" }}
          >
            <div className="workIntro"></div>
            {section.places && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.places.map((place, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                    <p className="text-gray-700 mb-3">{place.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/*####################  CONTENT 2  ####################*/}

      <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec ">
        {imageSections1.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
        ${
          index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"
        }   
        ${
          index % 3 === 0
            ? "pattern-a"
            : index % 3 === 1
            ? "pattern-b"
            : "pattern-c"
        }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 mt-[0px] rounded bottomListIcon w-full">
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3 className="font-semibold text-lg">{item.title}</h3>

                        {item.desc && (
                          <h5 className="text-sm text-gray-500">{item.desc}</h5>
                        )}

                        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                          {item.bookingLinks &&
                            item.bookingLinks.map((platform, i) => (
                              <li key={i}>
                                <a
                                  href={platform.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline text-sm font-medium"
                                  style={{ color: "#a44294" }}
                                >
                                  {platform.name}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ########## EXPLORE MORE CHENNAI SLIDER ############### */}

      <VisitSlider />

      {/*################## SOCIAL MARQUE SECTION################ */}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </div>
  );
}
