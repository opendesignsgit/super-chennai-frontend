// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { API_BASE_URL_API } from "../../../../config";

// const GenZVideoStory = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     instagram: "",
//     video: "",
//     contentType: "",
//     description: "",
//   });

//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   const [videoFile, setVideoFile] = useState(null);
//   const [videoFileName, setVideoFileName] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [otpLoading, setOtpLoading] = useState(false);

//   /* INPUT CHANGE */

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   /* VIDEO FILE */

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     const maxSize = 50 * 1024 * 1024;

//     if (file.size > maxSize) {
//       toast.error("Max video size is 50MB");
//       return;
//     }

//     setVideoFile(file);
//     setVideoFileName(file.name);
//   };

//   /* SEND OTP */

//   const handleSendOtp = async () => {
//     try {
//       const mobileRegex = /^[0-9]{10}$/;

//       if (
//         !formData.mobile.trim() ||
//         !mobileRegex.test(formData.mobile)
//       ) {
//         toast.error("Please enter valid mobile number");
//         return;
//       }

//       setOtpLoading(true);

//       const response = await axios.post(
//         `${API_BASE_URL_API}/content/content-creators/send-otp`,
//         {
//           mobile: formData.mobile,
//         }
//       );

//       if (response.data.success) {
//         toast.success("OTP sent successfully");
//         setOtpSent(true);
//       } else {
//         toast.error("Failed to send OTP");
//       }
//     } catch (error) {
//       console.error(error);

//       toast.error(
//         error?.response?.data?.message ||
//           "Failed to send OTP"
//       );
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   /* SUBMIT */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       name,
//       email,
//       mobile,
//       video,
//       description,
//       instagram,
//       contentType,
//     } = formData;

//     /* VALIDATION */

//     if (!name.trim()) {
//       toast.error("Enter full name");
//       return;
//     }

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//       toast.error("Enter valid email");
//       return;
//     }

//     const mobileRegex = /^[0-9]{10}$/;

//     if (!mobileRegex.test(mobile)) {
//       toast.error("Enter valid mobile number");
//       return;
//     }

//     if (!otp.trim()) {
//       toast.error("Enter OTP");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formPayload = new FormData();

//       formPayload.append("name", name);
//       formPayload.append("email", email);
//       formPayload.append("mobile", mobile);
//       formPayload.append("instagram", instagram);
//       formPayload.append("video", video);
//       formPayload.append(
//         "contentType",
//         contentType
//       );
//       formPayload.append(
//         "description",
//         description
//       );
//       formPayload.append("otp", otp);

//       if (videoFile) {
//         formPayload.append(
//           "videoFile",
//           videoFile
//         );
//       }

//       const response = await axios.post(
//         `${API_BASE_URL_API}/content/content-creators/verify-otp`,
//         formPayload,
//         {
//           headers: {
//             "Content-Type":
//               "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success(
//           "Successfully submitted!"
//         );

//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           instagram: "",
//           video: "",
//           contentType: "",
//           description: "",
//         });

//         setOtp("");
//         setOtpSent(false);

//         setVideoFile(null);
//         setVideoFileName("");

//         setTimeout(() => {
//           navigate("/thankyou");
//         }, 1200);
//       }
//     } catch (error) {
//       console.error(error);

//       toast.error(
//         error?.response?.data?.message ||
//           "Something went wrong"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* BODY SCROLL */

//   useEffect(() => {
//     if (loading || otpLoading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [loading, otpLoading]);

//   return (
//     <>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={3000}
//       />

//       <section className="sc-form-section">

//         <div className="sc-form-container">

//           {/* LEFT */}

//           <div className="sc-form-branding">

//             <h2 className="sc-form-main-title">
//               JOIN THE
//               <br />
//               <span className="sc-form-gradient-text">
//                 COLLECTIVE
//               </span>
//             </h2>

//             <div className="sc-form-squiggle"></div>

//             <p className="sc-form-subtext">
//               Submit your details and show
//               us your Chennai through a
//               30-60 second reel.
//               <strong>
//                 {" "}
//                 Auditions are officially
//                 open now.
//               </strong>
//             </p>

