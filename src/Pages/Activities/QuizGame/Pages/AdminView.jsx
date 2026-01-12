// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_BASE_URL_API } from "../../../../../config";
// import { Link } from "react-router-dom";
// import { formatDateTime } from "../utils/dateTime";

// export default function AdminView() {
//   const [adminKey, setAdminKey] = useState("");
//   const [showPopup, setShowPopup] = useState(true);
//   const [data, setData] = useState([]);
//   const [errorMsg, setErrorMsg] = useState("");
//   const backendURL = `${API_BASE_URL_API}/admin/all-users`;
//   const [hotshotData, setHotshotData] = useState([]);
//   const [activeTab, setActiveTab] = useState("hotshot");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const savedKey = sessionStorage.getItem("adminKey");

//     if (savedKey) {
//       setAdminKey(savedKey);
//       setShowPopup(false);
//       fetchAdminData(savedKey);
//       fetchHotshotData();
//        fetchPosts();

//     }
//   }, []);



//   const fetchAdminData = async (key) => {
//     try {
//       const res = await axios.post(backendURL, { admin_key: key });
//       setData(res.data.data);
//     } catch (err) {
//       console.error("Fetch admin data failed:", err);
//       setErrorMsg("Session expired. Please re-enter admin key.");
//       sessionStorage.removeItem("adminKey");
//       setShowPopup(true);
//     }
//   };

//   const fetchHotshotData = async () => {
//     try {
//       const res = await axios.get(
//         "https://api.superchennai.com/api/all/hotshot-chennai"
//       );

//       if (res.data?.success) {
//         setHotshotData(res.data.data);
//       }
//     } catch (error) {
//       console.error("Hotshot fetch failed:", error);
//     }
//   };


//   const validateKey = async () => {
//     try {
//       const res = await axios.post(backendURL, { admin_key: adminKey });

//       if (res.data && res.data.data) {
//         setData(res.data.data);
//         sessionStorage.setItem("adminKey", adminKey);
//         setShowPopup(false);
//         fetchHotshotData();
//       }
//     } catch (err) {
//       setErrorMsg("Invalid Admin Key. Try again.");
//     }
//   };


//   const groupedData = data.reduce((acc, item) => {
//     const key = item.user_id;
//     if (!acc[key]) acc[key] = { ...item, answers: [] };
//     acc[key].answers.push({
//       question_text: item.question_text,
//       answer: item.answer,
//       is_correct: item.is_correct,
//       created_at: item.created_at,
//     });
//     return acc;
//   }, {});

//   return (
//     <>
//       {/* ---------- Banner ---------- */}
// <section className="accaodomationBannerSection ">
//   <div>
//     <img
//       className="w-full h-[450px] object-cover"
//       src="/images/events/triva-contest.jpg"
//       alt="Super Chennai Quiz"
//     />
//   </div>

//   <div className="accodoamationBannerContainer">
//     <div className="accodoamationBannerText">
//       <h1>Super Chennai admin</h1>
//       <div className="breadCrum">
//         <Link to="/">Home</Link> -{" "}
//         <Link to="">Super Chennai admin</Link>
//       </div>
//     </div>
//   </div>
// </section>

//       {!showPopup && (
//         <div className="flex gap-4 px-6 mt-6">
//           <button
//             onClick={() => setActiveTab("hotshot")}
//             className={`px-6 py-2 rounded-lg font-semibold transition
//         ${activeTab === "hotshot"
//                 ? "bg-indigo-600 text-white shadow"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
//           >
//             🔥 Hotshot Chennai
//           </button>

//           <button
//             onClick={() => setActiveTab("trivia")}
//             className={`px-6 py-2 rounded-lg font-semibold transition
//         ${activeTab === "trivia"
//                 ? "bg-indigo-600 text-white shadow"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
//           >
//             🧠 Trivia Answers
//           </button>
//         </div>
//       )}


