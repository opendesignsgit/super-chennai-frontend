import { useState, useEffect } from "react";
import {
  fetchLocations,
  fetchPropertyTypes,
  fetchBhkOptions,
} from "../services/propertyService";

export const useFiltersData = () => {
  const [propertylocations, setLocations] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bhkOptions, setBhkOptions] = useState([]);
  const [furnishings, setFurnishings] = useState([]);
  const [purposes, setPurposes] = useState([]);
  const [possessionStatuses, setPossessionStatuses] = useState([]);
  const [ownerships, setOwnerships] = useState([]);
  const [facings, setFacings] = useState([]);
  const [bathroomOptions, setBathroomOptions] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);
  const [greenFeatures, setGreenFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [locRes, propTypeRes, bhkRes] = await Promise.all([
          fetchLocations(),
          fetchPropertyTypes(),
          fetchBhkOptions(),
        ]);

 
        setLocations(
          locRes.map((loc) => ({
            id: loc.id,
            label: `${loc.city} - ${loc.locality}`, // For UI
            value: loc.locality.toLowerCase(), // Used for filters
          }))
        );


        setPropertyTypes(
          propTypeRes.map((type) => ({
            id: type.id,
            label: type.label || type.value, 
            value: type.value,
          }))
        );

        setBhkOptions(
          bhkRes.map((bhk) => ({
            id: bhk.id,
            label: bhk.label, // eg: "3 BHK"
            value: bhk.value, // eg: "3"
          }))
        );

        // ✅ Static options
        setFurnishings([
          { label: "Fully Furnished", value: "fully" },
          { label: "Semi Furnished", value: "semi" },
          { label: "Unfurnished", value: "unfurnished" },
        ]);

        setPurposes([
          { label: "Sale", value: "sale" },
          { label: "Rent", value: "rent" },
          { label: "Lease", value: "lease" },
          { label: "PG / Coliving", value: "pg" },
        ]);

        setPossessionStatuses([
          { label: "Ready to Move", value: "ready" },
          { label: "Under Construction", value: "under_construction" },
        ]);

        setOwnerships([
          { label: "Freehold", value: "freehold" },
          { label: "Leasehold", value: "leasehold" },
        ]);

        setFacings([
          { label: "East", value: "east" },
          { label: "West", value: "west" },
          { label: "North", value: "north" },
          { label: "South", value: "south" },
        ]);

        setBathroomOptions([
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3+", value: "3plus" },
        ]);

        setAmenities([
          { label: "Gym", value: "gym" },
          { label: "Swimming Pool", value: "pool" },
          { label: "Clubhouse", value: "clubhouse" },
          { label: "Power Backup", value: "power_backup" },
        ]);

        setFloorOptions([
          { label: "Ground", value: "ground" },
          { label: "1st", value: "1" },
          { label: "2nd", value: "2" },
          { label: "3+", value: "3plus" },
        ]);

        setGreenFeatures([
          { label: "Rainwater Harvesting", value: "rainwater" },
          { label: "Solar Power", value: "solar" },
        ]);
      } catch (err) {
        console.error("Failed to fetch filters:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFilters();
  }, []);

  return {
    propertylocations,
    propertyTypes,
    bhkOptions,
    furnishings,
    purposes,
    possessionStatuses,
    ownerships,
    facings,
    bathroomOptions,
    amenities,
    floorOptions,
    greenFeatures,
    loading,
  };
};
