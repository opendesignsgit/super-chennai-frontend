import React from "react";

const EventDetailpageSkeleton = () => {
  return (
    <div className="animate-pulse">

      {/* Banner Skeleton - full width */}
      <div className="w-full h-[350px] bg-gray-300"></div>

      {/* Content */}
      <div className="p-6 max-w-5xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          
          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-5">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>

            <div className="w-full h-[250px] bg-gray-300 rounded-lg"></div>

            <div className="space-y-3">
              <div className="h-5 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="border bg-white shadow rounded-lg p-5 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>

            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}

            <div className="h-10 bg-gray-300 rounded w-full mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailpageSkeleton;
