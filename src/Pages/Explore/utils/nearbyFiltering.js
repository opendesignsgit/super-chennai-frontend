// Nearby filtering utilities
import { calculateDistance, calculateBearing, isWithinCone } from "./geolocation";

/**
 * Filter places by radius (desktop mode)
 * @param {Array} places - Array of places with coordinates
 * @param {Object} userLocation - User's lat/lng
 * @param {number} radius - Radius in km (default 2)
 * @param {string|null} category - Optional category filter
 * @returns {Array} Filtered places within radius
 */
export const filterByRadius = (places, userLocation, radius = 2, category = null) => {
  if (!userLocation) return [];
  
  return places.filter(place => {
    // Category filter
    if (category && place.category !== category) {
      return false;
    }
    
    // Distance filter
    if (!place.coordinates) return false;
    
    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      place.coordinates.lat,
      place.coordinates.lng
    );
    
    return distance <= radius;
  });
};

/**
 * Filter places by directional cone (mobile mode)
 * @param {Array} places - Array of places with coordinates
 * @param {Object} userLocation - User's lat/lng
 * @param {number} deviceHeading - Device heading in degrees (0-360)
 * @param {number} radius - Radius in km (default 2)
 * @param {string|null} category - Optional category filter
 * @param {number} coneAngle - Half-angle of cone (default 45°)
 * @returns {Array} Filtered places within cone
 */
export const filterByDirectionalCone = (
  places,
  userLocation,
  deviceHeading,
  radius = 2,
  category = null,
  coneAngle = 45
) => {
  if (!userLocation || deviceHeading === null) return [];
  
  return places.filter(place => {
    // Category filter
    if (category && place.category !== category) {
      return false;
    }
    
    // Distance filter
    if (!place.coordinates) return false;
    
    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      place.coordinates.lat,
      place.coordinates.lng
    );
    
    if (distance > radius) return false;
    
    // Bearing filter
    const bearing = calculateBearing(
      userLocation.lat,
      userLocation.lng,
      place.coordinates.lat,
      place.coordinates.lng
    );
    
    return isWithinCone(bearing, deviceHeading, coneAngle);
  });
};

/**
 * Get unique categories from filtered places
 * @param {Array} places - Array of places
 * @returns {Array} Array of unique categories
 */
export const getUniqueCategories = (places) => {
  const categories = new Set();
  places.forEach(place => {
    if (place.category) {
      categories.add(place.category);
    }
  });
  return Array.from(categories).sort();
};

/**
 * Sort places by distance from user
 * @param {Array} places - Array of places with coordinates
 * @param {Object} userLocation - User's lat/lng
 * @returns {Array} Sorted places
 */
export const sortByDistance = (places, userLocation) => {
  if (!userLocation) return places;
  
  return places.map(place => {
    if (!place.coordinates) {
      return { ...place, distance: Infinity };
    }
    
    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      place.coordinates.lat,
      place.coordinates.lng
    );
    
    return { ...place, distance };
  }).sort((a, b) => a.distance - b.distance);
};
