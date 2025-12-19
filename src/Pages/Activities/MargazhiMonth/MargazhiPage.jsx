import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style/calendar.css";
import "react-toastify/dist/ReactToastify.css";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";

export default function MargazhiPageCalendar() {
  /* ================= STATE ================= */
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  // const closeModal = () => {
  //   setSelectedDateEvents([]);
  //   setSelectedDate(null);
  //   setOpenModal(false);
  // };
  const closeModal = () => {
  setSelectedDateEvents([]);
  setSelectedDate(null);
  setActiveTab("All");
  setOpenModal(false);
};

const filteredEvents =
  activeTab === "All"
    ? selectedDateEvents
    : selectedDateEvents.filter(
        (event) => event.organizer === activeTab
      );

  /* ================= DATA ================= */

  const sabhaTabs = [
    "All",
    "The Music Academy",
    "Krishna Gana Sabha",
    "Narada Gana Sabha",
    "Mylapore Fine Arts Club",
    "Sri Parthasarathy Swami Sabha",
    "Bharatiya Vidya Bhavan (Mini Hall)",
  ];

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


         {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
          name: "Suprabhatam Recital",
          category: "Spiritual Chant",
          time: "6:45 AM – 7:30 AM",
          place: "Kapaleeshwarar Temple, Mylapore",
          musicians: "Temple Artists",
          organizer: "Temple Committee",
        }, {
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

    return <span className="event-badge">{dayData.events.length}</span>;
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

      {/* ===== SABHA TABS ===== */}
<div className="mb-6 flex flex-wrap gap-3">
  {sabhaTabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition
        ${
          activeTab === tab
            ? "bg-purple-700 text-white shadow"
            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
        }`}
    >
      {tab}
    </button>
  ))}
</div>


      {/* ================= CALENDAR SECTION ================= */}

      <section className="relative py-16 overflow-hidden">
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
