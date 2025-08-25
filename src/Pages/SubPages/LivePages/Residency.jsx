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
import { Helmet, HelmetProvider } from "react-helmet-async";
import LiveSlider from "./LiveSlider";

export default function Residency() {
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

  const benefitSections = [
    {
      sectionTitle: "Budget-Friendly Living",
      sectionDesc: "",
      image: "/images/Live-Images/SubPages/Budget-Friendly-Living.jpg",
      benefits: [
        {
          id: 1,
          title: "Rent:",
          para: "For those looking for flats for rent in Chennai, areas like Tambaram, Medavakkam, and West Mambalam offer a great balance of affordability and connectivity. These neighborhoods are especially popular among students, young professionals, and families just getting started.",
          imgs: "/images/Live-Images/SubPages/Icons/rent.svg",
        },
        {
          id: 2,
          title: "Purchase:",
          para: "If you're planning to buy apartments in Chennai, fast-developing locations like Chrompet, Madhavaram, OMR, and Porur provide promising investment potential with solid infrastructure growth, ideal for first-time buyers and long-term investors alike.",
          imgs: "/images/Live-Images/SubPages/Icons/Purchase.svg",
        },
      ],
      tenantInfoSections: [
        {
          title: "Essential Tips for First-Time Renters in Chennai",
          points: [
            <>
              <strong>Rent & Advance:</strong> Most landlords request 3–6
              months' rent as advance. Always insist on a written rental
              agreement with clearly defined conditions
            </>,
            <>
              <strong>Location Matters:</strong> Pick a locality close to your
              workplace or college with good access to public transport. This
              reduces commute stress and improves day-to-day convenience
            </>,
            <>
              <strong>Check the Essentials:</strong> Ensure the property has
              uninterrupted water and power supply. Also check for nearby
              essentials like grocery stores, clinics, ATMs, and pharmacies.
            </>,
          ],
        },
      ],
    },

  ];
  const benefitSections1 = [
    {
      sectionTitle: " Mid-Range Living",
      sectionDesc: "",
      image: "/images/Live-Images/SubPages/Mid-Range-Living.jpg",
      benefits: [
        {
          id: 1,
          title: "Rent:",
          para: "For those seeking well-connected and comfortable apartments for rent in Chennai, areas like T. Nagar and Mylapore offer just the right mix of city buzz and residential calm. With access to schools, shopping, and transport, these neighborhoods suit both families and professionals.",
          imgs: "/images/Live-Images/SubPages/Icons/Purchase.svg",
        },
        {
          id: 2,
          title: "Purchase:",
          para: "Planning to buy flats in Chennai? Mid-range zones like Velachery and Vadapalani offer homes in gated communities with lifestyle amenities—ideal for those upgrading their space or settling down in a dynamic yet grounded environment.",
          imgs: "/images/Live-Images/SubPages/Icons/Purchase.svg",
        },
      ],
      tenantInfoSections: [
        {
          title: "Essential Tips for First-Time Renters in Chennai",
          points: [
            <>
              <strong>Rent & Advance:</strong> Most landlords request 3–6
              months' rent as advance. Always insist on a written rental
              agreement with clearly defined conditions
            </>,
            <>
              <strong>Location Matters:</strong> Pick a locality close to your
              workplace or college with good access to public transport. This
              reduces commute stress and improves day-to-day convenience
            </>,
            <>
              <strong>Check the Essentials:</strong> Ensure the property has
              uninterrupted water and power supply. Also check for nearby
              essentials like grocery stores, clinics, ATMs, and pharmacies.
            </>,
          ],
        },
      ],
    },
  ];
  const benefitSections2 = [
    {
      sectionTitle: "Premium Living",
      sectionDesc: "",
      image: "/images/Live-Images/SubPages/Premium-Living.jpg",
      benefits: [
        {
          id: 1,
          title: "Rent:",
          para: "From Anna Nagar and Nungambakkam to Adyar, Thiruvanmiyur, and Poes Garden, discover a curated selection of premium apartments for rent in Chennai that blend elegance, comfort, and privacy. Ideal for CXOs, expats, and dignitaries, these upscale residences are located in some of the city's most prestigious and well-connected neighbourhoods.",
          imgs: "/images/Live-Images/SubPages/Icons/Purchase.svg",
        },
        {
          id: 2,
          title: "Purchase:",
          para: "Looking to buy luxury villas in Chennai? Explore elite addresses along OMR, Boat Club Road, and the scenic ECR coastline—where sea-facing homes, gated estates, and architecturally designed villas deliver a lifestyle defined by exclusivity, indulgent amenities, and timeless sophistication.",
          imgs: "/images/Live-Images/SubPages/Icons/Purchase.svg",
        },
      ],
      tenantInfoSections: [
        {
          title: "For Buyers:",
          points: [
            <>
              Know the Market: Explore price trends in different
              areas—budget-friendly to premium zones.
            </>,
            <>
              Verify Documents: Ensure clear land titles, building approvals,
              and RERA registration.
            </>,
            <>
              Consider Connectivity: Choose locations with good access to
              transit, work hubs, and essential services.
            </>,
            <>
              Think Long-Term: Assess future development potential for better
              ROI.
            </>,
            <>
              Choose Reputed Builders: For transparency, quality, and timely
              delivery.
            </>,
          ],
        },
        {
          title: "For Tenants:",
          points: [
            <>
              Understand Advance & Lease Terms: Advances typically range from
              5–10 months. Review agreement clauses.
            </>,
            <>
              Check Utilities & Amenities: Ensure water, electricity, and
              maintenance are reliable.
            </>,
            <>Inspect the Neighborhood: Access to daily needs.</>,
            <>
              Document Everything: Get a written rental agreement with clearly
              defined responsibilities.
            </>,
          ],
        },
      ],
    },
  ];

  const imageSections = [];

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
      <Helmet>
        <title>
          {/* Super Chennai | Properties to Buy or Rent in Chennai */}
          Residential properties in Chennai - Super Chennai

          
          </title>
        <meta
          name="description"
          content="Super Chennai provides insights on residential property in Chennai, highlighting market updates, local trends, and factors that guide smart housing choices."
        />
        <link rel="canonical" href="/live/residential-properties-in-chennai" />
      </Helmet>
      <div className="residencyPage">
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Live-Images/SubPages/Residency-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Residency </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> - <a href="">Residency </a>
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
              <h3>Living in Chennai - Residential Properties in Chennai</h3>
              <p>
                Chennai is a city that welcomes all, with a wide spectrum of
                housing options tailored to suit diverse lifestyles and budgets.
                Whether you're a local resident, a relocating professional, or
                an NRI returning home, Chennai offers homes that align with your
                needs, be it for rent or ownership. From functional budget
                apartments to elegant luxury villas, the city blends culture,
                connectivity, and comfort across every neighborhood.
              </p>
            </div>

            <div className="LiveMainContent">
              <h3>Why Living in Chennai is the Best Choice</h3>
            </div>
            <div className="workIntro">
              <p>
                Chennai offers a rare blend of tradition and modernity, making
                it one of the most livable cities in India. From its rich
                cultural heritage and thriving job market to its strong
                infrastructure and coastal charm, Chennai continues to attract
                people from all walks of life.
              </p>
              <p>
                Whether you're a working professional, a growing family, or
                someone seeking a serene retirement, the city offers a lifestyle
                that suits every need. With a wide array of housing options —
                from gated community apartments in Chennai that offer security
                and community living, to premium flats in Chennai equipped with
                modern amenities, and even luxury villas in Chennai designed for
                spacious, high-end comfort — there's a perfect home for every
                aspiration.
              </p>
              <p>
                Add to that excellent educational institutions, world-class
                healthcare, reliable public transport, and an ever-expanding IT
                and industrial corridor, and you have a city that promises both
                opportunity and quality of life. It's no wonder more people are
                choosing Chennai not just to work, but to truly live.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
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
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered ">
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
        ))}

        {benefitSections1.map((section, index) => (
          <section
            // style={{background:"#7d377c"}}
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-[#7d377d]" : "bg-[#7d377d] colorbgsec"} 
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
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered ">
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
        ))}

        {benefitSections2.map((section, index) => (
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
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered ">
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

            {/* Tenant Info Sections for this benefit section */}
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList">
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-2">{tenant.title}</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {tenant.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        {imageSections.map((section, index) => (
          <section
            key={`imgcontent-${index}`}
            className="imgcontent flex flex-wrap justify-center transition-colors duration-300"
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

            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
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

        {/*--------------- Explore More Chennai----------------- */}

        <LiveSlider/>

      
        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
