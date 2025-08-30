import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { desc } from "framer-motion/client";
import InnovatePagesSlider from "./InnovatePageSlider";
import { Helmet } from "react-helmet-async";

export default function EduTechinChennai() {
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
      sectionDesc:
        "Unlike many cities chasing crypto headlines, Chennai is focused on blockchain with purpose — solving real public problems and building lasting platforms.",

      fintechEvolution: [
        {
          points: [
            {
              title: "Why Chennai Is an EduTech Powerhouse",
              para: [
                <>
                  One of India’s highest student densities: over 3,000 schools
                  and 150+ colleges
                </>,
                <>
                  Presence of elite institutions like IIT Madras, Anna
                  University, SRM, VIT
                </>,
                <>
                  Huge demand for upskilling, test prep, and hybrid learning
                  post-pandemic
                </>,
                <>Rich talent pool in engineering, content, and pedagogy</>,
                <>
                  Growing number of startups and incubators focused on ed-tech
                  and learning innovation
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Why Chennai Is an EduTech Powerhouse.svg",
            },
          ],
        },
      ],
    },
  ];

  const evData = [
    {
      company: "Skill-Lync",
      focus: "Engineering upskilling",
      highlights: "AI, ML, EV, and mechanical courses for grads and pros",
    },
    {
      company: "Flintobox",
      focus: "Early learning kits",
      highlights: "Award-winning STEM-based activity boxes for kids 2–12",
    },
    {
      company: "GUVI (by IIT-M)",
      focus: "Vernacular tech education",
      highlights: "Learn coding in Tamil, Telugu, Hindi; 2M+ users",
    },
    {
      company: "HeyMath!",
      focus: "Math & analytics",
      highlights: "Singapore-backed, used in 1000+ schools globally",
    },
    {
      company: "Youniv360",
      focus: "College discovery platform",
      highlights: "AI-powered college comparison & career planning",
    },
    {
      company: "Board Infinity (Chennai arm)",
      focus: "Career coaching",
      highlights: "Job-ready programs + mentorship for Tier 2/3 grads",
    },
    {
      company: "ClassKlap (IMAX Program)",
      focus: "School content + analytics",
      highlights: "Blends textbooks with adaptive learning tech",
    },
    {
      company: "Greatify",
      focus: "B2B learning platform",
      highlights: "Corporate L&D & customized upskilling for teams",
    },
  ];

  const FastFacts = [
    {
      company: "OMR/IT Corridor",
      speciality:
        "EduTech company clusters + learning management solution providers",
    },
    {
      company: "IIT-M Research Park",
      speciality:
        "Incubates AI/ML-led EduTech startups like GUVI, Skill-Lync, AiPlay",
    },
    {
      company: "Anna Salai / Nungambakkam",
      speciality: "Coaching hubs integrating tech for hybrid learning",
    },
    {
      company: "Ambattur / Guindy",
      speciality: "B2B EduTech platforms serving HR, corporate skilling",
    },
  ];

  const FastStats = [
    { company: "EduTech startups", speciality: "75+" },
    { company: "Active EduTech learners", speciality: "8 lakh+" },
    { company: "Schools using Chennai-built LMS", speciality: "2,000+" },
    {
      company: "Corporate L&D via Chennai B2B EdTech",
      speciality: "400+ companies",
    },
    {
      company: "State investments (last 3 years)",
      speciality: "₹1,200+ Cr in smart classrooms & digital content",
    },
  ];

  const FastStats1 = [
    {
      company: "Kidobotikz",
      speciality: "Robotics kits + training for kids & teens",
    },
    {
      company: "RoboClub – IIT Madras",
      speciality: "Annual RoboFest and national-level workshops",
    },
    {
      company: "Skill-Lync – Chennai HQ",
      speciality: "Mechatronics & embedded systems courses",
    },
    {
      company: "Robotix India Expo (Chennai edition)",
      speciality: "Annual robotics showcase event for India South",
    },
  ];

  const datard = [
    {
      title: "Trending Technologies in Chennai's EduTech Scene",
      points: [
        <>
          <strong>AI Tutors</strong> for personalized learning paths
        </>,
        <>
          <strong>Voice-based vernacular learning</strong> (Tamil-first coding,
          spoken English)
        </>,
        <>
          <strong>Gamified learning</strong> in STEM, history, and languages
        </>,
        <>
          <strong>Data-driven content platforms</strong> for schools and
          colleges
        </>,
        <>
          <strong>AR/VR classrooms</strong> in pilot stages across Chennai’s
          CBSE institutions
        </>,
      ],
    },
    {
      title: "Government & Public Initiatives",
      points: [
        <>
          <strong>Tamil Nadu Smart Classrooms Scheme</strong> (with Chennai as
          test-bed city)
        </>,
        <>
          <strong>TN e-Content Library</strong> – interactive content by
          Chennai-based creators
        </>,
        <>
          <strong>Chennai Teacher Innovation Labs</strong> – tech-enabled
          teaching experiments
        </>,
        <>
          <strong>Skill-building tie-ups</strong> with GUVI, Skill-Lync, and
          NSDC
        </>,
      ],
    },
    {
      title: "The Future of EduTech in Chennai",
      points: [
        <>
          <strong>Global expansion</strong> (with Chennai as test-bed city)
        </>,
        <>
          <strong>AI-first learning companions</strong> – interactive content by
          Chennai-based creators
        </>,
        <>100% digital school adoption in metro by 2026</>,
        <>
          <strong>STEM & robotics curriculum</strong> with GUVI, Skill-Lync, and
          NSDC
        </>,
        <>Integration of skill certification with employability in colleges</>,
      ],
      desc: "In Chennai, robots don’t just exist in labs — they clean, weld, transport, scan, and heal.",
    },
  ];

  const imageSections2 = [
    // Existing "Chennai’s Auto Startup Scene" section (keep as-is),

    {
      sectionTitle: "Timeline: Chennai’s EduTech Evolution (2005–2025)",
      sectionDesc: "Two Decades of Learning Reinvented Through Technology",

      fintechEvolution: [
        {
          points: [
            {
              title: "2005 – The Seeds of Change",
              para: [
                <>
                  IIT Madras & Anna University introduce early research in
                  e-learning platforms and content digitization.
                </>,
                <>
                  Chennai colleges start exploring LMS systems and campus
                  intranet teaching.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2005 – The Seeds of Change.svg",
            },
            {
              title: "2008 – Rise of Digital Coaching",
              para: [
                <>
                  Traditional coaching centers (NEET, IIT-JEE, CA) begin
                  integrating digital smart boards and test software.
                </>,
                <>
                  The city sees the rise of hybrid learning models in
                  Nungambakkam, Tambaram zones.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2008 – Rise of Digital Coaching.svg",
            },
            {
              title: "2011 – HeyMath! Expands Internationally",
              para: [
                <>
                  Chennai-based HeyMath!, backed by the University of Cambridge,
                  reaches 1,000+ schools across 5 countries.
                </>,
                <>One of the first local EduTech startups to go global.</>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2011 – HeyMath! Expands Internationally.svg",
            },
            {
              title: "2013 – Flintobox Founded",
              para: [
                <>
                  Early learning startup Flintobox launches STEM-based activity
                  boxes for children aged 2–12.
                </>,
                <>
                  Gains wide adoption across Chennai and Tier-2 cities in Tamil
                  Nadu.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2013 – Flintobox Founded.svg",
            },
            {
              title: "2015 – EdTech Goes Mobile",
              para: [
                <>
                  Smartphones + cheap data fuel mobile-first learning in
                  Chennai.
                </>,
                <>
                  Schools begin using WhatsApp groups, YouTube explainers, and
                  educational apps to supplement learning.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2015 – EdTech Goes Mobile.svg",
            },
            {
              title: "2016 – Skill-Lync Begins Engineering Upskilling",
              para: [
                <>
                  Chennai-based Skill-Lync starts offering job-ready mechanical,
                  EV, and AI courses for college graduates.
                </>,
                <>Focus on bridging the academia-industry skill gap.</>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2016 – Skill-Lync Begins Engineering Upskilling.svg",
            },
            {
              title: "2017 – IIT Madras Launches GUVI",
              para: [
                <>
                  GUVI, India’s first vernacular tech learning platform, goes
                  live from IIT-M Incubation Cell.
                </>,
                <>
                  Enables coding in Tamil, Telugu, Hindi — landmark move for
                  inclusive EduTech.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2017 – IIT Madras Launches GUVI.svg",
            },
            {
              title: "2019 – EdTech and AI Converge",
              para: [
                <>
                  IIT Madras’ Robert Bosch AI Centre begins developing AI for
                  adaptive learning models.
                </>,
                <>
                  EduTech startups explore personalisation and student
                  analytics.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2019 – EdTech and AI Converge.svg",
            },
            {
              title: "2020 – COVID-19: Catalyst for EdTech Boom",
              para: [
                <>All Chennai schools and colleges shift online overnight.</>,
                <>
                  Explosive adoption of Google Meet, Zoom, Microsoft Teams for
                  education.
                </>,
                <>
                  Enrolments at Skill-Lync, GUVI, Board Infinity grow 5X in 6
                  months.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2020 – COVID-19-Catalyst for EdTech Boom.svg",
            },
            {
              title: "2021 – Smart Classroom Push by Tamil Nadu Govt",
              para: [
                <>
                  37% of Chennai Corporation schools upgraded with smart boards,
                  tablets, and digital content.
                </>,
                <>
                  Local startups partner with govt for teacher training and
                  content digitization.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2021 – Smart Classroom Push by Tamil Nadu Govt.svg",
            },
            {
              title: "2022 – AI + Gamification Take Off",
              para: [
                <>
                  Chennai startups experiment with gamified math, science, and
                  spoken English apps.
                </>,
                <>
                  ClassKlap and ImaginXP launch pilot programs in Chennai public
                  and private schools.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2022 – AI + Gamification Take Off.svg",
            },
            {
              title: "2023 – Corporate Skilling Expands",
              para: [
                <>
                  B2B EduTech platforms like Greatify and Board Infinity serve
                  300+ Chennai-based companies.
                </>,
                <>
                  Popular programs in data science, digital marketing, finance,
                  and soft skills.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2023 – Corporate Skilling Expands.svg",
            },
            {
              title: "2024 – STEM & Robotics Enter Schools",
              para: [
                <>
                  Chennai schools begin integrating robotics kits and
                  Arduino-based STEM curriculum from Class 3 onwards.
                </>,
                <>
                  EduTech companies partner with schools for after-school labs
                  and competitions.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2024 – STEM & Robotics Enter Schools.svg",
            },
            {
              title: "2025 – Chennai Declared a “Digital Learning Hub”",
              para: [
                <>
                  100% of Corporation schools connected to smart classroom
                  infrastructure.
                </>,
                <>
                  Tamil Nadu to launch “EduNet” – state-wide educational content
                  platform, built by Chennai firms.
                </>,
                <>
                  <strong>Chennai leads South India in:</strong>
                </>,
                <> Vernacular AI learning</>,
                <> Teacher Tech-Training</>,
                <> Industry-aligned upskilling</>,
                <> Mobile-first education reach</>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/2025 – Chennai Declared a “Digital Learning Hub”.svg",
            },
            {
              title: "What Next?",
              para: [
                <>Conversational AI tutors in Tamil</>,
                <>VR-based immersive learning pilots in high schools</>,
                <>AI-generated lesson plans + student feedback tools</>,
                <> Real-time skill mapping platforms for colleges & hiring</>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/What Next.svg",
            },
          ],
        },
      ],
    },
  ];

  const thenvsNow = [
    {
      category: "Access to Education",
      then: "Physical schools and tuition centers",
      now: "Hybrid: School + App + AR/VR + community learning pods",
    },
    {
      category: "Content Format",
      then: "Textbooks, blackboards",
      now: "Interactive apps, gamified, AR/VR simulations, micro-learning videos",
    },
    {
      category: "Language of Instruction",
      then: "Primarily English/Tamil in classrooms",
      now: "Vernacular AI tutors (Tamil, Telugu, Hindi) on mobile, bilingual resources",
    },
    {
      category: "Learning Tools",
      then: "Chalk, notes, OHPs",
      now: "Tablets, smart boards, AI-powered simulators, robotics kits",
    },
    {
      category: "Tech in Schools",
      then: "Limited computer labs once a week",
      now: "Full smart classrooms with LMS, virtual labs, real-time collaboration",
    },
    {
      category: "Higher Education",
      then: "College-only degrees",
      now: "Degree + micro-certifications + online industry-aligned courses",
    },
    {
      category: "Engineering Training",
      then: "Theory-focused, generic curriculum",
      now: "Real-world upskilling in EV, AI, ML, design thinking (via platforms like Skill-Lync, GUVI)",
    },
    {
      category: "Coaching Culture",
      then: "Offline coaching hubs",
      now: "On-demand learning apps, AI-based test prep with analytics",
    },
    {
      category: "Student Assessment",
      then: "Paper tests, one-size-fits-all",
      now: "Adaptive testing, personalized analytics dashboards",
    },
    {
      category: "Teacher Role",
      then: "Chalk-and-talk",
      now: "Tech-enabled mentors, blended learning facilitators, content curators",
    },
    {
      category: "EduTech Startups",
      then: "2–3 early players like HeyMath!",
      now: "70+ companies (GUVI, Flintobox, Greatify, etc.)",
    },
    {
      category: "STEM & Robotics",
      then: "Only in elite schools or IIT",
      now: "Taught from Class 3 in CBSE and Corporation schools",
    },
    {
      category: "Career Prep",
      then: "Final-year placements",
      now: "Career mapping from Class 9, job-linked skilling from Year 1 college",
    },
    {
      category: "EdTech Reach",
      then: "Urban, high-income only",
      now: "Pan-city, including Govt schools via mobile-first models",
    },
    {
      category: "Parent Involvement",
      then: "PTMs and tuition monitoring",
      now: "App-based insights, daily feedback, gamified progress",
    },
    {
      category: "Public Policy Support",
      then: "Low digital focus",
      now: "Smart Classrooms Scheme, EduNet, Startup grants",
    },
    {
      category: "Edu Employment",
      then: "Teachers, tuition centers",
      now: "Teachers + content creators, edtech trainers, AI tutor developers",
    },
  ];

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
        <title>Edu Tech Chennai : AI-led Skill Platforms</title>
        <meta
          name="description"
          content="Discover how EduTech Chennai is empowering learners with AI-led platforms, interactive apps, and digital-first innovations for a brighter future."
        />
        <link rel="canonical" href="/innovate/edutech-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Innovate-Images/SubPages/Education-Tech-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>EduTech in Chennai</h3>
              <div className="breadCrum">
                <Link to="/innovate-chennai"> Innovate </Link> -{" "}
                <a href="">EduTech in Chennai </a>
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
              <h3>Where Learning Meets Technology, Innovation, and Scale</h3>
              <p>
                Chennai is not just a city of schools and colleges anymore —
                it's a hotbed of education innovation. From K-12 learning apps
                to AI-led skilling platforms, Chennai is emerging as South
                India's EduTech capital, nurturing talent, tools, and
                transformation.
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
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
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
              <h2 className="text-2xl font-bold mb-3">
                Top EduTech Startups from Chennai
              </h2>
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left border-b">Company</th>
                    <th className="py-2 px-4 text-left border-b">Focus Area</th>
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

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              {" "}
              Learning Innovation Zones in Chennai
            </h2>
            {/* <p className="mb-4 text-gray-600 text-center mb-10">  These companies have made Chennai their technology fortress:  </p> */}
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Area
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Highlights
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {FastFacts.map((giant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.company}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.speciality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto p-6 text-gray-800 cards listdatacontent">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Academic-Startup Collaboration
            </h2>
            {datard.map((section, index) => (
              <div
                key={index}
                className="card rounded-2xl p-4 mb-4 shadow bg-white"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {section.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                {section.desc && (
                  <p className="text-gray-600 italic mt-2">{section.desc}</p>
                )}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              Chennai EduTech Snapshot (2024)
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {FastStats.map((giant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.company}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.speciality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto my-6">
            <h2 className="text-2xl font-bold">
              Robotics Edu cation & Community Builders
            </h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {FastStats1.map((giant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.company}
                    </td>
                    <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                      {giant.speciality}
                    </td>
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
                <h2 className="text-2xl font-bold"> {section.sectionTitle} </h2>
                <p class="mb-4 text-gray-600 text-center mb-10">
                  {section.sectionDesc}
                </p>
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

          <div className="p-4 space-y-6">
            <div className="overflow-x-auto">
              <h2 className="text-2xl font-bold mb-3">
                Then vs Now: Chennai’s Learning Revolution (2005 vs 2025)
              </h2>
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead className="bg-gray-100">
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Category</th>
                    <th className="py-2 px-4 text-left">THEN (2005)</th>
                    <th className="py-2 px-4 text-left">NOW (2025)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {thenvsNow.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4">{item.category}</td>
                      <td className="py-2 px-4">{item.then}</td>
                      <td className="py-2 px-4">{item.now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <InnovatePagesSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
