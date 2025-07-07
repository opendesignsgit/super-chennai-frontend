import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function RenewableEnergyChennai() {
  const chennaiStartupPowerhouseData = [
    {
      category: "Micro-Market Spotlight Series: Where to Invest in Chennai",
      items: [
        {
          title:
            "Chennai doesn’t just make vehicles — it makes the future move.",
          description:
            "If you're looking to be part of India’s next big mobility leap — Chennai is your launchpad.",
        },
      ],
    },
  ];

  const chennaiStartupStoriesData = [
    {
      category: " Economic Powerhouse with Future Momentum",
      items: [
        {
          imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: "$86+ billion economy",
          description: "One of India’s largest metro economies",
        },
        {
          imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: "Fastest-growing SaaS and fintech ecosystems.",
          description:
            "Home to India’s 2nd-largest auto cluster, 3rd-largest IT base, and fastest-growing SaaS and fintech ecosystems.",
        },
        {
          imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: "20 Fortune 500 companies",
          description:
            "Hosts over 20 Fortune 500 companies with expanding footprints across sectors.",
        },
      ],
    },
  ];

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
      indicator: "TANGEDCO & TEDA",
      advantage: "State-led solar and EV infra",
      advantage1: "",
    },
    {
      indicator: "ReNew Power",
      advantage: "Solar & wind projects in TN",
      advantage1: "",
    },
    {
      indicator: "Sundaram Finance",
      advantage: "Green bonds for solar adoption",
      advantage1: "",
    },
    {
      indicator: "ChargeZone, Tata Power",
      advantage: "EV stations in public areas",
      advantage1: "",
    },
    {
      indicator: "Zoho, Infosys, Wipro",
      advantage: "Solar + rainwater infra in campuses",
      advantage1: "",
    },
    {
      indicator: "Ashok Leyland",
      advantage: "Launch of electric CVs",
      advantage1: "",
    },
  ];

  const data2 = [
    {
      indicator: "Uniphore",
      advantage: "$610+ million",
      advantage1: "March Capital, Sequoia, Cisco, India Partners",
    },
    {
      indicator: "Mad Street Den",
      advantage: "$30M+",
      advantage1: "Falcon Edge, Sequoia Surge, GrowX Ventures",
    },
    {
      indicator: "Detect Technologies",
      advantage: "$28M+",
      advantage1: "Elevation Capital, Accel, Shell Ventures",
    },
    {
      indicator: "GalaxEye Space",
      advantage: "$10 million (2024)",
      advantage1: "Speciale Invest, Micron, Artha Venture Fund",
    },
    {
      indicator: "HyperVerge",
      advantage: "$9 million+",
      advantage1: "Dallas Venture Capital, Pi Ventures",
    },
    {
      indicator: "Kaleidofin (AI in FinTech)",
      advantage: "$23 million+",
      advantage1: "Bill & Melinda Gates Foundation, Flourish Ventures",
    },
    {
      indicator: "Skit.ai (Chennai-born)",
      advantage: "$23 million+",
      advantage1: "AI voice automation platform",
    },
    {
      indicator: "AI4Bharat",
      advantage: "Govt & Institutional Grants",
      advantage1: "Vernacular AI research (IIT-M backed)",
    },
  ];

  const data3 = [
    {
      indicator: "Bosch Global Software",
      advantage: "₹800 Cr+ over last 5 years",
      advantage1: "Embedded AI, mobility R&D",
    },
    {
      indicator: "Ford (Tech Center)",
      advantage: "₹1,500 Cr+ total infra & R&D",
      advantage1: "Smart vehicles, autonomous systems",
    },
    {
      indicator: "Valeo",
      advantage: "₹500 Cr+ expansion",
      advantage1: "EV sensors, ADAS, AI research",
    },
    {
      indicator: "Zoho Corporation",
      advantage: "Internal R&D — ₹1,200 Cr+ spent",
      advantage1: "Rural tech, AI productivity tools",
    },
    {
      indicator: "TCS / Infosys / HCL",
      advantage: "Cumulative: ₹2,000 Cr+ (est.)",
      advantage1: "AI platforms, digital twins, automation",
    },
  ];

  const data4 = [
    {
      indicator: "IIT-Madras Research Park",
      advantage: "₹500 Cr+ cumulatively",
      advantage1: "R&D, DeepTech, AI startups & academia",
    },
    {
      indicator: "Robert Bosch Center (RBCDSAI)",
      advantage: "₹250 Cr+ (Govt + CSR)",
      advantage1: "SAI ethics, health, agriculture, data science",
    },
    {
      indicator: "StartupTN DeepTech Mission",
      advantage: "₹75 Cr+ (and growing)",
      advantage1: "AI/ML, SpaceTech, climate innovation grants",
    },
    {
      indicator: "Anna University Innovation Hub",
      advantage: "₹100 Cr+ (state funded)",
      advantage1: "Robotics, drones, automation research",
    },
    {
      indicator: "SaaSBoomi DeepTech Track",
      advantage: "N/A (Community-led)",
      advantage1: "Founder grants, mentoring, early stage labs",
    },
  ];

  const whatSetsChennaiApart = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Consistent office space",
      desc: "Consistent office space demand from IT, fintech, and logistics firms",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Warehouse and logistics parks",
      desc: "Warehouse and logistics parks growing in Red Hills, Oragadam, and Perungalathur",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Co-working boom",
      desc: "Co-working boom led by Startups and SMEs in central and southern Chennai",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "REIT participation",
      desc: "REIT participation expected to grow post-2025 as fractional ownership gains traction",
    },
  ];
  const whatSetsChennaiApart1 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "6.5% CAGR",
      desc: "6.5% CAGR in residential price growth (2018–2023)",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "A commercial space operational",
      desc: "35M+ sq ft of Grade A commercial space operational",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Rental yields range",
      desc: "Rental yields range from 2.8% (residential) to 7.2% (commercial)",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Over 65% of housing launches",
      desc: "Over 65% of housing launches are in the mid-income & premium affordable category",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "NRI real estate investment",
      desc: "NRI real estate investment in Chennai up 20% YoY (2024)",
    },
  ];

  const whatSetsChennaiApart2 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "First-time buyers",
      desc: " safer price points than Mumbai/BLR",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "NRIs & expats ",
      desc: "strong legal clarity and gated community lifestyle",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Startups & SMEs",
      desc: "affordable commercial leases",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Senior citizens",
      desc: "Wellness-centric communities in suburban belts",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "High-net-worth investors",
      desc: "Luxury townships, land banking, and REITs",
    },
  ];

  const whatSetsChennaiApart3 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Ultra‑Luxury Residential Boom",
      desc: " Developers like E Residences and Arihant Foundation are building over 8,000 upscale homes (₹30–₹40 K/sq ft) across Alwarpet, RA Puram, ECR, & Perungudi, targeting HNIs, NRIs, and tech executivessouthlanddevelopers",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "North Chennai Plot Development",
      desc: "G Square Realtors acquired a 62.38-acre land parcel across Red Hills, Puzhal & Karanodai, investing ₹230 cr to create 1,091 villa plots with roads, lighting, CCTV, and drainage .",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Brigade’s Big Bet in Velachery",
      desc: "Brigade Enterprises bought a 5.41-acre plot on Velachery Road for ₹441.7 cr, planning a premium residential/commercial project in a fast-growing hub economictimes.indiatimes.com.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Keppel Acquires Grade-A Tech Park",
      desc: "Singapore’s Keppel (with CPP Investments) bought One Paramount I in Porur—a 2.4 million sq ft office park—for approx ₹2,100 cr (~US $264 M), signaling confidence in Chennai’s commercial real ",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "REIT Expansion in Chennai",
      desc: "Embassy Office Parks REIT raised ₹2,500 cr (~US$300 M) to acquire an integrated office park in Chennai, reducing leverage and boosting its footprint reuters.com.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Warehousing & Logistics Growth",
      desc: "Tamil Nadu’s warehousing policy (by Oct 2025) will support National Logistics corridor projects in and around Chennai, creating opportunities in industrial and cold-storage real estate timesofindia.indiatimes.com.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Tech Parks & Infrastructure Drives",
      desc: "TIDEL Park Pattabiram (Avadi) opened in Nov 2024—a 5.57 lakh sq ft IT park hosting ~6,000 employeestheflexinsights.com .Walmart leased a massive 465,000 sq ft office in Chennai (Nov 2025 onwards), underlining the city’s commercial appeal reuters.com.",
    },
  ];

  const imageSections = [
    {
      sectionTitle: "Types of Permits Available",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: " Why Chennai Is Turning Green",
              para: [
                <>
                  High solar irradiance year-round – ideal for rooftop and
                  utility-scale solar
                </>,
                <>
                  Seacoast advantage for wind energy in outer districts like
                  Tiruvallur & Kanchipuram
                </>,
                <>TN Govt push for Net-Zero and Energy Transition Missions</>,
                <>
                  Adoption by industries: Auto, IT parks, and SEZs are going
                  green to meet ESG mandates
                </>,
                <>
                  Urban green initiatives: EV infra, solar street lights,
                  rainwater harvesting, green buildings
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
      sectionTitle: "",
      sectionDesc: "",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Green Infra Projects & Highlights",
              para: [
                <>
                  CMRL Solar Initiative: Metro rooftops now generate over 10 MW
                </>,
                <>
                  Smart Cities Mission: Green corridors, solar benches,
                  microgrids
                </>,
                <>
                  TNUHDB Projects: Green housing with solar + rainwater
                  harvesting
                </>,
                <>
                  TANGEDCO: Plans for 1,000+ EV charging stations across Chennai
                  by 2026
                </>,
                <>
                  TIDEL Park, DLF, Ascendas: Fully solar/green-certified IT
                  parks
                </>,

                <>
                  Chennai’s Bio-CNG Plant: Converting 100+ tons of food waste
                  daily
                </>,
                <>
                  Public bike-sharing pilots in Besant Nagar, T Nagar, Anna
                  Nagar
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections2 = [
    {
      sectionTitle: "",
      sectionDesc: "   .",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Why Invest in Chennai's Green Shift?",
              para: [
                <>Favorable climate & policy landscape for solar/wind</>,
                <>Rising ESG mandates across sectors</>,
                <>Smart Cities focus on green mobility & water</>,
                <>
                  Growing demand for clean campuses (IT, Auto, Logistics, RE)
                </>,
                <>
                  TIDCO & TN Guidance Bureau promoting renewable cluster
                  development
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: " Future Outlook",
              para: [
                <>Chennai aims to be a net-zero carbon urban zone by 2040</>,
                <>EV adoption to exceed 30% of total vehicles by 2030</>,
                <>
                  100% solar on all new government & school buildings in
                  planning
                </>,
                <>
                  Industrial parks moving to green hydrogen pilots & microgrids
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections3 = [
    {
      sectionTitle: "Hyundai Motor India",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Trends Shaping Chennai’s Logistics Sector",
              para: [
                <>E-commerce surge fueling last-mile and cold storage needs</>,
                <>
                  Multimodal shift: Integration of rail, road, air, and sea
                  logistics
                </>,
                <>Cold chain demand: Pharma, food, agri exports from Chennai</>,
                <>
                  Automation & IoT in warehousing (smart inventory, AI-routing)
                </>,
                <>
                  Sustainable logistics: EV fleets, green warehouses,
                  solar-powered hubs
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Future Growth Outlook",
              para: [
                <>Chennai to become top 3 logistics hubs in Asia by 2030</>,
                <>
                  ₹30,000 Cr+ investments expected in logistics & warehousing by
                  2028
                </>,
                <>
                  Mega parks + port expansion to drive exports & manufacturing
                </>,
                <>
                  Govt + private collaboration (TIDCO, JICA, NIIF, Adani,
                  Amazon) accelerating infrastructure
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections4 = [
    {
      sectionTitle: "Hyundai Motor India",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Highlights",
              para: [
                <>
                  $700M+ in private capital invested into Chennai’s AI &
                  DeepTech startups
                </>,
                <>
                  ₹4,000 Cr+ in infra & corporate R&D investments across TN,
                  largely centered in Chennai
                </>,
                <>
                  India’s first multi-sensor satellite startup (GalaxEye) came
                  out of IIT-M
                </>,
                <>
                  Public-private synergy is driving AI for Bharat, EV, Health,
                  and Climate
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections5 = [
    {
      sectionTitle: "Hyundai Motor India",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Tamil Nadu EV Policy 2023",
              para: [
                <>₹50,000+ Cr projected private investments by 2026</>,
                <>
                  Subsidies for EV makers, component units, charging stations
                </>,
                <>Land allotments at SIPCOT parks near Chennai</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const imageSections6 = [
    {
      sectionTitle: "Hyundai Motor India",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Tamil Nadu EV Policy 2023",
              para: [
                <>
                  Oragadam–Sriperumbudur: Auto OEMs, logistics, tier suppliers
                </>,
                <>OMR–Taramani: EV software, platforms, testing labs</>,
                <>Pillaipakkam, Manallur, Krishnagiri: EV manufacturing hubs</>,
                <>Guindy–Saidapet: Urban charging infra expansion</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
      ],
    },
  ];

  const ecosystemInsights = [
    {
      title: "Startup Count",
      desc: "Over 2,200 active startups across various sectors.",
      img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
    {
      title: "Global Ranking",
      desc: "#88 globally and #6 in India for startup ecosystems.",
      img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
    {
      title: "Employment",
      desc: "TN's tech sector employs over 1M professionals, with Chennai as a major contributor.",
      img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
    {
      title: "Infrastructure",
      desc: "Home to DLF Cybercity & TIDEL Park, offering modern facilities for tech companies.",
      img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
  ];

  const itParks = [
    {
      title: "DLF Cybercity Chennai",
      desc: "A 6 million sq. ft. IT SEZ housing numerous tech companies. en.wikipedia.org",
      img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
    {
      title: "TIDEL Park Pattabiram",
      desc: "A recently inaugurated 21-story IT park aimed at fostering tech innovation.",
      img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            <h3>Renewable Energy & Green Infrastructure in Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest">Invest</Link> -{" "}
              <span>Renewable Energy & Green Infrastructure in Chennai</span>
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
            <p>Renewable Energy </p>
          </div>
          <div className="workIntro">
            <h3>Powering Progress Sustaining the Future.</h3>
            <p>
              Chennai is steadily transitioning from a power consumer to a clean
              energy contributor, backed by proactive policies,
              climate-conscious infrastructure, and a strong industrial base.
              From rooftop solar on government buildings to private sector-led
              EV infra, Chennai is becoming South India’s green energy capital.
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
              Major Investors & Companies
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Player
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Focus Area
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
