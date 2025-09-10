import { useState, useEffect } from "react";
import "../assets/Css/HeroSlider.css";
import Search from "./Search";
import { Link } from "react-router-dom";

const slides = [
    {
    type: "image",
    link: "",
    image: "/images/HomePage-Images/Super-chennai-Banner.jpg",
    image1: "/images/HomePage-Images/Super-chennai-Banner-mobile.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    type: "image",
    link: "/reimagine-chennai-AI-art-challenge",
    image: "/images/HomePage-Images/ai-art-challenge-banner.jpg",
    image1: "/images/HomePage-Images/ai-art-challenge-mobile-banner.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    type: "image",
    link: "/super-chennai-icon-of-aug-2025",
    image: "/images/HomePage-Images/icon-of-the-month-banner.jpg",
    image1: "/images/HomePage-Images/icon-of-the-month-mobile-banner.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/images/HomePage-Images/banner-0.jpg",
    link: "#",
    image1: "/images/HomePage-Images/mobile-banner-1.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/images/HomePage-Images/banner-1.jpg",
    link: "#",
    image1: "/images/HomePage-Images/mobile-banner-2.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },

  {
    image: "/images/HomePage-Images/banner-2.jpg",
    link: "#",
    image1: "/images/HomePage-Images/mobile-banner-3.jpg",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/HomePage-Images/banner-3.jpg",
    link: "#",
    image1: "/images/HomePage-Images/mobile-banner-4.jpg",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    type: "image",
    link: "#",
    image: "/images/HomePage-Images/banner-4.jpg",
    image1: "/images/HomePage-Images/mobile-banner-5.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    type: "image",
    link: "#",
    image: "/images/HomePage-Images/banner-5.jpg",
    image1: "/images/HomePage-Images/mobile-banner-5.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="herobannerSection">
        <div className="relative overflow-hidden mobileBanneerHeroSlider ">
          {slides.map((slide, index) => (
            <a href={slide.link} key={index}>
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover DesktopBanner"
                />
                <img
                  src={slide.image1}
                  alt={slide.title}
                  className="w-full h-full object-cover MobileBanner"
                />
                <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center p-4"></div>
              </div>
            </a>
          ))}

          {slides.map((slide, index) => (
            <a href={slide.link} key={index}>
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {slide.type === "image" ? (
                  <>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover DesktopBanner"
                    />
                    <img
                      src={slide.image1}
                      alt={slide.title}
                      className="w-full h-full object-cover MobileBanner"
                    />
                  </>
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    src={slide.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4"></div>
              </div>
            </a>
          ))}

          <div className="absolute bottom-19 left-1/2 -translate-x-1/2 flex gap-3 z-20 heroSliderDots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-[32px] h-[7px] rounded-full transition-colors duration-300
                ${
                  current === i
                    ? "bg-[#995098]"
                    : "bg-[#b6bec5] hover:bg-[#995098]"
                }`}
                style={{ border: "none" }}
              ></button>
            ))}
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>
      {/* <div className="herobannerSection">
        <div className="relative w-full h-[105vh] overflow-hidden mobileBanneerHeroSlider">
          <video
            className="w-full h-full object-cover"
            src="/images/HomePage-Images/Banner-Video.mp4" // Replace with your video path
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4"></div>
        </div>

        <div className="notHomePageSearch">
          <Search />
        </div>
      </div> */}
    </>
  );
}
