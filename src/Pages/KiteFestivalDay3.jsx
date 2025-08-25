import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
// import { cards } from "../../EventData";

export default function KiteFestivalDay3() {
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
            <h3>4th Tamil Nadu International Kite Festival</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="/eventsmain"> (Car Treasure Hunt)</Link>
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
              <h2>4th Tamil Nadu International Kite Festival | Day 3</h2>

              <div className="EventBanImg">
                <img src="/images/events/car-rally.jpg" />
              </div>

              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  {/* <h5> Car Treasure Hunt</h5> */}
                </div>
              </div>

              <div className="EventContBox mb-[5vh]">
                <h3>About The Event</h3>

                <p>
                  Get ready for four days of color, creativity, and family fun
                  at Thiruvidanthai Beach! Kite enthusiasts from around the
                  world—including France, Thailand, Switzerland, Singapore,
                  Malaysia, Vietnam, and India—come together for a spectacular
                  celebration of sky art.
                </p>
                <p>
                  <strong>Day 4 Highlights:</strong>
                </p>
                <p>
                  The festival’s grand finale on Day 4 promises an unforgettable
                  experience at Thiruvidanthai Beach, ECR, Mahabalipuram,
                  starting from 3 PM onwards. Enjoy dazzling international giant
                  kite displays, thrilling acrobatic performances, mesmerizing
                  LED kite shows, sparkling fireworks, a lively kids’ carnival,
                  and a variety of shopping, food stalls, and cultural
                  activities—making it a perfect family-friendly celebration of
                  creativity and fun.
                </p>

                <p>
                  <strong>Special Attractions:</strong>
                  <ul style={{ paddingLeft: "30px" }}>
                    <li style={{ listStyle: "disc" }}>
                      Over 250 kites from eight countries painting the sky
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Vibrant themed kites promoting “SAVE MARINE LIFE”
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Huge colorful teddy bears and realistic dinosaurs for
                      photo fun
                    </li>
                  </ul>
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
                      label="16 August 2025"
                    />

                    <InfoRow
                      icon="/images/events/time.png"
                      label="Time: 3 PM onwards"
                    />

                    <InfoRow
                      icon="/images/events/location.png"
                      label="Venue: Thiruvidanthai Beach, ECR, Mahabalipuram"
                    />
                  </div>
                </div>
                <div className="flex justify-center pb-[30px]">
                  <a href="https://www.district.in/events/4th-tamil-nadu-international-kite-festival-day-3-buy-tickets?disableSSR=true">
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
                  </a>
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
