import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../../config";
import AuthFlow from "./AuthFlow";
import GoluSection from "./GoluSection";

const CONTEST_SETTINGS = {
  contestName: "Super Chennai Golu Contest 2026",
  heroTitle: "SUPER CHENNAI GOLU CONTEST 2026",
  heroSubtitle: "Celebrate Chennai Navratri Traditions & Win Exciting Prizes",
  heroDescription:
    "Decorate your traditional Golu display, add a special Super Chennai touch, upload photographs, and share your cultural passion with the city!",
  goluMinImages: 2,
  goluMaxImages: 5,
  superChennaiMinImages: 1,
  superChennaiMaxImages: 3,
};

const convertToPayloadLexical = (text) => ({
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    children: [
      {
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: "text",
            text: text || "",
            format: 0,
            detail: 0,
            mode: "normal",
            style: "",
            version: 1,
          },
        ],
      },
    ],
  },
});

export default function GoluContestMain() {
  const [currentStep, setCurrentStep] = useState("LANDING");
  const [authMode, setAuthMode] = useState("register");

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    localityArea: "",
    instagramHandle: "",
    termsAccepted: false,
  });

  const [goluImages, setGoluImages] = useState([]);
  const [superChennaiImages, setSuperChennaiImages] = useState([]);
  const [aboutGolu, setAboutGolu] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("golu_auth_token");
    if (savedToken) {
      setAuthToken(savedToken);
      fetchUserData(savedToken);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/golu-participants/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.user) {
        setUserData({
          id: data.user.id,
          fullName: data.user.fullName || "",
          email: data.user.email || "",
          localityArea: data.user.localityArea || "",
          instagramHandle: data.user.instagramHandle || "",
          termsAccepted: true,
        });
        setMobileNumber(data.user.mobileNumber || "");
      } else {
        localStorage.removeItem("golu_auth_token");
        setAuthToken("");
      }
    } catch (err) {
      console.error("Failed to fetch user context", err);
    } finally {
      setLoading(false);
    }
  };

  const startAuthFlow = (mode) => {
    setAuthMode(mode);
    setErrorMessage("");
    setCurrentStep("AUTH_MOBILE");
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/golu/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile: mobileNumber,
          mobileNumber: mobileNumber,
          mode: authMode,
        }),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(
          data.message || "Failed to send OTP. Please try again.",
        );

      setCurrentStep("OTP_VERIFY");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setErrorMessage("Please enter a complete 6-digit OTP.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/golu/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber, otp, mode: authMode }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "OTP verification failed.");

      if (data.token) {
        localStorage.setItem("golu_auth_token", data.token);
        setAuthToken(data.token);
      }

      if (data.user) {
        setUserData((prev) => ({
          ...prev,
          id: data.user.id || data.user._id,
          fullName: data.user.fullName || prev.fullName,
          email: data.user.email || prev.email,
          localityArea: data.user.localityArea || prev.localityArea,
          instagramHandle: data.user.instagramHandle || prev.instagramHandle,
          termsAccepted: true,
        }));
      }

      if (authMode === "login") {
        setCurrentStep("SUBMIT");
      } else {
        setCurrentStep("REGISTRATION");
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    if (
      !userData.fullName.trim() ||
      !userData.email.trim() ||
      !userData.localityArea.trim()
    ) {
      setErrorMessage("Please fill in all mandatory fields.");
      return;
    }
    if (!userData.termsAccepted) {
      setErrorMessage("You must accept the terms & conditions.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/golu-users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authToken && { Authorization: `Bearer ` + authToken }),
        },
        body: JSON.stringify({
          fullName: userData.fullName,
          email: userData.email,
          mobileNumber: mobileNumber,
          localityArea: userData.localityArea,
          instagramHandle: userData.instagramHandle,
          termsAccepted: userData.termsAccepted,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Payload Validation Error Details:", data);
        const specificError =
          data.errors?.[0]?.message || data.message || "Registration failed.";
        throw new Error(specificError);
      }

      if (data.token) {
        localStorage.setItem("golu_auth_token", data.token);
        setAuthToken(data.token);
      }

      const registeredUser = data.doc || data.user || data;
      if (registeredUser && (registeredUser.id || registeredUser._id)) {
        setUserData((prev) => ({
          ...prev,
          id: registeredUser.id || registeredUser._id,
        }));
      }

      setCurrentStep("SUBMIT");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const uploadSingleMedia = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", `Golu Contest Upload - ${file.name}`);

    const res = await fetch(`${API_BASE_URL}/api/media`, {
      method: "POST",
      headers: {
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Payload Media Upload Error Details:", data);
      throw new Error(
        data.message || data.errors?.[0]?.message || "Image upload failed.",
      );
    }
    return data.doc.id;
  };

  const handleSubmitGolu = async (e) => {
    e.preventDefault();

    if (!userData.id) {
      setErrorMessage(
        "User session missing or ID not found. Please log in again.",
      );
      return;
    }

    if (goluImages.length < CONTEST_SETTINGS.goluMinImages) {
      setErrorMessage(
        `Please upload at least ${CONTEST_SETTINGS.goluMinImages} Golu photographs.`,
      );
      return;
    }
    if (superChennaiImages.length < CONTEST_SETTINGS.superChennaiMinImages) {
      setErrorMessage(
        `Please upload at least ${CONTEST_SETTINGS.superChennaiMinImages} Super Chennai Corner photograph.`,
      );
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const goluMediaIds = await Promise.all(goluImages.map(uploadSingleMedia));
      const superChennaiMediaIds = await Promise.all(
        superChennaiImages.map(uploadSingleMedia),
      );

      const payloadBody = {
        participant: userData.id,
        goluPhotographs: goluMediaIds.map((id) => ({ image: id })),
        superChennaiCornerPhotographs: superChennaiMediaIds.map((id) => ({
          image: id,
        })),
        aboutYourGolu: convertToPayloadLexical(aboutGolu),
        status: "pendingReview",
      };

      console.log("Submitting Payload Body:", payloadBody);

      const res = await fetch(`${API_BASE_URL}/api/golu-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        body: JSON.stringify(payloadBody),
      });

      const data = await res.json();
      console.log("Submission Response:", data);

      if (!res.ok) {
        throw new Error(
          data.message || data.errors?.[0]?.message || "Submission failed.",
        );
      }

      setCurrentStep("SUCCESS");
    } catch (err) {
      setErrorMessage(
        err.message || "Submission failed. Please check your photos.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e, targetState, maxLimit) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    if (targetState === "golu") {
      setGoluImages([...goluImages, ...selectedFiles].slice(0, maxLimit));
    } else {
      setSuperChennaiImages(
        [...superChennaiImages, ...selectedFiles].slice(0, maxLimit),
      );
    }
  };

  const handleRemoveImage = (index, targetState) => {
    if (targetState === "golu") {
      setGoluImages(goluImages.filter((_, i) => i !== index));
    } else {
      setSuperChennaiImages(superChennaiImages.filter((_, i) => i !== index));
    }
  };

  const handleReset = () => {
    setCurrentStep("LANDING");
    setMobileNumber("");
    setOtp("");
    setGoluImages([]);
    setSuperChennaiImages([]);
    setAboutGolu("");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased pb-12">
      {/* PERSISTENT HERO BANNER */}
      {currentStep !== "SUCCESS" && (
        <section className="bg-gradient-to-b from-[#6a2b63] via-[#7B3173] to-[#8B3C82] text-white py-12 px-4 text-center relative overflow-hidden ">
          <div className="max-w-3xl mx-auto relative z-10 mt-30">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-amber-400/20 text-amber-200 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4">
              ✨ Navratri Special 2026 ✨
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight">
              {CONTEST_SETTINGS.heroTitle}
            </h2>
            <p className="text-base sm:text-lg text-amber-100 font-medium mb-4 max-w-xl mx-auto">
              {CONTEST_SETTINGS.heroSubtitle}
            </p>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-6">
              {CONTEST_SETTINGS.heroDescription}
            </p>

            {currentStep === "LANDING" && (
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-md mx-auto">
                <button
                  onClick={() => startAuthFlow("register")}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold rounded-full shadow-lg transition-transform active:scale-95 text-sm"
                >
                  REGISTER NOW
                </button>
                <button
                  onClick={() => startAuthFlow("login")}
                  className="w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-colors text-sm"
                >
                  LOGIN TO SUBMIT
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* LANDING PAGE SECTIONS */}
      {currentStep === "LANDING" && (
        <GoluSection contestSettings={CONTEST_SETTINGS} />
      )}

      {/* AUTHENTICATION FLOW (MOBILE, OTP, REGISTRATION FORM) */}
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

      {/* PHOTO SUBMISSION FORM */}
      {currentStep === "SUBMIT" && (
        <div className="max-w-2xl mx-auto mt-8 px-4">
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
              {/* Golu Photographs */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-stone-800">
                    1. GOLU PHOTOGRAPHS{" "}
                    <span className="text-xs text-stone-500 font-normal">
                      (Min {CONTEST_SETTINGS.goluMinImages}, Max{" "}
                      {CONTEST_SETTINGS.goluMaxImages})
                    </span>
                  </label>
                  <span className="text-xs font-medium text-stone-500">
                    {goluImages.length}/{CONTEST_SETTINGS.goluMaxImages}{" "}
                    Uploaded
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {goluImages.map((file, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-100"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx, "golu")}
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {goluImages.length < CONTEST_SETTINGS.goluMaxImages && (
                    <label className="aspect-square rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 cursor-pointer hover:border-[#8B3C82] hover:text-[#8B3C82] transition-colors">
                      <span className="text-2xl">+</span>
                      <span className="text-xs font-medium">Add Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) =>
                          handleImageChange(
                            e,
                            "golu",
                            CONTEST_SETTINGS.goluMaxImages,
                          )
                        }
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Super Chennai Corner Photographs */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-stone-800">
                    2. SUPER CHENNAI CORNER PHOTOGRAPHS{" "}
                    <span className="text-xs text-stone-500 font-normal">
                      (Min {CONTEST_SETTINGS.superChennaiMinImages}, Max{" "}
                      {CONTEST_SETTINGS.superChennaiMaxImages})
                    </span>
                  </label>
                  <span className="text-xs font-medium text-stone-500">
                    {superChennaiImages.length}/
                    {CONTEST_SETTINGS.superChennaiMaxImages} Uploaded
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {superChennaiImages.map((file, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-100"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx, "superChennai")}
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {superChennaiImages.length <
                    CONTEST_SETTINGS.superChennaiMaxImages && (
                    <label className="aspect-square rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 cursor-pointer hover:border-[#8B3C82] hover:text-[#8B3C82] transition-colors">
                      <span className="text-2xl">+</span>
                      <span className="text-xs font-medium">Add Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) =>
                          handleImageChange(
                            e,
                            "superChennai",
                            CONTEST_SETTINGS.superChennaiMaxImages,
                          )
                        }
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Description */}
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
      )}

      {/* CONFIRMATION PAGE */}
      {currentStep === "SUCCESS" && (
        <div className="max-w-md mx-auto mt-16 px-4 text-center">
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
}
