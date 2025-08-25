import { useEffect, useRef, useState } from "react";
import "../../../assets/Css/CostOfLiving.css";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

const Tabledata = [
  {
    location: "Adyar",
    description: "Cultural + academic hub, close to Marina, IIT",
    viewMore: "",
  },
  {
    location: "Velachery",
    description: "IT link + shopping hubs, Phoenix Mall",
    viewMore: "",
  },
  {
    location: "OMR",
    description: "IT corridor, colleges, residential towers",
    viewMore: "",
  },
  {
    location: "Medavakkam",
    description: "Budget housing + metro connectivity",
    viewMore: "",
  },
  {
    location: "Tambaram",
    description: "Transit hub, schools, hospitals",
    viewMore: "",
  },
  {
    location: "ECR Zone",
    description: "Premium beachside homes, resorts",
    viewMore: "",
  },
];

const SouthFeatures = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Transportation",
            para: [
              "Rail: Suburban stations at Guindy, Saidapet, Tambaram, Chromepet, Velachery, and St. Thomas Mount",
              "Metro: Blue & Green Line coverage with key stations like Guindy, Little Mount, Alandur, Airport, and Medavakkam",
              "Bus Services: Dense MTC routes from Adyar, T. Nagar, Velachery, and Tambaram",
              "Private transport: Autos, taxis, and app cabs easily accessible",
              "Cycle tracks & E-mobility: Present in OMR and IT corridor regions",
            ],
            imgs: "/images/Utilities/icons/Transportation.svg",
          },
          {
            title: "Banks & ATMs",
            para: [
              "Public Banks: SBI, Indian Bank, IOB, Canara Bank",
              "Private Banks: HDFC, ICICI, Axis, Kotak, Federal Bank",
              "ATM Density: High in Adyar, T. Nagar, Tambaram, Velachery, and OMR",
              "Digital Payments: Strong UPI and mobile payment adoption in stores",
            ],
            imgs: "/images/Utilities/icons/Banks-ATMs.svg",
          },
          {
            title: "Fuel Stations & EV Chargers",
            para: [
              "24/7 Petrol & Diesel outlets in: Velachery, Thoraipakkam, Medavakkam, Tambaram, Guindy",
              "EV Charging Stations: Available at Sholinganallur, Adyar, Perungudi, ECR stretch",
            ],
            imgs: "/images/Utilities/icons/Fuel-Stations.svg",
          },
          {
            title: "Supermarkets & Daily Needs",
            para: [
              "Retail Chains: Reliance Fresh, Nilgiris, More, Saravana, Grace, D Mart",
              "Local Markets: Adyar, Saidapet, Tambaram Sanatorium, Velachery",
              "Online Deliveries: BigBasket, Swiggy Instamart, Zepto, Blinkit available in all regions",
            ],
            imgs: "/images/Utilities/icons/Supermarkets-Kirana Stores.svg",
          },
          {
            title: "PGs, Hostels & Rental Spaces",
            para: [
              "Student Hostels: Around Anna University, IIT Madras, Hindustan University, VIT Kelambakkam",
              "PG for IT professionals: Sholinganallur, Thoraipakkam, Navalur, Perungudi",
              "Co-living Spaces: Popular in OMR, Velachery, and ECR zones",
              "Rental Prices: 1BHK/2BHK flats range between ₹8,000 to ₹20,000 based on location",
            ],
            imgs: "/images/Utilities/icons/PGs-Hostels-Rentals.svg",
          },
          {
            title: "Healthcare & Civic Services",
            para: [
              "Hospitals: Apollo (OMR & Perungudi), Global Hospitals (Sholinganallur), Fortis Malar (Adyar), Government Hospital (Saidapet)",
              "Police/Civic: Well-equipped stations and e-seva centers in every locality",
              "Public Dining: Amma Unavagams in key junctions like Guindy, Tambaram",
            ],
            imgs: "/images/Utilities/icons/Healthcare-Civic-Services.svg",
          },
          {
            title: "Fitness, Parks & Recreation",
            para: [
              "Gyms: Cult, Snap Fitness, Gold’s Gym chains in Adyar, Velachery, OMR",
              "Parks: Natesan Park (T. Nagar), Adyar Eco Park, Neelankarai Beachfront",
              "Jogging/Walking: Dedicated tracks in Besant Nagar beach, Velachery Lakefront",
            ],
            imgs: "/images/Utilities/icons/Fitness-Parks-Recreation.svg",
          },
        ],
      },
    ],
  },
];

