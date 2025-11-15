import "react-loading-skeleton/dist/skeleton.css";
import PropertyCardSkeleton from "../../Components/loader/Skeleton";
import SortBy from "../../Components/Properties/SortBy";
import { useFiltersData } from "../../hooks/useFilters";
import PropertyCard from "./PropertyCard";
import useIsMobile from "../../hooks/useIsMobile";
import MobilePropertyCard from "../Properties/MobilePropertyCard";
import MobilePropertyCardSkeleton from "../../Components/loader/MobilePropertyCardSkeleton"
const PropertiesList = ({
  properties,
  loading,
  sortBy,
  onSortChange,
  filters,
  totalResults 
}) => {
  const { locations, furnishings } = useFiltersData();
  const isMobile = useIsMobile();

console.log("list cards ",properties)


 if (loading) {
    return isMobile ? (
      <div className="properties-list">
        {[...Array(4)].map((_, i) => (
          <MobilePropertyCardSkeleton key={i} />
        ))}
      </div>
    ) : (
      <div className="PropertiesCard">
        {[...Array(3)].map((_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    );
  }



if (!loading && properties.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-gray-50 rounded-lg shadow-sm">
      {/* Icon */}
      <div className="mb-4">
        <svg
          className="w-16 h-16 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13h6m-3-3v6m-7 5h14a2 2 0 002-2V6a2 
               2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 
               0 002 2z"
          />
        </svg>
      </div>

      {/* Message */}
      <h2 className="text-xl font-semibold text-gray-700">
        No properties found
      </h2>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        We couldn’t find any properties that match your filters. 
        Try adjusting your filters or explore nearby locations.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
      >
        Reset Filters
      </button>
    </div>
  );
}

  const selectedFilters = [];
  filters.locations.forEach((val) => {
    const loc = locations.find((l) => l.value === val);
    if (loc) selectedFilters.push(loc.label);
  });

  if (filters.ownership.includes("owner")) selectedFilters.push("Owner");
  if (filters.ownership.includes("verified")) selectedFilters.push("Verified");
  filters.furnishing.forEach((val) => {
    const f = furnishings.find((f) => f.value === val);
    if (f) selectedFilters.push(f.label);
  });

  if (filters.withPhotos) selectedFilters.push("With Photos");
  if (filters.withVideos) selectedFilters.push("With Videos");

  return (
    <div>
      <div className="sidebarrightCards">
        <span className="text-sm md:text-base text-gray-700 hidden md:inline-flex">
          Showing {totalResults} results
          {Object.values(filters).some(
            (val) =>
              (Array.isArray(val) && val.length > 0) ||
              (typeof val === "object" &&
                val !== null &&
                Object.values(val).some(Boolean)) ||
              (typeof val === "string" && val.trim() !== "") ||
              (typeof val === "boolean" && val === true)
          ) && " for the selected filters"}
        </span>

        <button
          className="md:hidden ml-3 p-2 rounded-lg  text-white flex items-center justify-center"
          onClick={() => setShowSidebar(true)}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z"
              stroke="#E432BD"
              stroke-width="1.5"
            />
            <path
              d="M8.5 11.5H14.5001"
              stroke="#EC1E81"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 15H13.5"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 8H15.5"
              stroke="#1D1E22"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="block font-bold  text-gray-700">Filter</span>
        </button>

        {/* SORT BY */}
        <div className="ml-2 scale-90 md:scale-100">
          <SortBy value={sortBy} onChange={onSortChange} />
        </div>
      </div>

      {filters.locations.length > 0 && (
        <div className="locationsaboutarea">
          <div>
            <div className="locality-text">
              Get to know about the{" "}
              <span>
                {filters.locations
                  .map((val) => {
                    const loc = locations.find(
                      (l) => l.id == val || l.value == val
                    );
                    return loc ? loc.label : "Unknown";
                  })
                  .join(", ")}{" "}
                Locality
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="filteredrightsidecards">
        <div className="filteredsectionmain">
          {selectedFilters.map((f, idx) => (
            <div key={idx} className="filter-chip">
              {f}
            </div>
          ))}
        </div>
      </div>

      {isMobile ? (
        <div className="">
          {properties.map((prop, index) => (
            <div className="p-2">
              <MobilePropertyCard key={index} property={prop} />
            </div>
          ))}
        </div>
      ) : (
        properties.map((prop, index) => (
          <PropertyCard key={index} property={prop} />
        ))
      )}
    </div>
  );
};




export default PropertiesList;
