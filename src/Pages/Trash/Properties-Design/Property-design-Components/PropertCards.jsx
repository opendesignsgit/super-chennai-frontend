export default function PropertiesCards({ properties, filters = {} }) {
  return (
    <>
      <div className="sidebarrightCards">
        <span>{properties.length} results shown for the selected filters</span>
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
      <div className="PropertiesCardsContainer">
        {properties.map((property) => (
          <div className="PropertiesCard" key={property.id}>
            <div className="mainPropertiesCards">
              <img
                className="propertyImage"
                src={property.image}
                alt={property.name}
              />
              <div className="propertyDetails">
                <h4>{property.name}</h4>
                <h5>{property.title}</h5>

                <div className="aboutPlotsSize">
                  <div className="flex flex-col items-start">
                    <span>{property.price}</span>
                    <span>{property.sqftPrice}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span>{property.size}</span>
                    <span>{property.areaLabel}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span>{property.type}</span>
                    <span>{property.status || "Ready To Move"}</span>
                  </div>
                </div>

                <p className="propertContent">{property.description}</p>

                <div className="cursor-pointer flex items-center">
                  <a href="#" className="propertyViewDetails">
                    View Details
                  </a>
                  <img
                    className="propertyAroWwCLick"
                    src="/images/icons/right-side-arrow-superchennai.svg"
                    alt="arrow"
                  />
                </div>

                <div className="uploadedDetailsproperty">
                  <div className="flex flex-col">
                    <span className="monthsGaoProperty">
                      {property.uploaded}
                    </span>
                    <span className="ownerproperty">{property.owner}</span>
                  </div>

                  <div className="propertyViewButton">
                    <button>View Button</button>
                    <button>Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
