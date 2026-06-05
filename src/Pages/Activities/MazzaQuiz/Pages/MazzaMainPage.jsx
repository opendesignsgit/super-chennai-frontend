import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MajaMarquee from "./MajaaaMarquee";

export default function MazzaMainPage() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };

  const handleStartQuiz = () => {
    if (!isChecked) {
      toast.error("Please agree to the Terms & Conditions");
      return;
    }

    navigate("/majaa-quiz/login");
  };

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const menifeto = document.querySelector("#menifeto-tab");
    const hotshots = document.querySelector("#hotshots-event-tab");
    const sticky = document.querySelector("#mainfirst");

    if (menifeto) menifeto.style.display = "none";
    if (hotshots) hotshots.style.display = "none";
    if (sticky) sticky.style.setProperty("display", "none", "important");

    return () => {
      if (menifeto) menifeto.style.display = "";
      if (hotshots) hotshots.style.display = "";
      if (sticky) sticky.style.display = "";
    };
  }, []);

  const schemaData = 
 {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Majja quiz",
  "description": "Think you know Chennai Summer? Take part in Majaa Quiz and discover fun facts, pop culture, iconic hangout spots, seasonal favourites, and city memories.",
  "image": "https://www.superchennai.com/images/events/maja-quiz-banner.jpeg",
  "startDate": "2026-06-05T12:00+05:30",
  "endDate": "2026-06-30T12:00+05:30",
  "eventStatus": "https://schema.org/EventMovedOnline",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.superchennai.com/contest/majaa-quiz"
  }
}

  return (
    <>
      <Helmet>
        <title>Majaa Quiz | Chennai Summer Festival Quiz Experience</title>

        <meta
          name="description"
          content="Think you know Chennai Summer? Take part in Majaa Quiz and discover fun facts, pop culture, iconic hangout spots, seasonal favourites, and city memories."
        />
           <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/contest/majaa-quiz`}
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <ToastContainer position="top-center" />

      {/* Banner */}

      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/maja-quiz-banner.jpeg"
            alt="Super Chennai Quiz"
            loading="lazy"
          />

          <img
            className="block sm:hidden"
            src="/images/events/mobile-maja-quiz-banner.jpeg"
            alt="Super Chennai Quiz Mobile"
            loading="lazy"
          />
        </div>
       
      </section>


      <MajaMarquee />

      <div className="drasection">
        <img src="/images/wonderla-logo.jpg" alt="DRA Logo" loading="lazy" />
      </div>


      <section
        className="w-full flex flex-col text-center py-10"
        style={{ paddingBottom: 0 }}
      >
        <div className="container max-w-7xl mx-auto px-4 !mb-0">
          <h2 className="chennaiInvestmentsHeading leading-tight !text-[#4459A8]">
            Majaa quiz
          </h2>

          <div className="workIntro">
            <p>
              Think you know Chennai summers? From beach vibes and mango madness
              to iconic hangout spots and seasonal favourites, Majaa Quiz is
              bringing a fun dose of summer to the festival.
            </p>
            <p>
              Packed with exciting trivia, local favourites, pop-culture
              moments, and everything that screams "Chennai Summer," this quiz
              is your chance to relive the season's best memories. Whether
              you're a foodie hunting for the best summer treats, a beach lover
              chasing sunsets, or someone who lives for city adventures, there's
              something for everyone.
            </p>

            <p>
              Discover fun facts, explore summer-themed questions, and celebrate
              the sights, flavours, and experiences that make Chennai summers
              unforgettable. So gather your friends, test your summer knowledge,
              and dive into a world of sunshine, stories, and city vibes.
            </p>

            <p>
              <strong>
                Because Chennai summer isn't just a season—it's a whole vibe.
              </strong>
            </p>
          </div>

          <div className="mt-6 workIntro">
            <div className="flex justify-start items-center gap-1 sksksksks">
              <input
                className="inputcheckoososs"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />

              <span className="text-sm font-semibold ihavereaddd">
                I have read and agree to the{" "}
                <span className="termssss cursor-pointer" onClick={togglePopup}>
                  Terms & Conditions
                </span>{" "}
                and contest rules.
              </span>
            </div>
          </div>

          <button
            onClick={handleStartQuiz}
            className="text-white py-2 px-4 rounded-lg transition-colors font-semibold mb-6 theme-button-small cursor-pointer mt-3"
            style={{
              background: "linear-gradient(90deg, #5A67D8, #9F4DB8)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #4C51BF, #8B3FA8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #5A67D8, #9F4DB8)")
            }
          >
            Start Quiz
          </button>
        </div>

        <img
          src="/images/events/majaaa-img.jpeg"
          alt="Trivia 2025"
          loading="lazy"
        />
      </section>

      {/* Terms Popup */}

      {popupOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl p-10 animate-fadeIn termsandconditionpopup">
            <h2 className="text-3xl text-[#a44294] font-semibold text-center termsandconsiodid">
              Terms and Conditions
            </h2>

            <ul className="text-white p-6 space-y-4 max-w-xl popupwidthdd">
              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p
                  className="text-sm text-[#000] leading-relaxed"
                  style={{ fontWeight: 500 }}
                >
                  Get all <strong>*3 quiz answers right* </strong> to enter the
                  winner's race.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p className="text-sm text-[#000]">
                  The <strong>*first 3 participants* </strong> with all correct
                  answers will win exciting vouchers.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p className="text-sm text-[#000] leading-relaxed">
                  The quiz is live only from{" "}
                  <strong>*8:00 AM to 8:00 PM*. </strong>Late entries won't make
                  the cut.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img className="w-5" src="/images/tick-2.svg" alt="" />

                <p className="text-sm text-[#000] leading-relaxed">
                  It's all about <strong>*speed and accuracy*.</strong> Prizes
                  are non-transferable, and the organizer's decision is final.
                </p>
              </li>
            </ul>

            <button
              onClick={togglePopup}
              className="absolute top-8 right-7 w-8 h-8 rounded-full bg-[#a44294] text-white hover:bg-gray-800 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
// import { useState, useEffect } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import axios from "axios";
// import { Helmet } from "react-helmet-async";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { API_BASE_URL_API } from "../../../../../config";
// import PasswordInput from "../Components/PasswordInput";
// import { useRef } from "react";
// import { popup } from "leaflet";

// export default function mazzaMainPage({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const { token } = useParams();
//   const [page, setPage] = useState("login");
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [popupopen, setPopupOpen] = useState(false);

//   const popupFunction = () => {
//     if (popupopen == false) {
//       setPopupOpen(true);
//     } else {
//       setPopupOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (token) setPage("reset");
//   }, [token]);

//   const carryFormRef = useRef(null);

//   const scrollToForm = () => {
//     carryFormRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const routefunction = () => {
//     if (isChecked) {
//       navigate("/day-to-deliver-quiz/login");
//     } else {
//       toast.error("Please agree to the Terms & Conditions");
//     }
//   };

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;

//     if (isMobile) {
//       const menifeto = document.querySelector("#menifeto-tab");
//       const hotshots = document.querySelector("#hotshots-event-tab");
//       const sticky = document.querySelector("#mainfirst");

//       if (menifeto) menifeto.style.display = "none";
//       if (hotshots) hotshots.style.display = "none";
//       if (sticky) sticky.style.setProperty("display", "none", "important");
//     }
//   }, []);

//   const jarnaEdition = [
//     {
//       "@context": "https://schema.org",
//       "@type": "Event",
//       name: "Day to deliver-quiz",
//       description:
//         "Super Chennai Trivia brings a fun quiz on Chennai, culture, current affairs, civic awareness, and TN Elections. Test your knowledge of the city and its facts.",
//       image:
//         "https://www.superchennai.com/images/events/superchennai-triva-2025.png",
//       startDate: "2026-04-13T11:00+05:30",
//       endDate: "2026-04-23T24:00+05:30",
//       eventStatus: "https://schema.org/EventScheduled",
//       eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
//       location: {
//         "@type": "VirtualLocation",
//         url: "https://www.superchennai.com/day-to-deliver-quiz",
//       },
//       performer: {
//         "@type": "Person",
//         name: "Super Chennai",
//       },
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>
//           Superchennai DaytoDeliver Quiz | Superchennai Daily Trivia
//         </title>
//         <meta
//           name="description"
//           content="Super Chennai Trivia brings a fun quiz on Chennai, culture, current affairs, civic awareness, and TN Elections. Test your knowledge of the city and its facts."
//         />

//         <script type="application/ld+json">
//           {JSON.stringify(jarnaEdition)}
//         </script>
//       </Helmet>
//       <ToastContainer position="top-center" />

//       {/* ---------- Banner ---------- */}

//       <section className="accaodomationBannerSection carquizbanner">
//         <div>
//           <img
//             className="eventsCalenderIamge hidden sm:block"
//             src="/images/events/quiz-banner.jpeg"
//             alt="Super Chennai Quiz"
//           />

//           <img
//             className=" block sm:hidden"
//             src="/images/events/quiz-banner.jpeg"
//             alt="Super Chennai Quiz Mobile"
//           />
//         </div>

//         <div className="accodoamationBannerContainer">
//           <div className="accodoamationBannerText">
//             <h1>Day to deliver-quiz</h1>
//             <div className="breadCrum">
//               <Link to="/">Home</Link> - <Link to="">Day to deliver-quiz</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ---------- Game Section ---------- */}

//       <div className="drasection">
//         <img src="/images/dra-logo.png" alt="" />
//       </div>

//       <section
//         className="w-full flex flex-col  text-center   py-10"
//         style={{ paddingBottom: 0 }}
//       >
//         <div className="container max-w-7xl mx-auto px-4 !mb-0">
//           <div>
//             <div>
//               <h2 className="chennaiInvestmentsHeading leading-tight">
//                 Day to deliver-Quiz
//               </h2>

//               <div className="workIntro">
//                 <p>
//                   Know your constituencies across Chennai and its neighbouring
//                   districts. Understand the stakes that shape your region.
//                   Participate in the Day-to-Deliver Quiz, stay informed, and
//                   stand a chance to win exciting vouchers. Step in prepared, and
//                   deliver your vote with confidence this April 23.
//                 </p>
//               </div>

//               <div className="mt-6">
//                 <div className="flex justify-center items-center gap-1  items-center sksksksks ">
//                   <input
//                     className="inputcheckoososs"
//                     type="checkbox"
//                     checked={isChecked}
//                     onChange={(e) => setIsChecked(e.target.checked)}
//                   />
//                   <span className="text-sm font-semibold ihavereaddd">
//                     I have read and agree to the{" "}
//                     <span className="termssss" onClick={popupFunction}>
//                       Terms & Conditions
//                     </span>{" "}
//                     and contest rules.
//                   </span>
//                 </div>
//               </div>

//               <button
//                 onClick={routefunction}
//                 className="text-white py-2 px-4 rounded-lg transition-colors font-semibold mb-6 theme-button-small cursor-pointer mt-3"
//                 style={{
//                   background: "linear-gradient(90deg, #5A67D8, #9F4DB8)",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.background =
//                     "linear-gradient(90deg, #4C51BF, #8B3FA8)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.background =
//                     "linear-gradient(90deg, #5A67D8, #9F4DB8)")
//                 }
//               >
//                 Start Quiz
//               </button>
//               {/* )} */}
//             </div>
//           </div>
//         </div>
//         <img
//           src="/images/events/superchennai-triva-2025.png"
//           alt="Trivia 2025"
//         />
//       </section>

//       {/* popup */}

//       {popupopen && (
//         <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-sm ">
//           <div className="relative w-full max-w-xl  rounded-2xl bg-white shadow-2xl p-10 animate-fadeIn termsandconditionpopup">
//             <h2 className="text-3xl text-[#a44294] font-semibold mb-0 text-center termsandconsiodid">
//               Terms and Conditions
//             </h2>

//             <ul className=" text-white p-6  space-y-4 max-w-xl popupwidthdd">
//               <li
//                 className="flex items-start gap-3"
//                 style={{ fontWeight: "600" }}
//               >
//                 <img className="w-5" src="/images/tick-2.svg" alt="" />
//                 <p
//                   className="text-sm text-[#000] leading-relaxed"
//                   style={{ fontWeight: 500 }}
//                 >
//                   Be quick and smart! The{" "}
//                   <span className="font-semibold text-[#000]">
//                     first 3 participants
//                   </span>
//                   who submit the correct answer will win
//                   <span className="text-[#000] font-semibold">
//                     {" "}
//                     exciting vouchers
//                   </span>
//                   .
//                 </p>
//               </li>

//               <li
//                 className="flex items-start gap-3"
//                 style={{ fontWeight: "500" }}
//               >
//                 <img className="w-5" src="/images/tick-2.svg" alt="" />
//                 <p className="text-sm text-[#000]">
//                   Timing matters: Voting is open from
//                   <span className="font-semibold text-[#000]">
//                     {" "}
//                     8:00 AM to 8:00 PM
//                   </span>{" "}
//                   only.
//                 </p>
//               </li>

//               <li
//                 className="flex items-start gap-3"
//                 style={{ fontWeight: "500" }}
//               >
//                 <img className="w-5" src="/images/tick-2.svg" alt="" />
//                 <p className="text-sm text-[#000] leading-relaxed">
//                   Winners are selected based on
//                   <span className="font-semibold text-[#000]">
//                     {" "}
//                     speed and accuracy
//                   </span>{" "}
//                   — so don’t wait! Vouchers are non-transferable and cannot be
//                   exchanged for cash.
//                 </p>
//               </li>

//               <li
//                 className="flex items-start gap-3"
//                 style={{ fontWeight: "500" }}
//               >
//                 <img className="w-5" src="/images/tick-2.svg" alt="" />
//                 <p className="text-sm text-[#000] leading-relaxed">
//                   The organizer’s decision will be final in all cases.
//                 </p>
//               </li>
//             </ul>
//             <button
//               onClick={popupFunction}
//               className="absolute top-8 right-7 w-8 h-8 rounded-full
//   bg-[#a44294] text-white
//   hover:bg-gray-800
//   flex items-center justify-center cursor-pointer"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
