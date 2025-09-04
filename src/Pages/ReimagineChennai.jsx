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
        <title>Chennai’s Future in AI Art | Join the Super Chennai Challenge</title>
        <meta
          name="description"
          content="Be part of a cultural movement! Submit AI-generated art to reimagine Chennai’s skyline, culture, and future. Winning works will be featured at The AI ART Show."
        />
                <link rel="canonical" href="/reimagine-chennai" />
      </Helmet>

      <div className="NewsLetterPage reimaginePage">
        <section className="accaodomationBannerSection">
          <div>
            <img
              className="eventsCalenderIamge"
              src="/images/banner-ai.jpg"
              alt=""
            />{" "}
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
              <h3>Reimagine Chennai: The AI Art Challenge</h3>

              <p>
                Super Chennai presents{" "}
                <strong>Reimagine Chennai: The AI Art Challenge</strong> , a
                citywide contest inviting creators to imagine Chennai’s future.
                From its skyline to its culture, participants will express new
                possibilities through digital art powered by generative tools.
              </p>
              <p>
                The top 25 works will be curated and displayed in a special
                exhibition titled <strong>The AI ART Show,</strong> where
                technology and imagination come together in a gallery setting.
              </p>

              <p style={{ textAlign: "left", width: "100%" }}>
                <strong
                  className="fontforstyle"
                  style={{ color: "#995098", fontWeight: "bolder" }}
                >
                  Objectives
                </strong>

                <ul className="listtypesection">
                  <li>
                    Position Chennai as a hub of creativity and innovation
                  </li>
                  <li>
                    Encourage artists, students, and professionals to experiment
                    with generative art as a new medium
                  </li>
                  <li>
                    Celebrate the city’s evolving identity by visualising its
                    future through original works
                  </li>
                  <li>
                    Create a cultural moment that unites technology, art, and
                    community pride
                  </li>
                </ul>
              </p>
                 <hr />
              <p style={{ textAlign: "left", width: "100%" }}>
                <strong
                  className="fontforstyle"
                  style={{ color: "#995098", fontWeight: "bolder" }}
                >
                  Contest Framework
                </strong>{" "}
                <br />
                <div style={{ marginTop: "10px" }}>
                  <strong>Theme: </strong> Reimagine Chennai – how will the city
                  look, feel, and inspire in the future
                </div>
                <div style={{ marginTop: "10px" }}>
                  <strong
                    className="fontforstyle"
                    style={{ color: "#995098", fontWeight: "bolder" }}
                  >
                    Format:
                  </strong>
                  <ul className="listtypesection">
                    <li>Medium: Digital art created with generative tools</li>
                    <li>
                      Entry: High-resolution JPEG or PNG files, print-ready
                    </li>
                    <li>
                      Platforms: Any generative art software such as MidJourney,
                      Stable Diffusion, DALL·E, or Firefly
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
                    Process:
                  </strong>
                  <ul className="listtypesection">
                    <li>
                      <strong>Call for Entries – </strong>
                      Two weeks of open submissions through SuperChennai.com
                    </li>
                    <li>
                      <strong>The AI ART Show – </strong>
                      Gallery exhibition featuring the winning works, open to
                      the public
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
                    Recognition and Awards
                  </strong>
                  <ul className="listtypesection">
                    <li>
                      <strong>Most Original: </strong>
                      most unique interpretation of the theme
                    </li>
                    <li>
                      <strong> People’s Choice: </strong>
                      voted by visitors at the show
                    </li>
                  </ul>
                </div>
                <p>
                  Prizes will include cash rewards, recognition by Super
                  Chennai, and features on SuperChennai.com and social
                  platforms.
                </p>
              </p>
              <hr />

              <p style={{ textAlign: "left", width: "100%" }}>
                <div style={{ marginTop: "10px" }}>
                  <strong
                    className="fontforstyle"
                    style={{ color: "#995098", fontWeight: "bolder" }}
                  >
                    Brand Integration
                  </strong>
                  <ul className="listtypesection">
                    <li>
                      Every selected work and the exhibition will carry the
                      Super Chennai seal of recognition, reinforcing the
                      movement’s mission to present Chennai as inclusive,
                      forward-looking, and culturally rich.
                    </li>
                    <li>
                      This initiative will establish Super Chennai as a leader
                      in creative innovation, linking tradition with technology
                      in a way that is both authentic and inspiring.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* <ContactForm /> */}
        <ReimagineForm />
      </div>
    </>
  );
}
