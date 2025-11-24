import { useEffect, useState } from "react";
import {
  getRestaurants,
  getRestaurantBySlug,
} from "../Services/restaurantsServices/restaurants.service";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getRestaurants();
    console.log("fetchData:", data);
    setRestaurants(data);
    setLoading(false);
  };

  const fetchBySlug = async (slug) => {
    try {
      const data = await getRestaurantBySlug(slug);
      console.log("fetchBySlug:", data);
      return data;
    } catch (error) {
      console.error("Error fetching restaurant by slug:", error);
      return null;
    }
  };

  return {
    restaurants,
    loading,
    fetchBySlug,
  };
};
