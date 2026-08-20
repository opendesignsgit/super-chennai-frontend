import React from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./css/singealone.css";
import { Helmet } from "react-helmet-async";

export default function SingAlongMetroSuccess() {
  const nextSteps = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#01236a]" />,
      title: "WhatsApp Updates",
      description:
        "Destination details, exact timings, and meeting points will be sent directly to your WhatsApp.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#01236a]" />,
      title: "More City Events",
      description:
        "Stay tuned with SuperChennai to get notified about upcoming exciting events and experiences.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Registration Confirmed - Metro-vil Madras Day</title>
        <meta
          name="description"
          content="Your registration for Metro-vil Madras Day is confirmed. Get ready for an unforgettable musical journey."
        />
      </Helmet>

      {/* ----------------- Banner ---------------- */}
      <div className="accaodomationBannerSection relative">
        {/* Desktop Image */}
        <img
          className="hidden sm:block w-full"
          src="/images/Sing along metro - chennai - desktop.jpeg"
          alt="Metro-vil Madras Day"
        />
        {/* Mobile Image */}
        <img
          className="block sm:hidden w-full"
          src="/images/metro-sing-mobile.jpeg"
          alt="Metro-vil Madras Day"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content Container */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            <h3>Registration Confirmed! 🎉</h3>
            <div className="breadCrum">
              <Link to="/live-in-chennai"> Home </Link> -{" "}
              <Link to="/contest/madras-day-2026-midnight-metro-ride">
                Metro-vil Madras Day
              </Link>{" "}
              - <span>Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      <section className="container max-w-5xl mx-auto px-4 py-12 font-sans text-gray-800 paddingsectionntop">
        {/* Main Success Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-lg text-center max-w-3xl mx-auto mb-10">
          {/* Animated Success Badge Icon */}
          <div className="w-20 h-20 bg-[#EDF4FC] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-[#01236a]" />
          </div>

          <span className="inline-block bg-[#EDF4FC] text-[#01236a] text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
            Registration Status: Confirmed
          </span>

          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0A1B3D] mb-4">
            Hey Buddy, your registration is confirmed! 🎉
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Thank you for registering for{" "}
            <span className="font-bold text-[#01236a]">
              Metro-Vil Madras Day
            </span>
            . Get ready for an exciting experience as we celebrate Chennai and
            its iconic Metro journey! 🚇✨
          </p>

          <div className="bg-[#EDF4FC] p-5 rounded-2xl border border-blue-100 text-left space-y-3 mb-8">
            <p className="text-gray-800 leading-relaxed">
              We’ll share the start-to-end destination details, timings, meeting
              point and other important updates directly to your{" "}
              <span className="font-semibold text-[#01236a]">WhatsApp</span>{" "}
              from <span className="font-semibold">SuperChennai</span>. So keep
              an eye on your messages and stay tuned for all the latest
              updates.
            </p>
            <p className="text-gray-800 leading-relaxed">
              And that’s not all — we’ll also keep you posted about more
              exciting events and experiences happening across Chennai.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A1B3D] text-center">
              See you soon for a memorable Metro-Vil Madras Day! 💜
            </h3>
          </div>
        </div>

        {/* Quick Highlights / Next Steps */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {nextSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#EDF4FC] p-6 rounded-2xl border border-[#EDF4FC] flex items-start gap-4"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                {step.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#0A1B3D] text-base mb-1">
                  {step.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Action Button */}
        <div className="text-center">
          <Link
            to="/live-in-chennai"
            className="inline-block bg-[#01236a] hover:bg-[#0A1B3D] text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-md uppercase tracking-wider text-sm"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}