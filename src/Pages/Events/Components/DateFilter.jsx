
import React, { useState } from "react";

const DateFilter = ({ filters, setFilters }) => {
  const [activePreset, setActivePreset] = useState(filters.date || "");
  const [showCustomRange, setShowCustomRange] = useState(false);

  const handlePresetClick = (value) => {
    setActivePreset(value);
    setShowCustomRange(false);
    setFilters((prev) => ({
      ...prev,
      date: value,
      startDate: null,
      endDate: null,
    }));
  };

  const handleRangeChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      date: null,
    }));
  };

  const handleClear = () => {
    setActivePreset("");
    setShowCustomRange(false);
    setFilters((prev) => ({
      ...prev,
      date: null,
      startDate: null,
      endDate: null,
    }));
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Date</h3>
        <button
          onClick={handleClear}
          className="text-sm text-pink-600 hover:underline font-bold"
        >
          Clear
        </button>
      </div>

      {/* Preset Options */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["Today", "Tomorrow", "This Weekend"].map((label) => (
          <button
            key={label}
            onClick={() => handlePresetClick(label)}
            className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ${
              activePreset === label
                ? "bg-pink-600 text-white border-pink-600"
                : "border-pink-600 text-pink-600 hover:bg-pink-50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Custom Range Toggle */}
      <div className="flex items-center mb-2">
        <input
          id="customRange"
          type="checkbox"
          checked={showCustomRange}
          onChange={(e) => {
            setShowCustomRange(e.target.checked);
            if (!e.target.checked) {
              setFilters((prev) => ({
                ...prev,
                startDate: null,
                endDate: null,
              }));
            }
          }}
          className="mr-2"
        />
        <label
          htmlFor="customRange"
          className="text-gray-700 text-sm cursor-pointer"
        >
          Choose Custom Date Range
        </label>
      </div>

      {/* Date Range Inputs */}

      {showCustomRange && (
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all duration-300">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Select Date Range
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* From Date */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-pink-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                From
              </label>
              <input
                type="date"
                value={filters.startDate || ""}
                onChange={(e) => handleRangeChange("startDate", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
              />
            </div>

            {/* To Date */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-pink-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                To
              </label>
              <input
                type="date"
                value={filters.endDate || ""}
                onChange={(e) => handleRangeChange("endDate", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
