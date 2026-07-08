// import React from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // or use react-icons

// const nearbyPlaces = [
//   {
//     id: 1,
//     name: "Pondy Bazaar",
//     category: "Shopping Street",
//     time: "2 mins",
//     distance: "0.6 km away",
//     image:
//       "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop", // Replace with real asset
//     icon: (
//       <svg
//         className="w-4 h-4 text-[#a44294]"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     name: "Panagal Park",
//     category: "Park",
//     time: "3 mins",
//     distance: "1.0 km away",
//     image:
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop", // Replace with real asset
//     icon: (
//       <svg
//         className="w-5 h-5 text-[#a44294]"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 3v18m9-9H3M12 5.25a6.75 6.75 0 016.75 6.75H12V5.25z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     name: "Nandanam Metro",
//     category: "Metro Station",
//     time: "5 mins",
//     distance: "1.6 km away",
//     image:
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop", // Replace with real asset
//     icon: (
//       <svg
//         className="w-5 h-5 text-[#a44294]"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M5 4h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm2 14v1m10-1v1M9 11h6"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     name: "Anna Salai",
//     category: "Main Road",
//     time: "8 mins",
//     distance: "2.3 km away",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop", // Replace with real asset
//     icon: (
//       <svg
//         className="w-5 h-5 text-[#a44294]"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9 20l3-16m3 16l3-16M4 12h16"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 5,
//     name: "Marina Beach",
//     category: "Beach",
//     time: "18 mins",
//     distance: "5.7 km away",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop", // Replace with real asset
//     icon: (
//       <svg
//         className="w-5 h-5 text-[#a44294]"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M4.5 10.5C4.5 7.142 12 3 12 3s7.5 4.142 7.5 7.5c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 6,
//     name: "Chennai Airport",
//     category: "Airport",
//     time: "25 mins",
//     distance: "11.5 km away",
//     image:
//       "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400&auto=format&fit=crop", // Replace with real asset
//     icon: (
//       <svg
//         className="w-5 h-5 text-[#a44294]"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h6"
//         />
//       </svg>
//     ),
//   },
// ];

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute  neighmainlocationscardleft left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
//     >
//       <ChevronLeft size={20} color="#a44294" strokeWidth={3} />
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute  neighmainlocationscardright right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
//     >
//       <ChevronRight size={20} color="#a44294" strokeWidth={3} />
//     </button>
//   );
// }

// export default function WhatsNearby() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };
//   return (
//     <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2">
//             <span className="text-[#a44294] !font-semibold  neighbourtwoparagraph !text-[18px]">
//               Getting Around
//             </span>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
//             What's Nearby?
//           </h2>
//           <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//             Everything you need is just minutes away from T. Nagar. <br />
//             Well-connected and easy to reach, always.
//           </p>
//         </div>
//         <Slider {...settings} className="neighmainlocationnearbysection">
//           {nearbyPlaces.map((place) => (
//             <div
//               key={place.id}
//               className="bg-white nerabyneighbourhood border border-slate-100 rounded-2xl p-2 flex flex-col items-center text-center shadow-xs min-w-[260px] sm:min-w-[280px] md:min-w-[200px] flex-1 snap-start relative"
//             >
//               {/* Top Circular Icon */}
//               <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border-1 border-[#a44294] flex items-center justify-center shadow-xs">
//                 {place.icon}
//               </div>

//               {/* Overlapping Time Badge */}
//               <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
//                 <span className="font-semibold text-[#a44294] whitespace-nowrap  bodyneighfontsss text-[12px]">
//                   {place.time}
//                 </span>
//               </div>

//               {/* Inner Image Card */}
//               <div className="w-full aspect-[4/2.5] rounded-[5px] overflow-hidden mb-4 relative bg-slate-100 mt-5">
//                 <img
//                   src={place.image}
//                   alt={place.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Details Section */}
//               <h3 className="font-bold text-slate-900 text-base mb-1 tracking-tight">
//                 {place.name}
//               </h3>
//               <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//                 {place.category}
//               </p>

