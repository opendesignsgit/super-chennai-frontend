import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEvents } from "../Hooks/UseEvents";
import { useLocations } from "../Hooks/useLocations";
import { LANGUAGE_OPTIONS } from "../constants/languages";
import DateFilter from "../Components/DateFilter";
import { useEventCategories } from "../Hooks/useEventCategories";
import ExpandableList from '../Components/ExpandableList'
const FilterSection = ({ title, children, onClear }) => {
  const { events } = useEvents();
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


const EventsFilterSidebar = ({ filters, setFilters }) => {
    const { categories } = useEventCategories();
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

  const handleOldEvents = () => {
    const today = new Date().toISOString().split("T")[0];
    setFilters((prev) => ({
      ...prev,
      startDate: "",
      endDate: today,
      showOldEvents: true,
    }));
  };

  const handleLocationChange = (loc) => {
    setFilters((prev) => {
      const selected = new Set(prev.locations || []);
      if (selected.has(loc)) selected.delete(loc);
      else selected.add(loc);
      return { ...prev, locations: Array.from(selected) };
    });
  };
  
  const { locations, loading } = useLocations();

  const clearCategory = () =>
    setFilters((prev) => ({ ...prev, categories: [] }));
  const clearLanguage = () =>
    setFilters((prev) => ({ ...prev, languages: [] }));
  const clearLocation = () =>
    setFilters((prev) => ({ ...prev, locations: [] }));

  return (
    <aside
      className="sidebarEvent-scrollbar w-[280px] bg-[#f9fafb] rounded-2xl p-4 overflow-y-auto max-h-[85vh] scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-full cursor-pointer"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#af1c6683 #f3f4f6",
      }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Filters</h3>

      {/* Date Filter */}

      <DateFilter filters={filters} setFilters={setFilters} />

      {/* Languages */}
      <FilterSection title="Languages" onClear={clearLanguage}>
        {LANGUAGE_OPTIONS.slice(0, 30).map(({ label, value }) => (
          <label
            key={value}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              checked={filters.languages?.includes(value)}
              onChange={() => handleLanguageChange(value)}
              className="accent-pink-600 cursor-pointer"
            />
            {label}
          </label>
        ))}
      </FilterSection>

      {/* <FilterSection title="Location" onClear={clearLocation}>
        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : locations.length > 0 ? (
          <ExpandableList
            items={locations}
            initialVisible={3} // Show only 3 initially
            renderItem={(loc) => (
              <label
                key={loc.id}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={filters.locations?.includes(loc.value)}
                  onChange={() => handleLocationChange(loc.value)}
                  className="accent-pink-600"
                />
                {loc.label || loc.city}
              </label>
            )}
          />
        ) : (
          <p className="text-sm text-gray-500">No locations found</p>
        )}
      </FilterSection> */}

      {/* Categories */}
      <FilterSection title="Categories" onClear={clearCategory}>
        <ExpandableList
          items={categories || []}
          initialVisible={3} // Show only 3 items initially
          renderItem={(cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={filters.categories?.includes(String(cat.id))}
                onChange={() => handleCategoryChange(String(cat.id))}
                className="accent-pink-600 cursor-pointer"
              />
              {cat.title}
            </label>
          )}
        />
      </FilterSection>

      {/* More Filters */}
      <FilterSection
        title="More Filters"
        onClear={() => {
          setFilters((prev) => ({
            ...prev,
            freeEntry: false,
            familyFriendly: false,
          }));
        }}
      >
        {/* Free Entry */}
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="accent-pink-600 cursor-pointer"
            checked={filters.freeEntry || false}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                freeEntry: e.target.checked,
              }))
            }
          />
          Free Entry
        </label>

        {/* Family Friendly */}
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="accent-pink-600"
            checked={filters.familyFriendly || false}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                familyFriendly: e.target.checked,
              }))
            }
          />
          Family Friendly
        </label>
      </FilterSection>

      {/* Browse by Venues Button */}
      {/* <button
        onClick={handleOldEvents}
        className="w-full mt-4 border border-pink-600 text-pink-600 py-2 rounded-md hover:bg-pink-50 transition"
      >
        Browse Old Events
      </button>

      {filters.showOldEvents && (
        <button
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              showOldEvents: false,
              endDate: "",
            }))
          }
          className="w-full mt-2 border border-gray-400 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Show Upcoming Events
        </button>
      )} */}
    </aside>
  );
};

export default EventsFilterSidebar;
