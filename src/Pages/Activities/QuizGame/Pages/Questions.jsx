import { useEffect, useState, useMemo } from "react";
import API from "../services/api";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

export default function Questions2026() {
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
    navigate("/day-to-deliver-quiz/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.info("You need to login to access the quiz.");
      navigate("/day-to-deliver-quiz/login");
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
      toast.error(
        "Hey! Make sure you answer every question before hitting Submit.",
      );
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
            src="/images/events/quiz-banner.jpeg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/quiz-banner.jpeg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Day to deliver-quiz</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Day to deliver-quiz</Link>
            </div>
          </div>
        </div>
      </section>


        <div className="carryformPageSection ">
        <div className="max-w-[1100px] mx-auto mt-10  bg-white rounded-lg  ">
          <div className="um-form-section">
            <div className="flex justify-between items-center mb-4 mobilessss">
              <h2
                className="text-center lowercase  heading-gradient"
                style={{ textTransform: "lowercase" }}
              >
                #daytodeliver-quiz
              </h2>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-[#995098] hover:bg-[#8a467f] text-white px-3 py-1 rounded-full shadow-md transition-colors gradient-primarySuperchennai cursor-pointer"
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
        <svg className="w-12 h-12 text-[#8b3c82]/70 group-hover:text-[#a34493] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      {/* <div className="carryformPageSection ">
        <div className="max-w-[1100px] mx-auto mt-10  bg-white rounded-lg  ">
          <div className="um-form-section">
            <div className="flex justify-between items-center mb-4 mobilessss">
              <h2
                className="text-center lowercase  heading-gradient"
                style={{ textTransform: "lowercase" }}
              >
                #daytodeliver-quiz
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[100%] gap-6">

         
          </div>
        </div>
      </div> */}
    </>
  );
}

// import { useEffect, useState, useMemo } from "react";
// import API from "../services/api";
// import { Helmet } from "react-helmet-async";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useRef } from "react";

// export default function Questions() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState(null);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const isAnswered = (qId) => answeredQuestions.includes(qId);
//   const topRef = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentQuestion = questions[currentIndex];
//   const [errorModal, setErrorModal] = useState({
//     visible: false,
//     message: "",
//   });

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     toast.info("You have been logged out.");
//     navigate("/login-otp");
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.info("You need to login to access the quiz.");
//       navigate("/login-otp");
//       return;
//     }

//     fetchQuestions();
//     fetchAnsweredQuestions();
//   }, []);

//   useEffect(() => {
//     topRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
//   }, []);

//   const fetchQuestions = async () => {
//     const res = await API.get("/questions");
//     setQuestions(res.data);
//     console.log("data", res.data);
//   };

//   const fetchAnsweredQuestions = async () => {
//     try {
//       const res = await API.get("/answers/results");
//       const answeredIds = res.data.results.map((r) => r.question_id);
//       setAnsweredQuestions(answeredIds);
//     } catch (err) {
//       console.error("Failed to fetch answered questions", err);
//     }
//   };

//   const handleChange = (qId, value) => {
//     setAnswers((prev) => {
//       // same option click pannina → uncheck
//       if (prev[qId] === value) {
//         const updated = { ...prev };
//         delete updated[qId];
//         return updated;
//       }

//       // new option select
//       return { ...prev, [qId]: value };
//     });
//   };

//   const questionMap = useMemo(() => {
//     return questions.reduce((acc, q) => {
//       acc[q.id] = q.question_text;
//       return acc;
//     }, {});
//   }, [questions]);

//   const navigate = useNavigate();

//   const submitAnswers = async () => {
//     const unanswered = questions.filter((q) => !answers[q.id]);
//     if (unanswered.length > 0) {
//      toast.error("Hey! Make sure you answer every question before hitting Submit.");
//       return;
//     }
//     try {
//       setIsSubmitting(true);
//       const formattedAnswers = Object.entries(answers).map(([qid, ans]) => ({
//         question_id: Number(qid),
//         user_answer: ans,
//       }));

