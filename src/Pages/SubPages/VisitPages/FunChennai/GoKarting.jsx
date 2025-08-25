import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
//################## DUMMY CONTENTS ###################################

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
      // {
      //   points: [
      //     {
      //       title: "ECR Speedway – East Coast Road (Injambakkam)",
      //       para: [
      //         <>
      //           <strong>Type:</strong> Outdoor Track
      //         </>,
      //         <>
      //           {" "}
      //           <strong>What to Expect:</strong>Professional-style circuit with
      //           challenging turns and straights
      //         </>,
      //         <>
      //           <strong> Karts:</strong> Variety of engines for beginners to
      //           pros
      //         </>,
      //         <>
      //           <strong> Why Visit:</strong>Most popular and established track
      //           in Chennai; scenic location, open till late evening
      //         </>,
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/gaming-arcade/ecr-speedway.jpg",
      //     },
      //   ],
      // },
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

      // {
      //   points: [
      //     {
      //       title: "ECR Go-Karting & Sports Complex – Akkarai",
      //       para: [
      //         <>
      //           <strong>Type:</strong> Mixed-activity arena with karting,
      //           paintball, and trampoline
      //         </>,
      //         <>
      //           {" "}
      //           <strong>Track:: </strong> Simple layout for casual racing
      //         </>,
      //         <>
      //           <strong> Why Visit: </strong>Perfect for groups looking for more
      //           than just go-karting
      //         </>,
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
      //     },
      //   ],
      // },
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

export default function GoKarting() {
  /*#################### STATE VARIABLES ##################### */

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  /*#################### HELPERS  ##################### */

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

  /*#################### USEEFFECT HOOCKS  ##################### */

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
          src="/images/Visit-Images/SubPages/thingsDoChild/go-karting.jpg"
          alt=""
        />{" "}
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>GO - KARTING</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Home</Link> - <span>GO - KARTING</span>
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
            <p>Where Tracks Turn into Thrills</p>
          </div>
          <div className="workIntro">
            <h3>Where Tracks Turn into Thrills</h3>
            <p>
              Chennai’s top go-karting spots are built for fun, focus, and
              friendly competition. Whether you're a beginner or chasing your
              best lap time, these tracks deliver high-energy excitement in a
              safe, well-designed environment.
            </p>
          </div>
        </div>
      </div>

      {/*#################### MAIN CONTENT  ####################*/}

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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
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
            </div>
          </section>
        ))}
      </div>

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
