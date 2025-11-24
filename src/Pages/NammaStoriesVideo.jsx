// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const newsPhotos = [
//   {
//     id: 1,
//     Title: "Marina My Love",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-1.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/9qRfIXUd1nE?si=yIhCWjovvCJfjqLt",
//     LikeCount: 0,
//     DirectorName: "Adil Syed",
//     DirectorMailID: "adilfilmography@gmail.com",
//   },
//   {
//     id: 2,
//     Title: "City of Hope",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-2.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/RW2IoESUAak?si=_AXivwSIXHffSDRy",
//     LikeCount: 0,
//     DirectorName: "Swaraj Gramika",
//     DirectorMailID: "sathiyaprabushanmugam@gmail.com",
//   },

//   {
//     id: 3,
//     Title: "Theru Kural",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-3.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/NJHrGEEuP80?si=nbUAKvrPVYLYOS7L",
//     LikeCount: 0,
//     DirectorName: "Narendhiran BJ",
//     DirectorMailID: "Narendhiran2105@gmail.com",
//   },
//   {
//     id: 4,
//     Title: "The Second Half",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-4.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/yzXeLJH9qVQ?si=idgeAtOXHqA2kZwa",
//     LikeCount: 0,
//     DirectorName: "Shah Riya Khan",
//     DirectorMailID: "shariya16@gmail.com",
//   },
//   {
//     id: 5,
//     Title: "Pan India Prachanai",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-5.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/_7hP0oy_Pt8?si=mf2P6bFKIyYu_Gll",
//     LikeCount: 0,
//     DirectorName: "Rupak",
//     DirectorMailID: "rupak.wins@gmail.com",
//   },
//   //   {
//   //     id: 6,
//   //     Title: "Payanam",
//   //     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-6.jpg",
//   //     Link: "Super Chennai, a citizen-powered urban movement.",
//   //     IframeLink: "https://www.youtube.com/embed/9qRfIXUd1nE?si=yIhCWjovvCJfjqLt",
//   //     LikeCount: 0,
//   //     DirectorName: "Harikesavan",
//   //     DirectorMailID: "Harikesavan2296@gmail.com",
//   //   },
//   {
//     id: 7,
//     Title: "Namma Chennai",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-7.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/RuK2m5kUYAg?si=XPze72bkCSRzhnJf",
//     LikeCount: 0,
//     DirectorName: "Santhosh Sanmugam",
//     DirectorMailID: "6mugam2002@gmail.com",
//   },
//   {
//     id: 8,
//     Title: "Dharisanam",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-8.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/76v7dOxnm9E?si=XspyDQT-Ppp_6pbD",
//     LikeCount: 0,
//     DirectorName: "Rahul Magesh",
//     DirectorMailID: "rahulmagesh10@gmail.com",
//   },
//   {
//     id: 9,
//     Title: "Puthiya Payanam",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-9.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/droGMmrzZFg?si=ERNRiGlO2SjNm4UX",
//     LikeCount: 0,
//     DirectorName: "Sathish Kumar",
//     DirectorMailID: "kgysathish@gmail.com",
//   },
//   {
//     id: 10,
//     Title: "Naan Dhaan",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-10.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/Lib_n0ZKGcY?si=0hyMl04PyuqyW84P",
//     LikeCount: 0,
//     DirectorName: "Satish Geetha Kumar",
//     DirectorMailID: "dharma.vicky966@gmail.com",
//   },
//   {
//     id: 11,
//     Title: "Marina Nagaram",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-11.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/6WMRSzsCAlY?si=1Q2J3V_FZ5S1kbNa",
//     LikeCount: 0,
//     DirectorName: "Sanjay K Kannappan",
//     DirectorMailID: "sanjaykannappan1995@gmail.com",
//   },
//   {
//     id: 12,
//     Title: "Oru Melisana Kodu",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-12.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/Xw3ArYSd1lg?si=q-5Fv3d-xofSs0k1",
//     LikeCount: 0,
//     DirectorName: "Ram Gautham M",
//     DirectorMailID: "ramgauthamm@gmail.com",
//   },
// ];

// export default function NammaStoriesVideo() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [cards, setCards] = useState(newsPhotos);
//   const [likedCards, setLikedCards] = useState({});

//   // Load liked state from localStorage on mount
//   useEffect(() => {
//     const storedLikes = JSON.parse(localStorage.getItem("likedCards")) || {};
//     setLikedCards(storedLikes);
//   }, []);

