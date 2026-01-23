import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  // get email from query parameters
  const email = new URLSearchParams(location.search).get("email");

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/verify-otp",
        { email, otp }
      );

      setMessage(res.data.message);

      // save token in localStorage (optional)
      localStorage.setItem("token", res.data.token);

      setTimeout(() => navigate("/questions"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP!");
    }
  };

  return (
    <>
      {/* ---------- Banner ---------- */}
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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Verify OTP</h2>

          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Verify OTP
            </button>
          </form>

          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
}
