import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../../config";
import PasswordInput from "../Components/PasswordInput";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // safety: prevent repeated submits (cooldown)

  const cooldownRef = useRef(false);

  useEffect(() => {
    // basic token sanity check (client-side only)
    if (!token || typeof token !== "string" || token.length < 10) {
      setError("Invalid reset token.");
    }
  }, [token]);

  // ============================
  // Sanitizer (client-side)
  // ============================
  // Remove HTML tags, control chars, and trim; limit length.
  function sanitizeInput(str = "") {
    // 1) remove HTML tags
    let s = str.replace(/<[^>]*>/g, "");
    // 2) remove non-printable control characters (except common whitespace)
    s = s.replace(/[\x00-\x1F\x7F]/g, "");
    // 3) normalize spaces & trim
    s = s.replace(/\s+/g, " ").trim();
    // 4) enforce max length (avoid huge payload)
    const MAX = 128;
    if (s.length > MAX) s = s.slice(0, MAX);
    return s;
  }

  // ============================
  // Password validation (policy)
  // Customize rules as needed
  // ============================
  function validatePassword(pw) {
    if (!pw) return "Password is required.";
    if (pw.length < 8) return "Password must be at least 8 characters.";
    if (pw.length > 128) return "Password is too long.";
    // require at least 3 of: lowercase, uppercase, number, symbol
    const checks = [
      /[a-z]/.test(pw),
      /[A-Z]/.test(pw),
      /[0-9]/.test(pw),
      /[^A-Za-z0-9]/.test(pw),
    ];
    const passed = checks.filter(Boolean).length;
    if (passed < 2)
      return "Use a mix of letters, numbers and symbols for a stronger password.";
    // disallow common weak passwords (short list client-side)
    const banned = ["password", "12345678", "qwerty", "admin", "letmein"];
    if (banned.includes(pw.toLowerCase()))
      return "Please choose a stronger password.";
    return null;
  }

  // ============================
  // Submit handler
  // ============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (cooldownRef.current) {
      toast.error("Please wait a moment before trying again.");
      return;
    }

    // sanitize then validate
    const safePassword = sanitizeInput(newPassword);
    const validationError = validatePassword(safePassword);
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }

    // client-side: mark submitting + cooldown
    setSubmitting(true);
    cooldownRef.current = true;
    // 4-second cooldown to prevent multiple rapid submits (adjust as needed)
    setTimeout(() => (cooldownRef.current = false), 4000);

    try {
      // DO NOT log sensitive values like token or password
      const payload = {
        token: token, // token should be short-lived and single-use on server
        newPassword: safePassword,
      };

      // If your API expects credentials via header (JWT) include it in axios defaults
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

      const res = await axios.post(
        `${API_BASE_URL_API}/auth/reset-password`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          // optional: 10s timeout
          timeout: 10000,
        }
      );

      setMessage(res.data?.message || "Password updated successfully.");
      toast.success(res.data?.message || "Password updated successfully.");

      // short delay then redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 1400);
    } catch (err) {
      // don't expose internals to UI; show friendly message
      const serverMsg = err?.response?.data?.message;
      const friendly =
        serverMsg || "Unable to reset password. Try again later.";
      setError(friendly);
      toast.error(friendly);

      // Optional: handle specific statuses
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        // invalid / expired token -- redirect to forgot page after notifying
        setTimeout(() => navigate("/forgot-password"), 1800);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ---------- Banner ---------- */}
      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/superchennai-quiz-inner.jpg"
            alt="Super Chennai Quiz"
          />
          <img
            className="block sm:hidden"
            src="/images/events/superchennai-quiz-mobile2.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Quiz</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="#">Super Chennai Quiz</Link>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" />
      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
          <h2 className=" text-center">Reset Password</h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Password input */}
            <div className="relative">
              <div className="relative">
                <PasswordInput
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  ariaLabel="new-password"
                  maxLength={128}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-indigo-600 text-white py-2 rounded-lg theme-button ${
                submitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              }`}
            >
              {submitting ? "Updating..." : "Reset Password"}
            </button>
          </form>

          {message && <p className="mt-4 text-green-600">{message}</p>}
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
      </div>
    </>
  );
}
