import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function AuthRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subscribed: false,
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const safeValue =
      type === "text" || type === "email"
        ? value.replace(/<[^>]*>?/gm, "")
        : value;
    setForm({ ...form, [name]: type === "checkbox" ? checked : safeValue });
  };

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/send-otp-mobile", {
        phone: form.phone,
        name: form.name,
      });

      toast.success("OTP sent");
      setOtpSent(true);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!form.name?.trim()) return "Name is required";
    if (!form.phone?.trim()) return "Phone is required";
    if (!/^\d{10}$/.test(form.phone)) return "Enter valid 10-digit phone";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    if (!otp || otp.length !== 6) {
      toast.error("Enter valid OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/register-with-otp", {
        name: form.name,
        phone: form.phone,
        otp,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Registered successfully");
      navigate("/questions");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Test Your Smarts - Take the Ultimate Fun Super Chennai Quiz
        </title>
        <meta
          name="description"
          content="The Super Chennai Quiz is here on Dec 7, 2025! Test your knowledge across sports, music, food, and Chennai. Exciting prizes await—team up and enjoy an epic evening."
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/contests/chennai-quiz`}
        />
      </Helmet>

      {/* ---------- Banner ---------- */}
      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/quiz-banner.jpeg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/quiz-banner.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Day to deliver-quiz</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Day to deliver-quiz</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/110 backdrop-blur-sm">
        <div className="flex items-center carryformPageSection ">
          <div className="carryFormPage !max-w-[800px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white  um-form-section">
            <button
              onClick={() => {
                if (window.history.length > 1) navigate(-1);
                else navigate("/");
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full 
                     bg-gray-100 hover:bg-gray-200 
                     flex items-center justify-center 
                     text-gray-600 hover:text-black shadow-md"
            >
              ✕
            </button>
            <ToastContainer />
            <h2 className=" text-center">Registration form</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Full Name *"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  name="phone"
                  placeholder="Phone Number *"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <button
                type="button"
                onClick={handleSendOtp}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg min-h-[44px] w-[100%] mb-2 gradient-primarySuperchennai"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>

              {otpSent && (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-center tracking-widest mt-4"
                />
              )}

              <div className="flex justify-center mt-4">
            
                {otpSent && (
                  <div className="flex justify-center  min-h-[44px] w-[100%]">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-600 text-white py-2 rounded-lg gradient-primarySuperchennai"
                    >
                      {loading ? "Processing..." : "Verify & Register"}
                    </button>
                  </div>
                )}
              </div>
            </form>

            <p className="text-center mt-4 text-gray-700">
              Already registered?{" "}
              <button
                onClick={() => navigate("/day-to-deliver-quiz/login")}
                className="text-indigo-600 font-semibold hover:underline themelink-color "
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
