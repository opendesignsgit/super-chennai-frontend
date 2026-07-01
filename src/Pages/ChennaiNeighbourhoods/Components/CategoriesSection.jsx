
import React, { useState } from "react";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg sliderrrleftssectionbutton"
  >
    <ChevronRight className="w-5 h-5 text-[#fff]" strokeWidth={3} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg sliderrrrightssectionbutton"
  >
    <ChevronLeft className="w-5 h-5 text-[#fff]" strokeWidth={3} />
  </button>
);

export default function CategoriesSection({ locationId, data = [] ,location}) {
  const transformedSlides = Object.values(
    data.reduce((acc, item) => {
      const categoryName = item?.category?.title || "Others";
      const categoryIcon = item?.category?.icon || "📍";

      if (!acc[categoryName]) {
        acc[categoryName] = {
          id: categoryName,
          category: categoryName,
          icon: categoryIcon,
          title: `${categoryName} Nearby`,
          count: ``,
          imagelist: [],
          lists: [],
          locations: item.locations || null,
        };
      }

      if (item?.heroImage?.url) {
        acc[categoryName].imagelist.push(item.heroImage.url);
      }

      // 1. ADDED SLUG HERE SO CARD CAN BUILD ITS DETAIL LINK
      acc[categoryName].lists.push({
        slug: item.slug || "", 
        icon: categoryIcon,
        name: item.name || "Unknown",
        type: item.type || "",
        dist: item.distance || "Nearby",
        FeaturedImage: item.FeaturedImage || "",
        description: item.description || "",
        googleData: item.googleData || "",
      });

      return acc;
    }, {}),
  ).map((slide) => {
    slide.count = `${slide.lists.length}+ ${slide.category} Nearby`;

    if (slide.imagelist.length === 0) {
      slide.imagelist = [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      ];
    }
    return slide;
  });

  const [activeCategory, setActiveCategory] = useState(() => {
    return transformedSlides[0]?.category || "";
  });

  React.useEffect(() => {
    if (transformedSlides.length > 0 && !activeCategory) {
      setActiveCategory(transformedSlides[0].category);
    }
  }, [data]);

  const categoriesList = transformedSlides.map((item) => ({
    category: item.category,
    icon: item.icon,
  }));

  const filteredSlides = transformedSlides.filter(
    (slide) => slide.category === activeCategory,
  );

  const slickSettings = {
    dots: true,
    infinite: transformedSlides.length > 0,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-1.5 justify-center items-center m-0 p-0">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all slick-dot-custom" />
    ),
  };

  const slickSettings2 = {
    dots: true,
    infinite: transformedSlides.length > 0,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-1.5 justify-center items-center m-0 p-0">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all slick-dot-custom" />
    ),
  };

  function StarIcon() {
    return (
      <svg
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  function MapPinIcon({ className = "w-4 h-4" }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    );
  }

  return (
    <div className="flex gap-8 p-6 max-w-7xl mx-auto items-start">
      <div className="w-60 space-y-2 flex-shrink-0">
        {categoriesList.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] transition-all ${
              activeCategory === cat.category
                ? "bg-[#a44294] text-white font-medium shadow-md"
                : "bg-white border border-gray-200 text-[#000] hover:bg-purple-50"
            }`}
          >
            <span className="flex items-center gap-2">
              {cat.icon && typeof cat.icon === "object" && cat.icon.url ? (
                <img
                  src={`${API_BASE_URL_API_TEST_DEV}${cat.icon.url}`}
                  alt={cat.icon.alt || cat.category}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <span>{cat.icon || "📍"}</span>
              )}
              {cat.category}
            </span>
            <span>›</span>
          </button>
        ))}
      </div>

      <div className="flex-1 min-w-0">
        <div className="w-full">
          {filteredSlides.length > 0 ? (
            filteredSlides.map((slide) => {
              const safeCat = slide.category?.toLowerCase();
              return (
                <div key={slide.id} className="w-full">
                  <div
                    className="relative rounded-xl overflow-hidden mb-4"
                    style={{ height: 360 }}
                  >
                    <Slider {...slickSettings}>
                      {slide.imagelist.map((imgUrl, index) => (
                        <a
                          key={index}
                          href={`/neighbourhood/${locationId}/${safeCat}`}
                        >
                          <div className="relative h-[360px] w-full overflow-hidden group">
                            <img
                              src={`${API_BASE_URL_API_TEST_DEV}${imgUrl}`}
                              alt={slide.title}
                              className="w-full h-[360px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-108"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </a>
                      ))}
                    </Slider>

                    <div className="absolute bottom-11 left-10 right-10 flex items-end justify-between pointer-events-none z-10">
                      <div>
                        <h3 className="text-white font-bold text-xl">
                          {slide.title}
                        </h3>
                        <p className="text-gray-300 text-sm neighbourtwoparagraph">
                          {slide.count}
                        </p>
                      </div>
                      <a href={`/neighbourhood/${locationId}/${safeCat}`}>
                        <button className="cursor-pointer pointer-events-auto flex items-center gap-2 bg-white text-[#a44294] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#a44294] hover:text-[#fff] transition-colors duration-200 ease-in-out whitespace-nowrap">
                          Explore {slide.category} →
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="populaarrrrsection">
                    <div className="flex items-center justify-between mb-5 mt-5">
                      <span className="font-semibold text-gray-800">
                        Popular Nearby {slide.category}
                      </span>
                      <a href={`/neighbourhood/${locationId}/${safeCat}`} className="text-[#a44294] font-medium hover:underline">
                        View All
                      </a>
                    </div>

                    <div className="block border border-gray-200 shadow-sm rounded-lg p-4 bg-white sliderrrrsectiosss">
                      {slide.lists.length > 3 ? (
                        <Slider {...slickSettings2}>
                          {slide.lists.map((item, i) => (
                            <div
                              key={item.slug || item.name || i}
                              className="outline-none px-6"
                            >
                              <div className="group cursor-pointer cardsssneightbourhood deatilpagecardhoverrneigh bg-white rounded-lg overflow-hidden">
                                {/* 2. UPDATED HREF URL PATTERN FOR SLIDER */}
                                <a
                                  href={`/neighbourhood/${locationId}/${safeCat}/${safeCat}/${item.slug}`}
                                >
                                  <div className="newigheeeimagez w-full h-72 overflow-hidden">
                                    <img
                                      src={
                                        item?.FeaturedImage?.url
                                          ? API_BASE_URL_API_TEST_DEV +
                                            item.FeaturedImage.url
                                          : "https://www.superchennai.com/images/restaurants-banner.jpg"
                                      }
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                          "https://www.superchennai.com/images/restaurants-banner.jpg";
                                      }}
                                      alt={item.name}
                                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                    />
                                  </div>
                                  <div className="cardsectiondetailss p-3">
                                    <h3 className="!font-semibold text-gray-900 leading-tight mb-2 neighbourtwoheaidngssparagraph">
                                      {item.name}
                                    </h3>
                                    <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
                                      {item.description
                                        ? `${item.description.slice(0, 70)}...`
                                        : "No description available"}
                                    </p>
                                    <div className="flex items-center gap-1 text-gray-500">
                                      <span className="flex items-center gap-0.5">
                                        <StarIcon />
                                        <span className="font-medium text-gray-700 text-[14px]">
                                          {item?.googleData?.googleRating ||
                                            "N/A"}
                                        </span>
                                      </span>
                                      <span className="flex items-center gap-0.5 text-[15px]">
                                        <MapPinIcon className="w-4 h-4" />
                                        {item?.locations?.city || location?.city || "Unknown"}
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                          {slide.lists.map((item, i) => (
                            <div
                              key={item.slug || item.name || i}
                              className="group cursor-pointer cardsssneightbourhood deatilpagecardhoverrneigh bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm"
                            >
                              {/* 2. UPDATED HREF URL PATTERN FOR GRID */}
                              <a
                                href={`/neighbourhood/${locationId}/${safeCat}/${safeCat}/${item.slug}`}
                              >
                                <div className="newigheeeimagez w-full h-72 overflow-hidden">
                                  <img
                                    src={
                                      item?.FeaturedImage?.url
                                        ? API_BASE_URL_API_TEST_DEV +
                                          item.FeaturedImage.url
                                        : "https://www.superchennai.com/images/restaurants-banner.jpg"
                                    }
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src =
                                        "https://www.superchennai.com/images/restaurants-banner.jpg";
                                    }}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                  />
                                </div>
                                <div className="cardsectiondetailss p-3">
                                  <h3 className="!font-semibold text-gray-900 leading-tight mb-2 neighbourtwoheaidngssparagraph">
                                    {item.name}
                                  </h3>
                                  <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
                                    {item.description
                                      ? `${item.description.slice(0, 70)}...`
                                      : "No description available"}
                                  </p>
                                  <div className="flex items-center gap-1 text-gray-500">
                                    <span className="flex items-center gap-0.5">
                                      <StarIcon />
                                      <span className="font-medium text-gray-700 text-[14px]">
                                        {item?.googleData?.googleRating || "N/A"}
                                      </span>
                                    </span>
                                    <span className="flex items-center gap-0.5 text-[15px]">
                                      <MapPinIcon className="w-4 h-4" />
                                      {item?.locations?.city || "Unknown"}
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center py-24 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
              <span className="text-3xl block mb-2">📍</span>
              No nearby data available for this category yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const NextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg sliderrrleftssectionbutton"
//   >
//     <ChevronRight className="w-5 h-5 text-[#fff]" strokeWidth={3} />
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg sliderrrrightssectionbutton"
//   >
//     <ChevronLeft className="w-5 h-5 text-[#fff]" strokeWidth={3} />
//   </button>
// );

// export default function CategoriesSection({ locationId, data = [] }) {
//   const transformedSlides = Object.values(
//     data.reduce((acc, item) => {
//       const categoryName = item?.category?.title || "Others";
//       const categoryIcon = item?.category?.icon || "📍";

//       if (!acc[categoryName]) {
//         acc[categoryName] = {
//           id: categoryName,
//           category: categoryName,
//           icon: categoryIcon,
//           title: `${categoryName} Nearby`,
//           count: ``,
//           imagelist: [],
//           lists: [],
//         };
//       }

//       if (item?.heroImage?.url) {
//         acc[categoryName].imagelist.push(item.heroImage.url);
//       }

//       acc[categoryName].lists.push({
//         icon: categoryIcon,
//         name: item.name || "Unknown",
//         type: item.type || "",
//         dist: item.distance || "Nearby",
//         FeaturedImage: item.FeaturedImage || "",
//         description: item.description || "",
//         googleData: item.googleData || "",
//       });

//       return acc;
//     }, {}),
//   ).map((slide) => {
//     slide.count = `${slide.lists.length}+ ${slide.category} Nearby`;

//     if (slide.imagelist.length === 0) {
//       slide.imagelist = [
//         "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//       ];
//     }
//     return slide;
//   });

//   const [activeCategory, setActiveCategory] = useState(() => {
//     return transformedSlides[0]?.category || "";
//   });

//   React.useEffect(() => {
//     if (transformedSlides.length > 0 && !activeCategory) {
//       setActiveCategory(transformedSlides[0].category);
//     }
//   }, [data]);

//   const categoriesList = transformedSlides.map((item) => ({
//     category: item.category,
//     icon: item.icon,
//   }));

//   const filteredSlides = transformedSlides.filter(
//     (slide) => slide.category === activeCategory,
//   );

//   const slickSettings = {
//     dots: true,
//     infinite: transformedSlides.length > 0,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     appendDots: (dots) => (
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
//         <ul className="flex gap-1.5 justify-center items-center m-0 p-0">
//           {dots}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all slick-dot-custom" />
//     ),
//   };

//   const slickSettings2 = {
//     dots: true,
//     infinite: transformedSlides.length > 0,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     appendDots: (dots) => (
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
//         <ul className="flex gap-1.5 justify-center items-center m-0 p-0">
//           {dots}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all slick-dot-custom" />
//     ),
//   };

//   console.log("activeCategory", filteredSlides);
//   function StarIcon() {
//     return (
//       <svg
//         className="w-4 h-4 fill-yellow-400 text-yellow-400"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     );
//   }

//   function MapPinIcon({ className = "w-4 h-4" }) {
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//       </svg>
//     );
//   }
//   return (
//     <div className="flex gap-8 p-6 max-w-7xl mx-auto items-start">
//       <div className="w-60 space-y-2 flex-shrink-0">
//         {categoriesList.map((cat) => (
//           <button
//             key={cat.category}
//             onClick={() => setActiveCategory(cat.category)}
//             className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] transition-all ${
//               activeCategory === cat.category
//                 ? "bg-[#a44294] text-white font-medium shadow-md"
//                 : "bg-white border border-gray-200 text-[#000] hover:bg-purple-50"
//             }`}
//           >
//             <span className="flex items-center gap-2">
//               {cat.icon && typeof cat.icon === "object" && cat.icon.url ? (
//                 <img
//                   src={`${API_BASE_URL_API_TEST_DEV}${cat.icon.url}`}
//                   alt={cat.icon.alt || cat.category}
//                   className="w-5 h-5 object-contain"
//                 />
//               ) : (
//                 <span>{cat.icon || "📍"}</span>
//               )}
//               {cat.category}
//             </span>
//             <span>›</span>
//           </button>
//         ))}
//       </div>

//       <div className="flex-1 min-w-0">
//         <div className="w-full">
//           {filteredSlides.length > 0 ? (
//             filteredSlides.map((slide) => (
//               <div key={slide.id} className="w-full">
//                 <div
//                   className="relative rounded-xl overflow-hidden mb-4"
//                   style={{ height: 360 }}
//                 >
//                   <Slider {...slickSettings}>
//                     {slide.imagelist.map((imgUrl, index) => (
//                       <a
//                         key={index}
//                         href={`/neighbourhood/${locationId}/${slide.category}/${slide.slug}`}
//                       >
//                         <div className="relative h-[360px] w-full overflow-hidden group">
//                           <img
//                             src={`${API_BASE_URL_API_TEST_DEV}${imgUrl}`}
//                             alt={slide.title}
//                             className="w-full h-[360px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-108"
//                           />

//                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </a>
//                     ))}
//                   </Slider>

//                   <div className="absolute bottom-11 left-10 right-10 flex items-end justify-between pointer-events-none z-10">
//                     <div>
//                       <h3 className="text-white font-bold text-xl">
//                         {slide.title}
//                       </h3>
//                       <p className="text-gray-300 text-sm neighbourtwoparagraph">
//                         {slide.count}
//                       </p>
//                     </div>
//                     <a href={`/neighbourhood/${locationId}/${slide.category}`}>
//                       <button className="cursor-pointer pointer-events-auto flex items-center gap-2 bg-white text-[#a44294] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#a44294] hover:text-[#fff] transition-colors duration-200 ease-in-out whitespace-nowrap">
//                         Explore {slide.category} →
//                       </button>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="populaarrrrsection">
//                   <div className="flex items-center justify-between mb-5 mt-5">
//                     <span className="font-semibold text-gray-800">
//                       Popular Nearby {slide.category}
//                     </span>
//                     <button className="text-[#a44294] font-medium hover:underline">
//                       View All
//                     </button>
//                   </div>

//                   <div className="block border border-gray-200 shadow-sm rounded-lg p-4 bg-white sliderrrrsectiosss">
//                     {slide.lists.length > 3 ? (
//                       <Slider {...slickSettings2}>
//                         {console.log("slidelitssss", slide)}
//                         {slide.lists.map((item, i) => (
//                           <div
//                             key={item.slug || item.name || i}
//                             className="outline-none px-6"
//                           >
//                             <div className="group cursor-pointer cardsssneightbourhood deatilpagecardhoverrneigh bg-white rounded-lg overflow-hidden">
//                               <a
//                                 href={`/neighbourhood/${locationId}/${slide.category}`}
//                               >
//                                 <div className="newigheeeimagez w-full h-72 overflow-hidden">
//                                   <img
//                                     src={
//                                       item?.FeaturedImage?.url
//                                         ? API_BASE_URL_API_TEST_DEV +
//                                           item.FeaturedImage.url
//                                         : "https://www.superchennai.com/images/restaurants-banner.jpg"
//                                     }
//                                     onError={(e) => {
//                                       e.target.onerror = null;
//                                       e.target.src =
//                                         "https://www.superchennai.com/images/restaurants-banner.jpg";
//                                     }}
//                                     alt={item.name}
//                                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
//                                   />
//                                 </div>
//                                 <div className="cardsectiondetailss p-3">
//                                   <h3 className="!font-semibold text-gray-900 leading-tight mb-2 neighbourtwoheaidngssparagraph">
//                                     {item.name}
//                                   </h3>
//                                   <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//                                     {item.description
//                                       ? `${item.description.slice(0, 70)}...`
//                                       : "No description available"}
//                                   </p>
//                                   <div className="flex items-center gap-1 text-gray-500">
//                                     <span className="flex items-center gap-0.5">
//                                       <StarIcon />
//                                       <span className="font-medium text-gray-700 text-[14px]">
//                                         {item?.googleData?.googleRating ||
//                                           "N/A"}
//                                       </span>
//                                     </span>
//                                     <span className="flex items-center gap-0.5 text-[15px]">
//                                       <MapPinIcon className="w-4 h-4" />
//                                       {item?.locations?.city || "Unknown"}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </a>
//                             </div>
//                           </div>
//                         ))}
//                       </Slider>
//                     ) : (
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//                         {slide.lists.map((item, i) => (
//                           <div
//                             key={item.slug || item.name || i}
//                             className="group cursor-pointer cardsssneightbourhood deatilpagecardhoverrneigh bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm"
//                           >
//                             <a
//                               href={`/neighbourhood/${locationId}/${slide.category}`}
//                             >
//                               <div className="newigheeeimagez w-full h-72 overflow-hidden">
//                                 <img
//                                   src={
//                                     item?.FeaturedImage?.url
//                                       ? API_BASE_URL_API_TEST_DEV +
//                                         item.FeaturedImage.url
//                                       : "https://www.superchennai.com/images/restaurants-banner.jpg"
//                                   }
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src =
//                                       "https://www.superchennai.com/images/restaurants-banner.jpg";
//                                   }}
//                                   alt={item.name}
//                                   className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
//                                 />
//                               </div>
//                               <div className="cardsectiondetailss p-3">
//                                 <h3 className="!font-semibold text-gray-900 leading-tight mb-2 neighbourtwoheaidngssparagraph">
//                                   {item.name}
//                                 </h3>
//                                 <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
//                                   {item.description
//                                     ? `${item.description.slice(0, 70)}...`
//                                     : "No description available"}
//                                 </p>
//                                 <div className="flex items-center gap-1 text-gray-500">
//                                   <span className="flex items-center gap-0.5">
//                                     <StarIcon />
//                                     <span className="font-medium text-gray-700 text-[14px]">
//                                       {item?.googleData?.googleRating || "N/A"}
//                                     </span>
//                                   </span>
//                                   <span className="flex items-center gap-0.5 text-[15px]">
//                                     <MapPinIcon className="w-4 h-4" />
//                                     {item?.locations?.city || "Unknown"}
//                                   </span>
//                                 </div>
//                               </div>
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="w-full text-center py-24 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
//               <span className="text-3xl block mb-2">📍</span>
//               No nearby data available for this category yet.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