//       {!showPopup && activeTab === "hotshot" && (
//         <div className="bg-white p-6 shadow-xl rounded-xl mt-6 mx-6">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">
//             Hotshot Chennai Entries
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border text-left">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="p-3 border">Name</th>
//                   <th className="p-3 border">Email</th>
//                   <th className="p-3 border">Phone</th>
//                   <th className="p-3 border">Image</th>
//                   <th className="p-3 border">Submitted At</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {hotshotData.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-50">
//                     <td className="p-3 border">{item.name}</td>
//                     <td className="p-3 border">{item.email}</td>
//                     <td className="p-3 border">
//                       {item.country_code} {item.phone}
//                     </td>
//                     <td className="p-3 border">
//                       <div className="flex gap-2 flex-wrap">
//                         {item.images?.map((img, idx) => (
//                           <a
//                             key={idx}
//                             href={`https://api.superchennai.com${img.path}`}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <img
//                               src={`https://api.superchennai.com${img.path}`}
//                               alt={img.originalName}
//                               className="w-16 h-16 object-cover rounded border hover:scale-105 transition"
//                             />
//                           </a>
//                         ))}
//                       </div>
//                     </td>

//                     <td className="p-3 border">
//                       {new Date(item.created_at).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {hotshotData.length === 0 && (
//             <p className="text-gray-600 text-center mt-4">
//               No Hotshot Chennai entries found.
//             </p>
//           )}
//         </div>
//       )}



//       <div className="min-h-screen bg-gray-100 p-6">
//         {showPopup && (
//           <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
//             <div className="bg-white p-8 rounded-xl shadow-xl w-96">
//               <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
//                 Admin Access Required
//               </h2>

//               <input
//                 type="password"
//                 value={adminKey}
//                 onChange={(e) => setAdminKey(e.target.value)}
//                 placeholder="Enter Admin Key"
//                 className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500"
//               />

//               {errorMsg && (
//                 <p className="text-red-600 text-sm mb-2">{errorMsg}</p>
//               )}

//               <button
//                 onClick={validateKey}
//                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold theme-button"
//               >
//                 Verify
//               </button>
//             </div>
//           </div>
//         )}

// {!showPopup && activeTab === "trivia" && (
//   <div className="bg-white p-6 shadow-xl rounded-xl">
//     <h2 className="text-2xl font-bold mb-4 text-gray-800">
//       All User Answers
//     </h2>

//     <div className="overflow-x-auto">
//       <table className="w-full border text-left">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-3 border">User ID</th>
//             <th className="p-3 border">Name</th>
//             <th className="p-3 border">Email</th>
//             <th className="p-3 border">Phone</th>

//           </tr>
//         </thead>

