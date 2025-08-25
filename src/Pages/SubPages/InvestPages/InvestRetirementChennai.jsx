import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function InvestRetirementChennai() {
  const imageSections = [
    {
      sectionTitle: "Real-World Use, Not Just Whitepapers",
      sectionDesc:
        "Unlike many cities chasing crypto headlines, Chennai is focused on blockchain with purpose — solving real public problems and building lasting platforms.",

      fintechEvolution: [
        {
          points: [
            {
              title: "Holistic Wellness",
              para: [
                <>
                  Access to <strong>world-class hospitals</strong> , Ayurvedic
                  centres & wellness retreats
                </>,
                <>
                  Chennai’s <strong>tropical climate</strong> supports healthy
                  aging
                </>,
                <>
                  Numerous <strong>yoga, meditation & spiritual centres</strong>{" "}
                </>,
                <>Calm neighborhoods with greenery and community parks</>,
              ],
              imgs: "/images/Invest-Images/Icons/holistic-wellness.svg",
            },
            {
              title: "Grow Your Wealth",
              note: "",
              para: [
                <>
                  <strong>Affordable real estate</strong> in suburban &
                  satellite townships
                </>,
                <>
                  Growing number of{" "}
                  <strong>
                    {" "}
                    retirement townships and senior-living communities
                  </strong>
                </>,
                <>
                  Lower cost of living ={" "}
                  <strong>more value for your retirement fund</strong>{" "}
                </>,
                <>
                  Investment-friendly: FD rates, REITs, gold, and local SIPs all
                  perform well here
                </>,
              ],
              imgs: "/images/Invest-Images/Icons/grow-your-wealth.svg",
            },
            {
              title: "An Unrivalled Lifestyle",
              note: "",
              para: [
                <>
                  Chennai offers a{" "}
                  <strong> calm, low-pollution environment</strong> compared to
                  other metros
                </>,
                <>
                  Strong <strong>cultural roots</strong> in music, literature,
                  spirituality
                </>,
                <>
                  <strong>Safe, walkable neighborhoods,</strong> especially in
                  South & West Chennai
                </>,
                <>
                  Easy access to{" "}
                  <strong> beaches, temples, libraries, and arts venues</strong>
                </>,
              ],
              imgs: "/images/Invest-Images/Icons/an-unrivalled-lifestyle.svg",
            },
            {
              title: "Safety & Stability",
              note: "",
              para: [
                <>
                  {" "}
                  <strong> Ranked among India's safest metros </strong> for
                  seniors
                </>,
                <>
                  Proactive{" "}
                  <strong>
                    Tamil Nadu Police senior citizen helplines & patrols
                  </strong>
                </>,
                <>
                  Gated retirement communities with{" "}
                  <strong>CCTV, caregivers & health tie-ups</strong>
                </>,
                <>
                  Strong presence of{" "}
                  <strong>
                    {" "}
                    community clubs, NGOs, and senior citizen forums
                  </strong>
                </>,
              ],
              imgs: "/images/Invest-Images/Icons/safety-stability.svg",
            },
            {
              title: "Stay Connected",
              note: "",
              para: [
                <>
                  Robust mobile & broadband connectivity—even in suburban areas
                </>,
                <>
                  Chennai airport offers{" "}
                  <strong>
                    {" "}
                    global connectivity for visiting children/family
                  </strong>
                </>,
                <>
                  Plenty of activities: book clubs, temple volunteering, city
                  walks, elder-friendly yoga
                </>,
                <>
                  <strong>English & Tamil-speaking communities</strong>
                  —easy communication for all backgrounds
                </>,
              ],
              imgs: "/images/Invest-Images/Icons/stay-connect.svg",
            },
          ],
        },
      ],
    },
  ];

  const evData = [
    {
      company: "Kelambakkam / Guduvanchery / Vandalur",
      focus: "Senior living townships, quiet, affordable",
      highlights: "USD 1.41 billion – USD 524.7 million (varied estimates)",
    },
    {
      company: "Porur / Poonamallee",
      focus: "Near hospitals, gated communities",
      highlights: "23–35% across different forecasts",
    },
    {
      company: "ECR / OMR stretch",
      focus: "Serene beachside options",
      highlights: "USD 3.5 billion – USD 29 billion",
    },
    {
      company: "Anna Nagar / Adyar / Besant Nagar",
      focus: "Premium but calm urban living",
      highlights: "USD 1.69 billion → USD 9.28 billion (CAGR ~28%)",
    },
  ];

  const imageSections2 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

    {
      sectionTitle: "",
      sectionDesc: "Two Decades of Learning Reinvented Through Technology",

      fintechEvolution: [
        {
          points: [
            {
              title: "Retirement Living Options",
              para: [
              <>Independent senior homes</>,
              <>Assisted-living residences</>,
              <>Co-living with medical support</>,
              <>Affordable housing for pensioners</>,

            ],
              imgs: "/images/Invest-Images/Icons/Retirement-living-options.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections3 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  
  ];

  const datard = [
    {
      title: "Corporate-Led Immersive Studios",
      points: [
        <>
          MG StudioZ (MG Motor): An immersive car retail experience using AR/VR
          digital configurators, video walls, and mega-visualizers. A
          tech-forward showroom for EVs in Chennai.{" "}
          {/* <a
            href="https://innovativezoneindia.com/mg-motor-launches-studioz/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-voilet-500 underline"
          >
            {" "}
            auto.hindustantimes.com+2innovativezoneindia.com+2pulseofindia.asia+2{" "}
          </a> */}
        </>,
      ],
    },
    {
      title: "Why Chennai for AR/VR?",
      points: [
        <>
          <strong>Deep‑tech synergy</strong> From SaaS and AI to digital
          manufacturing, the city's tech ecosystem supports interdisciplinary
          AR/VR breakthroughs.
        </>,
        <>
          <strong>Global reach</strong> Firms here serve worldwide using
          cutting-edge technologies like XR, IoT, AI, and AR/VR.
        </>,
        <>
          <strong>Innovative spirit:</strong> A balanced mix of start-ups and
          mature tech companies fosters experimentation across industry use
          cases—automotive, healthcare, education, entertainment, and defense.
        </>,
      ],
    },
    {
      title: "Summary",
      points: [
        <>
          <strong>India's AR/VR sector</strong> is on a steep growth path—with
          VR markets growing 23–35% annually and AR set to hit $248B globally by
          2029.
        </>,
        <>
          <strong>Chennai anchors itself</strong> through strong electronics
          output, industrial adoption, education-driven VR labs, and an
          experienced tech workforce.
        </>,
        <>
          <strong>Manufacturing & training</strong> lead AR/VR use cases,
          supported by HMDs and a thriving ecosystem of firms and startups.
        </>,
      ],
      // desc: "In Chennai, robots don’t just exist in labs — they clean, weld, transport, scan, and heal.",
    },
  ];

  const thenvsNow = [
    {
      category: "XR Labs",
      then: "Industry 4.0, Immersive enterprise XR",
      now: "Fortune 500 clients, digital transformation consultancy",
    },
  ];

  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const accordionRefs = useRef([]);

  useEffect(() => {
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
  const images = [
    {
      src: "/images/Invest-Images/SubPages/real-estate-slide.jpg",
      title: "Real Estate",
      link: "/invest/chennai-real-estate",
    },
    {
      src: "/images/Invest-Images/SubPages/franchise-slide.jpg",
      title: "Franchise",
      link: "/invest/franchise-business-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/startups-slide.jpg",
      title: "Startups",
      link: "/invest/startup-companies-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/renewable-energy-slide.jpg",
      title: "Renewable Energy",
      link: "/invest/solar-companies-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/retirement-slide.jpg",
      title: "Retirement",
      link: "/invest/retirement-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/government-initiatives-slide.jpg",
      title: "Government Initiatives",
      link: "/invest/government-projects-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/formalities-regulations-slide.jpg",
      title: "Formalities and Regulations",
      link: "/invest/law-firms-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/news-slide.jpg",
      title: "News",
      link: "/invest/news-in-chennai",
    },
    {
      src: "/images/Invest-Images/SubPages/events-slide.jpg",
      title: "Invest in Events",
      link: "/invest/chennai-events",
    },
    {
      src: "/images/Invest-Images/SubPages/exhibitions-slide.jpg",
      title: "Exhibitions",
      link: "/invest/exhibitions-in-chennai",
    },
  ];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <>

          <Helmet>
        <title>Retirement in Chennai | Retirement Community Chennai</title>
        <meta
          name="description"
          content="Retirement in Chennai blends comfort, tradition, and wellness, making it the perfect destination for seniors seeking joy and security."
        />
        <link rel="canonical" href="/invest/retirement-in-chennai" />
      </Helmet>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img
            src="/images/Invest-Images/SubPages/retirement-banner.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Retirement</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai"> Invest </Link> -{" "}
              <span href="">Retirement</span>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*----------------Accodimation-Banner----------- */}

      <div className="visitIntroParaSection detailIntro" style={{paddingBottom: "0px"}}>
        <div className="container max-w-7xl mx-auto px-4">
          <div
            className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
          >
            <p>
              Invest &nbsp; in Retirement &nbsp; in Chennai &nbsp; Invest &nbsp;
              in Retirement &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h3>Invest in Retirement in chennai</h3>
            <p>Where Peace, Purpose & Prosperity Meet</p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {imageSections.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                ${
                  index % 2 === 0
                    ? "bg-white whitebgsec"
                    : "bg-[#f7f7f7] colorbgsec"
                } 
                ${
                  index % 3 === 0
                    ? "pattern-a"
                    : index % 3 === 1
                    ? "pattern-b"
                    : "pattern-c"
                }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4  rounded bottomListIcon w-full">
              {section.fintechEvolution.map((tenant, i) => (
                <div key={i}>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4" style={{paddingBottom: "0px"}}>
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        {item.note && (
                          <p className="text-gray-700 italic">{item.note}</p> // ✅ note displayed clearly
                        )}
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                          {item.para.map((point, k) => (
                            <li key={k}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="p-4 space-y-6">
          <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-3">
              Popular Retirement Locations
            </h2>
            <table className="min-w-full border border-gray-300 rounded-lg mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-center border-b w-1/2">Area</th>
                  <th className="py-2 px-4 text-center border-b w-1/2">
                    Why Retire Here
                  </th>
                </tr>
              </thead>
              <tbody>
                {evData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-center">
                      {item.company}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {imageSections2.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                  ${
                    index % 2 === 0
                      ? "bg-white whitebgsec"
                      : "bg-[#f7f7f7] colorbgsec"
                  } 
                  ${
                    index % 3 === 0
                      ? "pattern-a"
                      : index % 3 === 1
                      ? "pattern-b"
                      : "pattern-c"
                  }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
              <h2 className="text-2xl font-bold"> {section.sectionTitle} </h2>
              {/* <p class="mb-4 text-gray-600 text-center mb-10">{section.sectionDesc}</p> */}
              {section.fintechEvolution.map((tenant, i) => (
                <div key={i}>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4" style={{paddingTop: "0px"}}>
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>

                        {item.note && (
                          <p className="text-gray-700 mb-1">{item.note}</p>
                        )}
                        {item.para && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                            {item.para.map((point, k) => (
                              <li key={k}>{point}</li>
                            ))}
                          </ul>
                        )}

                        {item.note2 && (
                          <p className="text-gray-700  mb-1">{item.note2}</p>
                        )}
                        {item.para2 && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                            {item.para2.map((point, k) => (
                              <li key={k}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}

        {imageSections3.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                  ${
                    index % 2 === 0
                      ? "bg-white whitebgsec"
                      : "bg-[#f7f7f7] colorbgsec"
                  } 
                  ${
                    index % 3 === 0
                      ? "pattern-a"
                      : index % 3 === 1
                      ? "pattern-b"
                      : "pattern-c"
                  }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
              <h2 className="text-2xl font-bold"> {section.sectionTitle} </h2>
              {/* <p class="mb-4 text-gray-600 text-center mb-10">{section.sectionDesc}</p> */}
              {section.fintechEvolution.map((tenant, i) => (
                <div key={i}>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4" >
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>

                        {item.note && (
                          <p className="text-gray-700 mb-1">{item.note}</p>
                        )}
                        {item.para && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                            {item.para.map((point, k) => (
                              <li key={k}>{point}</li>
                            ))}
                          </ul>
                        )}

                        {item.note2 && (
                          <p className="text-gray-700  mb-1">{item.note2}</p>
                        )}
                        {item.para2 && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                            {item.para2.map((point, k) => (
                              <li key={k}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}

    

    
      </div>

      <div>
        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>PROPERTY PROSPECTS IN CHENNAI</h4>
              <p>
                Chennai's real estate market offers consistent demand and
                income. By its developed infrastructure, this city market offers
                substantial profits from both business and residential areas.
              </p>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className="ExplorePageSliderImage">
                    <a href={img.link} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={img.src}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        {/* Gradient Background */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">
                          {img.title}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
