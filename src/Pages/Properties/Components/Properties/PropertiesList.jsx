import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropertyCard from "./PropertyCard";
import SortBy from "../../Components/Properties/SortBy";
import { useFiltersData } from "../../hooks/useFilters";

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
        <div className="mainPropertiesCards">
          <Skeleton height={180} />
          <div className="propertyDetails">
            <h4>
              <Skeleton width={120} />
            </h4>
            <h5>
              <Skeleton width={180} />
            </h5>
            <Skeleton width={200} height={20} />
            <div className="aboutPlotsSize">
              <Skeleton width={100} />
              <Skeleton width={80} />
            </div>
            <Skeleton count={2} />
            <div className="uploadedDetailsproperty">
              <Skeleton width={80} />
              <Skeleton width={100} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!loading && properties.length === 0) {
    return (
      <>
        <p className="no-results">No properties found matching filters</p>
      </>
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
                  .map(
                    (val) =>
                      locations.find((l) => l.value === val)?.label || val
                  )
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
