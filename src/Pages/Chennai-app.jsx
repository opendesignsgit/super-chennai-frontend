import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PrideofChennaiData from "./PrideofChennaiData";
import { AnimatePresence, motion } from "framer-motion";
import {
  chennaiAppDataTravel,
  chennaiAppDataFood,
  chennaiAppDataGrocery,
  chennaiAppDataParcelDelivery,
  chennaiAppDataPorter,
} from "./Chennai-app-Data";

export default function ChennaiApp() {
  const [activeTab, setActiveTab] = useState("Metro / Transit / Travel");
  const mySectionRef = useRef(null);
  const topRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [activeSubTab, setActiveSubTab] = useState([]);

  const tabs = [
    { id: "Metro / Transit / Travel", label: "Metro / Transit / Travel" },
    {
      id: "Food Delivery & Cake Delivery",
      label: "Food Delivery & Cake Delivery",
    },
    { id: "Grocerry", label: "Grocerry" },
    { id: "Parcel / Courier", label: "Parcel / Courier" },
    { id: "Porter / Heavy Items", label: "Porter / Heavy Items" },
  ];
  return (
    <div>
      <section className="accaodomationBannerSection">
        <div>
          <img src="/images/app-banner-image.jpg" alt="" />
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
          <div className="w-full  bg-white flex chennai-app-flex-container">
            {/* LEFT: Tabs */}
            <div className="w-1/7 border-r border-gray-200 sideBarChennaiApp">
              <ul className="flex flex-col">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);
                        topRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full text-left cursor-pointer px-6 py-2 font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-[#995098] text-white"
                          : "hover:bg-[#995098] text-gray-700 hover:text-[#fff]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Tab Content */}

            <div className="w-6/7 p-4 chennaiAppTabContent" ref={topRef} style={{scrollMarginTop:"200px"}}>
              {activeTab === "Metro / Transit / Travel" && (
                <>
                  <div className="EventsListboxs flex flex-wrap">
                    {chennaiAppDataTravel.map((card, index) => (
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
                            src={card.appImage}
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
                              {`${card.AppDescription}`}
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

              {activeTab === "Food Delivery & Cake Delivery" && (
                <>
                  <div className="EventsListboxs flex flex-wrap">
                    {chennaiAppDataFood.map((card, index) => (
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
                            src={card.appImage}
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
                              {`${card.AppDescription}`}
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

              {activeTab === "Grocerry" && (
                <>
                  <>
                    <div className="EventsListboxs flex flex-wrap">
                      {chennaiAppDataGrocery.map((card, index) => (
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
                              src={card.appImage}
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
                                {`${card.AppDescription}`}
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
                </>
              )}

              {activeTab === "Parcel / Courier" && (
                <>
                  <div className="EventsListboxs flex flex-wrap">
                    {chennaiAppDataParcelDelivery.map((card, index) => (
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
                            src={card.appImage}
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
                              {`${card.AppDescription}`}
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

              {activeTab === "Porter / Heavy Items" && (
                <>
                  <div className="EventsListboxs flex flex-wrap">
                    {chennaiAppDataPorter.map((card, index) => (
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
                            src={card.appImage}
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
                              {`${card.AppDescription}`}
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
            </div>
          </div>
        </div>

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

                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-semibold popupTableCloseButton z-10"
                  >
                    ×
                  </button>

                  {/* Content */}
                  <div className="relative w-full p-6 relativeSectionchennaiApp">
                    {/* Close Button */}

                    <div
                    //  className="flex gap-2"
                    >
                      <div className="chennaiAppPopupContents1">
                        <h2 className="achievementsFonts font-semibold text-[#a44294] mb-4 ">
                          Features
                        </h2>
                        <ul
                          className={`list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed  ${
                            selectedCard.FeaturesContent.length > 6 ? "" : ""
                          }`}
                        >
                          {selectedCard.FeaturesContent.map((point, index) => (
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
                            selectedCard.serviceContent.length > 6 ? "" : ""
                          }`}
                        >
                          {selectedCard.serviceContent.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="chennaiAppPopupContents1">
                        <h2
                          style={{ marginBottom: "15px" }}
                          className="achievementsFonts font-semibold text-[#a44294] mb-4 "
                        >
                          Download Link
                        </h2>

                        {selectedCard.WebsiteLink !== "" && (
                          <a
                            target="_blank"
                            href={selectedCard.WebsiteLink}
                            style={{ marginLeft: "10px" }}
                            class="cursor-pointer tabButton px-4 py-1.5 rounded font-semibold transition !bg-[#a44294] text-white !font-medium"
                          >
                            Web
                          </a>
                        )}

                        <a
                          target="_blank"
                          style={{ marginLeft: "10px" }}
                          href={selectedCard.AndriodLink}
                          class="cursor-pointer tabButton px-4 py-1.5 rounded font-semibold transition !bg-[#a44294] text-white !font-medium"
                        >
                          For Andriod
                        </a>
                        <a
                          target="_blank"
                          href={selectedCard.IOSLink}
                          style={{ marginLeft: "10px" }}
                          class="cursor-pointer tabButton px-4 py-1.5 rounded font-semibold transition !bg-[#a44294] text-white !font-medium"
                        >
                          For IOS
                        </a>
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
