import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function NightLife() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  const nightlifeData = [
  {
    category: "Upscale Bars & Lounges",
    places: [
      {
        name: "The Flying Elephant (Park Hyatt)",
        desc: "Multi-level bar, global cuisine Award-winning cocktails",
        locations: [
          { name: "Guindy", link: "#" },
          ],
      },
      {
        name: "Q Bar (Hilton)",
        desc: "Rooftop ambiance, skyline views, lively DJ scene",
        locations: [{ name: "Guindy", link: "#" }],
      },
      {
        name: "The Leather Bar (The Park Hotel)",
        desc: "Stylish, moody, one of Chennai’s OG nightlife spots",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
      {
        name: "Willows (The Westin Velachery)",
        desc: "Sophisticated sports lounge with wide selections",
        locations: [{ name: "Velachery", link: "#" }],
      },
      {
        name: "KooX (Novotel OMR)",
        desc: "Rooftop Asian Grill with chic lounge feel",
        locations: [{ name: "OMR", link: "#" }],
      },
      {
        name: "SKY (The Rain Tree, Anna Salai)",
        desc: "Elegant rooftop bar with skyline views",
        locations: [{ name: "Anna Salai", link: "#" }],
      },
      {
        name: "The Crown (The Residency Towers)",
        desc: "Classic rooftop with live music, relaxed setting",
        locations: [{ name: "T. Nagar", link: "#" }],
      },
    ],
  },
  {
    category: "Popular Restobars in Chennai",
    places: [
      {
        name: "Bay 146 (Savera Hotel)",
        desc: "A crowd-favorite with live bands, themed evenings, and an expansive bar menu",
        locations: [{ name: "Mylapore", link: "#" }],
      },
      {
        name: "Off The Record",
        desc: "Industrial-chic vibe with music, cocktails, and shareable global plates",
        locations: [{ name: "Gopalapuram", link: "#" }],
      },
      {
        name: "Lord of the Drinks",
        desc: "Massive venue with bold décor, comfort food, and vibrant nightlife energy",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
      {
        name: "Drizzle by the Beach",
        desc: "Sea breeze, rooftop views, mocktails, and a DJ-ready setting",
        locations: [{ name: "Injambakkam", link: "#" }],
      },
    ],
  },
  {
    category: "Themed & Fusion Spots",
    places: [
      {
        name: "The Cycle Gap",
        desc: "Quirky, Tamil cinema-inspired restobar with street food fusion and great playlists",
        locations: [{ name: "Anna Nagar", link: "#" }],
      },
      {
        name: "G Bar (Grand Chennai by GRT)",
        desc: "Plush interiors and premium beverages with modern European dining",
        locations: [{ name: "T. Nagar", link: "#" }],
      },
      {
        name: "Black Orchid",
        desc: "Intimate space with boho décor, signature cocktails, and acoustic evenings",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
    ],
  },
  {
    category: "Gastrobar-style Dining",
    places: [
      {
        name: "The Velveteen Rabbit",
        desc: "Cocktail-first menu, laid-back ambiance, and a solid brunch scene",
        locations: [{ name: "R.A. Puram", link: "#" }],
      },
      {
        name: "Ministry of Chutneys",
        desc: "Indian-inspired restobar with fun plating and playful cocktails",
        locations: [{ name: "T. Nagar", link: "#" }],
      },
    ],
  },
  {
    category: "Trendy & Youthful Vibes",
    places: [
      {
        name: "Cycle Gap",
        desc: "Tamil pop-culture-themed with quirky interiors, fusion food, and upbeat playlists.",
        locations: [
          { name: "Anna Nagar", link: "#" },
          { name: "OMR", link: "#" },
        ],
      },
      {
        name: "Watsons ",
        desc: "Lively ambiance, classic pub fare, good music, and sports screenings",
        locations: [{ name: "T. Nagar", link: "#" }],
      },
      {
        name: "Off the Record ",
        desc: "Rustic-chic bar with live music, creative cocktails, and global eats.",
        locations: [{ name: "Gopalapuram", link: "#" }],
      },
        {
        name: "Big Bang Theory – Bar & Kitchen",
        desc: "Sitcom-themed with quirky cocktails, comfort food, and regular events.",
        locations: [{ name: "Kodambakkam", link: "#" }],
      },
    ],
  },
  {
    category: "Chic & Upscale Spots",
    places: [
      {
        name: "The Velveteen Rabbit",
        desc: "A beautifully designed space with craft cocktails and a quiet, boho-luxury vibe",
        locations: [
          { name: "R.A. Puram", link: "#" },
         ],
      },
      {
        name: "Radio Room",
        desc: "Retro-themed restobar with great music, curated drinks, and a fashionable crowd.",
        locations: [{ name: "Somerset Greenways", link: "#" }],
      },
      {
        name: "The Slate Kitchen & Bar",
        desc: "Sophisticated interiors, global cuisine, and rooftop ambiance",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
        {
        name: "Barracuda Brew",
        desc: "Beach-facing brewpub with continental fare, music nights, and craft beer on tap.",
        locations: [{ name: "ECR", link: "#" }],
      },
    ],
  },
  {
    category: "Food-First with a Buzz",
    places: [
      {
        name: "The Velveteen Rabbit",
        desc: "A beautifully designed space with craft cocktails and a quiet, boho-luxury vibe",
        locations: [
          { name: "R.A. Puram", link: "#" },
         ],
      },
      {
        name: "Radio Room",
        desc: "Retro-themed restobar with great music, curated drinks, and a fashionable crowd.",
        locations: [{ name: "Somerset Greenways", link: "#" }],
      },
      {
        name: "The Slate Kitchen & Bar",
        desc: "Sophisticated interiors, global cuisine, and rooftop ambiance",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
        {
        name: "Barracuda Brew",
        desc: "Beach-facing brewpub with continental fare, music nights, and craft beer on tap.",
        locations: [{ name: "ECR", link: "#" }],
      },
    ],
  },
   {
    category: "Good to Know",
    places: [
      {
        name: "Most restobars operate from",
        desc: "12 PM to 11 PM",
        locations: [
          { name: "", link: "#" },
         ],
      },
      {
        name: "Reservations are recommended on weekends",
        desc: "-",
        locations: [{ name: "", link: "#" }],
      },
      {
        name: "Entry is typically 21+ with valid ID",
        desc: "-",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
        {
        name: "Many offer ladies’ nights, happy hours, or live music events weekly",
        desc: "-",
        locations: [{ name: "", link: "#" }],
      },
       {
        name: "Liquor licenses are limited to hotels and licensed resto-bars",
        desc: "-",
        locations: [{ name: "", link: "#" }],
      },
       {
        name: "IDs are checked at most venues (carry valid government ID)",
        desc: "-",
        locations: [{ name: "", link: "#" }],
      },
       {
        name: "Dress codes are usually casual-chic; avoid activewear in upscale lounges",
        desc: "-",
        locations: [{ name: "", link: "#" }],
      },
    ],
  },

   {
    category: "Live Music & Performance Venues",
    places: [
      {
        name: "Bay 146 (Savera Hotel)",
        desc: " Live bands, karaoke nights, and themed evenings",
        locations: [
          { name: "Mylapore", link: "#" },
         ],
      },
      {
        name: "Off The Record",
        desc: "Retro hits, casual vibe, and regular DJ nights",
        locations: [{ name: "Nungambakkam", link: "#" }],
      },
      {
        name: "Black Orchid",
        desc: "Hip atmosphere, cocktails, and dance nights",
        locations: [{ name: "Gopalapuram", link: "#" }],
      },
        {
        name: "Gatsby 2000",
        desc: "Chennai’s oldest discotheque, retro and electronic vibes",
        locations: [{ name: "Crowne Plaza, Alwarpet", link: "#" }],
      },
     ],
  },
   {
    category: "Brewpubs & Casual Bars",
    places: [
      {
        name: "10 Downing Street",
        desc: "British pub feel with weekly music quizzes and karaoke Popular for themed quizzes and chilled drinks",
        locations: [
          { name: "T. Nagar", link: "#" },
         ],
      },
       
     ],
  },
  {
    category: "Rooftop Bars & Lounges",
    places: [
      {
        name: "KooX",
        desc: "Asian grill, city views, Upbeat vibe",
        locations: [
          { name: "Novotel, Chamiers Road", link: "#" },
         ],
      },
       {
        name: "The Flying Elephant ",
        desc: "Multi-level bar with global cuisine and signature cocktails",
        locations: [
          { name: "Park Hyatt", link: "#" },
         ],
      },
       {
        name: "SKY",
        desc: "Elegant rooftop bar with skyline views",
        locations: [
          { name: "The Rain Tree, Anna Salai", link: "#" },
         ],
      },
       {
        name: "The Crown",
        desc: "Classic rooftop with live music and a relaxed setting",
        locations: [
          { name: "The Residency Towers", link: "#" },
         ],
      },
       {
        name: "Q Bar",
        desc: "Open-air bar with curated music and a high-energy crowd",
        locations: [
          { name: "Hilton", link: "#" },
         ],
      },
       
     ],
  },
  {
    category: "Pubs & Live Music Venues",
    places: [
      {
        name: "Bay 146 (Savera Hotel)",
        desc: "One of Chennai’s OG music bars with frequent live acts",
        locations: [
          { name: "Savera Hote", link: "#" },
         ],
      },
       {
        name: "10 Downing Street ",
        desc: "British-style pub with karaoke nights and happy hours",
        locations: [
          { name: "T. Nagar", link: "#" },
         ],
      },
       {
        name: "Gatsby 2000",
        desc: "Retro-chic club with themed party nights",
        locations: [
          { name: "Crowne Plaza", link: "#" },
         ],
      },
       {
        name: "Off the Record",
        desc: "Rustic pub with a loyal local crowd and weekend DJs",
        locations: [
          { name: "Gopalapuram", link: "#" },
         ],
      },
       {
        name: "Black Orchid",
        desc: "Intimate bar known for indie gigs and cool interiors",
        locations: [
          { name: "Nungambakkam", link: "#" },
         ],
      },
       
     ],
  },

  {
    category: "Breweries & Chill Hangouts",
    places: [
      {
        name: "The Velveteen Rabbit",
        desc: "Stylish bar with unique cocktails and a cozy courtyard",
        locations: [
          { name: "-", link: "#" },
         ],
      },
       {
        name: "Drizzle by the Beach",
        desc: " Casual beachside lounge with dance nights and karaoke",
        locations: [
          { name: "-", link: "#" },
         ],
      },
       {
        name: "The Cycle Gap",
        desc: "Quirky, Tamil-themed resto-bar with good music and fusion food",
        locations: [
          { name: "Anna Nagar", link: "#" },
         ],
      },
       {
        name: "Lord of the Drinks",
        desc: "Bold décor and vibrant nights",
        locations: [
          { name: "Nungambakkam", link: "#" },
         ],
      },
       {
        name: "The Leather Bar",
        desc: " Upscale bar with a fashion-forward crowd and ambient music",
        locations: [
          { name: "The Park Hotel", link: "#" },
         ],
      },
       
     ],
  },
  {
    category: "Late-Night Bites & Cafés",
    places: [
      {
        name: "Midnight Express",
        desc: "Open late for coffee, dessert, and quiet conversation",
        locations: [
          { name: "Ashok Nagar", link: "#" },
         ],
      },
       {
        name: "Writer’s Café",
        desc: "  Iconic for late-night parotta, biryani, and chicken 65",
        locations: [
          { name: "-", link: "#" },
         ],
      },
       {
        name: "Thambi Vilas & Buhari",
        desc: " Iconic for late-night parotta, biryani, and chicken 65",
        locations: [
          { name: "Multiple Locations", link: "#" },
         ],
      },
       {
        name: "Zaitoon",
        desc: "Arabian grills and shawarmas into the early hours",
        locations: [
          { name: "Nungambakkam", link: "#" },
         ],
      },
       {
        name: "Haunted ",
        desc: "Themed 24-hour café with gaming zones and fast bites Themed café open round-the-clock",
        locations: [
          { name: "Velachery", link: "#" },
         ],
      },
       
     ],
  },
  
];

  const images = [
    {
      src: "images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accomodation",
      link: "/accomodation",
    },
    {
      src: "images/Visit-Images/SubPages/food-slide.jpg",
      title: "Food",
      link: "/food",
    },
    {
      src: "images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to Visit",
      link: "/places-to-visit",
    },
    {
      src: "images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to Do",
      link: "/things-to-do",
    },
    {
      src: "images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "itinerary",
      link: "/itinerary",
    },
    {
      src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hidden-gems",
    },
    {
      src: "images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/shopping",
    },
    {
      src: "images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/travel-tips",
    },
    {
      src: "images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/wellness",
    },
    {
      src: "images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/events",
    },
    {
      src: "images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/conferences",
    },
  ];

  // ########## Custom Arrow Components ###############
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("left");
      } else {
        setScrollDir("right");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="images/Visit-Images/SubPages/Luxury-Hotels-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Night Life</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> - <a href="">Night Life</a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection detailIntro">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className={`CostOflivingBackground ${
                scrollDir === "right"
                  ? "scroll-rightCostofLiving"
                  : "scroll-leftCostofLiving"
              }`}
              ref={bgTextRef}
            >
              <p>
                Night Life &nbsp; in Chennai &nbsp; Night Life &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3> Subtle, Stylish, and Slowly Evolving</h3>
              <p>
                Chennai's nightlife might be more understated than other metros,
                but it has its own distinctive rhythm. The city blends classy
                lounges, rooftop bars, beachside cafés, and live music venues
                that offer a refined, relaxed, and safe experience after dark.
                While the scene is shaped by local culture and early closing
                hours, it’s rapidly evolving — with more curated spaces for
                music, food, cocktails, and social gatherings.
              </p>
            </div>
          </div>
        </div>

   
  
   <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
      <h1 className="text-3xl font-bold mb-10 text-center">Where to Experience Chennai After Dark</h1>

      {nightlifeData.map((section, sectionIdx) => (
        <div key={sectionIdx} className="nightlifesecIn">
          <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.places.map((place, idx) => (
              <div
                key={idx}
                className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-700 mb-3">{place.desc}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {place.locations.map((loc, locIdx) => (
                    <a
                      key={locIdx}
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm bg-blue-50 px-2 py-1 rounded locicon"
                    >
                       {loc.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
 
 

    

        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Explore more of Chennai</h4>
              <p>
                Chennai is a city full of sites where you may go exploring every
                single day. Explore the city's various hidden treasures based on
                your current mood.
              </p>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className="ExplorePageSliderImage">
                    <a href={img.link} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={img.src}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        {/* Gradient Background */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">
                          {img.title}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
