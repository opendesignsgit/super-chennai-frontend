import React from "react";
import { useState } from "react";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const partners = [
  { id: 1, name: "radiance", image: "/images/credai/Radiance Logo.webp" },
  { id: 2, image: "/images/credai/Rajaratnam Logo - RCPL.webp" },
  { id: 3, image: "/images/credai/Rajkam_Logo.webp" },
  { id: 4, image: "/images/credai/Rajparis Logo.webp" },
  { id: 5, image: "/images/credai/Ramy Wavoo Developer - RWD Logo.webp" },
  { id: 6, image: "/images/credai/Raunaq Logo - file.webp" },
  { id: 7, image: "/images/credai/RedBrick Logo.webp" },
  { id: 8, image: "/images/credai/Ruby Logo.webp" },
  { id: 9, image: "/images/credai/S&P logo Final with colour code.webp" },
  { id: 10, image: "/images/credai/Sameera_Logo.webp" },
  { id: 11, image: "/images/credai/Shriram LOGO NEW colored version.webp" },
  { id: 12, image: "/images/credai/Sidharth NEW LOGO.webp" },
  { id: 13, image: "/images/credai/silversky final logo.webp" },
  { id: 14, image: "/images/credai/South India Shelters - SIS NEW LOGO.webp" },
  {
    id: 15,
    image: "/images/credai/SPR INDIA BUILDING WITH PURPOSE_Horizontal1.webp",
  },
  { id: 16, image: "/images/credai/Sree Venkateswara Homes Logo.webp" },
  { id: 17, image: "/images/credai/Sreerosh-Properties-Logo.webp" },
  { id: 18, image: "/images/credai/Sri Lakshmi Homes Logo.webp" },

  { id: 19, image: "/images/credai/STEPSSTONE LOGO.webp" },
  { id: 20, image: "/images/credai/TRAVENTURE LOGO TM FINAL.webp" },
  { id: 21, image: "/images/credai/True Value Homes - TVH Logo.webp" },
  { id: 22, image: "/images/credai/Tulive Logo.webp" },
  { id: 23, image: "/images/credai/TVS Emerald logo.webp" },
  { id: 24, image: "/images/credai/Urban Tree_Logo.webp" },
  { id: 25, image: "/images/credai/urbando-new.webp" },
  {
    id: 26,
    image: "/images/credai/Urbanrise_WaterLeaves_Final_Full_sized.webp",
  },
  { id: 27, image: "/images/credai/VGK_Logo.webp" },
  { id: 28, image: "/images/credai/VGN LOGO.webp" },
  { id: 29, image: "/images/credai/vijayraja logo hi - res.webp" },
  { id: 30, image: "/images/credai/viva logo high res.webp" },
  { id: 31, image: "/images/credai/VNR_LOGO.webp" },
  { id: 32, image: "/images/credai/Voora Logo.webp" },
  { id: 33, image: "/images/credai/wisdom logo.webp" },
  { id: 34, image: "/images/credai/Adityaram-group.webp" },
  { id: 35, image: "/images/credai/AKB Logo - FInal.webp" },
  { id: 36, image: "/images/credai/ALAMO XS REAL.webp" },

  { id: 37, image: "/images/credai/alliance-group-logo.webp" },
  { id: 38, image: "/images/credai/Arihant-Logo-Main.webp" },
  { id: 39, image: "/images/credai/Arun Excello LOGO.webp" },
  { id: 40, image: "/images/credai/Ashok Nandavanam Logo.webp" },
  { id: 41, image: "/images/credai/Asset Tree.webp" },
  { id: 42, image: "/images/credai/BBCL LOGO.webp" },
  { id: 43, image: "/images/credai/Bhaggyam Logo New.webp" },
  { id: 44, image: "/images/credai/Brigade new logo 2025.webp" },
  { id: 45, image: "/images/credai/BSCPL.webp" },
  { id: 46, image: "/images/credai/CasaGrand Logo.webp" },
  { id: 47, image: "/images/credai/DAC Developers Pvt Ltd Logo.webp" },
  { id: 48, image: "/images/credai/Doshi housing only Logo.webp" },
  { id: 49, image: "/images/credai/DRA Logo - NEW.webp" },
  { id: 50, image: "/images/credai/EK HOMES LOGO.webp" },
  { id: 51, image: "/images/credai/Er Deva logo.webp" },
  { id: 52, image: "/images/credai/G square new logo.webp" },
  { id: 53, image: "/images/credai/gp logo.webp" },
  { id: 54, image: "/images/credai/GTK logo.webp" },

  { id: 55, image: "/images/credai/Harmony Logo.webp" },
  { id: 56, image: "/images/credai/Isha Homes Logo.webp" },
  { id: 57, image: "/images/credai/Iyra_LOGO.webp" },
  { id: 58, image: "/images/credai/Jain Logo.webp" },
  { id: 59, image: "/images/credai/JONES LOGO.webp" },
  { id: 60, image: "/images/credai/Kerry Estate - Altis logo.webp" },
  { id: 61, image: "/images/credai/KG  Logo.webp" },
  { id: 62, image: "/images/credai/KGEYES logo - Jan '24.webp" },
  { id: 63, image: "/images/credai/Kochar Homes new logo.webp" },
  { id: 64, image: "/images/credai/lancor logo.webp" },
  { id: 65, image: "/images/credai/Lifestyle Logo Full Black Vertical.webp" },
  { id: 66, image: "/images/credai/LML Homes LLP.webp" },
  { id: 67, image: "/images/credai/Mahindra_CMYK Logo.webp" },
  { id: 68, image: "/images/credai/Malles Logo.webp" },
  { id: 69, image: "/images/credai/Manju Groups Logo.webp" },
  { id: 70, image: "/images/credai/Marutham Group.webp" },
  { id: 71, image: "/images/credai/MP_developers logo.webp" },
  { id: 72, image: "/images/credai/Navin's Logo.webp" },

  { id: 73, image: "/images/credai/NCC Urban.webp" },
  { id: 74, image: "/images/credai/Nest Logo.webp" },
  { id: 75, image: "/images/credai/Newry Properties Logo.webp" },
  { id: 76, image: "/images/credai/Nova Logo.webp" },
  { id: 77, image: "/images/credai/Nu-Tech logo.webp" },
  { id: 78, image: "/images/credai/ocean logo.webp" },
  { id: 79, image: "/images/credai/Omshakthy logo.webp" },
  { id: 80, image: "/images/credai/Pacifica Logo.webp" },
  { id: 81, image: "/images/credai/Pragnya_EP_Logo.webp" },
  { id: 82, image: "/images/credai/Prestige Group_Master Logo_Light.webp" },
  { id: 83, image: "/images/credai/Puravankara Logo.webp" },
];

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
              }),
            ),
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

  const CREDAISCHEMA = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Credai Chennai Fairpro 2026",
    description:
      "Visit CREDAI Chennai Fairpro 2026 to explore 500+ properties from 80+ developers. Find homes, plots & villas with exclusive offers. Get your FREE VIP Pass now.",
    image:
      "https://demo.superchennai.com/api/media/file/CREDAI%20FAIRPRO%202026.jpeg",
    startDate: "2026-02-20T10:00",
    endDate: "2026-02-22T21:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Chennai Trade Centre",
      address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "Chennai",
        postalCode: "600089",
        addressCountry: "IN",
      },
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Credai Chennai",
    },
    offers: {
      "@type": "Offer",
      name: "Credai Chennai Fairpro 2026",
      price: "0",
      priceCurrency: "INR",
      validFrom: "2026-02-07",
      url: "https://credai.eventink.in/register.html",
      availability: "https://schema.org/InStock",
    },
  };

  const KarthicSinkerEvent = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Karthik Live",
      description:
        "This music concert in Chennai features Karthik’s multi-language hits, soulful melodies, and vibrant stage energy, creating a memorable live experience for every listener.",
      image:
        "https://demo.superchennai.com/api/media/file/Karthik%20Live%20-%20Chennai.jpg",
      startDate: "2026-02-28T19:30",
      endDate: "2026-02-28T21:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "YMCA Ground",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nandanam",
          addressLocality: "Chennai",
          postalCode: "600035",
          addressCountry: "IN",
        },
      },
      performer: {
        "@type": "MusicGroup",
        name: "Karthik",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Events in Chennai",
          item: "https://www.superchennai.com/chennai-events",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Karthik Live",
          item: "https://www.superchennai.com/events-in-chennai/music-concert-karthik-live",
        },
      ],
    },
  ];

  const HipPOmAdhi = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Hip Hop Tamizha Aadhi's ROTDM - The Home Coming Finale | Chennai",
    description:
      "Witness the hip hop tamizha concert in Chennai as Aadhi Live Finale closes the ROTDM world tour with electrifying hits, hometown energy, and a grand stage spectacle.",
    image: "https://demo.superchennai.com/api/media/file/Hiphop%20Thamzhia.jpg",
    startDate: "2026-03-07T18:30",
    endDate: "2026-03-07T21:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "YMCA Ground",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nandanam",
        addressLocality: "Chennai",
        postalCode: "600035",
        addressCountry: "IN",
      },
    },
    performer: {
      "@type": "MusicGroup",
      name: "Hip Hop Tamizha Aadhi",
    },
  };

  const GVMSCHEMA = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Oru Oorile Oru GVM – Live at Victoria Public Hall",
    description:
      "An exclusive live evening inspired by Gautham Vasudev Menon at Victoria Public Hall, blending music, storytelling, and cinematic moments in Chennai.",
    image:
      "https://demo.superchennai.com/api/media/file/Oru%20Oorille%20our%20GVM.%20jpg",
    startDate: "2026-02-15T18:00",
    endDate: "2026-02-15T19:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Victoria Public Hall",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Evr Salai, Park Town",
        addressLocality: "chennai",
        postalCode: "600003",
        addressCountry: "IN",
      },
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Gautham Vasudev Menon",
    },
  };

  const jarnaEdition = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Jharna Edition 5 - A Festival of Arts (In-Person & Online)",
      description:
        "Experience Jharna Edition 5, a classical dance festival in Chennai showcasing emerging Bharatanatyam talent, creative performances, and global virtual access.",
      image:
        "https://demo.superchennai.com/api/media/file/blog-img1.jpg%20(1).jpeg",
      startDate: "2026-02-21T19:00",
      endDate: "2026-03-14T21:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "The TEACH Auditorium The Spastics Society of Tamilnadu",
        address: {
          "@type": "PostalAddress",
          streetAddress: "CSIR Road, Taramani",
          addressLocality: "Chennai",
          postalCode: "600113",
          addressCountry: "IN",
        },
      },
      performer: {
        "@type": "PerformingGroup",
        name: "",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Events In chennai",
          item: "https://www.superchennai.com/chennai-events",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jharna Edition 5 - A Festival of Arts (In-Person & Online)",
          item: "https://www.superchennai.com/events-in-chennai/jharna-5-bharatanatyam-classical-dance-festival",
        },
      ],
    },
  ];


  // ######## SCROLLER FOR PARTNER SETTINGS############  TEMPORRY SCROLL

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );
  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
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

        {slug === "credai-chennai-fairpro-2026" && (
          <script type="application/ld+json">
            {JSON.stringify(CREDAISCHEMA)}
          </script>
        )}

        {slug === "music-concert-karthik-live" && (
          <script type="application/ld+json">
            {JSON.stringify(KarthicSinkerEvent)}
          </script>
        )}

        {slug === "hip-hop-tamizha-concert-chennai-aadhi-finale-live" && (
          <script type="application/ld+json">
            {JSON.stringify(HipPOmAdhi)}
          </script>
        )}

        {slug === "autham-vasudev-menon-live-chennai-event" && (
          <script type="application/ld+json">
            {JSON.stringify(GVMSCHEMA)}
          </script>
        )}

        {slug === "jharna-5-bharatanatyam-classical-dance-festival" && (
          <script type="application/ld+json">
            {JSON.stringify(jarnaEdition)}
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
                    <button className="bg-pink-600 hover:bg-pink-700 text-white cursor-pointer px-4 py-2 rounded-lg font-medium transition capitalize">
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

      {/*============= PARTNERS ================ */}
      {slug === "credai-chennai-fairpro-2026" && (
        <div className="NewsLetterPage ">
          <div className="exploreSldierBg">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="exploreMoreSectionContent">
                <h4>Our Participants</h4>
              </div>

              <div className="exploreSldierSection">
                <Slider {...settings}>
                  {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer px-2 flex justify-center items-center"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden w-full h-[200px] flex justify-center items-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* {partners.map((card) => (
                    <div
                      key={card.id}
                      className="ExplorePageSliderImage cursor-pointer px-2 flex justify-center items-center"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden w-full h-[200px] flex justify-center items-center">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  ))} */}
              </div>
            </div>
          </div>
        </div>
      )}
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
