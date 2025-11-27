import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ChennaiQuiz() {
  return (
    <>
      {/* Banner Section */}

      <Helmet>
        <title>
          Test Your Smarts - Take the Ultimate Fun Super Chennai Quiz
        </title>
        <meta
          name="description"
          content="The Super Chennai Quiz is here on Dec 7, 2025! Test your knowledge across sports, music, food, and Chennai. Exciting prizes await—team up and enjoy an epic evening."
        />
        <link rel="canonical" href="chennai-quiz" />
      </Helmet>

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          {/* Desktop Image */}
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/superchennai-quiz-inner.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/superchennai-quiz-mobile2.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Super Chennai Quiz</h3>

            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="contests/chennai-quiz">Super Chennai Quiz</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content Section */}
      <section className="EventsBanSec SecPadblock12">
        <div className="container max-w-7xl mx-auto">
          <div className="EventContBox flex flex-wrap">
            {/* Left Side */}
            <div className="EventLeft">
              <h2>Super Chennai Quiz</h2>

              <div className="EventBanImg">
                <img src="/images/events/superchennai-quiz-inner-2.jpg" />
              </div>

              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  {/* <h5 className="hidden md:block">Quiz</h5> */}
                  <button
                    className="block md:hidden lg:hidden"
                    onClick={() => {
                      const target = document.getElementById("mainBookNow");
                      if (target)
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    <h5> Register Now</h5>
                  </button>
                </div>
              </div>

              <div className="EventContBox mb-[5vh]">
                <h3>About The Event</h3>

                <p>
                  Get ready for the Super Chennai Quiz — a lively, high-energy
                  quiz experience that breaks away from the usual serious,
                  brain-only quiz format. This is a quiz for everyone, whether
                  you’re a casual player, a trivia lover, or someone who just
                  wants a fun afternoon with a friend.
                </p>

                <p>
                  Hosted at the iconic Sir Mutha Venkatasubba Rao Concert Hall,
                  this quiz covers all categories — from pop culture, music,
                  films, sports, food, and general knowledge to a sprinkle of
                  city trivia and surprise rounds. Expect fresh formats,
                  interactive twists, and fun challenges that keep the whole
                  room buzzing.
                </p>
                <p>
                  Guiding the experience is Nawabzada Mohammed Asif Ali, Dewan
                  to the Prince of Arcot, adding heritage, wit, and charm to the
                  afternoon.
                </p>
                <p>
                  <strong>What makes it special?</strong>
                </p>
                <p>
                  <ul style={{ paddingLeft: "30px" }}>
                    <li style={{ listStyle: "disc" }}>
                      Not just for hardcore quizzers — totally beginner-friendly
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      A mix of fun rounds, visual games, rapid-fire challenges &
                      unexpected twists
                    </li>

                    <li style={{ listStyle: "disc" }}>
                      Covers a wide range of topics, so every team gets a chance
                      to shine
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      A warm, community-driven experience in one of Chennai’s
                      most beautiful venues
                    </li>
                  </ul>
                </p>

                <p>
                  At just ₹199 per team of two, it’s the perfect plan for
                  friends, couples, siblings — anyone up for something different
                  this weekend.
                </p>

                <p>
                  Register now and get ready for a quiz that’s equal parts fun,
                  competitive, and unforgettable.
                </p>

                {/* Powered By Section */}
                <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-start gap-3 border-t border-gray-200 pt-6">
                  <span className="text-gray-500 text-sm sm:text-base">
                    Powered by
                  </span>
                  <img
                    src="/images/events/VGN-Logo.jpg"
                    alt="Company Logo"
                    className="h-12 sm:h-16 object-contain" // larger logo
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="EventRight w-full lg:w-[320px] bg-white rounded-lg shadow p-5 h-max" id="mainBookNow">
              <h4 className="text-lg font-semibold mb-3">Super Chennai Quiz</h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <img
                    src="/images/events/calendar.png"
                    alt="calendar"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-gray-700 text-sm">
                    Sunday, December 7, 2025
                  </p>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <img
                    src="/images/events/time.png"
                    alt="time"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-gray-700 text-sm">2:00 PM</p>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <img
                    src="/images/events/location.png"
                    alt="location"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-gray-700 text-sm">
                    Sir Mutha Venkatasubba Rao Concert Hall, Chennai
                  </p>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <img
                    src="/images/events/age_limit.png"
                    alt="host"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-gray-700 text-sm">
                    Hosted by: Nawabzada Mohammed Asif Ali
                  </p>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <img
                    src="/images/events/language.png"
                    alt="teams"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-gray-700 text-sm">Teams: 2 members</p>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <img
                    src="/images/events/genre.png"
                    alt="fee"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-gray-700 text-sm">Fee: ₹199 per team</p>
                </div>
              </div>

              <div className="flex justify-center mt-6" >
                <a href="/quizform">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition capitalize cursor-pointer">
                    Register Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label }) {
  return (
    <div className="evderlinks flex items-center mb-2">
      <div className="iconsssec flex items-center w-6 h-6 mr-2">
        <img src={icon} alt="icon" className="w-full h-full object-contain" />
      </div>
      <p>{label}</p>
    </div>
  );
}
