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

export default function Pondicherry() {
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
        "150 km via East Coast Road (ECR) – 3.5 to 4 hours; scenic with sea views.",
      ],
    },
    {
      title: "By Train",
      points: [
        "Trains from Chennai Egmore to Puducherry Railway Station (~4–5 hrs).",
      ],
    },
    {
      title: "By Air",
      points: [
        "Pondicherry Airport (PNY) has limited flights. Most travellers use Chennai Airport and travel by road.",
      ],
    },
  ];

  const data1 = [
    {
      title: "Heritage Walks in White Town",
      points: [
        <>Wander through Rue Romain Rolland, Suffren Street, and Mission Street for colonial architecture, street art, and boutique stores.</>,
      ],
    },
       {
      title: "Beach Vibes",
      points: [
        <> Promenade Beach for morning/evening strolls</>,
        <> Paradise Beach for boat rides and photography</>,
        <> Serenity Beach for calm, local life, and surfing</>,
      ],
    },
    {
      title: "Cafes & Food Experiences",
      points: [
        <> Explore French and Tamil fusion food at charming cafés and bistros.</>,
        <> <strong>Popular Picks</strong></>,
        <> Coromandel Cafe</>,
        <> Cafe des Arts</>,
        <> Villa Shanti</>,
        <> Le Dupleix</>,
        <> Baker Street</>,
        <> Bread & Chocolate (Auroville)</>,
      ],
    },
     {
      title: "Spiritual Getaways",
      points: [
        <> Auroville: global township, open for meditation and quiet time</>,
        <> Sri Aurobindo Ashram: peaceful and minimalist ashram in the city</>,
       ],
    },
      {
      title: "Shopping & Gifts",
      points: [
        <>Incense, handmade paper, candles (Auroville shops)</>,
        <> Clothing, jewellery, and home decor in White Town boutiques</>,
        <> Organic skincare, oils, and essential oils</>,
        <> Books on yoga, spirituality, and Tamil culture</>,
       ],
    },
   
   ];

     const data2 = [
    {
      title: "Ideal For",
      points: [
        <>Couples and solo travellers</>,
        <>Weekend escape from Chennai</>,
        <>Art and design lovers </>,
        <>Yoga and wellness seekers</>,
         <>Spiritual explorers</>,
          <>Beach and café hoppers</>,
      ],
    },
   ];
 

const placesData = [
  {
    placeName: "Promenade Beach",
    type: "Beachfront",
    highlights: "Popular for sunrises, walks, and street food",
  },
  {
    placeName: "French Quarter (White Town)",
    type: "Heritage Zone",
    highlights: "Colourful villas, French street names, cafés",
  },
  {
    placeName: "Auroville",
    type: "Experimental Township",
    highlights: "Home to the golden Matrimandir, ideal for peace & meditation",
  },
  {
    placeName: "Sri Aurobindo Ashram",
    type: "Spiritual Retreat",
    highlights: "Silent meditation space in the city center",
  },
  {
    placeName: "Paradise Beach",
    type: "Island Beach Spot",
    highlights: "Boat ride access, clean and scenic",
  },
  {
    placeName: "Sacred Heart Basilica",
    type: "Church",
    highlights: "Gothic-style cathedral with stained glass",
  },
  {
    placeName: "Pondicherry Museum",
    type: "Museum",
    highlights: "French-era artifacts, sculpture, and history",
  },
  {
    placeName: "Botanical Garden",
    type: "Urban Garden",
    highlights: "Heritage-era park with themed gardens",
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
          <img src="/images/Live-Images/SubPages/Pondicherry-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Pondicherry </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> - <Link to="/neighbourhood"> Neighbourhood </Link> - <a href="">Pondicherry </a>
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
              <h3>Pondicherry</h3>
     <p> Pondicherry, officially Puducherry, is a unique seaside town that blends French colonial elegance with South Indian culture. Located around 150 km from Chennai, it is known for its calm beaches, tree-lined streets, mustard-colored villas, and tranquil spiritual centers like Auroville and Sri Aurobindo Ashram. </p>
   <p> Whether you’re exploring art cafés, relaxing on the beach, or walking through the heritage lanes of White Town, Pondicherry offers a refreshing escape from urban chaos, making it one of South India’s most loved weekend getaways.
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
    Key Places to Visit in Pondicherry
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
            <h2 className="text-2xl font-bold text-center mb-6"> Want to Explore in Pondicherry </h2>
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
