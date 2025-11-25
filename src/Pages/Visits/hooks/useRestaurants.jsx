// import { useEffect, useState } from "react";
// import {
//   getRestaurants,
//   getRestaurantBySlug,
// } from "../Services/restaurantsServices/restaurants.service";

// export const useRestaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await getRestaurants();
//     console.log("fetchData:", data);
//     setRestaurants(data);
//     setLoading(false);
//   };

//   const fetchBySlug = async (slug) => {
//     try {
//       const data = await getRestaurantBySlug(slug);
//       console.log("fetchBySlug:", data);
//       return data;
//     } catch (error) {
//       console.error("Error fetching restaurant by slug:", error);
//       return null;
//     }
//   };

//   return {
//     restaurants,
//     loading,
//     fetchBySlug,
//   };
// };


// export const useRestaurantBySlug = (slug) => {
//   const [restaurant, setRestaurant] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchBySlug = async () => {
//       const data = await getRestaurantBySlug(slug);
//       setRestaurant(data);
//       setLoading(false);
//     };

//     fetchBySlug();
//   }, [slug]);

//   return { restaurant, loading };
// };


import { useEffect, useState } from "react";
import {
  getRestaurants,
  getRestaurantBySlug,
} from "../Services/restaurantsServices/restaurants.service";

// --------------------------
// Get ALL restaurants
// --------------------------
export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getRestaurants();
      console.log("fetchData:", data);
      setRestaurants(data);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // Fetch restaurant by slug
  // ---------------------------
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

// -------------------------------
// Separate Hook: useRestaurantBySlug
// Used in single page
// -------------------------------
export const useRestaurantBySlug = (slug) => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const data = await getRestaurantBySlug(slug);
        console.log("Restaurant By Slug:", data);
        setRestaurant(data);
      } catch (err) {
        console.error("Error:", err);
        setRestaurant(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { restaurant, loading };
};
