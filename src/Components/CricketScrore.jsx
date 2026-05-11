import React, { useEffect, useState, useRef } from "react";
import "../assets/Css/TrendingChennai.css";
import { iplcontents } from "../../src/Pages/EventData";

// export const iplcontents = [
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
//   {
//     id: 102345,
//     name: "New Sports Ground in Sowcarpet",
//     slug: "sports-ground-sowcarpet",
//     para: "A Fresh Recreational Space for Chennai Locals",
//     TrendingCalendarMonth: "April 2026",
//     TrendingCalendarTime: "Recently Opened",
//     TrendingCalendarCategory: "Lifestyle | Sports | Community | Trending",
//     image: "/images/trendingChennai/new-sports-ground.jpeg",
//     Homeimage: "/images/trendingChennai/new-sports-ground.jpeg",
//     link: "/trending-chennai/sports-ground-sowcarpet",
//     duration: "Open Daily",
//     ageRestriction: "Open for All",
//     language: "Tamil | English",
//     genre: "Sports | Fitness | Community",
//     venue: "Anna Pillai Street, Sowcarpet, Chennai",

//     trendingDetails: `
// <p>
// Chennai gets a new spot to play and unwind! 🏟️✨ A <b>newly developed sports ground</b> has been inaugurated at <b>Anna Pillai Street, Sowcarpet</b>.
// </p>

// <p>
// Opened by <b>M. K. Stalin</b>, this vibrant space is designed for both <b>recreation and community activities</b>, making it a great addition to the neighborhood 🙌
// </p>

// <p>
// <b>✨ What to expect:</b>
// </p>

// <p>
// • ⚽ <b>Sports Area:</b> Perfect for games and physical activities.<br>
// • 🚶 <b>Open Space:</b> Ideal for relaxation and casual hangouts.<br>
// • 👨‍👩‍👧‍👦 <b>Community Hub:</b> A place for locals to gather and connect.<br>
// • 💪 <b>Fitness-Friendly:</b> Encourages an active lifestyle.
// </p>

// <p>
// Whether you're looking to play, relax, or socialize, this new sports ground is set to become a go-to destination for Sowcarpet residents 🌆
// </p>

// <p>
// <a href="https://www.instagram.com/reel/DXYiFV8TUFH/?igsh=bWJsNHYyZmZ5MDRp" target="_blank">▶️ Click here to watch</a>
// </p>
// `,

//     TrendingLink: "",
//     YoutubeLink: "",

//     meta: {
//       title: "New Sports Ground Chennai | Sowcarpet Anna Pillai Street",
//       desc: "Discover the new sports ground in Sowcarpet, built for fitness, play, and community gatherings at Anna Pillai Street, offering a lively space in Chennai.",
//       url: "https://www.superchennai.com/trending-chennai/sports-ground-sowcarpet",
//     },
//   },
// ];

export default function CricketScrore() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const visibleCount = 3;
  const defaultWidth = 100;
  const activeWidth = 450;
  const margin = 10;

  const totalPanes = iplcontents.length;
  const maxIndex = totalPanes - visibleCount;

  const [currentIndex, setCurrentIndex] = useState(0);

  const getOffsetForIndex = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      const isActive = i === currentIndex;
      offset += isActive ? activeWidth + margin : defaultWidth + margin;
    }
    return offset;
  };

  const offset = getOffsetForIndex(currentIndex);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



