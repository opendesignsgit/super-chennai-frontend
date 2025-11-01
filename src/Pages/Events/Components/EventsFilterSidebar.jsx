import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEvents } from "../Hooks/UseEvents";
import { LANGUAGE_OPTIONS } from "../constants/languages";


const FilterSection = ({ title, children, onClear }) => {
const { events, totalResults, loading } = useEvents();
  console.log("totalfilter side data",events)
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-medium text-gray-700"
        >
          {title}
          {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </button>
        <button
          onClick={onClear}
          className="text-sm text-pink-600 hover:text-pink-700 font-medium"
        >
          Clear
        </button>
      </div>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  );
};

const EventsFilterSidebar = ({ filters, setFilters }) => {
  const handleLanguageChange = (lang) => {
    setFilters((prev) => {
      const selected = new Set(prev.languages || []);
      if (selected.has(lang)) selected.delete(lang);
      else selected.add(lang);
      return { ...prev, languages: Array.from(selected) };
    });
  };

  const handleCategoryChange = (cat) => {
    setFilters((prev) => {
      const selected = new Set(prev.categories || []);
      if (selected.has(cat)) selected.delete(cat);
      else selected.add(cat);
      return { ...prev, categories: Array.from(selected) };
    });
  };

  const handlePriceChange = (price) => {
    setFilters((prev) => ({ ...prev, price }));
  };

  const clearCategory = () => setFilters((prev) => ({ ...prev, categories: [] }));
  const clearLanguage = () => setFilters((prev) => ({ ...prev, languages: [] }));
  const clearPrice = () => setFilters((prev) => ({ ...prev, price: "" }));

  return (
    <aside className="w-[280px] bg-[#f9fafb] rounded-2xl p-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Filters</h3>

      {/* Date Filter */}
      <FilterSection title="Date" onClear={() => {}}>
        <div className="flex flex-wrap gap-2">
          {["Today", "Tomorrow", "This Weekend"].map((label) => (
            <button
              key={label}
              className="px-3 py-1.5 border border-pink-600 text-pink-600 rounded-md text-sm hover:bg-pink-50"
            >
              {label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 mt-3 text-sm text-gray-700">
          <input type="checkbox" className="accent-pink-600" />
          Date Range
        </label>
      </FilterSection>


      {/* Languages */}
      <FilterSection title="Languages" onClear={clearLanguage}>
        {LANGUAGE_OPTIONS.slice(0, 10).map(({ label, value }) => (
          <label
            key={value}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              checked={filters.languages?.includes(value)}
              onChange={() => handleLanguageChange(value)}
              className="accent-pink-600"
            />
            {label}
          </label>
        ))}
      </FilterSection>

      {/* Categories */}
      <FilterSection title="Categories" onClear={clearCategory}>
        {["Music", "Comedy", "Workshop", "Theatre"].map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              checked={filters.categories?.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
              className="accent-pink-600"
            />
            {cat}
          </label>
        ))}
      </FilterSection>

      {/* More Filters */}
      <FilterSection title="More Filters" onClear={() => {}}>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" className="accent-pink-600" />
          Free Entry
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" className="accent-pink-600" />
          Family Friendly
        </label>
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price" onClear={clearPrice}>
        {["Free", "Under ₹500", "₹500 - ₹1000"].map((range) => (
          <label
            key={range}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="radio"
              name="price"
              checked={filters.price === range}
              onChange={() => handlePriceChange(range)}
              className="accent-pink-600"
            />
            {range}
          </label>
        ))}
      </FilterSection>

      {/* Browse by Venues Button */}
      <button className="w-full mt-4 border border-pink-600 text-pink-600 py-2 rounded-md hover:bg-pink-50 transition">
        Browse Old Events
      </button>
    </aside>
  );
};

export default EventsFilterSidebar;
