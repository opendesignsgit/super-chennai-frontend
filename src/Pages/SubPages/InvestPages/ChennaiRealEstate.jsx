import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ChennaiRealEstate() {

  const chennaiStartupPowerhouseData = [
    {
      category: "Micro-Market Spotlight Series: Where to Invest in Chennai",
      items: [
        {
          title: "Explore Chennai's top-performing real estate corridors",
          description:
            "from the buzzing IT hubs to the next-gen growth belts. Each spotlight includes location highlights, property trends, who it suits best, and why to act now.",
        },
      ],
    },
  ];

  const data = [
    {
      indicator: "OMR & Sholinganallur",
      advantage: "IT corridor, co-living demand, tech parks",
      advantage1: "118 km",
    },
    {
      indicator: "Porur & Manapakkam",
      advantage: "Access to DLF IT Park, metro, SRMC, hospitals",
      advantage1: "₹2.8 lakh Cr",
    },
    {
      indicator: "Madhavaram & Perambur",
      advantage: "Metro expansion, industrial access, urban renewal",
      advantage1: "$50+ billion",
    },
    {
      indicator: "Tambaram-GST Road",
      advantage: "Proximity to airport, industrial zones, infra growth",
      advantage1: "4M+/year",
    },
    {
      indicator: "Anna Nagar & Kilpauk",
      advantage: "Premium resale value, rental stability",
      advantage1: "35M+ sq ft",
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
  
      tenantInfoSections: [
        {
          points: [
            {
              title: "Steady Appreciation, Low Volatility",
              para: [
                <>
                  Unlike boom-bust metros, Chennai has shown{" "}
                  <strong> stable year-on-year growth </strong>in both
                  residential and commercial segments.
                </>,
                <>
                  Over the past 5 years, land appreciation in key zones has
                  averaged <strong> 6–9% annually. </strong>
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Infrastructure-Led Expansion",
              para: [
                <>
                  <strong>
                    Metro Phase 2, Peripheral Ring Road, OMR Phase 2, and Smart
                    City projects{" "}
                  </strong>
                  are unlocking huge new micro-markets.
                </>,
                <>
                  Areas like Sholinganallur, Pallikaranai, Porur, and Madhavaram
                  are becoming investor magnets.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Booming IT, Manufacturing, EV Sectors",
              para: [
                <>
                  Real estate growth is backed by{" "}
                  <strong>robust economic activity</strong> —IT parks in OMR, EV
                  & Auto zones in Sriperumbudur, and Data Centers along the GST
                  corridor.
                </>,
                <>
                  <strong>
                    Job creation = rental income = capital growth.
                  </strong>
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Affordable Luxury & NRI Confidence",
              para: [
                <>
                  Unlike inflated markets, Chennai offers
                  <strong>
                    premium lifestyle housing at mid-tier prices.{" "}
                  </strong>
                </>,
                <>
                  NRIs trust Chennai for transparency, clean titles, and
                  high-end gated communities.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Regulatory Strength + Climate Resilience",
              para: [
                <>TN-RERA has improved buyer protection and transparency.</>,
                <>
                  Builders now focus on{" "}
                  <strong>
                    flood-proofing, green building norms, and gated
                    sustainability.
                  </strong>
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
      sectionTitle: "OMR – Sholinganallur to Siruseri",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "OMR – Sholinganallur to Siruseri",
              para: [
                <>
                  Why It’s Hot: Chennai’s IT corridor. Booming with tech parks,
                  co-living spaces, and smart infrastructure.
                </>,
                <>Average Property Price: ₹5,000–₹7,000/sq.ft</>,
                <>Rental Yields: ~3.5–4.5%</>,
                <>
                  Who Should Invest: IT professionals, co-living operators,
                  first-time home buyers
                </>,
                <>
                  2025 Forecast: High appreciation expected with Metro Phase 2
                  connectivity and Data Center growth.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: " Porur – Manapakkam",
              para: [
                <>
                  Why It’s Hot: Close to DLF IT Park, Chennai Trade Centre,
                  SRMC. Great balance of work + lifestyle.
                </>,
                <>Average Property Price: ₹6,000–₹8,500/sq.ft</>,
                <>Rental Yields: ~3.2–4%</>,
                <>
                  Who Should Invest: Mid-income families, rental investors, NRIs
                </>,
                <>
                  Growth Drivers: New flyovers, Metro access, and demand for
                  ready-to-move apartments.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Madhavaram – Perambur Belt",
              para: [
                <>
                  Why It’s Hot: Once industrial, now rising with residential
                  towers, schools, and Metro Phase2.
                </>,
                <>Average Property Price: ₹4,200–₹6,000/sq.ft</>,
                <>Rental Yields: ~2.8–3.2%</>,
                <>
                  Who Should Invest: Budget home buyers, early-stage investors,
                  builders
                </>,
                <>
                  Next Big Thing: Logistics hubs + EV manufacturing = new
                  employment corridors
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Tambaram – Chromepet – GST Road",
              para: [
                <>
                  Why It’s Hot: Great rail and road connectivity, schools, and
                  future airport logistics zone.
                </>,
                <>
                  NRIs trust Chennai for transparency, clean titles, and
                  high-end gated communities.
                </>,
                <>Rental Yields: ~3–4%</>,
                <>Who Should Invest: Families, NRIs, senior living investors</>,
                <>
                  Upcoming Push: Suburban rail upgrades, proposed metro links,
                  warehousing demand.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Anna Nagar – Kilpauk – Shenoy Nagar",
              para: [
                <>
                  Why It’s Hot: Premium location with legacy value, metro
                  access, and civic infrastructure.
                </>,
                <>Average Property Price: ₹12,000–₹18,000/sq.ft</>,
                <>Rental Yields: ~2.5–3% (high-end)</>,
                <>Who Should Invest: HNIs, luxury buyers, resale investors</>,
                <>
                  Market Note: Strong secondary market, low vacancy rates,
                  always tenant-ready.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "ECR – Uthandi to Mahabalipuram",
              para: [
                <>
                  Why It’s Hot: Weekend homes, premium villas, and now — luxury
                  plotted development boom.
                </>,
                <>Average Property Price: ₹5,500–₹9,000/sq.ft</>,
                <>Rental Yields: Holiday rentals rising (~5%)</>,
                <>
                  Who Should Invest: Vacation home buyers, Airbnb investors,
                  land bankers
                </>,
                <>
                  Bonus: Blue Flag beach plans, hospitality corridor, luxury
                  wellness resorts coming up.
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
            <h3>Chennai Real Estate: Stable, Growing, and Future-Ready</h3>
            <p>
              Chennai is one of India’s most underrated real estate powerhouses.
              While Mumbai and Bengaluru steal the headlines, Chennai offers
              quiet strength, sustainable growth, and long-term value for real
              estate investors.
            </p>
            <p>
              Whether you’re looking to buy a home, invest in commercial
              property, or explore REITs and co-living spaces—Chennai’s real
              estate market is ripe with potential.
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
                Why Chennai? Key Investment Reasons
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
              {" "}
              Hot Investment Corridors
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Zone
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Why It’s Booming
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

        {/* What Sets Chennai Apart */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Real Estate: A Quiet Giant
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart.map((item, index) => (
              <div
                key={index}
                className="card rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <div className="clcboxIImg">
                  <img src={item.imgs} alt={item.title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* What Sets Chennai Apart */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Growth Stats & Insights
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart1.map((item, index) => (
              <div
                key={index}
                className="card rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <div className="clcboxIImg">
                  <img src={item.imgs} alt={item.title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* What Sets Chennai Apart */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Who Should Invest?
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart2.map((item, index) => (
              <div
                key={index}
                className="card rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <div className="clcboxIImg">
                  <img src={item.imgs} alt={item.title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className=" py-12 px-4 md:px-8">
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Major Real Estate Investments in Chennai
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart3.map((item, index) => (
              <div
                key={index}
                className="card rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <div className="clcboxIImg">
                  <img src={item.imgs} alt={item.title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
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
