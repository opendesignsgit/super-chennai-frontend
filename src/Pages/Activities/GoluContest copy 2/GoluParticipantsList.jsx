

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Users, CheckCircle, ShieldCheck, Instagram, Mail, Phone, MapPin, Loader2, AlertCircle } from "lucide-react";
import { API_BASE_URL } from "../../../../config";

export default function GoluParticipantsList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // Fetch Data from API with Auth Headers
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setLoading(true);
        setError(null);

        // LocalStorage-லிருந்து Token எடுத்தல் (உங்கள் Project Token Key-ஐ இங்கே சரிபார்க்கவும்)
        const token = localStorage.getItem("token") || localStorage.getItem("authToken");

        const res = await fetch(`${API_BASE_URL}/api/golu-users?page=${page}&limit=10`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Auth Header சேர்க்கப்படுகிறது
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          // Cookie-கள் தேவைப்பட்டால்
          credentials: "include", 
        });

        if (res.status === 403) {
          throw new Error("Access Denied (403): You do not have permission or your session expired. Please login as Admin.");
        }

        if (!res.ok) {
          throw new Error(`Server Error (${res.status}): Failed to fetch participants`);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [page]);

  // Client-side search filter
  const filteredDocs = data?.docs?.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobileNumber?.includes(searchTerm) ||
      user.localityArea?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="goluParticipantsPage">
      {/* 1. Page Banner Section */}
      <div className="accaodomationBannerSection relative overflow-hidden">
        <img src="/images/education/education.jpg" alt="Registered Participants" className="w-full h-auto object-cover" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Registered Participants</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>Golu Contest Participants</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-indigo-950 uppercase tracking-tight">
                User Registrations Management
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Super Chennai Golu Contest Participants List
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by name, email, mobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-20 flex flex-col items-center justify-center text-slate-500 gap-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <Loader2 className="animate-spin text-indigo-900" size={32} />
              <p className="text-sm font-medium">Loading Participants...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="p-6 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-center justify-center gap-3 font-medium">
              <AlertCircle size={20} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Data Content */}
          {!loading && !error && data && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Registered</p>
                    <p className="text-2xl font-black text-slate-900">{data.totalDocs || 0}</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Verified Users</p>
                    <p className="text-2xl font-black text-slate-900">
                      {data.docs?.filter((d) => d.isVerified).length || 0}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Terms Accepted</p>
                    <p className="text-2xl font-black text-slate-900">
                      {data.docs?.filter((d) => d.termsAccepted).length || 0}
                    </p>
                  </div>
                </div>
              </div>

              {/* Participants Table */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-4 px-6">Participant Details</th>
                        <th className="py-4 px-6">Contact Info</th>
                        <th className="py-4 px-6">Location</th>
                        <th className="py-4 px-6">Instagram</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6">Registered On</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredDocs.length > 0 ? (
                        filteredDocs.map((user) => (
                          <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6">
                              <div className="font-bold text-slate-900">{user.fullName}</div>
                              <div className="text-xs text-slate-400 mt-0.5">ID: #{user.id}</div>
                            </td>

                            <td className="py-4 px-6 space-y-1">
                              <div className="flex items-center gap-2 text-slate-700">
                                <Mail size={14} className="text-slate-400 shrink-0" />
                                <span>{user.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-600 text-xs">
                                <Phone size={14} className="text-slate-400 shrink-0" />
                                <span>{user.mobileNumber}</span>
                              </div>
                            </td>

                            <td className="py-4 px-6">
                              <div className="flex items-center gap-2 text-slate-700">
                                <MapPin size={14} className="text-slate-400 shrink-0" />
                                <span>{user.localityArea || "N/A"}</span>
                              </div>
                            </td>

                            <td className="py-4 px-6">
                              {user.instagramHandle ? (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-medium">
                                  <Instagram size={12} />
                                  <span>{user.instagramHandle}</span>
                                </div>
                              ) : (
                                <span className="text-slate-400 text-xs">-</span>
                              )}
                            </td>

                            <td className="py-4 px-6">
                              <div className="flex flex-col gap-1 items-start">
                                {user.isVerified ? (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md text-[11px] font-bold">
                                    Verified
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                                    Pending
                                  </span>
                                )}
                              </div>
                            </td>

                            <td className="py-4 px-6 text-slate-500 text-xs">
                              {new Date(user.registrationDate).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="py-12 text-center text-slate-400 font-medium">
                            No registered participants found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Footer */}
                <div className="py-4 px-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50">
                  <span>
                    Showing Page {data.page} of {data.totalPages}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={!data.hasPrevPage}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors font-semibold"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setPage((p) => p + 1)}
                      disabled={!data.hasNextPage}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors font-semibold"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}