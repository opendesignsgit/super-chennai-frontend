import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../config";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";

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

  /* ================= SLIDER SETTINGS ================= */

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  /* ================= MOBILE SYNC SLIDER ================= */

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const mainSettings = {
    arrows: false,
    fade: true,
    asNavFor: nav2,
  };

  const thumbSettings = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    asNavFor: nav1,
    arrows: false,
    centerMode: true,
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

      {/* NEW SCROLLER SECTIONS  */}
      {/* 
      <section className=" mt-10 manifestoSection pb-20 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="InvestChennaiContent-conclaves mb-8">
            <h3 className="text-center text-2xl md:text-3xl ">
              Manifesto in Your Hands
            </h3>
          </div>

          <div className="items-center relative">
            <div className="text-center lg:text-left mb-8 lg:mb-0 relative md:absolute top-0 right-0 w-full md:w-[50%] z-[40] mb-30">
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS
              </h2>

              <p className="paraZeroVolunteerSection mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                The future of Chennai is shaped by the aspirations of its
                people. Reason why, Super Chennai organised a day-long Conclave
                that brought together industry leaders, urban planners,
                administrators, thought leaders and citizens. The Conclave
                discussed and curated ideas across five defining pillars: Live,
                Work, Visit, Innovate and Invest.
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

            <div className="bulbRectContainer relative w-full hidden md:block">
              <Slider {...sliderSettings}>
                <div className="bulbimg">
                  <img src="/images/wireImages/live.jpg" alt="live" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/innovate.jpg" alt="innovate" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/Visit.jpg" alt="visit" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/work.jpg" alt="work" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/Invest.jpg" alt="invest" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}

      <section className=" mt-10 manifestoSection pb-20 relative manifestopage">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="InvestChennaiContent-conclaves mb-8">
            <h3 className="text-center text-2xl md:text-3xl ">
              Manifesto in Your Hands
            </h3>
          </div>

          <div className="items-center relative ">
            <div className="text-center lg:text-left mb-8 lg:mb-0 relative md:absolute top-0 right-0 w-full md:w-[50%] z-[40] mb-30 manifestowidth">
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS
              </h2>

              <p className="paraZeroVolunteerSection mb-4 text-gray-700 leading-relaxed text-sm sm:text-base manifestopara">
                The future of Chennai is shaped by the aspirations of its
                people. Reason why, Super Chennai organised a day-long Conclave
                that brought together industry leaders, urban planners,
                administrators, thought leaders and citizens. The Conclave
                discussed and curated ideas across five defining pillars: Live,
                Work, Visit, Innovate and Invest.
              </p>
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                Live, Work, Visit, Innovate and Invest
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base manifestopara">
                Suffice to say, incredible insights were collated. And they have
                been put together as a Manifesto on what the people wish for,
                from Super Chennai.
              </p>

              <p>
                Register your details to access and download the full manifesto.
              </p>

              <button
                onClick={() => setShowRegisterPopup(true)}
                className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold theme-button"
              >
                 Download
              </button>
            </div>

            <div className="bulbRectContainer relative w-full hidden md:block">
              <Slider {...sliderSettings}>
                <div className="bulbimg">
                  <img src="/images/wireImages/live.jpg" alt="live" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/innovate.jpg" alt="innovate" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/Visit.jpg" alt="visit" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/work.jpg" alt="work" />
                </div>

                <div className="bulbimg">
                  <img src="/images/wireImages/Invest.jpg" alt="invest" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <div className="block md:hidden manifestoslider">
        {/* TOP IMAGE */}

        <Slider {...mainSettings} ref={slider1}>
          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Live.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>


          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Innovate.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>

           <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Invest.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>


           <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Visit.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>



            <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/work.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>
        </Slider>

        {/* BOTTOM AUTO SCROLL */}
        <div className="mt-6">
          <Slider {...thumbSettings} ref={slider2}>
            <div className="px-2 p-5">
              <img
                src="/images/menifestoSvg/live.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

            <div className="px-2 p-5">
              <img
                src="/images/menifestoSvg/inovate.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>


            <div className="px-2 p-5">
              <img
                src="/images/menifestoSvg/invest.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

              <div className="px-2">
              <img
                src="/images/menifestoSvg/visit.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

               <div className="px-2">
              <img
                src="/images/menifestoSvg/work.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>
          </Slider>
        </div>
      </div>

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
