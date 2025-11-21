import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ points }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {points.map((item) => (
        <RestaurantCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RestaurantList;
