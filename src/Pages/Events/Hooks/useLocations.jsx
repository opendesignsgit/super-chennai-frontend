import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../../config";

export const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE_URL}/api/locations`);
        setLocations(res.data?.docs || []);
      } catch (err) {
        setError(err.message || "Failed to fetch locations");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { locations, loading, error };
};
