import React from "react";
import FilterSection from "./FilterSection";
import BudgetSlider from "./BudgetSlider";
import { useFiltersData } from "../../hooks/useFilters";

const FiltersSidebar = ({ filters, onCheckboxChange, onBudgetChange }) => {
  const { locations, propertyTypes, bhkOptions, loading } = useFiltersData();

  if (loading) return <p>Loading filters...</p>;

  return (
    <aside
      style={{
        flex: "0 0 250px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3>Filters</h3>

      {/* Locations */}
      <FilterSection title="Locations">
        {locations.map((loc) => (
          <label key={loc.id} style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={filters.locations.includes(loc.value)}
              onChange={() => onCheckboxChange("locations", loc.value)}
            />
            {loc.label} {/* use label instead of title */}
          </label>
        ))}
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
        {bhkOptions.map((bhk) => (
          <label key={bhk.id} style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={filters.bhk.includes(bhk.value)}
              onChange={() => onCheckboxChange("bhk", bhk.value)}
            />
            {bhk.label}
          </label>
        ))}
      </FilterSection>

      {/* Property Types */}
      <FilterSection title="Property Types">
        {propertyTypes.map((type) => (
          <label key={type.id} style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={filters.propertyTypes.includes(type.value)}
              onChange={() => onCheckboxChange("propertyTypes", type.value)}
            />
            {type.label} {/* use label instead of title */}
          </label>
        ))}
      </FilterSection>
    </aside>
  );
};

export default FiltersSidebar;



// import React from "react";
// import FilterSection from "./FilterSection";
// import { LOCATIONS, PROPERTY_TYPES, BHK_OPTIONS } from "./constants";
// import BudgetSlider from "./BudgetSlider";

// const FiltersSidebar = ({ filters, onCheckboxChange, onBudgetChange }) => {
//   return (
//     <aside
//       style={{
//         flex: "0 0 250px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         padding: "16px",
//       }}
//     >
//       <h3>Filters</h3>

//       <FilterSection title="Locations">
//         {LOCATIONS.map((loc) => (
//           <label key={loc} style={{ display: "block" }}>
//             <input
//               type="checkbox"
//               checked={filters.locations.includes(loc)}
//               onChange={() => onCheckboxChange("locations", loc)}
//             />
//             {loc}
//           </label>
//         ))}
//       </FilterSection>

//       <FilterSection title="Budget">
//         <BudgetSlider
//           min={0}
//           max={10000000}
//           values={[filters.minBudget, filters.maxBudget]}
//           onChange={(vals) => onBudgetChange(vals)}
//         />
//       </FilterSection>


//       <FilterSection title="Bedrooms">
//         {BHK_OPTIONS.map((num) => (
//           <label key={num} style={{ display: "block" }}>
//             <input
//               type="checkbox"
//               checked={filters.bhk.includes(num.toString())}
//               onChange={() => onCheckboxChange("bhk", num.toString())}
//             />
//             {num} BHK
//           </label>
//         ))}
//       </FilterSection>

//       <FilterSection title="Property Types">
//         {PROPERTY_TYPES.map((type) => (
//           <label key={type} style={{ display: "block" }}>
//             <input
//               type="checkbox"
//               checked={filters.propertyTypes.includes(type)}
//               onChange={() => onCheckboxChange("propertyTypes", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </FilterSection>
//     </aside>
//   );
// };

// export default FiltersSidebar;
