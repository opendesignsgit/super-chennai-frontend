import { useEffect, useRef, useState } from "react";
import "../../../assets/Css/CostOfLiving.css";
import { Link } from "react-router-dom";

const Transportation = [
  {
    location: "Railway",
    description:
      "Koyambedu, Arumbakkam, Chetpet, and Villivakkam railway stations offer connectivity to central and suburban zones.",
    viewMore: "",
  },
  {
    location: "Metro",
    description:
      "Green Line & Blue Line cover: Koyambedu, Arumbakkam, Vadapalani, Ashok Nagar, and SIDCO Industrial Estate. Interconnects with Airport and Central.",
    viewMore: "",
  },
  {
    location: "Bus Terminals",
    description:
      "Koyambedu CMBT – One of Asia’s largest; connects to all city and intercity routes. Mini hubs in Mogappair, Virugambakkam, and Ashok Pillar.",
    viewMore: "",
  },
  {
    location: "Auto / Cabs",
    description:
      "Ola/Uber available widely. Share autos common in Virugambakkam, K.K. Nagar, Ashok Nagar.",
    viewMore: "",
  },
];

const BanksATM = [
  {
    location: "Public Sector",
    description:
      "SBI, Indian Bank, IOB, Canara, Union Bank – present in K.K. Nagar, Vadapalani, Ambattur, and Poonamallee",
    viewMore: "",
  },
  {
    location: "Private Sector",
    description:
      "HDFC, ICICI, Axis, Kotak, IDFC FIRST – strong in Mogappair, Koyambedu, Ashok Nagar",
    viewMore: "",
  },
  {
    location: "ATMs",
    description:
      "High-density ATM clusters at CMBT, Forum Mall, Arcot Road, and 100 Feet Road. Many with 24/7, deposit, and QR options.",
    viewMore: "",
  },
];

const Fuel = [
  {
    location: "Arcot Road (Vadapalani–Virugambakkam)",
    description: "HP, BPCL, Indian Oil, and EV charging",
    viewMore: "",
  },
  {
    location: "Poonamallee High Road",
    description:
      "Multiple BPCL/IOCL pumps and EV stations in Porur & Kattupakkam",
    viewMore: "",
  },
  {
    location: "Koyambedu Market Belt",
    description: "3+ pumps near CMBT, including diesel for commercial use",
    viewMore: "",
  },
  {
    location: "Mogappair–Ambattur Stretch",
    description: "Popular for fleet fueling and EV charging stations",
    viewMore: "",
  },
];

const Supermarkets = [
  {
    location: "Departmental Stores",
    description:
      "Reliance Smart, More Supermarket, Nilgiris in Valasaravakkam, Mogappair, Ashok Nagar",
    viewMore: "",
  },
  {
    location: "Malls",
    description:
      "Forum Vijaya Mall (Vadapalani), Chandra Metro Mall (Virugambakkam), VR Chennai (near Anna Nagar border)",
    viewMore: "",
  },
  {
    location: "Local Markets",
    description:
      "Koyambedu Wholesale Market (vegetables & groceries), Ambattur main market, Ashok Pillar junction stalls",
    viewMore: "",
  },
];

const Hospitals = [
  {
    location: "Healthcare",
    description: "Locations",
    viewMore: "",
  },
  {
    location: "Multi-Speciality",
    description:
      "SIMS (Vadapalani), MIOT (Manapakkam), SRMC (Porur), Frontier Lifeline (Mogappair)",
    viewMore: "",
  },
  {
    location: "Clinics & Labs",
    description:
      "Apollo Clinics (Ashok Nagar), Medall, Neuberg & Metropolis branches across Virugambakkam, Ambattur",
    viewMore: "",
  },
];

const ConnectivityAndCivicFacilities = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Connectivity & Civic Facilities",
            para: [
              "Internet & Cable: Jio, ACT Fibernet, Airtel Fiber across all zones",
              "Post Offices: Present in K.K. Nagar, Ashok Nagar, Poonamallee, and Mogappair",
              "Police Stations: Key stations in Koyambedu, Anna Nagar West, and Ambattur",
              "Corporation Offices: Zone offices in Valasaravakkam, Ambattur, and Alandur divisions",
            ],
            imgs: "/images/Utilities/icons/Connectivity-Civic-Facilities.svg",
          },
        ],
      },
    ],
  },
];

