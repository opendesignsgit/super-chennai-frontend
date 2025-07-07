import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ThreeDPrintinginChennai() {
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
              "Strong automotive & manufacturing base (Ford, Hyundai, TVS, Ashok Leyland)",
              "Proximity to engineering colleges and R&D hubs",
              "Early industrial adoption in tooling, prototyping, and end-use parts",
              "Active student and maker communities working on open-source printers and designs",
            ],
             imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];


const SmartChennaiinAction = [
  { company: "Fabheads Automation", speciality: "India's first company to develop continuous fiber 3D printing (composites for aerospace, EVs)" },
  { company: "4i Printech", speciality: "Industrial 3D printers and service bureau (ABS, Nylon, Carbon Fiber)" },
  { company: "Make3D.in", speciality: "Affordable 3D printing services for education, medical, hobbyists" },
  { company: "Vision 3D", speciality: "High-precision dental & jewelry printing" },
  { company: "Precise3D Metrology", speciality: "3D scanning + reverse engineering for factories" },
  { company: "Chennai3D", speciality: "3D design and FDM printing services for custom parts" },
  { company: "Think3D (Chennai Branch)", speciality: "Full-spectrum services from prototyping to batch manufacturing" },
];

 

const imageSections1 = [
  // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

  {
    sectionTitle: "Academic & Research Ecosystem",
    sectionDesc:
      "From ₹1,366+ Cr investments to AI-powered flood management, Chennai is quietly building India's smartest urban ecosystem:",

    fintechEvolution: [
      {
        points: [
          {
            title: "Academic & Research Ecosystem",
            para: [
              <><strong>IIT Madras</strong></>,
              "Houses India’s top Additive Manufacturing Lab",
              "Research on metal printing, bio-printing, and composite materials",
              "Partnered with DRDO & ISRO on high-strength aerospace parts",
              <><strong>Anna University, SRM, VIT Chennai</strong></>,
              "Labs for SLA/FDM/Metal 3D printing",
              "Student innovation in prosthetics, robotics, EV parts",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "Where It’s Being Used",
            para: [
             <><strong>Healthcare</strong></>,
              "3D printed prosthetics, implants, and surgical models",
              "Custom dental aligners, crowns, and jawbone structures",
              "IIT-M incubated startups working on bioprinting tissues",
              <><strong>Auto & Aerospace</strong></>,
              "Ashok Leyland and TVS use 3D printed tooling for faster prototyping",
              "DRDO collaborations for lightweight metal parts for drones & missiles",
               <><strong>Education & Makerspaces</strong></>,
              "Over 100 schools & colleges across Chennai have introduced 3D printing in STEM programs",
              "Maker hubs like Fablab Chennai, WorkBench Projects, and MakersBox India",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];



const FastFacts = [
  { company: "3D printing startups in Chennai", speciality: "25+" },
  { company: "Engineering colleges with 3D labs", speciality: "40+" },
  { company: "Avg cost reduction for prototypes", speciality: "Up to 60%" },
  { company: "Time saved in early product design", speciality: "3x faster" },
  { company: "Sectors using 3D printing", speciality: "Auto, Health, Jewelry, Edu, Aerospace, Robotics" },
   
];

const imageSections2 = [
  
  {
  
    fintechEvolution: [
      {
        points: [
          {
            title: " What’s Next?",
            para: [
              <><strong>Metal 3D Printing</strong> for mass-customization in auto</>,
               <><strong>Bio-printing</strong> of tissues & bone scaffolds (IIT-M incubators)</>,
                <><strong>Full-color & food 3D printing</strong>  in culinary design schools</>,
                 <><strong>3D Printed Homes</strong> (pilot projects inspired by Tvasta at IIT-M)</>,
            ],
            note2:"Chennai isn’t just printing parts. It’s printing the future — one layer at a time.",
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
    sectionTitle: "The Rise of 3D Printing in Chennai",
    sectionDesc:
      "From Hobby Labs to Aerospace Innovation",

    fintechEvolution: [
      {
        points: [
          {
            title: "2010 – First Ripples",
            para: [
              "Early DIY enthusiasts and engineering students start experimenting with open-source RepRap printers.",
              "Makerspaces like Fablab Chennai begin offering hands-on access to basic FDM 3D printers.",
              
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "2013 – Institutional Adoption",
            para: [
              "IIT Madras launches its first Additive Manufacturing Lab under the Department of Mechanical Engineering.",
              "Initial research begins on materials like ABS, PLA, and resin-based SLA printing.",
              "Focus on rapid prototyping and educational tools.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
             {
            title: "2015 – Startup Wave Begins",
            para: [
              "Chennai sees the launch of Make3D.in and Vision 3D, offering on-demand printing services.",
              "Medical and dental applications begin taking shape, especially in surgical modeling and aligners.",
              "Colleges like SRM & VIT introduce 3D printing into their mechanical design labs.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
             {
            title: "2017 – Industrial Use Cases Take Off",
            para: [
              "Automotive majors like TVS, Ashok Leyland, and Royal Enfield begin using 3D printing for tooling and R&D prototypes.",
              "Think3D opens a regional service center for batch manufacturing of industrial parts.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
           {
            title: "2019 – Aerospace & Composites Frontier",
            para: [
              "Fabheads Automation, an IIT-M startup, pioneers continuous fiber 3D printing — a first in India.",
              "Focus shifts to carbon-fiber printing for drones, aircraft, and EVs.",
               "DRDO collaborates with Chennai-based labs for metal 3D printing.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
           {
            title: "2020 – COVID Accelerates Innovation",
            para: [
              "Surge in 3D printed face shields, ventilator parts, and hospital tools during the pandemic.",
              "3D printing helps reduce time-to-prototype for emergency healthcare gear.",
               "Local innovators create low-cost 3D printed oxygen masks.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "2021 – Bioprinting & Research Scaling",
            para: [
              "IIT Madras begins research into bio-printing tissues and scaffolds for regenerative medicine.",
              "Dental 3D printing expands rapidly across private clinics in the city.",
               "VEL Tech and Anna University launch certification programs in Additive Manufacturing.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
             {
            title: "2022 – Education and Accessibility Boom",
            para: [
              "Over 100+ schools and colleges integrate 3D printing into their STEM & design programs.",
              "Hobby kits, desktop printers, and 3D design workshops become popular in maker circles.",
               "Student teams from Chennai colleges begin competing in national 3D printing hackathons.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
            {
            title: "2023 – Architecture & Housing Innovation",
            para: [
              "IIT-M startup Tvasta demonstrates 3D printed housing units, pushing boundaries in construction tech.",
              "Real estate and urban infrastructure players explore modular design using concrete printing.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
            {
            title: "2024 – Toward a 3D Manufacturing Ecosystem",
            para: [
              <>Chennai’s ecosystem now includes:</>,
              "IIT-M startup Tvasta demonstrates 3D printed housing units, pushing boundaries in construction tech.",
              "Real estate and urban infrastructure players explore modular design using concrete printing.",
             ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
            {
             title: "2025 – Super Chennai Era",
            para: [
              <><strong>Chennai gears up to become a national hub for Additive Manufacturing, with:</strong></>,
              "Expansion of metal printing capabilities",
              "Bioprinting startups in clinical trials",
              "Surge in demand from automotive, jewelry, aerospace, medical, and design sectors",
              "Government-backed initiatives for MSME adoption",
              "Large-scale exhibitions and expos centered around design-to-fabrication innovation"
             ],
              note2:"Chennai isn’t just printing parts. It’s printing the future — one layer at a time.",
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
            src="/images/Innovate-Images/SubPages/3D-Printing-Additive-Manufacturing-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>3D Printing in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">3D Printing in Chennai </a>
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
              <h3>Where Prototypes Meet Possibilities</h3>
              <p>
                Chennai is not just known for its manufacturing — it’s known for its re-making.
Welcome to the city’s growing 3D printing ecosystem, where digital designs become physical products, almost instantly.
From aerospace components and dental implants to fashion accessories and educational tools, 3D printing in Chennai is reshaping how we build, test, and dream.</p>

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
      <h2 className="text-2xl font-bold"> The Tech Giants of Chennai</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        These companies have made Chennai their technology fortress:
      </p>
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
      <h2 className="text-2xl font-bold"> The Tech Giants of Chennai</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        These companies have made Chennai their technology fortress:
      </p>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Company</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Focus Area</th>
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
