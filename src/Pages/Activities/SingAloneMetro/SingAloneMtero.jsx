

import React from "react";
import {
  Music,
  Train,
  Mic,
  Heart,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";
import SingAloneMetroForm from "./Components/SingAloneMetroForm";
import { Link } from "react-router-dom";
import "./css/singealone.css";
import { Helmet } from "react-helmet-async";

export default function SingAloneMtero() {
  const features = [
    { icon: <Music className="w-8 h-8 text-[#012268]" />, title: "LIVE MUSIC" },
    {
      icon: <Train className="w-8 h-8 text-[#012268]" />,
      title: "METRO JOURNEY",
    },
    { icon: <Mic className="w-8 h-8 text-[#012268]" />, title: "SING ALONG" },
    {
      icon: <Heart className="w-8 h-8 text-[#012268]" />,
      title: "CHENNAI VIBES",
    },
  ];

  const details = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      value: "21 AUG 2026",
      label: "EVENT DATE",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      value: "11:00 PM ONWARDS",
      label: "EVENT TIME",
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      value: "CHENNAI METRO",
      label: "VENUE",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      value: "SING • RIDE • ENJOY",
      label: "EXPERIENCE",
    },
  ];

  const highlights = [
    "Midnight Madras Day Cake Cutting 🎂",
    "Live Music by Office Gaana 🎶",
    "Exclusive Metro Ride after regular operating hours 🚇",
    "Sing along to your favourite Tamil songs 🎤",
    "100 Chennaiites. One Metro. One celebration. ❤️",
  ];

  const guidelines = [
    "Registration is FREE.",
    "This is a limited-capacity experience (100 participants).",
    "Entry is permitted only for participants who have received a confirmation message along with detailed joining instructions",
    "Participants must report at the designated Metro station at the given time.",
    "The experience will take place after regular Metro operating hours.",
    "The final route, station and operational details are subject to CMRL confirmation.",
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

    /* ================= SEO Schema Updated ================= */
  const arattaiSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Sing along metro",
      description:
        "A midnight Metro ride, live music by Office Gaana and 100 Chennaiites singing together — Super Chennai & CMRL bring you a Madras Day 2026 like never before.",
      image: "http://superchennai.com/images/singlealone/MetroChennai.jpeg",
      startDate: "2026-08-21T23:00",
      endDate: "2026-08-22T09:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Metro train",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "M.S. Swaminathan Research Foundation, 3rd Cross Street, Taramani, Chennai – 600 113",
          addressLocality: "chennai",
          postalCode: "600 113",
          addressCountry: "IN",
        },
      },
    },
  ];


  return (
    <>
      <Helmet>
        <title>
          Madras Day 2026: Midnight Musical Metro Ride in Chennai
        </title>
        <meta
          name="description"
          content="A midnight Metro ride, live music by Office Gaana and 100 Chennaiites singing together — Super Chennai & CMRL bring you a Madras Day 2026 like never before."
        />
        <script type="application/ld+json">
          {JSON.stringify(arattaiSchema)}
        </script>
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/contest/madras-day-2026-midnight-metro-ride`}
        />
      </Helmet>
      {/*----------------- Banner ----------------*/}
      <div className="accaodomationBannerSection relative">
        {/* Desktop Image */}
        <img
          className="hidden sm:block w-full"
          src="/images/Sing along metro - chennai - desktop.jpeg"
          alt="Arattai Event"
        />
        {/* Mobile Image */}
        <img
          className="block sm:hidden w-full"
          src="/images/metro-sing-mobile.jpeg"
          alt="Arattai Event"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content Container */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            <h3>Metro-vil Madras Day</h3>
            <div className="breadCrum">
              <Link to="/live-in-chennai"> Home </Link> -{" "}
              <a href="">Metro-vil Madras Day</a>
            </div>
          </div>
        </div>
      </div>

      <section className="container max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800 paddingsectionntop">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-stretch gap-8 mb-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/singlealone/MetroChennai.jpeg"
              alt="Chennai Metro Madras Day Celebration"
              className="w-full h-full object-cover rounded-2xl shadow-sm min-h-[300px]"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5 py-2">
            {/* Main Title with Blue Accent Line */}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-10 bg-[#0A1B3D] inline-block"></span>
              <h2 className="headingsection text-[#0A1B3D]">
                METRO-VIL MADRAS DAY
              </h2>
                <h1 className="headingsection text-[#0A1B3D] hidden">
                METRO-VIL MADRAS DAY
              </h1>
            </div>
          
            {/* Paragraph Content */}
            <div className="space-y-4 text-[#000]">
              <p className="font-semibold text-lg text-[#01236a]">
                Chennai’s First Midnight Musical Ride
              </p>
              <p>
                What if you could celebrate Madras Day… inside a Metro train?
                🚇🎶
              </p>
              <p>
                This Madras Day, Super Chennai and CMRL are bringing you a
                one-of-a-kind experience — a 90-minute midnight musical ride
                through Chennai, with live music, sing-alongs and Chennaiites
                coming together to celebrate the city we love.
              </p>
              <p className="italic text-gray-600 border-l-2 border-[#01236a] pl-3 py-1">
                “Somewhere between the last Metro train and the first light of
                Madras Day, Chennai came together and sang.”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features Bar */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between border-t border-gray-100 pt-8 gap-6">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-3 flex-1 justify-center min-w-[180px]">
                {feature.icon}
                <span className="font-bold text-xs md:text-sm text-gray-800 uppercase">
                  {feature.title}
                </span>
              </div>
              {/* Divider line except for the last item */}
              {index < features.length - 1 && (
                <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="bg-[#EDF4FC] py-12 px-4 rounded-xl my-8 font-sans mb-0">
        <div className="max-w-7xl mx-auto ">
          {/* Title with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-8 h-[2px] bg-[#0A1B3D]"></span>
            <h2 className="headingsection">THE DETAILS</h2>
            <span className="w-8 h-[2px] bg-[#0A1B3D]"></span>
          </div>

          {/* Details Timeline Row */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl mx-auto">
            {/* Connecting background line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-gray-300 z-0" />

            {details.map((item, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4"
              >
                {/* Circle Icon Container */}
                <div className="w-14 h-14 rounded-full bg-[#01236a] flex items-center justify-center shadow-md mb-4 ring-4 ring-slate-50">
                  {item.icon}
                </div>

                {/* Value (Bold Main Text) */}
                <h3 className="text-sm md:text-base font-semibold text-gray-900 uppercase leading-tight mb-1">
                  {item.value}
                </h3>

                {/* Sub-label */}
                <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#0A1B3D] mb-4 flex items-center gap-2">
              THE EXPERIENCE
            </h3>
            <ul className="space-y-3">
              {highlights.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#01236a] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Can Join & Action */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#0A1B3D] mb-4">
                WHO CAN JOIN?
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Anyone who loves Chennai, music and a good sing-along!
              </p>
              <p className="text-gray-700 leading-relaxed">
                Limited Slots only, REGISTER NOW and don't miss the chance to be
                part of this exclusive Madras Day celebration
              </p>
            </div>

            {/* <div className="mt-6">
              <button
                onClick={scrollToForm}
                className="w-full bg-[#01236a] hover:bg-[#0A1B3D] text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md uppercase tracking-wider text-sm"
              >
                Register Now
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Important Guidelines Section */}
      <section className="max-w-7xl mx-auto px-4 py-6 font-sans pb-0">
        <div className="bg-[#EDF4FC] border border-[#EDF4FC] p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-[#0A1B3D] mb-4 flex items-center gap-2">
            IMPORTANT INFORMATION
          </h3>
          <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-0 mt-4">
            {guidelines.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#01236a] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SingAloneMetroForm />
    </>
  );
}
