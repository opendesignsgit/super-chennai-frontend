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

export default function IconofthemonthVSriram() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: "V. Sriram is a renowned heritage historian, author, entrepreneur, columnist, and cultural advocate whose work has transformed the way Chennai's history is experienced and appreciated. As the pioneer of Chennai's heritage walks, he has spent over two decades bringing the city's architectural marvels, cultural traditions, and forgotten stories to life through engaging tours, books, and public lectures.",
    },
    {
      desc: "His passion for history extends beyond heritage walks. As the Secretary of The Music Academy, Chennai, and former Editor of Madras Musings, V. Sriram has made significant contributions to documenting Carnatic music, theatre, and Chennai's cultural legacy. Through his research and storytelling, he continues to inspire people of all generations to value and preserve the city's rich heritage.",
    },
  ];

  const awardsData = [
    {
      title:
        "Lifetime Achievement Award – Recognized by the Rotary Club of Madras Central (RCMC) for exceptional contributions to South Indian arts, culture, and heritage.",
    },
    {
      title:
        "Vedavalli Memorial Heritage Award (2010) – Honoured for outstanding efforts to preserve and promote Chennai's historical legacy.",
    },
    {
      title:
        "Pioneer of Chennai Heritage Walks – Introduced the city's first heritage walk in Mylapore in 1999 and inspired heritage tourism across India.",
    },
    {
      title:
        "Acclaimed Author & Cultural Historian – Recognized for insightful books, heritage research, and leadership in documenting Carnatic music and regional history.",
    },
    {
      title:
        "Secretary of The Music Academy – Key contributor to promoting Carnatic music, theatre, and performing arts traditions.",
    },
    {
      title:
        "Former Editor of Madras Musings – Played a crucial role in documenting, celebrating, and chronicling Chennai's urban history.",
    },
  ];

  const expendingData = [
    {
      description: [
        "For more than two decades, V. Sriram has dedicated his life to preserving Chennai's heritage through storytelling",
        "research, publications, and immersive heritage experiences.",
        "His work has inspired countless people to explore, appreciate, and protect the city's cultural identity.",
        "Today, his legacy continues to shape the way future generations connect with Chennai's ",
        "rich history, ensuring that its stories remain alive for years to come.",
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
        <title>Icon of the Month in Chennai: V. Sriram, Heritage Historian</title>
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
                <img src="/images/ICON SRIRAM.jpg.jpeg" alt="V. Sriram Banner" />
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
                  EVERY STEP THROUGH HISTORY REVEALS <br />
                  A STORY WORTH SHARING
                </small>
              </h2>
              <p>
                Celebrating Chennai's heritage through timeless stories, remarkable landmarks, and unforgettable experiences. <br />
                Discover the city's past through conversations that inspire curiosity and preserve culture.
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
              A GUARDIAN OF HERITAGE. A STORYTELLER OF CHENNAI.
            </h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/sriram-v-about-award.jpeg"
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
              src="/images/sriram-v-about.jpeg "
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