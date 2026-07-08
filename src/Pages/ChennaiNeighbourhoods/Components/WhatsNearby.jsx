// // // import React, { useEffect, useState } from "react";
// // // import Slider from "react-slick";
// // // import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// // // import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

// // // function calculateDistance(lat1, lon1, lat2, lon2) {
// // //   const R = 6371; // Radius of the earth in km
// // //   const dLat = ((lat2 - lat1) * Math.PI) / 180;
// // //   const dLon = ((lon2 - lon1) * Math.PI) / 180;
// // //   const a =
// // //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// // //     Math.cos((lat1 * Math.PI) / 180) *
// // //       Math.cos((lat2 * Math.PI) / 180) *
// // //       Math.sin(dLon / 2) *
// // //       Math.sin(dLon / 2);
// // //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// // //   return R * c;
// // // }

// // // function estimateTravelTime(distanceInKM) {
// // //   if (!distanceInKM || distanceInKM === Infinity) return "5 mins";
// // //   if (distanceInKM <= 1) {
// // //     const mins = Math.max(2, Math.round(distanceInKM * 12));
// // //     return `${mins} mins`;
// // //   } else {
// // //     const mins = Math.round(distanceInKM * 3);
// // //     return `${mins} mins`;
// // //   }
// // // }

// // // function PrevArrow({ onClick }) {
// // //   return (
// // //     <button
// // //       onClick={onClick}
// // //       className="absolute cursor-pointer neighmainlocationscardleft left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
// // //     >
// // //       <ChevronLeft size={20} color="#a44294" strokeWidth={3} />
// // //     </button>
// // //   );
// // // }

// // // function NextArrow({ onClick }) {
// // //   return (
// // //     <button
// // //       onClick={onClick}
// // //       className="absolute cursor-pointer neighmainlocationscardright right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
// // //     >
// // //       <ChevronRight size={20} color="#a44294" strokeWidth={3} />
// // //     </button>
// // //   );
// // // }

// // // export default function WhatsNearby({ data }) {
// // //   const [userLocation, setUserLocation] = useState(null);
// // //   const [sortedPlaces, setSortedPlaces] = useState([]);

// // //   useEffect(() => {
// // //     if (typeof window !== "undefined" && navigator.geolocation) {
// // //       navigator.geolocation.getCurrentPosition(
// // //         (position) => {
// // //           setUserLocation({
// // //             latitude: position.coords.latitude,
// // //             longitude: position.coords.longitude,
// // //           });
// // //         },
// // //         (error) => {
// // //           console.error(
// // //             "Geolocation denied, falling back to default Chennai coordinates",
// // //             error,
// // //           );
// // //           setUserLocation({ latitude: 13.0827, longitude: 80.2707 }); // Chennai default configuration center
// // //         },
// // //       );
// // //     }
// // //   }, []);

// // //   // Sorting process handler array
// // //   useEffect(() => {
// // //     if (data && Array.isArray(data)) {
// // //       if (userLocation) {
// // //         const withDistance = data.map((place) => {
// // //           const itemLat = place.location?.latitude;
// // //           const itemLng = place.location?.longitude;

// // //           if (!itemLat || !itemLng) {
// // //             return { ...place, computedDistance: Infinity };
// // //           }

// // //           const dist = calculateDistance(
// // //             userLocation.latitude,
// // //             userLocation.longitude,
// // //             itemLat,
// // //             itemLng,
// // //           );

// // //           return { ...place, computedDistance: parseFloat(dist.toFixed(2)) };
// // //         });

// // //         // Ascending order filter alignment
// // //         const sorted = withDistance.sort(
// // //           (a, b) => a.computedDistance - b.computedDistance,
// // //         );
// // //         setSortedPlaces(sorted);
// // //       } else {
// // //         setSortedPlaces(data);
// // //       }
// // //     }
// // //   }, [data, userLocation]);

