import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function SuperChennaiEvents() {
  return (
    <>
      <Helmet>
        <title>Super Chennai Contest: Pride, Talent, & Passion</title>
        <meta
          name="description"
          content="Join the Super Chennai Contest and showcase your talent, creativity, and love for Chennai. Celebrate the spirit of our vibrant city!"
        />
        <link rel="canonical" href="/superchennai-contest" />
      </Helmet>

      <div className="NewsLetterPage">
        <section className="accaodomationBannerSection">
          <div>
            <img
              className="eventsCalenderIamge"
              src="/images/contest.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Superchennai Contest</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> -{" "}
                <a href="">Superchennai Contest</a>{" "}
              </div>
            </div>
          </div>
        </section>
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="workIntro">
              <h1>Celebrate the Spirit of Our City!</h1>
              <p>
                Chennai isn’t just a city; it’s an emotion, a rhythm, and a
                timeless blend of tradition and modernity. The SuperChennai
                Contest is here to celebrate that spirit by bringing out the
                incredible talent of its people! This is your chance to showcase
                your skills, creativity, and love for Namma Chennai. From
                culture to art, from stories to performances—every expression of
                talent is welcome. Let the city see the best of you!
              </p>
              <p>
                This contest is about celebrating the pride, passion, and
                memories that define Chennai. By participating, you’re not just
                sharing your story—you’re becoming part of a collective
                celebration of everything that makes this city unique. Winners
                will be recognized, celebrated, and featured as proud voices of
                our city. Because every Chennaite has a story worth telling, and
                this is your moment to let the world hear yours.
              </p>
            </div>
          </div>
        </div>

        <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter !pt-7">
          <div className="container max-w-7xl mx-auto ">
            {/* <div class="Eventitlesec mb-[50px] text-center">
              <h2 className="text-[#a44294]">Namma Stories</h2>
              <p>
                Stay updated with the latest images, videos, and highlights from
                SuperChennai’s events, announcements, and developments.
              </p>
            </div>
            <div className="flex justify-center mb-8 newsLetterSection">
              <button className="newsLetterButton">News - E Paper</button>
              <button className="newsLetterButton">News Articles</button>
            </div> */}

            <div className="flex superchennaiEventsMainContainer">
              {/* Left */}


                            <a
                className="superchennaiEventsSection"
                href="/fun-quiz-competition-trivia-night"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/quiz-superchennai-inner.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">SuperChennai Quiz</p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="/reimagine-chennai-AI-art-challenge"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/ai-art-challenge-thumbnail.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">AI REIMAGINE</p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="/car-treasure-hunt"
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/car-rally.jpg"
                    alt="Left Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">CAR TREASURE HUNT</p>
                </div>
              </a>

              {/* Right */}

              <a className="superchennaiEventsSection" href="/namma-stories">
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/namma-stories-detail.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">NAMMA STORIES</p>
                </div>
              </a>


            </div>
          </div>
        </section>
      </div>
    </>
  );
}
