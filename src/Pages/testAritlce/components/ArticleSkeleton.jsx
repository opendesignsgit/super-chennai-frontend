export default function ArticleSkeleton({ count = 3 }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-md overflow-hidden animate-pulse"
        >
          {/* Image */}
          <div className="w-full h-[320px] bg-gray-200 rounded-lg" />

          {/* Category */}
          <div className="h-4 w-24 bg-gray-200 rounded mt-4 mx-2" />

          {/* Title */}
          <div className="h-5 w-3/4 bg-gray-200 rounded mt-3 mx-2" />

          {/* Excerpt */}
          <div className="space-y-2 mt-3 mx-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>

          {/* Meta */}
          <div className="h-3 w-32 bg-gray-200 rounded mt-3 mb-4 mx-2" />
        </div>
      ))}
    </div>
  );
}
