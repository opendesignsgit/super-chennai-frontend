import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function AuthFlow({
  currentStep,
  authMode,
  mobileNumber,
  setMobileNumber,
  otp,
  setOtp,
  userData,
  setUserData,
  handleSendOtp,
  handleVerifyOtp,
  handleRegisterUser,
  loading,
  errorMessage,
}) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 font-sans bg-purple-50/50 mt-[50px] golu-form1">
      <div class="flex items-center justify-center gap-4 mb-8">
        <span class="h-[2px] w-12 md:w-20 bg-pink-500"></span>
        <h2 class="text-xl md:text-3xl font-bold text-indigo-950 text-center uppercase">
          Super Chennai Golu Contest
        </h2>
        <span class="h-[2px] w-12 md:w-20 bg-pink-500"></span>
      </div>
      <div className="max-w-md mx-auto mt-8 px-4 paddinggglefttftt ">
        {/* 1. MOBILE NUMBER ENTRY */}
        {currentStep === "AUTH_MOBILE" && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm paddingtwenty">
            <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold headigggggfont">
              {authMode === "register" ? "Register Account" : "Login via OTP"}
            </h2>
            <p className="text-sm text-stone-500 mb-3 mt-3">
              Enter your mobile number to receive verification OTP.
            </p>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <p className="block text-xs font-semibold text-stone-600 uppercase mb-2">
                  Mobile Number *
                </p>
                <div className="flex rounded-xl border border-stone-300 overflow-hidden focus-within:border-[#8B3C82]">
                  <span className="bg-stone-100 text-stone-600 px-3.5 py-3 font-medium text-sm border-r border-stone-300">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="9876543210"
                    className="w-full px-3 py-3 text-stone-900 outline-none"
                    required
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full py-3.5 bg-[#312c85] hover:bg-[#221f58] text-white font-semibold rounded-xl shadow transition-colors text-sm"
              >
                {loading ? "Sending OTP..." : "GET OTP"}
              </button>
            </form>
          </div>
        )}

        {/* 2. OTP VERIFICATION */}
        {currentStep === "OTP_VERIFY" && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm paddingtwenty">
            <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold headigggggfont text-center">
              Verify OTP
            </h2>
            <p className="text-sm text-stone-500 mb-3 mt-3">
              Enter 6-digit code sent to{" "}
              <span className="font-semibold text-stone-800">
                +91 {mobileNumber}
              </span>
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="123456"
                className="w-full text-center tracking-[0.5em] text-2xl font-bold py-3 border border-stone-300 rounded-xl focus:border-[#8B3C82] outline-none"
                required
              />

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium text-center">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full py-3.5 bg-[#312c85] hover:bg-[#221f58] text-white font-semibold rounded-xl shadow transition-colors text-sm"
              >
                {loading ? "VERIFYING..." : "VERIFY & CONTINUE"}
              </button>
            </form>
          </div>
        )}

        {/* 3. FULL USER REGISTRATION FORM */}
        {currentStep === "REGISTRATION" && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6 paddingtwenty">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold headigggggfont text-center">
                Complete Your Profile
              </h2>
              <p className="text-sm text-stone-500 mt-3">
                Please provide your details to register for the competition.
              </p>
            </div>

            <form onSubmit={handleRegisterUser} className="space-y-4">
              <div>
                <p className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                  Verified Mobile Number
                </p>
                <input
                  type="text"
                  disabled
                  value={`+91 ${mobileNumber}`}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-100 text-stone-600 cursor-not-allowed font-medium text-sm"
                />
              </div>

              <div>
                <p className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                  Full Name *
                </p>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anitha Sundaram"
                  value={userData.fullName}
                  onChange={(e) =>
                    setUserData({ ...userData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
                />
              </div>

              <div>
                <p className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                  Email Address *
                </p>
                <input
                  type="email"
                  required
                  placeholder="e.g. anitha@example.com"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
                />
              </div>

              <div>
                <p className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                  Locality / Area in Chennai *
                </p>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mylapore, T. Nagar, Adyar"
                  value={userData.localityArea}
                  onChange={(e) =>
                    setUserData({ ...userData, localityArea: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
                />
              </div>

              <div>
                <p className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                  Instagram Handle (Optional)
                </p>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  value={userData.instagramHandle}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      instagramHandle: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={userData.termsAccepted}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      termsAccepted: e.target.checked,
                    })
                  }
                  className="mt-1 h-4 w-4 text-[#8B3C82] rounded border-stone-300 focus:ring-[#8B3C82]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs text-stone-600 leading-tight block cursor-pointer"
                >
                  <p>
                    I agree to the Contest{" "}
                    <button
                      className="!text-[#0000EE] underline cursor-pointer"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsTermsOpen(true);
                      }}
                    >
                      Terms & Conditions
                    </button>{" "}
                    and allow Super Chennai to showcase my Golu entry.
                  </p>
                </label>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full py-3.5 bg-[#312c85] hover:bg-[#221f58] text-white font-semibold rounded-xl shadow transition-colors text-sm"
              >
                {loading ? "REGISTERING..." : "REGISTER & PROCEED TO UPLOAD"}
              </button>
            </form>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            {/* Overlay Background animation - click panna close aagum */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsOpen(false)}
              className="absolute inset-0 "
            />

            {/* Modal Content Box animation */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#00000029] pb-3">
                <h3 className="text-lg font-semibold text-[#d63384] ">
                  Terms & Conditions
                </h3>
                <button
                  type="button"
                  onClick={() => setIsTermsOpen(false)}
                  className="text-black hover:text-stone-600 text-xl font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Terms Content */}
              <div className="mt-4 max-h-[40vh] overflow-y-auto pr-2 text-xs text-stone-600 space-y-3 leading-relaxed">
                <p>
                  <strong className="font-semibold">
                    1. Registration Period:
                  </strong>{" "}
                  Registrations will be open from 11 September 2026 to 15
                  September 2026.
                </p>
                <p>
                  <strong className="font-semibold">
                    2. Eligibility and Entry:
                  </strong>{" "}
                  The registration must be submitted by the household
                  responsible for arranging and displaying the Golu. Only one
                  entry per household is permitted.
                </p>
                <p>
                  <strong className="font-semibold">
                    3. Mandatory Photograph Submission:
                  </strong>{" "}
                  Participants must upload a minimum of five photographs and may
                  submit up to ten photographs of their Golu arrangement as part
                  of the registration process. Submission of at least five
                  photographs is mandatory for an entry to be considered
                  eligible. Participants may also upload videos of their Golu
                  arrangement, but video submission is optional.
                </p>
                <p>
                  <strong className="font-semibold">
                    4. Super Chennai Golu Corner – Extra Points:
                  </strong>{" "}
                  Additional points will be awarded to participants who create a
                  dedicated Super Chennai Golu Corner as part of their Golu
                  display. The corner should showcase Chennai of the future
                  while celebrating the city’s local flavour, character,
                  culture, heritage and uniqueness. The creativity, relevance
                  and overall presentation of this corner will be considered
                  during evaluation.
                </p>
                <p>
                  <strong className="font-semibold">
                    5. Judging Criteria:
                  </strong>{" "}
                  The Golu displays will be evaluated based on their
                  representation of culture and tradition, creativity, overall
                  presentation and, where applicable, the concept and execution
                  of the Super Chennai Golu Corner. The decision of the jury
                  will be final, subject to applicable law.
                </p>
                <p>
                  <strong className="font-semibold">
                    6. Originality and Year of Entry:
                  </strong>{" "}
                  The Golu arrangement submitted must be created and displayed
                  for the year 2026. Arrangements from previous years are not
                  eligible. Participants must ensure that the photographs and
                  any videos submitted accurately represent their 2026 Golu
                  display.
                </p>
                <p>
                  <strong className="font-semibold">
                    7. Consent for Use of Content:
                  </strong>{" "}
                  By submitting an entry, participants consent to Super Chennai
                  Marketing Private Limited using the photographs, videos,
                  captions and write-ups submitted as part of the contest for
                  contest-related communication, publicity, promotional
                  activities and documentation across its digital and other
                  media platforms, subject to applicable law.
                </p>
                <p>
                  <strong className="font-semibold">
                    8. Consent for Home Visit and Shoot:
                  </strong>{" "}
                  By submitting an entry, participants agree to coordinate with
                  Super Chennai Marketing Private Limited and its authorised
                  representatives for a possible visit to their residence to
                  photograph, film or otherwise document their Golu arrangement
                  for contest-related coverage and promotional content. Any home
                  visit or shoot will be scheduled in advance in consultation
                  with the participant.
                </p>
                <p>
                  <strong className="font-semibold">
                    9. Use of Personal Information:
                  </strong>{" "}
                  The information collected through the entry form will be used
                  for administering the contest, communicating with
                  participants, evaluating entries and carrying out related
                  contest activities. Personal information will not be used for
                  unrelated purposes and will be handled in accordance with
                  applicable privacy and data protection laws.
                </p>
                <p>
                  <strong className="font-semibold">
                    10. Content Standards:
                  </strong>{" "}
                  Entries containing offensive, objectionable, defamatory,
                  unlawful or otherwise inappropriate content, or content that
                  infringes the rights of any third party, may be rejected and
                  may result in immediate disqualification.
                </p>
                <p>
                  <strong className="font-semibold">
                    11. Accuracy of Information:
                  </strong>{" "}
                  Participants are responsible for ensuring that all information
                  provided in the registration form is accurate and complete.
                  Super Chennai Marketing Private Limited reserves the right to
                  reject entries containing false, misleading or incomplete
                  information.
                </p>
                <p>
                  <strong className="font-semibold">
                    12. Extension of Registration Deadline:
                  </strong>{" "}
                  Super Chennai Marketing Private Limited reserves the sole
                  right to extend the registration deadline, if required. Any
                  such extension will be communicated to participants in advance
                  through Super Chennai’s official social media pages. The
                  decision of the organiser regarding any extension shall be
                  final.
                </p>
                <p>
                  <strong className="font-semibold">
                    13. Contest Administration:
                  </strong>{" "}
                  Super Chennai Marketing Private Limited reserves the right to
                  verify entries, reject ineligible submissions and disqualify
                  participants who violate these Terms and Conditions. The
                  company may modify, suspend or cancel the contest where
                  necessary, subject to applicable law.
                </p>
                <p>
                  <strong className="font-semibold">
                    14. Acceptance of Terms:
                  </strong>{" "}
                  Submission of the registration form constitutes acceptance of
                  these Terms and Conditions by the participant submitting the
                  entry on behalf of the household.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// import React from 'react'

// export default function AuthFlow({
//   currentStep,
//   authMode,
//   mobileNumber,
//   setMobileNumber,
//   otp,
//   setOtp,
//   userData,
//   setUserData,
//   handleSendOtp,
//   handleVerifyOtp,
//   handleRegisterUser,
//   loading,
//   errorMessage,
// }) {
//   return (
//     <div className="max-w-md mx-auto mt-8 px-4">
//       {/* 1. MOBILE NUMBER ENTRY */}
//       {currentStep === 'AUTH_MOBILE' && (
//         <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
//           <h2 className="text-2xl font-bold text-stone-900 mb-1">
//             {authMode === 'register' ? 'Register Account' : 'Login via OTP'}
//           </h2>
//           <p className="text-sm text-stone-500 mb-6">
//             Enter your mobile number to receive verification OTP.
//           </p>

//           <form onSubmit={handleSendOtp} className="space-y-4">
//             <div>
//               <label className="block text-xs font-semibold text-stone-600 uppercase mb-2">
//                 Mobile Number *
//               </label>
//               <div className="flex rounded-xl border border-stone-300 overflow-hidden focus-within:border-[#8B3C82]">
//                 <span className="bg-stone-100 text-stone-600 px-3.5 py-3 font-medium text-sm border-r border-stone-300">
//                   +91
//                 </span>
//                 <input
//                   type="tel"
//                   maxLength={10}
//                   value={mobileNumber}
//                   onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
//                   placeholder="9876543210"
//                   className="w-full px-3 py-3 text-stone-900 outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {errorMessage && <p className="text-xs text-red-600 font-medium">{errorMessage}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm"
//             >
//               {loading ? 'Sending OTP...' : 'GET OTP'}
//             </button>
//           </form>
//         </div>
//       )}

//       {/* 2. OTP VERIFICATION */}
//       {currentStep === 'OTP_VERIFY' && (
//         <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
//           <h2 className="text-2xl font-bold text-stone-900 mb-1">Verify OTP</h2>
//           <p className="text-sm text-stone-500 mb-6">
//             Enter 6-digit code sent to <span className="font-semibold text-stone-800">+91 {mobileNumber}</span>
//           </p>

//           <form onSubmit={handleVerifyOtp} className="space-y-4">
//             <input
//               type="text"
//               maxLength={6}
//               value={otp}
//               onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//               placeholder="123456"
//               className="w-full text-center tracking-[0.5em] text-2xl font-bold py-3 border border-stone-300 rounded-xl focus:border-[#8B3C82] outline-none"
//               required
//             />

//             {errorMessage && <p className="text-xs text-red-600 font-medium text-center">{errorMessage}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm"
//             >
//               {loading ? 'VERIFYING...' : 'VERIFY & CONTINUE'}
//             </button>
//           </form>
//         </div>
//       )}

//       {/* 3. FULL USER REGISTRATION FORM (NAME, MOBILE, EMAIL, LOCALITY) */}
//       {currentStep === 'REGISTRATION' && (
//         <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
//           <div>
//             <h2 className="text-2xl font-bold text-stone-900 mb-1">Complete Your Profile</h2>
//             <p className="text-sm text-stone-500">Please provide your details to register for the competition.</p>
//           </div>

//           <form onSubmit={handleRegisterUser} className="space-y-4">
//             {/* Mobile Number (Read-only) */}
//             <div>
//               <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
//                 Verified Mobile Number
//               </label>
//               <input
//                 type="text"
//                 disabled
//                 value={`+91 ${mobileNumber}`}
//                 className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-100 text-stone-600 cursor-not-allowed font-medium text-sm"
//               />
//             </div>

//             {/* Full Name */}
//             <div>
//               <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="e.g. Anitha Sundaram"
//                 value={userData.fullName}
//                 onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
//               />
//             </div>

//             {/* Email Address */}
//             <div>
//               <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
//                 Email Address *
//               </label>
//               <input
//                 type="email"
//                 required
//                 placeholder="e.g. anitha@example.com"
//                 value={userData.email}
//                 onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
//               />
//             </div>

//             {/* Locality Area */}
//             <div>
//               <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
//                 Locality / Area in Chennai *
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="e.g. Mylapore, T. Nagar, Adyar"
//                 value={userData.localityArea}
//                 onChange={(e) => setUserData({ ...userData, localityArea: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
//               />
//             </div>

//             {/* Instagram Handle */}
//             <div>
//               <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
//                 Instagram Handle (Optional)
//               </label>
//               <input
//                 type="text"
//                 placeholder="@yourhandle"
//                 value={userData.instagramHandle}
//                 onChange={(e) => setUserData({ ...userData, instagramHandle: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
//               />
//             </div>

//             {/* Terms & Conditions */}
//             <div className="flex items-start gap-2 pt-2">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 checked={userData.termsAccepted}
//                 onChange={(e) => setUserData({ ...userData, termsAccepted: e.target.checked })}
//                 className="mt-1 h-4 w-4 text-[#8B3C82] rounded border-stone-300 focus:ring-[#8B3C82]"
//               />
//               <label htmlFor="terms" className="text-xs text-stone-600 leading-tight">
//                 I agree to the Contest Terms & Conditions and allow Super Chennai to showcase my Golu entry.
//               </label>
//             </div>

//             {errorMessage && <p className="text-xs text-red-600 font-medium">{errorMessage}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm mt-2"
//             >
//               {loading ? 'REGISTERING...' : 'REGISTER & PROCEED TO UPLOAD'}
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }