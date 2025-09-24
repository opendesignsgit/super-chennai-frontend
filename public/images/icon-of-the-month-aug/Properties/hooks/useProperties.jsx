import { useState, useEffect } from "react";
import { fetchProperties } from "../services/propertyService";
import { fetchPropertyById, fetchPropertyBySlug } from "../services/propertyService";

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


export const useProperty = ({ id, slug }) => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        let data = null;
        if (id) {
          data = await fetchPropertyById(id);
        } else if (slug) {
          data = await fetchPropertyBySlug(slug);
        }
        setProperty(data);
      } catch (err) {
        console.error("Failed to fetch property:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, slug]);

  return { property, loading };
};