const PublicBanks = [
  {
    location: "State Bank of India (SBI)",
    description: "Koyambedu, Virugambakkam, Mogappair, Ambattur, Porur",
    popularService: "Retail banking, ATMs, home loans, govt schemes",
    viewMore: "",
  },
  {
    location: "Indian Bank",
    description: "Ashok Nagar, K.K. Nagar, Poonamallee, Mogappair",
    popularService: "Government tie-ups, pension, small loans",
    viewMore: "",
  },
  {
    location: "Indian Overseas Bank (IOB)",
    description: "Valasaravakkam, Vadapalani, Ambattur, Alwarthirunagar",
    popularService: "Savings, MSME loans, education loans",
    viewMore: "",
  },
  {
    location: "Canara Bank",
    description: "Koyambedu, Porur, Mogappair East, Nolambur",
    popularService: "Housing, education, agriculture loans",
    viewMore: "",
  },
  {
    location: "Union Bank of India",
    description: "Virugambakkam, K.K. Nagar, Poonamallee",
    popularService: "MSME support, savings accounts",
    viewMore: "",
  },
  {
    location: "Bank of Baroda",
    description: "Arcot Road (near Vadapalani), Ambattur",
    popularService: "Trader loans, retail services",
    viewMore: "",
  },
  {
    location: "Punjab National Bank (PNB)",
    description: "Mogappair West, Ashok Nagar",
    popularService: "Govt subsidies, business accounts",
    viewMore: "",
  },
  {
    location: "UCO / Bank of India / Central Bank",
    description: "Fewer branches – found in Ambattur, Valasaravakkam",
    popularService: "Basic services, ATMs",
    viewMore: "",
  },
];

const PrivateBanks = [
  {
    location: "HDFC Bank",
    description: "Koyambedu, Vadapalani, Mogappair, Ambattur, Poonamallee",
    popularService: "High ATM presence, fast banking, cards",
    viewMore: "",
  },
  {
    location: "ICICI Bank",
    description: "Ashok Nagar, Valasaravakkam, Ambattur, Arcot Road",
    popularService: "Digital banking, credit/debit cards",
    viewMore: "",
  },
  {
    location: "Axis Bank",
    description: "Virugambakkam, K.K. Nagar, Mogappair East, Nolambur",
    popularService: "Smart banking, savings, mutual funds",
    viewMore: "",
  },
  {
    location: "Kotak Mahindra Bank",
    description: "Vadapalani, Ashok Nagar, Ambattur",
    popularService: "Salary accounts, credit cards",
    viewMore: "",
  },
  {
    location: "IDFC FIRST Bank",
    description: "Koyambedu, Poonamallee, Mogappair",
    popularService: "Personal loans, online banking",
    viewMore: "",
  },
  {
    location: "Yes Bank",
    description: "Limited presence – K.K. Nagar, Mogappair",
    popularService: "Retail and small business",
    viewMore: "",
  },
  {
    location: "IndusInd Bank",
    description: "Valasaravakkam, Ashok Nagar",
    popularService: "Priority banking, deposits",
    viewMore: "",
  },
  {
    location: "City Union Bank",
    description: "Strong in traditional markets like Poonamallee, Ambattur",
    popularService: "Focus on local businesses, traders",
    viewMore: "",
  },
];


const ATMLocations = [
  {
    "location": "Koyambedu",
    "description": "High density due to market and bus terminus – SBI, HDFC, ICICI, Axis, Indian Bank, Kotak",
    "viewMore": ""
  },
  {
    "location": "Vadapalani",
    "description": "Near Forum Vijaya Mall & residential zones – ATMs from Axis, HDFC, SBI, IOB, City Union Bank",
    "viewMore": ""
  },
  {
    "location": "Ashok Nagar",
    "description": "Residential + commercial zone – Indian Bank, ICICI, SBI, Kotak, IndusInd Bank ATMs",
    "viewMore": ""
  },
  {
    "location": "Ambattur",
    "description": "Industrial & residential – ATMs from SBI, Indian Bank, ICICI, Axis, Bank of Baroda",
    "viewMore": ""
  },
  {
    "location": "Porur",
    "description": "IT corridor & housing – HDFC, ICICI, Axis, SBI, Federal Bank ATMs",
    "viewMore": ""
  },
    {
    "location": "Mogappair",
    "description": "ATM mix from Axis, Indian Overseas Bank, ICICI, SBI, HDFC",
    "viewMore": ""
  },
  {
    "location": "Valasaravakkam",
    "description": "ATMs from Canara Bank, ICICI, Axis, Indian Bank",
    "viewMore": ""
  },
  {
    "location": "Virugambakkam",
    "description": "ATMs from ICICI, HDFC, SBI, City Union Bank, Axis Bank",
    "viewMore": ""
  },
  {
    "location": "Poonamallee",
    "description": "ATMs from SBI, Indian Bank, HDFC, Axis, IDFC FIRST Bank",
    "viewMore": ""
  }
];