// // //   const settings = {
// // //     dots: false,
// // //     infinite: sortedPlaces.length > 5,
// // //     speed: 500,
// // //     slidesToShow: Math.min(5, sortedPlaces.length || 1),
// // //     slidesToScroll: 1,
// // //     prevArrow: <PrevArrow />,
// // //     nextArrow: <NextArrow />,
// // //     responsive: [
// // //       { breakpoint: 1280, settings: { slidesToShow: 4 } },
// // //       { breakpoint: 1024, settings: { slidesToShow: 3 } },
// // //       { breakpoint: 768, settings: { slidesToShow: 2 } },
// // //       { breakpoint: 480, settings: { slidesToShow: 1 } },
// // //     ],
// // //   };

// // //   if (!sortedPlaces || sortedPlaces.length === 0) return null;

// // //   return (
// // //     <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
// // //       <div className="max-w-7xl mx-auto relative">
// // //         {/* Header Section */}
// // //         <div className="text-center mb-12">
// // //           <div className="flex items-center justify-center gap-2">
// // //             <span className="text-[#a44294] !font-semibold  neighbourtwoparagraph !text-[18px]">
// // //               Getting Around
// // //             </span>
// // //           </div>
// // //           <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
// // //             What's Nearby?
// // //           </h2>
// // //           <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
// // //             Everything you need is just minutes away from T. Nagar. <br />
// // //             Well-connected and easy to reach, always.
// // //           </p>
// // //         </div>

// // //         <Slider {...settings} className="neighmainlocationnearbysection">
// // //           {sortedPlaces.map((place) => {
// // //             // Dynamic image mapper tracking CMS fallback checks
// // //             const imageUrl = place.FeaturedImage?.url
// // //               ? `${API_BASE_URL_API_TEST_DEV}${place.FeaturedImage.url}`
// // //               : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop";

// // //             const categoryIconUrl = place.category?.icon?.url
// // //               ? `${API_BASE_URL_API_TEST_DEV}${place.category.icon.url}`
// // //               : null;

// // //             // Live metrics handler config matching user requirement specifications
// // //             const liveDistanceStr =
// // //               place.computedDistance !== undefined &&
// // //               place.computedDistance !== Infinity
// // //                 ? `${place.computedDistance} km away`
// // //                 : "0.6 km away";

// // //             const dynamicTimeStr = estimateTravelTime(place.computedDistance);

// // //             return (
// // //               <div
// // //                 key={place.id}
// // //                 className="bg-white nerabyneighbourhood border border-slate-100 rounded-2xl p-2 flex flex-col items-center text-center shadow-xs min-w-[260px] sm:min-w-[280px] md:min-w-[200px] flex-1 snap-start relative"
// // //               >
// // //                 {/* Top Circular Icon -> Neenga code panni vachirundha same border border classes layout */}
// // //                 <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border-1 border-[#a44294] flex items-center justify-center shadow-xs overflow-hidden p-2.5">
// // //                   {categoryIconUrl ? (
// // //                     <img
// // //                       src={categoryIconUrl}
// // //                       alt="category"
// // //                       className="w-full h-full object-contain"
// // //                     />
// // //                   ) : (
// // //                     <MapPin className="w-5 h-5 text-[#a44294]" />
// // //                   )}
// // //                 </div>

// // //                 {/* Overlapping Time Badge */}
// // //                 <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
// // //                   <span className="font-semibold text-[#a44294] whitespace-nowrap bodyneighfontsss text-[12px]">
// // //                     {dynamicTimeStr}
// // //                   </span>
// // //                 </div>

// // //                 {/* Inner Image Card */}
// // //                 <div className="w-full aspect-[4/2.5] rounded-[5px] overflow-hidden mb-4 relative bg-slate-100 mt-5">
// // //                   <img
// // //                     src={imageUrl}
// // //                     alt={place.name || place.title}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>

// // //                 {/* Details Section */}
// // //                 <h3 className="font-bold text-slate-900 text-base mb-1 tracking-tight min-h-[24px] line-clamp-1">
// // //                   {place.name || place.title}
// // //                 </h3>
// // //                 <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px] min-h-[22px] line-clamp-1">
// // //                   {place.category?.title || "Spot"}
// // //                 </p>

