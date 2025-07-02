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

export default function ChennaiHealthcare() {
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
      category: "Why Chennai Stands Out in Health Care",
      places: [
        {
          name: "India’s medical tourism hub",
          desc: "Thousands of patients from across India, Africa, the Middle East, and Southeast Asia choose Chennai for affordable, quality treatment.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Home to leading hospitals",
          desc: "Apollo Hospitals, Fortis Malar, SIMS, Kauvery, and many more.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Strong government care ",
          desc: "Institutions like Rajiv Gandhi Govt. General Hospital and Egmore Children’s Hospital offer critical services to lakhs annually.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Pioneers in specialties",
          desc: "Chennai is known for heart surgeries, organ transplants, cancer care, and fertility treatment.",
          locations: [{ name: "-", link: "#" }],
        },
                {
          name: "Blending modern and traditional",
          desc: "Allopathy, Siddha, Ayurveda, and Homeopathy co-exist here meaningfully.",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "For B2B & Innovators",
      places: [
        {
          name: "Growing HealthTech ecosystem",
          desc: "Chennai startups are working in telemedicine, diagnostics, wearable health tech, and AI diagnostics.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Biotech & pharma base",
          desc: "Strong R&D presence along the OMR corridor.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Medical equipment exports",
          desc: "Chennai’s industrial zones support the med-tech supply chain.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Talent & research",
          desc: "Institutions like MMC, SRMC, and IITM support innovation.",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "For Citizens & Families",
      places: [
        {
          name: "Neighborhood",
          desc: "Neighborhood clinics, labs & pharmacies everywhere",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Government insurance",
          desc: "Government insurance schemes like CMCHIS make care accessible",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Online doctor consultations",
          desc: "Online doctor consultations are widely available",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Walk-in vaccination centers",
          desc: "Walk-in vaccination centers, health camps across zones",
          locations: [{ name: "-", link: "#" }],
        }, 
      ],
    },
    {
      category: "For Medical Tourists",
      places: [
        {
          name: "English-Speaking",
          desc: "English-speaking staff, international patient desks",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Affordable Surgery",
          desc: "Affordable surgery packages (cardiac, ortho, fertility)",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Airport Pickup",
          desc: "Airport pickup, hotel tie-ups, post-op recovery planning",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Holistic Care",
          desc: "Holistic care with Indian wellness therapies",
          locations: [{ name: "-", link: "#" }],
        }, 
      ],
    },




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

//   const events = [
//   {
//     period: "🕰️ 1800s–1900s",
//     title: "Foundations of Healing",
//     color: "text-blue-600",
//     items: [
//       "1664 – First Western-style hospital in Madras established by the East India Company",
//       "1899 – Stanley Medical College begins as a medical school",
//       "1935 – Government General Hospital (RGGGH) becomes a landmark public facility",
//       "1950s – Kilpauk Medical College and Institute of Child Health open",
//     ],
//   },
//   {
//     period: "🏥 1980s–1990s",
//     title: "Private Healthcare Rises",
//     color: "text-green-600",
//     items: [
//       "1983 – Apollo Hospitals launches in Greams Road, redefining private health in India",
//       "1994 – Fortis Malar Hospital (then Malar Hospital) starts operations",
//       "1995 – VHS Hospital becomes a model for community outreach",
//     ],
//   },
//   {
//     period: "🌐 2000s",
//     title: "Medical Tourism Emerges",
//     color: "text-purple-600",
//     items: [
//       "2003 – Chennai recognized as India’s medical tourism capital",
//       "2005 – Global Hospitals and SRMC become transplant hubs",
//       "2007 – India’s first successful adult-to-adult liver transplant in Chennai",
//     ],
//   },
//   {
//     period: "🧬 2010s",
//     title: "Specialization and Technology",
//     color: "text-pink-600",
//     items: [
//       "2011 – MIOT Hospitals introduces advanced robotic surgery",
//       "2013 – Kauvery Hospital expands with focus on cardiac & ortho",
//       "2015 – TN government digitizes hospital records under e-health initiatives",
//       "2017 – Apollo launches Health City in Vanagaram",
//     ],
//   },
//   {
//     period: "🧠 2020–2025",
//     title: "AI, Startups & Global Reach",
//     color: "text-red-600",
//     items: [
//       "2020 – Chennai hosts leading COVID treatment and research centers",
//       "2021 – Launch of HealthTech startups in telemedicine, diagnostics, AI (e.g., Medibuddy, Mykare, Orange Health Labs)",
//       "2022 – Kauvery Hospital opens in Radial Road with robotic and neuro care focus",
//       "2023 – Chennai becomes hub for medical second opinions from India",
//       "2024 – Several Chennai hospitals receive international NABH/JCI accreditations",
//       "2025 – Integration of AYUSH + modern systems in city-run polyclinics",
//     ],
//   },
// ];

  // ########## Custom Arrow Components ###############


const healthcareData = [
  {
    icon: "fa-stethoscope",
    class: "z5-html",
    title: "1800s–1900s: Foundations of Healing",
    points: [
      "1664 – First Western-style hospital in Madras established by the East India Company",
      "1899 – Stanley Medical College begins as a medical school",
      "1935 – Government General Hospital (RGGGH) becomes a landmark public facility",
      "1950s – Kilpauk Medical College and Institute of Child Health open",
    ],
    align: "left",
  },
  {
    icon: "fa-hospital",
    class: "z5-css",
    title: "1980s–1990s: Private Healthcare Rises",
    points: [
      "1983 – Apollo Hospitals launches in Greams Road, redefining private health in India",
      "1994 – Fortis Malar Hospital (then Malar Hospital) starts operations",
      "1995 – VHS Hospital becomes a model for community outreach",
    ],
    align: "right",
  },
  {
    icon: "fa-globe",
    class: "z5-javascript",
    title: "2000s: Medical Tourism Emerges",
    points: [
      "2003 – Chennai recognized as India’s medical tourism capital",
      "2005 – Global Hospitals and SRMC become transplant hubs",
      "2007 – India’s first successful adult-to-adult liver transplant in Chennai",
    ],
    align: "left",
  },
  {
    icon: "fa-dna",
    class: "z5-react",
    title: "2010s: Specialization and Technology",
    points: [
      "2011 – MIOT Hospitals introduces advanced robotic surgery",
      "2013 – Kauvery Hospital expands with focus on cardiac & ortho",
      "2015 – Tamil Nadu government digitizes hospital records under e-health initiatives",
      "2017 – Apollo launches Health City in Vanagaram",
    ],
    align: "right",
  },
  {
    icon: "fa-brain",
    class: "z5-angular",
    title: "2020–2025: AI, Startups & Global Reach",
    points: [
      "2020 – Chennai hosts leading COVID treatment and research centers",
      "2021 – Launch of HealthTech startups in telemedicine, diagnostics, AI (e.g., Medibuddy, Mykare, Orange Health Labs)",
      "2022 – Kauvery Hospital opens in Radial Road with robotic and neuro care focus",
      "2023 – Chennai becomes hub for medical second opinions from India",
      "2024 – Several Chennai hospitals receive international NABH/JCI accreditations",
      "2025 – Integration of AYUSH + modern systems in city-run polyclinics",
    ],
    align: "left",
  },
];
  
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
              <h3>Trusted, Advanced, and Always Evolving</h3>
              <p>
               Chennai is not just a city with hospitals—it’s one of India’s most respected healthcare capitals.
              </p>
              <p>
                From world-class multi-speciality hospitals to traditional healing centers, Chennai offers affordable, high-quality medical care trusted by millions across India and abroad.
              </p>
            <p>
               Whether you’re a local resident, a visiting patient, a healthcare investor, or a caregiver—Chennai has something for everyone in the health ecosystem.
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

        {/* <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
                🩺 Timeline: Chennai’s Healthcare Milestones
                </h2>
                <p className="text-center text-gray-600 text-lg mb-16">
                From Mission Hospitals to Medical Tourism Hub
                </p>

                <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
                <div className="space-y-16">
                    {events.map((event, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                        key={index}
                        className={`relative flex flex-col md:flex-row items-center ${
                            isLeft ? "md:flex-row-reverse" : ""
                        }`}
                        >
                       
                        <div className="hidden md:flex justify-center w-1/12">
                            <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md z-10"></div>
                        </div>

                        <div
                            className={`w-full md:w-5/12 p-6 rounded-xl shadow-lg bg-gray-50 ${
                            isLeft ? "md:ml-auto" : "md:mr-auto"
                            }`}
                        >
                            <h3 className={`text-xl font-semibold ${event.color}`}>
                            {event.period}: {event.title}
                            </h3>
                            <ul className="list-disc ml-4 mt-3 text-gray-700 space-y-1">
                            {event.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </div>
                       
                        <div className="hidden md:block w-6/12"></div>
                        </div>
                    );
                    })}
                </div>
                </div>
            </div>
        </section> */}

        <div className="z5-timeline-wrapper">
      <div className="z5-container">
        <div className="z5-vertical-line"></div>

        {healthcareData.map((item, index) => (
          <div
            key={index}
            className={`z5-box ${item.align === "left" ? "z5-box-left" : "z5-box-right"}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <i className={`fa-solid ${item.icon} ${item.class}`}></i>
            <div className="z5-info">
              <h2>{item.title}</h2>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
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
