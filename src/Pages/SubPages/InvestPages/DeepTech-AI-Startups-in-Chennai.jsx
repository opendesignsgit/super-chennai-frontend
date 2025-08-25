import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function DeepTechAIStartupsinChennai() {
  const imageSections = [
    {
      whereInnovations: [
        {
          points: [
            {
              title: "What Exactly is DeepTech?",
              desc: "DeepTech refers to startups building products based on advanced technology or scientific breakthroughs. This includes:",
              para: [
                <>Artificial Intelligence (AI) & Machine Learning (ML)</>,
                <>Natural Language Processing (NLP) & Voice AI</>,
                <>Computer Vision & Robotics</>,
                <>IoT (Internet of Things)</>,
                <>Blockchain, Quantum Computing, and more</>,
                <>
                  These aren't just apps. They’re innovations that change how
                  industries work at a fundamental level.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/What-Exactly-is-DeepTech.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Chennai?",
              para: [
                <>
                  <strong>IIT Madras Advantage:</strong> With top-tier research
                  centers like RBCDSAI and IITM Research Park, Chennai blends
                  research and entrepreneurship seamlessly.
                </>,
                <>
                  <strong>Talent-First City:</strong> A strong pool of AI
                  engineers, data scientists, and robotics experts from leading
                  universities.
                </>,
                <>
                  <strong>Affordable & Sustainable:</strong> DeepTech companies
                  here scale without burning cash like other metros.
                </>,
                <>
                  <strong>B2B DNA:</strong> Chennai specializes in
                  enterprise-focused tech. Quietly powerful. Globally scalable.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/why-chennai.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Chennai-Based DeepTech & AI Startups to Watch",
              para: [
                <>
                  <strong>Uniphore:</strong> Voice AI and automation platform
                  used by enterprises worldwide (Unicorn).
                </>,
                <>
                  <strong>Mad Street Den:</strong> Retail and emotion AI
                  platform blending neuroscience with computer vision.
                </>,
                <>
                  <strong>Detect Technologies:</strong> AI-powered industrial
                  asset monitoring and predictive maintenance.
                </>,
                <>
                  <strong>Flutura:</strong> AI for energy, oil & gas
                  analytics—used by global giants.
                </>,
                <>
                  <strong>Xanadu.ai:</strong> Pioneers in applying AI to
                  education and behavioral sciences.
                </>,
                <>
                  <strong>GalaxEye:</strong> Building space-tech + AI satellites
                  (incubated at IIT-Madras).
                </>,
                <>
                  <strong>Hyperverge:</strong> Facial recognition and digital
                  KYC using deep learning.
                </>,
                <>
                  (More startups can be listed in a scrollable, filterable
                  directory.)
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/Chennai-Based DeepTech & AI Startups to Watch.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "The Ecosystem That Supports Them",
              para: [
                <>IIT-Madras Research Park – Where industry meets innovation</>,
                <>
                  FinBlue & NASSCOM CoEs – For deep tech incubation & B2B
                  scaling
                </>,
                <>
                  Government AI Policy Labs – Driving responsible and inclusive
                  AI in Tamil Nadu
                </>,
                <>
                  Meetups, Hackathons, Accelerators – A growing community of
                  builders
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/The Ecosystem That Supports Them.svg",
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

  const imageSections1 = [
    {
      sectionTitle:
        "Chennai’s Deep Tech & AI Evolution: From Labs to Unicorns (2005–2025)",
      sectionDesc:
        "How Chennai evolved from a banking back-office hub to India’s fintech backend capital, while becoming a quiet powerhouse in applied AI and deep tech innovation.",
      fintechEvolution: [
        // Existing fintech timeline (no change)...
        {
          points: [
            {
              title: "2005–2010: Laying the Foundations",
              para: [
                <>
                  <strong>IIT Madras becomes a research powerhouse</strong> –
                  Focus on machine learning, computer vision, and embedded
                  systems begins.
                </>,
                <>Sastra, Anna University, and CEG foster early AI talent.</>,
                <>
                  <strong>MNC R&D centers grow</strong> – Cognizant, TCS, and
                  Accenture invest in data analytics teams.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/2005–2010 Laying the Foundations.svg",
              note: "Deep Tech was still a buzzword. But the seeds were quietly being planted.",
            },
          ],
        },
        // Insert AI/Deep Tech timeline here:
        {
          points: [
            {
              title: "2011–2015: Experimentation Era",
              para: [
                <>
                  <strong>IIT-M launches RBCDSAI</strong> – Research on language
                  models, neural networks, and predictive systems accelerates.
                </>,
                <>
                  Startups like Flutura and Mad Street Den emerge, applying AI
                  to energy analytics and fashion e-commerce.
                </>,
                <>
                  First AI meetups and hackathons in Chennai attract coders and
                  PhD researchers.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/2011–2015 Experimentation Era.svg",
              note: " AI shifted from academia to early product ideas. Investors still hesitant.",
            },
          ],
        },
        {
          points: [
            {
              title: "2016–2019: Chennai Enters the AI Race",
              para: [
                <>
                  Mad Street Den gains global attention with AI-powered retail
                  tools.
                </>,
                <>
                  Uniphore grows fast, taking voice AI and speech recognition
                  global.
                </>,
                <>
                  Deep tech incubators launch at IIT-M Research Park and
                  NASSCOM’s warehouse.
                </>,
                <>
                  AR/VR, robotics, and NLP startups emerge, carving a niche in
                  computer vision and emotion AI.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/2016–2019 Chennai Enters the AI Race.svg",
              note: " Chennai becomes known for applied AI with real-world use cases.",
            },
          ],
        },
        {
          points: [
            {
              title: "2020–2022: From Research to Revenue",
              para: [
                <>
                  COVID accelerates automation – AI tools for healthcare,
                  logistics, and remote support boom.
                </>,
                <>
                  IIT-M open-sources AI models for Tamil and Indian languages,
                  democratizing AI for Bharat.
                </>,
                <>Global tech companies expand AI teams in Chennai.</>,
                <>
                  Uniphore becomes a unicorn, Chennai’s first deep tech startup
                  to reach $1B+ valuation.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/2020–2022 From Research to Revenue.svg",
              note: " AI powers customer service, diagnostics, and fintech workflows.",
            },
          ],
        },
        {
          points: [
            {
              title: "2023–2025: Chennai’s Deep Tech Maturity",
              para: [
                <>
                  LangTech and GenAI boom with Indian-language LLMs and
                  voice-first apps.
                </>,
                <>
                  AI + Robotics + IoT startups build smart surveillance, drones,
                  and manufacturing automation.
                </>,
                <>
                  AI policy labs and Responsible AI frameworks emerge from
                  academia and startups.
                </>,
                <>
                  B2B AI scales across HR automation, fraud detection, and
                  industrial use cases.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/2023–2025 Chennai’s Deep Tech Maturity.svg",
              note: " Chennai is building tools everyone will soon depend on, without trying to be Silicon Valley.",
            },
          ],
        },
        {
          points: [
            {
              title: "Chennai’s AI & Deep Tech Strengths",
              para: [
                <>
                  <strong>🇮🇳 Indigenous AI:</strong> Tools and platforms made
                  for Indian languages and challenges.
                </>,
                <>
                  <strong> Academic backbone:</strong> IIT-M, IIIT-DM, CEG, and
                  Anna University drive new research.
                </>,
                <>
                  <strong> Vertical depth:</strong> HealthTech, Retail AI,
                  AgriTech, SpeechTech, and Industrial AI.
                </>,
                <>
                  <strong> Proven exits:</strong> Chennai startups are scaling
                  globally, attracting global investors.
                </>,
              ],
              imgs: "/images/Invest-Images/invest-icons/invest-deeptech-startups/chennais-deep-tech-strengths.svg",
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
            "Chennai’s fintech isn’t flashy—it’s foundational. It’s the API under your favorite wallet. The backend of your insurance app. The invisible engine behind India’s financial inclusion movement.",
            "With its strong talent pool, deep-rooted finance culture, and now a proven startup record—Chennai is building the rails for India’s financial future.",
          ],
        },
      ],
    },
  ];

  const WhatsNextData1 = [
    {
      items: [
        {
          title: "What’s Next?",
          description: [
            "Chennai isn’t chasing AI trends. It’s quietly building AI that works—for hospitals, for farms, for enterprises, for small-town India.",
            "Deep Tech is no longer deep in the lab. It’s in your apps, your car, your business software—many of them powered by teams right here in Chennai.",
          ],
        },
      ],
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
        <img src="/images/Invest-Images/SubPages/deeptech.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> DeepTech & AI Startups in Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Invest</Link> -{" "}
              <span> DeepTech & AI Startups in Chennai</span>
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
            <p>DeepTech & AI Startups in Chennai </p>
          </div>
          <div className="workIntro">
            <h3>
              {/* DeepTech & AI Startups in Chennai:  */}
              Quietly Changing the Game{" "}
            </h3>
            <p>
              Chennai may not shout, but it builds. And when it comes to
              DeepTech and Artificial Intelligence, the city is creating
              technologies that power global industries—silently, efficiently,
              and intelligently.
            </p>
            <p>
              From emotion-sensing AI in fashion to voice intelligence that
              powers call centers around the world, Chennai’s deep tech startups
              are turning cutting-edge research into real-world impact. These
              companies are using data, algorithms, robotics, IoT, and machine
              learning to solve complex problems in health, retail,
              manufacturing, education, and finance.
            </p>
            <p>
              Whether you're a founder, a student, an investor, or just someone
              curious about what’s next—this is the Chennai you need to know.
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
              {section.whereInnovations.map((tenant, i) => (
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

        {/* Why Chennai is a Startup Powerhouse */}
        <section className=" py-12 px-4 md:px-8 pt-0">
          {WhatsNextData.map((section, index) => (
            <div key={index} className="max-w-6xl mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {section.category}
              </h2>
              <div className="grid grid-cols-1  gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
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
            <div class="max-w-7xl mx-auto text-center">
              <h2 class="text-3xl md:text-4xl font-bold">
                {section.sectionTitle}
              </h2>
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
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
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
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
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
