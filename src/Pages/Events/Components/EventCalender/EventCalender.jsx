import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import "../../../../assets/Css/EventsCalendar.css";
import { API_BASE_URL } from "../../../../../config";
import { formatEventTime } from "../../Utils/formatTime";
import { formatEventDate } from "../../Utils/dateFormatter";
import TruncatedText from "../../../GlobalComponents/TruncatedText";
import defaultImage from "../../../../../public/propertyDefault.png";
import FormattedEventDates from "../../Utils/dateFormatter";
import { Link } from "react-router-dom";

export default function EventCalender({ events = [] }) {
  const [x, setX] = useState(0);
  const carouselRef = useRef();
  const lastScrollY = useRef(0);
  const [scrollDir, setScrollDir] = useState("left");
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  let featuredEvent = events.find((e) => e.isFeatured === true);
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const upcomingEvents = useMemo(
    () =>
      events
        .filter(
          (card) =>
            card !== featuredEvent &&
            Array.isArray(card.event?.eventDates) &&
            card.event.eventDates.length > 0 &&
            new Date(card.event.eventDates[0].date) >= today
        )
        .sort(
          (a, b) =>
            new Date(a.event.eventDates[0].date) -
            new Date(b.event.eventDates[0].date)
        ),
    [events, today, featuredEvent]
  );

  if (!featuredEvent) {
    const recentAddedThisMonth = [...events]
      .filter((e) => {
        if (!e.event?.eventDates?.length) return false;
        const firstDate = new Date(e.event.eventDates[0].date);
        return (
          firstDate.getMonth() === currentMonth &&
          firstDate.getFullYear() === currentYear
        );
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt || b.event?.createdAt) -
          new Date(a.createdAt || a.event?.createdAt)
      )[0];

    featuredEvent = recentAddedThisMonth || null;
  }

  if (!featuredEvent && upcomingEvents.length > 0) {
    featuredEvent = upcomingEvents[0];
  }

  const featuredDate = featuredEvent?.event?.eventDates?.[0]?.date
    ? formatEventDate(featuredEvent.event.eventDates[0].date)
    : {};

  const featuredImg =
    featuredEvent?.heroImage?.sizes?.medium?.url ||
    featuredEvent?.heroImage?.url ||
    defaultImage;

  const category = featuredEvent?.event?.eventsCategory?.[0]?.title || "";

  const slide = (direction) => {
    const cardWidth = 300;
    const gap = 40;
    const maxX = -(
      upcomingEvents.length * (cardWidth + gap) -
      window.innerWidth +
      gap
    );

    setX((prev) =>
      direction === "left"
        ? Math.min(prev + (cardWidth + gap), 0)
        : Math.max(prev - (cardWidth + gap), maxX)
    );
  };

  /* 🔄 Scroll Direction Detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrollDir(window.scrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="EventsCalendarMainSection">
      {/* BG Effect */}
      <div
        className={`EventsCalenderBackground ${
          scrollDir === "right"
            ? "Utilitiesscroll-right"
            : "Utilitiesscroll-left"
        }`}
      >
        <p>Events &nbsp; Events &nbsp; Events &nbsp;</p>
        <p>Calendar &nbsp; Calendar &nbsp; Calendar &nbsp;</p>
      </div>

      {/* Title */}
      <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain">
        <h2>Events Calendar</h2>
        <p>
          Find the finest shows & events happening across Chennai — sorted just
          for you!
        </p>
      </div>

      {/*  Featured Card */}
      {featuredEvent && (
        <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4">
          <div className="CalendarEventsFirst">
            <img
              className="eventsCalenderIamge cursor-pointer"
              src={`${API_BASE_URL}${featuredImg}`}
              alt={featuredEvent?.event?.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
              }}
              onClick={() =>
                // (window.location.href = `/events-in-chennai/${featuredEvent.slug}`)
                 (window.location.href = `/contests/chennai-quiz/`)

                // contests/chennai-quiz
              }
            />

            <div className="MainCalendarSectionEvent">
              {featuredDate?.monthYear && (
                <h4>
                  <span>{featuredDate.monthYear}</span>
                </h4>
              )}

              <div className="secondSectionEventsCalendar">
                <div className="EventsCalendarDateandTime">
                  <p className="dateEvents">{featuredDate?.day}</p>
                  <p className="dayEvents">{featuredDate?.weekday}</p>
                </div>
                <div>
                  <p className="eventsNAME">{featuredEvent.event.title}</p>
                  <p className="eventspLACE">
                    {featuredEvent.event.singerName || ""}
                  </p>
                </div>
              </div>

              <div className="thirdSectionCalendarContent">
                <TruncatedText
                  text={featuredEvent.event.description}
                  limit={180}
                />
              </div>

              <div className="eventsCalendarLinks">
                <a>{category}</a>
              </div>

              <a href={`/chennai-events`}>
                {/* ${featuredEvent.slug} */}
                <p className="FindOutMore">Find Out More</p>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden py-17 cardMobileSection">
        <div className="relative">
          <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

          <motion.div
            ref={carouselRef}
            className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(upcomingEvents.length * 340 - window.innerWidth),
            }}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {upcomingEvents.map((card) => {
              const d = card.event.eventDates[0];
              const formattedDate = formatEventDate(d.date);
              const formattedTime = d.time ? formatEventTime(d.time) : "";
              const cardImg =
                card.heroImage?.sizes?.medium?.url ||
                card.heroImage?.url ||
                defaultImage;
              const eventData = card.event || {};

              return (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: 1.04 }}
                  className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                >
                  <a href={`/events-in-chennai/${card.slug}`}>
                    <img
                      src={`${API_BASE_URL}${cardImg}`}
                      alt={card.event.title}
                      className="w-full h-[250px] object-cover rounded-t-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultImage;
                      }}
                    />
                  </a>

                  <div className="p-3 flex gap-2">
                    {(eventData?.eventDates?.length > 0 ||
                      eventData?.details?.eventTime) && (
                      <div className="datimeContbox flex items-center text-sm text-gray-600 mb-2">
                        <div className="dtDaymonth">
                          {eventData?.eventDates?.length > 0 && (
                            <FormattedEventDates
                              dates={eventData.eventDates.slice(0, 2)}
                            />
                          )}
                        </div>

                        {eventData?.eventDates &&
                          eventData?.details?.eventTime && (
                            <div className="mx-2 text-gray-400">|</div>
                          )}

                        {eventData?.details?.eventTime && (
                          <div className="dtTimess">
                            {formatEventTime(eventData.details.eventTime)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className="EventsCalendarTitlecss line-clamp-1">
                    {card.event.title}
                  </h3>
                  <h4 className="EventsCalendarContentcss line-clamp-4">
                    {card.event.description}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation Buttons */}

          <div className="EventsCalenderButtons flex justify-center gap-8 mt-8 ">
            <button
              onClick={() => slide("left")}
              className="EventsCalenderLeftButton"
            ></button>
            <button
              onClick={() => slide("right")}
              className="EventsCalenderRightButton"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
