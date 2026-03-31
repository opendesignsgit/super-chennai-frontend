import React from "react";

export default function SkeletonLocations() {
  return (
    <div className="neighbiurnewcards">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="neighbourcardnew overflow-hidden animate-pulse"
        >
          {/* image skeleton */}
          <div className="h-48 w-full bg-gray-200" />

          {/* content skeleton */}
          <div className="p-4 space-y-3">
            <div className="h-5 w-2/3 bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}