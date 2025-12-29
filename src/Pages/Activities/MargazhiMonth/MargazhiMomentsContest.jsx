import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../config";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
import { useNavigate } from "react-router-dom";

export default function MargazhiMomentsContest() {
  const countryCodes = [
    { code: "+93", name: "Afghanistan" },
    { code: "+355", name: "Albania" },
    { code: "+213", name: "Algeria" },
    { code: "+1-684", name: "American Samoa" },
    { code: "+376", name: "Andorra" },
    { code: "+244", name: "Angola" },
    { code: "+1-264", name: "Anguilla" },
    { code: "+1-268", name: "Antigua and Barbuda" },
    { code: "+54", name: "Argentina" },
    { code: "+374", name: "Armenia" },
    { code: "+297", name: "Aruba" },
    { code: "+61", name: "Australia" },
    { code: "+43", name: "Austria" },
    { code: "+994", name: "Azerbaijan" },
    { code: "+1-242", name: "Bahamas" },
    { code: "+973", name: "Bahrain" },
    { code: "+880", name: "Bangladesh" },
    { code: "+1-246", name: "Barbados" },
    { code: "+375", name: "Belarus" },
    { code: "+32", name: "Belgium" },
    { code: "+501", name: "Belize" },
    { code: "+229", name: "Benin" },
    { code: "+975", name: "Bhutan" },
    { code: "+591", name: "Bolivia" },
    { code: "+387", name: "Bosnia & Herzegovina" },
    { code: "+267", name: "Botswana" },
    { code: "+55", name: "Brazil" },
    { code: "+673", name: "Brunei" },
    { code: "+359", name: "Bulgaria" },
    { code: "+226", name: "Burkina Faso" },
    { code: "+257", name: "Burundi" },
    { code: "+855", name: "Cambodia" },
    { code: "+237", name: "Cameroon" },
    { code: "+1", name: "Canada / Caribbean" },
    { code: "+238", name: "Cape Verde" },
    { code: "+1-345", name: "Cayman Islands" },
    { code: "+236", name: "Central African Republic" },
    { code: "+235", name: "Chad" },
    { code: "+56", name: "Chile" },
    { code: "+86", name: "China" },
    { code: "+57", name: "Colombia" },
    { code: "+269", name: "Comoros" },
    { code: "+242", name: "Congo" },
    { code: "+506", name: "Costa Rica" },
    { code: "+385", name: "Croatia" },
    { code: "+53", name: "Cuba" },
    { code: "+357", name: "Cyprus" },
    { code: "+420", name: "Czech Republic" },
    { code: "+45", name: "Denmark" },
    { code: "+253", name: "Djibouti" },
    { code: "+20", name: "Egypt" },
    { code: "+503", name: "El Salvador" },
    { code: "+240", name: "Equatorial Guinea" },
    { code: "+291", name: "Eritrea" },
    { code: "+372", name: "Estonia" },
    { code: "+251", name: "Ethiopia" },
    { code: "+358", name: "Finland" },
    { code: "+33", name: "France" },
    { code: "+49", name: "Germany" },
    { code: "+30", name: "Greece" },
    { code: "+502", name: "Guatemala" },
    { code: "+852", name: "Hong Kong" },
    { code: "+36", name: "Hungary" },
    { code: "+91", name: "India" },
    { code: "+62", name: "Indonesia" },
    { code: "+98", name: "Iran" },
    { code: "+964", name: "Iraq" },
    { code: "+353", name: "Ireland" },
    { code: "+972", name: "Israel" },
    { code: "+39", name: "Italy" },
    { code: "+81", name: "Japan" },
    { code: "+52", name: "Mexico" },
    { code: "+44", name: "United Kingdom" },
    { code: "+1-787", name: "Puerto Rico" },
    { code: "+1-809", name: "Dominican Republic" },
    { code: "+61", name: "New Zealand" },
    { code: "+234", name: "Nigeria" },
    { code: "+7", name: "Russia / Kazakhstan" },
    { code: "+27", name: "South Africa" },
    { code: "+65", name: "Singapore" },
    { code: "+971", name: "United Arab Emirates" },
    { code: "+1", name: "United States" },
    { code: "+84", name: "Vietnam" },
  ];
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    message: "",
    consent: false,
  });
  const sanitizeInput = (str) => str.replace(/[<>]/g, "");
  const [images, setImages] = useState([null, null, null]);

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

    const updatedImages = [...images];
    updatedImages[index] = {
      file,
      preview: URL.createObjectURL(file),
    };
    setImages(updatedImages);
  };

  // Submit form
  const submitmargazhimasamForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.phone) {
      return toast.error("Please fill all required fields");
    }
    if (!validateEmail(form.email)) {
      return toast.error("Invalid email address");
    }

    const phoneRegex = /^[0-9]{4,15}$/;
    const countryCodeRegex = /^\+\d{1,4}$/;

    if (
      !phoneRegex.test(form.phone) ||
      !countryCodeRegex.test(form.countryCode)
    ) {
      toast.error("Invalid phone number or country code");
      setLoading(false);
      return;
    }

    if (!form.consent) {
      return toast.error("Please accept the declaration");
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
        `${API_BASE_URL_API}/margazhi/submit`,
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Your entry has been submitted successfully!", {
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
            from: "margazhi-sabha",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Margazhi Moments Photography Contest",
    description:
      "Capture the essence of the Margazhi month, from serene mornings to elegant kolams and cultural celebrations. Take part in the Photography Contest and share with us.",
    image: "https://www.superchennai.com/images/events/margazhi-left.jpg",
    startDate: "",
    eventStatus: "https://schema.org/EventMovedOnline",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://www.superchennai.com/contest/margazhi-month-photography-contest",
    },
  };
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Margazhi Month Moments | Photography Contest</title>
        <meta
          name="description"
          content=" Capture the essence of the Margazhi month, from serene mornings to elegant kolams and cultural celebrations. Take part in the Photography Contest and share with us."
        />

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>

        <link
          rel="canonical"
          href="/contest/margazhi-month-photography-contest"
        />
      </Helmet>

      <ToastContainer position="top-center" />

      {/* ================= Banner Section ================= */}

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/banner-margazimoments.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/banner-margazimoments-m.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1></h1>
            {/* <AutoShrinkText
              text="Photography Contest"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            /> */}
            {/* <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Photography Contest</Link>
            </div> */}
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
            <h1>Moments That Define Margazhi</h1>

            <p>
              Margazhi settles over Chennai like a gentle blessing—cool dawns
              with a soft shimmer, music drifting effortlessly through the day,
              and streets adorned with elegant kolams that turn everyday paths
              into works of art. The city lights up with cultural brilliance as
              sabhas host inspiring performances rooted in age-old tradition.
            </p>
            <p>
              This is the time when Chennai’s true spirit comes forward.
              Artists, travellers, and culture enthusiasts gather to experience
              the season’s classical rhythm—its music, its dance, and its deep
              sense of heritage. <br></br>Margazhi brings a natural harmony to
              the city—refreshing breezes, radiant stages, <br></br>and an
              atmosphere that welcomes everyone into its festive warmth. Every
              pathway, every performance, every serene corner reflects the charm
              of this cherished month.
            </p>

            <p>
              Chennai glows with Christmas carols, festive lights, joyful
              gatherings, and the excitement of a new year on the horizon.
              Together, these moments create a season where tradition and
              festivity sit side by side—capturing the true diversity and spirit
              of Chennai.
            </p>

            <p>
              At Super Chennai, we invite you to show us Margazhi through your
              eyes. This season holds moments waiting to be celebrated. Share a
              glimpse, a feeling, a memory—captured through your lens.
            </p>

            <hr />

            <div className="formheadingtheme mt-5 mb-0 pb-0">
              Who Can Participate
            </div>

            <p className="mt-1">
              Pick up your camera or mobile, frame the spirit of Margazhi, and
              share your story through photographs. Winning entries will be
              featured on our page and receive exciting gift vouchers.
            </p>

            <hr />
          </div>
        </div>
      </div>

      {/* ================= Form Section ================= */}

      <section className="relative py-16 bg-gradient-to-br from-[#f6f0f7] via-[#faf7fb] to-[#f1e6f3]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-full">
              <img
                src="/images/events/margazhi-left.jpg"
                alt="Margazhi Moments Chennai"
                className="w-full h-full object-cover min-h-[100px]"
              />
              <div className="absolute inset-0 bg-purple-900/20" />
            </div>

            {/* RIGHT FORM */}
            <div className="relative p-4 md:p-10 overflow-hidden">
              <h2 className=" themelink-color formheadingtheme">
                SHARE YOUR MARGAZHI STORY
              </h2>
              <p className="text-gray-600 mb-6">
                Your lens. Your moment. Chennai’s Margazhi.
              </p>

              <form onSubmit={submitmargazhimasamForm} className="space-y-5">
                {/* Name */}
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
                </div>

                <div className="relative w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>

                  <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
                    {/* Country code */}
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

                    {/* Phone input */}
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="flex-1 px-3 py-2 outline-none text-sm"
                      required
                    />
                  </div>
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
                        className="relative flex items-center justify-center border-2 border-dashed rounded-lg h-20 cursor-pointer hover:border-purple-500 transition bg-gray-50"
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
                  disabled={loading} // prevent multiple clicks
                  className={`w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition theme-button-full ${loading ? "cursor-not-allowed" : ""}`}
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
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
