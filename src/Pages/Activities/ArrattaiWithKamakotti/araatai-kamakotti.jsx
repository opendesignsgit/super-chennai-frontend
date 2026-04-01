import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";
import { useAnimationControls } from "framer-motion";

export default function ArattaiWithKamakotti() {
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
        `${API_BASE_URL_API}/arattai-kamakoti/arattai-kamakoti/send-otp`,
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
        `${API_BASE_URL_API}/arattai-kamakoti/arattai-kamakoti/verify-otp`,
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

      navigate("/thank-you", { state: { from: "kamakoti" } });
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const arattaiSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/arattai-with-jahabar-sadique/chai-kings-founder",
      },
      headline: "Arattai with Jahabar sadique",
      description:
        "Super Chennai Arattai With Jahabar Sadique, owner of Chai Kings, shares how a simple tea idea brewed into a thriving brand and a strong business story.",
      image:
        "https://www.superchennai.com/images/jahabar-banner-mobile%20(2).jpeg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-03-13",
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
          name: "Arattai with Jahabar sadique",
          item: "https://www.superchennai.com/arattai-with-jahabar-sadique/chai-kings-founder",
        },
      ],
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
{ id:1, image:"/images/kamakoti-gallery/DSC06256.JPG" },
{ id:2, image:"/images/kamakoti-gallery/kamakkoti-img16.jpg" },
{ id:3, image:"/images/kamakoti-gallery/kamakoti-7.jpg" },
{ id:4, image:"/images/kamakoti-gallery/kamakoti-img1.jpg" },
{ id:5, image:"/images/kamakoti-gallery/kamakoti-img2.jpg" },
{ id:6, image:"/images/kamakoti-gallery/kamakoti-img3.jpg" },
{ id:7, image:"/images/kamakoti-gallery/kamakoti-img4.jpg" },
{ id:8, image:"/images/kamakoti-gallery/kamakoti-img5.jpg" },
{ id:9, image:"/images/kamakoti-gallery/kamakoti-img6.jpg" },
{ id:10, image:"/images/kamakoti-gallery/kamakoti-img7.jpg" },
{ id:11, image:"/images/kamakoti-gallery/kamakoti-img8.jpg" },
{ id:12, image:"/images/kamakoti-gallery/kamakoti-img10.jpg" },
{ id:13, image:"/images/kamakoti-gallery/kamakoti-img13.jpg" },
{ id:14, image:"/images/kamakoti-gallery/kamakoti-img15.jpg" },
{ id:15, image:"/images/kamakoti-gallery/kamakoti-img17.jpg" },
{ id:16, image:"/images/kamakoti-gallery/kamakoti-img20.jpg" },
{ id:17, image:"/images/kamakoti-gallery/kamakoti-img22.jpg" },
{ id:18, image:"/images/kamakoti-gallery/kamakoti-img23.jpg" },

{ id:19, image:"/images/kamakoti-gallery/kamakoti-img27.jpg" },
{ id:20, image:"/images/kamakoti-gallery/kamakoti-img28.jpg" },
{ id:21, image:"/images/kamakoti-gallery/kamakoti-img29.jpg" },
{ id:22, image:"/images/kamakoti-gallery/kamakoti-img30.jpg" },
{ id:23, image:"/images/kamakoti-gallery/kamakoti-img31.jpg" },
{ id:24, image:"/images/kamakoti-gallery/kamakoti-img32.jpg" },
{ id:25, image:"/images/kamakoti-gallery/kamakoti-img41.jpg" },
{ id:26, image:"/images/kamakoti-gallery/kamakoti-img-42.jpg" },
{ id:27, image:"/images/kamakoti-gallery/kamakoti-img-44.jpg" },
{ id:28, image:"/images/kamakoti-gallery/kamakoti-img46.jpg" },
{ id:29, image:"/images/kamakoti-gallery/kamakoti-img47.jpg" },
{ id:30, image:"/images/kamakoti-gallery/kamakoti-img48.jpg" },
{ id:31, image:"/images/kamakoti-gallery/kamakoti-img50.jpg" },
{ id:32, image:"/images/kamakoti-gallery/kamakoti-img52.jpg" },
{ id:33, image:"/images/kamakoti-gallery/kamakoti-img53.jpg" },
{ id:34, image:"/images/kamakoti-gallery/kamakoti-img-54.jpg" },
{ id:35, image:"/images/kamakoti-gallery/kamakoti-img55.jpg" },
{ id:36, image:"/images/kamakoti-gallery/kamakoti-img56.jpg" },

// { id:37, image:"/images/kamakoti-gallery/kamakoti-img57.JPG" },
{ id:38, image:"/images/kamakoti-gallery/kamakoti-img58.jpg" },
{ id:39, image:"/images/kamakoti-gallery/kamakoti-img59.jpg" },
{ id:40, image:"/images/kamakoti-gallery/kamakoti-img60.jpg" },
{ id:41, image:"/images/kamakoti-gallery/kamakoti-img61.jpg" },
{ id:42, image:"/images/kamakoti-gallery/kamakoti-img62.jpg" },
{ id:43, image:"/images/kamakoti-gallery/kamakoti-img-63.jpg" },
{ id:44, image:"/images/kamakoti-gallery/kamakoti-img9.jpg" },
{ id:45, image:"/images/kamakoti-gallery/kamakoti-img11.jpg" },
{ id:46, image:"/images/kamakoti-gallery/kamakoti-img12.jpg" },
{ id:47, image:"/images/kamakoti-gallery/kamakoti-img-14.jpg" },
{ id:48, image:"/images/kamakoti-gallery/kamakoti-img18.jpg" },
{ id:49, image:"/images/kamakoti-gallery/kamakoti-img19.jpg" },
{ id:50, image:"/images/kamakoti-gallery/kamakoti-img21.jpg" },
{ id:51, image:"/images/kamakoti-gallery/kamakoti-img24.jpg" },
{ id:52, image:"/images/kamakoti-gallery/kamakoti-img25.jpg" },
{ id:53, image:"/images/kamakoti-gallery/kamakoti-img-26.jpg" },
{ id:54, image:"/images/kamakoti-gallery/kamakoti-img33.jpg" },

