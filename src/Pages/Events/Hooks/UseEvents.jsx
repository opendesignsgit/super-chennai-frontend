import { useState, useEffect } from "react";
import { fetchEvents } from "../Services/EventsService";

/**
 * ✅ Custom hook to fetch and manage events with filters & sorting
 * Supports reactive updates when filters/sort change.
 */
export const useEvents = (filters = {}, sortBy = "") => {
  const [events, setEvents] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // ✅ Added error state

  useEffect(() => {
    let isMounted = true; // ✅ Avoid state updates if unmounted
    const controller = new AbortController(); // ✅ Safe cleanup for async

    const loadEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchEvents(filters, sortBy, {
          signal: controller.signal,
        });

        if (isMounted) {
          setEvents(result.docs || []);
          setTotalResults(result.totalDocs || 0);
        }
      } catch (err) {
        if (isMounted) {
          if (err.name !== "CanceledError") {
            console.error(" Failed to fetch events:", err);
            setError("Failed to fetch events");
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadEvents();

    // ✅ Cleanup on unmount or filter/sort change
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [JSON.stringify(filters), sortBy]); // ✅ Prevents unnecessary re-renders

  return { events, totalResults, loading, error };
};
