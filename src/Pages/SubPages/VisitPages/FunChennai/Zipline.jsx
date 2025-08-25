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

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Wild Tribe Ranch – ECR (Near Mudaliarkuppam)",
            para: [
              "Distance: ~1.5 hours from central Chennai",
              "Type: Outdoor adventure park",
              "Zipline Details: Medium-range zipline across open fields",
              "Other Activities: ATV rides, paintball, archery, rope courses, obstacle tracks",
              "Why Visit: Full-day group outing or team-building adventure",
            ],
            imgs: "/images/Visit-Images/SubPages/Ziplines/wild-tribe-ranch-ecr-(near-mudaliarkuppam).jpg",
            location: "https://maps.app.goo.gl/TiCqio2Xhbpn6QB97",
          },
          {
            title: "Adventure Zone – Muttukadu (ECR)",
            para: [
              "Distance: ~45 minutes from Chennai (near Muttukadu Boat House)",
              "Zipline Details: Short zipline across a man-made landscape",
              "Other Features: Kayaking, rock climbing, rope bridge, and more",
              "Why Visit: Great for beginners and kids",
            ],
            imgs: "/images/Visit-Images/SubPages/Ziplines/adventure-zone-muttukadu-(ecr).jpg",
            location: "https://maps.app.goo.gl/AdventureZoneLocation",
          },
          {
            title: "Off The Grid Adventures – Poonamallee (West Chennai)",
            para: [
              "Zipline Type: Part of their obstacle and climbing circuits",
              "Additional: Bouldering, commando nets, wall climbs, target shooting",
              "Audience: School/college groups, fitness buffs, and corporate teams",
            ],
            imgs: "/images/Visit-Images/SubPages/Ziplines/off-the-grid-adventures-poonamallee-(west-chennai).jpg",
            location: "https://maps.app.goo.gl/OffTheGridAdventuresLocation",
          },
          {
            title: "Fit Rock Arena (Guindy)",
            para: ["Indoor rock climbing and bouldering for all levels"],
            imgs: "/images/Visit-Images/SubPages/Ziplines/fit-rock-arena-guindy.jpg",
            location: "https://maps.app.goo.gl/FitRockArenaLocation",
          },
        ],
      },
    ],
  },
];

const adventureParks = [
  {
    category: "Top Zipline Destinations in Chennai",
    places: [
      {
        name: "VGP Wonder World – ECR",
        desc: "Located along the East Coast Road, VGP Wonder World offers a thrilling zipline experience as part of its adventure park attractions. Visitors can enjoy soaring through the air with safety measures in place, making it suitable for families and thrill-seekers alike.",
      },
      {
        name: "Dugout Adventure Arena – OMR & Velachery",
        desc: "Dugout provides an indoor adventure experience, including ziplining, dodgeball, and other activities. It's a great spot for those looking to enjoy adventure sports regardless of the weather.",
      },
      {
        name: "Go Xtreme Adventure Zone – Uthandi, ECR",
        desc: "Go Xtreme offers a range of adventure activities, including ziplining, paintball, and body zorbing. Situated near the beach, it provides a scenic backdrop for your adventure.",
      },
      {
        name: "Off Road Sports – ECR",
        desc: "Off Road Sports boasts a zipline with a sea view, offering a unique experience of gliding above the coastline. The facility ensures safety with galvanized cables and trained staff.",
      },
      {
        name: "Kalaignar Centenary Park – Teynampet",
        desc: "This urban park features a 500-meter zipline, providing an aerial view of the lush surroundings. It's a perfect blend of nature and adventure within the city limits.",
      },
      {
        name: "Fun Factori – Mogappair East",
        desc: "Fun Factori offers a safe and fun environment for kids to experience ziplining. With attentive staff and necessary safety equipment, it's an ideal spot for children to enjoy adventure sports.",
      },
    ],
  },
];

export default function Zipline() {
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
        <title>Zipline in Chennai | Adventure Zone Chennai</title>
        <meta name="description" content="Discover the excitement of zipline in Chennai, where adrenaline, safety, and stunning aerial views come together for an adventure that suits all age groups." />
        <link rel="canonical" href="/visit/things-to-do/zipline-in-chennai" />
      </Helmet>

      <div className="FunchennaiDetailPage">
        {/*#################### Banner ########################## */}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/thingsDoChild/Ziplines.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Top Zipline Destinations in Chennai</h3>
              <div className="breadCrum">
                <Link to="/.">Home</Link> - <span>Zipline </span>
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
              <p>Chennai’s Sky Trails: Experience the Thrill</p>
            </div>
            <div className="workIntro">
              <h3>Chennai’s Sky Trails: Experience the Thrill</h3>
              <p>
                Experience Chennai from a whole new angle — flying high through
                thrilling zipline courses that promise both adrenaline and
                amazing views. Whether you're a first-time flyer or an adventure
                enthusiast, these zipline parks offer safe, scenic, and exciting
                rides for all age groups. It’s the perfect weekend activity to
                break free from the usual and feel the rush above the treetops
              </p>
            </div>
          </div>
        </div>

        {/*#################### LIST  ####################*/}
        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Top Zipline Destinations in Chennai
          </h1>
          {adventureParks.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn">
              <div className="workIntro">
                <p className="text-2xl font-semibold mb-6"></p>
              </div>

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
            </div>
          ))}
        </div>

        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec funchennai">
          {imageSections.map((section, index) => (
            <section
              className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
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
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center ">
                  {"Ziplines in Chennai & Nearby"}
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
                          {/* {item.location && (
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
                        )} */}
                          {/* {item.website && (
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline mt-2 block"
                          >
                            Visit Website
                          </a>
                        )} */}
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
    </>
  );
}
