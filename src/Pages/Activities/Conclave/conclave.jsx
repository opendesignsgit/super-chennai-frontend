import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";

const agendaData = [
  {
    "id": "01",
    "startTime": "9:30 AM",
    "endTime": "10:00 AM",
    "title": "Keynote Address",
    "speakers": []
  },
  {
    "id": "02",
    "startTime": "10:05 AM",
    "endTime": "10:55 AM",
    "title": "Becoming India’s Talent Capital",
    "speakers": [
      "Dr. Saundarya Rajesh – Managing Director, Avtar Group",
      "Mr. K. Pandiarajan – Chairperson & Executive Director, CIEL HR Group",
      "Anil Srinivasan – Founder, Kruu and Rhapsody, Musician"
    ]
  },
  {
    "id": "03",
    "startTime": "11:00 AM",
    "endTime": "11:50 AM",
    "title": "Reimagining the City as a Launchpad for Future Businesses",
    "speakers": [
      "Mr. Ramkumar Ramamoorthy – Co-Founder & Partner, Catalincs",
      "Mr. Sandeep Nanduri, I.A.S. – Managing Director, TIDCO",
      "Mr. Ramakrishnan K – Senior Managing Director, Spark Capital",
      "Mr. Gaurav Kumar – Founder & CEO, Yubi Group"
    ]
  },
  {
    "id": "04",
    "startTime": "11:55 AM",
    "endTime": "12:45 PM",
    "title": "Becoming India’s Deep-Tech Hub for the World",
    "speakers": [
      "Mr. Vishesh Rajaram – Co-Founder & Managing Partner, Speciale Invest",
      "Ms. Ashwini Asokan – Founder & CEO, Mad Street Den",
      "Mr. Srinath Ravichandran – Co-Founder & CEO, Agnikul Cosmos"
    ]
  },
  {
    "id": "05",
    "startTime": "12:45 PM",
    "endTime": "1:20 PM",
    "title": "Fireside Chat",
    "speakers": [
      "Mr. Sivarajah Ramanathan – Mission Director & CEO, Startup TN"
    ]
  },
  {
    "id": "06",
    "startTime": "1:20 PM",
    "endTime": "2:00 PM",
    "title": "BREAK",
    "speakers": []
  },
  {
    "id": "07",
    "startTime": "2:00 PM",
    "endTime": "2:50 PM",
    "title": "Crafting a World-Class Visitor Experience",
    "speakers": [
      "Mr. Vikram Cotah – CEO, GRT Hotels",
      "Mr. Hari Ganapathy – Co-Founder, Pickyourtrail",
      "Mr. Arun Vasu – Managing Director, TT Group",
      "Ms. Gayathri Thyagarajan – CEO & Founder, Kynhood Technologies"
    ]
  },
  {
    "id": "08",
    "startTime": "2:55 PM",
    "endTime": "3:45 PM",
    "title": "A City That Works for Everyone",
    "speakers": [
      "Mr. Raj Cherubal – Executive Director, Chennai Smart City Limited",
      "Mr. Mohamed Ali – President, CREDAI Chennai",
      "Mr. Sivakrishnamurthy, I.A.S. – Deputy Commissioner (Works)",
      "Ms. Aswathy Dilip – Managing Director, ITDP India"
    ]
  },
  {
    "id": "09",
    "startTime": "3:50 PM",
    "endTime": "4:40 PM",
    "title": "Who Shapes Chennai’s Stories and Do They Travel Far Enough  to Reflect Its True Potential?",
    "speakers": [
      "Mr. Arun Ram – Resident Editor, The Times of India",
      "Mr. Prem Shanker – Senior Executive Editor, Puthiya Thalaimurai TV",
      "Mr. T.M. Veeraraghav – Executive Editor, NDTV"
    ]
  },
  {
    "id": "10",
    "startTime": "4:40 PM",
    "endTime": "4:55 PM",
    "title": "BREAK",
    "speakers": []
  },
  {
    "id": "11",
    "startTime": "5:00 PM",
    "endTime": "5:30 PM",
    "title": "Fireside Chat – TBA",
    "speakers": []
  },
  {
    "id": "12",
    "startTime": "5:35 PM",
    "endTime": "6:05 PM",
    "title": "Fireside Chat – Enabling the Industries That Will Build Tomorrow's Chennai",
    "speakers": [
      "Mr. T.R.B. Rajaa – Minister for Industries, Investment Promotion and Commerce, Government of Tamil Nadu"
    ]
  }

];