//   // Save liked state to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("likedCards", JSON.stringify(likedCards));
//   }, [likedCards]);

//   const handleLike = (id) => {
//     setCards((prevCards) =>
//       prevCards.map((card) => {
//         if (card.id === id) {
//           const isLiked = likedCards[id];
//           return {
//             ...card,
//             LikeCount: isLiked ? card.LikeCount - 1 : card.LikeCount + 1,
//           };
//         }
//         return card;
//       })
//     );

//     setLikedCards((prev) => ({
//       ...prev,
//       [id]: !prev[id], // toggle like state
//     }));
//   };

//   return (
//     <>
//       <div id="NammaStoriesVideoId"></div>
//       <div className="NammaStoriesVideoDiv">
//         <div className="container max-w-7xl mx-auto nammaStoriesVideoStyle">
//           <div class="Eventitlesec mb-[50px] text-center">
//             <h2 class="text-[#a44294]">Madras Day Short Film Contest</h2>
//             {/* <p>
//               Stay updated with the latest images, videos, and highlights from
//               SuperChennai’s events, announcements, and developments.
//             </p> */}
//           </div>
//           <div className="EventsListboxs flex flex-wrap">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="EventsItems bg-white cursor-pointer newsLetterImage"
//                 // onClick={() => setSelectedCard(card)}
//                 style={{
//                   transition: "transform 0.3s",
//                 }}
//               >
//                 <div
//                   className="relative w-full EventsItemImg youtubeIConStyle"
//                   onClick={() => setSelectedCard(card)}
//                   style={{
//                     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                   }}
//                 >
//                   <img
//                     onClick={() => setSelectedCard(card)}
//                     src={card.Thumbnail}
//                     alt={card.Title}
//                     className="w-full object-cover"
//                   />
//                 </div>
//                 <div className="EventsIteCont flex flex-col items-start">
//                   {/* <h2 className="titlePublished">{card.Company}</h2> */}
//                   <h3 className="EveItemtitles">
//                     <div className="flex items-end justify-start gap-2 mt-2 mb-1 cursor-default">
//                       <img
//                         className="cursor-pointer"
//                         onClick={() => handleLike(card.id)}
//                         style={{ width: "24px" }}
//                         src={
//                           likedCards[card.id]
//                             ? "/images/icons/like-after.svg" // when liked
//                             : "/images/icons/like-before.svg" // when not liked
//                         }
//                         alt=""
//                       />
//                       <div
//                         className="nammaStoriesLikesCount"
//                         // onClick={() => handleLike(card.id)}
//                       >
//                         {card.LikeCount} Likes
//                       </div>
//                     </div>
//                     <div
//                       style={{ fontWeight: "500" }}
//                       className="MovieTitle cursor-default"
//                       state={{ card }}
//                     >
//                       {card.Title}
//                     </div>

//                     <div
//                       className="directorNameNammaStories cursor-default"
//                       style={{ fontWeight: "400" }}
//                       // onClick={() => setSelectedCard(card)}
//                       state={{ card }}
//                     >
//                       Directed by : {` ${card.DirectorName}`}
//                     </div>
//                     <div
//                       className="readMoreMainDiv"
//                       onClick={() => setSelectedCard(card)}
//                     >
//                       <Link
//                         onClick={() => setSelectedCard(card)}
//                         className="ReadmoreNewArticles"
//                       >
//                         Watch Video
//                       </Link>
//                     </div>
//                   </h3>
//                 </div>
//                 <div className="EventsIteCont flex flex-col items-start">
//                   {/* <h3 className="text-lg font-semibold">{card.Title}</h3> */}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Popup */}
//           <AnimatePresence>
//             {selectedCard && (
//               <motion.div
//                 className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <motion.div
//                   className="bg-white p-6 rounded-xl w-auto relative popupSection"
//                   initial={{ scale: 0.8, opacity: 0, y: 50 }}
//                   animate={{ scale: 1, opacity: 1, y: 0 }}
//                   exit={{ scale: 0.8, opacity: 0, y: 50 }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                 >
//                   <button
//                     className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
//                     onClick={() => setSelectedCard(null)}
//                   >
//                     ×
//                   </button>
//                   {/* <img
//                   src={selectedCard.Thumbnail}
//                   alt={selectedCard.title}
//                   className="w-full mb-4 rounded popupSection paddingSection"
//                 /> */}

