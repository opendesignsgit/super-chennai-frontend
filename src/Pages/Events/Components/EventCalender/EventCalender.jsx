import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../../../../assets/Css/EventsCalendar.css";
import { API_BASE_URL } from "../../../../../config";
import { formatEventTime } from "../../Utils/formatTime";
import { formatEventDate } from "../../Utils/dateFormatter";
import TruncatedText from "../../../GlobalComponents/TruncatedText";

export default function EventCalender({ events = [] }) {
  const [scrollDir, setScrollDir] = useState("left");
  const carouselRef = useRef();
  const [x, setX] = useState(0);
  const lastScrollY = useRef(0);

  const slide = (direction) => {
    const cardWidth = 300;
    const gap = 40;
    const visibleWidth = window.innerWidth;
    const totalCardsWidth = events.length * (cardWidth + gap);
    const maxX = -(totalCardsWidth - visibleWidth + gap);

    setX((prevX) => {
      if (direction === "left") return Math.min(prevX + (cardWidth + gap), 0);
      if (direction === "right")
        return Math.max(prevX - (cardWidth + gap), maxX);
      return prevX;
    });
  };

  /** ✅ Sorted upcoming events */
  const upcomingEvents = events
    .filter((card) => card.event?.eventDate)
    .sort((a, b) => new Date(a.event.eventDate) - new Date(b.event.eventDate));

  /** ✅ Get Featured Event (true only, ignore null) */
  const eventData = events.find((e) => e.isFeatured === true);

  // ✅ Don’t break UI if not featured event available
  if (!eventData) {
    console.warn("⚠ No featured event found");
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollDir(window.scrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** ✅ If no featured event, still show scroll cards section */
  const featuredDate = eventData?.event?.eventDate
    ? formatEventDate(eventData.event.eventDate)
    : {};

  const eventImg =
    eventData?.heroImage?.sizes?.medium?.url ||
    eventData?.heroImage?.url ||
    "/images/default-event.jpg";

  const category = eventData?.event?.eventsCategory?.[0]?.title || "Category";

  return (
    <div className="EventsCalendarMainSection">
      {/* BG text animation */}
      <div
        className={`EventsCalenderBackground ${
          scrollDir === "right"
            ? "Utilitiesscroll-right"
            : "Utilitiesscroll-left"
        }`}
      >
        <p>Events &nbsp; Events &nbsp; Events &nbsp; Events </p>
        <p>Calendar &nbsp; Calendar &nbsp; Calendar &nbsp; Calendar</p>
      </div>

      <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain">
        <h2>Events Calendar</h2>
        <p>
          Conferences by day, concerts by night — Chennai’s event calendar
          blends innovation, culture, and entertainment effortlessly.
        </p>
      </div>

      {/* ✅ Featured Event Section Only if Available */}
      {eventData && (
        <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4">
          <div className="CalendarEventsFirst">
            <img
              className="eventsCalenderIamge"
              src={`${API_BASE_URL}${eventImg?.url || eventImg}`}
              alt={eventData?.title || "Event image"}
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
                  <p className="eventsNAME">{eventData.event.title}</p>
                  <p className="eventspLACE">{eventData.event.singerName}</p>
                </div>
              </div>

              <div className="thirdSectionCalendarContent">
                <p>{eventData.event.description}</p>
              </div>

              <div className="eventsCalendarLinks">
                <a>{category}</a>
              </div>

              <a href={`/events/${eventData.slug}`}>
                <p className="FindOutMore">Find Out More</p>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Mobile scrolling cards */}
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
              left: -(
                upcomingEvents.length * (300 + 40) -
                window.innerWidth +
                40
              ),
            }}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {upcomingEvents.map((card) => {
              const data = card.event;
              const eventDate = data.eventDate
                ? new Date(data.eventDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "TBA";

              const time = data.details?.eventTime
                ? formatEventTime(data.details.eventTime)
                : "";

              const imageUrl = data?.image
                ? `${API_BASE_URL}${data.image.url}`
                : "/images/placeholder.jpg";

              return (
                <motion.div
                  key={card.id}
                  className="EventsCalendarCardSection min-w-[300px] h-[500px] bg-white rounded-md  hover:shadow-lg "
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="relative w-full h-[250px]">
                    <a
                      href={`/superchennai-events-details/${card.slug}`}
                      state={{ card }}
                    >
                      <img
                        src={imageUrl}
                        alt={data.title}
                        className="w-full h-full object-cover rounded-t-md"
                      />
                    </a>

                    {data?.eventsCategory?.length > 0 && (
                      <div className="absolute top-3 right-3 flex flex-wrap gap-2 p-4">
                        {data.eventsCategory.map((cat) => (
                          <span
                            key={cat.id}
                            className="bg-gradient-to-r from-[#a44294] to-[#701c67] text-white px-2 py-1 rounded-full text-xs font-medium shadow-md"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="EventsCalendarMonthtime p-3">
                    <span className="EventsCalendarMonthStyle">
                      {eventDate}
                    </span>
                    {time && (
                      <>
                        <span className="EventsCalendarMonthStyle">|</span>
                        <span className="EventsCalendarMonthStyle">{time}</span>
                      </>
                    )}
                  </div>

                  <h3 className="EventsCalendarTitlecss">{data.title}</h3>
                  <h4 className="EventsCalendarContentcss">
                    <TruncatedText text={data.description || ""} limit={60} />
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="EventsCalenderButtons flex justify-center gap-8 mt-8">
          <div
            className="EventsCalenderLeftButton"
            onClick={() => slide("left")}
          ></div>
          <div
            className="EventsCalenderRightButton"
            onClick={() => slide("right")}
          ></div>
        </div>
      </div>
    </div>
  );
}
