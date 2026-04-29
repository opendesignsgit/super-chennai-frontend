

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL =
  "https://api.cricapi.com/v1/currentMatches?apikey=09119578-2c03-4bca-a6ea-a8bedae8714b";

export default function CricketLivePage() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [otherMatches, setOtherMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMatches = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.status === "failure") {
        console.error("API Limit Exceeded:", data.reason);
        return;
      }

      const matches = data?.data || [];

      const live = matches.filter((m) => m?.matchStarted && !m?.matchEnded);

      const others = matches.filter((m) => !m?.matchStarted || m?.matchEnded);

      setLiveMatches(live);
      setOtherMatches(others);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  fetchMatches();
}, []);

  return (
    <>
      {/* ================= PROFESSIONAL HERO SECTION ================= */}
      <motion.section
        className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          backgroundSize: "400% 400%",
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 mb-8"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
              Live Updates
            </span>
          </motion.div> */}

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            LIVE CRICKET
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Real-time scores • Professional interface • Instant updates
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
            <div className="text-2xl">🏏</div>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        {!loading && liveMatches.length === 0 && (
          <motion.p
            className="text-center text-amber-400 text-lg font-medium mt-12 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ⚠️ API limit reached or no live matches available
          </motion.p>
        )}

        {/* Loading State */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="flex flex-col items-center justify-center py-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-700/50 border-t-cyan-400 rounded-full animate-spin" />
                <div
                  className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-emerald-400 rounded-full animate-spin"
                  style={{ animationDuration: "1.5s" }}
                />
              </div>
              <p className="text-2xl font-semibold text-white/80 mt-6">
                Loading live matches...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔴 LIVE SECTION */}
        <AnimatePresence>
          {liveMatches.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <motion.div
                className="flex items-center gap-4 mb-12 p-6 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-3xl backdrop-blur-xl border border-red-400/30 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(239,68,68,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-4 h-4 bg-red-400 rounded-full animate-ping" />
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                    LIVE MATCHES
                  </h2>
                  <p className="text-sm font-medium text-red-300 mt-1">
                    ({liveMatches.length} active)
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {liveMatches.map((match, index) => (
                  <MatchCardPro
                    key={match.id}
                    match={match}
                    delay={index * 0.1}
                    isLive={true}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* 📋 OTHER MATCHES */}
        <AnimatePresence>
          {otherMatches.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-black text-center bg-gradient-to-r from-slate-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent mb-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                UPCOMING & RECENT
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherMatches.map((match, index) => (
                  <MatchCardPro
                    key={match.id}
                    match={match}
                    delay={index * 0.1}
                    isLive={false}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {liveMatches.length === 0 && otherMatches.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-slate-600/50">
              <span className="text-5xl">🏏</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white/80 mb-6">
              No matches right now
            </h2>
            <p className="text-xl text-slate-400 max-w-md mx-auto">
              Check back soon for live cricket action and updates!
            </p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </>
  );
}

// 🔥 PROFESSIONAL MATCH CARD
function MatchCardPro({ match, delay = 0, isLive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 35px 60px -15px rgba(34,197,94,0.3)",
      }}
      className="group relative bg-gradient-to-b from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 h-full shadow-2xl hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:shadow-cyan-500/20"
    >
      {/* Live Status Badge */}
      {isLive && (
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/20"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-lg font-bold text-white drop-shadow-lg">
            ● LIVE
          </span>
        </motion.div>
      )}

      {/* Premium Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 rounded-3xl group-hover:bg-gradient-to-r group-hover:from-cyan-400/10 group-hover:to-emerald-400/10 transition-all duration-500" />

      {/* Match Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight group-hover:text-cyan-300 transition-all duration-400 line-clamp-2 z-10 relative">
        {match.name}
      </h3>

      {/* Match Info */}
      <div className="space-y-4 mb-8 z-10 relative">
        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/70 transition-all duration-300">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <div>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              Status
            </span>
            <p className="font-semibold text-white text-sm">{match.status}</p>
          </div>
        </div>
        {match.venue && (
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/70 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
            <div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                Venue
              </span>
              <p className="font-semibold text-white text-sm truncate">
                {match.venue}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Teams Section */}
      <div className="flex items-stretch justify-between mb-8 gap-4 z-10 relative">
        {match.teamInfo?.map((team, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center flex-1 gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group/team"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-3 border-white/20 shadow-xl group-hover/team:border-cyan-400/60 group-hover/team:shadow-cyan-500/30 transition-all duration-400 relative"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={team.img}
                alt={team.name}
                className="w-full h-full object-cover"
                whileHover={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <span className="font-bold text-white text-sm md:text-base tracking-wide text-center min-h-[2rem] flex items-center">
              {team.shortname}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Scores Section */}
      <div className="relative z-10">
        <div className="space-y-3 pt-6 border-t border-white/15">
          {match.score?.map((s, i) => (
            <motion.div
              key={i}
              className="group/score flex items-baseline justify-between p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ scaleX: 0.8, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                {s.inning}
              </span>
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
                  {s.r}
                </span>
                <div className="flex items-baseline gap-2 text-2xl font-bold text-white/80">
                  <span>{s.w}</span>
                  <span className="text-lg text-slate-500">({s.o})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}
