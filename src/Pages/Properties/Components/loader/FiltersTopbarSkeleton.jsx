import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FiltersTopbarSkeleton = () => {
  const skeletonBadge = <Skeleton width={80} height={28} borderRadius={8} />;

  return (
    <div className="filters-topbar-skeleton bg-white shadow rounded-md p-4 flex flex-wrap gap-4 animate-pulse">
      {/* Filter Group Sections */}
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 min-w-[220px] border border-gray-100 rounded-lg p-3"
        >
          <Skeleton width={100} height={16} borderRadius={4} />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((__, i) => (
              <React.Fragment key={i}>{skeletonBadge}</React.Fragment>
            ))}
          </div>
        </div>
      ))}

      {/* Buttons (More Filters / Sidebar / Clear All) */}
      <div className="flex items-center gap-3 min-w-[220px]">
        <Skeleton width={120} height={32} borderRadius={6} />
        <Skeleton width={80} height={32} borderRadius={6} />
        <Skeleton width={80} height={32} borderRadius={6} />
      </div>
    </div>
  );
};

export default FiltersTopbarSkeleton;
