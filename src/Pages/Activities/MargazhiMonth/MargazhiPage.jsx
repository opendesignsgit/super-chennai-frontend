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
          console.log("allEvents", allEvents);

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
      } catch (err) {
        console.error("Organizer fetch failed", err);
      }
    };

    fetchOrganizers();
  }, []);

  useEffect(() => {
    const fetchCanteenCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/sabhaFoods`);

        const json = await res.json();

        const categories = (json?.docs || []).map((item) => ({
          title: item.title,
          subtitle: item.subtitle || "",
          icon: item.icon || "🍘",
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


  const formatDate = (date) => {
    if (!date) return null;

    const d = new Date(date);

    if (isNaN(d.getTime())) {
      console.warn("Invalid date from API:", date);
      return null;
    }

    return d.toISOString().split("T")[0];
  };
  const tileClassName = ({ date }) => {
    const hasEvent = hiddenGemEvents.find((item) =>
      item.events.some(
        (event) =>
          formatDate(item.date) === formatDate(date) &&
          (!selectedSubCategory || event.organizer === selectedSubCategory)
      )
    );

    return hasEvent ? "event-day" : null;
  };
  const tileContent = ({ date }) => {
    const dayData = hiddenGemEvents.find(
      (item) => formatDate(item.date) === formatDate(date)
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
    const dayEvents = hiddenGemEvents.find(
      (item) => formatDate(item.date) === formatDate(date)
    );

    if (!dayEvents) return;

    const filteredEvents = selectedSubCategory
      ? dayEvents.events.filter(
          (event) => event.organizer === selectedSubCategory
        )
      : dayEvents.events;

    if (filteredEvents.length > 0) {
      setSelectedDate(date);
      setSelectedDateEvents(filteredEvents);
      setOpenModal(true);
    }
  };

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
              text="Margazhi Moments – Photography Contest 2025"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="">Margazhi Moments – Photography Contest 2025</Link>
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
            <h1>Margazhi Moments – Photography Contest 2025</h1>

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
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#7b1f6a] mb-10">
            Margazhi Festival Guide
          </h2>

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
                className="cursor-pointer group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="w-10 h-1 bg-[#a44294] rounded-full opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

            <div className="flex justify-center">
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
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-6xl mx-4 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-purple-700 to-purple-900">
              <h3 className="text-xl md:text-2xl font-bold text-white">
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
                className="text-white text-2xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedDateEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-purple-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Title */}
                    <h4 className="text-lg font-bold text-purple-800 mb-3 group-hover:text-purple-900">
                      {event.name}
                    </h4>

                    {/* Info */}
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold text-gray-900">
                          Category:
                        </span>{" "}
                        {event.category}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          Time:
                        </span>{" "}
                        {event.time}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          Place:
                        </span>{" "}
                        {event.place}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          Artists:
                        </span>{" "}
                        {event.musicians}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          Organizer:
                        </span>{" "}
                        {event.organizer}
                      </p>
                    </div>

                    {/* Footer Badge */}
                    <div className="mt-4 flex justify-end">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                        Margazhi Event
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
