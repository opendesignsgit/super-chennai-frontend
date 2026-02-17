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
        <title>Refund Policy | Super Chennai</title>
        <meta
          name="description"
          content="Refund & Return Policy for SuperChennai contest events."
        />
        <link rel="canonical" href="/refund-policy" />
      </Helmet>

      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/superchennai-refund-policy.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Refund Policy</h3>
              <div className="breadCrum">
                <Link to="/refund-policy"> Refund Policy </Link> -{" "}
                <a href=""> Refund Policy</a>
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
              <h3>Refund Policy </h3>

              <p>
                At SuperChennai Contest Events, we aim to provide a smooth and
                transparent registration experience. Participants may request a
                refund within <strong>7 days</strong> of registration,<br></br>{" "}
                provided the contest or event date is still more than{" "}
                <strong>48 hours</strong> away. All approved refunds will be
                processed and credited to your original payment method within{" "}
                <strong>7 days</strong>.
              </p>

              <p>
                If a contest or event is postponed, cancelled, or changed by our
                team or venue partners, participants will automatically become
                eligible for a <strong>full refund</strong>. You will be
                notified through the mobile number or email provided during
                registration, and the refund will be processed within the
                standard timeframe.
              </p>

              <p>
                Please note that once the contest/event has started, or if the
                participant has already checked in or registered at the venue,
                refunds cannot be processed. For any assistance regarding your
                booking or refund status, our support team is here to help
                anytime at{" "}
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
