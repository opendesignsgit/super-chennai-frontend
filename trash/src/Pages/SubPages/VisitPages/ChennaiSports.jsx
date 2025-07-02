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

export default function ChennaiSports() {
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

  const AccomodSections = [
    {
      title: "Football",
      description:
        "Football's popularity is on the rise, with Chennaiyin FC representing the city in the Indian Super League (ISL). Matches at the Jawaharlal Nehru Stadium draw passionate crowds, and local clubs participate in various regional tournaments.",
      image: "./images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/luxuryhotels",
    },
    {
      title: "Badminton & Squash",
      description:
        "Chennai has produced top badminton players and hosts several tournaments annually. The Indian Squash Academy in the city has trained champions like Joshna Chinappa and Dipika Pallikal.",
      image: "./images/Visit-Images/AccommodationImage2.jpg",
      linkText: "Explore More",
      linkUrl: "/midrangehotels",
    },
    {
      title: "Yoga & Wellness",
      description:
        "The city embraces yoga, with sessions held in temples, offices, and even underwater, reflecting a blend of tradition and innovation in wellness practices",
      image: "./images/Visit-Images/AccommodationImage3.jpg",
      linkText: "Explore More",
      linkUrl: "/budgetStays",
    },
    {
      title: "Aquatic Sports",
      description:
        "Facilities like the Velachery Aquatic Complex support swimming and diving events. The city's coastal location also makes it ideal for water sports enthusiasts",
      image: "./images/Visit-Images/AccommodationImage4.jpg",
      linkText: "Explore More",
      linkUrl: "/servicedapartments",
    },
    {
      title: "Marathons & Runs",
      description:
        "Events like the Chennai Marathon attract thousands of participants, promoting fitness and community spirit across the city.",
      image: "./images/Visit-Images/AccommodationImage5.jpg",
      linkText: "Explore More",
      linkUrl: "/resortsandvillas",
    },
  ];

  const nightlifeData = [
    {
      category: "Major Sports Venues",
      places: [
        {
          name: "M.A. Chidambaram Stadium",
          desc: "Historic cricket ground hosting international and IPL matches.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Jawaharlal Nehru Stadium",
          desc: "Multi-purpose venue for football, athletics, and concerts.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "SDAT Tennis Stadium",
          desc: "Hosts national and international tennis tournaments.",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Velachery Aquatic Complex",
          desc: "Facility for swimming and diving competitions",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Padukappattu Pickleball Club (ECR)",
          desc: "One of the city’s first dedicated pickleball venues, hosting weekend games and training sessions.",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Cricket",
      places: [
        {
          name: "MA Chidambaram Stadium (Chepauk)",
          desc: "Home of the Chennai Super Kings (IPL) and the Tamil Nadu Ranji Team",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Academies",
          desc: "MAC Spin Foundation, VB Nest Academy",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Local Scene",
          desc: "Cricket is deeply woven into Chennai’s school and college circuits",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Tennis",
      places: [
        {
          name: "Chennai Open Legacy",
          desc: "Former ATP event hosted top international players",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Venues",
          desc: "SDAT Tennis Stadium (Nungambakkam), Krishnan Tennis Centre",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Chennai’s Pride",
          desc: " Home to legends like Ramesh Krishnan and Somdev Devvarman",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Football",
      places: [
        {
          name: "Chennaiyin FC (ISL)",
          desc: "Two-time Indian Super League champions",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Stadium",
          desc: "Jawaharlal Nehru Stadium (Marina Arena)",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Clubs & Training",
          desc: "Roots Football School, CFC Soccer Schools",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Motorsport",
      places: [
        {
          name: "Madras International Circuit (Sriperumbudur)",
          desc: "India’s first permanent racing track",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Events",
          desc: "National Racing Championships, Formula 4",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Notable Talent",
          desc: "Chennai is the home of Narain Karthikeyan and several rally drivers",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Hockey",
      places: [
        {
          name: "Tamil Nadu Hockey Team",
          desc: "Strong presence in national tournaments",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Training Centers",
          desc: "YMCA grounds, SDAT facilities",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Aquatics",
      places: [
        {
          name: "Venues",
          desc: "Velachery Aquatic Complex, Marina Swimming Pool",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Disciplines",
          desc: "Swimming, diving, water polo competitions and coaching",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Martial Arts & Indigenous Sports",
      places: [
        {
          name: "Silambam & Kalaripayattu",
          desc: "Practiced in cultural centers and martial arts academies",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Karate, Taekwondo, Judo",
          desc: "Popular across schools and training hubs",
          locations: [{ name: "-", link: "#" }],
        },
      ],
    },
    {
      category: "Multi-Sport Facilities",
      places: [
        {
          name: "SDAT Complex (Across City)",
          desc: "State-run centers with coaching in athletics, archery, tennis, basketball, and more",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Jawaharlal Nehru Stadium",
          desc: "Track & field, football, and multi-sport events",
          locations: [{ name: "-", link: "#" }],
        },
        {
          name: "Decathlon Arenas & Private Sports Clubs",
          desc: "Growing trend in badminton courts, futsal turfs, and bootcamps",
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
              <h3>Where Legacy Meets Grit</h3>
              <p>
               Chennai isn’t just a city that watches sports—it builds them, breathes them, and lives through them.
              </p>
              <p>
               From legendary cricket stadiums and table tennis academies to rising kabaddi stars and emerging motorsport champions, Chennai’s sports culture is both deep-rooted and constantly evolving.
              </p>
            </div>
          </div>
          <div className="container max-w-7xl mx-auto px-4">
            {AccomodSections.map((section, index) => (
              <div className="AccodoSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.title} />
                    <div className="AccodContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="AccodContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage1">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div>
                    </div>
                    <img src={section.image} alt={section.title} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Where & How to Network in Chennai
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
