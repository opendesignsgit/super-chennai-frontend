import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
// import { cards } from "../../EventData";

export default function KiteFestivalDay4() {
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
              <h2>4th Tamil Nadu International Kite Festival | Day 4</h2>

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
                  Welcome to the 4th Tamil Nadu International Kite Festival!
                  Experience four days of color, creativity, and family fun at
                  Thiruvidanthai Beach. Kite enthusiasts from around the
                  world—including France, Thailand, Switzerland, Singapore,
                  Malaysia, Vietnam, and India—come together for a spectacular
                  celebration of sky art. Organised by Global Media Box in
                  association with the Department of Tourism, Tamil Nadu, this
                  year’s festival promises to be bigger and better than ever.
                </p>
                <p>
                  <strong>What to Expect:</strong>
                </p>
                <p>
                  Visitors can enjoy a thrilling lineup of events, featuring
                  dazzling international giant kite displays, breathtaking
                  acrobatic kite performances, and mesmerizing LED kite shows
                  that light up the sky. The festival also includes a sparkling
                  fireworks display, a lively kids’ carnival, and a variety of
                  shopping, food stalls, and cultural activities, making it a
                  fun-filled experience for the entire family.
                </p>

                <p>
                  <strong>Special Attractions:</strong>
                </p>
                <p>
                  Over 250 kites from eight countries will paint the skies,
                  alongside vibrant themed kites promoting “SAVE MARINE LIFE”.
                  Don’t miss the huge colorful teddy bears and realistic
                  dinosaurs, perfect for photo opportunities and adding extra
                  fun for visitors of all ages.
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
                      label="Sunday, 17 August 2025"
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
                  <a href="https://www.district.in/events/4th-tamil-nadu-international-kite-festival-day-4-buy-tickets?disableSSR=true">
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
