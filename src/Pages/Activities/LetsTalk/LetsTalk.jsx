import LetsTalkCategories from "./Components/LetsTalkCards";
import "./style.css"

export default function LetsTalkPage() {
  return (
    <>

    <div className="bodydiv">


  
      <div>
        <img  className="w-full" src="/images/letstalk/herobannerletstalk.png" alt="" />
      </div>

      <section className="w-full px-4 py-12 md:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0d0728] via-[#150a3c] to-transparent text-white shadow-2xl">  
          <div className="absolute inset-0 z-0">
            <img
              src="/images/letstalk/letstalkabout.jpg"
              alt="Chennai Marina Beach Aerial View"
              className="w-full h-full object-cover object-right"
            />       
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0520] via-[#0b0520]/90 via-35% to-transparent" />
          </div>
          <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-xl lg:max-w-2xl">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-semibold uppercase">
                ABOUT CHENNAI
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full mt-2" />
            </div>   
            <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Chennai is more than a city — it's a feeling built through
                generations. From its timeless temples and beaches to today's
                crazy traffic, filter coffee to cutting-edge startups, Chennai
                keeps stories old and new alive.
              </p>

              <p>
                It's the people, places, the neighbourhoods, dreams and little
                moments that make it what it is. Whether you're born here or new
                to it, you will realise, Chennai has a way of becoming a part of
                you.
              </p>
            </div>

           
            <div className="mt-8 flex items-start gap-4">
              <span className="text-purple-400 text-4xl sm:text-5xl leading-none font-serif select-none">
                “
              </span>
              <p className="text-sm sm:text-base font-medium text-purple-100 leading-snug pt-1">
                Because everyone experiences Chennai differently. <br />
                And every person who comes here adds{" "}
                <br className="hidden sm:inline" />
                another layer to its story.
              </p>
            </div>

            {/* PURPLE HIGHLIGHT BOX */}
            <div className="mt-8 pl-4 border-l-2 border-purple-500">
              <p className="text-purple-400 font-semibold text-sm sm:text-base tracking-wide">
                Let's Talk Chennai is where those <br />
                stories come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LetsTalkCategories />
        </div>
    </>
  );
}
