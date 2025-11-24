import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
import { Helmet } from "react-helmet-async";
// ################## DUMMY CONTENTS ###################################

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Dark House – Phoenix MarketCity, Velachery",
            para: [
              "Type: Walk-through haunted maze with actors and effects",
              "What to Expect: Strobe lights, unexpected scares, horror sound design",
              "Why Visit: Great for groups; centrally located in one of Chennai’s biggest malls",
              "Age Group: 10+ recommended",
            ],
            imgs: "/images/Visit-Images/SubPages/horror/dark-house-–-phoenix-marketcity,-velachery.jpg",
            location: "https://maps.app.goo.gl/dsqLv6zmPQv15wMM8",
          },
        ],
      },
      {
        points: [
          {
            title: "Haunted House – VGP Universal Kingdom, ECR",
            para: [
              "Type: Classic theme park horror house",
              "What to Expect: Animatronics, eerie music, haunted rooms",
              "Why Visit: Family-friendly; part of a full-day amusement experience",
              "Bonus: Pair with rides and beach access",
            ],
            imgs: "/images/Visit-Images/SubPages/horror/haunted-house-–-vgp-universal-kingdom,-ecr.jpg",
            location: "https://maps.app.goo.gl/kxk2ehVzLfnikN7w7",
          },
        ],
      },
      {
        points: [
          {
            title:
              "Ghost Town (seasonal pop-ups) – Forum Vijaya Mall, Vadapalani",
            para: [
              "Type: Event-based haunted house, often during festivals or school holidays",
              "What to Expect: Themed rooms, actors in costume, horror challenges",
              "Why Visit: Affordable, immersive fun during special weekends",
            ],
            imgs: "/images/Visit-Images/SubPages/horror/horror-house-–-the-marina-mall-(omr).jpg",
            location: "https://maps.app.goo.gl/e1Mb12aAXehxK8Dd8",
          },
        ],
      },
      {
        points: [
          {
            title: "Horror House – The Marina Mall (OMR)",
            para: [
              "Type: A walk-through haunted attraction with moving props, live actors, and eerie sound effects",
              "What to Expect: Witch-themed, dimly lit setup perfect for both kids and adults",
              "Quick 10-minute experience — great as part of a mall visit",
            ],
            imgs: "/images/Visit-Images/SubPages/horror/marina-mall-horror.png",
            location: "https://maps.app.goo.gl/tpKuxYoWDUyBb5nf9",
          },
        ],
      },
    ],
  },
];

const imageSections1 = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "What to Know Before You Go",
            para: [
              <>
                Not suitable for children under 8 or people with heart
                conditions
              </>,
              <>
                Some horror houses use live actors, sudden light/sound effects,
                and tight spaces
              </>,
              <>Most last 5–10 minutes and allow group entry</>,
              <>
                Always check for queue times and age restrictions during
                weekends
              </>,
            ],
            imgs: "/images/Visit-Images/SubPages/horror/What-to-Know-Before-You-Go.svg",
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

export default function HorrorHousesInChennai() {
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
    <>
      <Helmet>
        <title>Horror House in Chennai | Haunted Attractions</title>
        <meta name="description" content="Step into a horror house in Chennai for creepy corridors, jump scares, and eerie thrills. These haunted attractions are perfect for fun weekend chills." />
        <link rel="canonical" href="/visit/things-to-do/horror-house-in-chennai" />
      </Helmet>

      <div className="FunchennaiDetailPage">
        {/*#################### Banner ########################## */}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/thingsDoChild/Horror Houses.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Horror Houses in Chennai</h3>
              <div className="breadCrum">
                <Link to="/invest-in-chennai">Home</Link> -{" "}
                <span>Horror Houses in Chennai</span>
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
              <p>Horror Houses in Chennai</p>
            </div>
            <div className="workIntro">
              <h3> Fear, Fun, and Screams Around Every Corner</h3>
              <p>
                Looking to test your courage? Chennai’s horror houses bring
                creepy corridors, jump scares, eerie sound effects, and haunted
                thrills to life — all in a safe, family-friendly environment.
                Whether you're out with friends or chasing an adrenaline rush,
                these haunted attractions combine fun and fear for an
                unforgettable experience. These spots are great for weekend
                outings, group challenges, or just laughing at who screams the
                loudest.
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
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                  {" Popular Horror Houses & Haunted Attractions in Chennai"}
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
                            {item.para.map((point, i) => {
                              // Bold prefix before colon, if string
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

                              // If it's already JSX or doesn't include ":", render as-is
                              return <li key={i}>{point}</li>;
                            })}
                          </ul>
                          {item.location && (
                            <div className="mt-2 exploreMorebuttonVisitChennai">
                              <a
                                className="text-blue-600 hover:underline text-sm font-medium"
                                href={item.location}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-discover="true"
                              >
                                View on Map
                              </a>
                            </div>
                          )}
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
          {/* KEY POINT SECTION @ 2 */}
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
                  <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
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
    </>
  );
}
