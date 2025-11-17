import React, { useState } from "react";
import { useFiltersData } from "../../hooks/useFilters";
import BudgetSlider from "./BudgetSlider";
import "../../Styles/FiltersSidebar.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatLabel } from "../../utils/formatLabel";

export const propertyTypeFiltersMap = {
  plot: ["plotDimensions", "ageOfProperty", "facing", "ownership"],
  apartment: [
    "bhk",
    "furnishing",
    "amenities",
    "appliances",
    "bathroomFeatures",
    "parking",
    "ageOfProperty",
    "facing",
  ],
  villa: [
    "bhk",
    "furnishing",
    "amenities",
    "appliances",
    "bathroomFeatures",
    "parking",
    "ageOfProperty",
    "facing",
    "interiors",
  ],
  builder_floor: [
    "bhk",
    "furnishing",
    "amenities",
    "appliances",
    "bathroomFeatures",
    "parking",
    "ageOfProperty",
    "facing",
  ],
  studio: [
    "bhk",
    "furnishing",
    "amenities",
    "appliances",
    "bathroomFeatures",
    "parking",
    "ageOfProperty",
    "facing",
  ],
  penthouse: [
    "bhk",
    "furnishing",
    "amenities",
    "appliances",
    "bathroomFeatures",
    "parking",
    "ageOfProperty",
    "facing",
    "interiors",
  ],
  shop: ["ageOfProperty", "facing", "ownership", "parking"],
  office: ["ageOfProperty", "facing", "ownership", "parking"],
  coworking: ["ageOfProperty", "facing", "ownership", "parking"],
  warehouse: ["ageOfProperty", "facing", "ownership", "parking"],
  industrial_shed: ["ageOfProperty", "facing", "ownership", "parking"],
  factory: ["ageOfProperty", "facing", "ownership", "parking"],
  agriculture_land: ["plotDimensions", "ageOfProperty", "facing", "ownership"],
  farmhouse: [
    "plotDimensions",
    "ageOfProperty",
    "facing",
    "ownership",
    "interiors",
  ],
  hotel: ["ageOfProperty", "facing", "ownership", "parking", "amenities"],
  pg_coliving: [
    "ageOfProperty",
    "facing",
    "ownership",
    "amenities",
    "furnishing",
  ],
  serviced_apartment: [
    "ageOfProperty",
    "facing",
    "ownership",
    "amenities",
    "furnishing",
  ],
};

const FilterSection = ({ title, children, defaultExpanded = true }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="filter-section">
      <div
        className="filter-section-header cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>{title}</h4>
        <img
          className="cursor-pointer"
          src="/images/icons/down-arrow-filter.svg"
          alt="Toggle"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </div>

      {expanded && <div className="filter-section-content">{children}</div>}
    </div>
  );
};

const getActiveFilterKeys = (selectedPropertyTypes) => {
  const keys = selectedPropertyTypes.reduce((acc, type) => {
    const mapKeys = propertyTypeFiltersMap[type];
    if (mapKeys) acc.push(...mapKeys);
    return acc;
  }, []);
  return [...new Set(keys)];
};

