import React, { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";

export default function LetsTalkForm() {
  const [submissionFor, setSubmissionFor] = useState("Myself");
  const [description, setDescription] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50 formsectionnnnsletstak">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B132A] relative inline-block">
            Share Your Chennai
            {/* Pink Brush Stroke Underline */}
            <svg
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-2"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5C35 2 85 2 118 6"
                stroke="#e60076"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="text-[14px] sm:text-sm font-medium text-[#000] mt-5">
            Have a Reel to share? Tell us your story.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* RADIO SELECTION */}
          <div>
            <label className="block text-[18px] font-semibold text-[#0B132A] mb-2">
              Who are you submitting for?{" "}
              <span className="text-pink-600">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 cursor-pointer text-[16px] font-medium text-gray-700">
                <input
                  type="radio"
                  name="submittingFor"
                  value="Myself"
                  checked={submissionFor === "Myself"}
                  onChange={() => setSubmissionFor("Myself")}
                  className="w-4 h-4 text-pink-600 accent-pink-600 focus:ring-pink-500"
                />
                Myself
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer text-[16px] font-medium text-gray-700">
                <input
                  type="radio"
                  name="submittingFor"
                  value="Someone else"
                  checked={submissionFor === "Someone else"}
                  onChange={() => setSubmissionFor("Someone else")}
                  className="w-4 h-4 text-pink-600 accent-pink-600 focus:ring-pink-500"
                />
                Someone else
              </label>
            </div>
          </div>

          {/* ROW 1: NAME, EMAIL, PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Your Name <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Email Address <span className="text-pink-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Phone Number <span className="text-pink-600">*</span>
              </label>
              <div className="flex">
                <select className="px-2.5 py-2.5 text-xs bg-gray-50 border border-r-0 border-gray-400 rounded-l-lg text-gray-600 focus:outline-none">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-r-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* ROW 2: REEL TITLE, WHAT WOULD YOU LIKE TO TALK ABOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Reel Title <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Give your reel a title"
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                What would you like to talk about?{" "}
                <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., culture, food, people, everyday moments etc."
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* ROW 3: TELL US ABOUT YOUR REEL, UPLOAD BOX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Tell Us About Your Reel <span className="text-pink-600">*</span>
              </label>
              <div className="relative">
                <textarea
                  rows={5}
                  maxLength={300}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Share the story behind your reel and what makes it special."
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400 resize-none"
                />
                <span className="absolute bottom-2.5 right-3 text-[10px] text-gray-400 font-medium">
                  {description.length}/300
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Upload Your Reel <span className="text-pink-600">*</span>
              </label>
              <div className="relative border-2 border-dashed border-pink-200 bg-pink-50/30 hover:bg-pink-50/60 rounded-xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center min-h-[128px]">
                <input
                  type="file"
                  accept="video/mp4"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  <Upload className="w-4 h-4 text-pink-600" />
                </div>
                <p className="text-xs font-bold text-gray-800">
                  Click to upload or drag and drop
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  Max file size:{" "}
                  <span className="font-semibold text-gray-500">200MB</span> |
                  Duration:{" "}
                  <span className="font-semibold text-gray-500">
                    90 sec or less
                  </span>
                </p>
                <p className="text-[10px] text-gray-400">
                  Format:{" "}
                  <span className="font-semibold text-gray-500">MP4</span>
                </p>
              </div>
            </div>
          </div>

          {/* ROW 4: PART OF CHENNAI, INSTAGRAM HANDLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Which part of Chennai does your Reel feature?{" "}
                <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., T. Nagar, Marina Beach, Mylapore etc."
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[16px] font-semibold text-[#0B132A] mb-1.5">
                Instagram / Social Media Handle
              </label>
              <div className="flex">
                <span className="px-3 py-2.5 text-[16px] bg-gray-50 border border-r-0 border-gray-400 rounded-l-lg text-gray-400 font-medium">
                  @
                </span>
                <input
                  type="text"
                  placeholder="yourhandle"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-400 rounded-r-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* CONSENT CHECKBOX */}
          <div className="pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 text-pink-600 accent-pink-600 rounded border-gray-300 focus:ring-pink-500"
              />
              <span className="text-[16px] text-gray-500 leading-tight">
                <strong className="text-gray-800">
                  Consent & Declaration <span className="text-pink-600">*</span>
                </strong>
                <br />I confirm that this reel is my original work and I give
                permission for it to be featured on Super Chennai's digital
                platforms.
              </span>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold text-[16px] uppercase sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Submit Your Reel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
