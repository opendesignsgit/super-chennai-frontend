
import React, { useState } from "react";

export default function FaqNeighbourhoods({ faqDataProps }) {
  // Graceful fallbacks in case data isn't configured in Payload yet
  const subHeading = faqDataProps?.subHeading || "Frequently Asked Questions";
  const heading = faqDataProps?.heading || "Frequently Asked Questions About This Area";
  const description = faqDataProps?.description || "Quick answers to the most common questions.";
  const dynamicFaqs = faqDataProps?.faqs || [];

  // Default-ah 1st item open (using index or a unique id fallback)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Split your dynamic entries into two columns
  const halfLength = Math.ceil(dynamicFaqs.length / 2);
  const leftColumnFaqs = dynamicFaqs.slice(0, halfLength);
  const rightColumnFaqs = dynamicFaqs.slice(halfLength);

  const renderFaqCard = (item, relativeIndex) => {
    const isOpen = openIndex === relativeIndex;
    
    return (
      <div
        key={relativeIndex}
        className="bg-[#FAF9FF] border border-slate-100 rounded-[8px] shadow-xs overflow-hidden transition-all duration-200"
      >
        <button
          onClick={() => toggleFAQ(relativeIndex)}
          className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors focus:outline-hidden cursor-pointer"
        >
          <span className="!text-[#1d1d1d] !font-semibold mb-0 neighbourtwoparagraph !text-[15px]">
            {item.question}
          </span>
          <span
            className={`text-xl font-medium select-none w-6 h-6 flex items-center justify-center rounded-full text-[#a44294] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden px-6 py-0 ${
            isOpen ? "max-h-40 py-5 pt-0" : "max-h-0"
          }`}
        >
          <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
            {item.answer}
          </p>
        </div>
      </div>
    );
  };

  if (!dynamicFaqs.length) return null; // Hide section cleanly if no FAQs exist

  return (
    <section className="bg-[#fff] py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="container max-w-7xl mx-auto relative">
        
        {/* Dynamic Section Headers */}
        <div className="mb-12 max-w-2xl">
          <span className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
            {subHeading}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
            {heading}
          </h2>
          <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
            {description}
          </p>
        </div>

        {/* Two Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 relative z-10">
          <div className="flex flex-col gap-4">
            {leftColumnFaqs.map((item, index) => renderFaqCard(item, index))}
          </div>

          <div className="flex flex-col gap-4">
            {/* Index shifting ensures unique tracking IDs for toggle matching */}
            {rightColumnFaqs.map((item, index) => renderFaqCard(item, index + halfLength))}
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useState } from "react";

// const faqData = [
//   {
//     id: 1,
//     question: "Why is T. Nagar famous?",
//     answer:
//       "T. Nagar is one of Chennai's busiest commercial and shopping hubs, famous for Ranganathan Street, textiles, jewellery, and lifestyle stores.",
//   },
//   {
//     id: 2,
//     question: "Which is the nearest metro station?",
//     answer:
//       "The nearest metro station is the AG-DMS Metro Station, which connects you smoothly to the rest of Chennai's transit network.",
//   },
//   {
//     id: 3,
//     question: "Is T. Nagar a good place for families?",
//     answer:
//       "Yes, it features excellent residential pockets, well-reputed schools, healthcare options, and parks, balancing city life with neighborhood comfort.",
//   },
//   {
//     id: 4,
//     question: "Is parking available in T. Nagar?",
//     answer:
//       "There are designated multi-level parking complexes and street parking spaces available, though it can get busy during peak holiday seasons.",
//   },
//   {
//     id: 5,
//     question: "What are the best shopping streets?",
//     answer:
//       "Ranganathan Street, Usman Road, and Pondy Bazaar are world-famous for clothing, jewelry, and street shopping treasures.",
//   },
//   {
//     id: 6,
//     question: "What are the best schools in T. Nagar?",
//     answer:
//       "T. Nagar hosts several top-tier historic schools offering CBSE, matriculation, and international curriculums.",
//   },
//   {
//     id: 7,
//     question: "Which hospitals are near T. Nagar?",
//     answer:
//       "Prominent healthcare facilities, multispecialty clinics, and emergency hospitals are accessible within minutes across the neighborhood.",
//   },
//   {
//     id: 8,
//     question: "How is the public transport connectivity?",
//     answer:
//       "Connectivity is superb, backed by a massive local MTC bus terminus, multiple railway stations nearby, and immediate metro access.",
//   },
//   {
//     id: 9,
//     question: "What are the popular restaurants here?",
//     answer:
//       "From historic South Indian vegetarian eateries to modern fine dining and global cafes, T. Nagar is a major culinary hotspot.",
//   },
//   {
//     id: 10,
//     question: "Is T. Nagar suitable for working professionals?",
//     answer:
//       "With massive corporate spaces, coworking spaces, and brilliant connectivity to commercial corridors, it is highly preferred by professionals.",
//   },
// ];

// export default function FaqNeighbourhoods() {
//   // Single active ID-ai mattum num-ah store panrom (Default-ah 1st item open)
//   const [openId, setOpenId] = useState(1);

//   const toggleFAQ = (id) => {
//     // Click panna id ready-ah open-la iruntha null (close) aagum, illana antha id open aagum
//     setOpenId((prevId) => (prevId === id ? null : id));
//   };

//   // Split items evenly into two columns for wide desktop views
//   const halfLength = Math.ceil(faqData.length / 2);
//   const leftColumnFaqs = faqData.slice(0, halfLength);
//   const rightColumnFaqs = faqData.slice(halfLength);

//   const renderFaqCard = (item) => {
//     // Current card open-la irukka nu check panrom
//     const isOpen = openId === item.id;
    
//     return (
//       <div
//         key={item.id}
//         className="bg-[#FAF9FF] border border-slate-100 rounded-[8px] shadow-xs overflow-hidden transition-all duration-200"
//       >
//         <button
//           onClick={() => toggleFAQ(item.id)}
//           className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors focus:outline-hidden cursor-pointer"
//         >
//           <span className="!text-[#1d1d1d] !font-semibold mb-0 neighbourtwoparagraph !text-[15px]">
//             {item.question}
//           </span>
//           <span
//             className={`text-xl font-medium select-none w-6 h-6 flex items-center justify-center rounded-full text-[#a44294] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//           >
//             {isOpen ? "−" : "+"}
//           </span>
//         </button>

//         {/* Dynamic Accordion Body */}
//         <div
//           className={`transition-all duration-300 ease-in-out overflow-hidden px-6 py-0 ${
//             isOpen ? "max-h-40  py-5 pt-0" : "max-h-0"
//           }`}
//         >
//           <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//             {item.answer}
//           </p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="bg-[#fff] py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
//       <div className="container max-w-7xl mx-auto relative">
//         {/* Section Headers */}
//         <div className="mb-12 max-w-2xl">
//           <span className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//             Frequently Asked Questions
//           </span>
//           <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
//             Everything You Want to Know About T. Nagar
//           </h2>
//           <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//             Quick answers to the most common questions about living, commuting
//             and exploring T. Nagar.
//           </p>
//         </div>

//         {/* Two Column Layout Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 relative z-10">
//           {/* Left Side Column */}
//           <div className="flex flex-col gap-4">
//             {leftColumnFaqs.map(renderFaqCard)}
//           </div>

//           {/* Right Side Column */}
//           <div className="flex flex-col gap-4">
//             {rightColumnFaqs.map(renderFaqCard)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }