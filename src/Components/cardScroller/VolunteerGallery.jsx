import "../../assets/Css/Eventstyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const volunteerGallery = [
  {
    id: 1,
    image: "/images/Volunteer-Images/volunteer-gallery1.jpg",
    link: "/events",
  },
  {
    id: 2,
    image: "/images/Volunteer-Images/volunteer-gallery2.jpg",
    link: "/events",
  },
  {
    id: 3,
    image: "/images/Volunteer-Images/volunteer-gallery3.jpg",
    link: "/events",
  },
  {
    id: 4,
    image: "/images/Volunteer-Images/volunteer-gallery4.jpg",
    link: "/events",
  },
  {
    id: 5,
    image: "/images/Volunteer-Images/volunteer-gallery5.jpg",
    link: "/events",
  },
  {
    id: 6,
    image: "/images/Volunteer-Images/volunteer-gallery6.jpg",
    link: "/events",
  },
  {
    id: 7,
    image: "/images/Volunteer-Images/volunteer-gallery7.jpg",
    link: "/events",
  },
  {
    id: 8,
    image: "/images/Volunteer-Images/volunteer-gallery8.jpg",
    link: "/events",
  },
  {
    id: 9,
    image: "/images/Volunteer-Images/volunteer-gallery9.jpg",
    link: "/events",
  },
  {
    id: 10,
    image: "/images/Volunteer-Images/volunteer-gallery10.jpg",
    link: "/events",
  },
  {
    id: 11,
    image: "/images/Volunteer-Images/volunteer-gallery11.jpg",
    link: "/events",
  },
  {
    id: 12,
    image: "/images/Volunteer-Images/volunteer-gallery12.jpg",
    link: "/events",
  },
  {
    id: 13,
    image: "/images/Volunteer-Images/volunteer-gallery13.jpg",
    link: "/events",
  },
  {
    id: 14,
    image: "/images/Volunteer-Images/volunteer-gallery14.jpg",
    link: "/events",
  },
  {
    id: 15,
    image: "/images/Volunteer-Images/volunteer-gallery15.jpg",
    link: "/events",
  },
  {
    id: 16,
    image: "/images/Volunteer-Images/volunteer-gallery16.jpg",
    link: "/events",
  },
  {
    id: 17,
    image: "/images/Volunteer-Images/volunteer-gallery17.jpg",
    link: "/events",
  },
  {
    id: 18,
    image: "/images/Volunteer-Images/volunteer-gallery18.jpg",
    link: "/events",
  },
  {
    id: 19,
    image: "/images/Volunteer-Images/volunteer-gallery19.jpg",
    link: "/events",
  },
   {
    id: 19,
    image: "/images/Volunteer-Images/gal1.jpg",
    link: "/events",
  },
   {
    id: 19,
    image: "/images/Volunteer-Images/gal2.jpg",
    link: "/events",
  },  
    {
    id: 19,
    image: "/images/Volunteer-Images/gal3.jpg",
    link: "/events",
  },
     {
    id: 19,
    image: "/images/Volunteer-Images/gal4.jpg",
    link: "/events",
  },
     {
    id: 19,
    image: "/images/Volunteer-Images/gal5.jpg",
    link: "/events",
  },
      {
    id: 19,
    image: "/images/Volunteer-Images/gal6.jpg",
    link: "/events",
  },
];



export default function VolunteerGallery() {
  
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
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Volunteer Gallery | Super Chennai</title>
        <meta
          name="description"
          content="Explore our Volunteer Gallery showcasing moments of dedication, teamwork, and community impact from our amazing volunteers."
        />
      </Helmet>

      <div className="NewsLetterPage">
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Volunteer Gallery</h4>
            </div>

            <div className="exploreSldierSection">
              <Slider {...settings}>
                {volunteerGallery.map((card, index) => (
                  <div
                    key={index}
                    className="ExplorePageSliderImage cursor-pointer"
                    onClick={() => setSelectedCard(card)}
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
                        alt={`Volunteer ${index + 1}`}
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
                  alt="Volunteer"
                  className="w-full mb-4 rounded popupSection paddingSection"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
