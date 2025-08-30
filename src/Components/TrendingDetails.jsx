import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { panesContent } from "../../src/Pages/EventData";
export default function TrendingDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (location.state) {
      setEvent(location.state);
    } else {
      const found = panesContent.find((e) => e.id === Number(id));
      if (found) {
        setEvent(found);
      } else {
        navigate("/events", { replace: true });
      }
    }
  }, [id, location.state, navigate]);

  if (!event) return null;

  return (
    <>
      {/* Banner Section */}
      <section className="accaodomationBannerSection">
        <div>
          <img src="/images/trendingChennai/trending-chennai.jpg" alt="Banner" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Trending Chennai</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="/events">Trending Chennai</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="EventsBanSec SecPadblock12">
        <div className="container max-w-7xl mx-auto">
          <div className="EventContBox flex flex-wrap">
            <div className="EventLeft">
              <h2>{event.name}</h2>
              <div className="EventBanImg">
                <img src={event.image} alt={event.name} />
              </div>
              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  <h5>{event.TrendingCalendarCategory}</h5>
                </div>
              </div>
              <div className="EventContBox mb-[5vh]">
                <h3>About The Trending</h3>
                <p>{event.trendingDetails}</p>
              </div>
            </div>

            <div className="EventRight">
              <div className="evderibox">
                <div className="evderListbox">
                 
                  <div className="evderViewbox">
                    {event.TrendingCalendarMonth && (
                      <InfoRow
                        icon="/images/events/calendar.png"
                        label={event.TrendingCalendarMonth}
                      />
                    )}
                    {event.TrendingCalendarTime && (
                      <InfoRow
                        icon="/images/events/time.png"
                        label={event.TrendingCalendarTime}
                      />
                    )}
                    {event.duration && (
                      <InfoRow
                        icon="/images/events/duration.png"
                        label={event.duration}
                      />
                    )}
                    {event.ageRestriction && (
                      <InfoRow
                        icon="/images/events/age_limit.png"
                        label={event.ageRestriction}
                      />
                    )}
                    {event.language && (
                      <InfoRow
                        icon="/images/events/language.png"
                        label={event.language}
                      />
                    )}
                    {event.genre && (
                      <InfoRow
                        icon="/images/events/genre.png"
                        label={event.genre}
                      />
                    )}
                    {event.venue && (
                      <InfoRow
                        icon="/images/events/location.png"
                        label={event.venue}
                      />
                    )}
                  </div>
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