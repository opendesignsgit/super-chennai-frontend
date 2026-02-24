import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";

export default function ArrattaiWithArangam() {
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
  });

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const sanitize = (v = "") => v.replace(/[<>]/g, "");
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

      await axios.post(`${API_BASE_URL_API}/arattai/arattai/send-otp`, {
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
    };

    try {
      setLoading(true);

      await axios.post(`${API_BASE_URL_API}/arattai/arattai/verify-otp`, payload);

      toast.success("Registration successful!");

      setForm({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        otp: "",
        age: "",
        gender: "",
      });

      navigate("/thank-you", { state: { from: "arattai" } });
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };


  const arattaiSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Arattai with Aruna Sairam",
      description:
        "Join Arattai with Aruna Sairam to celebrate Chennai’s Carnatic vocalists, their legacy, and the city’s enduring contribution to classical music culture.",
      image: "https://www.superchennai.com/images/aruna-inne-main-image.jpeg",
      startDate: "2026-02-28T19:00",
      endDate: "2026-02-28T22:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "",
          postalCode: "",
          addressCountry: "",
        },
      },
      performer: {
        "@type": "MusicGroup",
        name: "Aruna Sairam",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Arattai with Aruna Sairam",
          item: "https://www.superchennai.com/arattai-with-aruna-sairam/carnatic-vocalist",
        },
      ],
    },
  ];

  

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />
      <Helmet>
        <title>
          Chennai’s Iconic Carnatic Vocalist - Arattai with Aruna Sairam
        </title>
        <meta
          name="description"
          content="Join Arattai with Aruna Sairam to celebrate Chennai’s Carnatic vocalist, their legacy, and the city’s enduring contribution to classical music culture.."
        />
        <meta
          property="og:title"
          content=" Join Arattai with Aruna Sairam to celebrate Chennai’s Carnatic vocalists, their legacy, and the city’s enduring contribution to classical music culture."
        />
        <meta
          property="og:description"
          content=" Join Arattai with Aruna Sairam to celebrate Chennai’s Carnatic vocalists, their legacy, and the city’s enduring contribution to classical music culture."
        />
        <meta
          property="og:image"
          content="https://www.superchennai.com/images/aruna-innerpage.jpeg"
        />
        <meta
          property="og:url"
          content="https://www.superchennai.com/images/aruna-innerpage.jpeg"
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/arattai-with-aruna-sairam/carnatic-vocalist`}
        />

          <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
      </Helmet>
      {/* ============== Banner ============ */}
      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/aruna-inne-main-image.jpeg"
            alt=" Carnatic Vocalist"
          />

          <img
            className="block sm:hidden w-full"
            src="/images/mobile-aruna-main-secon.jpg"
            alt="Aruna sairam"
          />
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h3 className=" text-center">Arattai with Aruna Sairam</h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 ">
                Join us for a candid conversation with one of India’s most
                celebrated Carnatic vocalists — a voice that has transcended
                tradition, geography and generations.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Deeply rooted in Chennai and shaped by its rich musical legacy,
                she has carried the spirit of our city to prestigious global
                stages including the Royal Albert Hall. A recipient of honours
                such as the Sangita Kalanidhi and the Padma Shri, she continues
                to be a proud torchbearer of the Carnatic tradition that
                flourishes in Chennai.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                In celebrating a voice that echoes the soul of our city, we will
                honour her with the Super Chennai Icon of the Month
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 ">
                She will be in conversation with Akhila Krishnamurthy,
                Independent journalist & Arts entrepreneur, for an engaging and
                intimate exchange on music, memory and the making of a legacy.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 py-10">
              {/* Top Line Bar */}

              <p className="text-rose-600 font-semibold tracking-wide">
                Limited Seats Only • Register Now
              </p>

              <h2 class=" themelink-color formheadingtheme-arattai">
                Join Us for a Conversation with the Legend
              </h2>

              <p className="text-gray-600 text-lg">
                On 28<sup>th</sup> Feb, 7 PM
              </p>

              {/* <button
                onClick={() => setShowRegisterPopup(true)}
                className="mt-4 bg-purple-700 hover:bg-purple-800 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
              >
                Register Now
              </button> */}

              <button
                onClick={() => setShowRegisterPopup(true)}
                class="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button "
              >
                Register Now
              </button>

              {/* Bottom Line Bar */}
              {/* <div className="w-24 h-1 bg-purple-700 rounded-full mt-6"></div> */}
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
                onSubmit={submitArattaiForm}
                className="p-6 md:p-10 space-y-4 max-h-[90vh] overflow-y-auto"
              >
                <h2 className="themelink-color formheadingtheme text-center">
                  Register to express interest
                </h2>

                <p className="text-gray-600 text-center">
                  Be part of a curated group shaping Chennai’s future.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <input
                    name="name"
                    placeholder="Name *"
                    className="border p-3 rounded-lg"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="border p-3 rounded-lg"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  {/* Mobile + OTP */}
                  <div className="relative">
                    <input
                      name="phone"
                      placeholder="Enter 10 digit mobile number *"
                      className="border p-3 pr-28 rounded-lg w-full"
                      value={form.phone}
                      onChange={handleChange}
                      maxLength={10}
                      pattern="[6-9]{1}[0-9]{9}"
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

                  {/* Age */}
                  <input
                    type="number"
                    name="age"
                    placeholder="Age *"
                    className="border p-3 rounded-lg"
                    value={form.age}
                    onChange={handleChange}
                    min="10"
                    max="100"
                    required
                  />

                  {/* Gender */}
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
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button-full "
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
