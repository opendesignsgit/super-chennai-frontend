import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
 import { motion, AnimatePresence } from "framer-motion";

export default function Tirupati() {
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

const data = [
    {
      title: "By Road",
      points: [
        "135 km (Approx. 3.5 to 4 hours via NH716)",
      ],
    },
    {
      title: "By Train",
      points: [
        "Multiple trains daily from Chennai to Tirupati Railway Station (Approx. 3–4 hours)",
      ],
    },
    {
      title: "By Air",
      points: [
        "Tirupati Airport (TIR) is 15 km from the city",
      ],
    },
  ];

  const data1 = [
    {
      title: "Traditional Food",
      points: [
        <>Temple prasadam meals served free in Tirumala</>,
        <><strong>Famous South Indian tiffin at local hotels like:</strong></>,
        <>Sri Lakshmi Narayana Bhavan</>,
        <>Hotel Mayura</>,
        <>Minerva Coffee Shop</>,
        <>Bhimas Paradise</>,
      ],
    },
       {
      title: "Shopping & Souvenirs",
      points: [
        <> Buy original Tirupati Laddus (packaged, with token)</>,
        <> Brass lamps, framed Balaji photos, pooja kits</>,
        <> Wooden toys from nearby Etikoppaka (available in local shops)</>,
      ],
    },
   
   ];

     const data2 = [
    {
      title: "Ideal For",
      points: [
        <>Devotees and spiritual travellers</>,
        <>Families on pilgrimage</>,
        <>First-time visitors exploring sacred India </>,
        <>Weekend religious getaways from Chennai</>,
      ],
    },
   ];
 

const placesData = [
  {
    placeName: "Sri Venkateswara Temple, Tirumala",
    type: "Temple (Lord Vishnu - Balaji)",
    highlights: "Main hill temple, lakhs of devotees daily",
  },
  {
    placeName: "Sri Padmavathi Ammavari Temple",
    type: "Temple (Goddess Padmavathi)",
    highlights: "Located in Tiruchanur, consort of Lord Venkateswara",
  },
  {
    placeName: "Kapila Theertham",
    type: "Temple (Lord Shiva)",
    highlights: "Waterfall temple at the foot of Tirumala Hills",
  },
  {
    placeName: "Sri Govindaraja Swamy Temple",
    type: "Temple (Lord Vishnu)",
    highlights: "Historic city temple near railway station",
  },
  {
    placeName: "ISKCON Temple Tirupati",
    type: "Temple (Krishna / Bhakti Centre)",
    highlights: "Peaceful, modern temple with gardens",
  },
  {
    placeName: "Chandragiri Fort",
    type: "Historical Site",
    highlights: "11 km from Tirupati, ancient fort of Vijayanagara kings",
  },
];
 
    
  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
      link: "/live/cost-of-living-in-chennai",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/live/residential-properties-in-chennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/live/employment-in-chennai",
    },
    {
      src: "/images/Live-Images/chennaiLifeEssential4.png",
      title: "Transportation",
      link: "/live/transportation-in-chennai",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/live/healthcare-in-chennai",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/live/worship-in-chennai",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/visit/things-to-do-in-chennai",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/live/places-near-chennai",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/live/quality-of-life-in-chennai",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/live/infrastructure-development-in-chennai",
    },
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Educational Insitiutions",
      link: "/live/educational-institutions-in-chennai",
    },
  ];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: true,
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
          <img src="/images/Live-Images/SubPages/Tirupati-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Tirupati </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> - <Link to="/neighbourhood"> Neighbourhood </Link> - <a href="">Tirupati </a>
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
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Tirupati</h3>
     <p> Tirupati, located in Andhra Pradesh near the Tamil Nadu border, is one of the most visited pilgrimage destinations in the world. Just around 135 km from Chennai, it is home to the Sri Venkateswara Temple in Tirumala — dedicated to Lord Balaji (Vishnu), and revered as one of the richest and holiest temples globally.</p>
   <p>The town offers a deeply spiritual experience, set against the scenic backdrop of the Eastern Ghats. Along with religious significance, Tirupati also offers well-maintained hill routes, traditional vegetarian cuisine, and cultural heritage rooted in centuries of devotion.
</p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}

          <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec neighbourhood"> 

              <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl font-bold text-center mb-6">
             Distance from Chennai
            </h2>
            {data.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto my-6">
  <h2 className="text-2xl font-bold mb-4 text-center">
    Key Temples & Places to Visit
  </h2>
   <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-sm font-semibold text-gray-700">Place/Temple</th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-700">Deity/Type</th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-700">Highlights</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {placesData.map((place, index) => (
          <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
            <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{place.placeName}</td>
            <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{place.type}</td>
            <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{place.highlights}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>



 <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl font-bold text-center mb-6"> Want to Explore in Tirupati </h2>
            {data1.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl font-bold text-center mb-6">  Ideal For   </h2>
            {data2.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                {/* <h3 className="text-lg font-semibold mb-2">{section.title}</h3> */}
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        
 
</div>
         

        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>CHENNAI LIFE ESSENTIALS</h4>
              <p>
                Regardless of whether you have chosen Chennai to stay or move
                from one area to another area, Super Chennai will be the best
                guide to explore the essentials. So that you could easily live a
                lively and energetic life in Chennai.
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
