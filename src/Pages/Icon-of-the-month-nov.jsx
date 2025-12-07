



import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/Css/about.css";
import "../assets/Css/Invest.css";
import Becameavolunteer from "../Components/BecameAVolunteer";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import AugustMonthFunction from "./AugustIconFunction";
const data = [
  {
    title: (
      <>
        Awards & <br /> Honours
      </>
    ),
    image: "/images/awards-sep.png",
    content: [
      <>Pradeep John has been recognized for his remarkable contributions:</>,
      <>
        <ul>
          <li>
            <strong>Inspirational Role Model Award (2019)</strong> – CII
            Connect: For impactful work in weather awareness.
          </li>
          <li>
            <strong>Inspirational Achiever Award (2018)</strong> – Wikiwand:
            Recognizing his outstanding contributions.
          </li>
          <li>
            <strong>Pride of Tamil Nadu Award (2018)</strong> – For positive
            social impact through timely weather updates.
          </li>
          <li>
            <strong>Social Icon of Madras Award (2018)</strong> –
            SweetKaramCoffee.in: Honoring his selfless service.
          </li>
          <li>
            <strong>Best Collaborator Delivery Award (2023)</strong> – Infosys
            Sales Excellence: For collaboration and dedication.
          </li>
        </ul>
      </>,
    ],
  },
  {
    title: <>Success</>,
    image: "/images/keyhighlights-sep.png",
    content: [
      "Became a household name in Tamil Nadu for accurate weather updates.",
      "Provided life-saving guidance during floods, cyclones, and heavy rains.",
      "Established one of the state’s most-followed weather platforms with thousands of daily followers.",
      "Earned multiple awards recognizing his dedication, social impact, and professionalism.",
    ],
  },
];

const infoData = [
  {
    title: "",
    desc: "Pradeep John, born in Kanyakumari, is a passionate weather enthusiast and communicator. With a B.E. in Computer Science and an MBA, he could have pursued a corporate career, but his fascination with weather led him to become a trusted voice in Tamil Nadu. Known as the Tamil Nadu Weatherman, he transforms complex meteorological data into simple, actionable forecasts that help protect lives and property.",
    icon: "/images/icons/Points-svg.svg",
  },
  {
    title: "",
    desc: "Despite not being a certified meteorologist, Pradeep meticulously studies satellite imagery, rainfall trends, and historical data to deliver hyper-local forecasts. His clarity, accuracy, and dedication have made him a household name, bridging the gap between technical weather science and everyday safety. Through social media and community updates, he ensures that people receive timely guidance during floods, cyclones, and heavy rains.",
    icon: "/images/icons/Points-svg.svg",
  },
  {
    title: "",
    desc: "Beyond forecasting, Pradeep emphasizes education, awareness, and preparedness. He shares practical tips on climate understanding, disaster readiness, and rainfall patterns, inspiring communities to stay informed. His ongoing commitment to refining his knowledge, collaborating with experts, and serving society demonstrates how passion, perseverance, and social responsibility can create a lasting impact.",
    icon: "/images/icons/Points-svg.svg",
  },
];
const expendingData = [
  {
    title:
      "Making complex meteorological data accessible and understandable to the public",
    description: "",
  },
  {
    title:
      "Inspiring communities to prepare and respond effectively to weather events",
    description: "",
  },
  {
    title:
      "Motivating young enthusiasts to explore meteorology and social responsibility",
    description: "",
  },
  {
    title:
      "Building a trusted platform where citizens rely on timely and accurate forecasts",
    description: "",
  },
];
export default function IconofthemonthDec() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
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
      <div className="septemberMonthStyle">
        <Helmet>
          <title>Super Chennai Icon of August 2025 – Dr. S. Chandrakumar</title>
          <meta
            name="description"
            content="Super Chennai honours Dr. Chandrakumar, who co-founded Kauvery Hospitals, for redefining healthcare with compassion, innovation, and visionary leadership."
          />
          <link rel="canonical" href="/super-chennai-icon-of-aug-2025" />
        </Helmet>
        <div className="InvestPageId augustmonthIconofthemonth">
          <div
            className="VolunteerBgSection InvestBgSection notHome aboutBan"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="VolunteerMainContainer">
              <div className="volunteerSectionBanner">
                <div className="VolunteerBannerImage">
                  <img src="/images/pradeepjohn-weatherman.jpg" alt="" />
                </div>
                {/* <h3 className="voluntterContent">Icon of the month</h3> */}
              </div>
            </div>
            <div className="notHomePageSearch">
              <Search />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <div className="InvestChennaiContainerFlex aboutIntro container max-w-7xl mx-auto px-4 !py-0">
              <div className="InvestChennaiContent text-center">
                <h2>Tamil Nadu’s Forecasting Voice</h2>
                <p>
                  Pradeep John, famously known as the Tamil Nadu Weatherman,
                  transforms complex weather data into actionable forecasts that
                  protect lives and property. His timely and reliable insights
                  have earned widespread trust across social platforms and
                  communities alike.
                </p>
              </div>
              <div
                className={`InvestTextBackground ${
                  scrollDir === "right"
                    ? "scroll-rightInvestPage"
                    : "scroll-leftInvestPage"
                }`}
                ref={bgTextRef}
              >
                <p>Super &nbsp; Chennai &nbsp; Super &nbsp; Chennai</p>
              </div>
            </div>
          </div>

          <div
            className="newupdatewhychennai"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="workIntro">
              <h3 className="newupdatewhychennai">About Him</h3>
              <div className="section-container container max-w-7xl mx-auto px-4">
               

                <div className="section-right-content">
                  {infoData.map((item, index) => (
                    <div className="info-item-block" key={index}>
                      <div className="info-text-block">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                 <div className="section-left-image">
                  <img
                    src="/images/pradeep-icon-of-month-nov.jpg"
                    alt="Main Side Visual"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="naturals-container">
            {data.map((section, index) => (
              <div className="naturals-section" key={index}>
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="naturals-logo"
                  />
                )}
                <h2>{section.title}</h2>
                {section.content.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            ))}
          </div>

          <section className="awards-section expandingBrand">
            <div className="awards-container awards-section">
              <h2>
                Key <br />
                Highlights
              </h2>
              <div className="awards-list">
                {expendingData.map((award, index) => (
                  <div key={index} className="awards-item">
                    <strong>{award.title}</strong>
                    {award.description && (
                      <p className="award-description">{award.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* <AugustMonthFunction /> */}
          <InstagramReelsMarquee />
          <Becameavolunteer />
        </div>
      </div>
    </>
  );
}