//                   <iframe
//                     className="nammastoriesPopupIframe"
//                     src={selectedCard.IframeLink}
//                     title="YouTube video player"
//                     frameborder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerpolicy="strict-origin-when-cross-origin"
//                     allowfullscreen
//                   ></iframe>
//                   {/* <h2 className="text-2xl font-bold mb-2">
//                     {selectedCard.title}
//                   </h2> */}
//                   {/* <p className="text-gray-600">{selectedCard.description}</p> */}
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {/* Popup */}
//         </div>
//       </div>
//     </>
//   );
// }

// const videosData = [
//   {
//     id: 1,
//     Title: "Marina My Love",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-1.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/9qRfIXUd1nE?si=yIhCWjovvCJfjqLt",
//     LikeCount: 0,
//     DirectorName: "Adil Syed",
//     DirectorMailID: "adilfilmography@gmail.com",
//   },
//   {
//     id: 2,
//     Title: "City of Hope",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-2.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/RW2IoESUAak?si=_AXivwSIXHffSDRy",
//     LikeCount: 0,
//     DirectorName: "Swaraj Gramika",
//     DirectorMailID: "sathiyaprabushanmugam@gmail.com",
//   },
//   {
//     id: 3,
//     Title: "Theru Kural",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-3.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/NJHrGEEuP80?si=nbUAKvrPVYLYOS7L",
//     LikeCount: 0,
//     DirectorName: "Narendhiran BJ",
//     DirectorMailID: "Narendhiran2105@gmail.com",
//   },
//   {
//     id: 4,
//     Title: "The Second Half",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-4.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/yzXeLJH9qVQ?si=idgeAtOXHqA2kZwa",
//     LikeCount: 0,
//     DirectorName: "Shah Riya Khan",
//     DirectorMailID: "shariya16@gmail.com",
//   },
//   {
//     id: 5,
//     Title: "Pan India Prachanai",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-5.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/_7hP0oy_Pt8?si=mf2P6bFKIyYu_Gll",
//     LikeCount: 0,
//     DirectorName: "Rupak",
//     DirectorMailID: "rupak.wins@gmail.com",
//   },
//   {
//     id: 7,
//     Title: "Namma Chennai",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-7.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/RuK2m5kUYAg?si=XPze72bkCSRzhnJf",
//     LikeCount: 0,
//     DirectorName: "Santhosh Sanmugam",
//     DirectorMailID: "6mugam2002@gmail.com",
//   },
//   {
//     id: 8,
//     Title: "Dharisanam",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-8.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/76v7dOxnm9E?si=XspyDQT-Ppp_6pbD",
//     LikeCount: 0,
//     DirectorName: "Rahul Magesh",
//     DirectorMailID: "rahulmagesh10@gmail.com",
//   },
//   {
//     id: 9,
//     Title: "Puthiya Payanam",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-9.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/droGMmrzZFg?si=ERNRiGlO2SjNm4UX",
//     LikeCount: 0,
//     DirectorName: "Sathish Kumar",
//     DirectorMailID: "kgysathish@gmail.com",
//   },
//   {
//     id: 10,
//     Title: "Naan Dhaan",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-10.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/Lib_n0ZKGcY?si=0hyMl04PyuqyW84P",
//     LikeCount: 0,
//     DirectorName: "Satish Geetha Kumar",
//     DirectorMailID: "dharma.vicky966@gmail.com",
//   },
//   {
//     id: 11,
//     Title: "Marina Nagaram",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-11.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/6WMRSzsCAlY?si=1Q2J3V_FZ5S1kbNa",
//     LikeCount: 0,
//     DirectorName: "Sanjay K Kannappan",
//     DirectorMailID: "sanjaykannappan1995@gmail.com",
//   },
//   {
//     id: 12,
//     Title: "Oru Melisana Kodu",
//     Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-12.jpg",
//     Link: "Super Chennai, a citizen-powered urban movement.",
//     IframeLink: "https://www.youtube.com/embed/Xw3ArYSd1lg?si=q-5Fv3d-xofSs0k1",
//     LikeCount: 0,
//     DirectorName: "Ram Gautham M",
//     DirectorMailID: "ramgauthamm@gmail.com",
//   },
// ];

// import React, { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; // 👈 need: npm install uuid

// const CLIENT_UUID_KEY = "nammaStoriesUUID";