//         <tbody>
//           {Object.values(groupedData).map((user, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="p-3 border">{user.user_id}</td>
//               <td className="p-3 border">{user.name}</td>
//               <td className="p-3 border">{user.email}</td>
//               <td className="p-3 border">{user.phone}</td>
//               <td className="p-3 border" colSpan={5}>
//                 <table className="w-full border">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="p-2 border">Question</th>
//                       <th className="p-2 border">Answer</th>
//                       <th className="p-2 border">Date</th>
//                       <th className="p-2 border">Time</th>
//                       <th className="p-2 border">Correct?</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {user.answers.map((ans, idx) => {
//                       const { date, time } = formatDateTime(
//                         ans.created_at
//                       );
//                       return (
//                         <tr key={idx}>
//                           <td className="p-2 border">
//                             {ans.question_text}
//                           </td>
//                           <td className="p-2 border">{ans.answer}</td>
//                           <td className="p-2 border">{date}</td>
//                           <td className="p-2 border">{time}</td>
//                           <td
//                             className={`p-2 border font-semibold ${ans.is_correct ? "text-green-700" : "text-red-700"}`}
//                           >
//                             {ans.is_correct ? "✔ Correct" : "❌ Wrong"}
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     {data.length === 0 && (
//       <p className="text-gray-600 text-center mt-4">
//         No user answers found.
//       </p>
//     )}
//   </div>
// )}

//       </div>
//     </>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_BASE_URL_API } from "../../../../../config";
import { formatDateTime } from "../utils/dateTime";

export default function AdminView() {
  const [adminKey, setAdminKey] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [activeTab, setActiveTab] = useState("hotshot");

  const [quizData, setQuizData] = useState([]);
  const [hotshotData, setHotshotData] = useState([]);
  const [posts, setPosts] = useState([]);

  const backendURL = `${API_BASE_URL_API}/admin/all-users`;
  const [margazhiData, setMargazhiData] = useState([]);

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    const savedKey = sessionStorage.getItem("adminKey");
    if (savedKey) {
      setAdminKey(savedKey);
      setShowPopup(false);
      fetchAll(savedKey);
    }
  }, []);

  const fetchAll = (key) => {
    fetchQuiz(key);
    fetchHotshot();
    fetchPosts();
    fetchMargazhi();
  };

  /* ================= API CALLS ================= */
  const fetchQuiz = async (key) => {
    const res = await axios.post(backendURL, { admin_key: key });
    setQuizData(res.data.data || []);
  };

  const fetchHotshot = async () => {
    const res = await axios.get(
      "https://api.superchennai.com/api/all/hotshot-chennai"
    );
    if (res.data?.success) setHotshotData(res.data.data);
  };

  const fetchPosts = async () => {
    const res = await axios.get("https://api.superchennai.com/api/posts");
    if (res.data?.success) setPosts(res.data.data);
  };

  const fetchMargazhi = async () => {
    const res = await axios.get(
      "https://api.superchennai.com/api/margazhi"
    );

    if (res.data?.success) {
      setMargazhiData(res.data.data);
    }
  };


  const validateKey = async () => {
    try {
      const res = await axios.post(backendURL, { admin_key: adminKey });
      if (res.data?.data) {
        sessionStorage.setItem("adminKey", adminKey);
        setShowPopup(false);
        fetchAll(adminKey);
      }
    } catch {
      setErrorMsg("Invalid Admin Key");
    }
  };

  /* ================= QUIZ GROUP ================= */
  const groupedQuiz = quizData.reduce((acc, q) => {
    if (!acc[q.user_id]) acc[q.user_id] = { ...q, answers: [] };
    acc[q.user_id].answers.push(q);
    return acc;
  }, {});

  /* ================= POST FILTERS (EXCEL LOGIC) ================= */
  const newsletter = posts.filter(p => p.newsletter === true);
  const volunteers = posts.filter(p => !p.video || p.video.trim() === "");
  const stories = posts.filter(p => p.video && p.video.trim() !== "");
  const reimagine = posts.filter(p => p.image && String(p.image).trim() !== "");
  console.log("volunteers", volunteers)
  /* ================= UI ================= */
  return (
    <>
      {/* Banner */}
      <section className="accaodomationBannerSection ">
        <div>
          <img
            className="w-full h-[300px] object-cover"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai admin</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Super Chennai admin</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Login */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Admin Access</h2>
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="w-full border p-3 rounded mb-3"
              placeholder="Enter Admin Key"
            />
            {errorMsg && <p className="text-red-600">{errorMsg}</p>}
            <button onClick={validateKey} className="w-full bg-indigo-600 text-white p-3 rounded">
              Verify
            </button>
          </div>
        </div>
      )}

      {!showPopup && (
        <>
          {/* Tabs */}
          <div className="flex gap-3 flex-wrap px-6 mt-6">
            {[
              ["newsletter", "Newsletter"],
              ["volunteer", "Volunteers"],
              ["stories", "Namma Stories"],
              ["reimagine", "Reimagine Chennai"],
              ["hotshot", "Hotshot Chennai"],
              ["margazhi", "Margazhi Month"],
              ["trivia", "Trivia"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded font-semibold ${activeTab === key
                  ? "bg-indigo-600 text-white theme-button-smallNormal"
                  : "bg-gray-200 theme-button-secondaryoutline"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="p-6">
            {activeTab === "newsletter" && <SimpleTable title="Newsletter" data={newsletter} />}
            {activeTab === "volunteer" && <SimpleTable title="Volunteers" data={volunteers}description />}
            {activeTab === "stories" && <SimpleTable title="Namma Stories" data={stories} video />}
            {activeTab === "reimagine" && <SimpleTable title="Reimagine Chennai" data={reimagine} />}
            {activeTab === "margazhi" && (<SimpleTable title="Margazhi Month Submissions" data={margazhiData} images showMessage />)}

            {activeTab === "hotshot" && (
              <SimpleTable title="Hotshot Chennai" data={hotshotData} images showMessage={true} />
            )}

            {!showPopup && activeTab === "trivia" && (
              <div className="bg-white p-6 shadow-xl rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  🧠 Trivia – User Answer Flow
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border text-left">
                    <thead className="bg-gray-200 sticky top-0 z-10">
                      <tr>
                        <th className="p-3 border">User ID</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Email</th>
                        <th className="p-3 border">Phone</th>
                        <th className="p-3 border">Answers</th>
                      </tr>
                    </thead>

                    <tbody>
                      {Object.values(groupedQuiz).map((user, index) => (
                        <tr key={index} className="align-top hover:bg-gray-50">
                          <td className="p-3 border font-mono text-sm">
                            {user.user_id}
                          </td>
                          <td className="p-3 border font-semibold">
                            {user.name}
                          </td>
                          <td className="p-3 border text-sm">
                            {user.email}
                          </td>
                          <td className="p-3 border text-sm">
                            {user.phone}
                          </td>

                          <td className="p-3 border">
                            <table className="w-full border text-sm">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="p-2 border">Question</th>
                                  <th className="p-2 border">Answer</th>
                                  <th className="p-2 border">Date</th>
                                  <th className="p-2 border">Time</th>
                                  <th className="p-2 border text-center">Result</th>
                                </tr>
                              </thead>
                              <tbody>
                                {user.answers.map((ans, idx) => {
                                  const { date, time } = formatDateTime(ans.created_at);
                                  return (
                                    <tr key={idx}>
                                      <td className="p-2 border">{ans.question_text}</td>
                                      <td className="p-2 border font-medium">{ans.answer}</td>
                                      <td className="p-2 border">{date}</td>
                                      <td className="p-2 border">{time}</td>
                                      <td className="p-2 border text-center">
                                        <span
                                          className={`px-2 py-1 rounded-full text-xs font-semibold ${ans.is_correct
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                        >
                                          {ans.is_correct ? "✔ Correct" : "✖ Wrong"}
                                        </span>
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

                {Object.values(groupedQuiz).length === 0 && (
                  <p className="text-gray-600 text-center mt-6">
                    No user answers found.
                  </p>
                )}
              </div>
            )}

          </div>
        </>
      )}
    </>
  );
}

/* ================= SIMPLE TABLE ================= */

function SimpleTable({ title, data, images, video, showMessage,  description }) {
  return (
    <div className="admin-table-wrapper">
      <h2 className="admin-table-title">{title}</h2>

      <div className="admin-table-scroll">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              {showMessage && <th>Message</th>}
               {description && <th>Description</th>}
              <th>Date</th>
              <th>Time</th>
              {images && <th>Images</th>}
              {video && <th>Video</th>}
            </tr>
          </thead>

          <tbody>
            {data.map((d) => {
              const { date, time } = formatDateTime(d.created_at);

              return (
                <tr key={d.id}>
                  <td><strong>{d.name}</strong></td>
                  <td>{d.email}</td>
                  <td>{d.mobile || d.phone}</td>
                  {showMessage && (
                    <td className="admin-message">
                      {d.message ? d.message : "—"}
                    </td>
                  )}
                  {description && (
                    <td className="admin-message">
                      {d.description || "—"}
                    </td>
                  )}
                  <td className="admin-date">{date}</td>
                  <td className="admin-date">{time}</td>

                  {images && (
                    <td>
                      <div className="admin-image-list">
                        {d.images?.map((img, i) => {
                          const imageUrl = `https://api.superchennai.com${img.path}`;

                          return (
                            <a
                              key={i}
                              href={imageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open image in new tab"
                            >
                              <img
                                src={imageUrl}
                                className="admin-image"
                                alt="Submission"
                              />
                            </a>
                          );
                        })}
                      </div>
                    </td>
                  )}

                  {video && (
                    <td className="text-center">
                      {d.video ? (
                        <button
                          onClick={() => window.open(d.video, "_blank")}
                          className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                          ▶ Play
                        </button>
                      ) : (
                        "—"
                      )}
                    </td>
                  )}



                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <div className="admin-empty">No records found.</div>
      )}
    </div>
  );
}
