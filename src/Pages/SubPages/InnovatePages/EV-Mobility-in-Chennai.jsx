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

export default function EVMobilityinChennai() {
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
              title: "Why Chennai Is an EV Mobility Hotspot",
              para: [
                <>
                  <strong>Home to major EV OEMs –</strong> TVS, Ashok Leyland,
                  Hyundai, Ather
                </>,
                <>
                  <strong>EV-focused parks & clusters –</strong> 300+ acres near
                  Chennai (TIDCO EV Park)
                </>,
                <>
                  {" "}
                  <strong>R&D ecosystem – </strong> IIT-Madras, Anna University,
                  Mahindra Research Valley
                </>,
                <>
                  {" "}
                  <strong>Charging infra –</strong> 600+ public chargers, rapid
                  growth on OMR & IT corridors
                </>,
                <>
                  {" "}
                  <strong>Production hub</strong> for 2W, 3W, buses, batteries,
                  and even EV SaaS
                </>,
                <>
                  {" "}
                  <strong>Exports</strong> to SE Asia, Middle East, Europe from
                  Chennai Port
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Why Chennai Is an EV Mobility Hotspot.svg",
            },
          ],
        },
      ],
    },
  ];

  const evData = [
    {
      company: "TVS Motor",
      focus: "E-Scooters",
      highlights: "iQube EV; EV-dedicated facility at Hosur",
    },
    {
      company: "Hyundai",
      focus: "E-cars",
      highlights: "Manufacturing IONIQ 5, future EV exports",
    },
    {
      company: "Ashok Leyland",
      focus: "Electric Buses",
      highlights: "Circuit series, Switch Mobility EV arm",
    },
    {
      company: "Ather Energy",
      focus: "Premium E-scooters",
      highlights: "Factory near Hosur; Chennai is key market",
    },
    {
      company: "Ampere Vehicles (Greaves)",
      focus: "2W EVs",
      highlights: "Assembly + Battery infra scaling up",
    },
    {
      company: "Raptee Energy",
      focus: "EV Motorcycles",
      highlights: "HQ in Chennai; high-performance Indian superbike",
    },
    {
      company: "Pi Beam",
      focus: "E-3W & logistics EVs",
      highlights: "IIT-M startup targeting last-mile logistics",
    },
  ];

  const startupData = [
    {
      company: "ePlane Company",
      focus: "Flying EVs (eVTOL)",
      highlights: "Urban air mobility prototype in progress",
    },
    {
      company: "Causis e-Mobility",
      focus: "Electric Buses",
      highlights: "Working with TN govt for fleet transition",
    },
    {
      company: "RACEnergy",
      focus: "Battery swapping",
      highlights: "Targeting 3-wheelers & fleets",
    },
    {
      company: "EVRE",
      focus: "Charging infra",
      highlights: "B2B stations, mall & office tie-ups",
    },
    {
      company: "GoGreenBOV",
      focus: "E-bikes",
      highlights: "Designed for delivery & heavy use",
    },
    {
      company: "Exponent Energy",
      focus: "Fast-charging batteries",
      highlights: "15-min rapid charge tech, Chennai partners",
    },
  ];

  const chargingData = [
    {
      type: "Public Charging",
      locations:
        "T. Nagar, Guindy, OMR, Anna Nagar, Velachery, malls, metro stations",
    },
    {
      type: "Highway Chargers",
      locations:
        "Chennai-Bangalore and Chennai-Trichy highways by Ather, Tata Power",
    },
    {
      type: "Battery Swapping Stations",
      locations: "Auto hubs, EV logistics points (North Chennai, Pallavaram)",
    },
    {
      type: "Private + B2B",
      locations: "Flats, IT parks, logistics warehouses",
    },
  ];

  const FastFacts = [
    {
      company: "TIDCO EV Park (Pillaipakkam)",
      speciality: "Full-stack EV ecosystem (OEMs, battery, testing)",
    },
    {
      company: "OMR Tech Belt",
      speciality: "Charging hubs, software for EV telematics",
    },
    {
      company: "Ennore Port–Sriperumbudur Corridor",
      speciality: "Export & logistics zone for EVs",
    },
    {
      company: "Tambaram–Chengalpattu Belt",
      speciality: "EV component suppliers & logistics EV testing",
    },
  ];

  const FastStats = [
    { company: "Public EV Chargers", speciality: "600+" },
    { company: "EV 2W sales (Chennai)", speciality: "50,000+ (FY 23-24)" },
    { company: "EV OEMs & suppliers", speciality: "80+" },
    { company: "EV-focused startups", speciality: "30+" },
    { company: "EV export-ready units", speciality: "15+" },
    { company: "Govt EV investment (TN)", speciality: "₹7,000+ Cr since 2022" },
  ];

  const datard = [
    {
      title: "IIT Madras – Centre for Battery Engineering & EVs (CBEEV)",
      points: [
        "Solid-state battery research, motor control, thermal management",
        "Incubated startups like Pi Beam, Yulu tech modules",
      ],
    },
    {
      title: "Mahindra Research Valley",
      points: [
        "Battery life extension, intelligent BMS (Battery Management Systems), vehicle telematics",
      ],
    },
    {
      title: "Ashok Leyland - Switch Mobility R&D",
      points: [
        "Next-gen electric trucks, buses, and hydrogen-ICE hybrids in pipeline",
      ],
    },
  ];

  const imageSections2 = [
    {
      fintechEvolution: [
        {
          points: [
            {
              title: "Future of EV in Chennai (2025–2030)",
              para: [
                <>
                  {" "}
                  <strong>EV-first zones:</strong> Marina, T. Nagar, and IT
                  corridors may become EV-only zones
                </>,
                <>
                  {" "}
                  <strong>EV bus fleet:</strong> MTC to roll out 1,500+ e-buses
                  across city routes
                </>,
                <>
                  {" "}
                  <strong>
                    AI-powered traffic + charging optimization
                  </strong>{" "}
                  platforms from IIT-M incubators
                </>,
                <>
                  {" "}
                  <strong>Connected vehicle ecosystem </strong>with real-time
                  charging & battery diagnostics
                </>,
                <>
                  {" "}
                  <strong>Battery recycling & second-life plants </strong> by
                  2026
                </>,
              ],
              note2:
                "In Chennai, EV isn’t a buzzword. It’s becoming the backbone of how the city moves.",
              imgs: "/images/Innovate-Images/SubPages/Icons/Future of EV in Chennai (2025–2030).svg",
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
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Innovate-Images/SubPages/Electric-Vehicles-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>EV Mobility in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate-chennai"> Innovate </Link> -{" "}
                <a href="">EV Mobility in Chennai </a>
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
              <h3>Driving India’s Clean Transport Revolution</h3>
              <p>
                Chennai is not just catching up with electric mobility — it's
                quietly leading it. From manufacturing EVs and batteries to
                building smart charging infra and deep-tech EV startups, Chennai
                is evolving into India’s EV Capital of the South.
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
                Key EV Manufacturers in Chennai
              </h2>
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left border-b">Company</th>
                    <th className="py-2 px-4 text-left border-b">Focus</th>
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

            <div className="overflow-x-auto">
              <h2 className="text-2xl font-bold mb-3">
                {" "}
                Chennai's EV Startup Ecosystem
              </h2>
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left border-b">Startup</th>
                    <th className="py-2 px-4 text-left border-b">Domain</th>
                    <th className="py-2 px-4 text-left border-b">USP</th>
                  </tr>
                </thead>
                <tbody>
                  {startupData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{item.company}</td>
                      <td className="py-2 px-4 border-b">{item.focus}</td>
                      <td className="py-2 px-4 border-b">{item.highlights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <h2 className="text-2xl font-bold mb-3">
                {" "}
                Charging Infrastructure in Chennai
              </h2>
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left border-b">Type</th>
                    <th className="py-2 px-4 text-left border-b">Locations</th>
                  </tr>
                </thead>
                <tbody>
                  {chargingData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.locations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mb-2 text-gray-700 text-center">
                {" "}
                Chennai has over 600+ active chargers, with a goal of 1,500 by
                2026
              </p>
            </div>
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl font-bold text-center mb-6">
              {" "}
              R&D & Innovation Hubs
            </h2>
            {datard.map((section, index) => (
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
            <h2 className="text-2xl font-bold"> EV Zones & Smart Corridors</h2>
            <p className="mb-4 text-gray-600 text-center mb-10">
              These companies have made Chennai their technology fortress:
            </p>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Zone
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              {" "}
              Chennai EV Stats Snapshot (2024){" "}
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Startup
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Niche
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
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

        {/*--------------- Explore More Chennai----------------- */}

        <InnovatePagesSlider/>

     
        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
