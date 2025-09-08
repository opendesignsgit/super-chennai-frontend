import { useState, useEffect, useRef } from "react";
import "../assets/Css/Invest.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Utilitiesinchennai1 from "../Components/InvestSideBar";
import SEO from "../Components/SEO";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Invest() {
  const [scrollDir, setScrollDir] = useState("left");
  const navigate = useNavigate();

  const InvestSections = [
    {
      title: "Digital",
      description:
        "Empowering communities through technology and digital literacy programs. Invests help bridge the digital divide by offering training and access to tools.",
      image: "/images/Invest-Images/BacameAvolunterImage0.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/digital",
    },
    {
      title: "Education",
      description:
        "Promoting education for all through tutoring, mentorship, and resources. Be a part of shaping young minds and building brighter futures.",
      image: "/images/Invest-Images/BacameAvolunterImage1.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/education",
    },
    {
      title: "Health",
      description:
        "Supporting health and wellness with awareness campaigns and aid drives. Join us in making essential healthcare accessible to those in need.",
      image: "/images/Invest-Images/BacameAvolunterImage2.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/health",
    },
    {
      title: "Environment",
      description:
        "Investing toward a cleaner, greener planet through sustainable initiatives. Your actions can help preserve nature for future generations.",
      image: "/images/Invest-Images/BacameAvolunterImage3.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "Women Empowerment",
      description:
        "Advocating for women's rights and helping them build sustainable futures. Support equality and uplift communities by enabling women.",
      image: "/images/Invest-Images/BacameAvolunterImage4.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/women",
    },
    {
      title: "Youth Development",
      description:
        "Creating programs that inspire and guide the youth to be future leaders. Help nurture talents and open doors for young individuals.",
      image: "/images/Invest-Images/BacameAvolunterImage1.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/youth",
    },
    {
      title: "Disaster Relief",
      description:
        "Providing timely aid and rehabilitation to those affected by natural disasters. Be a lifeline when it matters most with your support.",
      image: "/images/Invest-Images/BacameAvolunterImage0.png",
      imgAlt: "",
      linkText: "Enquire Now",
      linkUrl: "/relief",
    },
  ];

  const investItems = [
    {
      title: "Realestate",
      subtitle: "Residential & Commercial",
      description:
        "Due to rising property values and the need for rental space in cities, real estate investments in Chennai could provide attractive returns. Both residential and commercial prospects were abundant.",
      image: "/images/Invest-Images/Icons/realesate-icon.svg",
      imgAlt: "",
      link: "/invest/chennai-real-estate",
    },
    {
      title: "Franchise",
      // subtitle: "software & hardware",
      description:
        "Profit from established brands and local market knowledge through franchising. Investing in a franchise in Chennai would provide you with a quicker path to becoming an entrepreneur in this city's economy.",
      image: "/images/Invest-Images/Icons/franchise-icon.svg",
      imgAlt: "",
      link: "/invest/franchise-business-in-chennai",
    },
    {
      title: "STARTUPS ",
      // subtitle: "hospitals & wellness",
      description:
        "Unlike service-based startups, making a product-based investment requires an initial payment. In any case, you can quickly locate your target audience in this city and increase your return on investment.",
      image: "/images/Invest-Images/Icons/startups-icon.svg",
      imgAlt: "",
      link: "/invest/startup-companies-in-chennai",
    },
    {
      title: "RENEWABLE ENERGY",
      subtitle: "SOLAR & WIND ",
      description:
        "Existing investment opportunities in government-initiated and driven wind and solar projects. It can help create a more environmentally friendly future while taking advantage of a growing market.",
      image: "/images/Invest-Images/Icons/renewable-icon.svg",
      imgAlt: "",
      link: "/invest/solar-companies-in-chennai",
    },
    {
      title: "RETIRE",
      // subtitle: "malls & outlets",
      description:
        "Chennai retirement provides a thriving cultural scene and good healthcare. Investing in this area promises a pleasant living in a friendly community and meets the rising need for senior-friendly accommodation.",
      image: "/images/Invest-Images/Icons/retire-icon.svg",
      imgAlt: "",
      link: "/invest/retirement-in-chennai",
    },
    {
      title: "GOVERNMENT INITIATIVES",
      // subtitle: "hotels & resorts",
      description:
        "Through laws, infrastructure development, and taxation, the TN government encourages investment in Chennai. Focusing on industries like manufacturing and renewable energy will increase economic growth and create jobs.",
      image: "/images/Invest-Images/Icons/government-icon.svg",
      imgAlt: "",
      link: "/invest/government-projects-in-chennai",
    },
    {
      title: "FORMALITIES & REGULATIONS",
      // subtitle: "industrial growth",
      description:
        "Navigating legal systems, such as company registration and environmental permits, is part of investing in Chennai. To make these requirements easier, government organizations provide online portals and instruction.",
      image: "/images/Invest-Images/Icons/formalities-icon.svg",
      imgAlt: "",
      link: "/invest/law-firms-in-chennai",
    },
    {
      title: "NEWS",
      // subtitle: "banks & fintech",
      description:
        "Chennai's increasing investment in industries like data centers and electric cars has been highlighted in recent headlines. Stay up-to-date on business news to learn about the most recent advancements and prospects.",
      image: "/images/Invest-Images/Icons/news-icon.svg",
      imgAlt: "",
      link: "/invest/news-in-chennai",
    },
    {
      title: "EVENTS",
      // subtitle: "mobility & logistics",
      description:
        "A number of corporate conferences, industry-specific seminars, and investment summits are held in Chennai. These gatherings offer chances for networking, information about new industries, and stages for exhibiting investment possibilities.",
      image: "/images/Invest-Images/Icons/events-icon.svg",
      imgAlt: "",
      link: "/invest/chennai-events",
    },
    {
      title: "EXHIBITIONS",
      subtitle: "PROPERTY, AUTOMOBILE ",
      description:
        "Investors have the opportunity to evaluate industry trends and uncover potential enterprises by attending these events, which feature goods, innovations, and possible collaborations.",
      image: "/images/Invest-Images/Icons/exhibition-icon.svg",
      imgAlt: "",
      link: "/invest/exhibitions-in-chennai",
    },
  ];

  const buildingData = [
    {
      title: "Startups",
      category: "Real Estate",
      description:
        "If you have expertise in any service or product, you can start your own business in an area where your target market is present and you can begin making money from the service you offer.",
      image: "/images/Invest-Images/SubPages/startup.jpg",
      imgAlt: "startup chennai",
      link: "/investstartupschennai#InvestId",
    },
    {
      title: "Franchise",
      category: "Real Estate",
      description:
        "To increase their brand recognition, several brands open franchise across Chennai. In Chennai, several businesses are seeking investors to build franchises and offer training to operate them.",
      image:
        "/images/Invest-Images/SubPages/Food-and-Beverage/coffee-shops.jpg",
      imgAlt: "",
      link: "/investfranchisechennai#InvestId",
    },
    {
      title: "Renewable Energy",
      category: "Real Estate",
      description:
        "Chennai offers a wealth of Renewable Energy investment prospects. Investigate wind energy along the shore. Study up on waste-to-energy. ",
      image: "/images/Invest-Images/SubPages/solar/rooftop.jpg",
      imgAlt: "solar companies in chennai",
      link: "/investrenewableenergychennai#InvestId",
    },
    {
      title: "Real Estate",
      category: "Real Estate",
      description:
        "Since Chennai is a big metropolis, real estate values have skyrocketed.",
      image: "/images/Invest-Images/SubPages/real.jpg",
      imgAlt: "realestate chennai",
      link: "/chennairealestate#InvestId",
    },

    {
      title: "Retirement ",
      category: "Startups",
      description:
        "Every older individual plans to spend their retirement in a contented and tranquil setting. For older folks, Chennai will be the ideal destination for relaxation and exploration.",
      image: "/images/Visit-Images/SubPages/Retirement-img.jpg",
      imgAlt: "retirement community in chennai",
      link: "/investretirementchennai#InvestId",
    },
  ];
  const benefitSections = [
    {
      sectionTitle: "Chennai’s Most Liveable Rental Spaces",
      sectionDesc: "",
      image: "/images/Live-Images/SubPages/Rental-Properties-in-Chennai.jpg",
      imgAlt: "",
      benefits: [
        {
          id: 1,
          title: "Budget-Friendly Rental Areas",
          para: "Chennai offers several well-connected neighbourhoods where rent remains affordable without compromising on access to schools, transit, and daily conveniences. These localities are ideal for professionals, students, and families seeking value and comfort.",
          para: "Chennai offers several well-connected neighbourhoods where rent remains affordable without compromising on access to schools, transit, and daily conveniences. These localities are ideal for professionals, students, and families seeking value and comfort.",
          imgs: "/images/Invest-Images/Icons/High-Potential-Growth-Economy.svg",
          imgAlt: "",
        },
        {
          id: 2,
          title: "Mid-Tier Residential Zones",
          para: "Chennai’s mid-range rental areas strike the perfect balance between affordability and lifestyle—offering solid connectivity, quality housing, and access to daily conveniences. Neighbourhoods like T. Nagar, Vadapalani, Porur, and Velachery are among the city’s most preferred choices for comfortable urban living.",
          imgs: "/images/Live-Images/SubPages/Icons/Mid-Range-Areas.svg",
          imgAlt: "",
        },
        {
          id: 3,
          title: "Prestigious Neighbourhoods",
          para: "Chennai’s most exclusive residential pockets offer more than just prime addresses—they embody sophistication, world-class infrastructure, and refined living. Areas like Boat Club, Poes Garden, ECR, Nungambakkam, and RA Puram represent the city’s finest lifestyle experiences, seamlessly blending heritage, privacy, and modern luxury.",
          imgs: "/images/Live-Images/SubPages/Icons/Prestigious-neighborhood.svg",
          imgAlt: "",
        },
      ],
      tenantInfoSections: [
        {
          iconImage:
            "/images/Invest-Images/Icons/High-Potential-Growth-Economy.svg",
          imgAlt: "",
          title: "High-Potential Growth Economy",
          points: [
            <>
              Chennai is rapidly evolving into one of India’s most promising
              economic powerhouses. With consistent GDP growth, a resilient
              industrial base, and a tech-forward mindset, the city is poised
              for long-term expansion. Government policies, smart infrastructure
              investments, and a booming digital economy make Chennai a
              future-looking destination for global and domestic investors
              alike.
            </>,
            <>
              If you're exploring investment opportunities in Chennai, the time
              to act is now. Chennai invest is no longer a possibility — it’s a
              priority.
            </>,
          ],
        },
        {
          iconImage: "/images/Invest-Images/Icons/Strategic-Location.svg",
          imgAlt: "",
          title: "Strategic Location",
          points: [
            <>
              Chennai: Empowering Your Business Aspirations Strategically
              located on the southeastern coast of India, Chennai offers
              unparalleled access to domestic and international markets. Its
              world-class ports, major highways, and international airport make
              it a vital logistics and trading hub. Chennai serves as the
              southern gateway to ASEAN economies and plays a crucial role in
              regional trade networks.
            </>,
            <>
              Chennai: A Global Trade Connector With two major seaports (Chennai
              Port and Kamarajar Port) and close proximity to emerging economic
              corridors, Chennai is a key node in India’s global supply chain.
              Whether you're a manufacturer, exporter, or logistics company,
              business investment in Chennai gives you the edge to scale
              globally.
            </>,
          ],
        },
        {
          iconImage:
            "/images/Invest-Images/Icons/Emerging-Global-Finance-Destination.svg",
          imgAlt: "",
          title: "Emerging Global Finance Destination",
          points: [
            <>
              Broadening Your Investment Possibilities Chennai is on a
              determined path to becoming a financial hub in South Asia. With
              the presence of leading public and private banks, NBFCs, and
              fintech disruptors, the city offers robust financial
              infrastructure for both traditional finance and new-economy
              ventures. Several investment companies in Chennai are tapping into
              tech-driven financial innovation, from digital lending platforms
              to green finance initiatives. The ecosystem is ideal for investors
              looking to diversify their portfolios in a stable yet progressive
              market.
            </>,
            <>
              A Preferred Hub for Private Capital Chennai’s reputation for
              transparency, educated talent, and capital efficiency has made it
              a favourite for private equity, venture capital, and HNIs. Whether
              you're launching a fund, incubating a startup, or scaling a family
              office, Chennai welcomes you with open arms and solid ROI.
            </>,
          ],
        },
        {
          iconImage:
            "/images/Invest-Images/Icons/Business-Friendly-Environment.svg",
          imgAlt: "",
          title: "Business-Friendly Environment",
          points: [
            <>
              Achieving Growth Through Special Economic Zones Chennai is home to
              several Special Economic Zones (SEZs) and industrial parks that
              offer tax incentives, streamlined compliance, and infrastructure
              ready for scale. From the SIPCOT industrial estates to IT
              corridors and MSME clusters, every sector finds its niche here.
              For those evaluating the best investment options in Chennai, these
              zones offer a strong entry point.
            </>,
            <>
              Creating a Supportive Business Framework Pro-business governance,
              fast-track approvals, and digital-first services make Chennai a
              magnet for enterprise. The Tamil Nadu Single Window Portal
              simplifies everything from licenses to legal clearances, making
              the Chennai invest journey smoother than ever before.
            </>,
          ],
        },
        {
          iconImage:
            "/images/Invest-Images/Icons/Future-Driven-Development-Path.svg",
          imgAlt: "",
          title: "Future-Driven Development Path",
          points: [
            <>
              Towards a Resilient and Sustainable Tomorrow From smart city
              missions to renewable energy zones and climate-resilient
              infrastructure, Chennai is building for the future. Sustainability
              and inclusive development remain central to city planning,
              ensuring businesses thrive in a stable environment.
            </>,
            <>
              Committing to a Tech-Enabled Future Chennai’s focus on digital
              infrastructure — 5G deployment, startup incubators, AI research,
              and e-governance — is transforming how companies scale. It’s a
              place where the physical and digital worlds converge, opening new
              verticals for investment opportunities in Chennai across tech,
              logistics, and retail.
            </>,
          ],
        },
        {
          iconImage:
            "/images/Invest-Images/Icons/Innovative-Business-Landscape.svg",
          imgAlt: "",
          title: "Innovative Business Landscape",
          points: [
            <>
              Supportive Climate for Innovation and Global Appeal Chennai boasts
              a vibrant mix of legacy industries and cutting-edge startups. From
              automobiles and electronics to SaaS and biotech, the city fosters
              innovation through active industry-academia collaboration.
            </>,
            <>
              It ranks among the top Indian cities for FDI inflow and startup
              registration, reinforcing its position as a leader in business
              investment in Chennai.
            </>,
          ],
        },
        {
          iconImage: "/images/Invest-Images/Icons/Talent-Ready-Workforce.svg",
          imgAlt: "",
          title: "Talent-Ready Workforce",
          points: [
            <>
              Investing in Education and Skill Development Home to prestigious
              institutions like IIT Madras, Anna University, and numerous
              engineering and design schools, Chennai is a brain trust for
              companies across sectors. The academic ecosystem fuels an endless
              stream of tech talent and skilled professionals ready to take on
              global challenges.
            </>,
            <>
              Building a Workforce Geared for the Future With a strong emphasis
              on skilling, upskilling, and workforce mobility, the city is
              future-proofing its human capital. Several state-supported
              programmes and private initiatives are actively preparing
              Chennai’s youth for Industry 4.0.
            </>,
          ],
        },
        {
          iconImage: "/images/Invest-Images/Icons/Cosmopolitan-Lifestyle.svg",
          imgAlt: "",
          title: "Cosmopolitan Lifestyle",
          points: [
            <>
              Chennai: A Crossroads of Traditions and Modernity Chennai offers
              the perfect balance of tradition and modernity. With its rich
              artistic heritage, coastal charm, vibrant food culture, and
              growing nightlife, the city appeals to global citizens.
              International schools, healthcare infrastructure, expat
              communities, and smart housing make it one of India’s most
              liveable cities — ideal for professionals relocating with
              families.
            </>,
          ],
        },
        {
          iconImage:
            "/images/Invest-Images/Icons/Top-Performing-Investment-Zones.svg",
          imgAlt: "",
          title: "Top Performing Investment Zones",
          points: [
            <>
              Information Technology and SaaS – Home to India’s top IT parks and
              SaaS unicorns.
            </>,
            <>
              Renewable Energy - Chennai leads clean energy with solar, wind,
              and green initiatives.
            </>,
            <>
              Real Estate - Urban growth fuels real estate investment across
              Chennai's key sectors.
            </>,
            <>
              Franchise - Chennai offers fertile ground for growing national and
              global franchises.
            </>,
            <>
              With such a rich industrial and innovation-driven mix, Chennai
              invest opportunities span across legacy and next-gen sectors
              alike.
            </>,
          ],
        },
      ],
    },
  ];

  const imageSections = [
    {
      sectionTitle: "Adventure & Thrills",
      sectionDesc:
        "Chennai stands as a dynamic hub blending tradition with modern growth, making it one of India's most investment-friendly cities.",
      image: "/images/Invest-Images/Why-Invest-in-Chennai.jpg",
      imgAlt: "",
      tenantInfoSections: [],
    },
  ];

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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
    autoplaySpeed: 2500,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
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
        <title>Chennai Invest | Investment Opportunities in Chennai</title>
        <meta
          name="description"
          content="Explore top investment opportunities in Chennai. From SaaS to manufacturing, discover the best investment options in Chennai for business success."
        />
        <link rel="canonical" href="/invest-in-chennai" />
      </Helmet>

      <div id="InvestMainPage">
        <div className="InvestPageId">
          <div
            className="VolunteerBgSection InvestBgSection notHome"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="VolunteerMainContainer">
              <div className="volunteerSectionBanner">
                <div className="VolunteerBannerImage">
                  <img
                    src="/images/Invest-Images/investBanner.jpg"
                    alt="investment in chennai"
                  />
                </div>
                <h3 className="voluntterContent">Invest</h3>
              </div>
            </div>
            <div className="notHomePageSearch">
              <Search />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <div
              className="InvestChennaiContainerFlex"
              style={{ paddingBottom: "20px" }}
            >
              <div
                className="InvestChennaiContent"
                style={{ paddingBottom: "20px" }}
              >
                <h3>Welcome to Invest in Chennai</h3>
                <h6>
                  Your Gateway to Growth in South India’s Economic Capital
                </h6>
                <p>
                  Chennai, one of India’s fastest-growing metro cities, is a
                  thriving hub for technology, manufacturing, logistics,
                  healthcare, finance, and innovation. Whether you’re an
                  entrepreneur, global investor, or multinational company,
                  Chennai offers a dynamic and future-ready ecosystem for
                  business success.
                </p>
              </div>
              {/* <div class="workIntro">
                <h3 style={{ color: "#100f9a" }}>Why Invest in Chennai?</h3>
              </div> */}
              {/* <div className="InvestChennaiContent">
                <h6>
                  Chennai stands as a dynamic hub blending tradition with modern
                  growth, making it one of India's most investment-friendly
                  cities.
                </h6>
                <p>
                  Its coastal advantage ensures strong global connectivity
                  through ports, airports, and highways. A thriving industrial
                  base — from automobiles to electronics — is supported by a
                  rapidly expanding tech and startup ecosystem. The city offers
                  a skilled workforce, high literacy rates, and consistent
                  policy support from the government. Chennai also leads in
                  renewable energy and infrastructure development, signaling
                  long-term potential. For investors seeking stability, talent,
                  and sustained returns, Chennai delivers on every front.
                </p>
              </div> */}
            </div>
          </div>

          <div
            className="DootedBannerSectionLive"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="LiveParaSection container max-w-7xl mx-auto px-4">
              <div
                className={`LiveTextBackground ${
                  scrollDir === "right" ? "scroll-right" : "scroll-left"
                }`}
                ref={bgTextRef}
              >
                <p>
                  Living in &nbsp; &nbsp; Living in <br /> Chennai &nbsp; &nbsp;
                  Chennai
                </p>
              </div>
              <div className="LiveRow">
                <div className="LiveMainContent">
                  <h3>Why Invest in Chennai?</h3>

                  <p className="paraZeroLiveSection">
                    Chennai stands as a dynamic hub blending tradition with
                    modern growth, making it one of India's most
                    investment-friendly cities.
                  </p>
                  <p className="paraoneLiveSection">
                    Its coastal advantage ensures strong global connectivity
                    through ports, airports, and highways. A thriving industrial
                    base — from automobiles to electronics — is supported by a
                    rapidly expanding tech and startup ecosystem. The city
                    offers a skilled workforce, high literacy rates, and
                    consistent policy support from the government. Chennai also
                    leads in renewable energy and infrastructure development,
                    signaling long-term potential. For investors seeking
                    stability, talent, and sustained returns, Chennai delivers
                    on every front.
                  </p>
                </div>
                <img
                  src="/images/Invest-Images/WHY-INVEST-IN-CHENNAI-Banner.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

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
                <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList">
                  <div key={i}>
                    <h4 className="text-lg font-semibold mb-2">
                      {tenant.title}
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {tenant.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tenanticonImageDiv">
                    <img
                      className="tenanticonImage"
                      src={tenant.iconImage}
                      alt={tenant.imgAlt}
                    />
                  </div>
                </div>
              ))}
            </section>
          ))}

          <div className="InvestMainSliderSection">
            <div className="container max-w-7xl mx-auto px-4 ">
              {/* <div className="sliderInvestMentSection"> */}
              <Slider {...settings}>
                {/* <div className="buildingSectionFlex"> */}

                {buildingData.map((item, index) => (
                  <div
                    className="bulidingSection"
                    key={index}
                    onClick={() => {
                      navigate(item.link);
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    {/* {index % 2 === 0 ? ( */}
                    {(index % 4) % 2 === 0 ? (
                      <>
                        <div className="builidngContent">
                          <h3>{item.title}</h3>
                          <h5>{item.description}</h5>
                        </div>
                        <img
                          className="buildingImage"
                          src={item.image}
                          alt={item.imgAlt}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="buildingImage1"
                          src={item.image}
                          alt={item.imgAlt}
                        />
                        <div className="builidngContent1">
                          <h3>{item.title}</h3>
                          <h5>{item.description}</h5>
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {/* </div> */}
              </Slider>
              {/* </div> */}
            </div>
          </div>

          {/* Slider */}

          {/* Side Accordion */}

          <Utilitiesinchennai1 />

          {/* Side Accordion */}

          <InstagramReelsMarquee />
          <Becameavolunteer />
        </div>
      </div>
    </>
  );
}
