import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL_API } from "../../../../../config";
import {  Link } from "react-router-dom";
import { formatDateTime } from "../utils/dateTime";

export default function AdminView() {
 
  const [adminKey, setAdminKey] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const backendURL = `${API_BASE_URL_API}/admin/all-users`;

  // Check admin key only
  useEffect(() => {
    const savedKey = sessionStorage.getItem("adminKey");

    if (savedKey) {
      setAdminKey(savedKey);
      setShowPopup(false);
      fetchAdminData(savedKey);
    }
  }, []);

  const fetchAdminData = async (key) => {
    try {
      const res = await axios.post(backendURL, { admin_key: key });
      setData(res.data.data);
    } catch (err) {
      console.error("Fetch admin data failed:", err);
      setErrorMsg("Session expired. Please re-enter admin key.");
      sessionStorage.removeItem("adminKey");
      setShowPopup(true);
    }
  };

  const validateKey = async () => {
    try {
      const res = await axios.post(backendURL, { admin_key: adminKey });

      if (res.data && res.data.data) {
        setData(res.data.data);
        sessionStorage.setItem("adminKey", adminKey);

        setShowPopup(false);
      }
    } catch (err) {
      setErrorMsg("Invalid Admin Key. Try again.");
    }
  };


  const groupedData = data.reduce((acc, item) => {
  const key = item.user_id; // group by user ID
  if (!acc[key]) acc[key] = { ...item, answers: [] }; // copy user info
  acc[key].answers.push({
    question_text: item.question_text,
    answer: item.answer,
    is_correct: item.is_correct,
    created_at: item.created_at,
  });
  return acc;
}, {});

  return (
    <>
      {/* ---------- Banner ---------- */}
      <section className="accaodomationBannerSection ">
        <div>
          <img
            className="w-full h-[450px] object-cover"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
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

      <div className="min-h-screen bg-gray-100 p-6">
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl w-96">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Admin Access Required
              </h2>

              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter Admin Key"
                className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500"
              />

              {errorMsg && (
                <p className="text-red-600 text-sm mb-2">{errorMsg}</p>
              )}

              <button
                onClick={validateKey}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold theme-button"
              >
                Verify
              </button>
            </div>
          </div>
        )}

        {!showPopup && (
          <div className="bg-white p-6 shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              All User Answers
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 border">User ID</th>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Phone</th>
                    {/* <th className="p-3 border">Question</th>
                    <th className="p-3 border">Answer</th>
                    <th className="p-3 border">Date</th>
                    <th className="p-3 border">Time</th>
                    <th className="p-3 border">Correct?</th> */}
                  </tr>
                </thead>
                {/* <tbody>
                  {data.map((item, index) => {
                    const { date, time } = formatDateTime(item.created_at);

                    return (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="p-3 border">{item.user_id}</td>
                        <td className="p-3 border">{item.name}</td>
                        <td className="p-3 border">{item.email}</td>
                        <td className="p-3 border">{item.phone}</td>
                        <td className="p-3 border">{item.question_text}</td>
                        <td className="p-3 border">{item.answer}</td>

                        <td className="p-3 border">{date}</td>
                        <td className="p-3 border">{time}</td>

                        <td
                          className={`p-3 border font-semibold ${
                            item.is_correct ? "text-green-700" : "text-red-700"
                          }`}
                        >
                          {item.is_correct ? "✔ Correct" : "❌ Wrong"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody> */}
                <tbody>
                  {Object.values(groupedData).map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border">{user.user_id}</td>
                      <td className="p-3 border">{user.name}</td>
                      <td className="p-3 border">{user.email}</td>
                      <td className="p-3 border">{user.phone}</td>
                      <td className="p-3 border" colSpan={5}>
                        <table className="w-full border">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="p-2 border">Question</th>
                              <th className="p-2 border">Answer</th>
                              <th className="p-2 border">Date</th>
                              <th className="p-2 border">Time</th>
                              <th className="p-2 border">Correct?</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.answers.map((ans, idx) => {
                              const { date, time } = formatDateTime(
                                ans.created_at
                              );
                              return (
                                <tr key={idx}>
                                  <td className="p-2 border">
                                    {ans.question_text}
                                  </td>
                                  <td className="p-2 border">{ans.answer}</td>
                                  <td className="p-2 border">{date}</td>
                                  <td className="p-2 border">{time}</td>
                                  <td
                                    className={`p-2 border font-semibold ${ans.is_correct ? "text-green-700" : "text-red-700"}`}
                                  >
                                    {ans.is_correct ? "✔ Correct" : "❌ Wrong"}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {data.length === 0 && (
              <p className="text-gray-600 text-center mt-4">
                No user answers found.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
