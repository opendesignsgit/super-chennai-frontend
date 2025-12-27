const BlogListSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* ===== Banner Skeleton ===== */}
      <div className="relative h-[500px] bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="h-10 w-72 bg-gray-100 rounded" />

          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </div>

      {/* ===== Intro Section Skeleton ===== */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-4 max-w-xl">
          <div className="h-6 w-32 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      </div>

      {/* ===== Search Skeleton ===== */}
      <div className="container max-w-7xl mx-auto px-4 mb-10">
        <div className="h-10 w-72 bg-gray-300 rounded" />
      </div>

      {/* ===== Blog Grid Skeleton ===== */}
      <div className="container max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow border overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full bg-gray-200" />

              {/* Content */}
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-300 rounded w-24 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListSkeleton;
