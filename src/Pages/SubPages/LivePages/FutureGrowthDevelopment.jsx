import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import MegaMenu from "../../../Components/Header";
import MenuBar from "../../../Components/MenuBar";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import LiveSlider from "./LiveSlider";

export default function FutureGrowthDevelopment() {
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

  const benefitSections = [
    {
      sectionTitle: "Chennai's Third Master Plan (2027–2046)",
      sectionDesc:
        "This long-term strategy targets sustainable and inclusive progress, emphasizing land utilization, infrastructure, economic advancement, and environmental conservation for the Chennai Metropolitan Region. ",
      label: "Third Master Plan",
      image:
        "/images/Live-Images/SubPages/Chennai's-third-master-plan(2027-2046).jpg",
      benefits: [
        {
          id: 1,
          title: "Compact Urban Design",
          para: " The strategy encourages more compact, mixed-use projects to minimize sprawl, enhance walkability, and maximize infrastructure use throughout the metropolitan region. ",
          imgs: "/images/Live-Images/SubPages/Icons/Compact-Urban-Design.svg",
        },
        {
          id: 2,
          title: "Sustainable City Growth",
          para: " Incorporating green infrastructure, renewable energy, and resource efficiency is key to promoting environmentally sustainable and resilient urban development in Chennai. ",
          imgs: "/images/Live-Images/SubPages/Icons/Sustainable-City-Growth.svg",
        },
        {
          id: 3,
          title: "Infrastructure Improvement ",
          para: "Major investments in metro growth, roadway systems, and utility infrastructure are designed to boost connectivity, alleviate congestion, and improve living standards. ",
          imgs: "/images/Live-Images/SubPages/Icons/Infrastructure-Improvement.svg",
        },
        {
          id: 4,
          title: "Participation of Stakeholders",
          para: " The participation of citizens, specialists, and diverse organizations is vital in developing the Third Master Plan and guaranteeing its effective execution. ",
          imgs: "/images/Live-Images/SubPages/Icons/Participation-of-Stakeholders.svg",
        },
      ],
    },
    {
      sectionTitle: " Expansion of Chennai Metro",
      sectionDesc:
        " Comprehensive metro development initiatives seek to improve Chennai's connectivity, with Phase II currently in progress and additional expansions intended to reach wider regions. ",
      label: "Chennai Metro",
      image: "/images/Live-Images/SubPages/Expansion-of-chennai-metro.jpg",
      benefits: [
        {
          id: 1,
          title: "Stage II",
          para: "Presently in development, Phase II introduces additional lines and stations, greatly enhancing the metro system throughout different areas of the city. ",
          imgs: "/images/Live-Images/SubPages/Icons/Stage-II.svg",
        },
        {
          id: 2,
          title: "Prospective Growth ",
          para: "Additional expansions are intended to link more locations, such as the airport and significant suburban areas, enhancing overall urban transportation. ",
          imgs: "/images/Live-Images/SubPages/Icons/Prospective-Growth.svg",
        },
      ],
    },
    {
      sectionTitle: "Parandur Greenfield Airstrip",
      sectionDesc:
        " A new greenfield airport is planned near Parandur to accommodate the increasing air traffic of the Chennai Metropolitan Area as an additional hub. ",
      label: "Greenfield Airstrip",
      image: "/images/Live-Images/SubPages/Greenfield-Airstrip.jpg",
      benefits: [
        {
          id: 1,
          title: "Placement",
          para: "The planned airport will be situated close to Parandur in the Kanchipuram district, around 70 kilometers away from the current airport. ",
          imgs: "/images/Live-Images/SubPages/Icons/Placement.svg",
        },
        {
          id: 2,
          title: "Ability",
          para: " The newly designed airport is intended to have a considerable capacity for passenger handling to meet the upcoming air travel requirements in the area. ",
          imgs: "/images/Live-Images/SubPages/Icons/Ability.svg",
        },
        {
          id: 3,
          title: "Connection",
          para: " Enhanced access to the airport is expected via road and metro rail expansions to facilitate smooth travel for travelers. ",
          imgs: "/images/Live-Images/SubPages/Icons/Connection.svg",
        },
      ],
    },
    {
      sectionTitle: "Chennai Smart City Projects",
      sectionDesc:
        " Several smart city initiatives are being implemented in Chennai, emphasizing technology-based solutions to enhance urban living and promote sustainability.  ",
      label: "Smart City",
      image: "/images/Live-Images/SubPages/Chennai-Smart-City-Projects.jpg",
      benefits: [
        {
          id: 1,
          title: "Intelligent Transportation ",
          para: "Efforts comprise smart traffic control, enhanced public transportation systems, and encouragement of non-motorized transport alternatives. ",
          imgs: "/images/Live-Images/SubPages/Icons/Intelligent-Transportation.svg",
        },
        {
          id: 2,
          title: "Intelligent Water Administration ",
          para: " Initiatives emphasize effective water allocation, sewage management, and conservation via technological advancements and infrastructure improvements. ",
          imgs: "/images/Live-Images/SubPages/Icons/Intelligent-Water-Administration.svg",
        },
        {
          id: 3,
          title: "Intelligent Setting ",
          para: " Initiatives seek to expand green areas, enhance waste disposal methods, and encourage sustainable energy consumption throughout the city. ",
          imgs: "/images/Live-Images/SubPages/Icons/Intelligent-Setting.svg",
        },
      ],
    },
    {
      sectionTitle: "Chennai IT Investment Area (ITIR)",
      sectionDesc:
        "A proposed mega-region designed to draw investments in IT, electronics production, and associated industries, promoting economic development and job opportunities.  ",
      label: "IT Investment",
      image:
        "/images/Live-Images/SubPages/Chennai-IT-Investment-Area (ITIR).jpg",
      benefits: [
        {
          id: 1,
          title: "Region ",
          para: " The suggested ITIR encompasses a vast region to the southwest of Chennai, strategically positioned between the IT corridor and national roads.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Region.svg",
        },
        {
          id: 2,
          title: "Framework ",
          para: "The strategy encompasses major funding for road, rail, and air connections, along with utilities and social infrastructure in the area.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Framework.svg",
        },
        {
          id: 3,
          title: "Connection",
          para: " Improved connectivity is a primary emphasis, connecting the ITIR with Chennai, major roadways, and possibly a new airport to support commerce and travel.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Connection-1.svg",
        },
      ],
    },
  ];

  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
      link: "/live/cost-of-living-in-chennai",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/live/residential-properties-in-chennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/live/employment-in-chennai",
    },
    {
      src: "/images/Live-Images/chennaiLifeEssential4.png",
      title: "Transportation",
      link: "/live/transportation-in-chennai",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/live/healthcare-in-chennai",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/live/worship-in-chennai",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/visit/things-to-do-in-chennai",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/live/places-near-chennai",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/live/quality-of-life-in-chennai",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/live/infrastructure-development-in-chennai",
    },
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Educational Insitiutions",
      link: "/live/educational-institutions-in-chennai",
    },
  ];

  const futureGrowthDevelopment = [
    {
      titleText: "Education & Talent — Foundations for Chennai 2030",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "The future of Chennai development relies on a skilled, globally competitive workforce. Education reforms and skilling programs are central to both Chennai 2030 and Chennai 2040 ambitions.",
      firstSectionPara: [
        <>
          IIT Madras ranked among India’s top tech institutions with global
          research links (NIRF 2023).
        </>,
        <>
          Skill development programs by ICT Academy and TANSIM enhance
          employability (Source: ictacademy.in).
        </>,
        <>
          International education partnerships are growing in health tech, AI,
          and sustainability.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          IIT Madras ranked among India’s top tech institutions with global
          research links (NIRF 2023).
        </>,
        <>
          Skill development programs by ICT Academy and TANSIM enhance
          employability (ictacademy.in).
        </>,
        <>
          International education partnerships are growing in health tech, AI,
          and sustainability.
        </>,
      ],
      secondSectionContent:
        "This education-led development supports Chennai’s emergence as a knowledge capital for South and Southeast Asia. with a focus on both foundational learning and future skills. From top-tier institutions like IIT Madras to government-driven skill development programs, the city supports a broad ecosystem of learning. Collaborations between academia, startups, and global companies are advancing domains such as data science, artificial intelligence, and healthcare innovation, while new initiatives aim to bring digital and vocational education to underserved communities.",
    },
    {
      titleText: "The Global City: Driving Chennai Development",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "Under the vision for Chennai 2040, the Tamil Nadu government has proposed a 2,000-acre Global City to the south or southwest of Chennai. This development is meant to decentralize congestion, spur industrial expansion, and attract global investment in finance, R&D, education, and housing.",
      firstSectionPara: [
        <>
          Managed by <strong>TIDCO</strong>, the project will integrate metro
          rail and freight corridors.
        </>,
        <>
          It will reflect global best practices in land use, mobility, and
          climate adaptation.
        </>,
        <>
          Zones will include smart manufacturing clusters, fintech zones, and
          mixed-income residential areas.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          Announced in TN Budget 2024–25 and led by <strong>TIDCO </strong>
          (Source: projectstoday.com)
        </>,
        <>
          Proposed locations include{" "}
          <strong> Chengalpattu, Parandur, ECR–OMR corridors </strong>
          (Source: News9 Live)
        </>,
        <>To be integrated with metro rail, road, and logistics corridors</>,
      ],
      secondSectionContent:
        "As part of the broader Chennai development strategy, this Global City aligns with India’s goals for urban transformation.'Global City' near Chennai to catalyze new urban, economic, and technological development. Envisioned as a modern satellite city, the project will host innovation clusters, fintech zones, educational campuses, and sustainable housing districts. It will complement Chennai’s growth while serving as a decentralized hub for future industries and urban planning models that are climate-resilient and citizen-first.'Global City' near Chennai to serve as an innovation and business hub.",
    },
    {
      titleText: "Sustainable Infrastructure for Future Chennai",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "Chennai 2030 and Chennai 2040 place sustainability at the core of city-building. With increasing urbanization and climate risks, Future Chennai is prioritizing resilient infrastructure and ecological preservation.",
      firstSectionPara: [
        <>
          The Blue-Green Infrastructure Plan by CMDA proposes integrating
          stormwater channels with urban lakes and parks.
        </>,
        <>
          The Chennai Resilience Strategy outlines early warning systems, risk
          mapping, and retrofitting vulnerable zones.
        </>,
        <>
          Smart City projects are focusing on low-carbon energy, waste-to-energy
          plants, and decentralised composting.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          Chennai Resilience Strategy (2019) under the 100 Resilient Cities
          initiative focuses on flood risk, housing, and energy (Source:
          Resilient Cities Network)
        </>,
        <>
          CMDA’s Blue-Green Infrastructure aims to restore water bodies and
          enhance flood resilience (Source: CMDA)
        </>,
        <>
          Smart City projects include lake rejuvenation and micro-composting
          units (Source: smartcities.gov.in)
        </>,
      ],
      secondSectionContent:
        "These initiatives are essential for long-term liveability and economic resilience. as it responds to coastal vulnerability, rising temperatures, and urban flooding. The city is implementing green-blue infrastructure strategies to restore water bodies and manage stormwater, while promoting tree cover, sustainable construction, and renewable energy integration. Citizen awareness programs and data-driven climate monitoring are also becoming integral to its urban planning framework.",
    },
    {
      titleText: "Education and Talent: Foundations for Chennai 2030",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "The future of Chennai development relies on a skilled, globally competitive workforce. Education reforms and skilling programs are central to both Chennai 2030 and Chennai 2040 ambitions.",
      firstSectionPara: [
        <>
          IIT Madras leads cutting-edge research and hosts international
          students and industry partners.
        </>,
        <>
          Tamil Nadu’s Skilling Policy focuses on AI, data science,
          mechatronics, and clean energy jobs.
        </>,
        <>
          Global institutions are exploring Chennai as a host for satellite
          campuses and transnational education programs.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          IIT Madras ranked among India’s top tech institutions with global
          research links (Source: NIRF 2023)
        </>,
        <>
          Skill development programs by ICT Academy and TANSIM enhance
          employability (Source: ictacademy.in)
        </>,
        <>
          International education partnerships are growing across sectors like
          health tech, AI, and sustainability
        </>,
      ],
      secondSectionContent:
        "This education-led development supports Chennai’s emergence as a knowledge capital for South and Southeast Asia. with a focus on both foundational learning and future skills. From top-tier institutions like IIT Madras to government-driven skill development programs, the city supports a broad ecosystem of learning. Collaborations between academia, startups, and global companies are advancing domains such as data science, artificial intelligence, and healthcare innovation, while new initiatives aim to bring digital and vocational education to underserved communities.",
    },
    {
      titleText: "Science and Deep-Tech in Chennai 2040",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "Science, research, and deep-tech will anchor Chennai 2040’s identity as a future city. From semiconductors to aerospace, the Chennai development model supports a new era of industrial R&D.",
      firstSectionPara: [
        <>
          ISRO’s propulsion complex near Chennai and space-tech incubators in
          IIT-M boost private space exploration.
        </>,
        <>
          Tamil Nadu’s Electronics Manufacturing and Semiconductor Policy offers
          capital subsidies and training incentives.
        </>,
        <>
          Cross-sector partnerships are forming in areas like EV battery tech,
          drone systems, and biosciences.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          ISRO Propulsion Complex at Mahendragiri supports nearby research and
          supply chains (Source: ISRO)
        </>,
        <>
          IIT Madras is part of IN-SPACe collaborations for private space
          startups (Source: iith.ac.in)
        </>,
        <>
          Tamil Nadu’s Semiconductor Policy 2024 includes incentives for chip
          design and packaging startups
        </>,
      ],
      secondSectionContent:
        "This aligns with the state’s plan to build a $100 billion electronics ecosystem by the early 2030s. that can shape the future of manufacturing, research, and digital infrastructure. With institutions like IIT Madras and initiatives like the Semiconductor Policy 2024, Chennai is positioning itself as a nucleus for advanced technology development. The proximity to ISRO's propulsion complex adds an additional advantage for space-sector startups, and the state is gradually developing incentives to promote deep-tech entrepreneurship in quantum tech, battery innovation, and aerospace systems.",
    },
    {
      titleText: "Inclusive Urban Living for Future Chennai",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "Future Chennai is envisioned as a place where urban equity meets cultural pride. The goals for Chennai 2030 include fostering inclusive housing, public health, and accessible civic infrastructure.",
      firstSectionPara: [
        <>
          The Smart City Mission has upgraded over 100 km of walkable streets
          and created new open spaces like the T. Nagar plaza.
        </>,
        <>
          UNESCO recognition affirms Chennai’s global cultural identity while
          local planning protects temples, markets, and waterfronts.
        </>,
        <>
          Urban renewal is increasingly focusing on child-friendly cities,
          senior accessibility, and multilingual public service delivery.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          Recognized as a UNESCO Creative City for Music (Source: unesco.org)
        </>,
        <>
          Smart City projects have upgraded public spaces like the T. Nagar
          pedestrian plaza (Source: Chennai Smart City Ltd)
        </>,
        <>
          Affordable housing, smart classrooms, and e-health initiatives are
          being deployed under the GCC
        </>,
      ],
      secondSectionContent:
        "Inclusive city-building ensures that Chennai’s future growth benefits every citizen., ensuring that cultural preservation goes hand-in-hand with progressive urban development. The city’s music, dance, and temple architecture continue to thrive, while initiatives like the Smart City Mission are revitalizing public spaces and making them more accessible. Urban policies are also promoting affordable housing, women's safety, multilingual education, and inclusive healthcare as core components of city-building.",
    },
    {
      titleText: "Trade, Connectivity & Future-Ready Infrastructure",
      firstSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",
      firstSectionContent:
        "Infrastructure modernization is central to the Chennai 2030 development agenda. The city is enhancing its role as a southern gateway for global commerce and urban mobility.",
      firstSectionPara: [
        <>
          Sagarmala upgrades at Chennai and Kamarajar ports improve cargo
          handling, smart logistics, and maritime exports.
        </>,
        <>
          The new Chennai Airport Terminal will handle up to 35 million
          passengers annually with smart security and solar integration.
        </>,
        <>
          Gati Shakti-linked hubs in Sriperumbudur and Ennore aim to centralize
          freight, e-commerce, and industrial connectivity.
        </>,
      ],
      secondSectionimage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&crop=faces",

      secondSectionPara: [
        <>
          Chennai and Kamarajar Ports are modernizing under the Sagarmala
          project (Source: sagarmala.gov.in)
        </>,
        <>
          Chennai Airport's new integrated terminal enhances global connectivity
          (Source: AAI)
        </>,
        <>
          TN is exploring green mobility and logistics hubs under the Gati
          Shakti master plan (Source: PM Gati Shakti portal)
        </>,
      ],
      secondSectionContent:
        "This growth ensures Chennai 2040 is built on an integrated, multi-modal urban economy. to position itself as a regional gateway for trade, mobility, and investment. Major port modernization projects under the Sagarmala initiative aim to increase cargo capacity, digitalize port operations, and attract maritime services. The expansion of Chennai International Airport and the development of logistics hubs through Gati Shakti provide momentum for future economic integration, particularly in manufacturing exports, digital trade, and regional connectivity.",
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
    autoplay: true,
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

          <Helmet>
        <title>Infrastructure Development in Chennai Driving City Growth</title>
        <meta
          name="description"
          content="Learn how infrastructure development in Chennai enhances everyday life with better roads, metro links, and modern amenities, explained in detail by Super Chennai."
        />
        <link rel="canonical" href="/live/infrastructure-development-in-chennai" />
      </Helmet>
      <div className="FutureGrowthDevelopmentpAGE">
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/SubPages/Future-Growth-&-Development-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Future Growth & Development </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Future Growth & Development</a>
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
                Future Growth & Development &nbsp; in Chennai &nbsp; Future
                Growth & Development &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>
                {/* Future Growth & Development */}
                Future Chennai: Vision for 2030 and 2040
              </h3>
              <p>
                As part of Tamil Nadu's long-term development strategy, Future
                Chennai is envisioned as a dynamic, globally relevant
                metropolis. Chennai 2030 and Chennai 2040 outline the city’s
                evolution across innovation, mobility, education, and climate
                adaptation—anchoring its role in India’s future growth story.
                While the proposed Global City near Chennai is a key catalyst,
                the broader Chennai development plan includes transformative
                projects across education, infrastructure, green urbanism, and
                future-ready industries.—guided by current policies and projects
                supported by institutions such as CMDA, TIDCO, IIT Madras, and
                TANSIM.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            key={index}
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
          >
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                      <p className="linkpara">
                        <a href="#">
                          <img
                            src="/images/Live-Images/SubPages/LinkArrowRightIcon.svg"
                            alt=""
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* <div className="container max-w-7xl mx-auto px-4">
          {futureGrowthDevelopment.map((section, index) => (
            <main class="wrapSectionFuture">
              <div class="section-titleFuture">
                <h1>{section.titleText}</h1>
              </div>

              <article class="profileFuture">
                <div class="img-wrapSectionFuture">
                  <img src={section.firstSectionimage} />
                </div>

                <div>
                  <p>{section.firstSectionContent}</p>
                </div>
              </article>

              <section class="info-cardFuture">
                <ul class="factsFuture">
                  {section.firstSectionPara.map((para, index) => (
                    <li>{para}</li>
                  ))}
                </ul>
              </section>

              <article class="profileFuture altFuture">
                <div>
                  <p>{section.secondSectionContent}</p>
                </div>

                <div class="img-wrapSectionFuture">
                  <img src={section.secondSectionimage} />
                </div>
              </article>

              <section class="info-cardFuture">
                <ul class="factsFuture">
                  {section.secondSectionPara.map((secondSectionParA, index) => {
                    return <li>{secondSectionParA}</li>;
                  })}
                </ul>
              </section>
            </main>
          ))}
        </div>

        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingTop: "0px", marginTop: " 0px" }}
        >
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
                Future Growth & Development &nbsp; in Chennai &nbsp; Future
                Growth & Development &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro" style={{ paddingBottom: "60px" }}>
              <h3 style={{lineHeight:"0.8"}}>Vision Statement: Chennai 2040 – Future Chennai on the Global Stage</h3>
              <p style={{ }}>
                By 2040, Future Chennai will stand among the world's "Global 50"
                cities, shaping urban innovation, sustainability, and equity.
                With bold Chennai development goals for 2030 and 2040, the city
                will be recognized as a leader in future growth, rooted in its
                heritage and powered by inclusive progress.. As a dynamic
                coastal metropolis, it will be recognized for its strategic
                urban planning, technological excellence, inclusive growth, and
                cultural resonance. A city where global challenges are met and
                new possibilities come alive—a city built for the world.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="container max-w-7xl mx-auto px-4">
          <section class="section-containernewdesign">
            <h2>Innovation & Research Ecosystems for Future Growth</h2>
            <p class="subtitlesectionnew">
              Future Chennai is increasingly recognized as a hub for innovation
              and research excellence. As part of Chennai 2030 and Chennai 2040
              goals, the city is scaling up its startup ecosystem, advanced
              research zones, and academic-industry partnerships.
            </p>

            <div class="cards-gridnewdesignsection">
              <div class="cardnewPageSection">
                <div class="icon-boxnewdesignsection">
                  <img
                    src="/images/Invest-Images/Icons/High-Potential-Growth-Economy.svg"
                    alt=""
                  />
                </div>
                <div class="cards-contentnewdesignsection">
          
                  <p>
                    The <strong>IIT Madras Research Park</strong> is home to
                    over 200 deep-tech startups and several Centers of
                    Excellence in AI, EVs, and sustainability.
                  </p>
                </div>
              </div>

              <div class="cardnewPageSection">
                <div class="icon-boxnewdesignsection">
                  <img
                    src="/images/Invest-Images/Icons/High-Potential-Growth-Economy.svg"
                    alt=""
                  />
                </div>
                <div class="cards-contentnewdesignsection">
          
                  <p>
                    <strong>TANSIM </strong>
                    supports innovation from grassroots to global scale with
                    funding, incubation, and district-level hubs.
                  </p>
                </div>
              </div>

              <div class="cardnewPageSection">
                <div class="icon-boxnewdesignsection">
                  <img
                    src="/images/Invest-Images/Icons/High-Potential-Growth-Economy.svg"
                    alt=""
                  />
                </div>
                <div class="cards-contentnewdesignsection">
               
                  <p>
                    The <strong>Electronics & Semiconductor Policy 2024</strong>{" "}
                    encourages R&D in chip design and electronics manufacturing
                    across the Chennai development region.
                  </p>
                </div>
              </div>
            </div>
      
          </section>
        </div> */}

        {/*--------------- Explore More Chennai----------------- */}

        <LiveSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
