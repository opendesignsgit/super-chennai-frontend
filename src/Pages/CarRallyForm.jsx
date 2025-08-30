import { Dropdown } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function CarRallyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    no_of_persons: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, no_of_persons } = formData;

    if (name.trim().length < 2) return toast.error("Name is too short");
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error("Invalid email");
    if (!/^\d{10}$/.test(mobile))
      return toast.error("Mobile must be 10 digits");
    const formPayload = {
      name,
      email,
      phone: mobile,
      no_of_persons: no_of_persons,
    };
    localStorage.setItem("carRallyUser", JSON.stringify(formPayload));
    navigate("/carrallyformcheckout");
  };

  return (
    <>
      {/* Banner Section */}
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="  /images/events/Carrallybanner.jpg"
            alt=""
          />{" "}
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Car Treasure Hunt</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="/events"> (Car Treasure Hunt)</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center carryformPageSection">
        <div className="carryFormPage !max-w-[500px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
          <ToastContainer />
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
            Register
          </h2>

          <form
            onSubmit={handleSubmit}
            className="carrallyformsubmit space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />

            <select
              className="w-full border border-gray-300 rounded px-4 py-2"
              name="no_of_persons"
              onChange={handleChange}
              value={formData.no_of_persons}
              id=""
            >
              <option value="" disabled selected hidden>
                No of Persons
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            {/* <textarea
            name="message"
            placeholder="Address"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="4"
            required
          ></textarea> */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded text-white font-semibold transition-all ${
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