//             <div className="sc-form-image-wrapper">

//               <img
//                 src="/images/genz/man-genz.png"
//                 alt="Creator with Camera"
//                 className="sc-form-hero-img"
//               />

//             </div>

//           </div>

//           {/* RIGHT */}

//           <div className="sc-form-card">

//             <form onSubmit={handleSubmit}>

//               {/* ROW 1 */}

//               <div className="sc-form-row">

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   className="sc-form-input"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />

//                 <div className="sc-otp-wrapper">

//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Phone Number"
//                     className="sc-form-input"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                   />

//                   <button
//                     type="button"
//                     onClick={handleSendOtp}
//                     disabled={otpLoading}
//                     className="sc-send-otp-btn"
//                   >
//                     {otpLoading
//                       ? "Sending..."
//                       : otpSent
//                       ? "Resend OTP"
//                       : "Send OTP"}
//                   </button>

//                 </div>

//               </div>

//               {/* OTP */}

//               <div className="sc-form-row">

//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   className="sc-form-input"
//                   value={otp}
//                   onChange={(e) =>
//                     setOtp(e.target.value)
//                   }
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="sc-form-input"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//               </div>

//               {/* ROW 3 */}

//               <div className="sc-form-row">

//                 <input
//                   type="text"
//                   name="instagram"
//                   placeholder="Instagram Handle"
//                   className="sc-form-input"
//                   value={formData.instagram}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="url"
//                   name="video"
//                   placeholder="Reel Link / Google Drive Link"
//                   className="sc-form-input"
//                   value={formData.video}
//                   onChange={handleChange}
//                 />

//               </div>

//               {/* SELECT */}

//               <select
//                 name="contentType"
//                 className="sc-form-input sc-form-full-width sc-form-select"
//                 value={formData.contentType}
//                 onChange={handleChange}
//               >

//                 <option value="">
//                   What type of content do
//                   you create?
//                 </option>

//                 <option value="food">
//                   Food & Cafe
//                 </option>

//                 <option value="lifestyle">
//                   Lifestyle & Fashion
//                 </option>

//                 <option value="travel">
//                   Travel & Hidden Gems
//                 </option>

//                 <option value="humor">
//                   Memes & Humor
//                 </option>

//               </select>

//               {/* FILE */}

//               <div className="sc-upload-wrapper">

//                 <label
//                   htmlFor="videoUpload"
//                   className="sc-upload-box"
//                 >

//                   <span>
//                     Upload Video
//                     (Optional)
//                   </span>

//                   <input
//                     id="videoUpload"
//                     type="file"
//                     accept="video/*"
//                     onChange={
//                       handleFileChange
//                     }
//                     hidden
//                   />

//                 </label>

//                 {videoFileName && (
//                   <p className="sc-upload-name">
//                     {videoFileName}
//                   </p>
//                 )}

//               </div>

//               {/* DESCRIPTION */}

//               <textarea
//                 placeholder="Tell us about yourself and why you want to collaborate with Super Chennai"
//                 className="sc-form-input sc-form-textarea sc-form-full-width"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//               ></textarea>

//               {/* CHECKBOX */}

//               <div className="sc-form-checkbox-group">

//                 <input
//                   type="checkbox"
//                   id="sc-consent"
//                   className="sc-form-checkbox"
//                   required
//                 />

//                 <label
//                   htmlFor="sc-consent"
//                   className="sc-form-checkbox-label"
//                 >
//                   I want to collaborate
//                   with Super Chennai and
//                   agree to be contacted
//                   regarding creator
//                   opportunities,
//                   collaborations,
//                   campaigns, and
//                   auditions.
//                 </label>

//               </div>

//               {/* BUTTON */}

//               <button
//                 type="submit"
//                 className="sc-form-submit-btn"
//                 disabled={loading}
//               >

//                 <span className="sc-form-btn-icon">
//                   🚀
//                 </span>

//                 {loading
//                   ? "Submitting..."
//                   : "SUBMIT YOUR APPLICATION"}

//               </button>

//             </form>

//           </div>

//         </div>

//         {/* LOADER */}

//         {(loading || otpLoading) && (
//           <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">

//             <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