//               {/* Distance Badge footer */}
//               <div className="mt-auto flex items-center justify-center gap-1 text-slate-500">
//                 <svg
//                   className="w-3.5 h-3.5 text-[#a44294]"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                   />
//                 </svg>
//                 <span className="text-gray-500 mb-0 bodyneighfontsss text-[15px]">
//                   {place.distance}
//                 </span>
//               </div>

//               <button className="mt-3 inline-flex items-center justify-center px-3 py-1.5 border-1 border-[#a44294] text-sm font-semibold rounded-[5px] text-[#a44294] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer shadow-xs">
//                 View Location
//               </button>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config"; // Path-ai சரிபார்த்துக் கொள்ளவும் bro

// Haversine core distance logic helper function
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
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

// Distance-ai vachi dynamic travel time calculate pannum custom function bro
function estimateTravelTime(distanceInKM) {
  if (!distanceInKM || distanceInKM === Infinity) return "5 mins";
  // 1 KM kulla irundha dynamic walking time, mela irundha normal driving/riding minutes conversion
  if (distanceInKM <= 1) {
    const mins = Math.max(2, Math.round(distanceInKM * 12)); 
    return `${mins} mins`;
  } else {
    const mins = Math.round(distanceInKM * 3); 
    return `${mins} mins`;
  }
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

  // Geolocation trigger loop
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
          console.error("Geolocation denied, falling back to default Chennai coordinates", error);
          setUserLocation({ latitude: 13.0827, longitude: 80.2707 }); // Chennai default configuration center
        }
      );
    }
  }, []);

  // Sorting process handler array
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

          return { ...place, computedDistance: parseFloat(dist.toFixed(2)) };
        });

        // Ascending order filter alignment
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
            <span className="text-[#a44294] !font-semibold  neighbourtwoparagraph !text-[18px]">
              Getting Around
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
            What's Nearby?
          </h2>
          <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
            Everything you need is just minutes away from T. Nagar. <br />
            Well-connected and easy to reach, always.
          </p>
        </div>

        <Slider {...settings} className="neighmainlocationnearbysection">
          {sortedPlaces.map((place) => {
            // Dynamic image mapper tracking CMS fallback checks
            const imageUrl = place.FeaturedImage?.url 
              ? `${API_BASE_URL_API_TEST_DEV}${place.FeaturedImage.url}`
              : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop";

            const categoryIconUrl = place.category?.icon?.url 
              ? `${API_BASE_URL_API_TEST_DEV}${place.category.icon.url}`
              : null;

            // Live metrics handler config matching user requirement specifications
            const liveDistanceStr = place.computedDistance !== undefined && place.computedDistance !== Infinity
              ? `${place.computedDistance} km away`
              : "0.6 km away";

            const dynamicTimeStr = estimateTravelTime(place.computedDistance);

            return (
              <div
                key={place.id}
                className="bg-white nerabyneighbourhood border border-slate-100 rounded-2xl p-2 flex flex-col items-center text-center shadow-xs min-w-[260px] sm:min-w-[280px] md:min-w-[200px] flex-1 snap-start relative"
              >
                {/* Top Circular Icon -> Neenga code panni vachirundha same border border classes layout */}
                <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border-1 border-[#a44294] flex items-center justify-center shadow-xs overflow-hidden p-2.5">
                  {categoryIconUrl ? (
                    <img src={categoryIconUrl} alt="category" className="w-full h-full object-contain" />
                  ) : (
                    <MapPin className="w-5 h-5 text-[#a44294]" />
                  )}
                </div>

                {/* Overlapping Time Badge */}
                <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
                  <span className="font-semibold text-[#a44294] whitespace-nowrap bodyneighfontsss text-[12px]">
                    {dynamicTimeStr}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-gray-500 mb-0 bodyneighfontsss text-[15px]">
                    {liveDistanceStr}
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