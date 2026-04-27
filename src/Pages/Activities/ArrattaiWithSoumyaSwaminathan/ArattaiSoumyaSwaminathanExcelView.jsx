// import { useEffect, useState } from "react";
// import axios from "axios";
// import { formatDateTime } from "../QuizGame/utils/dateTime";

// export default function ArattaiKarunakaranExcelView() {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(
//         "https://api.superchennai.com/api/arattai-karunakaran/arattai-karunakaran"
//       );

//       console.log("karunakaran res", res);

//       if (res.data?.success) {
//         const verified = res.data.data.filter(
//           (d) => d.is_mobile_verified === true
//         );
//         setData(verified);
//       }
//     } catch (err) {
//       console.error("Error fetching Karunakaran data", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     const interval = setInterval(fetchData, 600000); // 10 mins
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* ================= BANNER ================= */}
//       <section
//         className="accaodomationBannerSection relative overflow-hidden cursor-pointer"

//       >
//         <img
//           className="hidden sm:block w-full"
//           // src="/images/vivek-banner.jpeg"
//           src="/images/vivek-innerpage-banner.jpeg"
//           alt="Arattai Event"
//         />
//         <img
//           className="block sm:hidden w-full"
//           src="/images/vivek-mobile-banner.jpeg"
//           alt="Arattai Event"
//         />
//       </section>

//       {/* Table */}
//       <div style={{ padding: 20 }}>
//         <h2 style={{ marginBottom: 20 }}>Arattai with Karunakaran</h2>

//         <div style={{ overflowX: "auto" }}>
//           <table
//             style={{
//               borderCollapse: "collapse",
//               width: "100%",
//               fontSize: 14,
//             }}
//           >
//             <thead
//               style={{ background: "#f3f4f6", position: "sticky", top: 0 }}
//             >
//               <tr>
//                 <th style={cellStyle}>S.No</th>
//                 <th style={cellStyle}>Name</th>
//                 <th style={cellStyle}>Email</th>
//                 <th style={cellStyle}>Phone</th>
//                 <th style={cellStyle}>Organisation</th>
//                 <th style={cellStyle}>Age</th>
//                 <th style={cellStyle}>Gender</th>
//                 <th style={cellStyle}>Date</th>
//                 <th style={cellStyle}>Time</th>
//               </tr>
//             </thead>

//             <tbody>
//               {data.map((d, i) => {
//                 const { date, time } = formatDateTime(d.created_at);

//                 return (
//                   <tr key={d.id}>
//                     <td style={cellStyle}>{i + 1}</td>
//                     <td style={cellStyle}>{d.name}</td>
//                     <td style={cellStyle}>{d.email}</td>
//                     <td style={cellStyle}>{d.phone}</td>
//                     <td style={cellStyle}>{d.organisation || "—"}</td>
//                     <td style={cellStyle}>{d.age}</td>
//                     <td style={cellStyle}>{d.gender}</td>
//                     <td style={cellStyle}>{date}</td>
//                     <td style={cellStyle}>{time}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         <p style={{ marginTop: 10, color: "green" }}>
//           ● Live updating every 10 Minutes
//         </p>
//       </div>
//     </>
//   );
// }

// const cellStyle = {
//   border: "1px solid #ddd",
//   padding: "8px",
// };

import { useEffect, useState } from "react";
import axios from "axios";
import { formatDateTime } from "../QuizGame/utils/dateTime";
import {
  ChevronDownIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ArattaiSoumyaSwaminathanExcelView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.superchennai.com/api/arattai-karunakaran/arattai-karunakaran",
      );

      if (res.data?.success) {
        const verified = res.data.data.filter(
          (d) => d.is_mobile_verified === true,
        );
        setData(verified);
      }
    } catch (err) {
      console.error("Error fetching Karunakaran data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 600000); // 10 mins
    return () => clearInterval(interval);
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Premium Banner */}
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-2xl"> */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-rose-950">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 py-20 sm:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
              Arattai with Karunakaran
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Live registrations • Real-time updates • Verified participants
              only
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <ClockIcon className="w-6 h-6" />
                <span>Live • Updates every 10 mins</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <UserGroupIcon className="w-6 h-6" />
                <span>{data.length} Verified Registrations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Premium Stats Cards */}
      <div className="container-fliud mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {data.length}
            </div>
            <div className="text-gray-600 font-medium">Total Registrations</div>
          </div>
          {/* <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="font-medium opacity-90">Verified</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="text-3xl font-bold text-indigo-600 mb-2">Live</div>
            <div className="text-gray-600 font-medium">Real-time Data</div>
          </div> */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="text-3xl font-bold mb-2">10 min</div>
            <div className="font-medium opacity-90">Auto Refresh</div>
          </div>
        </div>

        {/* Premium Table */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Live Registrations
            </h2>
          </div>

          {loading ? (
            <div className="py-20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    {[
                      { label: "S.No", key: "id", icon: null },
                      { label: "Name", key: "name", icon: null },
                      { label: "Email", key: "email", icon: AtSymbolIcon },
                      { label: "Phone", key: "phone", icon: PhoneIcon },
                      {
                        label: "Organisation",
                        key: "organisation",
                        icon: null,
                      },
                      { label: "Age", key: "age", icon: null },
                      { label: "Gender", key: "gender", icon: null },
                      { label: "Date", key: "created_at", icon: MapPinIcon },
                      { label: "Time", key: "created_at", icon: ClockIcon },
                    ].map(({ label, key, icon: Icon }) => (
                      <th
                        key={key}
                        className="px-6 py-5 text-left font-semibold text-white/95 relative group cursor-pointer hover:bg-white/20 transition-all duration-200"
                        onClick={() => key !== "id" && handleSort(key)}
                      >
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className="w-5 h-5" />}
                          {label}
                          {sortConfig.key === key && (
                            <ChevronDownIcon
                              className={`w-4 h-4 transition-transform ${sortConfig.direction === "desc" ? "rotate-180" : ""}`}
                            />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((d, i) => {
                    const { date, time } = formatDateTime(d.created_at);
                    return (
                      <tr
                        key={d.id}
                        className="border-b border-gray-50 hover:bg-purple-50/50 transition-all duration-200 group"
                      >
                        <td className="px-6 py-5 font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td className="px-6 py-5 font-semibold text-gray-900 group-hover:text-purple-700">
                          {d.name}
                        </td>
                        <td className="px-6 py-5 text-gray-600 max-w-xs truncate">
                          {d.email}
                        </td>
                        <td className="px-6 py-5 font-mono text-sm text-gray-700">
                          {d.phone}
                        </td>
                        <td className="px-6 py-5 text-gray-600">
                          {d.organisation || "—"}
                        </td>
                        <td className="px-6 py-5 font-semibold text-gray-900">
                          {d.age}
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              d.gender === "Male"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-pink-100 text-pink-800"
                            }`}
                          >
                            {d.gender}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-gray-600 font-medium">
                          {date}
                        </td>
                        <td className="px-6 py-5 text-sm text-gray-600 font-mono">
                          {time}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Premium Footer */}
          <div className="px-8 py-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-emerald-100">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <ClockIcon className="w-5 h-5" />
                <span>Live Data • Auto-refreshes every 10 minutes</span>
              </div>
              <div className="text-gray-600">
                Showing {sortedData.length} verified registrations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
