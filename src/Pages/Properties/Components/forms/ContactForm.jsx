import { useState } from "react";
import { API_BASE_URL, LOCAL_API_BASE_URL } from "../../config";

export default function ContactForm({
  entity = {},
  contactField = "Properties ContactInfo",
  apiEndpoint = `${LOCAL_API_BASE_URL}/api/contactMessages`,
  title = "Contact",
}) {
  const [formData, setFormData] = useState({
    name: entity?.[contactField]?.name || "",
    email: entity?.[contactField]?.email || "",
    phone: entity?.[contactField]?.phone || "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const payload = {
        ...formData,
        propertyId: entity?.id || null,
        propertyType: entity?.type || "N/A",
        slug: entity?.slug || "N/A",
        title: entity?.title || "N/A",
        societyName: entity?.societyName || "N/A",
        builderName: entity?.builderName || "N/A",
        buildercontactEmail: entity?.contactEmail || "N/A",
        publishedAt: entity?.publishedAt || null,
      };

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 rounded-2xl shadow-lg bg-white space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#a34493] border-b-2 border-[#a34493] pb-2 w-fit">
        {title}
      </h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Your Email"
        onChange={handleChange}
        required
        className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition"
      />

      <input
        type="text"
        name="phone"
        value={formData.phone}
        placeholder="Your Phone"
        onChange={handleChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition"
      />

      <textarea
        name="message"
        value={formData.message}
        placeholder="Your Message"
        onChange={handleChange}
        rows={5}
        required
        className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#a34493] text-white font-semibold rounded-lg hover:bg-[#8b3878] transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p
          className={`mt-2 text-center ${
            success.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {success}
        </p>
      )}
    </form>
  );
}