// function getClientUUID() {
//   let uuid = localStorage.getItem(CLIENT_UUID_KEY);
//   if (!uuid) {
//     uuid = uuidv4();
//     localStorage.setItem(CLIENT_UUID_KEY, uuid);
//   }
//   return uuid;
// }

// export default function NammaStoriesVideo() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [cards, setCards] = useState(videosData);
//   const [likedCards, setLikedCards] = useState({});

//   const clientUUID = getClientUUID();

//   const handleLike = async (id) => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/videos/like`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id, uuid: clientUUID }),
//         }
//       );

//       const data = await res.json();

//       if (data.success) {
//         await fetchLiked();
//         await fetchVideoLikes();

//         setCards((prevCards) =>
//           prevCards.map((card) =>
//             card.id === id ? { ...card, LikeCount: data.likeCount } : card
//           )
//         );

//         setLikedCards((prev) => ({
//           ...prev,
//           [id]: true,
//         }));
//       }
//     } catch (err) {
//       console.error("Error liking video:", err);
//     }
//   };

//   const fetchLiked = async () => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/videos/liked?uuid=${clientUUID}` // 👈 pass uuid
//       );
//       const data = await res.json();
//       if (data.success) {
//         const likedObj = {};
//         data.liked.forEach((id) => {
//           likedObj[id] = true;
//         });
//         setLikedCards(likedObj);
//       }
//     } catch (err) {
//       console.error("Error fetching liked videos:", err);
//     }
//   };

//   const fetchVideoLikes = async () => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/videos/videoslikes`
//       );
//       const data = await res.json();
//       if (data.success) {
//         setCards((prevCards) =>
//           prevCards.map((card) => {
//             const found = data.videos.find((v) => v.video_id === card.id);
//             return found
//               ? { ...card, LikeCount: parseInt(found.like_count, 10) }
//               : card;
//           })
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching video likes:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLiked();
//     fetchVideoLikes();
//   }, []);

//   return (
//     <>
//       <div id="NammaStoriesVideoId"></div>
//       <div className="NammaStoriesVideoDiv">
//         <div className="container max-w-7xl mx-auto nammaStoriesVideoStyle">
//           <div className="Eventitlesec mb-[50px] text-center">
//             <h2 className="text-[#a44294]">Madras Day Short Film Contest</h2>
//           </div>

//           <div className="EventsListboxs flex flex-wrap">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="EventsItems bg-white cursor-pointer newsLetterImage"
//               >
//                 <div
//                   className="relative w-full EventsItemImg youtubeIConStyle"
//                   onClick={() => setSelectedCard(card)}
//                   style={{
//                     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                   }}
//                 >
//                   <img
//                     onClick={() => setSelectedCard(card)}
//                     src={card.Thumbnail}
//                     alt={card.Title}
//                     className="w-full object-cover"
//                   />
//                 </div>

//                 <div className="EventsIteCont flex flex-col items-start">
//                   <h3 className="EveItemtitles">
//                     <div className="flex items-end justify-start gap-2 mt-2 mb-1 cursor-default">
//                       <img
//                         className="cursor-pointer"
//                         onClick={() => handleLike(card.id)}
//                         style={{ width: "24px" }}
//                         src={
//                           likedCards[card.id]
//                             ? "/images/icons/like-after.svg"
//                             : "/images/icons/like-before.svg"
//                         }
//                         alt="like button"
//                       />
//                       <div className="nammaStoriesLikesCount">
//                         {card.LikeCount || 0} Likes
//                       </div>
//                     </div>

//                     <div
//                       style={{ fontWeight: "500" }}
//                       className="MovieTitle cursor-default"
//                     >
//                       {card.Title}
//                     </div>

//                     <div
//                       className="directorNameNammaStories"
//                       style={{ fontWeight: "400" }}
//                       onClick={() => setSelectedCard(card)}
//                     >
//                       Directed by : {` ${card.DirectorName}`}
//                     </div>

//                     <div
//                       className="readMoreMainDiv"
//                       onClick={() => setSelectedCard(card)}
//                     >
//                       <Link className="ReadmoreNewArticles">Watch Video</Link>
//                     </div>
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Popup */}
//           <AnimatePresence>
//             {selectedCard && (
//               <motion.div
//                 className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <motion.div
//                   className="bg-white p-6 rounded-xl w-auto relative popupSection"
//                   initial={{ scale: 0.8, opacity: 0, y: 50 }}
//                   animate={{ scale: 1, opacity: 1, y: 0 }}
//                   exit={{ scale: 0.8, opacity: 0, y: 50 }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                 >
//                   <button
//                     className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
//                     onClick={() => setSelectedCard(null)}
//                   >
//                     ×
//                   </button>
//                   <iframe
//                     className="nammastoriesPopupIframe"
//                     src={selectedCard.IframeLink}
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                   ></iframe>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </>
//   );
// }

