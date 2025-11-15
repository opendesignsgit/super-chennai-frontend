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
                  <strong>
                    Celebrating the Spirit of the City | August 17, 2025{" "}
                  </strong>
                </p>
                <p>
                  Get ready, Chennai! This Madras Week, we’re hitting the
                  streets for a one-of-a-kind Car Treasure Hunt that celebrates
                  the stories, spirit, and soul of our city.
                </p>
                <p>
                  <strong>What is it?</strong>
                </p>
                <p>
                  An exciting, city-wide treasure hunt on wheels. Teams will
                  drive across Chennai solving clues, completing quirky
                  challenges, and discovering iconic spots — old, new, and
                  hidden in plain sight. From local legends to cultural gems,
                  this is your chance to explore Chennai like never before.
                </p>
                <p>
                  <strong>What to Expect</strong>
                </p>
                <p>
                  <ul style={{ paddingLeft: "30px" }}>
                    <li style={{ listStyle: "disc" }}>
                      A city trail filled with fun clues, pit stops, and local
                      trivia
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Tasks at each location — from street food challenges to
                      photo ops
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Goodie bags and exciting prizes for top finishers
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      A great way to celebrate Madras Day with family, friends,
                      or coworkers
                    </li>

                    <li style={{ listStyle: "disc" }}>
                      Media coverage and surprise elements along the way
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Who Can Join</strong>
                </p>
                <p>
                  Anyone with a car and a sense of adventure. Families,
                  students, working professionals, or curious citizens — this
                  event is open to all.
                </p>
                <p>
                  <strong>Why Join</strong>
                </p>
                <p>
                  Because Chennai is more than just a city — it’s a living
                  story. Let’s celebrate its charm, its chaos, its colours —
                  together. This isn’t just a race. It’s a journey through
                  Madras. Fun guaranteed. City pride unlocked.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="EventRight">
              <div className="evderibox mt-[70px]">
                <div className="evderListbox">
                  <div className="evderViewbox">
                    <InfoRow
                      icon="/images/events/calendar.png"
                      label="Sunday, August 17, 2025"
                    />
                    <InfoRow icon="/images/events/time.png" label="8:30 AM" />
                    <InfoRow
                      icon="/images/events/time.png"
                      label="Duration : 2hrs"
                    />

                    <InfoRow
                      icon="/images/events/age_limit.png"
                      label="Up to 4 people per car"
                    />
                    <InfoRow
                      icon="/images/events/language.png"
                      label="₹1250 per car"
                    />

                    <InfoRow
                      icon="/images/events/location.png"
                      label="Lady Andal School, Chetpet "
                    />
                  </div>
                </div>
                <div className="flex justify-center pb-[30px]">
                  <Link to="/carrallyform-hidedpage">
                    <button
                      className="cursor-pointer"
                      style={{
                        background: "#a44294",
                        marginTop: "15px",
                        color: "white",
                        padding: "5px 14px",
                        borderRadius: "5px",
                        fontFamily: "Poppins",
                        fontWeight: 500,
                      }}
                    >
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
