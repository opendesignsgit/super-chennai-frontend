
import React from "react";
import PropertyCard from "./PropertyCard";
import "../../Styles/PropertyCard.css";

const PropertiesList = ({ properties, loading }) => {
  if (loading) return <p className="loading">Loading...</p>;
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
