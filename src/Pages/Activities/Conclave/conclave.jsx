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

const infoData = [
  {
    title: "LIVE",
    title1: "A City That Works for Everyone",
    desc: "Chennai’s growth must be inclusive, resilient, and equitable. This pillar focuses on building a city that delivers quality of life for all residents.Key areas include sustainable mobility, affordable housing, flood resilience, clean public spaces, strong civic governance, and neighbourhoods designed for safety and accessibility",
    icon: "/images/Visit-Images/icons/Scenic-Relaxing.svg",
    imgAlt: "attractions chennai",
  },

  {
    title: "VISIT",
    title1: "Crafting a World-Class Visitor Experience",
    desc: "With its rich heritage, vibrant culture, and natural coastline, Chennai has the potential to become a global cultural destination.This pillar explores how the city can integrate heritage, tourism, hospitality, and public spaces to offer a seamless, memorable visitor experience that reflects Chennai’s unique character.",
    icon: "/images/Visit-Images/icons/Buzzing-City-Life.svg",
    imgAlt: "VISIT",
  },

  {
    title: "WORK",
    title1: "Becoming India’s Talent Capital",
    desc: "Chennai produces thousands of skilled graduates and hosts strong R&D capabilities across industries. However, perception gaps and lifestyle factors continue to drive talent away.This pillar focuses on reshaping Chennai’s image as an opportunity-rich metro by enhancing career pathways, work-life balance, cultural ecosystems, and industry-academia collaboration.",
    icon: "/images/Visit-Images/icons/Where-Flavour-Meets-Culture.svg",
    imgAlt: "WORK",
  },

  {
    title: "INVEST",
    title1: "Reimagining Chennai as a Launchpad for Future Business",

    desc: "With deep manufacturing expertise, strategic location, and economic stability, Chennai is well-positioned to attract global investment.This pillar examines how the city can strengthen ease of doing business, boost investor confidence, and position itself as South Asia’s most compelling and future-ready investment destination.",
    icon: "/images/Visit-Images/icons/Weekend-Getaways-Chennai-Style.svg",
    imgAlt: "INVEST",
  },
  {
    title: "INNOVATE",
    title1: "Becoming India’s Deep-Tech Hub for the World",

    desc: "Chennai has strong technical talent and premier research institutions, yet lacks the visibility and ecosystem density of leading global innovation hubs.This pillar explores how the city can nurture entrepreneurship, attract risk capital, strengthen innovation networks, and support deep-tech ventures to scale globally from Chennai",
    icon: "/images/Visit-Images/icons/Timeless-Chennai-Where-Culture-Evolves-Gracefully.svg",
    imgAlt: "best temple in chennai",
  },
];

