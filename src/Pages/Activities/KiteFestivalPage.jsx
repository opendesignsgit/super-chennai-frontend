import React, { useState } from "react";
import {
  MapPin,
  Sparkles,
  ChevronDown,
  Globe,
  Compass,
  Smile,
  ShoppingBag,
  Utensils,
  Camera,
  Users,
  Music,
  Wind,
  Ticket,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function KiteFestivalPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const highlights = [
    {
      title: "Global Kites",
      desc: "Watch skilled kite flyers from India and around the world take to the skies with stunning designs.",
      icon: <Globe className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Giant Kites",
      desc: "See massive, eye-catching kites soar above the beach in an unforgettable display.",
      icon: <Wind className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Inflatable Art",
      desc: "Enjoy a colourful world of oversized inflatable kite creations made to amaze and delight.",
      icon: <Sparkles className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Live Acts",
      desc: "Catch lively performances and entertainment designed for visitors of all ages.",
      icon: <Music className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Festive Shopping",
      desc: "Browse fun festival stalls featuring local finds, souvenirs, and colourful treats.",
      icon: <ShoppingBag className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Beach Bites",
      desc: "Enjoy delicious food by the coast while taking in the festival atmosphere.",
      icon: <Utensils className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Photo Fun",
      desc: "Let the kids capture fun memories at a dedicated photo corner filled with colourful moments.",
      icon: <Camera className="w-6 h-6 text-[#a44294]" />,
    },
    {
      title: "Family Carnival",
      desc: "Enjoy games, activities, and playful experiences designed for the whole family.",
      icon: <Users className="w-6 h-6 text-[#a44294]" />,
    },
  ];

  const faqs = [
    {
      q: "When and where is the festival taking place?",
      a: "The festival takes place from 14 to 16 August 2026 at TTDC Ocean View, Mamallapuram ECR, right along the scenic coast.",
    },
    {
      q: "Which countries are participating in the International Kite Show?",
      a: "Flyers and master kite makers from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and several other countries will be exhibiting their creations.",
    },
    {
      q: "Is the event suitable for children and families?",
      a: "Absolutely! The event is designed as a complete family carnival featuring dedicated kids' photo zones, live stage performances, interactive games, and beachside dining options.",
    },
    {
      q: "Is parking available at TTDC Ocean View, ECR?",
      a: "Yes, designated vehicle parking zones and traffic management will be available near the TTDC Ocean View grounds along the East Coast Road.",
    },
    {
      q: "What should visitors bring along?",
      a: "We recommend comfortable footwear for sand, sunscreen, sunglasses, hats, and cameras to capture the breathtaking visual displays.",
    },
  ];

  const kitFestivalSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Tamil Nadu International Kite Festival 2026",
      description:
        "Kite Festival 2026 lands near Chennai this August. Watch the international kite festival in Chennai's Mamallapuram ECR from 14 to 16 August at TTDC Ocean View.",
      image: "https://www.superchennai.com/images/Kite-festiva.jpeg",
      startDate: "2026-08-14T09:00",
      endDate: "2026-08-16T17:00",
      eventStatus: "https://schema.org/EventPostponed",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "TTDC Ocean View Mamallapuram ECR",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mamallapuram ECR",
          addressLocality: "Chennai",
          postalCode: "603104",
          addressCountry: "IN",
        },
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Tamil Nadu International Kite Festival 2026 at Mamallapuram
        </title>
        <meta
          name="description"
          content="Kite Festival 2026 lands near Chennai this August. Watch the international kite festival in Chennai's Mamallapuram ECR from 14 to 16 August at TTDC Ocean View."
        />
        <meta
          property="og:title"
          content="Kite Festival 2026 lands near Chennai this August. Watch the international kite festival in Chennai's Mamallapuram ECR from 14 to 16 August at TTDC Ocean View."
        />
        <meta
          property="og:description"
          content="Kite Festival 2026 lands near Chennai this August. Watch the international kite festival in Chennai's Mamallapuram ECR from 14 to 16 August at TTDC Ocean View."
        />
        <meta
          property="og:image"
          content="https://www.superchennai.com/images/Kite-festiva.jpeg"
        />
        <meta
          property="og:url"
          content="https://www.superchennai.com/images/Kite-festiva.jpeg"
        />
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/tamil-nadu-international-kite-festival-2026-mamallapuram-chennai`}
        />

        <script type="application/ld+json">
          {JSON.stringify(kitFestivalSchema)}
        </script>
      </Helmet>

      <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#a44294] selection:text-white overflow-hidden">
        {/* FULL PAGE FLYING KITES ANIMATION LAYER */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Animated Flying Kite 1 (Large - Main) */}
          <div className="absolute animate-flyingKite1 opacity-90 filter drop-shadow-xl">
            <svg
              width="70"
              height="90"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Kite Body */}
              <path d="M50 0 L95 45 L50 100 L5 45 Z" fill="#FFD54F" />
              <path d="M50 0 L5 45 L50 100 Z" fill="#a44294" />
              <path d="M50 0 L95 45 L50 50 Z" fill="#100f9a" />
              {/* Cross Struts */}
              <path d="M50 0 V100" stroke="#ffffff" strokeWidth="2" />
              <path
                d="M5 45 Q 50 25 95 45"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
              />
              {/* Tail */}
              <path
                d="M50 100 C 30 115, 70 130, 40 150 C 20 165, 60 180, 50 200"
                stroke="#a44294"
                strokeWidth="3"
                fill="none"
                strokeDasharray="4 2"
              />
            </svg>
          </div>

          {/* Animated Flying Kite 2 (Medium - Top Right) */}
          <div className="absolute animate-flyingKite2 opacity-75 filter drop-shadow-md hidden sm:block">
            <svg
              width="45"
              height="60"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 0 L95 45 L50 100 L5 45 Z" fill="#a44294" />
              <path d="M50 0 L5 45 L50 100 Z" fill="#FFD54F" />
              <path d="M50 0 V100" stroke="#ffffff" strokeWidth="2" />
              <path
                d="M5 45 Q 50 25 95 45"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M50 100 C 60 115, 30 130, 50 150"
                stroke="#FFD54F"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Embedded Animation CSS Keyframes */}
        <style>{`
        @keyframes flyingKite1 {
          0% {
            top: 85%;
            left: -10%;
            transform: rotate(15deg) scale(0.8);
          }
          25% {
            top: 55%;
            left: 25%;
            transform: rotate(-10deg) scale(1.1);
          }
          50% {
            top: 25%;
            left: 60%;
            transform: rotate(20deg) scale(0.9);
          }
          75% {
            top: 10%;
            left: 85%;
            transform: rotate(-5deg) scale(1);
          }
          100% {
            top: -15%;
            left: 110%;
            transform: rotate(15deg) scale(0.8);
          }
        }

        @keyframes flyingKite2 {
          0% {
            top: 105%;
            left: 40%;
            transform: rotate(-20deg) scale(0.7);
          }
          50% {
            top: 50%;
            left: 80%;
            transform: rotate(15deg) scale(1);
          }
          100% {
            top: -10%;
            left: 20%;
            transform: rotate(-10deg) scale(0.7);
          }
        }

        .animate-flyingKite1 {
          animation: flyingKite1 18s ease-in-out infinite;
        }

        .animate-flyingKite2 {
          animation: flyingKite2 24s ease-in-out infinite 6s;
        }
      `}</style>

        {/* SECTION 1: BANNER / HERO */}
        <header className="relative overflow-hidden bg-gradient-to-br from-[#100f9a] via-[#3b1975] to-[#a44294] text-white">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#a44294]/30 blur-3xl pointer-events-none" />

          {/* Top Announcement Bar */}
          <div className="border-b border-white/10 bg-black/10 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-medium">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Official Event Announcement • August 2026
              </span>
              <span className="text-white/80 hidden sm:inline">
                TTDC Ocean View, East Coast Road (ECR)
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center pt-10">
              {/* Left Column: Headlines & Call to Action */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  5th Edition • Annual Coastal Celebration
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                  Tamil Nadu International <br className="hidden sm:inline" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-pink-100 to-white">
                    Kite Festival 2026
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl font-light leading-relaxed">
                  When Mamallapuram takes to the skies. Experience three days of
                  grand airborne art, international master flyers, giant
                  inflatables, and coastal food carnivals.
                </p>

                {/* Event Meta Badges */}
                <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
                  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                    <Calendar className="w-5 h-5 text-amber-300" />
                    <span>14 – 16 August 2026</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                    <MapPin className="w-5 h-5 text-amber-300" />
                    <span>TTDC Ocean View, Mamallapuram ECR</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#highlights"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-[#100f9a] font-bold shadow-xl hover:bg-slate-100 transition-all duration-200 group"
                  >
                    Explore Event Highlights
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold backdrop-blur-md transition-all duration-200"
                  >
                    About The Festival
                  </a>
                </div>
              </div>

              {/* Right Column: Key Event Card Showcase */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
                  <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    ECR Grand Weekend
                  </div>

                  <div className="space-y-6">
                    <div className="border-b border-white/15 pb-4">
                      <span className="text-xs uppercase tracking-widest text-indigo-200 font-semibold">
                        Participating Nations
                      </span>
                      <p className="text-xl font-bold mt-1 text-white">
                        Thailand, Vietnam, Singapore, Malaysia, Indonesia &
                        India
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                        <span className="block text-2xl font-black text-amber-300">
                          3 Days
                        </span>
                        <span className="text-xs text-indigo-100 font-medium">
                          Non-Stop Sky Displays
                        </span>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                        <span className="block text-2xl font-black text-amber-300">
                          100+
                        </span>
                        <span className="text-xs text-indigo-100 font-medium">
                          Giant & Inflatable Kites
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#100f9a] to-[#a44294] p-4 rounded-2xl border border-white/20 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-indigo-200 uppercase font-bold tracking-wider">
                          Venue Location
                        </p>
                        <p className="text-sm font-semibold text-white">
                          TTDC Beach Grounds, ECR
                        </p>
                      </div>
                      <Compass className="w-8 h-8 text-amber-300 opacity-90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="w-full overflow-hidden leading-none text-slate-50">
            <svg
              className="relative block w-full h-12 md:h-16"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.1,130.83,121.6,200,115.8,241.1,112.3,281.3,88.4,321.39,56.44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </header>

        {/* SECTION 2: ABOUT CONTENT */}
        <section id="about" className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Visual Narrative Box */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] w-full border-4 border-white">
                  <img
                    src="images/Kite-festiva.jpeg"
                    alt="Tamil Nadu International Kite Festival"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md">
                  About The Event
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight leading-tight">
                  A Weekend of Kites, Colours & International Artistry
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  For three days in August, the skies above Mamallapuram ECR
                  will turn into a colorful spectacle as the{" "}
                  <strong className="text-[#100f9a] font-semibold">
                    5th Tamil Nadu International Kite Festival 2026
                  </strong>{" "}
                  brings together breathtaking kite creations, master flyers,
                  giant installations, and vibrant family entertainment.
                </p>

                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>
                    Taking place at{" "}
                    <strong>TTDC Ocean View, Mamallapuram ECR</strong>, the
                    festival features renowned participants from Thailand,
                    Vietnam, Singapore, Malaysia, Indonesia, India, and beyond,
                    creating an energetic international celebration along the
                    coastline.
                  </p>

                  <p>
                    With the open coastline of Mamallapuram as the backdrop,
                    these larger-than-life kites create countless memorable
                    moments for families, sightseers, and photography
                    enthusiasts. The{" "}
                    <strong>World of Inflatable Show Kites</strong> further
                    transforms the skyline into an airborne fantasy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#100f9a]/10 text-[#100f9a]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#100f9a] text-sm">
                      A Perfect ECR Day Out
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Located along Mamallapuram's popular East Coast Road
                      (ECR), the drive itself forms a pleasant weekend getaway
                      for residents of Chennai and neighboring areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HIGHLIGHTS CARD SECTION */}
        <section
          id="highlights"
          className="py-16 md:py-24 bg-white border-y border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 border border-[#a44294]/20 rounded-md">
                Festival Attractions
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight">
                More Than Just A Kite Show
              </h2>

              <p className="text-slate-600 text-base sm:text-lg">
                Explore the array of entertainment, culinary delights, and
                artistic exhibits planned across the three-day carnival.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#a44294] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 group-hover:bg-[#a44294]/10 transition-colors shadow-sm">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#100f9a] group-hover:text-[#a44294] transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Callout Banner */}
            <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#100f9a] to-[#a44294] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-extrabold">
                  Ready to experience Mamallapuram's sky?
                </h3>
                <p className="text-indigo-100 text-sm max-w-xl">
                  Plan your family outing from 14 to 16 August at TTDC Ocean
                  View grounds, ECR.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg">
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>14–16 August</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ SECTION */}
        <section id="faq" className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <span className="text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md border border-[#a44294]/20">
                Got Questions?
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight">
                Frequently Asked Questions
              </h2>

              <p className="text-slate-600 text-base">
                Everything you need to know before heading to the 5th Tamil Nadu
                International Kite Festival 2026.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#a44294]/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#100f9a] text-base sm:text-lg focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[#a44294] font-mono text-sm">
                          0{index + 1}.
                        </span>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#a44294] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import {
//   MapPin,
//   Sparkles,
//   ChevronDown,
//   Globe,
//   Compass,
//   Smile,
//   ShoppingBag,
//   Utensils,
//   Camera,
//   Users,
//   Music,
//   Wind,
//   Ticket,
//   ChevronRight,
//   Calendar,
// } from "lucide-react";
// export default function KiteFestivalPage() {
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   // const highlights = [
//   //   {
//   //     title: "International Kite Show",
//   //     desc: "Featuring expert kite masters and traditional flyers from Thailand, Vietnam, Singapore, Malaysia, Indonesia, and India.",
//   //     icon: <Globe className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Global Showcase",
//   //   },
//   //   {
//   //     title: "Giant Kite Show",
//   //     desc: "Spectacular oversized airborne installations taking over the open sky along the Mamallapuram coastline.",
//   //     icon: <Wind className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Main Attraction",
//   //   },
//   //   {
//   //     title: "World of Inflatable Show Kites",
//   //     desc: "Vibrant, 3D inflatable creations that bring imaginative characters and marine life to the air.",
//   //     icon: <Sparkles className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Visual Wonder",
//   //   },
//   //   {
//   //     title: "Live Cultural Performances",
//   //     desc: "High-energy live music, dance ensembles, and artistic showcases designed for visitors of all ages.",
//   //     icon: <Music className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Entertainment",
//   //   },
//   //   {
//   //     title: "Coastal Shopping Stalls",
//   //     desc: "Curated festival stalls offering local handicrafts, artisanal merchandise, and memorable souvenirs.",
//   //     icon: <ShoppingBag className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Retail Village",
//   //   },
//   //   {
//   //     title: "Beach Food Street",
//   //     desc: "A wide assortment of coastal seafood specialties, street food delights, and refreshing summer drinks.",
//   //     icon: <Utensils className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Gastronomy",
//   //   },
//   //   {
//   //     title: "Kids Photo Corner",
//   //     desc: "Fun thematic backdrops, colorful kite installations, and interactive props for memorable family pictures.",
//   //     icon: <Camera className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Family Special",
//   //   },
//   //   {
//   //     title: "Family Carnival & Games",
//   //     desc: "Interactive games, workshops, and recreational zones crafted for kids, teens, and parents alike.",
//   //     icon: <Users className="w-6 h-6 text-[#a44294]" />,
//   //     tag: "Interactive Fun",
//   //   },
//   // ];

//   const highlights = [
//     {
//       title: "Global Kites",
//       desc: "Watch skilled kite flyers from India and around the world take to the skies with stunning designs.",
//       icon: <Globe className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Giant Kites",
//       desc: "See massive, eye-catching kites soar above the beach in an unforgettable display.",
//       icon: <Wind className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Inflatable Art",
//       desc: "Enjoy a colourful world of oversized inflatable kite creations made to amaze and delight.",
//       icon: <Sparkles className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Live Acts",
//       desc: "Catch lively performances and entertainment designed for visitors of all ages.",
//       icon: <Music className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Festive Shopping",
//       desc: "Browse fun festival stalls featuring local finds, souvenirs, and colourful treats.",
//       icon: <ShoppingBag className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Beach Bites",
//       desc: "Enjoy delicious food by the coast while taking in the festival atmosphere.",
//       icon: <Utensils className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Photo Fun",
//       desc: "Let the kids capture fun memories at a dedicated photo corner filled with colourful moments.",
//       icon: <Camera className="w-6 h-6 text-[#a44294]" />,
//     },
//     {
//       title: "Family Carnival",
//       desc: "Enjoy games, activities, and playful experiences designed for the whole family.",
//       icon: <Users className="w-6 h-6 text-[#a44294]" />,
//     },
//   ];

//   const faqs = [
//     {
//       q: "When and where is the festival taking place?",
//       a: "The festival takes place from 14 to 16 August 2026 at TTDC Ocean View, Mamallapuram ECR, right along the scenic coast.",
//     },
//     {
//       q: "Which countries are participating in the International Kite Show?",
//       a: "Flyers and master kite makers from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and several other countries will be exhibiting their creations.",
//     },
//     {
//       q: "Is the event suitable for children and families?",
//       a: "Absolutely! The event is designed as a complete family carnival featuring dedicated kids' photo zones, live stage performances, interactive games, and beachside dining options.",
//     },
//     {
//       q: "Is parking available at TTDC Ocean View, ECR?",
//       a: "Yes, designated vehicle parking zones and traffic management will be available near the TTDC Ocean View grounds along the East Coast Road.",
//     },
//     {
//       q: "What should visitors bring along?",
//       a: "We recommend comfortable footwear for sand, sunscreen, sunglasses, hats, and cameras to capture the breathtaking visual displays.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#a44294] selection:text-white">
//       {/* SECTION 1: BANNER / HERO */}
//       <header className="relative overflow-hidden bg-gradient-to-br from-[#100f9a] via-[#3b1975] to-[#a44294] text-white">
//         {/* Background Glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
//         <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#a44294]/30 blur-3xl pointer-events-none" />

//         {/* Top Announcement Bar */}
//         <div className="border-b border-white/10 bg-black/10 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-medium">
//           <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
//             <span className="inline-flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//               Official Event Announcement • August 2026
//             </span>
//             <span className="text-white/80 hidden sm:inline">
//               TTDC Ocean View, East Coast Road (ECR)
//             </span>
//           </div>
//         </div>

//         {/* Hero Content */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 relative z-10">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             {/* Left Column: Headlines & Call to Action */}
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
//                 <Sparkles className="w-4 h-4 text-amber-300" />
//                 5th Edition • Annual Coastal Celebration
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
//                 Tamil Nadu International <br className="hidden sm:inline" />
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-pink-100 to-white">
//                   Kite Festival 2026
//                 </span>
//               </h1>

//               <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl font-light leading-relaxed">
//                 When Mamallapuram takes to the skies. Experience three days of
//                 grand airborne art, international master flyers, giant
//                 inflatables, and coastal food carnivals.
//               </p>

//               {/* Event Meta Badges */}
//               <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
//                 <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
//                   <Calendar className="w-5 h-5 text-amber-300" />
//                   <span>14 – 16 August 2026</span>
//                 </div>
//                 <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
//                   <MapPin className="w-5 h-5 text-amber-300" />
//                   <span>TTDC Ocean View, Mamallapuram ECR</span>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="pt-4 flex flex-col sm:flex-row gap-4">
//                 <a
//                   href="#highlights"
//                   className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-[#100f9a] font-bold shadow-xl hover:bg-slate-100 transition-all duration-200 group"
//                 >
//                   Explore Event Highlights
//                   <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a
//                   href="#about"
//                   className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold backdrop-blur-md transition-all duration-200"
//                 >
//                   About The Festival
//                 </a>
//               </div>
//             </div>

//             {/* Right Column: Key Event Card Showcase */}
//             <div className="lg:col-span-5">
//               <div className="relative mx-auto max-w-md lg:max-w-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
//                 <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
//                   ECR Grand Weekend
//                 </div>

//                 <div className="space-y-6">
//                   <div className="border-b border-white/15 pb-4">
//                     <span className="text-xs uppercase tracking-widest text-indigo-200 font-semibold">
//                       Participating Nations
//                     </span>
//                     <p className="text-xl font-bold mt-1 text-white">
//                       Thailand, Vietnam, Singapore, Malaysia, Indonesia & India
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
//                       <span className="block text-2xl font-black text-amber-300">
//                         3 Days
//                       </span>
//                       <span className="text-xs text-indigo-100 font-medium">
//                         Non-Stop Sky Displays
//                       </span>
//                     </div>
//                     <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
//                       <span className="block text-2xl font-black text-amber-300">
//                         100+
//                       </span>
//                       <span className="text-xs text-indigo-100 font-medium">
//                         Giant & Inflatable Kites
//                       </span>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-r from-[#100f9a] to-[#a44294] p-4 rounded-2xl border border-white/20 flex items-center justify-between">
//                     <div>
//                       <p className="text-xs text-indigo-200 uppercase font-bold tracking-wider">
//                         Venue Location
//                       </p>
//                       <p className="text-sm font-semibold text-white">
//                         TTDC Beach Grounds, ECR
//                       </p>
//                     </div>
//                     <Compass className="w-8 h-8 text-amber-300 opacity-90" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Wave Divider */}
//         <div className="w-full overflow-hidden leading-none text-slate-50">
//           <svg
//             className="relative block w-full h-12 md:h-16"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.1,130.83,121.6,200,115.8,241.1,112.3,281.3,88.4,321.39,56.44Z"
//               fill="currentColor"
//             ></path>
//           </svg>
//         </div>
//       </header>

//       {/* SECTION 2: ABOUT CONTENT */}
//       {/* <section id="about" className="py-16 md:py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//             <div className="lg:col-span-5 order-2 lg:order-1">
//               <div className="relative rounded-3xl bg-gradient-to-br from-[#100f9a] to-[#a44294] p-8 text-white shadow-2xl overflow-hidden">
//                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

//                 <span className="text-amber-300 text-xs font-bold uppercase tracking-widest block mb-2">
//                   The Atmosphere
//                 </span>
//                 <blockquote className="text-2xl sm:text-3xl font-serif italic font-medium leading-snug">
//                   "It is not just about flying kites. It is about watching the
//                   sky become the centre of the celebration."
//                 </blockquote>

//                 <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
//                   <div className="flex items-start gap-3">
//                     <div className="p-2 rounded-lg bg-white/10 text-amber-300 mt-1">
//                       <Wind className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-sm">International Flair</h4>
//                       <p className="text-xs text-indigo-100">
//                         Global artists blending culture, wind, and sky mastery.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="p-2 rounded-lg bg-white/10 text-amber-300 mt-1">
//                       <Smile className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-sm">
//                         Coastal Carnival Experience
//                       </h4>
//                       <p className="text-xs text-indigo-100">
//                         Food, live art, music, and beach recreation all in one
//                         weekend.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
//               <div className="inline-flex items-center gap-2 text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md">
//                 About The Event
//               </div>

//               <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight leading-tight">
//                 A Weekend of Kites, Colours & International Artistry
//               </h2>

//               <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
//                 For three days in August, the skies above Mamallapuram ECR will
//                 turn into a colorful spectacle as the{" "}
//                 <strong className="text-[#100f9a] font-semibold">
//                   5th Tamil Nadu International Kite Festival 2026
//                 </strong>{" "}
//                 brings together breathtaking kite creations, master flyers,
//                 giant installations, and vibrant family entertainment.
//               </p>

//               <div className="space-y-4 text-slate-600 leading-relaxed text-base">
//                 <p>
//                   Taking place at{" "}
//                   <strong>TTDC Ocean View, Mamallapuram ECR</strong>, the
//                   festival features renowned participants from Thailand,
//                   Vietnam, Singapore, Malaysia, Indonesia, India, and beyond,
//                   creating an energetic international celebration along the
//                   coastline.
//                 </p>

//                 <p>
//                   With the open coastline of Mamallapuram as the backdrop, these
//                   larger-than-life kites create countless memorable moments for
//                   families, sightseers, and photography enthusiasts. The{" "}
//                   <strong>World of Inflatable Show Kites</strong> further
//                   transforms the skyline into an airborne fantasy.
//                 </p>
//               </div>

//               <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
//                 <div className="p-3 rounded-xl bg-[#100f9a]/10 text-[#100f9a]">
//                   <MapPin className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-[#100f9a] text-sm">
//                     A Perfect ECR Day Out
//                   </h3>
//                   <p className="text-xs sm:text-sm text-slate-600 mt-1">
//                     Located along Mamallapuram's popular East Coast Road (ECR),
//                     the drive itself forms a pleasant weekend getaway for
//                     residents of Chennai and neighboring areas.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* SECTION 2: ABOUT CONTENT */}
//       <section id="about" className="py-16 md:py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//             {/* Visual Narrative Box - NOW AN IMAGE */}
//             <div className="lg:col-span-5 order-2 lg:order-1">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] w-full border-4 border-white">
//                 <img
//                   src="images/Kite-festiva.jpeg"
//                   alt="Tamil Nadu International Kite Festival"
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Decorative Overlay gradient for modern visual touch */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
//               </div>
//             </div>

//             {/* Narrative Content */}
//             <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
//               <div className="inline-flex items-center gap-2 text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md">
//                 About The Event
//               </div>

//               {/* Primary Heading with #100f9a */}
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight leading-tight">
//                 A Weekend of Kites, Colours & International Artistry
//               </h2>

//               <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
//                 For three days in August, the skies above Mamallapuram ECR will
//                 turn into a colorful spectacle as the{" "}
//                 <strong className="text-[#100f9a] font-semibold">
//                   5th Tamil Nadu International Kite Festival 2026
//                 </strong>{" "}
//                 brings together breathtaking kite creations, master flyers,
//                 giant installations, and vibrant family entertainment.
//               </p>

//               <div className="space-y-4 text-slate-600 leading-relaxed text-base">
//                 <p>
//                   Taking place at{" "}
//                   <strong>TTDC Ocean View, Mamallapuram ECR</strong>, the
//                   festival features renowned participants from Thailand,
//                   Vietnam, Singapore, Malaysia, Indonesia, India, and beyond,
//                   creating an energetic international celebration along the
//                   coastline.
//                 </p>

//                 <p>
//                   With the open coastline of Mamallapuram as the backdrop, these
//                   larger-than-life kites create countless memorable moments for
//                   families, sightseers, and photography enthusiasts. The{" "}
//                   <strong>World of Inflatable Show Kites</strong> further
//                   transforms the skyline into an airborne fantasy.
//                 </p>
//               </div>

//               {/* Highlighting ECR Drive */}
//               <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
//                 <div className="p-3 rounded-xl bg-[#100f9a]/10 text-[#100f9a]">
//                   <MapPin className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-[#100f9a] text-sm">
//                     A Perfect ECR Day Out
//                   </h3>
//                   <p className="text-xs sm:text-sm text-slate-600 mt-1">
//                     Located along Mamallapuram's popular East Coast Road (ECR),
//                     the drive itself forms a pleasant weekend getaway for
//                     residents of Chennai and neighboring areas.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: HIGHLIGHTS CARD SECTION */}
//       <section
//         id="highlights"
//         className="py-16 md:py-24 bg-white border-y border-slate-200"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
//             <span className="text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 border border-[#a44294]/20 rounded-md">
//               Festival Attractions
//             </span>

//             {/* Primary Heading with #100f9a */}
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight">
//               More Than Just A Kite Show
//             </h2>

//             <p className="text-slate-600 text-base sm:text-lg">
//               Explore the array of entertainment, culinary delights, and
//               artistic exhibits planned across the three-day carnival.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#a44294] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="p-3 rounded-xl bg-white border border-slate-200 group-hover:bg-[#a44294]/10 transition-colors shadow-sm">
//                       {item.icon}
//                     </div>
//                     <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 group-hover:bg-[#a44294] group-hover:text-white transition-colors">
//                       {item.tag}
//                     </span>
//                   </div>

//                   <h3 className="text-lg font-bold text-[#100f9a] group-hover:text-[#a44294] transition-colors mb-2">
//                     {item.title}
//                   </h3>

//                   <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//                 {/*
//                 <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-[#a44294]">
//                   <span>Explore Feature</span>
//                   <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                 </div> */}
//               </div>
//             ))}
//           </div>

//           {/* Event Callout Banner inside Highlights */}
//           <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#100f9a] to-[#a44294] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
//             <div className="space-y-2 text-center md:text-left">
//               <h3 className="text-2xl font-extrabold">
//                 Ready to experience Mamallapuram's sky?
//               </h3>
//               <p className="text-indigo-100 text-sm max-w-xl">
//                 Plan your family outing from 14 to 16 August at TTDC Ocean View
//                 grounds, ECR.
//               </p>
//             </div>
//             <div className="flex-shrink-0">
//               <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg">
//                 <Calendar className="w-5 h-5 text-slate-950" />
//                 <span>14–16 August</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4: FAQ SECTION */}
//       <section id="faq" className="py-16 md:py-24 bg-slate-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-12">
//             <span className="text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md border border-[#a44294]/20">
//               Got Questions?
//             </span>

//             {/* Primary Heading with #100f9a */}
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight">
//               Frequently Asked Questions
//             </h2>

//             <p className="text-slate-600 text-base">
//               Everything you need to know before heading to the 5th Tamil Nadu
//               International Kite Festival 2026.
//             </p>
//           </div>

//           {/* Accordion List */}
//           <div className="space-y-4">
//             {faqs.map((faq, index) => {
//               const isOpen = openFaq === index;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#a44294]/50 transition-colors"
//                 >
//                   <button
//                     onClick={() => toggleFaq(index)}
//                     className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#100f9a] text-base sm:text-lg focus:outline-none"
//                   >
//                     <span className="flex items-center gap-3">
//                       <span className="text-[#a44294] font-mono text-sm">
//                         0{index + 1}.
//                       </span>
//                       {faq.q}
//                     </span>
//                     <ChevronDown
//                       className={`w-5 h-5 text-[#a44294] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed bg-slate-50/50">
//                       {faq.a}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
