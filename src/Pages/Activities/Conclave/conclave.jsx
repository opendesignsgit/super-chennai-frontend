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

export const speakersGallery = [
  {
    id: 1,
    name: "Raj Cherubal",
    mobile: "9381013498",
    mail: "rajcherubal@gmail.com",
    designation: "CEO, Chennai Metropolitan Development Authority",
    image: "/images/images-speakers/raja-2.jpg",
    // description:
    // "Raj Cherubal is a visionary urban planner and administrator, playing a key role in shaping Chennai’s sustainable urban growth and infrastructure policies.",
  },
  {
    id: 2,
    name: "Vikram Cotah",
    mobile: "9840741379",
    mail: "vikramcotah@grthotels.com",
    designation: "CEO, GRT Hotels & Resorts",
    image: "/images/images-speakers/vikram cotah-image1.jpg",
    // description:
    // "Vikram Cotah leads GRT Hotels with a strong focus on luxury hospitality, innovation, and sustainability, elevating South India’s tourism ecosystem.",
  },
  {
    id: 3,
    name: "Arun Vasu",
    mobile: "9840904077",
    mail: "arunvasu@ttgroupglobal.com",
    designation: "Chairman, TT Group",
    image: "/images/images-speakers/arunvarusu-image1.jpg",
    // description:
    // "Arun Vasu is a respected industrial leader with diverse business interests, contributing significantly to Chennai’s manufacturing and trade landscape.",
  },
  {
    id: 4,
    name: "Pandiarajan",
    mobile: "9840879559",
    mail: "kpr@cielhr.com",
    designation: "Founder, CIEL HR",
    image: "/images/images-speakers/pandiraj-1.jpg",
    // description:
    // "Pandiarajan is a thought leader in HR and talent solutions, helping organizations scale through innovative workforce strategies.",
  },
  {
    id: 5,
    name: "Saundarya Rajesh",
    mobile: "",
    mail: "md@avtarcc.com",
    designation: "Founder & President, Avtar Group",
    image: "/images/images-speakers/soundaryrajesh-image-1.jpg",
    // description:
    // "A pioneer in diversity and inclusion, Saundarya Rajesh champions women’s workforce participation and inclusive leadership across India.",
  },
  {
    id: 6,
    name: "Ramkumar",
    mobile: "",
    mail: "ramkumar@catalincs.com",
    designation: "Founder & CEO, Catalycs",
    image: "/images/images-speakers/ramkuamr-image-1.jpg",
    // description:
    // "Ramkumar is an innovation evangelist driving enterprise transformation through data, AI, and emerging technologies.",
  },
  {
    id: 7,
    name: "Vishesh Rajaram",
    mobile: "",
    mail: "vishesh.rajaram@specialeinvest.com",
    designation: "Managing Partner, Speciale Invest",
    image: "/images/images-speakers/Vishesh Rajaram.jpg",
    // description:
    // "Vishesh Rajaram is an active investor backing deep-tech and SaaS startups, strengthening India’s startup investment ecosystem.",
  },
  {
    id: 8,
    name: "Hari Ganapathy",
    mobile: "9790733699",
    mail: "hari@pickyourtrail.com",
    designation: "Co-Founder, PickYourTrail",
    image: "/images/images-speakers/Hari Ganapathy.jpg",
    // description:
    // "Hari Ganapathy co-founded PickYourTrail to reinvent travel experiences using technology, personalization, and customer-first design.",
  },
  {
    id: 9,
    name: "Sivarajah Ramanathan",
    mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation: "CEO, StartupTN",
    image: "/images/images-speakers/Sivarajah Ramanathan.jpg",
    // description:
    // "Sivarajah Ramanathan leads StartupTN, nurturing Tamil Nadu’s startup ecosystem through policy support, funding, and innovation programs.",
  },
];

export const partners = [
  {
    id: 1,
    image: "/images/events/logos.jpg",
  },
  {
    id: 1,
    image: "/images/events/logos.jpg",
  },
  {
    id: 1,
    image: "/images/events/logos.jpg",
  },
  {
    id: 1,
    image: "/images/events/logos.jpg",
  },
  {
    id: 1,
    image: "/images/events/logos.jpg",
  },
];

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

  return (
    <>
      <ToastContainer position="top-center" />

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
            src="/images/events/mobile-banner-conclave.jpeg"
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
              <h3>An Exclusive Chennai Conclave</h3>
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
                  ITC WelcomHotel, Chennai
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
              src="/images/conclave- about-left.jpeg"
              alt="volunteer work in chennai"
              className="w-[150px] h-[500px] object-cover rounded-lg"
            />
            <div className="volunteeerMainContent">
              <h3>ABOUT CONCLAVE</h3>

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
                {/* {selectedCard.mobile && (
                  <p className="text-sm text-gray-700">
                    📞
                    <span className="font-medium">{selectedCard.mobile}</span>
                  </p>
                )} */}

                {/* Email */}
                {/* {selectedCard.mail && (
                  <p className="text-sm text-gray-700 mb-3 break-all">
                    ✉️ <span className="font-medium">{selectedCard.mail}</span>
                  </p>
                )} */}

                <p className="text-sm text-gray-700 leading-relaxed">
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
                    name="companyName"
                    placeholder="Company Name *"
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

      {/* <section
        className="relative w-full overflow-hidden min-h-[450px] flex items-center justify-center 
             bg-[url('/images/conclave-CTA-bg.jpeg')] bg-cover bg-center bg-no-repeat "
      > */}

      {/* <section
        className="relative w-full overflow-hidden min-h-[450px] flex items-center justify-center
             "
      >
        <div className="absolute inset-0 z-0" />

        <div className="container mx-auto px-6 lg:px-20 z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <div className="relative mb-6 flex justify-center">
              <img
                src="/images/Picture1.png"
                alt="Conclave"
                className="h-40 md:h-64 w-auto mx-auto object-contain"
              />
            </div>

            <p className="text-slate-600 text-lg md:text-xl font-medium mb-8">
              Feb 19, 2026 Time: 09:30 AM Onwards
              <span className="mx-2 text-slate-300">|</span>
              ITC WelcomHotel, Chennai
            </p>

            <button
              onClick={() => setShowRegisterPopup(true)}
              className="border-2 border-rose-400 text-rose-500 font-semibold px-10 py-2.5 rounded-full hover:bg-rose-50 transition-colors duration-300 cursor-pointer"
            >
              Register Now
            </button>
          </div>
        </div>
      </section> */}

      <section
        className="relative w-full overflow-hidden min-h-[550px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-banner (3).jpeg')",
        }}
      >
        {/* <div className="absolute inset-0 z-0" /> */}
        <div className="container mx-auto px-6 lg:px-0 z-10">
          <div className="max-w-2xl flex flex-col items-start text-left">
            <div className="relative mb-6 flex justify-start">
              <img
                src="/images/Picture1.png"
                alt="Conclave"
                className="h-40 md:h-64 w-auto object-contain"
              />
            </div>

            <p className="text-slate-800 text-lg md:text-xl font-medium mb-8">
              Feb 19, 2026 <span className="mx-2 text-slate-300">|</span>
              Time: 09:30 AM Onwards<br></br>{" "}
              <span className="mx-2 text-slate-300">|</span>
              ITC WelcomHotel, Chennai
            </p>

            <button
              onClick={() => setShowRegisterPopup(true)}
              className="border-2 border-rose-400 text-rose-500 font-semibold px-10 py-2.5 rounded-full hover:bg-rose-50 transition-colors duration-300 cursor-pointer"
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
              <h4>Partners</h4>
            </div>

            <div className="exploreSldierSection">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
