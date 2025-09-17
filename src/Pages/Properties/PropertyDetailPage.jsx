import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useProperty } from "./hooks/useProperties";
import { PropertyContent } from "./Components/Properties/ritchText";

import "./Styles/PropertyDetailPage.css";

const PropertyDetailPage = () => {
  const { id, slug } = useParams();
  const { property, loading } = useProperty({ id, slug });

  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://demo.superchennai.com/";

  if (loading) return <div className="loader">Loading property details...</div>;
  if (!property) return <p className="not-found">❌ Property not found</p>;

  const getImageUrl = (img) => {
    if (!img?.url) return "/placeholder.jpg";
    if (img.url.startsWith("http")) return img.url;
    return `${API_BASE_URL}${img.url}`;
  };

  return (
    <>
      <Helmet>
        <title>{property.title} | Chennai Properties</title>
        <meta
          name="description"
          content={`Explore details of ${property.title}, located in ${
            property.location?.label || ""
          }.`}
        />
        <link
          rel="canonical"
          href={`/properties/${property.slug || property.id}`}
        />
      </Helmet>

      <div className="property-detail">
        {/* Hero Image */}
        <div className="property-hero">
          <img src={getImageUrl(property.heroImage)} alt={property.title} />
          <div className="overlay">
            <h1>{property.title}</h1>
            <p className="location">{property.location?.label}</p>
          </div>
        </div>

        {/* Property Info */}
        <div className="property-info container">
          <div className="info-grid">
            <div className="info-item">
              <h4>BHK</h4>
              <p>{property.bhk?.label}</p>
            </div>
            <div className="info-item">
              <h4>Area</h4>
              <p>{property.area} sq ft</p>
            </div>
            <div className="info-item">
              <h4>Price</h4>
              <p className="price">
                ₹
                {property.price
                  ? property.price.toLocaleString()
                  : "On Request"}
              </p>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p>{property.location?.label}</p>
            </div>
          </div>

          {/* Description */}

          <div className="description">
            <h2>About this property</h2>
            <PropertyContent content={property.content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;
