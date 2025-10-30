import { useState, useEffect } from "react";
import { fetchEventCategories } from "../Services/EventsService";

/**
 * ✅ Custom hook to fetch event categories
 * Automatically loads once when the component mounts.
 */
export const useEventCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchEventCategories({
          signal: controller.signal,
        });

        if (isMounted) setCategories(data || []);
      } catch (err) {
        if (isMounted) {
          if (err.name !== "CanceledError") {
            console.error("❌ Failed to fetch event categories:", err);
            setError("Failed to fetch event categories");
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { categories, loading, error };
};
