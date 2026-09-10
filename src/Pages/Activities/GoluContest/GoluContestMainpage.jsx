import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../../config";
import GoluBannerFestiveOverlay from "./BannerAnimation";
import { parseLexical } from "./Components/pageComponnt"

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
  const [showRegSuccessModal, setShowRegSuccessModal] = useState(false);
  const [showAlreadyRegisteredModal, setShowAlreadyRegisteredModal] = useState(false);
  const [existingUserData, setExistingUserData] = useState(null);


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

  // const handleSendOtp = async (e) => {
  //   e.preventDefault();
  //   if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
  //     setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
  //     return;
  //   }

  //   setLoading(true);
  //   setErrorMessage("");

  //   try {
  //     const res = await fetch(`${API_BASE_URL}/api/golu/send-otp`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         mobile: mobileNumber,
  //         mobileNumber: mobileNumber,
  //         mode: authMode,
  //       }),
  //     });

  //     const data = await res.json();

  //      if (data.isAlreadyRegistered) {
  //        setExistingUserData(data.user || null);
  //        setShowAlreadyRegisteredModal(true);
  //      } else {
  //        setCurrentStep("OTP_VERIFY");
  //      }

  //     if (!res.ok)
  //       throw new Error(
  //         data.message || "Failed to send OTP. Please try again.",
  //       );

  //     setCurrentStep("OTP_VERIFY");
  //   } catch (err) {
  //     setErrorMessage(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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

      if (!res.ok) {
        throw new Error(data.message || "Failed to send OTP. Please try again.");
      }

      // பயனர் ஏற்கனவே பதிவு செய்திருந்தால் Modal காட்டும் லோஜிக்
      if (data.isAlreadyRegistered) {
        setExistingUserData(data.user || null);
        setShowAlreadyRegisteredModal(true);
        return;
      }

      // புதிய பயனர் எனில் OTP verification பக்கத்திற்கு அழைத்துச் செல்லப்படும்
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
      setShowRegSuccessModal(true);
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
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      text: aboutGolu,
                      type: "text",
                      version: 1,
                    },
                  ],
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
    setShowRegSuccessModal(false);
    setShowAlreadyRegisteredModal(false);
    setExistingUserData(null);
  };

  if (loadingContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <span className="text-stone-500 font-medium">
          Loading contest page...
        </span>
      </div>
    );
  }

  const desktopImgUrl = pageData?.desktopImage?.url
    ? `${API_BASE_URL}${pageData.desktopImage.url}`
    : null;

  const mobileImgUrl = pageData?.mobileImage?.url
    ? `${API_BASE_URL}${pageData.mobileImage.url}`
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
    showRegSuccessModal,
    setShowRegSuccessModal,
    showAlreadyRegisteredModal, // <-- Add this
    setShowAlreadyRegisteredModal, // <-- Add this
    existingUserData, // <-- Add this
    handleSendOtp,
    handleVerifyOtp,
    handleRegisterUser,
    handleSubmitGolu,
    handleImageChange,
    handleRemoveImage,
    handleReset,
    startAuthFlow,
  };

  const items = [
    { text: "CREATIVITY", icon: "/images/golu/Diya-icons.png" },
    { text: "INNOVATION ", icon: "/images/golu/veena-Icon.png" },
    { text: "TRADITION", icon: "/images/golu/Lotus.png" },
    { text: "MODERN FUTURE", icon: "/images/golu/Kolam.png" },
    { text: "SUPERCHENNAI CORNER", icon: "/images/golu/elephant.png" },
  ];

  return (
    <>
      {pageData && (
        <Helmet>
          <title>{pageData.meta?.title || pageData.title}</title>
          <meta
            name="description"
            content={pageData.meta?.description || pageData.title}
          />
          <link
            rel="canonical"
            href={`${typeof window !== "undefined" ? window.location.origin : ""}/contest/navaratri-golu`}
          />
        </Helmet>
      )}

      {desktopImgUrl && (
        <section
          className="accaodomationBannerSection golummainpagee relative overflow-hidden cursor-pointer"
          //  href="#golucontest"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("golucontest")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <img
            className="hidden sm:block w-full"
            src={desktopImgUrl}
            alt={pageData?.title || "Golu Contest"}
          />
          <img
            className="block sm:hidden w-full"
            src={mobileImgUrl}
            alt="Golu Event"
          />

          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText ">
              <div className="breadCrum mb-4">
                <a href="#"></a>{" "}
              </div>
            </div>
          </div>
          <GoluBannerFestiveOverlay />
        </section>
      )}

      <main className="golupaggggeee" id="poppinsfamilyybody">
        <div className="">
          <div className="marquee-section">
            <h1 className="hidden">navratri golu</h1>
            <div className="marquee-container">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="marquee-content">
                  {items.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="marquee-item">
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="marquee-icon-img"
                        />
                        <span className="marquee-text">{item.text}</span>
                      </div>
                      <span className="marquee-dot">•</span>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {pageData?.content &&
            parseLexical(pageData.content, contestStateProps)}

          {!pageData?.content && (
            <GoluContestBlockSection
              blockFields={CONTEST_SETTINGS}
              {...contestStateProps}
            />
          )}
        </div>
      </main>
    </>
  );
}
