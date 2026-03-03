import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../config";
import { useEffect, useRef } from "react";

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
    manifesto: "tesxt area formas",
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

    // if (!form.manifesto) {
    //   toast.error("Manifesto is required");
    //   return;
    // }

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
        payload,
      );

      toast.success("Manifesto submitted successfully!");
      /* ✅ DOWNLOAD PDF AFTER SUCCESS */
     // ✅ AUTO DOWNLOAD PDF (reliable method)
const response = await axios.get("/pdfs/manifesto.pdf", {
  responseType: "blob",
});

const url = window.URL.createObjectURL(new Blob([response.data]));
const link = document.createElement("a");
link.href = url;
link.setAttribute("download", "SuperChennai-Manifesto.pdf");
document.body.appendChild(link);
link.click();
link.remove();
window.URL.revokeObjectURL(url);

setTimeout(() => {
  navigate("/thank-you", { state: { from: "manifesto" } });
}, 1000);
      setForm({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        otp: "",
        companyName: "",
        designation: "",
         manifesto: `I envision a future where Chennai becomes a hub of innovation, sustainability, and inclusive growth...`,

      });

      navigate("/thank-you", { state: { from: "manifesto" } });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const carouselRef = useRef();

  const volunteerSections = [
    {
      title: "LIVE",
      description: `
Create a Digital Information Infrastructure for the public.
Retain tag as 'India’s Safest Big City'.
Implement accessibility in public infrastructure projects.
    `,
      image: "/images/LIVE (2).svg",
    },
    {
      title: "VISIT",
      description: `
Fast-track Parandur Airport.
Formally recognise & fund the East Coast Surf Corridor.
Promote nightlife & year-round cultural programs.
    `,
      image: "/images/VISIT.svg",
    },
    {
      title: "WORK",
      description: `
Popularise Chennai as India’s original IT Hub.
Focus on advanced manufacturing & robotics.
Guide corporates to achieve 50–50 gender balance.
    `,
      image: "/images/WORK.svg",
    },
    {
      title: "INVEST",
      description: `
Establish state-backed ‘Fund-of-Funds’ to invest in VCs.
Create a 10,000 Crore AI Park.
Push an ‘Equity-Participation’ model in top colleges.
    `,
      image: "/images/INVEST (2).svg",
    },
    {
      title: "INNOVATE",
      description: `
Create a strong testing framework to support GCCs.
Celebrate homegrown innovations under 'Chennai Brands'.
Solve traditional urban planning issues using AI.
    `,
      image: "/images/INNOVATE.svg",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const popupFunction = () => {
    setIsOpen(true);
  };

  return (
    <>

      {/* ============== Banner ============ */}
      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/manifesto-innerpage-banner.png"
            alt=" Carnatic Vocalist"
          />

          <img
            className="block sm:hidden w-full"
            src="/images/manifesto-mobile.jpeg"
            alt="Aruna sairam"
          />
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>

      {/* <section className="py-16 bg-white">
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
      
      </section> */}

      <section className=" mt-10 manifestoSection pb-20 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="InvestChennaiContent-conclaves mb-8">
            <h3 className="text-center text-2xl md:text-3xl ">
              Manifesto in Your Hands
            </h3>
          </div>

          <div className="  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bulb-wrapper accaodomationBannerSection">
              <img
                src="/images/blub.svg"
                alt="Manifesto"
                className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]"
              />
            </div>

            <div className="w-full mt-10 grid grid-cols-1 gap-4 justify-items-center sm:hidden">
              <img
                src="/images/VISIT-IMG-1.svg"
                alt="circle1"
                className="w-60 "
              />
              <img src="/images/WORK-IMG2.svg" alt="circle2" className="w-60" />
              <img src="/images/INV-IMG-4.svg" alt="circle3" className="w-60" />
              <img src="/images/LIVE-IMH3.svg" alt="circle4" className="w-60" />
              <img
                src="/images/INVEST-IMG5.svg"
                alt="circle5"
                className="w-60"
              />
            </div>

            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS

              </h2>

              <p className="paraZeroVolunteerSection mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
               The future of Chennai is shaped by the aspirations of its people.
Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest. 
              </p>
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                Live, Work, Visit, Innovate and Invest
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Suffice to say, incredible insights were collated. And they have
                been put together as a Manifesto on what the people wish for,
                from Super Chennai.
              </p>

              <button
                onClick={() => setShowRegisterPopup(true)}
                className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold theme-button"
              >
                Register & Download
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-10  flex-wrap hidden sm:flex">
          <img
            src="/images/VISIT-IMG-1.svg"
            alt="circle1"
            className="w-24 sm:w-32 lg:w-70"
          />
          <img
            src="/images/WORK-IMG2.svg"
            alt="circle2"
            className="w-24 sm:w-32 lg:w-60"
          />
          <img
            src="/images/INV-IMG-4.svg"
            alt="circle3"
            className="w-24 sm:w-32 lg:w-50"
          />
          <img
            src="/images/LIVE-IMH3.svg"
            alt="circle4"
            className="w-24 sm:w-32 lg:w-40"
          />
          <img
            src="/images/INVEST-IMG5.svg"
            alt="circle5"
            className="w-24 sm:w-32 lg:w-50"
          />
        </div>
      </section>

      {/* <div className="text-center text-black textOverrideBlackCenter mt-20 mb-10">
        <div className="VolunteerBecameavolunteer">
          <h3 className="text-black">Manifesto in Your Hands</h3>

          <p className="text-black">
            Reason why, Super Chennai organised a day-long Conclave that brought
            together industry leaders, urban planners, administrators, thought
            leaders and citizens. The Conclave discussed and curated ideas
            across five defining pillars:
          </p>
        </div>

        <div>
          <div className="container max-w-7xl mx-auto px-4 ">
            {volunteerSections.map((section, index) => (
              <div className="DigitalSectionFLex text-center" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img
                      src={section.image}
                      alt={section.imgAlt}
                      className="mx-auto w-40 sm:w-80 md:w-40 lg:w-[10px] h-auto"
                    />

                    <div className="BecamaAVolunterContentsSection text-black">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="BecamaAVolunterContentsSection text-black">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                    </div>

                    <img
                      src={section.image}
                      alt={section.imgAlt}
                      className="mx-auto w-40 sm:w-80 md:w-40 lg:w-[10px] h-auto"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mb-20 mt-10">
            <button
              onClick={() => setShowRegisterPopup(true)}
              className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold theme-button"
            >
              Register & Download
            </button>
          </div>
        </div>
      </div> */}

      {/* <section className="accaodomationBannerSection carquizbanner relative overflow-hidden mb-20">
        <div className=" container max-w-7xl mx-auto px-4">   
          <div className="volunteerRow">
            <img
              src="/images/conclave- about-left.jpeg"
              alt="volunteer work in chennai"
              className="w-[150px] h-[500px] object-cover rounded-lg"
            />
            <div className="volunteeerMainContent">
              <h2 class="hidden"></h2>
              <h3>A City Shaped by Its People</h3>
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
      </section> */}

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
                <div className="hidden">
                <textarea
                  name="manifesto"
                  placeholder="Write your Manifesto *"
                  className="border p-3 rounded-lg w-full h-32"
                  value={form.manifesto}
                  onChange={handleChange}
                  required
                />
                </div>


                {/* HIDDEN TEXTAREA */}
                {/* <div className="hidden">
                  <textarea
                    name="manifesto"
                    value={
                      form.manifesto ||
                      `I envision a future where Chennai becomes a hub of innovation, sustainability, and inclusive growth...`
                    }
                    onChange={handleChange}
                  />
                </div> */}

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


            <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

    </>
  );
}
