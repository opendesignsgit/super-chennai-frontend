import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../assets/Css/EventsCalendar.css";
import { useNavigate, Link } from "react-router-dom"; // ✅ Link import here

import { cards } from "../../src/Pages/EventData";
// import { cards1 } from "../../src/Pages/EventData";

export default function CardCarousel111() {
  const [scrollDir, setScrollDir] = useState("left");
  // const cards = cards1().cards1;
  const carouselRef = useRef();
  const [x, setX] = useState(0);

  const navigate = useNavigate();

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const slide = (direction) => {
    const cardWidth = 300;
    const gap = 40;
    const visibleWidth = window.innerWidth;
    const totalCardsWidth = cards.length * (cardWidth + gap);
    const maxX = -(totalCardsWidth - visibleWidth + gap);

    setX((prevX) => {
      if (direction === "left") {
        return Math.min(prevX + (cardWidth + gap), 0);
      } else if (direction === "right") {
        return Math.max(prevX - (cardWidth + gap), maxX);
      }
      return prevX;
    });
  };

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

  // console.log("All Data:", cards);
  // console.log("upcomingEvents", upcomingEvents);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("left");
      } else {
        setScrollDir("right");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="EventsCalendarMainSection">
        <div
          className={`EventsCalenderBackground ${
            scrollDir === "right"
              ? "Utilitiesscroll-right"
              : "Utilitiesscroll-left"
          }`}
          ref={bgTextRef}
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

        <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4">
          <div className="CalendarEventsFirst">
            <img
              className="eventsCalenderIamge"
              src="/images/HomePage-Images/Events/Newevents/170.jpg"
              alt=""
            />
            <div className="MainCalendarSectionEvent">
              <h4>
                <span>September - 2025 </span>
              </h4>

              <div className="secondSectionEventsCalendar">
                <div className="EventsCalendarDateandTime">
                  <p className="dateEvents">21</p>
                  <p className="dayEvents">Saturday</p>
                </div>

                <div>
                  <p className="eventsNAME">Namma Chennai</p>
                  <p className="eventspLACE">Juniorthon 3rd Edition</p>
                </div>
              </div>

              <div className="thirdSectionCalendarContent">
                <p>
                  Fun & Fitness Sports Day 2025 for kids of all ages with races,
                  prizes, and more.
                </p>
              </div>

              <div className="eventsCalendarLinks">
                {/* <a href="#">Concerts</a> */}
                <a>Treasure Hunt</a>
              </div>

              <a href="/events-in-chennai/chennai-marathon-namma-juniorthon-3-edition-kids-run">
                <p
                  // onClick={() => {
                  //   navigate("/eventstechinnovaters");
                  //   window.scrollTo({ top: 0 });
                  // }}
                  className="FindOutMore"
                >
                  Find Out More
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden py-17 cardMobileSection">
          <div className="relative">
            {/* Left Gradient Overlay */}
            <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

            {/* Right Gradient Overlay */}
            <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

            {/* Carousel */}
            <motion.div
              ref={carouselRef}
              className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
              drag="x"
              // dragConstraints={{ right: 0, left: -1200 }}
              dragConstraints={{
                right: 0,
                left: -(cards.length * (300 + 40) - window.innerWidth + 40),
              }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* {upcomingEvents.map((card) => (
                <motion.div
                  key={card.id}
                  className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-[250px]">
                  
                    <a href={`/events-in-chennai/${card.id}`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-t-md"
                      />
                    </a>
                    <div className="absolute top-3 right-3 CalenderCategoryOverlay">
                      {card.EventsCalendarCategory}
                    </div>
                  </div>
                  <div className="EventsCalendarMonthtime">
                    <div className="EventsCalendarMonthStyle">
                      {card.EventsCalendarMonth}
                    </div>
                    <div className="EventsCalendarMonthStyle">|</div>
                    <div className="EventsCalendarMonthStyle">
                      {card.EventsCalendarTime}
                    </div>
                  </div>
                  <h3 className="EventsCalendarTitlecss">
                    {card.EventsCalendarTitle}
                  </h3>
                  <h4 className="EventsCalendarContentcss">
                    {card.EventsCalendarContent}
                  </h4>
                </motion.div>
              ))} */}
              {[...upcomingEvents]
                .sort((a, b) => b.id - a.id) // sort by latest id
                .map((card) => (
                  <motion.div
                    key={card.id}
                    className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative w-full h-[250px]">
                      <a href={`/events-in-chennai/${card.id}`}>
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-t-md"
                        />
                      </a>
                      <div className="absolute top-3 right-3 CalenderCategoryOverlay">
                        {card.EventsCalendarCategory}
                      </div>
                    </div>

                    <div className="EventsCalendarMonthtime">
                      <div className="EventsCalendarMonthStyle">
                        {card.EventsCalendarMonth}
                      </div>
                      <div className="EventsCalendarMonthStyle">|</div>
                      <div className="EventsCalendarMonthStyle">
                        {card.EventsCalendarTime}
                      </div>
                    </div>

                    <h3 className="EventsCalendarTitlecss">
                      {card.EventsCalendarTitle}
                    </h3>
                    <h4 className="EventsCalendarContentcss">
                      {card.EventsCalendarContent}
                    </h4>
                  </motion.div>
                ))}
            </motion.div>
          </div>

          {/* Buttons BELOW the slider */}
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
    </>
  );
}
