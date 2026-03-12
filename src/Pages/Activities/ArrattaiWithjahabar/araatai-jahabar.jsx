import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";
import { useAnimationControls } from "framer-motion";

export default function ArattaiWithJahabar() {

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

      await axios.post(`${API_BASE_URL_API}/arattai-Jahabar/arattai-jahabar/send-otp`, {
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

      await axios.post(
        `${API_BASE_URL_API}/arattai-Jahabar/arattai-jahabar/verify-otp`,
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
      });

      navigate("/thank-you", { state: { from: "jahabar" } });

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
      name: "Arattai with Jahabar",
      description:
        "Join Arattai with Jahabar for a conversation celebrating Chennai’s culture and voices shaping the city.",
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
        "@type": "Person",
        name: "Jahabar",
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const mockUpcomingEvents = [
    {
      id: 1,
      image: "/images/superchennai-logo-news.jpeg",
      description:
        "Super Chennai launches the Super Chennai Manifesto 2026 outlining a bold vision to build a stronger, smarter and future-ready city.",
      title: "Super Chennai Manifesto 2026 Launch",
      link: "https://www.passionateinmarketing.com/super-chennai-launches-super-chennai-manifesto-2026/",
    },
    {
      id: 2,
      image: "/images/super-chennai-logo-news-no-border (2).jpeg",
      title: "Super Chennai Manifesto 2026 Unveiled",
      description:
        "Super Chennai unveils the Super Chennai Manifesto 2026 presenting a roadmap to create a resilient, global and future-ready Chennai.",
      link: "https://www.medianews4u.com/super-chennai-unveils-super-chennai-manifesto-2026-to-build-a-global-resilient-and-future-ready-city/",
    },
  ];

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

      <Helmet>
        <title>Arattai with Jahabar</title>
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
      </Helmet>

      {/* ================= BANNER ================= */}

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <img
          className="hidden sm:block w-full"
          src="/images/aruna-inne-main-image.jpeg"
          alt="Arattai Event"
        />

        <img
          className="block sm:hidden w-full"
          src="/images/inner-page-araattai-image.jpeg"
          alt="Arattai Event"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">Arattai with Jahabar sadique </h1>
              <h3 className=" text-center"> Arattai with Jahabar sadique </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 ">
                Join us for a candid conversation with Jahabar Sadique, the
                entrepreneur behind one of Chennai’s most loved homegrown tea
                brands — a founder who transformed a simple everyday ritual into
                a thriving business.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Deeply rooted in Chennai and shaped by the city’s vibrant
                entrepreneurial spirit, he built Chai Kings from the ground up,
                turning the humble cup of chai into a brand that resonates with
                thousands across the city and beyond.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                In celebrating an entrepreneur whose journey reflects the energy
                and ambition of Chennai, we continue our Super Chennai Arattai
                series — conversations that spotlight the people shaping the
                spirit of our city.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 ">
                He will be in conversation with Sangeetha Kandavel, Senior
                Assistant Editor, Business – The Hindu, for an engaging exchange
                on entrepreneurship, building a brand from Chennai, and the
                journey of brewing a chai kingdom from the city. ☕
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 py-10">
              <p className="text-rose-600 font-semibold tracking-wide">
                Limited Seats Only • Register Now
              </p>

              <h2 class=" themelink-color formheadingtheme-arattai">
                Join Us for a Conversation with the Legend
              </h2>

              <p className="text-gray-600 text-lg">
                On 21<sup>st</sup> March, 5:00 PM onwards
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
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold"
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

