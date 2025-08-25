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

export default function Wellness() {
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
      sectionTitle: "Spa Escapes & Ayurvedic Healing",
      sectionDesc:
        "Chennai blends ancient Ayurvedic wisdom with modern spa luxury, offering holistic wellness experiences across the city. From herbal oil therapies and detox treatments to coastal spa retreats, visitors can unwind, heal, and rejuvenate. Ideal for those seeking balance, relief, and restoration through time-tested, nature-based healing traditions.",
      image: "/images/Visit-Images/SubPages/spa-escapes-ayurvedic-healing.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title:
                "Relax and rejuvenate at renowned spas and Ayurvedic centres like:",
              para: [
                <ul key="list">
                  <li>
                    <strong>Ayush Therapy Centres</strong> (Adyar, Anna Nagar) –
                    Authentic Ayurvedic treatments
                  </li>
                  <li>
                    <strong>Santhigiri Ayurveda & Siddha Hospital</strong> –
                    Holistic health and detox therapies
                  </li>
                  <li>
                    <strong>Leela Palace Spa</strong> – Luxury wellness with
                    traditional therapies in a serene coastal setting
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Explore-ageless-healing.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Yoga & Meditation",
      sectionDesc:
        "Chennai is home to renowned yoga and meditation studios that blend tradition with mindful living. From classical Hatha yoga to guided meditation and breathwork, these spaces offer inner balance, spiritual growth, and holistic wellness—welcoming both beginners and seasoned practitioners seeking peace in a vibrant city.",
      image: "/images/Visit-Images/SubPages/yoga-meditation.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Yoga & Meditation",
              para: [
                <ul key="list">
                  <li>
                    <strong>Krishnamacharya Yoga Mandiram</strong> – One of
                    India’s most respected yoga institutes
                  </li>
                  <li>
                    <strong>Isha Life (Mylapore)</strong> – A space for yoga,
                    wellness products, and organic cafe
                  </li>
                  <li>
                    <strong>Sivananda Yoga Vedanta Centre</strong> – Classic
                    hatha yoga, meditation, and spiritual study
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Yoga-Meditation.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Nature-Based Wellness Spots",
      sectionDesc:
        "Chennai’s nature-based wellness spots offer peaceful escapes amidst the city's bustle. From botanical gardens to coastal sunrise zones, these green retreats promote mental clarity, gentle movement, and fresh air—perfect for mindful walks, yoga, or simply reconnecting with nature for holistic well-being and emotional calm.",
      image: "/images/Visit-Images/SubPages/nature-based-wellness-spots.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Nature-Based Wellness",
              para: [
                <ul key="list">
                  <li>
                    <strong>Theosophical Society Gardens (Adyar)</strong> –
                    Lush, tranquil walks and meditation spaces
                  </li>
                  <li>
                    <strong>Semmozhi Poonga</strong> – Botanical garden perfect
                    for morning calm and quiet reflection
                  </li>
                  <li>
                    <strong>Elliot’s Beach Sunrise Sessions</strong> – Locals
                    practice yoga and walking therapy by the sea
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Nature-Based Wellness.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Millet Cafes & Conscious Eating in Chennai",
      sectionDesc:
        "Wholesome, rooted, and refreshingly modern. Chennai’s food culture is evolving with a return to native grains like millets, combined with an urban push toward organic, farm-fresh, and plant-based dining. Across the city, you'll find vibrant cafés and restaurants serving nutrient-dense meals that are both traditional and trend-forward.",
      image:
        "/images/Visit-Images/SubPages/millet-cafes-conscious-eating-in-chennai.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Millet Cafes & Conscious",
              para: [
                <ul key="list">
                  <li>
                    <strong>Millet Maagic Meal (Ashok Nagar, Adyar)</strong> –
                    Purely millet-focused menu—dosas, noodles, biryanis, and
                    sweets—packed with health benefits and great taste.
                  </li>
                  <li>
                    <strong>Eco Café (Alwarpet)</strong> – A lifestyle café
                    serving millet salads, herbal teas, and home-style cooking
                    with seasonal produce and eco-conscious ambience.
                  </li>
                  <li>
                    <strong>The Healthful Place (Anna Nagar)</strong> – Known
                    for their millet thalis, detox bowls, and cold-pressed
                    juices—perfect for clean eating enthusiasts.
                  </li>
                  <li>
                    <strong>Farmers' Café (Besant Nagar)</strong> – Local
                    ingredients, farm-to-table recipes, and weekly millet
                    specials make this a mindful choice near the beach.
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Millet Cafes & Conscious.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Mind–Body Therapies & Healing Spaces",
      sectionDesc:
        "Chennai offers a growing range of mind–body therapy centers focused on emotional balance, energy healing, and holistic health. Practices like Reiki, sound therapy, breathwork, and mindfulness sessions help visitors manage stress, improve clarity, and align inner well-being with physical vitality in serene, supportive environments.",
      image:
        "/images/Visit-Images/SubPages/mind–body-therapies-healing-spaces.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Mind–Body Therapies",
              para: [
                <ul key="list">
                  <li>
                    <strong>Prana Healing Centre</strong> – Chakra healing,
                    Reiki, and energy balancing
                  </li>
                  <li>
                    <strong>Mindful Living (Nungambakkam)</strong> – Integrative
                    mental wellness programs
                  </li>
                  <li>
                    <strong>Yogam Studio</strong> – Offers breathwork,
                    mindfulness, and therapeutic yoga
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Mind–Body-Therapies.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Spiritual Wellness & Retreats",
      sectionDesc:
        "Chennai’s spiritual wellness scene is deeply rooted in its cultural and devotional heritage. From serene ashrams and meditation halls to temple spaces and arts-based retreats, the city invites seekers to explore inner peace, mindfulness, and self-discovery through reflection, devotion, and sacred traditions that transcend time.",
      image: "/images/Visit-Images/SubPages/spiritual-wellness-retreats.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Spiritual Wellness",
              para: [
                <ul key="list">
                  <li>
                    <strong>Ramakrishna Math</strong> – Daily meditation and
                    spiritual discourses{" "}
                    <a
                      href="https://iskconchennai.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-voilet-500 underline"
                    >
                      iskconchennai.org
                    </a>
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Spiritual Wellness.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Wellness by the Sea",
      sectionDesc:
        "Chennai’s coastline offers a natural sanctuary for wellness by the sea. Sunrise yoga, beach walks, and ocean-view meditation create moments of calm and clarity. From ECR resorts to quiet local beaches, the sea breeze and rhythmic waves nurture physical renewal and emotional balance in serene, scenic settings.",
      image: "/images/Visit-Images/SubPages/wellness-by-the-sea.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Enjoy peace along the coast:",
              para: [
                <ul key="list">
                  <li>Sunrise walks at Thiruvanmiyur or Marina Beach</li>
                  <li>
                    Sea-view wellness yoga sessions at boutique resorts on East
                    Coast Road (ECR)
                  </li>
                  <li>
                    Ocean therapy escapes to Mahabalipuram wellness resorts
                    (weekend-friendly)
                  </li>
                </ul>,
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Enjoy-peace-along-the-coast.svg",
              // link: "/urban-beaches",
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
      src: "/images/Visit-Images/SubPages/restaurants-slide.jpg",
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
      <Helmet>
        <title>Wellness Clinic Chennai | Ayurveda Clinic Chennai</title>
        <meta
          name="description"
          content="Find balance & wellness at an Ayurveda clinic in Chennai, blending Ayurveda, yoga & herbal therapies for a natural path to healthy living."
        />
        <link rel="canonical" href="/visit/wellness-centres-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Visit-Images/SubPages/wellness-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3> Wellness </h3>
              <div className="breadCrum">
                <Link to="/visit-chennai"> Visit </Link> -{" "}
                <a href="">Wellness</a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
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
              <h3>Wellness </h3>
              <p>
                {" "}
                Balance your body. Refresh your mind. Reconnect with your soul.{" "}
              </p>
              <p>
                Chennai is not only a vibrant coastal metropolis but also a
                center for holistic wellness. Rooted in ancient healing systems
                like Ayurveda and Siddha, the city seamlessly blends traditional
                practices with modern wellness spaces, yoga retreats,
                nature-based therapies, and spiritual tranquility.
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
                style={{ paddingTop: "100px" }}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                  ${
                    index % 2 === 0
                      ? "bg-white whitebgsec"
                      : "bg-[#f7f7f7] colorbgsec"
                  }`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.sectionTitle} />
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
                            <img src={item.imgs} alt={item.title} />
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