const videosData = [
  {
    id: 1,
    Title: "Marina My Love",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-1.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/9qRfIXUd1nE?si=yIhCWjovvCJfjqLt",
    LikeCount: 0,
    DirectorName: "Adil Syed",
    DirectorMailID: "adilfilmography@gmail.com",
  },
  // {
  //   id: 2,
  //   Title: "City of Hope",
  //   Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-2.jpg",
  //   Link: "Super Chennai, a citizen-powered urban movement.",
  //   IframeLink: "https://www.youtube.com/embed/RW2IoESUAak?si=_AXivwSIXHffSDRy",
  //   LikeCount: 0,
  //   DirectorName: "Swaraj Gramika",
  //   DirectorMailID: "sathiyaprabushanmugam@gmail.com",
  // },
  // {
  //   id: 3,
  //   Title: "Theru Kural",
  //   Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-3.jpg",
  //   Link: "Super Chennai, a citizen-powered urban movement.",
  //   IframeLink: "https://www.youtube.com/embed/NJHrGEEuP80?si=nbUAKvrPVYLYOS7L",
  //   LikeCount: 0,
  //   DirectorName: "Narendhiran BJ",
  //   DirectorMailID: "Narendhiran2105@gmail.com",
  // },
  {
    id: 4,
    Title: "The Second Half",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-4.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/yzXeLJH9qVQ?si=idgeAtOXHqA2kZwa",
    LikeCount: 0,
    DirectorName: "Shah Riya Khan",
    DirectorMailID: "shariya16@gmail.com",
  },
  {
    id: 5,
    Title: "Pan India Prachanai",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-5.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/_7hP0oy_Pt8?si=mf2P6bFKIyYu_Gll",
    LikeCount: 0,
    DirectorName: "Rupak",
    DirectorMailID: "rupak.wins@gmail.com",
  },
  {
    id: 6,
    Title: "Payanam",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-6.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/7A0qqDrGfQI?si=3hX3Y6U5bGQb7BIZ",
    LikeCount: 0,
    DirectorName: "Harikesavan",
    DirectorMailID: "Harikesavan2296@gmail.com",
  },
  {
    id: 7,
    Title: "Namma Chennai",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-7.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/RuK2m5kUYAg?si=XPze72bkCSRzhnJf",
    LikeCount: 0,
    DirectorName: "Santhosh Sanmugam",
    DirectorMailID: "6mugam2002@gmail.com",
  },
  // {
  //   id: 8,
  //   Title: "Dharisanam",
  //   Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-8.jpg",
  //   Link: "Super Chennai, a citizen-powered urban movement.",
  //   IframeLink: "https://www.youtube.com/embed/76v7dOxnm9E?si=XspyDQT-Ppp_6pbD",
  //   LikeCount: 0,
  //   DirectorName: "Rahul Magesh",
  //   DirectorMailID: "rahulmagesh10@gmail.com",
  // },
  {
    id: 9,
    Title: "Puthiya Payanam",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-9.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/droGMmrzZFg?si=ERNRiGlO2SjNm4UX",
    LikeCount: 0,
    DirectorName: "Sathish Kumar",
    DirectorMailID: "kgysathish@gmail.com",
  },
  {
    id: 10,
    Title: "Naan Dhaan",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-10.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/Lib_n0ZKGcY?si=0hyMl04PyuqyW84P",
    LikeCount: 0,
    DirectorName: "Satish Geetha Kumar",
    DirectorMailID: "dharma.vicky966@gmail.com",
  },
  {
    id: 11,
    Title: "Marina Nagaram",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-11.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/6WMRSzsCAlY?si=1Q2J3V_FZ5S1kbNa",
    LikeCount: 0,
    DirectorName: "Sanjay K Kannappan",
    DirectorMailID: "sanjaykannappan1995@gmail.com",
  },
  {
    id: 12,
    Title: "Oru Melisana Kodu",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-12.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/Xw3ArYSd1lg?si=q-5Fv3d-xofSs0k1",
    LikeCount: 0,
    DirectorName: "Ram Gautham M",
    DirectorMailID: "ramgauthamm@gmail.com",
  },
  {
    id: 13,
    Title: "Meraki",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-13.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/0Ce4D7irztA?si=bCBqKblU7EDjtB9i",
    LikeCount: 0,
    DirectorName: "Monish Elamaran",
    DirectorMailID: "monish2196@gmail.com",
  },
  {
    id: 14,
    Title: "Dreamers",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-14.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/cUFLnq_xjRM?si=XB7ZGhYnY4x5pTuk",
    LikeCount: 0,
    DirectorName: "Shriram Thenappan",
    DirectorMailID: "shriramthenappan11@gmail.com",
  },
  {
    id: 15,
    Title: "Regret",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-15.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/scDvAH8A6MQ?si=s26mOmkufpqellGH",
    LikeCount: 0,
    DirectorName: "Guru Raghavan",
    DirectorMailID: "gururaghavan6382@gmail.com",
  },
  {
    id: 16,
    Title: "Luck",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-16.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/hQKcSobNd2U?si=aYkHEYODgV0I8RAo",
    LikeCount: 0,
    DirectorName: "Devesh Doss",
    DirectorMailID: "ideveshdas.14@gmail.com",
  },

  {
    id: 17,
    Title: "Money",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-17.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/_T_Pb2Gj2DU?si=y0W7VbRg8_c1vHU-",
    LikeCount: 0,
    DirectorName: "Sharvin",
    DirectorMailID: "Sharvinjana001@gmail.com",
  },

  {
    id: 18,
    Title: "Connected",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-18.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/tg56S_4a9VY?si=SgbKdtw9p4Gazsd-",
    LikeCount: 0,
    DirectorName: "K. Gnanaguru",
    DirectorMailID: "gnanaguru055@gmail.com",
  },

  {
    id: 19,
    Title: "Aram Suzha",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-19.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/oaepgUEgCH4?si=PhzVcBTl9ZLol82Q",
    LikeCount: 0,
    DirectorName: "Rajen",
    DirectorMailID: "peoplepictures.movie@gmail.com",
  },

  {
    id: 20,
    Title: "Tiffin Box",
    Thumbnail: "/images/NammaStories-Videos/thumbnail-youtube-20.jpg",
    Link: "Super Chennai, a citizen-powered urban movement.",
    IframeLink: "https://www.youtube.com/embed/j6UPcxkXrB0?si=l9Ir3dKzH4v4wsHv",
    LikeCount: 0,
    DirectorName: "Dilip",
    DirectorMailID: "dilipan0811@gmail.com",
  },
];

