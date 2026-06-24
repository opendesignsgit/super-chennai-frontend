import { useEffect, useState, useMemo } from "react";
import API from "../services/api";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

export default function MazzaQuestions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const isAnswered = (qId) => answeredQuestions.includes(qId);
  const topRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  const [errorModal, setErrorModal] = useState({
    visible: false,
    message: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("You have been logged out.");
    navigate("/majaa-quiz/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.info("You need to login to access the quiz.");
      navigate("/majaa-quiz/login");
      return;
    }

    fetchQuestions();
    fetchAnsweredQuestions();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/majaa-quiz/questions", { replace: true });
    }
  }, []);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await API.get("/majaa/questions");

      setQuestions(res.data.data || []);

      // console.log("Questions:", res.data.data);
    } catch (err) {
      console.error(err);
      setQuestions([]);
    }
  };
  const fetchAnsweredQuestions = async () => {
    try {
      const res = await API.get("/majaa/questions/answers/results");
      const answeredIds = (res.data.results || []).map((r) => r.quiz_id);
      setAnsweredQuestions(answeredIds);
    } catch (err) {
      console.error("Failed to fetch answered questions", err);
    }
  };

  const handleChange = (qId, value) => {
    setAnswers((prev) => {
      if (prev[qId] === value) {
        const updated = { ...prev };
        delete updated[qId];
        return updated;
      }

      return { ...prev, [qId]: value };
    });
  };

  const questionMap = useMemo(() => {
    if (!Array.isArray(questions)) return {};

    return questions.reduce((acc, q) => {
      acc[q.id] = q.question_text;
      return acc;
    }, {});
  }, [questions]);

  const navigate = useNavigate();

  const submitAnswers = async () => {
    const unanswered = questions.filter((q) => !answers[q.id]);

    if (unanswered.length > 0) {
      toast.error(
        "Hey! Make sure you answer every question before hitting Submit.",
      );
      return;
    }

    try {
      setIsSubmitting(true);

      const formattedAnswers = Object.entries(answers).map(([qid, ans]) => ({
        quiz_id: Number(qid),
        user_answer: ans,
      }));

      for (const ans of formattedAnswers) {
        try {
          // await API.post("/majaa/answers/answers/submit", ans);
        } catch (err) {
          const msg = err.response?.data?.message;

          if (msg === "You have already answered this question") {
            const qText = questionMap[ans.quiz_id];

            setErrorModal({
              visible: true,
              message: qText
                ? `You already answered: "${qText}"`
                : "You already answered this question",
            });

            return;
          }

          toast.error(msg || "Something went wrong!");
          return;
        }
      }

      toast.success("Answers submitted successfully!");

      navigate("/thank-you", {
        state: {
          from: "majaa-game",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit answers");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const menifeto = document.querySelector("#menifeto-tab");
      const hotshots = document.querySelector("#hotshots-event-tab");
      const sticky = document.querySelector("#mainfirst");

      if (menifeto) menifeto.style.display = "none";
      if (hotshots) hotshots.style.display = "none";
      if (sticky) sticky.style.setProperty("display", "none", "important");
    }
  }, []);

  // const question = questions?.[currentQuestion];

  return (
    <>
      <div ref={topRef}></div>

      <Helmet>
        <title>Majaa Quiz | Chennai Summer Festival Quiz Experience</title>
        <meta
          name="description"
          content="Think you know Chennai Summer? Take part in Majaa Quiz and discover fun facts, pop culture, iconic hangout spots, seasonal favourites, and city memories"
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/majaa-quiz/questions`}
        />
      </Helmet>

      {errorModal.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-6 w-[350px] text-center shadow-2xl relative">
            {/* Circle SVG icon */}
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#995098]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-9.707a1 1 0 011.414-1.414L10 8.586l1.879-1.879a1 1 0 111.414 1.414L11.414 10l1.879 1.879a1 1 0 01-1.414 1.414L10 11.414l-1.879 1.879a1 1 0 01-1.414-1.414L8.586 10 6.707 8.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">Oops!</h3>
            <p className="mt-3 text-gray-700">{errorModal.message}</p>

            <button
              className="mt-5 px-4 py-2 bg-[#995098] text-white rounded-xl hover:bg-[#8a467f] transition"
              onClick={() => setErrorModal({ visible: false, message: "" })}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ---------- Banner ---------- */}
      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/maja-quiz-banner.jpeg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/mobile-maja-quiz-banner.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            {/* <h1>Dayasdasdaaaaaaaaaaaaaaaaaaaaz</h1> */}
            {/* <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">asdddddddddddd</Link>
            </div> */}
          </div>
        </div>
      </section>

      <div className="carryformPageSection ">
        <div className="max-w-[1100px] mx-auto mt-10 bg-white rounded-lg">
          <div className="um-form-section">
            <div className="flex justify-between items-center mb-4 mobilessss">
              <h2
                className="text-center lowercase  !text-[#4459A8]"
                style={{ textTransform: "lowercase" }}
              >
                #Majaa-quiz
              </h2>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-[#995098] hover:bg-[#8a467f] text-white px-3 py-1 rounded-full shadow-md transition-colors gradient-primarySuperchennai cursor-pointer"
                title="Logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h6a1 1 0 110 2H5v10h5a1 1 0 110 2H4a1 1 0 01-1-1V4zm11.293 4.293a1 1 0 010 1.414L13.414 10l.879.879a1 1 0 01-1.414 1.414l-2.586-2.586a1 1 0 010-1.414l2.586-2.586a1 1 0 011.414 1.414L13.414 9l.879.879z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="font-medium text-white">Logout</span>
              </button>
            </div>

            {/* Questions */}
            {/* <div className="mt-8">
              {questions?.length > 0 ? (
                questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="mb-8 border border-gray-200 rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-5 text-gray-800">
                      Q{index + 1}. {question.question_text}
                    </h3>

                    <div className="space-y-3 majaaaquizzzs">
                      {question.options?.map((option, i) => (
                        <label
                          key={i}
                          className={`divmajaaaquizzzs  flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all
                    ${
                      answers[question.id] === option
                        ? "border-[#995098] bg-purple-50"
                        : "border-gray-200 hover:border-[#995098]"
                    }`}
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={() => handleChange(question.id, option)}
                            className="accent-[#995098] radiomajaainput"
                          />

                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>

                    {isAnswered(question.id) && (
                      <div className="mt-4 text-green-600 font-medium">
                        ✓ Already answered
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No quiz questions available.
                  </p>
                </div>
              )}

              {questions?.length > 0 && (
                <div className="text-center mt-10">
                  <button
                    onClick={submitAnswers}
                    disabled={isSubmitting}
                    className="gradient-primarySuperchennai text-white px-8 py-3 rounded-full font-semibold shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quiz"}
                  </button>
                </div>
              )}
            </div> */}

            {/* <div>
              {questions?.length > 0 && currentQuestion ? (
                <div
                  key={currentQuestion.id}
                  className="mb-8 border border-gray-200 rounded-xl p-6 shadow-sm pt-[30px]"
                >
                  <h3 className="text-xl font-semibold mb-5 text-gray-800">
                    Q{currentIndex + 1}. {currentQuestion.question_text}
                  </h3>

                  <div className="space-y-3 majaaaquizzzs">
                    {currentQuestion.options?.map((option, i) => (
                      <label
                        key={i}
                        className={`divmajaaaquizzzs flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all
          ${
            answers[currentQuestion.id] === option
              ? "border-[#995098] bg-purple-50"
              : "border-gray-200 hover:border-[#995098]"
          }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={option}
                          checked={answers[currentQuestion.id] === option}
                          onChange={() =>
                            handleChange(currentQuestion.id, option)
                          }
                          className="accent-[#995098] radiomajaainput"
                        />

                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-center gap-3 mt-7">
                    {currentIndex > 0 && (
                      <button
                        onClick={() => setCurrentIndex((prev) => prev - 1)}
                        className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
                      >
                        Previous Question
                      </button>
                    )}

                    {currentIndex < questions.length - 1 && (
                      <button
                        onClick={() => setCurrentIndex((prev) => prev + 1)}
                        className="px-4 py-2 bg-[#995098] text-white rounded cursor-pointer"
                      >
                        Next Question
                      </button>
                    )}
                  </div>

                  <div className="text-center mt-4">
                    {currentIndex + 1} / {questions.length}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No quiz questions available.
                  </p>
                </div>
              )}
            </div>

            {questions?.length > 0 && (
              <div className="text-center mt-10">
                <button
                  onClick={submitAnswers}
                  disabled={isSubmitting}
                  className="gradient-primarySuperchennai text-white px-8 py-3 rounded-full font-semibold shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quiz"}
                </button>
              </div>
            )} */}

            <div className="grid grid-cols-1 md:grid-cols-[100%] gap-6">
              {/* ----------------------- LEFT COLUMN (Questions) ----------------------- */}

              <div className="space-y-6 p-2">
                {/* 🔥 PREMIUM QUIZ CLOSED CARD */}
                <div className="relative bg-gradient-to-br from-slate-50/80 via-white/90 to-slate-50/80 backdrop-blur-xl border border-gray-100/50 rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/60 transition-all duration-700 group overflow-hidden max-w-md mx-auto">
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-20 -right-20 w-32 h-32 bg-gradient-to-r from-[#8b3c82]/20 to-[#a34493]/10 rounded-3xl animate-blob-slow blur-xl"></div>
                    <div className="absolute -bottom-20 left-10 w-24 h-24 bg-white/20 rounded-2xl animate-pulse-gentle blur-lg"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8b3c82]/10 to-[#a34493]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-200/40 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm border border-white/30">
                      <svg
                        className="w-12 h-12 text-[#8b3c82]/70 group-hover:text-[#a34493] transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-[#8b3c82] bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">
                      Quiz Closed
                    </h3>

                    {/* Description */}
                    <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-8 px-4 max-w-md mx-auto opacity-90 drop-shadow-sm">
                      Stay tuned for upcoming contests!
                    </p>

                    {/* Premium Button */}
                    <a
                      href="/superchennai-contest"
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#8b3c82] to-[#a34493] hover:from-[#a34493] hover:to-[#8b3c82] text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-[#8b3c82]/30 hover:shadow-2xl hover:shadow-[#a34493]/40 hover:scale-105 active:scale-95 transition-all duration-300 transform mx-auto group-hover:animate-pulse-glow block text-center"
                    >
                      <span>🎯 Explore SuperChennai Contest</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-[#8b3c82]/20 rounded-full animate-float-tiny"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#a34493]/20 rounded-full animate-float-delayed-tiny"></div>
                </div>

                <style jsx>{`
    @keyframes blob-slow {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(10px, -8px) scale(1.1); }
      100% { transform: translate(-5px, 5px) scale(0.95); }
    }
    @keyframes pulse-gentle {
      0%, 100% { transform: scale(1) opacity: 0.6; }
      50% { transform: scale(1.15) opacity: 1; }
    }
    @keyframes float-tiny {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(163,68,147,0.4); }
      50% { box-shadow: 0 0 35px rgba(163,68,147,0.7), 0 0 50px rgba(139,60,130,0.5); }
    }
    @keyframes float-delayed-tiny {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }
    .animate-blob-slow { animation: blob-slow 8s infinite; }
    .animate-pulse-gentle { animation: pulse-gentle 4s infinite; }
    .animate-float-tiny { animation: float-tiny 5s ease-in-out infinite; }
    .animate-float-delayed-tiny { animation: float-tiny 5s ease-in-out infinite 2.5s; }
    .animate-pulse-glow { animation: pulse-glow 2s infinite; }
  `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
