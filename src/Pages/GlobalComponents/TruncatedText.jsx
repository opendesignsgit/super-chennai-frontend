import React, { useState } from "react";

/**
 * TruncatedText
 * @param {string} text - The full text
 * @param {number} limit - Number of characters to show initially
 */
const TruncatedText = ({ text = "", limit = 100 }) => {
  const [showAll, setShowAll] = useState(false);

  if (!text) return null;

  const isLong = text.length > limit;
  const displayText = showAll || !isLong ? text : text.substring(0, limit) + "...";

  return (
    <span>
      {displayText}
      {isLong && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="ml-1 text-sm text-[#a44294] hover:underline"
        >
          {showAll ? "Show less" : "Read more"}
        </button>
      )}
    </span>
  );
};

export default TruncatedText;