// import React, { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; // 👈 need: npm install uuid

// const CLIENT_UUID_KEY = "nammaStoriesUUID";

// function getClientUUID() {
//   let uuid = localStorage.getItem(CLIENT_UUID_KEY);
//   if (!uuid) {
//     uuid = uuidv4();
//     localStorage.setItem(CLIENT_UUID_KEY, uuid);
//   }
//   return uuid;
// }

// export default function NammaStoriesVideo() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [cards, setCards] = useState(videosData);
//   const [likedCards, setLikedCards] = useState({});

//   const clientUUID = getClientUUID();

// const handleLike = async (id) => {
//   try {
//     const res = await fetch(
//       `${import.meta.env.VITE_API_BASE_URL}/videos/like`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id, uuid: clientUUID }),
//       }
//     );

//     const data = await res.json();

//     if (data.success) {
//       await fetchLiked();
//       await fetchVideoLikes();

//       setCards((prevCards) =>
//         prevCards.map((card) =>
//           card.id === id ? { ...card, LikeCount: data.likeCount } : card
//         )
//       );

//       setLikedCards((prev) => ({
//         ...prev,
//         [id]: true,
//       }));
//     }
//   } catch (err) {
//     console.error("Error liking video:", err);
//   }
// };

//   const fetchLiked = async () => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/videos/liked?uuid=${clientUUID}` // 👈 pass uuid
//       );
//       const data = await res.json();
//       if (data.success) {
//         const likedObj = {};
//         data.liked.forEach((id) => {
//           likedObj[id] = true;
//         });
//         setLikedCards(likedObj);
//       }
//     } catch (err) {
//       console.error("Error fetching liked videos:", err);
//     }
//   };