// // //                 {/* Distance Badge footer */}
// // //                 <div className="mt-auto flex items-center justify-center gap-1 text-slate-500">
// // //                   <svg
// // //                     className="w-3.5 h-3.5 text-[#a44294]"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     strokeWidth="2"
// // //                     viewBox="0 0 24 24"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
// // //                     />
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
// // //                     />
// // //                   </svg>
// // //                   <span className="text-gray-500 mb-0 bodyneighfontsss text-[15px]">
// // //                     {liveDistanceStr}
// // //                   </span>
// // //                 </div>

// // //                 <button
// // //                   onClick={() =>
// // //                     window.open(
// // //                       `https://www.google.com/maps/search/?api=1&query=${place.location?.latitude},${place.location?.longitude}`,
// // //                       "_blank",
// // //                     )
// // //                   }
// // //                   className="mt-3 inline-flex items-center justify-center px-3 py-1.5 border-1 border-[#a44294] text-sm font-semibold rounded-[5px] text-[#a44294] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer shadow-xs"
// // //                 >
// // //                   View Location
// // //                 </button>
// // //               </div>
// // //             );
// // //           })}
// // //         </Slider>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import Slider from "react-slick";
// // import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// // import { API_BASE_URL_API_TEST_DEV } from "../../../../config"; // Path verification

// // // Distance Calculation Logic Function
// // function calculateDistance(lat1, lon1, lat2, lon2) {
// //   const R = 6371; // Radius of the earth in km
// //   const dLat = ((lat2 - lat1) * Math.PI) / 180;
// //   const dLon = ((lon2 - lon1) * Math.PI) / 180;
// //   const a =
// //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// //     Math.cos((lat1 * Math.PI) / 180) *
// //       Math.cos((lat2 * Math.PI) / 180) *
// //       Math.sin(dLon / 2) *
// //       Math.sin(dLon / 2);
// //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// //   return R * c; 
// // }

// // // 1. Clean Distance Formatter Logic (Meter, KM Split up handle)
// // function formatDistanceReadable(distanceInKM) {
// //   if (!distanceInKM || distanceInKM === Infinity) return "500 meters";
  
// //   // 1 KM kulla irundha meters-ah mathurom bro
// //   if (distanceInKM < 1) {
// //     const meters = Math.round(distanceInKM * 1000);
// //     // 50 meters gap parameters check control
// //     return `${meters < 50 ? 50 : Math.round(meters / 10) * 10} meters`;
// //   }
  
// //   // Normal KM output display logic
// //   return `${distanceInKM.toFixed(1)} km away`;
// // }

// // // 2. Clean Time Formatter Logic (Mins, Hours & Days split up structure handler)
// // function formatTravelTimeReadable(distanceInKM) {
// //   if (!distanceInKM || distanceInKM === Infinity) return "5 mins";

// //   let totalMinutes = 0;
  
// //   // Real world traffic factor logic (Under 1.5 KM default walking speed, above via vehicle speed estimation)
// //   if (distanceInKM <= 1.5) {
// //     totalMinutes = Math.max(2, Math.round(distanceInKM * 12)); // Walking speed (~5 km/h)
// //   } else {
// //     totalMinutes = Math.max(5, Math.round(distanceInKM * 2.5)); // Vehicle traffic average speed (~25 km/h)
// //   }

// //   // Hours thandumpothu split-up custom condition
// //   if (totalMinutes >= 60) {
// //     const hours = Math.floor(totalMinutes / 60);
// //     const mins = totalMinutes % 60;
    
// //     if (hours >= 24) {
// //       const days = Math.floor(hours / 24);
// //       return `${days} ${days === 1 ? 'day' : 'days'}`;
// //     }
    
// //     return mins > 0 ? `${hours} hr ${mins} mins` : `${hours} hr`;
// //   }

// //   return `${totalMinutes} mins`;
// // }

// // function PrevArrow({ onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className="absolute cursor-pointer neighmainlocationscardleft left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
// //     >
// //       <ChevronLeft size={20} color="#a44294" strokeWidth={3} />
// //     </button>
// //   );
// // }

// // function NextArrow({ onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className="absolute cursor-pointer neighmainlocationscardright right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
// //     >
// //       <ChevronRight size={20} color="#a44294" strokeWidth={3} />
// //     </button>
// //   );
// // }

