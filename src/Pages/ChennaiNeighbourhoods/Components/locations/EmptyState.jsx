// import React from "react";

// export default function EmptyState({
//   title = "No Data Found",
//   message = "Try changing filters or search keyword.",
//   onReset,
// }) {
//   return (
//     <div className="flex justify-center">
//       <div className="w-[40%] bg-white rounded-xl shadow-sm border border-gray-200 py-16 px-6 text-center mb-10 mt-2">
//         <div className="text-5xl mb-4">📭</div>

//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-gray-500 mb-6">{message}</p>

//         {onReset && (
//           <button
//             onClick={onReset}
//             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#995099] text-white font-medium hover:bg-[#620d62] transition"
//           >
//             {/* SVG Reset Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M3 2v6h6" />
//               <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
//             </svg>
//             Reset Filters
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function EmptyState({
//   title = "No Data Found",
//   message = "Try changing filters or search keyword.",
//   onReset,
// }) {
//   return (
//     <div className="flex justify-center min-h-[400px] items-center p-8">
//       <div className="relative w-[45%] max-w-md bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 shadow-blue-100/50 py-20 px-10 text-center group">
//         {/* Premium Animated Icon */}
//         <div className="relative mx-auto mb-8">
//           <div className="w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-3xl border border-purple-200/50 shadow-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
//             <div className="text-6xl animate-pulse-slow">📭</div>
//           </div>
          
//           {/* Floating particles */}
//           <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-ping"></div>
//           <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-ping delay-100"></div>
//         </div>

//         {/* Premium Typography */}
//         <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-slate-800 bg-clip-text text-transparent mb-4 leading-tight group-hover:translate-y-[-2px] transition-all duration-300">
//           {title}
//         </h3>
        
//         <p className="text-lg text-slate-600/90 mb-10 leading-relaxed max-w-xs mx-auto backdrop-blur-sm">
//           {message}
//         </p>

//         {/* Premium Button */}
//         {onReset && (
//           <button
//             onClick={onReset}
//             className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transform transition-all duration-300 overflow-hidden border border-purple-500/30 backdrop-blur-sm"
//           >
//             {/* Premium SVG Icon */}
//             <svg
//               className="w-6 h-6 group-hover/btn:rotate-180 transition-transform duration-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//               />
//             </svg>
            
//             <span>Reset Filters</span>
            
//             {/* Button Shine Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
//           </button>
//         )}

//         {/* Subtle bottom decoration */}
//         <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-xl"></div>
//       </div>

//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
//         .delay-100 {
//           animation-delay: 0.1s;
//         }
//       `}</style>
//     </div>
//   );
// }

import React from "react";

export default function EmptyState({
  title = "No Data Found",
  message = "Try changing filters or search keyword.",
  onReset,
}) {
  return (
    <div className="relative min-h-screen flex justify-center items-center p-8 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900">
      {/* Animated Premium Dark Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b3c82]/10 via-[#a34493]/5 to-slate-900/50"></div>
        
        {/* Animated Floating Shapes - Dark Theme */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#8b3c82]/40 to-[#a34493]/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#a34493]/30 to-[#8b3c82]/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-64 h-64 bg-gradient-to-r from-[#8b3c82]/25 to-[#a34493]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Dark Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(139,60,130,.15),transparent_1px,transparent_1px,rgba(139,60,130,.15)),linear-gradient(90deg,rgba(163,68,147,.15),transparent_1px,transparent_1px,rgba(163,68,147,.15))] bg-slate-900/50"></div>
        </div>

        {/* Dark Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#8b3c82]/50 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#a34493]/60 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#8b3c82]/40 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-[#a34493]/50 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '3s'}}></div>
        </div>

        {/* Dark Shine Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8b3c82]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a34493]/40 to-transparent"></div>
      </div>

      {/* Main Dark Content Card */}
    <div className="w-[90%] max-w-4xl mx-auto bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-900/90 backdrop-blur-3xl rounded-3xl shadow-2xl border border-[#8b3c82]/30 shadow-[#8b3c82]/20 py-20 px-10 text-center group z-10 mt-10">
  {/* Premium Animated Icon */}
  <div className="relative mx-auto mb-8 max-w-xs">
    <div className="w-32 h-32 bg-gradient-to-r from-[#8b3c82]/30 to-[#a34493]/30 backdrop-blur-xl rounded-3xl border border-[#8b3c82]/50 shadow-2xl shadow-[#8b3c82]/40 flex items-center justify-center group-hover:scale-110 transition-all duration-700 hover:animate-pulse mx-auto">
      <div className="text-7xl drop-shadow-2xl shadow-[#8b3c82]/50">📭</div>
    </div>
    
    {/* Floating particles */}
    <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-r from-[#8b3c82] to-[#a34493] rounded-full opacity-60 animate-ping"></div>
    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-[#a34493] to-[#8b3c82] rounded-full opacity-50 animate-ping delay-100"></div>
  </div>

  {/* Premium Dark Typography */}
  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-6 leading-tight group-hover:translate-y-[-2px] transition-all duration-500 drop-shadow-lg max-w-2xl mx-auto">
    {title}
  </h3>
  
  <p className="text-xl text-slate-300/90 mb-12 leading-relaxed max-w-lg mx-auto backdrop-blur-sm font-medium">
    {message}
  </p>

  {/* Premium Dark Button */}
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

  {/* Bottom Glow */}
  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-t from-[#8b3c82]/30 to-transparent rounded-full blur-3xl"></div>
</div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .delay-100 { animation-delay: 0.1s; }
        [background-size:40px_40px] {
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}