import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/Css/CostOfLiving.css";

export default function PrivacyPolicy() {
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


     <Helmet>
        <title>Privacy Policy | Super Chennai</title>
        <meta
          name="description"
          content="SuperChennai - Privacy Policy explaining data usage, safety, and user rights."
        />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>



      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/superchennai-privacy-policy.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Privacy Policy</h3>
              <div className="breadCrum">
                <Link to="/privacy-policy"> Privacy Policy </Link> -{" "}
                <a href=""> Privacy Policy</a>
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
              <p>Super &nbsp; Chennai &nbsp; Super &nbsp;  Chennai</p>
            </div>
            <div className="workIntro">
              <h3>We value privacy</h3>
              <p>
                {" "}
                SuperChennai (“we”, “our”, “us”) collects basic information such
                as your name, email, phone number, and the details you submit
                through our website forms. We may also use cookies to understand
                how visitors use our website and to improve your browsing
                experience. This information is used only to provide our
                services, respond to your inquiries, and maintain the
                performance and security of our website.
              </p>
              <p>
                {" "}
                We do not sell or share your personal information with third
                parties for marketing purposes. Our website may contain links to
                other sites, and we are not responsible for their privacy
                practices. By using our website, you agree to this Privacy
                Policy. For any questions, you can contact us at{" "}
                <a
                  className=" text-blue-600 hover:underline"
                  href="mailto:hello@superchennai.com"
                >
                  hello@superchennai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