//       for (const ans of formattedAnswers) {
//         try {
//           await API.post("/answers/submit", ans);
//         } catch (err) {
//           const msg = err.response?.data?.message;

//           // if (msg === "You have already answered this question") {
//           //   // toast.error(` You already answered Question ${ans.question_id}`);
//           //   const qText = questionMap[ans.question_id];
//           //   toast.error(
//           //     qText
//           //       ? `❌ You already answered: "${qText}"`
//           //       : "❌ You already answered this question"
//           //   );
//           //   return;

//           if (msg === "You have already answered this question") {
//             const qText = questionMap[ans.question_id];
//             setErrorModal({
//               visible: true,
//               message: qText
//                 ? ` You already answered: "${qText}"`
//                 : " You already answered this question",
//             });
//             return;
//           } else {
//             toast.error("Something went wrong!");
//             return;
//           }
//         }
//       }
//       toast.success(" Answers submitted successfully!");

//       // navigate("/your-results");

//       navigate("/thank-you", {
//         state: {
//           from: "trivia-game",
//         },
//       });
//     } catch (err) {
//       console.error("Submit error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <div ref={topRef}></div>

//       <Helmet>
//         <title>
//           Test Your Smarts - Take the Ultimate Fun Super Chennai Quiz
//         </title>
//         <meta
//           name="description"
//           content="The Super Chennai Quiz is here on Dec 7, 2025! Test your knowledge across sports, music, food, and Chennai. Exciting prizes await—team up and enjoy an epic evening."
//         />
//         <link
//           rel="canonical"
//           href={`${typeof window !== "undefined" ? window.location.origin : ""}/contests/chennai-quiz`}
//         />
//       </Helmet>

//       {errorModal.visible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="bg-white rounded-2xl p-6 w-[350px] text-center shadow-2xl relative">
//             {/* Circle SVG icon */}
//             <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#995098]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-9.707a1 1 0 011.414-1.414L10 8.586l1.879-1.879a1 1 0 111.414 1.414L11.414 10l1.879 1.879a1 1 0 01-1.414 1.414L10 11.414l-1.879 1.879a1 1 0 01-1.414-1.414L8.586 10 6.707 8.121z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-800">Oops!</h3>
//             <p className="mt-3 text-gray-700">{errorModal.message}</p>

//             <button
//               className="mt-5 px-4 py-2 bg-[#995098] text-white rounded-xl hover:bg-[#8a467f] transition"
//               onClick={() => setErrorModal({ visible: false, message: "" })}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ---------- Banner ---------- */}
//       <section className="accaodomationBannerSection carquizbanner">
//         <div>
//           <img
//             className="eventsCalenderIamge hidden sm:block"
//             src="/images/events/quiz-banner.jpeg"
//             alt="Super Chennai Quiz"
//           />

//           {/* Mobile Image */}
//           <img
//             className=" block sm:hidden"
//             src="/images/events/quiz-banner.jpeg"
//             alt="Super Chennai Quiz Mobile"
//           />
//         </div>

//         <div className="accodoamationBannerContainer">
//           <div className="accodoamationBannerText">
//             <h1>Super Chennai Trivia 2025</h1>
//             <div className="breadCrum">
//               <Link to="/">Home</Link> -{" "}
//               <Link to="">Super Chennai Trivia 2025</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="carryformPageSection ">
//         <div className="max-w-[1100px] mx-auto mt-10  bg-white rounded-lg  ">
//           <div className="um-form-section">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-center ">Answer the Questions</h2>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 bg-[#995098] hover:bg-[#8a467f] text-white px-3 py-1 rounded-full shadow-md transition-colors"
//                 title="Logout"
//               >
//                 {/* SVG icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 4a1 1 0 011-1h6a1 1 0 110 2H5v10h5a1 1 0 110 2H4a1 1 0 01-1-1V4zm11.293 4.293a1 1 0 010 1.414L13.414 10l.879.879a1 1 0 01-1.414 1.414l-2.586-2.586a1 1 0 010-1.414l2.586-2.586a1 1 0 011.414 1.414L13.414 9l.879.879z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="font-medium text-white">Logout</span>
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-[100%] gap-6">
//             {/* ----------------------- LEFT COLUMN (Questions) ----------------------- */}