const HelperSection = [
  {
    "tenantInfoSections": [
      {
        "points": [
          {
            "title": "Banks with Strong ATM Networks in West Chennai",
            "para": [
              "State Bank of India (SBI) – Ubiquitous across all localities",
              "ICICI Bank – Found near markets, hospitals, and malls",
              "HDFC Bank – High ATM density in residential + IT zones",
              "Axis Bank – Available near metro stations, schools, shopping spots",
              "Indian Bank & Indian Overseas Bank – Especially strong in older neighborhoods and main roads",
              "IDFC FIRST & Kotak – Seen more near new developments and highway routes"
            ],
            imgs: "/images/Utilities/icons/Banks-with-Strong-ATM-Networks-in-West-Chennai.svg",
          },
          {
            "title": "Useful Insights",
            "para": [
              "ATMs near Forum Vijaya Mall, Koyambedu Market, and Poonamallee bypass serve high footfall and are open 24/7",
              "Metro stations (like Ashok Nagar & Koyambedu) have multiple ATMs nearby",
              "Many fuel stations and supermarkets (e.g., Reliance Smart, Nilgiris) in Ambattur and Porur host multiple-brand ATMs",
              "Some ATMs offer cash deposit, balance print, and UPI recharge services"
            ],
            "imgs": "/images/Utilities/icons/Useful-Insights.svg"
          }
        ]
      }
    ]
  }
];


export default function WestChennai() {
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
        <img src="/images/Utilities/west-chennai.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>UTILITIES IN WEST CHENNAI</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>UTILITIES IN WEST CHENNAI</span>
            </div>
          </div>
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
            <p>West Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Essential Utilities in West Chennai</h3>
            <p>
              Everything You Need. Right Where You Live. West Chennai – a mix of
              emerging residential neighborhoods, commercial hubs, and transport
              zones – is fast-developing with well-connected essential services
              like transportation, banking, fuel, and retail.
            </p>
          </div>
        </div>
      </div>

      {/* Transportation DATA  */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Transportations{" "}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Mode
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Details{" "}
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Transportation.map((item, index) => (
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
      {/* BanksATM DATA2  */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Banks & ATMs
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Bank Type
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Available Banks
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {BanksATM.map((item, index) => (
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
      {/* Fuel DATA3  */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Fuel Stations
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
                    Fuel Stations (Petrol, Diesel, EV)
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Fuel.map((item, index) => (
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

      {/* Supermarkets DATA5  */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Supermarkets & Retail
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Type
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Popular Locations
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Supermarkets.map((item, index) => (
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

      {/* Hospitals DATA6  */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Hospitals & Clinics
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Healthcare
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Locations{" "}
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Hospitals.map((item, index) => (
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

      {/* ConnectivityAndCivicFacilities   */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {ConnectivityAndCivicFacilities.map((section, index) => (
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

      {/* PublicBanks BANKS    */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Public Sector Banks in West Chennai
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Bank Type
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Key Branch Locations
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Popular Services
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {PublicBanks.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {item.location}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.description}
                    </td>

                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.popularService}
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
      {/* PRIVATE  BANKS    */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Private Sector Banks in West Chennai
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Bank
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Key Branch Locations
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Popular Services
                  </th>
                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {PrivateBanks.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {item.location}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.description}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.popularService}
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

      {/* ATM LOCATIONS  BANKS    */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              ATM's in West Chennai
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
                    ATM Highlights{" "}
                  </th>

                  {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    View More
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ATMLocations.map((item, index) => (
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

      {/* HELPER SECTION USEFULL  */}

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
