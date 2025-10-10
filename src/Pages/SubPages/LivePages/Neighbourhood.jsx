import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import LiveSlider from "./LiveSlider";
import { Helmet } from "react-helmet-async";

export default function Neighbourhood() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("iconImgdev");

    return () => {
      document.body.classList.remove("iconImgdev");
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefitSections = [
    {
      sectionTitle: "Major Urban Areas Nearby",
      sectionDesc: " Discovering significant cities close to Chennai. ",
      image: "/images/Live-Images/SubPages/Major-Urban-Areas-Nearby.jpg",
      imgAlt: "chennai near tourist places",
      benefits: [
        {
          id: 1,
          title: "Kanchipuram",
          para: "Referred to as the ''City of a Thousand Temples'' and renowned for its silk sarees, Kanchipuram provides a vibrant cultural and historical journey.",
          imgs: "/images/Live-Images/SubPages/Kanchipuram.jpg",
          imgAlt: "famous temples near chennai",
          link: "/kanchipuram",
        },
        {
          id: 2,
          title: "Vellore",
          para: "  This ''Fort City'' features historical landmarks, such as the Vellore Fort, and is notable for its educational and healthcare facilities.  ",
          imgs: "/images/Live-Images/SubPages/Vellore.jpg",
          imgAlt: "fort city",
          link: "/Vellore",
        },
        {
          id: 3,
          title: "Tirupati",
          para: " A significant religious site in Andhra Pradesh, Tirupati is famous for the Sri Venkateswara Temple and draws pilgrims from all over the nation. ",
          imgs: "/images/Live-Images/SubPages/Tirupati.jpg",
          imgAlt: "temples near chennai",
          link: "/Tirupati",
        },
        {
          id: 4,
          title: "Pondicherry",
          para: " This once-French colony preserves a distinctive cultural allure with its colonial buildings, tranquil beaches, and spiritual essence. ",
          imgs: "/images/Live-Images/SubPages/Pondicherry.jpg",
          imgAlt: "chennai near tourist spots",
          link: "/Pondicherry",
        },
      ],
    },
    {
      sectionTitle: "Other Notable Regional Towns",
      sectionDesc: "Exploring key locations around Chennai.",
      image: "/images/Live-Images/SubPages/Other-Notable-Regional-Towns.jpg",
      imgAlt: "historical places in chennai",
      benefits: [
        {
          id: 1,
          title: "Chengalpattu",
          para: "  An emerging town located south of Chennai, it functions as a rising industrial and educational center in the larger metropolitan area. ",
          imgs: "/images/Live-Images/SubPages/Chengalpattu.jpg",
          imgAlt: "around chennai tourist places",
          link: "/Chengalpattu",
        },
        {
          id: 2,
          title: "Sriperumbudur",
          para: "  Recognized for its historical importance and as a key hub for industry and manufacturing, drawing investment and growth.  ",
          imgs: "/images/Live-Images/SubPages/Sriperumbudur.jpg",
          imgAlt: "best places near chennai",
          link: "/Sriperumbudur",
        },
        {
          id: 3,
          title: "Yelagiri",
          para: "Tucked away in the Eastern Ghats, Yelagiri Hills is a quiet and refreshing hill station",
          imgs: "/images/Live-Images/SubPages/yelagiri-hills.jpg",
          imgAlt: "",
          link: "/yelagiri",
        },
        {
          id: 4,
          title: "Pulicat",
          para: "Pulicat, also known as Pazhaverkadu, is a charming coastal town known for Pulicat Lake—India’s second-largest brackish water lagoon.",
          imgs: "/images/Live-Images/SubPages/pulicat-lake-&-town-(pazhaverkadu).jpg",
          imgAlt: "",
          link: "/pulicatelake",
        },
        {
          id: 5,
          title: "Thiruthani",
          para: "Thiruthani is a sacred hill town in Tamil Nadu, renowned for the Thiruthani Murugan Temple, one of the six abodes (ArupadaiVeedu) of Lord Murugan.",
          imgs: "/images/Live-Images/SubPages/vedanthangal-bird-sanctuary-1.jpg",
          imgAlt: "",
          link: "/thiruthani",
        },
        {
          id: 6,
          title: "Tiruvannamalai",
          para: "Tiruvannamalai is a spiritually charged town nestled at the base of the Annamalai Hills, famous for the Annamalaiyar Temple, one of the Pancha Bhoota Sthalams representing fire (Agni).",
          imgs: "/images/Live-Images/SubPages/tiruvannamalai-–-the-sacred-flame-of-tamil-nadu.jpg",
          imgAlt: "",
          link: "/Tiruvannamalai",
        },

        {
          id: 7,
          title: "Chidambaram",
          para: "Chidambaram is an ancient temple town celebrated for the Thillai Nataraja Temple, dedicated to Lord Shiva in his cosmic dancer form – Nataraja.",
          imgs: "/images/Live-Images/SubPages/chidambaram.jpg",
          imgAlt: "",
          link: "/chidambaram",
        },

        {
          id: 8,
          title: "Kalpakkam",
          para: "Kalpakkam is a serene coastal town located south of Chennai, best known for housing India's premier nuclear research centers like IGCAR and Madras Atomic Power Station (MAPS).",
          imgs: "/images/Live-Images/SubPages/kalpakkam.jpg",
          imgAlt: "",
          link: "/kalpakkam",
        },
      ],
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
        <Helmet>
          <title>
            Your Ultimate Guide to Places Near Chennai - Super Chennai
          </title>
          <meta
            name="description"
            content="Super Chennai highlights the best places near Chennai, from scenic beaches to historic towns, helping you plan perfect weekend trips and short getaways with ease."
          />
          <link rel="canonical" href="/live/places-near-chennai" />
        </Helmet>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/SubPages/Neighbourhood-banner.jpg"
            alt="places near chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Places to Visit Near Chennai</h3>
              <div className="breadCrum">
                <Link to="/"> Home </Link> -
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a>Places to Visit Near Chennai</a>
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
              {/* <h3>Places to Visit Near Chennai </h3> */}
              <h1>Places to Visit Near Chennai </h1>
              <p>
                Chennai, an important urban center, has multiple notable cities
                situated nearby, each presenting distinct features and adding to
                the overall regional landscape. These cities are frequently
                linked to Chennai via different transportation systems and have
                economic and cultural connections.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.imgAlt} />
                <div
                  className={`clcscrLtitle relative ${
                    index % 2 === 0 ? "bg-[#7d377c]" : "bg-[#672866]"
                  }`}
                >
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <a
                    key={item.id}
                    href={item.link || "#"}
                    className="clcboxItemss linkIcon  flex hover:shadow-lg transition rounded-xl"
                  >
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.imgAlt} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/*--------------- Explore More Chennai----------------- */}

        <LiveSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
