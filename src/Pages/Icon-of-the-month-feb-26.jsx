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
import IconoftheMonthOct from "./IconoftheMonthOctSlider";

export default function IconofthemonthFebAruna() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

const infoData = [
  {
    desc: "Aruna Sairam is one of India’s most celebrated Carnatic vocalists, known for her divine voice and performances. Born in Mumbai and raised in a culturally rich musical environment, she began her training at a young age under her mother, Rajalakshmi Sethuraman. Her musical journey was further shaped under the guidance of the legendary T. Brinda, whose mentorship helped refine her classical depth and artistic expression.",
  },
  {
    desc: "Over the years, Aruna Sairam has become an ambassador of Carnatic music, captivating audiences with performances that combine technical mastery with emotional resonance. Her concerts are known for their energy and thoughtful collection, often bringing together traditional compositions with devotional forms like Abhang, which she helped popularise in the Carnatic concert space. Her artistry has taken her to stages around the world, including the renowned BBC Proms, where she introduced global audiences to the depth and beauty of South Indian classical music.",
  },
  {
    desc: "Beyond the stage, Aruna Sairam is dedicated to preserving and nurturing India’s musical heritage. She actively mentors young musicians and supports cultural initiatives that promote classical traditions. Honoured with recognitions such as the Padma Shri and the prestigious Sangeetha Kalanidhi, her journey reflects a lifelong commitment to music and cultural legacy. Through her voice and vision, she continues to inspire audiences and ensure that Carnatic music thrives for generations to come.",
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
    title:
      "Padma Shri (2018) – One of India’s highest civilian honours awarded by the Government of India for her contribution to music.",
  },
  {
    title:
      "Sangeetha Kalanidhi (2018) – Conferred by the Madras Music Academy, regarded as the most prestigious title in the field of Carnatic music.",
  },
  {
    title:
      "Chevalier of the Order of Arts and Letters (2022) – A distinguished cultural honour from the Government of France, recognising her efforts in promoting Indian classical music internationally.",
  },
  {
    title:
      "Kalaimamani (2009) – Awarded by the Government of Tamil Nadu for excellence in the field of music and arts.",
  },
  {
    title:
      "Sangeet Natak Akademi Award (2006) – Presented by Sangeet Natak Akademi, India’s national academy for music, dance, and drama, honouring her outstanding contribution to Indian classical music.",
  },
  {
    title:
      "One of the most prominent ambassadors of Carnatic music, bringing the tradition to audiences across Europe, the United States, and Asia through international concerts and festivals.",
  },
  {
    title:
      "Became one of the first Carnatic vocalists to perform at the renowned BBC Proms in London, introducing global audiences to South Indian classical music.",
  },
  {
    title:
      "Known for popularising Abhang devotional songs within Carnatic concerts, blending cultural traditions and expanding the genre’s repertoire.",
  },
  {
    title:
      "Conferred the prestigious title Sangeetha Kalanidhi by the Madras Music Academy, one of the highest honours in Carnatic music.",
  },
  {
    title:
      "Served as the Vice Chairperson of Sangeet Natak Akademi, contributing to the promotion and preservation of Indian performing arts.",
  },
];


 const expendingData = [
  {
    description: [
      "A voice that has brought Carnatic music closer to audiences across the world.",
      "Known for performances that blend devotion, emotion, and musical brilliance, ",
      "creating unforgettable concert experiences.Introduced many listeners ",
      "to the beauty of Abhang devotional songs within Carnatic concerts.",
      " "
    ],
  },
  {
    description: [
      "Represented Indian classical music on prestigious global stages such as the BBC Proms.",
      "Honoured with major recognitions including the Padma Shri and Sangeetha Kalanidhi.",
      "Continues to inspire the next generation by mentoring young musicians and keeping ",
      " classical traditions vibrant. A true cultural ambassador whose music connects people, ",
      "traditions, and generations."
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
        <title>
         Icon of the Month | Super Chennai – Aruna Sairam
        </title>
        <meta
          name="description"
          content="Icon of the Month: Aruna Sairam, renowned Carnatic vocalist, brings Chennai’s classical music to global stages, inspiring audiences worldwide with her soulful voice.."
        />
        <link rel="canonical" href="/icon-of-the-feb-month-2026" />
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
                <img src="/images/arunasairam-innerpage-banner.jpeg" alt="" />
              </div>
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
                <br /> <small>A Voice that Transcends Boundaries</small>
              </h2>
              <p>
                <strong>Aruna Sairam</strong> is a renowned{" "}
                <strong>Carnatic vocalist</strong>
                celebrated for her <strong>powerful voice</strong>,{" "}
                <strong>expressive performances</strong>, and deep connection to{" "}
                <strong>classical traditions</strong>. From
                <strong> prestigious global concerts</strong> to mentoring
                <strong> emerging musicians</strong>, she continues to inspire
                audiences with her <strong>artistry</strong>,{" "}
                <strong>devotion</strong>, and commitment to keeping{" "}
                <strong>Carnatic music</strong> vibrant and accessible.
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
            <h1 className="newupdatewhychennai">The Voice of Devotion</h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/award-banner-arunasairam.jpeg"
                  alt="Main Side Visual"
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
              alt="foundations "
              src="/images/arunasairam-awardimg.jpeg"
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
              Why She
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
        {/* <IconoftheMonthOct /> */}
        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
