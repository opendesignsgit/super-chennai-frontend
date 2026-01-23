import { useState } from "react";
import axios from "axios";
import { API_BASE_URL_API } from "../../../config";
import { Link, useNavigate } from "react-router-dom";
export default function LoginOtp() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("input");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isPhone = (value) => /^\d{10}$/.test(value);
  const [loading, setLoading] = useState(false);

  // SEND OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      let res;
      if (isEmail(identifier)) {
        res = await axios.post(`${API_BASE_URL_API}/auth/send-otp`, {
          email: identifier,
        });
      } else if (isPhone(identifier)) {
        res = await axios.post(`${API_BASE_URL_API}/auth/send-otp-mobile`, {
          phone: identifier,
        });
      } else {
        return setError("Enter a valid email or 10-digit phone number");
        setLoading(false);
      }

      setMessage(res.data.message);
      setStep("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      let res;
      if (isEmail(identifier)) {
        res = await axios.post(`${API_BASE_URL_API}/auth/verify-otp`, {
          email: identifier,
          otp,
        });
      } else {
        res = await axios.post(`${API_BASE_URL_API}/auth/verify-otp-mobile`, {
          phone: identifier,
          otp,
        });
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("tokenTime", Date.now());

      setMessage("OTP Verified Successfully!");
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            <h1>Super Chennai Trivia 2025</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Super Chennai Trivia 2025</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/110 backdrop-blur-sm">
           <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 w-9 h-9 rounded-full 
             bg-gray-100 hover:bg-gray-200 
             flex items-center justify-center text-gray-600 hover:text-black"
          >
            ✕
          </button>
        <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 animate-fadeIn">
     
          {/* HEADER */}
          <div className="text-center mb-6">
            <div className="mx-auto w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#a34493]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                />
              </svg>
            </div>

            <h2 className="text-2xl themelink-color  text-gray-800   themelink-color formheadingtheme hotshotstext">
              {step === "input" ? "Login with OTP" : "Verify OTP"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {step === "input"
                ? "Enter your email or mobile number"
                : "Enter the 6-digit OTP sent to you"}
            </p>
          </div>

          {/* INPUT STEP */}
          {step === "input" && (
            <>
              <form onSubmit={handleSendOtp} className="space-y-4">
                <input
                  type="text"
                  placeholder="Email or Mobile"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 text-sm 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />

                <button
                  className="w-full rounded-xl bg-indigo-600 py-3 
                       text-white font-medium hover:bg-indigo-700 
                       transition disabled:opacity-50 theme-button-full"
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/auth-register"
                  className="font-semibold text-indigo-600 hover:underline themelink-color"
                >
                  Register
                </Link>
              </p>
            </>
          )}

          {/* OTP STEP */}
          {step === "otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 text-center tracking-widest text-lg 
                     focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <button
                className="w-full rounded-xl bg-green-600 py-3 
                     text-white font-medium hover:bg-green-700 
                     transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep("input");
                  setOtp("");
                  setIdentifier("");
                }}
                className="block w-full text-center text-sm text-gray-500 hover:underline"
              >
                Change Email / Phone
              </button>
            </form>
          )}

          {/* MESSAGES */}
          {message && (
            <p className="mt-4 text-center text-sm text-green-600">{message}</p>
          )}
          {error && (
            <p className="mt-4 text-center text-sm text-red-600">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}
