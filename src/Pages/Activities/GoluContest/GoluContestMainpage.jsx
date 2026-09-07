import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../../config";
import AuthFlow from "./AuthFlow"; 

// ==========================================
// GOLU CONTEST BLOCK SECTION
// ==========================================
const GoluContestBlockSection = ({
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
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-10 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-900">
              Super Chennai Golu Contest
            </h2>
            <p className="text-stone-600 text-sm">
              Participate now, upload your creative Golu setup, and win exciting prizes!
            </p>
            <div className="space-y-3">
              <button
                onClick={() => startAuthFlow("register")}
                className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors text-sm"
              >
                Register & Participate
              </button>
              <button
                onClick={() => startAuthFlow("login")}
                className="w-full py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl transition-colors text-sm border border-stone-300"
              >
                Already Registered? Login via OTP
              </button>
            </div>
          </div>
        </div>
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

      {/* 2. PHOTO SUBMISSION FORM */}
      {currentStep === "SUBMIT" && (
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
              {/* Golu Photographs */}
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

              {/* Super Chennai Corner Photographs */}
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
                        onClick={() => handleRemoveImage(imgIdx, "superChennai")}
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
                        onChange={(e) => handleImageChange(e, "superChennai", scMax)}
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
                <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
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
              Our team will review your entry. Winners will be announced after Navratri!
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

/* ---------------------------------------------
   Lexical Helpers
--------------------------------------------- */
const FORMAT = { BOLD: 1, ITALIC: 1 << 3, UNDERLINE: 1 << 1 };

const renderTextChildren = (children, allowFormatting = true) => {
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
      if (!allowFormatting) return <span key={i}>{renderTextChildren(child.children, false)}</span>;
      return (
        <a key={i} href={child.fields?.url} target="_blank" rel="noopener noreferrer" className="text-[#8B3C82] underline">
          {renderTextChildren(child.children, true)}
        </a>
      );
    }
    if (child.type === "linebreak") return <br key={i} />;
    if (child.children) return <span key={i}>{renderTextChildren(child.children, allowFormatting)}</span>;
    return null;
  });
};

const parseLexical = (content, contestState) => {
  if (!content?.root?.children) return null;
  const headingClasses = { h1: "blog-h1", h2: "blog-h2", h3: "blog-h3" };

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      case "paragraph":
        return <p key={idx} className="mb-5 text-base text-gray-700 leading-relaxed">{renderTextChildren(node.children)}</p>;
      case "heading": {
        const Tag = node.tag || "h2";
        return <Tag key={idx} className={headingClasses[Tag] || "blog-h2"}>{renderTextChildren(node.children)}</Tag>;
      }
      case "block": {
        const blockType = node.fields?.blockType;
        const fields = node.fields || {};
        if (blockType === "goluContestBlock") {
          return <GoluContestBlockSection key={idx} blockFields={fields} {...contestState} />;
        }
        return null;
      }
      default: return null;
    }
  });
};

// ==========================================
// MAIN PAGE LAYOUT CONTAINER
// ==========================================
export default function GoluContestMain() {
  const [pageData, setPageData] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);

  // States
  const [currentStep, setCurrentStep] = useState("LANDING"); 
  const [authMode, setAuthMode] = useState("register");
  const [authToken, setAuthToken] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState({
    id: "",
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

  const CONTEST_SETTINGS = {
    goluMinImages: 2,
    superChennaiMinImages: 1,
  };

  useEffect(() => {
    const fetchGoluLanding = async () => {
      try {
        setLoadingContent(true);
        const res = await fetch(`${API_BASE_URL}/api/globals/goluLandingPage`);
        const data = await res.json();
        if (res.ok && data) {
          setPageData(data);
        }
      } catch (err) {
        console.error("Golu landing fetch error:", err);
      } finally {
        setLoadingContent(false);
      }
    };

    fetchGoluLanding();

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
          id: data.user.id || data.user._id,
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
        throw new Error(data.message || "Failed to send OTP. Please try again.");

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
      throw new Error(
        data.message || data.errors?.[0]?.message || "Image upload failed.",
      );
    }
    return data.doc?.id || data.doc?._id;
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

      // Safe Lexical JSON generator fallback for description text
      const formattedAboutGolu = aboutGolu.trim()
        ? {
            root: {
              children: [
                {
                  children: [{ detail: 0, format: 0, mode: "normal", text: aboutGolu, type: "text", version: 1 }],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          }
        : null;

      const payloadBody = {
        participant: userData.id,
        goluPhotographs: goluMediaIds.map((id) => ({ image: id })),
        superChennaiCornerPhotographs: superChennaiMediaIds.map((id) => ({
          image: id,
        })),
        ...(formattedAboutGolu && { aboutYourGolu: formattedAboutGolu }),
        status: "pendingReview",
      };

      const res = await fetch(`${API_BASE_URL}/api/golu-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authToken && { Authorization: `Bearer ` + authToken }),
        },
        body: JSON.stringify(payloadBody),
      });

      const data = await res.json();

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

  if (loadingContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <span className="text-stone-500 font-medium">Loading contest page...</span>
      </div>
    );
  }

  const desktopImgUrl = pageData?.desktopImage?.url
    ? `${API_BASE_URL}${pageData.desktopImage.url}`
    : null;

  const contestStateProps = {
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
    handleSendOtp,
    handleVerifyOtp,
    handleRegisterUser,
    handleSubmitGolu,
    handleImageChange,
    handleRemoveImage,
    handleReset,
    startAuthFlow,
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased">
      {pageData && (
        <Helmet>
          <title>{pageData.meta?.title || pageData.title}</title>
          <meta
            name="description"
            content={pageData.meta?.description || pageData.title}
          />
        </Helmet>
      )}

      {desktopImgUrl && (
       
        <div className="relative w-full overflow-hidden bg-stone-900">
          <div className="w-full h-[280px] sm:h-[400px] md:h-[450px]">
            <img
              src={desktopImgUrl}
              alt={pageData?.title || "Golu Contest"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
              {pageData?.title || "Super Chennai Golu Contest 2026"}
            </h1>
          </div>
        </div>
      )}

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="blog">
          {pageData?.content && parseLexical(pageData.content, contestStateProps)}
          
          {!pageData?.content && (
            <GoluContestBlockSection blockFields={CONTEST_SETTINGS} {...contestStateProps} />
          )}
        </div>
      </main>
    </div>
  );
}