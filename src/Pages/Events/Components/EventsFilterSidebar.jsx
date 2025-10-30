import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterSection = ({ title, children, onClear }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-medium text-gray-700"
        >
          {title}
          {open ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
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

const EventsFilterSidebar = () => {
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
      <FilterSection title="Languages" onClear={() => {}}>
        {["Tamil", "English", "Hindi"].map((lang) => (
          <label key={lang} className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-pink-600" />
            {lang}
          </label>
        ))}
      </FilterSection>

      {/* Categories */}
      <FilterSection title="Categories" onClear={() => {}}>
        {["Music", "Comedy", "Workshop", "Theatre"].map((cat) => (
          <label key={cat} className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-pink-600" />
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
      <FilterSection title="Price" onClear={() => {}}>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="accent-pink-600" /> Free
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="accent-pink-600" /> Under ₹500
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="accent-pink-600" /> ₹500 - ₹1000
          </label>
        </div>
      </FilterSection>

      {/* Browse by Venues Button */}
      <button className="w-full mt-4 border border-pink-600 text-pink-600 py-2 rounded-md hover:bg-pink-50 transition">
        Browse by Venues
      </button>
    </aside>
  );
};

export default EventsFilterSidebar;
