import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import VisitSlider from "./VisitSlider";

const NetworkData = [
  {
    category: "Startup & Entrepreneurial Ecosystem",
    places: [
      {
        name: "TiE Chennai",
        desc: "Mentorship, pitch events, and growth programs for founders",
        locations: [
          {
            name: " Taramani",
            link: "https://maps.app.goo.gl/XvaYMPsJmu93fdko8",
          },
        ],
      },
      {
        name: "SaaSBOOMi & NASSCOM",
        desc: "Industry-specific forums for SaaS, IT, and tech innovators",
        locations: [
          {
            name: "Taramani",
            link: "https://maps.app.goo.gl/iiikDPbrGczHeYPGA",
          },
          {
            name: " Triplicane",
            link: "https://maps.app.goo.gl/AVX4f951RoNTVADt6",
          },
        ],
      },
      {
        name: "StartupTN & IITM Incubation Cell",
        desc: "Government-backed and academic-led platforms for early-stage startups",
        locations: [
          {
            name: " Taramani",
            link: "https://maps.app.goo.gl/PpEvMk3PDtKTawqk8",
          },
        ],
      },
      {
        name: "Events & Demo Days",
        desc: "Founders Unfiltered, Headstart Chennai, and city-based startup showcases",
        locations: [
          {
            name: " Perungudi",
            link: "https://maps.app.goo.gl/g66yBGKwZ4yKfdQKA",
          },
        ],
      },
    ],
  },
  {
    category: "Professional Communities & Co-Working Spaces",
    places: [
      {
        name: "Co-working Hubs",
        desc: "Workafella, The Hive, WeWork, and Spaces host regular networking events",
        locations: [
          {
            name: " Teynampet",
            link: "https://maps.app.goo.gl/CrsiU47yey5LdimX7",
          },
          {
            name: "Alwarpet",
            link: "https://maps.app.goo.gl/nVVQbMxj3KiavMpj7",
          },
          {
            name: " Teynampet",
            link: "https://maps.app.goo.gl/bKnyxxWhmeaEL2Z26",
          },
          {
            name: "Alwarpet",
            link: "https://maps.app.goo.gl/xM3sbWZC8af8yPgR6",
          },
          {
            name: " OMR",
            link: "https://maps.app.goo.gl/HKDj6pLg1bNKkjYz5",
          },
        ],
      },
      {
        name: "LinkedIn Locals Chennai",
        desc: "Real-world meetups for digital professionals",
        locations: [
          {
            name: "Nungambakkam",
            link: "https://maps.app.goo.gl/j8KpvNWhbqnabxoG6",
          },
          {
            name: "Adyar",
            link: "https://maps.app.goo.gl/5B4BJTuJSgM4UoTh9",
          },
          {
            name: " Teynampet",
            link: "https://maps.app.goo.gl/vBVpCpP2aFuMNGym7",
          },
          {
            name: "Anna Nagar",
            link: "https://maps.app.goo.gl/RMGQ3Bn7GbHZn5k36",
          },
        ],
      },
      {
        name: "Industry Forums",
        desc: "FICCI, CII, Madras Management Association for corporate and leadership networking",
        locations: [
          {
            name: " Chetpet",
            link: "",
          },
        ],
      },
      {
        name: "Creative Meetups",
        desc: "Indie music, design, content creator and photography groups (via Meetup or Instagram)",
        locations: [
          {
            name: " OMR",
            link: "https://maps.app.goo.gl/kD9Sr3oWD3bgcPYQA",
          },
        ],
      },
    ],
  },
  {
    category: "Expat & International Circles",
    places: [
      {
        name: "InterNations Chennai",
        desc: "Global expat network hosting meetups, cultural nights, and lifestyle mixers",
        locations: [
          {
            name: "CIT Nagar",
            link: "https://maps.app.goo.gl/LnZiQoRj8fVyhuBL7",
          },
          {
            name: "T Nagar",
            link: "https://maps.app.goo.gl/UVbfAKMK5JRBfp5Y8",
          },
          {
            name: "Purasaiwakkam",
            link: "https://maps.app.goo.gl/RQ3P3XkCJP54xLMCA",
          },
        ],
      },
      {
        name: "Cultural Institutes",
        desc: "Goethe-Institut, Alliance Française, InKo Centre often run community-led programs",
        locations: [
          {
            name: "Santhome",
            link: "https://maps.app.goo.gl/fQc6P91eLz4mFHNh6",
          },
          {
            name: " Virugambakkam",
            link: "https://maps.app.goo.gl/gADDCcjXLWe8vdw29",
          },
          {
            name: " Kodambakkam",
            link: "https://maps.app.goo.gl/x6nBP5nRT1fjAmG38",
          },
        ],
      },
      {
        name: "Language Exchanges",
        desc: "Regular meetups for English, French, German, Korean, and Tamil learning communities",
        locations: [
          {
            name: "Aminjikarai",
            link: "https://maps.app.goo.gl/S9n5J7oLE5ZNKkdu7",
          },
          {
            name: " Tambaram",
            link: "https://maps.app.goo.gl/edUHP6jwjNMPx24R7",
          },
          {
            name: "Ramapuram",
            link: "https://maps.app.goo.gl/MktLV3sC8rcUeGdU9",
          },
        ],
      },
    ],
  },
  {
    category: "Student & Young Professional Networks",
    places: [
      {
        name: "College Chapters & Hackathons",
        desc: "IIT Madras, Loyola College, and Anna University host regular events",
        locations: [
          {
            name: "Anna Nagar",
            link: "https://maps.app.goo.gl/8uKDgNXEZjoHzAkv7",
          },
          {
            name: "IIT Madras Campus",
            link: "https://maps.app.goo.gl/mnp7qVZ4Xmw6gGEG8",
          },
          {
            name: "Anna Nagar",
            link: "https://maps.app.goo.gl/9JFvdBg563p7Eb8v5",
          },
        ],
      },
      {
        name: "Toastmasters & Rotaract Clubs",
        desc: "Communication, leadership, and volunteering circles across the city",
        locations: [
          {
            name: "Nandanam",
            link: "https://maps.app.goo.gl/3UGWc3YC6a5TtDFB6",
          },
          {
            name: "Adyar",
            link: "https://maps.app.goo.gl/3FrHZvn2GLFokeZk7",
          },
          {
            name: " Ramapuram",
            link: "https://maps.app.goo.gl/NCty7FH4x5dQ9CyJ9",
          },
        ],
      },
      {
        name: "Skill-building workshops",
        desc: "Google Developer Groups, Women Who Code, and Product School meetups",
        locations: [
          {
            name: "T Nagar",
            link: "https://maps.app.goo.gl/bLUvsAxJYmfx6tMMA",
          },
          {
            name: " Pallavaram",
            link: "https://maps.app.goo.gl/RAm1fKRmKt7SQVE58",
          },
          {
            name: "Anna Nagar",
            link: "https://maps.app.goo.gl/5ryrs73Jya9kiFKA8",
          },
        ],
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
          {
            name: "Kilpauk",
            link: "https://maps.app.goo.gl/EPUZ2QxbaaKAnkjL9",
          },
          {
            name: " Mylapore",
            link: "https://maps.app.goo.gl/fbKXvu7U4Mf4GACN9",
          },
        ],
      },
      {
        name: "LinkedIn & WhatsApp Communities",
        desc: "Many industry-specific or city-based groups",
        locations: [
          // { name: "Temporarily closed", link: "#" }
        ],
      },
      {
        name: "Instagram & Telegram Channels",
        desc: "Widely used by creators, artists, and workshop organizers",
        locations: [
          // { name: "Temporarily closed ", link: "#" }
        ],
      },
      {
        name: "BookMyShow & Insider",
        desc: "For events that mix entertainment with social interaction",
        locations: [
          {
            name: "T Nagar",
            link: "https://maps.app.goo.gl/u84FXX6Fjk2fGTbY8",
          },
          {
            name: " Thousand Lights",
            link: "https://maps.app.goo.gl/naVWqASwmNtFkkZt8",
          },
          {
            name: " T Nagar",
            link: "https://maps.app.goo.gl/eXoxR7LveVzmCujS9",
          },
          {
            name: "Vadapalani",
            link: "https://maps.app.goo.gl/B7goWms8h3CDcJiw6",
          },
        ],
      },
    ],
  },
  {
    category: "Why It Matters",
    places: [
      {
        name: "Networking in Chennai",
        desc: "It is accessible, diverse, and industry-rich",
        // locations: [
        //   {
        //     name: " Virugambakkam",
        //     // link: "https://maps.app.goo.gl/AgCc96v1ZMUoacj3A",
        //   },
        // ],
      },
      {
        name: "The city balances",
        desc: "Structured professional forums with casual, creative, and community-led spaces",
        // locations: [
        //   {
        //     name: " KK Nagar",
        //     // link: "https://maps.app.goo.gl/pHn23TtRJf8kA5js5",
        //   },
        // ],
      },
      {
        name: "Real connections",
        desc: "It's a place to build real connections — not just contacts",
        // locations: [
        //   {
        //     name: " Vadapalani",
        //     // link: "https://maps.app.goo.gl/rLs1iVfdATjgqNJG8",
        //   },
        // ],
      },
    ],
  },
  {
    category: "Pro Tips",
    places: [
      {
        name: "Show up regularly",
        desc: "Many groups value consistency over formality",
        // locations: [
        //   {
        //     name: " West Mambalam",
        //     // link: "https://maps.app.goo.gl/E1nxGw9xX2PgraNr6",
        //   },
        // ],
      },
      {
        name: "Bring your curiosity, not just a business card",
        desc: "Chennai is warm, but relationship-driven",
        // locations: [
        //   {
        //     name: " West Saidapet",
        //     // link: "https://maps.app.goo.gl/chf9voGLAg7dTTho8",
        //   },
        // ],
      },
      {
        name: "Follow up online",
        desc: "Many connections strengthen digitally post-event",
        // locations: [
        //   {
        //     name: " West Mambalam",
        //     // link: "https://maps.app.goo.gl/mJmaYD1sA5nHj5Wt6",
        //   },
        //   {
        //     name: " Pulianthope",
        //     // link: "https://maps.app.goo.gl/Wc7r3nwtpaJjRq167",
        //   },
        // ],
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
          <img src="/images/networks-banner.jpg" alt="chennai networks" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Networks</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> - <a href="">Networks</a>
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
              <p>Network &nbsp; in Chennai &nbsp; Network &nbsp; in Chennai</p>
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
                From formal meetups and conferences to relaxed cafés, co-working
                hubs, and interest-based groups, Chennai is a city where your
                next opportunity might be a conversation away.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Where & How to Network in Chennai
          </h1>

          {NetworkData.map((section, sectionIdx) => (
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
                    <p className="text-gray-700 mb-2">{place.desc}</p>

                    {/* {place.locations?.length > 0 && (
                      <ExpandableList
                        items={place.locations.map((loc) => ({
                          label: loc.name,
                          link: loc.link,
                        }))}
                        maxVisible={2}
                      />
                    )} */}
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
