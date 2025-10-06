import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../Styles/skelton.css";

const PropertyCardSkeleton = () => {
  return (
    <div className="property-card-skeleton">
      <div className="property-skeleton-left">
        <Skeleton height={200} width={250} /> 
      </div>

      <div className="property-skeleton-right">
        <h4>
          <Skeleton width={180} height={20} /> {/* Title */}
        </h4>
        <p>
          <Skeleton width={250} height={15} /> {/* Subtitle */}
        </p>

        <div className="property-skeleton-details">
          <Skeleton width={100} height={20} /> {/* Price */}
          <Skeleton width={80} height={20} /> {/* Sqft */}
          <Skeleton width={150} height={20} /> {/* Type */}
        </div>

        <div className="property-skeleton-desc">
          <Skeleton count={2} height={14} /> {/* Description lines */}
        </div>

        <div className="property-skeleton-footer">
          <Skeleton width={100} height={30} /> {/* View button */}
          <Skeleton width={100} height={30} /> {/* Contact button */}
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