const FiltersSidebar = ({
  filters,
  onCheckboxChange,
  onBudgetChange,
  onClearAll,
  setUseTopFilter,
}) => {
  const {
    locations,
    propertyTypes,
    bhkOptions,
    purposes,
    furnishings,
    loading,
  } = useFiltersData();
  const activeFilterKeys = getActiveFilterKeys(filters.propertyTypes);

  const [showMore, setShowMore] = useState(false);
  const [showMorePropertyTypes, setShowMorePropertyTypes] = useState(false);

  const visiblePropertyTypes = showMorePropertyTypes
    ? propertyTypes
    : propertyTypes.slice(0, 3);

  const togglePropertyType = (val) => {
    onCheckboxChange("propertyTypes", val);
  };

  if (loading) {
    return (
      <aside className="filters-sidebar cursor-pointer">
        <Skeleton width={120} height={24} style={{ marginBottom: 16 }} />
        <div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton
              key={idx}
              width={"100%"}
              height={20}
              style={{ marginBottom: 8 }}
            />
          ))}
        </div>
        <Skeleton width={"100%"} height={50} style={{ margin: "20px 0" }} />
        <div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton
              key={idx}
              width={"100%"}
              height={20}
              style={{ marginBottom: 8 }}
            />
          ))}
        </div>
      </aside>
    );
  }

  const selectedFilter = () => {
    const badges = [];

    // Locations
    filters.locations.forEach((val) => {
      const loc = locations.find((l) => l.value === val);
      if (loc) badges.push({ label: loc.label, type: "locations", value: val });
    });

    // BHK
    filters.bhk.forEach((val) => {
      const bhk = bhkOptions.find((b) => b.value === val);
      if (bhk) badges.push({ label: bhk.label, type: "bhk", value: val });
    });

    // Property Types
    filters.propertyTypes.forEach((val) => {
      const type = propertyTypes.find((t) => t.value === val);
      if (type)
        badges.push({ label: type.label, type: "propertyTypes", value: val });
    });

    // Purpose
    filters.purpose.forEach((val) => {
      const p = purposes.find((p) => p.value === val);
      if (p) badges.push({ label: p.label, type: "purpose", value: val });
    });

    // Furnishing
    filters.furnishing.forEach((val) => {
      const f = furnishings.find((f) => f.value === val);
      if (f) badges.push({ label: f.label, type: "furnishing", value: val });
    });

    // Facing
    filters.facing.forEach((val) =>
      badges.push({
        label: val.charAt(0).toUpperCase() + val.slice(1),
        type: "facing",
        value: val,
      })
    );

    // Possession Status
    filters.possessionStatus.forEach((val) =>
      badges.push({
        label: val.replace("_", " "),
        type: "possessionStatus",
        value: val,
      })
    );

    //  Plot Dimensions
    if (filters.plotDimensions?.length || filters.plotDimensions?.width) {
      const { length, width } = filters.plotDimensions;
      if (length) {
        badges.push({
          label: `Length: ${length} ft`,
          type: "plotDimensions",
          value: { ...filters.plotDimensions, length: "" },
        });
      }
      if (width) {
        badges.push({
          label: `Width: ${width} ft`,
          type: "plotDimensions",
          value: { ...filters.plotDimensions, width: "" },
        });
      }
    }

    // Age of Property
    if (filters.ageOfProperty) {
      badges.push({
        label: filters.ageOfProperty.replace(/_/g, " "),
        type: "ageOfProperty",
        value: "",
      });
    }

    //  Parking
    filters.parking.forEach((val) =>
      badges.push({ label: val, type: "parking", value: val })
    );

    //  Amenities
    filters.amenities.forEach((val) =>
      badges.push({ label: val, type: "amenities", value: val })
    );

    //  Appliances
    filters.appliances.forEach((val) =>
      badges.push({ label: val, type: "appliances", value: val })
    );

    //  Bathroom Features
    Object.entries(filters.bathroomFeatures).forEach(([key, selected]) => {
      if (selected) {
        badges.push({
          label: key.replace(/([A-Z])/g, " $1"),
          type: "bathroomFeatures",
          value: key,
        });
      }
    });

    return badges;
  };

  const ShowMoreList = ({ items, renderItem, initialCount = 5 }) => {
    const [showMore, setShowMore] = useState(false);

    const visibleItems = showMore ? items : items.slice(0, initialCount);

    return (
      <div className="show-more-list">
        {visibleItems.map(renderItem)}

        {items.length > initialCount && (
          <span
            className="more-badge"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : `+${items.length - initialCount} more`}
          </span>
        )}
      </div>
    );
  };

  return (
    <aside className="filters-sidebar">
      <div className="filters-header flex items-center justify-between mb-4">
        <h3 className="filters-title">Filters</h3>
        {setUseTopFilter && (
          <button
            className="flex items-center gap-1 text-purple-600 hover:text-purple-800"
            onClick={() => setUseTopFilter((prev) => !prev)}
          >
            <span>Switch Top</span>
           
          </button>
        )}
      </div>

      {selectedFilter().length > 0 && (
        <div className="selected-filters-bar">
          {selectedFilter().map((badge, idx) => (
            <span
              key={idx}
              className="selected-badge"
              onClick={() =>
                onCheckboxChange(
                  badge.type,
                  badge.value !== undefined ? badge.value : false
                )
              }
            >
              {formatLabel(badge.label)}
              <span className="close-btn">×</span>
            </span>
          ))}
          <button className="clear-all-btn" onClick={onClearAll}>
            Clear All
          </button>
        </div>
      )}

      {/* Proprty Types  */}

      <FilterSection title="Looking For">
        <div className="property-types-badges">
          {visiblePropertyTypes.map((type) => {
            const isSelected = filters.propertyTypes.includes(type.value);
            return (
              <span
                key={type.value}
                className={`badge ${isSelected ? "selected" : ""}`}
                onClick={() => togglePropertyType(type.value)}
              >
                {formatLabel(type.label || type.value)}
              </span>
            );
          })}

          {propertyTypes.length > 3 && !showMorePropertyTypes && (
            <span
              className="more-badge"
              onClick={() => setShowMorePropertyTypes(true)}
            >
              +{propertyTypes.length - 3} more
            </span>
          )}
        </div>
      </FilterSection>

      {/* Locations */}

      <FilterSection title="Locations">
        <ShowMoreList
          items={locations}
          initialCount={5}
          renderItem={(loc) => (
            <label key={loc.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.locations.includes(loc.id)}
                onChange={() => onCheckboxChange("locations", loc.id)}
              />

              <span>{formatLabel(loc.label)}</span>
            </label>
          )}
        />
      </FilterSection>

      {/* Budget  Temp Hide */}
      {/* <FilterSection title="Budget">
        <BudgetSlider
          min={0}
          max={10000000}
          values={[filters.minBudget, filters.maxBudget]}
          onChange={(vals) => onBudgetChange(vals)}
        />
      </FilterSection> */}

      {/* DIMENTION  */}

      {activeFilterKeys.includes("plotDimensions") && (
        <FilterSection title="Plot Dimensions (ft)">
          <div className="plot-dimensions-inputs">
            <label>
              Length:
              <input
                type="number"
                value={filters.plotDimensions?.length || ""}
                onChange={(e) =>
                  onCheckboxChange("plotDimensions", {
                    ...filters.plotDimensions,
                    length: Number(e.target.value),
                  })
                }
              />
            </label>
            <label>
              Width:
              <input
                type="number"
                value={filters.plotDimensions?.width || ""}
                onChange={(e) =>
                  onCheckboxChange("plotDimensions", {
                    ...filters.plotDimensions,
                    width: Number(e.target.value),
                  })
                }
              />
            </label>
          </div>
        </FilterSection>
      )}

      {/* Bedrooms / BHK */}
      {activeFilterKeys.includes("bhk") && (
        <FilterSection title="Bedrooms">
          <ShowMoreList
            items={bhkOptions}
            initialCount={4}
            renderItem={(bhk) => (
              <label key={bhk.id} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.bhk.includes(bhk.value)}
                  onChange={() => onCheckboxChange("bhk", bhk.value)}
                />
                <span>{formatLabel(bhk.label)}</span>
              </label>
            )}
          />
        </FilterSection>
      )}

      {/* AGE OF PROPERTY temp hide  */}

      {/* <FilterSection title="Age of Property">
        {[
          { label: "New Years", value: "new years" },
          { label: "0-5 Years", value: "0-5" },
          { label: "5-10 Years", value: "5-10" },
          { label: "10-20 Years", value: "10plus" },
        ].map((age) => (
          <label key={age.value} className="filter-checkbox">
            <input
              type="radio"
              name="ageOfProperty"
              checked={filters.ageOfProperty === age.value}
              onChange={() => onCheckboxChange("ageOfProperty", age.value)}
            />
            <span>{formatLabel(age.label)}</span>
          </label>
        ))}
      </FilterSection> */}

      {/* Advanced Filters */}
      {showMore && (
        <div className="more-filters">
          <FilterSection title="Purpose">
            <div className="filters-list">
              {purposes.map((p) => (
                <label key={p.value} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.purpose.includes(p.value)}
                    onChange={() => onCheckboxChange("purpose", p.value)}
                  />
                  <span>{formatLabel(p.label)}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {activeFilterKeys.includes("furnishing") && (
            <FilterSection title="Furnishing">
              <div className="filters-list">
                {furnishings.map((f) => (
                  <label key={f.value} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.furnishing.includes(f.value)}
                      onChange={() => onCheckboxChange("furnishing", f.value)}
                    />
                    <span>{formatLabel(f.label)}</span>
                  </label>
                ))}
              </div>
            </FilterSection>
          )}

          <FilterSection title="Possession Status">
            {["Ready", "Under Construction"].map((status) => {
              const val = status.toLowerCase().replace(" ", "_");
              return (
                <label key={val} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.possessionStatus.includes(val)}
                    onChange={() => onCheckboxChange("possessionStatus", val)}
                  />
                  <span>{formatLabel(status)}</span>
                </label>
              );
            })}
          </FilterSection>
          {activeFilterKeys.includes("parking") && (
            <FilterSection title="Parking / Outdoor">
              {[
                { label: "Covered Parking Slots", value: "coveredParking" },
                { label: "Open Parking Slots", value: "openParking" },
                { label: "Visitor Parking", value: "visitorParking" },
                { label: "EV Charging Point", value: "evCharging" },
              ].map((p) => {
                return (
                  <label key={p.value} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.parking.includes(p.value)}
                      onChange={() => onCheckboxChange("parking", p.value)}
                    />
                    <span>{formatLabel(p.label)}</span>
                  </label>
                );
              })}
            </FilterSection>
          )}

          {activeFilterKeys.includes("amenities") && (
            <FilterSection title="Building / Amenities">
              {[
                "Elevator",
                "Security",
                "Swimming Pool",
                "Gym",
                "Play Area",
                "Clubhouse",
                "Garden",
                "Intercom",
                "Fire Safety",
              ].map((amenity) => {
                const key = amenity.toLowerCase().replace(/\s+/g, "");
                return (
                  <label key={key} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.amenities.includes(key)}
                      onChange={() => onCheckboxChange("amenities", key)}
                    />
                    <span>{formatLabel(amenity)}</span>
                  </label>
                );
              })}
            </FilterSection>
          )}

          {activeFilterKeys.includes("interiors") && (
            <FilterSection title="Interiors / Furnishings">
              {[
                "Modular Kitchen",
                "Wardrobes",
                "False Ceiling",
                "Curtains / Blinds",
                "Wooden Flooring",
              ].map((item) => {
                const key = item.toLowerCase().replace(/\s+|\/+/g, "");
                return (
                  <label key={key} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.interiors.includes(key)}
                      onChange={() => onCheckboxChange("interiors", key)}
                    />
                    <span>{formatLabel(item)}</span>
                  </label>
                );
              })}
            </FilterSection>
          )}

          {activeFilterKeys.includes("appliances") && (
            <FilterSection title="Appliances / Electronics">
              {[
                "AC Units",
                "Fridge",
                "Washing Machine",
                "Dishwasher",
                "Microwave",
                "TV",
                "Geyser",
                "Power Backup",
                "Solar",
                "Water Purifier",
              ].map((appliance) => {
                const key = appliance.toLowerCase().replace(/\s+/g, "");
                return (
                  <label key={key} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.appliances.includes(key)}
                      onChange={() => onCheckboxChange("appliances", key)}
                    />
                    <span>{formatLabel(appliance)}</span>
                  </label>
                );
              })}
            </FilterSection>
          )}

          {activeFilterKeys.includes("bathroomFeatures") && (
            <FilterSection title="Bathroom Features">
              {[
                { label: "Jacuzzi", key: "jacuzzi" },
                { label: "Bathtubs", key: "bathtubs" },
                { label: "Heated Flooring", key: "heatedFlooring" },
              ].map((feature) => (
                <label key={feature.key} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.bathroomFeatures[feature.key]}
                    onChange={() =>
                      onCheckboxChange("bathroomFeatures", {
                        ...filters.bathroomFeatures,
                        [feature.key]: !filters.bathroomFeatures[feature.key],
                      })
                    }
                  />
                  <span>{formatLabel(feature.label)}</span>
                </label>
              ))}
            </FilterSection>
          )}

          <FilterSection title="Facing">
            {["North", "East", "West", "South"].map((dir) => {
              const val = dir.toLowerCase();
              return (
                <label key={val} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.facing.includes(val)}
                    onChange={() => onCheckboxChange("facing", val)}
                  />
                  <span>{formatLabel(dir)}</span>
                </label>
              );
            })}
          </FilterSection>
        </div>
      )}

      {/* More Filters Toggle Temp Hide */}

      {/* <div className="propertyViewButtonMore">
        <button
          className={`propertyViewButtonMore custom-width-btn ${showMore ? "active" : ""}`}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Hide Advanced Filter" : "Advanced Filter"}
        </button>
      </div> */}
    </aside>
  );
};

export default FiltersSidebar;
