import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../Styles/PropertyCard.css"; // reuse mobile card spacing

const MobilePropertyCardSkeleton = () => {
  return (
    <div className="mobile-card">
      {/* Image Skeleton */}
      <Skeleton
        height={140}
        width="100%"
        borderRadius={10}
        style={{ marginBottom: "8px" }}
      />

      <div className="mobile-content">
        {/* Title */}
        <Skeleton height={16} width="70%" style={{ marginBottom: "4px" }} />

        {/* Builder */}
        <Skeleton height={14} width="50%" style={{ marginBottom: "4px" }} />

        {/* Price */}
        <Skeleton height={14} width="40%" style={{ marginBottom: "4px" }} />

        {/* BHK */}
        <Skeleton height={14} width="30%" style={{ marginBottom: "6px" }} />

        {/* Button */}
        <Skeleton height={28} width="100%" borderRadius={6} />
      </div>
    </div>
  );
};

export default MobilePropertyCardSkeleton;
