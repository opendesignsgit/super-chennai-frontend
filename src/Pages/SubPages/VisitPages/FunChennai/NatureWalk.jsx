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
            title: "Birdwatching Haven",
            para: [
              "The marshland is a paradise for bird enthusiasts, hosting over 115 species of birds, including migratory species like the greater flamingo, glossy ibis, and various raptors such as black kites and shikras. Seasonal shifts bring a dynamic avian population, making it a year-round destination for birdwatching.",
            ],
            imgs: "/images/Visit-Images/SubPages/NatureWalk/pallikaranai-marshland.jpg",
            location: "https://maps.app.goo.gl/ieNDRQpyEHhK1aAE7",
          },
        ],
      },
      {
        points: [
          {
            title: "Guided Nature Walks",
            para: [
              "For those interested in exploring the marsh's biodiversity, guided walking tours are available. These tours offer insights into the unique ecosystem, allowing visitors to observe aquatic life, rare marshland flora, and the diverse bird population up close.",
            ],
            imgs: "/images/Visit-Images/SubPages/NatureWalk/guided-nature-walks.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: "Eco Park Facilities",
            para: [
              "An eco-park was inaugurated in December 2021 along the Velachery–Tambaram stretch to promote awareness about the wetland. The park features a 2-kilometer walking track, green spaces, and informative displays on migratory birds and local flora and fauna.",
            ],
            imgs: "/images/Visit-Images/SubPages/NatureWalk/chetpet-eco-park.jpg",
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
            title: "Visitor Information",
            para: [
              <>
                <strong>Location: </strong>Pallikaranai, Chennai, Tamil Nadu
              </>,
              <>
                <strong> Best Time to Visit:</strong> November to February,
                during the migratory bird season
              </>,
              <>
                <strong>Travel Tip:</strong> Use Metro + auto or bike rentals
                for quicker beach access
              </>,
              <>
                <strong>Activities: </strong>
                Birdwatching, guided nature walks, educational tours
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/visitor-information.svg",
          },
        ],
      },
    ],
  },
];

const imageSectionsTwo = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Boating Adventures",
            para: [
              "Experience peaceful boating on the well-maintained lake. Visitors can choose from pedal boats and rowboats, making it an ideal activity for families and couples seeking a leisurely ride.",
            ],
            imgs: "/images/Visit-Images/SubPages/boating/boating-adventures.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: " Fishing Fun",
            para: [
              "For angling enthusiasts, the park offers catch-and-release fishing opportunities. It's a relaxing way to spend time amidst nature.",
            ],
            imgs: "/images/Visit-Images/SubPages/boating/fishing-fun.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: " Walking & Jogging Trails",
            para: [
              "The park features well-paved paths surrounded by greenery, perfect for morning walks or evening strolls.",
            ],
            imgs: "/images/Visit-Images/SubPages/boating/walking-jogging-trails.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: " Children’s Play Area",
            para: [
              "A dedicated zone equipped with swings, slides, and climbing structures ensures that kids have a fun-filled time.",
            ],
            imgs: "/images/Visit-Images/SubPages/boating/childrens-play-area.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: " Aquarium & VR Experiences",
            para: [
              "Explore the park's aquarium showcasing diverse aquatic life. Additionally, visitors can enjoy 3D and virtual reality shows, adding an educational twist to the visit.",
            ],
            imgs: "/images/Visit-Images/SubPages/boating/aquarium-vr-experiences.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: " Food Court",
            para: [
              "After engaging in various activities, visitors can relax at the on-site food court offering a variety of cuisines.",
            ],
            imgs: "/images/Visit-Images/SubPages/boating/food-court.jpg",
          },
        ],
      },
      {
        points: [
          {
            title: "Visitor Information",
            para: [
              <>
                <strong>Location: </strong>814, Poonamallee High Road, Opposite
                KMC, Kilpauk, Chennai
              </>,
              <>
                <strong>Timings:</strong> 10:00 AM – 7:30 PM (Closed on
                Tuesdays)
              </>,
              <>
                <strong>Entry Fee:</strong> ₹25 for adults, ₹10 for children
              </>,
              <>
                <strong>Boating Charges: </strong>
                ₹60 per person
              </>,
              <>
                <strong> Fishing Fee: </strong>
                ₹200 per person
              </>,
              <>
                <strong> Aquarium Entry: </strong>
                ₹50
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/visitor-information.svg",
          },
        ],
      },
    ],
  },
];

const visitorInfo = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Timings & Entry",
            para: [
              <>
                <strong>General Public:</strong> 10:00 AM to 7:30 PM, closed on
                Tuesdays.
              </>,
              <>
                <strong>Morning Walkers:</strong> 6:00 AM to 8:00 AM (monthly
                pass holders only).
              </>,
              <>
                <strong>Entry Fee:</strong>
              </>,
              <>
                <strong>Adults:</strong> ₹15
              </>,
              <>
                <strong>Children (below 10 years):</strong> ₹10
              </>,
              <>
                <strong>Monthly Pass:</strong> ₹150
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/timings-entry.svg",
          },
          {
            title: "Location & Accessibility",
            para: [
              <>
                <strong>Address:</strong> Cathedral Road, Teynampet, Chennai,
                Tamil Nadu 600086.
              </>,
              <>
                <strong>Nearby Landmarks:</strong> Opposite the American
                Consulate and near Anna Flyover
              </>,
              <>
                <strong>Public Transport:</strong>
              </>,
              <>
                <strong>Metro:</strong> AG-DMS Metro Station (1 km away).
              </>,
              <>
                <strong>Bus:</strong> Cathedral Road Semmozhi Poonga Bus Stop
                (100m away).
              </>,
              <>
                <strong>Parking:</strong>
              </>,
              <>
                <strong>Two-Wheelers:</strong> ₹15
              </>,
              <>
                <strong>Four-Wheelers:</strong> ₹40
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/location-accessibility.svg",
          },
        ],
      },
    ],
  },
];

