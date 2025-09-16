import { useState } from "react";
import Slider from "react-slick";
import "../assets/Css/Explore.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Explore() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.1 },
      },
      {
        breakpoint: 440,
        settings: { slidesToShow: 1.3 },
      },
      {
        breakpoint: 390,
        settings: { slidesToShow: 1.2 },
      },
      {
        breakpoint: 380,
        settings: { slidesToShow: 1.1 },
      },
    ],
  };

  const exploreCards = [
    {
      title: "Restaurants",
      place: "in Chennai",
      image: "/images/HomePage-Images/interior-restaurant.png",
      link: "/visit/restaurants-in-chennai",
      altText: "Chennai restaurants",
    },
    {
      title: "Nightlife",
      place: "in Chennai",
      image:
        "/images/HomePage-Images/crowd-people-concert-with-their-hands-air.png",
      link: "/ChennaiNightLife",
      altText: "Concert in chennai",
    },
    {
      title: "Sports",
      place: "in Chennai",
      image:
        "/images/HomePage-Images/low-section-man-holding-soccer-ball-beach.png",
      link: "/chennaisports",
      altText: "Things to do in chennai",
    },
    {
      title: "Events",
      place: "in Chennai",
      image:
        "/images/HomePage-Images/guitarist-playing-electrical-guitar-rock-concert.png",
      link: "/events",
      altText: "music concert in chennai",
    },
    {
      title: "Health Care",
      place: "in Chennai",
      image: "/images/HomePage-Images/health-care.png",
      link: "/live/healthcare-in-chennai",
      altText: "chennai health care",
    },
    {
      title: "Shopping",
      place: "in Chennai",
      image: "/images/HomePage-Images/front-view-cyber-monday-composition.png",
      link: "/visit/shopping-areas-in-chennai",
      altText: "shopping malls in chennai city",
    },
    {
      title: "Entertainment",
      place: "in Chennai",
      image: "/images/HomePage-Images/boy-with-vr-glasses-cinema.png",
      link: "/chennaientertainment",
      altText: "ar vr companies in chennai",
    },
    {
      title: "Networks",
      place: "in Chennai",
      image:
        "/images/HomePage-Images/strength-people-hands-success-meeting.png",
      link: "/work/chennai-networks",
      altText: "hangout spots in chennai",
    },
  ];

  // Split cards into two rows
  const firstRow = exploreCards.slice(0, 4); // First 5 cards
  const secondRow = exploreCards.slice(4, 8); // Remaining cards

  return (
    <div className="container max-w-7xl mx-auto px-4 ExploreInvestContainerdiv">
      <div className="ChennaiInvestMents">
        <h1
          className="chennaiInvestmentsHeading"
          style={{ textAlign: "center" }}
        >
          Explore Chennai{" "}
        </h1>
        <h5
          className="chennaiInvestmentsHeadingSub"
          style={{ textAlign: "center" }}
        >
          Explore restaurants, nightlife, sports, shopping, and entertainment in
          Super Chennai—where every moment is extraordinary.
        </h5>
      </div>
      <div className="relative w-full px-4 py-10 ExploreChennaiContainer">
        <div className="container exploreChennaiContiner max-w-7xl mx-auto px-4 space-y-10">
          {/* First Row Slider */}
          <div className="space-y-4">
            <Slider {...settings}>
              {firstRow.map((card, index) => (
                // <Link to={card.link}>
                //   <div className="exploreSectionFlex p-4" key={index}>
                //     <img src={card.image} alt={card.title} />
                //     <div>
                //       <h3>
                //         {card.title} <br />
                //         <span>{card.place}</span>
                //       </h3>
                //     </div>
                //     <div className="arrowIcons"></div>
                //   </div>
                // </Link>
                <a href={card.link}>
                  <div className="exploreSectionFlex p-4" key={index}>
                    <img src={card.image} alt={card.altText} />
                    <div>
                      <h3>
                        {card.title} <br />
                        <span>{card.place}</span>
                      </h3>
                    </div>
                    <div className="arrowIcons"></div>
                  </div>
                </a>
              ))}
            </Slider>
          </div>

          {/* Second Row Slider */}
          <div className="space-y-4">
            <Slider {...settings}>
              {secondRow.map((card, index) => (
                // <Link to={card.link}>
                //   <div className="exploreSectionFlex p-4" key={index}>
                //     <img src={card.image} alt={card.title} />
                //     <div>
                //       <h3>
                //         {card.title} <br />
                //         <span>{card.place}</span>
                //       </h3>
                //     </div>

                //     <div className="arrowIcons"></div>
                //   </div>
                // </Link>
                <a href={card.link}>
                  <div className="exploreSectionFlex p-4" key={index}>
                    <img src={card.image} alt={card.altText} />
                    <div>
                      <h3>
                        {card.title} <br />
                        <span>{card.place}</span>
                      </h3>
                    </div>
                    <div className="arrowIcons"></div>
                  </div>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
