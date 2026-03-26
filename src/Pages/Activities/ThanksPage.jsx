import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";
import { useLocation } from "react-router-dom";

export default function Thankyou() {
  const location = useLocation();
  const from = location.state?.from;

  const [imageSrc, setImageSrc] = useState("/images/thank-you-banner.jpg");


  useEffect(() => {
  const handleResize = () => {
    const isMobile = window.innerWidth <= 800;

    if (from === "conclave") {
      setImageSrc(
        isMobile
          ? "/images/events/mobile-thankyou-banner1.jpeg"
          : "/images/events/thanku-banner-conclave.jpeg"
      );
    } 
    
    else if (from === "manifesto-info") {
      setImageSrc(
        isMobile
          ? "/images/kamakoti-mobile-thanks.jpeg"
          : "/images/kamakoti-desktop-thanks.jpeg"
      );
    } 
    
    else if (from === "kamakoti") {
      setImageSrc(
        isMobile
          ? "/images/mobile-chaikings-tq-banner-f-1.png"
          : "/images/tq-chaikings-banner-f.jpeg"
      );
    } 

      else if (from === "jahabar") {
      setImageSrc(
        isMobile
          ? "/images/mobile-chaikings-tq-banner-f-1.png"
          : "/images/tq-chaikings-banner-f.jpeg"
      );
    } 
    
    else {
      if (from === "trivia-game")
        setImageSrc("/images/mobile-thanky-banner-manifesto.jpeg");
      else
        setImageSrc("/images/thankyou-banner-manifesto.jpeg");
    }

    
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const isMobile = window.innerWidth <= 800;
  //     if (from === "conclave") {
  //       setImageSrc(
  //         isMobile
  //           ? "/images/events/mobile-thankyou-banner1.jpeg"
  //           : "/images/events/thanku-banner-conclave.jpeg",
  //       );

  //       return;
  //     } else if (from === "conclave") {
  //       setImageSrc(
  //         isMobile
  //           ? "/images/events/thanku-banner-conclave.jpeg"
  //           : "/images/events/thanku-banner-conclave.jpeg",
  //       );
  //     } 
      
  //     else if (from === "manifesto-info") {
  //       setImageSrc(
  //         isMobile
  //           ? "/images/mobile-thanky-banner-manifesto.jpeg"
  //           : "/images/thankyou-banner-manifesto.jpeg",
  //       );

        
  //     } else {
  //       if (from === "trivia-game")
  //         setImageSrc("/images/mobile-thanky-banner-manifesto.jpeg");
  //       else setImageSrc("/images/thankyou-banner-manifesto.jpeg");
  //     }
      
      
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);



//   useEffect(() => {
//   const handleResize = () => {
//     const isMobile = window.innerWidth <= 800;

//     if (from === "conclave") {
//       setImageSrc(
//         isMobile
//           ? "/images/events/mobile-thankyou-banner1.jpeg"
//           : "/images/events/thanku-banner-conclave.jpeg"
//       );

//     } else if (from === "jahabar") {
//       setImageSrc(
//         isMobile
//           ? "/images/chaikings-tq-innerpage-bannerNew.jpeg"
//           : "/images/mobile-chaikings-tq-banner.jpeg"
//       );

//     } else if (from === "manifesto-info") {
//       setImageSrc(
//         isMobile
//           ? "/images/mobile-thanky-banner-manifesto.jpeg"
//           : "/images/thankyou-banner-manifesto.jpeg"
//       );

//     } else {
//       if (from === "trivia-game")
//         setImageSrc("/images/mobile-thanky-banner-manifesto.jpeg");
//       else
//         setImageSrc("/images/thankyou-banner-manifesto.jpeg");
//     }
//   };

//   handleResize();
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, [from]);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <section className=" carquizbanner relative overflow-hidden cursor-pointer akbaralipage">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src={imageSrc}
            alt="Thank You Banner"
          />
          <img
            className="block sm:hidden"
            src={imageSrc}
            alt="Thank You Banner Mobile"
          />
        </div>

        <div className="accaodomationBannerSection carquizbanner relative overflow-hidden cursor-pointer akbaralipage">
          <div className="accodoamationBannerText">
            <h1></h1>
            <AutoShrinkText
              text={
                from === "conclave" || from === "jahabar" ? "" : "Thank You!"
              }
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />
          </div>
        </div>
      </section>

      <div
        className="visitIntroParaSection detailIntro"
        style={{ paddingBottom: "0" }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          {from === "conclave" && (
            <div className="workIntro">
              <h1>You're Registered!</h1>

              <p>
                Thank you for registering for the{" "}
                <strong>Super Chennai Conclave</strong>.
              </p>

              <p>
                We appreciate your interest. Your registration is under review,
                and your participation is confirmed only upon receiving an email
                from our team.
              </p>
            </div>
          )}

          {from === "manifesto" && (
            <div className="workIntro">
              <h1>Thank you for downloading the Super Chennai Manifesto.</h1>

              <p>
                This document represents collective aspirations for Chennai’s
                future. We hope it informs, inspires, and encourages meaningful
                participation.
              </p>
              <p>Stay engaged. Stay informed.</p>
              <p>Chennai’s future is built by its citizens.</p>
            </div>
          )}

          {from === "jahabar" && (
            <div className="workIntro">
              <h1>You're Registered!</h1>

              <p>
                Thank you for registering for Arattai with Jahabar Sadique. Your
                submission has been successfully received, and our team is
                currently reviewing your registration. If your entry is
                selected, you will receive an official confirmation email from
                Team Super Chennai with further details about the event. Please
                note that your participation will be considered confirmed only
                after you receive the confirmation email. We appreciate your
                interest and look forward to connecting with you soon.
              </p>
            </div>
          )}

          {from === "kamakoti" && (
            <div className="workIntro">
              <h1>You're Registered!</h1>
              <p>
                Thank you for registering for Arattai with kamakoti. Your
                submission has been successfully received, and our team is
                currently reviewing your registration. If your entry is
                selected, you will receive an official confirmation email from
                Team Super Chennai with further details about the event. Please
                note that your participation will be considered confirmed only
                after you receive the confirmation email. We appreciate your
                interest and look forward to connecting with you soon.
              </p>
            </div>
          )}

          {from === "hotshot-chennai" && (
            <div className="workIntro">
              <h1>Your Moment Is In! </h1>

              <p>
                Your HOTSHOTS Moment has been successfully submitted. Now, the
                exciting part begins!
              </p>
              <p>
                You’ve shared your view of Chennai — its stories, vibes, and
                hidden gems. Our team can’t wait to explore your capture and
                discover the story behind your frame.
              </p>
              <p>But why stop here?</p>
              <p>
                Check out the other SuperChennai events too — we’ve hosted
                countless exciting moments, and there’s plenty more waiting for
                you to explore!
              </p>
            </div>
          )}
          {from === "margazhi-sabha" && (
            <div className="workIntro">
              {/* <h1>Thank You for Your Entry!</h1> */}

              <p>
                Your Margazhi moment has been successfully submitted. We’re
                excited to see Chennai through your lens and look forward to
                reviewing your capture.
              </p>
              <p>While you’re here, explore other contests by Super Chennai.</p>

              <p>
                Visit the Super Chennai contest page to discover more creative
                moments captured across Chennai.
              </p>

              <hr />
            </div>
          )}

          {from === "trivia-game" && (
            <div className="workIntro">
              <h1>Trivia Completed!</h1>
              <p>
                Congratulations! You have successfully completed the Super
                Chennai Trivia 2025.
              </p>
              <p>
                We hope you enjoyed testing your knowledge about Chennai. Stay
                tuned for results and more fun events coming your way!
              </p>
              <p>
                Meanwhile, explore other Super Chennai contests and events to
                keep the excitement going.
              </p>
            </div>
          )}

          {!from && (
            <p className="text-center">
              Thank you for participating in Super Chennai contests.
            </p>
          )}
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
