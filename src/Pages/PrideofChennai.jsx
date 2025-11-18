import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PrideofChennaiData from "./PrideofChennaiData";

export default function PrideofChennai() {
  const bgTextRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  return (
    <>
      <>
        <Helmet>
          <title>
            Chennai’s Future in AI Art | Join the Super Chennai Challenge
          </title>
          <meta
            name="description"
            content="Be part of a cultural movement! Submit AI-generated art to reimagine Chennai’s skyline, culture, and future. Winning works will be featured at The AI ART Show."
          />
          <link rel="canonical" href="/reimagine-chennai-AI-art-challenge" />
        </Helmet>

        <div className="NewsLetterPage">
          <section className="accaodomationBannerSection">
            <div>
              <img
                // className="eventsCalenderIamge reimagineDekstop"
                src="/images/pride-of-chennai/pride-chennai-banner.jpg"
                alt=""
              />
              {/* <img
                className="eventsCalenderIamge reimagineMobile"
                src="/images/banner-ai-1.jpg"
                alt=""
              /> */}
            </div>
            <div className="accodoamationBannerContainer">
              <div className="accodoamationBannerText">
                <h3>Hall of Fame</h3>
                <div className="breadCrum">
                  <Link to="/">Home</Link> - <a href="">Hall of Fame</a>{" "}
                </div>
              </div>
            </div>
            {/* <div className="notHomePageSearch">
              <Search />
            </div> */}
          </section>

          <div className="visitIntroParaSection detailIntro !mt-0">
            <div className="container max-w-7xl mx-auto px-4 !mb-0">
              <div
                className={`CostOflivingBackground ${
                  scrollDir === "right"
                    ? "scroll-rightCostofLiving"
                    : "scroll-leftCostofLiving"
                }`}
                ref={bgTextRef}
              >
                <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
              </div>
              <div className="workIntro1 !pb-0 text-center">
                <h1>
                  Chennai Hall of Fame is not just a recognition. <br />It’s
                  a celebration of every Chennaite who made the city proud.
                </h1>
                <p>
                  Chennai Hall of Fame celebrates the extraordinary individuals
                  who were born, raised, or shaped by this vibrant city — and
                  went on to make the world take notice. From cricketing legends
                  and musical maestros to pioneering doctors, tech innovators,
                  dancers, entrepreneurs, and entertainers, this platform
                  honours the people who carry the spirit of Chennai wherever
                  they go.
                      It is a tribute to talent, discipline, culture, and the
                  unmistakable Chennai grit. A space where stories of
                  achievement inspire, uplift, and remind us that greatness
                  often begins right here — in the heart of our city.
                </p>

                <p>
              
                </p>
              </div>
            </div>
          </div>
        </div>

        <PrideofChennaiData />
      </>
    </>
  );
}
