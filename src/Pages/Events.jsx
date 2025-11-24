import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";
import { cards, cards1 } from "./EventData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import { cards } from "./EventsTesting";

export default function EventsHome() {
  const [tab, setTab] = useState("active");
  const [tab1, setTab1] = useState("");
  const [newsarticle, setNewsArticle] = useState("active");
  const [newsLetter, setLetter] = useState("");
  const [newsYoutube, setNewsYoutube] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const dynamiccards = cards1().cards1;

  // Date Filter

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight

  const upcomingEvents = cards.filter((event) => {
    let endDateStr = event.EventsCalendarMonth.split("–").pop().trim();
    if (!/\d{4}$/.test(endDateStr)) {
      const yearMatch = event.EventsCalendarMonth.match(/\d{4}$/);
      if (yearMatch) {
        endDateStr += ", " + yearMatch[0];
      }
    }

    const eventEndDate = new Date(endDateStr);
    eventEndDate.setHours(0, 0, 0, 0); // Also reset event time

    return eventEndDate >= today;
  });

  const oldEvents = cards.filter((event) => {
    let endDateStr = event.EventsCalendarMonth.split("–").pop().trim();

    if (!/\d{4}$/.test(endDateStr)) {
      const yearMatch = event.EventsCalendarMonth.match(/\d{4}$/);
      if (yearMatch) {
        endDateStr += ", " + yearMatch[0];
      }
    }

    const eventEndDate = new Date(endDateStr);
    eventEndDate.setHours(0, 0, 0, 0); // Also reset event time

    return eventEndDate < today;
  });

  // console.log("All Data:", cards);
  // console.log("Filtered Date:", upcomingEvents);
  // console.log("Old Date", oldEvents);

  return (
    <>
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="  /images/events/events.jpg"
            alt=""
          />{" "}
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
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">Events Calendar</h2>
            <p>
              Keeps you in the loop with the latest happenings in Chennai. From
              cultural festivals and live performances to workshops and
              exhibitions, never miss an exciting event in the city.
            </p>
          </div>

          <div className="EventsListboxs flex flex-wrap">
            {[...upcomingEvents]
              .sort((a, b) => b.id - a.id)
              .map((card, index) => (
                <div
                  key={index}
                  className="EventsItems bg-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full EventsItemImg">
                    <a href={`/events-in-chennai/${card.url}`} state={{ card }}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full object-cover"
                      />
                    </a>

                    <div className="absolute top-3 right-3 evntechnolg">
                      {card.EventsCalendarCategory}
                    </div>
                  </div>
                  <div className="EventsIteCont flex flex-col items-start">
                    <div className="datimeContbox">
                      <div className="dtDaymonth">
                        {card.EventsCalendarMonth}
                      </div>
                      <div className="dtLines">|</div>
                      <div className="dtTimess">{card.EventsCalendarTime}</div>
                    </div>
                    <h3 className="EveItemtitles">
                      <a href={`/events-in-chennai/${card.url}`} state={{ card }}>
                        {card.EventsCalendarTitle}
                      </a>
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
      <section className="EventsListSec SecPadblock12 !pt-0">
        <div className="container max-w-7xl mx-auto ">
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">Past Events</h2>
            <p>
              Keeps you in the loop with the latest happenings in Chennai. From
              cultural festivals and live performances to workshops and
              exhibitions, never miss an exciting event in the city.
            </p>
          </div>

          <div className="EventsListboxs flex flex-wrap">
            {/* {oldEvents.map((card, index) => (
              <div
                key={index}
                className="EventsItems bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full EventsItemImg">
                  <a href={`/events-in-chennai/${card.url}`} state={{ card }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full object-cover"
                    />
                  </a>

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
                    <a href={`/events-in-chennai/${card.url}`} state={{ card }}>
                      {card.EventsCalendarTitle}
                    </a>
                  </h3>
                  <h4 className="EveItemDescrip">
                    {card.EventsCalendarContent}
                  </h4>
                </div>
              </div>
            ))} */}

              {oldEvents.sort((a, b) => b.id - a.id).map((card, index) => (
              <div
                key={index}
                className="EventsItems bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full EventsItemImg">
                  <a href={`/events-in-chennai/${card.url}`} state={{ card }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full object-cover"
                    />
                  </a>

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
                    <a href={`/events-in-chennai/${card.url}`} state={{ card }}>
                      {card.EventsCalendarTitle}
                    </a>
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