const SouthFeatresMain = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "State Bank of India (SBI)",
            para: [
              "Branches: T. Nagar, Velachery, Adyar, Tambaram, Saidapet, Guindy",
              "Services: Retail banking, MSME loans, personal & education loans, lockers, ATMs",
              "Nearby ATMs: 24/7 ATMs at most branches", 
            ],
             imgs: "/images/Utilities/icons/sbi-state-bank-of-india.svg",
          },
          {
            title: "Indian Bank (Headquarters in Chennai)",
            para: [
              "Branches: Mylapore, Adyar, Velachery, T. Nagar, Tambaram, Chrompet",
              "USP: Government schemes, e-payments, strong government presence",
            ],
            imgs: "/images/Utilities/icons/indian-bank.svg",
          },
          {
            title: "Indian Overseas Bank (IOB)",
            para: [
              "Branches: T. Nagar, Besant Nagar, Adyar, Tambaram",
              "Focus: Pension accounts, MSMEs, remittance services",
            ],
            imgs: "/images/Utilities/icons/indian-overseas-bank.svg",
          },
          {
            title: "Canara Bank",
            para: [
              "Branches: Velachery, Guindy, Tambaram, Mylapore",
              "Noted for: Education loans, digital banking, SHG loans",
            ],
            imgs: "/images/Utilities/icons/canara-bank.svg",
          },
          {
            title: "Bank of Baroda",
            para: [
              "Branches: T. Nagar, Velachery, Tambaram",
              "Popular for: MSME support, NRI banking",
            ],
            imgs: "/images/Utilities/icons/bank-of-baroda.svg",
          },
          {
            title: "Punjab National Bank (PNB)",
            para: [
              "Branches: Guindy, T. Nagar, Tambaram",
              "Services: Govt accounts, business banking, personal loans",
            ],
            imgs: "/images/Utilities/icons/punjab-national-bank.svg",
          },
          {
            title: "Union Bank of India",
            para: [
              "Branches: Mylapore, Medavakkam, Tambaram, Velachery",
              "Popular Among: Salaried groups, senior citizens, traders",
            ],
            imgs: "/images/Utilities/icons/union-bank-of-india.svg",
          },
          {
            title: "UCO Bank / Bank of India / Central Bank of India",
            para: [
              "Presence: Moderate presence in areas like Adyar, Mylapore, Pallikaranai",
              "Services: Basic banking, government subsidies, ATM access",
            ],
            imgs: "/images/Utilities/icons/UCO-Bank-Bank-of-India-Central-Bank-of-India.svg",
          },
        ],
      },
    ],    
  },
];

const PrivateBanksSouth = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "HDFC Bank",
            para: [
              "Branches: T. Nagar, Velachery, Adyar, Tambaram, Guindy",
              "Services: Premium banking, digital services, credit cards",
            ],
            imgs: "/images/Utilities/icons/hdfc-bank.svg",
          },
          {
            title: "ICICI Bank",
            para: [
              "Branches: Mylapore, Adyar, Velachery, Tambaram",
              "Popular for: Salary accounts, home & car loans",
            ],
            imgs: "/images/Utilities/icons/icici-bank.svg",
          },
          {
            title: "Axis Bank",
            para: [
              "Branches: T. Nagar, Adyar, Tambaram, Velachery",
              "USP: Fast processing, youth-focused banking",
            ],
            imgs: "/images/Utilities/icons/axis-bank.svg",
          },
          {
            title: "Kotak Mahindra Bank",
            para: [
              "Branches: Velachery, Adyar, Guindy",
              "Known for: Zero balance accounts, mobile banking",
            ],
            imgs: "/images/Utilities/icons/kotak-bank.svg",
          },
          {
            title: "IndusInd Bank",
            para: [
              "Branches: T. Nagar, Tambaram, Velachery",
              "Focus: Premium customers, insurance + banking",
            ],
            imgs: "/images/Utilities/icons/induslnd-bank.svg",
          },
          {
            title: "Yes Bank / IDFC First / RBL Bank",
            para: [
              "Presence: Select branches in Velachery, OMR, and Mylapore",
              "Services: Urban-centric services, fintech tie-ups",
            ],
            imgs: "/images/Utilities/icons/yes-bank.svg",
          },
        ],
      },
    ],
  },
];

