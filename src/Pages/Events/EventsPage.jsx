import React, { useState } from "react";
import { useEvents } from "../Events/Hooks/UseEvents";
import { API_BASE_URL } from "../../../config";
import EventsFilterSidebar from "./Components/EventsFilterSidebar";
import FilterTopbar from "./Components/FilterTopbar";
import { useEventCategories } from "../Events/Hooks/useEventCategories"; 
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

  

  // const categories = [
  //   "All",
  //   "Music",
  //   "Art",
  //   "Sports",
  //   "Technology",
  //   "Festival",
  //   "Workshop",
  //   "Theatre",

  //   "Sports",
  //   "Technology",
  //   "Festival",
  //   "Workshop",
  //   "Theatre",
  //   "Sports",
  //   "Technology",
  //   "Festival",
  //   "Workshop",
  //   "Theatre",
  // ];

  const handleCategoryChange = (category) => {
    setFilters(category === "All" ? {} : { category });
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
                <p className="text-gray-500">No events found.</p>
              )}

              {upcomingEvents.map((card, index) => {
                const eventData = card.event || {};
                const imageUrl = eventData.image
                  ? `${API_BASE_URL}${eventData.image.url}`
                  : "/images/no-image.jpg";

                const eventDate = eventData.eventDate
                  ? new Date(eventData.eventDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
