import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function EductechAndSkill() {
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
      indicator: "GUVI (by IIT-M)",
      advantage: "Coding, AI, vernacular upskilling",
      advantage1: "2M+ learners; vernacular-first approach",
    },
    {
      indicator: "Skill-Lync",
      advantage: "Deep-tech skilling for engineers",
      advantage1: "$17M+ raised; India + US learner base",
    },
    {
      indicator: "Great Learning",
      advantage: "Postgrad tech programs (acq. by BYJU’S)",
      advantage1: "Global expansion, Chennai origin",
    },
    {
      indicator: "HeyCoach",
      advantage: "Mental health + skill coaching",
      advantage1: "Scaling with corporate partners",
    },
    {
      indicator: "Reteach",
      advantage: "Peer-to-peer live learning",
      advantage1: "Focused on Gen Z learning models",
    },
    {
      indicator: "IIT-M's NPTEL",
      advantage: "Open engineering & science courses",
      advantage1: "1.3B+ minutes watched; global impact",
    },
    {
      indicator: "Edmingle",
      advantage: "Creator-led LMS platform",
      advantage1: "Enabling coaches/trainers across India",
    },
  ];

  const data1 = [
    {
      indicator: "Skill-Lync",
      advantage: "$17.5M+",
      advantage1: "Iron Pillar, Y Combinator, angels",
    },
    {
      indicator: "GUVI",
      advantage: "₹20 Cr+ grants & VC",
      advantage1: "IITM Incubation, BIRAC, VCs",
    },
    {
      indicator: "Great Learning",
      advantage: "Acquired by BYJU’S",
      advantage1: "Exit valued at ~$600M",
    },
    {
      indicator: "Reteach",
      advantage: "Early-stage funding",
      advantage1: "Bootstrapped, angel-backed",
    },
    {
      indicator: "Edmingle",
      advantage: "Seed stage",
      advantage1: "Early-stage edtech funders",
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
              title: "Why Chennai is an EduTech Hotspot",
              para: [
                <>
                  Academic density: Over 550 engineering colleges & dozens of
                  premier universities
                </>,
                <>
                  Tech ecosystem + learning convergence (IIT-M, SaaS corridor,
                  TIDEL, Zoho, Freshworks)
                </>,
                <>
                  Strong pool of educators, instructional designers & edtech
                  founders
                </>,
                <>Affordable access to Tier 2/3 learners across Tamil Nadu</>,
                <>
                  Rise in Gen Z learners demanding hybrid, skill-first models
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
      sectionTitle: "Hyundai Motor India",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "MedTech Infrastructure & Institutional R&D",
              para: [
                <>
                  IIT Madras Bio-Incubator – India's top DeepTech + MedTech
                  co-creation lab
                </>,
                <>
                  Healthcare Technology Innovation Centre (HTIC) – Govt + IIT-M
                  + WHO-backed lab
                </>,
                <>
                  Apollo MedTech Research – Clinical innovation with AI &
                  robotics
                </>,
                <>
                  StartupTN MedTech Park (planned) – State’s dedicated MedTech
                  zone in pipeline
                </>,
                <>
                  SRMC Innovation Hub – Private medical college-led research
                  center
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
      sectionTitle: "Ola Electric",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Institutions Fueling EduTech Innovation",
              para: [
                <>
                  IIT Madras: NPTEL, GUVI, AI skilling, and edtech incubation
                </>,
                <>
                  Anna University & SRM: R&D support for tech+learning startups
                </>,
                <>
                  AIM (Atal Innovation Mission): Labs across schools in Chennai
                </>,
                <>StartupTN: Skilling + edtech support through micro grants</>,
                <>
                  Corporate partners: Zoho, Freshworks, Ford – driving LMS
                  adoption
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Skilling Trends in Chennai",
              para: [
                <>AI/ML, EV tech, Data Science leading skill demand</>,
                <>
                  DeepTech upskilling platforms for engineers (automotive,
                  drones, IoT)
                </>,
                <>Learning via apps in vernacular for rural TN learners</>,
                <>Corporate LMS + internal skilling academies emerging fast</>,
                <>
                  Mental wellness, soft skills, & hybrid learning platforms
                  gaining ground
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "The Future of Learning in Chennai",
              para: [
                <>
                  {" "}
                  Hybrid classrooms blending online + in-person with local
                  mentors
                </>,
                <>Tamil Nadu pushing global certification & skilling exports</>,
                <>EdTech–Industry convergence to solve actual employer needs</>,
                <>Rise of Learning-as-a-Service platforms for B2B clients</>,
                <> Personalized learning powered by AI and analytics</>,
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
              title: "Why Chennai for DeepTech?",
              para: [
                <>Academic + enterprise fusion unique to the city</>,
                <>Global scale, small town friction — easier collaboration</>,
                <>Proximity to hardware, IT, and manufacturing sectors</>,
                <>
                  Lower burn + higher depth = Ideal for long-cycle innovation
                </>,
                <>Talent returning from US/Europe to build here</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "The Future of DeepTech in Chennai",
              para: [
                <>Homegrown chip design + fabless ventures</>,
                <>Tamil Nadu's AI Mission 2030 rollout</>,
                <>SpaceTech meets SaaS: GalaxEye, Agnikul Cosmos</>,
                <>Ethics-led AI and India-first open-source AI models</>,
                <>Connected Mobility, Quantum Security, Climate AI</>,
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
            <h3>Why Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest">Invest</Link> - <span> Why Chennai</span>
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
            <p>Why Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Building Futures, One Skill at a Time</h3>
            <p>
              From engineering colleges and global universities to AI bootcamps
              and coding startups, Chennai’s education ecosystem is rapidly
              evolving into a hybrid of formal academia, digital-first learning,
              and job-ready skilling platforms.
            </p>
            <p>
              The city is no longer just producing graduates — it’s building
              future-ready talent through edtech innovation, upskilling
              platforms, and industry-integrated learning.
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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
                {/* Why Chennai? Key Investment Reasons */}
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
              Notable EduTech Startups & Platforms from Chennai
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Startup
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Focus Areas
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Highlights
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
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Investments in EduTech – So Far
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Company
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Funding Raised
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Key Investors
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
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage1}
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
