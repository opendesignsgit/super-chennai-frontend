import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../config";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
export default function HotshotChennaiContest() {
  const navigate = useNavigate();

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
        payload
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
        err?.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= SEO ================= */}
      {/* <Helmet>
        <title>Hotshot Chennai | Photography Contest</title>
        <meta
          name="description"
          content="Hotshots photography contest by SuperChennai invites photographers to capture Chennai’s everyday stories, evolving cityscapes, and contemporary urban life."
        />
      </Helmet> */}

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
            src="/images/events/hotshots-banner-1.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className="block sm:hidden w-full"
            src="/images/events/hotshots-square-banner.jpg"
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
            <h1>Super Chennai Hotshots</h1>

            <p>
              Super Chennai Hotshots is an open photography call inviting
              passionate photographers, photo bloggers, and hobbyists across the
              city to capture Chennai as it lives and evolves every day.
            </p>
            <p>
              From everyday moments and people to changing streets, modern
              skylines, creative spaces, and new-age city life,Hotshots
              celebrates a Chennai that balances tradition with progress.
            </p>

            <p>
              Selected photographs will be featured on Super Chennai’s digital
              platforms in collaboration with the contributor. The best works of
              the year will be curated into a physical exhibition, showcasing
              the city through the eyes of its people.
            </p>
            <p>
              If you have a lens and a love for Chennai—this is your frame .
            </p>

            <hr />

            <h2 className=" themelink-color formheadingtheme hotshotstext">
              Hotshots
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
