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
import AugustMonthFunction from "./AugustIconFunction";

const infoData = [
  {
    title: "",
    desc: "Dr. Chandrakumar, the Founder & Executive Chairman of Kauvery Group of Hospitals, has transformed the healthcare landscape with his outstanding leadership and entrepreneurial spirit. With a strong medical foundation, he has nurtured Kauvery’s growth for over 25 years. From a modest 30-bed facility, he has built a distinguished network of 2,500-bed tertiary care specialty hospitals, setting benchmarks in South India’s healthcare sector.",
    icon: "/images/icons/Points-svg.svg",
  },
  {
    title: "",
    desc: "His strategic vision has driven business growth, mergers, and acquisitions, firmly establishing Kauvery Hospitals as a trusted leader. Beyond medicine, he has contributed to society by founding the Trichy Kendra of Bharatiya Vidya Bhavan, supporting art and culture, and offering young performing artists a platform to thrive.",
    icon: "/images/icons/Points-svg.svg",
  },
  {
    title: "",
    desc: "Dr. Chandrakumar is also deeply engaged in entrepreneurship and leadership circles. He is an active member of the Entrepreneur’s Organization (EO), Chennai Chapter, and currently serves his second consecutive term as Chairman of the Taskforce on Wellbeing & Healthcare for CII Southern Region (2024–26), after leading the CII Tamil Nadu State Council earlier.",
    icon: "/images/icons/Points-svg.svg",
  },
];

export default function IconofthemonthAugust() {
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
      title: "25 years of leadership in healthcare",
      description: "",
    },
    {
      title: "Growth from 30 beds to 2,500 beds across the Kauvery network",
      description: "",
    },
    {
      title: "Proven success in mergers, acquisitions, and expansion",
      description: "",
    },
    {
      title: "Strong contributions to art, culture, and entrepreneurship",
      description: "",
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
          Dr.Chandrakumar | Visionary Leader in Healthcare - Super Chennai
        </title>
        <meta
          name="description"
          content="Honouring Dr. Chandrakumar for 25+ years of leadership in Chennai, Icon of the Month, growing Kauvery Hospitals to 2,500 beds and shaping South India’s healthcare."
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
                <img src="/images/drschandrakumar.jpg" alt="" />
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
              <h2>Visionary Leader Transforming Healthcare in India</h2>
              <p>
                Honouring his visionary leadership and lasting legacy in
                Chennai’s healthcare ecosystem, which has established the city
                as India’s healthcare capital.
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
            <h3 className="newupdatewhychennai">
              Shaping Healthcare & Society
            </h3>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  // src="/images/Visit-Images/marina-beach.jpg"
                  src="/images/kaveri-hospital.jpg"
                  alt="Main Side Visual"
                />
              </div>

              <div className="section-right-content">
                {infoData.map((item, index) => (
                  <div className="info-item-block" key={index}>
                    {/* <img src={item.icon} alt="icon" className="info-icon" /> */}
                    <div className="info-text-block">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <section className="awards-section">
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
        </section> */}

        <section className="awards-section expandingBrand">
          <div className="awards-container">
            <h2>
              Key <br />
              Highlights
            </h2>
            <div className="awards-list">
              {/* <h5>Beyond salons, Kumaravel has launched</h5> */}
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
        <AugustMonthFunction/>
        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
