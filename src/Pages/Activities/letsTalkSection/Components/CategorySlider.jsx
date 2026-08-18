// import React, { useRef, useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// // CategoryCard Sub-Component
// const CategoryCard = ({ category }) => {
//   const IconComponent = category.icon;
//   return (
//     <div className="category-card hover-lift">
//       <div
//         className="category-card-img"
//         style={{ backgroundImage: `url(${category.image})` }}
//       >
//         <div
//           className="category-icon-wrapper"
//           style={{ backgroundColor: category.color }}
//         >
//           <IconComponent size={20} color="#fff" />
//         </div>
//       </div>
//       <div className="category-card-body">
//         <h3 className="category-title">{category.title}</h3>
//         <p className="category-desc">{category.desc}</p>
//         <a href="#share-form" className="category-link">
//           Share Now <ArrowRight size={14} />
//         </a>
//       </div>
//     </div>
//   );
// };

// // Main Auto-Slider Component
// export default function CategorySlider({ categories }) {
//   const carouselRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-scroll logic (Interval rate: Every 3 seconds)
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
//         // End reachable: rewind back to start
//         if (scrollLeft + clientWidth >= scrollWidth - 10) {
//           carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           carouselRef.current.scrollBy({
//             left: clientWidth * 0.75,
//             behavior: "smooth"
//           });
//         }
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Manual scroll with navigation buttons
//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       const { clientWidth } = carouselRef.current;
//       const scrollAmount =
//         direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
//       carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="category-section" id="stories">
//       <div className="section-header">
//         <h2>SHARE WHAT YOU LOVE ABOUT CHENNAI</h2>
//         <p>Choose a category to share your story</p>
//       </div>

//       <div
//         className="carousel-wrapper"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <button
//           className="carousel-btn prev-btn"
//           onClick={() => scroll("left")}
//           aria-label="Previous Categories"
//         >
//           <ChevronLeft size={22} />
//         </button>

//         <div className="category-carousel" ref={carouselRef}>
//           {categories.map((cat) => (
//             <CategoryCard key={cat.id} category={cat} />
//           ))}
//         </div>

//         <button
//           className="carousel-btn next-btn"
//           onClick={() => scroll("right")}
//           aria-label="Next Categories"
//         >
//           <ChevronRight size={22} />
//         </button>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { ArrowRight } from "lucide-react";


const CategoryCard = ({ category }) => {
  const IconComponent = category.icon;
  return (
    <div className="category-card hover-lift">
      <div
        className="category-card-img"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div
          className="category-icon-wrapper"
          style={{ backgroundColor: category.color }}
        >
          <IconComponent size={20} color="#fff" />
        </div>
      </div>
      <div className="category-card-body">
        <h3 className="category-title">{category.title}</h3>
        <p className="category-desc">{category.desc}</p>
        <a href="#share-form" className="category-link">
          Share Now <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default function CategorySlider({ categories }) {
  // Infinite marquee-க்காக array-வை 2 முறை duplicate செய்கிறோம்
  const marqueeItems = [...categories, ...categories];

  return (
    <section className="category-section" id="stories">
      <div className="section-header">
        <h2>SHARE WHAT YOU LOVE ABOUT CHENNAI</h2>
        <p>Choose a category to share your story</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((cat, index) => (
            <CategoryCard key={`${cat.id}-${index}`} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}