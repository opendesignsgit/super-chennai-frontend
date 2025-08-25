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

export default function Kanchipuram() {
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
      points: ["75 km (Approx. 2 to 2.5 hours via GST or NH48)"],
    },
    {
      title: "By Train",
      points: ["Well-connected by frequent suburban and express trains"],
    },
  ];

  const data1 = [
    {
      title: "What to Explore in Kanchipuram",
      points: [
        <>
          <strong>Temple Architecture:</strong> Experience ancient gopurams,
          stone carvings, and temple tanks reflecting rich Dravidian style
        </>,
        <>
          <strong>Silk Sarees:</strong> Visit weaving centers or shop from
          trusted showrooms for original Kanchipuram silks
        </>,
        <>
          <strong>Local Food:</strong> Enjoy traditional Tamil vegetarian meals
          and prasadam from temples
        </>,
        <>
          <strong>Cultural Photography:</strong> A paradise for photographers
          capturing rituals, architecture, and temple life
        </>,
        <>
          <strong>Handicrafts & Gifts:</strong> Traditional items, pooja
          essentials, and brass idols make great souvenirs
        </>,
      ],
    },
  ];

  const data2 = [
    {
      title: "Ideal For",
      points: [
        <>Pilgrimage seekers and devotees</>,
        <>Culture and history lovers</>,
        <>Saree shoppers and wedding families</>,
        <>Weekend road trips from Chennai</>,
      ],
    },
  ];

  const kanchipuramTemples = [
    {
      templeName: "Ekambareswarar Temple",
      deity: "Shiva",
      significance: "Pancha Bhoota Sthalam (Earth Element)",
      distanceFromChennai: "~73 km",
    },
    {
      templeName: "Kamakshi Amman Temple",
      deity: "Shakti",
      significance: "One of the 51 Shakti Peethas",
      distanceFromChennai: "~74 km",
    },
    {
      templeName: "Varadaraja Perumal Temple",
      deity: "Vishnu",
      significance: "108 Divya Desam",
      distanceFromChennai: "~76 km",
    },
    {
      templeName: "Kailasanathar Temple",
      deity: "Shiva",
      significance: "Oldest temple in Kanchipuram (Pallava period)",
      distanceFromChennai: "~74 km",
    },
    {
      templeName: "Vaikunta Perumal Temple",
      deity: "Vishnu",
      significance: "Heritage temple with layered sanctums",
      distanceFromChennai: "~75 km",
    },
    {
      templeName: "Ulagalantha Perumal Temple",
      deity: "Vishnu",
      significance: "108 Divya Desam",
      distanceFromChennai: "~76 km",
    },
    {
      templeName: "Devarajaswami Temple",
      deity: "Vishnu",
      significance: "Grand Vishnu temple complex",
      distanceFromChennai: "~77 km",
    },
    {
      templeName: "Kumarakottam Temple",
      deity: "Murugan",
      significance: "Part of Kanchi Somaskanda tradition",
      distanceFromChennai: "~73 km",
    },
    {
      templeName: "Yathothkari Perumal Temple",
      deity: "Vishnu",
      significance: "Ancient Vishnu shrine",
      distanceFromChennai: "~74 km",
    },
    {
      templeName: "Deepa Prakasar Temple",
      deity: "Vishnu",
      significance: "Associated with Vedanta Desikar",
      distanceFromChennai: "~75 km",
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
          <img
            src="/images/Live-Images/SubPages/Kanchipuram-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>kanchipuram </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <Link to="/neighbourhood"> Neighbourhood </Link> -{" "}
                <a href="">kanchipuram </a>
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
              <h3>kanchipuram</h3>
              <p>
                Kanchipuram, famously known as the City of a Thousand Temples,
                is one of the most sacred and historic towns in South India.
                Located around 75 km from Chennai, it is a spiritual hub with
                centuries-old temples built in magnificent Dravidian
                architecture. The town is deeply rooted in tradition, with
                shrines dedicated to Shiva, Vishnu, Shakti, and Murugan,
                attracting devotees and heritage lovers throughout the year.
              </p>
              <p>
                Apart from its divine ambiance, Kanchipuram is globally
                celebrated for its pure silk sarees, woven with unmatched
                craftsmanship that reflects the richness of Tamil culture.
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
              Major Temples in Kanchipuram
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Temple Name
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Deity
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Significance
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Distance from Chennai
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {kanchipuramTemples.map((temple, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {temple.templeName}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {temple.deity}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {temple.significance}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {temple.distanceFromChennai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            {/* <h2 className="text-2xl font-bold text-center mb-6">  What to Explore in Kanchipuram  </h2> */}
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
            {/* <h2 className="text-2xl font-bold text-center mb-6">  Ideal For   </h2> */}
            {data2.map((section, index) => (
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