// // export default function WhatsNearby({ data }) {
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [sortedPlaces, setSortedPlaces] = useState([]);

// //   useEffect(() => {
// //     if (typeof window !== "undefined" && navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         (position) => {
// //           setUserLocation({
// //             latitude: position.coords.latitude,
// //             longitude: position.coords.longitude,
// //           });
// //         },
// //         (error) => {
// //           console.error("Using fallback location matrix centers", error);
// //           // Chennai local business baseline fallback mapping coordinates
// //           setUserLocation({ latitude: 13.0405, longitude: 80.2337 }); 
// //         }
// //       );
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (data && Array.isArray(data)) {
// //       if (userLocation) {
// //         const withDistance = data.map((place) => {
// //           const itemLat = place.location?.latitude;
// //           const itemLng = place.location?.longitude;

// //           if (!itemLat || !itemLng) {
// //             return { ...place, computedDistance: Infinity };
// //           }

// //           const dist = calculateDistance(
// //             userLocation.latitude,
// //             userLocation.longitude,
// //             itemLat,
// //             itemLng
// //           );

// //           return { ...place, computedDistance: dist };
// //         });

// //         const sorted = withDistance.sort((a, b) => a.computedDistance - b.computedDistance);
// //         setSortedPlaces(sorted);
// //       } else {
// //         setSortedPlaces(data);
// //       }
// //     }
// //   }, [data, userLocation]);

// //   const settings = {
// //     dots: false,
// //     infinite: sortedPlaces.length > 5,
// //     speed: 500,
// //     slidesToShow: Math.min(5, sortedPlaces.length || 1),
// //     slidesToScroll: 1,
// //     prevArrow: <PrevArrow />,
// //     nextArrow: <NextArrow />,
// //     responsive: [
// //       { breakpoint: 1280, settings: { slidesToShow: 4 } },
// //       { breakpoint: 1024, settings: { slidesToShow: 3 } },
// //       { breakpoint: 768, settings: { slidesToShow: 2 } },
// //       { breakpoint: 480, settings: { slidesToShow: 1 } },
// //     ],
// //   };

// //   if (!sortedPlaces || sortedPlaces.length === 0) return null;

// //   return (
// //     <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
// //       <div className="max-w-7xl mx-auto relative">
// //         {/* Header Section */}
// //         <div className="text-center mb-12">
// //           <div className="flex items-center justify-center gap-2">
// //             <span className="text-[#a44294] !font-semibold neighbourhoodtwoparagraph !text-[18px]">
// //               Getting Around
// //             </span>
// //           </div>
// //           <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
// //             What's Nearby?
// //           </h2>
// //           <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
// //             Everything you need is just minutes away from T. Nagar. <br />
// //             Well-connected and easy to reach, always.
// //           </p>
// //         </div>

// //         <Slider {...settings} className="neighmainlocationnearbysection">
// //           {sortedPlaces.map((place) => {
// //             const imageUrl = place.FeaturedImage?.url 
// //               ? `${API_BASE_URL_API_TEST_DEV}${place.FeaturedImage.url}`
// //               : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop";

// //             const categoryIconUrl = place.category?.icon?.url 
// //               ? `${API_BASE_URL_API_TEST_DEV}${place.category.icon.url}`
// //               : null;

// //             // Readable dynamic formats implementation bro
// //             const readableDistance = formatDistanceReadable(place.computedDistance);
// //             const readableTime = formatTravelTimeReadable(place.computedDistance);

// //             return (
// //               <div
// //                 key={place.id}
// //                 className="bg-white nerabyneighbourhood border border-slate-100 rounded-2xl p-2 flex flex-col items-center text-center shadow-xs min-w-[260px] sm:min-w-[280px] md:min-w-[200px] flex-1 snap-start relative"
// //               >
// //                 {/* Top Circular Icon */}
// //                 <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border-1 border-[#a44294] flex items-center justify-center shadow-xs overflow-hidden p-2.5">
// //                   {categoryIconUrl ? (
// //                     <img src={categoryIconUrl} alt="category" className="w-full h-full object-contain" />
// //                   ) : (
// //                     <MapPin className="w-5 h-5 text-[#a44294]" />
// //                   )}
// //                 </div>

// //                 {/* Overlapping Time Badge (Formatted: "15 mins" or "2 hr 10 mins") */}
// //                 <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
// //                   <span className="font-semibold text-[#a44294] whitespace-nowrap bodyneighfontsss text-[12px]">
// //                     {readableTime}
// //                   </span>
// //                 </div>

// //                 {/* Inner Image Card */}
// //                 <div className="w-full aspect-[4/2.5] rounded-[5px] overflow-hidden mb-4 relative bg-slate-100 mt-5">
// //                   <img
// //                     src={imageUrl}
// //                     alt={place.name || place.title}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 {/* Details Section */}
// //                 <h3 className="font-bold text-slate-900 text-base mb-1 tracking-tight min-h-[24px] line-clamp-1">
// //                   {place.name || place.title}
// //                 </h3>
// //                 <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px] min-h-[22px] line-clamp-1">
// //                   {place.category?.title || "Spot"}
// //                 </p>

// //                 {/* Distance Badge footer (Formatted: "600 meters" or "4.5 km away") */}
// //                 <div className="mt-auto flex items-center justify-center gap-1 text-slate-500">
// //                   <svg
// //                     className="w-3.5 h-3.5 text-[#a44294]"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
// //                   </svg>
// //                   <span className="text-gray-500 mb-0 bodyneighfontsss text-[15px]">
// //                     {readableDistance}
// //                   </span>
// //                 </div>

// //                 {/* Google Maps View Action Trigger */}
// //                 <button 
// //                   onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${place.location?.latitude},${place.location?.longitude}`, "_blank")}
// //                   className="mt-3 inline-flex items-center justify-center px-3 py-1.5 border-1 border-[#a44294] text-sm font-semibold rounded-[5px] text-[#a44294] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer shadow-xs"
// //                 >
// //                   View Location
// //                 </button>
// //               </div>
// //             );
// //           })}
// //         </Slider>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// import { API_BASE_URL_API_TEST_DEV } from "../../../../config"; // Check your file path path properly bro

// // Core distance calculation logic function
// function calculateDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371; // Radius of the earth in km
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLon = ((lon2 - lon1) * Math.PI) / 180;
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos((lat1 * Math.PI) / 180) *
//       Math.cos((lat2 * Math.PI) / 180) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; 
// }

// // 1. Dynamic Human Readable Distance Formatter logic (Meters / KM)
// function formatDistance(distanceInKM) {
//   if (!distanceInKM || distanceInKM === Infinity) return "500 meters away";
  
//   // 1 KM kulla irundha meters format mapping (e.g., 0.50 km -> 500 meters)
//   if (distanceInKM < 1) {
//     const meters = Math.round(distanceInKM * 1000);
//     return `${meters} meters away`;
//   }
  
//   // Normal KM output configuration 
//   return `${distanceInKM.toFixed(1)} km away`;
// }

// // 2. Dynamic Time & Mode Formatter logic handler (Walk / Drive / Hours)
// function formatTravelTime(distanceInKM) {
//   if (!distanceInKM || distanceInKM === Infinity) return "2 mins";

//   // Case A: Ultra short distance (Less than 1.5 KM) -> Walking Mode Calculation
//   if (distanceInKM <= 1.5) {
//     const walkingMins = Math.max(2, Math.round(distanceInKM * 12)); // Average walking speed mapping
//     return `${walkingMins} mins (Walk)`;
//   }

//   // Case B: Moderate City Distance (1.5 KM to 60 KM) -> Driving/Bike Mode Calculation
//   if (distanceInKM > 1.5 && distanceInKM <= 60) {
//     const drivingMins = Math.max(5, Math.round(distanceInKM * 2.5)); // Average city vehicle driving time layout
//     if (drivingMins < 60) {
//       return `${drivingMins} mins (Drive)`;
//     } else {
//       const hours = Math.floor(drivingMins / 60);
//       const remainingMins = drivingMins % 60;
//       return remainingMins > 0 ? `${hours} hr ${remainingMins} mins (Drive)` : `${hours} hr (Drive)`;
//     }
//   }

//   // Case C: Extreme Outstation / False coordinates (More than 60 KM) -> Long Hour controller
//   const estimatedHours = Math.round(distanceInKM / 70); // Assume interstate highway speeds 70km/hr
//   if (estimatedHours <= 24) {
//     return `${estimatedHours} hrs (Drive)`;
//   } else {
//     const days = Math.round(estimatedHours / 24);
//     return `${days} days approx`;
//   }
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute cursor-pointer neighmainlocationscardleft left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
//     >
//       <ChevronLeft size={20} color="#a44294" strokeWidth={3} />
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute cursor-pointer neighmainlocationscardright right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
//     >
//       <ChevronRight size={20} color="#a44294" strokeWidth={3} />
//     </button>
//   );
// }

// export default function WhatsNearby({ data }) {
//   const [userLocation, setUserLocation] = useState(null);
//   const [sortedPlaces, setSortedPlaces] = useState([]);

//   useEffect(() => {
//     if (typeof window !== "undefined" && navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Geolocation blocked, using default Chennai coordinates", error);
//           setUserLocation({ latitude: 13.0827, longitude: 80.2707 }); 
//         }
//       );
//     }
//   }, []);

//   useEffect(() => {
//     if (data && Array.isArray(data)) {
//       if (userLocation) {
//         const withDistance = data.map((place) => {
//           const itemLat = place.location?.latitude;
//           const itemLng = place.location?.longitude;

//           if (!itemLat || !itemLng) {
//             return { ...place, computedDistance: Infinity };
//           }

//           const dist = calculateDistance(
//             userLocation.latitude,
//             userLocation.longitude,
//             itemLat,
//             itemLng
//           );

//           return { ...place, computedDistance: parseFloat(dist.toFixed(2)) };
//         });

//         const sorted = withDistance.sort((a, b) => a.computedDistance - b.computedDistance);
//         setSortedPlaces(sorted);
//       } else {
//         setSortedPlaces(data);
//       }
//     }
//   }, [data, userLocation]);

//   const settings = {
//     dots: false,
//     infinite: sortedPlaces.length > 5,
//     speed: 500,
//     slidesToShow: Math.min(5, sortedPlaces.length || 1),
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (!sortedPlaces || sortedPlaces.length === 0) return null;

//   return (
//     <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2">
//             <span className="text-[#a44294] !font-semibold neighbourhoodtwoparagraph !text-[18px]">
//               Getting Around
//             </span>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
//             What's Nearby?
//           </h2>
//           <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//             Everything you need is just minutes away from your location. <br />
//             Well-connected and easy to reach, always.
//           </p>
//         </div>

//         <Slider {...settings} className="neighmainlocationnearbysection">
//           {sortedPlaces.map((place) => {
//             const imageUrl = place.FeaturedImage?.url 
//               ? `${API_BASE_URL_API_TEST_DEV}${place.FeaturedImage.url}`
//               : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop";

//             const categoryIconUrl = place.category?.icon?.url 
//               ? `${API_BASE_URL_API_TEST_DEV}${place.category.icon.url}`
//               : null;

//             // Trigger safe clean readable dynamic texts bro
//             const readableDistance = formatDistance(place.computedDistance);
//             const readableTimeAndMode = formatTravelTime(place.computedDistance);

//             return (
//               <div
//                 key={place.id}
//                 className="bg-white nerabyneighbourhood border border-slate-100 rounded-2xl p-2 flex flex-col items-center text-center shadow-xs min-w-[260px] sm:min-w-[280px] md:min-w-[200px] flex-1 snap-start relative"
//               >
//                 {/* Top Circular Icon */}
//                 <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border-1 border-[#a44294] flex items-center justify-center shadow-xs overflow-hidden p-2.5">
//                   {categoryIconUrl ? (
//                     <img src={categoryIconUrl} alt="category" className="w-full h-full object-contain" />
//                   ) : (
//                     <MapPin className="w-5 h-5 text-[#a44294]" />
//                   )}
//                 </div>

//                 {/* Dynamic Overlapping Time Badge (Now shows Walk / Drive / Hours correctly) */}
//                 <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
//                   <span className="font-semibold text-[#a44294] whitespace-nowrap bodyneighfontsss text-[12px]">
//                     {readableTimeAndMode}
//                   </span>
//                 </div>

//                 {/* Inner Image Card */}
//                 <div className="w-full aspect-[4/2.5] rounded-[5px] overflow-hidden mb-4 relative bg-slate-100 mt-5">
//                   <img
//                     src={imageUrl}
//                     alt={place.name || place.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Details Section */}
//                 <h3 className="font-bold text-slate-900 text-base mb-1 tracking-tight min-h-[24px] line-clamp-1">
//                   {place.name || place.title}
//                 </h3>
//                 <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px] min-h-[22px] line-clamp-1">
//                   {place.category?.title || "Spot"}
//                 </p>

//                 {/* Distance Badge footer (Meters / KM optimized) */}
//                 <div className="mt-auto flex items-center justify-center gap-1 text-slate-500">
//                   <svg
//                     className="w-3.5 h-3.5 text-[#a44294]"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                   </svg>
//                   <span className="text-gray-500 mb-0 bodyneighfontsss text-[15px]">
//                     {readableDistance}
//                   </span>
//                 </div>

//                 <button 
//                   onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${place.location?.latitude},${place.location?.longitude}`, "_blank")}
//                   className="mt-3 inline-flex items-center justify-center px-3 py-1.5 border-1 border-[#a44294] text-sm font-semibold rounded-[5px] text-[#a44294] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer shadow-xs"
//                 >
//                   View Location
//                 </button>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config"; // Check path properly bro

// Haversine core distance logic
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

// 1. User-ku puriyura maathiri KM matrum Meter dynamic text rendering handler
function formatDistance(distanceInKM) {
  if (!distanceInKM || distanceInKM === Infinity) return "500 m away";
  
  // 1 KM-ku kulla irundha dynamic meters display loop
  if (distanceInKM < 1) {
    const meters = Math.round(distanceInKM * 1000);
    // Romba chinna margin error automatic correction limit
    return `${meters < 50 ? 50 : meters} m away`;
  }
  
  // 1 KM thandina simple rounded decimal Kilometers
  return `${distanceInKM.toFixed(1)} km away`;
}

// 2. Walking & Driving time splits with dynamic dynamic mode identifier
function formatTravelTime(distanceInKM) {
  if (!distanceInKM || distanceInKM === Infinity) return "2 mins walk";

  let durationInMinutes = 0;
  let mode = "";

  // 1.5 KM range kulla irundha human walking speed trigger
  if (distanceInKM <= 1.5) {
    durationInMinutes = Math.round(distanceInKM * 12); // ~12 mins per KM walk
    mode = "walk";
  } else {
    // 1.5 KM thanditta driving speed calculations
    durationInMinutes = Math.round(distanceInKM * 3); // ~3 mins per KM drive/ride
    mode = "drive";
  }

  // Minimum minute security barrier check
  if (durationInMinutes < 1) durationInMinutes = 1;

  // 60 minutes thandina 'Hour' component conversion handler format
  if (durationInMinutes >= 60) {
    const hours = Math.floor(durationInMinutes / 60);
    const mins = durationInMinutes % 60;
    return mins > 0 ? `${hours} hr ${mins} mins ${mode}` : `${hours} hr ${mode}`;
  }

  return `${durationInMinutes} mins ${mode}`;
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute cursor-pointer neighmainlocationscardleft left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
    >
      <ChevronLeft size={20} color="#a44294" strokeWidth={3} />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute cursor-pointer neighmainlocationscardright right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
    >
      <ChevronRight size={20} color="#a44294" strokeWidth={3} />
    </button>
  );
}

