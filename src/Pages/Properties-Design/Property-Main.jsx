import { Helmet } from "react-helmet-async";
import "../../assets/Css/PropertyPage.css";
import Becameavolunteer from "../../Components/BecameAVolunteer";
import InstagramReelsMarquee from "../../Components/SocialChennai";
import SidebarProperty from "./Property-design-Components/SideBarProperty";

export default function PropertyMainPage() {
  return (
    <>
      <div className="accaodomationBannerSection">
        <img
          src="https://www.superchennai.com/images/restaurants-banner.jpg"
          alt=""
        />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Properties </h3>
            <div className="breadCrum">
              <a href="">Home</a> - <a href="">Properties</a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}

      <div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="sidebar-stylescss">
            {/* Side-Bar */}

            <SidebarProperty />

            {/* Side-Bar */}

            {/* Right Cards */}

            <section className="siderbar-card">
              <div className="sidebarrightCards">
                <span>
                  95 results | Property for Rent in Pallavaram, Chennai
                </span>
              </div>

              <div className="locationsaboutarea">
                <div>
                  Get to know about the <span>Pallavaram Locality</span>
                </div>
              </div>

              <div className="filteredrightsidecards">
                <div className="filteredsectionmain">
                  <div>Owner</div>
                  <div>Verified</div>
                  <div>Furnished</div>
                  <div>With Photos</div>
                  <div>With Videos</div>
                </div>
              </div>

              <div className="PropertiesCards">
                <div>
                  <div>
                    <img
                      src="https://imagecdn.99acres.com/media1/32526/12/650532437M-1758453715074.jpg"
                      alt=""
                    />

                    <div>Shivananda Flats</div>
                    <div>3 BHK Flat for rent in Zamin Pallavaram, Chennai</div>

                    <div></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Cards */}

            {/* Filter Section */}
          </div>
        </div>
      </div>
    </>
  );
}
