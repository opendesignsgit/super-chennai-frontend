import { useState, useEffect, useRef } from "react";
import "../assets/Css/Invest.css";
import "../assets/Css/about.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import { Link, useNavigate } from "react-router-dom";
// import AOS from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Utilitiesinchennai1 from "../Components/InvestSideBar";
import Whychennaitab from "../Components/whychennaitab";
import EventFunction from "./EventFunction";

export default function About() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const InvestSections = [
    {
      title: "Digital",
      description:
        "Empowering communities through technology and digital literacy programs. Invests help bridge the digital divide by offering training and access to tools.",
      image: "/images/Invest-Images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/digital",
    },
    {
      title: "Education",
      description:
        "Promoting education for all through tutoring, mentorship, and resources. Be a part of shaping young minds and building brighter futures.",
      image: "/images/Invest-Images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/education",
    },
    {
      title: "Health",
      description:
        "Supporting health and wellness with awareness campaigns and aid drives. Join us in making essential healthcare accessible to those in need.",
      image: "/images/Invest-Images/BacameAvolunterImage2.png",
      linkText: "Enquire Now",
      linkUrl: "/health",
    },
    {
      title: "Environment",
      description:
        "Investing toward a cleaner, greener planet through sustainable initiatives. Your actions can help preserve nature for future generations.",
      image: "/images/Invest-Images/BacameAvolunterImage3.png",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "Women Empowerment",
      description:
        "Advocating for women's rights and helping them build sustainable futures. Support equality and uplift communities by enabling women.",
      image: "/images/Invest-Images/BacameAvolunterImage4.png",
      linkText: "Enquire Now",
      linkUrl: "/women",
    },
    {
      title: "Youth Development",
      description:
        "Creating programs that inspire and guide the youth to be future leaders. Help nurture talents and open doors for young individuals.",
      image: "/images/Invest-Images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/youth",
    },
    {
      title: "Disaster Relief",
      description:
        "Providing timely aid and rehabilitation to those affected by natural disasters. Be a lifeline when it matters most with your support.",
      image: "/images/Invest-Images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/relief",
    },
  ];

  const investItems = [
    {
      title: "Realestate",
      subtitle: "Residential & Commercial",
      description:
        "Due to rising property values and the need for rental space in cities, real estate investments in Chennai could provide attractive returns. Both residential and commercial prospects were abundant.",
      image: "/images/Invest-Images/Icons/realesate-icon.svg",
      link: "/invest/chennai-real-estate",
    },
    {
      title: "Franchise",
      // subtitle: "software & hardware",
      description:
        "Profit from established brands and local market knowledge through franchising. Investing in a franchise in Chennai would provide you with a quicker path to becoming an entrepreneur in this city's economy.",
      image: "/images/Invest-Images/Icons/franchise-icon.svg",
      link: "/invest/franchise-business-in-chennai",
    },
    {
      title: "STARTUPS ",
      // subtitle: "hospitals & wellness",
      description:
        "Unlike service-based startups, making a product-based investment requires an initial payment. In any case, you can quickly locate your target audience in this city and increase your return on investment.",
      image: "/images/Invest-Images/Icons/startups-icon.svg",
      link: "/invest/startup-companies-in-chennai",
    },
    {
      title: "RENEWABLE ENERGY",
      subtitle: "SOLAR & WIND ",
      description:
        "Existing investment opportunities in government-initiated and driven wind and solar projects. It can help create a more environmentally friendly future while taking advantage of a growing market.",
      image: "/images/Invest-Images/Icons/renewable-icon.svg",
      link: "/invest/solar-companies-in-chennai",
    },
    {
      title: "RETIRE",
      // subtitle: "malls & outlets",
      description:
        "Chennai retirement provides a thriving cultural scene and good healthcare. Investing in this area promises a pleasant living in a friendly community and meets the rising need for senior-friendly accommodation.",
      image: "/images/Invest-Images/Icons/retire-icon.svg",
      link: "/invest/retirement-in-chennai",
    },
    {
      title: "GOVERNMENT INITIATIVES",
      // subtitle: "hotels & resorts",
      description:
        "Through laws, infrastructure development, and taxation, the TN government encourages investment in Chennai. Focusing on industries like manufacturing and renewable energy will increase economic growth and create jobs.",
      image: "/images/Invest-Images/Icons/government-icon.svg",
      link: "/invest/government-projects-in-chennai",
    },
    {
      title: "FORMALITIES & REGULATIONS",
      // subtitle: "industrial growth",
      description:
        "Navigating legal systems, such as company registration and environmental permits, is part of investing in Chennai. To make these requirements easier, government organizations provide online portals and instruction.",
      image: "/images/Invest-Images/Icons/formalities-icon.svg",
      link: "/invest/law-firms-in-chennai",
    },
    {
      title: "NEWS",
      // subtitle: "banks & fintech",
      description:
        "Chennai's increasing investment in industries like data centers and electric cars has been highlighted in recent headlines. Stay up-to-date on business news to learn about the most recent advancements and prospects.",
      image: "/images/Invest-Images/Icons/news-icon.svg",
      link: "/invest/news-in-chennai",
    },
    {
      title: "EVENTS",
      // subtitle: "mobility & logistics",
      description:
        "A number of corporate conferences, industry-specific seminars, and investment summits are held in Chennai. These gatherings offer chances for networking, information about new industries, and stages for exhibiting investment possibilities.",
      image: "/images/Invest-Images/Icons/events-icon.svg",
      link: "/invest/chennai-events",
    },
    {
      title: "EXHIBITIONS",
      subtitle: "PROPERTY, AUTOMOBILE ",
      description:
        "Investors have the opportunity to evaluate industry trends and uncover potential enterprises by attending these events, which feature goods, innovations, and possible collaborations.",
      image: "/images/Invest-Images/Icons/exhibition-icon.svg",
      link: "/invest/exhibitions-in-chennai",
    },
  ];

  const buildingData = [
    {
      title: "Startups",
      category: "Real Estate",
      description:
        "If you have expertise in any service or product, you can start your own business in an area where your target market is present and you can begin making money from the service you offer. Investing in a...",
      image: "/images/Invest-Images/SubPages/emerging/omr.jpg",
      link: "/investstartupschennai#InvestId",
    },
    {
      title: "Franchise",
      category: "Real Estate",
      description:
        "To increase their brand recognition, several brands open franchise across Chennai. In Chennai, several businesses are seeking investors to build franchises and offer training to operate them.",
      image:
        "/images/Invest-Images/SubPages/Food-and-Beverage/coffee-shops.jpg",
      link: "/investfranchisechennai#InvestId",
    },
    {
      title: "Renewable Energy",
      category: "Real Estate",
      description:
        "Chennai offers a wealth of Renewable Energy investment prospects. Investigate wind energy along the shore. Study up on waste-to-energy. Promising prospects include a sustainable future...",
      image: "/images/Invest-Images/SubPages/solar/rooftop.jpg",
      link: "/investrenewableenergychennai#InvestId",
    },
    {
      title: "Real Estate",
      category: "Real Estate",
      description:
        "Since Chennai is a big metropolis, real estate values have skyrocketed. If you believe you want to consistently create a supplementary source of income, investing in Chennai real estate....",
      image: "/images/Invest-Images/SubPages/emerging/perumbakkam.jpg",
      link: "/chennairealestate#InvestId",
    },

    {
      title: "Retirement ",
      category: "Startups",
      description:
        "Every older individual plans to spend their retirement in a contented and tranquil setting. For older folks, Chennai will be the ideal destination for relaxation and exploration. Super Chennai....",
      image: "/images/Invest-Images/SubPages/diverse-areas/Adyar.jpg",
      link: "/investretirementchennai#InvestId",
    },
  ];

  const chennaiSectionData = [
    { tag: "h2", text: "Chennai's" },
    {
      tag: "h5",
      text: "Soundtrack pulses with \nkuthu, gaana, hip-hop \nand indie beats.",
    },
    {
      tag: "p",
      text: "Its food scene is just as dynamic, from sushi bars to taco joints, \nKorean cafés to soulful biryanis, where every meal is a mix of flavors as diverse as its people.",
    },
    {
      tag: "p",
      text: "Whether it’s skaters carving through the streets, surfers riding the waves, \nor storytellers capturing moments, Chennai is a city in motion-always evolving, always alive. \nThis is Chennai redefined-bold, vibrant, and unapologetically modern. \nSuper Chennai isn’t just a place to live-it’s where the \nfuture is being shaped,",
    },
    { tag: "h6", text: "one beat, one bite, & \none breakthrough at a time." },
    { tag: "h3", text: "It’s hot. \nIt’s happening. \nAnd it’s home." },
  ];

  const welcomeSuperChennaiData = {
    heading: (
      <>
        Welcome to <br />
        Super Chennai
      </>
    ),
    subheading:
      "Super Chennai is a citizen-led initiative to showcase Chennai as a truly global city",
    images: ["/images/chennai-road2.jpg"],
    columns: [
      [
        "It is a movement  born from pride  and purpose.",
        "It is home to the best colleges and a thriving startup ecosystem.",
        "A city connected to the world through trade, talent, and culture.",
      ],
      [
        "We aim to inspire every Chennaite to celebrate the city we call home.",
        "A place to live, visit, work, invest, and innovate.",
        "We are here to tell and sell the story of Chennai with conviction.",
      ],
      [
        "Chennai ranks among India’s safest, most inclusive metros.",
        "A vibrant hub where ideas thrive and businesses grow.",
        "So that anyone ready to build their future can proudly belong here.",
      ],
    ],
  };

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
  return (
    <>
      <div className="InvestPageId">
        <div
          className="VolunteerBgSection InvestBgSection notHome aboutBan"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img src="/images/about-banner.jpg" alt="" />
              </div>
              <h3 className="voluntterContent">About</h3>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <div className="InvestChennaiContainerFlex aboutIntro">
            <div className="InvestChennaiContent">
              <h2>SUPER CITY TO LIVE</h2>
              <p>
                Chennai is India’s healthcare capital, SaaS capital, fintech
                capital, and automobile capital. Home to 7.5 million people,{" "}
                <br />
                it is a 386-year-old city alive with heritage and vibing to the
                march of the future.
              </p>
              <p>
                A city where ideas thrive, businesses grow, and communities
                flourish. This is not just Chennai. <br />
                This is Super Chennai.
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

        <section className="welcome-super-chennai">
          <div className="welcomesuperIn">
            <div className="welcome-images">
              {welcomeSuperChennaiData.images.map((src, index) => (
                <img src="/images/about-intro-img.png" alt="About Us" />
              ))}
            </div>
            <div className="welcome-text">
              <h2>{welcomeSuperChennaiData.heading}</h2>
              <h4>{welcomeSuperChennaiData.subheading}</h4>
              <div className="welcome-columns">
                {welcomeSuperChennaiData.columns.map((column, colIndex) => (
                  <div className="welcome-column" key={colIndex}>
                    {column.map((text, textIndex) => (
                      <p key={textIndex}>{text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col container max-w-7xl mx-auto px-4 vissionMission">
          <div className="vision-mission-container">
            <div className="vision-mission-card">
              <img
                src="/images/mission-icon.png"
                alt="Mission Icon"
                className="vision-mission-icon"
              />
              <h2 className="vision-mission-title">Vision</h2>
              <p className="vision-mission-text">
                To position Chennai as one of the world's most liveable,
                lovable, and future-ready cities - where innovation, culture,
                and community thrive together.
              </p>
            </div>
            <div className="vision-mission-card">
              <img
                src="/images/vission-icon.png"
                alt="Vision Icon"
                className="vision-mission-icon"
              />

              <h2 className="vision-mission-title">Mission</h2>
              <p className="vision-mission-text">
                To showcase Chennai's identity, connect people to opportunities,
                and build a platform that inspires pride, progress, and
                participation.
              </p>
            </div>
          </div>
        </div>

        {/* Side tab */}

        <Whychennaitab />

        {/* Side tab */}

        {/* <section className="chennai-history-section">
      <div className="flex flex-col container max-w-7xl mx-auto px-4">
        <h2 className="history-title">CHENNAI’S HISTORY</h2>
        <p className="history-intro">
          Chennai, formerly known as Madras, has a rich and layered past that spans over 2,000 years. Long before the arrival of <br/>
colonial influences, the region was home to thriving Tamil settlements, such as Mylapore, which served as a significant trading port <br/>
with connections to ancient Rome and Greece.
        </p>
        <p className="history-intro">
          Powerful South Indian dynasties like the Pallavas, Cholas, and Vijayanagara Empire left an indelible<br/>
          mark on the region through their contributions to architecture, language, administration, and the arts.<br/>
          Magnificent temples, inscriptions, and cultural traditions that originated during their reigns still thrive<br/>
          in the city today.
        </p>
        <div className="history-image-container">
            <img src="/images/history-img.jpg" alt="Mission Icon"  />
        </div>
        <h4 className="history-subtitle">
          Chennai’s evolution from a cluster of villages into a thriving <br/>
          urban centre was steady and purposeful.
        </h4>
        <p className="history-description">
          Its ports, civic institutions, and educational systems grew over centuries, nurturing a city deeply rooted in<br/>
          tradition, yet always growing forward. In 1996, the city officially embraced its historical identity and took the<br/>
          name Chennai, honoring its origins and the legacy of the land.
        </p>
      </div>
    </section> */}

        <section className="foundations-section">
          <div className="container">
            <div className="image-container">
              <img src="/images/foundations-img.jpg" alt="foundations " />
            </div>
            <div className="content">
              <h2>Foundations of Modern Chennai</h2>
              <p>
                The modern foundations of Chennai were laid on August 22, 1639,
                a date now proudly celebrated as Chennai Day. This moment marked
                the formal recognition of the region’s growth into an organized
                urban centre with expanding civic and economic importance.
              </p>
              <p>
                By 1640, key developments had begun to shape the city's layout
                and identity. Chennai steadily grew by integrating nearby
                villages, evolving into a connected and planned cityscape.
              </p>
              <p className="bold">
                In the decades that followed, the city laid the groundwork for
                many firsts
              </p>
              <ul>
                <li>
                  India’s first municipal corporation was established here in
                  1688, and the second oldest in the world after London.
                </li>
                <li>
                  The country’s first railway terminal was set up at Royapuram
                  in 1856.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="NumChennaiSec SecPaddBlock" id="NumChennaiSec">
          <div className="flex flex-col container max-w-7xl mx-auto px-4">
            <div className="tsSectitles">
              {chennaiSectionData.map((item, index) => {
                const Tag = item.tag;
                return (
                  <Tag key={index}>
                    {item.text.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Tag>
                );
              })}
            </div>
          </div>
        </section>

        <EventFunction/>

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
