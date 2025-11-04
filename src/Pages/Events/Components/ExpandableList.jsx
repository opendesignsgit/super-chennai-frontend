import React, { useState } from "react";

const ExpandableList = ({
  items = [],
  renderItem,
  initialVisible = 3,
  showMoreLabel = "Show More",
  showLessLabel = "Show Less",
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!items || items.length === 0) return null;

  const visibleItems = expanded ? items : items.slice(0, initialVisible);

  return (
    <div className="flex flex-col gap-2">
      {visibleItems.map((item, index) => renderItem(item, index))}

      {items.length > initialVisible && (
        <button
          className="text-pink-600 text-sm mt-1 self-start hover:underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      )}
    </div>
  );
};

export default ExpandableList;
