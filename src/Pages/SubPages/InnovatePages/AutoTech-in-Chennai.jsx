import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import InnovatePagesSlider from "./InnovatePageSlider";
import { Helmet } from "react-helmet-async";
import { Heading1 } from "lucide-react";

export default function AutoTechinChennai() {
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
              title: "Why Chennai Leads in AutoTech",
              para: [
                "3rd largest automotive hub in Asia",
                "Produces 30% of India’s car exports",
                "Hosts 7+ global auto OEMs (Hyundai, Ford, Renault-Nissan, BMW, Daimler)",
                "Massive investments in Industry 4.0, EV, connected vehicles, ADAS",
                "Strong talent base in Mechatronics, AI, IoT, and robotics",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Why Chennai Leads in AutoTech.svg",

              altText: "automobile in chennai",
            },
          ],
        },
      ],
    },
  ];

  const SmartChennaiinAction = [
    {
      company: "Hyundai Motor India",
      speciality: "Smart manufacturing, ADAS R&D, EV tech",
    },
    {
      company: "Renault-Nissan Tech Centre India (RNTBCI)",
      speciality: "Auto software, digital twin, connected car",
    },
    {
      company: "Ashok Leyland (Hinduja Group)",
      speciality: "Electric trucks, modular platforms, AI diagnostics",
    },
    {
      company: "TVS Motors",
      speciality: "Electric two-wheelers, cloud-based service platforms",
    },
    {
      company: "Bosch Global Software Tech",
      speciality: "Automotive AI, mobility analytics",
    },
    {
      company: "Mahindra Research Valley",
      speciality: "EV batteries, lightweight materials, autonomous mobility",
    },
    {
      company: "Valeo India R&D",
      speciality: "ADAS systems, vision sensors, smart wipers",
    },
    {
      company: "Wabco/ZF Commercial Vehicle Tech",
      speciality: "Autonomous braking, fleet AI, Telematics",
    },
    {
      company: "Daimler India Commercial Vehicles",
      speciality: "Smart logistics trucks, factory automation",
    },
    {
      company: "Ford Global Business Services",
      speciality: "Data-driven design, cloud integration",
    },
  ];

  const FastFacts = [
    {
      company: "ePlane Company (IIT-M)",
      speciality: "Electric flying taxis (urban air mobility)",
    },
    {
      company: "Raptee Energy",
      speciality: "Premium electric motorcycles built in Chennai",
    },
    {
      company: "WayCool (via Censa Tech)",
      speciality: "AI-powered logistics fleet optimization",
    },
    {
      company: "E-Motorad (EM)",
      speciality: "IoT-enabled e-bikes for last-mile delivery",
    },
    {
      company: "Micelio Mobility",
      speciality: "EV ecosystem fund with Chennai presence",
    },
    {
      company: "Intelligent Mobility Incubator (IIT-M)",
      speciality: "Hosts EV, AI, and battery tech startups",
    },
  ];

  const data = [
    {
      title:
        "IIT Madras – Centre for Battery Engineering and Electric Vehicles (CBEEV)",
      points: [
        "Research in solid-state batteries, vehicle electrification, and intelligent charging",
      ],
    },
    {
      title: "Hyundai Innovation Lab – OMR",
      points: [
        "Prototyping connected car features, AI diagnostics, HMI (Human-Machine Interface)",
      ],
    },
    {
      title: "Renault Nissan Digital Hub – Mahindra World City",
      points: ["3,000+ engineers working on software-defined vehicles"],
    },
    {
      title: " TIDCO’s Tamil Nadu Electric Vehicle Park – Pillaipakkam",
      points: [
        "Hosts EV and battery manufacturers, chargers, and logistics tech",
      ],
    },
  ];

  const FastStats = [
    { company: "Cars produced annually", speciality: "1.5 million" },
    { company: "AutoTech startups", speciality: "50+" },
    { company: "R&D centers (auto-focused)", speciality: "25+" },
    { company: "EV-focused units", speciality: "15+" },
    {
      company: "ADAS and Connected Mobility patents (2023",
      speciality: "300+",
    },
  ];

  const HealthTech = [
    {
      company: "OMR – Taramani to Siruseri",
      speciality: "Auto R&D, Bosch, Hyundai Labs, EV SaaS",
    },
    {
      company: "Maraimalai Nagar – Mahindra World City",
      speciality: "Renault-Nissan, Ford, Mahindra Valley",
    },
    {
      company: "Ambattur – Sriperumbudur Belt",
      speciality: "Industrial automation, auto electronics",
    },
    {
      company: "Guindy – Saidapet",
      speciality: "Startup co-working & auto SaaS companies",
    },
    {
      company: "IIT Madras Zone",
      speciality: "Battery research, vehicle AI, mobility incubators",
    },
  ];

  const imageSections2 = [
    {
      fintechEvolution: [
        {
          points: [
            {
              title: "The Future: What's Next for Chennai AutoTech?",
              para: [
                <> Battery recycling and second-life tech</>,
                <> 5G-connected vehicles for city transport</>,
                <> AI-driven fleet management + logistics prediction</>,
                <> Electric trucks for ports & logistics corridors</>,
                <> Urban air mobility (UAM) testing zones</>,
              ],
              note2:
                "From making cars to making them smart — Chennai is the garage of India’s automotive future.",
              imgs: "/images/Innovate-Images/SubPages/Icons/The Future-What's Next for Chennai AutoTech.svg",
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
      sectionTitle: "Chennai’s AutoTech Journey: Timeline of Innovation",
      sectionDesc: "From Assembly Lines to Autonomous Tech",

      fintechEvolution: [
        {
          points: [
            {
              title: "1950s–1980s: Birth of Auto Manufacturing in Chennai",
              para: [
                <>
                  <strong>Foundations Built</strong>
                </>,
                "Ashok Leyland sets up in Ennore (1955) — commercial vehicles boom begins",
                " Integral Coach Factory (ICF) in Perambur drives transport tech",
                "TVS Motor and Royal Enfield (Madras Motors) scale two-wheeler manufacturing",
                "Chennai becomes known as a skilled industrial workforce hub",
                <>
                  <strong>Impact:</strong> Chennai lays the foundation for
                  India's auto ecosystem
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Business-Permits.svg",
              altText: "",
            },
            {
              title: "1996–2005: Global Players Enter the Scene",
              para: [
                <>
                  <strong>Industrial Expansion Era</strong>
                </>,
                "Hyundai Motor India sets up its Sriperumbudur plant (1996)",
                "Ford and Daimler set up large manufacturing hubs",
                "Chennai earns the title “Detroit of India”",
                "Automotive engineering degrees introduced in Anna University, MIT",
                <>
                  <strong>Impact:</strong> The region becomes a key export hub
                  for global OEMs
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/1996–2005-Global Players Enter the Scene.svg",
              altText: "global manufacturing",
            },
            {
              title: "2006–2012: Start of Smart Manufacturing & Auto Software",
              para: [
                <>
                  <strong>Digitization Begins</strong>
                </>,
                "Auto software R&D units of Renault-Nissan, Bosch, Valeo, Mahindra established",
                "Mahindra Research Valley opens for advanced vehicle design",
                "Focus on lightweight materials, digital twins, and infotainment systems",
                "IIT-M and SRM start projects on early EV architecture and automotive sensors",
                <>
                  <strong>Impact:</strong> Chennai transitions from
                  factory-based to tech-driven production
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2006–2012-Start of Smart Manufacturing & Auto Software.svg",
              altText: "manufacturing chennai",
            },
            {
              title: "2013–2018: Automation, AI & Telematics Expand",
              para: [
                <>
                  <strong>AutoTech 1.0 Takes Shape</strong>
                </>,
                "WABCO/ZF, Valeo, and Bosch start ADAS and sensor R&D in Chennai",
                "Fleet telematics, diagnostics, and vehicle health monitoring gain traction",
                "Ashok Leyland explores electric commercial vehicles (Circuit Bus launch)",
                "IIT-M Mobility Labs focus on predictive maintenance and EV control units",
                <>
                  <strong>Impact:</strong> Chennai starts becoming a brain hub,
                  not just a build hub
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2013–2018-Automation, AI & Telematics Expand.svg",
              altText: "telematics chennai",
            },
            {
              title: "2019–2021: Electric Vehicle & Battery Boom Begins",
              para: [
                <>
                  <strong> EV Acceleration Phase</strong>
                </>,
                "TIDCO announces EV Park near Chennai – 300+ acres for e-mobility",
                "Raptee Energy founded – Chennai’s own electric motorcycle startup",
                "IIT-M launches Centre for Battery Engineering & EVs (CBEEV)",
                "OEMs begin retrofitting EV lines – Mahindra, Hyundai, and Ashok Leyland lead",
                <>
                  <strong>Impact:</strong> EV infrastructure and battery
                  innovation ecosystem takes off
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2019–2021-Electric Vehicle & Battery Boom Begins.svg",
              altText: "electric vehicles",
            },
            {
              title: "2022–2024: Chennai Emerges as AutoTech R&D Capital",
              para: [
                <>
                  <strong>Software-Defined Vehicle Era</strong>
                </>,
                "Renault-Nissan Digital Hub works on connected vehicle stacks",
                "TVS integrates cloud-first service logs & predictive maintenance AI",
                "Bosch, Mahindra, and Valeo push driver-assist, Lidar, HMI systems",
                "ePlane Company develops flying taxi prototypes (Urban Air Mobility)",
                "Hyundai R&D Centre focuses on vehicle-to-everything (V2X) technology",
                <>
                  <strong>Impact:</strong> Chennai becomes a global R&D node for
                  future mobility
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2022–2024-Chennai Emerges as AutoTech R&D Capital.svg",
              altText: "automobile chennai",
            },
            {
              title:
                "2025 & Beyond: Chennai Leads India’s AutoTech Renaissance",
              para: [
                <>
                  <strong>Next-Gen Mobility Begins</strong>
                </>,
                "Expansion of ADAS, Autonomous Driving trials in gated areas",
                "Advanced battery R&D: solid-state, recycling, and thermal management",
                "EV logistics corridors from Chennai port to Sriperumbudur",
                "AI-first diagnostics, predictive supply chain, & mobility-as-a-service (MaaS)",
                "Urban air mobility zones explored near Perungudi, IIT-M Tech Park",
                <>
                  <strong>Expected Impact:</strong> Chennai becomes the mobility
                  innovation capital of India
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2025 & Beyond-Chennai Leads India’s AutoTech Renaissance.svg",
              altText: "saas chennai",
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
        <title>Auto Tech Chennai : Growing Automobile Industries</title>
        <meta
          name="description"
          content="Explore Auto Tech Chennai, where global manufacturers and innovators are redefining the auto industry with EVs, automation, and digital transformation."
        />
        <link rel="canonical" href="/innovate/autotech-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Innovate-Images/SubPages/Automotive-Tech-banner.jpg"
            alt="auto tech chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>AutoTech in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate-chennai"> Innovate </Link> -{" "}
                <a href="">AutoTech in Chennai </a>
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
              <h1>
             Auto Tech Chennai
              </h1>
              <p>
                Chennai is not just an auto manufacturing hub — it’s now a
                rising AutoTech capital. With global OEMs, smart factories, EV
                startups, and deep automation labs, the city is driving the
                future of mobility.
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              {" "}
              Key AutoTech Companies in Chennai
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Company
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Focus Area
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SmartChennaiinAction.map((giant, index) => (
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold"> AutoTech Startups to Watch </h2>
            {/* <p className="mb-4 text-gray-600 text-center mb-10">  These companies have made Chennai their technology fortress: </p> */}
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Startup
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Innovations
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
            <h2 className="text-2xl font-bold text-center mb-6">
              R&D + Innovation Hotspots
            </h2>
            {data.map((section, index) => (
              <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              {" "}
              Chennai AutoTech by the Numbers (2024)
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              {" "}
              Where AutoTech Thrives in Chennai
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Zone
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Highlights
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {HealthTech.map((giant, index) => (
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
                {/* <p>{section.sectionDesc}</p> */}
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
