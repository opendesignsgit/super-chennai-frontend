import { useState, useEffect, useRef } from "react";
import "../assets/Css/Invest.css";
import "../assets/Css/about.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Utilitiesinchennai1 from "../Components/InvestSideBar";
import Whychennaitab from "../Components/whychennaitab";
import { Helmet } from "react-helmet-async";

export default function Iconofthemonth() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const data = [
    {
      title: (
        <>
          The Birth of <br /> Naturals
        </>
      ),
      image: "/images/naturals-logo.png",
      content: [
        <>
          In 2000, Veena opened the first Naturals outlet in Chennai. Kumaravel
          joined the venture in 2004 with a clear plan to{" "}
          <strong>
            build a beauty brand that could scale through franchising,{" "}
          </strong>{" "}
          while creating <strong>opportunities for women entrepreneurs.</strong>
        </>,
        <>
          <strong>
            Under his leadership, Naturals didn’t just expand—it exploded.
            Naturals has
          </strong>
        </>,
        <>
          <ul>
            <li>
              <strong>800+</strong> salons in India and internationally
              (including Sri Lanka and UAE)
            </li>
            <li>
              Over <strong>500+ women franchisees</strong>
            </li>
            <li>
              Created<strong> 15,000+ jobs</strong> in the beauty industry
            </li>
            <li>
              Trained thousands through{" "}
              <strong>Naturals School of Makeup</strong>
            </li>
          </ul>
        </>,
      ],
    },
    {
      title: (
        <>
          Champion of Women <br /> Empowerment
        </>
      ),
      image: "/images/Champion-icon.png",
      content: [
        <>
          <strong>Kumaravel’s bold goal</strong>
        </>,
        "Create 1,000 successful women entrepreneurs by 2025, 3,000 salons globally, and 50,000 jobs.",
        "Naturals is not just a business; it’s a mission. Most franchise partners are first-time women entrepreneurs, given access to training, mentorship, and a proven model.",
        "Many were homemakers who now run thriving outlets of their own.",
      ],
    },
  ];

  const awardsData = [
    {
      title:
        "Guinness World Record (2016) – for the largest ramp walk with 386 models",
    },
    {
      title: "CII Emerging Entrepreneur of the Year",
    },
    {
      title: "Business Star Award by Nanayam Vikatan",
    },
    {
      title: "Dhanam Magazine’s Franchise Entrepreneur of the Year",
    },
  ];

  const expendingData = [
    {
      title: "Star Secrets ",
      description: "A premium skin & aesthetics brand (launched in 2024)",
    },
    {
      title: "CK Angels ",
      description:
        "An angel investment initiative to support budding entrepreneurs",
    },
    {
      title: "Naturals School of Makeup",
      description: "Bridging the talent gap in beauty & grooming",
    },
  ];

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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
      <Helmet>
        <title>
          Naturals Founder CK Kumaravel | Women Empowerment - Super Chennai
        </title>
        <meta
          name="description"
          content="Honouring CK Kumaravel for transforming grooming in Chennai, Icon of the Month, building 800+ Naturals salons and empowering thousands of women entrepreneurs."
        />
        <link rel="canonical" href="/icon-of-the-july-month" />
      </Helmet>
      <div className="InvestPageId">
        <div
          className="VolunteerBgSection InvestBgSection notHome aboutBan"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img src="/images/Iconofthemonth-banner.jpg" alt="" />
              </div>
              {/* <h3 className="voluntterContent">Icon of the month</h3> */}
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <div className="InvestChennaiContainerFlex aboutIntro">
            <div className="InvestChennaiContent text-center">
              <h2>
                The Man Who Made <br />{" "}
                <small>Grooming a Household Habit in India</small>
              </h2>
              <p>
                When <strong>CK Kumaravel</strong> co-founded{" "}
                <strong>Naturals Salon & Spa,</strong> he didn’t just start a
                salon chain-he sparked a{" "}
                <strong>beauty and entrepreneurship revolution.</strong> Today,
                Naturals stands tall with <strong>over 800+</strong> outlets
                across India and abroad, built on the backbone of{" "}
                <strong>women-led franchises,</strong> empowered professionals,
                and a culture of purpose-driven growth.
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

        <section className="awards-section">
          <h2 className="awards-title">AWARDS & MILESTONES</h2>
          <p className="awards-subtitle">
            Kumaravel’s journey is marked by bold bets, social impact, and
            global recognition
          </p>
          <div className="awards-container">
            <img alt="foundations " src="/images/award-milstone-img.jpg"></img>
            <div className="awards-list">
              {awardsData.map((award, index) => (
                <div key={index} className="awards-item">
                  {award.title}
                </div>
              ))}
              <p className="awards-note">
                He’s a sought-after speaker at leadership forums including
                TechSparks, TiE, CII, and South India Talks OOH (2025 Keynote
                Speaker).
              </p>
            </div>
          </div>
        </section>

        <section className="awards-section expandingBrand">
          <div className="awards-container">
            <h2>
              Expanding <br />
              the Brand
            </h2>
            <div className="awards-list">
              <h5>Beyond salons, Kumaravel has launched</h5>
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

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
