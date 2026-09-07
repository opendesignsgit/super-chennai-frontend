import React from 'react'

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
  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      {/* 1. MOBILE NUMBER ENTRY */}
      {currentStep === 'AUTH_MOBILE' && (
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-900 mb-1">
            {authMode === 'register' ? 'Register Account' : 'Login via OTP'}
          </h2>
          <p className="text-sm text-stone-500 mb-6">
            Enter your mobile number to receive verification OTP.
          </p>

          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-2">
                Mobile Number *
              </label>
              <div className="flex rounded-xl border border-stone-300 overflow-hidden focus-within:border-[#8B3C82]">
                <span className="bg-stone-100 text-stone-600 px-3.5 py-3 font-medium text-sm border-r border-stone-300">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="9876543210"
                  className="w-full px-3 py-3 text-stone-900 outline-none"
                  required
                />
              </div>
            </div>

            {errorMessage && <p className="text-xs text-red-600 font-medium">{errorMessage}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm"
            >
              {loading ? 'Sending OTP...' : 'GET OTP'}
            </button>
          </form>
        </div>
      )}

      {/* 2. OTP VERIFICATION */}
      {currentStep === 'OTP_VERIFY' && (
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-900 mb-1">Verify OTP</h2>
          <p className="text-sm text-stone-500 mb-6">
            Enter 6-digit code sent to <span className="font-semibold text-stone-800">+91 {mobileNumber}</span>
          </p>

          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              placeholder="123456"
              className="w-full text-center tracking-[0.5em] text-2xl font-bold py-3 border border-stone-300 rounded-xl focus:border-[#8B3C82] outline-none"
              required
            />

            {errorMessage && <p className="text-xs text-red-600 font-medium text-center">{errorMessage}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm"
            >
              {loading ? 'VERIFYING...' : 'VERIFY & CONTINUE'}
            </button>
          </form>
        </div>
      )}

      {/* 3. FULL USER REGISTRATION FORM (NAME, MOBILE, EMAIL, LOCALITY) */}
      {currentStep === 'REGISTRATION' && (
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-1">Complete Your Profile</h2>
            <p className="text-sm text-stone-500">Please provide your details to register for the competition.</p>
          </div>

          <form onSubmit={handleRegisterUser} className="space-y-4">
            {/* Mobile Number (Read-only) */}
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Verified Mobile Number
              </label>
              <input
                type="text"
                disabled
                value={`+91 ${mobileNumber}`}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-100 text-stone-600 cursor-not-allowed font-medium text-sm"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anitha Sundaram"
                value={userData.fullName}
                onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. anitha@example.com"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
              />
            </div>

            {/* Locality Area */}
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Locality / Area in Chennai *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mylapore, T. Nagar, Adyar"
                value={userData.localityArea}
                onChange={(e) => setUserData({ ...userData, localityArea: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
              />
            </div>

            {/* Instagram Handle */}
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Instagram Handle (Optional)
              </label>
              <input
                type="text"
                placeholder="@yourhandle"
                value={userData.instagramHandle}
                onChange={(e) => setUserData({ ...userData, instagramHandle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm text-stone-900"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={userData.termsAccepted}
                onChange={(e) => setUserData({ ...userData, termsAccepted: e.target.checked })}
                className="mt-1 h-4 w-4 text-[#8B3C82] rounded border-stone-300 focus:ring-[#8B3C82]"
              />
              <label htmlFor="terms" className="text-xs text-stone-600 leading-tight">
                I agree to the Contest Terms & Conditions and allow Super Chennai to showcase my Golu entry.
              </label>
            </div>

            {errorMessage && <p className="text-xs text-red-600 font-medium">{errorMessage}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-sm mt-2"
            >
              {loading ? 'REGISTERING...' : 'REGISTER & PROCEED TO UPLOAD'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}