{ id:55, image:"/images/kamakoti-gallery/kamakoti-img34.jpg" },
{ id:56, image:"/images/kamakoti-gallery/kamakoti-img36.jpg" },
{ id:57, image:"/images/kamakoti-gallery/kamakoti-img40.jpg" },
{ id:58, image:"/images/kamakoti-gallery/kamakoti-img43.jpg" },
{ id:59, image:"/images/kamakoti-gallery/kamakoti-img-45.jpg" },
{ id:60, image:"/images/kamakoti-gallery/kamakoti-img49.jpg" },
{ id:61, image:"/images/kamakoti-gallery/kamakoti-img-51.jpg" },
{ id:62, image:"/images/kamakoti-gallery/kamakoti-img-64.jpg" },
{ id:63, image:"/images/kamakoti-gallery/kamakoti-img65.jpg" },
{ id:64, image:"/images/kamakoti-gallery/kamakoti-img66.jpg" }
];

const registerRef = useRef(null);

const scrollToRegister = () => {
  registerRef.current?.scrollIntoView({ behavior: "smooth" });
};

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
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

      <Helmet>
        <title>
          IIT Madras Director - Super Chennai Arattai with V. Kamakoti
        </title>
        <meta
          name="description"
          content="Super Chennai Arattai: V. Kamakoti, IIT Madras Director and Padma Shri awardee, shares insights on innovation, research, and strengthening India’s tech ecosystem."
        />
        <meta
          property="og:title"
          content="Super Chennai Arattai: V. Kamakoti, IIT Madras Director and Padma Shri awardee, shares insights on innovation, research, and strengthening India’s tech ecosystem."
        />
        <meta
          property="og:description"
          content="Super Chennai Arattai: V. Kamakoti, IIT Madras Director and Padma Shri awardee, shares insights on innovation, research, and strengthening India’s tech ecosystem."
        />
        <meta
          property="og:image"
          content="https://www.superchennai.com/images/images/jahabar-banner-mobile%20(2).jpeg"
        />
        <meta
          property="og:url"
          content="https://www.superchennai.com/images/images/jahabar-banner-mobile%20(2).jpeg"
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/arattai-with-kamakoti/iit-madras-director`}
        />

        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
      </Helmet>

      {/* ================= BANNER ================= */}

      <section
        className="accaodomationBannerSection carquizbanner relative overflow-hidden cursor-pointer akbaralipage"
        onClick={scrollToRegister}
      >
        <img
          className="hidden sm:block w-full"
          src="/images/kamakoti-banner.jpeg"
          alt="Arattai Event"
        />
        <img
          className="block sm:hidden w-full !h-auto"
          src="/images/mobile-banner-kamakoti.jpeg"
          alt="Arattai Event"
        />
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        {/* style={{ backgroundImage: "url('/images/white-bg (1).jpeg')" }} */}
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">Arattai with Kamakotti</h1>
              <h3 className=" text-center"> Arattai with Kamakoti </h3>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Join us for a candid conversation with Padma Shri V. Kamakoti,
                Director of the Indian Institute of Technology Madras — an
                academician and leader at the forefront of India’s technological
                and educational transformation.
              </p>

              <p
                className="text-gray-600 leading-relaxed mb-6 "
                ref={registerRef}
              >
                With decades of experience in research, innovation, and
                institution-building, he has played a pivotal role in shaping
                one of the country’s most dynamic ecosystems for learning, deep
                tech, and entrepreneurship. Under his leadership, Indian
                Institute of Technology Madras continues to push boundaries,
                nurturing ideas that impact not just Chennai, but the nation and
                the world.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                Rooted in Chennai and deeply connected to its academic and
                innovation landscape, his journey reflects the city’s quiet
                strength — a place where knowledge, resilience, and ambition
                come together to create lasting impact.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                In celebrating a leader who embodies knowledge, innovation, and
                purpose, and is shaping the future of India through education
                and innovation, we honour him as the Super Chennai Icon of the
                Month as part of our Super Chennai Arattai series —
                conversations that spotlight the people defining the spirit and
                potential of our city.
              </p>
            </div>

            {/* <div className="flex flex-col items-center text-center space-y-4 py-10">
              <p className="text-rose-600 font-semibold tracking-wide">
                Limited Seats Only • Register Now
              </p>

              <h2 class=" themelink-color formheadingtheme-arattai">
                Join Us for a Conversation with Mr. V. Kamakoti 
              </h2>

              <p className="text-gray-600 text-lg">
                On 30<sup>th</sup> March
              </p>

              <button
                onClick={() => setShowRegisterPopup(true)}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button"
              >
                Register Now
              </button>
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
            and memento-giving moments from the conclave.
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
