import { useState, useEffect } from "react";

export default function NearbyCategoryChips({ 
  selectedCategory, 
  onCategorySelect 
}) {
  // Categories from mockPlaces data
  const categories = [
    { id: "cafe", label: "Cafes", icon: "☕" },
    { id: "restaurant", label: "Restaurants", icon: "🍽️" },
    { id: "temple", label: "Temples", icon: "🛕" },
    { id: "beach", label: "Beaches", icon: "🏖️" },
    { id: "mall", label: "Malls", icon: "🛍️" },
    { id: "park", label: "Parks", icon: "🌳" },
    { id: "museum", label: "Museums", icon: "🏛️" },
    { id: "hotel", label: "Hotels", icon: "🏨" },
    { id: "coworking", label: "Coworking", icon: "💼" },
    { id: "gym", label: "Gyms", icon: "💪" },
    { id: "hospital", label: "Hospitals", icon: "🏥" },
    { id: "school", label: "Schools", icon: "🏫" },
  ];

  const handleChipClick = (categoryId) => {
    // Toggle category selection
    if (selectedCategory === categoryId) {
      onCategorySelect(null);
    } else {
      onCategorySelect(categoryId);
    }
  };

  return (
    <div className="nearby-category-chips">
      <div className="category-chips-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-chip ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleChipClick(category.id)}
          >
            <span className="chip-icon">{category.icon}</span>
            <span className="chip-label">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
