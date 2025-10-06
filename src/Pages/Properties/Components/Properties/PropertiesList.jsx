import "react-loading-skeleton/dist/skeleton.css";
import PropertyCardSkeleton from "../../Components/loader/Skeleton";
import SortBy from "../../Components/Properties/SortBy";
import { useFiltersData } from "../../hooks/useFilters";
import PropertyCard from "./PropertyCard";

const PropertiesList = ({
  properties,
  loading,
  sortBy,
  onSortChange,
  filters,
}) => {
  const { locations, furnishings } = useFiltersData();



  if (loading) {
    return (
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
        <span>{properties.length} results shown for the selected filters</span>
        <SortBy value={sortBy} onChange={onSortChange} />
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

      {properties.map((prop, index) => (
        <PropertyCard key={prop?.id || index} property={prop} />
      ))}
    </div>
  );
};

export default PropertiesList;
