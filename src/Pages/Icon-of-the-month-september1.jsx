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

export default function IconofthemonthSeptember1() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const data = [
    {
      title: (
        <>
          Awards & <br /> Honours
        </>
      ),
      image: "/images/awards-sep.png",
      content: [
        <>
          Anand’s journey is marked by national pride and international
          recognition.
        </>,

        <>
          <ul>
            <li>
              <strong>Arjuna Award (1985) - </strong> For outstanding sporting
              achievement
            </li>
            <li>
              <strong>Padma Shri (1987)</strong> – India’s fourth-highest
              civilian award
            </li>
            <li>
              <strong>Padma Bhushan (2000)</strong> – India’s third-highest
              civilian award
            </li>
            <li>
              <strong>Padma Vibhushan (2007)</strong> – India’s second-highest
              civilian award (first sportsperson to receive it)
            </li>
            <li>
              <strong>Chess Oscars (6 times)</strong> – Awarded to the world’s
              best player
            </li>
            <li>
              <strong>FIDE Hall of Fame</strong> – Recognised as one of the
              greatest chess icons globally
            </li>
          </ul>
        </>,
      ],
    },
    {
      title: <>Key Highlights & Achievements</>,
      image: "/images/keyhighlights-sep.png",
      content: [
        <>{/* <strong>Kumaravel’s bold goal</strong> */}</>,
        "1988 – First Indian to become a Grandmaster",
        "Crowned World Chess Champion on five occasions – 2000, 2007, 2008, 2010, and 2012.",
        "Represented India at 11 Chess Olympiads",
        "Defeated legendary rivals including Kramnik, Topalov, and Gelfand in World Championship matches",
        "Popularised chess in India, inspiring 80+ Indian Grandmasters",
        "Nicknamed “Lightning Kid” for his rapid play style",
      ],
    },
  ];

  const infoData = [
    {
      title: "",
      desc: "Viswanathan Anand, fondly known as the “Tiger of Madras”, is a pioneer who made chess a household name in India. His fearless playing style and calm persona earned him worldwide respect. Beyond winning championships, Anand has guided India’s next generation of chess prodigies through the WestBridge Anand Chess Academy (WACA).",
      icon: "/images/icons/Points-svg.svg",
    },
    {
      title: "",
      desc: "As an author of Mind Master, he shared his life lessons on resilience, focus, and decision-making. His contribution extends beyond the board – he mentors, inspires, and puts India firmly on the world chess map.",
      icon: "/images/icons/Points-svg.svg",
    },
    {
      title: "",
      desc: "Beyond the chessboard, Viswanathan Anand is known for his curiosity and love for learning. He enjoys exploring new ideas, reading, and engaging with different cultures. His calm and thoughtful approach to challenges reflects a mindset that values strategy, patience, and continuous growth in all aspects of life. He often shares insights from his experiences with young players, encouraging them to think critically and creatively. Anand’s interactions reveal a person who is approachable, humble, and always eager to exchange ideas. Even off the board, his presence inspires reflection, discipline, and a passion for learning.",
      icon: "/images/icons/Points-svg.svg",
    },
  ];

  const awardsData = [
    {
      title: "Arjuna Award (1985) – For outstanding sporting achievement",
    },
    {
      title: "Padma Shri (1987) – India’s fourth-highest civilian award",
    },
    {
      title: "Padma Bhushan (2000) – India’s third-highest civilian award",
    },
    {
      title:
        "Padma Vibhushan (2007) – India’s second-highest civilian award (first sportsperson to receive it)",
    },
    {
      title: "Chess Oscars (6 times) – Awarded to the world’s best player",
    },
    {
      title:
        "FIDE Hall of Fame – Recognised as one of the greatest chess icons globally",
    },
  ];

  const expendingData = [
    {
      title: "1988",
      description:
        "Viswanathan Anand’s career is a shining story of dedication, intelligence, and humility.",
    },
    {
      title: "CK Angels ",
      description:
        "His victories brought India global recognition in chess, and his mentorship ensures future generations carry forward his legacy.",
    },
    {
      title: "Naturals School of Makeup",
      description:
        "For millions, he remains the symbol of perseverance and sportsmanship – proving that with focus and passion, the world can be conquered.",
    },
    {
      title: "Naturals School of Makeup",
      description:
        "Honoured with numerous awards, he stands as India’s pride and global chess ambassador",
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
      <div className="septemberMonthStyle">
        <Helmet>
          <title>
            Super Chennai Icon of September 2025 – Viswanathan Anand, Chess
            Legend
          </title>
          <meta
            name="description"
            content="Super Chennai honours Viswanathan Anand, India’s first Grandmaster and five-time World Chess Champion, for inspiring generations in Indian chess."
          />
          <link rel="canonical" href="/super-chennai-icon-of-sep-2025" />
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
                  {/* <img src="/images/icon-of-the-months-sep-image.jpg" alt="" /> */}
                  {/* <video autoplay src="/images/vishwanathan-video.mp4"></video> */}
                  <video
                    src="/images/vishwanathan-video.mp4"
                    autoPlay
                    muted
                    // controls
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="voluntterContent">
                  Superchennai's Icon Of The Month
                </h3>
              </div>
            </div>
            <div className="notHomePageSearch">
              <Search />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <div className="InvestChennaiContainerFlex aboutIntro !pb-0">
              <div className="InvestChennaiContent text-center">
                <h2>
                  CHESS LEGEND INSPIRING INDIA <br />
                </h2>
                <p>
                  Celebrating India’s first Grandmaster and five-time World
                  Chess Champion, who has transformed the nation’s presence on
                  the global chess stage with his brilliance, humility, and
                  inspiring journey.
                </p>
              </div>

              {/* <div className="InvestChennaiContent text-center">
              <h2>
                <small>SHAPING CHESS & SOCIETY</small>
               
              </h2>
              <p>
                Viswanathan Anand, fondly known as the “Tiger of Madras”, is a
                pioneer who made chess a household name in India. His fearless
                playing style and calm persona earned him worldwide respect.
                Beyond winning championships, Anand has guided India’s next
                generation of chess prodigies through the WestBridge Anand Chess
                Academy (WACA).
              </p>
              <p>
                As an author of Mind Master, he shared his life lessons on
                resilience, focus, and decision-making. His contribution extends
                beyond the board – he mentors, inspires, and puts India firmly
                on the world chess map.
              </p>
            </div> */}
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
              <h3 className="newupdatewhychennai">SHAPING CHESS & SOCIETY</h3>
              <div className="section-container container max-w-7xl mx-auto px-4">
                <div className="section-left-image">
                  <img
                    // src="/images/Visit-Images/marina-beach.jpg"
                    src="/images/image-sep.jpg"
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
            <h2 className="awards-title">AWARDS & HONOURS</h2>
            <p className="awards-subtitle">
              Anand’s journey is marked by national pride and international
              recognition.
            </p>
            <div className="awards-container">
              <img
                alt="foundations "
                src="/images/award-milstone-img.jpg"
              ></img>
              <div className="awards-list">
                {awardsData.map((award, index) => (
                  <div key={index} className="awards-item">
                    {award.title}
                  </div>
                ))}
                
              </div>
            </div>
          </section> */}

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

          <section className="awards-section expandingBrand septemeberIconoftheMonth">
            <div className="awards-container">
              <h2>
                LEGACY & <br /> INSPIRATION
              </h2>
              <div className="awards-list">
                {/* <h5>Beyond salons, Kumaravel has launched</h5> */}
                {expendingData.map((award, index) => (
                  <div key={index} className="awards-item">
                    {/* <strong>{award.title}</strong> */}
                    {award.description && (
                      <p className="award-description">{award.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <div data-aos="fade-up" data-aos-delay="400">
            <div className="InvestChennaiContainerFlex aboutIntro !pb-0 !pt-10">
              <div className="InvestChennaiContent text-center !pb-0">
                <h2>
                  LEGACY & INSPIRATION <br />
                </h2>
                <p>
                  Viswanathan Anand’s career is a shining story of dedication,
                  intelligence, and humility. His victories brought India global
                  recognition in chess, and his mentorship ensures future
                  generations carry forward his legacy. For millions, he remains
                  the symbol of perseverance and sportsmanship – proving that
                  with focus and passion, the world can be conquered.
                </p>
              </div>
            </div>
          </div> */}

          <InstagramReelsMarquee />
          <Becameavolunteer />
        </div>
      </div>
    </>
  );
}