const staticPointsTable = [
  {
    Name: "Royal Challengers Bengaluru",
    logo: "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/xUS54-BA0dFZPMtbCiHkzQ_48x48.png",
    Played: 11,
    Won: 7,
    Loss: 4,
    "No Result": 0,
    "Net Run Rate": "+1.103",
    Points: 14,
  },
  {
    Name: "Sunrisers Hyderabad",
    logo: "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/W0OCBYc05c5MFMrctF62kg_48x48.png",
    Played: 11,
    Won: 7,
    Loss: 4,
    "No Result": 0,
    "Net Run Rate": "+0.737",
    Points: 14,
  },
  {
    Name: "Gujarat Titans",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg",
    Played: 11,
    Won: 7,
    Loss: 4,
    "No Result": 0,
    "Net Run Rate": "+0.228",
    Points: 14,
  },
  {
    Name: "Punjab Kings",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",
    Played: 10,
    Won: 6,
    Loss: 3,
    "No Result": 1,
    "Net Run Rate": "+0.571",
    Points: 13,
  },
  {
    Name: "Chennai Super Kings",
    logo: "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/5G8eFjkPKNalIgL2FOtovg_48x48.png",
    Played: 11,
    Won: 6,
    Loss: 5,
    "No Result": 0,
    "Net Run Rate": "+0.185",
    Points: 12,
  },
  {
    Name: "Rajasthan Royals",
    logo: "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/GqIU6xhQAnCpy_Cbr2LZRA_48x48.png",
    Played: 11,
    Won: 6,
    Loss: 5,
    "No Result": 0,
    "Net Run Rate": "+0.082",
    Points: 12,
  },
  {
    Name: "Kolkata Knight Riders",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
    Played: 10,
    Won: 4,
    Loss: 5,
    "No Result": 1,
    "Net Run Rate": "-0.169",
    Points: 9,
  },
  {
    Name: "Delhi Capitals",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg",
    Played: 11,
    Won: 4,
    Loss: 7,
    "No Result": 0,
    "Net Run Rate": "-1.154",
    Points: 8,
  },
  {
    Name: "Mumbai Indians",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg",
    Played: 11,
    Won: 3,
    Loss: 8,
    "No Result": 0,
    "Net Run Rate": "-0.585",
    Points: 6,
  },
  {
    Name: "Lucknow Super Giants",
    logo: "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/OqrL0ztLy13FBpvuF6GCBQ_48x48.png",
    Played: 11,
    Won: 3,
    Loss: 8,
    "No Result": 0,
    "Net Run Rate": "-0.907",
    Points: 6,
  },
];

const [pointsTable, setPointsTable] = useState(staticPointsTable);
const [loadingTable, setLoadingTable] = useState(false);


//  const [pointsTable, setPointsTable] = useState([]);
//   const [loadingTable, setLoadingTable] = useState(true);

//   const getTeamLogo = (teamName) => {
//     const logos = {
//       "Sunrisers Hyderabad":
//         "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/W0OCBYc05c5MFMrctF62kg_48x48.png",

//       "Punjab Kings":
//         "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",

//       "Royal Challengers Bengaluru":
//         "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/xUS54-BA0dFZPMtbCiHkzQ_48x48.png",

//       "Rajasthan Royals":
//         "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/GqIU6xhQAnCpy_Cbr2LZRA_48x48.png",

//       "Gujarat Titans":
//         "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg",

//       "Chennai Super Kings":
//         "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/5G8eFjkPKNalIgL2FOtovg_48x48.png",

//       "Delhi Capitals":
//         "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg",

//       "Kolkata Knight Riders":
//         "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",

//       "Mumbai Indians":
//         "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg",

//       "Lucknow Super Giants":
//         "https://ssl.gstatic.com/onebox/media/sports/logos/optimized/OqrL0ztLy13FBpvuF6GCBQ_48x48.png",
//     };

//     return logos[teamName] || "";
//   };

//   useEffect(() => {
//     fetch(
//       "https://api.cricapi.com/v1/series?apikey=5a56adc7-d735-4a11-8cc7-8ec1581112d0"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API DATA", data);

//         if (data.status !== "success") {
//           console.log("Failed");
//           return;
//         }

