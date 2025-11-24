import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
import { Helmet } from "react-helmet-async";
//################## DUMMY CONTENTS ###################################

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Timezone – Phoenix MarketCity & VR Chennai",
            para: [
              "A family-friendly arcade with racing simulators, dance pads, claw machines, and more",
              "Great for kids and groups, with reward-based play systems",
              "VR experiences and redemption games are a highlight",
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/timezone.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: "Fun City – Express Avenue & Forum Vijaya Mall",
            para: [
              "Bright, vibrant arcade games for children and tweens",
              "Known for bumper cars, basketball games, and interactive rides",
              "Often bundled with birthday party packages",
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/fun-city-–-forum-vijaya-mall,-vadapalani.jpg",
          },
        ],
      },
      // {
      //   points: [
      //     {
      //       title: "Headshot VR – Alwarpet",
      //       para: [
      //         "A dedicated VR gaming arena offering high-end first-person and team shooter experiences",
      //         "Ideal for older teens and adults into immersive gaming",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/gaming-arcade/fun-city-–-forum-vijaya-mall,-vadapalani.jpg",
      //     },
      //   ],
      // },
      // {
      //   points: [
      //     {
      //       title: "Snow Kingdom + Gaming Zone – ECR",
      //       para: [
      //         "             Combine snow play with arcade-style gaming",
      //         "Includes motion games, laser tag, and mini bowling",
      //         "Great spot for full-day family outings",
      //       ],
      //       // imgs: "/images/Visit-Images/SubPages/gaming-arcade/fun-city-–-forum-vijaya-mall,-vadapalani.jpg",
      //     },
      //   ],
      // },
      // {
      //   points: [
      //     {
      //       title: " Happy Zone – Marina Mall, OMR",
      //       para: [
      //         "Offers classic arcade games along with carnival-style attractions",
      //         "Ride simulators, token-based play, and small kids’ rides",
      //       ],
      //       // imgs: "/images/Visit-Images/SubPages/gaming-arcade/ecr-speedway.jpg.jpg",
      //     },
      //   ],
      // },
    ],
  },
];

