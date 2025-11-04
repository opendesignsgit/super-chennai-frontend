import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEventBySlug } from "./Hooks/UseEvents";
import { API_BASE_URL } from "../../../config";
import AutoShrinkText from "../../Components/Text/AutoShrinkText"
import { PropertyContent } from "../../Pages/Properties/Components/Properties/ritchText";

export default function EventsDetails() {
  const { slug } = useParams();
  const { event, loading } = useEventBySlug(slug);
const API_URL = `${API_BASE_URL}`;

  console.log("EventData:", event);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-gray-600">
        Loading event details...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-gray-600">
        Event not found.
      </div>
    );
  }

  // ✅ Handle nested data safely
  const main = event.event || {};

  const {
    title,
    description,
    image,
    singerName,
    artistDesignation,
    performerRole,
    eventDate,
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
  const isFree = details?.isFree ? "Free Entry" : null;
  const familyFriendly = details?.familyFriendly ? "Family Friendly" : null;
  const categories =
    eventsCategory?.map((c) => c.title?.trim()).join(", ") || "General";

  const imageUrl = image?.url
    ? `${API_URL}${image.url}`
    : "/images/no-image.jpg";

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <>
      {/* 🧠 Meta SEO */}
      <Helmet>
        <title>{title || "Event Details"}</title>
        <meta name="description" content={description || "Event in Chennai"} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* 🟣 Banner Section */}

      <section className="accaodomationBannerSection">
        <div>
          <img
            className="w-full h-[300px] object-cover"
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
              <Link to="/">Home</Link> - <Link to="/events">Events</Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#6a1b5a]/90 via-[#4a1440]/85 to-[#3a1033]/95"></div>
      </section>

      {/* 🟣 Event Details Section */}
      <section className="EventsBanSec py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="EventContBox flex flex-col lg:flex-row gap-8">
            {/* LEFT SIDE */}
            <div className="EventLeft flex-1">
              <h1>{title}</h1>

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
                <h3 className="text-lg font-semibold mb-2">About The Event</h3>              
                <div className="text-gray-500 text-sm">
                  <PropertyContent content={event.content || ""} />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="EventRight w-full lg:w-[320px] bg-white rounded-lg shadow p-5 h-max">
              <h4 className="text-lg font-semibold mb-3">Event Details</h4>
              <div className="space-y-3">
                {formattedDate && (
                  <InfoRow
                    icon="/images/events/calendar.png"
                    label={formattedDate}
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
                {address && (
                  <InfoRow
                    icon="/images/events/location.png"
                    label={`Address: ${address}`}
                  />
                )}
              </div>

              {/* External Link */}
              {link && (
                <div className="flex justify-center mt-6">
                  <a href={link}>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition">
                      View More
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