export const speakersGallery = [
  {
    id: 1,
    name: "Mr. Raj Cherubal",
    mobile: "9381013498",
    mail: "rajcherubal@gmail.com",
    designation: "CEO, Chennai Metropolitan Development Authority",
    image: "/images/images-speakers/raja-2.jpg",
    description:
      "Raj Cherubal is the Executive Director of Chennai Smart City Limited, previously serving as Director–Projects at Chennai City Connect, where he worked on improving urban infrastructure and quality of life. He has led and contributed to initiatives in sustainable transportation, urban planning, public transit, waste management, water-body restoration, and urban financing. Trained in physics and nuclear engineering, and having worked in software across telecom and finance, he now focuses on better urban governance and economic freedom for informal entrepreneurs like street vendors.",
  },
  {
    id: 2,
    name: "Mr. Vikram Cotah",
    mobile: "9840741379",
    mail: "vikramcotah@grthotels.com",
    designation: "CEO, GRT Hotels & Resorts",
    image: "/images/images-speakers/Vikram Cotah-image.jpg",
    description:
      "Vikram Cotah is the CEO of GRT Hotels, where he has led the group’s growth to 22 properties across South India while embedding sustainability, inclusivity and responsible luxury into its operations. Under his leadership, GRT Hotels introduced initiatives such as no-smoking policies, pet-friendly stays and the removal of single-use plastics, while actively supporting local communities during crises like the Chennai floods and COVID-19. He also serves on bodies such as TTDC, CII’s Southern Tourism Panel and the Hotel Association of India, and is a widely followed LinkedIn thought leader and author on leadership and sustainable hospitality.",
  },
  {
    id: 3,
    name: "Mr. Arun Vasu",
    mobile: "9840904077",
    mail: "arunvasu@ttgroupglobal.com",
    designation: "Chairman, TT Group",
    image: "/images/images-speakers/Arun Vasu-image.jpg",
    description:
      "Arun Vasu is the Chairman and Managing Director of the TT Group, which operates across air cargo, logistics, supply chain, insurance, hospitality, and water-sports training. A third-generation leader of the TTK family, he is a serial entrepreneur who launched India’s first foreign exchange business and later built the world’s first visa outsourcing company. Alongside his businesses, he promotes water sports in Kovalam to create local socio-economic opportunities, while also being an avid adventure motorcyclist",
  },
  // {
  //   id: 4,
  //   name: "Pandiarajan",
  //   mobile: "9840879559",
  //   mail: "kpr@cielhr.com",
  //   designation: "Founder, CIEL HR",
  //   image: "/images/images-speakers/pandiraj-1.jpg",
  //   // description:
  //     // "Pandiarajan is a thought leader in HR and talent solutions, helping organizations scale through innovative workforce strategies.",
  // },
  {
    id: 5,
    name: "Dr. Saundarya Rajesh",
    mobile: "",
    mail: "md@avtarcc.com",
    designation: " Managing Director -Avtar Group",
    image: "/images/images-speakers/Dr Saundarya Rajesh-image.jpg",
    description:
      "Dr. Saundarya Rajesh is the Managing Director of Avtar Group and a globally recognized expert in inclusive workplaces, workforce transitions, and ESG. She has spent nearly 25 years reshaping workplace culture, helping over 800 organizations become more equitable and enabling career pathways for more than 1,00,000 second-career women through initiatives like Project Puthri and Nipuni. A noted trainer, speaker, and author of two books, she has advised institutions from UN Women to the Tata Group while consistently pushing organizations toward ethical, human-centered leadership.",
  },
  // {
  //   id: 6,
  //   name: "Ramkumar",
  //   mobile: "",
  //   mail: "ramkumar@catalincs.com",
  //   designation: "Founder & CEO, Catalycs",
  //   image: "/images/images-speakers/ramkuamr-image-1.jpg",
  //   // description:
  //     // "Ramkumar is an innovation evangelist driving enterprise transformation through data, AI, and emerging technologies.",
  // },
  {
    id: 7,
    name: "Mr. Vishesh Rajaram",
    mobile: "",
    mail: "vishesh.rajaram@specialeinvest.com",
    designation: "Managing Partner, Speciale Invest",
    image: "/images/images-speakers/Vishesh Rajaram-image.jpg",
    description:
      "Vishesh Rajaram is the Co-founder and Managing Partner of Speciale Invest, focusing on investments in spacetech, semiconductors, robotics, climate, advanced manufacturing, health and energy. Before Speciale, he spent nearly a decade at Ventureast leading early and growth-stage investments, after starting his career in corporate banking at ICICI and later running his family’s pharmaceutical business through a successful sale. A Chartered Accountant and ISB MBA (Dean’s List), he is hands-on across the full investment lifecycle at Speciale.",
  },
  {
    id: 8,
    name: "Mr. Hari Ganapathy",
    mobile: "9790733699",
    mail: "hari@pickyourtrail.com",
    designation: "Co-Founder, PickYourTrail",
    image: "/images/images-speakers/Hari Ganapathy.jpg",
    description:
      "Hari Ganapathy is the co-founder of Pickyourtrail, a tech-enabled travel platform that has helped over 1,50,000 travellers from 80+ destinations plan personalized holidays since 2014. A Physics gold medallist from Madras University and an IIM Bangalore graduate, he previously worked with consumer brands like Britannia, Reckitt Benckiser and InMobi before building Pickyourtrail around his interests in brand-building and travel. An avid traveller with over 40 countries visited, he continues to shape how people experience and plan their trips through his company.",
  },
  {
    id: 9,
    name: "Mr. Sivarajah Ramanathan",
    mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation: "CEO, StartupTN",
    image: "/images/images-speakers/Sivarajah Ramanathan-image.jpg",
    description:
      "Sivarajah Ramanathan is the Mission Director and CEO of StartupTN, where he has driven Tamil Nadu to be recognized as a top-performing startup state while significantly increasing DPIIT registrations and fostering inclusive entrepreneurship. He also serves on multiple government and academic bodies, including FameTN, iTNT Hub, TN RISE, TN WE SAFE, and Anna University. Earlier, he founded Nativelead to build startup ecosystems in tier II and tier III cities across Tamil Nadu, and began his entrepreneurial journey in Madurai with tech ventures including an ERP for temples.",
  },
  {
    id: 10,
    name: "Mr. T.R.B. Rajaa",
    // mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation:
      "Minister for Industries, Investment Promotion and Commerce Government of Tamil Nadu",
    image: "/images/images-speakers/Dr. T.R.B. RAJAA-image.jpg",
    description:
      "Dr. T.R.B. Rajaa is a politician and people’s representative with a career spanning three decades      across several institutions and elected offices. He is a record three-time Member of Legislative Assembly from the Mannargudi constituency in Tamil Nadu, India and is an office-bearer in the Dravida Munnetra Kazhagam (DMK).Before starting his political career, he was an educationist and social entrepreneur, with experience in several sectors like chemicals, fisheries, media and communications. He has also served on the boards of educational institutions.He has a deep interest in sports and emerging technologies.",
  },
  {
    id: 10,
    name: "Mr. Mohamed Ali",
    // mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation: "President CREDAI Chennai",
    image: "/images/images-speakers/Mr. Mohamed-image.jpg",
    description:
      "Mohamed Ali is the Managing Director of South India Shelters (S.I.S), which he founded in 2002 and grew across residential, commercial, and industrial real estate. A BITS Pilani alumnus, he is known for ethical business practices and socially responsible projects that have earned multiple national and international awards. He has held several leadership roles in CREDAI and is serving as its President from 2024 to 2026.",
  },

  {
    id: 10,
    name: "Mr. Ramkumar Ramamoorthy ",
    // mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation: "Co-Founder & Partner Catalincs Partners",
    image: "/images/images-speakers/Ramkumar Ramamoorthy-image.jpg",
    description:
      "Ramkumar Ramamoorthy is co-founder and partner at Catalincs Partners, where he advises niche technology firms on growth and value creation. Earlier, he served as Chairman and Managing Director of Cognizant India, after a prior stint at Tata Consultancy Services, overseeing one of the country’s largest private workforces. With deep ties to academia and industry bodies like CII, NASSCOM, MCCI and AMCHAM, he also serves as an Independent Director on the boards of Cholamandalam Investment and Finance and Five Star Business Finance.",
  },

  // ADDITIONALLY ADDED

  {
    id: 11,
    name: "Ms. Aswathy Dilip",
    designation: "Managing Director ITDP India ",
    image: "/images/images-speakers/Aswathy-Photo (1).jpeg",
    description:
      "Aswathy Dilip is the Managing Director of ITDP India. She is a sought-after expert in raising support for sustainable mobility from key decision-makers, governments and stakeholders. With support from her smart and enthusiastic team, she works with the National, State and City governments; providing them technical assistance on sustainable and equitable urban mobility. Her work has contributed to creating streets safe for walking and cycling, implementing parking reforms, and building support for high-quality, sustainable mass transit. She has a degree as an urban designer from Cardiff University, UK, with a bachelor’s in Architecture.",
  },

  {
    id: 12,
    name: "Ms. Ashwini Asokan",
    designation: "Founder, CEO Mad Street Den",
    image: "/images/images-speakers/Ashwini Asokan Picture.jpeg",
    description:
      "Ashwini is the CEO and Founder of Mad Street Den, one of India's 1st AI startups. The company's AI platform was a full stack Enterprise AI platform that has powered Fortune 2000 enterprises across verticals like retail, finance, insurance, govt sectors & healthcare. The platform and the team that she and her cofounders built have garnered industry wide recognition for its generalizable AI engine, competing with the likes of Palantir, Databricks, UiPath. MSD's team has gone on to become early employees at companies Open AI, Apple AI, Microsoft and reputed organizations around the world. The company was recently acquired by another Chennai startup M2P.",
  },

  {
    id: 13,
    name: "Mr. Ramakrishnan K",
    designation: "Senior Managing Director Spark Capital",
    image: "/images/images-speakers/Ramakrishnan K Picture.jpeg",
    description:
      "K. Ramakrishnan (Ramki) is a veteran investment banker with over three decades of experience advising leading business groups and entrepreneurs on capital raising, M&A, and corporate strategy. He is Senior Managing Director – Strategic Relationships at Spark Capital Advisors and part of its founding leadership team that built the firm into a leading mid-market investment bank. Previously, he headed ICICI Securities’ investment banking business for southern India and worked with Arthur Andersen and Deloitte. Widely respected for his deep industry relationships, Ramki is actively involved with bodies such as The Madras Chamber, TiE Chennai, and The Chennai Angels, and holds an engineering degree with a postgraduate qualification in management.",
  },
  // NEW #############
  {
    id: 14,
    name: "Mr. Pandiarajan K",
    mobile: "",
    mail: "",
    designation: "Executive Chairman, CIEL HR Group",
    image: "/images/images-speakers/pandiraj.jpg",
    description:"K Pandiarajan (KPR) is a veteran HR leader and entrepreneur, best known as the founder of Ma Foi Management Consultants and Executive Chairman of CIEL HR, which operates a large nationwide staffing and skilling network. He pioneered HR outsourcing in India and helped create employment for hundreds of thousands through his ventures. Alongside business, he has served as a Tamil Nadu state minister, was a founding member of the GST Council, and remains active in education, healthcare, and livelihood-focused philanthropy through his trusts.",
  },

  {
    id: 15,
    name: "Mr. Gaurav Kumar",
    mobile: "",
    mail: "",
    designation: "Founder & CEO, Yubi Group",
    image: "/images/images-speakers/Gaurav.jpg",
    description:"Gaurav Kumar is the Founder and CEO of Yubi Group, a fintech platform that powers the end-to-end institutional debt lifecycle and facilitates over ₹1,40,000 crore in debt transactions. With nearly two decades in structured finance and fintech, he previously co-founded Vivriti Capital and held senior roles at Northern Arc Capital. Recognized widely as a leading fintech entrepreneur, he continues to shape India’s debt markets through technology-driven financial inclusion.",
  },

  {
    id: 16,
    name: "Mr. Arun Ram",
    mobile: "",
    mail: "",
    designation: "Resident Editor, The Times of India",
    image: "/images/images-speakers/arunram.jpg",
    description:"A post-graduate in Mass Communication and Journalism, Arun Ram worked with six newspapers and a magazine in three states before joining The Times of India as part of the Chennai launch team. He is a British Chevening Scholar in Print Journalism and the winner of Sarojini Naidu prize for best reporting. He is the Co-author of former ISRO scientist Nambinarayanan's autobiography 'Ready to Fire: How India and I Survived the ISRO Spy Case. His interests include investigative journalism, politics, science & technology, human interest stories and teaching",
  },

  {
    id: 17,
    name: "Mr. Anil Srinivasan",
    mobile: "",
    mail: "",
    designation: "Founder, Kruu and Rhapsody | Musician",
    image: "/images/images-speakers/anisrinivas.jpg",
    description:"Anil Srinivasan is a classical pianist, educator, and social innovator, serving as CEO and Co-founder of Kruu, Founder of Rhapsody, and Professor of Practice at Krea University. A Columbia and USC alumnus, he pioneered arts-based STEM learning through Rhapsody across hundreds of schools and later launched Kruu to bring project-based learning to over 4.5 lakh students. A recipient of the Sangeet Natak Akademi Youth Award and Kalaimamani, he is also known for his philanthropy, disaster-relief work, and contributions to arts education and community development.",
  },

  {
    id: 18,
    name: "Mr. Prem Shanker",
    mobile: "",
    mail: "",
    designation: "Senior Executive Editor, Puthiya Thalaimurai TV",
    image: "/images/images-speakers/prem.jpg",
    description:"Prem Shanker is a senior journalist with over 25 years across print, television, and digital media, currently serving as Senior Executive Editor at Puthiya Thalaimurai. He has held leadership roles at organisations like Press Trust of India, Network18, TV9, The Economic Times, and India Today, and co-founded the South India–focused digital platform The Lede. A Chevening Fellow from the University of Westminster, he is known for building newsrooms, mentoring journalists, and driving strong, ethical political and economic reporting.",
  },

  {
    id: 19,
    name: "Mr. Srinath Ravichandran",
    mobile: "",
    mail: "",
    designation: "Co-Founder & CEO, Agnikul Cosmos",
    image: "/images/images-speakers/srinath.jpg",
    description:"Srinath is an aerospace engineer and former Wall Street trader who co-founded Agnikul, where he led the launch of the world’s first single-piece 3D-printed engine–driven rocket from India’s only private launchpad. Trained in electrical engineering at Guindy and financial engineering at Columbia, he later pursued aerospace at the University of Illinois before starting Agnikul out of his passion for making access to space simpler. Outside of aerospace, he also dabbles in filmmaking through hands-on work with film crews.",
  },
];

