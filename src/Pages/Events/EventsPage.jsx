import React, { useState } from "react";
import { useEvents } from "../Events/Hooks/UseEvents";
import { API_BASE_URL } from "../../../config";
import EventsFilterSidebar from "./Components/EventsFilterSidebar";
import FilterTopbar from "./Components/FilterTopbar";
import { useEventCategories } from "../Events/Hooks/useEventCategories";
import { motion, AnimatePresence } from "framer-motion";

const EventsPage = () => {
  const [filters, setFilters] = useState({ category: "" });
  const [sortBy, setSortBy] = useState("");
  const { events, totalResults, loading } = useEvents(filters, sortBy);

  const upcomingEvents = [...events].sort((a, b) => b.id - a.id);
  const { categories } = useEventCategories();

  const categoryTitles =
    categories?.length > 0
      ? ["All", ...categories.map((cat) => cat.title.trim())]
      : null;

  console.log("categoryTitles", categoryTitles);


  const handleCategoryChange = (category) => {
    
      console.log("🟢 handleCategoryChange called with:", category);

    if (category === "All") {
      setFilters({});
    } else {
      setFilters({ category }); 
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="/images/events/events.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <a href="/">Home</a> - <a href="/events">Events</a>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch"></div>
      </section>

      <section className="EventsListSec SecPadblock12 bg-[#f4f5f7]">
        <div className="Eventitlesec mb-[50px] text-center">
          <h2 className="text-[#a44294]">Events Calendar</h2>
          <p>
            Keeps you in the loop with the latest happenings in Chennai. From
            cultural festivals and live performances to workshops and
            exhibitions, never miss an exciting event in the city.
          </p>
        </div>
        <FilterTopbar
          categories={categoryTitles}
          filters={filters}
          onCategoryChange={handleCategoryChange}
        />
        <div className="container max-w-7xl mx-auto flex flex-row gap-6 p-2">
          {/* === LEFT SIDEBAR === */}
          <aside className="w-[280px] shrink-0">
            <EventsFilterSidebar />
          </aside>

          {/* === RIGHT CONTENT === */}
          <div className="flex-1">
            <div className="sidebarrightCards">
              <span>
                Showing <strong>{totalResults}</strong>{" "}
                {totalResults === 1 ? "event" : "events"}{" "}
                {filters.category ? (
                  <>
                    for <strong>{filters.category}</strong> category
                  </>
                ) : (
                  "in all categories"
                )}
              </span>
            </div>

            {/* Event Cards */}
            <div className="EventsListboxs flex flex-wrap justify-center">
              {!loading && upcomingEvents.length === 0 && (
                <div className="w-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#a44294]/10">
                    <svg
                      className="w-8 h-8 text-[#a44294]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No events found
                  </h3>
                  <p className="text-gray-500 max-w-md">
                    Try selecting a different category or adjust your filters to
                    explore more events happening around Chennai.
                  </p>
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={filters.category || "all"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="EventsListboxs flex flex-wrap justify-center"
                >
                  {upcomingEvents.map((card, index) => {
                    const eventData = card.event || {};
                    const imageUrl = eventData.image
                      ? `${API_BASE_URL}${eventData.image.url}`
                      : "/images/no-image.jpg";

                    const eventDate = eventData.eventDate
                      ? new Date(eventData.eventDate).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "TBA";

                    return (
                      <div
                        key={index}
                        className="EventsItems-superchennai bg-white shadow hover:shadow-lg transition-all w-[300px]"
                      >
                        <div className="relative w-full h-[200px]">
                          <a
                            href={`/events-in-chennai/${card.slug}`}
                            state={{ card }}
                          >
                            <img
                              src={imageUrl}
                              alt={eventData.title || card.title}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          </a>
                          <div className="absolute top-3 right-3 evntechnolg bg-[#a44294] text-white px-2 py-1 rounded text-xs">
                            {eventData.category || "General"}
                          </div>
                        </div>

                        <div className="p-4 flex flex-col items-start">
                          <div className="datimeContbox flex items-center text-sm text-gray-600 mb-2">
                            <div className="dtDaymonth">{eventDate}</div>
                            <div className="mx-2 text-gray-400">|</div>
                            <div className="dtTimess">
                              {eventData.details?.duration || "N/A"}
                            </div>
                          </div>

                          <h3 className="EveItemtitles font-semibold text-lg mb-1">
                            <a
                              href={`/events-in-chennai/${card.slug}`}
                              state={{ card }}
                              className="hover:text-[#a44294]"
                            >
                              {eventData.title || card.title}
                            </a>
                          </h3>

                          <h4 className="EveItemDescrip text-gray-600 text-sm">
                            {eventData.description ||
                              "Discover an amazing experience in Chennai."}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
