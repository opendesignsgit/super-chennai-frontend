// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../assets/Css/Eventstyle.css";

// const ReimagineForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     image: "",
//     description: "",
//   });
//   const [video, setVideoFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [videoFileName, setVideoFileName] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));

//     console.log("videoFileName",videoFileName)
//   };

//   useEffect(() => {
//     if (loading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [loading]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, mobile, image, description } = formData;

//     if (!name.trim() || name.trim().length < 2) {
//       toast.error("Please enter a valid name (min 2 characters)");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim() || !emailRegex.test(email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     const mobileRegex = /^[0-9]{10}$/;
//     if (!mobile.trim() || !mobileRegex.test(mobile)) {
//       toast.error("Please enter a valid 10-digit mobile number");
//       return;
//     }

//     // if (!video.trim() || video.trim().length < 5 || !video.includes("http")) {
//     //   toast.error("Please enter a valid video URL (e.g., YouTube link)");
//     //   return;
//     // }

//     if (!description.trim() || description.trim().length < 10) {
//       toast.error("Please enter a description (min 10 characters)");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/posts`,
//         {
//           name,
//           email,
//           mobile,
//           image,
//           description,
//         },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("response", response)

//       if (response.data.success) {
//         toast.success("Successfully submitted!");
//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           image: "",
//           description: "",
//         });

//         setTimeout(() => {
//           navigate("/thankyou");
//         }, 1000);
//       } else {
//         toast.error("Submission failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="contactFormStyle">
//       <div className="container max-w-6xl mx-auto   rounded-md ">
//         <h2 className="text-2xl text-center mb-6 ">
//        Upload Your AI Artwork
//         </h2>
//         <ToastContainer
//           position="bottom-center"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />

//         <form onSubmit={handleSubmit} className="nammaStoriesFormSubmit">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <input
//                 placeholder="Email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
//             <div>
//               <input
//                 placeholder="Mobile Number"
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 pattern="[0-9]{10}"
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//             {/* <div>
//               <input
//                 type="text"
//                 name="video"
//                 value={formData.video}
//                 onChange={handleChange}
//                 placeholder="YouTube Video Link"
//                 required
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />

//               <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
//                 <strong>Note:</strong> Share your uploaded YouTube video link
//                 here.
//               </p>
//             </div> */}

//             <div className="w-full">
//               <div className="flex uploadmainContainer">
//                 <div className="flex items-center justify-center w-full buttonUploadButton">
//                   <label
//                     htmlFor="videoUpload"
//                     className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
//                   >
//                     <div className="flex flex-col items-center justify-center">
//                       <svg
//                         aria-hidden="true"
//                         className="w-10 h-10 mb-3 text-gray-800"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M7 16V4m0 0l-4 4m4-4l4 4M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-2.414 2.414A1 1 0 0112 22H4a2 2 0 01-2-2V6a2 2 0 012-2h2"
//                         />
//                       </svg>

//                       <p className="mb-1 text-sm text-gray-500 font-medium text-center">
//                         Click to Upload Image
//                       </p>
//                     </div>

//                     <input
//                       id="videoUpload"
//                       type="file"
//                       name="image"
//                       accept="video/*"
//                       //   onChange={handleFileChange}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>

//               {videoFileName ? (
//                 <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
//                   *Selected-Video : {videoFileName}
//                 </p>
//               ) : (
//                 <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
//                   Only accept JPEG OR PNG, OR PRINT READY
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="mb-4">
//             <textarea
//               placeholder="Description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               required
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="uppercase font-[29LT Bukra SmBd] text-black text-[14px] mt-[10px] bg-[#fff] px-4 py-[7px] rounded-[3px] tracking-[1px] transition-colors hover:bg-[#7d3e7e] SubmitbuttonContact"
//             >
//               {/* {loading ? "Uploading..." : "Submit"} */}
//               {loading ? (
//                 <>
//                   <span className="loaderSpinner"></span>
//                   Uploading...
//                 </>
//               ) : (
//                 "Submit"
//               )}
//             </button>
//             {message && <p>{message}</p>}
//           </div>
//         </form>

//         {/* {loading && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
//             <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default ReimagineForm;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Css/Eventstyle.css";

const ReimagineForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null); // ✅ store file
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ handle file input separately
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileName(file.name);
    }
  };

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, description } = formData;

    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter a valid name (min 2 characters)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobile.trim() || !mobileRegex.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      toast.error("Please enter a description (min 10 characters)");
      return;
    }

    if (!imageFile) {
      toast.error("Please upload an image file");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // ✅ Use FormData
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("description", description);
      data.append("image", imageFile);

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/posts`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Successfully submitted!");
        setFormData({ name: "", email: "", mobile: "", description: "" });
        setImageFile(null);
        setImageFileName("");

        setTimeout(() => {
          navigate("/thankyou");
        }, 1000);
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactFormStyle">
      <div className="container max-w-6xl mx-auto   rounded-md ">
        <h2 className="text-2xl text-center mb-6 ">Upload Your AI Artwork</h2>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <form onSubmit={handleSubmit} className="nammaStoriesFormSubmit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
            <div>
              <input
                placeholder="Mobile Number"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            {/* <div>
              <input
                type="text"
                name="video"
                value={formData.video}
                onChange={handleChange}
                placeholder="YouTube Video Link"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
                <strong>Note:</strong> Share your uploaded YouTube video link
                here.
              </p>
            </div> */}

            <div className="w-full">
              <div className="flex uploadmainContainer">
                <div className="flex items-center justify-center w-full buttonUploadButton">
                  <label
                  style={{padding:"0"}}
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-800"
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
                    <p className="text-sm text-gray-500 font-medium">
                      Click to Upload Image
                    </p>
                    <input
                      id="imageUpload"
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange} // ✅ fixed
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              {imageFileName ? (
                <p className="mt-2 text-sm text-gray-700 font-medium truncate">
                  *Selected File: {imageFileName}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
                  Only JPEG and PNG files are accepted

                </p>
              )}
            </div>
          </div>

        

          <div className="mb-4">
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="uppercase font-[29LT Bukra SmBd] text-black text-[14px] mt-[10px] bg-[#fff] px-4 py-[7px] rounded-[3px] tracking-[1px] transition-colors hover:bg-[#7d3e7e] SubmitbuttonContact"
            >
              {/* {loading ? "Uploading..." : "Submit"} */}
              {loading ? (
                <>
                  <span className="loaderSpinner"></span>
                  Uploading...
                </>
              ) : (
                "Submit"
              )}
            </button>
            {message && <p>{message}</p>}
          </div>
        </form>

        {/* {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ReimagineForm;
