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

export default function IconofthemonthBharathyBhaskar() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: "Bharathy Bhaskar is a celebrated corporate leader, inspirational speaker, television personality, and renowned Tamil author admired for her ability to connect knowledge with emotions. A graduate of Anna University with a B.Tech in Chemical Engineering and an MBA, she built a remarkable corporate journey as Senior Vice President at Citibank, while actively promoting diversity and inclusive leadership as part of Citi’s Diversity & Inclusion Committee. She continues to contribute to the corporate world as an Independent Director at Hatsun Agro Product Ltd. and as a committee member of the Madras Management Association.",
    },
    {
      desc: "Beyond her professional achievements, Bharathy Bhaskar has touched millions of hearts through Sun TV’s Pattimandram, where her unique blend of humour, wisdom, and storytelling turns conversations into unforgettable experiences. Her speeches on leadership, personal growth, communication, women's empowerment, and workplace values inspire audiences to see life from fresh perspectives. Her literary works, published through leading Tamil platforms, have gained immense recognition, including an acclaimed book that carries a foreword by Superstar Rajinikanth.",
    },
    {
      desc: "Today, Bharathy Bhaskar continues to inspire students, professionals, entrepreneurs, and organizations through impactful keynote sessions, leadership programs, public forums, and creative writing. Her journey represents the power of knowledge, meaningful dialogue, and authentic leadership—encouraging people to think differently, express confidently, and create a positive impact in the world around them.",
    },
  ];

  const awardsData = [
    {
      title:
        "Humour Club Best Speaker Award – Celebrated for exceptional speaking skills and engaging expression.",
    },
    {
      title:
        "Sriram Group’s Literary Award – Recognized for outstanding contribution to Tamil literature.",
    },
    {
      title:
        "Rajinikanth Foreword Recognition – Honoured with appreciation from Superstar Rajinikanth.",
    },
    {
      title:
        "Senior Vice President – Demonstrated excellence in strategic corporate leadership.",
    },
    {
      title:
        "Independent Director – Contributing towards strong governance practices.",
    },
    {
      title:
        "Committee Member – Supporting growth in management and leadership initiatives.",
    },
    {
      title:
        "Diversity & Inclusion Advocate – Promoting equal opportunities and inclusive workplaces.",
    },
    {
      title:
        "Television Personality – Reaching millions through Pattimandram performances.",
    },
    {
      title:
        "Bestselling Tamil Author – Creating powerful stories and thought-provoking writings.",
    },
    {
      title:
        "Motivational Speaker – Inspiring individuals through meaningful ideas and experiences.",
    },
  ];

  const expendingData = [
    {
      description: [
        "Bharathy Bhaskar’s journey is built on the belief that every conversation has the power to create change.",
        "Through her speeches, debates, and writings, she continues to inspire generations",
        "to communicate with confidence, lead with compassion,",
        "and embrace knowledge as a tool for transformation.",
      ],
    },
    {
      description: [
        "Her legacy is defined by creating real impact where stories spark change.",
        "From corporate boardrooms to television stages across the world,",
        "she reminds us that true leadership lies in connecting knowledge with emotions and values.",
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
    { id: 1, image: "/images/bharathy-bhaskar-view1.jpg" },
    { id: 2, image: "/images/bharathy-bhaskar-view2.jpg" },
    { id: 3, image: "/images/bharathy-bhaskar-view3.jpg" },
    { id: 4, image: "/images/bharathy-bhaskar-view4.jpg" },
    { id: 5, image: "/images/bharathy-bhaskar-view5.jpg" },
    { id: 6, image: "/images/bharathy-bhaskar-view6.jpg" },
    { id: 7, image: "/images/bharathy-bhaskar-view7.jpg" },
    { id: 8, image: "/images/bharathy-bhaskar-view8.jpg" },
    { id: 9, image: "/images/bharathy-bhaskar-view9.jpg" },
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
        <title>Icon of the Month: Bharathy Bhaskar | Super Chennai</title>
        <meta
          name="description"
          content="Icon of the Month: Bharathy Bhaskar’s journey as a corporate leader, motivational speaker, television personality, and bestselling Tamil author."
        />
        <link rel="canonical" href="/icon-of-the-month-bharathy-bhaskar" />
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
                <img src="/images/bharathy-banner.jpg" alt="Bharathy Bhaskar Banner" />
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
                  WHERE EVERY WORD INSPIRES <br />
                  A NEW PERSPECTIVE
                </small>
              </h2>
              <p>
                Celebrating the art of meaningful conversation through wisdom,
                wit, and real-life experiences. <br />
                Where stories spark change and conversations transform lives.
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
              A Voice That Inspires. A Legacy That Leads.
            </h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/BHARATHI BASKAR IMG 2.png"
                  alt="Bharathy Bhaskar Visual"
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
              alt="Bharathy Bhaskar Achievements"
              src="/images/bharathy-bhaskar-awards.png"
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

        {/* WHY SHE INSPIRES / LEGACY SECTION */}

        <section className="awards-section expandingBrand">
          <div className="awards-container">
            <h2 className="section-title">
              Her Legacy:
              <br />
              <span>Create Impact</span>
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

        {/* GALLERY */}

        {/* <div className="EventsCalendarMainSection mb-10">
          <div
            className={`EventsCalenderBackground ${
              scrollDir === "right"
                ? "Utilitiesscroll-right"
                : "Utilitiesscroll-left"
            }`}
          >
            <p>Gallery &nbsp; Gallery &nbsp; Gallery &nbsp;</p>
            <p>Gallery &nbsp; Gallery &nbsp; Gallery &nbsp;</p>
          </div>

          <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center EventsCalendarTitleMain">
            <h2>Media Highlights</h2>
            <p>
              A collection of stage highlights, speaker sessions, interactions,
              and memorable moments from Arattai with Bharathy Bhaskar.
            </p>
          </div>

          <div className="overflow-hidden py-17 cardMobileSection">
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

              <motion.div
                ref={carouselRef}
                className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
                drag="x"
                dragConstraints={{
                  right: 0,
                  left: -(mockUpcomingEvents.length * 340 - window.innerWidth),
                }}
                animate={{ x }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {mockUpcomingEvents.map((card) => (
                  <div
                    key={card.id}
                    className="EventsCalendarCardSection min-w-[300px] h-[350px] bg-white"
                    onClick={() => openModal(card.image)}
                  >
                    <img
                      src={card.image}
                      alt="Gallery"
                      className="w-full h-[350px] object-cover rounded-t-md"
                    />
                  </div>
                ))}
              </motion.div>
              <div className="EventsCalenderButtons flex justify-center">
                <button
                  onClick={() => slide("left")}
                  className="EventsCalenderLeftButton"
                ></button>
                <button
                  onClick={() => slide("right")}
                  className="EventsCalenderRightButton"
                ></button>
              </div>
            </div>

            {isModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 z-[9999]"
                onClick={closeModal}
              >
                <img
                  src={modalImage}
                  alt="Full view"
                  className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  className="absolute top-5 right-5 text-white text-2xl font-bold"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div> */}

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}