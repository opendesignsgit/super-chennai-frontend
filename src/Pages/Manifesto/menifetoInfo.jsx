import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../config";

export default function Manifesto() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const sanitize = (v = "") => v.replace(/[<>]/g, "");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    otp: "",
    companyName: "",
    designation: "",
    manifesto: "",
  });

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

      await axios.post(`${API_BASE_URL_API}/manifesto/manifesto/send-otp`, {
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

  const submitManifesto = async (e) => {
    e.preventDefault();

    if (!otpSent || !form.otp) {
      toast.error("Please verify mobile number");
      return;
    }

    if (!form.manifesto) {
      toast.error("Manifesto is required");
      return;
    }

    const payload = {
      name: sanitize(form.name),
      email: form.email,
      phone: `${form.countryCode}${form.phone}`,
      otp: form.otp,
      companyName: sanitize(form.companyName),
      designation: sanitize(form.designation),
      manifesto: sanitize(form.manifesto),
    };

    try {
      setLoading(true);

      await axios.post(
        `${API_BASE_URL_API}/manifesto/manifesto/verify-otp`,
        payload
      );

      toast.success("Manifesto submitted successfully!");
      /* ✅ DOWNLOAD PDF AFTER SUCCESS */
      const link = document.createElement("a");
      link.href = "/pdfs/manifesto.pdf"; // same domain
      link.download = "SuperChennai-Manifesto.pdf";
      document.body.appendChild(link);  
      link.click();
      document.body.removeChild(link);


      setForm({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        otp: "",
        companyName: "",
        designation: "",
        manifesto: "",
      });

      navigate("/thank-you", { state: { from: "manifesto" } });

    } catch (err) {
      toast.error(err?.response?.data?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

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
            src="/images/inner-page-araattai-image.jpeg"
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
              <h1 className=" text-center hidden ">
                Arattai with Aruna Sairam
              </h1>
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

              <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">

                        <h2 class=" themelink-color formheadingtheme-arattai">
                Submit Your Manifesto</h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Share your vision and ideas for shaping the future.
            </p>

            <button
              onClick={() => setShowRegisterPopup(true)}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button"
            >
             Register & Download Manifesto
            </button>

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
                onSubmit={submitManifesto}
                className="p-6 md:p-10 space-y-4 max-h-[90vh] overflow-y-auto"
              >
                <h2 className="themelink-color formheadingtheme text-center">
                  Manifesto Submission
                </h2>

                <p className="text-gray-600 text-center">
                  Be part of shaping Chennai’s future.
                </p>

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
                      placeholder="Enter mobile number *"
                      className="border p-3 pr-28 rounded-lg w-full"
                      value={form.phone}
                      onChange={handleChange}
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
                    name="companyName"
                    placeholder="Company Name"
                    className="border p-3 rounded-lg"
                    value={form.companyName}
                    onChange={handleChange}
                  />

                  <input
                    name="designation"
                    placeholder="Designation"
                    className="border p-3 rounded-lg"
                    value={form.designation}
                    onChange={handleChange}
                  />

                </div>

                {/* FULL WIDTH TEXTAREA (same spacing system) */}
                <textarea
                  name="manifesto"
                  placeholder="Write your Manifesto *"
                  className="border p-3 rounded-lg w-full h-32"
                  value={form.manifesto}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button-full"
                >
                  {loading ? "Processing..." : "Submit & Download Manifesto"}
                </button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}