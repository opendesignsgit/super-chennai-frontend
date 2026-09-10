
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../../../config";
import AuthFlow from "../AuthFlow";

// ==========================================
// GOLU CONTEST BLOCK SECTION
// ==========================================
export const GoluContestBlockSection = ({
  blockFields,
  currentStep,
  authMode,
  mobileNumber,
  setMobileNumber,
  otp,
  setOtp,
  userData,
  setUserData,
  goluImages,
  superChennaiImages,
  aboutGolu,
  setAboutGolu,
  loading,
  errorMessage,
  showRegSuccessModal,
  setShowRegSuccessModal,
  showAlreadyRegisteredModal,       // <-- சேர்க்கப்பட்டது
  setShowAlreadyRegisteredModal,    // <-- சேர்க்கப்பட்டது
  existingUserData,                 // <-- சேர்க்கப்பட்டது
  handleSendOtp,
  handleVerifyOtp,
  handleRegisterUser,
  handleSubmitGolu,
  handleImageChange,
  handleRemoveImage,
  handleReset,
  startAuthFlow,
}) => {
  const goluMin = blockFields?.goluMinImages ?? 2;
  const goluMax = blockFields?.goluMaxImages ?? 5;
  const scMin = blockFields?.superChennaiMinImages ?? 1;
  const scMax = blockFields?.superChennaiMaxImages ?? 3;
  

  return (
    <div className="w-full my-8">
      {/* 0. LANDING START STATE */}
      {currentStep === "LANDING" && (
        <section
          className="max-w-7xl mx-auto my-8 p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 font-sans bg-purple-50/50 mt-[50px] golu-form"
          id="golucontest"
        >
          <div class="flex items-center justify-center gap-4 mb-8">
            {/* <span class="h-[2px] w-12 md:w-20 bg-pink-500"></span>
            <h2 class="text-xl md:text-3xl font-bold text-center uppercase bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
              Super Chennai Golu Contest
            </h2>
            <span class="h-[2px] w-12 md:w-20 bg-pink-500"></span> */}
          </div>
          <div className="max-w-2xl mx-auto px-4 text-center formflexgolou dddd">
            <div className="rounded-3xl p-10 border border-stone-200 shadow-sm space-y-6 golunewform bg-white">
              <h2 className="text-xl md:text-2xl font-black uppercase font-bold headigggggfont bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
                Super Chennai <br /> Golu Contest
              </h2>
              <p className="text-stone-600 text-sm">
                Participate now, upload your creative Golu setup, and win
                exciting prizes!
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => startAuthFlow("register")}
                  className="cursor-pointer w-full py-3.5 bg-[#312c85] hover:bg-[#221f58] text-white font-semibold rounded-xl shadow transition-colors text-sm"
                >
                  Register & Participate
                </button>
                {/* <button
                  onClick={() => startAuthFlow("login")}
                  className="cursor-pointer w-full py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl transition-colors text-sm border border-stone-300"
                >
                  Already Registered? Login via OTP
                </button> */}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 1. AUTHENTICATION & REGISTRATION STEPS */}
      {["AUTH_MOBILE", "OTP_VERIFY", "REGISTRATION"].includes(currentStep) && (
        <AuthFlow
          currentStep={currentStep}
          authMode={authMode}
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          otp={otp}
          setOtp={setOtp}
          userData={userData}
          setUserData={setUserData}
          handleSendOtp={handleSendOtp}
          handleVerifyOtp={handleVerifyOtp}
          handleRegisterUser={handleRegisterUser}
          loading={loading}
          errorMessage={errorMessage}
        />
      )}
      {showRegSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#fce7f3] animate-fadeIn">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-white via-slate-50/50 to-purple-50/30 rounded-3xl p-8 md:p-10 text-center border border-white/60 shadow-[0_25px_60px_-15px_rgba(49,44,133,0.3)] transform transition-all overflow-hidden">
            {/* Background Decorative Gradient Blobs */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-300/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-300/40 rounded-full blur-2xl pointer-events-none" />

            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setShowRegSuccessModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 hover:bg-slate-100/80 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer border border-transparent hover:border-slate-200"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Hero Icon with Soft Pulse & Badge */}
            <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping opacity-75" />
              <div className="relative w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full flex items-center justify-center text-4xl shadow-lg shadow-emerald-500/20 ring-4 ring-white">
                🎉
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-black text-indigo-950 uppercase tracking-tight mb-3">
              Registration Successful!
            </h3>

            {/* User Greeting & Content */}
            <div className="space-y-3 mb-8">
              <p className="text-slate-700 font-semibold text-base">
                Welcome ,{" "}
                <span className="text-pink-600 font-bold">
                  {userData?.fullName || "Participant"}
                </span>
                !
              </p>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                Your Golu registration is complete. During the Golu period, log
                back in to upload photos of your Golu &{" "}
                <span className="font-semibold text-indigo-900">
                  Super Chennai Corner
                </span>
                ! 📸✨
              </p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => {
                setShowRegSuccessModal(false);
                window.location.reload();
              }}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#312c85] to-[#4338ca] hover:from-[#25216b] hover:to-[#3730a3] text-white font-bold rounded-2xl shadow-lg shadow-indigo-950/20 hover:shadow-xl hover:shadow-indigo-950/30 transform hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Back to Home</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      )}

      {showAlreadyRegisteredModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 text-center border border-stone-100 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowAlreadyRegisteredModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 cursor-pointer"
            >
              ✕
            </button>

            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🎉
            </div>

            <h3 className="text-xl md:text-2xl font-black uppercase mb-2 text-[#312c85]">
              You’re already in!
            </h3>

            <p className="text-[#312c85] font-medium text-sm mb-3">
              You’re all set and confirmed for the{" "}
              <span className="font-bold text-[#F82763]">
                Super Chennai Golu Contest.
              </span>
            </p>

            <p className="text-[#312c85] text-xs leading-relaxed mb-6">
              During the Golu period,
              <br />
              <span className="font-bold text-[#F82763]">
                come back here to upload your Golu and Super Chennai Corner
                <br />
                photos. 📸
              </span>
              <br />
              <span className="font-medium text-[#312c85]">
                Thank you for joining us! 💜
              </span>
            </p>

            <div className="space-y-3">
              {/* <button
                type="button"
                onClick={() => {
                  setShowAlreadyRegisteredModal(false);
                  startAuthFlow("login");
                }}
                className="w-full py-3.5 bg-[#312c85] hover:bg-[#221f58] text-white font-bold rounded-xl text-sm uppercase cursor-pointer transition-colors"
              >
                Login via OTP
              </button> */}

              <button
                type="button"
                onClick={() => {
                  setShowAlreadyRegisteredModal(false);
                  setMobileNumber("");
                }}
                // className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl text-xs cursor-pointer transition-colors"
                className="w-full py-3.5 bg-[#312c85] hover:bg-[#312c85] text-white font-bold rounded-xl text-sm uppercase cursor-pointer transition-colors"
              >
                Want to register with another number?
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. REGISTRATION SUCCESS MODAL POPUP */}
      {/* {showRegSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full text-center border border-stone-100 shadow-2xl relative transform transition-all">
            
            <button
              onClick={() => setShowRegSuccessModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-stone-100"
            >
              ✕
            </button>

           
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl shadow-inner">
              🎉
            </div>

            
            <h3 className="text-2xl font-black text-indigo-950 uppercase mb-2">
              REGISTRATION SUCCESSFUL! 🎉
            </h3>

            
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              Your Golu registration is complete!
              <span className="font-bold text-indigo-950">
                {userData?.fullName || "Participant"}
              </span>
              ! <br />
              Now comes the exciting part! 🪆💜 During the Golu period, come
              back here to upload photos of your Golu & Super Chennai Corner.
              📸✨
            </p>

           
            <button
              onClick={() => setShowRegSuccessModal(false)}
              className="w-full py-3.5 bg-[#312c85] hover:bg-[#221f58] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm uppercase tracking-wider"
            >
              Upload Golu Photos Now
            </button>
          
          </div>
        </div>
      )} */}

      {/* 2. PHOTO SUBMISSION FORM DONT REMOVE  */}
      {/* {currentStep === "SUBMIT" && (
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-1">
              Upload Your Golu Entry
            </h2>
            <p className="text-sm text-stone-500 mb-6">
              Logged in as:{" "}
              <span className="font-semibold text-stone-800">
                {userData.fullName || "Participant"}
              </span>{" "}
              (+91 {mobileNumber})
            </p>

            <form onSubmit={handleSubmitGolu} className="space-y-8">
             
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-stone-800">
                    1. GOLU PHOTOGRAPHS{" "}
                    <span className="text-xs text-stone-500 font-normal">
                      (Min {goluMin}, Max {goluMax})
                    </span>
                  </label>
                  <span className="text-xs font-medium text-stone-500">
                    {goluImages.length}/{goluMax} Uploaded
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {goluImages.map((file, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-100"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(imgIdx, "golu")}
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {goluImages.length < goluMax && (
                    <label className="aspect-square rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 cursor-pointer hover:border-[#8B3C82] hover:text-[#8B3C82] transition-colors">
                      <span className="text-2xl">+</span>
                      <span className="text-xs font-medium">Add Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleImageChange(e, "golu", goluMax)}
                      />
                    </label>
                  )}
                </div>
              </div>

             
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-stone-800">
                    2. SUPER CHENNAI CORNER PHOTOGRAPHS{" "}
                    <span className="text-xs text-stone-500 font-normal">
                      (Min {scMin}, Max {scMax})
                    </span>
                  </label>
                  <span className="text-xs font-medium text-stone-500">
                    {superChennaiImages.length}/{scMax} Uploaded
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {superChennaiImages.map((file, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-100"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveImage(imgIdx, "superChennai")
                        }
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {superChennaiImages.length < scMax && (
                    <label className="aspect-square rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 cursor-pointer hover:border-[#8B3C82] hover:text-[#8B3C82] transition-colors">
                      <span className="text-2xl">+</span>
                      <span className="text-xs font-medium">Add Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) =>
                          handleImageChange(e, "superChennai", scMax)
                        }
                      />
                    </label>
                  )}
                </div>
              </div>

              
              <div>
                <label className="block text-sm font-semibold text-stone-800 mb-2">
                  3. ABOUT YOUR GOLU (Optional)
                </label>
                <textarea
                  rows={4}
                  value={aboutGolu}
                  onChange={(e) => setAboutGolu(e.target.value)}
                  placeholder="Tell us about your theme, dolls, or special decorations..."
                  className="w-full p-4 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm"
              >
                {loading ? "UPLOADING & SUBMITTING..." : "SUBMIT YOUR ENTRY"}
              </button>
            </form>
          </div>
        </div>
      )} */}

      {/* 3. SUCCESS / CONFIRMATION PAGE */}
      {currentStep === "SUCCESS" && (
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-10 border border-stone-200 shadow-sm">
            <div className="w-16 h-16 bg-purple-100 text-[#8B3C82] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🪔
            </div>
            <h2 className="text-3xl font-extrabold text-stone-900 mb-2">
              Thank You!
            </h2>
            <p className="text-stone-700 font-medium mb-2">
              Your Golu photographs have been successfully submitted.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Our team will review your entry. Winners will be announced after
              Navratri!
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors text-sm"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// GOLU FIRST SECTION BLOCK COMPONENT
// ==========================================
export const GoluFirstSectionBlockSection = ({ blockFields }) => {
  const firstSection = blockFields?.firstSection || [];

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-purple-50/50 border-purple-100 rounded-3xl border  shadow-sm font-sans goluufirstsectionmainn">
      {firstSection.map((item, index) => {
        const rawUrl =
          typeof item?.media?.src === "object" &&
          item?.media?.src !== null &&
          "url" in item.media.src
            ? item.media.src.url
            : typeof item?.media?.src === "string"
              ? item.media.src
              : null;

        // Fix absolute/relative URL for Payload media
        const mediaUrl = rawUrl
          ? rawUrl.startsWith("http")
            ? rawUrl
            : `${API_BASE_URL}${rawUrl}`
          : null;

        return (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
                  {item?.title?.primary}
                </h2>
                <h2 className="text-3xl md:text-4xl font-black text-pink-600 tracking-tight leading-tight uppercase">
                  {item?.title?.highlight}
                </h2>
                <h3 className="text-xs font-bold text-indigo-950 uppercase mt-2">
                  {item?.title?.subtitle}
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                {item?.description}
              </p>

              {item?.cta?.label && item?.cta?.url && (
                <div className="pt-2">
                  <a
                    href="#golucontest"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("golucontest")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="inline-flex items-center justify-center gap-3 bg-[#312c85] hover:bg-indigo-950 text-white font-black text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <span>{item.cta.label}</span>
                    {item.cta.showIcon && (
                      <span className="bg-white text-indigo-900 rounded-full p-1 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right"
                          aria-hidden="true"
                          // {...props}
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 w-full h-[280px] md:h-[340px] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-0 text-gray-400 relative overflow-hidden">
              {/* {mediaUrl ? (
                <img
                  src={mediaUrl}
                  alt={item?.media?.altText || "Golu image"}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <>
                  <span className="text-2xl mb-2 opacity-50">🖼️</span>
                  <span className="text-xs font-semibold uppercase text-gray-400">
                    {item?.media?.placeholderText || "Add Image"}
                  </span>
                </>
              )} */}

              {/* <img
                className="golugifiageee"
                src="/images/golu/golu-gif.gif"
                alt=""
              /> */}

              <video
                autoPlay
                loop
                muted
                playsInline
                src="/images/golu/golu-gif.mp4"
              ></video>
            </div>

            {/* <div className="lg:col-span-4 space-y-6 golufirstsectionheight">
              {item?.features?.map((feature, featureIdx) => (
                <div
                  key={feature.id || featureIdx}
                  className="flex items-start space-x-4 parafirstsectionn"
                >
                  <p className="text-xs text-gray-700 leading-relaxed pt-1">
                    {feature.segments
                      ? feature.segments.map((seg, segIdx) =>
                          seg.highlight ? (
                            <span
                              key={segIdx}
                              className="text-xs text-gray-700 leading-relaxed pt-1 highlightedtextsectionpara"
                            >
                              {seg.text}
                            </span>
                          ) : (
                            seg.text
                          ),
                        )
                      : feature.text}
                  </p>
                </div>
              ))}
            </div> */}
            <div className="lg:col-span-4 space-y-6 golufirstsectionheight">
              {item?.features?.map((feature, featureIdx) => (
                <div
                  key={feature.id || featureIdx}
                  className="flex items-start space-x-4 parafirstsectionn"
                >
                  <div className="text-xs text-gray-700 leading-relaxed pt-1 w-full">
                    {feature.segments && feature.segments.length > 0
                      ? feature.segments.map((seg, segIdx) => (
                          <div
                            key={segIdx}
                            className={`inline-block ${
                              seg.highlight
                                ? "highlightedtextsectionpara font-semibold text-pink-600"
                                : ""
                            }`}
                          >
                            {/* Rich Text Object-ஆக இருந்தால் parseLexical மூலம் Render செய்யவும் */}
                            {typeof seg.text === "object" && seg.text !== null
                              ? parseLexical(seg.text)
                              : seg.text}
                          </div>
                        ))
                      : feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

// ==========================================
// GOLU WHY CORNER BLOCK COMPONENT
// ==========================================
export const GoluWhyCornerBlockSection = ({ blockFields }) => {
  const headerTitle = blockFields?.headerTitle || "WHY A SUPER CHENNAI CORNER?";
  const features = blockFields?.features || [];

  const getMediaUrl = (imgField) => {
    if (
      typeof imgField === "object" &&
      imgField !== null &&
      "url" in imgField
    ) {
      return imgField.url.startsWith("http")
        ? imgField.url
        : `${API_BASE_URL}${imgField.url}`;
    }
    if (typeof imgField === "string") {
      return imgField.startsWith("http")
        ? imgField
        : `${API_BASE_URL}${imgField}`;
    }
    return null;
  };

  const decorImageUrl = getMediaUrl(blockFields?.decorImage);
  const mainMediaUrl = getMediaUrl(blockFields?.media?.src);

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <span className="text-pink-500 text-lg">
          {decorImageUrl ? (
            <img
              src={decorImageUrl}
              alt="decoration"
              className="w-14 object-contain"
            />
          ) : (
            <img className="w-14" src="/images/golu/golu-second.png" alt="" />
          )}
        </span>
        <h2 className="text-xl md:text-2xl font-black font-bold uppercase text-center bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
          {headerTitle}
        </h2>
        <span className="text-pink-500 text-lg">
          {decorImageUrl ? (
            <img
              src={decorImageUrl}
              alt="decoration"
              className="w-14 object-contain"
            />
          ) : (
            <img className="w-14" src="/images/golu/golu-second.png" alt="" />
          )}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 w-full h-[320px] md:h-[460px] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
          {mainMediaUrl ? (
            <img
              src={mainMediaUrl}
              alt={blockFields?.media?.altText || "Why Super Chennai Corner"}
              className="h-[100%] w-full object-cover"
            />
          ) : (
            <>
              <span className="text-2xl mb-2 opacity-50">🖼️</span>
              <span className="text-xs font-semibold uppercase text-gray-400">
                {blockFields?.media?.placeholderText || "Add Image"}
              </span>
            </>
          )}
        </div>

        <div className="lg:col-span-7 space-y-5 heighgolli">
          {/* {features.map((feature, index) => {
            const iconUrl = getMediaUrl(feature.icon);

            return (
              <div
                key={feature.id || index}
                className="group parafirstsectionn"
              >
                <div className="flex items-start space-x-4 gap-2 golumaincon">
                  <div
                    className={`w-14 h-14 rounded-full ${feature.bgColor || "bg-pink-100 text-pink-600"} flex items-center justify-center shrink-0 shadow-sm overflow-hidden`}
                  >
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt="icon"
                        className="w-14 h-14 object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold">
                        {feature.iconText || "🌟"}
                      </span>
                    )}
                  </div>

                  <div className="mr-0">
                    <span
                      className={`text-lg font-black ${feature.numColor || "text-pink-600"} shrink-0 numberfontt`}
                    >
                      {feature.id}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#000] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5 paragolorr">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index < features.length - 1 && (
                  <div className="border-b border-gray-100 mt-4 ml-14"></div>
                )}
              </div>
            );
          })} */}
          {features.map((feature, index) => {
            const iconUrl = getMediaUrl(feature.icon);

            return (
              <motion.div
                key={feature.id || index}
                className="group parafirstsectionn"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-start space-x-4 gap-2 golumaincon">
                  <div
                    className={`w-14 h-14 rounded-full ${
                      feature.bgColor || "bg-pink-100 text-pink-600"
                    } flex items-center justify-center shrink-0 shadow-sm overflow-hidden`}
                  >
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt="icon"
                        className="w-14 h-14 object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold">
                        {feature.iconText || "🌟"}
                      </span>
                    )}
                  </div>

                  <div className="mr-0">
                    <span
                      className={`text-lg font-black ${
                        feature.numColor || "text-pink-600"
                      } shrink-0 numberfontt`}
                    >
                      {feature.id}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#000] tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5 paragolorr">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index < features.length - 1 && (
                  <div className="border-b border-gray-100 mt-4 ml-14"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// GOLU CREATE BLOCK SECTION (React Component for Frontend)
// ==========================================
export const GoluCreateBlockSection = ({ blockFields }) => {
  const headerTitle = blockFields?.headerTitle || "WHAT TO CREATE";
  const items = blockFields?.items || [];

  const getMediaUrl = (imgField) => {
    if (
      typeof imgField === "object" &&
      imgField !== null &&
      "url" in imgField
    ) {
      return imgField.url.startsWith("http")
        ? imgField.url
        : `${API_BASE_URL}${imgField.url}`;
    }
    if (typeof imgField === "string") {
      return imgField.startsWith("http")
        ? imgField
        : `${API_BASE_URL}${imgField}`;
    }
    return null;
  };

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex items-center justify-center space-x-4 mb-10">
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
        <h2 className="text-xl md:text-2xl font-black font-bold uppercase text-center bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
          {headerTitle}
        </h2>
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start relative flowwsectiongloww">
        {/* {items.map((item, index) => {
          const iconUrl = getMediaUrl(item.icon);

          return (
            <div
              key={item.id || index}
              className="flex flex-col items-center text-center relative group firstflowwsectiongloww "
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-18 h-18 rounded-full ${item.circleBorder || "border-indigo-300 bg-indigo-50/20"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden`}
                >
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt={item.title || "Create icon"}
                      className="w-18 h-18 object-cover"
                    />
                  ) : (
                    <span className="text-xl">⭐</span>
                  )}
                </div>

                <div className="text-left textgolulefttt">
                  <span
                    className={`text-xl font-black ${item.color || "text-indigo-900"} block leading-none`}
                  >
                    {item.id}
                  </span>
                  <h3
                    className={`text-xs font-black ${item.color || "text-indigo-900"} uppercase font-bold mt-0.5`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#000] leading-relaxed max-w-[150px] text-left withautomaxgolu">
                {item.description}
              </p>

              {index < items.length - 1 && (
                <div className="md:block absolute -right-3 top-6 text-purple-900 opacity-60 aroooewwglow">
                  →
                </div>
              )}
            </div>
          );
        })} */}

        {items.map((item, index) => {
          const iconUrl = getMediaUrl(item.icon);

          return (
            <motion.div
              key={item.id || index}
              className="flex flex-col items-center text-center relative group firstflowwsectiongloww"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-18 h-18 rounded-full ${
                    item.circleBorder || "border-indigo-300 bg-indigo-50/20"
                  } flex items-center justify-center shadow-sm shrink-0 overflow-hidden`}
                >
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt={item.title || "Create icon"}
                      className="w-18 h-18 object-cover"
                    />
                  ) : (
                    <span className="text-xl">⭐</span>
                  )}
                </div>

                <div className="text-left textgolulefttt">
                  <span
                    className={`text-xl font-black ${
                      item.color || "text-indigo-900"
                    } block leading-none`}
                  >
                    {item.id}
                  </span>

                  <h3
                    className={`text-xs font-black ${
                      item.color || "text-indigo-900"
                    } uppercase font-bold mt-0.5`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#000] leading-relaxed max-w-[150px] text-left withautomaxgolu">
                {item.description}
              </p>

              {index < items.length - 1 && (
                <div className="md:block absolute -right-3 top-6 text-purple-900 opacity-60 aroooewwglow">
                  →
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// ==========================================
// GOLU JUDGING BLOCK COMPONENT
// ==========================================
export const GoluJudgingBlockSection = ({ blockFields }) => {
  // Extract main header title or use default fallback
  const headerTitle =
    blockFields?.sectionTitle ||
    blockFields?.headerTitle ||
    "How Will Your Golu Be Judged?";

  // Helper function to process image URLs safely
  const getMediaUrl = (imgField) => {
    if (!imgField) return null;
    let path = "";
    if (
      typeof imgField === "object" &&
      imgField !== null &&
      "url" in imgField
    ) {
      path = imgField.url;
    } else if (typeof imgField === "string") {
      path = imgField;
    }

    if (!path) return null;
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    if (path.startsWith("/images/")) return path; // Public folder assets
    return `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  // Convert Payload schema (stage1 & stage2) into a unified stages array
  let stages = [];

  if (blockFields?.stage1 || blockFields?.stage2) {
    if (blockFields.stage1) {
      stages.push({
        stageBadge: blockFields.stage1.badgeText || "Stage 01",
        badgeColor: "bg-indigo-900 text-white",
        cardBgColor: "bg-purple-50/50 border-purple-100",
        icon: blockFields.stage1.icon,
        title: blockFields.stage1.title || "Get Shortlisted",
        subtitle: blockFields.stage1.subtitle || "Super Chennai Corner",
        descriptions: [
          blockFields.stage1.paragraph1,
          blockFields.stage1.paragraph2,
        ].filter(Boolean),
      });
    }

    if (blockFields.stage2) {
      stages.push({
        stageBadge: blockFields.stage2.badgeText || "Stage 02",
        badgeColor: "bg-pink-600 text-white",
        cardBgColor: "bg-pink-50/50 border-pink-100",
        icon: blockFields.stage2.icon,
        title: blockFields.stage2.title || "Win The Prize",
        subtitle: blockFields.stage2.subtitle || "Grandness + Innovation",
        descriptions: [
          blockFields.stage2.paragraph1,
          blockFields.stage2.paragraph2,
        ].filter(Boolean),
      });
    }
  } else if (
    Array.isArray(blockFields?.stages) &&
    blockFields.stages.length > 0
  ) {
    stages = blockFields.stages;
  } else {
    // Default Fallback Stages
    stages = [
      {
        stageBadge: "Stage 01",
        badgeColor: "bg-indigo-900 text-white",
        cardBgColor: "bg-purple-50/50 border-purple-100",
        icon: "/images/golu/GET-Shortlist-judging-icon.png",
        title: "Get Shortlisted",
        subtitle: "Super Chennai Corner",
        descriptions: [
          "Your Super Chennai Corner is your chance to showcase what makes Chennai special. Bring your creativity, local pride and unique ideas together to stand out and get shortlisted.",
          "Creating a dedicated Super Chennai Corner is mandatory for every entry. The creativity, relevance and originality of the Corner will play a key role in determining which Golus move forward to the final round.",
        ],
      },
      {
        stageBadge: "Stage 02",
        badgeColor: "bg-pink-600 text-white",
        cardBgColor: "bg-pink-50/50 border-pink-100",
        icon: "/images/golu/win-iOC.png",
        title: "Win The Prize",
        subtitle: "Grandness + Innovation",
        descriptions: [
          "Shortlisted Golus will be evaluated based on their overall grandness, creativity and innovation. Judges will also consider how effectively the Golu brings the theme to life, including the concept and execution of the Super Chennai Corner.",
          "The Super Chennai Corner gets you shortlisted, while the grandness and innovation of your Golu determine whether you win the prize.",
        ],
      },
    ];
  }

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl shadow-lg border border-gray-100 font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="h-[2px] w-12 md:w-20 bg-pink-500"></span>
        <h2 className="text-xl md:text-3xl font-bold text-center uppercase bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
          {headerTitle}
        </h2>
        <span className="h-[2px] w-12 md:w-20 bg-pink-500"></span>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {stages.map((stage, index) => {
          const iconUrl = getMediaUrl(stage.icon);

          return (
            <div key={stage.id || index} className="relative pt-6">
              {/* Badge */}
              <div
                className={`absolute top-2 left-1/2 -translate-x-1/2 z-10 font-bold text-xs px-6 py-1.5 rounded-full uppercase shadow-sm text-[15px] ${
                  stage.badgeColor || "bg-indigo-900 text-white"
                }`}
              >
                {stage.stageBadge || `Stage 0${index + 1}`}
              </div>

              {/* Card Container */}
              <div
                className={`border rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full shadow-sm hover:shadow-md transition-shadow ${
                  stage.cardBgColor || "bg-purple-50/50 border-purple-100"
                }`}
              >
                <div className="w-full flex flex-col h-full">
                  {/* Icon & Titles */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-purple-200 flex items-center justify-center mb-4 text-indigo-900 relative">
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={stage.title || "Judging stage icon"}
                          className="w-24 h-24 object-contain rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                          🏆
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black uppercase font-bold headigggggfont bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
                        {stage.title}
                      </h3>
                      {stage.subtitle && (
                        <p className="text-xs md:text-sm font-black text-black uppercase mt-1 mb-3 font-bold subheadinggfonrs">
                          {stage.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Descriptions List */}
                  {stage.descriptions && stage.descriptions.length > 0 && (
                    <div className="space-y-4 mt-auto w-full pt-4">
                      {stage.descriptions.map((desc, descIdx) => (
                        <p
                          key={descIdx}
                          className="text-xs md:text-sm text-gray-600 font-medium max-w-100 mt-auto widthmax paragaraphcolosection "
                        >
                          {typeof desc === "string" ? desc : desc?.text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ==========================================
// GOLU CTA BANNER BLOCK COMPONENT
// ==========================================
export const GoluCtaBannerBlockSection = ({ blockFields }) => {
  const title = blockFields?.title || "READY TO CREATE YOUR GOLU?";
  const buttonLabel = blockFields?.buttonLabel || "REGISTER NOW";
  const buttonUrl = blockFields?.buttonUrl || "#register";

  const getMediaUrl = (imgField) => {
    if (
      typeof imgField === "object" &&
      imgField !== null &&
      "url" in imgField
    ) {
      return imgField.url.startsWith("http")
        ? imgField.url
        : `${API_BASE_URL}${imgField.url}`;
    }
    if (typeof imgField === "string") {
      return imgField.startsWith("http")
        ? imgField
        : `${API_BASE_URL}${imgField}`;
    }
    return null;
  };

  const flowerImgUrl = getMediaUrl(blockFields?.flowerImage);

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans readytocreatesection">
      {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-[10%] px-4 md:px-12">
        <div className="text-pink-400 opacity-80">
          {flowerImgUrl ? (
            <img src={flowerImgUrl} alt="flower decoration" className="" />
          ) : (
            <img src="/images/golu/flower-image.png" alt="flower decoration" />
          )}
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black uppercase font-bold headigggggfont bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
            {title}
          </h2>

          <a
            href={buttonUrl}
            className="cursor-pointer flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-black text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>{buttonLabel}</span>
            <span className="bg-white text-pink-600 rounded-full p-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <div className="text-pink-400 opacity-80">
          {flowerImgUrl ? (
            <img src={flowerImgUrl} alt="flower decoration" className="" />
          ) : (
            <img src="/images/golu/flower-image.png" alt="flower decoration" />
          )}
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[10%] px-4 md:px-12">
        {/* LEFT IMAGE */}
        <motion.div
          className="text-pink-400 opacity-80"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {flowerImgUrl ? (
            <img src={flowerImgUrl} alt="flower decoration" />
          ) : (
            <img src="/images/golu/flower-image.png" alt="flower decoration" />
          )}
        </motion.div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black uppercase font-bold headigggggfont bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
            {title}
          </h2>

          <a
            // href={buttonUrl}

            href="#golucontest"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("golucontest")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="cursor-pointer flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-black text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>{buttonLabel}</span>

            <span className="bg-white text-pink-600 rounded-full p-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="text-pink-400 opacity-80"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {flowerImgUrl ? (
            <img src={flowerImgUrl} alt="flower decoration" />
          ) : (
            <img src="/images/golu/flower-image.png" alt="flower decoration" />
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// GOLU HERO BANNER BLOCK COMPONENT
// ==========================================
export const GoluHeroBannerBlockSection = ({ blockFields }) => {
  const titlePrimary = blockFields?.titlePrimary || "GLOBAL OUTLOOK.";
  const titleHighlight = blockFields?.titleHighlight || "LOCAL UNIQUENESS.";
  const subtitle =
    blockFields?.subtitle || "A GOLU FOR THE CHENNAI OF TOMORROW.";
  const buttonLabel = blockFields?.buttonLabel || "REGISTER NOW";
  const buttonUrl = blockFields?.buttonUrl || "#register";

  const getMediaUrl = (imgField) => {
    if (
      typeof imgField === "object" &&
      imgField !== null &&
      "url" in imgField
    ) {
      return imgField.url.startsWith("http")
        ? imgField.url
        : `${API_BASE_URL}${imgField.url}`;
    }
    if (typeof imgField === "string") {
      return imgField.startsWith("http")
        ? imgField
        : `${API_BASE_URL}${imgField}`;
    }
    return null;
  };

  const bgImgUrl = getMediaUrl(blockFields?.backgroundImage);
  const sectionStyle = bgImgUrl
    ? {
        backgroundImage: `url(${bgImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      // style={sectionStyle}
      className="max-w-7xl mx-auto my-8 relative overflow-hidden rounded-3xl shadow-xl font-sans backgoungoloimage text-white"
    >
      <div className="relative z-10 py-10 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none uppercase">
          {titlePrimary}
        </h2>
        <h2 className="text-2xl md:text-4xl font-black text-amber-400 tracking-tight leading-none uppercase mt-1">
          {titleHighlight}
        </h2>

        <p className="text-xs md:text-sm font-bold text-gray-200 uppercase mt-3 mb-6 tetxcentermobile">
          {subtitle}
        </p>

        <a
          // href={buttonUrl}
          href="#golucontest"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("golucontest")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="cursor-pointer flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-black text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span>{buttonLabel}</span>
          <span className="bg-indigo-950 text-amber-400 rounded-full p-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

// ==========================================
// GOLU HOW IT WORKS BLOCK COMPONENT
// ==========================================
export const GoluHowItWorksBlockSection = ({ blockFields }) => {
  const headerTitle = blockFields?.headerTitle || "HOW IT WORKS";
  const steps = blockFields?.steps || [];

  const getMediaUrl = (imgField) => {
    if (
      typeof imgField === "object" &&
      imgField !== null &&
      "url" in imgField
    ) {
      return imgField.url.startsWith("http")
        ? imgField.url
        : `${API_BASE_URL}${imgField.url}`;
    }
    if (typeof imgField === "string") {
      return imgField.startsWith("http")
        ? imgField
        : `${API_BASE_URL}${imgField}`;
    }
    return null;
  };

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex items-center justify-center space-x-4 mb-10">
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
        <h2 className="text-xl md:text-2xl font-black font-bold uppercase text-center bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
          {headerTitle}
        </h2>
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start relative flowwsectiongloww">
        {steps.map((step, index) => {
          const iconUrl = getMediaUrl(step.icon);

          return (
            <div
              key={step.id || index}
              className="flex flex-col items-center text-center relative group firstflowwsectiongloww"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-18 h-18 rounded-full ${step.circleBorder || "border-indigo-300 bg-indigo-50/20"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden`}
                >
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt={step.title || "Step icon"}
                      className="w-18 h-18 object-cover text-white"
                    />
                  ) : (
                    <span className="text-xl">⭐</span>
                  )}
                </div>

                <div className="text-left">
                  <span
                    className={`text-xl font-black ${step.color || "text-indigo-900"} block leading-none`}
                  >
                    {step.id}
                  </span>
                  <h3
                    className={`text-xs font-black ${step.color || "text-indigo-900"} uppercase font-bold mt-0.5`}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#000] leading-relaxed max-w-[150px] text-left withautomaxgolu">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-6 text-purple-900 opacity-60 aroooewwglou">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ---------------------------------------------
   Lexical Helpers
--------------------------------------------- */
const FORMAT = { BOLD: 1, ITALIC: 1 << 3, UNDERLINE: 1 << 1 };

export const renderTextChildren = (children, allowFormatting = true) => {
  if (!Array.isArray(children)) return null;
  return children.map((child, i) => {
    if (child.type === "text") {
      let el = child.text;
      if (allowFormatting) {
        if (child.format & FORMAT.BOLD) el = <strong>{el}</strong>;
        if (child.format & FORMAT.ITALIC) el = <em>{el}</em>;
        if (child.format & FORMAT.UNDERLINE) el = <u>{el}</u>;
      }
      return <span key={i}>{el}</span>;
    }
    if (child.type === "link") {
      if (!allowFormatting)
        return <span key={i}>{renderTextChildren(child.children, false)}</span>;
      return (
        <a
          key={i}
          href={child.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B3C82] underline"
        >
          {renderTextChildren(child.children, true)}
        </a>
      );
    }
    if (child.type === "linebreak") return <br key={i} />;
    if (child.children)
      return (
        <span key={i}>
          {renderTextChildren(child.children, allowFormatting)}
        </span>
      );
    return null;
  });
};

export const parseLexical = (content, contestState) => {
  if (!content?.root?.children) return null;
  const headingClasses = { h1: "blog-h1", h2: "blog-h2", h3: "blog-h3" };

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={idx} className="mb-5 text-base text-gray-700 leading-relaxed">
            {renderTextChildren(node.children)}
          </p>
        );
      case "heading": {
        const Tag = node.tag || "h2";
        return (
          <Tag key={idx} className={headingClasses[Tag] || "blog-h2"}>
            {renderTextChildren(node.children)}
          </Tag>
        );
      }
      case "block": {
        const blockType = node.fields?.blockType;
        const fields = node.fields || {};

        //  FORM REGISTER
        if (blockType === "goluContestBlock") {
          return (
            <GoluContestBlockSection
              key={idx}
              blockFields={fields}
              {...contestState}
            />
          );
        }

        // THREE COLUMN SECTION

        if (blockType === "goluFirstSection") {
          return (
            <GoluFirstSectionBlockSection
              key={idx}
              blockFields={fields}
              {...contestState}
            />
          );
        }

        // WHY A SUPER CHENNAI CORNER 6 POINS ?
        if (blockType === "goluWhyCorner") {
          return (
            <GoluWhyCornerBlockSection
              key={idx}
              blockFields={fields}
              {...contestState}
            />
          );
        }

        // HOW IT WORKS

        if (blockType === "goluCreate") {
          return (
            <GoluCreateBlockSection
              key={idx}
              blockFields={fields}
              {...contestState}
            />
          );
        }

        // HOW WILL YOUR GOLU BE JUDGED? (UPDATED HERE)
        if (blockType === "goluJudging") {
          return <GoluJudgingBlockSection key={idx} blockFields={fields} />;
        }

        if (blockType === "goluHowItWorks") {
          return <GoluHowItWorksBlockSection key={idx} blockFields={fields} />;
        }

        // READY TO CREATE YOUR GOLU?

        if (blockType === "goluCtaBanner") {
          return <GoluCtaBannerBlockSection key={idx} blockFields={fields} />;
        }
        //  GLOBAL OUTLOOK.

        if (blockType === "goluHeroBanner") {
          return <GoluHeroBannerBlockSection key={idx} blockFields={fields} />;
        }

        return null;
      }
      default:
        return null;
    }
  });
};
