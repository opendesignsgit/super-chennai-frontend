import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function QuizForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    name2: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, name2, email, mobile,  message } = formData;

    if (name.trim().length < 2) return toast.error("Name is too short");
    if (name2.trim().length < 2) return toast.error("Second Name is too short");
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error("Invalid Email");
    if (!/^\d{10}$/.test(mobile))
      return toast.error("Mobile number must be 10 digits");
    // if (message.trim().length < 5)
    //   return toast.error("Address is too short");

    const formPayload = {
      name,
      name2,
      email,
      phone: mobile,
      message,
    };

    localStorage.setItem("carRallyUser", JSON.stringify(formPayload));
    navigate("/quiz-checkout");
  };

  return (
    <>
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="/images/events/superchennai-quiz-inner.jpg"
            alt=""
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Super Chennai Quiz</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="contests/chennai-quiz">(Quiz)</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
          <ToastContainer />

          <h2 className=" text-center">
            Registration 
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name 1 */}
            <input
              type="text"
              name="name"
              placeholder="Participant  1"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />

            {/* Name 2 */}
            <input
              type="text"
              name="name2"
              placeholder="Participant  2"
              value={formData.name2}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />


            {/* Address */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              rows="4"
             
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full cursor-pointer py-2 px-4 rounded text-white font-semibold transition-all ${
                loading
                  ? "!bg-[#995098] cursor-not-allowed"
                  : "!bg-[#995098] hover:bg-purple-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
