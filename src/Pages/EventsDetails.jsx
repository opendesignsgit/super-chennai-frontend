// import { useEffect, useState } from "react";
// import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
// import { cards } from "./EventData";
// import { Helmet, HelmetProvider } from "react-helmet-async";

// export default function EventsDetailsOld() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { url } = useParams();

//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     const stateEvent = location.state?.card;
//     console.log("Event from state:", stateEvent);

//     if (stateEvent) {
//       setEvent(stateEvent);
//     } else {
//       const found = cards.find((e) => e.url === url);
//       if (found) {
//         setEvent(found);
//       } else {
//         // navigate("/events", { replace: true });
//       }
//     }
//   }, [url, location.state, navigate]);

//   if (!event) {
//     return null; // or loader
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{event.metaTitleEvent}</title>
//         <meta name="description" content={event.metaDescriptionEvent} />
//         <link rel="canonical" href={event.conicallinkEvent} />
//       </Helmet>
//       {/* Banner Section */}
//       <section className="accaodomationBannerSection">
//         <div>
//           <img
//             className="eventsCalenderIamge"
//             src="  /images/events/events.jpg"
//             alt=""
//           />{" "}
//         </div>
//         <div className="accodoamationBannerContainer">
//           <div className="accodoamationBannerText">
//             <h3>Events</h3>
//             <div className="breadCrum">
//               <Link to="/">Home</Link> - <Link to="/events">Events</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Event Content Section */}
//       <section className="EventsBanSec SecPadblock12">
//         <div className="container max-w-7xl mx-auto">
//           <div className="EventContBox flex flex-wrap">
//             {/* Left Side */}
//             <div className="EventLeft">
//               <h1>{event.EventsCalendarTitle}</h1>

//               <div className="EventBanImg">
//                 <img src={event.image} alt={event.EventsCalendarTitle} />
//               </div>

//               <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
//                 <div className="ebbmgiL flex gap-2">
//                   <h5>{event.EventsCalendarCategory}</h5>
//                 </div>
//               </div>

//               <div className="EventContBox mb-[5vh]">
//                 <h3>About The Event</h3>
//                 {/* <p>{event.aboutFull}</p> */}
//                 <p dangerouslySetInnerHTML={{ __html: event.aboutFull }} />
//               </div>

           
//             </div>

//             {/* Right Side */}
//             <div className="EventRight">
//               <div className="evderibox pb-[30px]">
//                 <div className="evderListbox">
           
//                   <div className="evderViewbox">
//                     {event.EventsCalendarMonth && (
//                       <InfoRow
//                         icon="/images/events/calendar.png"
//                         label={event.EventsCalendarMonth}
//                       />
//                     )}
//                     {event.EventsCalendarTime && (
//                       <InfoRow
//                         icon="/images/events/time.png"
//                         label={event.EventsCalendarTime}
//                       />
//                     )}
//                     {event.hours && (
//                       <InfoRow
//                         icon="/images/events/duration.png"
//                         label={event.hours}
//                       />
//                     )}
//                     {event.ageLimit && (
//                       <InfoRow
//                         icon="/images/events/age_limit.png"
//                         label={event.ageLimit}
//                       />
//                     )}
//                     {event.language && (
//                       <InfoRow
//                         icon="/images/events/language.png"
//                         label={event.language}
//                       />
//                     )}
//                     {event.rleigion && (
//                       <InfoRow
//                         icon="/images/events/genre.png"
//                         label={event.rleigion}
//                       />
//                     )}
//                     {event.location && (
//                       <InfoRow
//                         icon="/images/events/location.png"
//                         label={event.location}
//                       />
//                     )}
//                   </div>
//                 </div>

//                 {event.siteLink && (
//                   <div
//                     className="flex justify-center pb-[0px]"
//                     style={{ display: event.RegisterLink ? "none" : "flex" }}
//                   >
//                     <a href={event.siteLink || "#"}>
//                       <button
//                         className="cursor-pointer"
//                         style={{
//                           background: "#a44294",
//                           marginTop: "15px",
//                           color: "white",
//                           padding: "5px 14px",
//                           borderRadius: "5px",
//                           fontFamily: "Poppins",
//                           fontWeight: 500,
//                           width: "max-content",
//                         }}
//                       >
//                         {/* {event.clickHere ? "Book Now1" : "Book Now"} */}
//                         {event && (event.clickHere ? "Click to View " : "Book Now")}
//                       </button>
//                     </a>
//                   </div>
//                 )}
//                 {event.RegisterLink && (
//                   <div className="flex justify-center pb-[30px]">
//                     <a href={event.RegisterLink || "#"}>
//                       <button
//                         className="cursor-pointer"
//                         style={{
//                           background: "#a44294",
//                           marginTop: "15px",
//                           color: "white",
//                           padding: "5px 14px",
//                           borderRadius: "5px",
//                           fontFamily: "Poppins",
//                           fontWeight: 500,
//                           width: "120px",
//                         }}
//                       >
//                         Book Now
//                       </button>
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function InfoRow({ icon, label }) {
//   return (
//     <div className="evderlinks flex items-center mb-2">
//       <div className="iconsssec flex items-center w-6 h-6 mr-2">
//         <img src={icon} alt="icon" className="w-full h-full object-contain" />
//       </div>
//       <p>{label}</p>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { cards } from "./EventData";
import { Helmet } from "react-helmet-async";

export default function EventsDetailsOld() {
  const location = useLocation();
  const { slug } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const stateEvent = location.state?.card;

    if (stateEvent) {
      setEvent(stateEvent);
    } else {
      const found = cards.find((e) => e.url === slug);
      if (found) {
        setEvent(found);
      }
    }
  }, [slug, location.state]);

  if (!event) return null;

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
            src="/images/events/events.jpg"
            alt="Events Banner"
          />
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
            {/* Left Section */}
            <div className="EventLeft">
              <h1>{event.EventsCalendarTitle}</h1>

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
                <p dangerouslySetInnerHTML={{ __html: event.aboutFull }} />
              </div>
            </div>

            {/* Right Section */}
            <div className="EventRight">
              <div className="evderibox pb-[30px]">
                <div className="evderListbox">
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

                {/* SITE LINK BUTTON */}
                {event.siteLink && !event.RegisterLink && (
                  <div className="flex justify-center pb-[0px]">
                    <a href={event.siteLink}>
                      <button
                        className="cursor-pointer"
                        style={{
                          background: "#a44294",
                          marginTop: "15px",
                          color: "white",
                          padding: "5px 14px",
                          borderRadius: "5px",
                          fontFamily: "Poppins",
                          fontWeight: 500
                        }}
                      >
                        {event.clickHere ? "Click to View" : "Book Now"}
                      </button>
                    </a>
                  </div>
                )}

                {/* REGISTER LINK BUTTON */}
                {event.RegisterLink && (
                  <div className="flex justify-center pb-[30px]">
                    <a href={event.RegisterLink}>
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
                          width: "120px"
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
