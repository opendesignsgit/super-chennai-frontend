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
import IconoftheMonthJuly from "./IconoftheMonthJulySlider";

export default function IconofthemonthOct() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: "Chinmayi Sripada is a celebrated Indian playback singer whose voice has touched hearts across generations. Born on September 10, 1984, in Mumbai and raised in Chennai, she trained in Carnatic music from a young age. Her breakthrough came with the song Oru Deivam Thantha Poovae from Kannathil Muthamittal (2002), composed by A. R. Rahman, which showcased her soulful and versatile singing.",
    },
    {
      desc: "Over the years, she has sung in Tamil, Telugu, Hindi, Kannada, Malayalam, and Marathi, creating melodies that combine emotion, energy, and storytelling. Beyond playback singing, Chinmayi has provided voiceovers for leading actresses and made television appearances, mentoring emerging talents. Her career reflects both artistic brilliance and a dedication to nurturing the next generation of performers.",
    },
    {
      desc: "Off-stage, Chinmayi is an entrepreneur and social activist. She founded Blue Elephant, a translation services company, and Skinroute, a skincare brand, creating employment opportunities and promoting niche industries. She also launched initiatives like Singing for Charity, supported sanitation workers, and advocated for folk artists during difficult times. Her journey is a blend of talent, purpose, and inspiration that continues to impact countless lives.",
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
        "National Film Award – Best Female Playback Singer (Kannathil Muthamittal, 2002)",
    },
    {
      title:
        "Filmfare Awards – Best Female Playback Singer (Tamil, Marathi, Malayalam)",
    },
    {
      title:
        "Nandi Awards – Best Female Dubbing Artist (Ye Maaya Chesave, Manam)",
    },
    {
      title:
        "Goa State Cultural Awards – Best Female Playback Singer (Amizade, 2025)",
    },
    {
      title:
        "SIIMA Award – Best Female Playback Singer – Telugu (Majili, 2019)",
    },
    {
      title: "JFW Movie Awards – Best Dubbing Artist (Leo, 2024)",
    },
    {
      title: "SAARC Chamber Award – Excellence in Women Entrepreneurship",
    },

    {
      title: "Sung in over 200 films across multiple Indian languages.",
    },

    {
      title:
        "Provided voiceovers for leading actresses including Trisha, Samantha Ruth Prabhu, and Mrunal Thakur",
    },

    {
      title: "Founder and CEO of Blue Elephant, serving multinational clients.",
    },

    {
      title:
        "Launched Skinroute, importing Korean and Taiwanese skincare products to India.",
    },
    {
      title:
        "Opened Deep Skin Dialogues, a medi-spa offering advanced skincare treatments.",
    },

    {
      title:
        "Made television appearances, including Star Singer in Malayalam, sharing performances and mentoring emerging artists..",
    },
  ];

  const expendingData = [
    {
      description: [
        "Chinmayi Sripada is celebrated not just for her musical talent",
        "but also for her courage, versatility, and positive impact on society.",
      ],
    },
    {
      description: [
        "From soul-stirring playback singing to entrepreneurship,",
        " activism, and social service,",
        "she continues to inspire countless people,",
       " proving that dedication, talent,",
        "and integrity can create a lasting legacy.",
      ],
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
        Chinmayi Sripada’s Soulful Voice of India - Icon of the Month 
        </title>
        <meta
          name="description"
          content=" Chinmayi Sripada’s journey showcases true excellence award winning singer, mentor, entrepreneur, and advocate for social justice and women’s rights."
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
                <img src="/images/events/chinmyi-sripaada.jpg" alt="" />
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
                {/* Icon of the Month – Chinmayi Sripada */}
                <br /> <small>Where Soul Meets Melody</small>
              </h2>
              <p>
                <strong>Chinmayi Sripada</strong> is a celebrated Indian{" "}
                <strong>playback singer</strong>,<strong>voice artist</strong>,
                and <strong>entrepreneur</strong> known for her soulful
                renditions across multiple languages. From{" "}
                <strong>award-winning songs</strong> to mentoring young artists,
                she continues to inspire with her <strong>talent</strong>,{" "}
                <strong>passion</strong>, and
                <strong>dedication</strong>.
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
            <h1 className="newupdatewhychennai">The Melody Maverick</h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/events/inner-page-image2.jpg"
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

        <div className="naturals-container">
          {data.map((section, index) => (
            <div className="naturals-section" key={index}>
              {/* {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="naturals-logo"
                />
              )} */}
              <h2>{section.title}</h2>
              {section.content.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          ))}
        </div>

        <section className="awards-section">
          <h2 className="awards-title">Awards & Achievements</h2>
          <p className="awards-subtitle"></p>
          <div className="awards-container">
            <img
              alt="foundations "
              src="/images/events/inner-page-image.jpg"
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
              Why We <br />
              <span> Celebrate Her</span>
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
