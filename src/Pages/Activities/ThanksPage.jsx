import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";
import { useLocation } from "react-router-dom";

export default function Thankyou() {
  const location = useLocation();
  // const from = location.state?.from;
  const from = "soumya";

  const [imageSrc, setImageSrc] = useState("/images/thank-you-banner.jpg");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 800;

      if (from === "conclave") {
        setImageSrc(
          isMobile
            ? "/images/events/mobile-thankyou-banner1.jpeg"
            : "/images/events/thanku-banner-conclave.jpeg",
        );
      } else if (from === "manifesto-info") {
        setImageSrc(
          isMobile
            ? "/images/mobile-thanky-banner-manifesto.jpeg"
            : "/images/thankyou-banner-manifesto.jpeg",
        );
      } else if (from === "kamakoti") {
        setImageSrc(
          isMobile
            ? "/images/kamakoti-mobile-thanks-new.jpeg"
            : "/images/kamakoti-desktop-thanks-new.jpeg",
        );
      } else if (from === "vivek") {
        setImageSrc(
          isMobile
            ? "/images/VIVEK-TQ-BANNER-mobile.jpeg"
            : "/images/thankyou-vivek-banner.jpeg",
        );

         } else if (from === "soumya") {
        setImageSrc(
          isMobile
            ? "/images/VIVEK-TQ-BANNER-mobile.jpeg"
            : "/images/thankyou-vivek-banner.jpeg",
        );
      } else if (from === "jahabar") {
        setImageSrc(
          isMobile
            ? "/images/mobile-chaikings-tq-banner-f-1.png"
            : "/images/tq-chaikings-banner-f.jpeg",
        );
      } else {
        if (from === "trivia-game")
          setImageSrc("/images/events/quiz-banner.jpeg");
        else setImageSrc("/images/events/quiz-banner.jpeg");
      }
    };

    handleResize();
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

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const menifeto = document.querySelector("#menifeto-tab");
      const hotshots = document.querySelector("#hotshots-event-tab");
      const sticky = document.querySelector("#mainfirst");

      if (menifeto) menifeto.style.display = "none";
      if (hotshots) hotshots.style.display = "none";
      if (sticky) sticky.style.setProperty("display", "none", "important");
    }
  }, []);

  return (
    <>
      <section className="accaodomationBannerSection carquizbanner">
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

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <AutoShrinkText
              text={
                from === "vivek"
                  ? ""
                  : from === "trivia-game" ||
                      from === "conclave" ||
                      from === "jahabar"
                    ? "Day to deliver-quiz"
                    : "Thank You!"
              }
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />
            {/* <h1>Day to deliver-quiz</h1> */}
            {/* <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Day to deliver-quiz</Link>
            </div> */}
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

          {from === "soumya" && (
            <div className="workIntro">
              <h1>You're Registered!</h1>

              <p>
                Thank you for registering for Arattai with Soumya Swaminathan.
                Your submission has been successfully received, and our team is
                currently reviewing your registration. If your entry is
                selected, you will receive an official confirmation email from
                Team Super Chennai with further details about the event. Please
                note that your participation will be considered confirmed only
                after you receive the confirmation email. We appreciate your
                interest and look forward to connecting with you soon.
              </p>
            </div>
          )}

          {from === "vivek" && (
            <div className="workIntro">
              <h1>You're Registered!</h1>

              <p>
                Thank you for registering for Arattai with Vivek Karunakaran.
                Your submission has been successfully received, and our team is
                currently reviewing your registration. If your entry is
                selected, you will receive an official confirmation email from
                Team Super Chennai with further details about the event. Please
                note that your participation will be considered confirmed only
                after you receive the confirmation email. We appreciate your
                interest and look forward to connecting with you soon.
              </p>
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
            <>
              <div className="workIntro">
                <h1>Thankyou for participating!</h1>
                <p>
                  April 23, 2026 is your #DaytoDeliver — Please step out and
                  vote.
                </p>
              </div>
              <>
                <div className="workIntro max-w-xl mx-auto text-center  backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg instagramlink">
                  <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
                    Don’t miss the winners! 👀 <br />
                    Follow us on Instagram for live updates and results.
                  </p>

                  <a
                    href="https://www.instagram.com/super_chennai_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    📸 Follow on Instagram
                  </a>
                </div>
              </>
            </>
          )}

          {!from && (
            <p className="text-center">
              Thank you for participating in Super Chennai contests.
            </p>
          )}
        </div>

        {/* ===== Bottom CTA Button ===== */}
        <div
          className="py-0 bg-gradient-to-b from-white to-[#faf7fb]"
          style={{ paddingBottom: "50px" }}
        >
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
