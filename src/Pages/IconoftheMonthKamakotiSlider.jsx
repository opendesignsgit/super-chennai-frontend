import "../assets/Css/Eventstyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";





// export const iconofthemonthOct = [

// ];



const iconofthemonthOct = [
{ id:1, image:"/images/kamakoti-gallery/DSC06256.JPG" },
{ id:2, image:"/images/kamakoti-gallery/kamakkoti-img16.jpg" },
{ id:3, image:"/images/kamakoti-gallery/kamakoti-7.jpg" },
{ id:4, image:"/images/kamakoti-gallery/kamakoti-img1.jpg" },
{ id:5, image:"/images/kamakoti-gallery/kamakoti-img2.jpg" },
{ id:6, image:"/images/kamakoti-gallery/kamakoti-img3.jpg" },
{ id:7, image:"/images/kamakoti-gallery/kamakoti-img4.jpg" },
{ id:8, image:"/images/kamakoti-gallery/kamakoti-img5.jpg" },
{ id:9, image:"/images/kamakoti-gallery/kamakoti-img6.jpg" },
{ id:10, image:"/images/kamakoti-gallery/kamakoti-img7.jpg" },
{ id:11, image:"/images/kamakoti-gallery/kamakoti-img8.jpg" },
{ id:12, image:"/images/kamakoti-gallery/kamakoti-img10.jpg" },
{ id:13, image:"/images/kamakoti-gallery/kamakoti-img13.jpg" },
{ id:14, image:"/images/kamakoti-gallery/kamakoti-img15.jpg" },
{ id:15, image:"/images/kamakoti-gallery/kamakoti-img17.jpg" },
{ id:16, image:"/images/kamakoti-gallery/kamakoti-img20.jpg" },
{ id:17, image:"/images/kamakoti-gallery/kamakoti-img22.jpg" },
{ id:18, image:"/images/kamakoti-gallery/kamakoti-img23.jpg" },

{ id:19, image:"/images/kamakoti-gallery/kamakoti-img27.jpg" },
{ id:20, image:"/images/kamakoti-gallery/kamakoti-img28.jpg" },
{ id:21, image:"/images/kamakoti-gallery/kamakoti-img29.jpg" },
{ id:22, image:"/images/kamakoti-gallery/kamakoti-img30.jpg" },
{ id:23, image:"/images/kamakoti-gallery/kamakoti-img31.jpg" },
{ id:24, image:"/images/kamakoti-gallery/kamakoti-img32.jpg" },
{ id:25, image:"/images/kamakoti-gallery/kamakoti-img41.jpg" },
{ id:26, image:"/images/kamakoti-gallery/kamakoti-img-42.jpg" },
{ id:27, image:"/images/kamakoti-gallery/kamakoti-img-44.jpg" },
{ id:28, image:"/images/kamakoti-gallery/kamakoti-img46.jpg" },
{ id:29, image:"/images/kamakoti-gallery/kamakoti-img47.jpg" },
{ id:30, image:"/images/kamakoti-gallery/kamakoti-img48.jpg" },
{ id:31, image:"/images/kamakoti-gallery/kamakoti-img50.jpg" },
{ id:32, image:"/images/kamakoti-gallery/kamakoti-img52.jpg" },
{ id:33, image:"/images/kamakoti-gallery/kamakoti-img53.jpg" },
{ id:34, image:"/images/kamakoti-gallery/kamakoti-img-54.jpg" },
{ id:35, image:"/images/kamakoti-gallery/kamakoti-img55.jpg" },
{ id:36, image:"/images/kamakoti-gallery/kamakoti-img56.jpg" },

// { id:37, image:"/images/kamakoti-gallery/kamakoti-img57.JPG" },
{ id:38, image:"/images/kamakoti-gallery/kamakoti-img58.jpg" },
{ id:39, image:"/images/kamakoti-gallery/kamakoti-img59.jpg" },
{ id:40, image:"/images/kamakoti-gallery/kamakoti-img60.jpg" },
{ id:41, image:"/images/kamakoti-gallery/kamakoti-img61.jpg" },
{ id:42, image:"/images/kamakoti-gallery/kamakoti-img62.jpg" },
{ id:43, image:"/images/kamakoti-gallery/kamakoti-img-63.jpg" },
{ id:44, image:"/images/kamakoti-gallery/kamakoti-img9.jpg" },
{ id:45, image:"/images/kamakoti-gallery/kamakoti-img11.jpg" },
{ id:46, image:"/images/kamakoti-gallery/kamakoti-img12.jpg" },
{ id:47, image:"/images/kamakoti-gallery/kamakoti-img-14.jpg" },
{ id:48, image:"/images/kamakoti-gallery/kamakoti-img18.jpg" },
{ id:49, image:"/images/kamakoti-gallery/kamakoti-img19.jpg" },
{ id:50, image:"/images/kamakoti-gallery/kamakoti-img21.jpg" },
{ id:51, image:"/images/kamakoti-gallery/kamakoti-img24.jpg" },
{ id:52, image:"/images/kamakoti-gallery/kamakoti-img25.jpg" },
{ id:53, image:"/images/kamakoti-gallery/kamakoti-img-26.jpg" },
{ id:54, image:"/images/kamakoti-gallery/kamakoti-img33.jpg" },

{ id:55, image:"/images/kamakoti-gallery/kamakoti-img34.jpg" },
{ id:56, image:"/images/kamakoti-gallery/kamakoti-img36.jpg" },
{ id:57, image:"/images/kamakoti-gallery/kamakoti-img40.jpg" },
{ id:58, image:"/images/kamakoti-gallery/kamakoti-img43.jpg" },
{ id:59, image:"/images/kamakoti-gallery/kamakoti-img-45.jpg" },
{ id:60, image:"/images/kamakoti-gallery/kamakoti-img49.jpg" },
{ id:61, image:"/images/kamakoti-gallery/kamakoti-img-51.jpg" },
{ id:62, image:"/images/kamakoti-gallery/kamakoti-img-64.jpg" },
{ id:63, image:"/images/kamakoti-gallery/kamakoti-img65.jpg" },
{ id:64, image:"/images/kamakoti-gallery/kamakoti-img66.jpg" }
];





export default function IconoftheMonthKamakotiSlider() {
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
                  src={selectedCard.image}
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
