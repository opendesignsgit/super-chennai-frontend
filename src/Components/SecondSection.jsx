import React from "react";
import "../assets/Css/Welcometosuperchennai.css";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 }, // start faded + lower
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
  }),
};

const firstColumn = [
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      It's a citizen-led movement
    </span>{" "}
    celebrating Chennai on the global stage
  </>,
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      Positioning Chennai
    </span>{" "}
    as a hot, happening, and future-ready city
  </>,
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      Showcasing opportunities
    </span>{" "}
    to live, visit, work, invest, and innovate
  </>,
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      Driving local pride
    </span>{" "}
    through campaigns, contests, and city-wide collaborations
  </>,
];

const secondColumn = [
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      Creating positive narratives
    </span>{" "}
    across media, events, and strategic partnerships
  </>,
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      Empowering changemakers
    </span>{" "}
    and volunteers to champion our city
  </>,
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>
      Harnessing technology and talent
    </span>{" "}
    to shape Chennai's tomorrow
  </>,
  <>
    <span style={{ color: "#a44294", fontWeight: "600" }}>Bold mission:</span>{" "}
    Propel Chennai into the World's Top 100 Cities within 3 years
  </>,
];

const SecondSection = () => {
  return (
    <section className="welcometochennaibanner">
      <div className="ChennaiInvestMents welcometosuperchennairow container max-w-7xl mx-auto px-4 ">
        <div className="welcomePagefirst">
          <h1 class="chennaiInvestmentsHeading">Welcome to Super Chennai</h1>
          <h5
            class="chennaiInvestmentsHeadingSub"
            style={{ textAlign: "left" }}
          >
            Chennai is India’s healthcare capital, SaaS capital, fintech
            capital, and automobile capital. Home to 7.5 million people, it is a
            386-year-old city alive with heritage and vibing to the march of the
            future.
          </h5>
        </div>
        <div className="welcomePageSecond">
          <div className="welcomeSecondPageDesign">
            <div className="welcomePageseconddesign">
              {firstColumn.map((text, i) => (
                <motion.h5
                  key={i}
                  className="chennaiInvestmentsHeadingSub "
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {/* <img
                    className="heartWelcomesvg"
                    src="/images/icons/welcometochennaihomepage.svg"
                    alt=""
                  /> */}
                  <motion.img
                    src="/images/icons/welcometochennaihomepage.svg"
                    alt="heart"
                    className="heartWelcomesvg"
                    animate={{ scale: [1, 1.2, 1] }} // heartbeat effect
                    transition={{
                      duration: 0.8,
                      repeat: Infinity, // loop forever
                      repeatDelay: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                  {text}
                </motion.h5>
              ))}
            </div>
            <div className="welcomePageseconddesign">
              {secondColumn.map((text, i) => (
                <motion.h5
                  key={i}
                  className="chennaiInvestmentsHeadingSub "
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + firstColumn.length} // continue delay
                >
                  {/* <img
                    className="heartWelcomesvg"
                    src="/images/icons/welcometochennaihomepage.svg"
                    alt=""
                  /> */}
                  <motion.img
                    src="/images/icons/welcometochennaihomepage.svg"
                    alt="heart"
                    className="heartWelcomesvg"
                    animate={{ scale: [1, 1.2, 1] }} // heartbeat effect
                    transition={{
                      duration: 0.8,
                      repeat: Infinity, // loop forever
                      repeatDelay: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                  {text}
                </motion.h5>
              ))}
            </div>
          </div>
          <div className="volunteerSectionContent">
            <a href="/about" class="exploreMoreLink">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
