import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import LetsTalkForm from "./LetsTalkForm";

export default function LetsTalkCardsDetail() {
  const categories = [
    {
      id: "01. PEOPLE OF CHENNAI",
      badgeBg: "bg-indigo-700",
      textColor: "text-indigo-700",
      title: "People of Chennai",
      desc: "Real people. Real stories.\nInspiring journeys.Real people. Real stories.\nInspiring journeys.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      href: "/categories/people",
    },
    {
      id: "02. MEMES OF CHENNAI",
      badgeBg: "bg-pink-600",
      textColor: "text-pink-600",
      title: "Memes of Chennai",
      desc: "Chennai humour.\nRelatable moments.Chennai humour.\nRelatable moments.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      href: "/categories/memes",
    },
    {
      id: "03. PHOTOGRAPHY OF CHENNAI",
      badgeBg: "bg-sky-600",
      textColor: "text-sky-600",
      title: "Photography of Chennai",
      desc: "Your lens.\nCity moments.Your lens.\nCity moments.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
      href: "/categories/photography",
    },
    {
      id: "04. LIFESTYLE OF CHENNAI",
      badgeBg: "bg-amber-600",
      textColor: "text-amber-600",
      title: "Lifestyle of Chennai",
      desc: "Food. Cafés. Beaches.\nFashion. Fitness. Nightlife.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      href: "/categories/lifestyle",
    },
    {
      id: "05. CHENNAI STORIES",
      badgeBg: "bg-purple-700",
      textColor: "text-purple-700",
      title: "Chennai Stories",
      desc: "Memories.\nExperiences.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
      href: "/categories/stories",
    },
    {
      id: "06. CREATORS IN CHENNAI",
      badgeBg: "bg-amber-500",
      textColor: "text-amber-500",
      title: "Creators in Chennai",
      desc: "Artists. Filmmakers.\nMusicians. Designers. Creators.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
      href: "/categories/creators",
    },
    {
      id: "07. STARTUPS & BUSINESSES",
      badgeBg: "bg-blue-600",
      textColor: "text-blue-600",
      title: "Startups & Businesses",
      desc: "Homegrown brands.\nStartups. Small businesses.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      href: "/categories/startups",
    },
    {
      id: "08. CHENNAI TRENDS",
      badgeBg: "bg-emerald-600",
      textColor: "text-emerald-600",
      title: "Chennai Trends",
      desc: "What's new.\nWhat's viral.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
      href: "/categories/trends",
    },
    {
      id: "09. CHENNAI HERITAGE",
      badgeBg: "bg-[#8B4513]",
      textColor: "text-[#8B4513]",
      title: "Chennai Heritage",
      desc: "Old streets. Landmarks.\nTraditions. Forgotten stories.",
      date: "28 June 2026",
      time: "5:30 PM - 7:00 PM – Registration Closed",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
      href: "/categories/heritage",
    },
  ];

  return (
    <>
      <div>
        <img
          className="w-full"
          src="/images/letstalk/lettstalkdetailpagebanner.png"
          alt=""
        />
      </div>

      <section className="w-full py-16 px-6 sm:px-12 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="flex flex-col justify-center">
            {/* Subtitle / Tag */}
            <span className="text-[14px] font-bold uppercase text-pink-600 mb-2">
              ABOUT
            </span>

            {/* Heading */}
            <div className="relative mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
                Let’s Talk Chennai
              </h2>
              {/* Pink Brush Stroke Underline */}
              <svg
                className="w-36 h-3 mt-1"
                viewBox="0 0 160 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8C45 3 115 2 157 7"
                  stroke="#e60076"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-[#000] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Chennai is more than a city — it is a collection of moments,
                people and places that stay with us. From busy streets and
                neighbourhoods to beaches, food, festivals, art and everyday
                life, every corner has something worth capturing.
              </p>

              <p>
                Let’s Talk in Reels gives you a space to show Chennai from your
                perspective. It could be a place you love, a local tradition, a
                favourite food spot, a hidden gem, a memorable moment or simply
                something that makes you say, “This is Chennai.”
              </p>

              <p>
                Pick up your camera and tell that story in a Reel of 90 seconds
                or less. Show us the Chennai you know, the Chennai that
                surprises you and the Chennai that makes you proud. One Reel,
                one story, one Chennai.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO IMAGE */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/letstalk/marinaabeachsection.jpg"
              alt="Chennai Beach Aerial View"
              loading="lazy"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <LetsTalkForm/>
    </>
  );
}
