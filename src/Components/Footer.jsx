import { useState, useEffect } from "react";
import "../assets/Css/Footer.css";
import { a, link } from "framer-motion/client";
import Funchennai from "./FunChennai";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SimpleWeather from "../Pages/Weather";

const Footer = () => {
  const DigitalChennai = [
    { label: "Events", link: "/visit/events-in-chennai" },
    { label: "Night Life", link: "/night-life" },
    { label: "Food", link: "/visit/restaurants-in-chennai" },
    { label: "Fun", link: "/fun" },
    { label: "Community", link: "/community" },
    { label: "Hidden Gems", link: "/hidden-gems" },
    { label: "Hotspots", link: "/hotspots" },
    { label: "Trails", link: "/trails" },
    { label: "Art & Crafts", link: "/art-crafts" },
    { label: "Job Boards", link: "/job-boards" },
    { label: "Gigs", link: "/gigs" },
    { label: "Mixers", link: "/mixers" },
    { label: "Conferences", link: "/visit/conferences-in-chennai" },
    { label: "Biz Ops", link: "/biz-ops" },
    { label: "Sectors", link: "/sectors" },
    { label: "EXPAT", link: "/expat" },
    { label: "NRI", link: "/nri" },
    { label: "EXPO", link: "/expo" },
    { label: "STARTUPS", link: "/startups" },
    { label: "HACKATHONS", link: "/hackathons" },
    { label: "AI", link: "/ai" },
    { label: "PITCHES", link: "/pitches" },
  ];

  const SOCIALChennai = [
    { title: "SLIDESHOWS", link: "/slideshows" },
    { title: "INFOGRAPHIC", link: "/infographics" },
    { title: "STORIES", link: "/stories" },
    { title: "TESTIMONIALS", link: "/testimonials" },
    { title: "ANECDOTES", link: "/anecdotes" },
    { title: "PROMOTIONS", link: "/promotions" },
    { title: "ACHIEVERS", link: "/achievers" },
    { title: "UNUSUAL FOLKS", link: "/unusual-folks" },
    { title: "ARTISTS", link: "/artists" },
    { title: "MEMES", link: "/memes" },
    { title: "STANDUP TIEUPS", link: "/standup-tieups" },
    { title: "COLLABS", link: "/collabs" },
    { title: "CELEBS", link: "/celebs" },
    { title: "PROFILES", link: "/profiles" },
    { title: "FEATURES", link: "/features" },
    { title: "PLACES", link: "/places" },
    { title: "PRODUCTS", link: "/products" },
  ];

  const FUNCHENNAI = [
    { title: "MOVIE FESTIVALS", link: "/movie-festivals" },
    { title: "DJ 365", link: "/dj-365" },
    { title: "ROCK SHOWS", link: "/rock-shows" },
    { title: "BEACH PARTIES", link: "/beach-parties" },
    { title: "STREET CRICKET", link: "/street-cricket" },
  ];

  const STARTUPCHENNAI = [
    { title: "CO-WORKING HUB", link: "/co-working-hub" },
    { title: "UNSUAL PITCHES", link: "/unsual-pitches" },
    { title: "BULLETIN BOARD", link: "/bulletin-board" },
    { title: "INNOVATION CHALLENGE", link: "/innovation-challenge" },
    { title: "MENTORING MEETUPS", link: "/mentoring-meetups" },
  ];

  const FOODIECHENNAI = [
    { title: "STREET FOOD FEST", link: "/street-food-fest" },
    { title: "DIGITAL FOOD TRAIL", link: "/digital-food-trail" },
    { title: "FUSION FOOD POPUPS", link: "/fusion-food-popups" },
    { title: "FOOD INFLUENCERS", link: "/food-influencers" },
    { title: "NIGHT FOOD BAZAAR", link: "/night-food-bazaar" },
  ];

  const TECHCHENNAI = [
    { title: "AI HUB", link: "/ai-hub" },
    { title: "FREE WIFI AT PUBLIC PACES", link: "/free-wifi-at-public-paces" },
    { title: "POINTCAST", link: "/pointcast" },
    { title: "TECH FEST", link: "/tech-fest" },
    { title: "SPECIALIST CONCLAVES", link: "/specialist-conclaves" },
  ];

  const CREATIVECHENNAI = [
    { title: "Overview", link: "/live-in-chennai" },
    { title: "Cost of living", link: "/live/cost-of-living-in-chennai" },
    { title: "Residency", link: "/live/residential-properties-in-chennai" },
    { title: "Employment", link: "/live/employment-in-chennai" },
    { title: "Transportation", link: "/live/transportation-in-chennai" },
    { title: "Healthcare", link: "/live/healthcare-in-chennai" },
    {
      title: "Places of worship",
      link: "/live/worship-in-chennai",
    },
    { title: "Things to Do", link: "/visit/things-to-do-in-chennai" },
    { title: "Neighbourhood", link: "/live/places-near-chennai" },
    { title: "Quality of Life", link: "/live/quality-of-life-in-chennai" },
    {
      title: "Future Forward",
      link: "/live/infrastructure-development-in-chennai",
    },
    {
      title: "Learning Link",
      link: "/live/educational-institutions-in-chennai",
    },
  ];

  const BUSINESSCHENNAI = [
    { title: "Overview", link: "/visit-chennai" },
    {
      title: "Accommodation",
      link: "/visit/hotel-accommodation-in-chennai",
    },
    { title: "Restaurants", link: "/visit/restaurants-in-chennai" },
    { title: "Things to do", link: "/visit/things-to-do-in-chennai" },
    { title: "Places to Visit", link: "/visit/places-to-visit-in-chennai" },
    { title: "Itinerary", link: "/visit/chennai-itinerary" },
    { title: "Hidden Gems", link: "/visit/hidden-places-in-chennai" },
    { title: "Shopping", link: "/visit/shopping-areas-in-chennai" },
    { title: "Travel Tips", link: "/visit/travels-chennai" },
    { title: "Wellness", link: "/visit/wellness-centres-in-chennai" },
    { title: "Events", link: "/visit/events-in-chennai" },
    { title: "Conferences", link: "/visit/conferences-in-chennai" },
  ];

  const NETWORKCHENNAI = [
    { title: "Overview", link: "/work-in-chennai" },
    {
      title: "Business Permits",
      link: "/work/business-registration-in-chennai",
    },
    { title: "Unicorns", link: "/work/unicorn-startups" },
    { title: "Co-working spaces", link: "/work/coworking-space-in-chennai" },
    { title: "Paying Guest", link: "/work/pg-in-chennai" },
    { title: "Pay Perk", link: "/work/chennai-job-salary" },
    { title: "Career Growth", link: "/work/job-opportunities-in-chennai" },
    { title: "Networking", link: "/work/chennai-networks" },
    { title: "Worklife balance", link: "/work/working-in-chennai" },
  ];

  const USEFULLINKS = [
    { title: "Overview", link: "/invest-in-chennai" },
    { title: "Realestate", link: "/invest/chennai-real-estate" },
    { title: "Franchise", link: "/invest/franchise-business-in-chennai" },
    { title: "Startups", link: "/invest/startup-companies-in-chennai" },
    { title: "Green Power", link: "/invest/solar-companies-in-chennai" },
    { title: "Chill Nest", link: "/invest/retirement-in-chennai" },
    { title: "Policy Boost", link: "/invest/government-projects-in-chennai" },

    {
      title: "Legal Flow",
      link: "/invest/law-firms-in-chennai",
    },
    {
      title: "News",
      link: "/invest/news-in-chennai",
    },
    { title: "Events", link: "/invest/chennai-events" },
    { title: "Exhibitions", link: "/invest/exhibitions-in-chennai" },
  ];

  const USEFULLINKS1 = [
    { title: "Overview", link: "/innovate-chennai" },
    { title: "IT and Software", link: "/innovate/it-companies-in-chennai" },
    {
      title: "AI",
      link: "/innovate/ai-companies-in-chennai",
    },
    { title: "EV Mobility", link: "/innovate/ev-vehicles-in-chennai" },
    { title: "Smart Cities", link: "/innovate/smart-city-chennai" },
    {
      title: "Health Tech",
      link: "/innovate/health-tech-in-chennai",
    },
    { title: "Robotics", link: "/innovate/robotics-in-chennai" },
    { title: "Blockchain", link: "/innovate/blockchain-course-in-chennai" },
    { title: "Auto Tech", link: "/innovate/autotech-chennai" },
    { title: "Edu Tech", link: "/innovate/edutech-chennai" },
    { title: "3D Printing", link: "/innovate/3d-printing-in-chennai" },
    { title: "AR/VR", link: "/innovate/ar-vr-companies-in-chennai" },
    { title: "Agri Tech", link: "/innovate/agri-tech-companies-in-chennai" },
  ];
  const USEFULLINKS2 = [
    { title: "Overview", link: "/volunteer-in-chennai" },
    { title: "Digital", link: "/volunteer-in-chennai" },
    { title: "Events", link: "/chennai-events" },
    { title: "Content Creators", link: "/volunteer-in-chennai" },
    { title: "Design &  Art", link: "/volunteer-in-chennai" },
    { title: "Influencers", link: "/volunteer-in-chennai" },
    {
      title: "Mentors",
      link: "/volunteer-in-chennai",
    },
    // {
    //   title: "Pride of Chennai",
    //   link: "/volunteer-in-chennai",
    // },
  ];

  const USEFULLINKS3 = [
    { title: "About us", link: "/about-us" },
    // { title: "Blog", link: "/volunteer-in-chennai" },
    // { title: "Career", link: "/volunteer-in-chennai" },
    { title: "Events", link: "/chennai-events" },
    // { title: "Social Chennai", link: "/volunteer-in-chennai" },
    {
      title: "FAQ",
      link: "/faqs",
    },
    {
      title: "MEDIA COVERAGE",
      link: "/media-coverage",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Refund Policy",
      link: "/refund-policy",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Desktop screen — close all sections
        setIsOpen(true);
        setIsOpen1(true);
        setIsOpen2(true);
        setIsOpen3(true);
        setIsOpen4(true);
        setIsOpen5(true);
        setIsOpen6(true);
        setIsOpen7(true);
        setIsOpen8(true);
        setIsOpen9(true);
      }
    };

    // Initial check
    handleResize();

    // Listen to window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="FooterBackground w-full bg-900 text-white py-8">
      {/* <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
        <div className="containerSection">
          <div className="SectionLeft firstsectionwidth">
            <h3 className="FooterHeading" onClick={() => setIsOpen(!isOpen)}>
              Digital Chennai
            </h3>

            {isOpen && (
              <div className="FooterSectionDiv">
                <div>
                  {DigitalChennai.slice(0, 13).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.label}</h5>
                    </a>
                  ))}
                </div>
                <div>
                  {DigitalChennai.slice(13, 26).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.label}</h5>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="SectionLeft firstsectionwidth">
            <h3 className="FooterHeading" onClick={() => setIsOpen1(!isOpen1)}>
              SOCIAL Chennai
            </h3>

            {isOpen1 && (
              <div className="FooterSectionDiv">
                <div>
                  {SOCIALChennai.slice(0, 13).map(
                    (SOCIALChennaiLinks, index) => (
                      <a href={SOCIALChennaiLinks.link}>
                        <h5>{SOCIALChennaiLinks.title} </h5>
                      </a>
                    )
                  )}
                </div>
                <div>
                  {SOCIALChennai.slice(13, 26).map(
                    (SOCIALChennaiLinks, index) => (
                      <a href={SOCIALChennaiLinks.link}>
                        <h5>{SOCIALChennaiLinks.title} </h5>
                      </a>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="footerthirdSection">
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                FUN CHENNAI
              </h3>

              {isOpen2 && (
                <div className="FooterSectionDiv">
                  <div>
                    {FUNCHENNAI.slice(0, 5).map((funchennaiLinks, index) => (
                      <a href={funchennaiLinks.link}>
                        <h5>{funchennaiLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen3(!isOpen3)}
              >
                STARTUP CHENNAI
              </h3>

              {isOpen3 && (
                <div className="FooterSectionDiv">
                  <div>
                    {STARTUPCHENNAI.slice(0, 5).map((startupLinks, index) => (
                      <a href={startupLinks.link}>
                        <h5>{startupLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="footerthirdSection">
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen4(!isOpen4)}
              >
                FOODIE CHENNAI
              </h3>

              {isOpen4 && (
                <div className="FooterSectionDiv">
                  <div>
                    {FOODIECHENNAI.slice(0, 5).map(
                      (foodieChennaiLinks, index) => (
                        <a href={foodieChennaiLinks.link}>
                          <h5>{foodieChennaiLinks.title}</h5>
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen5(!isOpen5)}
              >
                TECH CHENNAI
              </h3>
              {isOpen5 && (
                <div className="FooterSectionDiv">
                  <div>
                    {TECHCHENNAI.slice(0, 5).map((techchennailinks, index) => (
                      <a href={techchennailinks.link}>
                        <h5>{techchennailinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
        <div className="containerSection">
          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen6(!isOpen6)}>
              Live
            </h3>
        
            <AnimatePresence>
              {isOpen6 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {CREATIVECHENNAI.map((creativeLinks, index) => (
                      <Link key={index} to={creativeLinks.link}>
                        <h5>{creativeLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen7(!isOpen7)}>
              Visit
              <span className="symbol">{isOpen7 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen7 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {BUSINESSCHENNAI.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen7(!isOpen7)}>
              Visit
            </h3>

           
            <AnimatePresence>
              {isOpen7 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {BUSINESSCHENNAI.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen6(!isOpen6);
                }
              }}
            >
              Live
              <span className="symbol">{isOpen6 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen6 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {CREATIVECHENNAI.map((creativeLinks, index) => (
                      <a key={index} href={creativeLinks.link}>
                        <h5>{creativeLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              //  onClick={() => setIsOpen7(!isOpen7)}
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen7(!isOpen7);
                }
              }}
            >
              Visit
              <span className="symbol">{isOpen7 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen7 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {BUSINESSCHENNAI.map((businessChennaiLinks, index) => (
                      <a key={index} href={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              //  onClick={() => setIsOpen8(!isOpen8)}
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen8(!isOpen8);
                }
              }}
            >
              Work
              <span className="symbol">{isOpen8 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen8 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {NETWORKCHENNAI.map((networkLinks, index) => (
                      <a key={index} href={networkLinks.link}>
                        <h5>{networkLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              //  onClick={() => setIsOpen9(!isOpen9)}
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen9(!isOpen9);
                }
              }}
            >
              Invest
              <span className="symbol">{isOpen9 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen9 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS.map((usefulLinks, index) => (
                      <a key={index} href={usefulLinks.link}>
                        <h5>{usefulLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
        <div className="containerSection">
          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              //  onClick={() => setIsOpen5(!isOpen5)}
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen5(!isOpen5);
                }
              }}
            >
              Innovate
              <span className="symbol">{isOpen5 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen5 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS1.map((creativeLinks, index) => (
                      <a key={index} href={creativeLinks.link}>
                        <h5>{creativeLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen3(!isOpen3)}>
              Volunteer
            </h3>

            <AnimatePresence>
              {isOpen3 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS2.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}
          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              // onClick={() => setIsOpen3(!isOpen3)}
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen4(!isOpen4);
                }
              }}
            >
              Volunteer
              <span className="symbol">{isOpen4 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen4 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS2.map((businessChennaiLinks, index) => (
                      <a key={index} href={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3
              className="FooterHeading"
              //  onClick={() => setIsOpen3(!isOpen3)}
              onClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen3(!isOpen3);
                }
              }}
            >
              Quick Links
              <span className="symbol">{isOpen3 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen3 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS3.map((businessChennaiLinks, index) => (
                      <a key={index} href={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="SectionConatinerSecond1 max-w-7xl mx-auto px-4">
        <div className="footermainsection">
          <div className="LogoandFollow">
            <div className="logoFooterimage">
              <img src="/images/super-chennai-logo-final.png" alt="" />
            </div>

            <div className="followUs">
              <h3>Follow US</h3>
              <div className="iconsFlex">
                {/* <img src="/images/Indeed.png" alt="" />
                <img src="/images/insta.png" alt="" />
                <img src="/images/fb.png" alt="" />
                <img src="/images/youtube.png" alt="" />
                <img src="/images/threads.png" alt="" /> */}
                <a
                  href="https://www.linkedin.com/company/super-chennai"
                  target="_blank"
                >
                  <img src="/images/Indeed.png" alt="Linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/super_chennai_/"
                  target="_blank"
                >
                  <img src="/images/insta.png" alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Hsb1ypGGE/"
                  target="_blank"
                >
                  <img src="/images/fb.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.youtube.com/@Super_Chennai"
                  target="_blank"
                >
                  <img src="/images/youtube.png" alt="Youtube" />
                </a>
                <a href="https://x.com/Super_Chennai_	" target="_blank">
                  <img src="/images/threads.png" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="credaiLogo">
            <img src="/images/credaiLogo.jpg" alt="Credai" />
          </div>
          <div className="copyrights">
            <h5>
              @ 2025 <span>Super Chennai</span>
            </h5>
            <h5>All Rights Reserved.</h5>
            <div className="designBy">
              <h4>Design By</h4>
              <a href="https://www.opendesignsin.com/" target="_blank">
                <img src="/images/open-dd-logo.webp" alt="Open Designs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="weatherPageSection">
        <SimpleWeather />
      </div>
    </footer>
  );
};

export default Footer;