//         const formattedData = data.data.map((team) => ({
//           Name: team.teamName,
//           logo: getTeamLogo(team.teamName),
//           Played: team.matches,
//           Won: team.wins,
//           Loss: team.loss,
//           "No Result": team.noResult,
//           "Net Run Rate":
//             team.netRunRate > 0
//               ? `+${team.netRunRate}`
//               : `${team.netRunRate}`,
//           Points: team.points,
//         }));

//         setPointsTable(formattedData);
//         setLoadingTable(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoadingTable(false);
//       });
//   }, []);

  
  return (
    <div className="tredingMainContainer">
      <div className="tredingChennaiRow">
        <div
          className={`TrendingTextBackground ${
            scrollDir === "right"
              ? "Trendingscroll-right"
              : "Trendingscroll-left"
          }`}
          ref={bgTextRef}
        >
          {/* <p>CSK &nbsp; Chennai &nbsp; CSK &nbsp; CRICKET</p> */}
        </div>
      </div>

      <section className="TrendCheniSec">
        <div className="container max-w-7xl mx-auto flex mainContainerFlexTrending">
          <div className="trendccol trendcLeft">
            {/* <h2>Chennai Superkings</h2> */}
            <img className="iplimageee" src="/images/ipl/ipl-logo.png" alt="" />
            <p className="trendingChennaiText">
              The Indian Premier League (IPL) is a spectacular cricket league
              that combines sport, passion, and entertainment like no other.
              Featuring the best cricketers from around the world, IPL is known
              for intense rivalries, powerful performances, and edge-of-the-seat
              matches. It has created a global platform where young players
              showcase their talent and become stars overnight. With legendary
              teams, loyal fan bases, and electrifying stadium atmosphere, every
              IPL season creates unforgettable memories. The IPL T20 tournament
              is not just cricket—it is an emotion shared by millions. IPL
              remains one of the biggest and most popular sports leagues in the
              world.
            </p>
            <div className="mt-4">
              <a
                href="/ipl-2026-match-updates"
                className="inline-block px-5 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition"
              >
                View More →
              </a>
            </div>
          </div>

          <div className="trendccol trendcRight">
            <div className="relative">
              <div
                className="sliders-container h-[60vh] TrendingChennaiSliderContainer"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  margin: "0 auto",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="accordion-track"
                  style={{
                    display: "flex",
                    transition: "transform 0.4s ease",
                    transform: `translateX(-${offset}px)`,
                  }}
                >
                  {iplcontents.map((pane, index) => {
                    const isActive = index === currentIndex;
                    const isHidden = index >= iplcontents.length - 2;

                    return (
                      <div
                        key={pane.id}
                        className={`trendingChennaiCard panes ${
                          isActive ? "active" : ""
                        } ${isHidden ? "hide" : ""}`}
                        style={{
                          flex: "0 0 auto",
                          width: isActive ? activeWidth : defaultWidth,
                          height: isActive ? "60vh" : "50vh",
                          margin: "0 5px",
                          fontWeight: isActive ? "bold" : "normal",
                          boxSizing: "border-box",
                          opacity: isHidden ? 0 : 1,
                          visibility: isHidden ? "hidden" : "visible",
                          transition: "all 0.9s ease",
                        }}
                      >
                        <div className="relative h-full">
                          <a href={`/ipl/${pane.slug}`}>
                            <div className="hbintimg relative h-full">
                              <img
                                src={pane.Homeimage}
                                alt={pane.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>

                            <div
                              className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end"
                              style={{ opacity: isActive ? 1 : 0 }}
                            >
                              <div className="hbintContin">
                                <h3>{pane.name}</h3>
                                <p>{pane.para}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="arrows absolute left-[60%] bottom-[4%] flex buttonsTredingSections">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`sldArrow trendingChennaiPrev cursor-pointer ${
                    currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
                  }`}
                ></button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className={`sldArrow trendingChennaiNext cursor-pointer ${
                    currentIndex === maxIndex
                      ? "opacity-30 cursor-not-allowed"
                      : ""
                  }`}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-5xl mx-auto pointsTableSection mt-10 p-6">
        {/* <section className="mx-auto w-full max-w-[768px] pointsTableSection mt-10 p-6"> */}
        <div className="bg-slate-900/30 backdrop-blur-xl   rounded-1xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-[#19398a] via-[#1f45a8] to-[#19398a] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-200 tracking-tight">
                        Team
                      </span>
                    </div>
                  </th>
                  <th className="px-3 py-3 text-center">
                    <span className="text-slate-300 uppercase tracking-wider text-xs font-bold">
                      P
                    </span>
                  </th>
                  <th className="px-3 py-3 text-center">
                    <span className="text-slate-300 uppercase tracking-wider text-xs font-bold">
                      W
                    </span>
                  </th>
                  <th className="px-3 py-3 text-center">
                    <span className="text-slate-300 uppercase tracking-wider text-xs font-bold">
                      L
                    </span>
                  </th>
                  <th className="px-3 py-3 text-center">
                    <span className="text-slate-300 uppercase tracking-wider text-xs font-bold">
                      NR
                    </span>
                  </th>
                  <th className="px-3 py-3 text-center">
                    <span className="text-slate-300 uppercase tracking-wider text-xs font-bold">
                      NRR
                    </span>
                  </th>
                  <th className="px-4 py-3 text-right">
                    <span className="text-slate-200 font-black tracking-tight">
                      Pts
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {pointsTable.map((team, index) => {
                  const position = index + 1;
                  const isTop3 = position <= 3;
                  const isPlayoff = position <= 4;
                  const nrr = parseFloat(team["Net Run Rate"] || "0") || 0;
                  const nrrColor = nrr >= 0 ? "text-green-600" : "text-red-500";

                  return (
                    <tr
                      key={index}
                      className={`
          border border-[#f5f5f5f5]
          ${isTop3 ? "bg-green-50" : ""}
          ${position === 1 ? "border-t-2 border-green-400" : ""}
        `}
                    >
                      {/* Team + Position */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {/* Position */}
                          <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-black">
                              {position}
                            </span>
                          </div>

                          {/* Top 3 Indicator */}
                          {isTop3 && (
                            <div
                              className={`w-3 h-3 rounded-full ${
                                position === 1
                                  ? "bg-green-500"
                                  : position === 2
                                    ? "bg-yellow-500"
                                    : "bg-red-400"
                              }`}
                            ></div>
                          )}

                          {/* ✅ Team Logo */}
                          <img
                            src={team.logo}
                            alt={team.Name}
                            className="w-6 h-6 object-contain"
                          />

                          {/* Team Name */}
                          <div className="min-w-0 flex-1">
                            <span className="text-sm font-semibold text-gray-900">
                              {team.Name}
                            </span>

                            {isPlayoff && (
                              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                                PO
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      {/* Stats */}
                      <td className="px-3 py-3 text-center text-gray-800 font-medium">
                        {team.Played || 0}
                      </td>

                      <td className="px-3 py-3 text-center text-green-600 font-semibold">
                        {team.Won || 0}
                      </td>

                      <td className="px-3 py-3 text-center text-red-500 font-semibold">
                        {team.Loss || 0}
                      </td>

                      <td className="px-3 py-3 text-center text-gray-600">
                        {team["No Result"] || 0}
                      </td>

                      <td className="px-3 py-3 text-center">
                        <span className={`font-semibold ${nrrColor}`}>
                          {team["Net Run Rate"] || "0.00"}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-right">
                        <div className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                          <span className="text-xs font-bold text-black">
                            {team.Points || 0}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Compact Footer */}
          {/* <div className="px-4 py-2.5 bg-gradient-to-r from-slate-800/50 to-transparent border-t border-slate-700/50">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span>Total Played</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">47</span>
              <span className="text-rose-400 font-bold">🔴 -58</span>
            </div>
          </div> */}
        </div>
      </section>

      
    </div>
  );
}
