import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function WhyChennai() {
  const chennaiStartupPowerhouseData = [
    {
      category: "South India's Powerhouse. Your Next Big Move.",
      items: [
        {
          title: "Strong Roots. Smarter Future. Solid Returns.",
          description:
            "Chennai isn’t just a city — it’s South India’s engine of stability, innovation, and sustainable growth. While other metros swing between boom and bust, Chennai steadily powers ahead with infrastructure-led growth, deep talent pools, industrial muscle, and global investor confidence.",
          quote:
            "Here’s why investing in Chennai today means winning tomorrow:",
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
    { indicator: "Metro Network", advantage: "54 km", advantage1: "118 km" },
    {
      indicator: "Real Estate Market Size",
      advantage: "₹1.3 lakh Cr",
      advantage1: "₹2.8 lakh Cr",
    },
    {
      indicator: "IT/ITeS Exports",
      advantage: "$25 billion",
      advantage1: "$50+ billion",
    },
    {
      indicator: "EV & Green Mobility Units",
      advantage: "1M/year",
      advantage1: "4M+/year",
    },
    {
      indicator: "Warehousing Demand",
      advantage: "14M sq ft",
      advantage1: "35M+ sq ft",
    },
  ];

  const whatSetsChennaiApart = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Metro Phase 2",
      desc: "Metro Phase 2 (₹61,000+ Cr), Peripheral Ring Road, Smart City upgrades, and Airport Expansion are redefining connectivity.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "World-class logistics",
      desc: "World-class logistics via Ennore & Chennai ports, dry ports, and logistics parks in Red Hills and Sriperumbudur.",
    },
  ];
  const whatSetsChennaiApart1 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "1.5 Million skilled professionals",
      desc: "Over 1.5 million skilled professionals, with the highest engineering graduate output in India.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Global tech brands",
      desc: "Global tech brands (Walmart, Accenture, Zoho, Freshworks, Ford, Hyundai) rely on Chennai’s talent.",
    },
  ];

  const whatSetsChennaiApart2 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Geographic edge",
      desc: "Chennai’s geographic edge makes it a hub for exports and trade with Southeast Asia.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Massive port infrastructure",
      desc: "Massive port infrastructure supports logistics, shipping, and warehousing industries.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "TIDCO, SIPCOT, Guidance Tamil Nadu",
      desc: "TIDCO, SIPCOT, Guidance Tamil Nadu are actively enabling global partnerships and FDI flows.",
    },
  ];

  const whatSetsChennaiApart3 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "End-user driven",
      desc: "Unlike speculative markets, Chennai’s real estate is: End-user driven, Regulated under TN-RERA,Rapidly expanding across affordable, premium, and industrial segments",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "6.5% CAGR (2018–2024)",
      desc: "Average residential price growth: 6.5% CAGR (2018–2024)",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "OMR, Velachery, Porur, Tambaram, North Chennai",
      desc: "High demand in OMR, Velachery, Porur, Tambaram, North Chennai",
    },
  ];
  const whatSetsChennaiApart4 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "EV capital",
      desc: "Chennai is India’s EV capital — home to Ola Electric, Ather, Ashok Leyland, TVS, and more.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Deeptech, AI & SaaS ecosystems",
      desc: "Deeptech, AI & SaaS ecosystems are thriving, supported by IIT-Madras Research Park and Tidel Parks.",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Green buildings, solar mandates",
      desc: "Green buildings, solar mandates, and sustainable infrastructure are now the norm.",
    },
  ];
  const whatSetsChennaiApart5 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Top-ranked ease-of-doing-business state",
      desc: "Top-ranked ease-of-doing-business state (Tamil Nadu)",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Guidance TN, StartupTN, MSME support",
      desc: "Strong institutional enablers: Guidance TN, StartupTN, MSME support hubs",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Industrial parks, FDI, and clean-tech corridors",
      desc: "100+ MoUs signed in 2024 alone for industrial parks, FDI, and clean-tech corridors",
    },
  ];
  const whatSetsChennaiApart6 = [
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "safest metros in India",
      desc: "Great for professionals, families, and remote workers: Affordable luxury housing, Gated communities with schools, hospitals, and malls , Ranked among the safest metros in India",
    },
    {
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
      title: "Work, live, invest",
      desc: "Work, live, invest — all in one city.",
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
              title: "Bottom Line",
              para: [
                <>
                  <strong>
                    Chennai isn’t chasing trends — it’s building foundations.
                  </strong>
                </>,
                <>
                  Invest in Chennai not just for the next 2 years, but for the
                  <strong> next 2 decades.</strong>
                </>,
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
            <h3>South India’s Most Reliable Growth Engine</h3>
            <p>
              Chennai is not just a cultural capital — it's a rising force in
              business, innovation, and infrastructure. With a stable economy,
              investor-friendly policies, and a future-ready ecosystem, Chennai
              is fast becoming a preferred destination for real estate,
              technology, manufacturing, and global trade.
            </p>
            <p>
              From billion-dollar IT corridors to emerging EV and deeptech
              clusters, Chennai is built for long-term value. The city combines
              affordability with opportunity, talent with technology, and
              heritage with innovation — making it a smart choice for anyone
              looking to live, build, or invest.
            </p>
            <p>
              Whether you're a startup founder, homebuyer, NRI, or enterprise
              leader — Chennai is where future growth feels real and rooted.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {/* Why Chennai is a Startup Powerhouse */}
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

        {/* Stories That Inspire */}
        <section className="py-12 px-4 md:px-8">
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
        </section>

        {/* What Sets Chennai Apart */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Infrastructure That Fuels Investment
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Talent Capital of South India
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              India’s Gateway to Global Trade
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Real Estate: Balanced, Transparent, and Scalable
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              EV, Deeptech & Green Innovation Hotbed
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart4.map((item, index) => (
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pro-Business Governance & Policy Push
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart5.map((item, index) => (
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

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Lifestyle + Affordability = Relocation-Ready
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsChennaiApart6.map((item, index) => (
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

        {/* Visual Snapshot Table */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {" "}
              Chennai by 2030 – Vision SnapshoT
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    2024
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    2023 (Projected)
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