//   const fetchVideoLikes = async () => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/videos/videoslikes`
//       );
//       const data = await res.json();
//       if (data.success) {
//         setCards((prevCards) =>
//           prevCards.map((card) => {
//             const found = data.videos.find((v) => v.video_id === card.id);
//             return found
//               ? { ...card, LikeCount: parseInt(found.like_count, 10) }
//               : card;
//           })
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching video likes:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLiked();
//     fetchVideoLikes();
//   }, []);

//   return (
//     <div className="NammaStoriesVideoDiv">
//       <div className="container max-w-7xl mx-auto nammaStoriesVideoStyle">
//         <div className="Eventitlesec mb-[50px] text-center">
//           <h2 className="text-[#a44294]">Madras Day Short Film Contest</h2>
//         </div>

//         <div className="EventsListboxs flex flex-wrap">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="EventsItems bg-white cursor-pointer newsLetterImage"
//             >
//               <div
//                 className="relative w-full EventsItemImg youtubeIConStyle"
//                 onClick={() => setSelectedCard(card)}
//                 style={{
//                   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                 }}
//               >
//                 <img
//                   onClick={() => setSelectedCard(card)}
//                   src={card.Thumbnail}
//                   alt={card.Title}
//                   className="w-full object-cover"
//                 />
//               </div>

//               <div className="EventsIteCont flex flex-col items-start">
//                 <h3 className="EveItemtitles">
//                   <div className="flex items-end justify-start gap-2 mt-2 mb-1 cursor-default">
//                     <img
//                       className="cursor-pointer"
//                       onClick={() => handleLike(card.id)}
//                       style={{ width: "24px" }}
//                       src={
//                         likedCards[card.id]
//                           ? "/images/icons/like-after.svg"
//                           : "/images/icons/like-before.svg"
//                       }
//                       alt="like button"
//                     />
//                     <div className="nammaStoriesLikesCount">
//                       {card.LikeCount || 0} Likes
//                     </div>
//                   </div>

//                   <div
//                     style={{ fontWeight: "500" }}
//                     className="MovieTitle cursor-default"
//                   >
//                     {card.Title}
//                   </div>

//                   <div
//                     className="directorNameNammaStories"
//                     style={{ fontWeight: "400" }}
//                     onClick={() => setSelectedCard(card)}
//                   >
//                     Directed by : {` ${card.DirectorName}`}
//                   </div>

//                   <div
//                     className="readMoreMainDiv"
//                     onClick={() => setSelectedCard(card)}
//                   >
//                     <Link className="ReadmoreNewArticles">Watch Video</Link>
//                   </div>
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Popup */}
//         <AnimatePresence>
//           {selectedCard && (
//             <motion.div
//               className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 className="bg-white p-6 rounded-xl w-auto relative popupSection"
//                 initial={{ scale: 0.8, opacity: 0, y: 50 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.8, opacity: 0, y: 50 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//               >
//                 <button
//                   className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
//                   onClick={() => setSelectedCard(null)}
//                 >
//                   ×
//                 </button>
//                 <iframe
//                   className="nammastoriesPopupIframe"
//                   src={selectedCard.IframeLink}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 ></iframe>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // npm install uuid

const CLIENT_UUID_KEY = "nammaStoriesUUID";

function getClientUUID() {
  let uuid = localStorage.getItem(CLIENT_UUID_KEY);
  if (!uuid) {
    uuid = uuidv4();
    localStorage.setItem(CLIENT_UUID_KEY, uuid);
  }
  return uuid;
}

