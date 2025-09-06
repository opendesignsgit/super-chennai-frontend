import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { strong } from "framer-motion/client";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LiveSlider from "./LiveSlider";

export default function Living() {
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
      sectionTitle: "Living",
      sectionImageAlt: "living in chennai",
      sectionDesc:
        "Chennai offers a broad range of living options—from spacious family homes to semi/fully furnished apartments and compact studio apartments in Chennai. Whether you're moving solo, as a couple, or with a family, you'll find housing that suits your needs, lifestyle, and budget.",
      image: "/images/Visit-Images/SubPages/living.jpg",
      imageAlt: "food in chennai",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                "Can find compact studio apartments in Chennai or shared PGs in vibrant, central neighborhoods that align with manageable Chennai living expenses.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Often prefer 1–2 BHK apartments in Chennai located in well-connected areas, offering a balance between comfort, accessibility, and value.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "Can explore spacious apartments in Chennai or independent homes in residential areas with access to parks, schools, and community amenities—without stretching their Chennai living cost.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];

  const imageSections1 = [
    {
      sectionTitle: "Groceries",
      sectionDesc:
        "Chennai makes daily shopping simple — blending traditional neighborhood markets with modern supermarkets and app-based convenience. Whether you prefer browsing fresh produce or doorstep deliveries, the city has it covered, supporting an efficient and affordable lifestyle that complements the overall Chennai cost of living.",
      image: "/images/Visit-Images/SubPages/groceries.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                "Benefit from nearby stores or 10-minute delivery apps, ideal for a minimalist lifestyle within a reasonable Chennai cost of living.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Enjoy mix-and-match shopping across supermarkets and specialty stores, balancing quality and variety without overspending.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "Rely on weekly planning with large-format retailers or subscription deliveries, optimizing time and budget within the city’s affordable Chennai living cost.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];
  const imageSections2 = [
    {
      sectionTitle: "Commute & Mobility",
      sectionDesc:
        "Chennai’s growing transit network supports seamless city travel through metros, suburban trains, buses, and app-based rides. Getting around is reliable, safe, and increasingly efficient — whether you're near a railway station in Chennai or commuting from newer residential zones.",
      image: "/images/Visit-Images/SubPages/commute-&-mobility.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                " Zip across the city using the metro or the Chennai bus service to reach colleges and working hubs. Ride-hailing apps like Ola, Uber, and Rapido, along with Chennai auto options, offer quick and affordable mobility.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Daily commutes are made smoother with a metro-to-cab combo or a short Chennai auto ride to your workplace. Weekend drives and app-based cabs in Chennai or self-drive rentals fit flexible routines.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "Well-connected neighborhoods provide easy access to schools, offices, and hospitals through metro corridors, trusted Chennai bus service routes, and auto-rickshaws. From school drop-offs to grocery errands, families can rely on their vehicles, taxis in Chennai, or app-based rentals for hassle-free city travel.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];

  const imageSections3 = [
    {
      sectionTitle: "Utilities & Connectivity",
      sectionDesc:
        "Essential services like electricity, water, gas, and digital infrastructure are widely available and well-managed. Chennai supports a comfortable, tech-enabled lifestyle for all residents.",
      image: "/images/Visit-Images/SubPages/utilities-&-connectivity.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                "Most coliving spaces in chennai or studio apartment in chennai come fully set up with prepaid electricity, Wi-Fi, and gas connections. No setup needed — just move in and plug in.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "chennai utilities",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Apartments in chennai include broadband provisions, DTH provisions, and power backup, supporting work-from-home needs and entertainment. Monthly utility management is easy via apps and e-bill portals.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "In family-focused neighborhoods may have reliable piped gas, 24/7 electricity, metro water supply, and fiber internet ensure uninterrupted routines.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];

  const imageSections4 = [
    {
      sectionTitle: "Clothing & Fashion",
      sectionDesc:
        "Chennai’s shopping scene reflects its diversity — from global brands in high-end malls to traditional silk saris in T. Nagar and fast fashion in Pondy Bazaar.",
      image: "/images/Visit-Images/SubPages/clothing-&-fashion.jpg",
      imageAlt: "clothing in chennai",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                "Trendy outfits and casual wear are easy to find in street-style hubs like Pondy Bazaar or the boutiques at Besant Nagar. Malls like Express Avenue offer access to popular youth and lifestyle brands — ideal for last-minute shopping or seasonal refreshes.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Whether it’s smart-casuals for work, ethnic wear for events, or weekend leisure looks, couples find everything under one roof at Phoenix Marketcity or VR Chennai. Many also explore curated fashion studios and sustainable clothing brands across the city.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "T. Nagar is a go-to for silk sarees, traditional attire, and festive family shopping. Children’s clothing, school uniforms, and everyday basics are widely available in local markets and department stores like Pantaloons and Max Fashion — with styles for all age groups.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];

  const imageSections5 = [
    {
      sectionTitle: "Food & Dining",
      sectionDesc:
        "Chennai is a paradise for food lovers — rich in heritage, bold in flavor, and open to global influences. Every budget and preference finds a place at the table with options ranging from local eateries to global dining experiences.",
      image: "/images/Visit-Images/SubPages/food-&-dining.jpg",
      imageAlt: "food in chennai",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                "Quick bites are always within reach — from tiffin centers to street food stalls. Swiggy and Zomato make it easy to try new restaurants in Chennai or order solo meals on the go.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Cafés, rooftop lounges, and contemporary multi cuisine restaurant Chennai venues are perfect for date nights or weekend brunches. Gourmet meal kits and home chef deliveries also add a personal touch to evenings in.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "Spacious seating, kids’ menus, and hearty portions make family-friendly restaurants in Chennai a weekend favorite. Shared experiences thrive over South Indian feasts, North Indian thalis, or buffets at a well-loved multi cuisine restaurant Chennai.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];

  const imageSections6 = [
    {
      sectionTitle: "Entertainment & Recreation",
      sectionDesc:
        "Chennai beautifully blends cultural richness with modern-day leisure. From laid-back evenings by the beaches in Chennai to family fun at popular amusement parks in Chennai, the city promises something enjoyable for everyone.",
      image: "/images/Visit-Images/SubPages/entertainment-&-recreation.jpg",
      imageAlt: "chennai entertainment",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Singles",
              para: [
                "Spend evenings catching films at landmark multiplexes in Chennai, attending gallery openings, or just walking along the breezy beaches in Chennai. Quiet corners in public gardens also offer a perfect place to unwind.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Singles.svg",
              link: "/classicItalianFlavors",
              altTitle: "",
            },
          ],
        },
        {
          points: [
            {
              title: "For Couples",
              para: [
                "Romantic dinners followed by a play at intimate theatres in Chennai, music gigs at cafés, or relaxing getaways to scenic beach resorts in Chennai make weekends memorable.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Couples.svg",
              link: "/regionalItalianDelights",
              altTitle: "couples in chennai",
            },
          ],
        },
        {
          points: [
            {
              title: "For Families",
              para: [
                "Interactive exhibits at children-friendly museums in Chennai, thrilling rides at city-based amusement parks in Chennai, or a movie followed by shopping at one of the many malls in Chennai — families here are spoilt for choice.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/For-Families.svg",
              link: "/regionalItalianDelights",
              altTitle: "chennai city life",
            },
          ],
        },
      ],
    },
  ];

  const detailsections = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "Diverse Living Options",
          description:
            "Choose from independent houses, modern apartments, or co-living spaces across vibrant city neighborhoods. The city features everything from flats for sale in Chennai to houses for rent in Chennai, catering to short-term and long-term needs.",
          subDescription: "",
          locations: [
            {
              label: "Little Mount",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "Tailored for Every Lifestyle",
          description:
            "Chennai caters to all—from students and professionals to growing families—with flexible, scalable housing choices that match varying Chennai cost of living requirements.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Flexible Budget Range",
          description:
            "Accommodation spans from affordable PGs and studio apartments in Chennai to premium villas and spacious apartments in Chennai, offering solutions for every lifestyle and price point.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];
  const detailsections1 = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "Neighborhood & Supermarket Options",
          description:
            "Shop fresh at local vendors or stock up at major chains like Spencer’s, More, and Reliance Fresh—catering to a wide range of budgets and helping manage Chennai living expenses.",
          subDescription: "",
          locations: [
            {
              label: "Little Mount",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "Digital Convenience",
          description:
            "Use Swiggy Instamart, Zepto, or BigBasket for fast and reliable grocery delivery — a modern convenience that aligns with today’s fast-paced routines and contributes to a practical Chennai living cost.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Accessible & Reliable",
          description:
            "Every household, regardless of location, has access to essentials — quickly and affordably, making groceries a manageable part of overall Chennai living expenses.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];
  const detailsections2 = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "Public Transport Network",
          description:
            "Chennai metro, Chennai bus service, and suburban railways offer extensive, low-cost connectivity to all parts of the city, reducing daily commute stress.",
          subDescription: "",
          locations: [
            {
              label: "Little Mount",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "App-Based Mobility",
          description:
            "Ola, Uber, and Rapido provide flexible ride options. Whether you prefer cabs in Chennai, taxis in Chennai, or two-wheeler rides, the city supports every style of travel.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Well-Connected Hubs",
          description:
            "Business zones and residential areas are strategically linked through Chennai metro stations and major railway stations in Chennai, supported by Chennai auto stands and well-routed buses.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];

  const detailsections3 = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "Reliable Essentials",
          description:
            "Round-the-clock electricity, piped gas, and treated water are standard across most city zones.",
          subDescription: "",
          locations: [
            {
              label: "Digital Access",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "Digital Access",
          description:
            "High-speed broadband and strong mobile networks ensure seamless communication and entertainment.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Smart-Ready",
          description: "Many new buildings come IoT- and work-from-home–ready.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];

  const detailsections4 = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "Contemporary Styles",
          description:
            "Malls like Phoenix Marketcity and Express Avenue offer global and Indian brands.",
          subDescription: "",
          locations: [
            {
              label: "Little Mount",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "Traditional Elegance",
          description:
            "Find handwoven Kanchipuram silks, temple jewelry, and festive wear in T. Nagar.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Everyday Fashion",
          description:
            "Pondy Bazaar and local boutiques offer the latest trends at accessible prices.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];
  const detailsections5 = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "South Indian Staples",
          description:
            "Relish dosas, idlis, and filter coffee at iconic tiffin spots and time-tested restaurants in Chennai.",
          subDescription: "",
          locations: [
            {
              label: "Little Mount",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "International Cuisine",
          description:
            "Explore Italian, Korean, Thai, and more at upscale dining spots and handpicked multi cuisine restaurant Chennai options that cater to evolving tastes.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Dining for All",
          description:
            "From street eats to five-star experiences — Chennai offers something for everyone through its diverse food scene.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];
  const detailsections6 = [
    {
      id: 3,
      title: "",
      points: [
        {
          name: "Cultural Depth",
          description:
            "Explore ancient temples in Chennai, engaging museums in Chennai, and vibrant seasonal festivals that celebrate local arts and history.",
          subDescription: "",
          locations: [
            {
              label: "Little Mount",
              link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
            },
          ],
        },
        {
          name: "Leisure Spots",
          description:
            "Enjoy the city’s variety — themeparks in Chennai, expansive malls in Chennai, classic cinemahalls in Chennai, and open-air performance venues that keep weekends packed with possibilities.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
        {
          name: "Inclusive for All Ages",
          description:
            "Solo, partnered, or with children — Chennai’s entertainment options are as diverse as its people.",
          subDescription: "",
          locations: [
            {
              label: "Adyar",
              link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
            },
          ],
        },
      ],
    },
  ];

  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
      link: "/live/cost-of-living-in-chennai",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/live/residential-properties-in-chennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/live/employment-in-chennai",
    },
    {
      src: "/images/Live-Images/chennaiLifeEssential4.png",
      title: "Transportation",
      link: "/live/transportation-in-chennai",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/live/healthcare-in-chennai",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/live/worship-in-chennai",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/visit/things-to-do-in-chennai",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/live/places-near-chennai",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/live/quality-of-life-in-chennai",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/live/infrastructure-development-in-chennai",
    },
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Educational Insitiutions",
      link: "/live/educational-institutions-in-chennai",
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
    autoplay: true,
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
        <Helmet>
          <title>
            {/* Super Chennai Cost of Living | Rent, Food, Essentials & More */}
            Cost of Living in Chennai - Super Chennai
          </title>
          <meta
            name="description"
            content="Understand the cost of living in Chennai including housing, daily expenses, and lifestyle. Super Chennai balances affordability, modern growth & vibrant culture."
          />
          <link rel="canonical" href="/live/cost-of-living-in-chennai" />
        </Helmet>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/SubPages/cost-of-living-banner.jpg"
            alt="cost of living in chennai"
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Cost of Living </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Home </Link> -{" "}
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Cost of Living </a>
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
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              {/* <h3>Living in Chennai – From Budget-Friendly to Luxury</h3> */}
              <h3>Cost of Living in Chennai</h3>

              {/* <p>
                Chennai offers a well-balanced and competitive cost of living,
                making it a compelling choice for professionals, students, and
                families. Its affordability is matched by high standards in
                housing, healthcare, education, and infrastructure.
              </p>
              <p>
                Whether you’re starting out on a modest budget or seeking a
                premium lifestyle, the city provides a wide range of options —
                from compact studio apartments and shared accommodations to
                spacious villas and gated communities. Essentials such as
                groceries, transportation, and utilities remain cost-effective
                when compared to many other major urban centres, without
                compromising on quality or convenience.
              </p>
              <p>
                Chennai combines the advantages of affordable urban living with
                the vibrancy, safety, and infrastructure of a future-ready city
                — making it a preferred destination for those seeking both value
                and quality of life.
              </p> */}
              <p>
                <strong>Affordable Living, Elevated Lifestyle</strong>{" "}
              </p>
              <p>
                The Chennai cost of living is both affordable and flexible,
                attracting professionals, students, and families from across
                India. From essential expenses to premium comforts, Chennai
                living expenses remain competitive without sacrificing quality.
              </p>
              <p>
                You’ll find a wide range of housing, from budget-friendly
                rentals to premium flats for sale in Chennai and houses for rent
                in Chennai. Whether you're relocating or investing, Chennai
                living cost makes the city an attractive option
              </p>
              <p>
                Compared to other major metros, Chennai offers affordable costs
                for groceries, transportation, healthcare, and utilities, making
                it one of India’s most value-driven urban centers. If you're
                looking for a city that balances cost, convenience, and quality
                of life, Chennai delivers.
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
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.imageAlt} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Second Section */}

          {imageSections1.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.altTitle} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections1.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Third Section */}

          {imageSections2.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.altTitle} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections2.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Fourth Section */}

          {imageSections3.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.altTitle} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections3.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Fifth Section */}

          {imageSections4.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.imageAlt} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections4.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Sixth Section */}

          {imageSections5.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.altTitle} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections5.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Seventh Section */}

          {imageSections6.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
              >
                <div className="imgLeft">
                  <img src={section.image} alt={section.imageAlt} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    <p>{section.sectionDesc}</p>
                  </div>
                </div>

                {detailsections6.map((section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="nightlife mb-10"
                    style={{
                      paddingBottom: "0",
                      border: "none",
                      margin: "0 auto",
                      marginTop: "90px",
                    }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          style={{ boxShadow: "none" }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {point.name}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {point.description}
                          </p>

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">
                              {point.subDescription}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                  style={{ margin: "0" }}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.altTitle} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/*--------------- Explore More Chennai----------------- */}

          {/* <div className="exploreSldierBg">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="exploreMoreSectionContent">
                <h4>Explore more of Chennai</h4>
                <p>
                  Chennai is a city full of sites where you may go exploring
                  every single day. Explore the city's various hidden treasures
                  based on your current mood.
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
          </div> */}
          <LiveSlider />
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
