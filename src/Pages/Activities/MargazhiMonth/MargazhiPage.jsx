import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style/calendar.css";
import "react-toastify/dist/ReactToastify.css";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
import { useRef } from "react";
import { useEffect } from "react";
import { API_BASE_URL } from "../../../../config";
export default function MargazhiPageCalendar() {
  /* ================= STATE ================= */
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const calendarRef = useRef(null);
  const [hiddenGemEvents, setHiddenGemEvents] = useState([]);
  const [musicCategories, setMusicCategories] = useState([]);
  const [canteenCategories, setCanteenCategories] = useState([]);
const [selectedItem, setSelectedItem] = useState(null);
  const closeModal = () => {
    setSelectedDateEvents([]);
    setSelectedDate(null);
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/contest`);

        const data = await response.json();
        console.log("raw data from api", data);

        if (data?.docs?.length > 0) {
          const sections =
            data.docs[0]?.content?.root?.children?.[0]?.fields?.sections || [];

          // Flatten all sections' events
          const allEvents = sections.flatMap((section) =>
            section.eventsByDate.map((item) => ({
              date: item.date,
              events: item.events.map((event) => ({
                name: event.name,
                time: event.time,
                place: event.place?.title,
                musicians: event.musicians,

                organizer: event.organizers?.title || "",

                subCategory: event.subCategory,
                category: event.category?.title,
              })),
            }))
          );
          console.log("contestdata", allEvents);

          setHiddenGemEvents(allEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/organizers`);
        const json = await res.json();
        const organizers = (json?.docs || []).map((item) => ({
          title: item.title,
          subtitle: item.subtitle || "Margazhi Sabha",
          icon: item.icon || "🎼",
        }));

        setMusicCategories(organizers);
        console.log("orginzer", organizers);
      } catch (err) {
        console.error("Organizer fetch failed", err);
      }
    };

    fetchOrganizers();
  }, []);

  // useEffect(() => {
  //   const fetchCanteenCategories = async () => {
  //     try {
  //       const res = await fetch(`${API_BASE_URL}/api/sabhaFoods`);

  //       const json = await res.json();
  //       console.log("food data",json)

  //       const categories = (json?.docs || []).map((item) => ({
  //         title: item.title,
  //         subtitle: item.subtitle || "",
  //         icon: item.icon || "🍘",
  //         image: item.image
  //           ? `${API_BASE_URL}${item.image?.sizes?.thumbnail?.url || item.image.url}`
  //           : null,
  //       }));

  //       setCanteenCategories(categories);
  //     } catch (err) {
  //       console.error("Failed to fetch canteen categories", err);
  //     }
  //   };

  //   fetchCanteenCategories();
  // }, []);
  const getImageUrl = (image) => {
    if (!image) return null;

    return `${API_BASE_URL}${
      image.sizes?.square?.url || image.sizes?.thumbnail?.url || image.url
    }`;
  };
 const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

  useEffect(() => {
    const fetchCanteenCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/sabhaFoods`);
        const json = await res.json();

        const categories = (json?.docs || []).map((item) => ({
          id: item.id,

          title: item.title,
          subtitle: item.subtitle || "",

          icon: item.icon || "🍘",
          image: getImageUrl(item.image),

          type: item.type || null,
          order: item.order ?? null,

          // ✅ Date range
          availDate: {
            from: item.availDate?.from || null,
            to: item.availDate?.to || null,
          },

          // ✅ Timing
          timings: item.timings || "",

          // ✅ Place
          place: {
            name: item.place?.name || "",
            mapUrl: item.place?.mapUrl || "",
          },

          // ✅ Food / custom text
          foodDetails: item.foodDetails || "",

          // ✅ Sabha info
          sabhaName: item.sabhaName || "",
          organizer: item.organizer || "",

          // ✅ Rich text (raw payload)
          otherDetails: item.otherDetails || null,
        }));

        setCanteenCategories(categories);
      } catch (err) {
        console.error("Failed to fetch canteen categories", err);
      }
    };

    fetchCanteenCategories();
  }, []);

  const [activeTab, setActiveTab] = useState("sabha");
  const data = activeTab === "sabha" ? musicCategories : canteenCategories;

  // #########  HELPER FUNCTIONS   ############

  const tileClassName = ({ date }) => {
    const hasEvent = hiddenGemEvents.find((item) =>
      item.events.some(
        (event) =>
          new Date(item.date).toDateString() === date.toDateString() &&
          (!selectedSubCategory || event.organizer === selectedSubCategory)
      )
    );

    return hasEvent ? "event-day" : null;
  };

  const tileContent = ({ date }) => {
    const dayData = hiddenGemEvents.find((item) =>
      item.events.some(
        (event) =>
          new Date(item.date).toDateString() === date.toDateString() &&
          (!selectedSubCategory || event.organizer === selectedSubCategory)
      )
    );

    if (!dayData) return null;

    const filteredEvents = dayData.events.filter(
      (event) => !selectedSubCategory || event.organizer === selectedSubCategory
    );

    return (
      filteredEvents.length > 0 && (
        <span className="event-badge">{filteredEvents.length}</span>
      )
    );
  };

  const onDateClick = (date) => {
    console.log("Clicked date:", date.toDateString());

    // Get all day objects for this date
    const dayEventsArray = hiddenGemEvents.filter(
      (item) =>
        item.date && new Date(item.date).toDateString() === date.toDateString()
    );

    if (dayEventsArray.length === 0) return;

    // Combine all events for that date
    const allEvents = dayEventsArray.flatMap((item) => item.events || []);

    console.log("All events on this date:", allEvents);

    // Filter by selectedSubCategory if any
    const filteredEvents = selectedSubCategory
      ? allEvents.filter(
          (event) =>
            event.organizer &&
            event.organizer.trim().toLowerCase() ===
              selectedSubCategory.trim().toLowerCase()
        )
      : allEvents;

    console.log(
      "Filtered events for selectedSubCategory:",
      selectedSubCategory,
      filteredEvents
    );

    if (filteredEvents.length > 0) {
      setSelectedDate(date);
      setSelectedDateEvents(filteredEvents);
      setOpenModal(true);
    } else {
      console.log("No events found for selectedSubCategory on this date.");
    }
  };

  //########## OLDER VERSION ############

  // const onDateClick = (date) => {
  //   console.log("Clicked date:", date.toDateString());

  //   const dayEvents = hiddenGemEvents.find(
  //     (item) => new Date(item.date).toDateString() === date.toDateString()
  //   );
  //   console.log("allevnt-ss",hiddenGemEvents)

  //   console.log("Events on this date:", dayEvents);
  //   if (!dayEvents) return;

  //   const filteredEvents = selectedSubCategory
  //     ? dayEvents.events.filter(
  //         (event) => event.organizer === selectedSubCategory
  //       )
  //     : dayEvents.events;

  //   console.log(
  //     "Filtered events for selectedSubCategory:",
  //     selectedSubCategory,
  //     filteredEvents
  //   );

  //   if (filteredEvents.length > 0) {
  //     setSelectedDate(date);
  //     setSelectedDateEvents(filteredEvents);
  //     setOpenModal(true);
  //   } else {
  //     console.log("No events found for selectedSubCategory on this date.");
  //   }
  // };

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Margazhi Calendar 2025 | Super Chennai</title>
        <meta
          name="description"
          content="Explore Hidden Margazhi Sabhas in Chennai with an interactive calendar."
        />
      </Helmet>

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/maragazhi-calendar.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/maragazhi-calendar-m.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1></h1>
            <AutoShrinkText
              text=" Chennai’s Cultural Soul"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Chennai’s Cultural Soul</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Intro Content ================= */}
      <div
        className="visitIntroParaSection detailIntro"
        style={{ paddingBottom: "0" }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workIntro">
            <h1>Margazhi – Chennai’s Celebrated Cultural Season</h1>

            <p>
              Margazhi is a special time in Chennai when the city slows down and
              turns deeply cultural. Early mornings begin with misty air,
              devotional music, and streets decorated with beautiful kolams.
              Homes, temples, and sabhas come alive with tradition, devotion,
              and creativity.
            </p>
            <p>
              This season is best known for its Carnatic music and classical
              dance festivals, where renowned artists and young talents perform
              across the city. Sabhas host concerts, lecture demonstrations, and
              cultural discussions that attract audiences from all over India
              and the world.
            </p>

            <p>
              Temples hold special poojas, bhajans, and processions, creating a
              calm and spiritual atmosphere. The aroma of traditional foods,
              festive markets, and the soft rhythm of music fill the streets,
              making Margazhi a unique experience for both residents and
              visitors.
            </p>
            <p>
              Margazhi in Chennai is not just a festival—it is a feeling. A
              season that celebrates art, heritage, devotion, and the quiet
              beauty of everyday life.
            </p>

            <hr />
          </div>
        </div>
      </div>

      <section className="w-full py-16 bg-gradient-to-b from-[#faf7fb] to-white">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* Title */}
          <div className="workIntro">
            <h2 className=" themelink-color formheadingtheme text-center">
              Margazhi Festival Guide
            </h2>

            <p className="text-center text-sm text-gray-600 mb-10 italic">
              Note: Click on any{" "}
              <span className="font-semibold text-purple-700">
                Margazhi Sabha
              </span>{" "}
              to automatically filter and view its events in the calendar
              below.{" "}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white shadow-lg rounded-full p-2 flex gap-2">
              <button
                onClick={() => setActiveTab("sabha")}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition
                  ${
                    activeTab === "sabha"
                      ? "bg-[#a44294] text-white shadow"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                Margazhi Sabha
              </button>

              <button
                onClick={() => setActiveTab("canteen")}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition
                  ${
                    activeTab === "canteen"
                      ? "bg-[#a44294] text-white shadow"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                Foods & Canteen
              </button>
            </div>
          </div>

          {/* Cards */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (activeTab !== "sabha") return;
                  setSelectedSubCategory(item.title);

                  calendarRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="cursor-pointer group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-4"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl flex-shrink-0">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (activeTab !== "sabha") return;
                  setSelectedSubCategory(item.title);
                  calendarRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="cursor-pointer group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-4"
              >
                {/* Image / Icon */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">{item.subtitle}</p>

                  {/* ✅ Canteen-only fields */}
                  {/* {activeTab === "canteen" && (
                    <div className="mt-2 space-y-1 text-xs text-gray-500">
                      {item.timings && <p>TIMING {item.timings}</p>}
                      <p className="text-xs text-gray-500 mt-1">
                        AVAI DATE {formatDate(item.availDate.from)} –{" "}
                        {formatDate(item.availDate.to)}
                      </p>
                      {item.foodDetails && (
                        <p> FOOD DETAIL {item.foodDetails}</p>
                      )}
                      {item.sabhaName && <p>SABHA NAME {item.sabhaName}</p>}

                      <div className="flex items-center justify-between mt-1">
                        {item.place?.name ? (
                          <a
                            href={item.place.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-[#a44294] underline truncate max-w-[70%]"
                          >
                            📍 {item.place.name}
                          </a>
                        ) : (
                          <span />
                        )}

                        {item.otherDetails && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(item);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#a44294] hover:underline whitespace-nowrap"
                          >
                            View details →
                          </button>
                        )}
                      </div>
                    </div>
                  )} */}

                  {activeTab === "canteen" && (
                    <div className="mt-2 space-y-1 text-xs text-gray-600">
                      {item.timings && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Timing:
                          </span>{" "}
                          {item.timings}
                        </p>
                      )}

                      {(item.availDate?.from || item.availDate?.to) && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Date:
                          </span>{" "}
                          {formatDate(item.availDate.from)} –{" "}
                          {formatDate(item.availDate.to)}
                        </p>
                      )}

                      {item.foodDetails && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Food Details:
                          </span>{" "}
                          {item.foodDetails}
                        </p>
                      )}

                      {item.sabhaName && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Sabha Name:
                          </span>{" "}
                          {item.sabhaName}
                        </p>
                      )}

                      {/* Place + Details */}
                      <div className="flex items-center justify-between pt-1">
                        {item.place?.name ? (
                          <a
                            href={item.place.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs underline truncate max-w-[70%] text-[#a44294]"
                          >
                            {/* Location SVG */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 flex-shrink-0 text-[#a44294]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 6-7.5 10.5-7.5 10.5S4.5 16.5 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>

                            <span className="font-semibold text-gray-700">
                              Location:
                            </span>

                            <span className="font-medium truncate">
                              {item.place.name}
                            </span>
                          </a>
                        ) : (
                          <span />
                        )}

                        {item.otherDetails && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(item);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#a44294] hover:underline whitespace-nowrap"
                          >
                            View details →
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative shadow-xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-2">{selectedItem.title}</h2>

            {selectedItem.timings && (
              <p className="text-sm text-gray-600 mb-2">
                TIMING : {selectedItem.timings}
              </p>
            )}

            {selectedItem.place?.name && (
              <a
                href={selectedItem.place.mapUrl}
                target="_blank"
                className="text-sm text-[#a44294] underline mb-3 block"
              >
                📍 {selectedItem.place.name}
              </a>
            )}

            <div className="text-sm text-gray-700 space-y-2 max-h-64 overflow-y-auto">
              <div className="text-sm text-gray-700 space-y-2 max-h-64 overflow-y-auto">
                {selectedItem.otherDetails?.root?.children?.map((block, i) => (
                  <p key={i}>
                    {block.children?.map((child) => child.text).join("")}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= CALENDAR SECTION ================= */}

      {/* <section ref={calendarRef} className="relative py-16 overflow-hidden"> */}
      {activeTab === "sabha" && (
        <section ref={calendarRef} className="relative py-16 overflow-hidden">
          {/* ===== DEVOTIONAL BACKGROUND ===== */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(236, 72, 153, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 85% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 45%),
          radial-gradient(circle at 50% 85%, rgba(234, 179, 8, 0.12) 0%, transparent 50%),
          linear-gradient(180deg, #fff7ed, #fdf4ff)
        `,
            }}
          />

          {/* Soft sacred overlay */}
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>

          {/* ===== CONTENT ===== */}
          <div className="relative container max-w-7xl mx-auto px-4">
            <h2 className="text-center mb-4 text-purple-900 formheadingthemeCalendar">
              Hidden Gems Margazhi Sabhas
            </h2>

            <p className="text-center text-sm text-gray-600 mb-10 italic">
              Sacred dawns, soulful music & timeless traditions
            </p>
            {selectedSubCategory && (
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm">
                  🎵 Your selected: {selectedSubCategory}
                </span>
              </div>
            )}
            <div className="calendar-main-wrapper">
              <div className="calendar-center">
                <Calendar
                  onClickDay={onDateClick}
                  tileClassName={tileClassName}
                  tileContent={tileContent}
                  // minDate={new Date(2025, 11, 1)}
                  // maxDate={new Date(2025, 11, 31)}
                  defaultView="month"
                  showNeighboringMonth={false}
                />
              </div>
            </div>

            {/* ===== Calendar Legend ===== */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-purple-800"></span>
                <span>Event Day</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border border-purple-500 flex items-center justify-center text-[10px] font-bold text-purple-700">
                  2
                </span>
                <span>Number of Events</span>
              </div>

              <div className="flex items-center gap-2 italic text-gray-600">
                Click a highlighted date to view events
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= ADVANCED MODAL ================= */}
      {openModal && selectedDateEvents.length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative bg-white w-full max-w-6xl mx-4 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900">
              <h3 className="text-lg md:text-2xl font-semibold text-white tracking-wide">
                Events on{" "}
                {selectedDate &&
                  selectedDate.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
              </h3>

              <button
                onClick={closeModal}
                className="text-white text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedDateEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                  >
                    {/* Accent line */}
                    <span className="absolute left-0 top-5 h-10 w-1 rounded-r bg-purple-600"></span>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 pl-3">
                      {event.name}
                    </h4>

                    {/* Meta */}
                    <div className="text-xs text-purple-700 font-medium mb-3 pl-3">
                      {event.category}
                    </div>

                    {/* Info */}
                    <div className="space-y-1 text-sm text-gray-700 pl-3">
                      <p>
                        <span className="font-medium text-gray-900">Time:</span>{" "}
                        {event.time}
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">
                          Place:
                        </span>{" "}
                        {event.place}
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">
                          Artists:
                        </span>{" "}
                        {event.musicians}
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">
                          Organizer:
                        </span>{" "}
                        {event.organizer}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between pl-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                        Margazhi Festival
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
