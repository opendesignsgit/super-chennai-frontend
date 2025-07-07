import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function HealthTechinChennai() {
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
            title: "Why Chennai Leads in Health Tech",
            para: [
              "Home to over 100 super-specialty hospitals",
              "Strong base in biomedical engineering, thanks to IIT-M, SRM, and Anna University",
              "Growing ecosystem of AI, robotics, and IoT startups working on diagnostics and patient care",
              "Manufacturing cluster for medical devices, implants, 3D-printed prosthetics in and around Ambattur, Sriperumbudur",
            ],
             imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];

 
const SmartChennaiinAction = [
 
  {
    "company": "Apollo Hospitals",
    "speciality": "AI in cancer detection, Microsoft HealthVault partner"
  },
  {
    "company": "Kauvery Hospital",
    "speciality": "Patient app, AI triage, telehealth expansion"
  },
  {
    "company": "MIOT Hospitals",
    "speciality": "Robotic surgeries, digital imaging, online consultations"
  },
  {
    "company": "Sankara Nethralaya",
    "speciality": "AI for eye screening, diabetic retinopathy detection"
  },
  {
    "company": "Sri Ramachandra Hospital",
    "speciality": "Medical robotics, AR/VR surgery training simulators"
  },
  {
    "company": "Lucid Imaging",
    "speciality": "AI-powered medical diagnostics & radiology"
  },
  {
    "company": "Perfint Healthcare",
    "speciality": "Image-guided cancer surgery & interventional oncology robotics"
  },
  {
    "company": "MedIoTek",
    "speciality": "Remote patient monitoring, wearable health tech"
  },
  {
    "company": "TN Medical Devices Park",
    "speciality": "Cluster supporting 25+ MedTech startups"
  },
  {
    "company": "RAPID Lab (IIT-M)",
    "speciality": "AI for genomics, medical imaging & drug discovery"
  },
  {
    "company": "LifeSigns",
    "speciality": "Remote ICU monitoring systems & AI for vitals"
  },
  {
    "company": "Dozee",
    "speciality": "Contactless health monitoring through sensors (Chennai hospital partners)"
  },
  {
    "company": "Cardiac Design Labs",
    "speciality": "Remote ECG and real-time cardiac health systems"
  },
  {
    "company": "Tata SmartBio (Chennai R&D)",
    "speciality": "COVID rapid diagnostics, mobile labs"
  },
  {
    "company": "Neuberg Diagnostics",
    "speciality": "Smart diagnostics with AI integration & analytics"
  }
 
];

 

