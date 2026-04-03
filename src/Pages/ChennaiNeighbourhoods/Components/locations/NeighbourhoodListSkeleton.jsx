export default function NeighbourhoodListSkeleton() {
  return (
    <div className="animate-pulse">
      {/* HERO */}
      <div className="h-[300px] bg-gradient-to-r from-purple-200 to-purple-300 w-full"></div>

      {/* TITLE + DESC */}
      <div className="text-center mt-10 px-4">
        <div className="h-8 w-64 bg-gray-200 mx-auto mb-4 rounded"></div>
        <div className="h-4 bg-gray-200 max-w-2xl mx-auto mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 max-w-xl mx-auto rounded"></div>
      </div>

      {/* WEATHER BAR */}
      <div className="h-6 bg-purple-200 mt-4 mx-auto max-w-4xl rounded"></div>

      {/* SEARCH */}
      <div className="max-w-3xl mx-auto mt-6 flex gap-3 px-4">
        <div className="h-12 flex-1 bg-gray-200 rounded-full"></div>
        <div className="h-12 w-28 bg-purple-200 rounded-full"></div>
      </div>

      {/* ALPHABET FILTER */}
      <div className="max-w-5xl mx-auto mt-6 flex flex-wrap gap-2 px-4 justify-center">
        {[...Array(26)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-gray-200 rounded-md"></div>
        ))}
      </div>

      {/* COUNT TEXT */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-6xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
            {/* IMAGE */}
            <div className="h-40 bg-gray-200"></div>

            {/* TEXT */}
            <div className="p-4">
              <div className="h-5 w-3/4 bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 mb-4 rounded"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