const imageSectionsTwo = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: " ECR Speedway – East Coast Road",
            para: [
              "Chennai’s most popular go-karting track",

              "Offers pro-level karts and open-air racing with scenic surroundings",
              "Great for group races, corporate events, or casual spins",
              "Additional activities: ATV rides, target shooting",
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/ecr-speedway.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: "Kart Attack – Injambakkam, ECR",
            para: [
              "Well-maintained 260-meter track with banked curves",
              "Offers single and double karts for adults and kids",
              "Helmet and safety briefing included",
              " Close to the beach and other ECR attractions",
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/kart-attack.jpg",
          },
        ],
      },

      {
        points: [
          {
            title: " VGP Karting Zone – Inside VGP Snow Kingdom, ECR",
            para: [
              "Part of a larger entertainment complex",
              "Suitable for younger age groups or first-time riders",
              "Combine with snow play, arcade games, and food zones",
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/vgp-karting-zone.jpg",
          },
        ],
      },

      // {
      //   points: [
      //     {
      //       title: "What to Know Before You Go:",
      //       para: [
      //         "Wear closed shoes (no sandals/slippers)",
      //         "Minimum age/height restrictions apply at most tracks",
      //         "Early evenings or weekdays offer shorter wait times",
      //         "Ideal for groups, dates, and weekend getaways",
      //       ],
      //       // imgs: "/images/Visit-Images/SubPages/gaming-arcade/ecr-speedway.jpg",
      //     },
      //   ],
      // },
      {
        points: [
          {
            title: "ECR Speedway – East Coast Road (Injambakkam)",
            para: [
              <>
                <strong>Type:</strong> Outdoor Track
              </>,
              <>
                {" "}
                <strong>What to Expect:</strong>Professional-style circuit with
                challenging turns and straights
              </>,
              <>
                <strong> Karts:</strong> Variety of engines for beginners to
                pros
              </>,
              <>
                <strong> Why Visit:</strong>Most popular and established track
                in Chennai; scenic location, open till late evening
              </>,
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/ecr-speedway.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: "Kart Attack – Neelangarai, ECR",
            para: [
              <>
                <strong>Type:</strong> Outdoor
              </>,
              <>
                {" "}
                <strong>Track Highlights:</strong> Smooth bends, good for
                beginners and intermediates
              </>,
              <>
                <strong> Extras:</strong> Has night racing, and twin karts for
                kids + parents
              </>,
              <>
                <strong> Why Visit:</strong> Easy to access from the city, with
                affordable pricing and basic safety
              </>,
            ],
            imgs: "/images/Visit-Images/SubPages/gaming-arcade/kart-attack.jpg",
          },
        ],
      },

      // {
      //   points: [
      //     {
      //       title: "Apex Racing Academy – Off OMR, near Padur",
      //       para: [
      //         <>
      //           <strong>Type:</strong> Professional Karting & Training Facility
      //         </>,
      //         <>
      //           {" "}
      //           <strong>What to Expect: </strong> Racing classes, time-trial
      //           challenges, performance karts
      //         </>,
      //         <>
      //           <strong> Why Visit:</strong> Ideal for aspiring racers and those
      //           interested in motorsports seriously
      //         </>,
      //       ],
      //       // imgs: "/images/Visit-Images/SubPages/gaming-arcade/kart-attack.jpg",
      //     },
      //   ],
      // },

      {
        points: [
          {
            title: "ECR Go-Karting & Sports Complex – Akkarai",
            para: [
              <>
                <strong>Type:</strong> Mixed-activity arena with karting,
                paintball, and trampoline
              </>,
              <>
                {" "}
                <strong>Track:: </strong> Simple layout for casual racing
              </>,
              <>
                <strong> Why Visit: </strong>Perfect for groups looking for more
                than just go-karting
              </>,
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
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
            title: "Safety & Experience Tips",
            para: [
              <>All venues provide helmets and brief safety instructions</>,
              <>
                Minimum age & height requirements may apply (typically 8+ years)
              </>,
              <>Avoid loose clothing and opt for closed-toe shoes</>,
              <>Booking ahead is recommended for weekends and evenings</>,

              <>Some tracks offer group packages and time-trial rankings</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/safety-experience.svg",
          },
        ],
      },
    ],
  },
];

export default function GamingArcadesInChennai() {
  {
    /*#################### STATE VARIABLES ##################### */
  }

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  {
    /*#################### HELPERS  ##################### */
  }

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

  {
    /*########################### RENDER   ######################### */
  }

  return (
    <>
      <Helmet>
        <title>Arcade Games in Chennai - Super Chennai</title>
        <meta
          name="description"
          content="Discover the thrill of Arcade Games in Chennai! From VR battles to classics, enjoy fun hangouts, weekend plans & team challenges at top arcades across the city."
        />
        <link
          rel="canonical"
          href="/visit/things-to-do/arcade-games-in-chennai"
        />
      </Helmet>

      <div className="FunchennaiDetailPage">
        {/*#################### Banner ########################## */}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/thingsDoChild/gaming-arcades.jpg"
            alt=""
          />{" "}
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Gaming Arcades in Chennai</h3>
              <div className="breadCrum">
                <Link to="/invest-in-chennai">Home</Link> -{" "}
                <span>Gaming Arcades in Chennai</span>
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
              <p> Gaming Arcades in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Where Play Meets Pulse — For All Ages</h3>
              <p>
                Whether you're into high-speed racing, VR battles, air hockey,
                or nostalgic arcade classics, Chennai’s gaming arcades offer
                immersive fun across the city’s malls and entertainment hubs.
                Perfect for weekend hangouts, birthday outings, or post-movie
                fun, these spaces are designed for thrill, competition, and
                screen-time you won't feel guilty about. From single-player
                shooters to team-based simulators, there’s something for every
                level of gamer — casual to competitive.
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
                  {"Popular Gaming Arcades in Chennai"}
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
        {/*#################### MAIN CONTENT 2  ####################*/}

        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec funchennai">
          {imageSectionsTwo.map((section, index) => (
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
              {/* <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {"Top Go-Karting Tracks in Chennai "}
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
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div> */}
            </section>
          ))}
        </div>
        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec ">
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
