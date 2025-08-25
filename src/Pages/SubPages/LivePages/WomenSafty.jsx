import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import "../../../assets/Css/ViewMore.css";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";

const detailsections = [
  {
    id: 1,
    title: "Women's Safety Initiatives",
    points: [
      {
        name: "Ammavin Kaaval (Mothers' Patrol)",
        description:
          "A dedicated women's police patrol team deployed across schools, colleges, parks, and public transit points — especially during peak hours.",
      },
      {
        name: "Kavalan SOS App",
        description:
          "A government-launched mobile app that allows women to send instant distress alerts to nearby police stations, with real-time location tracking.",
      },
      {
        name: "Pink Police Patrol",
        description:
          "Patrol vehicles manned by female officers, ensuring visibility and quick support in key women-dense areas like colleges, malls, and bus stands.",
      },
      {
        name: "CCTV Surveillance Network",
        description:
          "Over 40,000 CCTV cameras across the city, with smart monitoring by the Greater Chennai Police, helping curb incidents and support evidence.",
      },
      {
        name: "She Auto & She Cab Initiatives",
        description:
          "Female-driven autos and cabs introduced for safer last-mile connectivity. Training programs and financial support offered to women auto drivers.",
      },
    ],
  },
];

const benefitSections = [
  {
    sectionTitle: "Chennai’s Most Liveable Rental Spaces",
    sectionDesc: "",
    image: "/images/Live-Images/SubPages/Rental-Properties-in-Chennai.jpg",

    tenantInfoSections: [
      {
        iconImage: "/images/Work-Images/SubPages/Icons/Infrastructure-That-Supports-Safety.svg",
        title: "Infrastructure That Supports Safety",
        points: [
          <>
            Well-lit pedestrian zones & footpaths in major residential and
            commercial areas
          </>,
          <>Gender-inclusive design in metro stations, parks, and bus stops</>,
          <>
            Women-only compartments in Chennai Metro with dedicated security
            guards
          </>,
          <>Panic buttons and CCTV in buses and public transport systems</>,
          <>
            Helpdesks in railway stations & transit hubs for women travellers
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Awareness-Education-Empowerment.svg",
        title: "Awareness, Education & Empowerment",
        points: [
          <>
            Self-defense training in schools & colleges by the police department
          </>,
          <>
            Regular gender sensitization workshops in workplaces, police
            stations, and civic departments
          </>,
          <>
            NGO partnerships like SNEHA, PCVC, Prajnya to support victims of
            gender-based violence and promote rehabilitation
          </>,
          <>
            Public campaigns like 'Namma Area Safe Area' to make safety
            everyone's responsibility
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Impact-So-Far.svg",
        title: "Impact So Far",
        points: [
          <>
            Chennai consistently ranks among the top 3 safest cities for women
            in India (NCRB Data)
          </>,
          <>Women now comprise nearly 15% of the city police force</>,
          <>Over 10 lakh downloads of the Kavalan app, with 24/7 response</>,
          <>
            Crimes against women have seen a declining trend in metro areas due
            to faster response times & increased police presence
          </>,
        ],
      },
    ],
  },
];

const benefitSections1 = [
  {
    sectionTitle: "Chennai’s Most Liveable Rental Spaces",
    sectionDesc: "",
    image: "/images/Live-Images/SubPages/Rental-Properties-in-Chennai.jpg",

    tenantInfoSections: [
      {
        iconImage: "/images/Work-Images/SubPages/Icons/The-International-Foundation-for-Crime-Prevention-Victim-Care-(PCVC).svg",
        title:
          "The International Foundation for Crime Prevention and Victim Care (PCVC)",
        points: [
          <>
            <strong>Focus:</strong> Domestic violence, crisis intervention,
            counseling, shelter
          </>,
          <>
            <strong>Services:</strong> 24/7 crisis helpline, legal support,
            trauma recovery, LGBTQ+ support
          </>,
          <>
            <strong>Why It Matters:</strong> PCVC has become a trusted name in
            Chennai for confidential, survivor-centric care for women affected
            by abuse.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/SNEHA-(Society-for-Nutrition-Education-Health-Action)–Chennai-Chapter.svg",
        title:
          "SNEHA (Society for Nutrition, Education and Health Action) – Chennai Chapter",
        points: [
          <>
            <strong>Focus:</strong> Urban safety, health, and gender violence
          </>,
          <>
            <strong>Services:</strong> Community outreach, education programs,
            police sensitization
          </>,
          <>
            <strong>Why It Matters:</strong> Partners with schools,
            corporations, and urban local bodies to build grassroots-level
            resilience against gender-based violence.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Prajnya-Trust.svg",
        title: "Prajnya Trust",
        points: [
          <>
            <strong>Focus:</strong> Gender equality, public education, workplace
            safety
          </>,
          <>
            <strong>Services:</strong> Gender sensitization workshops, campaigns
            like '16 Days of Activism Against Gender Violence'
          </>,
          <>
            <strong>Why It Matters:</strong> Known for creating research-based,
            awareness-driven content on women's safety, workplace harassment,
            and legal literacy.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Red-Dot-Foundation-Safecity.svg",
        title: "Red Dot Foundation / Safecity",
        points: [
          <>
            <strong>Focus:</strong> Crowd-sourced safety mapping
          </>,
          <>
            <strong>Services:</strong> Allows users to anonymously report sexual
            harassment in public spaces
          </>,
          <>
            <strong>Why It Matters:</strong> Their data is used to identify and
            fix unsafe areas in collaboration with local police, metro, and
            civic bodies.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Bhumi.svg",
        title: "Bhumi",
        points: [
          <>
            <strong>Focus:</strong> Youth volunteering, safety education
          </>,
          <>
            <strong>Services:</strong> Conducts workshops in schools and
            colleges around consent, boundary-setting, and digital safety
          </>,
          <>
            <strong>Why It Matters:</strong> Mobilizes youth for real-time
            impact in the city, and engages both boys and girls in prevention
            education.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Rotary-Clubs-of-Chennai.svg",
        title: "Rotary Clubs of Chennai",
        points: [
          <>
            <strong>Focus:</strong> Community service, women's self-defense
          </>,
          <>
            <strong>Programs:</strong> Free martial arts/self-defense workshops,
            skill-building camps, and distribution of personal safety kits
          </>,
          <>
            <strong>Why It Matters:</strong> Taps into a wide social network to
            bring safety education to underprivileged areas.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/The-Blue-Cross-of-India-(Indirect-Impact).svg",
        title: "The Blue Cross of India (Indirect Impact)",
        points: [
          <>
            <strong>Focus:</strong> Animal welfare but actively promotes safe,
            walkable neighborhoods, especially for women and children
          </>,
          <>
            <strong>Why It Matters:</strong> Collaborates with residents on
            civic engagement projects like street lighting, garbage cleanup —
            improving environmental safety indirectly.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Work-Images/SubPages/Icons/Corporate-Startup-Involvement.svg",
        title: "Corporate & Startup Involvement",
        points: [
          <>
            <strong>Uber & Ola: </strong>
            Emergency buttons, 24x7 helplines, female driver recruitment
          </>,
          <>
            <strong>Zoho Corp: </strong>
            Internal women empowerment network and neighborhood security
            partnerships
          </>,
          <>
            <strong>Sheroes: </strong>A women-only social platform supporting
            safety and well-being
          </>,
          <>
            <strong>Zomato / Swiggy: </strong>
            In-app SOS and delivery partner training on gender sensitivity
          </>,
        ],
      },
    ],
  },
];

// const Helper = [
//   {
//     tenantInfoSections: [
//       {
//         points: [
//           {
//             title: "Infrastructure That Supports Safety",
//             para: [
//               "Well-lit pedestrian zones & footpaths in major residential and commercial areas",
//               "Gender-inclusive design in metro stations, parks, and bus stops",
//               "Women-only compartments in Chennai Metro with dedicated security guards",
//               "Panic buttons and CCTV in buses and public transport systems",
//               "Helpdesks in railway stations & transit hubs for women travellers",
//             ],
//             imgs: "/images/Safety-Images/Infrastructure.svg",
//           },
//           {
//             title: "Awareness, Education & Empowerment",
//             para: [
//               "Self-defense training in schools & colleges by the police department",
//               "Regular gender sensitization workshops in workplaces, police stations, and civic departments",
//               "NGO partnerships like SNEHA, PCVC, Prajnya to support victims of gender-based violence and promote rehabilitation",
//               "Public campaigns like 'Namma Area Safe Area' to make safety everyone's responsibility",
//             ],
//             imgs: "/images/Safety-Images/Awareness.svg",
//           },
//           {
//             title: "Impact So Far",
//             para: [
//               " Chennai consistently ranks among the top 3 safest cities for women in India (NCRB Data)",
//               " Women now comprise nearly 15% of the city police force",
//               " Over 10 lakh downloads of the Kavalan app, with 24/7 response",
//               " Crimes against women have seen a declining trend in metro areas due to faster response times & increased police presence",
//             ],
//             imgs: "/images/Safety-Images/Impact.svg",
//           },
//         ],
//       },
//     ],
//   },
// ];

const NorthFeatres = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title:
              "The International Foundation for Crime Prevention and Victim Care (PCVC)",
            para: [
              "Focus: Domestic violence, crisis intervention, counseling, shelter",
              "Services: 24/7 crisis helpline, legal support, trauma recovery, LGBTQ+ support",
              "Why It Matters: PCVC has become a trusted name in Chennai for confidential, survivor-centric care for women affected by abuse.",
            ],
            imgs: "/images/NGO-Images/PCVC.svg",
          },
          {
            title:
              "SNEHA (Society for Nutrition, Education and Health Action) – Chennai Chapter",
            para: [
              "Focus: Urban safety, health, and gender violence",
              "Services: Community outreach, education programs, police sensitization",
              "Why It Matters: Partners with schools, corporations, and urban local bodies to build grassroots-level resilience against gender-based violence.",
            ],
            imgs: "/images/NGO-Images/SNEHA.svg",
          },
          {
            title: "Prajnya Trust",
            para: [
              "Focus: Gender equality, public education, workplace safety",
              "Services: Gender sensitization workshops, campaigns like '16 Days of Activism Against Gender Violence'",
              "Why It Matters: Known for creating research-based, awareness-driven content on women's safety, workplace harassment, and legal literacy.",
            ],
            imgs: "/images/NGO-Images/Prajnya.svg",
          },
          {
            title: "Red Dot Foundation / Safecity",
            para: [
              "Focus: Crowd-sourced safety mapping",
              "Services: Allows users to anonymously report sexual harassment in public spaces",
              "Why It Matters: Their data is used to identify and fix unsafe areas in collaboration with local police, metro, and civic bodies.",
            ],
            imgs: "/images/NGO-Images/Safecity.svg",
          },
          {
            title: "Bhumi",
            para: [
              "Focus: Youth volunteering, safety education",
              "Services: Conducts workshops in schools and colleges around consent, boundary-setting, and digital safety",
              "Why It Matters: Mobilizes youth for real-time impact in the city, and engages both boys and girls in prevention education.",
            ],
            imgs: "/images/NGO-Images/Bhumi.svg",
          },
          {
            title: "Rotary Clubs of Chennai",
            para: [
              "Focus: Community service, women's self-defense",
              "Programs: Free martial arts/self-defense workshops, skill-building camps, and distribution of personal safety kits",
              "Why It Matters: Taps into a wide social network to bring safety education to underprivileged areas.",
            ],
            imgs: "/images/NGO-Images/Rotary.svg",
          },
          {
            title: "The Blue Cross of India (Indirect Impact)",
            para: [
              "Focus: Animal welfare but actively promotes safe, walkable neighborhoods, especially for women and children",
              "Why It Matters: Collaborates with residents on civic engagement projects like street lighting, garbage cleanup — improving environmental safety indirectly.",
            ],
            imgs: "/images/NGO-Images/BlueCross.svg",
          },
          {
            title: "Corporate & Startup Involvement",
            para: [
              "Uber & Ola: Emergency buttons, 24x7 helplines, female driver recruitment",
              "Zoho Corp: Internal women empowerment network and neighborhood security partnerships",
              "Sheroes: A women-only social platform supporting safety and well-being",
              " Zomato / Swiggy: In-app SOS and delivery partner training on gender sensitivity",
            ],
            imgs: "/images/NGO-Images/BlueCross.svg",
          },
        ],
      },
    ],
  },
];

const images = [
  {
    src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
    title: "Accommodation",
    link: "/visit/hotel-accommodation-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/food-slide.jpg",
    title: "Restaurants",
    link: "/visit/restaurants-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/places-to-visit-slide.jpg",
    title: "Places to Visit",
    link: "/visit/places-to-visit-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/things-to-do-slide.jpg",
    title: "Things to Do",
    link: "/things-to-do",
  },
  {
    src: "/images/Visit-Images/SubPages/itinerary-slide.jpg",
    title: "Itinerary",
    link: "/visit/chennai-itinerary",
  },
  {
    src: "/images/Visit-Images/SubPages/hidden-gems-slide.jpg",
    title: "Hidden Gems",
    link: "/hidden-gems",
  },
  {
    src: "/images/Visit-Images/SubPages/shopping-slide.jpg",
    title: "Shopping",
    link: "/visit/shopping-areas-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/travel-tips-slide.jpg",
    title: "Travel Tips",
    link: "/travel-tips",
  },
  {
    src: "/images/Visit-Images/SubPages/wellness-slide.jpg",
    title: "Wellness ",
    link: "/visit/wellness-centres-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/events-slide.jpg",
    title: "Events ",
    link: "/visit/events-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/conferences-slide.jpg",
    title: "Conferences ",
    link: "/visit/conferences-in-chennai",
  },
];

export default function WomenSafty() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const [expandedSections, setExpandedSections] = useState({});
  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

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
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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
          <img src="/images/restaurants-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Women Safety in Chennai</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> -{" "}
                <a href=""> Women Safety in Chennai</a>
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
              <p>Women &nbsp; Safety in &nbsp; Chennai</p>
            </div>
            <div className="workIntro">
              <h3> Safe Streets. Strong Systems. Empowered Citizens.</h3>
              <p>
                Chennai is one of India’s safest metropolitan cities for women,
                thanks to a multi-pronged approach led by the Tamil Nadu
                government, Chennai City Police, and civic bodies. With focused
                efforts in infrastructure, tech, policy, and public awareness,
                the city is actively working to make public spaces, transport,
                and workplaces safer and more inclusive for women.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Government-Led Initiatives for Women Safety
          </h1>

          {detailsections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn mb-10 p-2">
              <h2 className="text-2xl font-semibold mb-6">{""}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                    <p className="text-gray-700 mb-2">{point.description}</p>

                    {point.subDescription && (
                      <p className="text-gray-500 text-sm mb-3">
                        {point.subDescription}
                      </p>
                    )}

                    {point.locations?.length > 0 && (
                      <ExpandableList items={point.locations} maxVisible={3} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="InvestMainPage">
          {benefitSections.map((section, index) => (
            <section
              className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
              key={index}
            >
              {/* Tenant Info Sections for this benefit section */}
              {section.tenantInfoSections.map((tenant, i) => (
                <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList ">
                  <div key={i} className="mb-0">
                    <h4 className="text-lg font-semibold mb-2">
                      {tenant.title}
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {tenant.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tenanticonImageDiv !bg-white">
                    <img
                      className="tenanticonImage"
                      src={tenant.iconImage}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </section>
          ))}

          <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
            <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
              <h2 className="text-2xl font-semibold text-indigo-700 !mb-0 text-center">
                Private & NGO Associates Driving Women Safety in Chennai
              </h2>
            </div>
          </div>

          {/* <div>
            {benefitSections1.map((section, index) => (
              <section
                className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
                key={index}
              >
                {section.tenantInfoSections.map((tenant, i) => (
                  <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList ">
                    <div key={i} className="mb-0">
                      <h4 className="text-lg font-semibold mb-2">
                        {tenant.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {tenant.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tenanticonImageDiv !bg-white">
                      <img
                        className="tenanticonImage"
                        src={tenant.iconImage}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div> */}

          <div>
            {benefitSections1.map((section, index) => {
              const isExpanded = expandedSections[index];
              const visibleTenants = isExpanded
                ? section.tenantInfoSections
                : section.tenantInfoSections.slice(0, 4);

              return (
                <section
                  key={index}
                  className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#7d377d] colorbgsec"
              } 
              ${
                index % 3 === 0
                  ? "pattern-a"
                  : index % 3 === 1
                  ? "pattern-b"
                  : "pattern-c"
              }`}
                >
                  {visibleTenants.map((tenant, i) => (
                    <div
                      key={i}
                      className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList"
                    >
                      <div className="mb-0">
                        <h4 className="text-lg font-semibold mb-2">
                          {tenant.title}
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {tenant.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="tenanticonImageDiv !bg-white">
                        <img
                          className="tenanticonImage"
                          src={tenant.iconImage}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}

                  {/* Show More / Show Less button if more than 4 tenant sections */}
                  {section.tenantInfoSections.length > 4 && (
                    <div className="w-full text-center mt-4 mb-6">
                      <button
                        onClick={() => toggleSection(index)}
                        className="bg-[#7d377d] hover:bg-[#602c60] text-white px-5 py-2 rounded transition cursor-pointer"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>

        {/* <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          {Helper.map((section, index) => (
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
              <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                
                </h2>
                {section.tenantInfoSections.map((tenant, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold mb-4">
                      {tenant.title}
                    </h4>
                    {tenant.points.map((item, j) => (
                      <div key={j} className="clcboxItemss flex mb-4">
                      
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
        </div> */}

        {/* <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          {NorthFeatres.map((section, index) => (
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
              <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                  Private & NGO Associates Driving Women Safety in Chennai
                </h2>
                {section.tenantInfoSections.map((tenant, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold mb-4">
                      {tenant.title}
                    </h4>
                    {tenant.points.map((item, j) => (
                      <div key={j} className="clcboxItemss flex mb-4">
                       
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
        </div> */}

        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Explore more of Chennai</h4>
              <p>
                Chennai is a city full of sites where you may go exploring every
                single day. Explore the city's various hidden treasures based on
                your current mood.
              </p>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className="ExplorePageSliderImage">
                    <a href={img.link} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={img.src}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        {/* Gradient Background */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">
                          {img.title}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
