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

export default function Iconofthemontjahabar() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

const infoData = [
  {
    desc: "Jahabar Sadique is one of Chennai's most inspiring entrepreneurs, known for turning a simple idea into a thriving brand that redefined how the city experiences chai. He pursued an engineering degree before spending over a decade in the IT and ITES industry, where he developed a sharp eye for leadership, systems, and scale across large, complex teams.",
  },
  {
    desc: "After 12 years in the corporate world, Sadique and his co-founder Balaji Sadagopan took a bold leap — choosing entrepreneurship over stability. Their research revealed a clear and compelling gap: Chennai had over 25,000 tea stalls, always buzzing, yet none offered a clean, welcoming, experience-driven space where families and young people could truly enjoy a great cup of chai. Chai Kings was born in October 2016, with a first outlet in Kilpauk — just 350 sq ft, built on an investment of ₹25 lakh. The vision, however, was anything but small.",
  },
  {
    desc: "Today, Chai Kings serves thousands of cups every day across its growing network of company-owned outlets, building a loyal customer base that keeps coming back. The brand has successfully attracted investment from some of the most respected names in India's tea industry, most notably A.V. Thomas & Co. (AVT) — a partnership that speaks volumes about the confidence the sector places in Sadique's vision. With a steadily expanding team and strong year-on-year growth, Chai Kings stands as one of Chennai's most exciting homegrown success stories.",
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
       "Featured Speaker — India Food Forum & SOLOx (2023–24) — Recognised as a leading voice in India's F&B industry, invited to speak at prestigious national retail and food business platforms.",
   },
   {
     title:
       "IPL 2023 Official Chai Partner — Chai Kings operated across multiple stalls during the Indian Premier League season at Chepauk, serving lakhs of customers — a landmark moment for the brand's visibility and reach.",
   },
   {
     title:
       "Built an entirely company-owned store model — a rare and deliberate choice in F&B — ensuring consistent quality and brand integrity at every outlet.",
   },
   {
     title:
       "Pioneered the concept of a premium, experience-driven chai café in Chennai, successfully challenging the dominance of coffee chains in the organised beverage space.",
   },
   {
     title:
       "Attracted backing from industry veterans and marquee investors, reflecting strong confidence in the brand's vision and long-term scalability.",
   },
 ];

const expendingData = [
  {
    description: [
      "An entrepreneur who dared to build a chai brand in a coffee-first city — and won.",
      "Known for his disciplined, process-driven approach that transformed a tiny first outlet ",
      "into one of Chennai's most recognised F&B brands.",
      "Proved that a deep understanding of local consumer behaviour is the most powerful business ",
      "tool available to any founder.",
    ],
  },
  {
    description: [
      "Built a brand rooted in uncompromising quality — from centralised sourcing and a six-stage water ",
      "  filtration system to standardised SOPs across every outlet.",
      "Backed by industry veterans and investors who recognise the strength of his vision and the solidity ",
      " of his execution. Continues to inspire young entrepreneurs from Chennai with a story that is genuinely ",
      " homegrown, humble, and extraordinary. A true icon of the city's entrepreneurial spirit — one cup at a time.",
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
        <title>Icon of the Month | Super Chennai – Aruna Sairam</title>
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
                <img src="/images/innerpage-bannercard-chaikings.jpeg" alt="" />
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
                <br /> <small>A Vision That Brewed a Revolution</small>
              </h2>

              <p>
                <strong>Jahabar Sadique</strong> is a serial entrepreneur and
                the <strong>Co-Founder & CEO of Chai Kings</strong>, celebrated
                for his <strong>sharp business instincts</strong>,{" "}
                <strong>relentless focus on quality</strong>, and an unwavering
                belief in the power of a humble <strong>cup of chai</strong>.
                From building <strong>Chennai’s most beloved tea brand</strong>{" "}
                to scaling it into a <strong>multi-crore enterprise</strong>, he
                continues to inspire a new generation of{" "}
                <strong>entrepreneurs</strong> with his <strong>grit</strong>,{" "}
                <strong>discipline</strong>, and{" "}
                <strong>homegrown ambition</strong>.
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
            <h1 className="newupdatewhychennai">The King of Chai</h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img
                  src="/images/award-img-chaikings.png"
                  alt="jai king"
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
              src="/images/icon-of-the-month-chaikings.jpeg"
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
        {/* <IconoftheMonthOct /> */}
        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