export default function WhatsNearby({ data }) {
  const [userLocation, setUserLocation] = useState(null);
  const [sortedPlaces, setSortedPlaces] = useState([]);

  // Geolocation setup controller hook
  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Using default center point config mapping", error);
          // Chennai center coordinates mapping point backup loop
          setUserLocation({ latitude: 13.0827, longitude: 80.2707 });
        }
      );
    }
  }, []);

  // Ascending order distance sorting calculation loop pipeline
  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (userLocation) {
        const withDistance = data.map((place) => {
          const itemLat = place.location?.latitude;
          const itemLng = place.location?.longitude;

          if (!itemLat || !itemLng) {
            return { ...place, computedDistance: Infinity };
          }

          const dist = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            itemLat,
            itemLng
          );

          return { ...place, computedDistance: dist };
        });

        // Ascending sort -> Pakkathula irukoradhu mattum thaan bro muthalla front linear array la order aagum
        const sorted = withDistance.sort((a, b) => a.computedDistance - b.computedDistance);
        setSortedPlaces(sorted);
      } else {
        setSortedPlaces(data);
      }
    }
  }, [data, userLocation]);

  const settings = {
    dots: false,
    infinite: sortedPlaces.length > 5,
    speed: 500,
    slidesToShow: Math.min(5, sortedPlaces.length || 1),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (!sortedPlaces || sortedPlaces.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#a44294] !font-semibold neighbourhoodtwoparagraph !text-[18px]">
              Getting Around
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
            What's Nearby?
          </h2>
          <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
            Everything you need is just minutes away. <br />
            Well-connected and easy to reach, always.
          </p>
        </div>

        <Slider {...settings} className="neighmainlocationnearbysection">
          {sortedPlaces.map((place) => {
            // Asset checks URL path configurations
            const imageUrl = place.FeaturedImage?.url 
              ? `${API_BASE_URL_API_TEST_DEV}${place.FeaturedImage.url}`
              : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop";

            const categoryIconUrl = place.category?.icon?.url 
              ? `${API_BASE_URL_API_TEST_DEV}${place.category.icon.url}`
              : null;

            // Custom metrics calculations values assignment
            const readableDistance = formatDistance(place.computedDistance);
            const readableTime = formatTravelTime(place.computedDistance);

            return (
              <div
                key={place.id}
                className="bg-white nerabyneighbourhood border border-slate-100 rounded-2xl p-2 flex flex-col items-center text-center shadow-xs min-w-[260px] sm:min-w-[280px] md:min-w-[200px] flex-1 snap-start relative"
              >
                {/* Top Circular Icon */}
                <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border-1 border-[#a44294] flex items-center justify-center shadow-xs overflow-hidden p-2.5">
                  {categoryIconUrl ? (
                    <img src={categoryIconUrl} alt="icon" className="w-full h-full object-contain" />
                  ) : (
                    <MapPin className="w-5 h-5 text-[#a44294]" />
                  )}
                </div>

                {/* Overlapping Time Badge */}
                <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
                  <span className="font-semibold text-[#a44294] whitespace-nowrap bodyneighfontsss text-[12px]">
                    {readableTime}
                  </span>
                </div>

                {/* Inner Image Card */}
                <div className="w-full aspect-[4/2.5] rounded-[5px] overflow-hidden mb-4 relative bg-slate-100 mt-5">
                  <img
                    src={imageUrl}
                    alt={place.name || place.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details Section */}
                <h3 className="font-bold text-slate-900 text-base mb-1 tracking-tight min-h-[24px] line-clamp-1">
                  {place.name || place.title}
                </h3>
                <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px] min-h-[22px] line-clamp-1">
                  {place.category?.title || "Spot"}
                </p>

                {/* Distance Badge footer */}
                <div className="mt-auto flex items-center justify-center gap-1 text-slate-500">
                  <svg
                    className="w-3.5 h-3.5 text-[#a44294]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-gray-500 mb-0 bodyneighfontsss text-[15px]">
                    {readableDistance}
                  </span>
                </div>

                <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${place.location?.latitude},${place.location?.longitude}`, "_blank")}
                  className="mt-3 inline-flex items-center justify-center px-3 py-1.5 border-1 border-[#a44294] text-sm font-semibold rounded-[5px] text-[#a44294] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer shadow-xs"
                >
                  View Location
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}