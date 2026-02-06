import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEventBySlug } from "./Hooks/UseEvents";
import { API_BASE_URL } from "../../../config";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";
import { PropertyContent } from "../../Pages/Properties/Components/Properties/ritchText";
import { formatEventTime } from "./Utils/formatTime";
import FormattedEventDates from "./Utils/dateFormatter";
import EventDetailpageSkeleton from "./Components/Loader/DetailpageSkelton";
import NotFound from "../GlobalComponents/NotFound";
export default function EventsDetails() {
  const { slug } = useParams();
  const { event, loading } = useEventBySlug(slug);
  const API_URL = `${API_BASE_URL}`;
  const [showDatesModal, setShowDatesModal] = React.useState(false);


  if (loading) {
    return <EventDetailpageSkeleton />;
  }

  if (!event) {
    return (
      <NotFound
        title="Event Not Found"
        message="The event you are looking for might have been removed, canceled, or the link is incorrect. Please check other events or return to the homepage."
        redirect="/chennai-events"
        redirectLabel="Browse Events"
      />
    );
  }

  const main = event.event || {};
  const meta = event.meta || {};

  const {
    title,
    description,
    image,
    singerName,
    artistDesignation,
    performerRole,
    eventDates,
    link,
    address,
    details,
    eventsCategory,
  } = main;

  const locationLabel = details?.location?.label || null;
  const ageLimit = details?.ageLimit || null;
  const languages = details?.language?.length
    ? details.language.join(", ")
    : null;
  const genre = details?.genre || null;
  const duration = details?.duration || null;
  const eventTime = details?.eventTime || null;
  const isFree = details?.isFree ? "Free Entry" : null;
  const familyFriendly = details?.familyFriendly ? "Family Friendly" : null;
  const categories =
    eventsCategory?.map((c) => c.title?.trim()).join(", ") || "General";

  const imageUrl = image?.url
    ? `${API_URL}${image.url}`
    : "/images/no-image.jpg";

  const formattedDate = Array.isArray(eventDates)
    ? [
        ...new Set(
          eventDates
            .map((d) => d.date)
            .sort((a, b) => new Date(a) - new Date(b))
            .map((date) =>
              new Date(date).toLocaleString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            )
        ),
      ].join(" | ")
    : null;

  const metaTitle = meta?.title || title || "Event Details";
  const metaDescription =
    meta?.description || description || "Event happening in Chennai";

  function DatesModal({ open, onClose, dates }) {
    if (!open) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
        <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md">
          <h3 className="text-lg font-semibold mb-3">Event Dates</h3>
          <div className="max-h-[300px] overflow-y-auto space-y-2">
            {dates.map((d, i) => (
              <p key={i} className="text-gray-700 text-sm border-b pb-1">
                {new Date(d.date).toLocaleString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full bg-[#a44294] text-white mt-4 py-2 rounded-lg font-medium hover:bg-[#701c67]"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

   const ARahumanWEBSchema = {
     "@context": "https://schema.org",
     "@type": "Event",
     name: "The Wonderment Tour AR Rahman Live in Chennai",
     description: "AR Rahman Concert",
     image:
       "https://demo.superchennai.com/api/media/file/The%20Wonderment%20Tour%20A.R.Rahman%20Live%20in%20Chennai.jpg",
     startDate: "2026-02-14T18:30",
     endDate: "2026-02-14T21:45",
     eventStatus: "https://schema.org/EventScheduled",
     eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
     location: {
       "@type": "Place",
       name: "Jawaharlal Nehru Stadium",
       address: {
         "@type": "PostalAddress",
         streetAddress: "",
         addressLocality: "Chennai",
         postalCode: "600003",
         addressCountry: "IN",
       },
     },
     performer: {
       "@type": "MusicGroup",
       name: "AR Rahman",
     },
   };


  return (
    <>
      <Helmet>
        <title>{metaTitle || title || "Event Details"}</title>
        <meta
          name="description"
          content={metaDescription || "Event in Chennai"}
        />
        <link rel="canonical" href={window.location.href} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}

        {slug === "music-concert-ar-rahman-wonderment" && (
          <script type="application/ld+json">
            {JSON.stringify(ARahumanWEBSchema)}
          </script>
        )}
        
      </Helmet>

      <section className="accaodomationBannerSection">
        <div>
          <img
            className="w-full h-[400px] object-cover"
            src={imageUrl}
            alt=""
          />{" "}
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText z-10">
            <AutoShrinkText
              text={title || "Super Chennai Events"}
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />
            <div className="breadCrum z-10">
              <Link to="/">Home</Link> -{" "}
              <Link to="/chennai-events">Events</Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#6a1b5a]/90 via-[#4a1440]/85 to-[#3a1033]/95"></div>
      </section>

      <section className="EventsBanSec py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="EventContBox flex flex-col lg:flex-row gap-8">
            {/* LEFT SIDE */}
            <div className="EventLeft flex-1">
              <h2>{title}</h2>

              {(singerName || artistDesignation) && (
                <p className="text-pink-700 text-sm mb-2">
                  {singerName} {artistDesignation && `– ${artistDesignation}`}
                </p>
              )}

              <div className="EventBanImg mb-6">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>

              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories && (
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-md text-sm font-medium">
                    {categories}
                  </span>
                )}
                {isFree && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                    {isFree}
                  </span>
                )}
                {familyFriendly && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
                    {familyFriendly}
                  </span>
                )}
              </div>

              {/* About Section */}
              <div className="EventContBox mb-10">
                <h3 className="text-lg font mb-2">About The Event</h3>
                <div className="text-gray-700 text-sm">
                  <PropertyContent content={event.content || ""} />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="EventRight w-full lg:w-[320px] bg-white rounded-lg shadow p-5 h-max">
              <h4 className="text-lg font-semibold mb-3">Event Details</h4>
              <div className="space-y-3">
                {Array.isArray(eventDates) && eventDates.length > 0 && (
                  <>
                    <InfoRow
                      icon="/images/events/calendar.png"
                      label={new Date(eventDates[0].date).toLocaleString(
                        "en-IN",
                        {
                          weekday: "long",
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    />

                    {eventDates.length > 1 && (
                      <button
                        onClick={() => setShowDatesModal(true)}
                        className="text-sm text-[#a44294] underline ml-8"
                      >
                        View More Dates ({eventDates.length - 1} more)
                      </button>
                    )}
                  </>
                )}

                <DatesModal
                  open={showDatesModal}
                  onClose={() => setShowDatesModal(false)}
                  dates={eventDates}
                />

                {eventTime && (
                  <InfoRow
                    icon="/images/events/time.png"
                    label={formatEventTime(eventTime)}
                  />
                )}

                {duration && (
                  <InfoRow
                    icon="/images/events/duration.png"
                    label={`Duration: ${duration}`}
                  />
                )}
                {ageLimit && (
                  <InfoRow
                    icon="/images/events/age_limit.png"
                    label={`Age Limit: ${ageLimit}`}
                  />
                )}
                {languages && (
                  <InfoRow
                    icon="/images/events/language.png"
                    label={`Languages: ${languages}`}
                  />
                )}
                {genre && (
                  <InfoRow icon="/images/events/genre.png" label={genre} />
                )}
                {/* {performerRole && (
                  <InfoRow
                    icon="/images/events/performer.png"
                    label={`Role: ${performerRole}`}
                  />
                )} */}
                {locationLabel && (
                  <InfoRow
                    icon="/images/events/location.png"
                    label={locationLabel}
                  />
                )}
                {/* {address && (
                  <InfoRow
                    icon="/images/events/location.png"
                    label={`Address: ${address}`}
                  />
                )} */}
              </div>

              {/* External Link */}
              {link && (
                <div className="flex justify-center mt-6">
                  <a href={link}>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition capitalize">
                      {" "}
                      {main.linkbutton?.trim() || "View More"}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* 🟣 Reusable InfoRow Component */
function InfoRow({ icon, label }) {
  if (!label) return null;
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
      <img src={icon} alt="" className="w-5 h-5 object-contain" />
      <p className="text-gray-700 text-sm">{label}</p>
    </div>
  );
}
