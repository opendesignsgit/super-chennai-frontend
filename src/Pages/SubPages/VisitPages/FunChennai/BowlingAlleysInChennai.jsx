import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
// ################## DUMMY CONTENTS ###################################

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "BluO – Phoenix MarketCity, Velachery",
            para: [
              "The Premium Experience: Trendy interiors, glow lanes, and top-quality equipment",
              "Add-ons: Café, music, pool tables, arcade games",
              "Why Go: Great for both casual play and corporate gatherings",
            ],
            imgs: "/images/Visit-Images/SubPages/bowling/bluo-–-phoenix-marketcity,-velachery.jpg",
          },
        ],
      },

      {
        points: [
          {
            title: "Lets Bowl",
            para: [
              "Activities & Atmosphere: 10+ bowling lanes, billiards, football turf, and arcade games under one roof ",
              "Events & Packages: Offers birthday-party packages including invites and cake—great for all ages ",
              "Vibe & Accessibility: Spacious, family-friendly setup with upbeat, welcoming service",
            ],
            imgs: "/images/Visit-Images/SubPages/bowling/lets-bowl.jpg",
          },
        ],
      },

      {
        points: [
          {
            title: "Fun City – Forum Vijaya Mall, Vadapalani",
            para: [
              "Kid-Focused: Lighter balls and child-friendly lanes",
              "Add-ons: Indoor rides, skill games, claw machines",
              "Why Go: Excellent for younger children and parents looking to relax indoors",
            ],
            imgs: "/images/Visit-Images/SubPages/bowling/fun-city-–-forum-vijaya-mall,-vadapalani.jpg",
          },
        ],
      },

      {
        points: [
          {
            title:
              "Fun City - Phoenix Market City- Velachery,Chennai - Kids Game Zone & Indoor Play Zone",
            para: [
              "Safe, colorful zones with arcade games & rides",
              "Soft play areas for toddlers and young kids",
              "Popular for birthday parties & weekend family time",
            ],
            imgs: "/images/Visit-Images/SubPages/bowling/fun-city.jpg",
          },
        ],
      },

      {
        points: [
          {
            title: "VGP Cyber Kingdom – Chennai Citi Centre",
            para: [
              "Multi-activity zone with VR, bowling, go-karting & karaoke",
              "Perfect for birthdays, families & corporate fun",
              "Stylish ambience with flexible party packages",
            ],
            imgs: "/images/Visit-Images/SubPages/bowling/vgp-cyber-kingdom.jpg",
          },
        ],
      },
    ],
  },
];

const imageSections1 = [
  {
    sectionTitle: "",
    sectionDesc: "",
    image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: " Pro Tips",
            para: [
              <>Weekdays offer better availability and lower wait times</>,
              <>Shoe rentals are typically included in the lane fee</>,
              <>
                Group bookings and birthday packages are available at most
                venues
              </>,
              <>
                Use Zomato, BookMyShow, or venue apps for deals and slot
                reservations
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/pro-tips.svg",
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

export default function BowlingAlleysInChennai() {
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
          src="/images/Visit-Images/SubPages/thingsDoChild/bowling-alleys.jpg"
          alt=""
        />{" "}
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Bowling Alleys in Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Home</Link> -{" "}
              <span> Bowling Alleys in Chennai</span>
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
            <p>Popular Bowling Alleys in Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Where Fun Rolls in Style</h3>
            <p>
              Chennai’s bowling alleys aren’t just for strikes and spares —
              they’re buzzing hubs of leisure and laughter. From
              glow-in-the-dark lanes and upbeat music to snack bars and arcade
              corners, these spaces bring people together for friendly
              competition and casual fun. Whether you're planning a weekend
              hangout, a team outing, or just need a midweek break, Chennai’s
              bowling alleys roll out the perfect vibe for all ages.
            </p>
          </div>
        </div>
      </div>

      {/*#################### MAIN CONTENT  ####################*/}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec funchennai">
        {imageSections.map((section, index) => (
          <section
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
            key={index}
          >
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => {
                            if (
                              typeof point === "string" &&
                              point.includes(":")
                            ) {
                              const [prefix, ...rest] = point.split(":");
                              return (
                                <li key={i}>
                                  <strong>{prefix}:</strong>{" "}
                                  {rest.join(":").trim()}
                                </li>
                              );
                            }
                            return <li key={i}>{point}</li>;
                          })}
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
      {/*#################### TABLE CONTENT  ####################*/}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          {imageSections1.map((section, index) => (
            <section
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
              key={index}
            >
              <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
                <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                  {" "}
                </h2>
                {section.tenantInfoSections.map((tenant, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold mb-4">
                      {tenant.title}
                    </h4>
                    {tenant.points.map((item, j) => (
                      <div key={j} className="clcboxItemss flex mb-4">
                        <div className="clcboxIImg">
                          <img src={item.imgs} alt={item.title} />
                        </div>
                        <div className="clcboxICont">
                          <h3>{item.title}</h3>
                          <h5>{item.desc}</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {item.para.map((point, i) => (
                              <li key={i}>{point}</li>
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
