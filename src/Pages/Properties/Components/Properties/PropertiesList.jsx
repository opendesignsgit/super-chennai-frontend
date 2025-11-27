import "react-loading-skeleton/dist/skeleton.css";
import PropertyCardSkeleton from "../../Components/loader/Skeleton";
import SortBy from "../../Components/Properties/SortBy";
import { useFiltersData } from "../../hooks/useFilters";
import PropertyCard from "./PropertyCard";
import useIsMobile from "../../hooks/useIsMobile";
import MobilePropertyCard from "../Properties/MobilePropertyCard";
import MobilePropertyCardSkeleton from "../../Components/loader/MobilePropertyCardSkeleton";
import useDevice from "../../hooks/useIsMobile";

import PropertiesFilterModal from "../Modal/PropertiesFilterModal";
const PropertiesList = ({
  properties,
  loading,
  sortBy,
  onSortChange,
  filters,
  totalResults,

  onCheckboxChange,
  onBudgetChange,
  onClearAll,
  setUseTopFilter,

  showMobileFilter,
  setShowMobileFilter,
}) => {
  const { propertylocations, furnishings } = useFiltersData();
  const isMobile = useIsMobile();
  const device = useDevice();

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
          We couldn’t find any properties that match your filters. Try adjusting
          your filters or explore nearby locations.
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
  filters.propertylocations.forEach((val) => {
    const loc = propertylocations.find((l) => l.value === val);
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
          className="md:hidden ml-3 py-2 px-3 rounded-lg bg-white  flex items-center gap-2"
          onClick={() => setShowMobileFilter(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M7 12h10M10 18h4"
            />
          </svg>

          <span className="text-base font-semibold text-gray-800">Filter</span>
        </button>

        {/* MOBILE SIDE BAR###########  */}

        <PropertiesFilterModal
          open={showMobileFilter}
          onClose={() => setShowMobileFilter(false)}
          filters={filters}
          onCheckboxChange={onCheckboxChange}
          onBudgetChange={onBudgetChange}
          onClearAll={onClearAll}
        />

        {/* SORT BY */}
        <div className="ml-2 scale-90 md:scale-100">
          <SortBy value={sortBy} onChange={onSortChange} />
        </div>
      </div>

      {filters.propertylocations.length > 0 && (
        <div className="locationsaboutarea">
          <div>
            <div className="locality-text">
              Get to know about the{" "}
              <span>
                {filters.propertylocations
                  .map((val) => {
                    const loc = propertylocations.find(
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

      {device === "desktop" ? (
        properties.map((prop, index) => (
          <PropertyCard key={index} property={prop} />
        ))
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {properties.map((prop) => (
            <MobilePropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesList;
