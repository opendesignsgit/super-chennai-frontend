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
import { AnimatePresence, motion } from "framer-motion";

export default function IconofthemonthArunJain() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: (
        <>
          <strong>
            Arun Jain is an entrepreneur, technology leader and institution
            maker whose work has shaped India's FinTech landscape.
          </strong>
        </>
      ),
    },
    {
      desc: (
        <>
          He founded <strong>Nucleus Software</strong>,{" "}
          <strong>Polaris Software</strong> and later{" "}
          <strong>Intellect Design Arena</strong>, with a vision of creating
          world-class technology products and platforms from India for the
          global financial sector. Today, Intellect serves more than 500
          customers across 62 countries.
        </>
      ),
    },
    {
      desc: (
        <>
          A strong advocate of{" "}
          <strong>Design Thinking and First Principles Thinking</strong>, Arun
          believes technology should go beyond capability to create meaningful,
          measurable consequences. This philosophy has shaped his work across
          enterprise technology, innovation, education and social development.
        </>
      ),
    },
    {
      desc: (
        <>
          His vision led to the creation of <strong>eMACH.ai</strong>, an open
          finance platform built around composability and intelligence, and{" "}
          <strong>Purple Fabric</strong>, an Open Business Impact AI Platform
          focused on governed, explainable and measurable business outcomes.
        </>
      ),
    },
    {
      desc: (
        <>
          But his institution-building extends beyond technology. Through the{" "}
          <strong>
            School of Design Thinking, Mission Samriddhi and Ullas Trust
          </strong>
          , he has applied the same principles of innovation and human-centred
          thinking to education, entrepreneurship and social development.
        </>
      ),
    },
  ];

  const awardsData = [
    {
      title:
        "CII Lifetime Achievement Award – Recognised by the Confederation of Indian Industry for his contribution to the ICT industry and India's intellectual property landscape.",
    },
    {
      title:
        "Lifetime Achievement Award, Design Thinking Conclave – Honoured for his application and advocacy of Design Thinking.",
    },
    {
      title:
        "Dronacharya Award, TiECON Chennai – Recognised for mentorship, entrepreneurship and leadership.",
    },
    {
      title:
        "Visionary of India Award – Honoured for his leadership and contribution to the technology and financial services sector.",
    },
    {
      title:
        "Amity Excellence Award – Recognised for his contribution to technology, entrepreneurship and education.",
    },
    {
      title:
        "TIME Magazine – Growth Architects, 2025 – Featured among leaders contributing to India's growth through technology and enterprise transformation.",
    },
    {
      title:
        "Pillars of Viksit Bharat – Recognised by Outlook Magazine for contributions to technology, entrepreneurship and nation building.",
    },
  ];

  const expendingData = [
    {
      description: [
        "From financial technology to Design Thinking, Arun Jain's legacy is about building institutions that outlast",
        "individual ideas.",
      ],
    },

    {
      description: [
        "His  journey spans enterprise technology, innovation, entrepreneurship, education and social impact.",
        "Hi Whether through Intellect, the School of Design Thinking, Mission Samriddhi or Ullas Trust, his ",
        "approach remains consistent: identify the real problem, think from first principles and create solutions ",
        "that can make a lasting difference. For Chennai, his story is also one of an entrepreneur who has helped ",
        "position the city as a serious centre for FinTech, innovation, design and technology-led enterprise.",
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const mockUpcomingEvents = [
    { id: 1, image: "/images/v-sriram-view1.jpg" },
    { id: 2, image: "/images/v-sriram-view2.jpg" },
    { id: 3, image: "/images/v-sriram-view3.jpg" },
    { id: 4, image: "/images/v-sriram-view4.jpg" },
    { id: 5, image: "/images/v-sriram-view5.jpg" },
    { id: 6, image: "/images/v-sriram-view6.jpg" },
    { id: 7, image: "/images/v-sriram-view7.jpg" },
    { id: 8, image: "/images/v-sriram-view8.jpg" },
    { id: 9, image: "/images/v-sriram-view9.jpg" },
  ];

  const carouselRef = useRef();
  const [x, setX] = useState(0);
  const slide = (direction) => {
    const cardWidth = 300;
    const gap = 40;
    const visibleWidth = window.innerWidth;
    const totalCardsWidth = mockUpcomingEvents.length * (cardWidth + gap);
    const maxX = -(totalCardsWidth - visibleWidth + gap);

    setX((prevX) => {
      if (direction === "left") {
        return Math.min(prevX + (cardWidth + gap), 0);
      } else if (direction === "right") {
        return Math.max(prevX - (cardWidth + gap), maxX);
      }
      return prevX;
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Icon of the Month in Chennai: V. Sriram, Heritage Historian
        </title>
        <meta
          name="description"
          content="1. Super Chennai honors V. Sriram as Icon of the Month, a noted historian and author whose heritage walks, books and research keep Chennai's legacy alive for all."
        />
        <link rel="canonical" href="/icon-of-the-may-month-2026" />
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
                <img
                  src="/images/iconofthemonth/arunjainbanner.jpg"
                  alt="V. Sriram Banner"
                />
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
                  EVERY IDEA HAS A PURPOSE. <br /> EVERY INNOVATION, AN IMPACT.
                </small>
              </h2>
              <p>
                From building global financial technology enterprises to
                championing Design Thinking, Arun Jain has spent decades shaping
                ideas that move from possibility to measurable impact.
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

        {/* ABOUT SECTION */}

        <div
          className="newupdatewhychennai"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="workIntro">
            <h1 className="newupdatewhychennai">
              A BUILDER OF TECHNOLOGY. A CHAMPION OF THINKING.
            </h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/iconofthemonth/arunjainbanner2.jpg"
                  alt="V. Sriram Visual"
                />
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

        {/* AWARDS SECTION */}

        <section className="awards-section">
          <h2 className="awards-title">Awards & Achievements</h2>
          <p className="awards-subtitle"></p>
          <div className="awards-container">
            <img
              style={{ boxShadow: "none" }}
              alt="V. Sriram Achievements"
              src="/images/iconofthemonth/arunjainbanner1.jpg"
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

        {/* WHY HE INSPIRES / LEGACY SECTION */}

        <section className="awards-section expandingBrand">
          <div className="awards-container">
            <h2 className="section-title">
              His Legacy:
              <br />
              {/* <span>Preserving Culture</span> */}
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

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
