import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../config";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";


export const partners = [

 
  {
    id: 1,
    image: "/images/credai-logo.jpg",
  },
  {
    id: 1,
    image: "/images/madras-photo-logo.jpg",
  },

  {
    id: 1,
    image: "/images/polar-bear-ice-cream-logo.jpg",
  },
  {
    id: 1,
    image: "/images/radio-logo.jpg",
  },
  {
    id: 1,
    image: "/images/wonderla-logo.jpg",
  },
];

export default function SummerClipsPhtography() {
  const navigate = useNavigate();
  const validateURL = (url) =>
    /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/.*)?$/.test(url);

  const validateProfileInput = (value) => {
    const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/; // profile id
    const urlRegex =
      /^https?:\/\/(www\.)?(linkedin\.com\/in|instagram\.com)\/[a-zA-Z0-9._-]+\/?$/;

    return usernameRegex.test(value) || urlRegex.test(value);
  };

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
    linkedinUrl: "",
    locationUrl: "",
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

    // if (form.linkedinUrl && !validateProfileInput(form.linkedinUrl)) {
    //   toast.error("Please enter a valid LinkedIn URL");
    //   setLoading(false);
    //   return;
    // }

    // if (form.locationUrl && !validateURL(form.locationUrl)) {
    //   toast.error("Please enter a valid Location URL");
    //   setLoading(false);
    //   return;
    // }

    const payload = new FormData();
    payload.append("name", sanitizeInput(form.name));
    payload.append("email", form.email);
    payload.append("phone", form.phone);
    payload.append("countryCode", form.countryCode);
    payload.append("message", sanitizeInput(form.message || ""));
    payload.append("linkedinUrl", form.linkedinUrl);
    payload.append("locationUrl", form.locationUrl);

    uploadedImages.forEach((img) => {
      payload.append("images", img.file);
    });

    try {
      const res = await axios.post(
        `${API_BASE_URL_API}/summer-photography/summer-photography/submit`,
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
            from: "summer-photography-chennai",
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

  const HotshotsSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.superchennai.com/contest/hotshots-photography-contest",
    },
    headline: "Super Chennai HotShots Photography Contest",
    description:
      "Hotshots photography contest by SuperChennai invites photographers to capture Chennai’s everyday stories, evolving cityscapes, and contemporary urban life.",
    image:
      "https://www.superchennai.com/images/events/inner-banner-Hotshots-1.jpeg",
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
    datePublished: "2025-11-01",
  };










  const [isMobile, setIsMobile] = useState(false);
    const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );
  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1502220,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };


  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);



  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet>
        <title>
          It’s Hot, It’s Happening. Chennai Summer Photography Contest
        </title>
        <meta
          name="description"
          content="Capture Super Chennai’s vibrant summer—beaches, streets, food and etc. Enter the Summer Photography Contest 2026 with your camera or phone. Submit today and win!"
        />
        <meta
          property="og:title"
          content="Capture Super Chennai’s vibrant summer—beaches, streets, food and etc. Enter the Summer Photography Contest 2026 with your camera or phone. Submit today and win!"
        />
        <meta
          property="og:description"
          content="Capture Super Chennai’s vibrant summer—beaches, streets, food and etc. Enter the Summer Photography Contest 2026 with your camera or phone. Submit today and win!"
        />
        <meta
          property="og:image"
          content="https://www.superchennai.com/images/og-image/hotshot-og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.superchennai.com/contest/hotshots-photography-contest"
        />

        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/contest/chennai-summer-photography-contest`}
        />

        <script type="application/ld+json">
          {JSON.stringify(HotshotsSchema)}
        </script>
      </Helmet>

      <ToastContainer position="top-center" />

      {/* ================= Banner Section ================= */}

      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        {/* Images */}
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/Photogrpahy-content-inner.jpeg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className="block sm:hidden w-full"
            src="/images/Photogrpahy-content-inner-mobile.jpeg"
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

            {/*============= PARTNERS ================ */}

      <div className="NewsLetterPage ">
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Partners</h4>
            </div>

            <div className="exploreSldierSection">
              {(isMobile && partners.length >= 3) ||
              (!isMobile && partners.length > 3) ? (
                <Slider {...settings}>
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer px-2"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="h-[200px] object-contain partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center gap-8 flex-wrap">
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer"
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="h-[200px] object-contain partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= Intro Content ================= */}
      <div
        className="visitIntroParaSection detailIntro"
        style={{ paddingBottom: "0" }}
      >
        <div className="container max-w-7xl mx-auto ">
          <div className="workIntro">
            <h1>Photogrpahy contest</h1>

            <p>
              Summer in Chennai isn't just about the soaring temperatures—it's
              about the moments that make the season unforgettable. It's the
              glow of a beach sunset after a long day, the buzz of crowded
              streets, the colours of local markets, the comfort of a chilled
              drink, and the memories made under endless blue skies.
            </p>

            <p>
              Every corner of the city tells a different story. From iconic
              landmarks and coastal views to neighbourhood hangouts and everyday
              scenes, Chennai comes alive in its own unique way during summer.
              The city's energy, people, culture, and colours create countless
              moments worth capturing.
            </p>
            <p>
              Whether you're exploring familiar streets, discovering hidden
              gems, or simply noticing beauty in everyday life, this is your
              chance to showcase your perspective. Through your lens, capture
              the sights, emotions, and experiences that define summer in
              Chennai.
            </p>
            <p>
              No professional setup required. No perfect frame expected. Just
              authentic moments, creative storytelling, and your unique view of
              the city.
            </p>
            <p>
              Show us the Chennai that lives in your camera roll—the vibrant,
              the unexpected, the nostalgic, and the unforgettable. Let every
              photograph tell a story and celebrate the spirit of summer in the
              city.
            </p>

            <hr />

            <h2 className=" themelink-color formheadingtheme hotshotstext">
              Photogrpahy contest
            </h2>
            <div>
              <p className="everydaytext">Everyday stories. Evolving city.</p>
            </div>
          </div>
        </div>
      </div>



      {/* ================= FORM ================= */}

      <section className="relative py-16 bg-gradient-to-br from-[#f6f0f7] via-[#faf7fb] to-[#f1e6f3]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-full">
              <img
                src="/images/superchennai-photgraphy-left.jpeg"
                alt="Margazhi Moments Chennai"
                className="w-full h-full object-cover min-h-[100px]"
              />
              <div className="absolute inset-0 bg-purple-900/20" />
            </div>

            {/* RIGHT FORM */}
            <div className="relative p-4 md:p-10 overflow-hidden">
              <h2 className=" themelink-color formheadingtheme">
                SHARE YOUR Photogrpahy
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

                <div className="flex gap-2">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Instagram ID / URL
                    </label>
                    <input
                      type="text"
                      name="linkedinUrl"
                      value={form.linkedinUrl}
                      onChange={handleChange}
                      placeholder="Instagram ID / URL"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Enter Photo Location
                    </label>
                    <input
                      type="text"
                      name="locationUrl"
                      value={form.locationUrl}
                      onChange={handleChange}
                      placeholder="Location"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
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
