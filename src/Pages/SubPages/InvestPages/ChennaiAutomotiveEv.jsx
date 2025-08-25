import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ChennaiAutoMotiveEv() {
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
      indicator: "Oragadam–Sriperumbudur",
      advantage: "Auto OEMs, Tier-1 & 2 suppliers, exports",
      advantage1: "118 km",
    },
    {
      indicator: "Taramani–OMR",
      advantage: "EV startups, software & mobility platforms",
      advantage1: "₹2.8 lakh Cr",
    },
    {
      indicator: "Pillaipakkam & Krishnagiri",
      advantage: "EV manufacturing & battery plants",
      advantage1: "$50+ billion",
    },
    {
      indicator: "Ennore & North Chennai",
      advantage: "Logistics, shipping & port-based auto trade",
      advantage1: "4M+/year",
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
              title: "Chennai’s Automotive Backbone",
              para: [
                <>India’s 2nd-largest automobile manufacturing hub</>,
                <>Produces 30% of India’s automobile exports</>,
                <>
                  Home to global OEMs: Hyundai, Renault-Nissan, Ford, BMW,
                  Daimler, Yamaha, Ashok Leyland, TVS
                </>,
                <>Strong supplier base with over 400 Tier-1 & Tier-2 vendors</>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Chennai’s Automotive Backbone.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "The EV Evolution: Chennai Leads the Charge",
              para: [
                <>
                  Chennai is emerging as India’s EV capital, with significant
                  investments from Ola Electric, Ather Energy, and TVS
                </>,
                <>
                  EV-focused manufacturing parks being developed in
                  Pillaipakkam, SIPCOT Manallur, and Krishnagiri
                </>,
                <>
                  Focus areas: Battery assembly , Electric two-wheeler &
                  commercial vehicle production ,EV component exports
                </>,
                <>
                  EV talent pipeline driven by IIT-Madras, Anna University, and
                  skill centers across TN
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/The EV Evolution Chennai Leads the Charge.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Invest in Chennai’s Auto & EV Sector?",
              para: [
                <>
                  Ready infrastructure with plug-and-play manufacturing clusters
                </>,
                <>Proximity to ports for global exports</>,
                <>
                  Tamil Nadu EV Policy: incentives for manufacturers, startups &
                  infra providers
                </>,
                <>
                  Access to 1,000+ engineering colleges producing skilled talent
                  annually
                </>,
                <>
                  Availability of clean power & green corridors for sustainable
                  production
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Why Invest in Chennai’s Auto & EV Sector.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Future-Forward Opportunities",
              para: [
                <>
                  Battery Swapping & Charging Infra: Urban & highway networks
                  are growing
                </>,
                <>
                  R&D & Innovation: Supported by IIT-M Research Park, Zoho, and
                  Mahindra Research Valley
                </>,
                <>
                  EV-as-a-Service: Last-mile delivery, logistics, and fleet
                  solutions are booming
                </>,
                <>
                  Green Hydrogen & Alternate Fuels: Next wave of clean mobility
                  bets
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Future-Forward Opportunities.svg",
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
              title: "Hyundai Motor India",
              para: [
                <>
                  ₹6,180 Cr investment for expansion, including EV production
                </>,
                <>Plans to make Tamil Nadu its EV manufacturing hub by 2030</>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Hyundai Motor India.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Renault-Nissan Alliance",
              para: [
                <>
                  ₹5,300 Cr investment to launch 6 new models, including 2 EVs
                  from Chennai plant
                </>,
                <>Developing a new-gen EV platform locally</>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Renault-Nissan Alliance.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Daimler India (BharatBenz)",
              para: [
                <>
                  ₹500 Cr expansion in Oragadam plant for heavy commercial
                  vehicles
                </>,
                <>Focus on hydrogen and clean mobility R&D</>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Daimler India.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "TVS Motor Company",
              para: [
                <>
                  ₹1,000 Cr EV investment for expanding its iQube electric
                  scooter production
                </>,
                <>
                  Developing EV R&D hub near Hosur (Tamil Nadu–Karnataka border,
                  but Chennai-linked)
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/TVS Motor.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Yamaha Motors",
              para: [
                <>
                  ₹200 Cr for electric two-wheeler and hybrid engine assembly in
                  Chennai facility
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Yamaha Motors.svg",
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
              title: "Ola Electric",
              para: [
                <>
                  ₹2,400 Cr allocated for upcoming cell manufacturing & EV plant
                  in Pillaipakkam (near Chennai)
                </>,
                <>Building Gigafactory with focus on battery cells</>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Ola Electric.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Ather Energy",
              para: [
                <>
                  ₹650 Cr for setting up a new manufacturing unit for e-scooters
                </>,
                <>Developing fast-charging grids in Chennai city and suburbs</>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Simple Energy",
              para: [
                <>
                  Investment in EV scooter manufacturing and battery research
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Simple Energy.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Raptee Energy (Chennai-based)",
              para: [
                <>
                  Homegrown EV startup building high-performance e-motorcycles
                </>,
                <>Raised pre-Series A funding & supported by TN Govt EV cell</>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Raptee Energy.svg",
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
      image: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Hyundai Motor India.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Exide Industries",
              para: [
                <>
                  Partnering with SVOLT (China) for Li-ion battery plant in
                  Tamil Nadu
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Exide Industries.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Magenta ChargeGrid",
              para: [
                <>
                  Installing 100+ EV charging stations across Chennai and
                  outskirts
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Magenta ChargeGrid.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Sungrow & Charge+Zone",
              para: [
                <>
                  Investing in charging infra, solar integration, and
                  fast-charging stations
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Sungrow & Charge+Zone.svg",
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
              title: "Mahindra Research Valley",
              para: [
                <>
                  125-acre R&D park in Chengalpattu for EVs, ADAS, AI systems
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Mahindra Research Valley.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Zoho & IIT-Madras",
              para: [
                <>
                  Building ecosystems for EV innovation, software + hardware
                  synergy
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Valeo India",
              para: [
                <>
                  Setting up Chennai-based EV tech R&D centre focused on thermal
                  systems and powertrain
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Valeo India.svg",
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
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Tamil Nadu EV Policy 2023.svg",
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
              imgs: "/images/Invest-Images/invest-icons/invest-chennaiautomotiveev/Tamil Nadu EV Policy 2023.svg",
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
              <Link to="/invest-in-chennai">Invest</Link> - <span> Why Chennai</span>
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
            <h3>From Assembly Lines to Autonomy — Chennai Drives the Future</h3>
            <p>
              Chennai has long earned its title as the Detroit of India — but
              the city is now racing ahead into a new era of electrification,
              innovation, and global mobility leadership. With decades of
              manufacturing legacy and a fast-growing EV ecosystem, Chennai is
              where traditional auto power meets the energy of new-age mobility.
            </p>
            <p>
              Whether you're a manufacturer, investor, startup, or EV enthusiast
              — Chennai offers infrastructure, supply chains, policy support,
              and talent that few cities can match.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {/* <section className=" py-12 px-4 md:px-8">
          {chennaiStartupPowerhouseData.map((section, index) => (
            <div key={index} className="max-w-6xl mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {section.category}
              </h2>
              <div className="grid grid-cols-1  gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="mb-4">{item.description}</p>
                    {item.quote && (
                      <blockquote className="italic text-indigo-700 border-l-4 border-indigo-500 pl-4">
                        “{item.quote}”<br />
                        {item.author && (
                          <span className="text-gray-500 text-sm">
                            {item.author}
                          </span>
                        )}
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section> */}

        {/* Stories That Inspire */}
        {/* <section className="py-12 px-4 md:px-8">
          {chennaiStartupStoriesData.map((section, index) => (
            <div key={index} className="max-w-6xl mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <h3 className="text-xl md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section> */}

        {/* What Sets Chennai Apart */}

        {/* Visual Snapshot Table */}

        {/* Leading IT Startups in Chennai */}
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
              Auto-EV Clusters & Growth Zones
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Region
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Focus Areas
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
        <section className=" py-12 px-4 md:px-8">
          {chennaiStartupPowerhouseData.map((section, index) => (
            <div key={index} className="max-w-6xl mx-auto mt-10">
              <div className="grid grid-cols-1  gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="mb-4">{item.description}</p>
                    {item.quote && (
                      <blockquote className="italic text-indigo-700 border-l-4 border-indigo-500 pl-4">
                        “{item.quote}”<br />
                        {item.author && (
                          <span className="text-gray-500 text-sm">
                            {item.author}
                          </span>
                        )}
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Global Automotive Giants Expanding in Chennai
                </h2>
              </div>
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
              <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  New-Age EV Startups Betting Big
                </h2>
              </div>
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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Battery, Charging Infra & Components
                </h2>
              </div>
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

        {imageSections4.map((section, index) => (
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
              <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  R&D & Innovation Centers
                </h2>
              </div>
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

        {imageSections5.map((section, index) => (
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
              <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Government Push
                </h2>
              </div>
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

        {imageSections6.map((section, index) => (
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
              <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Investment Hotspots Around Chennai
                </h2>
              </div>
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
