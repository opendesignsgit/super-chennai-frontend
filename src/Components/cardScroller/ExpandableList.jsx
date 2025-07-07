import React, { useState } from "react";

const ExpandableList = ({ items, maxVisible = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, maxVisible);

  return (
    <div>
      <div
        className={`flex flex-wrap gap-2 mt-2 overflow-y-auto transition-all duration-300 ${
          isExpanded ? "max-h-40" : "max-h-20"
        } custom-scrollbar`}
      >
        {visibleItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm bg-blue-50 px-2 py-1 rounded locicon"
          >
            {item.label}
          </a>
        ))}
      </div>

      {items.length > maxVisible && (
        <button
          className="view-more-button mt-2 text-sm text-blue-600 hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "View Less Locations" : "View More Locations"}
        </button>
      )}
    </div>
  );
};

export default ExpandableList;
