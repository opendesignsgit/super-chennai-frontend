import React, { useEffect, useRef, useState } from "react";

export default function SearchChennai({ onSearch, dataaa }) {
  const [value, setValue] = useState("");
  const [isTop, setIsTop] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const sectionRef = useRef(null);

  useEffect(() => {
    const getHeaderHeight = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 100;
      if (width >= 768) return 280;
      return 100;
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = getHeaderHeight();
      if (rect.top <= triggerPoint) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("isTop", isTop);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Brand new function to clear state and reset results
  const handleReset = () => {
    setValue("");
    if (onSearch) {
      onSearch(""); // Sends empty string to reset the filtered parent list
    }
  };

  const handleTagClick = (tagName) => {
    setValue(tagName);
    if (onSearch) {
      onSearch(tagName);
    }
  };

  const getDynamicTags = () => {
    const fallbackTags = ["T Nagar", "Anna Nagar", "OMR", "Velachery", "Adyar"];
    if (!dataaa || !Array.isArray(dataaa)) return fallbackTags;
    const uniqueTags = new Set();
    dataaa.forEach((item) => {
      const locationObj = item?.locations;
      if (locationObj) {
        const locationName =
          typeof locationObj === "object"
            ? locationObj.title || locationObj.name || locationObj.label
            : null;

        if (locationName) {
          uniqueTags.add(locationName);
        }
      }
    });
    return uniqueTags.size > 0
      ? Array.from(uniqueTags).slice(0, 6)
      : fallbackTags;
  };

  const displayTags = getDynamicTags();

  return (
    <>
      <div
        ref={sectionRef}
        className="bg-white rounded-2xl shadow-2xl p-5 w-full lg:w-[60%] bannerseeachresulttt"
      >
        <div className="flex border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab("search")}
            className={`px-5 py-2 text-sm font-bold transition-colors neighbourtwoheaidngssparagraph ${
              activeTab === "search"
                ? "text-[#a44294] border-b-2 border-[#a44294] -mb-px"
                : "text-gray-500"
            }`}
          >
            Search
          </button>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-3 gap-2 relative">
            <span className="text-gray-400 text-base neighebbbbbbbsss">
              <img
                src="/images/icons/location-output-neighbourhood.svg"
                alt=""
              />
            </span>
            <input
              type="text"
              placeholder="Search by Area, Locality, Landmark or Pincode"
              className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent pr-6 neighbourtwoparagraph"
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            {/* Inline Clear Icon - shows up only when input has content */}
            {value && (
              <button
                onClick={handleReset}
                type="button"
                className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-0.5 text-base font-bold rounded-full hover:bg-gray-100 flex items-center justify-center w-5 h-5 line-none"
                title="Clear input"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="bg-[#a44294] hover:bg-[#974189] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap neighbourtwoparagraph cursor-pointer"
          >
            Search
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#000] !font-semibold neighbourtwoparagraph">
            Popular Searches:
          </span>
          {displayTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="cursor-pointer text-[#000] font-bold border border-[#00000040] hover:bg-purple-100 hover:text-[#a44294] px-3 py-1 rounded-full transition-colors neighbourtwoparagraph"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// import React, { useEffect, useRef, useState } from "react";

// export default function SearchChennai({ onSearch, dataaa }) {
//   const [value, setValue] = useState("");
//   const [isTop, setIsTop] = useState(false);
//   const [query, setQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("search");
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const getHeaderHeight = () => {
//       const width = window.innerWidth;
//       if (width >= 1024) return 100;
//       if (width >= 768) return 280;
//       return 100;
//     };

//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const triggerPoint = getHeaderHeight();
//       if (rect.top <= triggerPoint) {
//         setIsTop(true);
//       } else {
//         setIsTop(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   console.log("isTop", isTop);

//   const handleSearch = () => {
//     if (onSearch) {
//       onSearch(value);
//     }
//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleTagClick = (tagName) => {
//     setValue(tagName);
//     if (onSearch) {
//       onSearch(tagName);
//     }
//   };

//   const getDynamicTags = () => {
//     const fallbackTags = ["T Nagar", "Anna Nagar", "OMR", "Velachery", "Adyar"];
//     if (!dataaa || !Array.isArray(dataaa)) return fallbackTags;
//     const uniqueTags = new Set();
//     dataaa.forEach((item) => {
//       const locationObj = item?.locations;
//       if (locationObj) {
//         const locationName =
//           typeof locationObj === "object"
//             ? locationObj.title || locationObj.name
//             : null;

//         if (locationName) {
//           uniqueTags.add(locationName);
//         }
//       }
//     });
//     return uniqueTags.size > 0
//       ? Array.from(uniqueTags).slice(0, 6)
//       : fallbackTags;
//   };

//   const displayTags = getDynamicTags();

//   return (
//     <>
//       <div
//         ref={sectionRef}
//         className="bg-white rounded-2xl shadow-2xl p-5 w-full lg:w-[60%] bannerseeachresulttt"
//       >
//         <div className="flex border-b border-gray-200 mb-4">
//           <button
//             onClick={() => setActiveTab("search")}
//             className={`px-5 py-2 text-sm font-bold transition-colors neighbourtwoheaidngssparagraph ${
//               activeTab === "search"
//                 ? "text-[#a44294] border-b-2 border-[#a44294] -mb-px"
//                 : "text-gray-500"
//             }`}
//           >
//             Search
//           </button>
//         </div>

//         <div className="flex gap-2">
//           <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-3 gap-2">
//             <span className="text-gray-400 text-base neighebbbbbbbsss">
//               <img
//                 src="/images/icons/location-output-neighbourhood.svg"
//                 alt=""
//               />
//             </span>
//             <input
//               type="text"
//               placeholder="Search by Area, Locality, Landmark or Pincode"
//               className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent neighbourtwoparagraph"
//               value={value}
//               onChange={handleChange}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSearch();
//                 }
//               }}
//             />
//           </div>
//           <button
//             onClick={handleSearch}
//             className="bg-[#a44294] hover:bg-[#974189] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap neighbourtwoparagraph cursor-pointer"
//           >
//             Search
//           </button>
//         </div>

//         <div className="mt-5 flex flex-wrap items-center gap-2">
//           <span className="text-xs text-[#000] !font-semibold neighbourtwoparagraph">
//             Popular Searches:
//           </span>
//           {displayTags.map((tag) => (
//             <button
//               key={tag}
//               onClick={() => handleTagClick(tag)}
//               className="cursor-pointer text-[#000] font-bold border border-[#00000040] hover:bg-purple-100 hover:text-[#a44294] px-3 py-1 rounded-full transition-colors neighbourtwoparagraph"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
