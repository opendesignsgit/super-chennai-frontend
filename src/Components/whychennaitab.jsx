import React, { useState, useEffect, useRef } from "react";
import "../assets/Css/Utilities1.css";

export default function Whychennaitab() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const tabsData = [
    {
      id: "one",
      title: <><small>SUPER FOR</small> Living</>,
      content: (
        <>
          <div class="InvestMainDivSection TabInvestSection">
            <img src="/images/super-for-living.jpg"/>
            {/* <h3 className="investH3" style={{ color: "#626262" }}>A City That Feels Like Home</h3> */}
             <ul className="home-city-points">
           <li>Modern infrastructure
with metro rail, port,
roads, and reliable
services.</li>
            <li>Inclusive, welcoming
community for
all cultures.</li>
             <li>
Cleaner air, 
thanks to coastal 
breeze.</li>
              <li>Among India’s 
safest metros 
for women.</li>
     <li>Less congestion 
and smoother 
traffic flow.</li>
     <li>Progressive state with
stable, forward-looking
policies.</li>
     <li>Affordable cost of
living compared to
other big cities.</li>
     <li>A unique blend of
heritage and
modern living.</li>

          </ul>
            {/* <div class="exploreMorebuttonInvestChennai">
              <a href="/invest/solar-companies-in-chennai" data-discover="true">
                Explore More
              </a>
            </div> */}
          </div>
        </>
      ),
    },
    {
      id: "two",
      title: <><small>SUPER FOR </small> VISITING</>,
       content: (
        <>
          <div class="InvestMainDivSection TabInvestSection">
            <img src="/images/super-for-visit.jpg"/>
            {/* <h3 className="investH3" style={{ color: "#626262" }}>A City That Feels Like Home</h3> */}
             <ul className="home-city-points">
           <li>40 beaches, as 
many as Goa.</li>
            <li>7,500+ restaurants, 
including India’s No.1</li>
             <li>
 Lively cafes, bars, and 
music venues.</li>
              <li> India’s first artists’ 
village, Cholamandal.</li>
     <li> UNESCO-listed 
temples and 
heritage sites.</li>
     <li> Iconic music and 
dance festivals.</li>
     <li> Great shopping, from 
malls to markets.</li>
     <li>Sun, culture, and 
unmatched local 
flavor.
</li>

          </ul>
            {/* <div class="exploreMorebuttonInvestChennai">
              <a href="/invest/solar-companies-in-chennai" data-discover="true">
                Explore More
              </a>
            </div> */}
          </div>
        </>
      ),
    },
    {
      id: "three",
       title: <><small>SUPER FOR </small> INVESTING</>,
       content: (
        <>
          <div class="InvestMainDivSection TabInvestSection">
            <img src="/images/super-for-investing.jpg"/>
            {/* <h3 className="investH3" style={{ color: "#626262" }}>A City That Feels Like Home</h3> */}
             <ul className="home-city-points">
           <li> Fastest-growing real 
estate market among 
major metros.</li>
            <li> Strong in advanced 
manufacturing and 
auto components.</li>
             <li>
Rapid rise in AI and 
deep tech 
investments.</li>
              <li>Major hub for 
healthcare and 
medical devices.</li>
     <li> Thriving edtech 
ecosystem with 
global reach.</li>
     <li>Expanding defense 
and aerospace 
industries.</li>
     <li>Focused push 
into drone 
manufacturing.</li>
     <li> Competitive costs 
and high-return 
potential.
</li>

          </ul>
            {/* <div class="exploreMorebuttonInvestChennai">
              <a href="/invest/solar-companies-in-chennai" data-discover="true">
                Explore More
              </a>
            </div> */}
          </div>
        </>
      ),
    },

    {
      id: "four",
   title: <><small>SUPER FOR </small> INNOVATING</>,
      content: (
        <>
          <div class="InvestMainDivSection TabInvestSection">
            <img src="/images/super-for-innovating.jpg"/>
            {/* <h3 className="investH3" style={{ color: "#626262" }}>A City That Feels Like Home</h3> */}
             <ul className="home-city-points">
           <li> Home to IIT Madras 
Research Park, India’s 
first of its kind.</li>
            <li>2,000+ startups driving 
innovation.</li>
             <li>
 Birthplace of 
unicorns like 
Freshworks and Zoho.</li>
              <li>Strong in engineering 
breakthroughs and 
auto tech.</li>
     <li>Hub for defense and 
aerospace R&D.</li>
     <li>Leading AI, SaaS, and 
fintech disruption.</li>
     <li>Active in sports tech 
and analytics.</li>
     <li> A city where ideas 
become impact.
</li>

          </ul>
            {/* <div class="exploreMorebuttonInvestChennai">
              <a href="/invest/solar-companies-in-chennai" data-discover="true">
                Explore More
              </a>
            </div> */}
          </div>
        </>
      ),
    },
  
  ];
  const [activeTab, setActiveTab] = useState("one");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
      <div className="utilities1-main-wrapper whyChennaiTab">
        <section className="py-[10vh] utilities1-section">
          <div className="flex flex-col container max-w-7xl mx-auto px-4">
            <div className="utilities1-title mb-[5vh] text-center">
              <h2>Why Chennai?</h2>
              <p>
              <strong> Because it’s not just a city—it’s a feeling.</strong></p>
<p>Where else can you sip filter coffee at sunrise, code a world-changing app by noon, and catch a Carnatic concert or <br/>
    cricket match by dusk—all in one city? Here’s why Chennai stands out, proudly and unapologetically.</p>
 
            </div>

            <div className="utilities1-column">
              <div className="utilities1-tabs-container flex">
                {/* Left side buttons */}
                <ul className="utilities1-tabs flex flex-col items-start justify-center">
                  {tabsData.map((tab, index) => (
                    <li
                      key={tab.id}
                      className={`utilities1-tab ${
                        activeTab === tab.id ? "utilities1-tab-active" : ""
                      } ${
                        index === tabsData.length - 1
                          ? "utilities1-tab-last"
                          : ""
                      }`}
                      onClick={() => handleTabClick(tab.id)}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      {tab.title}
                    </li>
                  ))}
                </ul>

                {/* Right side content */}
                <div className="utilities1-content-container">
                  {tabsData.map((tab) => (
                    <React.Fragment key={tab.id}>
                      <h3
                        className={`utilities1-tab-heading ${
                          activeTab === tab.id
                            ? "utilities1-heading-active"
                            : ""
                        }`}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {tab.title}
                        <span className="utilities1-toggle-symbol">
                          {activeTab === tab.id ? "−" : "+"}
                        </span>
                      </h3>
                      <div
                        id={tab.id}
                        className="utilities1-tab-content"
                        style={{
                          display: activeTab === tab.id ? "block" : "none",
                        }}
                      >
                        {tab.content}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
