import { useState } from "react";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../../config";
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
      setTimeout(() => navigate("/questions"), 1200);
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

      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white um-form-section">
          <h2 className="text-center mb-4">
            {step === "input" ? "Login with OTP" : "Verify OTP"}
          </h2>

          {/* INPUT FIELD */}
          {step === "input" && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter email or mobile number"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 theme-button cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </div>
            </form>
          )}

          {/* OTP FORM */}
          {step === "otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                maxLength={6}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 cursor-pointer"
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
                className="w-full mt-2 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                Change Email/Phone
              </button>
            </form>
          )}

          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
}
