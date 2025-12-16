import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MargazhiMomentsContest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [images, setImages] = useState([null, null, null]);

  // ----------------------------
  // Helpers
  // ----------------------------
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
  // ----------------------------
  // Image Upload
  // ----------------------------
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

    const updatedImages = [...images];
    updatedImages[index] = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImages(updatedImages);
  };

  // ----------------------------
  // Submit
  // ----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      return toast.error("Please fill all required fields");
    }

    if (!validateEmail(form.email)) {
      return toast.error("Invalid email address");
    }

    if (!form.consent) {
      return toast.error("Please accept the declaration");
    }

    const uploadedImages = images.filter(Boolean);
    if (uploadedImages.length === 0) {
      return toast.error("Please upload at least one image");
    }

    toast.success("Your entry has been submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    });

    setImages([null, null, null]);
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Margazhi Moments – Photography Contest 2025 | Super Chennai
        </title>
        <meta
          name="description"
          content="Capture the spirit of Margazhi in Chennai. Participate in Margazhi Moments Photography Contest 2025 and showcase music, kolams, culture, and heritage."
        />
      </Helmet>

      <ToastContainer position="top-center" />

      {/* ================= Banner Section ================= */}

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/triva-contest-small.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Triva 2025</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Super Chennai Triva 2025</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Intro Content ================= */}
      <div
        className="visitIntroParaSection detailIntro"
        style={{ paddingBottom: "0" }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workIntro">
            <h1>Margazhi Moments – Photography Contest 2025</h1>

            <p>
              Misty Margazhi mornings, soft music drifting through the air,
              streets adorned with beautiful kolams, and sabhas alive with
              rhythm—Chennai truly comes alive during this season. It is the one
              time of the year when the city feels calm, cultural, and quietly
              magical.
            </p>

            <p style={{ textAlign: "left", width: "100%" }}>
              <p>
                Margazhi also draws visitors from across the world to experience
                Chennai’s rich traditions, classical music, dance, and heritage.
                With cooler days and peaceful nights, every corner of the city
                becomes a moment worth capturing.
              </p>
            </p>

            <hr />

            <p style={{ textAlign: "left", width: "100%" }}>
              <div style={{ marginTop: "10px" }}>
                <strong
                  className="fontforstyle"
                  style={{ color: "#995098", fontWeight: "bolder" }}
                >
                  Who Can Participate
                </strong>
                <p>
                  Pick up your camera or mobile, frame the spirit of Margazhi,
                  and share your story through photographs. Winning entries will
                  be featured on our page and receive exciting gift vouchers.
                </p>
              </div>
            </p>

            <hr />

            <p style={{ textAlign: "left", width: "100%" }}>
              <p>
                Margazhi draws visitors from across the world to experience
                Chennai’s rich traditions, classical music, dance, and heritage.
                This contest is your chance to freeze those fleeting moments in
                time.
              </p>

              <p>
                Pick up your camera, frame the spirit of Margazhi, and share
                your story through photographs. Let the city speak through your
                lens.
              </p>
            </p>
          </div>
        </div>
      </div>

      {/* ================= Form Section ================= */}

      <section className="relative py-16 bg-gradient-to-br from-[#f6f0f7] via-[#faf7fb] to-[#f1e6f3]">
        
        <div className="container max-w-7xl mx-auto px-4">
          {/* <div className="grid grid-cols-1 md:grid-cols-2  items-center bg-white rounded-2xl shadow-xl overflow-hidden"> */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* LEFT IMAGE */}
            <div className="relative h-full">
              <img
                src="/images/events/margazhi-left.png"
                alt="Margazhi Moments Chennai"
                className="w-full h-full object-cover min-h-[500px]"
              />
              <div className="absolute inset-0 bg-purple-900/20" />
            </div>

            {/* RIGHT FORM */}
            {/* <div className="p-4 md:p-10"> */}
            <div className="relative p-4 md:p-10 overflow-hidden">
              {/* Background Image (Bottom Right) */}

              <h2 className=" themelink-color chennaiInvestmentsHeading">
                Submit Your Entry
              </h2>
              <p className="text-gray-600 mb-6">
                Share your Margazhi moments through your lens.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                    required
                  />
                </div>

                {/* Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Images (Up to 3)
                  </label>

                  <div className="grid grid-cols-3 gap-4">
                    {[0, 1, 2].map((index) => (
                      <label
                        key={index}
                        className="relative flex items-center justify-center border-2 border-dashed rounded-lg h-28 cursor-pointer hover:border-purple-500 transition bg-gray-50"
                      >
                        {images[index]?.preview ? (
                          <img
                            src={images[index].preview}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 16l4-4a3 3 0 014.243 0L15 16m0 0l4-4a3 3 0 014.243 0L21 16m-9-6v6"
                              />
                            </svg>
                            <span className="text-xs">Image {index + 1}</span>
                          </div>
                        )}

                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          className="hidden"
                          onChange={(e) =>
                            handleImageChange(index, e.target.files[0])
                          }
                        />
                      </label>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    PNG / JPG / JPEG • Max 2 MB per image
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message / Description (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us the story behind your photo"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-600">
                    I confirm that the uploaded photographs are my original work
                    and can be displayed on this website and related platforms.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition theme-button-full"
                >
                  Submit
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
