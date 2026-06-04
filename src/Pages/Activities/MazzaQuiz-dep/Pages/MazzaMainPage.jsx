import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MazzaMainPage() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };

  const handleStartQuiz = () => {
    if (!isChecked) {
      toast.error("Please agree to the Terms & Conditions");
      return;
    }

    navigate("/majaa-quiz/login");
  };

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const menifeto = document.querySelector("#menifeto-tab");
    const hotshots = document.querySelector("#hotshots-event-tab");
    const sticky = document.querySelector("#mainfirst");

    if (menifeto) menifeto.style.display = "none";
    if (hotshots) hotshots.style.display = "none";
    if (sticky) sticky.style.setProperty("display", "none", "important");

    return () => {
      if (menifeto) menifeto.style.display = "";
      if (hotshots) hotshots.style.display = "";
      if (sticky) sticky.style.display = "";
    };
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Day to Deliver Quiz",
    description:
      "Super Chennai Trivia brings a fun quiz on Chennai, culture, current affairs, civic awareness, and TN Elections.",
    image:
      "https://www.superchennai.com/images/events/superchennai-triva-2025.png",
    startDate: "2026-04-13T11:00+05:30",
    endDate: "2026-04-23T24:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://www.superchennai.com/day-to-deliver-quiz",
    },
    performer: {
      "@type": "Organization",
      name: "Super Chennai",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Super Chennai Day to Deliver Quiz | Daily Trivia Challenge
        </title>

        <meta
          name="description"
          content="Participate in the Day to Deliver Quiz. Test your knowledge, stay informed, and stand a chance to win exciting vouchers."
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <ToastContainer position="top-center" />

      {/* Banner */}

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/quiz-banner.jpeg"
            alt="Super Chennai Quiz"
            loading="lazy"
          />

          <img
            className="block sm:hidden"
            src="/images/events/quiz-banner.jpeg"
            alt="Super Chennai Quiz Mobile"
            loading="lazy"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Mazza Quiz Challenge</h1>

            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>Mazza Quiz Challenge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logo */}

      <div className="drasection">
        <img src="/images/dra-logo.png" alt="DRA Logo" loading="lazy" />
      </div>

      {/* Content */}

      <section
        className="w-full flex flex-col text-center py-10"
        style={{ paddingBottom: 0 }}
      >
        <div className="container max-w-7xl mx-auto px-4 !mb-0">
          <h2 className="chennaiInvestmentsHeading leading-tight">
            Mazza Quiz Challenge
          </h2>

          <div className="workIntro">
            <p>
              Test your knowledge, challenge yourself, and participate in the
              Mazza Quiz Challenge. Answer daily quiz questions, stay engaged,
              and stand a chance to win exciting rewards. Participate, learn
              something new, and see how well you score against other quiz
              enthusiasts.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex justify-center items-center gap-1 sksksksks">
              <input
                className="inputcheckoososs"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />

              <span className="text-sm font-semibold ihavereaddd">
                I have read and agree to the{" "}
                <span className="termssss cursor-pointer" onClick={togglePopup}>
                  Terms & Conditions
                </span>{" "}
                and contest rules.
              </span>
            </div>
          </div>

          <button
            onClick={handleStartQuiz}
            className="text-white py-2 px-4 rounded-lg transition-colors font-semibold mb-6 theme-button-small cursor-pointer mt-3"
            style={{
              background: "linear-gradient(90deg, #5A67D8, #9F4DB8)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #4C51BF, #8B3FA8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #5A67D8, #9F4DB8)")
            }
          >
            Start Quiz
          </button>
        </div>

        <img
          src="/images/events/superchennai-triva-2025.png"
          alt="Trivia 2025"
          loading="lazy"
        />
      </section>

      {/* Terms Popup */}

      {popupOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl p-10 animate-fadeIn termsandconditionpopup">
            <h2 className="text-3xl text-[#a44294] font-semibold text-center termsandconsiodid">
              Terms and Conditions
            </h2>

            <ul className="text-white p-6 space-y-4 max-w-xl popupwidthdd">
              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p
                  className="text-sm text-[#000] leading-relaxed"
                  style={{ fontWeight: 500 }}
                >
                  Be quick and smart! The first 3 participants who submit the
                  correct answer will win exciting vouchers.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p className="text-sm text-[#000]">
                  Timing matters: Voting is open from
                  <strong> 8:00 AM to 8:00 PM</strong> only.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p className="text-sm text-[#000] leading-relaxed">
                  Winners are selected based on speed and accuracy. Vouchers are
                  non-transferable and cannot be exchanged for cash.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p className="text-sm text-[#000] leading-relaxed">
                  The organizer’s decision will be final in all cases.
                </p>
              </li>
            </ul>

            <button
              onClick={togglePopup}
              className="absolute top-8 right-7 w-8 h-8 rounded-full bg-[#a44294] text-white hover:bg-gray-800 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}


