import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Becameavolunteer from "../Components/BecameAVolunteer";
import CardCarousel from "../Components/ChennaiChillZoneOut";
import ChennaiInvestments from "../Components/ChennaiInvestments";
import HoverImageSectionHorizontal from "../Components/DiverseDelights";
import CardCarousel111 from "../Components/EventsCalender";
import Explore from "../Components/Explore";
import Funchennai from "../Components/FunChennai";
// import MegaMenu from "../Components/Header";
import HeroSlider from "../Components/HeroSlider";
// import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import StartupChennai from "../Components/StartupChennai";
import TechEdu from "../Components/TechEdu";
import TrendingChennai1 from "../Components/TrendingChenna1i";
import { Helmet } from "react-helmet-async";

import Utilitiesinchennai from "../Components/Utilities";
import HomepageCarousel from "../Components/HeroSliderNew";
import SecondSection from "../Components/SecondSection";
import { useEvents } from "../Pages/Events/Hooks/UseEvents";
import EventCalender from "../Pages/Events/Components/EventCalender/EventCalender";
import AerialMap from "../Components/AerialMap";
export default function HomePage() {
  const location = useLocation();

  const { events } = useEvents();
  const upcomingEvents = [...events];
  let aosInitialized = false;
  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({
        duration: 800,
        offset: 100,
        once: true,
      });
      aosInitialized = true;
    }
  }, []);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Super Chennai",
    url: "https://www.superchennai.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.superchennai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    hasPart: [
      {
        "@type": "SiteNavigationElement",
        name: "Chennai Events",
        url: "https://www.superchennai.com/chennai-events",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Superchennai Contest",
        url: "https://www.superchennai.com/superchennai-contest",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Restaurants in Chennai",
        url: "https://www.superchennai.com/visit/restaurants-in-chennai",
      },
    ],
  };

  useEffect(() => {
    const scrollPos = sessionStorage.getItem("scrollPos");

    const handleAOSReadyScroll = () => {
      if (scrollPos) {
        window.scrollTo({ top: parseInt(scrollPos, 10), behavior: "auto" });
      }
    };

    // Delay scroll restore slightly to wait for AOS and layout
    const timeout = setTimeout(handleAOSReadyScroll, 500); // tweak this if needed

    // Save scroll position before unload
    const saveScrollPos = () => {
      sessionStorage.setItem("scrollPos", window.scrollY);
    };
    window.addEventListener("beforeunload", saveScrollPos);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("beforeunload", saveScrollPos);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Discover Super Chennai: Culture, Food, Beaches & More</title>
        <meta
          name="description"
          content="Experience Super Chennai, a vibrant city where coastal charm meets thriving IT hubs, top education, nightlife, buzzing markets, and a love for art and sport."
        />

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <HeroSlider />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <SecondSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Explore />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TrendingChennai1 />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Funchennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <StartupChennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <HoverImageSectionHorizontal />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ChennaiInvestments />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TechEdu />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Utilitiesinchennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <CardCarousel />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        {/* <CardCarousel111 /> */}
        <EventCalender events={upcomingEvents} />
        {/* <AerialMap /> */}
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <InstagramReelsMarquee />
      </div>
      <div data-aos="fade-up" data-aos-delay="50">
        <Becameavolunteer />
      </div>
    </>
  );
}
