
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  ClockIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function SummerDashboardView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedWeek, setSelectedWeek] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://summerfest.superchennai.com/api/summer-dashboard"
      );

      if (res.data?.success) {
        setData(res.data.docs || []);
      }
    } catch (err) {
      console.error("Error fetching dashboard", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 600000);

    return () => clearInterval(interval);
  }, []);

  const groupedWeeks = useMemo(() => {
    return data.reduce((acc, item) => {
      const weekTitle = item?.week?.title || "No Week";

      if (!acc[weekTitle]) {
        acc[weekTitle] = [];
      }

      acc[weekTitle].push(item);

      return acc;
    }, {});
  }, [data]);

  useEffect(() => {
    const weeks = Object.keys(groupedWeeks);

    if (weeks.length && !selectedWeek) {
      setSelectedWeek(weeks[0]);
    }
  }, [groupedWeeks]);

  const groupedEvents = useMemo(() => {
    const weekData = groupedWeeks[selectedWeek] || [];

    return weekData.reduce((acc, item) => {
      const title = item?.summer?.title || "Untitled Event";

      if (!acc[title]) {
        acc[title] = [];
      }

      acc[title].push(item);

      return acc;
    }, {});
  }, [groupedWeeks, selectedWeek]);

  useEffect(() => {
    const events = Object.keys(groupedEvents);

    if (events.length) {
      setSelectedEvent(events[0]);
    }
  }, [groupedEvents]);

  const registrations = groupedEvents[selectedEvent] || [];

  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({
      key,
      direction,
    });
  };

  const sortedData = [...registrations].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a?.[sortConfig.key];
    const bVal = b?.[sortConfig.key];

    if (aVal < bVal) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }

    if (aVal > bVal) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-rose-950">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 container mx-auto px-4 py-20 sm:py-28">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Summer Fest Dashboard
            </h1>

            <p className="text-xl opacity-90 mb-8">
              Live registrations • Week-wise • Event-wise
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <ClockIcon className="w-5 h-5" />
                <span>Auto Refresh 10 mins</span>
              </div>

              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <UserGroupIcon className="w-5 h-5" />
                <span>{data.length} Registrations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      </section>

      <div className="container-fluid mx-auto px-4 py-12">
        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-4xl font-bold text-purple-600">
              {data.length}
            </h2>

            <p className="text-gray-600 mt-2">
              Total Registrations
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-4xl font-bold text-indigo-600">
              {Object.keys(groupedWeeks).length}
            </h2>

            <p className="text-gray-600 mt-2">
              Total Weeks
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-4xl font-bold text-green-600">
              {Object.keys(groupedEvents).length}
            </h2>

            <p className="text-gray-600 mt-2">
              Events In Week
            </p>
          </div>
        </div>

        {/* WEEK TABS */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">
            Select Week
          </h3>

          <div className="flex flex-wrap gap-3">
            {Object.keys(groupedWeeks).map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all ${
                  selectedWeek === week
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow"
                }`}
              >
                {week}
                <span className="ml-2">
                  ({groupedWeeks[week].length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* EVENT TABS */}
        <div className="mb-10">
          <h3 className="font-bold text-xl mb-4">
            Select Event
          </h3>

          <div className="flex flex-wrap gap-3">
            {Object.keys(groupedEvents).map((event) => (
              <button
                key={event}
                onClick={() => setSelectedEvent(event)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all ${
                  selectedEvent === event
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow"
                }`}
              >
                {event}
                <span className="ml-2">
                  ({groupedEvents[event].length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600">
            <h2 className="text-2xl font-bold text-white">
              Registrations
            </h2>
          </div>

          {loading ? (
            <div className="py-20 flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    {[
                      { label: "S.No", key: "id" },
                      { label: "Name", key: "name" },
                      { label: "Email", key: "email" },
                      { label: "Phone", key: "phone" },
                      { label: "Company", key: "company" },
                      { label: "Event", key: "summer" },
                      { label: "Week", key: "week" },
                      { label: "Status", key: "status" },
                      { label: "Created", key: "createdAt" },
                    ].map((item) => (
                      <th
                        key={item.label}
                        onClick={() => handleSort(item.key)}
                        className="px-6 py-4 text-left cursor-pointer font-semibold"
                      >
                        <div className="flex items-center gap-2">
                          {item.label}

                          {sortConfig.key === item.key && (
                            <ChevronDownIcon
                              className={`w-4 h-4 ${
                                sortConfig.direction === "desc"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {sortedData.map((d, i) => (
                    <tr
                      key={d.id}
                      className="border-b hover:bg-purple-50"
                    >
                      <td className="px-6 py-4">
                        {i + 1}
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        {d.name}
                      </td>

                      <td className="px-6 py-4">
                        {d.email}
                      </td>

                      <td className="px-6 py-4">
                        {d.phone}
                      </td>

                      <td className="px-6 py-4">
                        {d.company || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {d?.summer?.title}
                      </td>

                      <td className="px-6 py-4">
                        {d?.week?.title}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            d.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : d.status === "approved"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {d.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {new Date(
                          d.createdAt
                        ).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {!sortedData.length && (
                <div className="p-10 text-center text-gray-500">
                  No registrations found
                </div>
              )}
            </div>
          )}

          <div className="px-8 py-5 bg-slate-50 border-t">
            Showing {sortedData.length} registrations
          </div>
        </div>
      </div>
    </div>
  );
}

