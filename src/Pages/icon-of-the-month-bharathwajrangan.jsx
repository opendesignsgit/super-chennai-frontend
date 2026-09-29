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

export default function IconofthemonthBharathwajRangan() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: (
        <>
          Baradwaj Rangan began his film-writing journey in{" "}
          <strong>2003</strong>, after working in IT and advertising. What
          started as a passion for cinema gradually grew into a career spanning
          film criticism, journalism, editing, and authorship. Over the years,
          he has become one of the familiar voices in Indian cinema
          conversations, known for bringing depth without making films feel
          complicated to talk about.
        </>
      ),
    },
    {
      desc: (
        <>
          His work has appeared in publications including{" "}
          <strong>
            The Hindu, The New Indian Express, The New York Times, The Caravan,
            and Outlook
          </strong>
          . He has also taken on key editorial roles, including{" "}
          <strong>Editor of Film Companion South</strong> and, currently,{" "}
          <strong>Editor-in-Chief of Galatta Plus</strong>. Alongside reviews
          and editorial work, he has written books such as Conversations with
          Mani Ratnam and Dispatches from the Wall Corner, adding another layer
          to his contribution to Indian film writing.
        </>
      ),
    },
    {
      desc: (
        <>
          What sets his work apart is the way he looks beyond a simple{" "}
          <strong>“good or bad”</strong> verdict. He gets into the storytelling,
          performances, music, writing, filmmaking, and those small details that
          shape how a film stays with its audience. At{" "}
          <strong>Super Chennai’s Arattai</strong>, that perspective comes alive
          through an open conversation with Baradwaj Rangan, where cinema,
          stories, filmmaking, and everything in between take centre stage.{" "}
          <strong>
            Join us in person on 9 October 2026 for the conversation.
          </strong>
        </>
      ),
    },
    {
      desc: (
        <>
          <strong>Want to be part of the conversation? Register here →</strong>
        </>
      ),
    },
  ];

  const awardsData = [
    {
      title:
        "National Film Award – Best Film Critic: Won the Swarna Kamal at the 53rd National Film Awards in 2006.",
    },
    {
      title:
        "Galatta Plus: Currently serves as Editor-in-Chief and lead critic, covering films and engaging in conversations with filmmakers and artists.",
    },
    {
      title:
        "Film Companion South: Served as Editor, contributing to conversations around South Indian cinema.",
    },
    {
      title:
        "Author: Wrote Conversations with Mani Ratnam and Dispatches from the Wall Corner.",
    },
    {
      title:
        "National Film Awards Jury: Served as a member of the National Film Awards jury.",
    },
    {
      title:
        "Jio MAMI Mumbai Film Festival: Was part of the selection committee for international films.",
    },
    {
      title:
        "Academic Contribution: Has taught cinema and film journalism at the Asian College of Journalism in Chennai.",
    },
  ];

  const expendingData = [
    {
      description: [
        "Baradwaj Rangan has been part of the evolution of film criticism from traditional print to ",
        "the digital age. Through his reviews, interviews, books, and editorial work, he has created ",
        "space for deeper conversations around Indian cinema.",
      ],
    },

    {
      description: [
        "His approach goes beyond simply judging a film. He looks at why a story works, ",
        "how filmmakers build it, and what stays with the audience long after the credits roll. ",
        "His writing and conversations bring together the craft, context, and emotion behind cinema, ",
        "making film criticism more than just a final verdict.",
      ],
    },
    {
      description: [
        "From print columns to digital platforms, his journey reflects how cinema conversations ",
        "have evolved over the years. His work continues to bring curiosity context, and a fresh",
        "perspective to the way audiences engage with films, filmmakers, and stories",
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
        <title>Arun Jain – Intellect Design Arena | Icon of the Month</title>
        <meta
          name="description"
          content="Super Chennai's Icon of the Month — Arun Jain, CMD of Intellect Design Arena, on building global FinTech institutions and championing Design Thinking from India"
        />
        <link rel="canonical" href="/icon-of-the-june-month-2026" />
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
                  src="/images/iconofthemonth/bharathwajrangan.jpeg"
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
                  {/* EVERY IDEA HAS A PURPOSE. <br /> EVERY INNOVATION, AN IMPACT. */}
                  WHERE CINEMA MEETS <br /> A SHARPER PERSPECTIVE
                </small>
              </h2>
              <p>
                Baradwaj Rangan has spent years making film conversations
                smarter, sharper, and easier to  <br /> connect with. From reviews to
                interviews, his take on cinema always goes beyond the obvious.
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
              Baradwaj Rangan: A Journey Through Cinema
            </h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/iconofthemonth/bharathwajrangan1.jpeg"
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
              src="/images/iconofthemonth/bharathwajrangan2.jpeg"
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
              His Legacy :
              <br />
              CREATE IMPACT
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