export const speakersGallery = [
  {
    id: 1,
    name: "Raj Cherubal",
    mobile: "9381013498",
    mail: "rajcherubal@gmail.com",
    designation: "CEO, Chennai Metropolitan Development Authority",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Raj Cherubal is a visionary urban planner and administrator, playing a key role in shaping Chennai’s sustainable urban growth and infrastructure policies.",
  },
  {
    id: 2,
    name: "Vikram Cotah",
    mobile: "9840741379",
    mail: "vikramcotah@grthotels.com",
    designation: "CEO, GRT Hotels & Resorts",
    image: "/images/speakers/vikram-cotah.jpg",
    description:
      "Vikram Cotah leads GRT Hotels with a strong focus on luxury hospitality, innovation, and sustainability, elevating South India’s tourism ecosystem.",
  },
  {
    id: 3,
    name: "Arun Vasu",
    mobile: "9840904077",
    mail: "arunvasu@ttgroupglobal.com",
    designation: "Chairman, TT Group",
    image: "/images/speakers/arun-vasu.jpg",
    description:
      "Arun Vasu is a respected industrial leader with diverse business interests, contributing significantly to Chennai’s manufacturing and trade landscape.",
  },
  {
    id: 4,
    name: "Pandiarajan",
    mobile: "9840879559",
    mail: "kpr@cielhr.com",
    designation: "Founder, CIEL HR",
    image: "/images/speakers/pandiarajan.jpg",
    description:
      "Pandiarajan is a thought leader in HR and talent solutions, helping organizations scale through innovative workforce strategies.",
  },
  {
    id: 5,
    name: "Saundarya Rajesh",
    mobile: "",
    mail: "md@avtarcc.com",
    designation: "Founder & President, Avtar Group",
    image: "/images/speakers/saundarya-rajesh.jpg",
    description:
      "A pioneer in diversity and inclusion, Saundarya Rajesh champions women’s workforce participation and inclusive leadership across India.",
  },
  {
    id: 6,
    name: "Ramkumar",
    mobile: "",
    mail: "ramkumar@catalincs.com",
    designation: "Founder & CEO, Catalycs",
    image: "/images/speakers/ramkumar.jpg",
    description:
      "Ramkumar is an innovation evangelist driving enterprise transformation through data, AI, and emerging technologies.",
  },
  {
    id: 7,
    name: "Vishesh Rajaram",
    mobile: "",
    mail: "vishesh.rajaram@specialeinvest.com",
    designation: "Managing Partner, Speciale Invest",
    image: "/images/speakers/vishesh-rajaram.jpg",
    description:
      "Vishesh Rajaram is an active investor backing deep-tech and SaaS startups, strengthening India’s startup investment ecosystem.",
  },
  {
    id: 8,
    name: "Hari Ganapathy",
    mobile: "9790733699",
    mail: "hari@pickyourtrail.com",
    designation: "Co-Founder, PickYourTrail",
    image: "/images/speakers/hari-ganapathy.jpg",
    description:
      "Hari Ganapathy co-founded PickYourTrail to reinvent travel experiences using technology, personalization, and customer-first design.",
  },
  {
    id: 9,
    name: "Sivarajah Ramanathan",
    mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation: "CEO, StartupTN",
    image: "/images/speakers/sivarajah-ramanathan.jpg",
    description:
      "Sivarajah Ramanathan leads StartupTN, nurturing Tamil Nadu’s startup ecosystem through policy support, funding, and innovation programs.",
  },
];



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
    autoplaySpeed: 1500,
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

      await axios.post(`${API_BASE_URL_API}/conclave/send-otp`, {
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

    const payload = {
      name: sanitize(form.name),
      email: form.email,
      designation: sanitize(form.designation),
      linkedinUrl: form.linkedinUrl,
      phone: `${form.countryCode}${form.phone}`,
      otp: form.otp,
    };

    try {
      setLoading(true);

      await axios.post(`${API_BASE_URL_API}/conclave/verify-otp`, payload);

      toast.success("Registration successful!");

      setForm({
        name: "",
        email: "",
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

  return (
    <>
      <ToastContainer position="top-center" />

      {/* ============== Banner ============ */}

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        {/* Images */}
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/events/inner-banner-Hotshots-1.jpeg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className="block sm:hidden w-full"
            src="/images/events/hotshots-square-banner1.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 to-[#8b3c82]/90 z-10"></div> */}

        {/* Text Content */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            {/* <AutoShrinkText
              text="Hotshots Chennai Moments"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />

            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Hotshots Chennai Moments</Link>
            </div> */}
          </div>
        </div>
      </section>

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="volunteerParaSection container max-w-7xl mx-auto px-4">
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
              src="/images/events/superchennai-left.png"
              alt="volunteer work in chennai"
              className="w-[150px] h-[500px] object-cover rounded-lg"
            />
            <div className="volunteeerMainContent">
              <h3>ABOUT</h3>

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

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="volunteerParaSection container max-w-7xl mx-auto px-4">
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
            <div className="volunteeerMainContent">
              <h3>WHY SUPER CHENNAI</h3>
              <p>
                Chennai has always been a city of substance — resilient,
                industrious, and culturally rich. It has strong infrastructure,
                improving public transit, and deep economic foundations.
              </p>
              <p>
                Yet challenges such as flooding, housing inequity, congestion,
                cleanliness, talent migration, and limited global visibility
                continue to impact its growth potential.
              </p>
              <p>
                The Super Chennai Conclave creates a shared platform to ask an
                important question:
              </p>
              <p>
                How can Chennai evolve into a world-class, future-ready city
                that works for everyone?
              </p>
            </div>

            <img
              src="/images/events/superchennai-left.png"
              alt="volunteer work in chennai"
              className="w-[150px] h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

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
            <div className="section-left-image">
              <img
                src="/images/Visit-Images/standup-show.jpg"
                alt="Main Side Visual"
              />
            </div>

            <div className="section-right-content">
              {infoData.map((item, index) => (
                <div className="info-item-block" key={index}>
                  <img
                    src={item.icon}
                    alt={item.imgAlt}
                    className="info-icon"
                  />
                  <div className="info-text-block">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white overflow-hidden min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to right, #ffffff 30%, rgba(255, 255, 255, 0) 70%), url('https://content.jdmagicbox.com/v2/comp/chennai/68/044p3006268/catalogue/welcomhotel-by-itc-hotels-gopalapuram-chennai-hotels-0psayu28bf.jpg?imwidth=393')`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />

        <div className="container mx-auto px-6 lg:px-20 z-10">
          <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Label */}
            <span className="text-rose-600 font-bold tracking-widest text-sm mb-1 uppercase">
              Super Chennai
            </span>

            {/* Conclave Logo/Box Section */}
            <div className="relative mb-6">
              <div className="border-[3px] border-slate-800 rounded-[20px] px-8 py-2 relative">
                <h1 className="text-6xl md:text-7xl font-bold text-slate-800 tracking-tighter">
                  CONCLAVE
                </h1>

                {/* The Speech Bubble Point (Tail) */}
                <div className="absolute -bottom-4 right-8 w-8 h-8">
                  <svg
                    viewBox="0 0 32 32"
                    className="fill-white stroke-slate-800 stroke-[3px]"
                  >
                    <path d="M0 0 L32 0 L16 32 Z" />
                  </svg>
                </div>
              </div>

              {/* Custom Border Gradient Emulation (Optional tweak) */}
              <div className="absolute -top-[3px] -right-[3px] w-1/2 h-full border-t-[3px] border-r-[3px] border-rose-500 rounded-tr-[20px] pointer-events-none" />
              <div className="absolute -bottom-[3px] -right-[3px] w-1/4 h-1/2 border-b-[3px] border-r-[3px] border-rose-500 rounded-br-[20px] pointer-events-none" />
            </div>

            {/* Date and Venue */}
            <p className="text-slate-600 text-lg md:text-xl font-medium mb-8">
              Feb 14, 2026 <span className="mx-2 text-slate-300">|</span> ITC
              WelcomHotel, Chennai
            </p>

            {/* Register Button */}
            {/* <button className="border-2 border-rose-400 text-rose-500 font-semibold px-10 py-2.5 rounded-full hover:bg-rose-50 transition-colors duration-300">
              Register Now
            </button> */}
            <button
              onClick={() => setShowRegisterPopup(true)}
              className="border-2 border-rose-400 text-rose-500 font-semibold px-10 py-2.5 rounded-full hover:bg-rose-50 transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showRegisterPopup && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center px-4"
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
                  REGISTER TO ATTEND
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <input
                    name="phone"
                    placeholder="Phone *"
                    className="border p-3 rounded-lg"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={otpSent}
                    required
                  />

                  {!otpSent && (
                    <button
                      type="button"
                      onClick={sendOtp}
                      className="bg-[#8b3c82] text-white px-4 py-3 rounded-lg"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="LinkedIn URL *"
                    className="border p-3 rounded-lg"
                    value={form.linkedinUrl}
                    onChange={handleChange}
                    required
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

      {/*============= FORM ================ */}

      {/* <section className="relative py-16 bg-gradient-to-br from-[#ffffff] to-[#ffffff] m-10">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl">
            <form
              onSubmit={submitConclaveForm}
              className="p-6 md:p-10 space-y-4"
            >
              <h2 className="themelink-color formheadingtheme text-center">
                REGISTER TO ATTEND
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Be part of a curated group shaping Chennai’s future.
              </p>

             

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    name="name"
                    placeholder="Name *"
                    className="w-full border p-3 rounded-lg"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="w-full border p-3 rounded-lg"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="border px-3 rounded-lg"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </select>

                <input
                  name="phone"
                  placeholder="Phone *"
                  className="border p-3 rounded-lg"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={otpSent}
                  required
                />

                {!otpSent && (
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="bg-[#8b3c82] hover:bg-[#732f6d] text-white px-4 py-2 rounded-lg whitespace-nowrap"
                  >
                    Send OTP
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Designation *
                  </label>
                  <input
                    name="designation"
                    placeholder="Designation *"
                    className="w-full border p-3 rounded-lg"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    LinkedIn Profile URL *
                  </label>
                  <input
                    name="linkedinUrl"
                    placeholder="LinkedIn URL *"
                    className="w-full border p-3 rounded-lg"
                    value={form.linkedinUrl}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button-full "
              >
                {loading ? "Processing..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section> */}

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

                      {/* Gradient Overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

                      {/* Speaker Info */}
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
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
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
                  className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
                  onClick={() => setSelectedCard(null)}
                >
                  ×
                </button>

                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  className="w-full h-[260px] object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-semibold">{selectedCard.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {selectedCard.designation}
                </p>

                {/* Phone */}
                {selectedCard.mobile && (
                  <p className="text-sm text-gray-700">
                    📞{" "}
                    <span className="font-medium">{selectedCard.mobile}</span>
                  </p>
                )}

                {/* Email */}
                {selectedCard.mail && (
                  <p className="text-sm text-gray-700 mb-3 break-all">
                    ✉️ <span className="font-medium">{selectedCard.mail}</span>
                  </p>
                )}

                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedCard.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
