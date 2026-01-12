import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import MegaMenu from "../../../Components/Header";
import MenuBar from "../../../Components/MenuBar";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import SliderWorkPage from "./SliderWorkPage";
import { Helmet } from "react-helmet-async";

export default function CoworkingSpaces() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const AccomodSections = [
    {
      title: "OMR (Old Mahabalipuram Road) / IT Corridor",
      description:
        "Co-working spaces, where IT workers may work in startups, are found among the various IT tech enterprises.",
      image: "/images/Work-Images/SubPages/omr.jpg",
      imgAlt: "co working space in chennai omr",
      linkText: "Explore More",
      linkUrl: "/digital",
    },
    {
      title: "Guindy",
      description:
        "Select a co-working space that is convenient for transportation so that you may draw in a diverse clientele of firms and professionals.",
      image: "/images/Work-Images/SubPages/guindy.jpg",
      imgAlt: "coworking space in guindy",
      linkText: "Explore More",
      linkUrl: "/education",
    },
    {
      title: "Nungambakkam",
      description:
        "The co-working facility has a prominent address attributed to its prime position, which also draws in business. Choose this location if you're looking for one with good connections.",
      image: "/images/Work-Images/SubPages/nungambakkam.jpg",
      imgAlt: "office space in nungambakkam",
      linkText: "Explore More",
      linkUrl: "/health",
    },
    {
      title: "Teynampet",
      description:
        "Additionally, Teynampet offers professionals a decent business area for accessibility and facilities, making it a central location.",
      image: "/images/Work-Images/SubPages/teynampet.jpg",
      imgAlt: "coworking space in chennai",
      linkText: "Explore More",
      linkUrl: "/environment",
    },
    {
      title: " Anna Nagar",
      description:
        " It is a well-known neighborhood with a well designed layout that provides coworking space for both professionals and corporations.",
      image: "/images/Work-Images/SubPages/anna-nagar.jpg",
      imgAlt: "co working space in anna nagar",
      linkText: "Explore More",
      linkUrl: "/women",
    },
    {
      title: "Adyar",
      description:
        "Choose this if you're searching for a co-working space in a linked setting that is both residential and business. ",
      image: "/images/Work-Images/SubPages/adyar.jpg",
      imgAlt: "office space for rent in adyar",
      linkText: "Explore More",
      linkUrl: "/youth",
    },
    {
      title: "Thousand Lights",
      description:
        "It offers co-working space located in a commercially significant area and has connections to corporate areas and transit hubs. ",
      image: "/images/Work-Images/SubPages/thousand-lights.jpg",
      imgAlt: "office space for rent in tambaram",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Perungudi",
      description:
        "Modern and stylish co-working spaces are available, together with the necessary infrastructure for startups and IT enterprises.",
      image: "/images/Work-Images/SubPages/perungudi.jpg",
      imgAlt: "office space for rent in pallavaram",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Other Areas",
      description:
        "In addition to these hubs, co-working spaces are located in places like Alwarpet, Velachery, and Ambattur, which serve particular local populations and company requirements. ",
      image: "/images/Work-Images/SubPages/other-areas.jpg",
      imgAlt: "office space in kodambakkam",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Key Considerations When Choosing a Co-working Space",
      description:
        "Take into account the space's industry, surroundings, facilities, rent, and location. Find out whether that's where your target audience is.",
      image: "/images/Work-Images/SubPages/key-consideration.jpg",
      imgAlt: "office space for rent in t nagar chennai",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
  ];

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
      <Helmet>
        <title>
          Co Working Spaces in Chennai: Affordable, Modern & Flexible
        </title>
        <meta
          name="description"
          content="Co working spaces in Chennai provide modern offices, flexible plans, and networking opportunities, making them ideal for startups and growing businesses."
        />
        <link rel="canonical" href="/work/coworking-space-in-chennai" />
      </Helmet>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img
            src="/images/Work-Images/SubPages/co-workingspaces.jpg"
            alt="office rent in chennai"
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Co-working Spaces </h3>
            <div className="breadCrum">
              <Link to="/work-in-chennai"> Work </Link> -{" "}
              <a href="">Co-working Spaces </a>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*----------------Accodimation-Banner----------- */}

      <div className="visitIntroParaSection detailIntro">
        <div className=" container max-w-7xl mx-auto px-4">
          <div
            className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
          >
            <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
          </div>

          <div className="workIntro">
            <h1>Cowork Space in Chennai</h1>
            <p>
              Chennai is becoming a major center for the professional sector.
              Chennai offers you a wide range of possibilities for co-working
              spaces, depending on your interests and budget. Find the ideal
              coworking space in Chennai if you are a freelancer, entrepreneur,
              or company owner.
            </p>
          </div>
        </div>
      </div>

      {/*--------------- Hotels-Chennai----------------- */}

      <div className="AccodomationPageBecameVolunteerBg">
        <div className="container max-w-7xl mx-auto px-4">
          {AccomodSections.map((section, index) => (
            <div className="AccodoSectionFLex" key={index}>
              {index % 2 === 0 ? (
                <>
                  <img src={section.image} alt={section.imgAlt} />
                  <div className="AccodContentsSection">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    {/* <div className="AccomoddationPage">
                      <a href={section.linkUrl}>{section.linkText}</a>
                    </div> */}
                  </div>
                </>
              ) : (
                <>
                  <div className="AccodContentsSection1">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    {/* <div className="AccomoddationPage1">
                      <a href={section.linkUrl}>{section.linkText}</a>
                    </div> */}
                  </div>
                  <img src={section.image} alt={section.imgAlt} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/*--------------- Hotels-Chennai----------------- */}

      <SliderWorkPage />

      {/*--------------- Explore More Chennai----------------- */}

      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>

      <Becameavolunteer />
    </>
  );
}
