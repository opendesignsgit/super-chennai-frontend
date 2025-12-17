
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style/calendar.css"; 
import "react-toastify/dist/ReactToastify.css";

export default function MargazhiPageCalendar() {
  /* ================= STATE ================= */
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const closeModal = () => {
    setSelectedDateEvents([]);
    setSelectedDate(null);
    setOpenModal(false);
  };

  /* ================= DATA ================= */

 const hiddenGemEvents = [
  {
    date: "2025-12-01",
    events: [
      {
        name: "Early Morning Nadaswaram",
        category: "Temple Music",
        time: "5:00 AM – 6:00 AM",
        place: "Parthasarathy Temple, Triplicane",
        musicians: "Temple Nadaswaram Vidwans",
        organizer: "Temple Committee",
      },
      {
        name: "Margazhi Kolam Walk",
        category: "Community Art",
        time: "6:00 AM – 7:00 AM",
        place: "Triplicane Streets",
        musicians: "—",
        organizer: "Local Residents",
      },
    ],
  },

  {
    date: "2025-12-16",
    events: [
      {
        name: "Temple Courtyard Concert",
        category: "Devotional Music",
        time: "5:00 AM – 6:30 AM",
        place: "Kapaleeshwarar Temple, Mylapore",
        musicians: "Local Oduvars & Artists",
        organizer: "Temple Committee",
      },
      {
        name: "Suprabhatam Recital",
        category: "Spiritual Chant",
        time: "6:45 AM – 7:30 AM",
        place: "Kapaleeshwarar Temple, Mylapore",
        musicians: "Temple Artists",
        organizer: "Temple Committee",
      },
    ],
  },

  {
    date: "2025-12-18",
    events: [
      {
        name: "Veena at Sunrise",
        category: "Instrumental Music",
        time: "6:15 AM – 7:15 AM",
        place: "Theosophical Society, Adyar",
        musicians: "Veena E. Gayathri (Students)",
        organizer: "Adyar Cultural Circle",
      },
    ],
  },

  {
    date: "2025-12-20",
    events: [
      {
        name: "Harikatha Kalakshepam",
        category: "Storytelling",
        time: "4:30 PM – 6:30 PM",
        place: "R.K. Math, Mylapore",
        musicians: "Sri Dushyanth Sridhar",
        organizer: "Ram Krishna Math",
      },
      {
        name: "Bhajan Sandhya",
        category: "Devotional Music",
        time: "6:45 PM – 8:00 PM",
        place: "R.K. Math, Mylapore",
        musicians: "Temple Bhajan Group",
        organizer: "RKM Chennai",
      },
    ],
  },

  {
    date: "2025-12-21",
    events: [
      {
        name: "Neighbourhood Kolam & Music",
        category: "Community Arts",
        time: "6:00 AM – 8:00 AM",
        place: "Mylapore Streets",
        musicians: "Young Local Artists",
        organizer: "Residents Association",
      },
    ],
  },

  {
    date: "2025-12-23",
    events: [
      {
        name: "Lecture Demonstration – Raga Bhava",
        category: "Lecture Demonstration",
        time: "4:00 PM – 5:30 PM",
        place: "Bharatiya Vidya Bhavan, Mylapore",
        musicians: "Vid. Sikkil Gurucharan",
        organizer: "BVB Chennai",
      },
    ],
  },

  {
    date: "2025-12-25",
    events: [
      {
        name: "Christmas Morning Choir",
        category: "Choral Music",
        time: "7:00 AM – 8:00 AM",
        place: "Santhome Basilica",
        musicians: "Church Choir",
        organizer: "Santhome Cathedral",
      },
      {
        name: "Fusion Carnatic Ensemble",
        category: "Fusion Music",
        time: "6:30 PM – 8:00 PM",
        place: "Alliance Française, Nungambakkam",
        musicians: "Young Fusion Artists",
        organizer: "Alliance Française",
      },
    ],
  },
];

  /* ================= CALENDAR HELPERS ================= */

 const tileClassName = ({ date }) => {
  const hasEvent = hiddenGemEvents.find(
    (item) => new Date(item.date).toDateString() === date.toDateString()
  );

  return hasEvent ? "event-day" : null;
};


  const tileContent = ({ date }) => {
    const dayData = hiddenGemEvents.find(
      (item) => new Date(item.date).toDateString() === date.toDateString()
    );

    if (!dayData) return null;

    return (
      <span className="event-badge">
        {dayData.events.length}
      </span>
    );
  };

  const onDateClick = (date) => {
    const dayEvents = hiddenGemEvents.find(
      (item) => new Date(item.date).toDateString() === date.toDateString()
    );

    if (dayEvents) {
      setSelectedDate(date);
      setSelectedDateEvents(dayEvents.events);
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

      {/* ================= BANNER ================= */}
      <section className="accaodomationBannerSection carquizbanner">
        <img
          src="/images/events/maragazhiMonth-banner.jpg"
          className="w-full"
          alt="Margazhi Banner"
        />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Margazhi Calendar 2025</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>Margazhi Calendar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALENDAR SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-purple-900">
            Hidden Gems: Margazhi Sabhas
          </h2>

          <div className="flex justify-center">
            <Calendar
              onClickDay={onDateClick}
              tileClassName={tileClassName}
              tileContent={tileContent}
              minDate={new Date(2025, 11, 1)}
              maxDate={new Date(2025, 11, 31)}
              defaultView="month"
              showNeighboringMonth={false}
            />
          </div>
        </div>
      </section>

      {/* ================= ADVANCED MODAL ================= */}
      {openModal && selectedDateEvents.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
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
