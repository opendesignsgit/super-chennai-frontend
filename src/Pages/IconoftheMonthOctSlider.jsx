import "../assets/Css/Eventstyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";





export const iconofthemonthOct = [
  {
    id: 1,
    image: "/images/Star%20of%20the%20month/DSC00006%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00006%201.jpg",
    link: "/events",
  },
  {
    id: 2,
    image: "/images/Star%20of%20the%20month/DSC00008%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00008%201.jpg",
    link: "/events",
  },
  {
    id: 3,
    image: "/images/Star%20of%20the%20month/DSC00011%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00011%201.jpg",
    link: "/events",
  },
  {
    id: 4,
    image: "/images/Star%20of%20the%20month/DSC00016%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00016%201.jpg",
    link: "/events",
  },
  {
    id: 5,
    image: "/images/Star%20of%20the%20month/DSC00020%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00020%201.jpg",
    link: "/events",
  },
  {
    id: 6,
    image: "/images/Star%20of%20the%20month/DSC00023.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00023.jpg",
    link: "/events",
  },
  {
    id: 7,
    image: "/images/Star%20of%20the%20month/DSC00024.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00024.jpg",
    link: "/events",
  },
  {
    id: 8,
    image: "/images/Star%20of%20the%20month/DSC00026%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00026%201.jpg",
    link: "/events",
  },
  {
    id: 9,
    image: "/images/Star%20of%20the%20month/DSC00036%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00036%201.jpg",
    link: "/events",
  },
  {
    id: 10,
    image: "/images/Star%20of%20the%20month/DSC00040%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00040%201.jpg",
    link: "/events",
  },
  {
    id: 11,
    image: "/images/Star%20of%20the%20month/DSC00046%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00046%201.jpg",
    link: "/events",
  },
  {
    id: 12,
    image: "/images/Star%20of%20the%20month/DSC00065%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00065%201.jpg",
    link: "/events",
  },
  {
    id: 13,
    image: "/images/Star%20of%20the%20month/DSC00074%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00074%201.jpg",
    link: "/events",
  },
  {
    id: 14,
    image: "/images/Star%20of%20the%20month/DSC00078%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00078%201.jpg",
    link: "/events",
  },
  {
    id: 15,
    image: "/images/Star%20of%20the%20month/DSC00088%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00088%201.jpg",
    link: "/events",
  },
  {
    id: 16,
    image: "/images/Star%20of%20the%20month/DSC00089%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00089%201.jpg",
    link: "/events",
  },
  {
    id: 17,
    image: "/images/Star%20of%20the%20month/DSC00095%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC00095%201.jpg",
    link: "/events",
  },
  {
    id: 18,
    image: "/images/Star%20of%20the%20month/DSC09999%201.jpg",
    image1: "/images/Star%20of%20the%20month/DSC09999%201.jpg",
    link: "/events",
  },
];







export default function IconoftheMonthOct() {
  const [tab, setTab] = useState("active");
  const [selectedCard, setSelectedCard] = useState(null);
 

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
        

        {tab === "active" && (
          <>
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
          </>
        )}
      
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Gallery</h4>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {iconofthemonthOct.map((card, index) => (
                  <div
                    key={index}
                    className="ExplorePageSliderImage cursor-pointer"
                  >
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
