export default function ProperitiesNeighbourhood() {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 py-10 pt-5">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#A44294] via-[#8D347D] to-[#752666] px-8 py-8 md:px-12 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
          <div
            className="absolute right-0 bottom-0 h-full w-1/3 opacity-15 pointer-events-none bg-no-repeat bg-right-bottom bg-contain hidden md:block"
            style={{
              backgroundImage: `url('/path-to-your-city-line-art.png')`,
            }}
          />

          {/* Content Area */}
          <div className="flex-1 z-10">
            <span className="text-[#fff] text-sm max-w-2xl sm:max-w-3xl mb-7 leading-relaxed neighbourtwoheaidngssparagraph">
              Looking to Buy / Rent?
            </span>
            <h2 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
              Explore properties in Chennai
            </h2>
            <p className="text-[#fff] text-sm max-w-2xl sm:max-w-3xl mb-4 leading-relaxed neighbourtwoheaidngssparagraph">
              Find homes near top schools, hospitals, metro & more.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center z-10 shrink-0">
            <a target="_blank" href="https://www.superchennai.com/properties">
              <button className="cursor-pointer group flex items-center justify-between bg-white text-[#a44294] font-semibold text-sm md:text-base pl-6 pr-4 py-3.5 rounded-xl shadow-md hover:bg-purple-50 transition-all duration-300 ease-in-out">
                <span>Explore Properties</span>
                <span className="ml-4 pl-4 border-l border-purple-100 text-[#a44294] group-hover:translate-x-1 transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
