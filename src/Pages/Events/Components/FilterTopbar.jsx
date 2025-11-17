import React, { useState } from "react";

const FilterTopbar = ({
  categories,
  filters = {},
  onCategoryChange,
  activeColor = "#a44294",
  initialVisible = 6,
}) => {
  const [showAll, setShowAll] = useState(false);

  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <section className="filterTopbar bg-gray-100 py-4 border-b border-gray-200">
        <div className="container max-w-7xl mx-auto text-center text-gray-500">
          No categories available
        </div>
      </section>
    );
  }

  // visible categories (for desktop show more/less)
  const visibleCategories =
    showAll || window.innerWidth < 768
      ? categories
      : categories.slice(0, initialVisible);

  return (
    <section
      className="
        filterTopbar
        bg-gray-100
        py-3
        border-b
        border-gray-200
        sticky
        top-[100px]
        md:top-[118px]
        z-50
      "
    >
      <div
        className={`
          container max-w-7xl mx-auto flex gap-3 px-2
          ${showAll ? "flex-wrap" : "overflow-x-auto whitespace-nowrap"}
          md:${showAll ? "flex-wrap overflow-visible" : "overflow-x-auto whitespace-nowrap"}
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden 
        `}
      >
        {visibleCategories.map((category) => {
          const isActive =
            category.id === "All"
              ? !filters.categories || filters.categories.length === 0
              : filters.categories?.includes(category.id);

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 capitalize cursor-pointer ${
                isActive
                  ? "text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{
                backgroundColor: isActive ? activeColor : "white",
                borderColor: isActive ? activeColor : "#d1d5db",
              }}
            >
              {category.title}
            </button>
          );
        })}

        {categories.length > initialVisible && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 capitalize"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default FilterTopbar;
