import { useEffect, useState } from "react";
import API from "../services/api";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await API.get("/questions");
    setQuestions(res.data);
  };

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };
  const navigate = useNavigate();

  const submitAnswers = async () => {
    try {
      const formattedAnswers = Object.entries(answers).map(([qid, ans]) => ({
        question_id: Number(qid),
        user_answer: ans,
      }));

      for (const ans of formattedAnswers) {
        try {
          await API.post("/answers/submit", ans);
        } catch (err) {
          const msg = err.response?.data?.message;

          if (msg === "You have already answered this question") {
            toast.error(` You already answered Question ${ans.question_id}`);
            return;
          } else {
            toast.error("Something went wrong!");
            return;
          }
        }
      }
      toast.success("🎉 Answers submitted successfully!");


      navigate("/your-results");
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <>
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

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          {/* Desktop Image */}
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/superchennai-quiz-inner.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/superchennai-quiz-mobile2.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Quiz</h1>

            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="./">Super Chennai Quiz</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="carryformPageSection ">
        <div className="um-form-section">
          <h2 className="text-center ">Answer the Questions</h2>
        </div>

        <div className="max-w-[1100px] mx-auto mt-10  bg-white rounded-lg  ">
          <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-6">
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
                          onChange={() => handleChange(q.id, opt)}
                          className=" rounded-full focus:ring-pink-400 rounded-full"
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
                      <span className="text-gray-700 font-medium">Q{q.id}</span>

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
