import React from "react";

const Amenity = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Amenity;
