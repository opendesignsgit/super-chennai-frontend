// const NotFound = () => {
//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-5">
//       {/* Glow Circle */}
//       <div className="absolute w-64 h-64 rounded-full bg-[#a44294]/20 blur-3xl"></div>

//       {/* Content Container */}
//       <div className="relative z-10 animate-fadeIn">
//         <h1 className="text-8xl  text-[#a44294] drop-shadow-lg">
//           404
//         </h1>

//         <p className="mt-4 text-xl text-gray-700 max-w-xl mx-auto">
//           Oops! The page you are looking for doesn’t exist or has been moved.
//         </p>

//         <div className="mt-8">
//           <a
//             href="/"
//             className="px-8 py-3 rounded-full text-white font-semibold bg-[#a44294] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//           >
//             Go Back Home
//           </a>
//         </div>
//       </div>

//       {/* Tailwind Animations */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.8s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default NotFound;

const NotFound = () => {
  const items = [
    {
      title: "Events",
      icon: "/images/icons/events.png",
      link: "/events",
    },
    {
      title: "Quiz",
      icon: "/images/icons/quiz.png",
      link: "/quiz",
    },
    {
      title: "Icon of The Month",
      icon: "/images/icons/icon-month.png",
      link: "/icon-of-the-month",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center px-5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.2),transparent)]"></div>

        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float1"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-float2"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float3"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-pink-400/30 rounded-full animate-float4"></div>
      </div>

      <div className="relative z-10 animate-heroSlideIn mt-10">
        <div className="  max-w-4xl mx-auto animate-glassFloat">
          <div className="relative">
            <div
              className="flex items-end justify-center gap-0 mb-12 relative"
              style={{ fontKerning: "none" }}
            >
              <div className="relative group pr-0">
                <h1 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] xl:text-[18rem] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-3xl leading-none tracking-[-0.15em] animate-slideInLeft pb-2">
                  4
                </h1>
                <div className="absolute -top-8 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:scale-110 transition-all duration-300"></div>
              </div>

              <div className="relative group px-4">
                {/* Multi-ring pulse */}
                <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mx-auto animate-multiRingPulse">
                  <div className="absolute inset-0 border-4 border-[#8b3c82]/30 rounded-full animate-ringPulse1"></div>
                  <div className="absolute inset-0 border-4 border-[#a34493]/40 rounded-full animate-ringPulse2 delay-300"></div>
                  <div className="absolute inset-0 border-3 border-[#8b3c82]/50 rounded-full animate-ringPulse3 delay-600"></div>
                </div>

                {/* Premium 0 with glow */}
                <h1 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] xl:text-[18rem] font-black bg-gradient-to-b from-white via-slate-100/90 to-white/80 bg-clip-text text-transparent drop-shadow-4xl leading-none tracking-[-0.15em] relative z-20 animate-bounceInUltra pt-1 -mx-2 group-hover:scale-[1.05] transition-transform duration-500">
                  0
                </h1>

                {/* Inner glow */}
                <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto bg-gradient-to-r from-[#8b3c82]/40 via-[#a34493]/30 to-[#8b3c82]/40 rounded-full blur-2xl opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-600 animate-glowPulse"></div>

                {/* Floating particles */}
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-[#8b3c82] rounded-full opacity-60 animate-floatParticle1"></div>
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#a34493] rounded-full opacity-50 animate-floatParticle2"></div>
              </div>
              <div className="relative group pl-0">
                <h1 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] xl:text-[18rem] font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-3xl leading-none tracking-[-0.15em] animate-slideInRight pb-2">
                  4
                </h1>
                <div className="absolute -bottom-6 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:scale-110 transition-all duration-300"></div>
              </div>
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 text-white/80 mb-8 animate-glow">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-pulse"></div>
              Page Not Found
            </div>

            <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-xl mx-auto">
              Oops! The page you're trying to access doesn't exist or has been
              moved. Go Back Home
            </p>

            <a
              href="/"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Return to Home Base
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12"></div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(360deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.2);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes heroSlideIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes glassFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 7s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 9s ease-in-out infinite;
        }
        .animate-heroSlideIn {
          animation: heroSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-glassFloat {
          animation: glassFloat 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-bounceIn {
          animation: bounceIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-ringPulse {
          animation: ringPulse 2s ease-out infinite;
        }
        .animate-glow {
          box-shadow: 0 0 20px rgba(164, 66, 148, 0.3);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(164, 66, 148, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(164, 66, 148, 0.6);
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }

        @media (max-width: 650px) {
          .text-\[81rem\] {
            font-size: 9rem;
          }
        }
      `}</style>
    </div>
  );

  // return (
  //   <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-5 relative overflow-hidden">

  //     {/* Glow */}
  //     <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#a44294]/20 blur-[120px]"></div>

  //     {/* Main Content */}
  //     <div className="relative z-10 animate-fadeIn">
  //       <h1 className="text-9xl font-extrabold text-[#a44294] drop-shadow-2xl">
  //         404
  //       </h1>

  //       <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
  //         Oops! The page you're trying to access doesn't exist or has been moved.
  //       </p>

  //       <a
  //         href="/"
  //         className="inline-block mt-8 px-10 py-3 rounded-full text-white font-semibold bg-[#a44294] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  //       >
  //         Go Back Home
  //       </a>
  //     </div>

  //     {/* Related Section */}
  //     {/* <div className="relative z-10 mt-16 w-full max-w-4xl animate-fadeInDelay">
  //       <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore More</h2>

  //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  //         {items.map((item, index) => (
  //           <a
  //             key={index}
  //             href={item.link}
  //             className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  //           >
  //             <div className="flex flex-col items-center">
  //               <img
  //                 src={item.icon}
  //                 alt={item.title}
  //                 className="w-16 h-16 mb-4 group-hover:scale-110 transition-all"
  //               />
  //               <h3 className="text-lg font-semibold text-[#a44294]">
  //                 {item.title}
  //               </h3>
  //             </div>
  //           </a>
  //         ))}
  //       </div>
  //     </div> */}

  //     {/* Animations */}
  //     <style>
  //       {`
  //         @keyframes fadeIn {
  //           from { opacity: 0; transform: translateY(20px); }
  //           to { opacity: 1; transform: translateY(0); }
  //         }
  //         .animate-fadeIn {
  //           animation: fadeIn 0.8s ease-out forwards;
  //         }

  //         @keyframes fadeInDelay {
  //           0% { opacity: 0; transform: translateY(20px); }
  //           40% { opacity: 0; }
  //           100% { opacity: 1; transform: translateY(0); }
  //         }
  //         .animate-fadeInDelay {
  //           animation: fadeInDelay 1.2s ease-out forwards;
  //         }
  //       `}
  //     </style>
  //   </div>
  // );
};

export default NotFound;
