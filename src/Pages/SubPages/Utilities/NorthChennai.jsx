import { useEffect, useRef, useState } from "react";
import "../../../assets/Css/CostOfLiving.css";

import { Link } from "react-router-dom";
import Search from "../../../Components/Search";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

const Tabledata = [
  {
    location: "Perambur",
    description: "Commercial + residential mix, super markets",
    viewMore: "",
  },
  {
    location: "Madhavaram",
    description: "Logistics hub + growing residential spaces",
    viewMore: "",
  },
  {
    location: "Royapuram",
    description: "Old town charm + improved metro access",
    viewMore: "",
  },
  {
    location: "Tondiarpet",
    description: "Medical colleges, ATMs, ports, markets",
    viewMore: "",
  },
  {
    location: "Ennore",
    description: "Industrial belt + port proximity",
    viewMore: "",
  },
];

const NorthFeatres = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Transportation",
            para: [
              "Rail: Major suburban stations – Washermanpet, Royapuram, Korukkupet, Tondiarpet, Perambur",
              "Metro: Blue Line metro connects Washermanpet to central & south Chennai",
              "Bus Network: Dense MTC coverage with high frequency from Broadway, Parrys, Mint",
              "Share autos & private cabs: Widely available and affordable",
              "Cycling & e-mobility: Gaining ground in local college areas and beach zones",
            ],
            imgs: "/images/Utilities/icons/Transportation.svg",
          },
          {
            title: "Banks & ATMs",
            para: [
              "Public banks: SBI, Indian Bank, Canara Bank, Indian Overseas Bank",
              "Private banks: HDFC, ICICI, Axis Bank, Kotak Mahindra",
              "ATMs: Densely located around Madhavaram, Perambur, Tondiarpet, Broadway",
              "Digital banking: UPI usage is very high across retail stores and local vendors",
            ],
            imgs: "/images/Utilities/icons/Banks-ATMs.svg",
          },
          {
            title: "Fuel Stations",
            para: [
              "24/7 Indian Oil, HPCL, Bharat Petroleum outlets across:",
              "Moolakadai, Ennore High Road, Manali, Vyasarpadi, Perambur",
              "EV charging: New installations near Madhavaram and Kilpauk",
            ],
            imgs: "/images/Utilities/icons/Fuel-Stations.svg",
          },
          {
            title: "Supermarkets & Kirana Stores",
            para: [
              "Big chains: Reliance Fresh, More, Saravana, Grace Supermarket",
              "Local stores: Abundant in all residential colonies",
              "Wholesale markets: Kothavalchavadi (vegetables), Mint street (groceries), Parrys (bulk goods)",
              "Online delivery: Swiggy Instamart, BigBasket, Zepto widely available",
            ],
            imgs: "/images/Utilities/icons/Supermarkets-Kirana Stores.svg",
          },
          {
            title: "PGs, Hostels & Rentals",
            para: [
              "Student hostels: Around Stanley Medical College, Pachaiyappa's North Campus",
              "Working professionals' PGs: In Perambur, Moolakadai, Madhavaram, Tondiarpet",
              "Co-living spaces: Gaining popularity near Metro-linked areas",
              "Affordable rentals: 1BHK/2BHK houses from ₹5,000–12,000 per month",
            ],
            imgs: "/images/Utilities/icons/PGs-Hostels-Rentals.svg",
          },
          {
            title: "Nearby Essentials",
            para: [
              "Hospitals: Stanley GH, KMC, Apollo Tondiarpet, Right Hospitals",
              "Police & civic: Smart police stations, traffic units, Amma Unavagams",
              "Parks & fitness: VOC Park, Anna Park, Gym chains like Talwalkars, Cult (Perambur)",
            ],
            imgs: "/images/Utilities/icons/Nearby-Essentials-(Bonus).svg",
          },
        ],
      },
    ],
  },
];

