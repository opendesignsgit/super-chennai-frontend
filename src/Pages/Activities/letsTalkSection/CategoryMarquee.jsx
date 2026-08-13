// import React, { useState } from "react";
// import {
//   Users,
//   MapPin,
//   Camera,
//   Lightbulb,
//   Calendar,
//   Coffee,
//   Store,
//   Palette,
//   GraduationCap,
//   HeartPulse,
//   Leaf,
//   Train,
//   Landmark,
//   ShoppingBag,
//   Film,
//   Trophy,
//   Rocket,
//   Heart,
//   ArrowRight,
// } from "lucide-react";
// import "./CategoryMarquee.css";

// const categories = [
//   { id: "PEOPLE", title: "PEOPLE", desc: "Stories of Chennaiites who inspire us.", icon: Users, color: "#8b3c82", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
//   { id: "PLACES", title: "PLACES", desc: "Hidden gems, iconic spots & local haunts.", icon: MapPin, color: "#e65100", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
//   { id: "EXPERIENCES", title: "EXPERIENCES", desc: "Vibes, moments & everyday stories.", icon: Camera, color: "#2e7d32", image: "https://images.unsplash.com/photo-1621831985871-33e144a69e71?auto=format&fit=crop&w=600&q=80" },
//   { id: "IDEAS", title: "IDEAS", desc: "Big visions and thoughts for the future.", icon: Lightbulb, color: "#f57f17", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
//   { id: "EVENTS", title: "EVENTS", desc: "Gigs, festivals & community meetups.", icon: Calendar, color: "#c2185b", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" },
//   { id: "FOOD", title: "FOOD", desc: "From street stalls to iconic messes.", icon: Coffee, color: "#d84315", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80" },
//   { id: "BUSINESS", title: "BUSINESS", desc: "Startups and iconic homegrown brands.", icon: Store, color: "#1565c0", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
//   { id: "ART & CULTURE", title: "ART & CULTURE", desc: "Indie art, Carnatic music & drama.", icon: Palette, color: "#6a1b9a", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80" },
//   { id: "EDUCATION", title: "EDUCATION", desc: "Schools, colleges & student life.", icon: GraduationCap, color: "#00838f", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
//   { id: "HEALTH & WELLNESS", title: "HEALTH & WELLNESS", desc: "Fitness, wellness & healthy living.", icon: HeartPulse, color: "#ad1457", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" },
//   { id: "ENVIRONMENT", title: "ENVIRONMENT", desc: "Green initiatives & coastal conservation.", icon: Leaf, color: "#558b2f", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" },
//   { id: "TRANSPORT", title: "TRANSPORT", desc: "Local trains, autos & commute tales.", icon: Train, color: "#4e342e", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80" },
//   { id: "HERITAGE", title: "HERITAGE", desc: "Centuries-old stories & architecture.", icon: Landmark, color: "#8d6e63", image: "https://images.unsplash.com/photo-1609946782780-28876169c17a?auto=format&fit=crop&w=600&q=80" },
//   { id: "LIFESTYLE", title: "LIFESTYLE", desc: "Markets, trends & daily Chennai life.", icon: ShoppingBag, color: "#0288d1", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" },
//   { id: "ENTERTAINMENT", title: "ENTERTAINMENT", desc: "Cinema, comedy & nightlife scenes.", icon: Film, color: "#7b1fa2", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80" },
//   { id: "SPORTS", title: "SPORTS", desc: "Gully cricket, surfing & fandom.", icon: Trophy, color: "#ef6c00", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80" },
//   { id: "TECH & STARTUPS", title: "TECH & STARTUPS", desc: "SaaS, tech hubs & innovators.", icon: Rocket, color: "#283593", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
//   { id: "COMMUNITY", title: "COMMUNITY", desc: "Neighbourhood voices & social causes.", icon: Heart, color: "#c62828", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80" }
// ];

// const CategoryCard = ({ category }) => {
//   const IconComponent = category.icon;
//   return (
//     <div className="marquee-card">
//       <div className="marquee-card-img" style={{ backgroundImage: `url(${category.image})` }}>
//         <div className="marquee-icon-wrapper" style={{ backgroundColor: category.color }}>
//           <IconComponent size={20} color="#fff" />
//         </div>
//       </div>
//       <div className="marquee-card-body">
//         <h3 className="marquee-card-title">{category.title}</h3>
//         <p className="marquee-card-desc">{category.desc}</p>
//         <a href="#share-form" className="marquee-card-link">
//           Share Now <ArrowRight size={14} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default function CategoryMarquee() {
//   const [isPaused, setIsPaused] = useState(false);

//   return (
//     <section className="marquee-section" id="stories">
//       <div className="marquee-header">
//         <h2>SHARE WHAT YOU LOVE ABOUT CHENNAI</h2>
//         <p>Choose a category to share your story</p>
//       </div>

//       <div
//         className="marquee-wrapper"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <div className={`marquee-track ${isPaused ? "paused" : ""}`}>
//           {/* First Set of Items */}
//           {categories.map((cat, idx) => (
//             <CategoryCard key={`cat-1-${idx}`} category={cat} />
//           ))}
//           {/* Duplicate Set for Seamless Seamless Loop */}
//           {categories.map((cat, idx) => (
//             <CategoryCard key={`cat-2-${idx}`} category={cat} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }