import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { API_BASE_URL_API } from "../../../../../config";
import { useNavigate } from "react-router-dom";

const UsersResultsPage = () => {
  const [userData, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL_API}/answers/results`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setUsers(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  if (loading) {
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  }

  return (
    <>
         {/* ---------- Banner ---------- */}
      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
          />
          <img
            className="block sm:hidden"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Super Chennai Triva 2025</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Super Chennai Triva 2025</Link>
            </div>
          </div>
        </div>
      </section>


      <div className="  carryformPageSection">
        <div className="carryFormPage !max-w-[1000px] max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border um-form-section">
          <div className="flex items-center justify-between mb-6">
            <h2 className="">
               Your Results
            </h2>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl border bg-gray-50 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                User Summary
              </h3>

              <div className="space-y-3">
                <p className="flex justify-between text-gray-700">
                  <span className="font-semibold">Name:</span>
                  <span className="font-medium capitalize">
                    {userData.name}
                  </span>
                </p>

                <p className="flex justify-between text-gray-700">
                  <span className="font-semibold">Email:</span>
                  <span className="font-medium break-all">
                    {userData.email}
                  </span>
                </p>

                <p className="flex justify-between text-gray-700">
                  <span className="font-semibold">Total Answers:</span>
                  <span className="font-medium">{userData.total_answered}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Question
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Your Answer
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Correct Answer
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userData.results.map((r, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {r.question_text}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {r.user_answer}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {r.correct_answer}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold">
                      {r.is_correct ? (
                        <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full">
                          Correct
                        </span>
                      ) : (
                        <span className="text-red-700 bg-red-100 px-2 py-1 rounded-full">
                          Wrong
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersResultsPage;
