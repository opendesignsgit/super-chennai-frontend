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

      <div className="bg-[#f4f5f7]">
        <div className="container max-w-7xl mx-auto px-4 !mt-0 !mb-0  mainConiatinerPropertyList">
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
                <div className="PropertiesCardsSection">
                  <div className="mainPropertiesCards">
                    <img
                      className="propertyImage"
                      src="https://imagecdn.99acres.com/media1/32526/12/650532437M-1758453715074.jpg"
                      alt=""
                    />

                    <div className="propertyDetails">
                      <h4>Shivananda Flats</h4>
                      <h5>3 BHK Flat for rent in Zamin Pallavaram, Chennai</h5>

                      <div className="aboutPlotsSize">
                        <div className="flex flex-col items-start">
                          <span>₹86.4 Lac</span>
                          <span>₹3,600 /sqft</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>2,400 sqft</span>
                          <span>Plot Area</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>Plot/Land</span>
                          <span>Ready To Move</span>
                        </div>
                      </div>

                      <p className="propertContent">
                        Arunachala mountain view to the north, open park/garden
                        on the west, corner plot for privacy, 23 ft road, 1.7 km
                        <br />
                      </p>
                      <div className=" cursor-pointer flex items-center">
                        <a href="" className="propertyViewDetails">
                          View Details
                        </a>
                        <img
                          className="propertyAroWwCLick"
                          src="/images/icons/right-side-arrow-superchennai.svg"
                          alt=""
                        />
                      </div>

                      <div className="uploadedDetailsproperty">
                        <div className="flex flex-col">
                          <span className="monthsGaoProperty">2mo ago</span>{" "}
                          <span className="ownerproperty">Owner</span>
                        </div>

                        <div className="propertyViewButton">
                          <button>View Button</button>
                          <button>Contact</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mainPropertiesCards">
                    <img
                      className="propertyImage"
                      src="https://imagecdn.99acres.com/media1/32526/12/650532437M-1758453715074.jpg"
                      alt=""
                    />

                    <div className="propertyDetails">
                      <h4>Shivananda Flats</h4>
                      <h5>3 BHK Flat for rent in Zamin Pallavaram, Chennai</h5>

                      <div className="aboutPlotsSize">
                        <div className="flex flex-col items-start">
                          <span>₹86.4 Lac</span>
                          <span>₹3,600 /sqft</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>2,400 sqft</span>
                          <span>Plot Area</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>Plot/Land</span>
                          <span>Ready To Move</span>
                        </div>
                      </div>

                      <p className="propertContent">
                        Arunachala mountain view to the north, open park/garden
                        on the west, corner plot for privacy, 23 ft road, 1.7 km
                        <br />
                      </p>
                      <div className=" cursor-pointer flex items-center">
                        <a href="" className="propertyViewDetails">
                          View Details
                        </a>
                        <img
                          className="propertyAroWwCLick"
                          src="/images/icons/right-side-arrow-superchennai.svg"
                          alt=""
                        />
                      </div>

                      <div className="uploadedDetailsproperty">
                        <div className="flex flex-col">
                          <span className="monthsGaoProperty">2mo ago</span>{" "}
                          <span className="ownerproperty">Owner</span>
                        </div>

                        <div className="propertyViewButton">
                          <button>View Button</button>
                          <button>Contact</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mainPropertiesCards">
                    <img
                      className="propertyImage"
                      src="https://imagecdn.99acres.com/media1/32526/12/650532437M-1758453715074.jpg"
                      alt=""
                    />

                    <div className="propertyDetails">
                      <h4>Shivananda Flats</h4>
                      <h5>3 BHK Flat for rent in Zamin Pallavaram, Chennai</h5>

                      <div className="aboutPlotsSize">
                        <div className="flex flex-col items-start">
                          <span>₹86.4 Lac</span>
                          <span>₹3,600 /sqft</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>2,400 sqft</span>
                          <span>Plot Area</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>Plot/Land</span>
                          <span>Ready To Move</span>
                        </div>
                      </div>

                      <p className="propertContent">
                        Arunachala mountain view to the north, open park/garden
                        on the west, corner plot for privacy, 23 ft road, 1.7 km
                        <br />
                      </p>
                      <div className=" cursor-pointer flex items-center">
                        <a href="" className="propertyViewDetails">
                          View Details
                        </a>
                        <img
                          className="propertyAroWwCLick"
                          src="/images/icons/right-side-arrow-superchennai.svg"
                          alt=""
                        />
                      </div>

                      <div className="uploadedDetailsproperty">
                        <div className="flex flex-col">
                          <span className="monthsGaoProperty">2mo ago</span>{" "}
                          <span className="ownerproperty">Owner</span>
                        </div>

                        <div className="propertyViewButton">
                          <button>View Button</button>
                          <button>Contact</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mainPropertiesCards">
                    <img
                      className="propertyImage"
                      src="https://imagecdn.99acres.com/media1/32526/12/650532437M-1758453715074.jpg"
                      alt=""
                    />

                    <div className="propertyDetails">
                      <h4>Shivananda Flats</h4>
                      <h5>3 BHK Flat for rent in Zamin Pallavaram, Chennai</h5>

                      <div className="aboutPlotsSize">
                        <div className="flex flex-col items-start">
                          <span>₹86.4 Lac</span>
                          <span>₹3,600 /sqft</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>2,400 sqft</span>
                          <span>Plot Area</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>Plot/Land</span>
                          <span>Ready To Move</span>
                        </div>
                      </div>

                      <p className="propertContent">
                        Arunachala mountain view to the north, open park/garden
                        on the west, corner plot for privacy, 23 ft road, 1.7 km
                        <br />
                      </p>
                      <div className=" cursor-pointer flex items-center">
                        <a href="" className="propertyViewDetails">
                          View Details
                        </a>
                        <img
                          className="propertyAroWwCLick"
                          src="/images/icons/right-side-arrow-superchennai.svg"
                          alt=""
                        />
                      </div>

                      <div className="uploadedDetailsproperty">
                        <div className="flex flex-col">
                          <span className="monthsGaoProperty">2mo ago</span>{" "}
                          <span className="ownerproperty">Owner</span>
                        </div>

                        <div className="propertyViewButton">
                          <button>View Button</button>
                          <button>Contact</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mainPropertiesCards">
                    <img
                      className="propertyImage"
                      src="https://imagecdn.99acres.com/media1/32526/12/650532437M-1758453715074.jpg"
                      alt=""
                    />

                    <div className="propertyDetails">
                      <h4>Shivananda Flats</h4>
                      <h5>3 BHK Flat for rent in Zamin Pallavaram, Chennai</h5>

                      <div className="aboutPlotsSize">
                        <div className="flex flex-col items-start">
                          <span>₹86.4 Lac</span>
                          <span>₹3,600 /sqft</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>2,400 sqft</span>
                          <span>Plot Area</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span>Plot/Land</span>
                          <span>Ready To Move</span>
                        </div>
                      </div>

                      <p className="propertContent">
                        Arunachala mountain view to the north, open park/garden
                        on the west, corner plot for privacy, 23 ft road, 1.7 km
                        <br />
                      </p>
                      <div className=" cursor-pointer flex items-center">
                        <a href="" className="propertyViewDetails">
                          View Details
                        </a>
                        <img
                          className="propertyAroWwCLick"
                          src="/images/icons/right-side-arrow-superchennai.svg"
                          alt=""
                        />
                      </div>

                      <div className="uploadedDetailsproperty">
                        <div className="flex flex-col">
                          <span className="monthsGaoProperty">2mo ago</span>{" "}
                          <span className="ownerproperty">Owner</span>
                        </div>

                        <div className="propertyViewButton">
                          <button>View Button</button>
                          <button>Contact</button>
                        </div>
                      </div>
                    </div>
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
