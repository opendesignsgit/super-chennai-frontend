import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/Css/about.css";
import "../assets/Css/Invest.css";
import Becameavolunteer from "../Components/BecameAVolunteer";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import IconofthemonthgallerySlider from "./IconoftheMonthGallerySlider";

export default function IconofthemonthDec() {
  const [scrollDir, setScrollDir] = useState("left");

 const data = [
  {
    title: (
      <>
        WHY WE <br /> CELEBRATE HIM
      </>
    ),
    image: "/images/awards-sep.png",
    content: [
      <>We celebrate Dr. GSK Velu for:</>,

      <>
        <ul>
          <li>His visionary leadership in transforming diagnostics and healthcare.</li>
          <li>His ability to foresee industry needs and build solutions that matter.</li>
          <li>His contribution to community upliftment and accessible healthcare.</li>
          <li>His relentless pursuit of quality, innovation, and patient care.</li>
          <li>
            His work goes beyond business success—it touches lives, strengthens communities,
            and inspires the next generation.
          </li>
        </ul>
      </>,
    ],
  },

  {
    title: <>GROWTH & SUCCESS</>,
    image: "/images/keyhighlights-sep.png",
    content: [
      "Under his leadership, Neuberg Diagnostics expanded into multiple countries with world-class laboratories, automation-driven systems, and globally accredited processes.",

      "Trivitron Healthcare’s growth journey reflects disciplined expansion, strategic global partnerships, and investment in next-generation medical technologies.",

      "Through all his ventures, Dr. Velu has set new benchmarks for quality, innovation, and operational excellence—solidifying his position as one of India’s most influential and respected healthcare leaders.",
    ],
  },
];



const infoData = [
  {
    title: "",
    desc: "Dr. GSK Velu is a pioneering healthcare entrepreneur who has transformed India’s diagnostic and medical technology landscape through visionary thinking and people-first leadership. With over three decades of commitment, he has built institutions that make world-class healthcare accessible to every household—across metros, rural towns, and global markets.",
       icon: "/images/icons/Points-svg.svg",

  },
  {
    title: "",
  
        icon: "/images/icons/Points-svg.svg",
  desc: "His mission has always been clear: to bring advanced, affordable diagnostics and medical technologies to all, regardless of income or geography. Over the years, he has founded and scaled multiple healthcare ventures that are today industry leaders across diagnostics, medical devices, eye care, dental care, and clinical excellence.",
  },
  {
    title: "",
    desc: "His leadership blends innovation, operational discipline, empathy, and a long-term vision—earning him immense respect from clinicians, industry leaders, policymakers, and aspiring entrepreneurs.",
       icon: "/images/icons/Points-svg.svg",

  }
];


const awardsData = [
  {
    title:
      "Lifetime Achievement Award - Celebrating decades of visionary leadership and contribution to healthcare.",
  },
  {
    title:
      "Honoris Causa Award - Recognizing distinguished achievements in the medical and diagnostics industry.",
  },
  {
    title:
      "Order of Merit Award - Honoring excellence, innovation, and patient-centered diagnostic advancements.",
  },
  {
    title:
      "Founded Trivitron Healthcare in 1997 — now the largest Indian-origin medical technology company.",
  },
  {
    title:
      "Established South Asia’s first Medical Technology Park, revolutionizing India’s med-tech manufacturing ecosystem.",
  },
  {
    title:
      "Expanded Trivitron to 9 international manufacturing facilities across India, Turkey, and Finland.",
  },
  {
    title:
      "Key driver of the Make in India initiative in the medical devices sector.",
  },
  {
    title:
      "Built Neuberg Diagnostics into a global brand performing 16 million+ tests annually across India, UAE, Sri Lanka, and South Africa.",
  },
  {
    title:
      "Introduced 5000+ advanced diagnostic tests, promoting prevention and early detection.",
  },
  {
    title:
      "Mentored and scaled Kauvery Hospitals, bringing advanced multi-specialty care to Tier 2 & 3 cities.",
  },
  {
    title:
      "Founded Maxivision Eye Hospitals, pioneers in advanced eye and vision correction technologies.",
  },
  {
    title:
      "Established Apollo White Dental & Apollo Dialysis, India’s largest dental chain and premium dental spa model.",
  },
  {
    title:
      "Anchor investor in Stakeboat Capital and GSK Ventures, supporting SMEs with over $200 million in healthcare-focused investments.",
  },
  {
    title: "Appointed Honorary Consul of the Republic of Estonia in India.",
  },
  {
    title:
      "Holds leadership roles in FICCI, CII, AIMED, influencing national healthcare policy and industry transformation.",
  },
];




const expendingData = [
  {
    title: "Legacy Part 1",
    description:
      "Dr. GSK Velu’s legacy is built on creating institutions that deliver large-scale impact.",
  },
  {
    title: "Legacy Part 2",
    description:
      "He introduced global technologies to India well before they became mainstream, ensuring high-quality diagnostics became affordable, accessible, and reliable.",
  },
  {
    title: "Legacy Part 3",
    description:
      "His contributions generated thousands of skilled jobs, empowered clinicians, strengthened smaller towns with modern healthcare infrastructure, and uplifted public health standards nationwide.",
  },
  {
    title: "Legacy Part 4",
    description:
      "His commitment to R&D, innovation, and skill development continues to shape future generations of healthcare leaders.",
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
                  <img src="/images/gskvelu-banner.jpg" />
                </div>
                <h3 className="voluntterContent">
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
                  Passion. Purpose. Precision <br />
                </h2>
                <p>
                  Transforming healthcare every day with bold ideas and lifelong
                  dedication.Driving change that strengthens systems, empowers
                  clinicians, and serves society with impact and purpose
                </p>
              </div>
              {/* 
              <div className="InvestChennaiContent text-center">
                <h2>
                  <small>THE VISIONARY LEADER</small>
                </h2>
                <p>
                  Dr. GSK Velu is a pioneering healthcare entrepreneur who has
                  transformed India’s diagnostic and medical technology
                  landscape through visionary thinking and people-first
                  leadership. With over three decades of commitment, he has
                  built institutions that make world-class healthcare accessible
                  to every household—across metros, rural towns, and global
                  markets.
                </p>
                <p>
                  His mission has always been clear: to bring advanced,
                  affordable diagnostics and medical technologies to all,
                  regardless of income or geography. Over the years, he has
                  founded and scaled multiple healthcare ventures that are today
                  industry leaders across diagnostics, medical devices, eye
                  care, dental care, and clinical excellence.
                </p>
                <p>
                  His leadership blends innovation, operational discipline,
                  empathy, and a long-term vision—earning him immense respect
                  from clinicians, industry leaders, policymakers, and aspiring
                  entrepreneurs.
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
              <h3 className="newupdatewhychennai">THE VISIONARY LEADER</h3>
              <div className="section-container container max-w-7xl mx-auto px-4">
                <div className="section-left-image">
                  <img src="/images/gskvelu-icon-of-the-month-dec.jpg" alt="Main Side Visual" />
                </div>

                <div className="section-right-content">
                  {infoData.map((item, index) => (
                    <div className="info-item-block" key={index}>
                      <img src={item.icon} alt="icon" className="info-icon" />
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

          {/* ################## awards and achivements #################*/}

          <section className="awards-section">
            <h2 className="awards-title">Awards & Achievements</h2>
            <p className="awards-subtitle"></p>
            <div className="awards-container">
              <img
                alt="foundations "
                src="/images/gskvelu-award.jpg"
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


















          {/* TWO WAY SECTIONS  */}





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
                {expendingData.map((award, index) => (
                  <div key={index} className="awards-item">
                    {award.description && (
                      <p className="award-description">{award.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <IconofthemonthgallerySlider /> */}

        

          <InstagramReelsMarquee />
          <Becameavolunteer />
        </div>
      </div>
    </>
  );
}
