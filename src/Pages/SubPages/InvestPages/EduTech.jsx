import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function EduTech() {
 
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
      title: "Why Chennai for EduTech?",
      para: [
        <><strong>Academic Capital</strong> – Home to premier institutions like IIT Madras, Anna University, and thousands of schools & colleges.</>,
        <><strong>Strong Content Culture</strong> – Tamil Nadu has a legacy of textbook publishers, curriculum creators, and assessment thinkers.</>,
        <><strong>Engineering Meets Education</strong> – A unique blend of tech talent + pedagogical depth = world-class edutech.</>,
        <><strong>Focus on Career-Readiness</strong> – Most Chennai startups focus not just on marks, but on skills that matter.</>
      ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
  ],
},
      {
        points: [
          {
            title: "Notable EduTech Startups in Chennai",
            para: [
              <><strong>GUVI</strong> IIT-M incubated platform offering tech courses in regional languages like Tamil, Telugu & Hindi. </>,
              <>Collaborations between academia and industry accelerate prototyping and deployment.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
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
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
            note: "Hardware + software + policy alignment makes Chennai a mobility powerhouse.",
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


 
  const data = [
    {
      aspect: "Learning Tools",
      then: "Chalk & talk, textbooks, printed notes",
      now: "Digital platforms, tablets, interactive smartboards",
    },
    {
      aspect: "Tuition Culture",
      then: "Physical coaching centers, notebooks",
      now: "App-based personalized learning, AI tutors",
    },
    {
      aspect: "Language Medium",
      then: "Mostly English or Tamil (segregated)",
      now: "Multilingual content – Tamil, Telugu, Hindi, English",
    },
    {
      aspect: "Access to Education",
      then: "Urban-centric, tier-1 focus",
      now: "Pan-India access via mobile & vernacular-first platforms",
    },
    {
      aspect: "Early Learning",
      then: "Black slates, rhymes, physical games",
      now: "STEM kits, AR learning, coding for kids (Flinto, Wizklub)",
    },
    {
      aspect: "Higher Education",
      then: "Classroom lectures, lab-heavy learning",
      now: "Online certifications, project-based skilling (GUVI, Skill-Lync)",
    },
    {
      aspect: "Exams & Outcomes",
      then: "Rote learning, final exams focus",
      now: "Skill-based, outcome-driven learning with real-world projects",
    },
    {
      aspect: "Teacher Role",
      then: "Authority figure, one-way delivery",
      now: "Facilitator, guide, blended learning environments",
    },
    {
      aspect: "Career Prep",
      then: "Engineering or medical entrance only",
      now: "AI, EVs, cloud computing, and startup-focused pathways",
    },
    {
      aspect: "Education Players",
      then: "Schools, colleges, coaching centers",
      now: "EduTech startups, online academies, micro-credentialing",
    },
  ];

const WhatsNextData1 = [
  {
    items: [
      {
        title: "What It Tells Us",
        description: [
          "Chennai is no longer just teaching students how to pass exams—it’s preparing them to solve real-world problems.",
          "It’s a shift from marks to mastery, from memorizing to making, and from one-size-fits-all to personalized paths."
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
            <h3> EduTech</h3>
            <div className="breadCrum">
              <Link to="/invest">Invest</Link> - <span> EduTech</span>
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
            EduTech </p>
          </div>
          <div className="workIntro">
            <h3>EduTech Startups in Chennai: Rethinking Learning, the Chennai Way</h3>
            <p>Chennai has always taken education seriously. From its iconic engineering colleges to ancient gurukuls and modern smart classrooms, this city lives and breathes learning.
But today, a new wave is rising—EduTech startups from Chennai are reimagining how India learns, upskills, and grows.
</p>
<p>These startups are not just putting classes online. They're using AI, gamification, vernacular content, career-focused pathways, and even AR/VR to create next-gen learning experiences for students, professionals, and institutions.
</p>
<p> Whether you're a parent, a college, a hiring company, or a curious learner—Chennai's EduTech scene has something for you.
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


   <section className="overflow-x-auto p-4 tableOut">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Aspect</th>
            <th className="border p-2 text-left">Then (1990s–2000s)</th>
            <th className="border p-2 text-left">Now (2020s–2025)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2 font-medium text-gray-700">{item.aspect}</td>
              <td className="border p-2 text-gray-600">{item.then}</td>
              <td className="border p-2 text-gray-600">{item.now}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

 
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