export const partners = [
  {
    id: 1,
    image: "/images/partnersLogo/RADIOCITY-LOGO-PNG.png",
  },
   {
    id: 1,
    image: "/images/partnersLogo/IE-partner.jpeg",
  },
];

const infoData = [
  {
    title: "LIVE",
    title1: "A City That Works for Everyone",
    desc: "Chennai has made significant strides in public transit, physical and social infrastructure. It is better equipped than many Indian metros to manage urban shocks and adapt to climate change. Yet, recurring floods, housing inequity, a lack of cleanliness, and growing congestion prevent it from achieving the liveability standards of cities like Singapore or Hong Kong.",
    desc2:
      "How can Chennai build a city that is both liveable, resilient, and equitable for all?",
    icon: "/images/Visit-Images/icons/Scenic-Relaxing.svg",
    imgAlt: "attractions chennai",
  },

  {
    title: "VISIT",
    title1: "Crafting a world-class visitor experience",
    desc: "Chennai’s coastline, performing arts, temples, and culinary depth make it one of the richest cultural cities in India. Its classical and colonial legacies attract a steady stream of domestic and diaspora tourists. Yet, the city’s heritage, hospitality, and public spaces often work in silos, holding it back from joining the ranks of cultural destinations like Kyoto or Istanbul.",
    desc2:
      "How can Chennai elevate its tourism economy and take its place on the global cultural map?",
    icon: "/images/Visit-Images/icons/Buzzing-City-Life.svg",
    imgAlt: "VISIT",
  },

  {
    title: "WORK",
    title1: "Becoming India’s Talent Capital",
    desc: "Chennai produces thousands of skilled graduates and hosts strong R&D capabilities across industries. However, perception gaps and lifestyle factors continue to drive talent away.This pillar focuses on reshaping Chennai’s image as an opportunity-rich metro by enhancing career pathways, work-life balance, cultural ecosystems, and industry-academia collaboration.",
    desc2:
      "How can Chennai become the metro of choice for the next generation of creators and professionals?",

    icon: "/images/Visit-Images/icons/Where-Flavour-Meets-Culture.svg",
    imgAlt: "WORK",
  },

  {
    title: "INVEST",
    title1: "Reimagining Chennai as a Launchpad for Future Business",

    desc: "Chennai is a national leader in manufacturing, exports, and logistics, with globally competitive hubs in automotive and electronics. It benefits from deep industrial roots, a strategic coastal location, and consistent FDI inflows—making it one of India’s most stable metro economies. Yet, while it has the scale and substance, Chennai projects efficiency but not energy by being agile, tech-centric and investor-focussed, unlike some of the East Asian ones like Seoul or Ho Chi Minh city.",
    desc2:
      "How can Chennai recast itself as South Asia’s most compelling and future-ready investment destination?",

    icon: "/images/Visit-Images/icons/Weekend-Getaways-Chennai-Style.svg",
    imgAlt: "INVEST",
  },
  {
    title: "INNOVATE",
    title1: "Becoming India’s Deep-Tech Hub for the World",

    desc: "Chennai is home to pioneering efforts in SaaS, advanced manufacturing, and service innovation, and is backed by deep research institutions like IIT Madras and a growing pool of technical talent. It has built a strong reputation for substance over hype. Still, it hasn’t built the entrepreneurial buzz or cross-disciplinary density seen in innovation cities like Tel Aviv or Bengaluru, where startups are nurtured through active networks, risk capital, and civic visibility.",
    desc2:
      "How can Chennai become the city where ambitious ideas grow fast, stay grounded, and reach the world?",

    icon: "/images/Visit-Images/icons/Timeless-Chennai-Where-Culture-Evolves-Gracefully.svg",
    imgAlt: "best temple in chennai",
  },
];

