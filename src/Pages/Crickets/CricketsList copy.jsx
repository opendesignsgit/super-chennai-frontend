import "../../assets/Css/Eventstyle.css";
import { cards } from "./CricketData";

export default function CricketList() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const upcomingEvents = cards.filter((event) => {
    let endDateStr = event.EventsCalendarMonth.split("–").pop().trim();
    if (!/\d{4}$/.test(endDateStr)) {
      const yearMatch = event.EventsCalendarMonth.match(/\d{4}$/);
      if (yearMatch) {
        endDateStr += ", " + yearMatch[0];
      }
    }

    const eventEndDate = new Date(endDateStr);
    eventEndDate.setHours(0, 0, 0, 0); 

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
    eventEndDate.setHours(0, 0, 0, 0); 

    return eventEndDate < today;
  });
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
                    <a href={`/eventsold/${card.url}`} state={{ card }}>
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
                      <a href={`/eventsold/${card.url}`} state={{ card }}>
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
              {oldEvents.sort((a, b) => b.id - a.id).map((card, index) => (
              <div
                key={index}
                className="EventsItems bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full EventsItemImg">
                  <a href={`/eventsold/${card.url}`} state={{ card }}>
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
                    <a href={`/eventsold/${card.url}`} state={{ card }}>
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
