import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/Work.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

export default function Work() {
  const [previewSrc, setPreviewSrc] = useState(
    "/images/Work-Images/employment.jpg"
  );
  const [previewAlt, setPreviewAlt] = useState("jobs in chennai");

  const [hoverIndex, setHoverIndex] = useState(null);
  const [fade, setFade] = useState(true);
  const tooltipRef = useRef(null);

  const items = [
    {
      label: "Business Permits ",
      image: "/images/Work-Images/employment.jpg",
      imgAlt: "jobs in chennai",
      link: "/work/business-registration-in-chennai",
    },
    {
      label: "Unicorns",
      image: "/images/Work-Images/unicorns.jpg",
      imgAlt: "it jobs in chennai",
      link: "/work/unicorn-startups",
    },
    {
      label: "Co-working spaces",
      image: "/images/Work-Images/co-workingspaces.jpg",
      imgAlt: "coworking space in chennai",
      link: "/work/coworking-space-in-chennai",
    },
    {
      label: "Paying Guest",
      image: "/images/Work-Images/PG.jpg",
      imgAlt: "pg in chennai",
      link: "/work/pg-in-chennai",
    },
    {
      label: "Salaries & Benefits",
      image: "/images/Work-Images/Salaries-and-Benefits.jpg",
      imgAlt: "chennai job salary",
      link: "/work/chennai-job-salary",
    },
    {
      label: "Career Growth",
      image: "/images/Work-Images/career growth.jpg",
      imgAlt: "job opportunities chennai",
      link: "/work/job-opportunities-in-chennai",
    },
    {
      label: "Networking",
      image: "/images/Work-Images/Networking.jpg",
      imgAlt: "networking companies in chennai",
      link: "/networking",
    },
    {
      label: "Work life balance",
      image: "/images/Work-Images/Worklife-balance.jpg",
      imgAlt: "working in chennai",
      link: "/work/working-in-chennai",
    },
  ];

  // Tooltip follows cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (tooltipRef.current) {
        tooltipRef.current.style.top = `${e.clientY + 20}px`;
        tooltipRef.current.style.left = `${e.clientX + 20}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [previewSrc,previewAlt]);

  return (
    <>
      <Helmet>
        <title>Work in Chennai | Jobs, Career Growth, Startups, Networking</title>
        <meta
          name="description"
          content="From job opportunities in Chennai to career growth, discover everything about networking in Chennai, unicorns, co-working spaces, and work-life balance."
        />
        <link rel="canonical" href="/work-in-chennai" />
      </Helmet>
      {/* Top Banner */}
      <div
        className="WorkBgSection VolunteerBgSection notHome"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img
                src="/images/Work-Images/workBanner.jpg"
                alt="chennai jobs"
              />
            </div>
            <h3 className="voluntterContent">Work</h3>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/* Intro */}
      <div
        className="workMainContainer"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="workIntroParaSection container max-w-7xl mx-auto px-4">
          <div className="workIntro">
            <h1>Chennai Work</h1>
            <p>
              Chennai is more than just a thriving metropolis — it’s a hub of
              job opportunities in Chennai for professionals, entrepreneurs, and
              innovators. The city boasts a dynamic job market with strongholds
              in IT, automotive, healthcare, fintech, and creative sectors.
              Whether you're looking to join a growing startup or a global
              conglomerate, Chennai offers roles across all levels with
              competitive salaries and robust career growth.
            </p>
            <p>
              Startups and unicorns are thriving here, supported by a growing
              ecosystem of co-working spaces, incubators, and government-backed
              business permits that make it easier than ever to launch your
              dream venture.
            </p>
            <p>
              For working professionals, the city offers a balanced lifestyle,
              with affordable PG accommodations, excellent networking
              opportunities, and a culture that values both ambition and
              downtime. Whether you're climbing the corporate ladder or building
              your own brand, Chennai’s work culture is collaborative,
              forward-looking, and full of promise.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop - Hover Preview */}
      <div
        className="hidden md:block workImageSection"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h4>
          work <br />
          chennai
        </h4>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workimgIn flex">
            <div className="flex-4">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setPreviewSrc(item.image);
                      setPreviewAlt(item.imgAlt)
                      setHoverIndex(index);
                      if (tooltipRef.current) {
                        tooltipRef.current.style.display = "block";
                      }
                    }}
                    onMouseLeave={() => {
                      setHoverIndex(null);
                      if (tooltipRef.current) {
                        tooltipRef.current.style.display = "none";
                      }
                    }}
                    className={
                      hoverIndex === index ||
                      (hoverIndex === null && index === 0)
                        ? "active"
                        : ""
                    }
                  >
                    <Link
                      to={item.link}
                      className={`text-white font-bold text-lg transition-opacity ${
                        hoverIndex === index ||
                        (hoverIndex === null && index === 0)
                          ? "opacity-100"
                          : "opacity-20"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Tooltip */}
              <span
                ref={tooltipRef}
                id="tooltip"
                className="fixed z-50 bg-black text-white text-xs px-2 py-1 rounded hidden md:block pointer-events-none"
                style={{ transition: "opacity 0.2s ease" }}
              >
                <button>Explore More</button>
              </span>
            </div>

            <div className="flex-2 flex items-center justify-center hoverRightimg">
              <img
                src={previewSrc}
                alt={previewAlt}
                className="hoverRightimg"
                style={{ opacity: fade ? 1 : 0, transition: "opacity 0.3s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div
        className="block md:hidden my-8 px-4 mobileCardsWorkMainContainer"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="overflow-x-auto flex space-x-4 pb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 mobileCardsWork"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-2 CardTitleWork">
                  {item.label}
                </h5>
                <Link
                  to={item.link}
                  className="text-blue-500 hover:underline text-sm CardLinkWork"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InstagramReelsMarquee />
      <Becameavolunteer />
    </>
  );
}
