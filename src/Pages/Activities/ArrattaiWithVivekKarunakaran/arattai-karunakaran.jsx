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

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

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
          src="/images/vivek-innerpage-banner.jpeg"
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

              <p
                className="text-gray-600 leading-relaxed mb-6 "
                ref={registerRef}
              >
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
                On 25<sup>th</sup> April
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




// import axios from "axios";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState, useRef } from "react";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { API_BASE_URL_API } from "../../../../config";

// export default function ArattaiWithVivekKarunakaran() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     countryCode: "+91",
//     otp: "",
//     age: "",
//     gender: "",
//     organisation: "",
//   });

//   const [showRegisterPopup, setShowRegisterPopup] = useState(false);

//   const sanitize = (v = "") => v.replace(/[<>]/g, "");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
//   };

//   /* ================= SEND OTP ================= */
//   const sendOtp = async () => {
//     if (!form.phone) {
//       toast.error("Enter phone number");
//       return;
//     }

//     try {
//       setLoading(true);
//       await axios.post(
//         `${API_BASE_URL_API}/arattai-karunakaran/arattai-karunakaran/send-otp`,
//         {
//           phone: `${form.countryCode}${form.phone}`,
//         }
//       );
//       setOtpSent(true);
//       toast.success("OTP sent successfully");
//     } catch (err) {
//       toast.error("Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= SUBMIT ================= */
//   const submitArattaiForm = async (e) => {
//     e.preventDefault();

//     if (!otpSent || !form.otp) {
//       toast.error("Please verify mobile number");
//       return;
//     }

//     if (!form.age || !form.gender) {
//       toast.error("Age and Gender are required");
//       return;
//     }

//     const payload = {
//       name: sanitize(form.name),
//       email: form.email,
//       phone: `${form.countryCode}${form.phone}`,
//       otp: form.otp,
//       age: form.age,
//       gender: form.gender,
//       organisation: form.organisation || null,
//     };

//     try {
//       setLoading(true);
//       await axios.post(
//         `${API_BASE_URL_API}/arattai-karunakaran/arattai-karunakaran/verify-otp`,
//         payload
//       );

//       toast.success("Registration successful!");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         countryCode: "+91",
//         otp: "",
//         age: "",
//         gender: "",
//         organisation: "",
//       });

//       navigate("/thank-you", { state: { from: "vivek" } });
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= SEO ================= */
//   const arattaiSchema = [
//     {
//       "@context": "https://schema.org",
//       "@type": "Article",
//       headline: "Arattai with Vivek Karunakaran",
//       description:
//         "Super Chennai Arattai with Vivek Karunakaran, a leading contemporary fashion designer, sharing insights on fashion, identity, and innovation.",
//       image:
//         "https://www.superchennai.com/images/vivek-banner.jpeg",
//       author: {
//         "@type": "Person",
//         name: "Super Chennai",
//       },
//       datePublished: "2026-04-01",
//     },
//   ];

//   const registerRef = useRef(null);

//   const scrollToRegister = () => {
//     registerRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         style={{ zIndex: 100000 }}
//         toastClassName="premium-toast"
//       />

//       <Helmet>
//         <title>Vivek Karunakaran - Super Chennai Arattai</title>
//         <meta
//           name="description"
//           content="Super Chennai Arattai with Vivek Karunakaran, one of India's leading contemporary fashion designers."
//         />
//         <script type="application/ld+json">
//           {JSON.stringify(arattaiSchema)}
//         </script>
//       </Helmet>

//       {/* ================= HERO BANNER ================= */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-rose-950">
//         {" "}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13, 12, 59, 0.3),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165, 19, 104, 0.2),transparent_50%)]" />
//         <div className="relative container mx-auto px-6 lg:px-8 py-20 lg:py-32">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
//               <span className="w-2 h-2 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full mr-3" />
//               <span className="text-white/90 font-medium text-sm uppercase tracking-wider">
//                 Exclusive Event • Limited Seats
//               </span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6 leading-tight">
//               Arattai with
//               <br />
//               <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
//                 Vivek Karunakaran
//               </span>
//             </h1>

//             <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
//               A conversation redefining tradition in modern fashion
//             </p>

//             <motion.button
//               onClick={() => setShowRegisterPopup(true)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-12 py-6 bg-white text-gray-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative z-10 flex items-center">
//                 Register Now
//                 <svg
//                   className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </span>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             {/* Content Cards */}
//             <div className="grid md:grid-cols-2 gap-8 mb-20">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Visionary Designer
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   Redefining tradition through clean, minimal, and structured
//                   aesthetics that bridge heritage with global sensibilities.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Cultural Innovator
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   Transforming Kalamkari and Kanjeevaram into contemporary
//                   expressions through Adayalam and global collaborations.
//                 </p>
//               </motion.div>
//             </div>

