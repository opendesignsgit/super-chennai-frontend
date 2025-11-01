import React from "react";

/**
 * Reusable FilterTopbar Component
 * @param {Array|null} categories - List of category names (or null)
 * @param {Object} filters - Current filter state (e.g., { category: "Music" })
 * @param {Function} onCategoryChange - Callback when category changes
 * @param {String} activeColor - Optional (Tailwind color), default: #a44294
 */
const FilterTopbar = ({
  categories,
  filters = {},
  onCategoryChange,
  activeColor = "#a44294",
}) => {
  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <section className="filterTopbar bg-gray-100 py-4 border-b border-gray-200">
        <div className="container max-w-7xl mx-auto text-center text-gray-500">
          No categories available
        </div>
      </section>
    );
  }

  console.log("categories==========",categories)

  return (
    <section className="filterTopbar bg-gray-100 py-4 border-b border-gray-200">
      <div className="container max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive =
            filters.category === category ||
            (category === "All" && !filters.category);

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                isActive
                  ? "text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              style={{
                backgroundColor: isActive ? activeColor : "white",
                borderColor: isActive ? activeColor : "#d1d5db",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FilterTopbar;