//           </div>
//         )}

//       </section>
//     </>
//   );
// };

// export default GenZVideoStory;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_API } from "../../../../config";

// import "./ContentCreatorsForm.css";

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

  /* FILE CHANGE */

  const handleFileChange = (e) => {
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

    try {
      setLoading(true);

      const formPayload = new FormData();

      formPayload.append("name", name);
      formPayload.append("email", email);
      formPayload.append("mobile", mobile);
      formPayload.append("video", video);
      formPayload.append("description", description);
      formPayload.append("otp", otp);

      /* OPTIONAL FILE */

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
    <section className="sc-form-section geznzzzz">
      <div className="sc-form-container container">
        {/* LEFT SIDE */}

        <div className="sc-form-branding">
          <h2 className="sc-form-main-title">
            JOIN THE
            <br />
            <span className="sc-form-gradient-text">COLLECTIVE</span>
          </h2>

          <div className="sc-form-squiggle"></div>

          <p className="sc-form-subtext">
            Submit your details and show us your Chennai through a 30-60 second
            reel.
            <strong> Auditions are officially open now.</strong>
          </p>

          <div className="sc-form-image-wrapper">
            <img
              src="/images/genz/man-genz.png"
              alt="Creator with Camera"
              className="sc-form-hero-img"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="sc-form-card">
          <ToastContainer position="bottom-center" autoClose={3000} />

          <form onSubmit={handleSubmit}>
            {/* NAME + MOBILE */}

            <div className="sc-form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="sc-form-input"
                required
              />

              {/* <input
                type="tel"
                name="mobile"
                placeholder="Phone Number"
                value={formData.mobile}
                onChange={handleChange}
                className="sc-form-input"
                required
              /> */}

              <div className="sc-phone-wrapper">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="sc-form-input sc-phone-input"
                  required
                />

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpLoading}
                  className="sc-form-submit-btn sc-phone-btn forminsidebutton"
                >
                  {otpLoading
                    ? "Sending..."
                    : otpSent
                      ? "Resend OTP"
                      : "Send OTP"}
                </button>
              </div>
            </div>

            {/* EMAIL + OTP */}
            <div className="sc-form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="sc-form-input"
                required
              />

              {/* SHOW OTP FIELD ONLY AFTER SEND OTP */}

              {otpSent && (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="sc-form-input"
                  required
                />
              )}
            </div>

            {/* <div className="sc-form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="sc-form-input"
                required
              />

              <div className="sc-otp-wrapper">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="sc-form-input"
                />

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpLoading}
                  className="sc-send-otp-btn"
                >
                  {otpLoading
                    ? "Sending..."
                    : otpSent
                      ? "Resend OTP"
                      : "Send OTP"}
                </button>
              </div>
            </div> */}

            {/* VIDEO URL */}

            <input
              type="url"
              name="video"
              placeholder="Reel Link / Google Drive Link"
              value={formData.video}
              onChange={handleChange}
              className="sc-form-input sc-form-full-width"
            />

            {/* FILE */}

            {/* <div className="sc-upload-wrapper">
              <label htmlFor="videoUpload" className="sc-upload-box">
                <input
                  id="videoUpload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  hidden
                />

                <span>Upload Video (Optional)</span>
              </label>

              {videoFileName && (
                <p className="sc-upload-file-name">{videoFileName}</p>
              )}
            </div> */}

            {/* DESCRIPTION */}

            <textarea
              placeholder="Tell us about yourself and why you want to collaborate with Super Chennai"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="sc-form-input sc-form-textarea sc-form-full-width"
            ></textarea>

            {/* SUBMIT */}

            <button
              type="submit"
              className="sc-form-submit-btn"
              disabled={loading}
            >
              <span className="sc-form-btn-icon">🚀</span>

              {loading ? "SUBMITTING..." : "SUBMIT YOUR APPLICATION"}
            </button>
          </form>
        </div>
      </div>

      {/* FULL SCREEN LOADER */}

      {(loading || otpLoading) && (
        <div className="sc-loader-overlay">
          <div className="sc-loader"></div>
        </div>
      )}
    </section>
  );
};

export default ContactSalesForm;
