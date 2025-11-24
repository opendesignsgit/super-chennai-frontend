import { useEffect, useRef, useState } from "react";
import "../assets/Css/CostOfLiving.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Search from "./Search";
import InstagramReelsMarquee from "./SocialChennai";
import Becameavolunteer from "./BecameAVolunteer";

const Tabledata = [
  {
    indicator: "Literacy Rate",
    advantage: " 82.9%",
    advantage1: "77.2%",
    advantage2: " 84.8%",
    advantage3: " 96.2%",
    advantage4: " 77.7%",
  },
  {
    indicator: "Engineering Seats (2024–25)",
    advantage: " 3.08 Lakh (Seat Capacity)",
    advantage1: "~1.09 Lakh",
    advantage2: " ~1.35 Lakh",
    advantage3: " 50K",
    advantage4: "—",
  },
  {
    indicator: "Seat Fill Rate (2021–22)",
    advantage: " 65%",
    advantage1: " 73%",
    advantage2: "76%",
    advantage3: " 55%",
    advantage4: "—",
  },
  {
    indicator: "Gross Enrolment Ratio (% higher ed)",
    advantage: " 47%",
    advantage1: " —",
    advantage2: " —",
    advantage3: " —",
    advantage4: " 28.4%",
  },
  {
    indicator: "Universities",
    advantage: " 56",
    advantage1: " 82",
    advantage2: " 77",
    advantage3: "19",
    advantage4: " 1,113",
  },
  {
    indicator: "HDI",
    advantage: " 0.718",
    advantage1: " 0.682",
    advantage2: " 0.722",
    advantage3: "0.782",
    advantage4: "—",
  },
];

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "A City Built on Education",
            para: [
              <>
                <strong> Literacy Rate:</strong> ~91% (One of the highest in
                India’s metros)
              </>,
              <>
                <strong>Home to India’s #1 Engineering College</strong> – IIT
                Madras
              </>,
              <>
                <strong>
                  Birthplace of thinkers, scientists, and cultural icons
                </strong>
              </>,
              <>
                <strong>
                  Known for academic rigour + values-driven education
                </strong>
              </>,
              <>
                <strong>
                  Preferred destination for South Indian and international
                  students
                </strong>
              </>,
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/A-City-Built-on-Education.svg",
          },
        ],
      },
    ],
  },
];

