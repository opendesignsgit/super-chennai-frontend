import { useState, useEffect } from "react";

export default function QuizThankyou() {
  // const [imageSrc, setImageSrc] = useState("/images/events/superchennai-quiz-inner.jpg");

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 800) {
  //       setImageSrc("/images/events/superchennai-quiz-inner.jpg");
  //     } else {
  //       setImageSrc("/images/events/superchennai-quiz-inner.jpg");
  //     }
  //   };

  //   handleResize(); 
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "auto" }}
          src={imageSrc}
          alt="Thank you"
        />
      </div> */}

      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="/images/events/superchennai-quiz-inner.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Thank You  </h3>
            {/* <div className="breadCrum flex items-center gap-2 text-white">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
              <span>-</span>
              <Link to="/quiz-checkout" className="text-white hover:underline">
                CheckOut{" "}
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
