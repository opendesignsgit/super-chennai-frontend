import { useState } from "react";
import API from "../services/api";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      alert("Logged in successfully!");
    } catch (err) {
      alert("Invalid login");
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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
