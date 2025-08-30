import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
import { Helmet } from "react-helmet-async";
// ################## DUMMY CONTENTS ###################################

const imageSections1 = [
  {
    sectionTitle: "",
    sectionDesc: "",
    image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: " Pro Tips for Movie Buffs",
            para: [
              <>
                Book through BookMyShow or SPI’s own app for loyalty rewards and
                fast entry
              </>,
              <>Catch morning shows for lower prices and quieter crowds</>,
              <>
                Subtitled screenings available for most Tamil films in major
                multiplexes
              </>,
              <>
                Food courts in attached malls make for great pre/post-movie
                plans
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
          },
        ],
      },
    ],
  },
];

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Zig Zag Zone – VR Mall, Anna Nagar",
            para: [
              "Located inside VR Chennai, this indoor play zone features trampolines, ninja courses, and obstacle challenges. A favorite among kids and tweens visiting the mall.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/zig-zag-zone.jpg",
            website: "https://maps.app.goo.gl/7Tt84TZdr18Z4WL48",
          },
        ],
      },

      {
        points: [
          {
            title: "Havfun Trampoline Park - OMR ",
            para: [
              "A vibrant and colorful trampoline park with free jump areas, climbing walls, and soft play zones — ideal for kids aged 3 and up.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/havfun-trampoline-park-–-omr-(sholinganallur).jpg",
            website: "https://maps.app.goo.gl/oboRC9TonVyqZN2x9",
          },
        ],
      },
      {
        points: [
          {
            title: "Jus Jump Trampoline Park",
            para: [
              "Offers large trampoline courts, slam dunk hoops, wall running areas, and safe foam pits. Suitable for all ages, and a hit for weekend outings.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/jus-jump-trampoline-park-–-perambur.jpg",
            website: "https://maps.app.goo.gl/geDsyQ4idW9D8ghH8",
          },
        ],
      },
      {
        points: [
          {
            title: "Airborne Parks – Thousand lights",
            para: [
              "A centrally located trampoline center known for its stylish interiors, interactive climbing walls, and dedicated play zones for younger children.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/airborne-the-trampoline-park.jpg",
            website: "https://maps.app.goo.gl/5qZH1gLZaVky4Px17",
          },
        ],
      },
      {
        points: [
          {
            title: "Play N’ Learn – VR Mall, Anna Nagar",
            para: [
              "More than just trampolines, this edu-play space blends fun with learning — ideal for toddlers and younger kids with energy to spare.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/play-n’-learn-–-vr-mall,-anna-nagar.jpg",
            website: "https://maps.app.goo.gl/7uvchd2MLBdDVwUr5",
          },
        ],
      },
      {
        points: [
          {
            title: "SkyJumper Trampoline Park – Velachery",
            para: [
              "Located on the 4th floor of Grand Square Mall, SkyJumper offers a vast trampoline arena along with attractions like laser tag, soft play zones, and TheBoxingBots game. It's an ideal spot for family outings, birthday parties, and corporate events.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/skyjumper-trampoline-park.jpg",
            website: "https://maps.app.goo.gl/J7aJF9YxPVD9dsEZ7",
          },
        ],
      },
      {
        points: [
          {
            title: "Dugout Chennai – OMR",
            para: [
              "Dugout provides a comprehensive indoor sports experience with trampoline parks, inflatable zones, interactive games, and more. Their facilities are designed for all age groups, ensuring safety and fun.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/dugout-trampoline-&-sports-arena.jpg",
            website: "https://maps.app.goo.gl/SStFxA3Uf6RbdcuCA",
          },
        ],
      },

      {
        points: [
          {
            title: "FLOAT Trampoline Park – Anna Nagar",
            para: [
              "Located within Kora Food Street, FLOAT offers a budget-friendly trampoline experience with additional features like rock climbing walls and foam pits. It's suitable for both kids and adults looking for some energetic fun.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/float-trampoline-park-anna-nagar.jpg",
            website: "https://maps.app.goo.gl/s6cGYh4FKymBk6HaA",
          },
        ],
      },
      {
        points: [
          {
            title: "FlyOut Trampoline Park – Mangadu",
            para: [
              "FlyOut provides both indoor and outdoor trampoline experiences, including springless trampolines, climbing walls, and basketball hoops. It's a versatile venue for group outings and birthday parties.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/flyout-trampoline-park-–-mangadu.jpg",
            website: "https://maps.app.goo.gl/mNmjRWP1q2sMY68r8",
          },
        ],
      },
      {
        points: [
          {
            title: "VGP Wonder World Trampoline Park – ECR",
            para: [
              "Part of the VGP Universal Kingdom, this trampoline park offers a spacious and well-maintained area for jumping fun, ensuring safety with attentive staff.",
            ],
            imgs: "/images/Visit-Images/SubPages/trampoline-parks/vgp-wonder-world.jpg",
            website: "https://maps.app.goo.gl/3uJzLmm9dADTdfxc6",
          },
        ],
      },
    ],
  },
];

export default function TrampolineInChennai() {
  {
    /*#################### STATE VARIABLES ##################### */
  }

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  {
    /*#################### HELPERS  ##################### */
  }

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

  {
    /*########################### RENDER   ######################### */
  }

  return (
    <>
      <Helmet>
        <title>Trampoline Parks In Chennai : FlyOut Trampoline Zones</title>
        <meta name="description" content="Enjoy endless excitement at trampoline parks in Chennai with springless trampolines, basketball hoops, climbing walls, and perfect group fun spots" />
        <link rel="canonical" href="/visit/things-to-do/trampoline-parks-in-chennai" />
      </Helmet>

      <div className="FunchennaiDetailPage">
        {/*#################### Banner ########################## */}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/thingsDoChild/trampoline-parks.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Trampoline Parks in Chennai</h3>
              <div className="breadCrum">
                <Link to="/invest-in-chennai">Home</Link> -{" "}
                <span>Trampoline Parks in Chennai </span>
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
              <p>Trampoline Parks in Chennai </p>
            </div>
            <div className="workIntro">
              <h3>Bounce, Flip, and Fly Your Way Into Fun</h3>
              <p>
                Whether you're looking for a weekend energy burn, a birthday
                party venue, or just some indoor excitement, Chennai’s
                trampoline parks offer the perfect mix of movement and
                amusement. With foam pits, obstacle courses, wall climbs, and
                sky-high flips, these spots are fun for kids, teens, and adults
                alike.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
        <h1 className="text-3xl font-bold mb-10 text-center">
          Top Multiplexes in Chennai
        </h1>
        {Multiplexes.map((section, sectionIdx) => (
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

                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec funchennai">
          {imageSections.map((section, index) => (
            <section
              className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
      ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
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
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                  {"Top Trampoline Zones in the City "}
                </h2>
                {section.tenantInfoSections.map((tenant, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold mb-4">
                      {tenant.title}
                    </h4>
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
                          {item.website && (
                            <div className="mt-2 exploreMorebuttonVisitChennai">
                              <a
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm font-medium"
                              >
                                Visit Map
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

        {/*#################### MAIN CONTENT  ####################*/}
        {/* <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          {imageSections1.map((section, index) => (
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
                    <h4 className="text-lg font-semibold mb-4">
                      {tenant.title}
                    </h4>
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
      </div> */}

        {/* ########## EXPLORE MORE CHENNAI SLIDER ############### */}

        <VisitSlider />

        {/*################## SOCIAL MARQUE SECTION################ */}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
