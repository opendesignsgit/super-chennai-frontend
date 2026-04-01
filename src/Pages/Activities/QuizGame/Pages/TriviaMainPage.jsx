import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../../config";
import PasswordInput from "../Components/PasswordInput";
import { useRef } from "react";

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
      localStorage.setItem("tokenTime", Date.now());

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
      setTimeout(() => navigate("/login-otp"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // =========================================
  //          UI SECTION
  // =========================================

  const carryFormRef = useRef(null);

  const scrollToForm = () => {
    carryFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

      {/* ---------- Game Section ---------- */}
      <section className="w-full flex flex-col  text-center   py-10">
        <div>
          <p className="uppercase themelink-color leading-6 text-sm">
            Let’s Start the Game
          </p>

          <h2 className="chennaiInvestmentsHeading leading-tight">
            TRIVIA 2025
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-sm leading-relaxed font-bold themelink-color">
            PLAY, LEARN AND WIN!
          </p>

          <button
          // onClick={scrollToForm} 
             onClick={() => navigate("/login-otp")}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold mb-6 theme-button-small cursor-pointer"
          >
            Start Quiz
          </button>
        </div>
        <img
          src="/images/events/superchennai-triva-2025.png"
          alt="Trivia 2025"
        />
      </section>

    </>
  );
}
