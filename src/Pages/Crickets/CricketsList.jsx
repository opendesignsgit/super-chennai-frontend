import "../../assets/Css/Eventstyle.css";
import { iplcontents } from "../../Pages/EventData";

import { Helmet } from "react-helmet-async";

export default function CricketList() {

const allEvents = iplcontents;


  return (
    <>
      <Helmet>
        <title>
           IPL 2026 T20 Matches | Match Previews, Highlights & Updates
        </title>
        <meta
          name="description"
          content="Stay updated with IPL 2026 match previews, points table, T20 cricket highlights, fierce rivalries, team performances, and unforgettable moments from the season."
        />
        {/* <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script> */}
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/ipl-2026-match-updates`}
        />
      </Helmet>
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="  /images/ipl/ipl-banner.jpeg"
            alt=""
          />{" "}
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>IPL T20 2026</h1>

            <div className="breadCrum">
              <a href="">IPL</a> - <a href="">IPL</a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="EventsListSec SecPadblock12">
        <div className="container max-w-7xl mx-auto ">
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">IPL T20 2026</h2>
            <p>
              The IPL season brings thrilling matches, star players, and
              unforgettable moments that keep cricket fans excited every day.
              Experience the energy, rivalry, and entertainment of the world’s
              biggest T20 league.
            </p>
          </div>

          <div className="EventsListboxs flex flex-wrap">
            {[...iplcontents]
              .sort((a, b) => b.id - a.id)
              .map((card, index) => (
                <div key={index} className="EventsItems bg-white">
                  <div className="relative w-full EventsItemImg">
                    <a href={`/ipl/${card.slug}`}>
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full object-cover"
                      />
                    </a>

                    <div className="absolute top-3 right-3 evntechnolg">
                      {card.TrendingCalendarCategory}
                    </div>
                  </div>

                  <div className="EventsIteCont flex flex-col items-start">
                    <div className="datimeContbox">
                      <div className="dtDaymonth">{card.matchday}</div>
                      <div className="dtLines">|</div>
                      <div className="dtTimess">{card.duration}</div>
                    </div>

                    <h3 className="EveItemtitles">
                      <a href={`/ipl/${card.slug}`}>{card.name}</a>
                    </h3>

                    <h4 className="EveItemDescrip line-clamp-2">{card.para}</h4>

                    <a
                      href={`/ipl/${card.slug}`}
                      className="readMoreBtn mt-3 inline-block px-4 py-2 bg-[#a44294] text-white rounded hover:bg-[#8a357d] transition"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
