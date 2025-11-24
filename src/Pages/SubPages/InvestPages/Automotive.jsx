import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Automotive() {
 
const imageSections = [
  // Existing Deep Tech & AI Evolution section (keep as-is),

  {
    sectionTitle: "Chennai’s Auto Startup Scene: Building the Future of Mobility",
    sectionDesc:
      "Chennai, India’s auto hub, is now a hotbed for clean mobility, EV innovation, and automotive deep tech, backed by a rich industrial DNA, strong talent, and government support.",

    fintechEvolution: [
      {
        points: [
          {
            title: "Built on Auto DNA",
            para: [
              <>The city has decades of expertise in automotive engineering, design, and manufacturing.</>,
              <>Strong supplier networks, Tier-1 OEMs, and deep manufacturing know-how.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/Built on Auto DNA.svg",
            note: "Chennai’s legacy as India’s Detroit is now fueling its startup scene.",
          },
        ],
      },
      {
        points: [
          {
            title: "Strong Talent Pool",
            para: [
              <>From IIT-Madras to industrial design schools, Chennai produces mobility-focused minds.</>,
              <>Collaborations between academia and industry accelerate prototyping and deployment.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/Strong Talent Pool.svg",
            note: "Skilled engineers and designers drive the ecosystem forward.",
          },
        ],
      },
      {
        points: [
          {
            title: "Test Track Ready",
            para: [
              <>Nearby industrial corridors and private test tracks enable rapid testing and iteration.</>,
              <>Government support eases clearances for on-road trials and scale-up.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/Test Track Ready.svg",
            note: "Quick to test, quick to iterate, quick to market.",
          },
        ],
      },
      {
        points: [
          {
            title: "EV Push and Policy Support",
            para: [
              <>Tamil Nadu’s EV policy is drawing investments, subsidies, and incentives.</>,
              <>EV-specific manufacturing zones in Hosur and Oragadam foster scale-up.</>,
              <>Automotive Mission Plan 2026 provides a stable roadmap for startups.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/EV Push and Policy Support.svg",
            note: "Clean mobility innovation is getting strong policy tailwinds.",
          },
        ],
      },
      {
        points: [
          {
            title: "Key Focus Areas of Chennai’s Auto Startups",
            para: [
              <><strong>Electric Vehicles (EVs):</strong> Two-wheelers, cargo bikes, retrofitting kits.</>,
              <><strong>Battery Tech & Swapping:</strong> Efficient batteries and charging infra.</>,
              <><strong>Autonomous Tech:</strong> AI-based vision, driver safety, and automation.</>,
              <><strong>Connected Vehicles:</strong> Telematics, fleet management, and analytics.</>,
              <><strong>Logistics & Last-Mile Mobility:</strong> Smarter delivery, fleet electrification.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/Key Focus Areas of Chennai’s Auto Startups.svg",
            note: "A multi-layered, deep tech-heavy approach to mobility.",
          },
        ],
      },
      {
        points: [
          {
            title: "Notable Automotive Startups in Chennai",
            para: [
              <><strong>Ather Energy (manufacturing base):</strong> Premium electric scooters.</>,
              <><strong>WayCool (via Censa):</strong> Connected vehicle tech for agri-supply chains.</>,
              <><strong>Raptee Energy:</strong> High-performance electric motorcycles.</>,
              <><strong>RACEnergy:</strong> Battery-swapping infra for electric autos.</>,
              <><strong>TVS iQube:</strong> Startup-style division driving EV innovation.</>,
              <><strong>ePlane Company:</strong> Hybrid electric flying taxis.</>,
              <><strong>Muse Wearables Auto Division:</strong> Driver wellness + fatigue detection.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/Notable Automotive Startups in Chennai.svg",
            note: "Each startup solves a different piece of the mobility puzzle.",
          },
        ],
      },
      {
        points: [
          {
            title: "What’s Powering This Movement?",
            para: [
              <><strong>IIT-Madras Incubation & R&D:</strong> A deep tech launchpad for mobility startups.</>,
              <><strong>EV-Specific Manufacturing Zones:</strong> Hosur, Oragadam, and adjoining corridors.</>,
              <><strong>Private Testing Grounds:</strong> Rapid iteration for hardware-heavy products.</>,
              <><strong>Policy Support:</strong> Tamil Nadu’s EV Policy and Automotive Mission Plan 2026.</>,
              <><strong>Industry-Academia Ties:</strong> Bridging research with scalable products.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/What’s Powering This Movement.svg",
            note: "Hardware + software + policy alignment makes Chennai a mobility powerhouse.",
          },
        ],
      },
    ],
  },
];


 

const imageSections1 = [
  {
    sectionTitle: "Chennai’s Automotive Innovation Timeline (1995–2025)",
    sectionDesc: "From Factory Floors to Future Mobility",
    fintechEvolution: [
      {
        points: [
          {
            title: "1995–2005: Chennai Becomes India’s Auto Capital",
            para: [
              <>Ford, Hyundai, BMW, and Renault-Nissan set up major manufacturing hubs.</>,
              <>Chennai–Oragadam corridor develops as a global auto supply chain zone.</>,
              <>Tier-1 suppliers like Brakes India, Sundaram Clayton, and Wheels India scale globally.</>,
              <><strong>Focus:</strong> Internal combustion engines, mass production, export-led growth.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/1995–2005 Chennai Becomes India Auto Capital.svg",
            note: " Chennai earns its 'Detroit of India' moniker during this decade.",
          },
        ],
      },
      {
        points: [
          {
            title: "2006–2012: Rise of R&D and Design",
            para: [
              <>Ashok Leyland, TVS, and MNCs begin investing in in-house design and testing.</>,
              <>Chennai emerges as an R&D back-office for Detroit, Tokyo, and Stuttgart.</>,
              <>Automotive engineering talent deepens via IIT-M, CEG, MIT (Chromepet).</>,
              <><strong>Focus:</strong> Vehicle engineering, simulation tech, design validation.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/2006–2012 Rise of R&D and Design.svg",
            note: " Transition from pure manufacturing to design & testing capabilities.",
          },
        ],
      },
      {
        points: [
          {
            title: "2013–2017: EVs and Smart Mobility Enter the Scene",
            para: [
              <>Tamil Nadu EV Policy (draft) begins attracting clean mobility players.</>,
              <>Ather Energy selects Hosur (near Chennai) as its manufacturing base.</>,
              <>Logistics startups experiment with electric last-mile delivery vehicles.</>,
              <><strong>Focus:</strong> Early electric mobility experiments, battery localization.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/2013–2017 EVs and Smart Mobility Enter the Scene.svg",
            note: " The seeds of clean mobility begin to sprout around Chennai.",
          },
        ],
      },
      {
        points: [
          {
            title: "2018–2021: The Startup Surge",
            para: [
              <>Raptee Energy, ePlane Company, and Censa (WayCool) launch deep-tech mobility solutions.</>,
              <>Connected vehicle startups rise with fleet analytics, telematics, and EV dashboards.</>,
              <>TVS launches iQube, blending legacy muscle with startup-style innovation.</>,
              <>EV ecosystem clusters emerge in Oragadam, Sriperumbudur, and Chengalpattu.</>,
              <><strong>Focus:</strong> EVs, connected tech, autonomous systems, smart logistics.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/2018–2021 The Startup Surge.svg",
            note: " A new wave of mobility startups begins defining Chennai’s future mobility identity.",
          },
        ],
      },
      {
        points: [
          {
            title: "2022–2025: Deep Tech Meets Mobility",
            para: [
              <>ePlane Company begins aerial mobility testing at IIT-M campus.</>,
              <>Battery-swapping and charging infra expands, supported by TN government and private players.</>,
              <>Startups integrate AI for computer vision, driver alerts, and predictive maintenance.</>,
              <>EV policy is refined for scale, incentivizing OEMs, infra, and component makers.</>,
              <><strong>Focus:</strong> Full-stack mobility innovation—hardware + software + infra.</>,
            ],
            imgs: "/images/Invest-Images/invest-icons/Invest-Automotive-icons/2022–2025 Deep Tech Meets Mobility.svg",
            note: " Chennai moves toward becoming a clean, smart mobility testbed for India.",
          },
        ],
      },
    ],
  },
];



 



const WhatsNextData = [
  {
    items: [
      {
        title: "What’s Next?",
        description: [
          "Whether it’s an electric scooter zipping through Mylapore, or an AI-powered fleet dashboard running a logistics company from Guindy—the future of mobility is being written in Chennai.",
          "And the best part? It’s not just cleaner. It’s smarter, faster, and made with the kind of deep engineering that Chennai has always been known for.",
        "Super Chennai tracks the pulse of this transformation. Discover the startups. Follow their journeys. Understand how this city is not just making vehicles—it’s reimagining how India moves."
        ]
      }
    ]
  }
];

const WhatsNextData1 = [
  {
    items: [
      {
        title: "What’s Next?",
        description: [
          "From combustion to code, from garages to the skies—Chennai is no longer just building vehicles. It’s building the future of how India moves, works, and lives.",
          "Whether you’re an OEM, a fleet owner, a startup founder, or just an everyday commuter, you’re already part of this journey."
        ]
      }
    ]
  }
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
        <img src="/images/Invest-Images/SubPages/automotive.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Automotive Startups in Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Invest</Link> - <span> Automotive</span>
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
            Automotive  </p>
          </div>
          <div className="workIntro">
            <h3>
              {/* Automotive Startups in Chennai:  */}
              Driving the Future of Mobility 
            </h3>
            <p> Chennai isn’t just the Detroit of India for its big auto factories—it's fast becoming the startup capital of future mobility.</p>
<p>From electric scooters to autonomous driving software, today’s automotive innovations are being prototyped, built, and tested right here in the city.</p>
<p>While legacy giants like Hyundai, TVS, and Ashok Leyland laid the foundation, a new generation of nimble, tech-first automotive startups are now shaping what comes next—cleaner vehicles, smarter systems, connected fleets, and sustainable transport solutions.
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
            <div className="space-y-6 bg-white p-4  rounded bottomListIcon w-full">
  {section.fintechEvolution.map((tenant, i) => (
    <div key={i}>
      {tenant.points.map((item, j) => (
        <div key={j} className="clcboxItemss flex mb-4">
          <div className="clcboxIImg">
            <img src={item.imgs} alt={item.title} />
          </div>
          <div className="clcboxICont">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
              {item.para.map((point, k) => (
                <li key={k}>{point}</li>
              ))}
            </ul>
            {item.note && (
              <p className="text-gray-700 italic">{item.note}</p> // ✅ note displayed clearly
            )}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>
          </section>
        ))}

      {/* Why Chennai is a Startup Powerhouse */}
        <section className=" py-12 px-4 md:px-8 pt-0">
         {WhatsNextData.map((section, index) => (
          <div key={index} className="max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
              {section.category}
            </h2>
            <div className="grid grid-cols-1  gap-6">
              {section.items.map((item, idx) => (
                 <div  key={idx} className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                  {item.description.map((para, idx) => (
  <p key={idx}>{para}</p>
))}
                
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
       <div className="max-w-7xl mx-auto text-center"><h2 className="text-3xl md:text-4xl font-bold">
                {section.sectionTitle} 
                </h2>
                <p>{section.sectionDesc}</p>
                </div>
               
            <div className="space-y-6 bg-white p-4  rounded bottomListIcon w-full">
  {section.fintechEvolution.map((tenant, i) => (
    <div key={i}>
      {tenant.points.map((item, j) => (
        <div key={j} className="clcboxItemss flex mb-4">
          <div className="clcboxIImg">
            <img src={item.imgs} alt={item.title} />
          </div>
          <div className="clcboxICont">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
              {item.para.map((point, k) => (
                <li key={k}>{point}</li>
              ))}
            </ul>
            {item.note && (
              <p className="text-gray-700 italic">{item.note}</p> // ✅ note displayed clearly
            )}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>
          </section>
        ))}

      

      {/* Why Chennai is a Startup Powerhouse */}
       <section className=" py-12 px-4 md:px-8 pt-0">
         {WhatsNextData1.map((section, index) => (
          <div key={index} className="max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
              {section.category}
            </h2>
            <div className="grid grid-cols-1  gap-6">
              {section.items.map((item, idx) => (
                 <div  key={idx} className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                  {item.description.map((para, idx) => (
  <p key={idx}>{para}</p>
))}
                
                </div>
              ))}
            </div>
          </div>
        ))}
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
