import React, { useState } from "react";
import "../assets/Css/Eventstyle.css";

const ContactSalesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    video: null,
    description: "",
  });

  const [videoFileName, setVideoFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "video" ? files[0] : value;

    if (name === "video" && files.length > 0) {
      setVideoFileName(files[0].name);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="contactFormStyle">
      <div className="container max-w-6xl mx-auto   rounded-md ">
        <h2 className="text-2xl font-semibold text-center mb-6 ">
          Upload your video
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
            <div>
              {/* <label className="">Name :</label> */}
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
              {/* <label className="">Email :</label> */}
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

          {/* Row 2: Mobile + Video */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
            <div>
              {/* <label className="">Mobile Number :</label> */}
              <input
                placeholder="Number"
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="w-full">
              <div className="flex uploadmainContainer">
                <div className="flex items-center justify-center w-full buttonUploadButton">
                  <label
                    htmlFor="videoUpload"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16V4m0 0l-4 4m4-4l4 4M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-2.414 2.414A1 1 0 0112 22H4a2 2 0 01-2-2V6a2 2 0 012-2h2"
                        />
                      </svg>

                      <p className="mb-1 text-sm text-gray-500 font-medium text-center">
                        Click to Upload
                      </p>
                    </div>

                    <input
                      id="videoUpload"
                      type="file"
                      name="video"
                      accept="video/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {videoFileName ? (
                <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
                  *Selected-Video : {videoFileName}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
                  * Max size: 5MB
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Description (Full Width) */}
          <div className="mb-4">
            {/* <label className="">Description</label> */}
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

          {/* Submit Button */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="uppercase font-[29LT Bukra SmBd] text-black text-[14px] mt-[10px] bg-[#fff] px-4 py-[7px] rounded-[3px] tracking-[1px] transition-colors hover:bg-[#7d3e7e] SubmitbuttonContact"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSalesForm;
