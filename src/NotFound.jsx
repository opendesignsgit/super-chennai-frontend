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
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-5 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#a44294]/20 blur-[120px]"></div>

      {/* Main Content */}
      <div className="relative z-10 animate-fadeIn">
        <h1 className="text-9xl font-extrabold text-[#a44294] drop-shadow-2xl">
          404
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
          Oops! The page you're trying to access doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-block mt-8 px-10 py-3 rounded-full text-white font-semibold bg-[#a44294] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Go Back Home
        </a>
      </div>

      {/* Related Section */}
      {/* <div className="relative z-10 mt-16 w-full max-w-4xl animate-fadeInDelay">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore More</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mb-4 group-hover:scale-110 transition-all"
                />
                <h3 className="text-lg font-semibold text-[#a44294]">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div> */}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          @keyframes fadeInDelay {
            0% { opacity: 0; transform: translateY(20px); }
            40% { opacity: 0; }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDelay {
            animation: fadeInDelay 1.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
