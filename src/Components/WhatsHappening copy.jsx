import React from 'react';
import { 
  Music2, 
  Utensils, 
  Star, 
  Landmark, 
  Palette, 
  ArrowRight 
} from 'lucide-react';

// --- Data Configuration ---
const EVENT_CATEGORIES = [
  {
    id: 'music',
    title: 'LIVE MUSIC',
    description: 'From indie gigs to full-on concerts.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    icon: Music2,
    position: 'left-outer'
  },
  {
    id: 'food',
    title: 'FOOD & DRINKS',
    description: 'Great food, local flavors and new favourites.',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop',
    icon: Utensils,
    position: 'left-inner'
  },
  {
    id: 'culture',
    title: 'CULTURE & HERITAGE',
    description: "Dive into Chennai's rich history and traditions.",
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
    icon: Landmark,
    position: 'right-inner'
  },
  {
    id: 'art',
    title: 'ART & EXPERIENCES',
    description: 'Exhibitions, workshops and unique experiences.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1000&auto=format&fit=crop',
    icon: Palette,
    position: 'right-outer'
  }
];

// --- Sub-Component 1: Section Header ---
const SectionHeader = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4 mb-10 md:mb-16">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-2">
        <span className="w-8 h-[2px] bg-[#A34493]" />
        <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#A34493] uppercase">
          THIS WEEK
        </span>
        <span className="w-8 h-[2px] bg-[#A34493]" />
      </div>

      {/* Main Title Group */}
      <div className="relative mb-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-none">
          WHAT'S HAPPENING
        </h1>
        <span 
          className="block sm:inline-block font-['Caveat',cursive] text-4xl sm:text-6xl text-[#A34493] capitalize -mt-2 sm:-mt-6 sm:ml-24 md:ml-36 transform -rotate-3"
          style={{ textShadow: '0 0 15px rgba(163, 68, 147, 0.4)' }}
        >
          in Chennai
        </span>
      </div>

      {/* Subtitles */}
      <p className="text-gray-300 text-sm sm:text-base font-normal tracking-wide">
        Your handpicked guide to the best of the city.
      </p>
      <p className="text-gray-400 text-xs sm:text-sm font-light mt-1 tracking-wide">
        Stay in the loop. Get out. Make memories.
      </p>
    </div>
  );
};

