import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function RoboticsinChennai() {
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
            title: "Why Chennai is Becoming a Robotics Powerhouse",
            para: [
             <><strong>Strong base of industrial automation –</strong> auto, logistics, manufacturing</>,
  <><strong>Top-tier R&D –</strong> IIT Madras, Anna University, SRM</>,
  <><strong>High-skill talent –</strong> mechatronics, embedded systems, AI</>,
  <><strong>Auto + EV industries –</strong> driving robotics-led efficiency</>,
  <><strong>Robotics rise –</strong> warehousing, logistics, smart mobility</>,

            ],
             imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];

 
const evData = [
  { company: "Planys Technologies", focus: "Underwater robots (ROVs)", highlights: "IIT-M startup; used for offshore oil & dams" },
  { company: "Genrobotics", focus: "Sanitation robots", highlights: "Works with Chennai Corporation on manhole robots" },
  { company: "Auro Robotics", focus: "Autonomous campus shuttles", highlights: "Acquired by Ridecell; roots in IIT-M" },
  { company: "Symbionic Tech", focus: "Medical robotics", highlights: "Builds prosthetic arms with neural controls" },
  { company: "CVRDE-DRDO", focus: "Military robotics", highlights: "Chennai-based arm building unmanned ground vehicles" },
  { company: "Orange Robotics", focus: "Warehouse & service robots", highlights: "Conveyor bots, service droids for malls" },
  { company: "AjnaLens (Chennai office)", focus: "AR + robotics", highlights: "Training modules for industrial robotics & defense" },
  { company: "Sastra Robotics (Chennai support)", focus: "Industrial robotic arms", highlights: "Used in automotive electronics testing" }
];

 
 
 
 
const FastFacts = [
 { company: "Automotive (Hyundai, TVS, Ashok Leyland)", speciality: "Welding bots, assembly-line AI, painting arms" },
  { company: "Healthcare (Apollo, SIMS)", speciality: "Robotic surgery (Da Vinci systems), telepresence robots" },
  { company: "Logistics (DHL, Gati, WayCool)", speciality: "Warehouse automation, pick-n-place arms" },
  { company: "Public Works (Smart City Mission)", speciality: "Robotic sewer cleaning, surveillance bots" },
  { company: "Education (Robotix Labs, Kidobotikz)", speciality: "Ed-tech and STEM kits using real robots" },
 ];

 

 const FastStats = [
  { company: "Robotics-focused startups", speciality: "40+" },
  { company: "Active research labs", speciality: "15+" },
  { company: "Robotic surgery centers", speciality: "12+ (Apollo, Gleneagles, SRMC)" },
  { company: "Annual robotics hackathons", speciality: "10+" },
  { company: "EV export-ready units", speciality: "15+" },
   { company: "STEM robotics academies", speciality: "25+" },
 ];
 
  const FastStats1 = [
{ company: "Kidobotikz", speciality: "Robotics kits + training for kids & teens" },
  { company: "RoboClub – IIT Madras", speciality: "Annual RoboFest and national-level workshops" },
  { company: "Skill-Lync – Chennai HQ", speciality: "Mechatronics & embedded systems courses" },
  { company: "Robotix India Expo (Chennai edition)", speciality: "Annual robotics showcase event for India South" },
 ];

const datard = [
  {
    title: "IIT Madras – Centre for Robotics & Automation (CRA)",
    points: [
    " Specializes in swarm robotics, medical robotics, and autonomous systems",
"Hosts “Raftar Lab” for drone + rover testing",
"Projects include: robot-assisted surgery, nano-bots, underwater navigation"
  ]
  },
  {
    title: "Anna University – Robotics Lab",
    points: [
      "Works on humanoid robotics, neural interface research",
"Collaborates with Tamil Nadu Smart City programs"

     ]
  },
  {
    title: "SRM Institute of Science & Tech – Robocon Team",
    points: [
      "Award-winning student team in national and Asia-Pacific robotics competitions",
      "Develops walking bots, combat bots, and warehouse droids"
    ]
  },
 ];
 

