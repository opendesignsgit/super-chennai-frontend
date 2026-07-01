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
      name: "Arattai with Soumya Swaminathan",
      description:
        "Soumya Swaminathan, former WHO Chief Scientist, is a global public health leader from Chennai known for TB, HIV research and advancing healthcare equity worldwide.",
      image:
        "https://www.superchennai.com/images/sowmiya-iiner-page-banner.jpeg",
      startDate: "2026-06-27T10:00",
      endDate: "2026-06-27T20:00",
      eventStatus: "https://schema.org/EventScheduled",
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
        name: "Soumya Swaminathan",
      },
    },
  ];

  const registerRef = useRef(null);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
   


  
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
      { id: 1, image: "/images/DR. Soumya View 1.jpg" },
      { id: 2, image: "/images/DR. soumya view 2.jpg" },
      { id: 3, image: "/images/dr. soumya view 3.jpg" },
      { id: 4, image: "/images/DR. Soumya View 4.jpg" },
      { id: 5, image: "/images/Dr. Soumya View 5.jpg" },
      { id: 6, image: "/images/Dr. Soumya View 7.jpg" },
      { id: 7, image: "/images/Dr. Soumya View 8.jpg" },
      { id: 8, image: "/images/dr.soumya view 6.jpg" },
      { id: 9, image: "/images/Dr.soumya View 7.jpg" },
  
    ];

const [scrollDir, setScrollDir] = useState("left");
const lastScrollY = useRef(0);
const bgTextRef = useRef(null);
const carouselRef = useRef();
const [x, setX] = useState(0);
const slide = (direction) => {
  const cardWidth = 300;
  const gap = 40;
  const visibleWidth = window.innerWidth;
  const totalCardsWidth = mockUpcomingEvents.length * (cardWidth + gap);
  const maxX = -(totalCardsWidth - visibleWidth + gap);

  setX((prevX) => {
    if (direction === "left") {
      return Math.min(prevX + (cardWidth + gap), 0);
    } else if (direction === "right") {
      return Math.max(prevX - (cardWidth + gap), maxX);
    }
    return prevX;
  });
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
          Super Chennai Arattai with Soumya Swaminathan WHO Chief Scientist
        </title>
        <meta
          name="description"
          content="Soumya Swaminathan, former WHO Chief Scientist, is a global public health leader from Chennai known for TB, HIV research and advancing healthcare equity worldwide."
        />
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/arattai-with-soumya-swaminathan/chief-scientist`}
        />
      </Helmet>

      {/* ================= BANNER ================= */}
      <section
        className="accaodomationBannerSection relative overflow-hidden cursor-pointer"
        onClick={scrollToRegister}
      >
        <img
          className="hidden sm:block w-full"
          src="/images/sowmiya-iiner-page-banner.jpeg"
          alt="Arattai Event"
        />
        <img
          className="block sm:hidden w-full"
          src="/images/innerpage-sowmya-banner-mobile.jpeg"
          alt="Arattai Event"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">
                Arattai with Dr. Soumya Swaminathan
              </h1>
              <h3 className=" mb-6">Arattai with Dr. Soumya Swaminathan</h3>

              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Dr. Soumya Swaminathan is not just a doctor—she’s one of the
                strongest global voices shaping modern public health. Known for
                her groundbreaking work in tuberculosis (TB) and HIV, she rose
                to become the first Chief Scientist of the World Health
                Organization, where science meets real-world impact. She also
                served as Deputy Director-General for Programmes at WHO, playing
                a key role in shaping global health strategies. Her mission has
                always been clear: make healthcare accessible, practical, and
                fair for everyone—especially in developing countries.
              </p>

              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
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

              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                In 2026, she was honored with the DEVI Award in Chennai,
                celebrating not just her achievements but her impact. With over
                40 years of experience, she represents resilience, purpose, and
                leadership—especially for women in science. She has also led
                major institutions like the Indian Council of Medical Research
                (ICMR), strengthening India’s research and public health
                systems. Her journey proves that true influence comes from
                combining knowledge with compassion.
              </p>

              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Today, as Chairperson of the Dr. Soumya Swaminathan Research
                Foundation, she continues to drive change—focusing on emerging
                challenges like climate and health, while advocating the One
                Health approach that connects human, animal, and environmental
                well-being. Carrying forward the legacy of her father, Dr.
                Soumya Swaminathan, she remains a force shaping the
                future—through policy, research, and mentorship—one decision,
                one breakthrough, and one life at a time.
              </p>
            </div>
            {/* <div className="flex flex-col items-center text-center space-y-4 py-10">
              <p className="text-rose-600 font-semibold tracking-wide">
                Limited Seats Only • Register Now
              </p>
              <h2 className="themelink-color formheadingtheme-arattai leading-tight md:leading-normal">
                Join Us for a Conversation with{" "}
                <br className="block md:hidden" />
                Dr. Soumya Swaminathan
              </h2>

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


           {/*============= GALLERY ================== */}
      <div className="EventsCalendarMainSection mb-10">
        <div
          className={`EventsCalenderBackground ${
            scrollDir === "right"
              ? "Utilitiesscroll-right"
              : "Utilitiesscroll-left"
          }`}
        >
          <p>Gallery &nbsp; Gallery &nbsp; Gallery &nbsp;</p>
          <p>Gallery &nbsp; Gallery &nbsp; Gallery &nbsp;</p>
        </div>

        {/* Title */}
        <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center EventsCalendarTitleMain">
          <h2>Media Highlights</h2>
          <p>
            A collection of stage highlights, speaker sessions, interactions,
            and memento-giving moments from the Arattai.
          </p>
        </div>

        <div className="overflow-hidden py-17 cardMobileSection">
          <div className="relative">
            <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

            <motion.div
              ref={carouselRef}
              className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
              drag="x"
              dragConstraints={{
                right: 0,
                left: -(mockUpcomingEvents.length * 340 - window.innerWidth),
              }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {mockUpcomingEvents.map((card) => (
                <div
                  key={card.id}
                  className="EventsCalendarCardSection min-w-[300px] h-[350px] bg-white"
                  onClick={() => openModal(card.image)}
                >
                  <img
                    src={card.image}
                    alt="Gallery"
                    className="w-full h-[350px] object-cover rounded-t-md"
                  />
                </div>
              ))}
            </motion.div>
            <div className="EventsCalenderButtons flex justify-center  ">
              <button
                onClick={() => slide("left")}
                className="EventsCalenderLeftButton"
              ></button>
              <button
                onClick={() => slide("right")}
                className="EventsCalenderRightButton"
              ></button>
            </div>
          </div>

          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 z-[9999]"
              onClick={closeModal}
            >
              <img
                src={modalImage}
                alt="Full view"
                className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-5 right-5 text-white text-2xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>

     

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
              {/* <ScientistBackground /> */}
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
