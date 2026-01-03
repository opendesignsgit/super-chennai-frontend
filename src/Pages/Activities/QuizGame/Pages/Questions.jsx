import { useEffect, useState, useMemo } from "react";
import API from "../services/api";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const isAnswered = (qId) => answeredQuestions.includes(qId);
  const topRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorModal, setErrorModal] = useState({
    visible: false,
    message: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("You have been logged out.");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.info("You need to login to access the quiz.");
      navigate("/login");
      return;
    }

    fetchQuestions();
    fetchAnsweredQuestions();
  }, []);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  const fetchQuestions = async () => {
    const res = await API.get("/questions");
    setQuestions(res.data);
    console.log("data", res.data);
  };

  const fetchAnsweredQuestions = async () => {
    try {
      const res = await API.get("/answers/results");
      const answeredIds = res.data.results.map((r) => r.question_id);
      setAnsweredQuestions(answeredIds);
    } catch (err) {
      console.error("Failed to fetch answered questions", err);
    }
  };

  const handleChange = (qId, value) => {
    setAnswers((prev) => {
      // same option click pannina → uncheck
      if (prev[qId] === value) {
        const updated = { ...prev };
        delete updated[qId];
        return updated;
      }

      // new option select
      return { ...prev, [qId]: value };
    });
  };

  const questionMap = useMemo(() => {
    return questions.reduce((acc, q) => {
      acc[q.id] = q.question_text;
      return acc;
    }, {});
  }, [questions]);

  const navigate = useNavigate();

  const submitAnswers = async () => {
    const unanswered = questions.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
     toast.error("Hey! Make sure you answer every question before hitting Submit.");
      return; 
    }
    try {
      setIsSubmitting(true);
      const formattedAnswers = Object.entries(answers).map(([qid, ans]) => ({
        question_id: Number(qid),
        user_answer: ans,
      }));

      for (const ans of formattedAnswers) {
        try {
          await API.post("/answers/submit", ans);
        } catch (err) {
          const msg = err.response?.data?.message;

          // if (msg === "You have already answered this question") {
          //   // toast.error(` You already answered Question ${ans.question_id}`);
          //   const qText = questionMap[ans.question_id];
          //   toast.error(
          //     qText
          //       ? `❌ You already answered: "${qText}"`
          //       : "❌ You already answered this question"
          //   );
          //   return;

          if (msg === "You have already answered this question") {
            const qText = questionMap[ans.question_id];
            setErrorModal({
              visible: true,
              message: qText
                ? ` You already answered: "${qText}"`
                : " You already answered this question",
            });
            return;
          } else {
            toast.error("Something went wrong!");
            return;
          }
        }
      }
      toast.success(" Answers submitted successfully!");

      // navigate("/your-results");

      navigate("/thank-you", {
        state: {
          from: "trivia-game",
        },
      });
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div ref={topRef}></div>

      <Helmet>
        <title>
          Test Your Smarts - Take the Ultimate Fun Super Chennai Quiz
        </title>
        <meta
          name="description"
          content="The Super Chennai Quiz is here on Dec 7, 2025! Test your knowledge across sports, music, food, and Chennai. Exciting prizes await—team up and enjoy an epic evening."
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/contests/chennai-quiz`}
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
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/triva-contest-small.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Trivia 2025</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Super Chennai Trivia 2025</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="carryformPageSection ">
        <div className="max-w-[1100px] mx-auto mt-10  bg-white rounded-lg  ">
          <div className="um-form-section">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-center ">Answer the Questions</h2>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-[#995098] hover:bg-[#8a467f] text-white px-3 py-1 rounded-full shadow-md transition-colors"
                title="Logout"
              >
                {/* SVG icon */}
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6">
            {/* ----------------------- LEFT COLUMN (Questions) ----------------------- */}

            <div className="space-y-6 p-2">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 "
                >
                  <p className="font-semibold text-lg text-gray-800 mb-4">
                    {q.question_text}
                  </p>

                  <div className="space-y-3">
                    {q.options.map((opt, index) => (
                      <label
                        key={index}
                        className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors duration-200"
                      >
                        <input
                          type="radio"
                          name={`question_${q.id}`}
                          value={opt}
                          checked={answers[q.id] === opt}
                          onClick={() => handleChange(q.id, opt)}
                          className="focus:ring-pink-400"
                        />

                        <span className="ml-3 text-gray-700 text-base">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-8">
                <button
                  onClick={submitAnswers}
                  className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg theme-button"
                >
                  Submit Answers
                </button>
              </div>

              {isSubmitting && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <div className="bg-white rounded-2xl p-8 w-[300px] text-center shadow-2xl animate-fadeIn">
                    {/* Spinner */}
                    <div className="w-14 h-14 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

                    <h3 className="mt-5 text-lg font-semibold text-gray-800">
                      Submitting your answers
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Please wait...</p>
                  </div>
                </div>
              )}
            </div>

            {/* ----------------------- RIGHT COLUMN (Status Panel) ----------------------- */}
            <div className="hidden md:block p-4 bg-gray-50 rounded-xl shadow-sm h-fit sticky top-10 um-form-section">
              <h3 className="">Quiz Questions List</h3>

              <ul className="space-y-3">
                {questions.map((q) => {
                  const answered = answers[q.id] ? true : false;
                  return (
                    <li
                      key={q.id}
                      className="flex items-center justify-between p-2 bg-white rounded-lg border shadow-sm"
                    >
                      <span className="text-gray-700 font-medium line-clamp-1">
                        {q.question_text}
                      </span>

                      {answered ? (
                        <span className="text-green-600 text-xl">✔️</span>
                      ) : (
                        <span className="text-gray-400 text-xl">⭕</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
