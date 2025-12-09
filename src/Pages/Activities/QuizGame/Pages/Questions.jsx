import { useEffect, useState } from "react";
import API from "../services/api";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";

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

  const submitAnswers = async () => {
    const formattedAnswers = Object.entries(answers).map(([qid, ans]) => ({
      question_id: Number(qid),
      user_answer: ans,
    }));

    const res = await API.post("/answers/submit", {
      answers: formattedAnswers,
    });
    setResult(res.data);
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

    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
  <div className="w-full max-w-3xl px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Answer the Questions
    </h2>

    <div className="space-y-6">
      {questions.map((q) => (
        <div
          key={q.id}
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
          <p className="font-semibold text-lg text-gray-800 mb-4">
            {q.question_text}
          </p>

          <div className="space-y-3">
            {q.options.map((opt, index) => (
              <label
                key={index}
                className="flex items-center p-3 border rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors duration-200"
              >
                <input
                  type="radio"
                  name={`question_${q.id}`}
                  value={opt}
                  onChange={() => handleChange(q.id, opt)}
                  className="h-5 w-5 text-indigo-600 focus:ring-2 focus:ring-indigo-400 border-gray-300 rounded-full"
                />
                <span className="ml-3 text-gray-700 text-base">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={submitAnswers}
      className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg"
    >
      Submit Answers
    </button>
  </div>
</div>

    </>
  );
}
