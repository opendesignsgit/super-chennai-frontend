import { useEffect, useState } from "react";
import "./NearbyCategoryChips.css";

export default function NearbyCategoryChips({ 
  availableCategories, 
  selectedCategory, 
  onCategorySelect 
}) {
  // Category display names (capitalize and format)
  const formatCategoryName = (category) => {
    if (category === "coworking") return "Coworking";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <div className="nearby-category-chips">
      <div className="chips-container">
        {/* All/Clear chip */}
        <button
          className={`category-chip ${selectedCategory === null ? "active" : ""}`}
          onClick={() => onCategorySelect(null)}
        >
          All
        </button>
        
        {/* Category chips */}
        {availableCategories.map((category) => (
          <button
            key={category}
            className={`category-chip ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onCategorySelect(category)}
          >
            {formatCategoryName(category)}
          </button>
        ))}
      </div>
    </div>
  );
}