const visitorInfo2 = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Visitor Information",
            para: [
              <>
                <strong>Timings:</strong> Open daily from 6:00 AM to 6:00 PM.
              </>,
              <>
                <strong>Entry Fee:</strong> ₹20 for adults; children under 12
                enter free.
              </>,
              <>
                <strong>Location:</strong> Madhavaram Milk Colony Park Trail,
                Venkateswara Colony, Madhavaram Milk Colony, Chennai, Tamil Nadu
                600051.
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
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

const SEMOZHI = [
  {
    category:
      "Semmozhi Poonga is a 20-acre botanical garden located in the heart of Chennai, Tamil Nadu. Established in 2010 by the Tamil Nadu Horticultural Development Agency (TANHODA), it serves as a green oasis amidst the urban landscape, offering a diverse collection of flora and themed gardens.",
    places: [
      {
        name: "Diverse Plant Species",
        desc: "Home to over 500 species, including rare and exotic plants from countries like China and Thailand.",
      },
      {
        name: "Themed Gardens",
        desc: "Features 22 thematic areas such as herbal, aromatic, bonsai, and butterfly gardens.",
      },
      {
        name: "Vertical Garden",
        desc: "A 22-foot-long and 14-foot-high arch near the entrance adorned with 7,000 plants from 35 different species.",
      },
      {
        name: "Artificial Duck Pond",
        desc: "A serene water feature that adds to the park's charm.",
      },
      {
        name: "Amphitheater",
        desc: "An open-air venue for cultural and educational events.",
      },
    ],
  },
];

const botanicalGardenFeatures = [
  {
    category:
      "Madhavaram Botanical Garden is a lush 20.21-acre green space located in Madhavaram Milk Colony, Chennai. Established by the Tamil Nadu Horticultural Development Agency (TANHODA) in 2018, it stands as the city's largest botanical garden, offering a serene retreat for nature enthusiasts and families alike",
    places: [
      {
        name: "Diverse Plant Collections",
        desc: "Home to nearly 400 plant species, including medicinal herbs, ornamental plants, cacti, and bonsai.",
      },
      {
        name: "Themed Gardens",
        desc: "Explore sections dedicated to herbal, flower, bonsai, and trellis gardens.",
      },
      {
        name: "Recreational Amenities",
        desc: "Features include mazes, a children's play area, cascades, fountains, and a lake-view bridge designed to attract birds.",
      },
      {
        name: "Glasshouse",
        desc: "A modern glasshouse showcases rare plants and horticultural techniques.",
      },
      {
        name: "Open-Air Theatre",
        desc: "An amphitheater with seating for approximately 150 people hosts cultural and educational events.",
      },
    ],
  },
];

export default function NatureWalk() {
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
          src="/images/Visit-Images/SubPages/thingsDoChild/nature-walk.jpg"
          alt=""
        />{" "}
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Nature Walk</h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Home</Link> - <span>Nature Walk</span>
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
            <p>Where Nature Meets Stillness</p>
          </div>
          <div className="workIntro">
            <h3>Where the City Meets the Nature Walk</h3>
            <p>
              Nature walks in Chennai offer a peaceful escape from the city's
              busy lifestyle. Whether it’s a morning stroll or an evening walk,
              the city’s green spaces provide fresh air, calm surroundings, and
              a relaxing experience. These quiet trails are perfect for all age
              groups, helping you reconnect with nature without going far. Ideal
              for light exercise, family time, or solo reflection, nature walks
              bring a refreshing balance to urban life.
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
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                Experiencing Pallikaranai Marshland
              </h2>
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

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec ">
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
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
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
      </div>

      {/*#################### SEMOZHI POONGA ####################*/}
      <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
        <h1 className="text-3xl font-bold mb-10 text-center">
          Semmozhi Poonga
        </h1>
        {SEMOZHI.map((section, sectionIdx) => (
          <div key={sectionIdx} className="nightlifesecIn">
            <div className="workIntro">
              <p className="text-2xl mb-6">{section.category}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.places.map((place, idx) => (
                <div
                  key={idx}
                  className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                >
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-700 mb-3">{place.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec ">
        {visitorInfo.map((section, index) => (
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
            <div className="space-y-6 bg-white rounded bottomListIcon w-full">
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
      </div>

      {/*#################### BOTANICAL  POONGA ####################*/}
      <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
        <h1 className="text-3xl font-bold mb-10 text-center">
          Madhavaram Botanical Garden{" "}
        </h1>
        {botanicalGardenFeatures.map((section, sectionIdx) => (
          <div key={sectionIdx} className="nightlifesecIn">
            <div className="workIntro">
              <p className="text-2xl  mb-6">{section.category}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.places.map((place, idx) => (
                <div
                  key={idx}
                  className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                >
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-700 mb-3">{place.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        {visitorInfo2.map((section, index) => (
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
            {/* INFOS VISITER  */}
            <div className="space-y-6 bg-white rounded bottomListIcon w-full">
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
