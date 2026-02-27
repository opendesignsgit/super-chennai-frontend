
import { useEffect } from "react";

export default function Download() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/pdfs/file-example_PDF_1MB.pdf"; // MUST be same domain
    link.download = "manifesto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/networks-banner.jpg" alt="chennai networks" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>manifesto</h3>
              
            </div>
          </div>
          <div className="notHomePageSearch">
          
          </div>
        </div>

      <div style={{ padding: 20 }}>
        <iframe
          src="/pdfs/file-example_PDF_1MB.pdf"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
        />
      </div>
    </>
  );
}