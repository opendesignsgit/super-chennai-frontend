import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PrideofChennai() {
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
                className="eventsCalenderIamge reimagineDekstop"
                src="/images/banner-ai.jpg"
                alt=""
              />
              <img
                className="eventsCalenderIamge reimagineMobile"
                src="/images/banner-ai-1.jpg"
                alt=""
              />
            </div>
            <div className="accodoamationBannerContainer">
              <div className="accodoamationBannerText">
                <h3>Pride of Chennai</h3>
                <div className="breadCrum">
                  <Link to="/">Home</Link> -{" "}
                  <a href="">Pride of Chennai</a>{" "}
                </div>
              </div>
            </div>
            {/* <div className="notHomePageSearch">
              <Search />
            </div> */}
          </section>
        </div>

        <section className="pridepfchennaisection">
          <div className=" container max-w-7xl mx-auto px-4">
            <div className="prideofchennairow">
              <div className="prideofchennaicards">
                <div className="pride-cards-image">
                  <img src="/images/pride-of-chennai/ashwin-pride.jpg" alt="" />
                </div>
                <h3>Ravichandran Ashwin</h3>
                <h5>Cricketer</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, debitis.
                </p>
                <a href="">Know More</a>
              </div>
              <div className="prideofchennaicards">
                <div className="pride-cards-image">
                  <img src="/images/pride-of-chennai/ashwin-pride.jpg" alt="" />
                </div>
                <h3>Ravichandran Ashwin</h3>
                <h5>Cricketer</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, debitis.
                </p>
                <a href="">Know More</a>
              </div>
              <div className="prideofchennaicards">
                <div className="pride-cards-image">
                  <img src="/images/pride-of-chennai/ashwin-pride.jpg" alt="" />
                </div>
                <h3>Ravichandran Ashwin</h3>
                <h5>Cricketer</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, debitis.
                </p>
                <a href="">Know More</a>
              </div>
              <div className="prideofchennaicards">
                <div className="pride-cards-image">
                  <img src="/images/pride-of-chennai/ashwin-pride.jpg" alt="" />
                </div>
                <h3>Ravichandran Ashwin</h3>
                <h5>Cricketer</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, debitis.
                </p>

                <a href="">Know More</a>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
