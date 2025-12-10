import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Register() {
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
    // Prevent script injection in text inputs
    const safeValue =
      type === "text" || type === "email"
        ? value.replace(/<[^>]*>?/gm, "")
        : value;
    setForm({ ...form, [name]: type === "checkbox" ? checked : safeValue });
  };

  //######### Strong client-side validation ###########
  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Invalid email format";
    if (!form.phone.trim()) return "Phone number is required";
    if (!/^\d{10,15}$/.test(form.phone)) return "Phone must be 10-15 digits";
    if (!form.password) return "Password is required";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error, { position: "top-center" });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        subscribed: form.subscribed,
        password: form.password,
      };

      await API.post("/auth/register", payload);
      toast.success("User registered successfully!", {
        position: "top-center",
      });
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      const message =
        err?.response?.data?.message ||
        "Registration failed due to server error";
      toast.error(message, { position: "top-center" });
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

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          {/* Desktop Image */}
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/superchennai-quiz-inner.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/superchennai-quiz-mobile2.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Quiz</h1>

            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="./">Super Chennai Quiz</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
       
          <ToastContainer />
          <h2 className=" text-center">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="email"
              placeholder="Email Address"
              type="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="location"
              placeholder="Location"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <label className="flex items-center gap-3 text-gray-700">
              <input
                type="checkbox"
                name="subscribed"
                checked={form.subscribed}
                onChange={handleChange}
                className="w-4 h-4 accent-indigo-600 checkboxxclass"
              />
              Subscribe to Newsletter
            </label>

            <input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"} text-white py-2 rounded-lg font-semibold transition duration-200 theme-button`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-700">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
