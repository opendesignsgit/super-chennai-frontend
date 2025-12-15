import { useState } from "react";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../../config";
import { Link, useNavigate } from "react-router-dom";

export default function LoginOtp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [step, setStep] = useState("email"); // email → otp → done

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ---------------- SEND OTP ----------------
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(`${API_BASE_URL_API}/auth/send-otp`, {
        email,
      });

      setMessage(res.data.message);

      // Move to OTP step
      setStep("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  // ---------------- VERIFY OTP ----------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(`${API_BASE_URL_API}/auth/verify-otp`, {
        email,
        otp,
      });

      setMessage("OTP Verified Successfully!");

      // Save token
      localStorage.setItem("token", res.data.token);

      setTimeout(() => navigate("/questions"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP!");
    }
  };

  return (
    <>
      {/* Banner */}
     {/* ---------- Banner ---------- */}
      <section className="accaodomationBannerSection ">
        <div>
          <img
            className="w-full h-[450px] object-cover"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Triva 2025</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Super Chennai Triva 2025</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Main Form */}
      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white  um-form-section">
          <h2 className="text-center mb-4">
            {step === "email" ? "Login with OTP" : "Verify OTP"}
          </h2>

          {/* EMAIL FORM */}
          {step === "email" && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 theme-button"
                >
                  Send OTP
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
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Verify OTP
              </button>

              {/* Back to email */}
              <button
                type="button"
                onClick={() => setStep("email")}
                className="w-full mt-2 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100"
              >
                Change Email
              </button>
            </form>
          )}

          {/* Messages */}
          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { API_BASE_URL_API } from "/config.jsx";

// export default function LoginWithOtp() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await axios.post(`${API_BASE_URL_API}/auth/send-otp`, {
//         email,
//       });

//       setMessage(res.data.message);

//       setTimeout(() => {
//         navigate(`/verify-otp?email=${email}`);
//       }, 1000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <>
//       {/* ---------- Banner ---------- */}
//       <section className="accaodomationBannerSection carquizbanner">
//         <div>
//           <img
//             className="eventsCalenderIamge hidden sm:block"
//             src="/images/events/superchennai-quiz-inner.jpg"
//             alt="Super Chennai Quiz"
//           />
//           <img
//             className="block sm:hidden"
//             src="/images/events/superchennai-quiz-mobile2.jpg"
//             alt="Super Chennai Quiz Mobile"
//           />
//         </div>

//         <div className="accodoamationBannerContainer">
//           <div className="accodoamationBannerText">
//             <h1>Super Chennai Quiz</h1>
//             <div className="breadCrum">
//               <Link to="/">Home</Link> - <Link to="#">Super Chennai Quiz</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="flex items-center carryformPageSection">
//         <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
//           <h2 className="text-center">Login with OTP</h2>

//           <form onSubmit={handleSendOtp} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
//             />

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 theme-button"
//             >
//               Send OTP
//             </button>
//           </form>

//           {message && <p className="text-green-600 mt-4">{message}</p>}
//           {error && <p className="text-red-600 mt-4">{error}</p>}
//         </div>
//       </div>
//     </>
//   );
// }
