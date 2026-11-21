import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function ChenzQuizComponent() {
  return (
    <section className="relative w-full overflow-hidden chennaiquizzbgsection chennaiquizwidth">
      <div className="container max-w-7xl mx-auto flex ">
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          {/* Curving SVG Paths */}

          {/* Central Landmark Sketch */}
          <div className="absolute top-[15%] left-[45%] opacity-35 flex flex-col items-center">
            <img
              src="/images/sketch-central.png"
              alt=""
              className="h-16 object-contain filter grayscale"
            />
          </div>

          {/* Anna Nagar Temple Sketch */}
          <div className="absolute bottom-[15%] left-[50%] opacity-35 flex flex-col items-center">
            <img
              src="/images/sketch-temple.png"
              alt=""
              className="h-20 object-contain filter grayscale"
            />
          </div>

          {/* Marina Beach Lighthouse Sketch */}
          <div className="absolute top-[28%] right-[5%] opacity-35 flex flex-col items-center">
            <img
              src="/images/sketch-lighthouse.png"
              alt=""
              className="h-16 object-contain filter grayscale"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* LEFT PANEL: HEADING & DETAILS */}
          <div className="lg:col-span-7 flex flex-col justify-center margginchennaiquizzzzz">
            {/* Section Title */}
            <div className="relative inline-block mb-8">
              <h2 className="chennaiInvestmentsHeading !text-[#04185F] flex items-start gap-1">
                Chenz Quiz
              </h2>
              {/* Custom Thick Magenta Underline */}
              <div className="w-20 h-1.5 bg-pink-500 rounded-full mt-2 pinkdashhhhs"></div>
            </div>

            {/* Description Block */}
            <div className="space-y-6 text-[#1E293B] text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              <p>
                Chennai has a story behind every street, a memory in every
                corner and something new to discover every day. Chenz Quiz
                brings that city spirit into a fun knowledge challenge.
              </p>
              <p className="">
                Explore interesting questions, test what you know, beat the
                clock and see where you stand among fellow Chennai enthusiasts.
              </p>
            </div>

            {/* Let's Go Button */}
            <div className="mt-8 cursor-pointer">
              <a href="https://chenzquiz.superchennai.com/">
                <button className="letsgobuttonnnn cursor-pointer inline-flex items-center gap-4 pl-7 pr-3 py-2 bg-[#0A1A5C] hover:bg-indigo-950 text-white rounded-full text-sm sm:text-base group shadow-md hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-300">
                  <p>Let’s Go</p>
                  <span className="cursor-pointer w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A1A5C] group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
