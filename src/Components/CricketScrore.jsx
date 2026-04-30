import React, { useEffect, useState, useRef } from "react";
import "../assets/Css/TrendingChennai.css";
import { panesContent } from "../../src/Pages/EventData";

// export const panesContent = [
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
// ];

export default function CricketScrore() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const visibleCount = 3;
  const defaultWidth = 100;
  const activeWidth = 450;
  const margin = 10;

  const totalPanes = panesContent.length;
  const maxIndex = totalPanes - visibleCount;

  const [currentIndex, setCurrentIndex] = useState(0);

  const getOffsetForIndex = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      const isActive = i === currentIndex;
      offset += isActive ? activeWidth + margin : defaultWidth + margin;
    }
    return offset;
  };

  const offset = getOffsetForIndex(currentIndex);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="tredingMainContainer">
    //   <div className="tredingChennaiRow">
    //     <div
    //       className={`TrendingTextBackground ${
    //         scrollDir === "right"
    //           ? "Trendingscroll-right"
    //           : "Trendingscroll-left"
    //       }`}
    //       ref={bgTextRef}
    //     >
    //       <p>CSK &nbsp; Chennai &nbsp; CSK &nbsp; CRICKET</p>
    //     </div>
    //   </div>

    //   <section className="TrendCheniSec">
    //     <div className="container max-w-7xl mx-auto flex mainContainerFlexTrending">
    //       <div className="trendccol trendcLeft">
    //         <h2>Chennai Superkings</h2>
    //         <p className="trendingChennaiText">
    //           Chennai is an energetic canvas of discussions and events, from the
    //           lively debates on urban development and the pulsating beats of the
    //           newest Kollywood songs to the enticing scents of popular
    //           restaurants and the vivid colors of art installations. Keep an eye
    //           on the city's dynamic story!
    //         </p>
    //       </div>

    //       <div className="trendccol trendcRight">
    //         <div className="relative">
    //           <div
    //             className="sliders-container h-[60vh] TrendingChennaiSliderContainer"
    //             style={{
    //               width: "100%",
    //               overflow: "hidden",
    //               margin: "0 auto",
    //               boxSizing: "border-box",
    //             }}
    //           >
    //             <div
    //               className="accordion-track"
    //               style={{
    //                 display: "flex",
    //                 transition: "transform 0.4s ease",
    //                 transform: `translateX(-${offset}px)`,
    //               }}
    //             >
    //               {panesContent.map((pane, index) => {
    //                 const isActive = index === currentIndex;
    //                 const isHidden = index >= panesContent.length - 2;

    //                 return (
    //                   <div
    //                     key={pane.id}
    //                     className={`trendingChennaiCard panes ${
    //                       isActive ? "active" : ""
    //                     } ${isHidden ? "hide" : ""}`}
    //                     style={{
    //                       flex: "0 0 auto",
    //                       width: isActive ? activeWidth : defaultWidth,
    //                       height: isActive ? "60vh" : "50vh",
    //                       margin: "0 5px",
    //                       fontWeight: isActive ? "bold" : "normal",
    //                       boxSizing: "border-box",
    //                       opacity: isHidden ? 0 : 1,
    //                       visibility: isHidden ? "hidden" : "visible",
    //                       transition: "all 0.9s ease",
    //                     }}
    //                   >
    //                     <div className="relative h-full">

    //                       <a href={`/trending-chennai/${pane.slug}`}>
    //                         <div className="hbintimg relative h-full">
    //                           <img
    //                             src={pane.Homeimage}
    //                             alt={pane.name}
    //                             style={{
    //                               width: "100%",
    //                               height: "100%",
    //                               objectFit: "cover",
    //                             }}
    //                           />
    //                         </div>

    //                         <div
    //                           className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end"
    //                           style={{ opacity: isActive ? 1 : 0 }}
    //                         >
    //                           <div className="hbintContin">
    //                             <h3>{pane.name}</h3>
    //                             <p>{pane.para}</p>
    //                           </div>
    //                         </div>
    //                       </a>
    //                     </div>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>

    //           <div className="arrows absolute left-[60%] bottom-[4%] flex buttonsTredingSections">
    //             <button
    //               onClick={handlePrev}
    //               disabled={currentIndex === 0}
    //               className={`sldArrow trendingChennaiPrev cursor-pointer ${
    //                 currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
    //               }`}
    //             ></button>

    //             <button
    //               onClick={handleNext}
    //               disabled={currentIndex === maxIndex}
    //               className={`sldArrow trendingChennaiNext cursor-pointer ${
    //                 currentIndex === maxIndex
    //                   ? "opacity-30 cursor-not-allowed"
    //                   : ""
    //               }`}
    //             ></button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    // </div>
    <div className="CrickettredingMainContainer mt-30">
      <div className="tredingChennaiRow">
        <div
          className={`TrendingTextBackground ${
            scrollDir === "right"
              ? "Trendingscroll-right"
              : "Trendingscroll-left"
          }`}
          ref={bgTextRef}
        >
          <p>CSK &nbsp; YELLOW ARMY &nbsp; CSK &nbsp; WHISTLE PODU</p>
        </div>
      </div>

      <section className="CricketTrendCheniSec">
        <div className="container max-w-7xl mx-auto">
          {/* Cricket stadium background overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559818868-6b763af7f47f?w=1920')",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          />

          <div className="relative z-10">
            {/* Full-width slider container */}
            <div
              className="sliders-container h-[70vh] TrendingChennaiSliderContainer mx-auto"
              style={{
                width: "100%",
                maxWidth: "1200px",
                overflow: "hidden",
                margin: "0 auto",
                boxSizing: "border-box",
                background:
                  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                borderRadius: "25px",
                boxShadow:
                  "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                position: "relative",
              }}
            >
              {/* CSK Header */}
              <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-yellow-400/95 to-orange-500/95 text-black px-8 py-4 rounded-2xl shadow-2xl backdrop-blur-md border-4 border-white/20">
                <h2 className="text-3xl font-black tracking-widest flex items-center">
                  🦁 CSK YELLOW ARMY 🦁
                </h2>
                <p className="text-sm font-semibold mt-1 opacity-90">
                  WHISTLE PODU! 💛
                </p>
              </div>

              {/* Slider Track */}
              <div
                className="accordion-track"
                style={{
                  display: "flex",
                  transition:
                    "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: `translateX(-${offset}px)`,
                  height: "100%",
                }}
              >
                {panesContent.map((pane, index) => {
                  const isActive = index === currentIndex;
                  const isHidden = index >= panesContent.length - 2;

                  return (
                    <div
                      key={pane.id}
                      className={`trendingChennaiCard panes relative ${
                        isActive ? "active" : ""
                      } ${isHidden ? "hide" : ""}`}
                      style={{
                        flex: "0 0 auto",
                        width: isActive ? activeWidth : defaultWidth,
                        height: "100%",
                        margin: "0 12px",
                        fontWeight: isActive ? "bold" : "normal",
                        boxSizing: "border-box",
                        opacity: isHidden ? 0 : 1,
                        visibility: isHidden ? "hidden" : "visible",
                        transition:
                          "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        background: isActive
                          ? "linear-gradient(145deg, #f4a261 0%, #e76f51 50%, #f4a261 100%)"
                          : "linear-gradient(145deg, #2a2a4a 0%, #1e1e3a 100%)",
                        boxShadow: isActive
                          ? "0 25px 50px rgba(244, 162, 97, 0.5), 0 0 0 2px rgba(255,255,255,0.3)"
                          : "0 15px 35px rgba(0,0,0,0.5)",
                      }}
                    >
                      <a
                        href={`/trending-chennai/${pane.slug}`}
                        className="block h-full relative"
                      >
                        <div className="hbintimg relative h-full overflow-hidden group">
                          <img
                            src={pane.Homeimage}
                            alt={pane.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            style={{
                              filter: isActive
                                ? "brightness(1.1) contrast(1.15)"
                                : "brightness(0.85)",
                            }}
                          />
                          {/* Cricket LIVE badge */}
                          <div className="absolute top-6 right-6 z-10 bg-yellow-400/95 text-black px-4 py-2 rounded-full text-sm font-bold shadow-2xl backdrop-blur-md border-2 border-white/30 animate-pulse">
                            🏏 LIVE MATCH
                          </div>
                        </div>

                        {/* Content overlay */}
                        <div
                          className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transition: "opacity 0.6s ease",
                            backdropFilter: isActive ? "blur(15px)" : "none",
                          }}
                        >
                          <div className="hbintContin text-white w-full max-w-md">
                            <h3
                              className="text-3xl font-black mb-3 drop-shadow-2xl"
                              style={{ color: "#f4a261" }}
                            >
                              {pane.name}
                            </h3>
                            <p
                              className="text-lg leading-relaxed drop-shadow-lg mb-4"
                              style={{ color: "#e8e8e8" }}
                            >
                              {pane.para}
                            </p>
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                              <span className="text-lg font-semibold opacity-90">
                                Whistle Podu! 💛🦁
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FIXED Arrow Navigation - Cricket themed */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`cricket-prev-arrow w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-yellow-400/50 ${
                  currentIndex === 0
                    ? "opacity-30 cursor-not-allowed bg-gray-600"
                    : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 cursor-pointer"
                }`}
                style={{
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                ←
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`cricket-next-arrow w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-yellow-400/50 ${
                  currentIndex === maxIndex
                    ? "opacity-30 cursor-not-allowed bg-gray-600"
                    : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 cursor-pointer"
                }`}
                style={{
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                →
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: panesContent.length }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-gradient-to-r from-yellow-400 to-orange-500 scale-110 shadow-lg"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
