export default function NeighbourhoodSkeleton() {
  return (
    <div className="animate-pulse">
      {/* HERO */}
      <div className="h-[350px] bg-gray-200 w-full"></div>

      {/* SEARCH BAR */}
      <div className="max-w-4xl mx-auto -mt-10 bg-white p-4 rounded-full shadow flex gap-3">
        <div className="h-10 w-40 bg-gray-200 rounded-full"></div>
        <div className="h-10 flex-1 bg-gray-200 rounded-full"></div>
        <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
        <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
      </div>

      {/* TITLE + DESCRIPTION */}
      <div className="max-w-4xl mx-auto mt-10 px-4 text-center">
        <div className="h-8 w-48 bg-gray-200 mx-auto mb-4 rounded"></div>
        <div className="h-4 bg-gray-200 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 w-2/3 mx-auto rounded"></div>
      </div>

      {/* MAP */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <div className="h-[300px] bg-gray-200 rounded-lg"></div>
      </div>

      {/* PURPOSE SECTION */}
      <div className="max-w-5xl mx-auto mt-16 px-4 text-center">
        <div className="h-6 w-64 bg-gray-200 mx-auto mb-4 rounded"></div>
        <div className="h-4 bg-gray-200 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 w-2/3 mx-auto rounded"></div>
      </div>

      {/* CATEGORY LIST + IMAGE */}
      <div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-2 gap-6">
        {/* LEFT LIST */}
        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 rounded w-3/4"></div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[350px] bg-gray-200 rounded-lg m-10"></div>
      </div>


    
    </div>
  );
}