import { Link } from "react-router-dom";
import "../../../assets/Css/GenzVideo.css";
// import Search from "../Components/Search";
// import { nammaStoriesNewsEPaper, NammaStoreiesnewsArticle } from "./NewsData";
import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GenZVideoStory from "./GenZVideoStory";
// import NammaStoriesVideo from "./NammaStoriesVideo";

export default function GenzVideoContent() {
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
          Join the Next Wave of Gen Z Content Creators : Super Chennai
        </title>
        <meta
          name="description"
          content="From local slang to street culture, Super Chennai celebrates Gen Z content creators sharing authentic Chennai stories through creativity, reels, and real vibes."
        />
        <link
          rel="canonical"
          href="/contest/gen-z-content-creators"
        />
      </Helmet>

      <div className="kslkskskskss">
        <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
          {/* Images */}
          <div className="relative z-0">
            <img
              className="eventsCalenderIamge hidden sm:block w-full"
              src="/images/genz/herobannergenz.jpeg"
              alt="Super Chennai Quiz"
            />

            {/* Mobile Image */}
            <img
              className="block sm:hidden w-full"
              src="/images/genz/mobilebannerrr.jpeg"
              alt="Super Chennai Quiz Mobile"
            />
          </div>

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 to-[#8b3c82]/90 z-10"></div> */}

          {/* Text Content */}
          <div className="accodoamationBannerContainer relative z-20">
            <div className="accodoamationBannerText">
              {/* <AutoShrinkText
              text="Hotshots Chennai Moments"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />

            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Hotshots Chennai Moments</Link>
            </div> */}
            </div>
          </div>
        </section>

        <section className="newsectionnambaaagenx">
          <div className="container max-w-7xl mx-auto px-4 py-8">
            <h2 className="sc-main-title">
              Chennai, <span class="sc-text-blue">This is </span>
              <span class="sc-text-pink">Your Stage.</span>
            </h2>
            <div className="newflexconatinerrrr">
              <div>
                <p className="sc-description">
                  Super Chennai is building a new generation of storytellers who
                  truly represent the city. We're not looking for perfect
                  influencers or polished celebrities. We want real people with
                  real energy, real voices, and real Chennai vibes
                </p>
                <p className="sc-description">
                  If you love your streets, your food spots, your slang, your
                  culture, your people, and the everyday magic of this city this
                  is for you. Show us Chennai through your eyes with a short{" "}
                  <span className="sc-text-pink"> 30 to 60 second reel </span>
                </p>
              </div>
              <div>
                <p className="sc-description">
                  Whether you're funny, expressive, bold, emotional, stylish, or
                  simply yourself-your story matters here. Join a Gen Z creator
                  collective that celebrates the evolving spirit of Chennai
                </p>
                <p className="sc-description ">
                  <span className="sc-text-blue">
                    This is your chance to be seen,{" "}
                    <span className="sc-text-pink"> heard, and featured</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="sc-benefits-section">
          <div class="container max-w-7xl mx-auto px-4 py-8">
            <header class="sc-header">
              <h2 class="sc-main-title">
                WHY JOIN <span class="sc-text-blue">SUPER</span>
                <span class="sc-text-pink">CHENNAI?</span>
              </h2>
              <p class="sc-description">
                We're creating a fresh digital movement powered by Gen Z
                creators who <strong>genuinely live the city.</strong>
                Whether you love street culture, fashion, cinema, hidden places,
                memes, or storytelling - this platform is for you.
              </p>
            </header>

            <div class="sc-cards-grid">
              <div class="sc-card sc-border-blue">
                <div class="sc-icon-wrapper sc-bg-blue">
                  <img src="/public/images/genz/Group18.svg" alt="" />
                </div>
                <h3 class="sc-card-title sc-text-blue">CREATE REAL CONTENT</h3>
                <p class="sc-card-text">
                  Shoot reels, street stories, interviews, trends, and
                  everything that reflects Chennai's evolving culture.
                </p>
              </div>

              <div class="sc-card sc-border-pink">
                <div class="sc-icon-wrapper sc-bg-pink">
                  <img src="/public/images/genz/svg-img1.svg" alt="" />
                </div>
                <h3 class="sc-card-title sc-text-pink">BUILD YOUR IDENTITY</h3>
                <p class="sc-card-text">
                  Collaborate with Super Chennai and become part of a growing
                  creator community that actually gets noticed.
                </p>
              </div>

              <div class="sc-card sc-border-blue">
                <div class="sc-icon-wrapper sc-bg-blue">
                  <img src="/public/images/genz/Group16.svg" alt="" />
                </div>
                <h3 class="sc-card-title sc-text-blue">CREATIVE FREEDOM</h3>
                <p class="sc-card-text">
                  We're not looking for polished influencers. We want
                  originality, personality, humor, and authenticity.
                </p>
              </div>

              <div class="sc-card sc-border-pink">
                <div class="sc-icon-wrapper sc-bg-pink">
                  <img src="/public/images/genz/location-icon.svg" alt="" />
                </div>
                <h3 class="sc-card-title sc-text-pink">REPRESENT CHENNAI</h3>
                <p class="sc-card-text">
                  Show your side of Chennai — local spots, people, hidden gems,
                  trends, culture, and city experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="sc-join-section">
          <div class="container max-w-7xl mx-auto px-4 py-8">
            <h2 class="sc-join-title">
              HOW TO <span class="sc-join-accent">JOIN?</span>
            </h2>

            <div class="sc-join-timeline">
              <div class="sc-join-line"></div>

              <div class="sc-join-step">
                <div class="sc-join-circle sc-join-bg-blue">
                  <img src="/public/images/genz/Group12-new.svg" alt="" />
                </div>
                <h4 class="sc-join-step-num sc-join-text-blue">STEP 01</h4>
                <p class="sc-join-step-desc">
                  Create a 30-60
                  <br />
                  sec Reel
                </p>
              </div>

              <div class="sc-join-step">
                <div class="sc-join-circle sc-join-bg-pink">
                  <img src="/public/images/genz/Group14.svg" alt="" />
                </div>
                <h4 class="sc-join-step-num sc-join-text-pink">STEP 02</h4>
                <p class="sc-join-step-desc">
                  Upload your
                  <br />
                  reel link
                </p>
              </div>

              <div class="sc-join-step">
                <div class="sc-join-circle sc-join-bg-blue">
                  <img src="/public/images/genz/Group15.svg" alt="" />
                </div>
                <h4 class="sc-join-step-num sc-join-text-blue">STEP 03</h4>
                <p class="sc-join-step-desc">
                  Tell us why you
                  <br />
                  love Chennai
                </p>
              </div>

              <div class="sc-join-step">
                <div class="sc-join-circle sc-join-bg-pink">
                  <img src="/images/genz/Group13.svg" alt="" />
                </div>
                <h4 class="sc-join-step-num sc-join-text-pink">STEP 04</h4>
                <p class="sc-join-step-desc">
                  Get shortlisted &<br />
                  collaborate
                </p>
              </div>
            </div>
          </div>
        </section>

        <GenZVideoStory />

        {/* <section class="sc-form-section">
          <div class="sc-form-container">
            <div class="sc-form-branding">
              <h2 class="sc-form-main-title">
                JOIN THE
                <br />
                <span class="sc-form-gradient-text">COLLECTIVE</span>
              </h2>
              <div class="sc-form-squiggle"></div>
              <p class="sc-form-subtext">
                Submit your details and show us your Chennai through a 30-60
                second reel.
                <strong>Auditions are officially open now.</strong>
              </p>

              <div class="sc-form-image-wrapper">
                <img
                  src="/images/genz/man-genz.png"
                  alt="Creator with Camera"
                  class="sc-form-hero-img"
                />
              </div>
            </div>

            <div class="sc-form-card">
              <form action="#" method="POST">
                <div class="sc-form-row">
                  <input
                    type="text"
                    placeholder="Full Name"
                    class="sc-form-input"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    class="sc-form-input"
                    required
                  />
                </div>

                <div class="sc-form-row">
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="sc-form-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Instagram Handle"
                    class="sc-form-input"
                  />
                </div>

                <input
                  type="url"
                  placeholder="Reel Link / Google Drive Link"
                  class="sc-form-input sc-form-full-width"
                />

                <select class="sc-form-input sc-form-full-width sc-form-select">
                  <option value="" disabled selected>
                    What type of content do you create?
                  </option>
                  <option value="food">Food & Cafe</option>
                  <option value="lifestyle">Lifestyle & Fashion</option>
                  <option value="travel">Travel & Hidden Gems</option>
                  <option value="humor">Memes & Humor</option>
                </select>

                <textarea
                  placeholder="Tell us about yourself and why you want to collaborate with Super Chennai"
                  class="sc-form-input sc-form-textarea sc-form-full-width"
                ></textarea>

                <div class="sc-form-checkbox-group">
                  <input
                    type="checkbox"
                    id="sc-consent"
                    class="sc-form-checkbox"
                  />
                  <label for="sc-consent" class="sc-form-checkbox-label">
                    I want to collaborate with Super Chennai and agree to be
                    contacted regarding creator opportunities, collaborations,
                    campaigns, and auditions.
                  </label>
                </div>

                <button type="submit" class="sc-form-submit-btn">
                  <span class="sc-form-btn-icon">🚀</span> SUBMIT YOUR
                  APPLICATION
                </button>
              </form>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
