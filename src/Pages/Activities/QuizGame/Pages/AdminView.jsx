import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_BASE_URL_API } from "../../../../../config";
import { formatDateTime } from "../utils/dateTime";
import * as XLSX from "xlsx";

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
   const [conclaveData, setConclaveData] = useState([]);

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
    fetchConclave();
  };


  

  /* ================= API CALLS ================= */

  const fetchConclave = async () => {
    const res = await axios.get(
      "https://api.superchennai.com/api/conclaves/conclave/",
    );

    if (res.data?.success) {
      setConclaveData(res.data.data || []);
    }
  };

  const fetchQuiz = async (key) => {
    const res = await axios.post(backendURL, { admin_key: key });
    setQuizData(res.data.data || []);
  };

  const fetchHotshot = async () => {
    const res = await axios.get(
      "https://api.superchennai.com/api/all/hotshot-chennai",
    );
    if (res.data?.success) setHotshotData(res.data.data);
  };

  const fetchPosts = async () => {
    const res = await axios.get("https://api.superchennai.com/api/posts");
    if (res.data?.success) setPosts(res.data.data);
  };

  const fetchMargazhi = async () => {
    const res = await axios.get("https://api.superchennai.com/api/margazhi");

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
  const newsletter = posts.filter((p) => p.newsletter === true);
  const volunteers = posts.filter((p) => !p.video || p.video.trim() === "");
  const stories = posts.filter((p) => p.video && p.video.trim() !== "");
  const reimagine = posts.filter(
    (p) => p.image && String(p.image).trim() !== "",
  );
  console.log("volunteers", volunteers);
  /* ================= UI ================= */

  // DOWNLOAD EXCEL
  const downloadXLS = (data, fileName) => {
    if (!data || data.length === 0) return;

    const formattedData = data.map((d, i) => ({
      "S.No": i + 1,
      Name: d.name || "",
      Email: d.email || "",
      Phone: d.mobile || d.phone || "",
      Message: d.message || "",
      Description: d.description || "",
      Video: d.video || "",
      Date: formatDateTime(d.created_at).date,
      Time: formatDateTime(d.created_at).time,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const downloadAllHotshotsXLS = () => {
    if (!hotshotData || hotshotData.length === 0) return;

    // find max images count
    const maxImages = Math.max(
      ...hotshotData.map((d) => d.images?.length || 0),
    );

    const formattedData = hotshotData.map((d, i) => {
      const row = {
        "S.No": i + 1,
        Name: d.name || "",
        Email: d.email || "",
        Phone: d.mobile || d.phone || "",
        Message: d.message || "",
        "Instagram": d.linkedin_url || "",
        Location: d.location_url || "",
        Date: formatDateTime(d.created_at).date,
        Time: formatDateTime(d.created_at).time,
      };

      // image columns
      for (let j = 0; j < maxImages; j++) {
        row[`Image ${j + 1}`] = d.images?.[j]
          ? `https://api.superchennai.com${d.images[j].path}`
          : "";
      }

      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hotshot Chennai");

    XLSX.writeFile(workbook, "Hotshot_Chennai_All_Entries.xlsx");
  };

//   const downloadConclaveXLS = () => {


//   if (!conclaveData || conclaveData.length === 0) return;


//   const verifiedOnly = conclaveData.filter(
//     (d) => d.is_mobile_verified === true,
//   );

//   if (verifiedOnly.length === 0) {
//     alert("No verified registrations found.");
//     return;
//   }

//   const formattedData = conclaveData.map((d, i) => {
//     const { date, time } = formatDateTime(d.created_at);

//     return {
//       "S.No": i + 1,
//       Name: d.name || "",
//       Email: d.email || "",
//       Phone: d.phone || "",
//       Company: d.company_name || "",
//       Designation: d.designation || "",
//       LinkedIn: d.linkedin_url || "",
//       Date: date,
//       Time: time,
//     };
//   });

//   const worksheet = XLSX.utils.json_to_sheet(formattedData);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Conclave");

//   XLSX.writeFile(workbook, "Conclave_Registrations.xlsx");
// };
const downloadConclaveXLS = () => {
  if (!conclaveData || conclaveData.length === 0) return;

  // ✅ Only verified users
  const verifiedOnly = conclaveData.filter(
    (d) => d.is_mobile_verified === true
  );

  if (verifiedOnly.length === 0) {
    alert("No verified registrations found.");
    return;
  }

  const formattedData = verifiedOnly.map((d, i) => {
    const { date, time } = formatDateTime(d.created_at);

    return {
      "S.No": i + 1,
      Name: d.name || "",
      Email: d.email || "",
      Phone: d.phone || "",
      Company: d.company_name || "",
      Designation: d.designation || "",
      LinkedIn: d.linkedin_url || "",
      Date: date,
      Time: time,
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Conclave");

  XLSX.writeFile(workbook, "Conclave_Verified_Registrations.xlsx");
};


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
              <Link to="/">Home</Link> - <Link to="">Super Chennai admin</Link>
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
            <button
              onClick={validateKey}
              className="w-full bg-indigo-600 text-white p-3 rounded"
            >
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
              ["conclave", "Conclave"],
              ["trivia", "Trivia"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded font-semibold ${
                  activeTab === key
                    ? "bg-indigo-600 text-white theme-button-smallNormal"
                    : "bg-gray-200 theme-button-secondaryoutline"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === "hotshot" && (
            <div className="flex justify-end px-6 mb-4">
              <button
                onClick={downloadAllHotshotsXLS}
                className="bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800"
              >
                ⬇ Download ALL Hotshot Entries
              </button>
            </div>
          )}

          {/* CONTENT */}
          <div className="p-6">
            {activeTab === "newsletter" && (
              <SimpleTable title="Newsletter" data={newsletter} />
            )}
            {activeTab === "volunteer" && (
              <SimpleTable title="Volunteers" data={volunteers} description />
            )}
            {activeTab === "stories" && (
              <SimpleTable title="Namma Stories" data={stories} video />
            )}
            {activeTab === "reimagine" && (
              <SimpleTable title="Reimagine Chennai" data={reimagine} />
            )}
            {activeTab === "margazhi" && (
              <SimpleTable
                title="Margazhi Month Submissions"
                data={margazhiData}
                images
                showMessage
              />
            )}

            {activeTab === "hotshot" && (
              <SimpleTable
                title="Hotshot Chennai"
                data={hotshotData}
                images
                showMessage={true}
              />
            )}
            {/* {activeTab === "conclave" && (
              <SimpleTable
                title="Conclave Registrations"
                data={conclaveData}
                description
              />
            )} */}

            {activeTab === "conclave" && (
              <SimpleTable
                title="Conclave Registrations"
                data={conclaveData.filter((d) => d.is_mobile_verified === true)}
                description
              />
            )}

            {activeTab === "conclave" && (
              <div className="flex justify-end px-6 mb-4">
                <button
                  onClick={downloadConclaveXLS}
                  className="bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800"
                >
                  ⬇ Download Conclave Entries
                </button>
              </div>
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
                          <td className="p-3 border text-sm">{user.email}</td>
                          <td className="p-3 border text-sm">{user.phone}</td>

                          <td className="p-3 border">
                            <table className="w-full border text-sm">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="p-2 border">Question</th>
                                  <th className="p-2 border">Answer</th>
                                  <th className="p-2 border">Date</th>
                                  <th className="p-2 border">Time</th>
                                  <th className="p-2 border text-center">
                                    Result
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {user.answers.map((ans, idx) => {
                                  const { date, time } = formatDateTime(
                                    ans.created_at,
                                  );
                                  return (
                                    <tr key={idx}>
                                      <td className="p-2 border">
                                        {ans.question_text}
                                      </td>
                                      <td className="p-2 border font-medium">
                                        {ans.answer}
                                      </td>
                                      <td className="p-2 border">{date}</td>
                                      <td className="p-2 border">{time}</td>
                                      <td className="p-2 border text-center">
                                        <span
                                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            ans.is_correct
                                              ? "bg-green-100 text-green-700"
                                              : "bg-red-100 text-red-700"
                                          }`}
                                        >
                                          {ans.is_correct
                                            ? "✔ Correct"
                                            : "✖ Wrong"}
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

function SimpleTable({ title, data, images, video, showMessage, description }) {
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
              {title === "Hotshot Chennai" && <th>Instagram</th>}
              {title === "Hotshot Chennai" && <th>Location</th>}

              {title === "Conclave Registrations" && <th>Company</th>}
              {title === "Conclave Registrations" && <th>Designation</th>}

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
                  <td>
                    <strong>{d.name}</strong>
                  </td>
                  <td>{d.email}</td>
                  <td>{d.mobile || d.phone}</td>
                  {title === "Hotshot Chennai" && (
                    // <td>
                    //   {d.linkedin_url ? (
                    //     <a
                    //       href={d.linkedin_url}
                    //       target="_blank"
                    //       rel="noopener noreferrer"
                    //       className="text-indigo-600 underline"
                    //     >
                    //       View Profile
                    //     </a>
                    //   ) : (
                    //     "—"
                    //   )}
                    // </td>

                    <td className="break-all text-sm text-gray-700">
                      {d.linkedin_url?.trim() || "—"}
                    </td>
                  )}

                  {/* {title === "Hotshot Chennai" && (
                    <td>
                      {d.location_url ? (
                        <a
                          href={d.location_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline"
                        >
                          Map
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                  )} */}
                  {title === "Hotshot Chennai" && (
                    <td>{d.location_url?.trim() ? d.location_url : "—"}</td>
                  )}

                  {title === "Conclave Registrations" && (
                    <td>{d.company_name || "—"}</td>
                  )}
                  {title === "Conclave Registrations" && (
                    <td>{d.designation || "—"}</td>
                  )}

                  {showMessage && (
                    <td className="admin-message">
                      {d.message ? d.message : "—"}
                    </td>
                  )}
                  {description && (
                    <td className="admin-message">{d.description || "—"}</td>
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
