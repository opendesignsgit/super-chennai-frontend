import { useState, useEffect } from "react";
import { fetchProperties } from "../services/propertyService";

/**
 * Hook to manage properties with filters & sort
 */
export const useProperties = (filters, sortBy) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      try {
        const result = await fetchProperties(filters, sortBy);
        setProperties(result);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [filters, sortBy]);

  return { properties, loading };
};
