const BlogDetailSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Banner */}
      <div className="h-[380px] w-full bg-gray-200" />

      {/* Content */}
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 container max-w-7xl mx-auto px-4 py-16">
        {/* Author */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
            <div className="h-3 w-24 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Title lines */}
        <div className="space-y-3 mb-8">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-6 bg-gray-300 rounded w-2/3" />
        </div>

        {/* Paragraphs */}
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full" />
          ))}

          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
