import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { client } from "../../../sanityClient";
import "../../../assets/Css/ExplorePage.css";

/**
 * NearbyCategoryChips Component - Category filter chips for Nearby mode
 * Fetches categories from Payload CMS (Sanity)
 */
const NearbyCategoryChips = ({ selectedCategory, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Fetch categories from Sanity CMS
      const query = '*[_type == "category"]{_id, name, slug}';
      const result = await client.fetch(query);
      
      // If no categories found in Sanity, use default categories
      if (!result || result.length === 0) {
        setCategories(getDefaultCategories());
      } else {
        setCategories(result.map(cat => ({
          id: cat._id,
          name: cat.name,
          slug: cat.slug?.current || cat.name.toLowerCase().replace(/\s+/g, '-')
        })));
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Fallback to default categories
      setCategories(getDefaultCategories());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultCategories = () => {
    return [
      { id: "1", name: "All", slug: null },
      { id: "2", name: "Restaurants", slug: "restaurants" },
      { id: "3", name: "Cafes", slug: "cafes" },
      { id: "4", name: "Shopping", slug: "shopping" },
      { id: "5", name: "Entertainment", slug: "entertainment" },
      { id: "6", name: "Healthcare", slug: "healthcare" },
      { id: "7", name: "Hotels", slug: "hotels" },
      { id: "8", name: "Attractions", slug: "attractions" },
    ];
  };

  const handleCategoryClick = (category) => {
    // If "All" is clicked or same category is clicked, clear filter
    if (category.slug === null || category.slug === selectedCategory) {
      onCategorySelect(null);
    } else {
      onCategorySelect(category.slug);
    }
  };

  if (loading) {
    return (
      <div className="nearby-category-chips">
        <div className="category-chips-loading">Loading categories...</div>
      </div>
    );
  }

  return (
    <div className="nearby-category-chips">
      <div className="category-chips-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-chip ${
              selectedCategory === category.slug ||
              (!selectedCategory && category.slug === null)
                ? "active"
                : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

NearbyCategoryChips.propTypes = {
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
};

export default NearbyCategoryChips;
