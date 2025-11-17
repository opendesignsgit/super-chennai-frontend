import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";

export default function ChennaiQuiz() {
  return (
    <>
      {/* Banner Section */}
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="  /images/events/car-treasure-hunt-banner.jpg"
            alt=""
          />{" "}
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Car Treasure Hunt</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="/events"> (Car Treasure Hunt)</Link>
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
              <h2>Super Chennai Car Treasure Hunt</h2>

              <div className="EventBanImg">
                <img src="/images/events/car-rally.jpg" />
              </div>

              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  <h5> Car Treasure Hunt</h5>
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
              </div>
            </div>

            {/* Right Side */}
            <div className="EventRight">
              <div className="evderibox mt-[70px]">
                <div className="evderListbox">
                  <div className="evderViewbox">
                    {/* Event Title */}
                    <h3 className="text-xl font-semibold text-[#a44294] mb-4">
                      Super Chennai Quiz
                    </h3>

                    <InfoRow
                      icon="/images/events/calendar.png"
                      label="Date: December 7th"
                    />

                    <InfoRow
                      icon="/images/events/time.png"
                      label="Time: 2:00 PM"
                    />

                    <InfoRow
                      icon="/images/events/location.png"
                      label="Venue: Sir Mutha Venkatasubba Rao Concert Hall, Chennai"
                    />

                    <InfoRow
                      icon="/images/events/age_limit.png"
                      label="Hosted by: Nawabzada Mohammed Asif Ali, Dewan to the Prince of Arcot"
                    />

                    <InfoRow
                      icon="/images/events/language.png"
                      label="Teams: 2 members | Fee: ₹199 per team"
                    />
                  </div>
                </div>

                <div className="flex justify-center pb-[30px]">
                  <Link to="/quizform">
                    <button className="cursor-pointer bg-[#a44294] mt-4 text-white px-4 py-2 rounded-md font-poppins font-medium">
                      Book Now
                    </button>
                  </Link>
                </div>
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
