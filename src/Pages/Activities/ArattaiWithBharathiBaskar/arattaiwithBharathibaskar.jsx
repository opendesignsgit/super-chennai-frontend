import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL_API } from "../../../../config";

export default function ArattaiWithBharathyBhaskar() {
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

      // Updated API route to arattai-bharathi
      await axios.post(
        `${API_BASE_URL_API}/arattai-bharathi/arattai-bharathi/send-otp`,
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

      // Updated API route to arattai-bharathi
      await axios.post(
        `${API_BASE_URL_API}/arattai-bharathi/arattai-bharathi/verify-otp`,
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

      // Updated route target to bharathy
      navigate("/thank-you", { state: { from: "bharathi" } });
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SEO Schema Updated ================= */
  const arattaiSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Arattai with Bharathy Bhaskar",
      description:
        "Bharathy Bhaskar is one of Tamil Nadu's most admired motivational speakers, television personalities, corporate leaders, and authors.",
      image: "https://www.superchennai.com/images/bharathy-innerpage-banner.jpeg",
      startDate: "2026-06-25T09:00",
      endDate: "2026-06-25T23:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Chennai",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Chennai",
          postalCode: "",
          addressCountry: "IN",
        },
      },
      performer: {
        "@type": "Person",
        name: "Bharathy Bhaskar",
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
        { id: 1, image: "/images/bharathi-baskar/bharathi-baskar (1).jpeg" },
        { id: 2, image: "/images/bharathi-baskar/bharathi-baskar (2).jpeg" },
        { id: 3, image: "/images/bharathi-baskar/bharathi-baskar (3).jpeg" },
        { id: 4, image: "/images/bharathi-baskar/bharathi-baskar (4).jpeg" },
        { id: 5, image: "/images/bharathi-baskar/bharathi-baskar (5).jpeg" },
        { id: 6, image: "/images/bharathi-baskar/bharathi-baskar (6).jpeg" },
        { id: 7, image: "/images/bharathi-baskar/bharathi-baskar (7).jpeg" },
        { id: 8, image: "/images/bharathi-baskar/bharathi-baskar (8).jpeg" },
        { id: 9, image: "/images/bharathi-baskar/bharathi-baskar (9).jpeg" },
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
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />

      <Helmet>
        <title>
          Super Chennai Arattai with Bharathy Bhaskar Prominent Speaker
        </title>
        <meta
          name="description"
          content="Bharathy Bhaskar joins Arattai with Super Chennai, a prominent speaker, author and corporate leader inspiring leadership, empowerment and personal growth."
        />
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/arattai-with-bharathy-bhaskar/prominent-speaker`}
        />
      </Helmet>

      {/* ================= BANNER ================= */}
      <section
        className="accaodomationBannerSection relative overflow-hidden cursor-pointer"
        onClick={scrollToRegister}
        ref={registerRef}
      >
        <img
          className="hidden sm:block w-full"
          src="/images/arattai-innerpage-bharathi.jpg"
          alt="Arattai Bharathy Bhaskar Banner"
        />
        <img
          className="block sm:hidden w-full"
          src="/images/arattai-bharathi-mobile.jpg"
          alt="Arattai Bharathy Bhaskar Mobile Banner"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">
                Arattai with Bharathy Bhaskar
              </h1>
              <h3>Arattai with Bharathy Bhaskar</h3>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Bharathy Bhaskar is one of Tamil Nadu's most admired
                motivational speakers, television personalities, corporate
                leaders, and authors. With an outstanding academic foundation
                from Anna University and an accomplished career in the banking
                sector, she has successfully combined professional excellence
                with a passion for inspiring people. Her ability to transform
                everyday experiences into meaningful life lessons has made her a
                respected voice among audiences of all ages.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                What makes Bharathy Bhaskar truly exceptional is her engaging
                communication style. Through her widely appreciated television
                debates, motivational talks, and public interactions, she speaks
                on leadership, personal development, women's empowerment,
                workplace diversity, communication, and work-life balance.
                Blending humor, practical insights, and relatable storytelling,
                she encourages individuals to embrace challenges with confidence
                and pursue success with purpose.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Beyond the stage and television, Bharathy Bhaskar has made
                significant contributions as an independent director, diversity
                and inclusion advocate, and accomplished author. Her
                thought-provoking books and inspiring speeches have motivated
                students, professionals, entrepreneurs, and organizations to
                build stronger values, develop leadership skills, and create a
                positive impact in their communities. Her achievements have
                earned her several prestigious awards and widespread recognition
                for excellence in public speaking and literature.
              </p>
              <p className="text-gray-600 text-justify md:text-left leading-6 mb-6">
                Through Arattai with Bharathy Bhaskar, audiences can experience
                inspiring conversations filled with practical wisdom, powerful
                life lessons, and fresh perspectives. Every session is designed
                to spark meaningful dialogue, encourage lifelong learning, and
                empower individuals to unlock their full potential in both their
                personal and professional journeys.
              </p>
              <p
                className="text-gray-600 text-justify md:text-left leading-6 mb-6 font-semibold text-rose-600"
                ref={registerRef}
              >
                Super Chennai proudly recognizes Bharathy Bhaskar as the Icon of
                the Month, honoring her inspiring journey, outstanding
                achievements, and lasting impact as a motivational speaker,
                corporate leader, television personality, and author.
              </p>
            </div>
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
    </>
  );
}