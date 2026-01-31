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

export const volunteerGallery = [
  {
    id: 1,
    image: "/images/Volunteer-Images/volunteer-gallery1.jpg",
    link: "/events",
  },
  {
    id: 2,
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    link: "/events",
  },
  {
    id: 3,
    image: "/images/Volunteer-Images/volunteer-gallery3.jpg",
    link: "/events",
  },
  {
    id: 4,
    image: "/images/Volunteer-Images/volunteer-gallery4.jpg",
    link: "/events",
  },
  {
    id: 5,
    image: "/images/Volunteer-Images/volunteer-gallery5.jpg",
    link: "/events",
  },
  {
    id: 6,
    image: "/images/Volunteer-Images/volunteer-gallery6.jpg",
    link: "/events",
  },
  {
    id: 7,
    image: "/images/Volunteer-Images/volunteer-gallery7.jpg",
    link: "/events",
  },
  {
    id: 8,
    image: "/images/Volunteer-Images/volunteer-gallery8.jpg",
    link: "/events",
  },
  {
    id: 9,
    image: "/images/Volunteer-Images/volunteer-gallery9.jpg",
    link: "/events",
  },
  {
    id: 10,
    image: "/images/Volunteer-Images/volunteer-gallery10.jpg",
    link: "/events",
  },
  {
    id: 11,
    image: "/images/Volunteer-Images/volunteer-gallery11.jpg",
    link: "/events",
  },
  {
    id: 12,
    image: "/images/Volunteer-Images/volunteer-gallery12.jpg",
    link: "/events",
  },
  {
    id: 13,
    image: "/images/Volunteer-Images/volunteer-gallery13.jpg",
    link: "/events",
  },
  {
    id: 14,
    image: "/images/Volunteer-Images/volunteer-gallery14.jpg",
    link: "/events",
  },
  {
    id: 15,
    image: "/images/Volunteer-Images/volunteer-gallery15.jpg",
    link: "/events",
  },
  {
    id: 16,
    image: "/images/Volunteer-Images/volunteer-gallery16.jpg",
    link: "/events",
  },
  {
    id: 17,
    image: "/images/Volunteer-Images/volunteer-gallery17.jpg",
    link: "/events",
  },
  {
    id: 18,
    image: "/images/Volunteer-Images/volunteer-gallery18.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/volunteer-gallery19.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/gal1.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/gal2.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/gal3.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/gal4.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/gal5.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/gal6.jpg",
    link: "/events",
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
                // className="w-[150px] h-[150px] object-cover rounded-lg"
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

      {/*============= FORM ================ */}

      <section className="relative py-16 bg-gradient-to-br from-[#ffffff] to-[#ffffff] m-10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* LEFT IMAGE */}
            <img
              src="/images/events/superchennai-pillers.png"
              className="w-120 h-180 "
              alt="Conclave"
            />

            {/* FORM */}
            <form
              onSubmit={submitConclaveForm}
              className="p-6 md:p-10 space-y-4"
            >
              <h2 className="themelink-color formheadingtheme">Conclave</h2>
              <p className="text-gray-600 mb-6">SHARE YOUR INFOS</p>
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

              <div className="flex gap-2">
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
                  className="flex-1 border p-3 rounded-lg"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={otpSent}
                  required
                />

                {!otpSent && (
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="bg-purple-700 text-white px-4 rounded-lg "
                  >
                    Send OTP
                  </button>
                )}
              </div>

              {otpSent && (
                <input
                  name="otp"
                  placeholder="Enter OTP *"
                  className="w-full border p-3 rounded-lg"
                  value={form.otp}
                  onChange={handleChange}
                  required
                />
              )}

              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Desiginations
              </label>

              <input
                name="designation"
                placeholder="Designation *"
                className="w-full border p-3 rounded-lg"
                value={form.designation}
                onChange={handleChange}
                required
              />

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
      </section>

      {/*============= GALLERY ================ */}

      <div className="NewsLetterPage">
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Volunteer Gallery</h4>
            </div>

            <div className="exploreSldierSection">
              <Slider {...settings}>
                {volunteerGallery.map((card, index) => (
                  <div
                    key={index}
                    className="ExplorePageSliderImage cursor-pointer"
                    onClick={() => setSelectedCard(card)}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={card.image}
                        alt={`Volunteer ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
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
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl w-auto relative popupSection"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <button
                  className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
                  onClick={() => setSelectedCard(null)}
                >
                  ×
                </button>
                <img
                  src={selectedCard.image}
                  alt="Volunteer"
                  className="w-full mb-4 rounded popupSection paddingSection"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