//             {/* Main Content */}
//             <div className="space-y-12 mb-20" ref={registerRef}>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-xl text-gray-700 leading-relaxed">
//                   Join us for a candid conversation with Vivek Karunakaran, one
//                   of India's leading contemporary fashion designers — a creative
//                   force redefining how tradition is perceived in modern fashion.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-12 mt-16">
//                   <div className="space-y-8">
//                     <p className="text-lg text-gray-600 leading-relaxed">
//                       With years of experience from NIFT Chennai to
//                       international brands, Vivek consistently pushes boundaries
//                       in style and storytelling. Rooted in Chennai's cultural
//                       fabric, his work highlights the city's evolving role in
//                       global fashion.
//                     </p>
//                     <p className="text-lg text-gray-600 leading-relaxed">
//                       At the heart of his philosophy lies a commitment to
//                       preserving heritage while making it relevant for today's
//                       world.
//                     </p>
//                   </div>

//                   <div className="space-y-8">
//                     <p className="text-lg text-gray-600 leading-relaxed">
//                       Beyond the runway, his influence extends into
//                       collaborations, styling, and cultural initiatives. His
//                       work continues to inspire a new generation to embrace
//                       authenticity, creativity, and individuality.
//                     </p>
//                     <div className="pt-8 border-t border-gray-200">
//                       <p className="text-rose-600 font-semibold text-lg mb-2">
//                         📅 15th April 2026
//                       </p>
//                       <p className="text-indigo-600 font-semibold text-lg">
//                         Limited Seats Available
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50 rounded-3xl p-16 lg:p-24 border border-white/50"
//             >
//               <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-bold text-sm rounded-full mb-8 uppercase tracking-wider">
//                 <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
//                 Don't Miss Out
//               </div>

//               <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
//                 Join the Conversation
//               </h2>

//               <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
//                 Be part of an exclusive dialogue shaping Chennai's global voice
//               </p>

//               <motion.button
//                 onClick={() => setShowRegisterPopup(true)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative px-12 py-6 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-rose-500/50 transition-all duration-500 overflow-hidden"
//               >
//                 <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
//                 <span className="relative z-10">Secure Your Spot</span>
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= PREMIUM MODAL ================= */}
//       <AnimatePresence>
//         {showRegisterPopup && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowRegisterPopup(false)}
//           >
//             <motion.div
//               className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 w-full max-w-2xl max-h-[90vh] overflow-hidden"
//               initial={{ scale: 0.9, y: 50, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.9, y: 50, opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 p-8 text-white">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h2 className="text-2xl lg:text-3xl font-bold mb-1">
//                       Secure Your Seat
//                     </h2>
//                     <p className="text-white/90 text-sm font-medium">
//                       Join Vivek Karunakaran - Limited Availability
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => setShowRegisterPopup(false)}
//                     className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Form */}
//               <form
//                 onSubmit={submitArattaiForm}
//                 className="p-8 lg:p-12 space-y-6"
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Full Name *
//                     </label>
//                     <input
//                       name="name"
//                       placeholder="Enter your full name"
//                       className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="your@email.com"
//                       className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="lg:col-span-2 space-y-1">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Organisation (Optional)
//                     </label>

//                     <input
//                       name="organisation"
//                       placeholder="Your organisation or institution"
//                       className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                       value={form.organisation}
//                       onChange={handleChange}
//                     />
//                   </div>

//                   <div className="space-y-1 relative">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Phone Number *
//                     </label>
//                     <div className="flex">
//                       <div className="bg-gray-100 px-4 py-4 rounded-l-2xl border-r border-gray-200 font-mono text-sm">
//                         {form.countryCode}
//                       </div>
//                       <input
//                         name="phone"
//                         placeholder="10 digit mobile number"
//                         className="flex-1 p-4 border border-gray-200 rounded-r-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm pr-20"
//                         value={form.phone}
//                         onChange={handleChange}
//                         maxLength={10}
//                         disabled={otpSent}
//                         required
//                       />
//                     </div>
//                     {!otpSent && (
//                       <motion.button
//                         type="button"
//                         onClick={sendOtp}
//                         disabled={loading}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="absolute right-3 top-[5.5rem] px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-rose-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {loading ? "Sending..." : "Send OTP"}
//                       </motion.button>
//                     )}
//                   </div>

//                   {otpSent && (
//                     <div className="space-y-1">
//                       <label className="text-sm font-semibold text-gray-700">
//                         OTP *
//                       </label>
//                       <input
//                         name="otp"
//                         placeholder="Enter 6-digit OTP"
//                         className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                         value={form.otp}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   )}

//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Age *
//                     </label>
//                     <input
//                       type="number"
//                       name="age"
//                       placeholder="Your age"
//                       className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                       value={form.age}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Gender *
//                     </label>
//                     <select
//                       name="gender"
//                       className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none bg-no-repeat bg-right"
//                       value={form.gender}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
//                 >
//                   {loading ? (
//                     <>
//                       <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                       <span>Processing...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span>Register Now</span>
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </>
//                   )}
//                 </motion.button>

//                 <p className="text-center text-sm text-gray-500 pt-4">
//                   By registering, you agree to our{" "}
//                   <a
//                     href="#"
//                     className="text-rose-500 hover:text-rose-600 font-semibold underline"
//                   >
//                     Terms & Conditions
//                   </a>
//                 </p>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         .premium-toast {
//           @apply bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-2xl border-0;
//         }
//         select {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
//           background-position: right 0.75rem center;
//           background-repeat: no-repeat;
//           background-size: 1.5em 1.5em;
//           padding-right: 2.5rem;
//         }
//       `}</style>
//     </>
//   );
// }