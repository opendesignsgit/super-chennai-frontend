
import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Music2,
  Utensils,
  Landmark,
  Palette,
  Drama,
  Trophy,
  Sparkles,
  ShoppingBag,
  Film,
  Compass,
  Baby,
  BookOpen,
  Briefcase,
  PawPrint,
  Headphones,
  Shirt,
  Heart,
  Camera,
  Users,
  Backpack,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Added custom `rotate` and `offsetY` values to create the hand-arranged feel
const EVENT_CATEGORIES = [
  {
    id: "music",
    title: "LIVE MUSIC",
    description: "From indie gigs to full-on concerts.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
    icon: Music2,
    rotate: "-1.8deg",
    offsetY: "6px",
  },
  {
    id: "food",
    title: "FOOD & DRINKS",
    description: "Great food, local flavors and new favourites.",
    image:
      "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop",
    icon: Utensils,
    rotate: "1.5deg",
    offsetY: "-8px",
  },
  {
    id: "featured",
    isFeatured: true,
    rotate: "0deg",
    offsetY: "0px",
  },
  {
    id: "culture",
    title: "CULTURE & HERITAGE",
    description: "Dive into Chennai's rich history and traditions.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop",
    icon: Landmark,
    rotate: "-1.2deg",
    offsetY: "-6px",
  },
  {
    id: "art",
    title: "ART & EXPERIENCES",
    description: "Exhibitions, workshops and unique experiences.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1000&auto=format&fit=crop",
    icon: Palette,
    rotate: "2deg",
    offsetY: "8px",
  },
  {
    id: "theatre",
    title: "THEATRE & COMEDY",
    description: "Stand-up shows, stage plays, and open mics.",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop",
    icon: Drama,
    rotate: "-1.5deg",
    offsetY: "4px",
  },
  {
    id: "sports",
    title: "SPORTS & FITNESS",
    description: "Marathons, turf matches, and fitness pop-ups.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=1000&auto=format&fit=crop",
    icon: Trophy,
    rotate: "1.8deg",
    offsetY: "-10px",
  },
  {
    id: "nightlife",
    title: "NIGHTLIFE & PARTIES",
    description: "DJ nights, rooftop lounges, and clubbing.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    icon: Sparkles,
    rotate: "-2deg",
    offsetY: "5px",
  },
  {
    id: "flea",
    title: "FLEA & SHOPPING",
    description: "Pop-up bazaars, artisan markets, and fashion shows.",
    image:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1000&auto=format&fit=crop",
    icon: ShoppingBag,
    rotate: "1.2deg",
    offsetY: "-4px",
  },
  {
    id: "screenings",
    title: "FILM & SCREENINGS",
    description: "Indie cinema, open-air movies, and film festivals.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
    icon: Film,
    rotate: "-1.4deg",
    offsetY: "7px",
  },
  {
    id: "workshops",
    title: "OUTDOOR & TRAILS",
    description: "ECR beach walks, heritage tours, and camping trips.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    icon: Compass,
    rotate: "1.7deg",
    offsetY: "-6px",
  },
  {
    id: "kids",
    title: "KIDS & FAMILY",
    description: "Storytelling sessions, amusement parks, and fun fairs.",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1000&auto=format&fit=crop",
    icon: Baby,
    rotate: "-1.9deg",
    offsetY: "9px",
  },
  {
    id: "workshops-craft",
    title: "DIY & WORKSHOPS",
    description: "Pottery, resin art, painting, and baking classes.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop",
    icon: BookOpen,
    rotate: "1.1deg",
    offsetY: "-5px",
  },
  {
    id: "tech",
    title: "TECH & STARTUPS",
    description: "Hackathons, founder meetups, and AI expos.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    icon: Briefcase,
    rotate: "-1.6deg",
    offsetY: "4px",
  },
  {
    id: "pets",
    title: "PET EVENTS",
    description: "Pet carnivals, adoption drives, and doggy socials.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop",
    icon: PawPrint,
    rotate: "1.9deg",
    offsetY: "-7px",
  },
  {
    id: "gaming",
    title: "GAMING & ESPORTS",
    description: "Console tournaments, VR arcades, and LAN parties.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    icon: Headphones,
    rotate: "-1.3deg",
    offsetY: "6px",
  },
  {
    id: "fashion",
    title: "FASHION & LIFESTYLE",
    description: "Runway shows, saree expos, and designer pop-ups.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    icon: Shirt,
    rotate: "1.6deg",
    offsetY: "-9px",
  },
  {
    id: "wellness",
    title: "WELLNESS & RETREATS",
    description: "Sunrise yoga at Besant Nagar, sound healing, and retreats.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    icon: Heart,
    rotate: "-1.7deg",
    offsetY: "5px",
  },
  {
    id: "photo",
    title: "PHOTO WALKS",
    description: "Mylapore street photo walks, sunset photomeets.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    icon: Camera,
    rotate: "1.4deg",
    offsetY: "-4px",
  },
  {
    id: "meetups",
    title: "COMMUNITY & MEETUPS",
    description: "Book clubs, board game nights, and expat socials.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
    icon: Users,
    rotate: "-1.1deg",
    offsetY: "8px",
  },
  {
    id: "travel",
    title: "WEEKEND GETAWAYS",
    description:
      "Pondicherry rides, Mahabalipuram trips, and Pulicat lake treks.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    icon: Backpack,
    rotate: "1.8deg",
    offsetY: "-6px",
  },
];