const imageSections2 = [
  {
    fintechEvolution: [
      {
        points: [
          {
            title: "Noteworthy Projects & Milestones",
            para: [
              <>  HOM-BOT (IIT-M): Humanoid robot that mimics human joint motion</>,
         <>  Drone-based crop spraying in Chengalpattu agri belts (AI + robotics fusion)</>,
         <> Genrobotics' Bandicoot deployed in Chennai for safe sanitation</>,
          <> Tamil Nadu Robotics League for college + high school students (since 2022)</>,
           <>Smart Factory integration at Hyundai & Ashok Leyland using robotics arms + AGVs</>,
            ],
              imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];


const imageSections3 = [
  {
    fintechEvolution: [
      {
        points: [
          {
            title: "Noteworthy Projects & Milestones",
            para: [
                  <> AI-integrated humanoid bots for elderly care, security</>,
         <>  Smart cobots (collaborative robots) in SMEs</>,
         <> Expansion of robotics-as-a-service (RaaS) for logistics & hotels</>,
          <> Swarm drones for disaster response, land surveys</>,
           <>AI + Robotics curriculum expansion in city schools</>,
            ],
            note2:"In Chennai, robots don’t just exist in labs — they clean, weld, transport, scan, and heal.",
              imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];



const imageSections4 = [
  // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  {
    sectionTitle: "Timeline: Chennai’s Robotics Journey",
    sectionDesc:
      "From Academic Labs to Industrial Floors (2004–2025)",

    fintechEvolution: [
      {
        points: [
          {
            title: "2004 – Foundation Laid",
            para: [
           <><strong>IIT Madras</strong> launches advanced robotics research programs in collaboration with international universities.</>,
         <>Early projects in autonomous navigation and humanoid motion begin under the Department of Engineering Design.</>,
              
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
    title: "2008 – Student-Led Innovation",
    para: [
      <>RoboClub IIT-M and SRM Robocon gain national attention.</>,
      <>Chennai hosts its first Inter-Collegiate Robotics Championship.</>,
      <>Rise in local interest towards DIY robotics and mechatronics.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2011 – Planys Technologies Founded",
    para: [
      <>One of India’s first underwater robotics startups, Planys, is incubated at IIT-M.</>,
      <>Begins commercial underwater ROV inspections for oil, ports, and dams.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2013 – Industry Begins Automation",
    para: [
      <>Hyundai, Ashok Leyland, and Ford start deploying robotic welding arms and AGVs in Chennai plants.</>,
      <>Chennai’s industrial robotics sector gets a boost through auto industry adoption.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2015 – Rise of EdTech Robotics",
    para: [
      <>Kidobotikz launches STEM robotics kits for schools from Chennai.</>,
      <>Robotics enters select CBSE and ICSE school curriculums in the city.</>,
    ],
     imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2017 – Healthcare Robotics Arrive",
    para: [
      <>Apollo Hospitals introduces Da Vinci robotic surgery systems in Chennai.</>,
      <>Local surgeons begin robotic assistance in urology, oncology, and cardiac surgeries.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2018 – Genrobotics Collaborates with City",
    para: [
      <>Bandicoot robot, designed to eliminate manual scavenging, is piloted in Chennai Municipal Corporation.</>,
      <>Tamil Nadu becomes an early adopter of robotics for sanitation.</>,
    ],
     imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2019 – Robotics + AI Merge",
    para: [
      <>IIT-M launches the Robert Bosch Centre for Data Science & AI to enable smarter robotics via ML and vision systems.</>,
      <>Chennai becomes a hub for AI-integrated robotic systems.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2020 – COVID Drives Telepresence Robotics",
    para: [
      <>Hospitals in Chennai deploy telepresence robots to reduce staff exposure to COVID patients.</>,
      <>Surge in med-tech robotics R&D.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2021 – Tamil Nadu Robotics League Launched",
    para: [
      <>First statewide intercollegiate robotics championship held in Chennai.</>,
      <>1,200+ students from 80+ institutions participate in collaborative and competitive projects.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2022 – Government & DRDO Expand Military Robotics",
    para: [
      <>CVRDE Chennai expands its work on UGVs and robotic exosuits.</>,
      <>Robotics increasingly tied to defense and national security technologies.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2023 – Warehouse + Industrial Robotics Boom",
    para: [
      <>Startups like Orange Robotics and Sastra Robotics deploy robots in Chennai’s warehouses and manufacturing units.</>,
      <>Demand rises in logistics, FMCG, and pharma sectors.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2024 – Swarm Robotics & Drone Tech Surge",
    para: [
      <>IIT-M showcases swarm drone navigation for rescue operations.</>,
      <>Pi Beam and ePlane begin integrating robotic systems into smart mobility platforms.</>,
    ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "2025 – Chennai Declared 'Robotics Cluster Zone'",
    para: [
      <>TN Government announces special incentives for robotics manufacturing and R&D hubs.</>,
      <>Dedicated 'Robotics Park' planned near Mahindra World City focusing on med-tech, sanitation, and industrial bots.</>,
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
            src="/images/Innovate-Images/SubPages/Electric-Vehicles-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Robotics in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">Robotics in Chennai </a>
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
              <h3>From Labs to Assembly Lines, Chennai is Building Intelligent Machines
</h3>
              <p>Robotics in Chennai is no longer science fiction. From smart factories and warehouse automation to med-tech and drone startups, the city is evolving into a core robotics innovation and adoption hub in India.
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

        
  <div className="p-4 space-y-6">
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-bold mb-3">Leading Robotics Companies & Labs in Chennai</h2>
        <table className="min-w-full border border-gray-300 rounded-lg mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left border-b">Name</th>
              <th className="py-2 px-4 text-left border-b">Domain</th>
              <th className="py-2 px-4 text-left border-b">Highlights</th>
            </tr>
          </thead>
          <tbody>
            {evData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{item.company}</td>
                <td className="py-2 px-4 border-b">{item.focus}</td>
                <td className="py-2 px-4 border-b">{item.highlights}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
 


 

   <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
      <h2 className="text-2xl font-bold text-center mb-6">R&D and Incubation Hubs</h2>
      {datard.map((section, index) => (
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


    <div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"> Industrial Use Cases of Robotics in Chennai</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        These companies have made Chennai their technology fortress:
      </p>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Sector</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Use Case</th>
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
      <h2 className="text-2xl font-bold">Chennai Robotics Ecosystem – Stats Snapshot (2024)</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Metric</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Value</th>
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



<div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold">Robotics Edu	cation & Community Builders</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Focus</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {FastStats1.map((giant, index) => (
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



{imageSections4.map((section, index) => (
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
