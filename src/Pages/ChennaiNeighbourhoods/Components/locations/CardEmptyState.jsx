import React from "react";

export default function CardEmptyState({
  title = "No Data Found",
  message = "Try changing filters or search keyword.",
  onReset,
}) {
  return (
    <div className="flex justify-center items-center min-h-[400px] p-8">
      <div className="relative w-[90%] max-w-2xl mx-auto bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 shadow-blue-100/50 py-20 px-10 text-center group">
        {/* Premium Animated Icon */}
        <div className="relative mx-auto mb-8 max-w-xs">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-3xl border border-purple-200/50 shadow-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 mx-auto">
            <div className="text-7xl animate-pulse-slow">📭</div>
          </div>

          {/* Floating particles */}
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-ping delay-100"></div>
        </div>

        {/* Premium Typography */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-slate-800 bg-clip-text text-transparent mb-4 leading-tight group-hover:translate-y-[-2px] transition-all duration-300">
            {title}
          </h3>

          <p className="text-lg text-slate-600/90 mb-10 leading-relaxed backdrop-blur-sm">
            {message}
          </p>
        </div>

        {/* Premium Button - Centered */}
        {onReset && (
          <div className="flex justify-center">
            <button
              onClick={onReset}
              className="group/btn relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#8b3c82] via-[#a34493] to-[#8b3c82] text-white font-semibold text-xl shadow-2xl shadow-[#8b3c82]/50 hover:shadow-[#a34493]/60 hover:scale-[1.02] active:scale-95 transform transition-all duration-300 overflow-hidden border border-[#8b3c82]/50 backdrop-blur-md hover:from-[#a34493] hover:via-[#8b3c82] hover:to-[#a34493]"
            >
              {/* Premium SVG Icon */}
              <svg
                className="w-7 h-7 group-hover/btn:rotate-180 transition-transform duration-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>

              <span>Reset Filters</span>

              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>
        )}

        {/* Subtle bottom decoration */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-xl"></div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
}