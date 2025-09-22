import React from "react";
import PropertyCard from "./PropertyCard";
import "../../Styles/PropertyCard.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PropertiesList = ({ properties, loading }) => {
if (loading) {
    return (
      <div className="properties-list">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="property-card">
            {/* Image skeleton */}
            <div className="image-wrapper">
              <Skeleton height={200} width="100%" borderRadius={16} />
            </div>
            {/* Details skeleton */}
            <div
              className="details"
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <Skeleton height={20} width="70%" />
              <Skeleton height={16} width="50%" />
              <Skeleton height={16} width="40%" />
              <Skeleton height={36} width="30%" style={{ marginTop: 8 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!loading && properties.length === 0)
    return <p className="no-results">No properties found matching filters</p>;
  return (
    <div className="properties-list">
      {properties.map((prop, index) => (
        <PropertyCard key={prop?.id || index} property={prop} />
      ))}
    </div>
  );
};

export default PropertiesList;
