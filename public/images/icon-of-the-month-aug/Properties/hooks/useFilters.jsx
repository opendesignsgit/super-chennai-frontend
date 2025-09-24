
import { useState, useEffect } from "react";
import { fetchLocations, fetchPropertyTypes, fetchBhkOptions } from "../services/propertyService";

export const useFiltersData = () => {
  const [locations, setLocations] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bhkOptions, setBhkOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [locRes, propTypeRes, bhkRes] = await Promise.all([
          fetchLocations(),
          fetchPropertyTypes(),
          fetchBhkOptions(),
        ]);

        // ✅ Map API data to uniform structure: { id, label, value }
        setLocations(locRes.map((loc) => ({
          id: loc.id,
          label: loc.label,   // eg: "Sengalpattu"
          value: loc.value,   // eg: "sengal"
        })));

        setPropertyTypes(propTypeRes.map((type) => ({
          id: type.id,
          label: type.label,  // eg: "House"
          value: type.value,  // eg: "house"
        })));

        setBhkOptions(bhkRes.map((bhk) => ({
          id: bhk.id,
          label: bhk.label,  // eg: "3 BHK"
          value: bhk.value,  // eg: "3"
        })));
      } catch (err) {
        console.error("Failed to fetch filters:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFilters();
  }, []);

  return { locations, propertyTypes, bhkOptions, loading };
};
