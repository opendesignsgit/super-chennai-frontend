import React from "react";

const EventCardSkeleton = () => {
  return (
    <div className="bg-white shadow w-full max-w-[300px] rounded-lg animate-pulse">
      <div className="relative w-full h-[200px] bg-gray-300 rounded-t-lg"></div>

      <div className="p-4">
        <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
        <div className="h-5 w-3/4 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
