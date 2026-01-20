import Search from "../Components/Search";
import "../assets/Css/Live.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useRef, useEffect } from "react";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SEO from "../Components/SEO";

export default function Live() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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

  const chennaiEssentials = [
    {
      id: 1,
      image: "/images/Live-Images/Cost-of-living.jpg",
      text: "Cost of Living",
      link: "/live/cost-of-living-in-chennai",
    },
    {
      id: 2,
      image: "/images/Live-Images/Residency.jpg",
      text: "Residency",
      link: "/live/residential-properties-in-chennai",
    },
    {
      id: 3,
      image: "/images/Live-Images/Employment.jpg",
      text: "Employment",
      link: "/live/employment-in-chennai",
    },
    {
      id: 4,
      image: "/images/Live-Images/chennaiLifeEssential4.png",
      text: "Transportation",
      link: "/live/transportation-in-chennai",
    },

    {
      id: 6,
      image: "/images/Live-Images/Healthcare-banner.jpg",
      text: "Healthcare",
      link: "/live/healthcare-in-chennai",
    },
    {
      id: 7,
      image: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      text: "Culture Religious",
      link: "/live/worship-in-chennai",
    },
    {
      id: 8,
      image: "/images/Live-Images/Recreation.jpg",
      text: "Recreation",
      link: "/visit/things-to-do-in-chennai",
    },

    {
      id: 10,
      image: "/images/Live-Images/Neighbourhood.jpg",
      text: "Neighbourhood",
      link: "/live/places-near-chennai",
    },
    {
      id: 11,
      image: "/images/Live-Images/Quality-of-Life.jpg",
      text: "Quality of Life",
      link: "/live/quality-of-life-in-chennai",
    },
    {
      id: 12,
      image: "/images/Live-Images/Future-Growth-&-Development.jpg",
      text: "Future Growth Developing",
      link: "/live/infrastructure-development-in-chennai",
    },
    {
      id: 12,
      image: "/images/Live-Images/Educational-Institutions.jpg",
      text: "Educational Institutions",
      link: "/live/educational-institutions-in-chennai",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Living in Chennai: Everyday Chennai Life Essential</title>
        <meta
          name="description"
          content="Explore Chennai transportation, find top jobs in Chennai, and discover leading schools and colleges in Chennai for a balanced and fulfilling city life."
        />
        <link rel="canonical" href="/live-in-chennai" />
      </Helmet>

      <div
        className="VolunteerBgSection LiveBgSection notHome"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="/images/Live-Images/liveBanner.jpg" alt="live in chennai" />
            </div>
            <h3 className="voluntterContent">Live</h3>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
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
              {/* <h3>Living in Chennai: <br /> A Connected, Cosmopolitan Experience</h3> */}

              <h1>Living in Chennai </h1>
              {/* <h3>A Connected, Cosmopolitan Experience</h3> */}

              <p className="paraoneLiveSection">
                Living in Chennai, India, means experiencing the perfect blend
                of deep-rooted tradition and dynamic urban growth. Known for its
                warm hospitality,{" "}
                <h2 className="paraoneLiveSection seoText">
                  {" "}
                  Chennai City Life
                </h2>{" "}
                offers something for everyone, whether you're drawn to its
                thriving IT hubs, rich culture, or coastal charm. From vibrant
                neighbourhoods and diverse food scenes to excellent healthcare,
                education, and affordable housing, the city supports a
                well-rounded lifestyle. Whether you're relocating, investing, or
                simply curious, explore what makes living in Chennai both unique
                and rewarding.
              </p>
              <p className="paraZeroLiveSection">Why Chennai Works for You</p>
              <p className="paraoneLiveSection">
                Chennai transportation is reliable, efficient, and expanding,
                with Metro lines, suburban rail, buses, and app-based cabs
                making daily commutes hassle-free. Whether you’re heading to the
                office or exploring the city, getting around is simple and
                affordable.
              </p>
              <p className="paraoneLiveSection">
                Thanks to its growing economy,{" "}
                <h3 className="paraoneLiveSection seoText"> jobs in Chennai</h3>{" "}
                span across IT, automobile, fintech, healthcare, education, and
                creative sectors, offering opportunities for professionals,
                entrepreneurs, and freelancers alike.
              </p>
              <p className="paraoneLiveSection">
                For families relocating or settling down,
                <h4 className="paraoneLiveSection seoText">
                  {" "}
                  Educational Institutions in Chennai
                </h4>{" "}
                include top-rated CBSE, ICSE, IGCSE, and IB institutions, along
                with renowned universities and professional colleges. Whatever
                your background or plans, Chennai offers the right mix of work,
                learning, and living.
              </p>
            </div>
            <img
              src="/images/Live-Images/volunteerBannerImagesContent.png"
              alt="volunteer work in chennai"
            />
          </div>
        </div>
      </div>

      <div
        className="ChennaiEssentisalMainContainer"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="chennaiLifeEssentialHeading">
            {/* <h3>Chennai Life Essential</h3> */}
            <h2>Chennai Life Essential</h2>
            <p>
              Regardless of whether you have chosen Chennai to stay or move from
              one area to another area, Super Chennai will be the best guide to
              explore the essentials. So that you could easily live a lively and
              energetic <h6 className="seoPurposeClass" >life in Chennai.</h6> 
            </p>
          </div>

          <div className="ChennaiContainerLiveEssential">
            <div className="ImageConatinerLiveEssential">
              {chennaiEssentials.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  className="ChennaiEssentialimagecontainer"
                >
                  <img src={item.image} alt={item.text} />
                  <div className="ChennaiEssentialOverlay">
                    <div className="ChennaiEssentialImageText">{item.text}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="LivePageInstragarm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <InstagramReelsMarquee />
      </div>

      <Becameavolunteer />
    </>
  );
}
