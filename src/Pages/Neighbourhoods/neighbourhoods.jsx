import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import NeighbourhoodsTabs from "./Components/NeighbourhoodsTabs";

export default function Neighbourhoods() {
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
                src="/images/pride-of-chennai/pride-chennai-banner.jpg"
                alt=""
              />
            </div>
            <div className="accodoamationBannerContainer">
              <div className="accodoamationBannerText">
                <h3>Neighbourhood</h3>
                <div className="breadCrum">
                  <Link to="/">Home</Link> - <a href="">Neighbourhood</a>{" "}
                </div>
              </div>
            </div>
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
                <p>
                  Neighbourhood &nbsp; in Chennai &nbsp; Neighbourhood &nbsp; in
                  Chennai
                </p>
              </div>
              <div className="workIntro !pb-0">
                <h3>Neighbourhood</h3>
                <p>
                  Explore Chennai’s Neighbourhoods — Every Location Tells Its
                  Own Story.
                </p>{" "}
                <p>
                  Discover the essence of Chennai through its diverse
                  neighbourhoods — each location blending culture, comfort, and
                  convenience into vibrant urban living experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <NeighbourhoodsTabs />
      </>
    </>
  );
}