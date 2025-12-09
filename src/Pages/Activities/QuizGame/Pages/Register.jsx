import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subscribed: false,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("User registered successfully!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

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
              className="w-4 h-4 accent-indigo-600"
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
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}
