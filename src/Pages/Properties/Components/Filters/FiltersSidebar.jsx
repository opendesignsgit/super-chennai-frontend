import React, { useState } from "react";
import { useFiltersData } from "../../hooks/useFilters";
import BudgetSlider from "./BudgetSlider";
import "../../Styles/FiltersSidebar.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

const FiltersSidebar = ({
  filters,
  onCheckboxChange,
  onBudgetChange,
  onClearAll,
}) => {
  const {
    locations,
    propertyTypes,
    bhkOptions,
    purposes,
    furnishings,
    loading,
  } = useFiltersData();

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
      <aside className="filters-sidebar">
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
    filters.locations.forEach((val) => {
      const loc = locations.find((l) => l.value === val);
      if (loc) badges.push({ label: loc.label, type: "locations", value: val });
    });
    filters.bhk.forEach((val) => {
      const bhk = bhkOptions.find((b) => b.value === val);
      if (bhk) badges.push({ label: bhk.label, type: "bhk", value: val });
    });

    filters.propertyTypes.forEach((val) => {
      const type = propertyTypes.find((t) => t.value === val);
      if (type)
        badges.push({ label: type.label, type: "propertyTypes", value: val });
    });

    filters.purpose.forEach((val) => {
      const p = purposes.find((p) => p.value === val);
      if (p) badges.push({ label: p.label, type: "purpose", value: val });
    });

    filters.furnishing.forEach((val) => {
      const f = furnishings.find((f) => f.value === val);
      if (f) badges.push({ label: f.label, type: "furnishing", value: val });
    });

    if (filters.jacuzzi) badges.push({ label: "Jacuzzi", type: "jacuzzi" });
    if (filters.swimmingPool)
      badges.push({ label: "Swimming Pool", type: "swimmingPool" });
    if (filters.gatedCommunity)
      badges.push({ label: "Gated Community", type: "gatedCommunity" });
    if (filters.petsAllowed)
      badges.push({ label: "Pets Allowed", type: "petsAllowed" });

    filters.facing.forEach((val) =>
      badges.push({
        label: val.charAt(0).toUpperCase() + val.slice(1),
        type: "facing",
        value: val,
      })
    );

    filters.possessionStatus.forEach((val) =>
      badges.push({
        label: val.replace("_", " "),
        type: "possessionStatus",
        value: val,
      })
    );

    return badges;
  };

  return (
    <aside className="filters-sidebar">
      <h3 className="filters-title">Filters</h3>

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
              {badge.label} ×
            </span>
          ))}
          <button className="clear-all-btn" onClick={onClearAll}>
            Clear All
          </button>
        </div>
      )}

      <div className="property-types-badges">
        {visiblePropertyTypes.map((type) => {
          const isSelected = filters.propertyTypes.includes(type.value);
          return (
            <span
              key={type.value}
              className={`badge ${isSelected ? "selected" : ""}`}
              onClick={() => togglePropertyType(type.value)}
            >
              {type.label}
            </span>
          );
        })}

        {/* +N more */}
        {propertyTypes.length > 3 && !showMorePropertyTypes && (
          <span
            className="more-badge"
            onClick={() => setShowMorePropertyTypes(true)}
          >
            +{propertyTypes.length - 3} more
          </span>
        )}
      </div>

      {/* Locations */}
      <FilterSection title="Locations">
        <div className="filters-list">
          {locations.map((loc) => (
            <label key={loc.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.locations.includes(loc.value)}
                onChange={() => onCheckboxChange("locations", loc.value)}
              />
              <span>{loc.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Budget */}
      <FilterSection title="Budget">
        <BudgetSlider
          min={0}
          max={10000000}
          values={[filters.minBudget, filters.maxBudget]}
          onChange={(vals) => onBudgetChange(vals)}
        />
      </FilterSection>

      {/* Bedrooms / BHK */}
      <FilterSection title="Bedrooms">
        <div className="filters-list">
          {bhkOptions.map((bhk) => (
            <label key={bhk.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.bhk.includes(bhk.value)}
                onChange={() => onCheckboxChange("bhk", bhk.value)}
              />
              <span>{bhk.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* More Filters Toggle */}

      <div className="propertyViewButton ">
        <button
          className={`propertyViewButton ${showMore ? "active" : ""}`}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Hide Filters" : "More Filters"}
        </button>
      </div>

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
                  <span>{p.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Furnishing">
            <div className="filters-list">
              {furnishings.map((f) => (
                <label key={f.value} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.furnishing.includes(f.value)}
                    onChange={() => onCheckboxChange("furnishing", f.value)}
                  />
                  <span>{f.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

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
                  <span>{status}</span>
                </label>
              );
            })}
          </FilterSection>

          <FilterSection title="Jacuzzi">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.jacuzzi}
                onChange={() => onCheckboxChange("jacuzzi", !filters.jacuzzi)}
              />
              <span>Has Jacuzzi</span>
            </label>
          </FilterSection>

          <FilterSection title="Parking">
            {["1 Car", "2 Car", "Bike"].map((p) => {
              const val = p.toLowerCase().replace(" ", "_");
              return (
                <label key={val} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.parking.includes(val)}
                    onChange={() => onCheckboxChange("parking", val)}
                  />
                  <span>{p}</span>
                </label>
              );
            })}
          </FilterSection>

          <FilterSection title="Swimming Pool">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.swimmingPool}
                onChange={() =>
                  onCheckboxChange("swimmingPool", !filters.swimmingPool)
                }
              />
              <span>Has Swimming Pool</span>
            </label>
          </FilterSection>

          <FilterSection title="Gated Community">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.gatedCommunity}
                onChange={() =>
                  onCheckboxChange("gatedCommunity", !filters.gatedCommunity)
                }
              />
              <span>Inside Gated Community</span>
            </label>
          </FilterSection>

          <FilterSection title="Pets Allowed">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.petsAllowed}
                onChange={() =>
                  onCheckboxChange("petsAllowed", !filters.petsAllowed)
                }
              />
              <span>Pets Allowed</span>
            </label>
          </FilterSection>

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
                  <span>{dir}</span>
                </label>
              );
            })}
          </FilterSection>
        </div>
      )}
    </aside>
  );
};

export default FiltersSidebar;
