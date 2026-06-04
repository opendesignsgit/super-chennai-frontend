import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function MajaMarquee() {
  const partners = [
    {
      id: 1,
      image: "/images/events/marquee/quiz-1.jpg",
    },

    {
      id: 1,
      image: "/images/events/marquee/credai-logo.jpg",
    },
    // {
    //   id: 1,
    //   image: "/images/events/marquee/dra-logo.jpg",
    // },
 
    {
      id: 1,
      image: "/images/events/marquee/polar-bear-ice-cream-logo.jpg",
    },
    {
      id: 1,
      image: "/images/events/marquee/radio-logo.jpg",
    },
    {
      id: 1,
      image: "/images/events/marquee/wonderla-logo.jpg",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );
  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1502220,
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

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <>
      {/*============= PARTNERS ================ */}

      <div className="NewsLetterPage ">
        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4 className="!text-[#4459A8]">Our partners</h4>
            </div>

            <div className="exploreSldierSection">
              {(isMobile && partners.length >= 3) ||
              (!isMobile && partners.length > 3) ? (
                <Slider {...settings}>
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer px-2"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="h-[200px] object-contain partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center gap-8 flex-wrap">
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer"
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="h-[200px] object-contain partnercardimage"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
