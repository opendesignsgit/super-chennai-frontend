import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function FintechChennai () {

  const whatSetsChennaiApart = [
  {
    imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    title: "Homegrown Engineering Talent",
    desc: "Fintechs here are backed by engineers who understand both scale and sensitivity—critical for building trusted financial systems.",
  },
  {
    imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    title: "Banking + Bharat Insight",
    desc: "With decades of proximity to national banks and financial institutions, Chennai offers a rare mix of trust, compliance, and bold experimentation.",
  },
  {
    imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
    title: "Supportive Ecosystem",
    desc: "Platforms like FinBlue and TIDCO’s fintech policies are giving wings to founders working on next-gen finance.",
  },
];

  const chennaiStartupPowerhouseData = [
    {
    items: [
        {
          title: " What’s Ahead?",
          description:
            "The lines between banking, payments, and commerce are blurring—and Chennai is right in the middle of this change. With rising investor interest and user demand for smarter, simpler finance, the next breakout fintech might just be your neighbor’s startup.",
        },
        {
          title: "Keep Watching Super Chennai",
          description:
            "We're tracking every pitch, pivot, and product launch. If you want to know how money moves in this city, this is where the story begins.",
        },
       ],
    },
   
  ];

  const chennaiStartupStoriesData = [
    {
      category: "Stories That Inspire",
      items: [
        {
           imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: "Agnikul Cosmos: Launching Rockets from Chennai",
          description:
            "Incubated at IIT Madras, Agnikul built India’s first private orbital launch vehicle. They’re not just sending rockets into space—they’re putting Chennai on the global aerospace map.",
        },
        {
           imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: " Uniphore: Redefining AI Conversations",
          description:
            "Born in Chennai, now operating globally, Uniphore uses AI to revolutionize how call centers and customer support interact—with emotional intelligence built into bots.",
        },
        {
           imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          title: " InfySEC: The Ethical Hackers of India",
          description:
            "With cybersecurity at its core, this Chennai firm trains the next generation of ethical hackers, helping protect corporations and governments from real-world threats.",
        },
      ],
    },
  ];

  
const imageSections = [
  {
    whereInnovations: [
      {
        points: [
          {
            title: "Where Innovation Meets Impact",
            para: [
              <>
                Lending apps that assess credit using alternative data
              </>,
              <>
                Platforms offering credit to gig workers and small merchants
              </>,
              <>
                Payment solutions tailored for kirana shops and retail stores
              </>,
              <>
                Insurtech models built for daily-wage workers
              </>,
              <>
                Wealth platforms offering SIPs in Tamil and regional languages
              </>,
              <>
                It’s not just innovation for innovation’s sake—it’s solving real-world, everyday financial problems.
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: " Chennai’s Fintech Trailblazers",
            para: [
              <>
                <strong>Yubi (formerly CredAvenue):</strong> Changing the way enterprises raise debt
              </>,
              <>
                <strong>YAP:</strong> Infrastructure rails behind most fintech apps you’ve used
              </>,
              <>
                <strong>M2P Fintech:</strong> Plug-and-play APIs for cards, wallets, BNPL, and more
              </>,
              <>
                <strong>Kaleidofin:</strong> Making financial planning accessible to low-income households
              </>,
              <>
                <strong>Open:</strong> A neobank that speaks the language of small businesses
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
    ],
  },
];


const ecosystemInsights = [
  {
    title: "Startup Count",
    desc: "Over 2,200 active startups across various sectors.",
    img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "Global Ranking",
    desc: "#88 globally and #6 in India for startup ecosystems.",
    img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "Employment",
    desc: "TN's tech sector employs over 1M professionals, with Chennai as a major contributor.",
   img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "Infrastructure",
    desc: "Home to DLF Cybercity & TIDEL Park, offering modern facilities for tech companies.",
    img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
];


const imageSections1 = [
  {
    sectionTitle: "Chennai's Fintech Evolution: A 20-Year Journey (2005–2025)",
    sectionDesc:
      "How Chennai evolved from a banking back-office hub to India’s fintech backend capital, with global fintech startups shaping inclusive finance and digital infrastructure for the nation.",
    fintechEvolution: [
      {
        points: [
          {
            title: "2005–2010: Foundations in Finance & Tech",
            para: [
              <>Banks & IT BPOs dominate, establishing Chennai as a hub for core banking solutions, IT services, and finance processing.</>,
              <>A generation of engineers and analysts gain domain expertise working with global banks and financial institutions.</>,
              <>IIT-M and Anna University begin feeding fintech-ready talent to the ecosystem.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "2011–2015: Early Sparks",
            para: [
              <>NBFCs like Shriram Group and Sundaram Finance start tech adoption journeys.</>,
              <>First fintech startups emerge, exploring digital payments and mobile finance tools.</>,
              <>Wallet-based and recharge apps gain traction among youth and college students.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "2016–2019: The Breakout Years",
            para: [
              <>YAP and M2P are founded, solving backend fintech infrastructure challenges.</>,
              <>CredAvenue (now Yubi) launches, bringing corporate debt to tech platforms.</>,
              <>Fintechs from Mumbai and Delhi build tech teams in Chennai, making it the backend HQ.</>,
              <>FinBlue incubator is launched by STPI for fintech startups.</>,
              <>UPI adoption begins, leveraging India Stack innovations.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "2020–2022: Acceleration in the Pandemic Era",
            para: [
              <>Digital banking goes mainstream as SMEs, freelancers, and gig workers adopt fintech.</>,
              <>Open neobank gains national traction with Chennai roots.</>,
              <>Insurtech and WealthTech platforms like Kaleidofin expand to underserved segments.</>,
              <>API-first models thrive, solidifying Chennai as India’s fintech backend capital.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
      {
        points: [
          {
            title: "2023–2025: Ecosystem Maturity",
            para: [
              <>Chennai’s fintechs like M2P, Yubi, and YAP expand internationally.</>,
              <>Embedded finance rises across e-commerce, SaaS, and logistics platforms.</>,
              <>Tier-2 and Tier-3 focus grows with vernacular UX and local-language products.</>,
              <>Blockchain and AI adoption accelerates for RegTech and intelligent credit scoring.</>,
              <>Investor focus shifts to profitable, scalable fintech models in rural India.</>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
          },
        ],
      },
     
    ],
  },
];

const itParks = [
   {
    title: "DLF Cybercity Chennai",
    desc: "A 6 million sq. ft. IT SEZ housing numerous tech companies. en.wikipedia.org",
    img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  {
    title: "TIDEL Park Pattabiram",
    desc: "A recently inaugurated 21-story IT park aimed at fostering tech innovation.",
    img: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
  },
  
];



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

  const images = [
    {
      src: "/images/Invest-Images/SubPages/real-estate-slide.jpg",
      title: "Real Estate",
      link: "/investrealestatechennai",
    },
    {
      src: "/images/Invest-Images/SubPages/franchise-slide.jpg",
      title: "Franchise",
      link: "/investfranchisechennai",
    },
    {
      src: "/images/Invest-Images/SubPages/startups-slide.jpg",
      title: "Startups",
      link: "/investstartupschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/renewable-energy-slide.jpg",
      title: "Renewable Energy",
      link: "/investrenewableenergychennai",
    },
    {
      src: "/images/Invest-Images/SubPages/retirement-slide.jpg",
      title: "Retirement",
      link: "/investretirementchennai",
    },
    {
      src: "/images/Invest-Images/SubPages/government-initiatives-slide.jpg",
      title: "Government Initiatives",
      link: "/investgovernmentinitiativeschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/formalities-regulations-slide.jpg",
      title: "Formalities and Regulations",
      link: "/investformalitiesregulationschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/news-slide.jpg",
      title: "News",
      link: "/investnewschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/events-slide.jpg",
      title: "Invest in Events",
      link: "/investeventschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/exhibitions-slide.jpg",
      title: "Exhibitions",
      link: "/investexhibitionschennai",
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

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

  return (
    <>
      {/* Banner */}
      <div className="accaodomationBannerSection">
        <img src="/images/Invest-Images/SubPages/startups-banner.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Fintech  Chennai</h3>
            <div className="breadCrum">
              <Link to="/invest">Invest</Link> - <span> Fintech  Chennai</span>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/* Intro */}
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
            <p>
             Fintech  Chennai  </p>
          </div>
          <div className="workIntro">
            <h3>Chennai’s Fintech Rise: From Cash Counters to Code
</h3>
            <p> Not too long ago, finance in Chennai meant standing in queues, handwritten ledgers, and neighborhood chit funds. Today, it’s API stacks, instant loans, UPI payments, robo-advisors, and invisible banking—all being built right here in the city.</p>
<p>Chennai’s fintech startups aren’t just following trends. They’re quietly leading a financial revolution that’s inclusive, intelligent, and deeply rooted in local needs.
</p>
<p>From solving MSME cash flow issues to enabling app-based investments for first-time users, these startups are using tech to put control back in the hands of users—individuals and businesses alike.
 </p>
          </div>
        </div>
      </div>

  <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">

     {/* What Sets Chennai Apart */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Why Chennai, Why Now?</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatSetsChennaiApart.map((item, index) => (
            <div key={index} className="card rounded-xl shadow p-6 hover:shadow-lg transition">
               <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
              {section.whereInnovations.map((tenant, i) => (
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


      {/* Why Chennai is a Startup Powerhouse */}
      <section className=" py-12 px-4 md:px-8">
         {chennaiStartupPowerhouseData.map((section, index) => (
          <div key={index} className="max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
              {section.category}
            </h2>
            <div className="grid grid-cols-1  gap-6">
              {section.items.map((item, idx) => (
                 <div  key={idx} className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>


      {imageSections1.map((section, index) => (
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
              {section.fintechEvolution.map((tenant, i) => (
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

     
      {/* Stories That Inspire */}
      <section className="py-12 px-4 md:px-8">
         
        {chennaiStartupStoriesData.map((section, index) => (
          <div key={index} className="max-w-6xl mx-auto mt-10">
             <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
               <div key={idx} className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                   <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                  <h3 className="text-xl md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      
   

      {/* Leading IT Startups in Chennai */}
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
              {section.whereInnovations.map((tenant, i) => (
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

      {/* Chennai IT Startup Ecosystem Insights */}
     <section className="py-12 px-4">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold"> Chennai's IT Startup Ecosystem: Key Insights</h2>
  </div>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
    {ecosystemInsights.map((insight, index) => (
      <div
        key={index}
        className="card rounded-xl shadow p-6 hover:shadow-md transition flex flex-col"
      >
        <img
          src={insight.img}
          alt={insight.title}
          className="w-20 h-20 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
        <p>{insight.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Notable IT Parks in Chennai */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold"> Notable IT Parks in Chennai</h2>
        </div>
       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
    {itParks.map((insight, index) => (
      <div
        key={index}
        className="card rounded-xl shadow p-6 hover:shadow-md transition flex flex-col"
      >
        <img
          src={insight.img}
          alt={insight.title}
          className="w-20 h-20 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
        <p>{insight.desc}</p>
      </div>
    ))}
  </div>
      </section>

      </div>

      {/* Explore More Chennai Slider */}
      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>PROPERTY PROSPECTS IN CHENNAI</h4>
            <p>
              Chennai's real estate market offers consistent demand and income. By its developed infrastructure, this city market offers substantial profits from both business and residential areas.
            </p>
          </div>
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div key={idx} className="ExplorePageSliderImage">
                  <a href={img.link} style={{ textDecoration: "none" }}>
                    <div className="relative rounded overflow-hidden">
                      <img src={img.src} alt={img.title} className="w-full h-auto block" />
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="titleTextExploreChennai">{img.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Social Marquee + CTA */}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </>
  );
}