const NorthFeatresMain = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "State Bank of India (SBI)",
            para: [
              "Branches: Perambur, Royapuram, Tondiarpet, Moolakadai, Manali, Ennore",
              "Services: Retail banking, MSME loans, ATM, lockers, remittance, government schemes",
              "Nearby ATMs: Most branches have 24/7 ATM facilities",
            ],
            imgs: "/images/Utilities/icons/sbi-state-bank-of-india.svg",
          },
          {
            title: "Indian Bank (Headquartered in Chennai)",
            para: [
              "Branches: Washermanpet, Perambur High Road, Moolakadai, Erukkancheri, Vyasarpadi",
              "USP: Strong regional presence, government tie-ups for local welfare schemes",
            ],
            imgs: "/images/Utilities/icons/indian-bank.svg",

          },
          {
            title: "Indian Overseas Bank (IOB)",
            para: [
              "Branches: Royapuram, Tondiarpet, Perambur, Ennore",
              "Focus: Retail + small business banking, pension disbursement",
            ],
            imgs: "/images/Utilities/icons/indian-overseas-bank.svg",

          },
          {
            title: "Canara Bank",
            para: [
              "Branches: Madhavaram, Perambur, Broadway, Tondiarpet",
              "Noted for: Education loans, housing loans, agricultural credit",
            ],
            imgs: "/images/Utilities/icons/canara-bank.svg",
          },
          {
            title: "Bank of Baroda",
            para: [
              "Branches: Near Sembium, Broadway, Parrys Corner (serves North Chennai users)",
              "Popular for: MSME support and small trader loans",
            ],
            imgs: "/images/Utilities/icons/bank-of-baroda.svg",
          },
          {
            title: "Punjab National Bank (PNB)",
            para: [
              "Branches: Near Royapuram and Kilpauk (serves northern belt)",
              "Service: Govt scheme accounts, business banking",
            ],
            imgs: "/images/Utilities/icons/punjab-national-bank.svg",
          },
          {
            title: "Union Bank of India",
            para: [
              "Branches: Washermanpet, Korukkupet, Broadway",
              "Popular among: Small-scale traders, shop owners",
            ],
            imgs: "/images/Utilities/icons/union-bank-of-india.svg",
          },
          {
            title: "UCO Bank / Bank of India / Central Bank of India",
            para: [
              "Smaller presence in Tondiarpet and Broadway zones",
              "Operate ATMs, basic banking services in high-footfall areas",
            ],
            imgs: "/images/Utilities/icons/UCO-Bank-Bank-of-India-Central-Bank-of-India.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "Localities with Highest Bank Density",
            para: [
              "Perambur High Road",
              "Washermanpet Main Road",
              "Broadway / Parrys / Mint",
              "Royapuram Main Street",
              "Tondiarpet Highway",
            ],
            imgs: "/images/Utilities/icons/Localities-with-Highest-Bank-Density.svg",
          },
        ],
      },
    ],
  },
];

const NorthFeaturesBanks = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "HDFC Bank",
            para: [
              "Branches: Perambur, Tondiarpet, Moolakadai, Royapuram, Madhavaram",
              "Services: Full banking suite – savings, credit cards, home/personal loans",
              "ATMs: Multiple across Perambur and Tondiarpet zones",
              "USP: Popular among salaried employees and local traders",
            ],
            imgs: "/images/Utilities/icons/hdfc-bank.svg",
          },
          {
            title: "ICICI Bank",
            para: [
              "Branches: Perambur, Washermanpet, Broadway, Madhavaram",
              "Specialties: SME loans, personal banking, digital-first services",
              "ATMs: Dense coverage in commercial spots",
            ],
            imgs: "/images/Utilities/icons/icici-bank.svg",
          },
          {
            title: "Axis Bank",
            para: [
              "Branches: Perambur, Parrys Corner (serves North), Madhavaram",
              "USP: Strong online banking, NRI services, fast processing loans",
              "Popular With: Working professionals, shop owners",
            ],
            imgs: "/images/Utilities/icons/axis-bank.svg",
          },
          {
            title: "Kotak Mahindra Bank",
            para: [
              "Branches: Perambur, Broadway, Parrys",
              "Focus: Digital accounts, investments, forex, retail loans",
              "Niche: Young working professionals & freelancers",
            ],
            imgs: "/images/Utilities/icons/kotak-bank.svg",
          },
          {
            title: "IndusInd Bank",
            para: [
              "Branches: Royapuram, Broadway",
              "Strengths: Custom current accounts for traders, digital savings accounts",
            ],
            imgs: "/images/Utilities/icons/induslnd-bank.svg",
          },
          {
            title: "IDFC FIRST Bank",
            para: [
              "Branches: Moolakadai, Broadway",
              "USP: Zero-balance accounts, high-interest savings, easy UPI onboarding",
              "Good for: Students, startups, urban youth",
            ],
            imgs: "/images/Utilities/icons/idfc.svg",
          },
          {
            title: "Federal Bank",
            para: [
              "Branch: Washermanpet",
              "Popular for: Gold loans, SME banking, NRI services",
            ],
            imgs: "/images/Utilities/icons/Federal-Bank.svg",
          },
        ],
      },
    ],
  },
];

