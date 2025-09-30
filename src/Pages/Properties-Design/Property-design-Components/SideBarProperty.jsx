import { useState, useRef } from "react";
import "../../../assets/Css/PropertyPage.css";

export default function SidebarProperty({ filters, toggleFilter, options }) {
  const {
    bhkOptions,
    typeOptions,
    availableForOptions,
    locationOptions,
    amenitiesOptions,
  } = options;

  // Keep showMore state for all filter groups at top level
  const [showMore, setShowMore] = useState({
    type: false,
    location: false,
    bhk: false,
    availableFor: false,
    amenities: false,
  });

  const handleToggleShowMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sidebarRef = useRef(null);

  const renderButtonFilterGroup = (title, key, values) => {
    const [expanded, setExpanded] = useState(true); 
    const visibleCount = 4;
    const displayedValues = showMore[key]
      ? values
      : values.slice(0, visibleCount);

    return (
      <div className="listing-filters mb-4" key={key}>
        <div className="listing-individual-filter flex justify-between">
          <span className="heading-filters">{title}</span>
          <div className="flex items-center gap-4 plusmorefilters">
            {filters[key] && filters[key].length > 0 && (
              <span
                className="clear-filter cursor-pointer"
                onClick={() => toggleFilter(key, null)}
              >
                Clear
              </span>
            )}
            <img
              className="cursor-pointer"
              src="/images/icons/down-arrow-filter.svg"
              alt=""
              onClick={() => setExpanded(!expanded)}
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>

        {expanded && (
          <>
            <div className="individual-listing-filters">
              {displayedValues.map((value) => {
                const isActive = (filters[key] || []).includes(value);
                return (
                  <div
                    key={value}
                    className={`selected-individual-listing cursor-pointer ${isActive ? "activeStateFilter" : ""}`}
                    onClick={() => {
                      toggleFilter(key, value);
                      // sidebarRef.current?.scrollIntoView({
                      //   behavior: "smooth",
                      //   block: "start",
                      // });
                    }}
                  >
                    <img src="/images/icons/add-filter.svg" alt="add" />
                    <span>{value}</span>
                  </div>
                );
              })}
            </div>

            {values.length > visibleCount && (
              <div
                className="plusmorefilters cursor-pointer"
                onClick={() => handleToggleShowMore(key)}
              >
                <span>
                  {showMore[key]
                    ? "Show Less"
                    : `+${values.length - visibleCount} more`}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  const renderCheckboxFilterGroup = (title, key, values) => {
    const [expanded, setExpanded] = useState(true); // toggle show/hide filter options
    const visibleCount = 4;
    const displayedValues = showMore[key]
      ? values
      : values.slice(0, visibleCount);

    return (
      <div className="listing-filters mb-4" key={key}>
        <div className="listing-individual-filter flex justify-between cursor-pointer">      
          <span className="heading-filters">{title}</span>
          <div className="flex items-center gap-4 plusmorefilters">
            {filters[key] && filters[key].length > 0 && (
              <span
                className="clear-filter cursor-pointer"
                onClick={() => toggleFilter(key, null)}
              >
                Clear
              </span>
            )}
            <img
              className="cursor-pointer"
              onClick={() => setExpanded(!expanded)}
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
              src="/images/icons/down-arrow-filter.svg"
              alt=""
            />
          </div>
        </div>

        {expanded && (
          <>
            <div className="inputToggleFilters">
              {displayedValues.map((value) => {
                const isActive = (filters[key] || []).includes(value);
                return (
                  <div
                    key={value}
                    className={`checkboxfilterselected cursor-pointer`}
                    onClick={() => {
                      toggleFilter(key, value);              
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isActive}
                      readOnly
                      style={{ accentColor: "#a44294" }}
                    />
                    {value}
                  </div>
                );
              })}
            </div>

            {values.length > visibleCount && (
              <div
                className="plusmorefilters cursor-pointer"
                onClick={() => handleToggleShowMore(key)}
              >
                <span>
                  {showMore[key]
                    ? "Show Less"
                    : `+${values.length - visibleCount} more`}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section
      className="siderbar-properties"

      // ref={sidebarRef}
    >
      {Object.values(filters).some((arr) => arr.length > 0) && (
        <>
          <div className="applied-filters">
            <div className="selcetedapplied">Applied Filters</div>

            <div className="plusmorefilters">
              <span
                className="cursor-pointer"
                onClick={() => {
                  // Clear all filters
                  Object.keys(filters).forEach((key) =>
                    toggleFilter(key, null)
                  );
                }}
              >
                Clear All
              </span>
            </div>
          </div>

          <div className="selected-filters">
            {Object.entries(filters).map(([key, values]) =>
              values.map((value) => (
                <div
                  key={`${key}-${value}`}
                  className="selected-individual-filter"
                >
                  <span>{value}</span>
                  <img
                    src="/images/icons/close-filter-page.svg"
                    alt="remove"
                    className="cursor-pointer"
                    onClick={() => toggleFilter(key, value)} // Remove this filter
                  />
                </div>
              ))
            )}
          </div>
        </>
      )}

      {renderButtonFilterGroup("Type of Property", "type", typeOptions)}
      {renderCheckboxFilterGroup("Localities", "location", locationOptions)}
      {renderButtonFilterGroup("No. of Bedrooms", "bhk", bhkOptions)}
      {renderButtonFilterGroup(
        "Available For",
        "availableFor",
        availableForOptions
      )}
      {renderButtonFilterGroup("Amenities", "amenities", amenitiesOptions)}
    </section>
  );
}
