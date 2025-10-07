import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PropertyDetailSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6 animate-pulse">
      {/* Hero Image */}
      <div className="w-full h-60 rounded-lg bg-gray-300" />

      {/* Price and Badges */}
      <div className="flex items-center justify-between">
        <div className="w-32 h-6 bg-gray-300 rounded" />
        <div className="flex gap-2">
          <div className="w-16 h-5 bg-gray-300 rounded" />
          <div className="w-16 h-5 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Summary Badges */}
      <div className="flex gap-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="w-20 h-5 bg-gray-300 rounded" />
          ))}
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="col-span-2 h-60 bg-gray-300 rounded-lg" />
        <div className="flex flex-col gap-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-full h-[73px] bg-gray-300 rounded-lg" />
            ))}
        </div>
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="w-24 h-3 bg-gray-300 rounded" />
              <div className="w-16 h-5 bg-gray-300 rounded" />
            </div>
          ))}
      </div>

      {/* Amenities / Sections */}
      {Array(3)
        .fill(0)
        .map((_, section) => (
          <div key={section} className="space-y-3 border border-gray-200 rounded-xl p-5">
            <div className="w-40 h-5 bg-gray-300 rounded" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-full h-5 bg-gray-300 rounded" />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PropertyDetailSkeleton;
