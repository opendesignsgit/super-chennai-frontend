import React from "react";

const FilterSection = ({ title, children }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h4 style={{ marginBottom: "8px" }}>{title}</h4>
      {children}
    </div>
  );
};

export default FilterSection;
