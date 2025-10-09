import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PrideofChennaiData from "./PrideofChennaiData";
import { AnimatePresence, motion } from "framer-motion";
import { chennaiAppData } from "./Chennai-app-Data";

export default function ChennaiApp() {
  const [activeTab, setActiveTab] = useState("Metro / Transit / Travel");
  const mySectionRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [activeSubTab, setActiveSubTab] = useState([]);

  const tabs = [
    { id: "Metro / Transit / Travel", label: "Metro / Transit / Travel" },
    {
      id: "Food Delivery & Cake Delivery",
      label: "Food Delivery & Cake Delivery",
    },
    { id: "Grocerry ", label: "Grocerry" },
    { id: "Parcel / Courier ", label: "Parcel / Courier" },
    { id: "Porter / Heavy Items", label: "Porter / Heavy Items" },
  ];
  return (
    <div>
      <section className="accaodomationBannerSection">
        <div>
          <img src="/images/pride-of-chennai/pride-chennai-banner.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Pride of Chennai</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <a href="">Pride of Chennai</a>{" "}
            </div>
          </div>
        </div>
        {/* <div className="notHomePageSearch">
              <Search />
            </div> */}
      </section>

      <div className="container max-w-7xl mx-auto chennaiappscontainer">
        <div className="flex items-start justify-center p-10">
          <div className="w-full  bg-white flex">
            {/* LEFT: Tabs */}
            <div className="w-1/7 border-r border-gray-200 sideBarChennaiApp">
              <ul className="flex flex-col">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left cursor-pointer px-6 py-2 font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-[#995098] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Tab Content */}
            <div className="w-6/7 p-4 chennaiAppTabContent">
              {activeTab === "Metro / Transit / Travel" && (
                <>
                  <div className="EventsListboxs flex flex-wrap">
                    {chennaiAppData.map((card, index) => (
                      <div
                        key={index}
                        className="EventsItems bg-white cursor-pointer newsLetterImage"
                        onClick={() => setSelectedCard(card)}
                        style={{
                          transition: "transform 0.3s",
                        }}
                      >
                        <div
                          className="relative w-full EventsItemImg"
                          style={{
                            boxShadow:
                              "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }}
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="EventsIteCont flex flex-col items-start">
                          <h2 className="titlePublished">{card.Company}</h2>
                          <h3 className="EveItemtitles">
                            <Link
                              style={{ fontWeight: "600", color: "#434343" }}
                              // to={card.link}
                              onClick={() => setSelectedCard(card)}
                              state={{ card }}
                            >
                              {`${card.EventsCalendarTitle.slice(0, 60)}...`}
                            </Link>
                            <div
                              className="readMoreMainDiv"
                              onClick={() => setSelectedCard(card)}
                            >
                              <Link
                                onClick={() => setSelectedCard(card)}
                                // to={card.link}
                                className="ReadmoreNewArticles"
                              >
                                Click to View
                              </Link>
                            </div>
                          </h3>
                        </div>
                        <div className="EventsIteCont flex flex-col items-start">
                          <h3 className="text-lg font-semibold">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === "Food Delivery & Cake Delivery " && (
                <>{/* <PrideofChennaiData /> */}</>
              )}

              {activeTab === "Grocerry " && <>{/* <PrideofChennaiData /> */}</>}
            </div>
          </div>
        </div>

        {/* <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl w-auto relative popupSection"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <button
                  className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
                  onClick={() => setSelectedCard(null)}
                >
                  ×
                </button>
                <img
                  src={selectedCard.image1}
                  alt={selectedCard.title}
                  className="w-full mb-4 rounded popupSection paddingSection"
                />
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCard.title}
                </h2>
                <p className="text-gray-600">{selectedCard.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 prideofchenaipopoupsection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl w-auto relative popupSection"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="relative max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex">
                  {/* Blue Curved Strip */}
                  <div className="w-2 rounded-l-xl bg-[#a44294]"></div>

                  {/* Content */}
                  <div className="relative w-full p-6 relativeSectionchennaiApp">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-semibold popupTableCloseButton"
                    >
                      ×
                    </button>

                    <div
                    //  className="flex gap-2"
                    >
                      <div className="chennaiAppPopupContents1">
                        <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
                          Features
                        </h2>
                        <ul
                          className={`list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed  ${
                            selectedCard.popupContent.length > 6
                              ? "pride-of-chennai-row"
                              : ""
                          }`}
                        >
                          {selectedCard.popupContent.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="chennaiAppPopupContents1">
                        <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
                          Services
                        </h2>
                        <ul
                          className={`list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed  ${
                            selectedCard.popupContent.length > 6
                              ? "pride-of-chennai-row"
                              : ""
                          }`}
                        >
                          {selectedCard.popupContent.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="chennaiAppPopupContents1">
                        <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
                          Download Link
                        </h2>

                        <button class="cursor-pointer tabButton px-4 py-1 rounded font-semibold transition !bg-[#a44294] text-white !font-medium">
                          For Andriod
                        </button>
                          <button style={{marginLeft:"10px"}} class="cursor-pointer tabButton px-4 py-1 rounded font-semibold transition !bg-[#a44294] text-white !font-medium">
                          For IOS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
