
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../config";
import { Link, useLocation, useParams } from "react-router-dom";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";

// ==========================================
// HELPER COMPONENTS
// ==========================================

const ArrowButton = ({ direction, onClick, ariaLabel }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex items-center justify-center w-12 h-12 rounded-full border border-stone-300 bg-white text-stone-800 transition-all duration-300 hover:bg-[#A34493] hover:text-white hover:border-[#A34493] active:scale-95 shadow-sm"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
};

const TrendCard = ({ item }) => {
  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex-shrink-0 w-[290px] sm:w-[340px]">
      <div className="relative h-56 w-full overflow-hidden bg-stone-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        <span className="absolute top-4 left-4 bg-[#8B3C82]/90 backdrop-blur-md text-white text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full shadow-sm">
          {item.category}
        </span>

        {item.date?.day && (
          <div className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-md text-stone-900 rounded-xl px-3 py-1.5 text-center shadow-md border border-white/40">
            <span className="block text-lg font-bold leading-none text-[#A34493]">
              {item.date.day}
            </span>
            <span className="block text-[10px] font-semibold tracking-wider text-stone-500 uppercase">
              {item.date.month}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight leading-snug line-clamp-2 group-hover:text-[#A34493] transition-colors duration-200">
            {item.title}
          </h3>
          <div className="mt-3 flex items-center text-sm text-stone-500">
            <svg
              className="w-4 h-4 mr-1.5 text-[#A34493] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">{item.location}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
          <a
            href={`/whats-up-chennai/${item.slug}`}
            className="text-sm font-semibold text-[#A34493] flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
          >
            VIEW DETAILS
            <span className="text-base leading-none">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  );
};

const TrendsSection = ({ trends }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!trends || trends.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#8B3C82] uppercase mb-1 block">
            What's Happening Nearby
          </span>
          <h2 className="sm:text-5xl font-normal tracking-wide text-stone-900 font-['New_Amsterdam'] uppercase blog-h2 text-4xl">
            OTHER TRENDS THIS WEEK
          </h2>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <ArrowButton
            direction="left"
            onClick={() => handleScroll("left")}
            ariaLabel="Previous Trends"
          />
          <ArrowButton
            direction="right"
            onClick={() => handleScroll("right")}
            ariaLabel="Next Trends"
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {trends.map((item) => (
          <div key={item.id} className="snap-start">
            <TrendCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// EVENT DETAILS QUICK INFO SECTION
// ==========================================

const EventQuickDetailsSection = ({ details }) => {
  if (!details) return null;

  // Destructure with fallbacks for key variations (language/languages, familyFriendly/isFamilyFriendly)
  const {
    duration,
    eventTime,
    ageLimit,
    language,
    languages,
    location,
    isFree,
    familyFriendly,
    isFamilyFriendly,
    eventDates,
  } = details;

  // Resolve keys safely
  const resolvedLanguages = language || languages;
  const resolvedFamilyFriendly =
    familyFriendly !== undefined ? familyFriendly : isFamilyFriendly;

  // Helper: Format Time (e.g., "1:00 PM")
  const formatTime = (timeStr) => {
    if (!timeStr) return null;
    const date = new Date(timeStr);
    return isNaN(date.getTime())
      ? timeStr
      : date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
  };

  // Helper: Format Dates Array -> "Aug 12, Aug 19, Sep 03, 2026"
  const formatDateList = (dates) => {
    if (!dates) return null;

    // Handle Array of Objects: [{ date: "..." }, ...]
    if (Array.isArray(dates) && dates.length > 0) {
      const formattedDates = dates
        .map((item) => {
          const rawDate = typeof item === "string" ? item : item?.date;
          if (!rawDate) return null;
          const d = new Date(rawDate);
          return isNaN(d.getTime())
            ? null
            : d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        })
        .filter(Boolean);

      if (formattedDates.length === 0) return null;

      // Extract Year from the first date entry
      const firstRawDate = typeof dates[0] === "string" ? dates[0] : dates[0]?.date;
      const year = firstRawDate ? new Date(firstRawDate).getFullYear() : "";

      return `${formattedDates.join(", ")}${year ? ` ${year}` : ""}`;
    }

    // Single Date String Fallback
    if (typeof dates === "string") {
      const d = new Date(dates);
      return isNaN(d.getTime())
        ? dates
        : d.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
    }

    return null;
  };

  const parsedTime = formatTime(eventTime);
  const parsedDates = formatDateList(eventDates);
  const parsedLanguages = Array.isArray(resolvedLanguages)
    ? resolvedLanguages
        .map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1))
        .join(", ")
    : resolvedLanguages;

  const locationLabel =
    location?.label ||
    location?.locality ||
    location?.city ||
    (typeof location === "string" ? location : null);

  // Safeguard: Check if at least one value exists
  const hasValidData =
    duration ||
    parsedTime ||
    ageLimit ||
    parsedLanguages ||
    locationLabel ||
    parsedDates ||
    isFree !== undefined ||
    resolvedFamilyFriendly !== undefined;

  if (!hasValidData) return null;

  return (
    <section className="bg-stone-50 border border-stone-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 my-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-widest text-[#8B3C82] uppercase block mb-1">
          At a Glance
        </span>
        <h3 className="text-2xl sm:text-3xl font-normal tracking-wide text-stone-900 font-['New_Amsterdam'] uppercase blog-h1">
          EVENT HIGHLIGHTS & DETAILS
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Dates */}
        {parsedDates && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Event Dates</span>
              <span className="text-sm font-semibold text-stone-800">{parsedDates}</span>
            </div>
          </div>
        )}

        {/* Time */}
        {parsedTime && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Event Time</span>
              <span className="text-sm font-semibold text-stone-800">{parsedTime}</span>
            </div>
          </div>
        )}

        {/* Duration */}
        {duration && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Duration</span>
              <span className="text-sm font-semibold text-stone-800">{duration} Hours</span>
            </div>
          </div>
        )}

        {/* Location */}
        {locationLabel && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Location</span>
              <span className="text-sm font-semibold text-stone-800">{locationLabel}</span>
            </div>
          </div>
        )}

        {/* Languages */}
        {parsedLanguages && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1 14l6-6m0 0l6 6m-6-6v12" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Languages</span>
              <span className="text-sm font-semibold text-stone-800 capitalize">{parsedLanguages}</span>
            </div>
          </div>
        )}

        {/* Age Limit */}
        {ageLimit && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Minimum Age</span>
              <span className="text-sm font-semibold text-stone-800">{ageLimit}+ Years</span>
            </div>
          </div>
        )}

      
        {/* {isFree !== undefined && isFree !== null && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Entry Fee</span>
              <span className="text-sm font-semibold text-stone-800">{isFree ? "Free Entry" : "Paid Entry"}</span>
            </div>
          </div>
        )} 
        {resolvedFamilyFriendly !== undefined && resolvedFamilyFriendly !== null && (
          <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">Audience</span>
              <span className="text-sm font-semibold text-stone-800">{resolvedFamilyFriendly ? "Family Friendly" : "General Audience"}</span>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

/* ---------------------------------------------
   Lexical Helpers
--------------------------------------------- */
const FORMAT = {
  BOLD: 1,
  ITALIC: 1 << 3,
  UNDERLINE: 1 << 1,
};

const renderTextChildren = (children, allowFormatting = true) => {
  if (!Array.isArray(children)) return null;

  return children.map((child, i) => {
    if (child.type === "text") {
      let el = child.text;

      if (allowFormatting) {
        if (child.format & FORMAT.BOLD) el = <strong>{el}</strong>;
        if (child.format & FORMAT.ITALIC) el = <em>{el}</em>;
        if (child.format & FORMAT.UNDERLINE) el = <u>{el}</u>;
      }

      return <span key={i}>{el}</span>;
    }

    if (child.type === "link") {
      if (!allowFormatting) {
        return <span key={i}>{renderTextChildren(child.children, false)}</span>;
      }

      return (
        <a
          key={i}
          href={child.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-[#A34493] underline"
        >
          {renderTextChildren(child.children, true)}
        </a>
      );
    }

    if (child.type === "linebreak") return <br key={i} />;

    if (child.children) {
      return (
        <span key={i}>
          {renderTextChildren(child.children, allowFormatting)}
        </span>
      );
    }

    return null;
  });
};

const parseLexical = (content) => {
  if (!content?.root?.children) return null;

  const headingClasses = {
    h1: "blog-h1",
    h2: "blog-h2",
    h3: "blog-h3",
    h4: "blog-h4",
    h5: "blog-h5",
    h6: "blog-h6",
  };

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={idx} className="mb-5 text-base text-gray-700 leading-relaxed">
            {renderTextChildren(node.children)}
          </p>
        );

      case "heading": {
        const Tag = node.tag || "h2";
        return (
          <Tag key={idx} className={headingClasses[Tag] || "blog-h2"}>
            {renderTextChildren(node.children)}
          </Tag>
        );
      }
      case "block": {
        const blockType = node.fields?.blockType;

        if (blockType === "aboutTrending") {
          const fields = node.fields;
          const image = fields?.imageGroup?.image;
          const paragraphs = fields?.paragraphs || [];
          const cta = fields?.cta;

          return (
            <section
              key={idx}
              className="bg-stone-50 border border-stone-200/70 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden my-12"
            >
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A34493]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7 flex flex-col items-start">
                  {fields?.badgeText && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A34493]/10 border border-[#A34493]/20 text-[#8B3C82] text-xs font-semibold tracking-widest uppercase mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A34493]" />
                      {fields.badgeText}
                    </div>
                  )}

                  {fields?.heading && (
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide text-stone-900 font-['New_Amsterdam'] uppercase leading-tight mb-2">
                      {fields.heading}
                    </h2>
                  )}

                  <div className="w-16 h-1 bg-[#A34493] rounded-full mb-6" />

                  <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                    {paragraphs.map((item, paragraphIndex) => (
                      <p key={item.id || paragraphIndex}>{item.text}</p>
                    ))}
                  </div>

                  {fields?.quote && (
                    <blockquote className="my-6 pl-4 border-l-2 border-[#A34493] text-stone-900 font-medium italic text-lg sm:text-xl">
                      "{fields.quote}"
                    </blockquote>
                  )}

                  {cta?.url && (
                    <a
                      href={cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center gap-3 bg-[#A34493] hover:bg-[#8B3C82] !text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 group"
                    >
                      <span className="text-white">
                        {cta.label || "EXPLORE EXPERIENCES"}
                      </span>
                      <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </a>
                  )}
                </div>

                {image?.url && (
                  <div className="lg:col-span-5 w-full h-[360px] sm:h-[460px] lg:h-[500px]">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-stone-200">
                      <img
                        src={`${API_BASE_URL}${image.url}`}
                        alt={image.alt || fields?.heading || "About Trending"}
                        className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                      {fields?.imageGroup?.caption && (
                        <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/50 text-stone-800 text-xs sm:text-sm font-medium">
                          📍 {fields.imageGroup.caption}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        }

        return null;
      }
      default:
        return null;
    }
  });
};

// ==========================================
// MAIN PAGE LAYOUT CONTAINER
// ==========================================
export default function WhatsUpChennaiDetailPage() {
  const [WhatsApp, setWhatsApp] = useState(null);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  const currentSlug = slug || "test";

  useEffect(() => {
    const fetchWhatsApp = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${API_BASE_URL}/api/whats-ap-chennai?limit=0`,
        );

        const docs = res.data?.docs || [];

        const found = docs.find((item) => String(item.slug) === currentSlug);

        if (found) {
          setWhatsApp({
            id: found.id,
            title: found.title,
            content: found.content,
            publishedAt: found.publishedAt,
            metadescription: found.meta?.description,
            metatitle: found.meta?.title,
            metaImage: found.meta?.image?.url || null,
            heroImage:
              found.heroImage?.sizes?.xlarge?.url ||
              found.heroImage?.url ||
              null,
            details: found.details || null,
          });
        } else {
          setWhatsApp(null);
        }

        // const formattedTrends = docs.map((doc) => {
        //   const rawDate = doc.details?.eventTime || doc.publishedAt;
        //   const dateObj = rawDate ? new Date(rawDate) : null;

        //   const day = dateObj
        //     ? String(dateObj.getDate()).padStart(2, "0")
        //     : "15";
        //   const month = dateObj
        //     ? dateObj.toLocaleString("en-US", { month: "short" }).toUpperCase()
        //     : "OCT";

        //   const imgUrl =
        //     doc.FeaturedImage?.url ||
        //     doc.heroImage?.url ||
        //     doc.FeaturedImage?.sizes?.small?.url ||
        //     "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80";

        //   return {
        //     id: doc.id,
        //     slug: doc.slug,
        //     title: doc.title,
        //     category: doc.details?.isFree ? "Free Event" : "Event",
        //     date: { day, month },
        //     location: doc.details?.location?.label || "Chennai",
        //     image: imgUrl.startsWith("http")
        //       ? imgUrl
        //       : `${API_BASE_URL}${imgUrl}`,
        //   };
        // });

        // useEffect உள்ளே:
        const formattedTrends = docs
          .filter((doc) => String(doc.slug) !== currentSlug) // 👈 தற்போதைய பக்கத்தின் Card-ஐ நீக்குகிறது
          .map((doc) => {
            const rawDate = doc.details?.eventTime || doc.publishedAt;
            const dateObj = rawDate ? new Date(rawDate) : null;

            const day = dateObj
              ? String(dateObj.getDate()).padStart(2, "0")
              : "15";
            const month = dateObj
              ? dateObj
                  .toLocaleString("en-US", { month: "short" })
                  .toUpperCase()
              : "OCT";

            const imgUrl =
              doc.FeaturedImage?.url ||
              doc.heroImage?.url ||
              doc.FeaturedImage?.sizes?.small?.url ||
              "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80";

            return {
              id: doc.id,
              slug: doc.slug,
              title: doc.title,
              category: doc.details?.isFree ? "Free Event" : "Event",
              date: { day, month },
              location: doc.details?.location?.label || "Chennai",
              image: imgUrl.startsWith("http")
                ? imgUrl
                : `${API_BASE_URL}${imgUrl}`,
            };
          });

        setTrends(formattedTrends);
        setTrends(formattedTrends);
      } catch (err) {
        console.error("WhatsApp fetch error:", err);
        setWhatsApp(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWhatsApp();
  }, [currentSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <span className="text-stone-500 font-medium">Loading content...</span>
      </div>
    );
  }

  const ogImage = WhatsApp?.metaImage
    ? `${API_BASE_URL}${WhatsApp.metaImage}`
    : WhatsApp?.heroImage
    ? `${API_BASE_URL}${WhatsApp.heroImage}`
    : null;

  const DynamicBreadcrumb = ({ currentTitle }) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm tracking-widest uppercase font-semibold text-white/80">
          <li>
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
          </li>

          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            const formattedText = isLast
              ? currentTitle || value.replace(/-/g, " ")
              : value.replace(/-/g, " ");

            return (
              <li key={to} className="flex items-center gap-2">
                <span className="text-white/50">/</span>
                {isLast ? (
                  <span className="text-white truncate max-w-[200px] sm:max-w-[300px]">
                    {formattedText}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-white transition-colors">
                    {formattedText}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased">
    
      {WhatsApp && (
        <Helmet>
          <title>{WhatsApp.metatitle || WhatsApp.title}</title>
          <meta
            name="description"
            content={WhatsApp.metadescription || WhatsApp.title}
          />

          <meta property="og:title" content={WhatsApp.title} />
          <meta
            property="og:description"
            content={WhatsApp.metadescription || WhatsApp.title}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`https://www.superchennai.com/whats-up-chennai/${currentSlug}`}
          />
          <link rel="canonical" href={window.location.href} />

          {ogImage && (
            <>
              <meta property="og:image" content={ogImage} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:image" content={ogImage} />
            </>
          )}

          <meta name="twitter:title" content={WhatsApp.title} />
          <meta
            name="twitter:description"
            content={WhatsApp.metadescription || WhatsApp.title}
          />
        </Helmet>
      )}


      {WhatsApp?.heroImage && (
        <div className="accaodomationBannerSection relative w-full overflow-hidden">
          <div className="bLogDetailBanner">
            <img
              src={`${API_BASE_URL}${WhatsApp.heroImage}`}
              alt={WhatsApp.title}
            />
          </div>

          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <DynamicBreadcrumb currentTitle={WhatsApp.title} />

              <AutoShrinkText
                text={WhatsApp.title}
                baseSize={60}
                minSize={40}
                maxChars={40}
                className="accodoamationBannerText"
                width="80%"
                maxLines={2}
              />
            </div>
          </div>
        </div>
      )}

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {WhatsApp?.details && (
          <EventQuickDetailsSection details={WhatsApp.details} />
        )}

        <div className="blog">
          {WhatsApp?.content && parseLexical(WhatsApp.content)}
        </div>

        <TrendsSection
          trends={trends.filter((item) => item.slug !== currentSlug)}
        />
      </main>
    </div>
  );
}
