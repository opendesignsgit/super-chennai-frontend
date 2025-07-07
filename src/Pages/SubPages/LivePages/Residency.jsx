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
      sectionTitle: "Chennai’s Most Liveable Rental Spaces",
      sectionDesc:
        "",
      image: "/images/Live-Images/SubPages/Rental-Properties-in-Chennai.jpg",
      benefits: [
        {
          id: 1,
          title: "Budget-Friendly Rental Areas",
          para: "Chennai offers several well-connected neighbourhoods where rent remains affordable without compromising on access to schools, transit, and daily conveniences. These localities are ideal for professionals, students, and families seeking value and comfort.",
          para: "Chennai offers several well-connected neighbourhoods where rent remains affordable without compromising on access to schools, transit, and daily conveniences. These localities are ideal for professionals, students, and families seeking value and comfort.",
          imgs: "/images/Live-Images/SubPages/Icons/Economical-Rental-Regions.svg",
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
          imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
        },
      ],
      tenantInfoSections: [
        {
          title: "Essential Tips for First-Time Renters in Chennai",
          points: [
            <>
            <strong>Rent & Advance</strong> Most landlords request 3–6 months' rent as advance. Always insist on a written rental agreement with clearly defined conditions 
            </>,
            <>
            <strong>Location Matters</strong> Pick a locality close to your workplace or college with good access to public transport. This reduces commute stress and improves day-to-day convenience
            </>,
            <>
            <strong>Check the Essentials</strong>Ensure the property has uninterrupted water and power supply. Also check for nearby essentials like grocery stores, clinics, ATMs, and pharmacies.
            </>,
          ],
        },
      ],
    },
    // {
    //   sectionTitle: "Properties for purchase in Chennai",
    //   sectionDesc:
    //     "In comparison to other districts in Tamil Nadu, purchasing property in Chennai is somewhat expensive. However, it is also worthwhile. Depending on your budget, there are many homes you can purchase by touring the properties.",
    //   image:
    //     "/images/Live-Images/SubPages/Properties-for-purchase-in-Chennai.jpg",
    //   benefits: [
    //     {
    //       id: 1,
    //       title: "Budget-Friendly Housing",
    //       para: " Areas such as Poonamallee, OMR, and Perungudi provide economical properties for sale, with costs for 1BHK apartments beginning at approximately ₹30 lakhs and 2BHKs at about ₹60 lakhs",
    //       imgs: "/images/Live-Images/SubPages/Icons/Budget-Friendly-Housing.svg",
    //     },
    //     {
    //       id: 2,
    //       title: "Mid-Range Choices",
    //       para: "Locations like Anna Nagar, Adyar, and Velachery present 2BHK flats ranging from ₹70 lakhs to ₹1.5 crore. Here, villas and gated neighborhoods are also prevalent.",
    //       imgs: "/images/Live-Images/SubPages/Icons/Mid-Range-Choices.svg",
    //     },
    //     {
    //       id: 3,
    //       title: "Premium Properties",
    //       para: "High-end areas such as Nungambakkam, Mylapore, and T Nagar feature luxury apartments and standalone houses beginning at ₹2 crore, with certain properties surpassing ₹10 crore depending on their location and amenities.",
    //       imgs: "/images/Live-Images/SubPages/Icons/Premium-Properties.svg",
    //     },
    //   ],
    //   tenantInfoSections: [
    //     {
    //       title: "Important Factors for Purchasers",
    //       points: [
    //         <>
    //           <strong>Location:</strong> Being near business areas, educational
    //           institutions, healthcare facilities, and transport is essential.
    //         </>,
    //         <>
    //           <strong>Legal Verification:</strong> Confirm thorough due
    //           diligence concerning property documentation, ownership, and clear
    //           titles.
    //         </>,
    //         <>
    //           <strong>Funding:</strong> Investigate mortgage choices with
    //           different banks, since home loans are readily accessible for
    //           qualifying purchasers.
    //         </>,
    //         <>
    //           <strong>Value Growth:</strong> Properties located in
    //           well-established neighborhoods usually increase in value more
    //           rapidly than those in less developed regions.
    //         </>,
    //       ],
    //     },
    //   ],
    // },
  ];

  const imageSections = [
    // {
    //   sectionTitle: "Learners",
    //   sectionDesc:
    //     "If you are a student arriving in Chennai for your studies and prefer not to live in a PG or hostel, you might consider renting a place in Chennai close to your college.",
    //   image: "/images/Live-Images/SubPages/Learners.jpg",
    //   tenantInfoSections: [
    //     {
    //       points: [
    //         {
    //           title: "Essential Factors for Students",
    //           para: [
    //             <>
    //               Verify if you can pay the rental deposit or rent accurately.
    //             </>,
    //             <>
    //               Find out if your college is located close to your housing or
    //               not.
    //             </>,
    //             <>
    //               Learn about the additional fees for internet, water services,
    //               electricity bills, and so on.
    //             </>,
    //           ],
    //           imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
    //         },
    //       ],
    //     },
    //     {
    //       points: [
    //         {
    //           title: "Trends and Insights in the Market",
    //           para: [
    //             <>
    //               Chennai's property market has been consistently expanding due
    //               to a need for both rental and purchase real estate.
    //             </>,
    //             <>
    //               As the demand for office spaces rises, nearby residential
    //               neighborhoods have experienced a surge in rental and buying
    //               costs.
    //             </>,
    //             <>
    //               Gated neighborhoods and move-in-ready homes are becoming
    //               increasingly popular with purchasers
    //             </>,
    //           ],
    //           imgs: "/images/Live-Images/SubPages/Icons/Affordable-Rent.svg",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
      link: "/costofliving",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/residencypropertyrentbuyinchennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/employmentinchennai",
    },
    {
      src: "/images/Live-Images/chennaiLifeEssential4.png",
      title: "Transportation",
      link: "/transportation",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/healthcare",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/culturereligiousattractions",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/recreation",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/neighbourhood",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/qualityoflife",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/futuregrowthdeveloping",
    },
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Eduational Insitiutions",
      link: "/educationinstitutions",
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Live-Images/SubPages/Residency-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Residency </h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> - <a href="">Residency </a>
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
              <h3>Residency - Property to Rent or Buy in Chennai</h3>
              <p>
                Chennai is famous for real estate, and if you're seeking
                properties to rent or purchase based on your requirements, make
                sure to learn the specifics before making a choice here in Super
                Chennai. From plots to villas and low prices to high earnings,
                Chennai provides real estate options for all.
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

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>CHENNAI LIFE ESSENTIALS</h4>
              <p>
                Regardless of whether you have chosen Chennai to stay or move
                from one area to another area, Super Chennai will be the best
                guide to explore the essentials. So that you could easily live a
                lively and energetic life in Chennai.
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
