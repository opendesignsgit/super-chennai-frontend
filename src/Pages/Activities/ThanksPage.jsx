import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Thankyou() {
  const [imageSrc, setImageSrc] = useState("/images/thank-you-banner.jpg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setImageSrc("/images/thank-you-banner-m.jpg");
      } else {
        setImageSrc("/images/thank-you-banner.jpg");
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", 
  });
}, []);



  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "auto" }} src={imageSrc} alt="Thank you" />
      </div> */}

            <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/banner-margazimoments.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/banner-margazimoments-m.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1></h1>
            {/* <AutoShrinkText
              text="Photography Contest"
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            /> */}
            {/* <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Photography Contest</Link>
            </div> */}
          </div>
        </div>
      </section>

      <div
        className="visitIntroParaSection detailIntro"
        style={{ paddingBottom: "0" }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workIntro">
            <h1>Thank You for Your Entry!</h1>

            <p>
              Your Margazhi moment has been successfully submitted. We’re
              excited to see Chennai through your lens and look forward to
              reviewing your capture. While you’re here, explore other contests
              by Super Chennai. Visit the Super Chennai contest page to discover
              more creative moments captured across Chennai.
            </p>

            <hr />
          </div>
        </div>
         {/* ===== Bottom CTA Button ===== */}
      <div className="py-12 bg-gradient-to-b from-white to-[#faf7fb]">
        <div className="flex justify-center">
          <Link
            to="/superchennai-contest"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#a44294] text-white font-semibold text-base shadow-lg hover:bg-[#8e357e] hover:shadow-xl transition-all duration-300"
          >
            Explore More Contests
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
