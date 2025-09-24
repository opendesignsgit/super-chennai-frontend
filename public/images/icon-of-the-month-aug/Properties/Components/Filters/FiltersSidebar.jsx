
import React from "react";
import FilterSection from "./FilterSection";
import BudgetSlider from "./BudgetSlider";
import { useFiltersData } from "../../hooks/useFilters";
import "../../Styles/FiltersSidebar.css";

const FiltersSidebar = ({ filters, onCheckboxChange, onBudgetChange }) => {
  const { locations, propertyTypes, bhkOptions, loading } = useFiltersData();

  if (loading) return <p>Loading filters...</p>;

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
    </aside>
  );
};

export default FiltersSidebar;