const TabledataATM = [
  {
    location: "Perambur",
    description:
      "Dense ATM presence – HDFC, SBI, ICICI, Axis, Indian Bank, City Union Bank",
    viewMore: "test",
  },
  {
    location: "Moolakadai",
    description:
      "ICICI, SBI, IDFC FIRST Bank, and Indian Overseas Bank ATMs in close proximity",
    viewMore: "test",
  },
  {
    location: "Washermanpet",
    description:
      "Popular with street commerce – ATMs from Canara, Indian Bank, Kotak, and Federal Bank",
    viewMore: "test",
  },
  {
    location: "Royapuram",
    description:
      "Near fishing harbor and residential colonies – accessible ATMs from SBI, Axis, HDFC",
    viewMore: "test",
  },
  {
    location: "Tondiarpet",
    description:
      "Industrial and working-class belt – ATMs from SBI, Axis, Karur Vysya, and IOB",
    viewMore: "test",
  },
  {
    location: "Madhavaram",
    description:
      "Rapidly growing – HDFC, ICICI, Axis, SBI, and UCO Bank ATMs at highway junctions",
    viewMore: "test",
  },
  {
    location: "Vyasarpadi",
    description: "Mid-size ATM density – Indian Bank, City Union, SBI",
    viewMore: "test",
  },
];