const SectionHeader = () => (
  <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4 mb-6 md:mb-10">
    <div className="flex items-center gap-3 mb-2">
      <span className="w-8 h-[2px] bg-[#A34493]" />
      <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#A34493] uppercase">
        THIS WEEK
      </span>
      <span className="w-8 h-[2px] bg-[#A34493]" />
    </div>

    <div className="relative mb-4">
      <h3 className="text-4xl sm:text-6xl lg:text-7xl uppercase text-gray-900 tracking-tight leading-none">
        WHAT'S HAPPENING
      </h3>
      <span
        className="block sm:inline-block font-['Caveat',cursive] text-4xl sm:text-6xl text-[#A34493] capitalize -mt-2 sm:-mt-6 sm:ml-24 md:ml-36 transform -rotate-3"
        style={{ textShadow: "0 0 10px rgba(163, 68, 147, 0.2)" }}
      >
        in Chennai
      </span>
    </div>

    <p className="text-gray-700 text-sm sm:text-base font-medium tracking-wide">
      Your handpicked guide to the best of the city.
    </p>
    <p className="text-gray-500 text-xs sm:text-sm font-normal mt-1 tracking-wide">
      Stay in the loop. Get out. Make memories.
    </p>
  </div>
);

const EventCategoryCard = ({ title, description, image, icon: Icon }) => (
  <div className="p-1 sm:p-2 h-full flex items-center">
    <div className="group relative w-full h-[400px] xl:h-[420px] rounded-2xl overflow-hidden border border-[#A34493]/30 bg-white shadow-lg transition-all duration-500 cursor-pointer flex flex-col justify-end p-5 hover:border-[#A34493] hover:shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#A34493] to-[#8B3C82] shadow-md border border-white/40 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-white" />
        </div>

        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-white group-hover:text-purple-200 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-200 font-light mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedChennaiCard = () => (
  <div className="p-1 sm:p-2 h-full flex items-center">
    <div className="group relative w-full h-[460px] xl:h-[500px] rounded-3xl overflow-hidden border-2 border-[#A34493] bg-white shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 z-20">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-gray-950" />

      <div className="relative z-10 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#A34493] to-[#8B3C82] shadow-[0_4px_15px_rgba(163,68,147,0.4)] border border-white/40">
          <Star className="h-6 w-6 text-white fill-white" />
        </div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-xs font-bold tracking-[0.25em] text-[#A34493] uppercase mb-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#A34493]/30 shadow-sm">
          CURATED PICKS
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-none uppercase">
          THE BEST OF
        </h2>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-none uppercase mb-2">
          CHENNAI
        </h2>

        <p className="text-xs sm:text-sm text-gray-200 font-light max-w-xs">
          Handpicked experiences around the city
        </p>

        <div className="w-16 h-[2px] bg-[#A34493] my-3 opacity-90" />

        <div className="mt-1 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#8B3C82] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#A34493] group-hover:text-white">
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  </div>
);

const ExploreButton = () => (
  <div className="relative z-10 flex justify-center mt-6">
    <button className="group relative flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#A34493] bg-white text-gray-900 font-bold text-sm sm:text-base tracking-widest uppercase shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#A34493] hover:to-[#8B3C82] hover:text-white hover:shadow-[0_8px_25px_rgba(163,68,147,0.35)] active:scale-95">
      <span>EXPLORE WHAT'S ON</span>
      <ArrowRight className="h-5 w-5 text-[#A34493] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
    </button>
  </div>
);

const ChennaiSkyline = () => (
  <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 pointer-events-none overflow-hidden opacity-30">
    <svg
      className="w-full h-full text-[#A34493]"
      viewBox="0 0 1200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      preserveAspectRatio="none"
    >
      <path d="M0,120 L0,90 L20,90 L20,120 M20,120 L20,80 L35,80 L35,120 M35,120 L35,100 L55,100 L55,120" />
      <path d="M120,120 L130,50 L135,50 L140,65 L145,65 L150,80 L155,80 L160,100 L165,100 L175,120" />
      <line x1="125" y1="65" x2="165" y2="65" />
      <line x1="130" y1="80" x2="160" y2="80" />
      <line x1="135" y1="100" x2="155" y2="100" />
      <path d="M220,120 L220,70 L250,70 L250,120 M250,120 L250,60 L280,60 L280,120 M280,120 L280,85 L310,85 L310,120" />
      <path d="M420,120 L425,30 L445,30 L450,120" />
      <path d="M420,30 L450,30 L435,15 Z" />
      <line x1="423" y1="50" x2="447" y2="50" />
      <line x1="424" y1="75" x2="446" y2="75" />
      <path d="M520,120 L520,40 L560,40 L560,120 M560,120 L560,50 L600,50 L600,120" />
      <circle cx="560" cy="30" r="4" />
      <path d="M680,120 Q730,70 780,120" />
      <path d="M780,120 Q830,70 880,120" />
      <line x1="730" y1="95" x2="730" y2="120" />
      <line x1="830" y1="95" x2="830" y2="120" />
      <path d="M960,120 L960,75 L980,55 L1000,75 L1000,120" />
      <path d="M1000,120 L1000,85 L1040,85 L1040,120" />
      <path
        d="M0,118 Q150,112 300,118 T600,118 T900,118 T1200,118"
        strokeWidth="0.8"
      />
      <path d="M300,30 Q305,25 310,30 Q315,25 320,30" strokeWidth="1" />
      <path d="M325,20 Q330,15 335,20 Q340,15 345,20" strokeWidth="1" />
      <path d="M850,35 Q855,30 860,35 Q865,30 870,35" strokeWidth="1" />
    </svg>
  </div>
);

export default function WhatsHappening() {
  const sliderRef = useRef(null);

  const sliderSettings = {
    className: "center custom-slick-container",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    initialSlide: 2,
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-50 text-gray-900 py-12 px-2 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between selection:bg-[#A34493] selection:text-white DiverseDelightsSectionContainer">
      {/* Dynamic Staggered & Organic Hand-Tilted CSS overrides */}
      <style>{`
        /* Track Flex Container Alignment */
        .custom-slick-container .slick-track {
          display: flex !important;
          align-items: center !important;
          padding: 40px 0;
        }
        
        /* Base slide styling for non-center cards with custom CSS properties */
        .custom-slick-container .slick-slide {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-in-out;
          opacity: 0.65;
          /* Apply dynamic rotation and Y-offset per card while scaled down */
          transform: translateY(var(--card-offset, 0px)) rotate(var(--card-rotate, 0deg)) scale(0.85);
          z-index: 10;
        }

        /* Adjacent / Inner side cards */
        .custom-slick-container .slick-slide.slick-active {
          opacity: 0.88;
          transform: translateY(var(--card-offset, 0px)) rotate(var(--card-rotate, 0deg)) scale(0.93);
          z-index: 20;
        }

        /* Center Active Featured Card — Straight, Dominant & Centered */
        .custom-slick-container .slick-center {
          opacity: 1 !important;
          /* Reset tilt and vertical offset for straight alignment */
          transform: translateY(0px) rotate(0deg) scale(1.08) !important;
          z-index: 40 !important;
        }

        /* Highlight Shadow on Center Card */
        .custom-slick-container .slick-center > div {
          filter: drop-shadow(0 22px 35px rgba(163, 68, 147, 0.38));
        }
      `}</style>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A34493]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#8B3C82]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto w-full relative z-10">
        <SectionHeader />

        <div className="relative py-4 px-1">
          <Slider ref={sliderRef} {...sliderSettings}>
            {EVENT_CATEGORIES.map((item) => (
              <div
                key={item.id}
                className="outline-none"
                style={{
                  "--card-rotate": item.rotate || "0deg",
                  "--card-offset": item.offsetY || "0px",
                }}
              >
                {item.isFeatured ? (
                  <FeaturedChennaiCard />
                ) : (
                  <EventCategoryCard {...item} />
                )}
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6 z-20 relative">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#A34493] bg-white text-[#A34493] shadow-md transition-all duration-300 hover:bg-[#A34493] hover:text-white active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#A34493] bg-white text-[#A34493] shadow-md transition-all duration-300 hover:bg-[#A34493] hover:text-white active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <ExploreButton />
      </div>

      <ChennaiSkyline />
    </section>
  );
}