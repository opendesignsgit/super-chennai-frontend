import React from "react";

const PropertyVideos = ({ property }) => {
  // Collect all videos into an array for cleaner rendering
  const videos = [
    {
      key: "walkthroughVideo",
      title: "Walkthrough Video",
      url: property?.walkthroughVideo,
    },
    {
      key: "topReasonsToBuyVideo",
      title: "Top Reasons to Buy Video",
      url: property?.topReasonsToBuyVideo,
    },
    {
      key: "homeTourVideo",
      title: "Home Tour Video",
      url: property?.homeTourVideo,
    },
    {
      key: "modelHouseExplanationVideo",
      title: "Model House Explanation Video",
      url: property?.modelHouseExplanationVideo,
    },
    {
      key: "experienceCentreVideo",
      title: "Experience Centre Video",
      url: property?.experienceCentreVideo,
    },
    {
      key: "otherVideo",
      title: "Other Video",
      url: property?.otherVideo,
    },
  ].filter((v) => v.url); // only show videos that exist

  // If no videos available, show fallback
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Property Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.key} title={video.title} url={video.url} />
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ title, url }) => {
  // Convert YouTube watch link to embed
  const embedUrl = url?.includes("watch?v=")
    ? url.replace("watch?v=", "embed/")
    : url;

  return (
    <div className="rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300 bg-white">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">{title}</h3>
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyVideos;
