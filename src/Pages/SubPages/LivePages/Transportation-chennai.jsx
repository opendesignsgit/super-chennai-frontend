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
import { motion, AnimatePresence } from "framer-motion";

export default function Transportationchennai() {
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

  const [isOpen, setIsOpen] = useState(false);

  const imageSrc = "/images/chennai-transit-map.jpg"; // replace with your image path

  const benefitSections = [
    {
      sectionTitle: "On Rail",
      sectionDesc:
        "Chennai offers a variety of local and district-specific transportation options. The railway is the most well-known mode of transportation. Check out the many rail transportation options here.",
      image: "/images/Live-Images/SubPages/On-Rail-Metro.jpg",
      imgAlt: "chennai metro",
      benefits: [
        {
          id: 1,
          title: "Chennai Metro",
          para: "The Chennai Metro is a modern, efficient, and air-conditioned transit system connecting major business hubs, residential areas, and transit points. With smart ticketing and expanding routes, it offers a fast, comfortable, and traffic-free way to navigate the city.",
          imgs: "/images/Live-Images/SubPages/Icons/chennai-metro.svg",
          imgAlt: "",
        },
        {
          id: 2,
          title: "Chennai Suburban Local Trains",
          para: "Chennai’s suburban train network is an essential part of the city’s public transport system, offering fast, budget-friendly travel across major urban and suburban regions.",
          points: [
            <>
              <strong>Beach to Tambaram – </strong> A high-traffic route linking
              central Chennai to the southern residential belt
            </>,
            <>
              <strong> Chennai Central to Arakkonam – </strong> Serves the
              western corridor and key industrial areas
            </>,
            <>
              <strong> Tambaram to Chengalpattu – </strong> Connects southern
              suburbs to growing satellite towns
            </>,
          ],
          note: "With frequent schedules and low fares, these trains are a go-to option for daily commuters, students, and long-distance city travelers.",
          imgs: "/images/Live-Images/SubPages/Icons/Suburban-Rail-Services.svg",
          imgAlt: "",
        },
      ],
      tenantInfoSections: [
        {
          title: "Essential Tips for First-Time Renters in Chennai",
          points: [
            <>
              <strong>Rent & Advance</strong> Most landlords request 3–6 months'
              rent as advance. Always insist on a written rental agreement with
              clearly defined conditions
            </>,
            <>
              <strong>Location Matters</strong> Pick a locality close to your
              workplace or college with good access to public transport. This
              reduces commute stress and improves day-to-day convenience
            </>,
            <>
              <strong>Check the Essentials</strong>Ensure the property has
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
      sectionTitle: "On Road",
      sectionDesc:
        "Chennai offers comprehensive vehicle and bus services to all parts of the city and beyond for a variety of travel needs. Roadways continue to be a significant and developing form of transportation.",
      image: "/images/Live-Images/SubPages/On-Road.jpg",
      imgAlt: "chennai road way",
      benefits: [
        {
          id: 1,
          title: "MTC Bus Services",
          para: "Chennai’s Metropolitan Transport Corporation (MTC) runs one of India’s largest bus networks. With over 3,000 buses, it ensures affordable and reliable travel across the city—connecting homes, workplaces, transit points, and major landmarks efficiently.",
          imgs: "/images/Live-Images/SubPages/Icons/MTC-Bus-System.svg",
           imgAlt:"",
        },
        {
          id: 2,
          title: "Mini Bus Services",
          para: "Mini buses operate on shorter routes within residential areas and less accessible localities. They provide convenient transport to nearby main roads, metro stations, and local markets—making everyday travel easier, especially in interior and densely populated neighborhoods.",
          imgs: "/images/Live-Images/SubPages/Icons/mini-bus.svg",
           imgAlt:"",
        },
      ],
    },
    {
      sectionTitle: "Autos & Share-autos",
      sectionDesc:
        "In Chennai, share autos run along fixed local routes at affordable fares, offering quick access across neighbourhoods. Auto-rickshaws provide flexible, on-demand travel—ideal for navigating residential areas, reaching transit hubs, and moving between key city points with ease.",
      image: "/images/Visit-Images/SubPages/local-rhythm.jpg",
      imgAlt: "",
      benefits: [
        {
          id: 1,
          title: "Car Rentals in Chennai",
          para: "Chennai offers both self-drive and chauffeur-driven car rentals for flexible travel. Ideal for business trips, weekend getaways, or family outings, these services provide comfort, convenience, and independence without depending on public transport or ride-hailing apps.",
          imgs: "/images/Live-Images/SubPages/Icons/Cabs-via-Apps.svg",
           imgAlt:"",
        },
        {
          id: 1,
          title: "App-Based Mobility in Chennai",
          para: "Chennai offers app-based travel options through services like Ola, Uber, and Rapido. From air-conditioned cabs to convenient autos and two-wheeler rides, these platforms provide safe, trackable, and cashless commuting across the city at your fingertips.",
          imgs: "/images/Live-Images/SubPages/Icons/Cabs-via-Apps.svg",
           imgAlt:"",
        },
      ],
    },
    {
      sectionTitle: "Getting a Driver’s License in Chennai",
      sectionDesc:
        "Chennai offers app-based travel options through services like Ola, Uber, and Rapido. From air-conditioned cabs to convenient autos and two-wheeler rides, these platforms provide safe, trackable, and cashless commuting across the city at your fingertips.",
      label: (
        <>
          To legally drive in Chennai, individuals must apply through the
          Regional Transport Office (RTO). The process includes a learner’s
          license, driving test, and document verification. Both two-wheeler and
          four-wheeler licenses are available to eligible applicants.{" "}
          <a
            href="https://parivahan.gov.in/parivahan//en"
            target="_blank"
            rel="noopener noreferrer"
            class="text-voilet-500 underline"
          >
            Apply for a drivers license{" "}
          </a>
        </>
      ),
      image:
        "/images/Live-Images/SubPages/Private-Enterprises &-Intelligent-Transportation-1.jpg",
      imgAlt: "",
      benefits: [
        {
          id: 1,
          title: "Eligibility for a Driver’s License in Chennai",
          imgs: "/images/Live-Images/SubPages/Icons/Donts.svg",
          imgAlt: "",
          points: [
            <>
              Minimum age is 18 years for motor vehicles (LMV – Light Motor
              Vehicle)
            </>,
            <>For gearless two-wheelers under 50cc, minimum age is 16 years.</>,
            <>
              Must hold a valid learner’s license before applying for a
              permanent license.
            </>,
            <>
              Required documents include proof of age, address, and identity.
            </>,
            <>
              Applicants must pass a driving test conducted by the Regional
              Transport Office (RTO).
            </>,
          ],
        },
        {
          id: 2,
          title: "Do’s – Smart Steps for Getting Licensed in Chennai",
          imgs: "/images/Live-Images/SubPages/Icons/Donts.svg",
          imgAlt: "",
          points: [
            <>
              <strong>Book your RTO slot online in advance </strong>through the
              official Parivahan or Tamil Nadu RTO portal.
            </>,
            <>
              <strong>Carry original documents along with photocopies</strong>—
              especially Aadhaar, proof of residence, and learner’s license.
            </>,
            <>
              <strong>Take the learner’s test seriously </strong>it’s online but
              time-bound with multiple-choice questions.
            </>,
            <>
              <strong>Choose a trusted driving school </strong>if you're
              unfamiliar with city traffic rules or need help navigating RTO
              formalities.
            </>,
            <>
              <strong>Be presentable and respectful at the RTO </strong>your
              road test could be observed casually too.
            </>,
          ],
        },
        {
          id: 3,
          title: "Don’ts – Common Mistakes to Avoid",
          imgs: "/images/Live-Images/SubPages/Icons/Donts.svg",
          imgAlt: "",
          points: [
            <>
              <strong>Don’t rely on middlemen or unofficial agents </strong>
              promising quick approvals — it's risky and often illegal.
            </>,
            <>
              <strong>Don’t arrive late for your driving test slot </strong>—
              late arrivals may need to rebook and wait weeks.
            </>,
            <>
              <strong>
                Don’t skip lane discipline or indicators during the test{" "}
              </strong>
              even a minor mistake can lead to disqualification.
            </>,
            <>
              <strong>
                Don’t assume an automatic pass if you're with a driving school{" "}
              </strong>{" "}
              RTO officers still assess each candidate individually.
            </>,
            <>
              <strong>
                Don’t forget to pay the fee online and carry the receipt{" "}
              </strong>
              missing proof delays the process.
              {/* <a href="https://www.dubai.ae/web/dubai.ae/driving-transportation"  target="_blank" rel="noopener noreferrer" class="text-voilet-500 underline">driving-transportation</a>  
<a href="https://www.rta.ae/wps/portal/rta/ae/public-transport?"  target="_blank" rel="noopener noreferrer" class="text-voilet-500 underline">public-transport</a>
<a href="https://www.rta.ae/wps/portal/rta/ae/public-transport/metro-stations-map"  target="_blank" rel="noopener noreferrer" class="text-voilet-500 underline">metro-stations-map</a> */}
            </>,
          ],
        },
      ],
    },
  ];

  const mrtStations = [
    {
      mo: "Beach",
      s1: "Chennai Beach",
      s2: "Chennai Central",
      s3: "Chennai Central",
    },
    { mo: "Fort", s1: "Chennai Fort", s2: "Basin Bridge", s3: "Washermanpet" },
    {
      mo: "Park Town",
      s1: "Chennai Park",
      s2: "Vyasarpadi Jeeva",
      s3: "Royapuram",
    },
    {
      mo: "Chintadripet",
      s1: "Chennai Egmore",
      s2: "Perambur",
      s3: "Korukkupet",
    },
    {
      mo: "Chepauk",
      s1: "Chetpet",
      s2: "Perambur Carriage Works",
      s3: "Tondiarpet",
    },
    {
      mo: "Thiruvallikeni",
      s1: "Nungambakkam",
      s2: "Perambur Loco Works",
      s3: "Tondiarpet Metro",
    },
    {
      mo: "Light House",
      s1: "Kodambakkam",
      s2: "Villivakkam",
      s3: "Tiruvottiyur",
    },
    { mo: "Mundakakanni Amman Koil", s1: "Mambalam", s2: "Korattur", s3: "" },
    { mo: "Thirumayilai", s1: "Saidapet", s2: "Pattaravakkam", s3: "" },
    { mo: "Mandaveli", s1: "Guindy", s2: "Ambattur", s3: "" },
    {
      mo: "Greenways Road",
      s1: "St. Thomas Mount",
      s2: "Tirumullaivoyal",
      s3: "",
    },
    { mo: "Kotturpuram", s1: "Palavanthangal", s2: "Annanur", s3: "" },
    { mo: "Kasturibai Nagar", s1: "Meenambakkam", s2: "Avadi", s3: "" },
    { mo: "Indira Nagar", s1: "Tirusulam (Airport)", s2: "", s3: "" },
    { mo: "Thiruvanmiyur", s1: "Minambakkam", s2: "", s3: "" },
    { mo: "Taramani", s1: "Pallavaram", s2: "", s3: "" },
    { mo: "Perungudi", s1: "Chromepet", s2: "", s3: "" },
    { mo: "Velachery", s1: "Tambaram Sanatorium", s2: "", s3: "" },
    { mo: "", s1: "Tambaram", s2: "", s3: "" },
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Live-Images/SubPages/Residency-banner.jpg" alt="residency in chennai" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Transportation </h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Transportation </a>
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
              <h3>Transportation</h3>
              <p>
                Public transportation in Chennai is managed by various
                government bodies, offering an extensive network that connects
                all parts of the city. Key modes include the Chennai Metro Rail,
                Local trains, suburban trains, MTC buses, and Mini bus services.
                The metro is a fast-growing, modern option for daily commuters,
                while the bus system covers a wide range of routes at affordable
                fares. Suburban trains link the city to outer zones and
                neighboring districts, making it easier for thousands of
                residents to travel efficiently.
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
                <img src={section.image} alt={section.imgAlt} />
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
                      {item.points && (
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                          {item.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {item.note && <p className="mt-2 ">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant Info Sections for this benefit section */}
            {/* <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList">
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
            </div> */}

            <div className="mapingImage">
              {/* Normal Image */}
              <img
                src={imageSrc}
                alt="chennai transmit"
                className="w-64 small h-64 object-cover rounded-2xl cursor-pointer shadow hover:scale-105 transition-transform"
                onClick={() => setIsOpen(true)}
              />

              {/* Modal Popup */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 bigpop"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="bg-white rounded-2xl p-4 max-w-lg w-full relative bigpopIn"
                      onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
                    >
                      <img
                        src={imageSrc}
                        alt="chennai transmit"
                        className="w-full h-auto rounded-xl mb-4"
                      />
                      {/* New Section Below Image */}
                      <div className="space-y-2 text-center">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="  text-white px-4 py-2 rounded-lg transition popclose flex items-center justify-center"
                        >
                          <img
                            alt="Close"
                            src="/images/close-btn.png"
                            className="closeImg"
                          />
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="visitTable">
              <table className="min-w-full border border-gray-300 rounded-lg mb-6">
                <thead>
                  <tr>
                    <th className=" px-2 py-1 border-b">MRTS (MO)</th>
                    <th className="  px-2 py-1 border-b">S1 – South (Red)</th>
                    <th className=" px-2 py-1 border-b">S2 – West (Green)</th>
                    <th className=" px-2 py-1 border-b">S3 – North (Blue)</th>
                  </tr>
                </thead>
                <tbody>
                  {mrtStations.map((station, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className=" px-2 py-1 border-b">
                        {station.mo || "-"}
                      </td>
                      <td className=" px-2 py-1 border-b">
                        {station.s1 || "-"}
                      </td>
                      <td className=" px-2 py-1 border-b">
                        {station.s2 || "-"}
                      </td>
                      <td className=" px-2 py-1 border-b">
                        {station.s3 || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {benefitSections1.map((section, index) => (
          <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white #7d377" : "bg-[#7d377d] colorbgsec"} 
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
                <img src={section.image} alt={section.imgAlt} />
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
                      {item.points && (
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                          {item.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {item.note && <p className="mt-2 ">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant Info Sections for this benefit section */}
            {/* <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList">
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
            </div> */}
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
