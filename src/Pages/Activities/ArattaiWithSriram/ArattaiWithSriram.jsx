import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";

export default function ArattaiWithSriram() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    otp: "",
    age: "",
    gender: "",
    organisation: "",
  });

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const sanitize = (v = "") => v.replace(/[<>]/g, "");

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

      await axios.post(
        `${API_BASE_URL_API}/arattai-sriram/arattai-sriram/send-otp`,
        {
          phone: `${form.countryCode}${form.phone}`,
        },
      );

      setOtpSent(true);
      toast.success("OTP sent successfully");
    } catch (err) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUBMIT ================= */
  const submitArattaiForm = async (e) => {
    e.preventDefault();

    if (!otpSent || !form.otp) {
      toast.error("Please verify mobile number");
      return;
    }

    if (!form.age || !form.gender) {
      toast.error("Age and Gender are required");
      return;
    }

    const payload = {
      name: sanitize(form.name),
      email: form.email,
      phone: `${form.countryCode}${form.phone}`,
      otp: form.otp,
      age: form.age,
      gender: form.gender,
      organisation: form.organisation || null,
    };

    try {
      setLoading(true);

      await axios.post(
        `${API_BASE_URL_API}/arattai-sriram/arattai-sriram/verify-otp`,
        payload,
      );

      toast.success("Registration successful!");

      setForm({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        otp: "",
        age: "",
        gender: "",
        organisation: "",
      });

      navigate("/thank-you", { state: { from: "sairam" } });
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SEO ================= */
  const arattaiSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Arattai with V. Sriram",
      description:
        "V. Sriram joins Arattai with Super Chennai, a heritage historian, author and cultural ambassador sharing the city's history, hidden gems and timeless legacy.",
      image: "https://www.superchennai.com/images/inner-page-sairam.jpeg",
      startDate: "2026-08-22T10:00",
      endDate: "2026-08-22T19:00",
      eventStatus: "https://schema.org/EventPostponed",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "M.S. Swaminathan Research Foundation",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "3rd Cross Street, Taramani Institutional Area, Taramani, Chennai, Tamil Nadu 600113",
          addressLocality: "Chennai",
          postalCode: "600113",
          addressCountry: "IN",
        },
      },
      performer: {
        "@type": "Person",
        name: "V. Sriram",
      },
    },
  ];

  const registerRef = useRef(null);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

      <Helmet>
        <title>
        Super Chennai Arattai with V. Sriram Heritage Historian
        </title>
        <meta
          name="description"
          content="V. Sriram joins Arattai with Super Chennai, a heritage historian, author and cultural ambassador sharing the city's history, hidden gems and timeless legacy.."
        />
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/arattai-with-v-sriram/heritage-historian`}
        />
      </Helmet>

      {/* ================= BANNER ================= */}
      <section
        className="accaodomationBannerSection relative overflow-hidden cursor-pointer"
        onClick={scrollToRegister}
      >
        <img
          className="hidden sm:block w-full"
          src="/images/inner-page-sairam.jpeg"
          alt="Arattai Event"
        />
        <img
          className="block sm:hidden w-full"
          src="/images/sairam-mobile.jpeg"
          alt="Arattai Event"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">Arattai with V. Sriram</h1>
              <h3>Arattai with V. Sriram</h3>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                V. Sriram is one of Chennai's most respected heritage
                enthusiasts, historians, authors, and cultural ambassadors.
                Widely recognized for pioneering the concept of heritage walks
                in Chennai in 1999, he has dedicated over two decades to
                preserving and promoting the city's rich history, architecture,
                and cultural traditions. His engaging storytelling and deep
                knowledge have inspired thousands to rediscover Chennai's
                heritage through immersive walking tours, books, and public
                talks.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                What makes Sriram truly exceptional is his ability to bring
                history to life through captivating narratives and real-life
                experiences. His heritage walks across Chennai and historical
                destinations throughout India have become highly sought-after
                experiences, encouraging people of all ages to appreciate the
                significance of cultural preservation. Alongside his passion for
                history, he has also made remarkable contributions to Carnatic
                music research, literature, and heritage documentation.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Beyond his heritage initiatives, Sriram has authored numerous
                acclaimed books on Chennai's history, Carnatic music, and
                prominent cultural personalities. He has served as the Editor of
                Madras Musings, contributed to leading publications, and
                currently serves as the Secretary of The Music Academy, Chennai.
                His dedication to heritage conservation earned him the
                prestigious Vedavalli Memorial Heritage Award in recognition of
                his outstanding efforts to preserve and promote Chennai's
                historical legacy.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Through Arattai with Sriram Venkatakrishnan, audiences can
                experience fascinating conversations that uncover Chennai's
                untold stories, architectural treasures, musical heritage, and
                cultural evolution. Every session offers unique insights,
                inspiring discussions, and a deeper appreciation for the city's
                timeless traditions, making history engaging, meaningful, and
                relevant for everyone.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Super Chennai proudly welcomes Sriram to Arattai, celebrating
                his remarkable contributions to heritage conservation,
                historical research, cultural storytelling, and his enduring
                commitment to preserving Chennai's rich legacy for future
                generations.
              </p>
            </div>
            {/* <div
              className="flex flex-col items-center text-center space-y-4 py-10"
              ref={registerRef}
            >
              <p className="text-rose-600 font-semibold tracking-wide">
                Limited Seats Only • Register Now
              </p>
              <h2 className="themelink-color formheadingtheme-arattai leading-tight md:leading-normal">
                Join Us for a Conversation with{" "}
                <br className="block md:hidden" />
                V. Sriram
              </h2>
              <p className="text-gray-600 text-lg">
                On 22<sup>nd</sup> Aug
              </p>
              <div className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/90 to-rose-600/90 text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-rose-400/50 backdrop-blur-sm animate-pulse-slow">
                <span
                  className="relative z-10 flex items-center gap-2"
                  onClick={() => setShowRegisterPopup(true)}
                >
                  <div className="w-3 h-3 bg-white/20 rounded-full animate-ping "></div>
                  Register Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ================= POPUP ================= */}
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
              <button
                onClick={() => setShowRegisterPopup(false)}
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600"
              >
                ×
              </button>

              <form
                onSubmit={submitArattaiForm}
                className="p-6 md:p-10 space-y-4 max-h-[90vh] overflow-y-auto"
              >
                <h2 className="themelink-color formheadingtheme text-center">
                  Register to express interest
                </h2>

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

                  <input
                    name="organisation"
                    placeholder="Organisation / Institution (optional)"
                    className="border p-3 rounded-lg"
                    value={form.organisation}
                    onChange={handleChange}
                  />

                  <div className="relative">
                    <input
                      name="phone"
                      placeholder="Enter 10 digit mobile number *"
                      className="border p-3 pr-28 rounded-lg w-full"
                      value={form.phone}
                      onChange={handleChange}
                      maxLength={10}
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
                      className="border p-3 rounded-lg"
                      value={form.otp}
                      onChange={handleChange}
                      required
                    />
                  )}

                  <input
                    type="number"
                    name="age"
                    placeholder="Age *"
                    className="border p-3 rounded-lg"
                    value={form.age}
                    onChange={handleChange}
                    required
                  />

                  <select
                    name="gender"
                    className="border p-3 rounded-lg"
                    value={form.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender *</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button-full"
                >
                  {loading ? "Processing..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
