import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";
import { cards } from "./EventData";
export default function EventsHome() {
  return (
    <>
      <section className="accaodomationBannerSection">
        <div>
          <img src="./images/AccodomationBannerr.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <a href="">Home</a> - <a href="">Events</a>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </section>
      <section className="EventsListSec SecPadblock12">
        <div className="container max-w-7xl mx-auto ">
          <div class="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">Events Calendar</h2>
            <p>
              Keeps you in the loop with the latest happenings in Chennai. From
              cultural festivals and live performances to workshops and
              exhibitions, never miss an exciting event in the city.
            </p>
          </div>
          <div className="EventsListboxs flex flex-wrap">
            {cards.map((card, index) => (
              <div
                key={index}
                className="EventsItems bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full EventsItemImg">
                  <Link to={`/eventsdetails/${index}`} state={{ card }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full object-cover"
                    />
                  </Link>

                  <div className="absolute top-3 right-3 evntechnolg">
                    {card.EventsCalendarCategory}
                  </div>
                </div>
                <div className="EventsIteCont flex flex-col items-start">
                  <div className="datimeContbox">
                    <div className="dtDaymonth">{card.EventsCalendarMonth}</div>
                    <div className="dtLines">|</div>
                    <div className="dtTimess">{card.EventsCalendarTime}</div>
                  </div>
                  <h3 className="EveItemtitles">
                    <Link to={`/eventsdetails/${card.id}`} state={{ card }}>
                      {card.EventsCalendarTitle}
                    </Link>
                  </h3>
                  <h4 className="EveItemDescrip">
                    {card.EventsCalendarContent}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
