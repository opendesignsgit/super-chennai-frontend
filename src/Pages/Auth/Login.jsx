import { useState } from "react";
import axios from "axios";
import { API_BASE_URL_API } from "../../../config";
import { useNavigate ,Link} from "react-router-dom";


export default function LoginOtpModal({ open, onClose }) {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("input");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const isEmail = (v) => /\S+@\S+\.\S+/.test(v);
  const isPhone = (v) => /^\d{10}$/.test(v);

  // SEND OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
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
        setError("Enter valid email or 10-digit phone");
        return;
      }

      setMessage(res.data.message);
      setStep("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        isEmail(identifier)
          ? `${API_BASE_URL_API}/auth/verify-otp`
          : `${API_BASE_URL_API}/auth/verify-otp-mobile`,
        isEmail(identifier)
          ? { email: identifier, otp }
          : { phone: identifier, otp }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("tokenTime", Date.now());

      setMessage("Login successful!");
      setTimeout(() => {
        onClose();
        navigate("/questions");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative animate-fadeIn p-5">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-center themelink-color formheadingtheme">
          {step === "input" ? "LOGIN WITH OTP" : "VERIFY OTP"}
        </h2>

        {step === "input" && (
            <>
          <form onSubmit={handleSendOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Email or Mobile"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg theme-button-secondary-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>

            <p className="text-center mt-4 text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline themelink-color"
            >
              Register
            </Link>
          </p>
            
            </>


          
        )}

        {step === "otp" && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
            <button
              className="w-full bg-green-600 text-white py-2 rounded-lg theme-button-secondary-full"
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
              className="w-full text-sm text-gray-600 underline"
            >
              Change Email / Phone
            </button>
          </form>
        )}

        {message && <p className="text-green-600 mt-3">{message}</p>}
        {error && <p className="text-red-600 mt-3">{error}</p>}
      </div>
    </div>
  );
}
