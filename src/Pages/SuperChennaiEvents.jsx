import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL_API } from "../../config";

export default function SuperChennaiEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState("phone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [agreeShare, setAgreeShare] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const isPhoneStepValid =
    name.trim().length > 0 && phone.trim().length === 10 && agreeShare;
  const isOtpStepValid = otp.trim().length === 6 && agreeShare;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const isVerified = localStorage.getItem("sc_contest_verified");

    if (!isVerified) {
      setIsModalOpen(true);
    }
  }, []);

  const sendOtp = async () => {
    if (!isPhoneStepValid) {
      setError("Please fill required fields and accept the terms");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE_URL_API}/contest/send-otp-contest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          phone,
          agreeShare,
          subscribe,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }

      console.log("OTP sent:", data);
      setStep("otp");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const verifyOtp = async () => {
    if (!isOtpStepValid) {
      setError("Please enter a valid OTP and accept the terms");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `${API_BASE_URL_API}/contest/verify-otp-contest`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone,
            otp,
          }),
        }
      );

      const data = await res.json();
      if (data.success && data.data?.is_verified) {
        // ⭐ KEY PART
        localStorage.setItem("sc_contest_verified", "true");
        localStorage.setItem("sc_contest_phone", phone);

        setStep("success");

        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      } else {
        setError("OTP verification failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Super Chennai Contest: Pride, Talent, & Passion</title>
        <meta
          name="description"
          content="Join the Super Chennai Contest and showcase your talent, creativity, and love for Chennai. Celebrate the spirit of our vibrant city!"
        />
        <link rel="canonical" href="/superchennai-contest" />
      </Helmet>

      <div className="NewsLetterPage">
        <section className="accaodomationBannerSection">
          <div>
            <img
              className="eventsCalenderIamge"
              src="/images/contest.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Superchennai Contest</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> -{" "}
                <a href="">Superchennai Contest</a>{" "}
              </div>
            </div>
          </div>
        </section>
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="workIntro">
              <h1>Celebrate the Spirit of Our City!</h1>
              <p>
                Chennai isn’t just a city; it’s an emotion, a rhythm, and a
                timeless blend of tradition and modernity. The SuperChennai
                Contest is here to celebrate that spirit by bringing out the
                incredible talent of its people! This is your chance to showcase
                your skills, creativity, and love for Namma Chennai. From
                culture to art, from stories to performances—every expression of
                talent is welcome. Let the city see the best of you!
              </p>
              <p>
                This contest is about celebrating the pride, passion, and
                memories that define Chennai. By participating, you’re not just
                sharing your story—you’re becoming part of a collective
                celebration of everything that makes this city unique. Winners
                will be recognized, celebrated, and featured as proud voices of
                our city. Because every Chennaite has a story worth telling, and
                this is your moment to let the world hear yours.
              </p>
            </div>
          </div>
        </div>

        {/* {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999] animate-fade-in">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 w-full max-w-lg border relative">
              <div className="text-center mb-6">
                <h2 className="themelink-color formheadingtheme hotshotstext">
                  SuperChennai Contest
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Join the SuperChennai Contest and be part of an exciting city
                  celebration with exclusive rewards, local experiences, and
                  festival updates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {step !== "success" && (
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your full name"
                        required
                      />
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {step === "phone" && (
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/\D/g, ""))
                        }
                        maxLength={10}
                        className="w-full pl-12 pr-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter 10-digit mobile number"
                        required
                      />
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {step === "otp" && (
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">
                      Enter OTP *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value.replace(/\D/g, ""))
                        }
                        maxLength={6}
                        className="w-full pl-12 pr-4 text-center tracking-widest text-xl py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
                        placeholder="••••••"
                        required
                      />
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {step !== "success" && (
                  <div className="space-y-3 text-sm bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={agreeShare}
                        onChange={(e) => setAgreeShare(e.target.checked)}
                        required
                      />
                      <span>
                        I agree to share my name and phone number with
                        SuperChennai for contest-related communication.
                      </span>
                    </label>

                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={subscribe}
                        onChange={(e) => setSubscribe(e.target.checked)}
                      />
                      <span>
                        {" "}
                        I would like to subscribe to the SuperChennai
                        newsletter.
                      </span>
                    </label>
                  </div>
                )}

                {step === "phone" && !isPhoneStepValid && (
                  <p className="text-xs text-red-500 text-center animate-pulse">
                    * Please complete the required fields to receive OTP
                  </p>
                )}

                {step === "otp" && !isOtpStepValid && (
                  <p className="text-xs text-red-500 text-center animate-pulse">
                    * Enter valid OTP and accept terms
                  </p>
                )}

                {step === "phone" && (
                  <button
                    type="button"
                    onClick={sendOtp}
                    disabled={!isPhoneStepValid}
                    className={`w-full py-3 rounded-lg font-semibold theme-button-full transition-all duration-300 transform hover:scale-105
              ${
                isPhoneStepValid
                  ? "bg-gradient-to-r text-white shadow-lg"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }
            `}
                  >
                    Send OTP
                  </button>
                )}

                {step === "otp" && (
                  <button
                    type="button"
                    onClick={verifyOtp}
                    disabled={!isOtpStepValid}
                    className={`w-full py-3 rounded-lg font-semibold theme-button-full transition-all duration-300 transform hover:scale-105
              ${
                isOtpStepValid
                  ? "bg-gradient-to-r text-white shadow-lg"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }
            `}
                  >
                    Verify OTP & Enter Contest
                  </button>
                )}

                {step === "success" && (
                  <div className="text-center py-6 animate-bounce">
                    <p className="text-green-600 text-xl font-semibold">
                      ✅ Registration Successful
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      You are officially entered into the SuperChennai Contest
                      🎉
                    </p>
                  </div>
                )}
              </form>

              <p className="text-xs text-gray-400 text-center mt-6">
                By continuing, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </div>
        )} */}

        <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter !pt-7">
          <div className="container max-w-7xl mx-auto ">
            <div className="flex superchennaiEventsMainContainer">
              <a
                className="superchennaiEventsSection"
                href="contest/hotshots-photography-contest"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/contest-main.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">Hotshots Contest</p>
                </div>
              </a>
              <a
                className="superchennaiEventsSection"
                href="contest/margazhi-month-photography-contest"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/margazhi-photography-c.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">Photography Contest</p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="contests/chennai-quiz"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/quiz-superchennai-inner.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">SuperChennai Quiz</p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="/reimagine-chennai-AI-art-challenge"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/ai-art-challenge-thumbnail.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">AI REIMAGINE</p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="/car-treasure-hunt"
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/car-rally.jpg"
                    alt="Left Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">CAR TREASURE HUNT</p>
                </div>
              </a>

              {/* Right */}

              <a className="superchennaiEventsSection" href="/namma-stories">
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/namma-stories-detail.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">NAMMA STORIES</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
