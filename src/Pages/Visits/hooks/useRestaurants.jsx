import { useEffect, useState } from "react";
import { getRestaurants } from "../Services/restaurantsServices/restaurants.service";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getRestaurants();
    console.log("fetchData,",data)
    setRestaurants(data);
    setLoading(false);
  };

  return { restaurants, loading };
};
