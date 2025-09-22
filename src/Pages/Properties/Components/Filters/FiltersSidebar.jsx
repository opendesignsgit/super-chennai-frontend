import React, { useState } from "react";
import FilterSection from "./FilterSection";
import BudgetSlider from "./BudgetSlider";
import { useFiltersData } from "../../hooks/useFilters";
import "../../Styles/FiltersSidebar.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FiltersSidebar = ({ filters, onCheckboxChange, onBudgetChange }) => {
  const {
    locations,
    propertyTypes,
    bhkOptions,
    purposes,
    furnishings,
    loading,
  } = useFiltersData();

  const [showMore, setShowMore] = useState(false);

 if (loading) {
    // Skeleton loader
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
  
  return (
    <aside className="filters-sidebar">
      <h3 className="filters-title">Filters</h3>

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

      {/* Property Types */}
      <FilterSection title="Property Types">
        <div className="filters-list">
          {propertyTypes.map((type) => (
            <label key={type.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.propertyTypes.includes(type.value)}
                onChange={() => onCheckboxChange("propertyTypes", type.value)}
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* More Filters Toggle */}
      <button
        className={`more-filters-btn ${showMore ? "active" : ""}`}
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Hide Filters" : "More Filters"}
      </button>

      {/* ADVANCE FILTER  */}
      {/* Extra Filters */}
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

          {/* Furnishing */}
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

          {/* Possession Status */}
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

          {/* Jacuzzi */}
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

          {/* Parking */}
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

          {/* Swimming Pool */}
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

          {/* Gated Community */}
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

          {/* Pets Allowed */}
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

          {/* Facing */}
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
