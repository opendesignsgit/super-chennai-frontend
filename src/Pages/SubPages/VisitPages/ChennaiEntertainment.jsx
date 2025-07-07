
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList"; 

export default function ChennaiEntertainment() {
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

  
  const entainementData = [
  {
    category: "Cinema & Film Experiences",
    places: [
      {
        name: "Mainstream Theatres",
        desc: "Sathyam Cinemas, PVR, AGS, and INOX",
        locations: [
          { name: " Royapettah", link: "https://maps.app.goo.gl/QK6ix5Nr6BhL2bt17" },
          { name: " Express Avenue", link: "https://maps.app.goo.gl/ePg7eyhLpkrgkVuY7" },
          { name: "PVR Palazzo, Forum Vijaya Mall", link: "https://maps.app.goo.gl/ZwiedK3vZbjEUwab7" },
          { name: " VR Mall", link: "https://maps.app.goo.gl/uxbRySratqx4guFJA" },
          { name: " T Nagar", link: "https://maps.app.goo.gl/GAjGTfzhnt2Cz62b9" },
          { name: " Villivakkam", link: "https://maps.app.goo.gl/TojAbAu5Eiind4Xp9" },
          { name: " Maduravoyal", link: "https://maps.app.goo.gl/yssLsZjshshMM4uaA" },
          { name: " Chandra Metro Mall", link: "https://maps.app.goo.gl/E6Fkwcdzm6ayCteu8" },
          { name: "Chennai City Centre", link: "https://maps.app.goo.gl/kKwBNPjDpaorqanw9" },
        ],
      },
      // {
      //   name: "Regional & Global Films",
      //   desc: "Tamil, Telugu, Hindi, Malayalam, English, and world cinema releases",
      //   locations: [{ name: "-", link: "#" }],
      // },
      {
        name: "Alternative Spaces",
        desc: "Russian Cultural Centre, Goethe-Institut, Alliance Française for curated film screenings",
        locations: [
          { name: " Teynampet", link: "https://maps.app.goo.gl/NgAe1gZELdjycR8A6" },
          { name: " Nungambakkam", link: "https://maps.app.goo.gl/Ghwm9XhBQWeBjxgGA" },
          { name: "Nungambakkam", link: "https://maps.app.goo.gl/HweowBgUQE6iGEd98" },
           
        ],
      },
    ],
  },
  {
    category: "Live Music, Comedy & Theatre",
    places: [
      {
        name: "Music Gigs & DJ Nights",
        desc: "Bay 146, Off the Record, Radio Room",
        locations: [
          { name: " Mylapore", link: "https://maps.app.goo.gl/vXVMNFkvrQXgj74D6" },
          { name: " Nungambakkam", link: "https://maps.app.goo.gl/66Yz3Po9P1gvJcRY9" },
          { name: "Radio Room, Raja Annamalai Puram", link: "https://maps.app.goo.gl/EebuqAeVgBdtkX4c9" },
        ],
      },
      // {
      //   name: "Stand-Up Comedy",
      //   desc: "Medai – The Stage, Backyard, and tour stops by major comics",
      //   locations: [{ name: "-", link: "#" }],
      // },
      // {
      //   name: "English & Tamil Theatre",
      //   desc: "Spaces like Alliance Française, Museum Theatre, and open-mic events across the city",
      //   locations: [{ name: "-", link: "#" }],
      // },
    ],
  },
  {
    category: "Family-Friendly Leisure & Recreation",
    places: [
      {
        name: "Theme Parks",
        desc: "VGP Universal Kingdom, MGM Dizzee World, Kishkinta",
        locations: [
          { name: " Injambakkam", link: "https://maps.app.goo.gl/eLfjx3HFwMqbRUbX6" },
          { name: "MGM Dizzee World, Muthukadu", link: "https://maps.app.goo.gl/oDFiFXRrzHwtWgdo8" },
        ],
      },
      {
        name: "Beaches",
        desc: "Marina, Elliot’s (Besant Nagar), and Covelong for long walks, snacks, and kite flying",
        locations: [
          { name: "Marina Beach", link: "https://maps.app.goo.gl/8radUJTQ7mkgUR3bA" },
          { name: "Elliot’s Beach, Besant Nagar", link: "https://maps.app.goo.gl/KDmPxvKJQ9cQqBZ96" },
          { name: "Covelong Beach", link: "https://maps.app.goo.gl/qNQy4aLPfgcomqAU9" },
        ],
      },
      {
        name: "Malls with Fun Zones",
        desc: "VR Chennai, Express Avenue, and Phoenix Marketcity host cinemas, arcades, and kids’ zones",
        locations: [
          { name: "VR Chennai, Anna Nagar", link: "https://maps.app.goo.gl/s1WiGJTe6zDQkXsR6" },
          { name: "Express Avenue, Royapettah", link: "https://maps.app.goo.gl/66VJHN8WhryMyYV98" },
          { name: "Phoenix Marketcity, Velachery", link: "https://maps.app.goo.gl/WpgUiiECUuXBq8gB7" },
        ],
      },
      {
        name: "Museums & Science Spaces",
        desc: "Government Museum (Egmore), Birla Planetarium, and DakshinaChitra",
        locations: [
          { name: "Government Museum, Egmore", link: "https://maps.app.goo.gl/iLebGfLZLBAqgvn79" },
          { name: "Birla Planetarium, Kotturpuram", link: "https://maps.app.goo.gl/e2yYPUobrq6eDuKd6" },
          { name: "DakshinaChitra, Muthukadu", link: "https://maps.app.goo.gl/2oYsYCZFqzHKbz91A" },
        ],
      },
    ],
  },
  {
    category: "Weekend & Relaxed Experiences",
    places: [
      {
        name: "Book Cafés & Art Spaces",
        desc: "Amethyst, Ashvita, Writer’s Café",
        locations: [
          { name: "Amethyst, Royapettah", link: "https://maps.app.goo.gl/dgAK3H9deGG6H6oN9" },
          { name: "Ashvita, Mylapore", link: "https://maps.app.goo.gl/Qkqa23uUN98jnqB77" },
          { name: "Writer’s Café, Tharamani", link: "https://maps.app.goo.gl/7tB3C5cHCRHzQL5V7" },
        ],
      },
      {
        name: "Outdoor Yoga & Cycling Clubs",
        desc: "Regular meetups at Marina Beach or Island Grounds",
        locations: [
          { name: "Marina Beach", link: "https://maps.app.goo.gl/8radUJTQ7mkgUR3bA" },
          { name: "Island Grounds", link: "https://maps.app.goo.gl/dgpyRS2aXev2xzRp6" },
        ],
      },
      {
        name: "Art Exhibitions",
        desc: "Lalit Kala Akademi, InKo Centre, Apparao Galleries",
        locations: [
          { name: "Lalit Kala Akademi, Thousand Lights", link: "https://maps.app.goo.gl/oo2NDJHjWwSDs2qR7" },
          { name: "InKo Centre, Raja Annamalai Puram", link: "https://maps.app.goo.gl/YTCygGvAj39HkJBJA" },
          { name: "Apparao Galleries, Nungambakkam", link: "https://maps.app.goo.gl/JfLU7qeh5TT1XRzG7" },
        ],
      },
    ],
  },
  {
    category: "Cultural Performances & Classical Arts",
    places: [
      // {
      //   name: "Margazhi Music & Dance Festival (Dec–Jan)",
      //   desc: "A globally recognized celebration of Carnatic music and Bharatanatyam",
      //   locations: [{ name: "-", link: "#" }],
      // },
      {
        name: "Venues",
        desc: "Music Academy, Kalakshetra Foundation, Narada Gana Sabha, and dozens of sabhas across Mylapore",
        locations: [
          { name: "Music Academy, Royapettah", link: "https://maps.app.goo.gl/ajyP4RsXsHdqPU6GA" },
          { name: " Besant Nagar", link: "https://maps.app.goo.gl/66Yz3Po9P1gvJcRY9" },
          { name: "Narada Gana Sabha, Alwarpet", link: "https://maps.app.goo.gl/LxruuemMMQre7KDGA" },
        ],
      },
      // {
      //   name: "Year-Round Programs",
      //   desc: "Temple festivals, devotional concerts, and seasonal dance arangetrams",
      //   locations: [{ name: "-", link: "#" }],
      // },
    ],
  },
  // {
  //   category: "Why Chennai Stands Out",
  //   places: [
  //     {
  //       name: "It balances",
  //       desc: "It balances cultural depth with urban recreation",
  //       locations: [{ name: "-", link: "#" }],
  //     },
  //     {
  //       name: "Age groups and budgets",
  //       desc: "It has something for all age groups and budgets",
  //       locations: [{ name: "-", link: "#" }],
  //     },
  //     {
  //       name: "Temples to tech-driven experiences",
  //       desc: "It’s safe, accessible, and constantly evolving — from temples to tech-driven experiences",
  //       locations: [{ name: "-", link: "#" }],
  //     },
  //   ],
  // },
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
              <h3>Entertainent</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> -{" "}
                <a href="">Chennai Entertainent</a>
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
                Entertainent &nbsp; in Chennai &nbsp; Entertainent &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>
                {/* A City Where People, Ideas, and Opportunities Connect */}
              </h3>
              <p>
                {/* Chennai offers a thriving ecosystem for networking — driven by
                its expanding startup scene, robust professional communities,
                active expat circles, and a culture of collaboration across
                industries. Whether you're a founder looking for investors, a
                creative seeking inspiration, or a new resident hoping to make
                social or business connections, the city has platforms, spaces,
                and events to help you plug in. */}
              </p>
              <p>
                {/* From formal meetups and conferences to relaxed cafés, co-working hubs, and interest-based groups, Chennai is a city where your next opportunity might be a conversation away. */}
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            {/* Where & How to Network in Chennai */}
          </h1>

          {entainementData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn">
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             

                {section.places.map((place, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                    <p className="text-gray-700 mb-2">{place.desc}</p>

                    {place.locations?.length > 0 && (
                      <ExpandableList
                        items={place.locations.map((loc) => ({
                          label: loc.name,
                          link: loc.link,
                        }))}
                        maxVisible={2}
                      />
                    )}
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