// --- Sub-Component 2: Standard Event Category Card ---
const EventCategoryCard = ({ title, description, image, icon: Icon, heightClass }) => {
  return (
    <div 
      className={`group relative w-full ${heightClass} rounded-2xl overflow-hidden border border-[#A34493]/40 bg-[#080711] shadow-[0_0_20px_rgba(163,68,147,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#A34493] hover:shadow-[0_0_35px_rgba(163,68,147,0.3)] cursor-pointer flex flex-col justify-end p-6`}
    >
      {/* Background Image with Zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080711] via-[#080711]/60 to-transparent" />
      <div className="absolute inset-0 bg-purple-950/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start gap-3">
        {/* Circular Purple Icon Button */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#A34493] to-[#8B3C82] shadow-md border border-white/20 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-white" />
        </div>

        {/* Text Details */}
        <div>
          <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white group-hover:text-[#A34493] transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-light mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component 3: Main Featured Center Card ---
const FeaturedChennaiCard = () => {
  return (
    <div className="group relative w-full h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border-2 border-[#A34493] bg-[#080711] shadow-[0_0_30px_rgba(163,68,147,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(163,68,147,0.45)] cursor-pointer flex flex-col justify-between p-6 sm:p-8 z-20">
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080711] via-[#080711]/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-[#080711]" />

      {/* Top Section: Star Badge */}
      <div className="relative z-10 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#A34493] to-[#8B3C82] shadow-[0_0_15px_rgba(163,68,147,0.5)] border border-white/30">
          <Star className="h-6 w-6 text-white fill-white" />
        </div>
      </div>

      {/* Middle/Bottom Section: Featured Text */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-xs font-bold tracking-[0.25em] text-[#A34493] uppercase mb-2 bg-[#080711]/60 px-3 py-1 rounded-full border border-[#A34493]/30">
          CURATED PICKS
        </span>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none uppercase">
          THE BEST OF
        </h2>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none uppercase mb-2">
          CHENNAI
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xs">
          Handpicked experiences around the city
        </p>

        {/* Purple Horizontal Line */}
        <div className="w-16 h-[2px] bg-[#A34493] my-4 opacity-80" />

        {/* Bottom Circular Action Button */}
        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#8B3C82] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#A34493] group-hover:text-white">
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component 4: Bottom Explore CTA Button ---
const ExploreButton = () => {
  return (
    <div className="relative z-10 flex justify-center mt-12 md:mt-16">
      <button className="group relative flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#A34493] bg-[#080711]/80 text-white font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-[#A34493] hover:to-[#8B3C82] hover:shadow-[0_0_25px_rgba(163,68,147,0.5)] active:scale-95">
        <span>EXPLORE WHAT'S ON</span>
        <ArrowRight className="h-5 w-5 text-[#A34493] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

// --- Sub-Component 5: Bottom Decorative Line-Art Skyline ---
const ChennaiSkyline = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 pointer-events-none overflow-hidden opacity-25">
      <svg 
        className="w-full h-full text-[#A34493]" 
        viewBox="0 0 1200 120" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        preserveAspectRatio="none"
      >
        {/* Decorative Silhouette / Line-Art Elements representing Chennai */}
        {/* Buildings & Towers */}
        <path d="M0,120 L0,90 L20,90 L20,120 M20,120 L20,80 L35,80 L35,120 M35,120 L35,100 L55,100 L55,120" />
        
        {/* Heritage Temple Gopuram Silhouette (Kapaleeshwarar Style) */}
        <path d="M120,120 L130,50 L135,50 L140,65 L145,65 L150,80 L155,80 L160,100 L165,100 L175,120" />
        <line x1="125" y1="65" x2="165" y2="65" />
        <line x1="130" y1="80" x2="160" y2="80" />
        <line x1="135" y1="100" x2="155" y2="100" />
        
        {/* Midrise Skyline */}
        <path d="M220,120 L220,70 L250,70 L250,120 M250,120 L250,60 L280,60 L280,120 M280,120 L280,85 L310,85 L310,120" />
        
        {/* Chennai Lighthouse Silhouette */}
        <path d="M420,120 L425,30 L445,30 L450,120" />
        <path d="M420,30 L450,30 L435,15 Z" />
        <line x1="423" y1="50" x2="447" y2="50" />
        <line x1="424" y1="75" x2="446" y2="75" />

        {/* Central High Rises */}
        <path d="M520,120 L520,40 L560,40 L560,120 M560,120 L560,50 L600,50 L600,120" />
        <circle cx="560" cy="30" r="4" />
        
        {/* Cable Bridge Silhouette (Napier Bridge style) */}
        <path d="M680,120 Q730,70 780,120" />
        <path d="M780,120 Q830,70 880,120" />
        <line x1="730" y1="95" x2="730" y2="120" />
        <line x1="830" y1="95" x2="830" y2="120" />

        {/* Heritage Railway Building */}
        <path d="M960,120 L960,75 L980,55 L1000,75 L1000,120" />
        <path d="M1000,120 L1000,85 L1040,85 L1040,120" />

        {/* Coastal Waves at base */}
        <path d="M0,118 Q150,112 300,118 T600,118 T900,118 T1200,118" strokeWidth="0.8" />

        {/* Flying Birds */}
        <path d="M300,30 Q305,25 310,30 Q315,25 320,30" strokeWidth="1" />
        <path d="M325,20 Q330,15 335,20 Q340,15 345,20" strokeWidth="1" />
        <path d="M850,35 Q855,30 860,35 Q865,30 870,35" strokeWidth="1" />
      </svg>
    </div>
  );
};

// --- Main Section Component ---
export default function WhatsHappening() {
  const leftOuterCard = EVENT_CATEGORIES.find(c => c.position === 'left-outer');
  const leftInnerCard = EVENT_CATEGORIES.find(c => c.position === 'left-inner');
  const rightInnerCard = EVENT_CATEGORIES.find(c => c.position === 'right-inner');
  const rightOuterCard = EVENT_CATEGORIES.find(c => c.position === 'right-outer');

  return (
    <section className="relative w-full min-h-screen bg-[#080711] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between selection:bg-[#A34493] selection:text-white">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A34493]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#8B3C82]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Component */}
        <SectionHeader />

        {/* 5-Card Composition Container */}
        
        {/* DESKTOP LAYOUT (Screen >= 1280px / xl) */}
        <div className="hidden xl:grid grid-cols-5 gap-5 items-center max-w-7xl mx-auto px-2">
          {/* Card 1: Live Music (Slightly Smaller Height) */}
          <EventCategoryCard {...leftOuterCard} heightClass="h-[380px]" />

          {/* Card 2: Food & Drinks (Medium Height) */}
          <EventCategoryCard {...leftInnerCard} heightClass="h-[430px]" />

          {/* Card 3: Main Featured Center Card (Largest Visual Dominance) */}
          <FeaturedChennaiCard />

          {/* Card 4: Culture & Heritage (Medium Height) */}
          <EventCategoryCard {...rightInnerCard} heightClass="h-[430px]" />

          {/* Card 5: Art & Experiences (Slightly Smaller Height) */}
          <EventCategoryCard {...rightOuterCard} heightClass="h-[380px]" />
        </div>

        {/* TABLET LAYOUT (768px - 1279px / md to lg) */}
        <div className="hidden md:flex xl:hidden flex-col gap-6 max-w-4xl mx-auto">
          {/* Featured Card Full Width on Top */}
          <FeaturedChennaiCard />

          {/* 4 Category Cards in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-5">
            <EventCategoryCard {...leftOuterCard} heightClass="h-[320px]" />
            <EventCategoryCard {...leftInnerCard} heightClass="h-[320px]" />
            <EventCategoryCard {...rightInnerCard} heightClass="h-[320px]" />
            <EventCategoryCard {...rightOuterCard} heightClass="h-[320px]" />
          </div>
        </div>

        {/* MOBILE LAYOUT (< 768px / sm & below) */}
        <div className="flex md:hidden flex-col gap-5 max-w-md mx-auto">
          {/* Main Featured Card First */}
          <FeaturedChennaiCard />

          {/* Category Cards Stacked Vertically */}
          <EventCategoryCard {...leftOuterCard} heightClass="h-[280px]" />
          <EventCategoryCard {...leftInnerCard} heightClass="h-[280px]" />
          <EventCategoryCard {...rightInnerCard} heightClass="h-[280px]" />
          <EventCategoryCard {...rightOuterCard} heightClass="h-[280px]" />
        </div>

        {/* Bottom CTA Button */}
        <ExploreButton />
      </div>

      {/* Decorative Bottom Skyline */}
      <ChennaiSkyline />
    </section>
  );
}