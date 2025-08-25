import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import LiveSlider from "./LiveSlider";
import { Helmet } from "react-helmet-async";

const benefitSections1 = [
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
        iconImage: "/images/Live-Images/SubPages/Icons/AccomodationIcon.svg",
        title: "Cost-Effective Living",
        points: [
          // <>
          //   <strong>
          //     <h3>Global trust in local care:</h3>
          //   </strong>
          // </>,

          <>
            Chennai stands out for its cost-effective living, allowing residents
            to enjoy quality housing, nutritious food, and dependable services
            at far lower costs than many global and Indian metropolitan cities.
            This balance between affordability and urban comfort is one of the
            key reasons why the quality of life in Chennai remains consistently
            high.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Live-Images/SubPages/Icons/world-class-healthcare.svg",
        title: "World-Class Healthcare",
        points: [
          <>
            <strong>
              <h3>Healthcare in Chennai</h3>
            </strong>
          </>,

          <>
            is internationally recognized for its excellence and accessibility.
            The city is home to top hospitals, leading specialists, and thriving
            medical tourism, making advanced treatments affordable and widely
            available. Whether it’s preventive care or complex procedures,
            Chennai provides healthcare that’s both reliable and globally
            trusted.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Live-Images/SubPages/Icons/premier-education-ecosystem.svg",
        title: "Premier Education Ecosystem",
        points: [
          // <>
          //   <strong>
          //     <h3>Where future minds thrive:</h3>
          //   </strong>
          // </>,
          <>
            With institutions like IIT Madras and numerous global curriculum
            schools, education in Chennai fosters academic excellence and
            innovation. The city offers a well-rounded environment for learners
            across disciplines, shaping future leaders in science, humanities,
            technology, and the arts—further enhancing the quality of life in
            Chennai for families and professionals alike.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Live-Images/SubPages/Icons/safe-inclusive-environment.svg",
        title: "Safe & Inclusive Environment",
        points: [
          <>
            <strong>
              <h3>Community-first and culturally respectful:</h3>
            </strong>
          </>,
          <>
            Safety and inclusivity are at the heart of living in Chennai. The
            city consistently ranks among the safest in India, particularly for
            women. Its culturally respectful neighborhoods and supportive
            communities create an environment where residents—whether locals,
            migrants, or expats—feel secure and welcomed.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Live-Images/SubPages/Icons/Seamless-Urban-Mobility.svg",
        title: "Seamless Urban Mobility",
        points: [
          <>
            <strong>
              <h3> Move freely, live fully:</h3>
            </strong>
          </>,
          <>
            The ever-improving Chennai transport system supports seamless
            mobility across the city. With a growing metro network, suburban
            trains, buses, and ride-share options, residents benefit from
            reliable, cost-effective transportation that enhances daily
            convenience and access to opportunities.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Live-Images/SubPages/Icons/coastal-climate-clean-air.svg",
        title: "Coastal Climate & Clean Air",
        points: [
          <>
            <strong>
              <h3>Where sea breeze meets city life:</h3>
            </strong>
          </>,
          <>
            Thanks to the Bay of Bengal’s breezes and carefully preserved green
            zones, air quality in Chennai is notably better than in many other
            metro cities. The natural ventilation and lower pollution levels
            contribute to healthier living conditions, especially important for
            families and seniors choosing to settle here.
          </>,
        ],
      },
      {
        iconImage:
          "/images/Live-Images/SubPages/Icons/cultural-depth-community-warmth.svg",
        title: "Cultural Depth & Community Warmth",
        points: [
          <>
            <strong>
              <h3>Chennai culture</h3>
            </strong>
          </>,
          <>
            Chennai culture is a vibrant mix of classical traditions and modern
            expression. From Carnatic concerts to Kollywood cinema, the city’s
            artistic richness adds color to everyday life. Community festivals
            and cultural events foster bonds that make living in Chennai feel
            deeply rooted yet refreshingly open.
          </>,
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

const sections = [
  {
    image: "/images/Live-Images/SubPages/Cost-Effective Living.jpg", // or imported image
    title: "Cost-Effective Living",
    title1: "",
    description:
      "Chennai stands out for its cost-effective living, allowing residents to enjoy quality housing, nutritious food, and dependable services at far lower costs than many global and Indian metropolitan cities. This balance between affordability and urban comfort is one of the key reasons why the quality of life in Chennai remains consistently high.",
    buttonText: "Buy now",
    buttonLink: "#",
  },
  {
    image: "/images/Live-Images/SubPages/World-Class Healthcare.jpg",
    title: "World-Class Healthcare",
    title1: "Healthcare in Chennai:",
    description:
      "is internationally recognized for its excellence and accessibility. The city is home to top hospitals, leading specialists, and thriving medical tourism, making advanced treatments affordable and widely available. Whether it’s preventive care or complex procedures, Chennai provides healthcare that’s both reliable and globally trusted.",
    buttonText: "Explore",
    buttonLink: "#",
  },
  {
    image: "/images/Live-Images/SubPages/Premier Education Ecosystem.jpg",
    title: "Premier Education Ecosystem",
    title1: "",
    description:
      "With institutions like IIT Madras and numerous global curriculum schools, education in Chennai fosters academic excellence and innovation. The city offers a well-rounded environment for learners across disciplines, shaping future leaders in science, humanities, technology, and the arts—further enhancing the quality of life in Chennai for families and professionals alike.",
    buttonText: "Explore",
    buttonLink: "#",
  },
  {
    image: "/images/Live-Images/SubPages/Safe & Inclusive Environment.jpg",
    title: "Safe & Inclusive Environment",
    title1: "Community-first and culturally respectful:",
    description:
      "Safety and inclusivity are at the heart of living in Chennai. The city consistently ranks among the safest in India, particularly for women. Its culturally respectful neighborhoods and supportive communities create an environment where residents—whether locals, migrants, or expats—feel secure and welcomed.",
    buttonText: "Explore",
    buttonLink: "#",
  },
  {
    image: "/images/Live-Images/SubPages/Seamless Urban Mobility.jpg",
    title: "Seamless Urban Mobility",
    title1: "Move freely, live fully:",
    description:
      "The ever-improving Chennai transport system supports seamless mobility across the city. With a growing metro network, suburban trains, buses, and ride-share options, residents benefit from reliable, cost-effective transportation that enhances daily convenience and access to opportunities.",
    buttonText: "Explore",
    buttonLink: "#",
  },
  {
    image: "/images/Live-Images/SubPages/Coastal Climate & Clean Air.jpg",
    title: "Coastal Climate & Clean Air",
    title1: "Where sea breeze meets city life:",
    description:
      "Thanks to the Bay of Bengal’s breezes and carefully preserved green zones, air quality in Chennai is notably better than in many other metro cities. The natural ventilation and lower pollution levels contribute to healthier living conditions, especially important for families and seniors choosing to settle here.",
    buttonText: "Explore",
    buttonLink: "#",
  },
  {
    image: "/images/Live-Images/SubPages/Cultural Depth & Community Warmth.jpg",
    title: "Cultural Depth & Community Warmth",
    title1: "Chennai culture:",
    description:
      "Chennai culture is a vibrant mix of classical traditions and modern expression. From Carnatic concerts to Kollywood cinema, the city’s artistic richness adds color to everyday life. Community festivals and cultural events foster bonds that make living in Chennai feel deeply rooted yet refreshingly open.",
    buttonText: "Explore",
    buttonLink: "#",
  },
  // Add more items as needed...
];
export default function QualityofLife() {
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
      <Helmet>
        <title>Exploring the Quality of Life in Chennai | Super Chennai</title>
        <meta name="description" content="Understand the quality of life in Chennai with Super Chennai – insights on housing, healthcare, jobs, education, & lifestyle that define the city’s living standards." />
        <link rel="canonical" href="/quality-of-life-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/SubPages/Quality-of-Life-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Quality of Life in Chennai</h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Quality of Life in Chennai</a>
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
              <p>Quality of &nbsp; Life &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Quality of Life </h3>
              <p>
                A city where heritage meets progress, Chennai offers a high
                quality of life shaped by affordability, safety, and cultural
                richness. With excellent healthcare, top educational
                institutions, efficient transport, and warm communities, Chennai
                is a city that welcomes you to thrive—not just survive. Whether
                you're moving here for work, family, or retirement, Chennai’s
                coastal charm, spiritual calm, and modern conveniences make
                daily living comfortable and meaningful.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {/* {benefitSections.map((section, index) => (
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
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div
                  className={`clcscrLtitle relative ${
                    index % 2 === 0 ? "bg-[#7d377c]" : "bg-[#672866]"
                  }`}
                >
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))} */}
        {/* 
      <div id="InvestMainPage" className="QualityofLife">
          {benefitSections1.map((section, index) => (
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
              
              {section.tenantInfoSections.map((tenant, i) => (
                <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList ">
                  <div key={i} className="mb-0">
                    <h4 className="text-lg font-semibold mb-2">
                      {tenant.title}
                    </h4>
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
        </div>  */}

        <div className="container max-w-7xl mx-auto px-4 mt-[50px] !mb-[60px]">
          <div className="flex flex-col gap-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-stretch bg-white overflow-hidden "
              >
                <div className="lg:w-1/2 w-full h-[300px] lg:h-auto">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:w-1/2 w-full bg-[#005B83] text-white p-8 flex flex-col justify-center RoundedSection">
                  <h2 className="text-2xl font-bold mb-2 text-[rgba(255,255,255,0.9)] qualityoflifeheading">
                    {section.title}
                  </h2>
                  <h4 className="text-[1.20rem] font-medium mb-1 text-[#fff] ">
                    {section.title1}
                  </h4>
                  <p className="mb-6 !text-base text-[#fff]">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <LiveSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}

// import { useState, useRef, useEffect } from "react";
// import "../../../assets/Css/CostOfLiving.css";
// import Search from "../../../Components/Search";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import InstagramReelsMarquee from "../../../Components/SocialChennai";
// import Becameavolunteer from "../../../Components/BecameAVolunteer";

// export default function QualityofLife() {
//   const [scrollDir, setScrollDir] = useState("left");
//   const lastScrollY = useRef(0);
//   const bgTextRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
//       lastScrollY.current = currentScrollY;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const benefitSections = [
//     {
//       sectionTitle: "At a Glance",
//       sectionDesc:
//         " Significant South Indian center combining culture and trade. Recognized for its healthcare, educational sectors, and automotive industry, providing a distinctive urban experience enriched with deep-rooted traditions. ",
//       image: "/images/Live-Images/SubPages/At-a-Glance.jpg",
//       benefits: [
//         {
//           id: 1,
//           title: "Typical Rent",
//           para: "A 1 BHK usually ranges from ₹6,000 to ₹18,000 per month, influenced by the area and facilities available. Being close to the city center or technology hubs typically results in increased expenses. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Typical-Rent.svg",
//         },
//         {
//           id: 2,
//           title: "Monthly Transit Subscription",
//           para: " Unlimited travel on non-AC MTC buses is priced at ₹1000 per month. An all-inclusive choice for both AC and non-AC buses costs ₹2000. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Monthly-Transit-Subscription.svg",
//         },
//         {
//           id: 3,
//           title: "Government Medical Accessibility",
//           para: " A robust network of public hospitals and primary healthcare centers guarantees that a large segment of the population can access affordable medical services. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Government-Medical-Accessibility.svg",
//         },
//         {
//           id: 4,
//           title: "Employment rate",
//           para: " The projected unemployment rate in urban Tamil Nadu for those aged 15 and older has fluctuated from 2021-22 to 2023-24.  ",
//           imgs: "/images/Live-Images/SubPages/Icons/Employment-rate.svg",
//         },
//         {
//           id: 5,
//           title: "Green Canopy",
//           para: "Currently, reports suggest a reduced ranking relative to other significant Indian cities in terms of the total percentage of green spaces. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Green-Canopy.svg",
//         },
//         {
//           id: 6,
//           title: "Index of Air Quality",
//           para: " Specific information regarding this metric in the given search results was not accessible. Data from pollution monitoring locations in real-time would provide the latest information. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Index-of-Air-Quality.svg",
//         },
//       ],
//     },
//     {
//       sectionTitle: "Financial Well-Being",
//       sectionDesc:
//         "A mix of earnings, savings, and controllable debt enhances a feeling of security and the capacity to fulfill financial requirements and objectives in Chennai. ",
//       image: "/images/Live-Images/SubPages/Financial-Well-Being.jpg",
//       benefits: [
//         {
//           id: 1,
//           title: "Cost-effective Living",
//           para: " Although a large city, Chennai provides quite affordable living choices, especially in terms of housing and everyday costs, when compared to other Indian metropolitan areas. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Cost-effective-Living.svg",
//         },
//         {
//           id: 2,
//           title: "Varied Employment Landscape",
//           para: "Chennai's economic landscape includes IT, manufacturing, healthcare, and more, offering diverse job opportunities for various skills and professions. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Varied-Employment-Landscape.svg",
//         },
//         {
//           id: 3,
//           title: "Dependable Government Services",
//           para: "  Chennai boasts a fairly reliable public transport system and available government healthcare, catering to a large segment of its population. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Dependable-Government-Services.svg",
//         },
//       ],
//     },
//     {
//       sectionTitle: "Ecological Health ",
//       sectionDesc:
//         "Initiatives to increase green areas, improve waste disposal, harness solar power, and upgrade public transportation seek to foster a healthier environment in Chennai. ",
//       image: "/images/Live-Images/SubPages/Ecological-Health.jpg",
//       benefits: [
//         {
//           id: 1,
//           title: "Over 1,000 acres of newly established green areas ",
//           para: "A notable increase in green spaces throughout the city is set to improve air quality, boost biodiversity, and offer additional recreational areas for inhabitants. ",
//           imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
//         },
//         {
//           id: 2,
//           title: "Complete door-to-door waste collection and sorting",
//           para: " Thorough waste management programs guarantee full collection and accurate sorting, striving for tidier communities and diminished landfill pressure.  ",
//           imgs: "/images/Live-Images/SubPages/Icons/door-to-door-waste-collection 3.svg",
//         },
//         {
//           id: 3,
//           title: "Solar energy-driven street illumination and civic structures",
//           para: " Growing dependence on solar power for public infrastructure lowers carbon emissions and encourages sustainable energy practices across Chennai. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Solar-energy-driven-street-illumination-and-civic-structures.svg",
//         },
//         {
//           id: 4,
//           title: "Large-scale metro growth lowering vehicle emissions",
//           para: " The growing metro system provides a more eco-friendly transit option, seeking to reduce road congestion and minimize air pollution from vehicles. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Large-scale-metro-growth-lowering-vehicle-emissions.svg",
//         },
//         {
//           id: 5,
//           title: "Revitalization of 15 significant lakes and rivers",
//           para: " Revitalizing essential water bodies aims to boost water quality, strengthen ecosystems, and enhance the city's ability to withstand water-related challenges. ",
//           imgs: "/images/Live-Images/SubPages/Icons/Revitalization-of-15-significant-lakes-and-rivers.svg",
//         },
//       ],
//     },
//   ];

//   const images = [
//     {
//       src: "/images/Live-Images/Cost-of-living.jpg",
//       title: "Cost-of-Living",
//       link: "/live/cost-of-living-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Residency.jpg",
//       title: "Residency",
//       link: "/live/residential-properties-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Employment.jpg",
//       title: "Employment",
//       link: "/live/employment-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/chennaiLifeEssential4.png",
//       title: "Transportation",
//       link: "/live/transportation-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Healthcare-banner.jpg",
//       title: "Healthcare",
//       link: "/live/healthcare-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
//       title: "Culture Religious",
//       link: "/live/worship-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Recreation.jpg",
//       title: "Recreation",
//       link: "/visit/things-to-do-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Neighbourhood.jpg",
//       title: "Neighbourhood",
//       link: "/live/places-near-chennai",
//     },
//     {
//       src: "/images/Live-Images/Quality-of-Life.jpg",
//       title: "Quality of Life",
//       link: "/live/quality-of-life-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Future-Growth-&-Development.jpg",
//       title: "Future Growth & Development",
//       link: "/live/infrastructure-development-in-chennai",
//     },
//     {
//       src: "/images/Live-Images/Educational-Institutions.jpg",
//       title: "Educational Insitiutions",
//       link: "/live/educational-institutions-in-chennai",
//     },
//   ];
//   // Custom Arrow Components
//   const PrevArrow = ({ onClick }) => (
//     <div onClick={onClick} className="ExplorePageLeftButton"></div>
//   );

//   const NextArrow = ({ onClick }) => (
//     <div className="ExplorePageRightButton" onClick={onClick}></div>
//   );

//   const settings = {
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY.current) {
//         setScrollDir("left");
//       } else {
//         setScrollDir("right");
//       }
//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div>
//         {/*----------------- Banner ----------------*/}
//         <div className="accaodomationBannerSection">
//           <img
//             src="/images/Live-Images/SubPages/Quality-of-Life-banner.jpg"
//             alt=""
//           />
//           <div className="accodoamationBannerContainer">
//             <div className="accodoamationBannerText">
//               <h3>Quality of Life</h3>
//               <div className="breadCrum">
//                 <Link to="/live-in-chennai"> Live </Link> - <a href="">Quality of Life</a>
//               </div>
//             </div>
//           </div>
//           <div className="notHomePageSearch">
//             <Search />
//           </div>
//         </div>

//         {/*----------------- Intro Section ----------------*/}
//         <div className="visitIntroParaSection detailIntro">
//           <div className="container max-w-7xl mx-auto px-4">
//             <div
//               className={`CostOflivingBackground ${
//                 scrollDir === "right"
//                   ? "scroll-rightCostofLiving"
//                   : "scroll-leftCostofLiving"
//               }`}
//               ref={bgTextRef}
//             >
//               <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
//             </div>
//             <div className="workIntro">
//               <h3>Quality of Life </h3>
//               <p>
//                 The living experience is characterized by a mix of tradition and
//                 modernity. Prominent features include strong safety, excellent
//                 healthcare access, and a solid education system. Although
//                 recreational areas and green spaces could see enhancements,
//                 their cultural vibrancy and robust infrastructure provide a
//                 largely favorable experience.{" "}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/*----------------- Multiple Benefit Sections ----------------*/}
//         {benefitSections.map((section, index) => (
//           <section
//             className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300
//     ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"}
//     ${
//       index % 3 === 0
//         ? "pattern-a"
//         : index % 3 === 1
//         ? "pattern-b"
//         : "pattern-c"
//     }`}
//             key={index}
//           >
//             <div className="clcscrlCol clcscrlLft relative">
//               <div className="clcscrlinLBox sticky top-0">
//                 <img src={section.image} alt={section.sectionTitle} />
//                 <div
//                   className={`clcscrLtitle relative ${
//                     index % 2 === 0 ? "bg-[#7d377c]" : "bg-[#672866]"
//                   }`}
//                 >
//                   <h2 className="flex flex-col text-white">
//                     <small>{section.sectionTitle}</small>
//                   </h2>
//                   <p>{section.sectionDesc}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="clcscrlCol clcscrlRight padbtm">
//               <div className="clcscrlinRBox MainSectionHovered">
//                 {section.benefits.map((item) => (
//                   <div key={item.id} className="clcboxItemss flex">
//                     <div className="clcboxIImg">
//                       <img src={item.imgs} alt={item.title} />
//                     </div>
//                     <div className="clcboxICont">
//                       <h3>{item.title}</h3>
//                       <p>{item.para}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         ))}

//         {/*--------------- Explore More Chennai----------------- */}

//         <div className="exploreSldierBg">
//           <div className="container max-w-7xl mx-auto px-4">
//             <div className="exploreMoreSectionContent">
//               <h4>CHENNAI LIFE ESSENTIALS</h4>
//               <p>
//                 Regardless of whether you have chosen Chennai to stay or move
//                 from one area to another area, Super Chennai will be the best
//                 guide to explore the essentials. So that you could easily live a
//                 lively and energetic life in Chennai.
//               </p>
//             </div>
//             <div className="exploreSldierSection">
//               <Slider {...settings}>
//                 {images.map((img, index) => (
//                   <div key={index} className="ExplorePageSliderImage">
//                     <a href={img.link} style={{ textDecoration: "none" }}>
//                       <div
//                         style={{
//                           position: "relative",
//                           borderRadius: "8px",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <img
//                           src={img.src}
//                           alt={`Slide ${index + 1}`}
//                           style={{
//                             width: "100%",
//                             height: "auto",
//                             display: "block",
//                           }}
//                         />
//                         {/* Gradient Background */}
//                         <div
//                           style={{
//                             position: "absolute",
//                             bottom: 0,
//                             left: 0,
//                             right: 0,
//                             height: "160px",
//                             background:
//                               "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
//                           }}
//                         ></div>

//                         {/* Title Text */}
//                         <div className="titleTextExploreChennai">
//                           {img.title}
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>

//         {/*----------------- Social & CTA ----------------*/}
//         <div className="AccomodationInstaReel">
//           <InstagramReelsMarquee />
//         </div>
//         <Becameavolunteer />
//       </div>
//     </>
//   );
// }