const HelperSection = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Banks with Strong ATM Networks in North Chennai",
            para: [
              "State Bank of India (SBI): Found across all major zones",
              "HDFC Bank: Common in residential & commercial areas",
              "ICICI Bank: Prominent near transport hubs and hospitals",
              "Axis Bank : Visible near markets and railway stations",
              "Indian Bank & IOB : Legacy public banks with good coverage",
              "Canara Bank & Indian Overseas Bank : Strong in older neighborhoods",
              "Kotak, Federal, IDFC FIRST : Found near malls and highway zones",
            ],
            imgs: "/images/Utilities/icons/Banks-with-Strong-ATM-Networks-in-West-Chennai.svg",
          },
          {
            title: "Useful Insights",
            para: [
              "Many ATMs in Tondiarpet, Washermanpet & Perambur offer multi-bank withdrawal, cash deposit, and UPI recharge options",
              "Most fuel stations and railway station areas (e.g., Perambur, Royapuram) have clustered ATMs",
              "Metro stations like Washermanpet have cashless kiosks + ATM points nearby",
              "North Chennai sees higher ATM footfall during festival seasons and weekends",
            ],
            imgs: "/images/Utilities/icons/Useful-Insights.svg",
          },
        ],
      },
    ],
  },
];

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
export default function NorthChennai() {
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
        <img src="/images/Utilities/north-chennai.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Utilities IN North Chennai</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>Utilities In North Chennai</span>
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
            <p>North  Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Essential Utilities in North Chennai</h3>
            <p>
              North Chennai – traditionally the industrial and port powerhouse
              of the city – is rapidly evolving into a well-connected,
              self-sustaining urban zone. With improved infrastructure and
              residential growth, essential services like transportation,
              banking, fuel, and retail are now widely available across major
              pockets.
            </p>
          </div>
        </div>
      </div>

      {/*###################### NorthFeatres SECTIONS ######3############## */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {NorthFeatres.map((section, index) => (
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
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
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
                          {item.para.map((point, i) => {
                            if (
                              typeof point === "string" &&
                              point.includes(":")
                            ) {
                              const [boldPart, ...rest] = point.split(":");
                              return (
                                <li key={i}>
                                  <strong>{boldPart.trim()}:</strong>{" "}
                                  {rest.join(":").trim()}
                                </li>
                              );
                            }
                            return <li key={i}>{point}</li>;
                          })}
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
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Notable Hotspots in North Chennai
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Area
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Why It’s Popular
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Tabledata.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {item.location}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.description}
                    </td>
                    {/* <td className="px-4 py-3 text-sm md:text-base">
                      {item.viewMore && (
                        <Link
                          to={item.viewMore}
                          className="text-[#a44294] hover:text-[#8a2379] font-medium transition-colors cursor-pointer"
                        >
                          More Info
                        </Link>
                      )}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/*###################### NorthFeatresMain SECTIONS ######3############## */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {NorthFeatresMain.map((section, index) => (
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
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                Public Sector Banks in North Chennai
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
                          {item.para.map((point, i) => {
                            if (
                              typeof point === "string" &&
                              point.includes(":")
                            ) {
                              const [boldPart, ...rest] = point.split(":");
                              return (
                                <li key={i}>
                                  <strong>{boldPart.trim()}:</strong>{" "}
                                  {rest.join(":").trim()}
                                </li>
                              );
                            }
                            return <li key={i}>{point}</li>;
                          })}
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

      {/* BANKS IN NORTH CHENNAI */}

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
            <p>Banks in north Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Modern Banking. Closer Than You Think.</h3>
            <p>
              As North Chennai undergoes commercial and residential growth,
              private banks are increasing their presence to offer high-speed
              services, digital banking, loans, and wealth products to a diverse
              customer base.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {NorthFeaturesBanks.map((section, index) => (
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
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                Major Private Banks Operating in North Chennai
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
                          {item.para.map((point, i) => {
                            if (
                              typeof point === "string" &&
                              point.includes(":")
                            ) {
                              const [boldPart, ...rest] = point.split(":");
                              return (
                                <li key={i}>
                                  <strong>{boldPart.trim()}:</strong>{" "}
                                  {rest.join(":").trim()}
                                </li>
                              );
                            }
                            return <li key={i}>{point}</li>;
                          })}
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

      {/* BANKS IN NORT CHENNAI TABLE */}
      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Banking Hotspots in North Chennai
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Area
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Private Bank Density & Highlights
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {TabledataATM.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {item.location}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.description}
                    </td>
                    {/* <td className="px-4 py-3 text-sm md:text-base">
                      {item.viewMore && (
                        <Link
                          to={item.viewMore}
                          className="text-[#a44294] hover:text-[#8a2379] font-medium transition-colors cursor-pointer"
                        >
                          More Info
                        </Link>
                      )}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* UTILITIES IN NORTH CHENNAI HELPER  */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {HelperSection.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
           ${
             index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"
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
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
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
                          {item.para.map((point, i) => {
                            // Check if the point is a string and contains a colon
                            if (
                              typeof point === "string" &&
                              point.includes(":")
                            ) {
                              const [boldPart, ...rest] = point.split(":");
                              return (
                                <li key={i}>
                                  <strong>{boldPart.trim()}:</strong>{" "}
                                  {rest.join(":").trim()}
                                </li>
                              );
                            }

                            // Default rendering if no colon or not a string
                            return <li key={i}>{point}</li>;
                          })}
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
      {/* <div className="exploreSldierBg">
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
      </div> */}

      {/* Social Marquee + CTA */}
      {/* <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div> */}
      <Becameavolunteer />
    </>
  );
}