const ATMData = [
  {
    location: "T. Nagar",
    description:
      "Dense cluster of ATMs – SBI, HDFC, ICICI, Axis, Indian Bank, Canara Bank; near shopping streets like Ranganathan St & Pondy Bazaar",
    viewMore: "",
  },
  {
    location: "Adyar",
    description:
      "ICICI, SBI, Indian Bank, Axis, HDFC ATMs located around Adyar signal, Gandhi Nagar, and Sardar Patel Road",
    viewMore: "",
  },
  {
    location: "Velachery",
    description:
      "High ATM presence in Vijaya Nagar and near Phoenix MarketCity – SBI, HDFC, ICICI, Kotak, Axis, IOB",
    viewMore: "",
  },
  {
    location: "Mylapore",
    description:
      "Around Luz Corner & Kapaleeswarar Temple – Indian Bank, Axis, HDFC, ICICI, SBI",
    viewMore: "",
  },
  {
    location: "Tambaram",
    description:
      "East & West side of railway station – SBI, Indian Bank, HDFC, ICICI, Axis; also near Sanatorium and Camp Road",
    viewMore: "",
  },
  {
    location: "Guindy",
    description:
      "Near Kathipara junction & industrial belt – ICICI, SBI, HDFC, Axis Bank, Indian Overseas Bank",
    viewMore: "",
  },
  {
    location: "OMR (Thoraipakkam to Navalur)",
    description:
      "Strong ATM network – HDFC, ICICI, SBI, Kotak, Axis, Yes Bank ATMs near IT parks, BSR Mall, and service roads",
    viewMore: "",
  },
  {
    location: "Medavakkam",
    description:
      "Growing residential locality – ICICI, HDFC, SBI, Axis, Indian Bank along Velachery–Tambaram Road",
    viewMore: "",
  },
  {
    location: "Chromepet",
    description:
      "Bus stand and MIT Campus area – SBI, Indian Bank, HDFC, Axis Bank, IOB ATMs near market and transit zones",
    viewMore: "",
  },
];

const HelperSection = [
  {
    "tenantInfoSections": [
      {
        "points": [
          {
            "title": "Banks with Strong ATM Networks in South Chennai",
            "para": [
              "State Bank of India (SBI) : Present in every major junction & transit hub",
              "HDFC Bank : Widespread near malls, tech parks, and residential blocks",
              "ICICI Bank : Frequent near schools, hospitals & metro stations",
              "Axis Bank : Common in shopping areas and highways",
              "Indian Bank : Extensive in older neighborhoods like Mylapore, T. Nagar",
              "Indian Overseas Bank (IOB) : Around Guindy, Saidapet, Tambaram",
              "Canara Bank & Union Bank : Reliable in high-footfall areas like Tambaram, Adyar",
              "Kotak, IDFC FIRST, Yes Bank : Near malls, OMR stretch, and commercial complexes"
            ],
            imgs: "/images/Utilities/icons/Banks-with-Strong-ATM-Networks-in-West-Chennai.svg",
          }
        ]
      },
      {
        "points": [
          {
            "title": "Useful Insights",
            "para": [
              "ATMs near Velachery MRTS, Tambaram Station, and Guindy offer 24/7 access + cash deposit machines",
              "Many fuel stations on GST Road, OMR, and Mount Road host multi-bank ATM clusters",
              "Shopping areas like T. Nagar have high ATM density with CCTV surveillance",
              "Metro & IT zones (e.g., OMR) include smart kiosks with UPI, recharge, and bill pay facilities"
            ],
            imgs: "/images/Utilities/icons/Useful-Insights.svg",
          }
        ]
      }
    ]
  }
];


export default function SouthChennai() {
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
        <img src="/images/Utilities/south-chennai.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>UTILITIES IN SOUTH CHENNAI</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>South Chennai</span>
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
            <p>South Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Everything You Need. In Chennai's Most Livable Zone.</h3>
            <p>
              South Chennai has emerged as the city's most preferred destination
              for peaceful residential living, thriving IT hubs, and modern
              urban conveniences. With an excellent blend of infrastructure,
              lifestyle options, and connectivity, here are the essential
              utilities that make South Chennai the perfect place to live and
              grow.
            </p>
          </div>
        </div>
      </div>

      {/*###################### NorthFeatres SECTIONS ######3################ */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {SouthFeatures.map((section, index) => (
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
              Hotspots in South Chennai
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
        {SouthFeatresMain.map((section, index) => (
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
                Public Banks in South Chennai
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

      {/*#################### PRIVATE BANK SOUTH CHENNAI ###################### */}
      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {PrivateBanksSouth.map((section, index) => (
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
                Private Sector Banks in South Chennai
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

      {/*######################### ATM SOUTH CHENNAI ########################## */}

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
            <p>ATMs in South Chennai</p>
          </div>
          <div className="workIntro">
            <h3>ATMs in South Chennai</h3>
            <p>
              Fast & Easy Access to Cash Across Residential, Commercial & Tech
              Zones South Chennai – known for its IT corridors, shopping hubs,
              and upscale residential neighborhoods – is well-equipped with 24/7
              ATMs from both public and private sector banks.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8"></div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Area
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    ATM Highlights
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ATMData.map((item, index) => (
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

           {/* UTILITIES IN Sout CHENNAI HELPER  */}

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
    </>
  );
}
