import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { cards } from "../../EventData";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function EventsDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const stateEvent = location.state?.card;
    console.log(stateEvent);

    if (stateEvent) {
      setEvent(stateEvent);
    } else {
      const found = cards.find((e) => e.id === Number(id));
      if (found) {
        setEvent(found);
      } else {
        navigate("/events", { replace: true });
      }
    }
  }, [id, location.state, navigate]);

  if (!event) {
    return null; // or loader
  }

  return (
    <>
      <Helmet>
        <title>{event.metaTitleEvent}</title>
        <meta name="description" content={event.metaDescriptionEvent} />
        <link rel="canonical" href={event.conicallinkEvent} />
      </Helmet>
      {/* Banner Section */}
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="  /images/events/events.jpg"
            alt=""
          />{" "}
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="/events">Events</Link>
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
              <h2>{event.EventsCalendarTitle}</h2>

              <div className="EventBanImg">
                <img src={event.image} alt={event.EventsCalendarTitle} />
              </div>

              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  <h5>{event.EventsCalendarCategory}</h5>
                </div>
              </div>

              <div className="EventContBox mb-[5vh]">
                <h3>About The Event</h3>
                {/* <p>{event.aboutFull}</p> */}
                <p dangerouslySetInnerHTML={{ __html: event.aboutFull }} />
              </div>

              {/* Artist Info */}
              {/* <div className="EventContBox">
                <h3>Artists</h3>
                <div className="ArtistsImg">
                  <img
                    src={event.artistImage || event.image}
                    alt={event.artistName}
                  />
                </div>
                <h4 className="flex flex-col">
                  <strong>{event.artistName || "Unknown Artist"}</strong>
                  <small>{event.role || "Performer"}</small>
                </h4>
              </div> */}
            </div>

            {/* Right Side */}
            <div className="EventRight">
              <div className="evderibox">
                <div className="evderListbox">
                  {/* <div className="evderViewbox">
                    <InfoRow
                      icon="/images/events/calendar.png"
                      label={event.EventsCalendarMonth}
                    />
                    <InfoRow
                      icon="/images/events/time.png"
                      label={event.EventsCalendarTime}
                    />
                    <InfoRow
                      icon="/images/events/duration.png"
                      label={event.hours || ""}
                    />
                    <InfoRow
                      icon="/images/events/age_limit.png"
                      label={event.ageLimit || ""}
                    />
                    <InfoRow
                      icon="/images/events/language.png"
                      label={event.language || ""}
                    />
                    <InfoRow
                      icon="/images/events/genre.png"
                      label={event.rleigion || ""}
                    />
                    <InfoRow
                      icon="/images/events/location.png"
                      label={event.location || ""}
                    />
                  </div> */}
                  <div className="evderViewbox">
                    {event.EventsCalendarMonth && (
                      <InfoRow
                        icon="/images/events/calendar.png"
                        label={event.EventsCalendarMonth}
                      />
                    )}
                    {event.EventsCalendarTime && (
                      <InfoRow
                        icon="/images/events/time.png"
                        label={event.EventsCalendarTime}
                      />
                    )}
                    {event.hours && (
                      <InfoRow
                        icon="/images/events/duration.png"
                        label={event.hours}
                      />
                    )}
                    {event.ageLimit && (
                      <InfoRow
                        icon="/images/events/age_limit.png"
                        label={event.ageLimit}
                      />
                    )}
                    {event.language && (
                      <InfoRow
                        icon="/images/events/language.png"
                        label={event.language}
                      />
                    )}
                    {event.rleigion && (
                      <InfoRow
                        icon="/images/events/genre.png"
                        label={event.rleigion}
                      />
                    )}
                    {event.location && (
                      <InfoRow
                        icon="/images/events/location.png"
                        label={event.location}
                      />
                    )}
                  </div>
                </div>

                {event.siteLink && (
                  <div className="flex justify-center pb-[30px]">
                    <a href={event.siteLink || "#"}>
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
                )}
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
