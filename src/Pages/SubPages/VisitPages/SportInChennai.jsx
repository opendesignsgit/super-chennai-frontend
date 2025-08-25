import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/Accomodation.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";
import VisitSlider from "./VisitSlider";

export default function SportChennai() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const SportData = [
    {
      title: " Cricket: The City's Passion",
      description:
        "Cricket is deeply ingrained in Chennai's identity. The M.A. Chidambaram Stadium, also known as Chepauk Stadium, is one of India's oldest cricket grounds and home to the Chennai Super Kings (CSK) IPL team. The city has produced notable cricketers like Ravichandran Ashwin and Dinesh Karthik.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/sports/cricket",
    },
    {
      title: " Football: Growing Enthusiasm",
      description:
        "Football's popularity is on the rise, with Chennaiyin FC representing the city in the Indian Super League (ISL). Matches at the Jawaharlal Nehru Stadium draw passionate crowds, and local clubs participate in various regional tournaments.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/sports/football",
    },
    {
      title: " Badminton & Squash: Indoor Favorites",
      description:
        "Chennai has produced top badminton players and hosts several tournaments annually. The Indian Squash Academy in the city has trained champions like Joshna Chinappa and Dipika Pallikal.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/sports/indoor",
    },
    {
      title: " Yoga & Wellness: Traditional Practices",
      description:
        "The city embraces yoga, with sessions held in temples, offices, and even underwater, reflecting a blend of tradition and innovation in wellness practices.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/wellness/yoga",
    },
    {
      title: " Aquatic Sports: Making Waves",
      description:
        "Facilities like the Velachery Aquatic Complex support swimming and diving events. The city's coastal location also makes it ideal for water sports enthusiasts.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/sports/aquatics",
    },
    {
      title: " Marathons & Runs: Community Engagement",
      description:
        "Events like the Chennai Marathon attract thousands of participants, promoting fitness and community spirit across the city.",
      image: "/images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/events/marathon",
    },
  ];

  const detailsectionsLIst = [
    {
      id: 1,
      title: "Major Sports Venues",
      points: [
        <>
          <strong>M.A. Chidambaram Stadium</strong> – Historic cricket ground
          hosting international and IPL matches.
        </>,
        <>
          <strong>Jawaharlal Nehru Stadium</strong> – Multi-purpose venue for
          football, athletics, and concerts
        </>,
        <>
          <strong>SDAT Tennis Stadium</strong> – Hosts national and
          international tennis tournaments.
        </>,
        <>
          <strong>Velachery Aquatic Complex</strong> – Facility for swimming and
          diving competitions
        </>,
        <>
          <strong>Padukappattu Pickleball Club (ECR)</strong> –One of the city’s
          first dedicated pickleball venues, hosting weekend games and training
          sessions.
        </>,
      ],
    },
  ];

  const images = [
    {
      src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accommodation",
      link: "/visit/hotel-accommodation-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/food-slide.jpg",
      title: "Restaurants",
      link: "/visit/restaurants-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to Visit",
      link: "/visit/places-to-visit-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to Do",
      link: "/visit/things-to-do-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "Itinerary",
      link: "/visit/chennai-itinerary",
    },
    {
      src: "/images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/visit/hidden-places-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/visit/shopping-areas-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/visit/travels-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/visit/wellness-centres-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/visit/events-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/visit/conferences-in-chennai",
    },
  ];

  // Custom Arrow Components
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
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img src="/images/AccodomationBannerr.jpg" alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Sports in Chennai</h3>
              <div className="breadCrum">
                <Link to="/.">Home</Link> - <Link href="">ACCOMMODATION</Link>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------Accodimation-Banner----------- */}

        {/*--------------- Hotels-Chennai----------------- */}

        <div className="AccodomationPageBecameVolunteerBg">
          <div
            className={`AccodomationTextBackground ${
              scrollDir === "right"
                ? "scroll-rightAccomodation"
                : "scroll-leftAccomodation"
            }`}
            ref={bgTextRef}
          >
            <p>Visit &nbsp; Chennai &nbsp; Visit &nbsp; Chennai</p>
          </div>
          <div className="workIntro">
            <h3> Where Legacy Meets Grit</h3>
            <p>
              Chennai isn’t just a city that watches sports—it builds them,
              breathes them, and lives through them. From legendary cricket
              stadiums and table tennis academies to rising kabaddi stars and
              emerging motorsport champions, Chennai’s sports culture is both
              deep-rooted and constantly evolving. Whether you’re an athlete, a
              fan, an investor, or a proud Chennaite—this city gives you a
              reason to cheer.
            </p>
          </div>

          <div className="container max-w-7xl mx-auto px-4">
            {SportData.map((section, index) => (
              <div className="AccodoSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.title} />
                    <div className="AccodContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      {/* <div className="AccomoddationPage">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div> */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="AccodContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      {/* <div className="AccomoddationPage1">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div> */}
                    </div>
                    <img src={section.image} alt={section.title} />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* |SECOND SECTIONS  */}
          <div className="container max-w-7xl mx-auto px-4 py-8">
            {detailsectionsLIst.map((section) => {
              return (
                <div
                  key={section.id}
                  className="detailapiSecRes w-full bg-white shadow-md rounded-lg overflow-hidden mb-8"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 px-4 pt-4">
                    {section.title}
                  </h2>

                  <div className="detailtextboxRes px-4 pb-4">
                    {section.points && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1 px-4 pb-4">
                        {section.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*--------------- Hotels-Chennai----------------- */}

        {/*--------------- Explore More Chennai----------------- */}

        <VisitSlider />

        {/*--------------- Explore More Chennai----------------- */}

        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>

        <Becameavolunteer />
      </div>
    </>
  );
}
