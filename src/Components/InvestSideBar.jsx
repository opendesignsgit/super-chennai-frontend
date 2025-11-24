import React, { useState, useEffect, useRef } from "react";
import "../assets/Css/Utilities1.css";

export default function Utilitiesinchennai1() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const tabsData = [
    {
      id: "utilities1-North",
      title: "Government Initiatives",
      content: (
        <>
          <div className="InvestMainDivSection TabInvestSection">
            <img src="/images/Invest-Images/Icons/government-icon.svg"/>
            <h3 className="investH3" style={{ color: "#626262" }}>GOVERNMENT INITIATIVES</h3>
            {/* <h5 style={{ color: "#000" }}>Solar Wind</h5> */}
            <p style={{ color: "#000" }}>
              Existing investment opportunities in government-initiated and
              driven wind and solar projects. It can help create a more
              environmentally friendly future while taking advantage of a
              growing market.
            </p>
            <div className="exploreMorebuttonInvestChennai">
              <a href="/invest/government-projects-in-chennai" data-discover="true">
                Explore More
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "Franchise",
      title: "Formulations & Regulations",
      content: (
        <>
          <div className="InvestMainDivSection TabInvestSection">
             <img src="/images/Invest-Images/Icons/formalities-icon.svg"/>
            <h3 className="investH3" style={{ color: "#626262" }}>FORMALITIES & REGULATIONS</h3>
            {/* <h5 style={{ color: "#000" }}></h5> */}
            <p style={{ color: "#000" }}>
              Navigating legal systems, such as company registration and
              environmental permits, is part of investing in Chennai. To make
              these requirements easier, government organizations provide online
              portals and instruction.
            </p>
            <div className="exploreMorebuttonInvestChennai">
              <a href="/invest/law-firms-in-chennai" data-discover="true">
                Explore More
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "Renewable Energy",
      title: "News",
      content: (
        <>
          <div className="InvestMainDivSection TabInvestSection">
             <img src="/images/Invest-Images/Icons/news-icon.svg"/>
            <h3  className="investH3" style={{ color: "#626262" }}>NEWS</h3>
            {/* <h5 style={{ color: "#000" }}></h5> */}
            <p style={{ color: "#000" }}>
              Chennai's increasing investment in industries like data centers
              and electric cars has been highlighted in recent headlines. Stay
              up-to-date on business news to learn about the most recent
              advancements and prospects.
            </p>
            <div className="exploreMorebuttonInvestChennai">
              <a href="/invest/news-in-chennai" data-discover="true">
                Explore More
              </a>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "Renewable Energy1",
      title: "Events",
      content: (
        <>
          <div className="InvestMainDivSection TabInvestSection">
             <img src="/images/Invest-Images/Icons/events-icon.svg"/>
            <h3 className="investH3" style={{ color: "#626262" }}>EVENTS</h3>
            {/* <h5 style={{ color: "#000" }}></h5> */}
            <p style={{ color: "#000" }}>
             A number of corporate conferences, industry-specific seminars, and investment summits are held in Chennai. These gatherings offer chances for networking, information about new industries, and stages for exhibiting investment possibilities.
            </p>
            <div className="exploreMorebuttonInvestChennai">
              <a href="/invest/chennai-events" data-discover="true">
                Explore More
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "Retirement1",
      title: "Exhibitions",
      content: (
        <>
          <div className="InvestMainDivSection TabInvestSection">
             <img src="/images/Invest-Images/Icons/exhibition-icon.svg"/>
            <h3 className="investH3" style={{ color: "#626262" }}>EXHIBITIONS</h3>
            {/* <h5 style={{ color: "#000" }}>PROPERTY, AUTOMOBILE</h5> */}
            <p style={{ color: "#000" }}>
           Investors have the opportunity to evaluate industry trends and uncover potential enterprises by attending these events, which feature goods, innovations, and possible collaborations.
            </p>
            <div className="exploreMorebuttonInvestChennai">
              <a href="/invest/exhibitions-in-chennai" data-discover="true">
                Explore More
              </a>
            </div>
          </div>
        </>
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState("utilities1-North");

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
      <div className="utilities1-main-wrapper">
        <section className="py-[10vh] utilities1-section">
          <div className="flex flex-col container max-w-7xl mx-auto px-4">
            {/* <div className="utilities1-title mb-[5vh]">
              <h2>Utilities in Chennai</h2>
              <p>
                Chennai is designed for everyday ease — with well-connected
                utilities, accessible essentials, and services that keep life
                running smoothly.
              </p>
            </div> */}

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
