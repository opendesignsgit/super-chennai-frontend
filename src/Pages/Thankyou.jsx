import { useState, useEffect } from "react";

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

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "auto" }}
          src={imageSrc}
          alt="Thank you"
        />
      </div>
    </>
  );
}
