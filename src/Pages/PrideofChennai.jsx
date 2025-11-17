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
                  <Link to="/">Home</Link> -{" "}
                  <a href="">Hall of Fame</a>{" "}
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
              <div className="workIntro !pb-0">
                <h3>Tradition Meets Innovation Daily</h3>
                <p>
                  Celebrating the city’s rich culture and inspiring
                  achievements, Chennai stands as a beacon of tradition and
                  innovation. From its historic landmarks to its modern
                  contributions in art, music, and education, the city continues
                  to inspire pride among its residents and admirers alike.
                  Chennai’s spirit, talent, and resilience make its pride truly
                  unmatched.
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
