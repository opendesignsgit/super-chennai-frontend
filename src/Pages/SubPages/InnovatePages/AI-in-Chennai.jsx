import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function AIinChennai() {
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

   

 const imageSections = [
  
  {
    sectionTitle: "Real-World Use, Not Just Whitepapers",
    sectionDesc: "Unlike many cities chasing crypto headlines, Chennai is focused on blockchain with purpose — solving real public problems and building lasting platforms.",

    fintechEvolution: [
      {
        points: [
          {
            title: "Why Chennai?",
            para: [
              " Over 10,000+ AI/ML engineers in the region",
              "Anchored by research from IIT Madras, Anna University, and private AI labs",
              "Home to global AI R&D centers (like Cognizant, Zoho, Freshworks)",
              "Rising number of AI-first startups in healthcare, SaaS, fintech, and industrial automation",
            ],
             imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];


const SmartChennaiinAction = [
  { company: "Zoho Corporation", speciality: "AI-powered CRM, email filtering, forecasting, RPA" },
  { company: "Freshworks", speciality: "AI chatbots, ticket automation, predictive analytics" },
  { company: "Caspian Tech", speciality: "AI for financial compliance, fraud detection" },
  { company: "GYAN.AI", speciality: "Enterprise AI for document intelligence, NLP" },
  { company: "Detect Technologies", speciality: "Industrial AI for safety, video intelligence" },
  { company: "Xeno", speciality: "AI-based marketing personalization for B2C brands" },
  { company: "Lucid Imaging", speciality: "Deep learning in medical imaging & diagnostics" },
  { company: "Fractal.ai (Chennai presence)", speciality: "AI for decision intelligence across industries" },
  { company: "SmartBots.ai", speciality: "Conversational AI and chatbot frameworks" },
  { company: "Tenovia", speciality: "Retail & eCommerce-focused AI for pricing, inventory & demand forecasting" },
];

 

const imageSections1 = [
  // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  {
    sectionTitle: "Research & Institutional Strength",
    sectionDesc:
      "From ₹1,366+ Cr investments to AI-powered flood management, Chennai is quietly building India's smartest urban ecosystem:",

    fintechEvolution: [
      {
        points: [
          {
            title: "IIT Madras",
            para: [
               "Houses the Robert Bosch Center for Data Science and AI (RBCDSAI)",
              "India’s #1 academic research lab for AI/ML publications and patents",
              "Works on cancer genomics, smart cities, language models, and self-driving systems",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "Anna University",
            para: [
              "Center for AI and Robotics (CAIR) working on drone AI, image recognition, and IoT AI",
              "Offers M.Tech and Ph.D. programs in AI/ML",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "Apollo Hospitals AI Lab (Chennai HQ)",
            para: [
              "Using AI for diagnostics, risk prediction, and patient history modeling",
              "Collaborating with IBM Watson and Microsoft Healthcare teams",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];



const FastFacts = [
  { company: " Healthcare", speciality: "Diagnosis, image analysis, triage systems (Apollo, Lucid)" },
  { company: "SaaS & CRM", speciality: "Ticket triage, churn prediction, customer sentiment (Freshworks, Zoho)" },
  { company: "Logistics", speciality: "AI for route optimization, last-mile delivery (FourKites, TVS Logistics)" },
  { company: "Industrial", speciality: "Computer vision for defect detection, safety analytics (Detect Technologies)" },
  { company: " Finance", speciality: "Fraud detection, AI underwriting (Caspian Tech, IndusInd Bank AI Lab)" },
  { company: " NLP & Bots", speciality: "Tamil-language chatbots, voice assistants, IVR AI (GYAN.ai, SmartBots)" },
 ];

 const FastStats = [
  { company: "AI-focused startups in Chennai", speciality: "60+" },
  { company: "Engineers trained in AI/ML", speciality: "~12,000+" },
  { company: "Academic publications (IIT-M, 2024)", speciality: "700+" },
  { company: "VC-backed AI startups since 2020", speciality: "30+" },
  { company: "Sectors most active", speciality: "SaaS, Healthcare, Industrial, Retail, Fintech" },
 ];


 

const imageSections2 = [
  
  {
    fintechEvolution: [
      {
        points: [
          {
            title: " Chennai’s AI Momentum",
            para: [
              <> AI accelerators & incubators like IIT-M Incubation Cell, Huddle, and TANSEED</>,
         <> Frequent AI/ML meetups by Chennai.AI, PyData Chennai, and AWS User Groups</>,
         <> Local push toward AI in Tamil, with NLP research on Indic languages</>,
                
            ],
            note2:"Chennai isn’t just using AI. It’s building responsible, useful, and deeply local intelligence — the kind that matters.",
             imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];


 const data = [
  {
    title: "Freshworks",
    points: [
      "Sector: SaaS / Customer Experience",
      "Focus: AI chatbots, support automation, predictive CX",
      "Tags: Conversational AI, CRM, B2B"
    ]
  },
  {
    title: "Detect Technologies",
    points: [
      "Sector: Industrial Safety / Oil & Gas",
      "Focus: AI-powered video intelligence & defect detection",
      "Tags: Computer Vision, Safety AI, Predictive Maintenance"
    ]
  },
  {
    title: "GYAN.AI",
    points: [
      "Sector: NLP / Enterprise SaaS",
      "Focus: AI document intelligence & Tamil NLP",
      "Tags: Large Language Models, OCR, NLP"
    ]
  },
  {
    title: "Lucid Imaging",
    points: [
      "Sector: Healthcare AI",
      "Focus: Deep learning in radiology and diagnostics",
      "Tags: Medical Imaging, Healthcare AI, ML"
    ]
  },
  {
    title: "SmartBots.ai",
    points: [
      "Sector: Conversational Interfaces",
      "Focus: Virtual assistants, WhatsApp bots, IVR AI",
      "Tags: Chatbots, Voice AI, Customer Support"
    ]
  },
  {
    title: "Zoho Corporation",
    points: [
      "Sector: SaaS / ERP",
      "Focus: AI for CRM, forecasting, security",
      "Tags: Enterprise AI, Automation, SME Tools"
    ]
  },
  {
    title: "Caspian Technologies",
    points: [
      "Sector: Fintech",
      "Focus: AI for fraud detection, finance ops, KYC",
      "Tags: Risk AI, Fintech, Compliance Tech"
    ]
  },
  {
    title: "Tenovia",
    points: [
      "Sector: Retail / eCommerce",
      "Focus: AI for demand prediction, pricing optimization",
      "Tags: RetailTech, Predictive Analytics, ML"
    ]
  },
  {
    title: "Tvasta Manufacturing Solutions",
    points: [
      "Sector: Construction Tech / Robotics",
      "Focus: AI for autonomous 3D printing of buildings",
      "Tags: Robotics, Computer Vision, Smart Cities"
    ]
  },
  {
    title: "Ishitva Robotic Systems (Chennai Arm)",
    points: [
      "Sector: Waste Management / Industrial AI",
      "Focus: AI + ML for waste sorting via computer vision",
      "Tags: Circular Economy, CV, Industry 4.0"
    ]
  },
  {
    title: "Miko (R&D in Chennai)",
    points: [
      "Sector: EdTech / Consumer Robotics",
      "Focus: AI-powered learning robots for children",
      "Tags: EdTech, NLP, Robotics, Voice AI"
    ]
  },
  {
    title: "Ganit.ai",
    points: [
      "Sector: Data Science / Enterprise AI",
      "Focus: Decision intelligence for enterprises using AI/ML",
      "Tags: Forecasting, Enterprise Analytics, B2B AI"
    ]
  },
  {
    title: "Vuram",
    points: [
      "Sector: Automation / BPM",
      "Focus: Intelligent automation with AI + low-code platforms",
      "Tags: RPA, AI Workflows, SaaS Automation"
    ]
  },
  {
    title: "Uniphore (Chennai Origin)",
    points: [
      "Sector: Conversational AI / CX",
      "Focus: AI-driven speech analytics and emotion detection",
      "Tags: Voice AI, Sentiment Analysis, Enterprise CX"
    ]
  },
  {
    title: "vPhrase (Chennai Expansion)",
    points: [
      "Sector: Natural Language Generation",
      "Focus: Auto-generating narratives from data using NLG",
      "Tags: Data to Text, NLP, BI"
    ]
  },
  {
    title: "Qube Cinema Technologies",
    points: [
      "Sector: Media / AI + Film Tech",
      "Focus: AI for video/audio encoding, real-time adjustments",
      "Tags: MediaTech, AI Compression, Content Delivery"
    ]
  },
  {
    title: "Bridgei2i Analytics (Delivery Center in Chennai)",
    points: [
      "Sector: Enterprise AI",
      "Focus: AI accelerators for sales, operations, and marketing",
      "Tags: Predictive Analytics, Enterprise SaaS, ML"
    ]
  },
  {
    title: "Draup (Chennai Delivery + AI Lab)",
    points: [
      "Sector: Talent Intelligence / SaaS",
      "Focus: AI-based workforce planning, skills mapping",
      "Tags: HRTech, Talent AI, B2B SaaS"
    ]
  }
];

const imageSections3 = [
  // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  {
    sectionTitle: "AI Heat Map: Chennai's Intelligence Zones",
    sectionDesc:
      "From Hobby Labs to Aerospace Innovation",

    fintechEvolution: [
      {
        points: [
          {
            title: "Where AI Lives, Learns & Leads",
            para: [
              "AI in Chennai isn’t scattered. It’s clustered, smart, and quietly powerful.",
              
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "Top 6 AI Activity Zones",
            para: [
              "You can visualize this as a color-gradient heat map (from cool to hot) based on AI density — ideally layered over Google Maps or Mapbox. Here's the content breakdown:",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
             {
            title: "Tidel Park & OMR Tech Corridor",
            para: [
              <><strong>AI Intensity:</strong> Very High</>,
              <>Why it’s hot:</>,
              "Headquarters or major offices of Freshworks, Zoho, Detect Technologies, Uniphore, and Vuram",
              "Close to IIT Madras Research Park and startup incubators",
              "Multiple co-working spaces hosting AI-focused startups",
              <><strong>Key Companies:</strong></>,
              "Freshworks, SmartBots, Ganit.ai, Vuram, Draup",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
  title: "IIT Madras Zone – Adyar / Taramani",
  para: [
    <><strong>AI Intensity:</strong> High</>,
    <>Why it’s hot:</>,
    "Home to the Robert Bosch Centre for Data Science & AI (RBCDSAI)",
    "Cutting-edge research in NLP, robotics, and bio-AI",
    "Dozens of AI startups incubated via IIT-M Incubation Cell",
    <><strong>Key Labs & Startups:</strong></>,
    "RBCDSAI, Fabheads Automation, Tvasta, Detect, GYAN.ai",
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},{
  title: "Guindy – Anna University Belt",
  para: [
    <><strong>AI Intensity:</strong> Medium–High</>,
    <>Why it’s hot:</>,
    "Legacy research centers from Anna University, CAIR, and DRDO",
    "AI in robotics, defense tech, and industrial ML",
    "Chennai Trade Centre nearby for tech expos",
    <><strong>Key Players:</strong></>,
    "Anna University AI Lab, Ishitva, Qube Cinema, Lucid Imaging",
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "Nungambakkam – Kilpauk Zone",
  para: [
    <><strong>AI Intensity:</strong> Medium</>,
    <>Why it’s notable:</>,
    "Densely packed with healthcare institutions",
    "Hub for medical imaging AI, dental AI, and diagnostic tech",
    "Clinics use AI from Lucid, Practo, and dental startups",
    <><strong>Key Companies:</strong></>,
    "Lucid Imaging, private hospital AI pilots",
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "Ambattur – Industrial Belt",
  para: [
    <><strong>AI Intensity:</strong> Emerging</>,
    <>Why it’s next:</>,
    "Small factories adopting AI for predictive maintenance, QC, and automation",
    "MSME innovation programs from TANSTIA and TANSIDCO",
    <><strong>Activity Type:</strong></>,
    "AI + IoT integration, MSME pilots, affordable automation",
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "Tambaram – MedTech & EdTech Nucleus",
  para: [
    <><strong>AI Intensity:</strong> Emerging</>,
    <>Why it matters:</>,
    "Universities & engineering colleges like SRM, VIT, Crescent doing AI research",
    "Miko, AI EdTech pilots, and robotics competitions originate here",
    <><strong>Key Companies / Labs:</strong></>,
    "Miko, SRM AI Lab, VIT Healthcare Research",
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},  
        ],
      },
    ],
  },
];
 



 
  const images = [
    {
      src: "/images/Innovate-Images/SubPages/IT-Software-thum.jpg",
      title: "IT and Software Development",
      link: "/itandsoftwaredevelopment",
    },
    {
      src: "/images/Innovate-Images/SubPages/Artificial-Intelligence-thum.jpg",
      title: "Artificial Intelligence and Machine Learning",
      link: "/artificialintelligenceandmachinelearning",
    },
    {
      src: "/images/Innovate-Images/SubPages/Electric-Vehicles-thum.jpg",
      title: "Electric Vehicles (EV)",
      link: "/ElectricVehicles",
    },
    {
      src: "/images/Innovate-Images/SubPages/Smart-City-thum.jpg",
      title: "Smart City Initiatives ",
      link: "/smartcityinitiatives",
    },
    {
      src: "/images/Innovate-Images/SubPages/Healthcare-Tech-thum.jpg",
      title: "Healthcare Tech Innovation",
      link: "/healthcaretechinnovation",
    },
    {
      src: "/images/Innovate-Images/SubPages/Robotics-Automation-thum.jpg",
      title: "Robotics and Automation",
      link: "/roboticsandautomation",
    },
    {
      src: "/images/Innovate-Images/SubPages/Blockchain-Fintech-thum.jpg",
      title: "Blockchain and Fintech",
      link: "/blockchainandfintech",
    },
    {
      src: "/images/Innovate-Images/SubPages/Automotive-Tech-thum.jpg",
      title: "Automotive Tech and R&D",
      link: "/automotivetechandrandd",
    },
    {
      src: "/images/Innovate-Images/SubPages/Education-Tech-thum.jpg",
      title: "Educational Institutions ",
      link: "/educationinstitutions",
    },
    {
      src: "/images/Innovate-Images/SubPages/3D-Printing-Additive-Manufacturing-thum.jpg",
      title: "3D Printing and Additive Manufacturing ",
      link: "/threedprintingandadditivemanufacturing",
    },
    {
      src: "/images/Innovate-Images/SubPages/Augmented Reality-Virtual Reality-thum.jpg",
      title: "Augmented Reality ",
      link: "/augmentedreality",
    },
    {
      src: "/images/Innovate-Images/SubPages/Agriculture-Tech-thum.jpg",
      title: "Agriculture Tech ",
      link: "/agriculturetech",
    },
  ];

  // Custom Arrow Components
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
          <img
            src="/images/Innovate-Images/SubPages/Artificial-Intelligence-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>AI in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">AI in Chennai </a>
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
              <p>
                Innovate &nbsp; in Chennai &nbsp; Innovate &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Where Code Thinks, Learns, and Predicts</h3>
              <p>Chennai has quietly transformed into one of India's most promising AI innovation hubs — with deep talent, strong academic foundations, and a growing ecosystem of startups and enterprises applying Artificial Intelligence to solve real-world problems.
</p>
<p>From conversational bots and machine vision to healthcare AI and predictive logistics, Chennai's AI scene is practical, applied, and scaling fast.
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
             {item.note && (
              <p className="text-gray-700 italic">{item.note}</p> // ✅ note displayed clearly
            )}
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
              {item.para.map((point, k) => (
                <li key={k}>{point}</li>
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

        
    <div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"> Top AI Companies in Chennai</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Company</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Focus Area</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {SmartChennaiinAction.map((giant, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.company}</td>
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
       

       

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
    <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
       {/* <p>{section.sectionDesc}</p> */}
      {section.fintechEvolution.map((tenant, i) => (
        <div key={i}>
          {tenant.points.map((item, j) => (
            <div key={j} className="clcboxItemss flex mb-4">
              <div className="clcboxIImg">
                <img src={item.imgs} alt={item.title} />
              </div>
              <div className="clcboxICont">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {item.note && (
                  <p className="text-gray-700 mb-1">{item.note}</p>
                )}
                {item.para && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                    {item.para.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                )}

                {item.note2 && (
                  <p className="text-gray-700  mb-1">{item.note2}</p>
                )}
                {item.para2 && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                    {item.para2.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
))}



<div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"> AI in Action: Chennai Use-Cases</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        These companies have made Chennai their technology fortress:
      </p>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Sector</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Application</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {FastFacts.map((giant, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.company}</td>
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"> Fast Stats</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Sector</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Application</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {FastStats.map((giant, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.company}</td>
              <td className="px-4 py-3 text-gray-800 text-sm md:text-base">{giant.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    

    {imageSections2.map((section, index) => (
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
    <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
       {/* <p>{section.sectionDesc}</p> */}
      {section.fintechEvolution.map((tenant, i) => (
        <div key={i}>
          {tenant.points.map((item, j) => (
            <div key={j} className="clcboxItemss flex mb-4">
              <div className="clcboxIImg">
                <img src={item.imgs} alt={item.title} />
              </div>
              <div className="clcboxICont">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {item.note && (
                  <p className="text-gray-700 mb-1">{item.note}</p>
                )}
                {item.para && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                    {item.para.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                )}

                {item.note2 && (
                  <p className="text-gray-700  mb-1">{item.note2}</p>
                )}
                {item.para2 && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                    {item.para2.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
))}

  <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
      <h2 className="text-2xl font-bold text-center mb-6">Chennai’s Tech Puzzle: The Key Pieces</h2>
      {data.map((section, index) => (
        <div key={index} className="card rounded-2xl p-4 mb-4 shadow">
          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {imageSections3.map((section, index) => (
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
    <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
       <h2 className="text-2xl font-bold">  {section.sectionTitle} </h2>
       <p class="mb-4 text-gray-600 text-center mb-10">{section.sectionDesc}</p>
      {section.fintechEvolution.map((tenant, i) => (
        <div key={i}>
          {tenant.points.map((item, j) => (
            <div key={j} className="clcboxItemss flex mb-4">
              <div className="clcboxIImg">
                <img src={item.imgs} alt={item.title} />
              </div>
              <div className="clcboxICont">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {item.note && (
                  <p className="text-gray-700 mb-1">{item.note}</p>
                )}
                {item.para && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                    {item.para.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                )}

                {item.note2 && (
                  <p className="text-gray-700  mb-1">{item.note2}</p>
                )}
                {item.para2 && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                    {item.para2.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
))}

         </div>

        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Chennai’s tech pulse</h4>
              <p>
                Chennai's software development industry is drawing individuals
                from all over the world for work and business. With a
                knowledgeable staff, it positions itself as a major center for a
                range of IT solutions.
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
