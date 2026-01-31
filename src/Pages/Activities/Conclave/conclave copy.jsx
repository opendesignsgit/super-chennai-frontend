import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../config";
import { useEffect, useRef } from "react";

const AccomodSections = [
  {
    title: "THE VISION",
    description:
      "Super Chennai is a citizen-led initiative, supported by CREDAI, with a clear vision — to bring diverse stakeholders together to reimagine Chennai’s urban future. By fostering informed dialogue and collaborative thinking, the initiative aims to develop practical, inclusive, and forward-looking solutions rooted in the city’s unique strengths.",
    image: "/images/Work-Images/SubPages/Salary-Ranges-by-Industry.jpg",
    //   linkText: "Explore More",
    linkUrl: "/digital",
  },
  {
    title: "THE GOAL",
    description:
      " The primary goal of the conclave is to develop a comprehensive Super Chennai Manifesto — a clear and actionable roadmap for the city’s future.This manifesto will be presented to all political parties contesting the upcoming Assembly elections, ensuring that Chennai’s long-term priorities remain central to public and policy conversations",
    image: "/images/Work-Images/SubPages/Salary-Ranges-by-Industry.jpg",
    //   linkText: "Explore More",
    linkUrl: "/education",
  },
];

export default function conclave() {
  const navigate = useNavigate();
  const [scrollDir, setScrollDir] = useState("left");

  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+971", name: "UAE" },
    { code: "+65", name: "Singapore" },
  ];

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    message: "",
    consent: false,
  });

  const MAX_IMAGES = 5;

  const [images, setImages] = useState(Array(MAX_IMAGES).fill(null));
  const sanitizeInput = (str) => str.replace(/[<>]/g, "");
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleImageChange = (index, file) => {
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      toast.error("Only PNG / JPG / JPEG files allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Each image must be less than 2 MB");
      return;
    }

    const updated = [...images];
    updated[index] = {
      file,
      preview: URL.createObjectURL(file),
    };
    setImages(updated);
  };

  /* ================= SUBMIT ================= */
  const submitHotshotChennaiForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill all required fields");
      setLoading(false);
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Invalid email address");
      setLoading(false);
      return;
    }

    if (!form.consent) {
      toast.error("Please accept the declaration");
      setLoading(false);
      return;
    }

    const uploadedImages = images.filter(Boolean);
    if (uploadedImages.length === 0) {
      toast.error("Please upload at least one image");
      setLoading(false);
      return;
    }

    const payload = new FormData();
    payload.append("name", sanitizeInput(form.name));
    payload.append("email", form.email);
    payload.append("phone", form.phone);
    payload.append("countryCode", form.countryCode);
    payload.append("message", sanitizeInput(form.message || ""));

    uploadedImages.forEach((img) => {
      payload.append("images", img.file);
    });

    try {
      const res = await axios.post(
        `${API_BASE_URL_API}/all/hotshot-chennai/submit`,
        payload,
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Your Hotshot Chennai entry has been submitted!", {
          position: "top-center",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          message: "",
          consent: false,
        });

        setImages([null, null, null]);
        navigate("/thank-you", {
          state: {
            from: "hotshot-chennai",
          },
        });
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const infoData = [
    {
      title: "LIVE",
      title1: "A City That Works for Everyone",
      desc: "Chennai’s growth must be inclusive, resilient, and equitable. This pillar focuses on building a city that delivers quality of life for all residents.Key areas include sustainable mobility, affordable housing, flood resilience, clean public spaces, strong civic governance, and neighbourhoods designed for safety and accessibility",
      icon: "/images/Visit-Images/icons/Scenic-Relaxing.svg",
      imgAlt: "attractions chennai",
    },

    {
      title: "VISIT",
      title1: "Crafting a World-Class Visitor Experience",
      desc: "With its rich heritage, vibrant culture, and natural coastline, Chennai has the potential to become a global cultural destination.This pillar explores how the city can integrate heritage, tourism, hospitality, and public spaces to offer a seamless, memorable visitor experience that reflects Chennai’s unique character.",
      icon: "/images/Visit-Images/icons/Buzzing-City-Life.svg",
      imgAlt: "VISIT",
    },

    {
      title: "WORK",
      title1: "Becoming India’s Talent Capital",
      desc: "Chennai produces thousands of skilled graduates and hosts strong R&D capabilities across industries. However, perception gaps and lifestyle factors continue to drive talent away.This pillar focuses on reshaping Chennai’s image as an opportunity-rich metro by enhancing career pathways, work-life balance, cultural ecosystems, and industry-academia collaboration.",
      icon: "/images/Visit-Images/icons/Where-Flavour-Meets-Culture.svg",
      imgAlt: "WORK",
    },

    {
      title: "INVEST",
      title1: "Reimagining Chennai as a Launchpad for Future Business",

      desc: "With deep manufacturing expertise, strategic location, and economic stability, Chennai is well-positioned to attract global investment.This pillar examines how the city can strengthen ease of doing business, boost investor confidence, and position itself as South Asia’s most compelling and future-ready investment destination.",
      icon: "/images/Visit-Images/icons/Weekend-Getaways-Chennai-Style.svg",
      imgAlt: "INVEST",
    },
    {
      title: "INNOVATE",
      title1: "Becoming India’s Deep-Tech Hub for the World",

      desc: "Chennai has strong technical talent and premier research institutions, yet lacks the visibility and ecosystem density of leading global innovation hubs.This pillar explores how the city can nurture entrepreneurship, attract risk capital, strengthen innovation networks, and support deep-tech ventures to scale globally from Chennai",
      icon: "/images/Visit-Images/icons/Timeless-Chennai-Where-Culture-Evolves-Gracefully.svg",
      imgAlt: "best temple in chennai",
    },
  ];

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("left");
      } else {
        setScrollDir("right");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet>
        <title>Hotshot Chennai | Photography Contest</title>
        <meta
          name="description"
          content="Hotshots photography contest by SuperChennai invites photographers to capture Chennai’s everyday stories, evolving cityscapes, and contemporary urban life."
        />
        <meta
          property="og:title"
          content="Hotshot Chennai | Photography Contest"
        />
        <meta
          property="og:description"
          content="Hotshots photography contest by SuperChennai invites photographers to capture Chennai’s everyday stories, evolving cityscapes, and contemporary urban life."
        />
        <meta
          property="og:image"
          content="https://www.superchennai.com/images/og-image/hotshot-og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.superchennai.com/contest/hotshots-photography-contest"
        />
      </Helmet>

      <ToastContainer position="top-center" />

      {/* ================= Banner Section ================= */}

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        {/* Images */}
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/events/inner-banner-Hotshots-1.jpeg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className="block sm:hidden w-full"
            src="/images/events/hotshots-square-banner1.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 to-[#8b3c82]/90 z-10"></div> */}

        {/* Text Content */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            {/* <AutoShrinkText
              text="Hotshots Chennai Moments"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />

            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Hotshots Chennai Moments</Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* ================= Intro Content ================= */}
      <div
        className="visitIntroParaSection detailIntro"
        style={{ paddingBottom: "0" }}
      >
        <div className="container max-w-7xl mx-auto ">
          <div className="workIntro">
            <h1>ABOUT THE CONCLAVE</h1>

            <p>
              The Super Chennai Conclave is a one-day strategic gathering
              designed to shape the future of Chennai through collaboration,
              insight, and action.
            </p>
            <p>
              It brings together policymakers, industry leaders, urban planners,
              academics, and subject-matter experts to collectively address the
              city’s most urgent urban challenges and unlock new opportunities
              for sustainable growth.
            </p>

            <p>
              This conclave goes beyond discussion — it is focused on outcomes
              that can influence policy, investment, and long-term city
              transformation.
            </p>

            <hr />

            <h2 className=" themelink-color formheadingtheme hotshotstext p-5">
              WHY SUPER CHENNAI
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-justify">
              <p className="everydaytext text-center">
                Chennai has always been a city of substance — resilient,
                industrious, and culturally rich. It has strong infrastructure,
                improving public transit, and deep economic foundations.
              </p>

              <p className="everydaytext text-center">
                Yet challenges such as flooding, housing inequity, congestion,
                cleanliness, talent migration, and limited global visibility
                continue to impact its growth potential.
              </p>

              <p
                className="everydaytext text-center "
                style={{ width: "100%" }}
              >
                The Super Chennai Conclave creates a shared platform to ask an
                important question:
              </p>

              <p
                className="font-semibold text-center "
                style={{ width: "100%" }}
              >
                How can Chennai evolve into a world-class, future-ready city
                that works for everyone?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*--------------- PILLERS SUPERCHENNAI----------------- */}

      <div className="AccodomationPageBecameVolunteerBg">
        <div className="container max-w-7xl mx-auto px-4">
          {AccomodSections.map((section, index) => (
            <div className="AccodoSectionFLex" key={index}>
              {index % 2 === 0 ? (
                <>
                  <img src={section.image} alt={section.title} />
                  <div className="AccodContentsSection">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="AccodContentsSection1">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                  <img src={section.image} alt={section.title} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="visitIntroParaSection detailIntro ">
        <div className="workIntro">
          <h3 className="newupdatewhychennai">
            FIVE PILLARS OF SUPER CHENNAI{" "}
          </h3>
          <p>
            The conclave is anchored around five interconnected pillars that
            define a truly world-class city.
          </p>

          <div className="section-container container max-w-7xl mx-auto px-4">
            <div className="section-left-image">
              <img
                src="/images/Visit-Images/standup-show.jpg"
                alt="Main Side Visual"
              />
            </div>

            <div className="section-right-content">
              {infoData.map((item, index) => (
                <div className="info-item-block" key={index}>
                  <img
                    src={item.icon}
                    alt={item.imgAlt}
                    className="info-icon"
                  />
                  <div className="info-text-block">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Who Can Benefit ================= */}


      {/* ================= Who Can Benefit ================= */}
{/* ================= Who Can Benefit ================= */}

<section className="py-16 bg-white">
  <div className="container max-w-7xl mx-auto px-4">
    <div className="max-w-6xl mx-auto text-center">

      <h2 className="themelink-color formheadingtheme mb-12">
        Who Can Benefit
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/Innovate-Images/SubPages/Icons/Why%20Chennai%20is%20Becoming%20a%20Robotics%20Powerhouse.svg"
            alt="Policymakers"
            className="w-14 h-14 mb-4"
          />
          <p>Policymakers and governance leaders</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/Innovate-Images/SubPages/Icons/Why%20Chennai%20is%20Becoming%20a%20Robotics%20Powerhouse.svg"
            alt="Business Leaders"
            className="w-14 h-14 mb-4"
          />
          <p>Industry and business leaders</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/Innovate-Images/SubPages/Icons/Why%20Chennai%20is%20Becoming%20a%20Robotics%20Powerhouse.svg"
            alt="Urban Planners"
            className="w-14 h-14 mb-4"
          />
          <p>Urban planners and architects</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/Innovate-Images/SubPages/Icons/Why%20Chennai%20is%20Becoming%20a%20Robotics%20Powerhouse.svg"
            alt="Academics"
            className="w-14 h-14 mb-4"
          />
          <p>Academics and researchers</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/Innovate-Images/SubPages/Icons/Why%20Chennai%20is%20Becoming%20a%20Robotics%20Powerhouse.svg"
            alt="Entrepreneurs"
            className="w-14 h-14 mb-4"
          />
          <p>Entrepreneurs and innovators</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/Innovate-Images/SubPages/Icons/Why%20Chennai%20is%20Becoming%20a%20Robotics%20Powerhouse.svg"
            alt="Community Leaders"
            className="w-14 h-14 mb-4"
          />
          <p>Civic and community leaders</p>
        </div>

      </div>

    </div>
  </div>
</section>



      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">

            <h2 className="themelink-color formheadingtheme">
              JOIN THE CONVERSATION
            </h2>

            <p className="font-semibold">
              150 Invitees | One Day | One Shared Goal
            </p>

            <p className="  text-center ">
              The Super Chennai Conclave is a collaborative platform where ideas
              translate into action. Participants will engage in expert panels,
              strategic discussions, and collective manifesto development aimed
              at making Chennai future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}

      <section className="relative py-16 bg-gradient-to-br from-[#f6f0f7] via-[#faf7fb] to-[#f1e6f3]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-full">
              <img
                src="/images/events/superchennai-hotshots-left.jpg"
                alt="Margazhi Moments Chennai"
                className="w-full h-full object-cover min-h-[100px]"
              />
              <div className="absolute inset-0 bg-purple-900/20" />
            </div>

            {/* RIGHT FORM */}
            <div className="relative p-4 md:p-10 overflow-hidden">
              <h2 className=" themelink-color formheadingtheme">
                SHARE YOUR HOTSHOTS
              </h2>
              <p className="text-gray-600 mb-6">
                Upload your best Chennai moment and share the story behind your
                captivating photo.
              </p>

              <form
                onSubmit={submitHotshotChennaiForm}
                className="space-y-5 mt-6"
              >
                <div className="flex gap-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email ID *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email ID *"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="relative w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="bg-gray-100 px-3 py-2 border-r outline-none text-sm"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className="flex-1 px-3 py-2 outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Images (Up to 5)
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <label
                        key={i}
                        className="border-2 border-dashed rounded-lg h-24 flex items-center justify-center cursor-pointer"
                      >
                        {images[i]?.preview ? (
                          <img
                            src={images[i].preview}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-sm text-gray-400">
                            Image {i + 1}
                          </span>
                        )}
                        <input
                          type="file"
                          className="hidden"
                          accept=".jpg,.jpeg,.png"
                          onChange={(e) =>
                            handleImageChange(i, e.target.files[0])
                          }
                        />
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    PNG / JPG / JPEG • Max 2 MB per image
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message / Description (Optional)
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message (Optional)"
                    className="border p-3 rounded-lg w-full"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                  />

                  <p className="text-sm text-gray-600">
                    I confirm that the uploaded photographs are my original work
                    and can be displayed on this website and related platforms.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold theme-button-full "
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <img
          src="/images/events/dev-bg.jpg"
          alt=""
          className="
    pointer-events-none
    select-none
    absolute
    bottom-0 right-0 w-100 md:w-100
    opacity-20
    
  "
        />
      </section>
    </>
  );
}
