import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../assets/Css/Innovate.css";
import InnovateSlider from "../Components/InnovateSldier";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Innovate() {
  const infoData = [
    {
      title: "Chennai Innovation Centre: A Thriving Ecosystem",
      desc: `The rise of <strong> Chennai innovation centres </strong>—both public and private—has enabled the city to push boundaries in sectors like IT, EVs, fintech, life sciences, and aerospace. These centres foster collaboration between academia, corporates, and startups, fueling scalable breakthroughs.`,
      icon: "/images/Visit-Images/icons/Scenic-Relaxing.svg",
      imgAlt: "",
    },
    {
      title: "Home to Breakthroughs and Bold Ideas",
      desc: "From AI-driven SaaS solutions to green energy projects and deep-tech research, <strong> Chennai innovations </strong> are transforming lives and industries. The city is a preferred destination for R&D thanks to institutions like IIT Madras and a strong startup support network.",
      icon: "/images/Visit-Images/icons/Buzzing-City-Life.svg",
      imgAlt: "",
    },
    {
      title: "Powering a Future-First Economy",
      desc: "Chennai’s commitment to innovation goes beyond technology—it’s about reimagining how industries operate, cities function, and people live. Whether you're investing in research, launching a startup, or expanding operations, Chennai offers a future-focused platform like no other.",
      icon: "/images/Visit-Images/icons/Where-Flavour-Meets-Culture.svg",
      imgAlt: "",
    },
    {
      title: "A Hotspot for Startup Disruption",
      desc: "With state-backed policies and a growing number of incubators, Chennai empowers entrepreneurs building disruptive tech across healthtech, edtech, climate-tech, and more. Its startup culture is marked by creativity, resilience, and access to top talent.",
      icon: "/images/Visit-Images/icons/Weekend-Getaways-Chennai-Style.svg",
      imgAlt: "",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Chennai Innovation & Technology | Chennai Innovation Centres
        </title>
        <meta
          name="description"
          content="Explore Chennai innovation and technology across AI, fintech, robotics, and more. Discover top Chennai innovation centre hubs driving future-ready solutions."
        />
        <link rel="canonical" href="/innovate-chennai" />
      </Helmet>
      <div
        className="VolunteerBgSection InnovateBgSection notHome"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img
                src="/images/Innovate-Images/InnovateHeroBanner.jpg"
                alt=""
              />
            </div>
            <h3 className="voluntterContent">Innovate</h3>
          </div>
        </div>

        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <div className="InnovateChennaiContainerFlex container max-w-7xl mx-auto px-4">
          <div className="InnovateChennaiContent">
            <h3>Chennai Innovation and Technology: Shaping Tomorrow, Today</h3>

            <p>
              Chennai is fast emerging as a dynamic innovation hub — where
              industrial legacy meets cutting-edge advancements. With a strong
              focus on <strong>Chennai innovation and technology,</strong> the
              city nurtures a future-ready ecosystem built on smart solutions,
              sustainable growth, and digital disruption.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container container max-w-7xl mx-auto px-4">
        <div className="section-left-image">
          <img
            src="/images/Innovate-Images/Smart-City-thum-big.jpg"
            alt="Main Side Visual"
          />
        </div>

        <div className="section-right-content">
          {infoData.map((item, index) => (
            <div className="info-item-block" key={index}>
              <img src={item.icon} alt="icon" className="info-icon" />
              <div className="info-text-block">
                <h3>{item.title}</h3>
                {/* <p>{item.desc}</p> */}
                <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="accomodationSldierSection"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div></div>
      </div>

      <div data-aos="fade-up" data-aos-delay="800">
        <InnovateSlider />
      </div>

      <InstagramReelsMarquee />
    </>
  );
}
