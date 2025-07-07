import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import "../../../assets/Css/ViewMore.css";

import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";

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
        desc: "Historic cricket ground hosting international and IPL matches. ",
        locations: [
          {
            name: "Chepauk",
            link: "https://www.mappls.com/5f8ta1",
          },
        ],
      },
      {
        name: "Jawaharlal Nehru Stadium",
        desc: "Multi-purpose venue for football, athletics, and concerts.",
        locations: [
          {
            name: "Park Town",
            link: "https://www.mappls.com/d11c53",
          },
        ],
      },
      {
        name: "SDAT Tennis Stadium",
        desc: "Hosts national and international tennis tournaments.",
        locations: [
          {
            name: "Chepauk ",
            link: "https://www.mappls.com/5f8ta1",
          },
        ],
      },
      {
        name: "Velachery Aquatic Complex",
        desc: "Facility for swimming and diving competitions",
        locations: [
          {
            name: "Guindy",
            link: "https://vymaps.com/IN/Velachery-Aquatic-Complex-393876/",
          },
        ],
      },
      {
        name: "Padukappattu Pickleball Club (ECR)",
        desc: "One of the city’s first dedicated pickleball venues, hosting weekend games and training sessions.",
        locations: [
          {
            name: "ECR",
            link: "https://www.mappls.com/5f8ta1",
          },
        ],
      },
    ],
  },

  {
    category: "Cricket",
    places: [
      {
        name: "MA Chidambaram Stadium (Chepauk)",
        desc: "Home of the Chennai Super Kings (IPL) and the Tamil Nadu Ranji Team",
        locations: [
          {
            name: "Chepauk",
            link: "https://www.google.com/maps/place/M.A.+Chidambaram+Stadium,+Chepauk,+Chennai,+Tamil+Nadu+600005",
          },
        ],
      },
      {
        name: "MAC Spin Foundation",
        desc: "Training young talent in spin bowling and cricket fundamentals.",
        locations: [
          {
            name: "George Town",
            link: "https://www.google.com/maps/place/South+India+House,+Armenian+Street,+Chennai,+Tamil+Nadu+600001",
          },
        ],
      },
      {
        name: "VB Nest Academy",
        desc: "Modern cricket coaching facility known for grooming young cricketers.",
        locations: [
          {
            name: "Ashok Nagar",
            link: "https://www.google.com/maps/place/No.+6,+2nd+Floor,+2nd+Avenue,+Ashok+Nagar,+Chennai,+Tamil+Nadu+600083",
          },
        ],
      },
      {
        name: "Local Scene",
        desc: "Cricket is deeply woven into Chennai’s school and college circuits",
        locations: [
          {
            name: "Across Chennai",
            link: "#",
          },
        ],
      },
    ],
  },

  {
    category: "Tennis",
    places: [
      {
        name: "Chennai Open Legacy",
        desc: "Former ATP event hosted top international players",
        locations: [
          {
            name: "Nungambakkam",
            link: "https://maps.app.goo.gl/PW5NnmcMGTkehVHc8",
          },
        ],
      },
      {
        name: "Venues",
        desc: "SDAT Tennis Stadium (Nungambakkam), Krishnan Tennis Centre",
        locations: [
          {
            name: "Nungambakkam",
            link: "https://maps.app.goo.gl/PW5NnmcMGTkehVHc8",
          },
          {
            name: "Besant Nagar",
            link: "https://maps.app.goo.gl/Rrv4iwLx9DSFL2Q57",
          },
        ],
      },
      {
        name: "Chennai’s Pride",
        desc: "Home to legends like Ramesh Krishnan and Somdev Devvarman",
        locations: [
          {
            name: "Ambedkar Nagar, Arumbakkam",
            link: "https://maps.app.goo.gl/LpNVE6fQVgbW7QsCA",
          },
        ],
      },
    ],
  },
  {
    category: "Football",
    places: [
      {
        name: "Chennaiyin FC (ISL)",
        desc: "Two-time Indian Super League champions",
        locations: [
          {
            name: "Anna Nagar East",
            link: "https://maps.app.goo.gl/GVhUhXcZMUsnpsu19",
          },
        ],
      },
      {
        name: "Stadium",
        desc: "Jawaharlal Nehru Stadium (Marina Arena)",
        locations: [
          {
            name: "Park Town",
            link: "https://maps.app.goo.gl/qP7msMKozG3hcnZ6A",
          },
        ],
      },
      {
        name: "Clubs & Training",
        desc: "Roots Football School, CFC Soccer Schools",
        locations: [
          {
            name: "Tambaram",
            link: "https://maps.app.goo.gl/bUj1z4znY15qfave6",
          },
          {
            name: "Jamalia",
            link: "https://maps.app.goo.gl/FQMMYU33nNqwC17g9",
          },
        ],
      },
    ],
  },
  {
    category: "Motorsport",
    places: [
      {
        name: "Madras International Circuit (Sriperumbudur)",
        desc: "India’s first permanent racing track",
        locations: [
          {
            name: "Sriperumbudur",
            link: "https://maps.app.goo.gl/8oMcGp8JCT9A7Hj1A",
          },
        ],
      },
      {
        name: "Events",
        desc: "National Racing Championships, Formula 4",
        locations: [
          {
            name: "Ambattur",
            link: "https://maps.app.goo.gl/x347pna1KBf61HNk8",
          },
        ],
      },
      {
        name: "Notable Talent",
        desc: "Chennai is the home of Narain Karthikeyan and several rally drivers",
        locations: [
          {
            name: "Anna Salai",
            link: "https://maps.app.goo.gl/QTgH1RVdgoEPDDWb9",
          },
        ],
      },
    ],
  },
  {
    category: "Hockey",
    places: [
      {
        name: "Tamil Nadu Hockey Team",
        desc: "Strong presence in national tournaments",
        locations: [
          {
            name: "Egmore",
            link: "https://maps.app.goo.gl/hMiWjuwviWYAeLVG9",
          },
        ],
      },
      {
        name: "Training Centers",
        desc: "YMCA grounds, SDAT facilities",
        locations: [
          {
            name: "Nandanam",
            link: "https://maps.app.goo.gl/CWUDSkuQSiYbrUxR8",
          },
          {
            name: "Velachery",
            link: "https://maps.app.goo.gl/kddjcsgF6R6LSgKeA",
          },
        ],
      },
    ],
  },
  {
    category: "Aquatics",
    places: [
      {
        name: "Venues",
        desc: "Velachery Aquatic Complex, Marina Swimming Pool",
        locations: [
          {
            name: "Velachery",
            link: "https://maps.app.goo.gl/JwSLxF5FBrqM5XVm6",
          },
          {
            name: "Triplicane",
            link: "https://maps.app.goo.gl/4rDpPijLYDMEsWZY6",
          },
        ],
      },
      {
        name: "Disciplines",
        desc: "Swimming, diving, water polo competitions and coaching",
        locations: [
          {
            name: "Pammal",
            link: "https://maps.app.goo.gl/bGg5961szjRjFffa6",
          },
        ],
      },
    ],
  },
  // {
  //   category: "Martial Arts & Indigenous Sports",
  //   places: [
  //     {
  //       name: "Silambam & Kalaripayattu",
  //       desc: "Practiced in cultural centers and martial arts academies",
  //       locations: [
  //         {
  //           name: "Mogappair East",
  //           link: "https://maps.app.goo.gl/iEPQrtcSHLshYhgh7"
  //         }
  //       ]
  //     },
  //     {
  //       name: "Karate, Taekwondo, Judo",
  //       desc: "Popular across schools and training hubs",
  //       locations: [
  //         {
  //           name: "General locations",
  //           link: "#"
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    category: "Multi-Sport Facilities",
    places: [
      {
        name: "SDAT Complex (Across City)",
        desc: "State-run centers with coaching in athletics, archery, tennis, basketball, and more",
        locations: [
          {
            name: "Across Chennai",
            link: "https://www.sdat.tn.gov.in",
          },
        ],
      },
      {
        name: "Jawaharlal Nehru Stadium",
        desc: "Track & field, football, and multi-sport events",
        locations: [
          {
            name: "Park Town",
            link: "https://maps.app.goo.gl/qP7msMKozG3hcnZ6A",
          },
        ],
      },
      {
        name: "Decathlon Arenas & Private Sports Clubs",
        desc: "Growing trend in badminton courts, futsal turfs, and bootcamps",
        locations: [
          {
            name: "T. Nagar",
            link: "https://maps.app.goo.gl/ptvgfMCWnmDpcDwz6",
          },
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
              <h3>Sports Chennai</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> - <a href="">Sports Chennai</a>
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
              <p>Sports &nbsp; in Chennai &nbsp; Sports &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Where Legacy Meets Grit</h3>
              <p>
                Chennai isn’t just a city that watches sports—it builds them,
                breathes them, and lives through them.
              </p>
              <p>
                From legendary cricket stadiums and table tennis academies to
                rising kabaddi stars and emerging motorsport champions,
                Chennai’s sports culture is both deep-rooted and constantly
                evolving.
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
          {/* <h1 className="text-3xl font-bold mb-10 text-center">
            Where & How to Network in Chennai
          </h1> */}

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
