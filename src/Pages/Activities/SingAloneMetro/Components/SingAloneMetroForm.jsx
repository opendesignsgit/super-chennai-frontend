import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../../config";

const SingAloneMetroForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    participants: "",
    preferredDate: "",
    message: "",
    otp: "",
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* STEP 1: Send OTP */
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const res = await axios.post(
        `${API_BASE_URL_API}/sing-along-metro/sing-along-metro/send-otp`,
        { mobileNumber: formData.mobileNumber },
      );

      if (res.data.success) {
        setStep(2);
        setStatusMsg({
          type: "success",
          text: "OTP sent to your mobile number!",
        });
      }
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: err.response?.data?.message || "Failed to send OTP. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* STEP 2: Verify OTP & Submit */
  const handleVerifyAndSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const res = await axios.post(
        `${API_BASE_URL_API}/sing-along-metro/sing-along-metro/verify-otp`,
        formData,
      );

      if (res.data.success) {
        setStatusMsg({
          type: "success",
          text: "Registration successful! Confirmation email sent.",
        });
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          participants: "",
          preferredDate: "",
          message: "",
          otp: "",
        });
        setStep(1);
      }
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: err.response?.data?.message || "Invalid or expired OTP.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="registration-form"
      className="max-w-7xl mx-auto px-4 py-8 font-sans paddingsectionntop paddingbtoomm"
    >
      <div className="flex flex-col md:flex-row items-stretch bg-[#fff] rounded-2xl overflow-hidden shadow-lg">
        {/* Left Side - Image */}
        <div className="w-full md:w-5/12 min-h-[350px]">
          <img
            src="/images/singlealone/form-metro.jpeg"
            alt="People singing in metro"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center contactssssform">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="headingsection">JOIN SING ALONG METRO</h2>
            <p className="mt-1">
              Reserve your spot and be part of the experience.
            </p>
          </div>

          {/* Status Alert */}
          {statusMsg.text && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm text-center font-medium ${
                statusMsg.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {statusMsg.text}
            </div>
          )}

          {/* STEP 1: Main Registration Form */}
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {/* Row 1: Full Name & Mobile Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number *"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              {/* Row 2: Email Address */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              {/* Row 3: Participants Dropdown & Preferred Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="participants"
                  required
                  value={formData.participants}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239C9C9C%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:9px_9px] bg-[right_1rem_center] bg-no-repeat"
                >
                  <option value="" disabled>
                    Number of Participants *
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4+">4+ People</option>
                </select>

                {/* <div className="relative">
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 ${
                      !formData.preferredDate
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  />
                  {!formData.preferredDate && (
                    <span className="absolute left-4 top-3.5 text-sm text-gray-400 pointer-events-none bg-white pr-2">
                      Preferred Date / Slot
                    </span>
                  )}
                </div> */}

              </div>

              {/* Row 4: Message (Optional) */}
             <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#01236a] hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide uppercase shadow-md disabled:opacity-50"
              >
                {loading ? "SENDING OTP..." : "REGISTER NOW"}{" "}
                <span>&rarr;</span>
              </button>
            </form>
          )}

          {/* STEP 2: OTP Verification Form */}
          {step === 2 && (
            <form onSubmit={handleVerifyAndSubmit} className="space-y-4">
              <div className="text-sm text-gray-600 mb-2">
                Enter the OTP sent to <strong>{formData.mobileNumber}</strong>
              </div>

              <div>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP *"
                  required
                  maxLength={6}
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-center tracking-widest text-lg font-mono"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3.5 px-4 rounded-lg transition-colors text-sm uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-2/3 bg-[#01236a] hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide uppercase shadow-md disabled:opacity-50"
                >
                  {loading ? "VERIFYING..." : "VERIFY & SUBMIT"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingAloneMetroForm;

// import React, { useState } from "react";
// import { Calendar } from "lucide-react";

// const SingAloneMetroForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//     participants: "",
//     preferredDate: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-8 font-sans paddingsectionntop paddingbtoomm">
//       <div className="flex flex-col md:flex-row items-stretch bg-[#fff] rounded-2xl overflow-hidden shadow-lg">
//         {/* Left Side - Image */}
//         <div className="w-full md:w-5/12 min-h-[350px]">
//           <img
//             src="/images/singlealone/form-metro.jpeg"
//             alt="People singing in metro"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center contactssssform">
//           {/* Section Header */}
//           <div className="text-center mb-6">
//             <h2 className="headingsection">JOIN SING ALONG METRO</h2>
//             <p className=" mt-1">
//               Reserve your spot and be part of the experience.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Row 1: Full Name & Mobile Number */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name *"
//                 required
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />
//               <input
//                 type="tel"
//                 name="mobileNumber"
//                 placeholder="Mobile Number *"
//                 required
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />
//             </div>

//             {/* Row 2: Email Address */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address *"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />
//             </div>

//             {/* Row 3: Participants Dropdown & Preferred Date */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <select
//                 name="participants"
//                 value={formData.participants}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239C9C9C%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:9px_9px] bg-[right_1rem_center] bg-no-repeat"
//               >
//                 <option value="" disabled selected>
//                   Number of Participants
//                 </option>
//                 <option value="1">1 Person</option>
//                 <option value="2">2 People</option>
//                 <option value="3">3 People</option>
//                 <option value="4+">4+ People</option>
//               </select>

//               <div className="relative">
//                 <input
//                   type="date"
//                   name="preferredDate"
//                   value={formData.preferredDate}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 ${
//                     !formData.preferredDate ? "text-gray-400" : "text-gray-700"
//                   }`}
//                 />
//                 {/* Native placeholder display cross-browser fix */}
//                 {!formData.preferredDate && (
//                   <span className="absolute left-4 top-3.5 text-sm text-gray-400 pointer-events-none bg-white pr-2">
//                     Preferred Date / Slot
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Row 4: Message (Optional) */}
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Message (Optional)"
//                 rows={3}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-[#01236a] hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide uppercase shadow-md"
//             >
//               REGISTER NOW <span>&rarr;</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingAloneMetroForm;
