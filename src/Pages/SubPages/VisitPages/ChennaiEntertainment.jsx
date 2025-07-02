
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

  const nightlifeData = [
    {
      category: "Cinema & Film Experiences",
      places: [
        {
          name: "Mainstream Theatres",
          desc: "Sathyam Cinemas, Luxe by SPI, AGS, PVR, and INOX",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Regional & Global Films",
          desc: "Tamil, Telugu, Hindi, Malayalam, English, and world cinema releases",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Alternative Spaces",
          desc: "Russian Cultural Centre, Goethe-Institut, Alliance Française for curated film screenings",
          locations: [{ name: "-", link: "#" }],
        },

      ],
    },
    {
      category: "Live Music, Comedy & Theatre",
      places: [
        {
          name: "Music Gigs & DJ Nights",
          desc: "Bay 146, Off the Record, Radio Room",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Stand-Up Comedy",
          desc: "Medai – The Stage, Backyard, and tour stops by major comics",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "English & Tamil Theatre",
          desc: "Spaces like Alliance Française, Museum Theatre, and open-mic events across the city",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Family-Friendly Leisure & Recreation",
      places: [
        {
          name: "Theme Parks",
          desc: " VGP Universal Kingdom, MGM Dizzee World, Kishkinta",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Beaches",
          desc: "Marina, Elliot’s (Besant Nagar), and Covelong for long walks, snacks, and kite flying",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Malls with Fun Zones",
          desc: "VR Chennai, Express Avenue, and Phoenix Marketcity host cinemas, arcades, and kids’ zones",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Museums & Science Spaces",
          desc: "Government Museum (Egmore), Birla Planetarium, and DakshinaChitra",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Weekend & Relaxed Experiences",
      places: [
        {
          name: "Book Cafés & Art Spaces",
          desc: "Amethyst, Ashvita, Writer’s Café",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Outdoor Yoga & Cycling Clubs",
          desc: "Regular meetups at Marina Beach or Island Grounds",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Art Exhibitions",
          desc: "Lalit Kala Akademi, InKo Centre, Apparao Galleries",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Cultural Performances & Classical Arts",
      places: [
        {
          name: "Margazhi Music & Dance Festival (Dec–Jan)",
          desc: "A globally recognized celebration of Carnatic music and Bharatanatyam",
          locations: [
            { name: "-", link: "#" },
          ],
        },
        {
          name: "Venues",
          desc: " Music Academy, Kalakshetra Foundation, Narada Gana Sabha, and dozens of sabhas across Mylapore",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Year-Round Programs",
          desc: "Temple festivals, devotional concerts, and seasonal dance arangetrams",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
       {
      category: "Why Chennai Stands Out",
      places: [
        {
          name: "It balances",
          desc: "It balances cultural depth with urban recreation",
          locations: [
            { name: "-", link: "#" },
          ],
        },
        {
          name: "Age groups and budgets",
          desc: "It has something for all age groups and budgets",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Temples to tech-driven experiences",
          desc: "It’s safe, accessible, and constantly evolving — from temples to tech-driven experiences",
          locations: [{ name: "-", link: "#" }],
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
              <h3>Entertainent</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> - <a href="">Chennai Entertainent</a>
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

          {nightlifeData.map((section, sectionIdx) => (
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
