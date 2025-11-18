import React from "react";
import "../../Properties/Styles/SortBy.css";

const SortBy = ({ value, onChange }) => {
  return (
    <div className="sort-by">
      <label htmlFor="sort">Sort By:</label>
      

      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {/* <option value="newest">Newest</option> */}
        <option value="upcoming">Upcoming Events</option>
        <option value="past">Past Events</option>
        {/* <option value="oldest">Oldest</option> */}
      </select>
    </div>
  );
};

export default SortBy;
