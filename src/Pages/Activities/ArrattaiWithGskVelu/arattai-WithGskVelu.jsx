import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";

export default function ArattaiWithGskVelu() {
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

  const [showRegisterPopup, setShowRegisterPopup] =
    useState(false);

  const sanitize = (v = "") =>
    v.replace(/[<>]/g, "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => ({
      ...p,
      [name]: value,
    }));
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
        `${API_BASE_URL_API}/arattai-gsk-velu/arattai-gsk-velu/send-otp`,
        {
          phone: `${form.countryCode}${form.phone}`,
        }
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
        `${API_BASE_URL_API}/arattai-gsk-velu/arattai-gsk-velu/verify-otp`,
        payload
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

      navigate("/thank-you", {
        state: { from: "gsk-velu" },
      });

    } catch (err) {

      toast.error(
        err?.response?.data?.message ||
          "OTP verification failed"
      );

    } finally {

      setLoading(false);

    }
  };

  /* ================= SEO ================= */

  const arattaiSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",

      name: "Arattai with GSK Velu",

      description:
        "Join us for an inspiring conversation with GSK Velu, entrepreneur and healthcare visionary known for transforming India's healthcare and diagnostics ecosystem.",

      image:
        "https://www.superchennai.com/images/gskvelu-inner-banner.jpeg",

      startDate: "2026-05-10T09:00",

      endDate: "2026-05-20T23:00",

      eventStatus:
        "https://schema.org/EventScheduled",

      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",

      location: {
        "@type": "Place",
        name: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "",
          postalCode: "",
          addressCountry: "IN",
        },
      },

      performer: {
        "@type": "Person",
        name: "GSK Velu",
      },
    },
  ];

  const registerRef = useRef(null);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

      <Helmet>
        <title>Super Chennai Arattai with GSK Velu</title>

        <meta
          name="description"
          content="Join us for an inspiring conversation with GSK Velu, entrepreneur and healthcare visionary known for transforming India's healthcare and diagnostics ecosystem."
        />

        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>

        <link
          rel="canonical"
          href={`${
            typeof window !== "undefined" ? window.location.origin : ""
          }/arattai-with-gsk-velu`}
        />
      </Helmet>

      {/* ================= BANNER ================= */}

      <section
        className="accaodomationBannerSection relative overflow-hidden cursor-pointer"
        onClick={scrollToRegister}
      >
        <img
          className="hidden sm:block w-full"
          src="/images/gskvelu-innerpage-banner.jpeg"
          alt="Arattai with GSK Velu"
        />

        <img
          className="block sm:hidden w-full"
          src="/images/gskvelu-mobile-banner.jpeg"
          alt="Arattai with GSK Velu"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves">
              <h1 className="text-center hidden">Arattai with GSK Velu</h1>

              <h3 className="headingGredientclass">Arattai with GSK Velu</h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Innovation. Leadership. Impact. Dr. GSK Velu’s journey is a
                powerful example of how vision and purpose can transform an
                entire industry.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                As one of India’s leading healthcare entrepreneurs, he has
                played a significant role in redefining healthcare accessibility
                through medical technology, diagnostics, hospitals, and
                indigenous innovation. From building globally recognized
                healthcare ventures to championing “Make in India” in medical
                technology, his work continues to influence millions of lives.
              </p>

              <p
                className="text-gray-600 leading-relaxed mb-6"
                ref={registerRef}
              >
                Rooted in Chennai and driven by a global vision, Dr. GSK Velu
                has consistently pushed boundaries to create healthcare
                solutions that are accessible, affordable, and future-ready.
                Through ventures like Trivitron Healthcare and Neuberg
                Diagnostics, he has positioned Chennai as an important hub for
                healthcare innovation and manufacturing. Beyond
                entrepreneurship, his contributions towards healthcare
                accessibility, education, and social impact reflect a commitment
                to building meaningful change for communities across India and
                beyond.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                For his visionary leadership, entrepreneurial excellence, and
                transformative contribution to healthcare, Super Chennai proudly
                recognizes Dr. GSK Velu as the Icon of the Month — celebrating
                leaders who continue to shape industries, inspire innovation,
                and elevate Chennai on the global stage.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 py-10">
              <div
                className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/90 to-rose-600/90 text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-rose-400/50 backdrop-blur-sm animate-pulse-slow cursor-pointer"
                onClick={() => setShowRegisterPopup(true)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
                  Register Now
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse"></div>
              </div>
            </div>
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
              initial={{
                scale: 0.85,
                y: 40,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                y: 40,
                opacity: 0,
              }}
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
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8b3c82] text-white text-sm px-4 py-2 rounded-md"
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