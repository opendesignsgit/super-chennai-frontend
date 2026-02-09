export default function ArticlePageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-6 animate-pulse">
      
      {/* Page Title */}
      <div className="h-8 w-64 bg-gray-200 rounded mb-6" />

      <div className="grid lg:grid-cols-4 gap-6">
        
        {/* LEFT: Articles */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-md overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-[280px] bg-gray-200" />

                <div className="p-3 space-y-3">
                  {/* Category */}
                  <div className="h-4 w-20 bg-gray-200 rounded" />

                  {/* Title */}
                  <div className="h-5 w-full bg-gray-200 rounded" />
                  <div className="h-5 w-3/4 bg-gray-200 rounded" />

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                  </div>

                  {/* Meta */}
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-center gap-3 pt-6">
            <div className="h-9 w-9 bg-gray-200 rounded" />
            <div className="h-9 w-9 bg-gray-200 rounded" />
            <div className="h-9 w-9 bg-gray-200 rounded" />
          </div>
        </div>

        {/* RIGHT: Sidebar / Ads */}
        <div className="space-y-6 hidden lg:block">
          <div className="h-[250px] bg-gray-200 rounded" />
          <div className="h-[250px] bg-gray-200 rounded" />
          <div className="h-[250px] bg-gray-200 rounded" />
        </div>

      </div>
    </div>
  );
}