const imageSections1 = [
  // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  {
    sectionTitle: "Academic & Research Support",
    sectionDesc:
      "From ₹1,366+ Cr investments to AI-powered flood management, Chennai is quietly building India's smartest urban ecosystem:",

    fintechEvolution: [
      {
        points: [
          {
            title: "IIT Madras – Dept. of Biomedical Engineering",
            para: [
               "Projects in neuroprosthetics, wearable health tech, drug delivery systems",
              "Partners with Apollo, Kauvery, and Sankara Nethralaya",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "Anna University BioMed Lab",
            para: [
              "AI for patient vitals, health monitoring apps, and smart diagnostics",
              
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "SRM Innovation Incubation Centre (Kattankulathur)",
            para: [
              "Hosts health-tech startups working on low-cost devices & patient apps",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];

 
const FastFacts = [
  { company: "Apollo Hospitals", speciality: "AI in cancer detection, Microsoft HealthVault partner" },
  { company: "Kauvery Hospital", speciality: "Patient app, AI triage, telehealth expansion" },
  { company: "MIOT Hospitals", speciality: "Robotic surgeries, digital imaging, online consultations" },
  { company: "Sankara Nethralaya", speciality: "AI for eye screening, diabetic retinopathy detection" },
  { company: "Sri Ramachandra Hospital", speciality: "Medical robotics, AR/VR surgery training simulators" },
];

 const FastStats = [
  { company: "Inymart Digital", speciality: "IoT-based smart hospital devices & health apps" },
  { company: "Fibroheal", speciality: "AI-powered wound care and bioengineering (Partnering in Chennai)" },
  { company: "Augnito.ai", speciality: "Voice AI for doctors' notes and EHR" },
  { company: "StaTwig", speciality: "Blockchain-enabled vaccine supply chain (partnering with TN Health)" },
 ];

const HealthTech = [
  { company: "Hospitals in Chennai", speciality: "2,500+" },
  { company: "Health tech startups", speciality: "80+ (2024)" },
  { company: "Med device manufacturers (Chennai region)", speciality: "60+" },
  { company: "AI-in-healthcare patents from IIT-M (2023)", speciality: "120+" },
  { company: "Venture-backed MedTech companies (Chennai)", speciality: "25+" },
];


   const WhereHappening = [
  { company: "OMR/Taramani", speciality: "R&D, diagnostics, AI labs (Lucid, IIT-M)" },
  { company: "Guindy", speciality: "Medical device manufacturers, hospital HQs" },
  { company: "Ambattur", speciality: "Health device fabrication & prosthetics" },
  { company: "Nungambakkam", speciality: "Clinics & diagnostic innovation (Apollo, Neuberg)" },
   { company: "Kattankulathur", speciality: "Incubators & biotech labs (SRM, LifeCell)" },
 ];



 

const imageSections2 = [
  
  {
    fintechEvolution: [
      {
        points: [
          {
            title: "The Future: What’s Next?",
            para: [
              <> AI-first diagnostics for retina, skin, and lung conditions</>,
         <> Gene-based therapies & AI in genomics</>,
         <> More robotic surgeries across top hospitals</>,
          <> Smart hospital infrastructure with app-based ICU monitoring</>,
           <>  International medical tourism powered by health tech transparency</>,
                
            ],
            note2:"Chennai is redefining healthcare not just for the city, but for the entire country — one algorithm, device, and diagnostic at a time.",
             imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];


  
const imageSections3 = [
  // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  {
    sectionTitle: "Visual Timeline: Chennai’s Health-Tech Evolution",
    sectionDesc:
      "From Hospitals to Health AI: The Chennai Journey",

    fintechEvolution: [
      {
        points: [
          {
            title: "1983–1995: The Healthcare Backbone Is Built",
            para: [
              <><strong>Foundation Phase</strong></>,
              "Launch of Apollo Hospitals, India’s first corporate hospital (1983)",
              "MIOT International and Sankara Nethralaya emerge as pioneers in specialized care",
              "Biomedical departments initiated at IIT Madras and Anna University",
              <><strong>Impact:</strong> Chennai becomes the "Healthcare Capital of India"</>,
              
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
  title: "1996–2005: Digital Health Seeds Are Planted",
  para: [
    <><strong>Early Tech Integration</strong></>,
    "Digital radiology & hospital management systems adopted at Apollo, MIOT",
    "Diagnostic labs begin digital reporting (Neuberg, Lister)",
    "Universities launch biomedical and biotech engineering programs",
    <><strong>Impact:</strong> Base tech literacy in hospitals and diagnostics</>
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "2006–2012: Rise of Health SaaS & Medical Devices",
  para: [
    <><strong>Growth of Industry</strong></>,
    "Perfint Healthcare develops image-guided robotic systems",
    "Early hospital software providers emerge (MedMantra, Attune)",
    "LifeCell sets up Chennai’s first stem cell bank (2004)",
    "Growth of Ambattur & Sriperumbudur MedTech clusters",
    <><strong>Impact:</strong> Chennai enters health-tech product development phase</>
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "2013–2018: AI, Cloud & Mobile Health Take Off",
  para: [
    <><strong>Digital Health 1.0</strong></>,
    "Lucid Imaging starts AI diagnostics in radiology",
    "Apollo launches cloud EHR and teleconsultation apps",
    "Mobile health apps begin (Practo, Netmeds)",
    "IIT-M launches Robert Bosch Centre for AI (RBCDSAI)",
    <><strong>Impact:</strong> First wave of Health AI adoption & startup buzz</>
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "2019–2021: Pandemic Push & Innovation Boom",
  para: [
    <><strong>COVID-Era Acceleration</strong></>,
    "Surge in demand for remote monitoring, AI screening & telemedicine",
    "LifeSigns, Dozee, and Cardiac Design Labs deploy tech in hospitals",
    "TN Govt partners with startups for AI-based COVID tracking",
    "IIT-M & SRM fast-track R&D on low-cost ventilators, diagnostics",
    <><strong>Impact:</strong> Health-tech enters mainstream hospital strategy</>
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "2022–2024: Smart Hospitals & Deep AI",
  para: [
    <><strong>Precision Era</strong></>,
    "Predictive AI tools for ICU, triage, and surgery planning used at Kauvery, SRMC",
    "Ganit.ai, Gyan.AI explore health-focused AI LLMs",
    "TN Medical Devices Park expands with 25+ health startups",
    "Augnito launches voice AI for doctors",
    "Apollo integrates AI into billing, discharge, and insurance workflows",
    <><strong>Impact:</strong> Full-stack health tech — from admin to treatment</>
  ],
  imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
},
{
  title: "2025 & Beyond: GenAI + BioAI + Public Health Tech",
  para: [
    <><strong>Future Now</strong></>,
    "Blockchain for patient data and vaccine logistics (StaTwig)",
    "Tamil + English multi-lingual AI chatbots for patient engagement",
    "Robotics & AI for post-op care, rehab, and physiotherapy",
    "Govt health schemes powered by real-time AI analytics",
    <><strong>Expected Impact:</strong> A hybrid of tech-first public + private healthcare</>
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
            src="/images/Innovate-Images/SubPages/Healthcare-Tech-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Health Tech in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">Health Tech in Chennai </a>
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
              <h3>Where Medicine Meets Machines</h3>
              <p>Chennai is not just the healthcare capital of South India — it's also a rising leader in health tech innovation. With a blend of top-tier hospitals, biomedical research, AI startups, and MedTech manufacturers, the city is turning into a hub for digital health transformation.
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
      <h2 className="text-2xl font-bold"> Key Health Tech Companies in Chennai</h2>
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
      <h2 className="text-2xl font-bold"> Hospitals Driving Tech Adoption</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        These companies have made Chennai their technology fortress:
      </p>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Hospital</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Tech Focus</th>
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
      <h2 className="text-2xl font-bold"> Startups to Watch</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Startup</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Niche</th>
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


     <div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"> Health Tech by the Numbers (Chennai & Tamil Nadu)</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Metric</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Value</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {HealthTech.map((giant, index) => (
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
      <h2 className="text-2xl font-bold"> Startups to Watch</h2>
       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Startup</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Niche</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {WhereHappening.map((giant, index) => (
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
