import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import VisitSlider from "./VisitSlider";
import { Helmet } from "react-helmet-async";

export default function Traveltips() {
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

  const imageSections = [
    {
      sectionTitle: "Before You Arrive",
      // sectionDesc:  "Your experience will be enhanced if you comprehend the city's rhythm.",
      image: "/images/Visit-Images/SubPages/before-you-arrive.jpg",
      imgAlt: "money transfer in chennai",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Visa & Entry Requirements",
              para: [
                "Verify your visa eligibility; many nationalities (e.g., US, UK, EU, etc.) can apply online or receive visa on arrival—always check current rules.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Visa&EntryRequirements.svg",
              imgAlt: "visa process in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Currency",
              para: [
                "India uses the Indian Rupee (INR); keep some local cash handy and use prepaid cards or international credit cards for convenience.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Currency.svg",
              imgAlt: "currency in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "Climate & What to Pack",
              para: [
                "Chennai has a warm tropical climate—pack light cotton clothes, sunscreen, eyewear, and a light rain jacket during monsoon.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Climate & What to Pack.svg",
              imgAlt: "cool places in chennai",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "On Arrival & in the City",
      // sectionDesc: "Enhancing your exploration beyond the obvious will unlock a richer experience.",
      image: "/images/Visit-Images/SubPages/on-arrival-&-in-the-city.jpg",
      imgAlt: "stores in chennai",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Buy a local SIM",
              para: [
                "Buy a local SIM (e.g., Jio, Airtel) at the airport or nearby shops. Free Wi-Fi is available in malls, hotels, and cafes. ",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Connectivity.svg",
              imgAlt: "chennai malls",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Dress modestly",
              para: [
                "Dress modestly in religious places; avoid public displays of affection—Tamil Nadu values cultural respect",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Enjoying-Local-Flavors.svg",
              imgAlt: "bakery in chennai",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Must-Know Etiquette",
              para: [
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Ask before clicking photos of people or private spaces
                  </li>
                  <li>Tipping isn’t mandatory but appreciated (5–10%)</li>
                  <li>
                    Be polite and smile – Chennaiites are warm and helpful
                  </li>
                  <li>
                    Avoid discussions on politics or religion unless invited
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Enjoying-Local-Flavors.svg",
              imgAlt: "bakery in chennai",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },

    {
      sectionTitle: "Where to Shop ",
      // sectionDesc: "Enhancing your exploration beyond the obvious will unlock a richer experience.",
      image: "/images/Visit-Images/SubPages/where-to-shop.jpg",
      imgAlt: "t nagar shopping",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Connectivity",
              para: [
                <ul className="list-disc pl-5 space-y-1">
                  <li>T. Nagar for sarees, gold, and street shopping</li>
                  <li>Express Avenue, Phoenix MarketCity for branded goods</li>
                  <li>Pondy Bazaar and Luz Corner for traditional items</li>
                  <li>Don’t hesitate to bargain in street markets</li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Connectivity.svg",
              imgAlt: "chennai malls",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Safety & Health",
      // sectionDesc: "Enhancing your exploration beyond the obvious will unlock a richer experience.",
      image: "/images/Visit-Images/SubPages/safety-&-health.jpg",
      imgAlt: "chennai traffic",
      tenantInfoSections: [
        {
          points: [
            {
              // title: "Connectivity",
              para: [
                <p key="1">
                  Chennai is generally safe, especially for solo travelers
                </p>,
                <p key="2">
                  {" "}
                  Emergency numbers: 100 (Police), 108 (Ambulance)
                </p>,
                <p key="3">
                  {" "}
                  Pharmacies are easily accessible and English-speaking
                </p>,
                <p key="4">
                  {" "}
                  Visit travel clinics if you need medical help; many private
                  hospitals available{" "}
                </p>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Enjoying-Local-Flavors.svg",
              imgAlt: "bakery in chennai",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
  ];

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
      <Helmet>
        <title>Travel in Chennai | Adventure in Chennai</title>
        <meta
          name="description"
          content="With culture, cuisine & coastal beauty, travel in Chennai invites you to discover timeless traditions alongside a thriving urban vibe."
        />
        <link rel="canonical" href="/visit/travels-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/travel-tips.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Travel Tips </h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <a href="">Travel Tips</a>
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
              <p>Visit &nbsp; in Chennai &nbsp; Visit &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Travel Tips</h3>
              <p>
                A colorful kaleidoscope of experiences awaits you when you set
                out on an adventure in Chennai. A few guiding ideas might
                improve your trip through this vibrant South Indian city and
                guarantee a smooth and rewarding tour.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        <div className="foodlistsec">
          {imageSections.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
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
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.imgAlt} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.imgAlt} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                            {/* <div className="exploreMorebuttonVisitChennai">
                              <a
                                href={item.link || "#"}
                                className="text-blue-600 hover:underline text-sm font-medium"
                              >
                                Explore More
                              </a>
                            </div> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <VisitSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
