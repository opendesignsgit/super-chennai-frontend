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
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Vikram Cotah leads GRT Hotels with a strong focus on luxury hospitality, innovation, and sustainability, elevating South India’s tourism ecosystem.",
  },
  {
    id: 3,
    name: "Arun Vasu",
    mobile: "9840904077",
    mail: "arunvasu@ttgroupglobal.com",
    designation: "Chairman, TT Group",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Arun Vasu is a respected industrial leader with diverse business interests, contributing significantly to Chennai’s manufacturing and trade landscape.",
  },
  {
    id: 4,
    name: "Pandiarajan",
    mobile: "9840879559",
    mail: "kpr@cielhr.com",
    designation: "Founder, CIEL HR",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Pandiarajan is a thought leader in HR and talent solutions, helping organizations scale through innovative workforce strategies.",
  },
  {
    id: 5,
    name: "Saundarya Rajesh",
    mobile: "",
    mail: "md@avtarcc.com",
    designation: "Founder & President, Avtar Group",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "A pioneer in diversity and inclusion, Saundarya Rajesh champions women’s workforce participation and inclusive leadership across India.",
  },
  {
    id: 6,
    name: "Ramkumar",
    mobile: "",
    mail: "ramkumar@catalincs.com",
    designation: "Founder & CEO, Catalycs",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Ramkumar is an innovation evangelist driving enterprise transformation through data, AI, and emerging technologies.",
  },
  {
    id: 7,
    name: "Vishesh Rajaram",
    mobile: "",
    mail: "vishesh.rajaram@specialeinvest.com",
    designation: "Managing Partner, Speciale Invest",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Vishesh Rajaram is an active investor backing deep-tech and SaaS startups, strengthening India’s startup investment ecosystem.",
  },
  {
    id: 8,
    name: "Hari Ganapathy",
    mobile: "9790733699",
    mail: "hari@pickyourtrail.com",
    designation: "Co-Founder, PickYourTrail",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Hari Ganapathy co-founded PickYourTrail to reinvent travel experiences using technology, personalization, and customer-first design.",
  },
  {
    id: 9,
    name: "Sivarajah Ramanathan",
    mobile: "9840944410",
    mail: "ceo@startuptn.in",
    designation: "CEO, StartupTN",
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    description:
      "Sivarajah Ramanathan leads StartupTN, nurturing Tamil Nadu’s startup ecosystem through policy support, funding, and innovation programs.",
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
            src="/images/events/hotshots-square-banner1.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
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
              src="/images/events/conclaves.png"
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

      {/*============= PARTNERS ================ */}

      <div className="NewsLetterPage">
        <div className="volunteerParaSection">
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

      <section className="relative w-full bg-white overflow-hidden min-h-[450px] flex items-center justify-center">
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
              Feb 14, 2026
              <span className="mx-2 text-slate-300">|</span>
              ITC WelcomHotel, Chennai
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
    </>
  );
}
