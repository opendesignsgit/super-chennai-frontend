import React, { useState } from "react";
import { useEvents } from "../Events/Hooks/UseEvents";
import { API_BASE_URL } from "../../../config";
import EventsFilterSidebar from "./Components/EventsFilterSidebar";
import FilterTopbar from "./Components/FilterTopbar";
import { useEventCategories } from "../Events/Hooks/useEventCategories";
import { motion, AnimatePresence } from "framer-motion";
import SidebarModal from "./Components/SidebarModal";
import TruncatedText from "../GlobalComponents/TruncatedText";
import EventCardSkeleton from "./Components/Loader/EventCardSkeleton";
import { formatEventTime } from "./Utils/formatTime";

const EventsPage = () => {
  const [filters, setFilters] = useState({ categories: [] });
  const [sortBy, setSortBy] = useState("");
  const { events, totalResults, loading } = useEvents(filters, sortBy);

  // const upcomingEvents = [...events].sort((a, b) => b.id - a.id);

  console.log("eventdata",events)

const upcomingEvents = [...events].sort((a, b) => {
  const dateA = new Date(a.event?.eventDate);
  const dateB = new Date(b.event?.eventDate);

  if (!a.event?.eventDate) return 1;
  if (!b.event?.eventDate) return -1;

  return dateB - dateA; // latest event first
});



  const { categories } = useEventCategories();
  const [showSidebar, setShowSidebar] = useState(false);

  const categoryOptions = categories?.map((cat) => ({
    id: cat.id,
    title: cat.title,
  }));

  const categoryOptionsWithAll = [
    { id: "All", title: "All" },
    ...(categoryOptions || []),
  ];

  const handleCategoryChange = (categoryId) => {
    if (categoryId === "All") {
      setFilters({ categories: [] });
      return;
    }

    setFilters((prev) => {
      const prevCategories = prev.categories || [];
      const isSelected = prevCategories.includes(categoryId);

      const newCategories = isSelected
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId];

      return { ...prev, categories: newCategories };
    });
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
          categories={categoryOptionsWithAll}
          filters={filters}
          onCategoryChange={handleCategoryChange}
          activeColor="#a44294"
        />
        <div className="container max-w-7xl mx-auto flex flex-row gap-6 p-2">
          {/* === LEFT SIDEBAR === */}
          <aside className="hidden md:block w-[280px] shrink-0">
            <div className="sticky top-24">
              <EventsFilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          {/* === RIGHT CONTENT === */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-3 md:hidden sticky top-[150px] z-[60] bg-[#f4f5f7] py-2">
              <button
                onClick={() => setShowSidebar(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#a44294] to-[#701c67] shadow-lg active:scale-95 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h18m-8.25 6H21M3 16.5h12"
                  />
                </svg>
                Filters
              </button>
            </div>

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
              <motion.div
                key={filters.category || "all"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center"
              >
                {loading &&
                  Array.from({ length: 6 }).map((_, index) => (
                    <EventCardSkeleton key={index} />
                  ))}

                {!loading &&
                  upcomingEvents.map((card, index) => {
                    const eventData = card.event || {};
                    const imageUrl = eventData.image
                      ? `${API_BASE_URL}${eventData.image.url}`
                      : "../../../public/propertyDefault.png";

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
                        className="bg-white shadow hover:shadow-lg transition-all w-full max-w-[300px] rounded-lg"
                      >
                        <div className="relative w-full h-[200px]">
                          <a
                            href={`/superchennai-events-details/${card.slug}`}
                            state={{ card }}
                          >
                            <img
                              src={imageUrl}
                              alt={eventData.title || card.title}
                              className="h-full w-full object-cover rounded-t-lg"
                            />
                          </a>
                          {eventData?.eventsCategory?.length > 0 && (
                            <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                              {eventData.eventsCategory.map((cat) => (
                                <span
                                  key={cat.id}
                                  className="bg-gradient-to-r from-[#a44294] to-[#701c67] text-white px-2 py-1 rounded-full text-xs font-medium shadow-md"
                                >
                                  {cat.title.trim()}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="p-4 flex flex-col items-start">
                          <div className="datimeContbox flex items-center text-sm text-gray-600 mb-2">
                            <div className="dtDaymonth">{eventDate}</div>
                            <div className="mx-2 text-gray-400">|</div>
                            {eventData.details?.eventTime && (
                              <div className="dtTimess">
                                {formatEventTime(eventData.details.eventTime)}
                              </div>
                            )}
                          </div>

                          <h3 className="EveItemtitles font-semibold text-lg mb-1">
                            <a
                              href={`/superchennai-events-details/${card.slug}`}
                              state={{ card }}
                              className="hover:text-[#a44294]"
                            >
                              {eventData.title || card.title}
                            </a>
                          </h3>

                          <h4 className="EveItemDescrip text-gray-600 text-sm">
                            <TruncatedText
                              text={
                                eventData.description ||
                                "Discover an amazing experience in Chennai."
                              }
                              limit={200}
                            />
                          </h4>
                        </div>
                      </div>
                    );
                  })}
              </motion.div>
            </div>
          </div>
        </div>

        <SidebarModal
          open={showSidebar}
          onClose={() => setShowSidebar(false)}
          filters={filters}
          setFilters={setFilters}
        />
      </section>
    </>
  );
};

export default EventsPage;
