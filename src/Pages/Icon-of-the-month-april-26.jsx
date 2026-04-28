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

export default function IconofthemonthAprilSowmiyaSwaminathan() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const infoData = [
    {
      desc: "Dr. Soumya Swaminathan is one of India’s most respected medical scientists and a globally recognized leader in public health. As a paediatrician and clinical researcher, she has dedicated her career to tackling some of the world’s most pressing health challenges, especially tuberculosis (TB) and HIV. Her journey began at the National Institute for Research in Tuberculosis (NIRT) in Chennai, where her field-level research laid a strong foundation for her lifelong mission—making healthcare more accessible, practical, and impactful for communities that need it most.",
    },
    {
      desc: "Her journey into global leadership reached new heights when she became the first Chief Scientist of the World Health Organization (WHO). In this role, she built and led the Science Division from the ground up, ensuring global health policies were firmly rooted in scientific evidence. She also served as WHO’s Deputy Director-General, becoming one of the few Indians to hold such a prestigious international position. Her influence extends beyond institutions, contributing to global policy discussions and advisory platforms shaping the future of health.",
    },
    {
      desc: "During the COVID-19 pandemic, Dr. Soumya played a critical role in guiding the global scientific response. She strongly advocated for equitable vaccine access through initiatives like COVAX, reinforcing the idea that healthcare should be fair and accessible to all. Today, as Chairperson of the M. S. Swaminathan Research Foundation, she continues to shape the future of healthcare—focusing on climate change, nutrition, and public health. A strong advocate of the One Health approach, she works at the intersection of human, animal, and environmental health, especially impacting women and children, while carrying forward the legacy of her father, Dr. M. S. Swaminathan.",
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
        "First-ever Chief Scientist of WHO (2019–2022), shaping global science strategy",
    },
    {
      title: "Former WHO Deputy Director-General of Programmes",
    },
    {
      title: "Director General of Indian Council of Medical Research (ICMR)",
    },
    {
      title:
        "Key contributor to global COVID-19 response and vaccine equity initiatives (COVAX)",
    },
    {
      title:
        "Principal Advisor to India’s National Tuberculosis Elimination Programme",
    },
    {
      title: "FABA Lifetime Achievement Award (2024)",
    },
    {
      title: "DEVI Awards (2026)",
    },
    {
      title: "Honorary doctorates from leading global institutions",
    },
    {
      title: "Fellow of top international and Indian science academies",
    },
    {
      title:
        "Recognized globally for her contributions to public health and scientific leadership",
    },
  ];

  const expendingData = [
    {
      description: [
        "Dr. Soumya Swaminathan represents the power of knowledge driven by purpose.",
        "She has shown that science is not just about discovery—it is about creating real impact in people’s lives.",
        "Her leadership stands as a symbol of clarity, integrity, and compassion,",
        "ensuring that global decisions are guided by evidence and fairness.",
      ],
    },
    {
      description: [
        "Her journey inspires us to think beyond success and focus on meaningful change.",
        " From Chennai to the global stage, she reminds us that true leadership lies",
        " in using knowledge to serve humanity—shaping a healthier, more equitable future for all.  ",
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
                <img src="/images/soumya-iconofthemonth-banner1.jpeg" alt="" />
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
                  Transforming Global Health Through <br />
                  Scientific Leadership
                </small>
              </h2>
              <p>
                Advancing healthcare beyond boundaries through research,
                leadership, and equity. <br />
                Where science meets humanity to create lasting global impact.
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
              A Life Dedicated to Global Health & Scientific Excellence
            </h1>
            <div className="section-container container max-w-7xl mx-auto px-4">
              <div className="section-left-image">
                <img src="/images/iconofthemonth-sowmya-img1big.jpeg" alt="Main Side Visual" />
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
              src="/images/soumya-awards.jpeg"
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
        {/* <IconoftheMonthKamakotiSlider /> */}
        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
