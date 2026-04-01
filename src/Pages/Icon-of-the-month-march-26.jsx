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
import EventFunction from "./EventFunction";
import IconoftheMonthKamakotiSlider from "./IconoftheMonthKamakotiSlider";

export default function IconofthemonthMarchKamakotti() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: "Prof. V. Kamakoti, Director of Indian Institute of Technology Madras, is a distinguished expert in computer architecture and cybersecurity. With decades of experience in academia and research, he has played a significant role in strengthening India’s technological capabilities and innovation ecosystem.",
    },
    {
      desc: "He is widely recognised for leading the development of the Shakti microprocessor, a key milestone in India’s journey toward self-reliance in computing. His work bridges the gap between academic research and real-world applications, contributing to both industry and national security.",
    },
    {
      desc: "Beyond research, Prof. Kamakoti is a visionary educator and leader who actively mentors students and promotes core engineering as the foundation for future innovation. Through his involvement in national initiatives, policy advisory roles, and technology missions, he continues to shape India’s digital future while inspiring young minds to build impactful, indigenous solutions for global challenges.",
    },

    {
      desc: "Beyond research, Prof. Kamakoti, Director of the Indian Institute of Technology Madras, is a visionary educator and leader who actively mentors students and promotes core engineering as the foundation for future innovation. He leads India’s indigenous microprocessor program (Shakti), heads the ISEA Program under MeitY, serves as Chairman of the AI Task Force, Ministry of Commerce & Industry, and is a member of the National Security Advisory Board. A pioneer in cybersecurity and secure computing, he continues to shape India’s digital future through national initiatives, policy advisory roles, and technology missions, inspiring young minds to develop impactful, indigenous solutions for global challenges.",
    },
  ];

  const data = [
    {
      title: (
        <>
          Social Service <br /> & Initiatives
        </>
      ),
      image: "/images/social-service.png",
      content: [
        <>
          <strong>Singing for Charity (2020)</strong> – Chinmayi launched a
          campaign offering personalized song dedications to fans in exchange
          for donations, raising approximately <strong>₹85 lakh</strong> to
          support families affected by the <strong>COVID-19 pandemic</strong>.
        </>,
        <>
          <strong>Support for Sanitation Workers (2025)</strong> – She visited
          protesting sanitation workers in Chennai, providing essentials like
          <strong> water and biscuits</strong>, while advocating for
          <strong> permanent employment</strong> and <strong>fair wages</strong>
          .
        </>,
        <>
          <strong>Advocacy for Folk Artists</strong> – Collaborated with the
          <strong> Tamil Nadu Folk Artists Welfare Association</strong>,
          distributing ration kits to about <strong>800 artists</strong> and
          organizing fundraisers to support their families.
        </>,
        <>
          <strong>Entrepreneurial Ventures with Social Impact</strong> – Through
          <strong> Blue Elephant</strong> and <strong>Skinroute</strong>,
          Chinmayi created <strong>employment opportunities</strong> and
          contributed to the growth of <strong>niche industries</strong> in
          India.
        </>,
      ],
    },
    {
      title: (
        <>
          Leadership <br /> & Legacy
        </>
      ),
      image: "/images/leadership-icon.png",
      content: [
        <>
          <strong>Advocate for Women’s Rights</strong> – A prominent voice in
          India’s
          <strong> #MeToo movement</strong>, Chinmayi continues to champion
          <strong> gender equality</strong> and{" "}
          <strong>workplace justice</strong>.
        </>,
        <>
          <strong>Cultural Preservation</strong> – Actively promotes
          <strong> traditional arts and crafts</strong> as part of India’s
          <strong> cultural heritage</strong>.
        </>,
        <>
          <strong>Mentorship</strong> – Guides and inspires
          <strong> young singers</strong> through mentorship and knowledge
          sharing.
        </>,
        <>
          <strong>Resilience</strong> – Despite facing{" "}
          <strong>industry challenges</strong>, including unofficial bans, she
          continues to inspire with her
          <strong> talent</strong>, <strong>courage</strong>, and
          <strong> perseverance</strong>.
        </>,
      ],
    },
  ];

  const awardsData = [
    {
      title: "Padma Shri (2026)",
    },
    {
      title: "Sir JC Bose Lifetime Achievement Award (2023)",
    },
    {
      title: "Distinguished Citizen of the Year (2025)",
    },
    {
      title: "DRDO Academic Excellence Award",
    },
    {
      title: "IBM Faculty Award (2016)",
    },
    {
      title: "ACCS-CDAC Foundation Award (2018)",
    },
    {
      title: "Abdul Kalam Technology Innovation Fellowship",
    },
    {
      title: "VASVIK Industrial Research Award",
    },
  ];

  const expendingData = [
    {
      description: [
        "Prof. Kamakoti represents the spirit of technological self-reliance,",
        "leading India’s microprocessor revolution through initiatives ",
        "like Shakti and DHRUV64. He encourages students to focus on core ,",
        "engineering believing it is key to the nation’s future.",
      ],
    },
    {
      description: [
        "Represented Indian classical music on prestigious global stages such as the ",
        "BBC Proms. “work is worship” mindset and leads by example. His vision  ",
        " blends traditional knowledge with modern innovation, inspiring the  ",
        " next generation to build, lead, and create a self-reliant India.",
      ],
    },
  ];

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

  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let scrollAmount = 0;
    const speed = 0.9;
    let animationFrameId;
    let isPaused = false;

    const scrollList = () => {
      if (!isPaused && list.scrollHeight > list.clientHeight) {
        scrollAmount += speed;

        // Reset when reaching the bottom
        if (scrollAmount >= list.scrollHeight - list.clientHeight)
          scrollAmount = 0;

        list.scrollTop = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(scrollList);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    list.addEventListener("mouseenter", handleMouseEnter);
    list.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(scrollList);

    return () => {
      cancelAnimationFrame(animationFrameId);
      list.removeEventListener("mouseenter", handleMouseEnter);
      list.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [awardsData]);

  return (
    <>
      <Helmet>
        <title>Icon of the Month | Super Chennai – V. Kamakoti</title>
        <meta
          name="description"
          content="Icon of the Month: V. Kamakoti, Padma Shri awardee and IIT Madras Director, driving India’s technological innovation, digital growth, and inspiring future leaders."
        />
        <link rel="canonical" href="/icon-of-the-jan-month-2026" />
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
                <img src="/images/inner-page-banner-kamakot.jpeg" alt="" />
              </div>
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
                <small>
                  An Influential Figure in <br />
                  India’s Technology Landscape
                </small>
              </h2>
              <p>
                A visionary leader driving India’s digital future through
                innovation, research, and indigenous technology. <br />
                Honoured with the Padma Shri, he continues to shape a
                self-reliant tech ecosystem.
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

        {/* ABOUT US  */}

        <div
          className="newupdatewhychennai"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="workIntro">
            <h1 className="newupdatewhychennai">
              A Journey of Knowledge and Purpose
            </h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img src="/images/kamakoti-banner.jpg" alt="Main Side Visual" />
              </div>

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
            </div>
          </div>
        </div>

        {/* <div className="naturals-container">
          {data.map((section, index) => (
            <div className="naturals-section" key={index}>
             
              <h2>{section.title}</h2>
              {section.content.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          ))}
        </div> */}

        <section className="awards-section">
          <h2 className="awards-title">Awards & Achievements</h2>
          <p className="awards-subtitle"></p>
          <div className="awards-container">
            <img
              style={{ boxShadow: "none" }}
              alt="foundations "
              src="/images/kamakotti-png.png"
            ></img>
            <div
              ref={listRef}
              className="awards-list max-h-140 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
              }}
            >
              {awardsData.map((award, index) => (
                <div key={index} className="awards-item">
                  {award.title}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="awards-section expandingBrand">
          <div className="awards-container">
            <h2 className="section-title">
              Why He
              <br />
              <span>Inspires</span>
            </h2>

            <div className="awards-list">
              {expendingData.map((item, index) => (
                <div key={index} className="awards-item">
                  <h5 className="award-title">{item.title}</h5>
                  {Array.isArray(item.description) ? (
                    item.description.map((desc, i) => (
                      <p key={i} className="award-description">
                        {desc}
                      </p>
                    ))
                  ) : (
                    <p className="award-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <IconoftheMonthKamakotiSlider />
        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