const ConclaveSchmea = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "superchennai conclave",
  description:
    "An exclusive gathering of visionary leaders, forward-thinking innovators, and influential changemakers, coming together to exchange transformative ideas, engage in powerful conversations, and collectively shape the future of Chennai.",
  image: "https://www.superchennai.com/images/events/conclave-banner.jpeg",
  startDate: "2026-02-19T09:30",
  endDate: "2026-02-19",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "ITC Welcome Hotel",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cathedral Road",
      addressLocality: "Chennai",
      postalCode: "600086",
      addressCountry: "IN",
    },
  },
  performer: {
    "@type": "PerformingGroup",
    name: "CEO",
  },
};

export default function Conclave() {
  const navigate = useNavigate();
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+971", name: "UAE" },
  ];
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    designation: "",
    linkedinUrl: "",
    phone: "",
    countryCode: "+91",
    otp: "",
  });
  const [selectedCard, setSelectedCard] = useState(null);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const sanitize = (v = "") => v.replace(/[<>]/g, "");
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );
  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1502220,
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
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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

  /* ================= HELPER  ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  /* ================= SEND OTP ================= */

  const sendOtp = async () => {
    if (!form.phone) {
      toast.error("Enter phone number");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API_BASE_URL_API}/conclaves/conclave/send-otp`, {
        phone: `${form.countryCode}${form.phone}`,
      });

      setOtpSent(true);
      toast.success("OTP sent successfully");
    } catch (err) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUBMIT ================= */

  const submitConclaveForm = async (e) => {
    e.preventDefault();

    if (!otpSent || !form.otp) {
      toast.error("Please verify mobile number");
      return;
    }

    if (!form.companyName.trim()) {
      toast.error("Company Name is required");
      return;
    }

    if (!form.designation.trim()) {
      toast.error("Designation is required");
      return;
    }

    const payload = {
      name: sanitize(form.name),
      email: form.email,
      companyName: sanitize(form.companyName),
      designation: sanitize(form.designation),
      linkedinUrl: form.linkedinUrl,
      phone: `${form.countryCode}${form.phone}`,
      otp: form.otp,
    };

    try {
      setLoading(true);

      await axios.post(
        `${API_BASE_URL_API}/conclaves/conclave/verify-otp`,
        payload,
      );

      toast.success("Registration successful!");

      setForm({
        name: "",
        email: "",
        companyName: "",
        designation: "",
        linkedinUrl: "",
        phone: "",
        countryCode: "+91",
        otp: "",
      });

      navigate("/thank-you", { state: { from: "conclave" } });
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  const [activeImage, setActiveImage] = useState(
    "/images/HomePage-Images/Italian.png",
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const [fade, setFade] = useState(false);

  const handleHover = (newImage, index) => {
    if (newImage === activeImage && index === activeIndex) return;
    setFade(true);
    setActiveIndex(index);
    setTimeout(() => {
      setActiveImage(newImage);
      setFade(false);
    }, 300);
  };
  const toggleAccordion = (index) => {
    if (activeAccordionIndex === index) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let speed = 0.5; // 👈 smooth control (0.3 ultra slow)
    let animationFrame;
    let isPaused = false;

    const smoothScroll = () => {
      if (!isPaused) {
        el.scrollTop += speed;

        // Reset without jump feeling
        if (el.scrollTop >= el.scrollHeight - el.clientHeight) {
          el.scrollTop = 0;
        }
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


    const [showAll, setShowAll] = useState(false);
    const visibleData = showAll ? agendaData : agendaData.slice(0, 4);


  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

      <Helmet>
        <title>Hey Chennaiites! It’s your time to talk about Chennai!</title>
        <meta
          name="description"
          content="Be part of the Super Chennai Conclave, a citizen-driven space to discuss Chennai’s identity, innovation, culture, and future development.."
        />
        <meta
          property="og:title"
          content="Hey Chennaiites! It’s your time to talk about Chennai!"
        />
        <meta
          property="og:description"
          content="Be part of the Super Chennai Conclave, a citizen-driven space to discuss Chennai’s identity, innovation, culture, and future development.."
        />
        <meta
          property="og:image"
          content="https://www.superchennai.com/images/Picture1.png"
        />
        <meta
          property="og:url"
          content="https://www.superchennai.com/images/Picture1.png"
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/chennai-conclave`}
        />

        <script type="application/ld+json">
          {JSON.stringify(ConclaveSchmea)}
        </script>
      </Helmet>

      {/* ============== Banner ============ */}

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/events/conclave-banner.jpeg"
            alt="Super Chennai Quiz"
          />

          <img
            className="block sm:hidden w-full"
            src="/images/events/conclave-banner-mobile-banner.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className=" mx-auto px-6 lg:px-20">
          <div className="max-w-5xl mx-auto text-center ">
            <div className="InvestChennaiContent-conclaves">
              <h1 class="hidden">Super Chennai Conclave</h1>
              <h3>Super Chennai Conclave</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                An exclusive gathering of visionary leaders, forward-thinking
                innovators, and influential changemakers, coming together to
                exchange transformative ideas, engage in powerful conversations,
                and collectively shape the future of Chennai. Built on
                collaboration and purpose, this premium platform inspires
                leadership, innovation, and lasting impact
              </p>
            </div>

            {/* Event Meta */}

            <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-700 mt-5">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-sm uppercase text-gray-500">
                  <img
                    src="/images/icons/Date-icon.svg"
                    alt="Date"
                    className="w-10 h-10"
                  />
                  <span>Date</span>
                </div>
                <span className="font-semibold block mt-1">
                  February 19, 2026
                </span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-sm uppercase text-gray-500">
                  <img
                    src="/images/icons/time-icon.svg"
                    alt="Time"
                    className="w-10 h-10"
                  />
                  <span>Time</span>
                </div>
                <span className="font-semibold block mt-1">
                  09:30 AM onwards
                </span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-sm uppercase text-gray-500">
                  <img
                    src="/images/icons/location-icon.svg"
                    alt="Venue"
                    className="w-10 h-10"
                  />
                  <span>Venue</span>
                </div>
                <span className="font-semibold block mt-1">
                  ITC Welcome Hotel, Chennai
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setShowRegisterPopup(true)}
              className="inline-flex items-center justify-center px-12 py-3 rounded-full
              bg-rose-500 text-white font-semibold text-lg
              hover:bg-rose-600 transition-all duration-300 shadow-lg"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden mb-20">
        <div className=" container max-w-7xl mx-auto px-4">
          <div
            className={`VolunteeerTextBackground ${
              scrollDir === "right" ? "scroll-right" : "scroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>
              CONCLAVE - &nbsp; CONCLAVE - &nbsp; CONCLAVE - &nbsp; CONCLAVE
            </p>
          </div>
          <div className="volunteerRow">
            <img
              src="/images/conclave- about-left.jpeg"
              alt="volunteer work in chennai"
              className="w-[150px] h-[500px] object-cover rounded-lg"
            />
            <div className="volunteeerMainContent">
              <h2 class="hidden">Chennai CONCLAVE</h2>
              <h3>Chennai CONCLAVE</h3>
              <p className="paraZeroVolunteerSection">
                The Super Chennai Conclave is a one-day strategic gathering
                designed to shape the future of Chennai through collaboration,
                insight, and action.
              </p>
              <p className="paraoneVolunteerSection">
                It brings together policymakers, industry leaders, urban
                planners, academics, and subject-matter experts to collectively
                address the city’s most urgent urban challenges and unlock new
                opportunities for sustainable growth.
              </p>
              <p className="paraTwoVolunteerSection">
                This conclave goes beyond discussion — it is focused on outcomes
                that can influence policy, investment, and long-term city
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== AGENDA SECTION ================== */}

      {/* <section className=" Becameavolunteerbg-conclves relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="BecameavolunteerContent text-center">
            <h2>OUR AGENDA</h2>
          </div>

          <div className="space-y-0 divide-y divide-gray-400/40 text-white relative">
            {visibleData.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 py-8 items-center"
              >
                <div className="autoinfonew">
                  <h3>{item.id}</h3>
                </div>

                <div className="col-span-2 text-sm font-bold">
                  <p>{item.startTime} –</p>
                  <p>{item.endTime}</p>
                </div>

                <p className="col-span-5 font-bold text-white">{item.title}</p>

                <div className="col-span-4 text-sm font-bold text-white">
                  {item.speakers.map((speaker, index) => (
                    <p key={index} className="text-justify max-w-2xl mx-auto">
                      {speaker}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {!showAll && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="conclave-button"
                >
                  Read
                  More
                </button>
              </div>
            )}
          </div>
        </div>
      </section> */}

      {/* <section className="Becameavolunteerbg-conclves relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="BecameavolunteerContent text-center">
            <h2>OUR AGENDA</h2>
          </div>

          <div className="space-y-0 divide-y divide-gray-400/40 text-white relative">
            {visibleData.map((item) => (
              <div
                key={item.id}
                className="
            // grid 
            // grid-cols-1 
            // md:grid-cols-12 
            // py-8 
            // items-center 
            // text-center 
            // md:text-left 
            // font-bold
          



               flex 
            flex-col 
            md:grid 
            md:grid-cols-12 
            py-8 
            items-center 
            text-center 
            md:text-left 
            font-bold
            p-6
            md:p-0
            bg-gray-800/20
            md:bg-transparent
            rounded-lg
            md:rounded-none
            shadow-lg
            md:shadow-none
            mx-4
            md:mx-0
            space-y-4
            md:space-y-0
          "
              >
                <div className="autoinfonew flex justify-center md:justify-start mb-4 md:mb-0">
                  <h3>{item.id}</h3>
                </div>

                <div className="md:col-span-2 text-sm mb-4 md:mb-0">
                  <p>{item.startTime} –</p>
                  <p>{item.endTime}</p>
                </div>

                <p className="md:col-span-5 mb-4 md:mb-0">{item.title}</p>

                <div className="md:col-span-4 text-sm">
                  {item.speakers.map((speaker, index) => (
                    <p key={index} className="mb-1">
                      {speaker}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {!showAll && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="conclave-button"
                >
                  Read More
                </button>
              </div>
            )}
          </div>
        </div>
      </section> */}

      <section className="Becameavolunteerbg-conclves relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="BecameavolunteerContent text-center">
            <h2>OUR AGENDA</h2>
          </div>

          <div className="space-y-5 divide-y divide-gray-400/40 text-white relative">
            {visibleData.map((item) => (
              <div
                key={item.id}
                className="
            flex 
            flex-col 
            md:grid 
            md:grid-cols-12 
            py-8 
            items-center 
            text-center 
            md:text-left 
            font-bold
            p-6
            md:p-0
            bg-gray-800/20
            md:bg-transparent
            rounded-lg
            md:rounded-none
            shadow-lg
            md:shadow-none
            mx-4
            md:mx-0
            space-y-4
            md:space-y-0
          "
              >
                <div className="autoinfonew flex justify-center md:justify-start mb-4 md:mb-0">
                  <h3>{item.id}</h3>
                </div>

                <div className="md:col-span-2 text-sm mb-4 md:mb-0">
                  <p>{item.startTime} –</p>
                  <p>{item.endTime}</p>
                </div>

                <p className="md:col-span-5 mb-4 md:mb-0">{item.title}</p>

                <div className="md:col-span-4 text-sm">
                  {item.speakers.map((speaker, index) => (
                    <p key={index} className="mb-1">
                      {speaker}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {!showAll && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="conclave-button"
                >
                  Read More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/*============= SPEAKERS ================ */}
      <div className="NewsLetterPage">
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Speakers</h4>
            </div>

            <div className="exploreSldierSection">
              <Slider {...settings}>
                {speakersGallery.map((card) => (
                  <div
                    key={card.id}
                    className="ExplorePageSliderImage cursor-pointer px-2"
                    onClick={() => setSelectedCard(card)}
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-[320px] object-cover"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h5 className="text-lg font-semibold leading-tight">
                          {card.name}
                        </h5>
                        <p className="text-sm opacity-90">{card.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* ================= POPUP ================= */}

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className="bg-white rounded-xl max-w-lg w-full relative p-6"
                initial={{ scale: 0.85, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.85, y: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}

                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center
                   rounded-full bg-white/90 shadow text-gray-500 hover:text-gray-900"
                >
                  ✕
                </button>

                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  className="w-full h-[260px] object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-semibold">{selectedCard.name}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  {selectedCard.designation}
                </p>

                <p
                  className="text-sm text-gray-700 leading-relaxed
                  max-h-[40vh] overflow-y-auto pr-2"
                >
                  {selectedCard.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*============= PILLERS ============= */}

      <section className="visitIntroParaSection detailIntro ">
        <div className="workIntro">
          <h3 className="newupdatewhychennai">
            FIVE PILLARS OF SUPER CHENNAI{" "}
          </h3>
          <p>
            The conclave is anchored around five interconnected pillars that
            define a truly world-class city.
          </p>

          <div className="section-container container max-w-7xl mx-auto px-4">
            <div className="section-right-content-pillers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoData.map((item, index) => (
                  <div className="info-item-block" key={index}>
                    <div className="info-text-block">
                      <div className="info-header flex items-center gap-3 mb-2">
                        <img
                          src={item.icon}
                          alt={item.imgAlt}
                          className="info-icon"
                        />
                        <h3 className="info-title text-lg">{item.title}</h3>
                      </div>
                      <p>{item.desc}</p>
                      <p>{item.desc2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showRegisterPopup && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-[99999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRegisterPopup(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative"
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setShowRegisterPopup(false)}
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600"
              >
                ×
              </button>

              {/* FORM CONTENT */}
              <form
                onSubmit={submitConclaveForm}
                className="p-6 md:p-10 space-y-4 max-h-[90vh] overflow-y-auto"
              >
                <h2 className="themelink-color formheadingtheme text-center">
                  Register to express interest
                </h2>

                <p className="text-gray-600 text-center">
                  Be part of a curated group shaping Chennai’s future.
                </p>

                {/* ======= SAME FORM FIELDS (reuse existing) ======= */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Name *"
                    className="border p-3 rounded-lg"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="border p-3 rounded-lg"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      name="phone"
                      placeholder="Phone *"
                      className="border p-3 pr-28 rounded-lg w-full"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={otpSent}
                      required
                    />

                    {!otpSent && (
                      <button
                        type="button"
                        onClick={sendOtp}
                        className="absolute right-2 top-1/2 -translate-y-1/2 
                         bg-[#8b3c82] text-white text-sm px-4 py-2 rounded-md"
                      >
                        Send OTP
                      </button>
                    )}
                  </div>

                  {otpSent && (
                    <input
                      name="otp"
                      placeholder="Enter OTP *"
                      className="border p-3 rounded-lg w-full"
                      value={form.otp}
                      onChange={handleChange}
                      required
                    />
                  )}
                  <input
                    name="companyName"
                    placeholder="Company Name / Institutions *"
                    className="border p-3 rounded-lg"
                    value={form.companyName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    name="designation"
                    placeholder="Designation *"
                    className="border p-3 rounded-lg"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />

                  <input
                    name="linkedinUrl"
                    placeholder="LinkedIn URL "
                    className="border p-3 rounded-lg"
                    value={form.linkedinUrl}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button-full "
                >
                  {loading ? "Processing..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        className="relative w-full overflow-hidden min-h-[550px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-banner (3).jpeg')",
        }}
      >
        <div className="container mx-auto px-6 lg:px-0 z-10">
          <div
            className="
        max-w-2xl
        flex flex-col
        items-center text-center
        lg:items-start lg:text-left
      "
          >
            <div className="relative mb-6 flex justify-center lg:justify-start">
              <img
                src="/images/Picture1.png"
                alt="Conclave"
                className="h-32 md:h-48 lg:h-64 w-auto object-contain"
              />
            </div>

            <p className="text-slate-800 text-base md:text-lg lg:text-xl font-medium mb-8">
              Feb 19, 2026 <span className="mx-2 text-slate-300">|</span>
              Time: 09:30 AM Onwards
              <br />
              <span className="mx-2 text-slate-300">|</span>
              ITC Welcome Hotel, Chennai
            </p>

            <button
              onClick={() => setShowRegisterPopup(true)}
              className="border-2 border-rose-400 text-rose-500 font-semibold px-10 py-2.5 rounded-full hover:bg-rose-50 transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/*============= PARTNERS ================ */}

      <div className="NewsLetterPage ">
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Partner</h4>
            </div>

            {/* <div className="exploreSldierSection">
              <Slider {...settings}>
                {partners.map((card) => (
                  <div
                    key={card.id}
                    className="ExplorePageSliderImage cursor-pointer px-2"
                    onClick={() => setSelectedCard(card)}
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-[200px] object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div> */}

            {/* <div className="exploreSldierSection">
              {partners.length > 0 ? (
                <Slider {...settings}>
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer px-2"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-[200px] object-cover partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center">
                  <div className="ExplorePageSliderImage cursor-pointer px-2">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={partners[0].image}
                        alt={partners[0].name}
                        className="w-full h-[200px] object-cover partnercardimage"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            <div className="exploreSldierSection">
              {partners.length > 2 ? (
                <Slider {...settings}>
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer px-2"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="h-[200px] object-contain partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center gap-8 flex-wrap">
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="h-[200px] object-contain partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
