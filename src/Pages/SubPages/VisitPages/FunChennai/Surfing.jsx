import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";

// ################## DUMMY CONTENTS ###################################

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Covelong (Kovalam) Beach",
            para: [
              "The surfing hotspot of Tamil Nadu",
              "Home to India's first surf school – Bay of Life",
              "Great for beginners and pros alike",
              "Also hosts the Covelong Point Surf & Music Festival",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/covelong-beach.jpg",
            location: "https://maps.app.goo.gl/MoWCakYMvgrg8tZQ7",
          },

          {
            title: "Thiruvanmiyur & Palavakkam Beaches",
            para: [
              "Lesser crowded, urban surf-friendly zones",
              "Often used for early morning and after-work surfing sessions",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/thiruvanmayur.jpg",
            location: "https://maps.app.goo.gl/GvX8aRe9xsQRn58B8",
          },
        ],
      },
    ],
  },
];

const imageSectionsTips = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Best Time to Surf",
            para: [
              <>
                <strong>June to September – </strong> consistent monsoon swells
              </>,
              <>
                <strong>Early mornings – </strong>fewer winds, cleaner waves
              </>,
              <>Avoid post-cyclone conditions unless you're trained.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
          },

          {
            title: "Surf Schools in Chennai",
            para: [
              "Bay of Life Surf School (Covelong & ECR)",
              "Surf Turf (Kovalam)",
              "Mahabs Point Surf School",
              "Ocean Delight Surf School",
              "All offer:",
              "✔️ Certified instructors",
              "✔️ Beginner-friendly lessons",
              "✔️ Equipment rentals",
              "✔️ Weekend camps & safety drills",
            ],
            imgs: "/images/Visit-Images/SubPages/surfing/Surf-Schools-in-Chennai.svg",
          },
          {
            title: "Why You Should Try It",
            para: [
              "Stay fit and boost mental clarity",
              "Explore Chennai's coast beyond Marina Beach",
              "Join a growing local surf community",
              "Eco-friendly sport that connects you to nature",
            ],
            imgs: "/images/Visit-Images/SubPages/surfing/Why-You-Should-Try-It.svg",
          },
          {
            title: "Add-Ons",
            para: [
              "Yoga + Surf retreats",
              "Beach cafés and coastal cycling",
              "Eco-tourism tie-ins (like turtle walks)",
            ],
            imgs: "/images/Visit-Images/SubPages/surfing/Add-Ons.svg",
          },
        ],
      },
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
    link: "/things-to-do",
  },
  {
    src: "/images/Visit-Images/SubPages/itinerary-slide.jpg",
    title: "Itinerary",
    link: "/visit/chennai-itinerary",
  },
  {
    src: "/images/Visit-Images/SubPages/hidden-gems-slide.jpg",
    title: "Hidden Gems",
    link: "/hidden-gems",
  },
  {
    src: "/images/Visit-Images/SubPages/shopping-slide.jpg",
    title: "Shopping",
    link: "/visit/shopping-areas-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/travel-tips-slide.jpg",
    title: "Travel Tips",
    link: "/travel-tips",
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

const benefitSections = [
  {
    sectionTitle: "Chennai’s Most Liveable Rental Spaces",
    sectionDesc: "",
    image: "/images/Live-Images/SubPages/Rental-Properties-in-Chennai.jpg",
    benefits: [
      {
        id: 1,
        title: "Budget-Friendly Rental Areas",
        para: "Chennai offers several well-connected neighbourhoods where rent remains affordable without compromising on access to schools, transit, and daily conveniences. These localities are ideal for professionals, students, and families seeking value and comfort.",
        para: "Chennai offers several well-connected neighbourhoods where rent remains affordable without compromising on access to schools, transit, and daily conveniences. These localities are ideal for professionals, students, and families seeking value and comfort.",
        imgs: "/images/Live-Images/SubPages/Rental-Properties-in-Chennai.jpg",
      },
      {
        id: 2,
        title: "Mid-Tier Residential Zones",
        para: "Chennai’s mid-range rental areas strike the perfect balance between affordability and lifestyle—offering solid connectivity, quality housing, and access to daily conveniences. Neighbourhoods like T. Nagar, Vadapalani, Porur, and Velachery are among the city’s most preferred choices for comfortable urban living.",
        imgs: "/images/Live-Images/SubPages/Icons/Mid-Range-Areas.svg",
      },
      {
        id: 3,
        title: "Prestigious Neighbourhoods",
        para: "Chennai’s most exclusive residential pockets offer more than just prime addresses—they embody sophistication, world-class infrastructure, and refined living. Areas like Boat Club, Poes Garden, ECR, Nungambakkam, and RA Puram represent the city’s finest lifestyle experiences, seamlessly blending heritage, privacy, and modern luxury.",
        imgs: "/images/Live-Images/SubPages/Icons/Prestigious-neighborhood.svg",
      },
    ],
    tenantInfoSections: [
      {
        iconImage: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
        title: "Best Time to Surf",
        points: [
          <>
            <strong>June to September –</strong> consistent monsoon swells
          </>,
          <>
            {" "}
            <strong>Early mornings – </strong> fewer winds, cleaner waves
          </>,
          <>Avoid post-cyclone conditions unless you're trained.</>,
        ],
      },
      {
        iconImage:
          "/images/Visit-Images/SubPages/surfing/Surf-Schools-in-Chennai.svg",
        title: "Surf Schools in Chennai",
        points: [
          <>Bay of Life Surf School (Covelong & ECR)</>,
          <>Surf Turf (Kovalam)</>,
          <>Mahabs Point Surf School</>,
          <>Ocean Delight Surf School</>,
          <>
            <strong>All offer: </strong> Certified instructors,
            Beginner-friendly lessons, Equipment rentals, Weekend camps & safety
            drills
          </>,
        ],
      },
      {
        iconImage:
          "/images/Visit-Images/SubPages/surfing/Why-You-Should-Try-It.svg",
        title: "Why You Should Try It",
        points: [
          <>Stay fit and boost mental clarity</>,
          <>Explore Chennai's coast beyond Marina Beach</>,
          <>Join a growing local surf community</>,
          <>Eco-friendly sport that connects you to nature</>,
        ],
      },
      {
        iconImage: "/images/Visit-Images/SubPages/surfing/Add-Ons.svg",
        title: "Add-Ons",
        points: [
          <>Yoga + Surf retreats</>,
          <>Beach cafés and coastal cycling</>,
          <>Eco-tourism tie-ins (like turtle walks)</>,
        ],
      },
    ],
  },
];

export default function Surfing() {
  /*#################### STATE VARIABLES ##################### */
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  /*#################### HELPERS  ##################### */

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

  {
    /*#################### USEEFFECT HOOCKS  ##################### */
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  {
    /*########################### RENDER   ######################### */
  }

  return (
    <div className="FunchennaiDetailPage">
      {/*#################### Banner ########################## */}
      <div className="accaodomationBannerSection">
        <img
          src="/images/Visit-Images/SubPages/thingsDoChild/surfing-banner.jpg"
          alt=""
        />{" "}
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Surfing in Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Home</Link> - <span>Surfing in Chennai</span>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*#################### Intro ###########################*/}
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
            <p>Ride the Bay. Feel the Rush.</p>
          </div>
          <div className="workIntro">
            <h3>Ride the Bay. Feel the Rush.</h3>
            <p>
              Chennai isn’t just about culture and coffee—it’s becoming India’s
              east coast capital of surfing. With consistent swells, warm
              waters, and an emerging beach scene, the city is attracting
              adventure seekers, water lovers, and global surfers alike. From
              Covelong to Thiruvanmiyur, Chennai offers the perfect blend of
              urban convenience and ocean thrill.
            </p>
          </div>
        </div>
      </div>

      {/*#################### MAIN CONTENT  ####################*/}

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec funchennai">
        {imageSections.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
                 ${
                   index % 3 === 0
                     ? "pattern-a"
                     : index % 3 === 1
                     ? "pattern-b"
                     : "pattern-c"
                 }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 mt-[10px] rounded bottomListIcon w-full">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                Where to Catch Waves
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4 !mb-0">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        {item.location && (
                          <div className="mt-2 exploreMorebuttonVisitChennai">
                            <a
                              className="text-blue-600 hover:underline text-sm font-medium"
                              href={item.location}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-discover="true"
                            >
                              View on Map
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec ">
        {imageSectionsTips.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
                 ${
                   index % 3 === 0
                     ? "pattern-a"
                     : index % 3 === 1
                     ? "pattern-b"
                     : "pattern-c"
                 }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center"></h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div> */}

      <div id="InvestMainPage">
        {benefitSections.map((section, index) => (
          <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            {/* Tenant Info Sections for this benefit section */}
            {section.tenantInfoSections.map((tenant, i) => (
              <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList ">
                <div key={i} className="mb-0">
                  <h4 className="text-lg font-semibold mb-2">{tenant.title}</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {tenant.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="tenanticonImageDiv !bg-white">
                  <img
                    className="tenanticonImage"
                    src={tenant.iconImage}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>

      {/* ########## EXPLORE MORE CHENNAI SLIDER ############### */}

      <VisitSlider />

      {/*################## SOCIAL MARQUE SECTION################ */}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </div>
  );
}