//             <div className="space-y-6 p-2">
//               {/* {questions.map((q) => (
//                 <div
//                   key={q.id}
//                   className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 "
//                 >
//                   <p className="font-semibold text-lg text-gray-800 mb-4">
//                     {q.question_text}
//                   </p>

//                   <div className="space-y-3">
//                     {q.options.map((opt, index) => (
//                       <label
//                         key={index}
//                         className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors duration-200"
//                       >
//                         <input
//                           type="radio"
//                           name={`question_${q.id}`}
//                           value={opt}
//                           checked={answers[q.id] === opt}
//                           onClick={() => handleChange(q.id, opt)}
//                           className="focus:ring-pink-400"
//                         />

//                         <span className="ml-3 text-gray-700 text-base">
//                           {opt}
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               ))} */}
//               {currentQuestion && (
//                 <div className="p-6 bg-white rounded-2xl shadow-lg">
//                   <p className="font-semibold text-lg text-gray-800 mb-4">
//                     {currentQuestion.question_text}
//                   </p>

//                   <div className="space-y-3">
//                     {currentQuestion.options.map((opt, index) => (
//                       <label
//                         key={index}
//                         className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-indigo-50"
//                       >
//                         <input
//                           type="radio"
//                           name={`question_${currentQuestion.id}`}
//                           value={opt}
//                           checked={answers[currentQuestion.id] === opt}
//                           onClick={() => handleChange(currentQuestion.id, opt)}
//                         />
//                         <span className="ml-3">{opt}</span>
//                       </label>
//                     ))}
//                   </div>
//                   <div className="flex justify-center mt-6">
//                     <div className="flex w-full md:w-[60%] gap-4">
//                       {/* Previous */}
//                       <button
//                         disabled={currentIndex === 0}
//                         onClick={() => setCurrentIndex((prev) => prev - 1)}
//                         className={`flex-1 py-3 rounded-full shadow-md text-white transition-colors
//         ${
//           currentIndex === 0
//             ? "bg-gray-300 cursor-not-allowed"
//             : "bg-[#995098] hover:bg-[#8a467f]"
//         }`}
//                       >
//                         Previous
//                       </button>

//                       {/* Next or Submit */}
//                       {currentIndex < questions.length - 1 ? (
//                         <button
//                           onClick={() => {
//                             if (!answers[currentQuestion.id]) {
//                               toast.error("Please answer before going next!");
//                               return;
//                             }
//                             setCurrentIndex((prev) => prev + 1);
//                           }}
//                           className="flex-1 py-3 rounded-full shadow-md text-white bg-[#995098] hover:bg-[#8a467f] transition-colors"
//                         >
//                           Next
//                         </button>
//                       ) : (
//                         <button
//                           onClick={submitAnswers}
//                           className="flex-1 py-3 rounded-full shadow-md text-white bg-[#995098] hover:bg-[#8a467f] transition-colors"
//                         >
//                           Submit
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <p className="text-center text-sm text-gray-500 mb-4">
//                 Question {currentIndex + 1} of {questions.length}
//               </p>
//               {/* <div className="flex justify-center mt-8">
//                 <button
//                   onClick={submitAnswers}
//                   className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg theme-button"
//                 >
//                   Submit Answers
//                 </button>
//               </div> */}

//               {isSubmitting && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//                   <div className="bg-white rounded-2xl p-8 w-[300px] text-center shadow-2xl animate-fadeIn">
//                     {/* Spinner */}
//                     <div className="w-14 h-14 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

//                     <h3 className="mt-5 text-lg font-semibold text-gray-800">
//                       Submitting your answers
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1">Please wait...</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
