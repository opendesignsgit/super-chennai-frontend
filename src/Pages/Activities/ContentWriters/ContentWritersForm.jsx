

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../config";

const ContactSalesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    video: "",
    description: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState("");

  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  const navigate = useNavigate();

  /* INPUT CHANGE */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* VIDEO FILE CHANGE */

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const maxSize = 50 * 1024 * 1024;

    if (file.size > maxSize) {
      toast.error("Max video size is 50MB");
      return;
    }

    setVideoFile(file);
    setVideoFileName(file.name);
  };

  /* SEND OTP */

  const handleSendOtp = async () => {
    try {
      const mobileRegex = /^[0-9]{10}$/;

      if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) {
        toast.error("Please enter valid mobile number");
        return;
      }

      setOtpLoading(true);

      const response = await axios.post(
        `${API_BASE_URL_API}/content/content-creators/send-otp`,
        {
          mobile: formData.mobile,
        },
      );

      if (response.data.success) {
        toast.success("OTP sent successfully");
        setOtpSent(true);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  /* BODY SCROLL */

  useEffect(() => {
    if (loading || otpLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading, otpLoading]);

  /* SUBMIT */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, video, description } = formData;

    /* NAME */

    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter valid name");
      return;
    }

    /* EMAIL */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter valid email");
      return;
    }

    /* MOBILE */

    const mobileRegex = /^[0-9]{10}$/;

    if (!mobile.trim() || !mobileRegex.test(mobile)) {
      toast.error("Please enter valid mobile number");
      return;
    }

    /* OTP */

    if (!otp.trim() || otp.trim().length < 4) {
      toast.error("Please enter OTP");
      return;
    }

    /* VIDEO URL OPTIONAL */

    if (video && (!video.includes("http") || video.trim().length < 5)) {
      toast.error("Please enter valid video URL");
      return;
    }

    /* DESCRIPTION */

    // if (!description.trim() || description.trim().length < 10) {
    //   toast.error("Description minimum 10 characters");
    //   return;
    // }

    try {
      setLoading(true);

      const formPayload = new FormData();

      formPayload.append("name", name);
      formPayload.append("email", email);
      formPayload.append("mobile", mobile);
      formPayload.append("video", video);
      formPayload.append("description", description);
      formPayload.append("otp", otp);

      /* OPTIONAL VIDEO FILE */

      if (videoFile) {
        formPayload.append("videoFile", videoFile);
      }

      const response = await axios.post(
        `${API_BASE_URL_API}/content/content-creators/verify-otp`,
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.data.success) {
        toast.success("Successfully submitted!");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          video: "",
          description: "",
        });

        setOtp("");
        setOtpSent(false);

        setVideoFile(null);
        setVideoFileName("");

        setTimeout(() => {
          navigate("/thankyou");
        }, 1200);
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactFormStyle">
      <div className="container max-w-6xl mx-auto rounded-md">
        <h2 className="text-2xl  text-center mb-6">Upload your video</h2>

        <ToastContainer position="bottom-center" autoClose={3000} />

        <form onSubmit={handleSubmit} className="nammaStoriesFormSubmit">
          {/* NAME + EMAIL */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded px-3 py-3 outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded px-3 py-3 outline-none"
              />
            </div>
          </div>

          {/* MOBILE + VIDEO URL */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
            {/* MOBILE + OTP */}

            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded px-3 py-3 outline-none"
              />

              {/* OTP SECTION */}

              <div className="flex gap-3 mt-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full border border-gray-300 rounded px-3 py-3 outline-none"
                />

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpLoading}
                  className="min-w-[130px] h-[52px]  bg-black text-white rounded px-4 py-2 hover:bg-[#7d3e7e] transition-all mt-4"
                >
                  {otpLoading
                    ? "Sending..."
                    : otpSent
                      ? "Resend OTP"
                      : "Send OTP"}
                </button>
              </div>
            </div>

            {/* VIDEO URL */}

            <div>
              <input
                type="text"
                name="video"
                value={formData.video}
                onChange={handleChange}
                placeholder="YouTube Video Link (Optional)"
                className="w-full border border-gray-300 rounded px-3 py-3 outline-none"
              />

              <p className="mt-2 text-sm text-gray-700 font-medium text-white">
                <strong>Note:</strong> Share YouTube link if available
              </p>
            </div>
          </div>

          {/* VIDEO FILE */}

          <div className="mb-5">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="videoUpload"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16V4m0 0l-4 4m4-4l4 4M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-2.414 2.414A1 1 0 0112 22H4a2 2 0 01-2-2V6a2 2 0 012-2h2"
                    />
                  </svg>

                  <p className="mb-1 text-sm text-gray-500 font-medium text-center">
                    Click to Upload Video (Optional)
                  </p>
                </div>

                <input
                  id="videoUpload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {videoFileName ? (
              <p className="mt-2 text-sm text-gray-700 font-medium truncate">
                Selected Video: {videoFileName}
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-700 font-medium">
                Max size: 50MB
              </p>
            )}
          </div>

          {/* DESCRIPTION */}

          <div className="mb-4">
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              // required
              className="w-full border border-gray-300 rounded px-3 py-3 outline-none"
            />
          </div>

          {/* SUBMIT */}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="uppercase text-black text-[14px] mt-[10px] bg-[#fff] px-6 py-[10px] rounded-[3px] tracking-[1px] transition-colors hover:bg-[#7d3e7e] hover:text-white"
            >
              {loading ? (
                <>
                  <span className="loaderSpinner"></span>
                  Uploading...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>

        {/* FULL SCREEN LOADER */}

        {(loading || otpLoading) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSalesForm;
