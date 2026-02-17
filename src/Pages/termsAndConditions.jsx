import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/Css/CostOfLiving.css";

export default function TermsAndConditions() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms and conditions | Super Chennai</title>
        <meta
          name="description"
          content="Refund & Return Policy for SuperChennai contest events."
        />
        <link rel="canonical" href="/refund-policy" />
      </Helmet>

      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/terms&condition-banner-superchennai.jpeg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Terms and conditions </h3>
              <div className="breadCrum">
                <Link to="/refund-policy"> Terms and conditions  </Link> -{" "}
                <a href="">Terms and conditions </a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch"></div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection detailIntro">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className={`CostOflivingBackground ${
                scrollDir === "right"
                  ? "scroll-rightCostofLiving"
                  : "scroll-leftCostofLiving"
              }`}
              ref={bgTextRef}
            >
              <p>Super &nbsp; Chennai &nbsp; Super &nbsp; Chennai</p>
            </div>

            <div className="workIntro">
              <h3>Terms And Conditions </h3>

              <p>
                Terms & Conditions Welcome to www.superchennai.com. By accessing
                this website, you agree to be bound by the following terms and
                conditions. The content on this website is provided for general
                information about Chennai. While we strive to keep the
                information accurate and up to date, we make no warranties
                regarding its completeness, reliability, or accuracy. All text,
                images, logos, and website content are the property of Super
                Chennai and may not be copied, reproduced, or used without prior
                written permission.
              </p>

              <p>
                Users agree to use this website only for lawful purposes and not
                to attempt any unauthorized access, misuse, or disruption of the
                website or its services. This website may contain links to
                third-party websites. We are not responsible for the content or
                privacy practices of those websites. We reserve the right to
                update or modify these Terms & Conditions at any time without
                prior notice.
                <a
                  className="text-blue-600 hover:underline"
                  href="mailto:hello@superchennai.com"
                >
                  hello@superchennai.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