const Segments = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "K-12 Schools",
            para: [
              "Over 2,500+ schools, with strong focus on STEM, languages, and arts",
              "Mix of State Board, CBSE, ICSE, Cambridge, and IB schools",
              "Top Schools: DAV, PSBB, Chettinad Vidyashram, SBOA, AMM, Sishya, Chennai Public School",
              "Growth in international and alternative schools post-2020",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/K-12-Schools.svg",
          },
          {
            title: "Higher Education Institutions",
            para: [
              "Chennai is home to some of India’s most reputed institutions:",
              "IIT Madras – India’s top engineering college",
              "Anna University – Engine of Tamil Nadu’s engineering graduates",
              "Loyola College, MCC, Stella Maris, Ethiraj – top arts and science colleges",
              "SRM, Sathyabama, VIT Chennai, Saveetha, Ramachandra – private universities with global outreach",
              "Law, medicine, pharmacy, design, business – all well represented",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Higher-Education Institutions.svg",
          },
          {
            title: "EdTech & Skilling Ecosystem",
            para: [
              "Chennai is now a fast-growing hub for skilling and edtech startups",
              "GUVI – IIT-M backed vernacular tech learning platform",
              "Skill-Lync – High-demand upskilling in core engineering",
              "Great Learning, Crio.do, UpGrad Campus – Chennai operations",
              "Skilling centres powered by TVS, Zoho, and government PPP models",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/EdTech-Skilling-Ecosystem.svg",
          },
          {
            title: "Research & Advanced Learning",
            para: [
              "Institutes like IIT-M Research Park, CLRI, IGCAR, MGR Film Institute, and Kalakshetra Foundation offer pioneering research in science, design, and culture",
              "Chennai leads in AI/ML research, deeptech incubation, and applied sciences",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Research-Advanced-Learning.svg",
          },
          {
            title: "What’s Driving Growth?",
            para: [
              "Rising demand for digital-first, industry-ready education",
              "Huge base of engineering and tech students = workforce pipeline",
              "Corporates setting up in-house learning campuses",
              "Influx of students from Tier 2/3 cities, South Asia & Africa",
              "Government initiatives like TNSDC (Tamil Nadu Skill Dev. Corp.) and startup incentives",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Whats-Driving-Growth.svg",
          },
          {
            title: "Global & NRI Education Appeal",
            para: [
              "Home to 20+ international schools (IB, IGCSE, etc.)",
              "Safe city + high-quality, affordable education = NRI parent preference",
              "Collaborations with global universities for exchange programs, joint degrees",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Global-NRI-Education-Appeal.svg",
          },
          {
            title: "What Makes Chennai’s Education Ecosystem Unique?",
            para: [
              "Discipline + Deep Learning: Culture of focus, not flash",
              "Holistic Development: Equal weightage to academics and values",
              "Dense Academic Zones: Eg. Anna Nagar, Adyar, Taramani, Tambaram",
              "NGO Support: Chennai has strong educational NGOs (AID India, Bhumi, Teach for India Chennai chapter)",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/What-Makes-Chennais-Education-Ecosystem-Unique.svg",
          },
          {
            title: "Investment Potential",
            para: [
              "Education + edtech startups are key FDI focus in Chennai",
              "Demand for integrated school campuses, hostels, coaching hubs is rising",
              "B2B skilling is a major corporate L&D (Learning & Development) vertical",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Investment-Potential.svg",
          },
          {
            title: "Future of Learning in Chennai",
            para: [
              "Hybrid campuses combining offline discipline + online innovation",
              "Growth in AI-based adaptive learning platforms",
              "Chennai is poised to lead the South Indian learning economy with both traditional strength and tech-driven agility",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Future-of-Learning-in-Chennai.svg",
          },

          {
            title: "Would you like the following additions?",
            para: [
              <>Top 10 Schools or Colleges List</>,
              <>Education Timeline (Then vs Now)</>,
              <>Interactive Map of Education Zones</>,

              <>Featured Startup Stories in Edtech</>,

              <>Video Snippet: A Day in a Chennai Student’s Life</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Would-you-like-the-following-additions.svg",
          },
        ],
      },
    ],
  },
];

const SegmentsTwo = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Literacy Rate",
            para: [
              "Tamil Nadu: 82.9% literacy, higher than the national average of 77.7%",
              "Compared to peers: ( Maharashtra: 84.8% ,Karnataka: 77.2%,Kerala: 96.2% – highest in India )",

              "A strong, middle-tier literacy leader, behind Kerala but ahead of most major states.",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Literacy-Rate.svg",
          },
          {
            title: "Engineering Enrolment and Capacity",
            para: [
              "Tamil Nadu (2021–22): 162,867 enrolments out of 250,712 approved seats (65% fill rate)",
              "Other states fared better:(Karnataka: 73% fill, Maharashtra: 76%, Andhra Pradesh: 76%)",

              "However, Tamil Nadu: (Still ranks #1 in absolute seats, with over 308,000 seats approved by 2024–25 (+32,000 new seats))",

              "States like Kerala fill only ~55% of their capacity.",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Engineering-Enrolment-and-Capacity.svg",
          },
          {
            title: "Number of Colleges & Institutions",
            para: [
              "Tamil Nadu boasts:  (510 engineering colleges (96 govt + 414 private))",
              "56 universities: 2 central, 22 state, 28 deemed, 4 private",
              "By comparison: Maharashtra: ~767 engineering colleges",
              "Karnataka: ~398 engineering colleges",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Number-of-Colleges-Institutions.svg",
          },
          {
            title: "Quality vs Quantity",
            para: [
              "Tamil Nadu leads in sheer numbers: (#1 in engineering seats and top 3 in college count)",
              "But concerns exist: (Only a handful of colleges are top-ranked, while many face seat vacancies & variable quality)",
              "Compared to Kerala: (Kerala fills fewer seats, has fewer colleges—but higher literacy and institutional quality.)",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Quality-vs-Quantity.svg",
          },
          {
            title: "Higher Education Access (GER)",
            para: [
              "Tamil Nadu’s Gross Enrolment Ratio in higher education: ~47%, well above the national average (28.4%)",
              "Uttar Pradesh: 24.1% GER, despite larger state population",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Higher-Education Institutions.svg",
          },
          {
            title: "Human Development & Education Index",
            para: [
              "Tamil Nadu has a strong Human Development Index (HDI) score of 0.718, ranking among the top 10–12 states",
              "Kerala and Goa lead with HDI >0.76; Maharashtra is at 0.722",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Human-Development-Education-Index.svg",
          },
        ],
      },
    ],
  },
];

const SegmentsThree = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Key Takeaways for Super Chennai:",
            para: [
              "Literacy & Access: Chennai leads South India with strong literacy and broad enrolment, outperforming peers except Kerala.",
              "Engineering Dominance: It is India’s largest engineering education provider, though quality varies widely.",

              "Higher Education Access: Tamil Nadu stands far above the national average in GER.",
              "Room for Upgrade: To match Kerala’s quality, TN must balance scale with excellence – ongoing reforms are encouraging.",
              "Strong HDI: A high HDI (0.718) reflects Chennai’s overall social development.",
            ],
            imgs: "/images/Invest-Images/invest-icons/educations/Key-Takeaways-for-Super-Chennai.svg",
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
export default function EducationNew() {
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
        <img src="/images/education/education.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Education in Chennai</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <span>Education in Chennai</span>
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
            <p>Education in Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Legacy of Learning. Future of Innovation.</h3>
            <p>
              Chennai has long been one of India’s most intellectually vibrant
              cities. Known for its academic excellence, disciplined learning
              culture, and high literacy rates, the city is home to some of the
              nation’s top schools, colleges, universities, research
              institutions, and skilling platforms. From traditional arts to
              deep tech, Chennai’s educational ecosystem nurtures well-rounded,
              global-ready minds.
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
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
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

      {/*###################### SEGMENTS SECTIONS ######3############## */}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {Segments.map((section, index) => (
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
        {SegmentsTwo.map((section, index) => (
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
                How Tamil Nadu Stacks Up in Education
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
              Tamil Nadu’s Educational Edge
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
                    Tamil Nadu
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Karnataka{" "}
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Maharashtra
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Kerala
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    National Avg
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Tabledata.map((item, index) => (
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
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage2}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage3}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm md:text-base">
                      {item.advantage4}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {SegmentsThree.map((section, index) => (
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
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                How Tamil Nadu Stacks Up in Education
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
