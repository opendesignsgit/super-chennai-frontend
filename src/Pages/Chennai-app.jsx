
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  chennaiAppDataTravel,
  chennaiAppDataFood,
  chennaiAppDataGrocery,
  chennaiAppDataParcelDelivery,
  chennaiAppDataPorter,
  OthersApps,
  chennaiAppDataHealth,
} from "./Chennai-app-Data";

export default function ChennaiApp() {
  const [activeTab, setActiveTab] = useState("Metro / Transit / Travel");
  const topRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const tabs = [
    {
      id: "Metro / Transit / Travel",
      label: "Travel",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "Food Delivery & Cake Delivery",
      label: "Food Delivery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18v4H3V3zm0 7h18v4H3V10zm0 7h18v4H3v-4z"
          />
        </svg>
      ),
    },
    {
      id: "Grocerry",
      // label: "Grocery & Medicine",
            label: "Grocery ",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h2l1 12h12l1-12h2" />
        </svg>
      ),
    },
    {
      id: "Porter / Heavy Items",
      label: "Parcel",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6-9-6-9 6zm0 6v6h18v-6" />
        </svg>
      ),
    },
    {
      id: "pharmacy",
      label: "Medicine",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      ),
    },
    {
      id: "others",
      label: "Entertainment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h16v12H4V6z"
          />
        </svg>
      ),
    },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "Metro / Transit / Travel":
        return chennaiAppDataTravel;
      case "Food Delivery & Cake Delivery":
        return chennaiAppDataFood;
      case "Grocerry":
        return chennaiAppDataGrocery;
      case "Porter / Heavy Items":
        return chennaiAppDataPorter;
      case "Parcel / Courier":
        return chennaiAppDataParcelDelivery;
      case "pharmacy":
        return chennaiAppDataHealth;
      case "others":
        return OthersApps;
      default:
        return [];
    }
  };

  return (
    <div>
      {/* Banner Section */}

      <Helmet>
        <title>Chennai Apps Guide for Everyday Needs | Super Chennai</title>
        <meta
          name="description"
          content=" A simple guide to Chennai apps covering food delivery, grocery shopping, ride-hailing, bill payments, and essential services used across the city."
        />
        <link rel="canonical" href="/chennai-apps" />
      </Helmet>

      <section className="accaodomationBannerSection">
        <div>
          <img
            src="/images/app-banner-image.jpg"
            alt="Banner"
            className="w-full"
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Smart Apps Every Chennaite Uses</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <span>Smart Apps Every Chennaite Uses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className="visitIntroParaSection detailIntro">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workIntro">
            <h1>Essential Apps in Chennai</h1>
            <p>
              Discover the must-have apps used in Chennai — from food delivery
              and grocery shopping to ride-hailing, bill payments, and daily
              essentials — designed to save time, simplify tasks, and keep your
              day running smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* Main Tabs Section */}
      <div className="container max-w-7xl mx-auto chennaiappscontainer my-10">
        <div className="flex flex-col md:flex-row bg-white shadow rounded">
          {/* LEFT: Tabs */}
          <div className="w-full md:w-1/5 border-r border-gray-200 p-4">
          <ul className="flex flex-col space-y-2 ">
              {tabs.map((tab) => (
                <li key={tab.id} >
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      topRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center font-medium rounded transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#995098] text-white"
                        : "hover:bg-[#995098] hover:text-white text-gray-700"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Tab Content */}
          <div className="w-full md:w-4/5 p-4" ref={topRef}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getActiveData().map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded overflow-hidden flex flex-col"
                  onClick={() => setSelectedCard(card)}
                >
                  <img
                    src={card.appImage}
                    alt={card.Company}
                    // className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h2 className="font-semibold text-lg">{card.Company}</h2>
                    <p className="text-gray-700 mt-2 flex-1">
                      {card.AppDescription}
                    </p>
                    <button
                      className="mt-4 bg-[#a44294] text-white px-4 py-2 rounded font-medium cursor-pointer "
                      onClick={() => setSelectedCard(card)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-full max-w-4xl relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#a44294] font-semibold text-lg mb-2">
                    Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    {selectedCard.FeaturesContent?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#a44294] font-semibold text-lg mb-2">
                    Services
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    {selectedCard.serviceContent?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedCard.WebsiteLink && (
                  <a
                    href={selectedCard.WebsiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a44294] text-white rounded font-medium"
                  >
                    Website
                  </a>
                )}
                {selectedCard.AndriodLink && (
                  <a
                    href={selectedCard.AndriodLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a44294] text-white rounded font-medium"
                  >
                    Android
                  </a>
                )}
                {selectedCard.IOSLink && (
                  <a
                    href={selectedCard.IOSLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a44294] text-white rounded font-medium"
                  >
                    iOS
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}












// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import PrideofChennaiData from "./PrideofChennaiData";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   chennaiAppDataTravel,
//   chennaiAppDataFood,
//   chennaiAppDataGrocery,
//   chennaiAppDataParcelDelivery,
//   chennaiAppDataPorter,
//   OthersApps,
//   chennaiAppDataHealth
// } from "./Chennai-app-Data";

// export default function ChennaiApp() {
//   const [activeTab, setActiveTab] = useState("Metro / Transit / Travel");
//   const mySectionRef = useRef(null);
//   const topRef = useRef(null);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const [activeSubTab, setActiveSubTab] = useState([]);

//   // const tabs = [
//   //   { id: "Metro / Transit / Travel", label: " Travel" },
//   //   {
//   //     id: "Food Delivery & Cake Delivery",
//   //     label: "Food Delivery",
//   //   },
//   //   { id: "Grocerry", label: "Grocery and Medicine" },
//   //   { id: "Porter / Heavy Items", label: "Parcel " },

//   //   { id: "pharmacy", label: "Medicine" },
//   //   { id: "others", label: "Entertainment" },
//   // ];
 
//  const tabs = [
//   {
//     id: "Metro / Transit / Travel",
//     label: "Travel",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 inline-block mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "Food Delivery & Cake Delivery",
//     label: "Food Delivery",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 inline-block mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 3h18v4H3V3zm0 7h18v4H3V10zm0 7h18v4H3v-4z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "Grocerry",
//     label: "Grocery",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 inline-block mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 7h2l1 12h12l1-12h2"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "Porter / Heavy Items",
//     label: "Parcel",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 inline-block mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 7l9 6 9-6-9-6-9 6zm0 6v6h18v-6"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "pharmacy",
//     label: "Medicine",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 inline-block mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 8v8m-4-4h8"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "others",
//     label: "Entertainment",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 inline-block mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h16v12H4V6z"
//         />
//       </svg>
//     ),
//   },
// ];

//   return (
//     <div>
      
//       <section className="accaodomationBannerSection">
//         <div>
//           <img src="/images/app-banner-image.jpg" alt="" />
//         </div>
//         <div className="accodoamationBannerContainer">
//           <div className="accodoamationBannerText">
//             <h3>Smart Apps Every Chennaite Uses</h3>
//             <div className="breadCrum">
//               <Link to="/">Home</Link> -{" "}
//               <a href="">Smart Apps Every Chennaite Uses</a>{" "}
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="visitIntroParaSection detailIntro">
//         <div className="container max-w-7xl mx-auto px-4">
//           <div className="workIntro">
//             <h1>Essential Apps in Chennai</h1>
//             <p>
//               Discover the must-have apps used in Chennai — from food delivery
//               and grocery shopping to ride-hailing, bill payments, and daily
//               essentials — designed to save time, simplify tasks, and keep your
//               day running smoothly, making city life faster, smarter, and more
//               convenient
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container max-w-7xl mx-auto chennaiappscontainer">
//         <div className="flex items-start justify-center p-10">
//           <div className="w-full  bg-white flex chennai-app-flex-container">
//             {/* LEFT: Tabs */}
//             <div className="w-1/7 border-r border-gray-200 sideBarChennaiApp">
//               <ul className="flex flex-col">
//                 {tabs.map((tab) => (
//                   <li key={tab.id}>
//                     <button
//                       onClick={() => {
//                         setActiveTab(tab.id);
//                         topRef.current?.scrollIntoView({ behavior: "smooth" });
//                       }}
//                       className={`w-full text-left cursor-pointer px-6 py-2 font-medium transition-all ${
//                         activeTab === tab.id
//                           ? "bg-[#995098] text-white rounded-[5px]"
//                           : "hover:bg-[#995098] text-gray-700 hover:text-[#fff] rounded-[5px]"
//                       }`}
//                     >
//                       {tab.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* RIGHT: Tab Content */}

//             <div
//               className="w-6/7 p-4 chennaiAppTabContent"
//               ref={topRef}
//               style={{ scrollMarginTop: "200px" }}
//             >
//               {activeTab === "Metro / Transit / Travel" && (
//                 <>
//                   <div className="EventsListboxs flex flex-wrap">
//                     {chennaiAppDataTravel.map((card, index) => (
//                       <div
//                         key={index}
//                         className="EventsItems bg-white cursor-pointer newsLetterImage"
//                         onClick={() => setSelectedCard(card)}
//                         style={{
//                           transition: "transform 0.3s",
//                         }}
//                       >
//                         <div
//                           className="relative w-full EventsItemImg"
//                           style={{
//                             boxShadow:
//                               "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                           }}
//                         >
//                           <img
//                             src={card.appImage}
//                             alt={card.title}
//                             className="w-full object-cover"
//                           />
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h2 className="titlePublished">{card.Company}</h2>
//                           <h3 className="EveItemtitles">
//                             <Link
//                               style={{ fontWeight: "600", color: "#434343" }}
//                               // to={card.link}
//                               onClick={() => setSelectedCard(card)}
//                               state={{ card }}
//                             >
//                               {`${card.AppDescription}`}
//                             </Link>
//                             <div
//                               className="readMoreMainDiv"
//                               onClick={() => setSelectedCard(card)}
//                             >
//                               <Link
//                                 onClick={() => setSelectedCard(card)}
//                                 // to={card.link}
//                                 className="ReadmoreNewArticles"
//                               >
//                                 Click to View
//                               </Link>
//                             </div>
//                           </h3>
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h3 className="text-lg font-semibold">
//                             {card.title}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {activeTab === "Food Delivery & Cake Delivery" && (
//                 <>
//                   <div className="EventsListboxs flex flex-wrap">
//                     {chennaiAppDataFood.map((card, index) => (
//                       <div
//                         key={index}
//                         className="EventsItems bg-white cursor-pointer newsLetterImage"
//                         onClick={() => setSelectedCard(card)}
//                         style={{
//                           transition: "transform 0.3s",
//                         }}
//                       >
//                         <div
//                           className="relative w-full EventsItemImg"
//                           style={{
//                             boxShadow:
//                               "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                           }}
//                         >
//                           <img
//                             src={card.appImage}
//                             alt={card.title}
//                             className="w-full object-cover"
//                           />
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h2 className="titlePublished">{card.Company}</h2>
//                           <h3 className="EveItemtitles">
//                             <Link
//                               style={{ fontWeight: "600", color: "#434343" }}
//                               // to={card.link}
//                               onClick={() => setSelectedCard(card)}
//                               state={{ card }}
//                             >
//                               {`${card.AppDescription}`}
//                             </Link>
//                             <div
//                               className="readMoreMainDiv"
//                               onClick={() => setSelectedCard(card)}
//                             >
//                               <Link
//                                 onClick={() => setSelectedCard(card)}
//                                 // to={card.link}
//                                 className="ReadmoreNewArticles"
//                               >
//                                 Click to View
//                               </Link>
//                             </div>
//                           </h3>
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h3 className="text-lg font-semibold">
//                             {card.title}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {activeTab === "Grocerry" && (
//                 <>
//                   <>
//                     <div className="EventsListboxs flex flex-wrap">
//                       {chennaiAppDataGrocery.map((card, index) => (
//                         <div
//                           key={index}
//                           className="EventsItems bg-white cursor-pointer newsLetterImage"
//                           onClick={() => setSelectedCard(card)}
//                           style={{
//                             transition: "transform 0.3s",
//                           }}
//                         >
//                           <div
//                             className="relative w-full EventsItemImg"
//                             style={{
//                               boxShadow:
//                                 "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                             }}
//                           >
//                             <img
//                               src={card.appImage}
//                               alt={card.title}
//                               className="w-full object-cover"
//                             />
//                           </div>
//                           <div className="EventsIteCont flex flex-col items-start">
//                             <h2 className="titlePublished">{card.Company}</h2>
//                             <h3 className="EveItemtitles">
//                               <Link
//                                 style={{ fontWeight: "600", color: "#434343" }}
//                                 // to={card.link}
//                                 onClick={() => setSelectedCard(card)}
//                                 state={{ card }}
//                               >
//                                 {`${card.AppDescription}`}
//                               </Link>
//                               <div
//                                 className="readMoreMainDiv"
//                                 onClick={() => setSelectedCard(card)}
//                               >
//                                 <Link
//                                   onClick={() => setSelectedCard(card)}
//                                   // to={card.link}
//                                   className="ReadmoreNewArticles"
//                                 >
//                                   Click to View
//                                 </Link>
//                               </div>
//                             </h3>
//                           </div>
//                           <div className="EventsIteCont flex flex-col items-start">
//                             <h3 className="text-lg font-semibold">
//                               {card.title}
//                             </h3>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 </>
//               )}

//               {activeTab === "Parcel / Courier" && (
//                 <>
//                   <div className="EventsListboxs flex flex-wrap">
//                     {chennaiAppDataParcelDelivery.map((card, index) => (
//                       <div
//                         key={index}
//                         className="EventsItems bg-white cursor-pointer newsLetterImage"
//                         onClick={() => setSelectedCard(card)}
//                         style={{
//                           transition: "transform 0.3s",
//                         }}
//                       >
//                         <div
//                           className="relative w-full EventsItemImg"
//                           style={{
//                             boxShadow:
//                               "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                           }}
//                         >
//                           <img
//                             src={card.appImage}
//                             alt={card.title}
//                             className="w-full object-cover"
//                           />
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h2 className="titlePublished">{card.Company}</h2>
//                           <h3 className="EveItemtitles">
//                             <Link
//                               style={{ fontWeight: "600", color: "#434343" }}
//                               // to={card.link}
//                               onClick={() => setSelectedCard(card)}
//                               state={{ card }}
//                             >
//                               {`${card.AppDescription}`}
//                             </Link>
//                             <div
//                               className="readMoreMainDiv"
//                               onClick={() => setSelectedCard(card)}
//                             >
//                               <Link
//                                 onClick={() => setSelectedCard(card)}
//                                 // to={card.link}
//                                 className="ReadmoreNewArticles"
//                               >
//                                 Click to View
//                               </Link>
//                             </div>
//                           </h3>
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h3 className="text-lg font-semibold">
//                             {card.title}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {activeTab === "Porter / Heavy Items" && (
//                 <>
//                   <div className="EventsListboxs flex flex-wrap">
//                     {chennaiAppDataPorter.map((card, index) => (
//                       <div
//                         key={index}
//                         className="EventsItems bg-white cursor-pointer newsLetterImage"
//                         onClick={() => setSelectedCard(card)}
//                         style={{
//                           transition: "transform 0.3s",
//                         }}
//                       >
//                         <div
//                           className="relative w-full EventsItemImg"
//                           style={{
//                             boxShadow:
//                               "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                           }}
//                         >
//                           <img
//                             src={card.appImage}
//                             alt={card.title}
//                             className="w-full object-cover"
//                           />
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h2 className="titlePublished">{card.Company}</h2>
//                           <h3 className="EveItemtitles">
//                             <Link
//                               style={{ fontWeight: "600", color: "#434343" }}
//                               // to={card.link}
//                               onClick={() => setSelectedCard(card)}
//                               state={{ card }}
//                             >
//                               {`${card.AppDescription}`}
//                             </Link>
//                             <div
//                               className="readMoreMainDiv"
//                               onClick={() => setSelectedCard(card)}
//                             >
//                               <Link
//                                 onClick={() => setSelectedCard(card)}
//                                 // to={card.link}
//                                 className="ReadmoreNewArticles"
//                               >
//                                 Click to View
//                               </Link>
//                             </div>
//                           </h3>
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h3 className="text-lg font-semibold">
//                             {card.title}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {activeTab === "others" && (
//                 <>
//                   <div className="EventsListboxs flex flex-wrap">
//                     {OthersApps.map((card, index) => (
//                       <div
//                         key={index}
//                         className="EventsItems bg-white cursor-pointer newsLetterImage"
//                         onClick={() => setSelectedCard(card)}
//                         style={{
//                           transition: "transform 0.3s",
//                         }}
//                       >
//                         <div
//                           className="relative w-full EventsItemImg"
//                           style={{
//                             boxShadow:
//                               "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                           }}
//                         >
//                           <img
//                             src={card.appImage}
//                             alt={card.title}
//                             className="w-full object-cover"
//                           />
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h2 className="titlePublished">{card.Company}</h2>
//                           <h3 className="EveItemtitles">
//                             <Link
//                               style={{ fontWeight: "600", color: "#434343" }}
//                               // to={card.link}
//                               onClick={() => setSelectedCard(card)}
//                               state={{ card }}
//                             >
//                               {`${card.AppDescription}`}
//                             </Link>
//                             <div
//                               className="readMoreMainDiv"
//                               onClick={() => setSelectedCard(card)}
//                             >
//                               <Link
//                                 onClick={() => setSelectedCard(card)}
//                                 // to={card.link}
//                                 className="ReadmoreNewArticles"
//                               >
//                                 Click to View
//                               </Link>
//                             </div>
//                           </h3>
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h3 className="text-lg font-semibold">
//                             {card.title}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {activeTab === "pharmacy" && (
//                 <>
//                   <div className="EventsListboxs flex flex-wrap">
//                     {chennaiAppDataHealth.map((card, index) => (
//                       <div
//                         key={index}
//                         className="EventsItems bg-white cursor-pointer newsLetterImage"
//                         onClick={() => setSelectedCard(card)}
//                         style={{
//                           transition: "transform 0.3s",
//                         }}
//                       >
//                         <div
//                           className="relative w-full EventsItemImg"
//                           style={{
//                             boxShadow:
//                               "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                           }}
//                         >
//                           <img
//                             src={card.appImage}
//                             alt={card.title}
//                             className="w-full object-cover"
//                           />
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h2 className="titlePublished">{card.Company}</h2>
//                           <h3 className="EveItemtitles">
//                             <Link
//                               style={{ fontWeight: "600", color: "#434343" }}
//                               // to={card.link}
//                               onClick={() => setSelectedCard(card)}
//                               state={{ card }}
//                             >
//                               {`${card.AppDescription}`}
//                             </Link>
//                             <div
//                               className="readMoreMainDiv"
//                               onClick={() => setSelectedCard(card)}
//                             >
//                               <Link
//                                 onClick={() => setSelectedCard(card)}
//                                 // to={card.link}
//                                 className="ReadmoreNewArticles"
//                               >
//                                 Click to View
//                               </Link>
//                             </div>
//                           </h3>
//                         </div>
//                         <div className="EventsIteCont flex flex-col items-start">
//                           <h3 className="text-lg font-semibold">
//                             {card.title}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         <AnimatePresence>
//           {selectedCard && (
//             <motion.div
//               className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 prideofchenaipopoupsection"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 className="bg-white p-6 rounded-xl w-auto relative popupSection"
//                 initial={{ scale: 0.8, opacity: 0, y: 50 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.8, opacity: 0, y: 50 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//               >
//                 <div className="relative w-full h-full flex flex-col">
//                   {/* Blue Curved Strip */}
//                   <div className="w-2 rounded-l-xl bg-[#a44294]"></div>

//                   <button
//                     onClick={() => setSelectedCard(null)}
//                     className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-semibold popupTableCloseButton z-10"
//                   >
//                     ×
//                   </button>

//                   {/* Content */}
//                   <div className="relative w-full p-6 relativeSectionchennaiApp">
//                     <div
//                     //  className="flex gap-2"
//                     >
//                       <div className="chennaiAppPopupContents1">
//                         <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
//                           Features
//                         </h2>
//                         <ul
//                           className={`list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed  ${
//                             selectedCard.FeaturesContent.length > 6 ? "" : ""
//                           }`}
//                         >
//                           {selectedCard.FeaturesContent.map((point, index) => (
//                             <li key={index}>{point}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="chennaiAppPopupContents1">
//                         <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
//                           Services
//                         </h2>
//                         <ul
//                           className={`list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed  ${
//                             selectedCard.serviceContent.length > 6 ? "" : ""
//                           }`}
//                         >
//                           {selectedCard.serviceContent.map((point, index) => (
//                             <li key={index}>{point}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border-t border-gray-200 p-4 flex flex-wrap gap-3 bg-white sticky bottom-0">
//                     <div className="chennaiAppPopupContents1">
//                       <h2
//                         style={{ marginBottom: "15px" }}
//                         className="achievementsFonts font-semibold text-[#a44294] mb-4 "
//                       >
//                         Download Link
//                       </h2>
//                       {selectedCard?.WebsiteLink ? (
//                         <a
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           href={selectedCard.WebsiteLink}
//                           style={{ marginLeft: "10px" }}
//                           className="cursor-pointer tabButton px-4 py-1.5 rounded font-semibold transition !bg-[#a44294] text-white !font-medium"
//                         >
//                           Web
//                         </a>
//                       ) : null}

//                       {selectedCard?.AndriodLink ? (
//                         <a
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           href={selectedCard.AndriodLink}
//                           style={{ marginLeft: "10px" }}
//                           className="cursor-pointer tabButton px-4 py-1.5 rounded font-semibold transition !bg-[#a44294] text-white !font-medium"
//                         >
//                           For Android
//                         </a>
//                       ) : null}

//                       {selectedCard?.IOSLink ? (
//                         <a
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           href={selectedCard.IOSLink}
//                           style={{ marginLeft: "10px" }}
//                           className="cursor-pointer tabButton px-4 py-1.5 rounded font-semibold transition !bg-[#a44294] text-white !font-medium"
//                         >
//                           For iOS
//                         </a>
//                       ) : null}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }