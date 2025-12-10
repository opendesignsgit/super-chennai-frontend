import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../../config";
import PasswordInput from "../Components/PasswordInput";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const { token } = useParams();

  // page state
  const [page, setPage] = useState("login");

  // forms
  const [form, setForm] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // auto-switch to reset page when token exists
  useEffect(() => {
    if (token) setPage("reset");
  }, [token]);

  // =========================================
  //       SECURE INPUT SANITIZATION
  // =========================================
  const sanitize = (str) => str.replace(/<[^>]*>?/gm, "").trim();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: sanitize(value) });
  };

  const handleEmailInput = (e) => {
    setEmail(sanitize(e.target.value));
  };

  const handlePasswordInput = (e) => {
    setNewPassword(sanitize(e.target.value));
  };

  // =========================================
  //       VALIDATION HELPERS
  // =========================================
  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Invalid email format";
    return null;
  };

  const validateLogin = () => {
    const emailError = validateEmail(form.email);
    if (emailError) return emailError;
    if (!form.password) return "Password is required";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    return null;
  };

  const validateResetPassword = () => {
    if (newPassword.length < 6)
      return "New password must be at least 6 characters";
    return null;
  };

  // =========================================
  //       LOGIN SUBMIT
  // =========================================
  const handleLogin = async (e) => {
    e.preventDefault();
    const error = validateLogin();
    if (error) return toast.error(error);

    try {
      const res = await axios.post(`${API_BASE_URL_API}/auth/login`, form);

      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);

      toast.success("Login successful!");
      setTimeout(() => navigate("/questions"), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid login");
    }
  };

  // =========================================
  //       FORGOT PASSWORD SUBMIT
  // =========================================

  const handleForgot = async (e) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    if (emailErr) return toast.error(emailErr);

    try {
      const res = await axios.post(`${API_BASE_URL_API}/auth/forgot-password`, {
        email,
      });

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // =========================================
  //       RESET PASSWORD SUBMIT
  // =========================================
  const handleReset = async (e) => {
    e.preventDefault();

    const err = validateResetPassword();
    if (err) return toast.error(err);

    try {
      const res = await axios.post(`${API_BASE_URL_API}/auth/reset-password`, {
        token,
        newPassword,
      });

      toast.success(res.data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // =========================================
  //          UI SECTION
  // =========================================
  return (
    <>
      <Helmet>
        <title>Super Chennai Quiz — Login</title>
        <meta
          name="description"
          content="Login to participate in the Super Chennai Quiz."
        />
      </Helmet>

      <ToastContainer position="top-center" />

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

      {/* ---------- Auth Box ---------- */}

      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
        
          {/* ---------------- LOGIN ---------------- */}
          {page === "login" && (
            <>
              <h2 className="text-center">Welcome Back</h2>
              <p className="text-center text-xs">
                Continue with one of the following options
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleInput}
                  className="w-full px-3 py-2 border rounded-lg"
                />

                <PasswordInput
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="Password"
                />

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setPage("forgot")}
                    className="text-indigo-600 text-sm hover:underline themelink-color"
                  >
                    Forgot password?
                  </button>
                </div>

                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg theme-button">
                  Login
                </button>
              </form>
            </>
          )}

          {/* ---------------- FORGOT PASSWORD ---------------- */}
          {page === "forgot" && (
            <>
              <h2 className=" text-center">Forgot Password</h2>

              <form onSubmit={handleForgot} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailInput}
                  className="w-full px-3 py-2 border rounded-lg"
                />

                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg theme-button">
                  Send Reset Link
                </button>
              </form>

              <p
                className="mt-4 text-gray-600 cursor-pointer hover:underline"
                onClick={() => setPage("login")}
              >
                ← Back to Login
              </p>
            </>
          )}

          {/* ----------  Added OTP button ---------- */}
          <div className="flex items-center ">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-600 font-medium">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/login-otp")}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 theme-button-secondary"
          >
            Login with OTP
          </button>

          <p className="text-center mt-4 text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline themelink-color"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
