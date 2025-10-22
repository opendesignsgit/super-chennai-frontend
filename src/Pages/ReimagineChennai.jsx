import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";
import { nammaStoriesNewsEPaper, NammaStoreiesnewsArticle } from "./NewsData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "./NammaStoriesForm";
import NammaStoriesVideo from "./NammaStoriesVideo";
import ReimagineForm from "./ReimagineForm";

export default function ReimagineChennai() {
  const [tab, setTab] = useState("active");
  const [tab1, setTab1] = useState("");
  const [newsarticle, setNewsArticle] = useState("active");
  const [newsLetter, setLetter] = useState("");
  const [newsYoutube, setNewsYoutube] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  return (
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

      <div className="NewsLetterPage reimaginePage">
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
              <h3>Reimagine Chennai</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> - <a href="">Reimagine Chennai</a>{" "}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </section>
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="workIntro">
             
              <h1>ai art challenge</h1>

              <p>
                Marina Beach with floating food stalls in 2050. Carnatic
                concerts in holographic halls. Filter coffee served by friendly
                robots in tomorrow's Mylapore or anything else you dream up can
                now find a canvas...
              </p>

              <p style={{ textAlign: "left", width: "100%" }}>
                <strong
                  className="fontforstyle"
                  style={{ color: "#995098", fontWeight: "bolder" }}
                >
                  The Challenge
                </strong>
                <p>
                  Create AI art that reimagines Chennai's future, its food,
                  people, culture, music, landmarks, or anything that makes this
                  city pulse with life.
                </p>
              </p>

              <hr />
              <p style={{ textAlign: "left", width: "100%" }}>
                <div style={{ marginTop: "10px" }}>
                  <strong
                    className="fontforstyle"
                    style={{ color: "#995098", fontWeight: "bolder" }}
                  >
                    The Deal
                  </strong>
                  <ul className="listtypesection">
                    <li>Open to Chennai enthusiasts across India</li>
                    <li>Submit up to 3 pieces that blend soul with artistry</li>
                    <li>Deadline: September 30th</li>
                    <li>
                      Send entries to:{" "}
                      <a
                        style={{ color: "#0000EE" }}
                        href="mailto:hello@superchennai.com"
                      >
                        {" "}
                        hello@superchennai.com
                      </a>
                    </li>
                  </ul>
                </div>
              </p>
              <hr />
              <p style={{ textAlign: "left", width: "100%" }}>
                <div style={{ marginTop: "10px" }}>
                  <strong
                    className="fontforstyle"
                    style={{ color: "#995098", fontWeight: "bolder" }}
                  >
                    The Payoff
                  </strong>
                  <ul className="listtypesection">
                    <li>25 winning pieces showcased in a real art gallery</li>
                    <li>Artists keep proceeds from sales</li>
                    <li>Your vision of Chennai's tomorrow, celebrated today</li>
                  </ul>
                </div>
                <p>
                  Whether you're homesick in Mumbai, dreaming in Delhi, or right
                  here in the heart of Chennai, if this city runs through your
                  veins, this challenge is calling your name.
                </p>
                <p>
                  Ready to show us Chennai like we've never seen it? The future
                  is waiting for your brushstrokes.
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* <ContactForm /> */}
        {/* <ReimagineForm /> */}
      </div>
    </>
  );
}
