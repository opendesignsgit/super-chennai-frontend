import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ITITeSSaaS() {
  // BHARATHIS ADDED
  const data = [
    {
      indicator: "Solar Energy",
      advantage: "Rooftop solar on Metro depots, schools, TIDEL, and malls",
      advantage1: "",
    },
    {
      indicator: "Wind Power (nearby zones)",
      advantage: "Coastal wind corridors supplying power to Chennai grid",
      advantage1: "",
    },
    {
      indicator: "EV Charging Infra",
      advantage:
        "Public EV stations at CMRL stations, malls, and fuel stations",
      advantage1: "",
    },
    {
      indicator: "Green Buildings",
      advantage:
        "IGBC-certified tech parks, smart campuses, and LEED-rated towers",
      advantage1: "",
    },
    {
      indicator: "Waste to Energy",
      advantage: "Bio-CNG, decentralized composting in urban wards",
      advantage1: "",
    },
    {
      indicator: "Smart Urban Mobility",
      advantage: "E-buses, EV autos, bicycle-sharing initiatives",
      advantage1: "",
    },
    {
      indicator: "Sustainable Water Infra",
      advantage: "Lake restoration, STPs, decentralized water recycling",
      advantage1: "",
    },
  ];

  const data1 = [
    {
      indicator: "OMR (Rajiv Gandhi Salai)",
      advantage: "IT corridor with mega campuses and tech parks",
      advantage1: "",
    },
    {
      indicator: "Taramani–Perungudi ",
      advantage: "R&D labs, SaaS startups, accelerators",
      advantage1: "",
    },
    {
      indicator: "Siruseri SIPCOT",
      advantage: "Large-format IT SEZs, emerging AI companies",
      advantage1: "",
    },
    {
      indicator: "Ambattur, Guindy",
      advantage: "Cost-effective tech and BPO clusters",
      advantage1: "",
    },
  ];

  const imageSections = [
    {
      tenantInfoSections: [
        {
          points: [
            {
              title: " IT & ITeS Foundations",
              para: [
                <>Hosts over 1,500 IT/ITeS companies</>,
                <>
                  Major campuses: TCS, Infosys, Wipro, Cognizant, HCLTech,
                  Accenture, Capgemini
                </>,
                <>
                  Employs over 6 lakh professionals across OMR, Taramani, and
                  Siruseri
                </>,
                <>
                  One of India’s top cities for global capability centers (GCCs)
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const WhatNextSection = [
    {
      tenantInfoSections: [
        {
          points: [
            {
              title: " What’s Next?",
              para: [
                <>AI-native product startups from Chennai</>,
                <>Local–global synergy: India-built, globally-deployed tools</>,
                <>
                  Sustainable tech campuses, hybrid work hubs, SaaS for Bharat
                </>,
                <>More IPO-ready SaaS unicorns from the city</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const Inversmrnts = [
    {
      tenantInfoSections: [
        {
          points: [
            {
              title: " Freshworks",
              para: [
                <>$484 million IPO on NASDAQ (2021)</>,
                <>First Indian SaaS company to list in the U.S.</>,
                <>Valuation peaked at $13 billion+ post listing</>,
                <>Backed by: Accel, Sequoia, CapitalG (Google)</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: " Chargebee",
              para: [
                <>Raised $250 million Series H in 2022</>,
                <>Valuation: $3.5 billion</>,
                <>
                  Investors: Tiger Global, Insight Partners, Sapphire Ventures
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: " Chargebee",
              para: [
                <>Raised $250 million Series H in 2022</>,
                <>Valuation: $3.5 billion</>,
                <>
                  Investors: Tiger Global, Insight Partners, Sapphire Ventures
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
            {
              title: "Zoho Corporation",
              para: [
                <>Bootstrapped, but estimated annual revenue: $1 billion+</>,
                <>Investing heavily in rural tech campuses across Tamil Nadu</>,
                <>Opened new 375,000 sq.ft. office in Chennai in 2024</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
            {
              title: "Kissflow",
              para: [
                <>Raised $10 million from VC and angel investors (earlier)</>,
                <>Now bootstrapped and profitable</>,
                <>Focus: No-code digital transformation platforms</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
            {
              title: "Facilio",
              para: [
                <>Raised $35 million Series B (2023)</>,
                <>Focus: Proptech SaaS for facilities & energy management</>,
                <>Investors: Accel, Dragoneer, Tiger Global</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
            {
              title: "Uniphore",
              para: [
                <>Founded in Chennai, now global HQ in California</>,
                <>Raised over $610 million total</>,
                <>Valuation: $2.5 billion</>,
                <>
                  Conversational AI tools — enterprise-grade voice intelligence
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections1 = [
    {
      tenantInfoSections: [
        {
          points: [
            {
              title: "Chennai: The SaaS Capital of India",
              para: [
                <>
                  <strong>Birthplace of SaaS unicorns like:</strong> Zoho
                  (bootstrapped to global scale) Freshworks (India’s first
                  NASDAQ-listed SaaS company) Chargebee, Kissflow, Facilio,
                  Skit.ai
                </>,
                <>
                  SaaS startups contribute significantly to Chennai’s GDP and
                  global tech reputation
                </>,
                <>
                  Strong support ecosystem: SaaSBoomi, IIT-Madras Incubation
                  Cell, Tidel Park, etc
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "What Makes Chennai Ideal for IT & SaaS?",
              para: [
                <>Large, affordable talent pool with engineering mindset</>,
                <>English-speaking workforce with global delivery experience</>,
                <>Superior infrastructure and IT SEZs</>,
                <>Excellent quality of life vs. lower cost of operations</>,
                <>Airport and port connectivity for global operations</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const SaaSEvolution = [
    {
      icon: "fa-building",
      class: "z5-html",
      title: "1990s – Foundations Laid",
      points: [
        "TIDEL Park (Asia’s largest at the time) inaugurated in Taramani",
        "Entry of TCS, Infosys, Wipro, and Cognizant into Chennai",
        "City gets reputation as a reliable back-office & IT delivery hub",
      ],
      align: "left",
    },
    {
      icon: "fa-chart-line",
      class: "z5-css",
      title: "Early 2000s – Growth Phase",
      points: [
        "OMR (IT Expressway) emerges as the tech corridor",
        "Arrival of CTS HQ and expansion of MNCs like Accenture, IBM",
        "Rise of engineering colleges fuels workforce boom",
        "SIPCOT IT Park opens in Siruseri — one of India’s biggest IT SEZs",
      ],
      align: "right",
    },
    {
      icon: "fa-lightbulb",
      class: "z5-js",
      title: "2010–2015 – Product Thinking Begins",
      points: [
        "Early SaaS builders emerge: Zoho, OrangeScape (now Kissflow), Unmetric",
        "Chennai becomes a low-noise, high-impact startup zone",
        "IIT-Madras Incubation Cell & Research Park take off",
        "Freshdesk (Freshworks) founded, raising global investor interest",
      ],
      align: "left",
    },
    {
      icon: "fa-rocket",
      class: "z5-node",
      title: "2016–2019 – SaaS Goes Global",
      points: [
        "Freshworks becomes a unicorn — first from India’s SaaS space",
        "Launch of SaaSBoomi: India’s first founder-led SaaS community",
        "Chargebee, Facilio, and Paperflite gain global traction",
        "Chennai recognized as the SaaS Capital of India alongside Bengaluru",
      ],
      align: "right",
    },
    {
      icon: "fa-laptop-house",
      class: "z5-react",
      title: "2020–2022 – Remote-First Innovation",
      points: [
        "Post-COVID remote work boosts Chennai’s global delivery model",
        "Zoho opens rural offices, doubling down on Tamil Nadu roots",
        "Surge in cybersecurity, HR tech, EdTech, and AI SaaS tools",
        "Emergence of bootstrapped vs VC-funded success stories",
      ],
      align: "left",
    },
    {
      icon: "fa-globe",
      class: "z5-next",
      title: "2023–2025 – New Wave of Growth",
      points: [
        "Freshworks listed on NASDAQ — global spotlight on Chennai",
        "Rise of deep SaaS: AI ops, climate tech, infra SaaS",
        "Global Capability Centers (GCCs) expand across OMR & Guindy",
        "SaaS now contributes a significant % to TN’s software exports",
      ],
      align: "right",
    },
  ];

  const imageSections3 = [
    {
      tenantInfoSections: [
        {
          points: [
            {
              title: " What’s Next for Chennai Tech",
              para: [
                <>Rise of AI-powered SaaS and automation startups</>,
                <>
                  Growing interest in Cybersecurity, Climate Tech, and
                  HealthTech SaaS
                </>,
                <>Expansion of GCCs for Fortune 500 companies</>,
                <> Emerging Web3, Blockchain, and Deep SaaS opportunities</>,
                <>
                  Upskilling push from IIT-Madras, SRM, Anna University, and
                  EdTech leaders
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

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

  const images = [
    {
      src: "/images/Invest-Images/SubPages/real-estate-slide.jpg",
      title: "Real Estate",
      link: "/chennairealestate",
    },
    {
      src: "/images/Invest-Images/SubPages/franchise-slide.jpg",
      title: "Franchise",
      link: "/investfranchisechennai",
    },
    {
      src: "/images/Invest-Images/SubPages/startups-slide.jpg",
      title: "Startups",
      link: "/investstartupschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/renewable-energy-slide.jpg",
      title: "Renewable Energy",
      link: "/investrenewableenergychennai",
    },
    {
      src: "/images/Invest-Images/SubPages/retirement-slide.jpg",
      title: "Retirement",
      link: "/investretirementchennai",
    },
    {
      src: "/images/Invest-Images/SubPages/government-initiatives-slide.jpg",
      title: "Government Initiatives",
      link: "/investgovernmentinitiativeschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/formalities-regulations-slide.jpg",
      title: "Formalities and Regulations",
      link: "/investformalitiesregulationschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/news-slide.jpg",
      title: "News",
      link: "/investnewschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/events-slide.jpg",
      title: "Invest in Events",
      link: "/investeventschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/exhibitions-slide.jpg",
      title: "Exhibitions",
      link: "/investexhibitionschennai",
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Banner */}
      <div className="accaodomationBannerSection">
        <img src="/images/Invest-Images/SubPages/startups-banner.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>IT-ITeS-SaaS</h3>
            <div className="breadCrum">
              <Link to="/invest">Invest</Link> - <span>IT-ITeS-SaaS</span>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/* Intro */}
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
            <p>IT-ITeS-SaaS</p>
          </div>
          <div className="workIntro">
            <h3>
              Code. Scale. Repeat. Chennai’s Digital Engine is Just Getting
              Started.
            </h3>
            <p>
              Chennai is one of India’s most resilient and mature IT
              destinations, known for its engineering talent, cost-efficiency,
              and thriving product ecosystem. Over the past two decades, it has
              evolved from a back-office hub to a SaaS and innovation powerhouse
              — attracting global tech giants, fast-scaling startups, and
              everything in between. Whether it’s enterprise software, AI tools,
              customer support, or product development — Chennai delivers
              world-class outcomes at scale, making it a preferred destination
              for both multinational corporations and visionary founders.
            </p>
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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
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
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {/* Visual Snapshot Table */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Key Areas of Focus
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Segment
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    What’s Happening in Chennai
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {item.indicator}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* KEY POINT SECTION @ 2 */}
        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          {imageSections1.map((section, index) => (
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
              <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
                <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                  {" "}
                </h2>
                {section.tenantInfoSections.map((tenant, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold mb-4">
                      {tenant.title}
                    </h4>
                    {tenant.points.map((item, j) => (
                      <div key={j} className="clcboxItemss flex mb-4">
                        <div className="clcboxIImg">
                          <img src={item.imgs} alt={item.title} />
                        </div>
                        <div className="clcboxICont">
                          <h3>{item.title}</h3>
                          <h5>{item.desc}</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {item.para.map((point, i) => (
                              <li key={i}>{point}</li>
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
        </div>

        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Key Growth Zones
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Location
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Highlights
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data1.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {item.indicator}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <div className="max-w-6xl mx-auto text-center mb-8"></div>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
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
      </div>

      {/* TIME LINE SECTION  */}
      <div className="z5-timeline-wrapper">
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
              <p>IT-ITeS-SaaS</p>
            </div>
            <div className="workIntro">
              <h3>Chennai’s Tech Story: Local Brilliance, Global Impact.</h3>
              <p>
                From bootstrapped builders to billion-dollar IPOs — Chennai’s IT
                and SaaS landscape is driven by substance over flash, talent
                over hype. It’s the city where products are crafted quietly, but
                used loudly across the world.
              </p>
            </div>
          </div>
        </div>
        <div className="z5-container">
          <div className="z5-vertical-line"></div>
          {SaaSEvolution.map((item, index) => (
            <div
              key={index}
              className={`z5-box ${
                item.align === "left" ? "z5-box-left" : "z5-box-right"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <i className={`fa-solid ${item.icon} ${item.class}`}></i>
              <div className="z5-info">
                <h2>{item.title}</h2>
                <ul>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT NEXT  */}
      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {WhatNextSection.map((section, index) => (
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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
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
      </div>

      {/*Investments   */}
      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
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
              <p> Major Investments in Chennai’s IT, ITeS & SaaS Ecosystem</p>
            </div>
            <div className="workIntro">
              <h3>Chennai’s Tech Story: Local Brilliance, Global Impact.</h3>
              <p>
                Where capital meets code — Chennai attracts quiet, strategic
                tech investments that build global impact.
              </p>
            </div>
          </div>
        </div>

        {Inversmrnts.map((section, index) => (
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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <div className="max-w-6xl mx-auto text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      Big-ticket SaaS & Product Startups
                    </h2>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
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
      </div>

      {/* Explore More Chennai Slider */}
      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>PROPERTY PROSPECTS IN CHENNAI</h4>
            <p>
              Chennai's real estate market offers consistent demand and income.
              By its developed infrastructure, this city market offers
              substantial profits from both business and residential areas.
            </p>
          </div>
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div key={idx} className="ExplorePageSliderImage">
                  <a href={img.link} style={{ textDecoration: "none" }}>
                    <div className="relative rounded overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-auto block"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="titleTextExploreChennai">{img.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Social Marquee + CTA */}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </>
  );
}
