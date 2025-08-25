import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  newsArticle,
  one,
  two,
  EventsPhotos,
  newsPhotos,
  YoutubeVideo,
  youtubeChannel,
} from "./NewsData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function EventFunction() {
  const [tab, setTab] = useState("active");
  const [tab1, setTab1] = useState("");
  const [newsarticle, setNewsArticle] = useState("active");
  const [newsLetter, setLetter] = useState("");
  const [newsYoutube, setNewsYoutube] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
      link: "/live/cost-of-living-in-chennai",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/live/residential-properties-in-chennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/live/employment-in-chennai",
    },
    {
      src: "/images/Live-Images/chennaiLifeEssential4.png",
      title: "Transportation",
      link: "/live/transportation-in-chennai",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/live/healthcare-in-chennai",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/live/worship-in-chennai",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/visit/things-to-do-in-chennai",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/live/places-near-chennai",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/live/quality-of-life-in-chennai",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/live/infrastructure-development-in-chennai",
    },
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Educational Insitiutions",
      link: "/live/educational-institutions-in-chennai",
    },
  ];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
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
        {/* <section className="accaodomationBannerSection">
          <div>
            <img
              className="eventsCalenderIamge"
              src="  /images/NewsLetter/media.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Event Function</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> - <a href="">Event Function</a>{" "}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </section> */}
        {/* <section className="EventsListSec SecPadblock12 !pb-[0]">
          <div className="container max-w-7xl mx-auto "> */}
            {/* <div class="Eventitlesec mb-[50px] text-center">
              <h2 className="text-[#a44294]">Gallery</h2>
              <p>
                Stay updated with the latest images, videos, and highlights from
                SuperChennai’s events, announcements, and developments.
              </p>
            </div> */}

            {tab === "active" && (
              <>
                {/* {newsLetter === "active" && (
                  <> */}
                {/* <div className="EventsListboxs flex flex-wrap">
                  {EventsPhotos.map((card, index) => (
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
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                      </div>
                    </div>
                  ))}
                </div> */}

                {/* </>
                )} */}

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
          {/* </div>
        </section> */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Gallery</h4>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {EventsPhotos.map((card, index) => (
                  <div key={index} className="ExplorePageSliderImage cursor-pointer">
                    <a
                      onClick={() => setSelectedCard(card)}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={card.image}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        {/* Gradient Background */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        {/* <div className="titleTextExploreChennai">
                          {img.title}
                        </div> */}
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

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
                <p className="text-gray-600">{selectedCard.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
