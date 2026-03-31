import React from "react";

export default function EmptyState({
  title = "No Data Found",
  message = "Try changing filters or search keyword.",
  onReset,
}) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 py-16 px-6 text-center mb-10">
      <div className="text-5xl mb-4">📭</div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 mb-6">{message}</p>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          {/* SVG Reset Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 2v6h6" />
            <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
          </svg>

          Reset Filters
        </button>
      )}
    </div>
  );
}