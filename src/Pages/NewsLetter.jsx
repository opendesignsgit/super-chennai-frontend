import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";
import {
  newsArticle,
  one,
  two,
  newsPhotos,
  YoutubeVideo,
  youtubeChannel,
} from "./NewsData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function NewsLetter() {
  const [tab, setTab] = useState("active");
  const [tab1, setTab1] = useState("");
  const [newsarticle, setNewsArticle] = useState("active");
  const [newsLetter, setLetter] = useState("");
  const [newsYoutube, setNewsYoutube] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <Helmet>
        <title>Media Coverage | News & TVC Features – Super Chennai</title>
        <meta
          name="description"
          content="Explore all the buzz around Super Chennai! From newspaper features and online articles to TV commercials and media mentions — see how the city’s story is being told."
        />
      </Helmet>

      <div className="NewsLetterPage">
        <section className="accaodomationBannerSection">
          <div>
            <img
              className="eventsCalenderIamge"
              src="  /images/NewsLetter/media.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>MEDIA COVERAGE </h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> - <a href="">MEDIA COVERAGE </a>{" "}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </section>
        <section className="EventsListSec SecPadblock12" style={{background:"#fff"}}>
          <div className="container max-w-7xl mx-auto ">
            <div class="Eventitlesec mb-[50px] text-center">
              <h2 className="text-[#a44294]">MEDIA COVERAGE </h2>
              <p>
                Stay updated with the latest images, videos, and highlights from
                SuperChennai’s events, announcements, and developments.
              </p>
            </div>

            <div
              className="flex justify-center mb-8 newsLetterSection"
              style={{ display: "none" }}
            >
              <button
                className={`newsLetterButton ${
                  tab === "active" ? "active" : ""
                }`}
                onClick={() => {
                  setTab("active");
                  setTab1("");
                }}
              >
                Media
              </button>

              <button
                className={`newsLetterButton ${
                  tab1 === "active" ? "active" : ""
                }`}
                onClick={() => {
                  setTab1("active");
                  setTab("");
                }}
              >
                Videos
              </button>
            </div>

            {tab === "active" && (
              <>
                <div className="flex justify-center mb-8 newsLetterSection">
                  <button
                    className={`newsLetterButton ${
                      newsarticle === "active" ? "active" : ""
                    }`}
                    onClick={() => {
                      setNewsArticle("active");
                      setLetter("");
                      setNewsYoutube("");
                    }}
                  >
                    News Articles - E paper
                  </button>
                  <button
                    className={`newsLetterButton ${
                      newsLetter === "active" ? "active" : ""
                    }`}
                    onClick={() => {
                      setLetter("active");
                      setNewsArticle("");
                      setNewsYoutube("");
                    }}
                  >
                    News Paper - Articles
                  </button>
                  <button
                    className={`newsLetterButton ${
                      newsYoutube === "active" ? "active" : ""
                    }`}
                    onClick={() => {
                      setLetter("");
                      setNewsArticle("");
                      setNewsYoutube("active");
                    }}
                  >
                    News Channel
                  </button>
                </div>

                {newsarticle === "active" && (
                  <div className="EventsListboxs flex flex-wrap">
                    {newsArticle.map((card, index) => (
                      <div
                        key={index}
                        className="EventsItems bg-white"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative w-full EventsItemImg">
                          <Link to={card.link} target="_blank" state={{ card }}>
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full object-cover"
                            />
                          </Link>
                        </div>
                        <div className="EventsIteCont flex flex-col items-start">
                          <h2 className="titlePublished">{card.Company}</h2>
                          <h3 className="EveItemtitles">
                            <Link
                              // style={{
                              //   fontFamily: `'29LT Bukra SmBd', 'Noto Sans Tamil', sans-serif`,
                              //   fontWeight: 500,
                              // }}
                              style={{
                                fontFamily: `'Poppins', 'Noto Sans Tamil', sans-serif`,
                                fontWeight: 500,
                              }}
                              to={card.link}
                              target="_blank"
                              state={{ card }}
                            >
                              {`${card.EventsCalendarTitle.slice(0, 60)}...`}
                            </Link>
                            <div className="readMoreMainDiv">
                              <Link
                                target="_blank"
                                to={card.link}
                                className="ReadmoreNewArticles"
                              >
                                Readmore
                              </Link>
                            </div>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* {newsLetter === "active" && (
                <div className="EventsListboxs flex flex-wrap">
                  {newsPhotos.map((card, index) => (
                    <div
                      key={index}
                      className="EventsItems bg-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="relative w-full EventsItemImg"
                        style={{
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                      >
                        <Link to={`/eventsdetails/${index}`} state={{ card }}>
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full object-cover"
                          />
                        </Link>
                      </div>
                      <div className="EventsIteCont flex flex-col items-start"></div>
                    </div>
                  ))}
                </div>
              )} */}
                {newsLetter === "active" && (
                  <>
                    <div className="EventsListboxs flex flex-wrap">
                      {newsPhotos.map((card, index) => (
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
                                style={{ fontWeight: "600" , color:"#434343" }}
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
                    {/* YOUTUBE VIDEO 
                  <div className="EventsListboxs flex flex-wrap">
                    {YoutubeVideo.map((card, index) => (
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
                              style={{ fontWeight: "500" }}
                           
                              onClick={() => setSelectedCard(card)}
                              state={{ card }}
                            >
                              {`${card.EventsCalendarTitle.slice(0, 60)}`}
                            </Link>
                         
                          </h3>
                        </div>
                        <div className="EventsIteCont flex flex-col items-start">
                          <h3 className="text-lg font-semibold">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div> */}
                  </>
                )}

                {newsYoutube === "active" && (
                  <div className="EventsListboxs flex flex-wrap newsYoutubeSection">
                    {/* {youtubeChannel.map((card, index) => (
                      <Link
                        target="_blank"
                        to={card.link}
                        key={index}
                        className="EventsItems bg-white cursor-pointer newsLetterImage"
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
                          <h3 className="EveItemtitles youtubevideoSection">
                            <Link
                              style={{ fontWeight: "500" }}
                              to={card.link}
                              target="_blank"
                              state={{ card }}
                            >
                              {`${card.EventsCalendarTitle.slice(0, 60)}`}
                            </Link>
                            <div className="readMoreMainDiv">
                              <Link
                                target="_blank"
                                to={card.link}
                                className="ReadmoreNewArticles"
                              >
                                Watch Now
                              </Link>
                            </div>
                          </h3>
                        </div>
                        <div className="EventsIteCont flex flex-col items-start">
                          <h3 className="text-lg font-semibold">
                            {card.title}
                          </h3>
                        </div>
                      </Link>
                    ))} */}

                    {[...youtubeChannel]
                      .sort((a, b) => {
                        const getDate = (item) =>
                          new Date(
                            item.Company.replace("Published On: ", "").trim()
                          );
                        return getDate(b) - getDate(a); // latest first
                      })
                      .map((card, index) => (
                        <Link
                          target="_blank"
                          to={card.link}
                          key={index}
                          className="EventsItems bg-white cursor-pointer newsLetterImage"
                          style={{ transition: "transform 0.3s" }}
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
                            <h3 className="EveItemtitles youtubevideoSection">
                              <Link
                                style={{ fontWeight: "500" }}
                                to={card.link}
                                target="_blank"
                                state={{ card }}
                              >
                                {`${card.EventsCalendarTitle.slice(0, 60)}`}
                              </Link>
                              <div className="readMoreMainDiv">
                                <Link
                                  target="_blank"
                                  to={card.link}
                                  className="ReadmoreNewArticles"
                                >
                                  Watch Now
                                </Link>
                              </div>
                            </h3>
                          </div>
                          <div className="EventsIteCont flex flex-col items-start">
                            <h3 className="text-lg font-semibold">
                              {card.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                  </div>
                )}

                <AnimatePresence>
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
                        <p className="text-gray-600">
                          {selectedCard.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {tab1 === "active" && (
              <>
                <div className="EventsListboxs flex flex-wrap">
                  {two.map((card, index) => (
                    <div
                      key={index}
                      className="EventsItems bg-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative w-full EventsItemImg">
                        <Link to={card.link} state={{ card }}>
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full object-cover"
                          />
                        </Link>

                        <div className="absolute top-3 right-3 evntechnolg">
                          {card.EventsCalendarCategory}
                        </div>
                      </div>
                      <div className="EventsIteCont flex flex-col items-start">
                        <h3 className="EveItemtitles">
                          <Link to={card.link} state={{ card }}>
                            {card.EventsCalendarTitle}
                          </Link>
                        </h3>
                        <h4 className="EveItemDescrip">
                          {card.EventsCalendarContent}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="socialChennaiContent YoutubeVideoSection">
            <div className="container max-w-7xl mx-auto ">
              <h4 style={{ textAlign: "center" }}>TV Commercials</h4>
              <div className="EventsListboxs flex flex-wrap">
                {YoutubeVideo.map((card, index) => (
                  <Link
                    target="_blank"
                    to={card.link}
                    key={index}
                    className="EventsItems bg-white cursor-pointer newsLetterImage"
                    style={{
                      transition: "transform 0.3s",
                    }}
                  >
                    <div
                      className="relative w-full EventsItemImg"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
                      <h3 className="EveItemtitles youtubevideoSection">
                        <Link
                          style={{ fontWeight: "500" }}
                          to={card.link}
                          target="_blank"
                          state={{ card }}
                        >
                          {`${card.EventsCalendarTitle.slice(0, 60)}`}
                        </Link>
                        <div className="readMoreMainDiv">
                          <Link
                            target="_blank"
                            to={card.link}
                            className="ReadmoreNewArticles"
                          >
                            Watch Now
                          </Link>
                        </div>
                      </h3>
                    </div>
                    <div className="EventsIteCont flex flex-col items-start">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
