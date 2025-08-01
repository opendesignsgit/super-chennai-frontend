import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ItandSoftwareCompanies() {
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

  const data = [
  {
    title: "Talent",
    points: [
      "60+ engineering colleges and universities",
      "Nearly 1 lakh engineers graduate here every year",
      "Skilled in Java, Python, cloud, AI, mobile, low-code, and more"
    ]
  },
  {
    title: "Infrastructure",
    points: [
      "IT corridors: OMR, Taramani, Ambattur",
      "Parks like TIDEL, DLF, Olympia, and Ramanujan IT City",
      "Excellent public transport, metro access, and power stability"
    ]
  },
  {
    title: "Business Ecosystem",
    points: [
      "Govt. policies (Tamil Nadu ICT Policy 2021)",
      "Access to international markets via Chennai Port and Airport",
      "Deep collaboration between academia (IIT-M) and startups"
    ]
  }
];

 const imageSections = [
  // Existing Deep Tech & AI Evolution section (keep as-is),

  {
    sectionTitle: "Chennai’s Auto Startup Scene: Building the Future of Mobility",
    sectionDesc:
      "Once known for its hardware exports and call centers, Chennai has now become:",

    fintechEvolution: [
     {
  points: [
    {
      note: "Once known for its hardware exports and call centers, Chennai has now transformed into:",
      para: [
        <><strong>A global SaaS hub</strong> powering enterprise software used worldwide.</>,
        <><strong>A launchpad for IT unicorns</strong> disrupting industries with innovation.</>,
        <><strong>A backbone for India’s digital exports</strong> in cloud, AI, and cybersecurity.</>,
        <><strong>A rising star in AI, FinTech, Cybersecurity, EdTech, and HealthTech</strong> with deep technical talent.</>,
        <><strong>A city delivering skills that matter</strong> in a rapidly evolving tech landscape.</>
      ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
    {
      note: "Chennai is not just about culture and coastlines—it’s one of India’s leading technology and software hubs. The city hosts a thriving IT ecosystem catering to global markets, from Fortune 500 companies to fast-growing startups.",
      para: [
        <> <strong>4th largest IT and software exporter in India</strong> (after Bengaluru, Hyderabad, and Pune).</>,
        <> <strong>600+ IT parks and campuses</strong> across the metro region.</>,
        <> <strong>2,000+ tech companies</strong> spanning SaaS, AI, FinTech, Cybersecurity, EdTech, and enterprise software.</>,
        <> <strong>$21+ billion annually</strong> in software exports (STPI Chennai, 2023).</>,
        <> <strong>Direct employment to over 6.5 lakh tech professionals</strong> across the ecosystem.</>,
        <> Supported by <strong>TIDEL Park, DLF IT Park, Olympia Tech Park, and Ramanujan IT City</strong>.</>,
        <> <strong>Chennai is India’s SaaS Capital</strong> with multiple unicorns and high-growth startups.</>
      ],
      imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    },
  ],
},
   {
        points: [
          {
            title: "Key Highlights",
            para: [
              <><strong>R&D</strong> and Innovation: Major R&D centres of companies like Hyundai, Ford, Cognizant, and Zoho</>,
              <><strong>Talent Pool: </strong> Over 50+ engineering colleges in and around the city churn out skilled graduates annually (Anna University, SRM, VIT, IIT Madras, etc.)</>,
            <><strong>Global Reach:</strong> Home to international companies’ India HQs (Accenture, Infosys, TCS, IBM, Capgemini, Virtusa) </>
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
            
          },
        ],
      },
      
    ],
  },
];


const techGiants = [
  { company: "TCS", speciality: "Software & IT services" },
  { company: "Cognizant", speciality: "Healthcare & BFSI-focused IT" },
  { company: "Infosys", speciality: "Global delivery & consulting" },
  { company: "Accenture", speciality: "BPO & tech innovation" },
  { company: "HCLTech", speciality: "Product engineering, ER&D" },
  { company: "Capgemini", speciality: "Cloud & digital transformation" },
  { company: "L&T Infotech", speciality: "Enterprise IT" },
];

const saasSuperstars = [
   { company: "Zoho", knownFor: "55+ products, global SaaS giant" },
  { company: "Freshworks", knownFor: "Customer engagement platform" },
  { company: "Chargebee", knownFor: "Subscription billing" },
  { company: "Kissflow", knownFor: "Workflow automation" },
  { company: "Facilio", knownFor: "Real estate ops SaaS" },
  { company: "Guvi", knownFor: "Vernacular tech education" },
];


const imageSections1 = [
  {
    sectionTitle: "Chennai’s Auto Startup Scene: Building the Future of Mobility",
    sectionDesc:
      "Once known for its hardware exports and call centers, Chennai has now become:",

    fintechEvolution: [
      {
        points: [
          {
            title: "The Stats Behind the Scene",
            para: [
              "Software Exports: $21 Billion+ from Chennai region.",
              "Total IT/ITeS Companies: 2,000+",
              "Direct Employment: 6.5 to 7 lakh",
              "Top Hiring Areas: AI/ML, DevOps, Cybersecurity, Mobile",
              "SaaS Startups: Over 120 active",
              "Avg. Office Rent in OMR: ₹55/sq.ft/month",
              "Top Emerging Locations: Perungudi, Navalur, Guindy",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
            title: "Chennai’s Tech Map (Suggested Interactive Feature)",
            note: <strong>Filter by</strong>,
            para: [
              "Company Type (MNC, SaaS, Startup)",
              "Location (OMR, Taramani, Ambattur)",
              "Industry (FinTech, EdTech, Retail, Healthcare)",
            ],
            note2: <strong>Interactive Map with</strong>,
            para2: [  
              "Pin drops of company HQs",
              "Zones marked for IT parks",
              "IIT-Madras Research Park as a featured hub",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
          {
           note:"Chennai is not just riding the tech wave — it's building it. With AI labs, 5G test beds, and a growing startup culture, it’s becoming a launchpad for India’s digital next.",
            para: [
              "If Bengaluru is the present, Chennai is the future.",
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
            src="/images/Innovate-Images/SubPages/IT-Software-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>It & Software Companies</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">It & Software Companies</a>
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
              <h3>From Marina to Mainframes — Chennai’s Digital Journey</h3>
              <p>
               Chennai isn’t just a city of culture and beaches — it’s India’s Silicon Coast. From legacy IT parks to buzzing
                SaaS startups, Chennai has built a quiet tech revolution—one that’s powering businesses around the globe.

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


         <div className="mx-auto p-6 text-gray-800 cards">
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

    <div className="overflow-x-auto my-6">
      <h2 className="text-2xl font-bold"> The Tech Giants of Chennai</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        These companies have made Chennai their technology fortress:
      </p>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Company</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Speciality</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200">
          {techGiants.map((giant, index) => (
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
      <h2 className="text-2xl font-bold"> Chennai’s SaaS Superstars</h2>
      <p className="mb-4 text-gray-600 text-center mb-10">
        Forget Silicon Valley. The next-gen software is being built here:
  </p>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Company</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">Known For</th>
          </tr>
        </thead>
     <tbody class="divide-y divide-gray-200 mb-20">
          {saasSuperstars .map((giant, index) => (
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
      <p>Many of these started in co-working spaces or college dorms and now serve millions of users globally. </p>
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
      <p>{section.sectionDesc}</p>
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
