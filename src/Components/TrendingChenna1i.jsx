import React, { useEffect, useState, useRef } from "react";
import "../assets/Css/TrendingChennai.css";
import { Link } from "react-router-dom";
import { panesContent } from "../../src/Pages/EventData";

export default function TrendingChennai1() {
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
    <div className="tredingMainContainer">
      <div className="tredingChennaiRow">
        <div
          className={`TrendingTextBackground ${
            scrollDir === "right"
              ? "Trendingscroll-right"
              : "Trendingscroll-left"
          }`}
          ref={bgTextRef}
        >
          <p>Trending &nbsp; Chennai &nbsp; Trending &nbsp; Chennai</p>
        </div>
      </div>

      <section className="TrendCheniSec">
        <div className="container max-w-7xl mx-auto flex mainContainerFlexTrending">
          <div className="trendccol trendcLeft">
            <h2>Trending Chennai</h2>
            <p className="trendingChennaiText">
              Chennai is an energetic canvas of discussions and events, from the
              lively debates on urban development and the pulsating beats of the
              newest Kollywood songs to the enticing scents of popular
              restaurants and the vivid colors of art installations. Keep an eye
              on the city's dynamic story!
            </p>
          </div>

          <div className="trendccol trendcRight">
            <div className="relative">
              <div
                className="sliders-container h-[60vh] TrendingChennaiSliderContainer"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  margin: "0 auto",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="accordion-track"
                  style={{
                    display: "flex",
                    transition: "transform 0.4s ease",
                    transform: `translateX(-${offset}px)`,
                  }}
                >
                  {panesContent.map((pane, index) => {
                    const isActive = index === currentIndex;
                    const isHidden = index >= panesContent.length - 2;

                    return (
                      <div
                        key={pane.id}
                        className={`trendingChennaiCard panes ${
                          isActive ? "active" : ""
                        } ${isHidden ? "hide" : ""}`}
                        style={{
                          flex: "0 0 auto",
                          width: isActive ? activeWidth : defaultWidth,
                          height: isActive ? "60vh" : "50vh",
                          margin: "0 5px",
                          fontWeight: isActive ? "bold" : "normal",
                          boxSizing: "border-box",
                          opacity: isHidden ? 0 : 1,
                          visibility: isHidden ? "hidden" : "visible",
                          transition: "all 0.9s ease",
                        }}
                      >
                        <div className="relative h-full">
                          {/* <Link to={`/TrendingDetails/${pane.id}`} state={pane}>
                            <div className="hbintimg relative h-full">
                              <img
                                src={pane.Homeimage}
                                alt={pane.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>

                            <div
                              className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end"
                              style={{ opacity: isActive ? 1 : 0 }}
                            >
                              <div className="hbintContin">
                                <h3>{pane.name}</h3>
                                <p>{pane.para}</p>
                              </div>
                            </div>
                          </Link> */}
                          <a 
                          href={`/TrendingDetails/${pane.slug}`}
                          >
                            
                            <div className="hbintimg relative h-full">
                              <img
                                src={pane.Homeimage}
                                alt={pane.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>

                            <div
                              className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end"
                              style={{ opacity: isActive ? 1 : 0 }}
                            >
                              <div className="hbintContin">
                                <h3>{pane.name}</h3>
                                <p>{pane.para}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="arrows absolute left-[60%] bottom-[4%] flex buttonsTredingSections">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`sldArrow trendingChennaiPrev cursor-pointer ${
                    currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
                  }`}
                ></button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className={`sldArrow trendingChennaiNext cursor-pointer ${
                    currentIndex === maxIndex
                      ? "opacity-30 cursor-not-allowed"
                      : ""
                  }`}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
