import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Iconsofthemonth() {
  return (
    <>
      <Helmet>
        <title>
          Icon of the Month in Chennai : Honoring Excellence in Chennai
        </title>
        <meta
          name="description"
          content="Super Chennai honors achievers through the Icon of the month in chennai, showcasing leaders who inspire with dedication, courage, and transformative impact."
        />
        <link rel="canonical" href="/icon-of-the-month-in-chennai" />
      </Helmet>

      <div className="NewsLetterPage">
        <section className="accaodomationBannerSection iconofthemonthbanner">
          <div>
            <img
              className="eventsCalenderIamge"
              src="/images/icon-of-the-month.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>ICON OF THE MONTH</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> -{" "}
                <a href="">ICON OF THE MONTH </a>{" "}
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
              <h1>Icon of The Month</h1>
              <p>
                Every month, Super Chennai shines the spotlight on individuals
                who redefine success, leadership, and inspiration in their
                fields. Our Icon of the Month is more than just a recognition –
                it is a tribute to passion, dedication, and the spirit of
                perseverance that drives change.
              </p>
              <p>
                This feature honors those who continue to shape industries,
                empower communities, and inspire countless lives with their
                journey. By showcasing their story, we aim to spark motivation,
                spread positivity, and celebrate the essence of true
                achievement.
              </p>
              <p>
                In highlighting their remarkable contributions, Super Chennai
                not only applauds their success but also reminds us that every
                dream, when pursued with courage and commitment, has the power
                to transform society.
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
              <a
                className="superchennaiEventsSection"
                href="/super-chennai-icon-of-sep-2025"
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/image-sep-inner.jpg"
                    alt="Left Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">
                    Icon of the Month - Sep 2025
                  </p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="/super-chennai-icon-of-aug-2025"
              >
                <div
                  className="flex flex-col items-center text-center "
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/chandrakumarimage.jpg"
                    alt="Right Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">
                    Icon of the Month - Aug 2025{" "}
                  </p>
                </div>
              </a>

              <a
                className="superchennaiEventsSection"
                href="/icon-of-the-july-month"
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src="/images/events/kumaravelimage.jpg"
                    alt="Left Image"
                    className="rounded-xl mb-3"
                  />
                  <p className="text-lg font-medium">
                    Icon of the Month - July 2025
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
