import { useState, useEffect } from "react";

/**
 * Custom hook to manage Nearby Mode state (separate from Explore state)
 * This is a non-invasive extension layer
 */
export const useNearbyMode = () => {
  const [nearbyState, setNearbyState] = useState({
    isNearbyActive: false,
    userLocation: null, // { lat, lng }
    deviceHeading: null, // number | null
    nearbyCategory: null, // string | null
    nearbyModeType: "radius", // "radius" | "directional"
  });

  // Request user location when Nearby mode is activated
  useEffect(() => {
    if (nearbyState.isNearbyActive && !nearbyState.userLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setNearbyState((prev) => ({
              ...prev,
              userLocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            }));
          },
          (error) => {
            console.error("Error getting location:", error);
            // Default to Chennai coordinates if location denied
            setNearbyState((prev) => ({
              ...prev,
              userLocation: {
                lat: 13.0827,
                lng: 80.2707,
              },
            }));
          }
        );
      } else {
        // Default to Chennai coordinates if geolocation not supported
        setNearbyState((prev) => ({
          ...prev,
          userLocation: {
            lat: 13.0827,
            lng: 80.2707,
          },
        }));
      }
    }
  }, [nearbyState.isNearbyActive, nearbyState.userLocation]);

  const toggleNearbyMode = () => {
    setNearbyState((prev) => ({
      ...prev,
      isNearbyActive: !prev.isNearbyActive,
    }));
  };

  const setUserLocation = (location) => {
    setNearbyState((prev) => ({
      ...prev,
      userLocation: location,
    }));
  };

  const setDeviceHeading = (heading) => {
    setNearbyState((prev) => ({
      ...prev,
      deviceHeading: heading,
    }));
  };

  const setNearbyCategory = (category) => {
    setNearbyState((prev) => ({
      ...prev,
      nearbyCategory: category,
    }));
  };

  const setNearbyModeType = (modeType) => {
    setNearbyState((prev) => ({
      ...prev,
      nearbyModeType: modeType,
    }));
  };

  const resetNearbyMode = () => {
    setNearbyState({
      isNearbyActive: false,
      userLocation: null,
      deviceHeading: null,
      nearbyCategory: null,
      nearbyModeType: "radius",
    });
  };

  return {
    nearbyState,
    toggleNearbyMode,
    setUserLocation,
    setDeviceHeading,
    setNearbyCategory,
    setNearbyModeType,
    resetNearbyMode,
  };
};
