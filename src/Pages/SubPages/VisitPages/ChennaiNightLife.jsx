import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import "../../../assets/Css/ViewMore.css";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import VisitSlider from "./VisitSlider";

export default function NightLife() {
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
      category: "Upscale Bars & Lounges",
      places: [
        {
          name: "Q Bar (Hilton)",
          desc: "Rooftop ambiance, skyline views, and a lively DJ scene",
          locations: [
            {
              name: "Guindy",
              link: "https://maps.app.goo.gl/h6YcaEYeVXkKFbz89",
            },
          ],
        },
        {
          name: "The Leather Bar (The Park Hotel)",
          desc: "One of Chennai’s OG nightlife spots, stylish and moody",
          locations: [
            {
              name: "Anna Salai",
              link: "https://maps.app.goo.gl/AkwNRSzuB5yyF5bJ9",
            },
          ],
        },
        {
          name: "Willows (The Westin Velachery)",
          desc: "Sophisticated sports lounge with wide selections",
          locations: [
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/xzpYYVsAYE5jAmNc9",
            },
          ],
        },
        {
          name: "KooX – Rooftop Asian Grill",
          desc: "Fine Asian cuisine with a chic lounge feel",
          locations: [
            {
              name: "Nandhanam",
              link: "https://maps.app.goo.gl/VyAtcWYS2Aq4RDz16",
            },
          ],
        },
        {
          name: "SKY (The Rain Tree, Anna Salai)",
          desc: "Elegant rooftop bar with skyline views",
          locations: [
            {
              name: "Anna Salai",
              link: "https://maps.app.goo.gl/SWjr5rGJBvmUWmxEA",
            },
          ],
        },
        {
          name: "The Flying Elephant (Park Hyatt)",
          desc: "Multi-level bar, global cuisine, award-winning cocktails",
          locations: [
            {
              name: "Guindy",
              link: "https://maps.app.goo.gl/Chyc3qrGR3PJPL6N8",
            },
          ],
        },
      ],
    },
    {
      category: "Stylish & Contemporary Restobars",
      places: [
        {
          name: "Bay 146 (Savera Hotel)",
          desc: "Live bands, themed evenings, and an expansive bar menu",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/xGGjYJ4dWNFhan6J6",
            },
          ],
        },
        {
          name: "Off The Record",
          desc: "Industrial-chic vibe with music, cocktails, and shareable plates",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/nsS1sYpV3xVPC8aT7",
            },
          ],
        },
        {
          name: "Lord of the Drinks",
          desc: "Bold décor, comfort food, and vibrant nightlife energy",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/3Hr88ogTaeMkdno17",
            },
          ],
        },
      ],
    },
    {
      category: "Themed & Fusion Spots",
      places: [
        {
          name: "The Cycle Gap",
          desc: "Quirky, Tamil cinema-inspired with street food fusion",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/vDts1TLuD3sywCsy6",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/efovGfN2sbUgs7xa8",
            },
          ],
        },
        {
          name: "G Bar (Grand Chennai by GRT)",
          desc: "Plush interiors and premium beverages with modern European dining",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/mNh8qC9UAQVKCP738",
            },
          ],
        },
        {
          name: "Black Orchid",
          desc: "Intimate space with boho décor, signature cocktails, and acoustic evenings",
          locations: [
            {
              name: "RA Puram",
              link: "https://maps.app.goo.gl/UcQRSrNie9coQyK2A",
            },
          ],
        },
      ],
    },
    {
      category: "Gastrobar-style Dining",
      places: [
        // {
        //   name: "The Velveteen Rabbit",
        //   desc: "Cocktail-first menu, laid-back ambiance, and a solid brunch scene",
        //   locations: [
        //     {
        //       name: "RA Puram",
        //       link: "https://maps.app.goo.gl/T6dq44diL7CWdy8n8",
        //     },
        //   ],
        // },
        {
          name: "Ministry of Chutneys",
          desc: "Indian-inspired restobar with fun plating and playful cocktails",
          locations: [
            {
              name: "Pazavanthangal",
              link: "https://maps.app.goo.gl/P7GLcpVTf43kd6ak8",
            },
          ],
        },
      ],
    },
    {
      category: "Trendy & Youthful Vibes",
      places: [
        {
          name: "Watsons",
          desc: "Lively ambiance, classic pub fare, good music, and sports screenings",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/B5LmkqocMpdBcyWn8",
            },
          ],
        },
        {
          name: "Big Bang Theory – Bar & Kitchen",
          desc: "Sitcom-themed with quirky cocktails, comfort food, and regular events",
          locations: [
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/Dc9fy2wEJr8Mmoww7",
            },
          ],
        },
      ],
    },
    // {
    //   category: "Chic & Upscale Spots",
    //   places: [
    //     {
    //       name: "The Velveteen Rabbit",
    //       desc: "A beautifully designed space with craft cocktails and a quiet, boho-luxury vibe",
    //       locations: [
    //         {
    //           name: "RA Puram",
    //           link: "https://maps.app.goo.gl/T6dq44diL7CWdy8n8",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Radio Room",
    //       desc: "Retro-themed restobar with great music, curated drinks, and a fashionable crowd",
    //       locations: [
    //         {
    //           name: "RA Puram",
    //           link: "https://maps.app.goo.gl/Q9qybGWW3NE78y6R6",
    //         },
    //       ],
    //     },
    //     {
    //       name: "The Slate Kitchen & Bar",
    //       desc: "Sophisticated interiors, global cuisine, and rooftop ambiance",
    //       locations: [
    //         {
    //           name: "Nungambakkam",
    //           link: "https://maps.app.goo.gl/CEuDtQ948GkK7nMA6",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      category: "Live Music & Performance Venues",
      places: [
        {
          name: "Black Orchid",
          desc: "Hip atmosphere, cocktails, and dance nights",
          locations: [
            {
              name: "RA Puram",
              link: "https://maps.app.goo.gl/KxzuZGSHj8YX8ZXf6",
            },
          ],
        },
        {
          name: "10 Downing Street",
          desc: "British pub feel with weekly music quizzes and karaoke",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/k2cZGv9cQMmRvmws9",
            },
          ],
        },
      ],
    },
    {
      category: "Brewpubs & Casual Bars",
      places: [
        {
          name: "10 Downing Street",
          desc: "British pub feel with weekly music quizzes and karaoke",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/k2cZGv9cQMmRvmws9",
            },
          ],
        },
        {
          name: "Q Bar (Hilton)",
          desc: "Open-air bar with curated music and a high‑energy crowd",
          locations: [
            {
              name: "Guindy",
              link: "https://maps.app.goo.gl/K6xbYU6FJXHzXuS7A",
            },
          ],
        },
      ],
    },
    {
      category: "Late-Night Bites & Cafés",
      places: [
        {
          name: "Midnight Express",
          desc: "Delivery kitchen popular for night cravings",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/xTWbwLHoNuEDfJDz5",
            },
          ],
        },
        {
          name: "Writer’s Café",
          desc: "Open late for coffee, dessert, and quiet conversation",
          locations: [
            {
              name: "Gopalapuram",
              link: "https://maps.app.goo.gl/LV2qSTaiEXFpRCL66",
            },
          ],
        },
        {
          name: "Zaitoon",
          desc: "Arabian grills and shawarmas into the early hours",
          locations: [
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/L3ZRTWVJcvUm7hij8",
            },
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/adT9zWV3CNdj2fV28",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/nvGcWf9qDLHMjRh16",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/EuYR7135Vfx6Bako9",
            },
            { name: "ECR", link: "https://maps.app.goo.gl/RqxEWhh2wFqKhXZ77" },
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
          <img src="/images/night-life-banner.jpg" alt="" />
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
              <h3> Subtle, Stylish, and Slowly Evolving</h3>
              <p>
                Chennai's nightlife might be more understated than other metros,
                but it has its own distinctive rhythm. The city blends classy
                lounges, rooftop bars, beachside cafés, and live music venues
                that offer a refined, relaxed, and safe experience after dark.
                While the scene is shaped by local culture and early closing
                hours, it’s rapidly evolving — with more curated spaces for
                music, food, cocktails, and social gatherings.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Where to Experience Chennai After Dark
          </h1>

          {nightlifeData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn mb-10">
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* {section.places.map((place, idx) => {
                  const key = `${sectionIdx}-${idx}`;
                  const isExpanded = expandedPlaces[key];
                  const showLocations = isExpanded
                    ? place.locations
                    : place.locations.slice(0, 3);

                  return (
                    <div
                      key={idx}
                      className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                    >
                      <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                      <p className="text-gray-700 mb-3">{place.desc}</p>
                      <div
                        className={`flex flex-wrap gap-2 mt-2 overflow-y-auto transition-all duration-300 custom-scrollbar ${
                          isExpanded ? "max-h-40" : "max-h-20"
                        }`}
                      >
                        {showLocations.map((loc, locIdx) => (
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
                      {place.locations.length > 3 && (
                        <button
                          onClick={() => toggleExpand(key)}
                          className="view-more-button"
                        >
                          {isExpanded
                            ? "View Less Locations "
                            : "View More Locations "}
                        </button>
                      )}
                    </div>
                  );
                })} */}
                {section.places.map((place, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                    <p className="text-gray-700 mb-2">{place.desc}</p>

                    {place.locations?.length > 0 && (
                      <ExpandableList
                        items={place.locations.map((loc) => ({
                          label: loc.name,
                          link: loc.link,
                        }))}
                        maxVisible={2}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
