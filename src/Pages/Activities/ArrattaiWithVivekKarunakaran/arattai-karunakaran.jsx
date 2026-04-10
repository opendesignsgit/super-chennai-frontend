import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";

export default function ArattaiWithVivekKarunakaran() {
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
        `${API_BASE_URL_API}/arattai-karunakaran/arattai-karunakaran/send-otp`,
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
        `${API_BASE_URL_API}/arattai-karunakaran/arattai-karunakaran/verify-otp`,
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

      navigate("/thank-you", { state: { from: "vivek" } });
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
      "@type": "Article",
      headline: "Arattai with Vivek Karunakaran",
      description:
        "Super Chennai Arattai with Vivek Karunakaran, a leading contemporary fashion designer, sharing insights on fashion, identity, and innovation.",
      image:
        "https://www.superchennai.com/images/vivek-banner.jpeg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      datePublished: "2026-04-01",
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
        <title>Vivek Karunakaran - Super Chennai Arattai</title>
        <meta
          name="description"
          content="Super Chennai Arattai with Vivek Karunakaran, one of India’s leading contemporary fashion designers."
        />
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
      </Helmet>

      {/* ================= BANNER ================= */}
      <section
        className="accaodomationBannerSection relative overflow-hidden cursor-pointer"
        onClick={scrollToRegister}
      >
        <img
          className="hidden sm:block w-full"
          // src="/images/vivek-banner.jpeg"
          src="/images/kamakoti-banner.jpeg"
          alt="Arattai Event"
        />
        <img
          className="block sm:hidden w-full"
          src="/images/vivek-mobile-banner.jpeg"
          alt="Arattai Event"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">
                Arattai with Vivek Karunakaran
              </h1>
              <h3>Arattai with Vivek Karunakaran</h3>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Join us for a candid conversation with Vivek Karunakaran, one of
                India’s leading contemporary fashion designers — a creative
                force redefining how tradition is perceived in modern fashion.
                Known for his clean, minimal, and structured aesthetic, he
                represents a distinctive voice that bridges heritage with global
                design sensibilities.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                With years of experience in the fashion industry, his journey
                reflects a deep understanding of craftsmanship, innovation, and
                identity. From his early days at the National Institute of
                Fashion Technology (NIFT), Chennai, to leading design for
                international brands and launching his own label, he has
                consistently pushed boundaries in style and storytelling.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Rooted in Chennai and deeply connected to its cultural fabric,
                his work highlights the city’s evolving role in the global
                fashion landscape. Through his designs, Vivek Karunakaran
                presents a quiet yet powerful narrative — where tradition meets
                modernity, and identity is expressed through form, fabric, and
                function.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                At the heart of his philosophy lies a commitment to preserving
                heritage while making it relevant for today’s world. By
                reinterpreting textiles like Kalamkari and Kanjeevaram, he
                transforms them into contemporary expressions that resonate
                across cultures.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 "ref={registerRef}>
                Beyond the runway, his influence extends into collaborations,
                styling, and cultural initiatives such as Adayalam, a platform
                celebrating the intersection of art, craft, and design. His work
                continues to inspire a new generation to embrace authenticity,
                creativity, and individuality.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                In celebrating a designer who embodies innovation, culture, and
                purpose, we feature Vivek Karunakaran as part of the Super
                Chennai Arattai series — conversations that spotlight
                individuals shaping the spirit, identity, and global voice of
                Chennai.
              </p>

              {/* <p
                className="text-gray-600 leading-relaxed mb-6 "
                ref={registerRef}
              >
                We feature Vivek Karunakaran as part of the Super Chennai
                Arattai series — conversations that spotlight individuals
                shaping Chennai’s identity.
              </p> */}
            </div>
            <div className="flex flex-col items-center text-center space-y-4 py-10">
              <p className="text-rose-600 font-semibold tracking-wide">
                Limited Seats Only • Register Now
              </p>

              <h2 className="themelink-color formheadingtheme-arattai">
                Join Us for a Conversation with Vivek Karunakaran
              </h2>

              <p className="text-gray-600 text-lg">
                On 15<sup>th</sup> April
              </p>

              <button
                onClick={() => setShowRegisterPopup(true)}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button"
              >
                Register Now
              </button>
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