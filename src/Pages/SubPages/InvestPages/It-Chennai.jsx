import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ItChennai() {
  const chennaiStartupPowerhouseData = [
    {
      category: "Why Chennai is a Startup Powerhouse",
      items: [
        {
          title: " Brains + Bytes",
          description:
            "With top-tier institutions like IIT Madras, Anna University, and SRM, Chennai is a talent powerhouse producing engineers, designers, and entrepreneurs who don't just code—they innovate.",
          quote: "We’re not just building apps. We’re solving for scale—India-scale.",
          author: "— Founder's quote from a Chennai SaaS startup",
        },
        {
          title: "Cost Advantage, Global Quality",
          description:
            "Startups in Chennai enjoy 40–50% lower operational costs compared to Bengaluru and Mumbai, yet deliver world-class software, AI models, and enterprise products to global clients.",
        },
         {
          title: "Community + Collaboration",
          description:
            "Incubators like IITM Incubation Cell, TiE Chennai, and government-backed hubs like StartupTN are fueling growth with mentorship, early-stage funding, and policy support.",
        },
      ],
    },
   
  ];

  const chennaiStartupStoriesData = [
    {
      category: "Stories That Inspire",
      items: [
        {
           imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: "Agnikul Cosmos: Launching Rockets from Chennai",
          description:
            "Incubated at IIT Madras, Agnikul built India’s first private orbital launch vehicle. They’re not just sending rockets into space—they’re putting Chennai on the global aerospace map.",
        },
        {
           imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: " Uniphore: Redefining AI Conversations",
          description:
            "Born in Chennai, now operating globally, Uniphore uses AI to revolutionize how call centers and customer support interact—with emotional intelligence built into bots.",
        },
        {
           imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: " InfySEC: The Ethical Hackers of India",
          description:
            "With cybersecurity at its core, this Chennai firm trains the next generation of ethical hackers, helping protect corporations and governments from real-world threats.",
        },
      ],
    },
  ];

  const data = [
    { indicator: "Startup Count", advantage: "2,200+ and growing" },
    { indicator: "Global Ecosystem Rank (StartupBlink)", advantage: "#88 in the world, #6 in India" },
    { indicator: "IT Workforce", advantage: "Over 1 million professionals" },
    { indicator: "Top Emerging Sectors", advantage: "SaaS, EV, SpaceTech, AR/VR, HealthTech" },
    { indicator: "VC Presence", advantage: "Matrix Partners, Blume, Accel, Elevation" },
    { indicator: "Infra Support", advantage: "DLF Cybercity, TIDEL Park, IITM Research Park" },
  ];


  const whatSetsChennaiApart = [
  {
    imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    title: "Startup-Minded Engineers",
    desc: "Not just job-seekers, many engineers from Chennai colleges are now startup founders at 22.",
  },
  {
    imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    title: "Global Focus, Local Ethos",
    desc: "Chennai startups think global but remain deeply rooted in Tamil values and collaboration.",
  },
  {
    imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    title: "Rain-Proof Resilience",
    desc: "Despite floods and power cuts, startups here have weathered literal storms—and come out stronger.",
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
            title: "Disprz",
            para: [
              <>
                <strong>Founded:</strong> 2015
              </>,
              <>
                <strong>Focus:</strong> AI-powered learning and skilling platform for enterprises.
              </>,
              <>
                <strong>Highlights:</strong> Over 1.7 million users globally; recognized as a leader in corporate learning platforms. en.wikipedia.org
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "Uniphore",
            para: [
              <>
                <strong>Founded:</strong> 2008 (IIT Madras incubated)
              </>,
              <>
                <strong>Focus:</strong> Conversational AI and automation for customer service.
              </>,
              <>
                <strong>Highlights:</strong> Raised over $140 million; expanded globally with acquisitions in Europe and Israel. en.wikipedia.org + 17knetwork.com
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "Agnikul Cosmos",
            para: [
              <>
                <strong>Founded:</strong> 2017 (IIT Madras incubated)
              </>,
              <>
                <strong>Focus:</strong> Small satellite launch vehicles.
              </>,
              <>
                <strong>Highlights:</strong> Developed the Agnibaan rocket; recognized globally for affordable space access solutions. builtinchennai.in + 187knetwork.com + timesofindia.indiatimes.com
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "OrbitAID Aerospace",
            para: [
              <>
                <strong>Founded:</strong> 2020
              </>,
              <>
                <strong>Focus:</strong> On-orbit satellite servicing and refueling technologies.
              </>,
              <>
                <strong>Highlights:</strong> Completed second zero-gravity mission, advancing sustainable space operations. failory.com + wellfound.com + economictimes.indiatimes.com
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "Fyn Mobility",
            para: [
              <>
                <strong>Founded:</strong> 2018
              </>,
              <>
                <strong>Focus:</strong> Electric Vehicle-as-a-Service (EVaaS) solutions.
              </>,
              <>
                <strong>Highlights:</strong> Raised $2.5 million to expand globally; offers EV fleet management and charging infrastructure. economictimes.indiatimes.com
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "EdgeUp (by Zaryah Angels)",
            para: [
              <>
                <strong>Founded:</strong> 2024
              </>,
              <>
                <strong>Focus:</strong> AI-powered exam coaching platform.
              </>,
              <>
                <strong>Highlights:</strong> Developed proprietary AI models for personalized learning; aims to reach 10 million users in five years. en.wikipedia.org + timesofindia.indiatimes.com
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "InfySEC",
            para: [
              <>
                <strong>Founded:</strong> 2010
              </>,
              <>
                <strong>Focus:</strong> Cybersecurity services and training.
              </>,
              <>
                <strong>Highlights:</strong> Provides security solutions to enterprises and governments; known for ethical hacking expertise. en.wikipedia.org
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            <h3> IT  Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest">Invest</Link> - <span> IT  Chennai</span>
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
            <p>
              IT  Chennai

            </p>
          </div>
          <div className="workIntro">
            <h3>The Silicon Shore of South India</h3>
            <p> Once known as a conservative industrial hub, Chennai has quietly transformed into a hotbed for tech startups, now fondly called the “Silicon Shore of South India.” Its blend of traditional business ethics and bold digital ambitionhas birthed over 2,200 startups across industries—from space-tech to deep-tech, AR/VR, SaaS, and EV innovation.
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
                 <div  key={idx} className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  {item.quote && (
                    <blockquote className="italic text-indigo-700 border-l-4 border-indigo-500 pl-4">
                      “{item.quote}”<br />
                      {item.author && <span className="text-gray-500 text-sm">{item.author}</span>}
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
               <div key={idx} className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                   <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                  <h3 className="text-xl md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Visual Snapshot Table */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">  Visual Snapshot</h2>
        </div>
        <div className="overflow-x-auto">
           <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Indicator</th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Chennai’s Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{item.indicator}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm md:text-base">{item.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What Sets Chennai Apart */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What Sets Chennai Apart?</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatSetsChennaiApart.map((item, index) => (
            <div key={index} className="card rounded-xl shadow p-6 hover:shadow-lg transition">
               <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
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

      {/* Chennai IT Startup Ecosystem Insights */}
     <section className="py-12 px-4">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold"> Chennai's IT Startup Ecosystem: Key Insights</h2>
  </div>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
    {ecosystemInsights.map((insight, index) => (
      <div
        key={index}
        className="card rounded-xl shadow p-6 hover:shadow-md transition flex flex-col"
      >
        <img
          src={insight.img}
          alt={insight.title}
          className="w-20 h-20 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
        <p>{insight.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Notable IT Parks in Chennai */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold"> Notable IT Parks in Chennai</h2>
        </div>
       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
    {itParks.map((insight, index) => (
      <div
        key={index}
        className="card rounded-xl shadow p-6 hover:shadow-md transition flex flex-col"
      >
        <img
          src={insight.img}
          alt={insight.title}
          className="w-20 h-20 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
        <p>{insight.desc}</p>
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
              Chennai's real estate market offers consistent demand and income. By its developed infrastructure, this city market offers substantial profits from both business and residential areas.
            </p>
          </div>
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div key={idx} className="ExplorePageSliderImage">
                  <a href={img.link} style={{ textDecoration: "none" }}>
                    <div className="relative rounded overflow-hidden">
                      <img src={img.src} alt={img.title} className="w-full h-auto block" />
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
