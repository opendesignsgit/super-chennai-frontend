import "../assets/Css/MenuBar.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function MenuBar({ setMenuBar }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const menuItems = [
    { label: "About Us", href: "/about-us" },

    // { label: "Career", href: "/career" },
    { label: "Events", href: "/events" },
    { label: "Superchennai Contests", href: "/superchennai-contest" },
    // { label: "Social Chennai", href: "/social-chennai" },
    {
      label: (
        <>
          {" "}
          Faq<small>s</small>{" "}
        </>
      ),
      href: "/faqs",
    },
    { label: <> Icon of the Month </>, href: "/icon-of-the-month-in-chennai" },
    { label: "MEDIA  COVERAGE ", href: "/media-coverage" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },

    // { label: "Sustainability", href: "/sustainability" },
  ];

  const menuItemsMobile = [
    {
      label: "Live",
      labellink: "/live-in-chennai",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/live-in-chennai",
        },
        {
          title: "Cost of living",
          desc: "Affordable Chennai Lifestyle",
          link: "/live/cost-of-living-in-chennai",
        },

        {
          title: "Residency",
          desc: "Convenient Living Options",
          link: "/live/residential-properties-in-chennai",
        },
        {
          title: "Employment",
          desc: "Chennai Work Gateway",
          link: "/live/employment-in-chennai",
        },
        {
          title: "Transportation",
          desc: "Connecting Mobility globally",
          link: "/live/transportation-in-chennai",
        },
        {
          title: "Healthcare",
          desc: "Quality Patient Care",
          link: "/live/healthcare-in-chennai",
        },
        {
          title: "Places of worship",
          desc: "Rich Chennai Heritage",
          link: "/live/worship-in-chennai",
        },
        {
          title: "Things to Do",
          desc: "Enjoy Leisure and fun",
          link: "/visit/things-to-do-in-chennai",
        },
        {
          title: "Neighbourhood",
          desc: "Diverse compassionate Community",
          link: "/live/places-near-chennai",
        },
        {
          title: "Quality of Life",
          desc: "Comfortable Chennai Living",
          link: "/live/quality-of-life-in-chennai",
        },
        {
          title: "Future Forward",
          desc: "Evolving Chennai Landscape",
          link: "/live/infrastructure-development-in-chennai",
        },
        {
          title: "Learning Link",
          desc: "Connect services seamlessly",
          link: "/live/educational-institutions-in-chennai",
        },
      ],
    },
    {
      label: "Visit",
      labellink: "/visit-chennai",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/visit-chennai",
        },
        {
          title: "Accommodation",
          desc: "Comfortable Chennai Stays",
          link: "/visit/hotel-accommodation-in-chennai",
        },
        {
          title: "Restaurants",
          desc: "Delicious global cuisines ",
          link: "/visit/restaurants-in-chennai",
        },
        {
          title: "Things to do",
          desc: "Explore Chennai Culture",
          link: "/visit/things-to-do-in-chennai",
        },
        {
          title: "Places to Visit",
          desc: "Explore a lot more",
          link: "/visit/places-to-visit-in-chennai",
        },
        {
          title: "Itinerary",
          desc: "Chennai Cultural Trail",
          link: "/visit/chennai-itinerary",
        },
        {
          title: "Hidden Gems",
          desc: "Discover Local Secrets",
          link: "/visit/hidden-places-in-chennai",
        },
        {
          title: "Shopping",
          desc: "Everything under a sky",
          link: "/visit/shopping-areas-in-chennai",
        },
        {
          title: "Travel Tips",
          desc: "Navigate Chennai Easily",
          link: "/visit/travels-chennai",
        },
        {
          title: "Wellness",
          desc: "Rejuvenate Chennai Style",
          link: "/visit/wellness-centres-in-chennai",
        },
        {
          title: "Events",
          desc: "Chennai Happening Now",
          link: "/visit/events-in-chennai",
        },
        {
          title: "Conferences",
          desc: "Chennai Happening Now",
          link: "/visit/conferences-in-chennai",
        },
      ],
    },
    {
      label: "Work",
      labellink: "/work-in-chennai",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/work-in-chennai",
        },
        {
          title: "Business Permits",
          desc: "Modern websites & web apps",
          link: "/work/business-registration-in-chennai",
        },
        {
          title: "Unicorns",
          desc: "Connect services seamlessly",
          link: "/work/unicorn-startups",
        },
        {
          title: "Co-workingspaces",
          desc: "Connect services seamlessly",
          link: "/work/coworking-space-in-chennai",
        },
        {
          title: "Paying Guest",
          desc: "Connect services seamlessly",
          link: "/work/pg-in-chennai",
        },
        {
          title: "Pay Perk",
          desc: "Connect services seamlessly",
          link: "/work/chennai-job-salary",
        },
        {
          title: "Career Growth",
          desc: "Connect services seamlessly",
          link: "/work/job-opportunities-in-chennai",
        },
        {
          title: "Networking",
          desc: "Connect services seamlessly",
          link: "/work/chennai-networks",
        },
        {
          title: "Worklife balance",
          desc: "Connect services seamlessly",
          link: "/work/working-in-chennai",
        },
      ],
    },
    {
      label: "Invest",
      labellink: "/invest-in-chennai",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/invest-in-chennai",
        },
        {
          title: "Realestate",
          desc: "Chennai Property Potential",
          link: "/invest/chennai-real-estate",
        },
        {
          title: "Franchise",
          desc: "Explore Business Opportunities",
          link: "/invest/franchise-business-in-chennai",
        },
        {
          title: "Startups",
          desc: "Invest Chennai Innovation",
          link: "/invest/startup-companies-in-chennai",
        },
        {
          title: "Green Power",
          desc: "Sustainable Chennai Growth",
          link: "/invest/solar-companies-in-chennai",
        },
        {
          title: "Chill Nest",
          desc: "Serene Investment Choice",
          link: "/invest/retirement-in-chennai",
        },
        {
          title: "Policy Boost",
          desc: "Chennai Policy Support",
          link: "/invest/government-projects-in-chennai",
        },
        {
          title: "Legal Flow",
          desc: "Navigate Chennai Investments",
          link: "/invest/law-firms-in-chennai",
        },
        {
          title: "NEWS",
          desc: "Chennai Investment Insights",
          link: "/invest/news-in-chennai",
        },
        {
          title: "Events",
          desc: "Chennai Investment Insights",
          link: "/invest/chennai-events",
        },
        {
          title: "Exhibitions",
          desc: "Chennai Investment Insights",
          link: "/invest/exhibitions-in-chennai",
        },
      ],
    },
    {
      label: "Innovate",
      labellink: "/innovate-chennai",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/innovate-chennai",
        },
        {
          title: "IT and Software",
          desc: "Modern websites & web apps",
          link: "/innovate/it-companies-in-chennai",
        },
        {
          title: "AI",
          desc: "iOS & Android solutions",
          link: "/innovate/ai-companies-in-chennai",
        },
        {
          title: "EV Mobility",
          desc: "Connect services seamlessly",
          link: "/innovate/ev-vehicles-in-chennai",
        },
        {
          title: "Smart Cities",
          desc: "Modern websites & web apps",
          link: "/innovate/smart-city-chennai",
        },
        {
          title: "Health Tech",
          desc: "iOS & Android solutions",
          link: "/innovate/health-tech-in-chennai",
        },
        {
          title: "Robotics",
          desc: "Connect services seamlessly",
          link: "/innovate/robotics-in-chennai",
        },
        {
          title: "Blockchain",
          desc: "Modern websites & web apps",
          link: "/innovate/blockchain-course-in-chennai",
        },
        {
          title: "Auto Tech",
          desc: "iOS & Android solutions",
          link: "/innovate/autotech-chennai",
        },
        {
          title: "Edu Tech",
          desc: "Connect services seamlessly",
          link: "/innovate/edutech-chennai",
        },
        {
          title: "3D Printing",
          desc: "Modern websites & web apps",
          link: "/innovate/3d-printing-in-chennai",
        },
        {
          title: "AR/VR",
          desc: "iOS & Android solutions",
          link: "/innovate/ar-vr-companies-in-chennai",
        },
        {
          title: "Agri Tech",
          desc: "Connect services seamlessly",
          link: "/innovate/agri-tech-companies-in-chennai",
        },
      ],
    },
    {
      label: "Volunteer",
      labellink: "/volunteer-in-chennai",

      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/volunteer-in-chennai",
        },
        {
          title: "Digital",
          desc: "Connect Chennai Volunteers",
          link: "/volunteer-in-chennai",
        },
        {
          title: "Events",
          desc: "Volunteers Power Gatherings",
          link: "/volunteer-in-chennai",
        },
        {
          title: "Content Creators",
          desc: "Sharing Volunteer Stories",
          link: "/volunteer-in-chennai",
        },
        {
          title: "Design &  Art",
          desc: "Visualizing Volunteer Impact",
          link: "/volunteer-in-chennai",
        },
        {
          title: "Influencers",
          desc: "Amplifying Volunteer Voices",
          link: "/volunteer-in-chennai",
        },
        {
          title: "Mentors",
          desc: "Guiding Future Volunteers",
          link: "/volunteer-in-chennai",
        },
      ],
    },
  ];
  return (
    <>
      <div className="menuBarFullContainer">
        <div className="menuBarFullFirstSection"></div>

        <div className="menuBarFullSecondSection">
          <div className="closeButtonMenubar">
            {/* <img
              className="SuperCehnnaiLogoImages"
              src="/images/super-chennai-logo-final-header.png"
              src="/images/super-chennai-logo-final.png"
              alt=""
            /> */}
            <div className="SuperCehnnaiLogoImages"></div>
            <img
              className="closeButtonMenuBarMobile cursor:pointer"
              onClick={() => setMenuBar(false)}
              // src="/images/menuBarCloseButton.png"
              src="/images/close.svg"
              // src="/images/HomePage-Images/menuBarCloseButton-removebg-preview.png"
              alt=""
            />
            <img
              className="closeButtonMenuBaDesktop cursor-pointer"
              onClick={() => setMenuBar(false)}
              src="/images/menuBarCloseButton.png"
              alt=""
            />
          </div>
          {/* <div className="w-full max-w-md mx-auto menuBarMain">
            {menuItemsMobile.map((section, index) => (
              <div key={section.label} className="border-b border-gray-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center mobileNavLinks"
                >
                  <span>{section.label}</span>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="pl-4 pb-4 space-y-2">
                    {section.content.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        className="block text-sm text-gray-700 hover:text-blue-500"
                      >
                        <div className="font-medium titleMenuBar">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div> */}
          <div className="w-full max-w-md mx-auto menuBarMain">
            {menuItemsMobile.map((section, index) => (
              <div key={section.label} className="">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center mobileNavLinks"
                >
                  <span>{section.label}</span>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden pl-4 pb-4 space-y-2 MenuBarTitleSection"
                    >
                      {section.content.map((item, i) => (
                        <a
                          key={i}
                          href={item.link}
                          className="block text-sm text-gray-700 hover:text-blue-500"
                        >
                          <div className="font-medium titleMenuBar">
                            {item.title}
                          </div>
                          {/* <div className="text-xs text-gray-500">
                            {item.desc}
                          </div> */}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="w-full max-w-md mx-auto containerMenuBar">
            <ul className="w-full max-w-md mx-auto menuBarLinksContent">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                  {/* <Link to={item.href}>{item.label}</Link> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
