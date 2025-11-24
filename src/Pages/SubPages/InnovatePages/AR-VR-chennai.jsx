import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { desc } from "framer-motion/client";
import InnovatePagesSlider from "./InnovatePageSlider";
import { Helmet } from "react-helmet-async";

export default function ARVRchennai() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageSections = [
    {
      sectionTitle: "Real-World Use, Not Just Whitepapers",
      sectionDesc:
        "Unlike many cities chasing crypto headlines, Chennai is focused on blockchain with purpose — solving real public problems and building lasting platforms.",

      fintechEvolution: [
        {
          points: [
            {
              title: "India-Wide AR/VR Market Overview",
              para: [
                <>
                  {" "}
                  India’s VR market was estimated at USD 1.41 billion in 2024
                  and is expected to skyrocket to USD 29.4 billion by 2034—a
                  CAGR of ~35.5%{" "}
                </>,
                <>
                  Another analyst reports a 2024 VR figure of USD 524.7 million
                  with growth to USD 3.51 billion by 2033 (CAGR 23.4%){" "}
                </>,
                <>
                  The combined India AR/VR market (2025‑2029) is projected to
                  grow robustly, bolstered by government initiatives and
                  industry adoption{" "}
                </>,
                <>
                  Globally, AR/VR reached USD 27.6 billion in 2021, expected to
                  hit USD 856.2 billion by 2031 (CAGR 41.1%); in India, from
                  USD 1.69 billion in 2021 to USD 9.28 billion by 2028 (CAGR
                  28%){" "}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/India-wide-AR-VR-market-overview.svg",
              altText: "ar vr market",
            },
            {
              title: "Chennai-Specific AR/VR Trends & Examples",
              note: "While city-level market numbers are rare, Chennai is emerging as a strong regional hub:",
              para: [
                <>
                  {" "}
                  In July 2022, Meynikara Solutions (Chennai) launched Tamil
                  Nadu’s first VR labs, Meta Kalvi, across five public schools—a
                  landmark steps toward immersive education in the region{" "}
                </>,
                <>
                  Multiple manufacturing-focused AR/VR firms in Chennai
                  (XR Labs, Yaksha, VisionLab) are integrating immersive
                  solutions for industrial training, safety, predictive
                  maintenance, and efficiency enhancement{" "}
                </>,
                <>
                  Head-Mounted Displays (HMDs) dominate industrial use
                  cases—accounting for ~60% of AR/VR device revenues in
                  manufacturing (2022), with handheld AR devices growing fastest
                  at a 29% CAGR to 2030{" "}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/chennai-specific-AR-VR-trends-examples.svg",
              altText: "ar vr trends",
            },
            {
              title: "Why Chennai Leads in AR/VR Adoption",
              note: "While city-level market numbers are rare, Chennai is emerging as a strong regional hub:",
              para: [
                <>
                  {" "}
                  In July 2022, Meynikara Solutions (Chennai) launched Tamil
                  Nadu’s first VR labs, Meta Kalvi, across five public schools—a
                  landmark steps toward immersive education in the region{" "}
                </>,
                <>
                  Multiple manufacturing-focused AR/VR firms in Chennai
                  (XR Labs, Yaksha, VisionLab) are integrating immersive
                  solutions for industrial training, safety, predictive
                  maintenance, and efficiency enhancement{" "}
                </>,
                <>
                  Head-Mounted Displays (HMDs) dominate industrial use
                  cases—accounting for ~60% of AR/VR device revenues in
                  manufacturing (2022), with handheld AR devices growing fastest
                  at a 29% CAGR to 2030{" "}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Why-chennai-lead-in-AR-VR-adoption.svg",
              altText: "ar vr adoption",
            },
          ],
        },
      ],
    },
  ];

  const evData = [
    {
      company: "India VR Market (2024)",
      focus: "Market Size",
      highlights: "USD 1.41 billion – USD 524.7 million (varied estimates)",
    },
    {
      company: "India VR Market CAGR (2025–2030)",
      focus: "Growth Rate",
      highlights: "23–35% across different forecasts",
    },
    {
      company: "Projected India VR Market (2033–34)",
      focus: "Future Market Size",
      highlights: "USD 3.5 billion – USD 29 billion",
    },
    {
      company: "India AR/VR Market (2021–2028)",
      focus: "Market Trajectory",
      highlights: "USD 1.69 billion → USD 9.28 billion (CAGR ~28%)",
    },
    {
      company: "Global AR Market (2024–2029)",
      focus: "Global Expansion",
      highlights: "USD 42.5 billion → USD 248 billion (CAGR ~42%)",
    },
    {
      company: "Device Breakdown in Manufacturing",
      focus: "Segment Analysis",
      highlights: "HMDs ~60% revenue share, handheld AR ~29% CAGR through 2030",
    },
    {
      company: "VR Labs in Chennai Schools",
      focus: "EdTech Adoption",
      highlights:
        "5 schools under Tamil Nadu's first VR labs initiative (Meta Kalvi)",
    },
    {
      company: "Chennai Electronics Export Share",
      focus: "Export Contribution",
      highlights: "~45% of India's electronics exports (2010–11)",
    },
  ];

  const imageSections2 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

    {
      sectionTitle: "Featured AR/VR Innovators in Chennai",
      sectionDesc: "Two Decades of Learning Reinvented Through Technology",

      fintechEvolution: [
        {
          points: [
            {
              title: "XR Labs",
              para: [
                <>
                  A leader in Industry 4.0 consulting, XR Labs delivers
                  immersive AR/VR/XR tech to global enterprises, serving major
                  Fortune 500 clients. Their solutions enhance industrial
                  operations, bridging real and virtual realms.{" "}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/XR-Labs.svg",
              altText: "",
            },
            {
              title: "AATRAL",
              para: [
                <>
                  Combining XR and AI, AATRAL crafts enterprise-grade AR/VR apps
                  that boost training, decision-making, and productivity. Ideal
                  for businesses seeking immersive interactive solutions.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/AATRAL.svg",
              altText: "",
            },
            {
              title: "Yaksha Visual Technologies",
              para: [
                <>
                  Since 2015, Yaksha has specialized in AR/VR/MR for sectors
                  like automotive, manufacturing & AEC. Their 3D industrial
                  animations provide visually impactful narratives.{" "}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Yaksha-Visual-Technologies.svg",
              altText: "",
            },
            {
              title: "VisionLab AI Technologies",
              para: [
                <>
                  A boutique studio (2–9 people) excelling in AR/VR for
                  industrial and business integrations. Their focus on immersive
                  tech aids clients in experiencing products interactively.{" "}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/VisionLab-AI-Technologies.svg",
              altText: "",
            },
          ],
        },
      ],
    },
  ];

  const imageSections3 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

    {
      sectionTitle: "Emerging & Cutting‑Edge AR/VR Startups",
      sectionDesc: "Two Decades of Learning Reinvented Through Technology",

      fintechEvolution: [
        {
          points: [
            {
              title: "MirrAR",
              para: [
                <>
                  An AR SaaS platform enabling virtual try-ons for jewelry,
                  targeting the e‑commerce and fashion industries. Notably
                  listed among the top 12 AR startups in Chennai.{" "}
                  {/* <a
                    href="https://beststartup.in/12-chennai-based-augmented-reality-companies-the-most-innovative-augmented-reality-companies/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-voilet-500 underline"
                  >
                    granoopixr.com+2beststartup.in+2way2smile.com+2
                  </a>{" "} */}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/MirrAR.svg",
              altText: "",
            },
            {
              title: "Skcript",
              para: [
                <>
                  A versatile deep‑tech company working in AR/VR, NLP,
                  industrial automation, and quantum computing—demonstrating
                  Chennai’s multidisciplinary tech culture.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Skcript.svg",
              altText: "",
            },
            {
              title: "Seehash",
              para: [
                <>
                  Specializes in AR/VR consumer apps and ERP integrations.
                  Strong presence across mobile and web platforms.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Seehash.svg",
              altText: "",
            },
            {
              title: "Crion Technologies",
              para: [
                <>
                  Focuses on 3D, CAD, web3D, and VR/AR for immersive web
                  experiences—perfect for tech-savvy digital storytellers.{" "}
                  {/* <a
                    href="https://beststartup.in/12-chennai-based-augmented-reality-companies-the-most-innovative-augmented-reality-companies/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-voilet-500 underline"
                  >
                    beststartup.in
                  </a> */}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Crion-Technologies.svg",
              altText: "",
            },
            {
              title: "FocuzAR",
              para: [
                <>
                  One of India’s top AR/VR/IoT firms with over 8 years’
                  experience. Their products (Xassist, Xwall, Hubibo) enhance
                  retail, training, and industrial processes through immersive
                  displays and real-time data integration{" "}
                  {/* <a
                    href="https://focuzar.com/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-voilet-500 underline"
                  >
                    goodfirms.co+6focuzar.com+6myingage.com+6
                  </a> */}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/FocuzAR.svg",
              altText: "",
            },

            {
              title: "Swevens",
              para: [
                <>
                  Dual-headquartered in Chennai and Cologne, they excel in VR
                  training simulations, AR live assistance, medical and defence
                  applications, as well as hospitality and automotive XR labs.{" "}
                  {/* <a
                    href="https://www.swevens.co/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-voilet-500 underline"
                  >
                    swevens.co
                  </a> */}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Swevens.svg",
              altText: "",
            },

            {
              title: "Neur Industries (Neur XR Studios)",
              para: [
                <>
                  Their XR studios build AR, VR, and MR solutions, merging
                  engineering with experiential design and even exploring
                  cybernetic enhancements.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Neur-industry.svg",
              altText: "",
            },
            {
              title: "Granoopixr",
              para: [
                <>
                  Delivers AR/VR/MR solutions across sectors such as
                  manufacturing, healthcare, automotive, and education—part of
                  Chennai’s tech evolution.{" "}
                  {/* <a
                    href="https://granoopixr.com/leading-ar-vr-firms-in-chennai?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-voilet-500 underline"
                  >
                    granoopixr.com+1jsrcollege.co.in+1
                  </a> */}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Granoopixr.svg",
              altText: "",
            },
            {
              title: "myingage",
              para: [
                <>
                  Focused on AR/VR, and IoT with a holistic team—storyboarding,
                  3D design, Unity/Unreal development—for training, learning,
                  and industrial workflows.{" "}
                  {/* <a
                    href="https://www.myingage.com/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-voilet-500 underline"
                  >
                    myingage.com
                  </a> */}
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/myingage.svg",
              altText: "",
            },
          ],
        },
      ],
    },
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
  return (
    <>
      <Helmet>
        <title>AR VR Companies in Chennai | AR/VR Firms in Chennai</title>
        <meta
          name="description"
          content="Leading AR VR companies in Chennai deliver advanced virtual reality and augmented solutions powering industries, startups, and global enterprises alike."
        />
        <link rel="canonical" href="/innovate/ar-vr-companies-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Innovate-Images/SubPages/Augmented-Reality-Virtual-Reality-thum-banner.jpg"
            alt="ar vr companies in chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>AR/VR in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate-chennai"> Innovate </Link> -{" "}
                <a href="">AR/VR in Chennai </a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection detailIntro">
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
                Innovate &nbsp; in Chennai &nbsp; Innovate &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>AR VR Chennai</h3>
              <p>
                Chennai’s AR/VR ecosystem is rapidly growing, driven by
                industrial innovation, immersive education, and cutting-edge
                enterprise solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          {imageSections.map((section, index) => (
            <section
              className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
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
                      <div key={j} className="clcboxItemss flex mb-4">
                        <div className="clcboxIImg">
                          <img src={item.imgs} alt={item.altText} />
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
                Top EduTech Startups from Chennai
              </h2>
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left border-b">Company</th>
                    <th className="py-2 px-4 text-left border-b">Focus Area</th>
                    <th className="py-2 px-4 text-left border-b">Highlights</th>
                  </tr>
                </thead>
                <tbody>
                  {evData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{item.company}</td>
                      <td className="py-2 px-4 border-b">{item.focus}</td>
                      <td className="py-2 px-4 border-b">{item.highlights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {imageSections2.map((section, index) => (
            <section
              className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
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
                      <div key={j} className="clcboxItemss flex mb-4">
                        <div className="clcboxIImg">
                          <img src={item.imgs} alt={item.altText} />
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
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
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
                      <div key={j} className="clcboxItemss flex mb-4">
                        <div className="clcboxIImg">
                          <img src={item.imgs} alt={item.altText} />
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

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Featured AR/VR Innovators in Chennai
            </h2>
            {datard.map((section, index) => (
              <div
                key={index}
                className="card rounded-2xl p-4 mb-4 shadow bg-white"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {section.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                {section.desc && (
                  <p className="text-gray-600 italic mt-2">{section.desc}</p>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 space-y-6">
            <div className="overflow-x-auto">
              {/* <h2 className="text-2xl font-bold mb-3">Then vs Now: Chennai’s Learning Revolution (2005 vs 2025)</h2> */}
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead className="bg-gray-100">
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Company</th>
                    <th className="py-2 px-4 text-left">Expertise Areas</th>
                    <th className="py-2 px-4 text-left">
                      Highlighted Offerings
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {thenvsNow.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4">{item.category}</td>
                      <td className="py-2 px-4">{item.then}</td>
                      <td className="py-2 px-4">{item.now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/*--------------- Explore More Chennai----------------- */}
        <InnovatePagesSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
