import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function LetsTalkCategories() {
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
    <section className="w-full py-12 px-4 sm:px-8 max-w-7xl mx-auto bg-gray-50/50">
      {/* SECTION HEADING */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
          EXPLORE <span className="text-purple-700">CATEGORIES</span>
        </h2>
        <span
          className="text-amber-500 text-xl font-bold select-none"
          aria-hidden="true"
        >
          ⇇⇉
        </span>
      </div>

      {/* CATEGORIES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* CARD TOP IMAGE & BADGE */}
            <div>
              <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div
                  className={`absolute top-3 left-3 z-10 ${item.badgeBg} text-white !text-[13px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md`}
                >
                  {item.id}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-[14px] sm:text-sm text-gray-500 mt-1 font-medium min-h-[36px]">
                  {item.desc}
                </p>

                {/* DATE & TIME DETAILS */}
                <div className="mt-2 space-y-1.5 text-[14px] text-gray-500 font-medium border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-3.5 h-3.5 ${item.textColor}`} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${item.textColor}`} />
                    <span className="truncate">{item.time}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* VIEW DETAILS LINK */}
            <div className="px-5 pb-5 pt-1">
              <a
                href={item.href}
                className={`inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-wider ${item.textColor} hover:opacity-80 transition-opacity`}
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
