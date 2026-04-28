import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";

export default function ArattaiWithSoumyaSwaminathan() {
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
        `${API_BASE_URL_API}/soumya/swaminathan/send-otp`,
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
        `${API_BASE_URL_API}/soumya/swaminathan/verify-otp`,
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

      navigate("/thank-you", { state: { from: "soumya" } });
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
      name: "Arattai with Vivek Karunakaran",
      description:
        "Vivek Karunakaran, Chennai fashion designer known for blending traditional textiles with modern aesthetics and shaping contemporary Indian fashion.",
      image: "https://www.superchennai.com/images/vivek-innerpage-banner.jpeg",
      startDate: "2026-04-16T09:00",
      endDate: "2026-04-25T23:00",
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
          addressCountry: "IN",
        },
      },
      performer: {
        "@type": "Person",
        name: "Vivek Karunakaran",
      },
    },
  ];

  const registerRef = useRef(null);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const ScientistBackground = () => {
  return (
    <div className="w-full h-full relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Lab Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full border border-blue-300/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-4 h-4 bg-blue-300 rounded-full absolute top-2 right-2" />
        <div className="w-3 h-3 bg-blue-200 rounded-full absolute bottom-2 left-2" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 w-16 h-16 bg-green-400/20 rounded-full border border-green-300/30"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-3 h-3 bg-green-300 rounded-full absolute top-3 left-3" />
        <div className="w-2 h-2 bg-green-200 rounded-full absolute bottom-3 right-3" />
      </motion.div>

      {/* DNA Helix Animation */}
      <div className="absolute right-32 top-1/2 w-4 h-48 bg-gradient-to-b from-purple-400 to-pink-400 opacity-30 rounded-full">
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -48, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -48, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          }}
        />
      </div>

      {/* Microscope Lens Effect */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-24 h-24 border-4 border-yellow-400/30 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-orange-300/50 rounded-full animate-pulse" />
      </motion.div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-slate-700/[0.3] bg-center bg-repeat" />
      </div>
    </div>
  );
};

  return (
    <>
      <ToastContainer
        position="top-center"
        toastStyle={{ zIndex: 9999999 }}
        style={{ zIndex: 9999999 }}
      />

      <Helmet>
        <title>
          Super Chennai Arattai with Fashion Designer Vivek Karunakaran
        </title>
        <meta
          name="description"
          content="Vivek Karunakaran, Chennai fashion designer known for blending traditional textiles with modern aesthetics and shaping contemporary Indian fashion."
        />
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/arattai-with-vivek-karunakaran/chennai-fashion-designer`}
        />
      </Helmet>

      {/* ================= BANNER ================= */}
      <section
        className="accaodomationBannerSection relative overflow-hidden cursor-pointer"
        onClick={scrollToRegister}
      >
        <img
          className="hidden sm:block w-full"
          // src="/images/vivek-banner.jpeg"
          src="/images/soumya-iconofthemonth-banner1.jpeg"
          alt="Arattai Event"
        />
        <img
          className="block sm:hidden w-full"
          src="/images/mobile-banner-vivek-mobile.jpeg"
          alt="Arattai Event"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">
                Arattai with Soumya Swaminathan
              </h1>
              <h3>Arattai with Soumya Swaminathan</h3>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Soumya Swaminathan is not just a doctor—she’s one of the
                strongest global voices shaping modern public health. Known for
                her groundbreaking work in tuberculosis (TB) and HIV, she rose
                to become the first Chief Scientist of the World Health
                Organization, where science meets real-world impact. She also
                served as Deputy Director-General for Programmes at WHO, playing
                a key role in shaping global health strategies. Her mission has
                always been clear: make healthcare accessible, practical, and
                fair for everyone—especially in developing countries.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                What makes her journey truly powerful is how she bridges lab
                research with real-life solutions. Her early work at the
                National Institute for Research in Tuberculosis (NIRT) in
                Chennai laid the foundation for her deep expertise in TB and
                HIV. From tackling TB-HIV challenges in India to influencing
                global health systems, she has consistently turned complex
                science into meaningful action. During the COVID-19 pandemic,
                she stood out as a calm, credible voice—cutting through noise
                with facts and helping shape global responses, including
                equitable vaccine access through initiatives like COVAX.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                In 2026, she was honored with the DEVI Award in Chennai,
                celebrating not just her achievements but her impact. With over
                40 years of experience, she represents resilience, purpose, and
                leadership—especially for women in science. She has also led
                major institutions like the Indian Council of Medical Research
                (ICMR), strengthening India’s research and public health
                systems. Her journey proves that true influence comes from
                combining knowledge with compassion.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Today, as Chairperson of the M. S. Swaminathan Research
                Foundation, she continues to drive change—focusing on emerging
                challenges like climate and health, while advocating the One
                Health approach that connects human, animal, and environmental
                well-being. Carrying forward the legacy of her father, Dr. M. S.
                Swaminathan, she remains a force shaping the future—through
                policy, research, and mentorship—one decision, one breakthrough,
                and one life at a time.
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
                On 25<sup>th</sup> April
              </p>

              {/* <button
                onClick={() => setShowRegisterPopup(true)}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button "
              >
                Register Now
              </button> */}

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
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPUP ================= */}
      {/* <AnimatePresence>
        
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
      </AnimatePresence> */}

      <AnimatePresence>
        {showRegisterPopup && (
          <>
            {/* Animated Scientist Background */}
            <motion.div
              className="fixed inset-0 z-[99998] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ScientistBackground />
            </motion.div>

            {/* Original Overlay with reduced opacity */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRegisterPopup(false)}
            >
              {/* Your existing form content */}
              <motion.div
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/25 w-full max-w-2xl relative border border-white/30"
                initial={{ scale: 0.85, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.85, y: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Rest of your existing form code remains the same */}
                <button
                  onClick={() => setShowRegisterPopup(false)}
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-600 z-[99999]"
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}
