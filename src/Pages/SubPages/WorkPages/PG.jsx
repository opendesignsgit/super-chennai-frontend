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

export default function PG() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const AccomodSections = [
    {
      title: "For Men",
      description:
        "Many PGs offer suitable accommodations for males, ranging from modest to well-equipped, close to sites of employment and education.",
      image: "/images/Work-Images/SubPages/For-Men.jpg",
      linkText: "Explore More",
      linkUrl: "/digital",
    },
    {
      title: "For women",
      description:
        "In terms of women, PGs in Chennai often provide a clean and safe living space, frequently with solely female residents.",
      image: "/images/Work-Images/SubPages/For-women.jpg",
      linkText: "Explore More",
      linkUrl: "/education",
    },
    {
      title: "Amenities",
      description:
        "Some provide every convenience, like air conditioning, fully furnished rooms, television, an entertainment space, laundry facilities, etc. Some could just have access to facilities. Make an informed decision based on your requirements. ",
      image: "/images/Work-Images/SubPages/Amenities.jpg",
      linkText: "Explore More",
      linkUrl: "/health",
    },
    {
      title: "Room Type/Occupancy",
      description:
        "Based on your privacy needs, choose your room type and number of sharing people. Chennai offers a single, double and even multi occupancy rooms.",
      image: "/images/Work-Images/SubPages/Occupancy.jpg",
      linkText: "Explore More",
      linkUrl: "/environment",
    },
    {
      title: "Restaurants",
      description:
        "Select the type of room and number of people sharing it based on your privacy needs. Chennai has accommodations for one, two, or even more people. ",
      image: "/images/Work-Images/SubPages/Food.jpg",
      linkText: "Explore More",
      linkUrl: "/women",
    },
    {
      title: "Cost/Rent ",
      description:
        "Location, amenities, and room occupancy all affect price and rental rates. Verify that the rent is within your means and learn about any extra fees associated with utilizing the facilities. ",
      image: "/images/Work-Images/SubPages/Rent.jpg",
      linkText: "Explore More",
      linkUrl: "/youth",
    },
    {
      title: "Rules and Regulations",
      description:
        " According to the PG owner, each PG has unique rules. Learn the ins and outs policies and timetables to guarantee a comfy and unquestionable stay.  ",
      image: "/images/Work-Images/SubPages/Rules-and-Regulations.jpg",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Safety and Security",
      description:
        "A PG with CCTV surveillance, a physically fit security guard, and a helpful warden should always come first. Make sure you are there to protect yourself even if it is present. ",
      image: "/images/Work-Images/SubPages/Safety-and-Security.jpg",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    // {
    //   title: "Reviews/Ratings",
    //   description:
    //     "To learn about the past experiences of the locals and to visit the location, look for internet reviews and ratings of local businesses for that PG.",
    //   image: "/images/Work-Images/SubPages/Ratings.jpg",
    //   linkText: "Explore More",
    //   linkUrl: "/relief",
    // },
    // {
    //   title: "Contact Information",
    //   description:
    //     "Verify the person in charge's involvement. Additionally, confirm that they have given you the correct location and phone number to get in touch with them!",
    //   image: "/images/Work-Images/SubPages/Contact-Information.jpg",
    //   linkText: "Explore More",
    //   linkUrl: "/relief",
    // },
  ];

  const images = [
    {
      src: "/images/Work-Images/SubPages/employment-slide.jpg",
      title: "Business Permits",
      link: "/work/business-registration-in-chennai",
    },
    {
      src: "/images/Work-Images/SubPages/unicorns-slide.jpg",
      title: "Unicorns",
      link: "/work/unicorn-startups",
    },
    {
      src: "/images/Work-Images/SubPages/co-workingspaces-slide.jpg",
      title: "Co-working spaces",
      link: "/work/coworking-space-in-chennai",
    },
    {
      src: "/images/Work-Images/SubPages/PG-slide.jpg",
      title: "Paying Guest",
      link: "/work/pg-in-chennai",
    },
    {
      src: "/images/Work-Images/SubPages/Salaries-Benefits-slide.jpg",
      title: "Salaries & Benefits",
      link: "/work/chennai-job-salary",
    },
    {
      src: "/images/Work-Images/SubPages/career-growth-slide.jpg",
      title: "Career Growth",
      link: "/work/job-opportunities-in-chennai",
    },
    {
      src: "/images/Work-Images/SubPages/Networking-slide.jpg",
      title: "Networking",
      link: "/networking",
    },
    {
      src: "/images/Work-Images/SubPages/Worklife-balance-slide.jpg",
      title: "Work-Life balance",
      link: "/work/working-in-chennai",
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
      <Helmet>
        <title>
          PG Hostels in Chennai for Students & Professionals | Super Chennai
        </title>
        <meta
          name="description"
          content="PG hostels in Chennai offer affordable living with comfort, security, and easy access to colleges, offices, and city hotspots for students and professionals."
        />
        <link rel="canonical" href="/work/pg-in-chennai" />
      </Helmet>
      <div>
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img src="/images/Work-Images/SubPages/PG.jpg" alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Paying Guest </h3>
              <div className="breadCrum">
                <Link to="/work-in-chennai"> Work </Link> -{" "}
                <a href="">Paying Guest </a>{" "}
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
              <h3>A City That Welcomes You In</h3>
              <p>
                Chennai is a top choice for students and professionals across
                India. From college life to career goals, the city offers PGs
                that blend comfort, cost, and convenience.
              </p>
            </div>
          </div>
        </div>

        {/*--------------- Hotels-Chennai----------------- */}

        <div className="AccodomationPageBecameVolunteerBg pt0">
          <div className="container max-w-7xl mx-auto px-4">
            {AccomodSections.map((section, index) => (
              <div className="AccodoSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.title} />
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
                    <img src={section.image} alt={section.title} />
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
      </div>
    </>
  );
}
