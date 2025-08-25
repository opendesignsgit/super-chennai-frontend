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

export default function Vellore() {
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
        "140 km (Approx. 3.5 hours via NH48)",
      ],
    },
    {
      title: "By Train",
      points: [
        "Regular trains from Chennai stop at Katpadi Junction (approx. 2.5 to 3 hours)",
      ],
    },
  ];

  const data1 = [
    {
      title: "Heritage & Fort Walk",
      points: [
        <>Take a walk through the Vellore Fort, an impressive stone structure surrounded by a wide moat. Inside, visit the Jalakandeswarar Temple, a masterpiece of Vijayanagara-era architecture. The fort also houses a small church and mosque, symbolising religious harmony.</>,
      ],
    },
       {
      title: "Sripuram Golden Temple",
      points: [
        <>Located about 10 km from the city, this temple complex is known for its peaceful ambience and gold-coated sanctum. It’s surrounded by a star-shaped path with spiritual messages and lush gardens.</>,
      ],
    },
       {
      title: "Local Food to Try",
      points: [
        <><strong>Ambur Biryani </strong> (famous near the Chennai-Bangalore highway stretch)</>,
         <>South Indian meals at local messes</>,
          <>Filter coffee and evening snacks near Gandhi Road and Katpadi</>,
      ],
    },
       {
      title: "Shopping & Gifts",
      points: [
        <>Brass and bronze pooja items</>,
        <>Religious frames and idols</>,
        <>Sripuram temple souvenirs</>,
        <>Books, incense, and spiritual keepsakes</>,
      ],
    },
   ];

     const data2 = [
    {
      title: "Ideal For",
      points: [
        <>History and architecture enthusiasts</>,
        <>Spiritual travellers</>,
        <>Medical and academic visitors</>,
        <>Families looking for a heritage weekend getaway</>,
      ],
    },
   ];
 

const placesData = [
   
  {
    placeName: "Vellore Fort",
    type: "Historical Landmark",
    highlights: "Built in the 16th century; known for its unique granite structure and moat",
  },
  {
    placeName: "Jalakandeswarar Temple",
    type: "Temple",
    highlights: "Intricate carvings and Dravidian architecture within the Vellore Fort",
  },
  {
    placeName: "Sri Lakshmi Narayani Golden Temple",
    type: "Religious Landmark",
    highlights: "Covered in real gold leaf; located in Sripuram, ~7 km from Vellore town",
  },
  {
    placeName: "Amirthi Zoological Park",
    type: "Nature / Family Spot",
    highlights: "Mini-zoo and picnic space with waterfalls (seasonal); ~25 km from the city",
  },
  {
    placeName: "Yelagiri Hills",
    type: "Hill Station / Nature",
    highlights: "Quiet hill retreat with boating, trekking, and viewpoints (~85 km from Vellore)",
  },
  {
    placeName: "Government Museum, Vellore",
    type: "Cultural/History Museum",
    highlights: "Displays ancient weaponry, artifacts, and tribal collections",
  },
  {
    placeName: "Big Mosque (Periya Pallivasal)",
    type: "Religious Site",
    highlights: "One of the oldest mosques in Tamil Nadu",
  },
  {
    placeName: "Christian Medical College (CMC)",
    type: "Heritage Campus",
    highlights: "Historic educational institution with a museum and serene chapel",
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
          <img src="/images/Live-Images/SubPages/Vellore-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Vellore </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> - <Link to="/neighbourhood"> Neighbourhood </Link> - <a href="">Vellore </a>
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
              <h3>Vellore</h3>
     <p>Known as the Fort City, Vellore combines the grandeur of Tamil Nadu’s rich past with the promise of modern progress. Located around 140 km from Chennai, the city is home to the majestic Vellore Fort, one of South India’s finest 16th-century military landmarks. </p>
   <p>Beyond its historical importance, Vellore is nationally recognized for its top-tier institutions, such as Christian Medical College (CMC) and VIT University, making it a hub of both healing and learning. Whether you seek history, spiritual peace, or educational excellence, Vellore has something to offer.</p>
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
   Key Places to Visit in Vellore
  </h2>
   <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-sm font-semibold text-gray-700">Place</th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-700">Type</th>
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
            <h2 className="text-2xl font-bold text-center mb-6"> Want to Explore in Vellore  </h2>
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
