
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";


const getImageUrl = (img) => {
  if (!img?.url) return "/placeholder.jpg";
  if (img.url.startsWith("http")) return img.url;
  return `${API_BASE_URL}${img.url}`;
};

const PropertyCard = ({ property, viewType = "grid" }) => {
  if (!property) return null;

  const heroImage = getImageUrl(property.heroImage);
  const title = property.title || "Property";
  const bhk = property.bhk?.label || "-";
  const area = property.area || "-";
  const price = property.price ? property.price.toLocaleString() : "On Request";
  const size = property.size || "-";
  const areaLabel = property.areaLabel || "-";
  const type = property.propertyType?.value || property.type || "-";
  const status =
    property.society?.possessionStatus || property.status || "Ready To Move";
  const description =
    property.content?.root?.children[0]?.children[0]?.text ||
    property.description ||
    "";
  const propertyLink = `/properties/${property.slug || property.id}`;

  return (
    <div
      className={`PropertiesCard ${
        viewType === "grid" ? "gridCard" : "listCard"
      }`}
      key={property.id}
    >
      <div
        className={`mainPropertiesCards ${viewType === "list" ? "flex" : ""} relative`}
      >
        {/* Badges */}
        {(property.featured || property.urgentSale) && (
          <div className="absolute top-2 left-2 flex gap-2 z-10">
            {property.featured && (
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-md font-semibold shadow">
                Featured
              </span>
            )}
            {property.urgentSale && (
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-md font-semibold shadow">
                Urgent Sale
              </span>
            )}
          </div>
        )}

        {/* Hero Image */}
        <img
          src={heroImage}
          alt={title}
          className={`propertyImage ${viewType === "list" ? "w-1/3 mr-4" : ""}`}
        />

        <div className="propertyDetails">
          <h4>{property.title}</h4>
          <h5>{property.society?.name || ""}</h5>

          {/* Property Specs */}
          <div className="aboutPlotsSize flex flex-wrap gap-4 text-capitalize">
            <div className="flex flex-col items-start">
              <span>₹ {price}</span>
              {property.pricePerSqft && (
                <span>{property.pricePerSqft.toLocaleString()} ₹/sqft</span>
              )}
              <span>
                {bhk} • {area} sqft
              </span>
            </div>

            <div className="flex flex-col items-start">
              <span>{size}</span>
              <span>{areaLabel}</span>
            </div>

            <div className="flex flex-col items-start text-capitalize">
              {property.commercialType && (
                <span>{property.commercialType}</span>
              )}
              <span>{type}</span>
              <span>{status}</span>
            </div>
          </div>

          {/* Description */}
          <p className="propertContent line-clamp-2">{description}</p>

          {/* View Details */}
          <div className="cursor-pointer flex items-center mt-2">
            <Link
              to={`/properties/${property.slug || property.id}`}
              className="propertyViewDetails"
            >
              View Details
            </Link>
            <img
              className="propertyAroWwCLick"
              src="/images/icons/right-side-arrow-superchennai.svg"
              alt="arrow"
            />
          </div>

          {/* Additional Info */}
          <div className="uploadedDetailsproperty mt-2">
            <div className="flex flex-col">
              <span className="monthsGaoProperty">
                Property Age: {property.ageOfProperty || "-"} years
              </span>
              <span className="ownerproperty">
                Listed By {property.listedBy || property.owner || "-"}
              </span>
            </div>

            <div className="propertyViewButton mt-2 flex space-x-2">
              <Link to={propertyLink}>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View
                </button>
              </Link>
              <button
                type="button"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
