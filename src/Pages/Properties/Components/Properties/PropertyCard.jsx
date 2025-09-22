import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/PropertyCard.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/";

const getImageUrl = (img) => {
  if (!img?.url) return "/placeholder.jpg";
  if (img.url.startsWith("http")) return img.url;
  return `${API_BASE_URL}${img.url}`;
};

const PropertyCard = ({ property }) => {
  const heroImage = getImageUrl(property?.heroImage);
  const title = property?.title || "Property";
  const bhk = property?.bhk?.label || property?.bhk || "-";
  const area = property?.area || "-";
  const price = property?.price
    ? property.price.toLocaleString()
    : "On Request";

  return (
    <div className="property-card skeleton-card">
      <div className="image-wrapper">
        <img src={heroImage} alt={title} />
      </div>
      <div className="details">
        <h3>
          <Link to={`/properties/${property.slug || property.id}`}>
            {title}
          </Link>
        </h3>
        <p className="bhk-area">{bhk} • {area} sq ft</p>
        <p className="price">₹{price}</p>
        <Link
          to={`/properties/${property.slug || property.id}`}
          className="btn"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