export default function NammaStoriesVideo() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState(videosData);
  const [likedCards, setLikedCards] = useState({});

  const clientUUID = getClientUUID();

  // 🔹 Toggle Like / Unlike
  const handleLike = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/videos/like`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, uuid: clientUUID }),
        }
      );

      const data = await res.json();

      if (data.success) {
        // update count
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, LikeCount: data.likeCount } : card
          )
        );

        // update liked state (true = liked, false = unliked)
        setLikedCards((prev) => ({
          ...prev,
          [id]: data.liked,
        }));
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  const fetchLiked = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/videos/liked?uuid=${clientUUID}`
      );
      const data = await res.json();
      if (data.success) {
        const likedObj = {};
        data.liked.forEach((id) => {
          likedObj[id] = true;
        });
        setLikedCards(likedObj);
      }
    } catch (err) {
      console.error("Error fetching liked videos:", err);
    }
  };

  const fetchVideoLikes = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/videos/videoslikes`
      );
      const data = await res.json();
      if (data.success) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            const found = data.videos.find((v) => v.video_id === card.id);
            return found
              ? { ...card, LikeCount: parseInt(found.like_count, 10) }
              : card;
          })
        );
      }
    } catch (err) {
      console.error("Error fetching video likes:", err);
    }
  };

  useEffect(() => {
    fetchLiked();
    fetchVideoLikes();
  }, []);

  return (
    <>
      <div id="NammaStoriesVideoId"></div>
      <div className="NammaStoriesVideoDiv">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294] particularTitle">
              Namma Stories Video Contest Results
            </h2>
          </div>
          <div className="nammaStorieswinner">
            <div className="nammaStoriesvideo-card nammaStorieswinner-card youtubeIConStyle">
              <img
                src="/images/NammaStories-Videos/thumbnail-youtube-2.jpg"
                alt="Winner Video"
              />
              <div className="nammaStorieslabel1">
                <img src="/images/Winner.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="nammaStorierunner-ups">
            <div className="nammaStoriesvideo-card runner-up-card silver youtubeIConStyle runnerupStyle">
              <img
                src="/images/NammaStories-Videos/thumbnail-youtube-3.jpg"
                alt="1st Runner-Up"
              />
            </div>
            <div className="nammaStoriesvideo-card runner-up-card bronze youtubeIConStyle runnerupStyle1">
              <img
                src="/images/NammaStories-Videos/thumbnail-youtube-8.jpg"
                alt="2nd Runner-Up"
              />
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto nammaStoriesVideoStyle">
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">Namma Stories List of Nominees</h2>
          </div>

          <div className="EventsListboxs flex flex-wrap">
            {cards.map((card, index) => (
              <div
                key={index}
                className="EventsItems bg-white cursor-pointer newsLetterImage"
              >
                <div
                  className="relative w-full EventsItemImg youtubeIConStyle"
                  onClick={() => setSelectedCard(card)}
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <img
                    onClick={() => setSelectedCard(card)}
                    src={card.Thumbnail}
                    alt={card.Title}
                    className="w-full object-cover"
                  />
                </div>

                <div className="EventsIteCont flex flex-col items-start">
                  <h3 className="EveItemtitles">
                    {/* <div className="flex items-end justify-start gap-2 mt-2 mb-1 cursor-default">
                      <img
                        className="cursor-pointer"
                        onClick={() => handleLike(card.id)}
                        style={{ width: "24px" }}
                        src={
                          likedCards[card.id]
                            ? "/images/icons/like-after.svg" // Liked state
                            : "/images/icons/like-before.svg" // Unliked state
                        }
                        alt="like button"
                      />
                      <div className="nammaStoriesLikesCount">
                        {card.LikeCount || 0} Likes
                      </div>
                    </div> */}

                    <div
                      style={{ fontWeight: "500" }}
                      className="MovieTitle cursor-default"
                    >
                      {card.Title}
                    </div>

                    <div
                      className="directorNameNammaStories"
                      style={{ fontWeight: "400" }}
                      onClick={() => setSelectedCard(card)}
                    >
                      Directed by : {` ${card.DirectorName}`}
                    </div>

                    <div
                      className="readMoreMainDiv"
                      onClick={() => setSelectedCard(card)}
                    >
                      <Link className="ReadmoreNewArticles">Watch Video</Link>
                    </div>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Popup */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl w-auto relative popupSection"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
                    onClick={() => setSelectedCard(null)}
                  >
                    ×
                  </button>
                  <iframe
                    className="nammastoriesPopupIframe"
                    src={selectedCard.IframeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
             <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl w-auto relative popupSection"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
                    onClick={() => setSelectedCard(null)}
                  >
                    ×
                  </button>
                  <iframe
                    className="nammastoriesPopupIframe"
                    src={selectedCard.IframeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
             <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl w-auto relative popupSection"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
                    onClick={() => setSelectedCard(null)}
                  >
                    ×
                  </button>
                  <iframe
                    className="nammastoriesPopupIframe"
                    src={selectedCard.IframeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
             <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl w-auto relative popupSection"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
                    onClick={() => setSelectedCard(null)}
                  >
                    ×
                  </button>
                  <iframe
                    className="nammastoriesPopupIframe"
                    src={selectedCard.IframeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
