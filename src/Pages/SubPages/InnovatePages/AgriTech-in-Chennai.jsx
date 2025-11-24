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
import InnovateSlider from "../../../Components/InnovateSldier";
import InnovatePagesSlider from "./InnovatePageSlider";
import { Helmet } from "react-helmet-async";

export default function AgriTechinChennai() {
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
              title: "Why Chennai Is Crucial to India’s AgriTech Ecosystem",
              para: [
                <>
                  Deep pool of software engineers and data scientists in
                  precision agriculture
                </>,
                <>
                  Presence of agri-focused R&D labs, academic institutions, and
                  IoT makers
                </>,
                <>
                  Strong logistics & cold-chain infra to support farm-to-city
                  movement
                </>,
                <>
                  Tamil Nadu Govt’s push for smart farming schemes and start-up
                  incubation
                </>,
                <>
                  Home to AgriTech companies impacting over 10 million farmers
                  across India
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Why Chennai Is Crucial to India’s AgriTech Ecosystem.svg",
              altText: "agri tech companies in chennai",
            },
          ],
        },
      ],
    },
  ];

  const evData = [
    {
      company: "AgroStar (Chennai branch)",
      focus: "Farmer advisory + inputs",
      highlights: "Serving 5M+ farmers via mobile",
    },
    {
      company: "KisanHub",
      focus: "Crop intelligence",
      highlights: "Satellite + data dashboards for supply chain forecasting",
    },
    {
      company: "FarmAgain",
      focus: "Precision farming",
      highlights:
        "IoT devices + mobile analytics to track soil, water, climate",
    },
    {
      company: "RuralBasket",
      focus: "Direct-to-consumer",
      highlights: "Farm produce from TN villages delivered to urban buyers",
    },
    {
      company: "Triton Foodworks",
      focus: "Hydroponics",
      highlights: "Tech-enabled sustainable farming in urban setups",
    },
    {
      company: "Aibono",
      focus: "AI + Yield Prediction",
      highlights: "Decision science tools for high-value crop planning",
    },
    {
      company: "Nanopix",
      focus: "Image-based grading",
      highlights: "Camera vision + AI for quality checks of produce",
    },
    {
      company: "Ecozen (regional presence)",
      focus: "Cold-chain & solar infra",
      highlights: "Solar-powered cold storage, smart pump controllers",
    },
    {
      company: "FarmBot India (R&D in Chennai)",
      focus: "Automation",
      highlights: "Prototype robotics for small farms and vertical farming",
    },
    {
      company: "AgniKul Cosmos (IIT-M)",
      focus: "Dual-use AI",
      highlights: "Originally space-tech, now modeling for agri satellite data",
    },
  ];

  const FastFacts = [
    {
      company: "IoT & Sensors",
      speciality:
        "Devices to track soil moisture, pH, nutrient flow built locally",
    },
    {
      company: "AI/ML for Farming",
      speciality:
        "Predictive models for yield, pest risk, and price volatility",
    },
    {
      company: "Supply Chain Tech",
      speciality:
        "Cold-chain optimization, route efficiency via Chennai logistics tech",
    },
    {
      company: "Farmer FinTech",
      speciality: "Mobile credit scoring, microloans, crop insurance tools",
    },
    {
      company: "E-commerce for Agri",
      speciality: "Apps connecting rural producers directly to urban customers",
    },
  ];

  const FastStats = [
    { company: "AgriTech startups in Chennai", speciality: "40+" },
    {
      company: "Farmers indirectly served by Chennai-based platforms",
      speciality: "10M+",
    },
    { company: "Crops covered by AI analytics tools", speciality: "35+" },
    {
      company: "Govt investment in Agri Digital Infra",
      speciality: "₹800+ Cr",
    },
    {
      company: "Cold-storage & logistics tech companies with agri focus",
      speciality: "50+",
    },
  ];

  const FastStats1 = [
    {
      company: "Kidobotikz",
      speciality: "Robotics kits + training for kids & teens",
    },
    {
      company: "RoboClub – IIT Madras",
      speciality: "Annual RoboFest and national-level workshops",
    },
    {
      company: "Skill-Lync – Chennai HQ",
      speciality: "Mechatronics & embedded systems courses",
    },
    {
      company: "Robotix India Expo (Chennai edition)",
      speciality: "Annual robotics showcase event for India South",
    },
  ];

  const datard = [
    {
      title: "Academic & Institutional Support",
      points: [
        <>
          <strong>IIT Madras</strong> Working on drones, satellite mapping, and
          smart irrigation systems{" "}
        </>,
        <>
          <strong>TNAU (Tamil Nadu Agricultural University)</strong>{" "}
          Collaborates with Chennai tech firms for pilot studies
        </>,
        <>
          <strong>IIT-M Incubation Cell</strong> Hosts startups like AgniKul,
          FarmAgain, AI agri-models
        </>,
        <>
          <strong>Tamil Nadu e-Governance Agency (TNeGA)</strong> Using
          Chennai-built dashboards for farm-level data
        </>,
      ],
    },
  ];

  const CuttingEdge = [
    {
      title: "Cutting-Edge AgriTech Trends from Chennai",
      points: [
        <>
          <strong>Smartphone-based crop advisory</strong> in Tamil with voice
          bots
        </>,
        <>
          <strong> Satellite-linked irrigation management</strong> via mobile
          apps
        </>,
        <>
          <strong>AI-led demand forecasting</strong> to reduce food wastage
        </>,
        <>
          <strong>Urban farming tech</strong> (hydroponics, vertical towers) for
          Chennai’s city limits
        </>,
        <>
          <strong>Agri NFTs and blockchain pilots</strong> (traceability +
          produce ownership)
        </>,
      ],
    },
    {
      title: "What You Can Add to Super Chennai",
      points: [
        <>
          <strong>Interactive AgriTech Directory</strong> (filter by tech,
          impact, district){" "}
        </>,
        <>
          <strong>Founder Explainer Videos</strong> from Chennai-based
          innovators
        </>,
        <>
          <strong>Demo Lab Zone</strong> Show IoT sensors, irrigation models,
          dashboards
        </>,
        <>
          <strong>State-Farmer-Tech Map</strong> Connect Chennai tech to rural
          Tamil Nadu
        </>,
        <>
          <strong>Innovation Timeline</strong> Track growth from basic sensors
          to AI-forecasting
        </>,
      ],
    },
  ];

  const imageSections2 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

    {
      sectionTitle: "Timeline: Chennai’s AgriTech Growth (2008–2025)",
      sectionDesc: "From Farm-to-Code to Smart Agriculture Ecosystem",

      fintechEvolution: [
        {
          points: [
            // {
            //   title: "2005 – The Seeds of Change",
            //   para: [
            //     <>
            //       IIT Madras & Anna University introduce early research in
            //       e-learning platforms and content digitization.
            //     </>,
            //     <>
            //       Chennai colleges start exploring LMS systems and campus
            //       intranet teaching.
            //     </>,
            //   ],
            //   imgs: "/images/Innovate-Images/SubPages/Icons/Business-Permits.svg",
            // },
            {
              title: "2008 – Early Experiments Begin",
              para: [
                <>
                  IIT Madras and TNAU explore remote sensing and climate mapping
                  for agriculture.
                </>,
                <>
                  Basic Excel-based farm data models used in academic projects.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2008 – Early Experiments Begin.svg",
              altText: "experiments chennai",
            },
            {
              title: "2011 – Mobile Advisory Pilots",
              para: [
                <>
                  First pilot programs for SMS-based crop advisory in Tamil Nadu
                  villages via Chennai tech partners.
                </>,
                <>
                  Feature phones used to send fertilizer and irrigation alerts
                  to farmers.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2011 – Mobile Advisory Pilots.svg",
              altText: "mobile chennai",
            },
            {
              title: "2013 – Rise of Agri-Focused IoT Prototypes",
              para: [
                <>
                  Chennai startups begin building low-cost sensors for soil
                  moisture, weather, and pest prediction.
                </>,
                <>Agri automation discussed at Tech Sparks Chennai events.</>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2013 – Rise of Agri-Focused IoT Prototypes.svg",
              altText: "iot chennai",
            },
            {
              title: "2015 – First Gen of Agri Startups Launched",
              para: [
                <>
                  FarmAgain and Aibono offer IoT + analytics solutions to farms
                  in Tamil Nadu.
                </>,
                <>Hydroponics concepts showcased at local tech expos.</>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2015 – First Gen of Agri Startups Launched.svg",
              altText: "agriculture startup",
            },
            {
              title: "2016 – Supply Chain Innovation Starts",
              para: [
                <>
                  Local Chennai firms build tech to track and optimize fresh
                  produce delivery to city markets.
                </>,
                <>
                  Cold-chain startups collaborate with smallholder farmers for
                  reducing wastage.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2016 – Supply Chain Innovation Starts.svg",
              altText: "supply chain innovation",
            },
            {
              title: "2017 – IIT Madras Boosts AgriTech R&D",
              para: [
                <>
                  Projects on drone spraying, AI-based plant disease detection,
                  and satellite-linked irrigation launched.
                </>,
                <>
                  IIT-M’s Incubation Cell begins supporting agri-focused tech
                  startups.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2017 – IIT Madras Boosts AgriTech R&D.svg",
              altText: "agri tech companies in chennai",
            },
            {
              title: "2019 – AI in Agriculture Gains Momentum",
              para: [
                <>
                  Chennai startups develop yield prediction models for tomato,
                  banana, and rice.
                </>,
                <>
                  Camera vision tools for quality grading of produce launched
                  (e.g., Nanopix).
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2019 – AI in Agriculture Gains Momentum.svg",
              altText: "chennai agri tech",
            },
            {
              title: "2020 – COVID Pushes Digital Agriculture",
              para: [
                <>
                  High demand for direct-to-consumer platforms like RuralBasket
                  and UzhavarBumi.
                </>,
                <>
                  Farmers embrace mobile-based trading and advisory apps for
                  input access and market linkage.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2020 – COVID Pushes Digital Agriculture.svg",
              altText: "digital agriculture",
            },
            {
              title: "2021 – Tamil Nadu Smart Agri Mission Launched",
              para: [
                <>
                  Chennai tech companies build dashboards, analytics tools, and
                  farmer record systems for the government.
                </>,
                <>
                  TNeGA partners with private startups for agri e-governance
                  initiatives.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2021 – Tamil Nadu Smart Agri Mission Launched.svg",
              altText: "smart agri mission",
            },
            {
              title: "2022 – Rise of Farm FinTech",
              para: [
                <>
                  Credit scoring tools, digital wallets, and agri-insurance
                  startups begin operations in Chennai.
                </>,
                <>
                  Farmer lending models launched in districts via mobile KYC and
                  fintech integrations.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2022 – Rise of Farm FinTech.svg",
              altText: "fintech companies chennai",
            },
            {
              title: "2023 – Urban Farming and Hydroponics Scale Up",
              para: [
                <>
                  Chennai startups like Triton Foodworks set up tech-enabled
                  greenhouses within city limits.
                </>,
                <>
                  Hydroponic kits and training offered to schools and community
                  groups for urban agriculture.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2023 – Urban Farming and Hydroponics Scale Up.svg",
              altText: "urban farming chennai",
            },
            {
              title: "2024 – Precision Farming Reaches Ground Level",
              para: [
                <>
                  AI dashboards predicting pest cycles, rainfall windows, and
                  market prices used by 1L+ Tamil Nadu farmers.
                </>,
                <>
                  Tamil voice AI assistants tested in Chennai and surrounding
                  farming regions.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2024 – Precision Farming Reaches Ground Level.svg",
              altText: "farming chennai",
            },
            {
              title: "2025 – Chennai Declared AgriTech R&D Powerhouse",
              para: [
                <>
                  Government of India partners with IIT Madras and 20+ startups
                  to build a National Agri AI Framework.
                </>,
                <>
                  Chennai startups begin servicing farmers across 15+ Indian
                  states with AI + IoT solutions.
                </>,
                <>
                  Launch of “AgriVerse” – a virtual farming simulator platform
                  for training and prediction.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2025 – Chennai Declared AgriTech R&D Powerhouse.svg",
              altText: "chennai agriculture",
            },
            {
              title: "Future Ahead (Post-2025 Vision):",
              para: [
                <>AI-based “Digital Farmer Twin” models</>,
                <>Satellite crop scoring integrated with insurance and MSP</>,
                <>Regenerative agri practices backed by Chennai-built tech </>,
                <>Farm-to-fork blockchain traceability </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ahead (Post-2025 Vision).svg",
              altText: "ai future",
            },
          ],
        },
      ],
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
        <title>
          Agri Tech Companies in Chennai : Agriculture Meets Modern Technology
        </title>
        <meta
          name="description"
          content="Agri tech companies in Chennai blend technology with agriculture, offering supply chain tools, precision farming, and AI-driven solutions for rural growth."
        />
        <link rel="canonical" href="/innovate/agri-tech-companies-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Innovate-Images/SubPages/Education-Tech-banner.jpg"
            alt="edutech chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>AgriTech in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate-chennai"> Innovate </Link> -{" "}
                <a href="">AgriTech in Chennai </a>
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
              <h3>Where Traditional Agriculture Meets Modern Intelligence</h3>
              <p>
                {" "}
                Though Chennai isn’t an agricultural hub by geography, it has
                emerged as a tech nerve center for AgriTech innovation —
                offering AI, IoT, satellite analytics, supply chain tools, and
                farm fintech that power Tamil Nadu’s and India’s farmlands.
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
                Top AgriTech Startups & Companies in Chennai
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              {" "}
              What Chennai Brings to the Field
            </h2>
            {/* <p className="mb-4 text-gray-600 text-center mb-10">  These companies have made Chennai their technology fortress:  </p> */}
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Sector
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Chennai’s Edge
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {FastFacts.map((giant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.company}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.speciality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">  Academic-Startup Collaboration  </h2> */}
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              AgriTech in Numbers (2024-2026)
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {FastStats.map((giant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.company}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.speciality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">  Academic-Startup Collaboration  </h2> */}
            {CuttingEdge.map((section, index) => (
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

          {/* <div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"></h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Focus</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {FastStats1.map((giant, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.company}</td>
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}

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
                <p className="mb-4 text-gray-600 text-center mb-10">
                  {section.sectionDesc}
                </p>
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
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        {/* <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Chennai’s tech pulse</h4>
              <p>
                Chennai's software development industry is drawing individuals
                from all over the world for work and business. With a
                knowledgeable staff, it positions itself as a major center for a
                range of IT solutions.
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
        </div> */}

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
