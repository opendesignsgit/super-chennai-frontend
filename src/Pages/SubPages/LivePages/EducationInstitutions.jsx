import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";
import LiveSlider from "./LiveSlider";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";

export default function EducationInstitutions() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const [isSticky, setIsSticky] = useState(false);
  const bgTextRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Central Chennai");
  const [selectedTabForScroll, setSelectedTabForScroll] = useState("");

  const tabNames = [
    "IB Schools",
    "IGCSE Schools",
    "ICSE Schools",
    "CBSE Schools",
    "Matriculation Schools",
    "State Board Schools",
    "Top Colleges",
    "Arts, Science & Commerce Colleges",
    "Law Colleges",
    "Business & Management Colleges",
    "Colleges and Universities",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleStickyScroll = () => {
    const section = document.getElementById("fourthSection");
    if (section) {
      const top = section.getBoundingClientRect().top;
      setIsSticky(top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);
  // Load from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTabForScroll");
    if (savedTab && tabNames.includes(savedTab)) {
      setSelectedTabForScroll(savedTab);
    } else {
      setSelectedTabForScroll(tabNames[0]); // default to first tab
    }
  }, []);

  // IB-Schools
  const IbSchoolIntro = [
    {
      sectionTitle: "IB Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];
  const IbSchoolsList = [
    {
      category: "Full list of IB schools in Chennai",
      places: [
        {
          name: "Akshar Arbol International School",
          desc: "Known for fostering open-mindedness and innovative thinking.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/DFcUVz2FEu5eTSFu9",
            },
          ],
        },
        {
          name: "CPS Global School",
          desc: "Caters to students aged 3-19 and emphasizes curiosity and lifelong learning.",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/Bh4tQxWXAwKgCNLo8",
            },
          ],
        },
        {
          name: "Gateway International School (CBSE) - Padur",
          desc: "The first IB Continuum school in Chennai, offering all three IB programs (PYP, MYP, & DP).",
          locations: [
            {
              name: "Kelambakkam",
              link: "https://maps.app.goo.gl/bjqc4GGAUB7Czv6PA",
            },
          ],
        },
        {
          name: "Hiranandani Upscale School",
          desc: "Offers a well-rounded education with a focus on academics, community service, and extracurriculars.",
          locations: [
            {
              name: "Padur",
              link: "https://maps.app.goo.gl/ikSSzvUjDbtddmgs9",
            },
          ],
        },
        {
          name: "The Indian Public School - TIPS Globeducate",
          desc: "Focuses on extraordinary education, exposure, and experience.",
          locations: [
            {
              name: "Perungudi",
              link: "https://maps.app.goo.gl/i1ygjr26akLW9sxm6",
            },
          ],
        },
        {
          name: "M.C.T.M. Chidambaram Chettyar International School",
          desc: "Chennai's first Indian school to offer the IB Diploma Programme (IBDP).",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/2YYmEVX9ooWbunJTA",
            },
          ],
        },
        {
          name: "Lalaji Memorial Omega International School",
          desc: "Offers various facilities and has received high rankings for innovation and resources.",
          locations: [
            {
              name: "Kovalur",
              link: "https://maps.app.goo.gl/ZzE21VBgCRa86cXK8",
            },
          ],
        },
        {
          name: "International Village School",
          desc: "",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/Qh4FmLY9ZhVgjoyb9",
            },
          ],
        },
        {
          name: "KC High International School",
          desc: "",
          locations: [
            {
              name: "Navalur",
              link: "https://maps.app.goo.gl/XFZrVBvgNeQWLrD7A",
            },
          ],
        },
        {
          name: "Ela Green School",
          desc: "Located near Maraimalai Nagar, and offers the IB program.",
          locations: [
            {
              name: "Maraimalai Nagar",
              link: "https://maps.app.goo.gl/ZcHbSLPZkykZVvkb7",
            },
          ],
        },
        {
          name: "LADY ANDAL SCHOOL",
          desc: "",
          locations: [
            {
              name: "Chetpet",
              link: "https://maps.app.goo.gl/dbtEdqagFg5xmWmY8",
            },
          ],
        },
        {
          name: "Velammal Global School (Puzhal)",
          desc: "Known for quality education, professional staff, and amenities.",
          locations: [
            {
              name: "Puzhal",
              link: "https://maps.app.goo.gl/F4QHbByVMBB9xy8J8",
            },
          ],
        },
        {
          name: "Alphabet International School",
          desc: "Creates a calming learning environment with colorful spaces and a focus on IB values.",
          locations: [
            {
              name: "Palavakkam",
              link: "https://maps.app.goo.gl/PPd5HYYiHnHxhPjZ8",
            },
          ],
        },
        {
          name: "Sharanalaya Montessori School",
          desc: "",
          locations: [
            {
              name: "Injambakkam",
              link: "https://maps.app.goo.gl/mSPbpFH2VJc15h7r7",
            },
          ],
        },
        {
          name: "The NEST School",
          desc: "Offers the IB PYP program alongside the CAIE Curriculum.",
          locations: [
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/VEWW7Hs42rCSFoU29",
            },
          ],
        },
        {
          name: "Anand Singapore International School, Chennai",
          desc: "Offers the IBDP alongside the Cambridge IGCSE and Singapore curricula.",
          locations: [
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/CdKHQ8Bm8gJ7q2L69",
            },
          ],
        },
      ],
    },
  ];
  const IbTopSchools = [
    {
      SchoolName: "International Village School (IVS)",
      ProgrammesOffered: "PYP, MYP, DP",
      Location: "Neelankarai",
      ApproxFees: "₹5L – ₹7.5L",
      Rating: "4.4",
    },
    {
      SchoolName: "The Indian Public School (TIPS)",
      ProgrammesOffered: "PYP, DP",
      Location: "Multiple campuses",
      ApproxFees: "₹3L – ₹6.5L",
      Rating: "4.1",
    },
    {
      SchoolName: "American International School (AISC)",
      ProgrammesOffered: "PYP, MYP, DP",
      Location: "Taramani",
      ApproxFees: "₹7L – ₹12L",
      Rating: "4.6",
    },
    {
      SchoolName: "KC High International School",
      ProgrammesOffered: "PYP (with IGCSE, IB DP)",
      Location: "Navalur",
      ApproxFees: "₹4.5L – ₹9L",
      Rating: "4.3",
    },
    {
      SchoolName: "Gateway International School",
      ProgrammesOffered: "IB PYP + Cambridge MYP",
      Location: "Padur",
      ApproxFees: "₹3.5L – ₹6.5L",
      Rating: "4.0",
    },
  ];

  const IbschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Subjects Offered Include:",
              para: [
                "Group 1: English Language & Literature",
                "Group 2: French, Hindi, Tamil, Spanish",
                "Group 3: History, Global Politics, Psychology",
                "Group 4: Physics, Chemistry, Biology, Environmental Systems",
                "Group 5: Math AA / AI",
                "Group 6: Visual Arts, Film, Theatre",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Fees & Admission Process",
              note: (
                <strong>
                  Application Fee: ₹5,000 – ₹25,000 (non-refundable)
                </strong>
              ),
              para: [],
              note2: <strong>Annual Tuition:</strong>,
              para2: ["PYP: ₹3L – ₹6L", "MYP: ₹4L – ₹8L", "DP: ₹6L – ₹12L"],

              note3: (
                <div>
                  {" "}
                  <strong>Admission Timeline:</strong>{" "}
                  <span>
                    Rolling for most, but DP intake typically finalizes by
                    April–May.
                  </span>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Chennai’s Edge in IB Education",
              note: "",
              para: [
                "Multilingual Advantage: Most IB schools in Chennai offer Tamil and Hindi as part of Group 2.",
              ],
              para2: [
                "Cultural Integration: Chennai’s IB institutions blend international pedagogy with regional arts, music, and environmental learning.",
              ],
              para3: [
                "University Counseling: Dedicated career guidance cells help with admissions abroad—including SAT, UCAS, and Common App prep.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Ideal for Families Who Want:",
              note: "",
              para: [
                "A global curriculum with flexibility and academic challenge",
              ],
              para2: [
                "An education that balances STEM with humanities and service",
              ],
              para3: [
                "An international career trajectory or early overseas relocation",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const IbimageSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  The International Baccalaureate (IB) program is increasingly
                  shaping Chennai’s educational landscape, offering a globally
                  respected framework that nurtures intellectual curiosity,
                  ethical leadership, and lifelong learning. With an emphasis on
                  conceptual understanding, interdisciplinary thinking, and
                  service-driven values, IB schools in Chennai are ideal for
                  families seeking internationally aligned, inquiry-based
                  education with deep local roots.Currently, Chennai hosts over
                  10 IB World Schools, delivering Primary Years Programme (PYP),
                  Middle Years Programme (MYP), and Diploma Programme (DP) for
                  various age groups.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose an IB School in Chennai?",
              para: [
                <>
                  Globally Accredited: IB is accepted by 2,000+ universities
                  across 90 countries, including Oxford, Stanford, and NUS.
                </>,
                <>
                  Skill-Rich Curriculum: Encourages independent research,
                  intercultural awareness, and real-world problem solving.
                </>,
                <>
                  Teacher Quality: IB teachers undergo rigorous global training
                  and ongoing pedagogy development.
                </>,
                <>
                  Focus on Learner Identity: IB’s “learner profile” model
                  supports holistic growth—intellectual, emotional, ethical.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];
  const IbsaasSuperstars = [
    {
      Programme: "PYP",
      AgeGroup: "3–12 yrs",
      Description:
        "Focus on inquiry, community, foundational literacy and numeracy",
    },
    {
      Programme: "MYP",
      AgeGroup: "11–16 yrs",
      Description:
        "Interdisciplinary learning, project work, and global contexts",
    },
    {
      Programme: "DP",
      AgeGroup: "16–19 yrs",
      Description:
        "2-year pre-university program with subjects across 6 groups, Theory of Knowledge (TOK), Extended Essay (EE), and CAS (Creativity-Activity-Service)",
    },
  ];
  // IB-Schools

  // IGCSE-Schools
  const IGCSESchoolIntro = [
    {
      sectionTitle: "IGCSE Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];
  const IGCSESchoolsList = [
    {
      category: "Full list of IGCSE  schools in Chennai",
      places: [
        {
          name: "Amethyst International School",
          desc: "",
          locations: [
            {
              name: "Sithalapakkam",
              link: "https://maps.app.goo.gl/Au7qHQvDn9Pd6Lbd6",
            },
          ],
        },
        {
          name: "Aachi Global School",
          desc: "",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/d4diJ7Y1Vt7E4biZ7",
            },
          ],
        },
        {
          name: "Akshar Arbol International School",
          desc: "",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/1k56iHoAAvrbgaJg6",
            },
          ],
        },
        {
          name: "APL Global School",
          desc: "",
          locations: [
            {
              name: "Thoraipakkam",
              link: "https://maps.app.goo.gl/MeY9k1rvjUDGNdnq8",
            },
          ],
        },
        {
          name: "Athena Global School",
          desc: "",
          locations: [
            {
              name: "OMR",
              link: "https://maps.app.goo.gl/PLGDAkEsSMAUhkjg6",
            },
          ],
        },
        {
          name: "Canopo International School",
          desc: "",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/aCVhVtBv5qURsPKW9",
            },
          ],
        },
        {
          name: "CPS Global School",
          desc: "",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/6quPgT7JcJhV9dn1A",
            },
          ],
        },
        {
          name: "Crescent School",
          desc: "",
          locations: [
            {
              name: "Vandalur",
              link: "https://maps.app.goo.gl/Ezo7CqrKLw8P6kbRA",
            },
          ],
        },
        {
          name: "Gateway The Complete School",
          desc: "",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/XtDvwiDuuEmYT1ir7",
            },
          ],
        },
        {
          name: "GGN International School",
          desc: "",
          locations: [
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/DrU94pqAy8z9o5z86",
            },
          ],
        },
        {
          name: "Grassroots Global School",
          desc: "",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/ew5CG78SN6SEg2cAA",
            },
          ],
        },
        {
          name: "Horizon International Academy",
          desc: "",
          locations: [
            {
              name: "Kovilancheri",
              link: "https://maps.app.goo.gl/5YqjdG7N5jimgsps8",
            },
          ],
        },
        {
          name: "HLC International School",
          desc: "",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/wK433EYsZSrbuhdVA",
            },
          ],
        },
        {
          name: "The Indian Public School - TIPS Globeducate",
          desc: "",
          locations: [
            {
              name: "Perungudi",
              link: "https://maps.app.goo.gl/NQZdkzdzZXrNJctz8",
            },
          ],
        },
        {
          name: "JS Global School",
          desc: "",
          locations: [
            {
              name: "JSholinganallur",
              link: "https://maps.app.goo.gl/42293eZDB4gZuzDRA",
            },
          ],
        },
        {
          name: "Lalaji Memorial Omega International School",
          desc: "",
          locations: [
            {
              name: "Kovur",
              link: "https://maps.app.goo.gl/dFPEzypTCqyKTnVP8",
            },
          ],
        },
        {
          name: "The Lords' International School",
          desc: "",
          locations: [
            {
              name: "Periyar Nagar West",
              link: "https://maps.app.goo.gl/wZDnHJHPkvRzYMgN7",
            },
          ],
        },
        {
          name: "M.C.T.M. Chidambaram Chettyar International School",
          desc: "",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/n6GSCpx8mj12Rz5F9",
            },
          ],
        },
        {
          name: "Olive International School",
          desc: "",
          locations: [
            {
              name: "Shenoy Nagar",
              link: "https://maps.app.goo.gl/gLA1H2pfB2TMbx7W7",
            },
          ],
        },
        {
          name: "Orchids The International School",
          desc: "",
          locations: [
            {
              name: "",
              link: "",
            },
          ],
        },
        {
          name: "Peace Academy",
          desc: "",
          locations: [
            {
              name: "MMDA Colony",
              link: "https://maps.app.goo.gl/CBCtNpZeaSYWZXpp7",
            },
          ],
        },
        {
          name: "Sharanalaya Montessori School",
          desc: "",
          locations: [
            {
              name: "Injambakkam",
              link: "https://maps.app.goo.gl/Tp1E97kwXVHFZtP96",
            },
          ],
        },
        {
          name: "Sri Krish International School (Cambridge Curriculum)",
          desc: "",
          locations: [
            {
              name: "Kovur",
              link: "https://maps.app.goo.gl/3T883CqA9jQkpNWF9",
            },
          ],
        },
        {
          name: "Sri Sankara Global Academy",
          desc: "",
          locations: [
            {
              name: "",
              link: "",
            },
          ],
        },
        {
          name: "TATVA School",
          desc: "",
          locations: [
            {
              name: "Polachery",
              link: "https://maps.app.goo.gl/i6xkoTa5fQN9iL2b7",
            },
          ],
        },
        {
          name: "Trileaves Group of Schools",
          desc: "",
          locations: [
            {
              name: "Madambakkam",
              link: "https://maps.app.goo.gl/SgNq6BHcofXsZc9V8",
            },
          ],
        },
        {
          name: "Vruksha Montessori School",
          desc: "",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/WEPG9JDW1R9Jy5RA7",
            },
          ],
        },
        {
          name: "Velammal global school",
          desc: "",
          locations: [
            {
              name: "Puzhal",
              link: "https://maps.app.goo.gl/C5TfiywfYHJFMCKX8",
            },
          ],
        },
      ],
    },
  ];
  const IGCSETopSchools = [
    {
      SchoolName: "The British International School (TBIS)",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹5L – ₹8L/year",
      Rating: "4.2",
    },
    {
      SchoolName: "APL Global School",
      ProgrammesOffered: null,
      Location: "Thoraipakkam",
      ApproxFees: "₹4L – ₹7L/year",
      Rating: "4.1",
    },
    {
      SchoolName: "HLC International School",
      ProgrammesOffered: null,
      Location: "Karanai",
      ApproxFees: "₹3L – ₹6.5L/year",
      Rating: "4.0",
    },
    {
      SchoolName: "Akshar Arbol International School",
      ProgrammesOffered: null,
      Location: "Injambakkam",
      ApproxFees: "₹4L – ₹7L/year",
      Rating: "4.3",
    },
    {
      SchoolName: "Vaels International School",
      ProgrammesOffered: null,
      Location: "Injambakkam",
      ApproxFees: "₹2.5L – ₹4.5L/year",
      Rating: "4.0",
    },
  ];

  const IGCSEschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum Features",
              para: [
                "Grades Offered: From Grade 1 up to A Levels (equivalent to Class 12)",
                "Subjects Offered: English, Math, Science, ICT, Economics, Global Perspectives, and Art & Design",
                "Languages: Most schools offer French, Hindi, and Tamil as second/third language options",
                "Technology Integration: Smart classrooms, online submissions, and blended learning models are widely adopted",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Admission & Fee Insights",
              note: (
                <strong>
                  Admission Process: Application form, entrance assessment
                  (Grade 6+), and interview with student & parent
                </strong>
              ),
              para: [],
              note2: <strong>Fees:</strong>,
              para2: [
                "Pre-Primary: ₹1.8L – ₹3L/year",
                "Primary & Middle: ₹2.5L – ₹5.5L/year",
                "High School (IGCSE/AS/A): ₹4L – ₹8L/year",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools offer sibling discounts, scholarships, or
                    monthly/term payment plans.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Who Should Consider IGCSE in Chennai?",
              note: "",
              para: [
                "Expats & Global Citizens: Seeking a curriculum transferable across countries",
              ],
              para2: [
                "High-Performing Students: Aiming for Ivy League or top European/Asian universities",
              ],
              para3: [
                "Creative & Analytical Thinkers: Who thrive in non-rote learning formats",
              ],
              para4: [
                "Parents Preferring Skill-Based Education: With emphasis on real-world thinking and project work",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const IGCSEimageSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  Chennai is rapidly emerging as a hub for internationally
                  benchmarked education, and IGCSE schools (Cambridge
                  Curriculum) are at the forefront of this transformation.
                  Designed and administered by Cambridge Assessment
                  International Education (CAIE), the IGCSE (International
                  General Certificate of Secondary Education) curriculum
                  emphasizes critical thinking, inquiry-based learning, and
                  academic excellence.With over 25+ Cambridge-accredited schools
                  in and around Chennai, parents today can choose a truly global
                  academic framework while retaining the cultural grounding and
                  community values unique to the city.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose an IGCSE School in Chennai?",
              para: [
                <>
                  Global Recognition: IGCSE is accepted by universities and
                  employers worldwide, including Ivy League institutions and UK
                  Russell Group universities.
                </>,
                <>
                  Custom Learning Pathways: Students can choose subject
                  combinations from over 70 options, allowing for individualized
                  academic journeys.
                </>,
                <>
                  Focus on Skills: Inquiry, reasoning, application, and research
                  are at the heart of the curriculum—preparing students for a
                  future beyond rote exams.
                </>,
                <>
                  Assessment Flexibility: Cambridge schools in Chennai offer
                  multiple exam windows (May/June and Oct/Nov), along with
                  internal assessments and project work.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  // IGCSE-Schools

  // ICSE-Schools
  const ICSESchoolIntro = [
    {
      sectionTitle: "ICSE Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const ICSETopSchools = [
    {
      SchoolName: "Sishya School",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹1.8L – ₹3.2L",
      Rating: "4.6",
    },
    {
      SchoolName: "St. Michael’s Academy",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹80K – ₹1.5L",
      Rating: "4.2",
    },
    {
      SchoolName: "The School – KFI",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹1.5L – ₹2.5L",
      Rating: "4.3",
    },
    {
      SchoolName: "Chettinad Hari Shree Vidyalayam",
      ProgrammesOffered: null,
      Location: "RA Puram",
      ApproxFees: "₹1.8L – ₹2.8L",
      Rating: "4.4",
    },
    {
      SchoolName: "Don Bosco School of Excellence",
      ProgrammesOffered: null,
      Location: "Egmore",
      ApproxFees: "₹1.2L – ₹2L",
      Rating: "4.1",
    },
    {
      SchoolName: "St. Francis International School",
      ProgrammesOffered: null,
      Location: "Perambur",
      ApproxFees: "₹90K – ₹1.5L",
      Rating: "4.0",
    },
  ];

  const ICSEschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum Features",
              para: [
                "Primary (I–V) ( English, Math, Science, Tamil/Hindi, GK )",
                "Middle (VI–VIII) ( History, Geography, Computer Applications )",
                "Secondary (IX–X) ( Physics, Chemistry, Biology, Commercial Studies, Economics, Environmental Science, Literature & Language ) ",
                "Electives: Art, Drama, Music, Yoga, Physical Education",
                "Language Options: English (mandatory), second language from Tamil, Hindi, French, Sanskrit (varies by school)",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Fee Structure",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "Budget Range: ₹70,000 – ₹1.5L/year (basic private ICSE schools)",
                "Mid-Tier Schools: ₹1.5L – ₹2.5L/year (includes Sishya, Don Bosco, etc.)",
                "Premium: ₹3L+ for integrated ICSE–ISC programs or international campus standards",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools charge a one-time admission fee (₹15K–₹50K) and
                    collect term-wise tuition.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Who Should Consider IGCSE in Chennai?",
              note: "",
              para: [
                "Expats & Global Citizens: Seeking a curriculum transferable across countries",
              ],
              para2: [
                "High-Performing Students: Aiming for Ivy League or top European/Asian universities",
              ],
              para3: [
                "Creative & Analytical Thinkers: Who thrive in non-rote learning formats",
              ],
              para4: [
                "Parents Preferring Skill-Based Education: With emphasis on real-world thinking and project work",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const ICSEschoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Strong Emphasis on Arts & Humanities",
              para: [
                "Literature, history, sociology, and languages receive equal academic weight.",
                "Schools like The School – KFI and Sishya integrate art, music, drama, and philosophy into the mainstream curriculum.",
                "Interdisciplinary projects encourage storytelling, debate, and critical reasoning.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "English Proficiency & Global Communication",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "ICSE is widely known for its high standard of English language instruction—ideal for students aiming for study abroad.",
                "Reading comprehension, essay writing, creative writing, and literary appreciation are emphasized across grades.",
              ],

              note3: <div></div>,
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Well-Rounded Science & Lab Focus",
              note: "",
              para: [
                "Internal assessments and practical lab work (20-30%) are key to science subjects from Grade 9 onward.",
              ],
              para2: [
                "Hands-on experience in physics, chemistry, and biology labs is a hallmark of ICSE pedagogy.",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Second Language Diversity",
              note: "",
              para: [
                "Offers flexible second/third language options: Hindi, Tamil, Sanskrit, French and in some schools, German or Spanish.",
              ],
              para2: [
                "This supports both local cultural integration and global readiness.",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Project-Based Learning & Internal Assessments",
              note: "",
              para: [
                "Unlike rote-based systems, ICSE uses continuous assessments in subjects like Environmental Science, Literature, and Commercial Studies.",
              ],
              para2: [
                "Students often engage in independent research projects, presentations, and community reports.",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Liberal Thinking and Civic Learning",
              note: "",
              para: [
                "Several ICSE schools incorporate values education, ethics, and social awareness programs.",
              ],
              para2: [
                "Many are affiliated with NGOs or local civic projects (e.g., beach cleanups, heritage walks, tree plantation drives).",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "ISC Stream Continuity (Class 11 & 12)",
              note: "",
              para: [
                "Most Chennai ICSE schools offer a seamless transition to ISC (Indian School Certificate – Class 12), with streams in:",
              ],
              para2: [
                <ul>
                  <li>Science (with Biotechnology or Computer Science)</li>
                  <li>Commerce (with Legal Studies, Business Studies)</li>
                  <li>
                    Humanities (with Psychology, Sociology, Environmental
                    Science)
                  </li>
                </ul>,
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const ICSEimageSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  The Indian Certificate of Secondary Education (ICSE) board,
                  governed by the Council for the Indian School Certificate
                  Examinations (CISCE), is well-regarded in Chennai for its
                  rigorous academics, balanced subject focus, and English
                  language proficiency. Often chosen for its holistic and
                  structured curriculum, ICSE schools in Chennai are especially
                  popular among families who value both STEM subjects and
                  literature, humanities, and the arts.
                </>,
                <>
                  Chennai is home to 40+ ICSE-affiliated schools, many of which
                  have operated for decades and offer a legacy of academic
                  excellence, individual attention, and extracurricular
                  opportunity.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose ICSE in Chennai?",
              para: [
                <>
                  <strong>Balanced Curriculum: </strong>
                  Equal emphasis on language, science, humanities, and arts.
                </>,
                <>
                  <strong>Strong English Foundation: </strong>
                  Ideal for students planning higher education abroad or
                  preparing for entrance tests like SAT, GRE, or IELTS.
                </>,
                <>
                  <strong>Project-Based Evaluation: </strong>
                  20%–30% of subject scores are internally assessed through lab
                  work, presentations, and field projects.
                </>,
                <>
                  <strong> Higher Language Flexibility: </strong>
                  Offers Hindi, Tamil, Sanskrit, and French in most schools.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  // ICSE-Schools

  // CBSE-Schools

  const CBSESchoolIntro = [
    {
      sectionTitle: "CBSE Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const CBSETopSchools = [
    {
      SchoolName: "SBOA School and Junior College",
      ProgrammesOffered: null,
      Location: "Anna Nagar West",
      ApproxFees: "₹55K – ₹70K",
      Rating: "4.2",
    },
    {
      SchoolName: "DAV Boys & Girls Schools",
      ProgrammesOffered: null,
      Location: "Mogappair, Gopalapuram",
      ApproxFees: "₹30K – ₹55K",
      Rating: "4.5",
    },
    {
      SchoolName: "Chettinad Vidyashram",
      ProgrammesOffered: null,
      Location: "RA Puram",
      ApproxFees: "₹85K – ₹1.2L",
      Rating: "4.3",
    },
    {
      SchoolName: "The PSBB Millennium Schools",
      ProgrammesOffered: null,
      Location: "OMR, Gerugambakkam",
      ApproxFees: "₹90K – ₹1.4L",
      Rating: "4.4",
    },
    {
      SchoolName: "Chinmaya Vidyalayas",
      ProgrammesOffered: null,
      Location: "Annanagar, Kilpauk, Virugambakkam",
      ApproxFees: "₹40K – ₹75K",
      Rating: "4.2",
    },
    {
      SchoolName: "Velammal Vidyalaya Group",
      ProgrammesOffered: null,
      Location: "Multiple Locations",
      ApproxFees: "₹35K – ₹65K",
      Rating: "4.0",
    },
  ];

  const CBSEschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum Features",
              para: [
                "Primary (I–V) : English, Hindi/Tamil, Math, EVS, Arts",
                "Middle (VI–VIII) : Science, Social Studies, Computer Science ",
                "Secondary (IX–X) : Physics, Chemistry, Biology, History, Geography",
                "Senior Secondary (XI–XII) : Science, Commerce, Humanities streams",
                "Languages: English (core), Tamil/Hindi/Sanskrit/French options",
                "Assessments: Formative & Summative (under NEP’s holistic report card)",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Admission & Fee Insights",
              note: (
                <>
                  <strong>Admission Fee:</strong> ₹5K – ₹25K (non-refundable;
                  varies by school)
                </>
              ),
              para: [],
              note2: <strong>Annual Tuition:</strong>,
              para2: [
                "Budget Schools: ₹30K – ₹60K/year",
                "Mid-range Schools: ₹65K – ₹1.2L/year",
                "Premium CBSE Schools: ₹1.2L – ₹2.5L/year (usually with NEET/IIT coaching or enhanced infrastructure)",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools collect fees quarterly or term-wise.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Special Features in Chennai CBSE Schools",
              note: "",
              para: [
                "NEET/JEE Foundation Programs: Offered from Grades 6+ in schools like Velammal, Aakash-integrated campuses, Narayana, etc.",
              ],
              para2: [
                "Coding & Tech Integration: Robotics, AI clubs, Microsoft partnerships in schools like PSBB and SBOA.",
              ],
              para3: [
                "Life Skills & Value Education: Emphasized in DAV, Chinmaya, and Bharatiya Vidya Bhavan schools.",
              ],
              para4: [
                "Smart Classrooms & Sports: Integrated sports coaching (chess, cricket, athletics) and multimedia classrooms.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const CBSEimageSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  The{" "}
                  <strong>Central Board of Secondary Education (CBSE) </strong>{" "}
                  is India’s most widely adopted national curriculum, and{" "}
                  <strong>
                    {" "}
                    Chennai is home to over 150+ CBSE-affiliated schools{" "}
                  </strong>{" "}
                  that uphold its standards of academic rigor, competitive exam
                  preparedness, and all-round development. From long-established
                  institutions to modern-day smart campuses, CBSE schools in
                  Chennai are trusted by parents seeking continuity,
                  credibility, and affordability.
                </>,
                <>
                  Whether you’re relocating from another Indian city or planning
                  long-term schooling,
                  <strong>
                    {" "}
                    CBSE is a smart, flexible, and future-ready choice{" "}
                  </strong>
                  —especially in a metro like Chennai.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose a CBSE School in Chennai?",
              para: [
                <>
                  <strong> National Curriculum: </strong>
                  Aligned with NCERT textbooks and entrance tests like NEET,
                  JEE, CUET, and UPSC foundations.
                </>,
                <>
                  <strong> Pan-India Transferability: </strong>
                  Ideal for mobile families—standardized syllabus across India
                  and Indian schools abroad.
                </>,
                <>
                  <strong>STEM & Olympiad Edge: </strong>
                  Many schools offer coaching for competitive exams, coding,
                  robotics, and Olympiads.
                </>,
                <>
                  <strong>Holistic Framework (CCE & NEP): </strong>
                  Encourages extracurriculars, physical education, and life
                  skills under the new National Education Policy (NEP 2020).
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  // CBSE-Schools

  // Matric-Schools
  const MatricSchoolIntro = [
    {
      sectionTitle: "Matriculation Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const MatricTopSchools = [
    {
      SchoolName: "Velammal Matriculation Schools",
      ProgrammesOffered: null,
      Location: "Multiple campuses",
      ApproxFees: "₹30K – ₹65K",
      Rating: "4.3",
    },
    {
      SchoolName: "Don Bosco Matriculation HS School",
      ProgrammesOffered: null,
      Location: "Egmore",
      ApproxFees: "₹35K – ₹70K",
      Rating: "4.4",
    },
    {
      SchoolName: "St. John’s Matriculation HSS",
      ProgrammesOffered: null,
      Location: "Mandaveli",
      ApproxFees: "₹25K – ₹45K",
      Rating: "4.1",
    },
    {
      SchoolName: "Vani Vidyalaya MHSS",
      ProgrammesOffered: null,
      Location: "Virugambakkam",
      ApproxFees: "₹28K – ₹50K",
      Rating: "4.0",
    },
    {
      SchoolName: "St. Raphael’s MHSS",
      ProgrammesOffered: null,
      Location: "Velachery",
      ApproxFees: "₹22K – ₹40K",
      Rating: "4.1",
    },
    {
      SchoolName: "Bharathi Matric School",
      ProgrammesOffered: null,
      Location: "Perambur",
      ApproxFees: "₹20K – ₹35K",
      Rating: "3.9",
    },
  ];

  const MatricschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum & Academic Structure",
              para: [
                "Medium: English (with Tamil/Hindi as second/third language options)",
                "Grades Offered: LKG to Class 12 (HSC)",
                "Subjects:",
                "Primary: English, Tamil, Math, EVS, Drawing, Music",
                "Middle: Science, Social Science, Computer Applications",
                "Higher: Physics, Chemistry, Biology, Commerce, Accountancy, Computer Science",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Fee Structure",
              note: <></>,
              para: [],
              note2: <strong></strong>,
              para2: [
                "Budget Schools: ₹15,000 - ₹30,000",
                "Mid-Tier Schools: ₹30,000 - ₹60,000",
                "Premium Schools: ₹60,000 - ₹90,000+",
              ],

              note3: (
                <div>
                  <strong>
                    Many schools offer term-wise or monthly payments and sibling
                    discounts.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
          ],
        },
      ],
    },
  ];

  const MatricimageSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  <strong>Matriculation schools </strong>— a term unique to
                  Tamil Nadu—refer to institutions affiliated with the{" "}
                  <strong> Tamil Nadu State Matriculation syllabus,</strong>{" "}
                  offering a blend of foundational academic learning,
                  values-based education, and affordability. These schools are
                  popular among Chennai’s middle-class families for their
                  emphasis on discipline, regional language inclusion, and
                  structured academics, often taught in English medium.
                </>,
                <>
                  Chennai has{" "}
                  <strong>
                    {" "}
                    hundreds of Matriculation and Matriculation Higher Secondary
                    Schools (MHSS)
                  </strong>{" "}
                  — from long-standing legacy institutions to modern private
                  academies with digital upgrades.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose Matriculation Schools in Chennai?",
              para: [
                <>
                  <strong> Affordability & Access: </strong>
                  More budget-friendly than national/international boards,
                  making quality education accessible.
                </>,
                <>
                  <strong>Cultural Alignment: </strong>
                  Tamil language and values are preserved while teaching in
                  English.
                </>,
                <>
                  <strong> Exam Preparedness: </strong>
                  Many matric schools are aligned with state board exam patterns
                  (SSLC, HSC).
                </>,
                <>
                  <strong>Moral & Character Education: </strong>
                  Emphasis on discipline, civic sense, and traditional values.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  const MatricschoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Strong Community & Values Education",
              para: [
                "Morning assemblies, value-based stories, civic clubs, and leadership programs.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Discipline-Oriented Learning",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "Uniform codes, exam-focused preparation, and respectful classroom behavior are central.",
              ],

              note3: <div></div>,
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Cultural Celebrations & Language Fairs",
              note: "",
              para: [
                "Annual days often feature Tamil literature, folk music, and inter-school competitions.",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "State Exam Preparation (SSLC/HSC)",
              note: "",
              para: [
                "Many schools have coaching programs, model exams, and extra classes for state board success.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Affordable Private Schooling with Personal Touch",
              note: "",
              para: [
                "Smaller class sizes in budget schools promote better teacher-student bonding and mentoring.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Vocational Electives in HSC Streams",
              note: "",
              para: [
                "Options like Commerce with Business Maths, Biology with Nursing in some institutions.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  // Matric-Schools

  // StateBoard-Schools

  const StateSchoolIntro = [
    {
      sectionTitle: "State Board Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const StateTopSchools = [
    {
      SchoolName: "Government Schools",
      ProgrammesOffered: "Tamil / English",
      Location: "TN Education Department",
      ApproxFees: "Free – ₹2,000 / Per Year",
      Rating: null,
    },
    {
      SchoolName: "Government Aided Schools",
      ProgrammesOffered: "Tamil / English",
      Location: "Private Management, Govt-Funded",
      ApproxFees: "₹3,000 – ₹12,000 / Per Year",
      Rating: null,
    },
    {
      SchoolName: "Self Financing Schools",
      ProgrammesOffered: "English",
      Location: "Private but follows State Govt Syllabus",
      ApproxFees: "₹15,000 – ₹45,000 / Per Year",
      Rating: null,
    },
  ];

  const StateschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [],
        },
      ],
    },
  ];

  const StateimageSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  <strong>State Board schools in Chennai</strong> follow the{" "}
                  <strong>
                    {" "}
                    Tamil Nadu State Board of School Education (TNBSE){" "}
                  </strong>{" "}
                  curriculum, managed by the Department of School Education,
                  Government of Tamil Nadu. These schools provide the most
                  accessible form of education in the city—catering to a broad
                  demographic through government-run and government-aided
                  institutions.
                </>,
                <>
                  With recent investments in smart classrooms, bilingual
                  textbooks, and digital learning tools under the{" "}
                  <strong>
                    “Illam Thedi Kalvi” and “Naan Mudhalvan” initiatives, the
                    quality and equity of education in Chennai’s state board
                    schools are witnessing strong growth.{" "}
                  </strong>
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose a State Board School in Chennai?",
              para: [
                <>
                  <strong> Free or Subsidized Education:</strong>
                  Especially in government schools, including free uniforms,
                  textbooks, and noon meals.
                </>,
                <>
                  <strong>Strong Regional Language Focus: </strong>
                  Tamil-medium and bilingual instruction help ensure learning
                  continuity across communities.
                </>,
                <>
                  {" "}
                  <strong>Aligned with State Entrance Exams: </strong>
                  Curriculum prepares students well for TNPSC, TNEA, and
                  government service pathways.
                </>,
                <>
                  <strong>Scholarship & Upliftment Schemes:</strong>
                  Scholarships, bicycles, laptops, and skill-training are
                  offered at high school level.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  const StateschoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Smart Classroom & ICT Labs",
              para: [
                "Over 1,500 schools in Chennai zone upgraded with projectors, digital boards, and audio-visual aids.",
                "Content aligned with Samacheer Kalvi (Uniform System of School Education).",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Bridge Programs & NEP-Ready Modules",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "After-school support under Illam Thedi Kalvi initiative for learning loss recovery.",
                "NEP-aligned skill modules introduced at higher secondary levels.",
              ],

              note3: <div></div>,
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Civic & Environmental Literacy",
              note: "",
              para: [
                "Programs on tree planting, disaster preparedness, menstrual hygiene, water conservation, and more.",
                "Collaboration with Greater Chennai Corporation for health & wellness education.",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Inclusive & Gender-Responsive Environment",
              note: "",
              para: [
                "Separate toilets for boys and girls, female wardens, and self-defence training for girl students.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Midday Meal Scheme + Nutrition",
              note: "",
              para: [
                "Highly rated in Tamil Nadu for quality cooked food, iron supplements, and milk program (under CM's nutrition mission).",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Curriculum & Structure",
              note: (
                <>
                  <strong>Medium of Instruction: </strong> Tamil or English
                  (bilingual sections in many schools)
                </>
              ),
              para: [],
              note2: <strong>Examinations:</strong>,
              para2: [
                "SSLC (Class 10) and HSC (Class 12) board exams",
                "Curriculum includes core academics, sports, drawing, value education",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools offer sibling discounts, scholarships, or
                    monthly/term payment plans.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Stage & Focus Area",
              note: <></>,
              para: [],
              note2: <strong></strong>,
              para2: [
                "Primary (I–V) : Tamil, English, Math, EVS",
                "Middle (VI–VIII) : Science, Social Science, ICT",
                "High School- : Physics, Chemistry, Bio/Botany/Zoology, Commerce, Accountancy, CS.",
              ],

              note3: <div></div>,
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
          ],
        },
      ],
    },
  ];
  const StateSchoolsList = [
    {
      category: "Full list of IGCSE  schools in Chennai",
      places: [
        {
          name: "Casagrand International School",
          desc: "",
          locations: [
            {
              name: "Thiruvanmiyur",
              link: "https://maps.app.goo.gl/cGvNGW5kr2FMekVU8",
            },
            {
              name: "Perumbakkam",
              link: "https://maps.app.goo.gl/ms21ZPVj26mTit3b6",
            },
          ],
        },
        {
          name: "DAV Girls Senior Secondary School",
          desc: "",
          locations: [
            {
              name: "Gopalapuram",
              link: "https://maps.app.goo.gl/UwcjdfhYt9nZh9yF7",
            },
            {
              name: "Thenmathur",
              link: "https://maps.app.goo.gl/UhyRkr3h5j5RL3fSA",
            },
          ],
        },
        {
          name: "Maharishi Vidya Mandir CBSE School (Tiruvannamalai)",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/UhyRkr3h5j5RL3fSA",
            },
          ],
        },
        {
          name: "Orchids The International School",
          desc: "",
          locations: [
            {
              name: "Kolapakkam",
              link: "https://maps.app.goo.gl/nih7x6KjjCwZ8DDt9",
            },
            {
              name: "Pulianthope",
              link: "https://maps.app.goo.gl/mWR61qR9kchVZeMh7",
            },
          ],
        },
        {
          name: "Mount Litera Zee School Omr Chennai",
          desc: "",
          locations: [
            {
              name: "Navalur",
              link: "https://maps.app.goo.gl/mxgUj3AxEdRxD9AdA",
            },
          ],
        },
        {
          name: "Shikshaa Public School CBSE",
          desc: "",
          locations: [
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/xhj1ZzcFcm3yAoQp7",
            },
          ],
        },
        {
          name: "Olive Public School",
          desc: "",
          locations: [
            {
              name: "Chitlapakkam",
              link: "https://maps.app.goo.gl/B99U38Qh5ososKy6A",
            },
          ],
        },
        {
          name: "Loyola International Residential School",
          desc: "",
          locations: [
            {
              name: "Palanchur",
              link: "https://maps.app.goo.gl/Mn2y9ur9fWxeUJMP8",
            },
          ],
        },
        {
          name: "Aachi Global School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/Mn2y9ur9fWxeUJMP8",
            },
          ],
        },
        {
          name: "Green Valley Central School",
          desc: "",
          locations: [
            {
              name: "Mogappair West",
              link: "https://maps.app.goo.gl/pqSHryqEHCtS8VEg6",
            },
          ],
        },
        {
          name: "Padmashree School (CBSE)",
          desc: "",
          locations: [
            {
              name: "Kolathur",
              link: "https://maps.app.goo.gl/6iNgcxVjuTQWn2mU8",
            },
          ],
        },
        {
          name: "Jain Public School",
          desc: "",
          locations: [
            {
              name: "Thirumudivakkam",
              link: "https://maps.app.goo.gl/TCKJkT5g6ipzq7di6",
            },
          ],
        },
        {
          name: "Sr Mavericks International School",
          desc: "",
          locations: [
            {
              name: "Poonamallee",
              link: "https://maps.app.goo.gl/pp3dGj3H5Qa9Ao299",
            },
          ],
        },
        {
          name: "Arul Jothy Public School",
          desc: "",
          locations: [
            {
              name: "Pallavaram",
              link: "https://maps.app.goo.gl/EPR5wKuQytsLUmCw8",
            },
          ],
        },
        {
          name: "The Shri Ram Universal School",
          desc: "",
          locations: [
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/niXjkpSXbiVvH6Tr8",
            },
          ],
        },
        {
          name: "Anjo Viddyalaya CBSE",
          desc: "",
          locations: [
            {
              name: "Tiruvottiyur",
              link: "https://maps.app.goo.gl/a4CxVArz8VzwgTXb7",
            },
          ],
        },
        {
          name: "Smrti Academy",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/M13uhKzA8K9epN6R9",
            },
          ],
        },
        {
          name: "INTERNATIONAL DELHI PUBLIC SCHOOL",
          desc: "",
          locations: [
            {
              name: "Sri Vidhya Vihar Campus, K.K.S Pannai, MC Rd, Pudhu, Govindapuram, Ambur, Dt 635802",
              link: "https://maps.app.goo.gl/pQBcAhWgMLw3UwQp7",
            },
          ],
        },
        {
          name: "MVM SCHOOL - CBSE - DUDDANAHALLI",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/8m6DBoxg2Yo2S7hMA",
            },
          ],
        },
        {
          name: "Marigold International School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/X79x9XLDcFNWmtAH6",
            },
          ],
        },
        {
          name: "Amethyst International School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/295CAiy6LSPbNKWNA",
            },
          ],
        },
        {
          name: "RISHS International School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/4jXFFnRw4wMd6nGJ9",
            },
          ],
        },
        {
          name: "Fiitjee Global School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/L41J61Q7nbCwbxvM9",
            },
          ],
        },
        {
          name: "The Temple School Of Enlightenment",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/pdGHckeYNqKH2rkf8",
            },
          ],
        },
        {
          name: "SV High School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/F1VKLaCdfwy1wF987",
            },
          ],
        },
        {
          name: "AGR Global School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/oj1cwhVyDTcUb4529",
            },
          ],
        },
        {
          name: "Aadhithya International Public Schools",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/15JMXmjuwJqThawY8",
            },
          ],
        },
        {
          name: "Vagisha Vidhyalaya",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/EmUnxP81fdCQPM1J6",
            },
          ],
        },
        {
          name: "Sri Krish International School (Kovur)",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/sEM7WxfNeRLqBS7d7",
            },
          ],
        },
        {
          name: "Billabong High International School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/pQm2JRNDVakixUod8",
            },
          ],
        },
        {
          name: "Chennai Public School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/v9HLWQtjboy8dzeF7",
            },
          ],
        },
        {
          name: "Maharishi Vidya Mandir School (Alagiri Nagar)",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/CnQziTMRjex4RAJ38",
            },
          ],
        },
        {
          name: "Sujay Public School",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/cgBhNvzbSofJ4Esr8",
            },
          ],
        },
        {
          name: "PSBB Siruseri Branch",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/KVUzM9baTdat9YUMA",
            },
          ],
        },
        {
          name: "Great Harvest Vidyalaya",
          desc: "",
          locations: [
            {
              name: "dummy",
              link: "https://maps.app.goo.gl/pyuPRunXrMGjKs4u5",
            },
          ],
        },
      ],
    },
  ];

  // StateBoard-Schools

  return (
    <>
      <Helmet>
        <title>Super Chennai on Educational Institutions in Chennai</title>
        <meta
          name="description"
          content="Super Chennai explores top educational institutions in Chennai, highlighting schools, colleges & universities that make the city a hub of learning & opportunity."
        />
        <link
          rel="canonical"
          href="/live/educational-institutions-in-chennai"
        />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/Educational-Institutions-Banner.jpg"
            alt="education in chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Educational Institutions</h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Educational Institutions </a>
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
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Your Educational Journey Starts Here</h3>
              <p>
                Chennai has a wide range of educational possibilities, from
                kindergarten to high school and colleges, from undergraduate to
                doctoral degrees in fields like medicine, engineering, business,
                photography, and the arts and sciences, and more, from public to
                private schools and institutions.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}

        {/* IB-Schools */}
        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
              isSticky
                ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                : "relative"
            }`}
          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSection === name
                        ? "!bg-[#a44294] text-white !font-medium"
                        : "bg-gray-200 text-gray-800 !font-medium"
                    }`}
                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {IbSchoolIntro.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
                {IbimageSections.map((section, index) => (
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                {item.note && (
                                  <p className="">{item.note}</p> // ✅ note displayed clearly
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
                  <h2 className="text-2xl font-bold">
                    Top IB Schools in Chennai (Sample)
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          School Name
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Programmes Offered
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Location
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Approx. Fees
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {IbTopSchools.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.SchoolName}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ProgrammesOffered}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Location}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ApproxFees}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Rating}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto my-6">
                  <h2 className="text-2xl font-bold">
                    Curriculum Pathways & Subjects
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Programme
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Age Group
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 mb-20">
                      {IbsaasSuperstars.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Programme}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.AgeGroup}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {IbschoolsContents.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
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
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {IbSchoolsList.map((section, sectionIdx) => {
                  return (
                    <div key={sectionIdx} className="nightlifesecIn">
                      <h2 className="text-2xl font-semibold mb-6">
                        {section.category}
                      </h2>
                      <p className="mx-0 my-5 mb-9">
                        {section.categoryParaGraph}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                          {section.places.map((place, idx) => (
                            <motion.div
                              key={idx}
                              className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              layout
                            >
                              <h3 className="text-xl font-semibold mb-2">
                                {place.name}
                              </h3>
                              <p className="text-gray-700 mb-2">{place.desc}</p>

                              {place.locations?.length > 0 && (
                                <ExpandableList
                                  items={place.locations.map((loc) => ({
                                    label: loc.name,
                                    link: loc.link,
                                  }))}
                                  maxVisible={2}
                                />
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------OutsideChennai--------------------  */}

          {/*----------------- Multiple Benefit Sections ----------------*/}
        </section>
        {/* IB-Schools */}

        {/* IGCSE Schools */}
        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
              isSticky
                ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                : "relative"
            }`}
          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSection === name
                        ? "!bg-[#a44294] text-white !font-medium"
                        : "bg-gray-200 text-gray-800 !font-medium"
                    }`}
                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {IGCSESchoolIntro.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
                {IGCSEimageSections.map((section, index) => (
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                {item.note && (
                                  <p className="">{item.note}</p> // ✅ note displayed clearly
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
                  <h2 className="text-2xl font-bold">
                    Top IB Schools in Chennai (Sample)
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          School Name
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Programmes Offered
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Location
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Approx. Fees
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {IGCSETopSchools.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.SchoolName}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ProgrammesOffered}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Location}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ApproxFees}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Rating}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {IGCSEschoolsContents.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {IGCSESchoolsList.map((section, sectionIdx) => {
                  return (
                    <div key={sectionIdx} className="nightlifesecIn">
                      <h2 className="text-2xl font-semibold mb-6">
                        {section.category}
                      </h2>
                      <p className="mx-0 my-5 mb-9">
                        {section.categoryParaGraph}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                          {section.places.map((place, idx) => (
                            <motion.div
                              key={idx}
                              className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              layout
                            >
                              <h3 className="text-xl font-semibold mb-2">
                                {place.name}
                              </h3>
                              <p className="text-gray-700 mb-2">{place.desc}</p>

                              {place.locations?.length > 0 && (
                                <ExpandableList
                                  items={place.locations.map((loc) => ({
                                    label: loc.name,
                                    link: loc.link,
                                  }))}
                                  maxVisible={2}
                                />
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------OutsideChennai--------------------  */}

          {/*----------------- Multiple Benefit Sections ----------------*/}
        </section>
        {/* IGCSE Schools */}

        {/* ICSE Schools */}
        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
              isSticky
                ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                : "relative"
            }`}
          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSection === name
                        ? "!bg-[#a44294] text-white !font-medium"
                        : "bg-gray-200 text-gray-800 !font-medium"
                    }`}
                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {ICSESchoolIntro.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
                {ICSEimageSections.map((section, index) => (
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                {item.note && (
                                  <p className="">{item.note}</p> // ✅ note displayed clearly
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
                  <h2 className="text-2xl font-bold">
                    Top ICSE Schools in Chennai (Sample List)
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          School Name
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Programmes Offered
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Location
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Approx. Fees
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {ICSETopSchools.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.SchoolName}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ProgrammesOffered}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Location}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ApproxFees}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Rating}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {ICSEschoolsContents.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
                  <h2 className="text-2xl font-bold">
                    Special Features in Chennai ICSE Schools
                  </h2>
                  <p>
                    ICSE schools in Chennai combine traditional educational
                    values with progressive, skill-based learning approaches.
                    While they may not offer NEET/IIT coaching like some CBSE
                    schools, they excel in nurturing{" "}
                    <strong>
                      creative, analytical, and globally capable learners.
                    </strong>
                  </p>
                </div>

                {ICSEschoolsContents2.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------OutsideChennai--------------------  */}

          {/*----------------- Multiple Benefit Sections ----------------*/}
        </section>
        {/* ICSE Schools */}

        {/* CBSE Schools */}
        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
              isSticky
                ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                : "relative"
            }`}
          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSection === name
                        ? "!bg-[#a44294] text-white !font-medium"
                        : "bg-gray-200 text-gray-800 !font-medium"
                    }`}
                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {CBSESchoolIntro.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
                {CBSEimageSections.map((section, index) => (
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                {item.note && (
                                  <p className="">{item.note}</p> // ✅ note displayed clearly
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
                  <h2 className="text-2xl font-bold">
                    Top ICSE Schools in Chennai (Sample List)
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          School Name
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Programmes Offered
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Location
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Approx. Fees
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {CBSETopSchools.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.SchoolName}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ProgrammesOffered}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Location}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ApproxFees}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Rating}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {CBSEschoolsContents.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------OutsideChennai--------------------  */}

          {/*----------------- Multiple Benefit Sections ----------------*/}
        </section>
        {/* CBSE Schools */}

        {/* Matric Schools */}
        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
              isSticky
                ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                : "relative"
            }`}
          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSection === name
                        ? "!bg-[#a44294] text-white !font-medium"
                        : "bg-gray-200 text-gray-800 !font-medium"
                    }`}
                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {MatricSchoolIntro.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
                {MatricimageSections.map((section, index) => (
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                {item.note && (
                                  <p className="">{item.note}</p> // ✅ note displayed clearly
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
                  <h2 className="text-2xl font-bold">
                    Popular Matriculation Schools in Chennai (Sample List)
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          School Name
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Programmes Offered
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Location
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Approx. Fees
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {MatricTopSchools.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.SchoolName}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ProgrammesOffered}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Location}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ApproxFees}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Rating}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {MatricschoolsContents.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
                  <h2 className="text-2xl font-bold">
                    Special Features of Matriculation Schools in Chennai
                  </h2>
                </div>

                {MatricschoolsContents2.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${
              index % 2 === 0
                ? "bg-white whitebgsec"
                : "bg-[#f7f7f7] colorbgsec"
            } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------OutsideChennai--------------------  */}

          {/*----------------- Multiple Benefit Sections ----------------*/}
        </section>
        {/* Matric Schools */}

        {/* State Schools */}
        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
              isSticky
                ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
                : "relative"
            }`}
          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSection === name
                        ? "!bg-[#a44294] text-white !font-medium"
                        : "bg-gray-200 text-gray-800 !font-medium"
                    }`}
                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {StateSchoolIntro.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
      ${
        index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"
      }`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
                {StateimageSections.map((section, index) => (
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                {item.note && (
                                  <p className="">{item.note}</p> // ✅ note displayed clearly
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
                  <h2 className="text-2xl font-bold">
                    Types of State Board Schools in Chennai
                  </h2>

                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          School Type
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Managed By
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Medium
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                          Fee Range
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {StateTopSchools.map((giant, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.SchoolName}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ProgrammesOffered}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.Location}
                          </td>
                          <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                            {giant.ApproxFees}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {StateschoolsContents.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
                  <h2 className="text-2xl font-bold">
                    Special Features of Chennai State Board Schools
                  </h2>
                </div>

                {StateschoolsContents2.map((section, index) => (
                  <section
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
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
                            <div
                              key={j}
                              className="clcboxItemss flex mb-4"
                              style={{ paddingBottom: "0" }}
                            >
                              <div className="clcboxIImg">
                                <img src={item.imgs} alt={item.imgAlt} />
                              </div>
                              <div className="clcboxICont">
                                <h3 className="text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>

                                {item.note && (
                                  <p className="text-gray-700 mb-1">
                                    {item.note}
                                  </p>
                                )}
                                {item.para && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.note2 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note2}
                                  </p>
                                )}
                                {item.para2 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para2.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                                {item.note3 && (
                                  <p className="text-gray-700  mb-1">
                                    {item.note3}
                                  </p>
                                )}

                                {item.para3 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para3.map((point, k) => (
                                      <li key={k}>{point}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.para4 && (
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                    {item.para4.map((point, k) => (
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
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
      ${
        index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"
      }`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
      ${
        index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"
      }`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
      ${
        index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"
      }`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
      ${
        index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"
      }`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.imgAlt} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------OutsideChennai--------------------  */}
          <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
            {StateSchoolsList.map((section, sectionIdx) => {
              return (
                <div key={sectionIdx} className="nightlifesecIn">
                  <h2 className="text-2xl font-semibold mb-6">
                    {section.category}
                  </h2>
                  <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {section.places.map((place, idx) => (
                        <motion.div
                          key={idx}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          layout
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {place.name}
                          </h3>
                          <p className="text-gray-700 mb-2">{place.desc}</p>

                          {place.locations?.length > 0 && (
                            <ExpandableList
                              items={place.locations.map((loc) => ({
                                label: loc.name,
                                link: loc.link,
                              }))}
                              maxVisible={2}
                            />
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/*----------------- Multiple Benefit Sections ----------------*/}
        </section>
        {/* State Schools */}

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
