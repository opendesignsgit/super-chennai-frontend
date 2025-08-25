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

export default function SmartCity() {
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

  const data = [
    {
      title: "Talent",
      points: [
        "60+ engineering colleges and universities",
        "Nearly 1 lakh engineers graduate here every year",
        "Skilled in Java, Python, cloud, AI, mobile, low-code, and more",
      ],
    },
    {
      title: "Infrastructure",
      points: [
        "IT corridors: OMR, Taramani, Ambattur",
        "Parks like TIDEL, DLF, Olympia, and Ramanujan IT City",
        "Excellent public transport, metro access, and power stability",
      ],
    },
    {
      title: "Business Ecosystem",
      points: [
        "Govt. policies (Tamil Nadu ICT Policy 2021)",
        "Access to international markets via Chennai Port and Airport",
        "Deep collaboration between academia (IIT-M) and startups",
      ],
    },
  ];

  const imageSections = [
    {
      sectionTitle: "Digitally Responsive Urban Systems",
      sectionDesc:
        "Chennai is evolving into a smarter city using technology for governance, sustainability, and seamless public services.",

      fintechEvolution: [
        {
          points: [
            {
              title: "Digitally Responsive Urban Systems",
              para: [
                "AI-powered traffic signals that reduce wait times and carbon emissions",
                "Smart water grids tracking leaks in real-time",
                "Centralized Command Centers for urban surveillance & emergency response",
                "Integrated Public Transport info across metro, buses, autos, cabs — all in one app",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Digitally Responsive Urban Systems.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Tech for Sustainability",
              para: [
                "Solar rooftops on public buildings and schools",
                "Lake rejuvenation through IoT-based water monitoring",
                "Smart composting units in residential zones",
                "Electric buses and e-cycle docks across pilot zones",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Tech for Sustainability.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Services That Come to You",
              para: [
                "100% digital access to birth, death, marriage, trade, and property services",
                "Auto-notifications for property taxes, water bills, and civic dues",
                "AI chatbots on WhatsApp for government service queries",
                "QR-code-based smart bus stops and city info boards",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Services That Come to You.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Data-Driven Governance",
              para: [
                "Public dashboards tracking Smart City Mission progress",
                "Open API ecosystem for developers to build civic apps",
                "Live civic issue tracking: roads, garbage, drainage, streetlights",
                "Geo-tagged feedback from citizens — your voice, mapped and heard",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Data-Driven Governance.svg",
            },
          ],
        },
      ],
    },
  ];

  const SmartChennaiinAction = [
    {
      company: "T Nagar",
      speciality:
        "India’s first “non-motorized zone,” smart kiosks, real-time footfall monitoring",
    },
    {
      company: "Koyambedu",
      speciality:
        "Transit hub with smart lights, sensors, and air quality monitoring",
    },
    {
      company: "Velachery",
      speciality: "Smart lake restoration + public health air sensors",
    },
    {
      company: "Marina Promenade",
      speciality: "Smart benches, digital signage, CCTV & drone monitoring",
    },
  ];

  const imageSections1 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

    {
      sectionTitle: "Super Chennai: Smart City, Smarter Future",
      sectionDesc:
        "From ₹1,366+ Cr investments to AI-powered flood management, Chennai is quietly building India's smartest urban ecosystem:",

      fintechEvolution: [
        {
          points: [
            {
              title: "By the Numbers",
              para: [
                "₹1,366+ Cr invested under the Smart City Mission (till 2024).",
                "Over 70 projects completed across 15 key urban sectors.",
                "4,800+ surveillance cameras city-wide.",
                "7 smart mobility hubs under development.",
                "500+ e-waste bins and IoT waste tracking systems in pilot use.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/By the Numbers.svg",
            },
            {
              title: "Chennai 2030: What’s Coming Next",
              para: [
                "AI-powered flood management system linked to weather radar.",
                "Public Wi-Fi zones in 100+ hotspots.",
                "Digital twin city model for real-time simulations of traffic, pollution, and development.",
                "5G-enabled civic applications across traffic, policing, health, and urban planning.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai 2030- What’s Coming Next.svg",
            },
            {
              title: "Life + Tech = Super Chennai",
              note: "In Super Chennai, you don’t just live in a city — the city lives with you.",
              para: [
                "Your streetlight turns on as you walk.",
                "Your metro pass works on every mode of transport.",
                "Your feedback becomes city policy.",
                "Your environment is monitored and protected by real-time data.",
              ],
              note2: "The future isn’t coming — it’s already in Chennai.",
              imgs: "/images/Innovate-Images/SubPages/Icons/Life+Tech=Super-Chennai.svg",
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
            src="/images/Innovate-Images/SubPages/Smart-City-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Smart City </h3>
              <div className="breadCrum">
                <Link to="/innovate-chennai"> Innovate </Link> -{" "}
                <a href="">Smart City </a>
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
              <h3>Super Chennai: The Rise of India’s Intelligent City</h3>

              <h3>Where Tradition Meets Tomorrow</h3>
              <p>
                Chennai is no longer just a city you live in — it’s a city that
                responds, adapts, and thinks.
              </p>
              <p>
                In the heart of South India, a quiet revolution is turning
                Chennai into one of the most digitally empowered and sustainably
                driven cities in the country. Every street, every service, and
                every system is slowly getting smarter — making life smoother,
                faster, and greener.
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
               
                 <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" What Defines Smart Chennai?"}
              </h2>
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
{/* 
          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl font-bold text-center mb-6">
              Chennai’s Tech Puzzle: The Key Pieces
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
          </div> */}

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold"> Smart Chennai in Action</h2>
            {/* <p className="mb-4 text-gray-600 text-center mb-10">
              These companies have made Chennai their technology fortress:
            </p> */}
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Smart Zone
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Innovations
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
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

          {imageSections1.map((section, index) => (
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
