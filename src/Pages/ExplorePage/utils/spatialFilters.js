/**
 * Spatial filtering utilities for Nearby Mode
 * Calculates distances and angles for location-based filtering
 */

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {Object} coord1 - { lat, lng }
 * @param {Object} coord2 - { lat, lng }
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (coord1, coord2) => {
  const R = 6371; // Radius of Earth in km
  const dLat = toRadians(coord2.lat - coord1.lat);
  const dLon = toRadians(coord2.lng - coord1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(coord1.lat)) *
      Math.cos(toRadians(coord2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

/**
 * Calculate bearing (angle) from one coordinate to another
 * @param {Object} from - { lat, lng }
 * @param {Object} to - { lat, lng }
 * @returns {number} Bearing in degrees (0-360)
 */
export const calculateBearing = (from, to) => {
  const dLon = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

  let bearing = toDegrees(Math.atan2(y, x));
  bearing = (bearing + 360) % 360; // Normalize to 0-360

  return bearing;
};

/**
 * Check if a place is within the directional cone
 * @param {Object} userLocation - { lat, lng }
 * @param {number} userHeading - Device heading in degrees
 * @param {Object} placeLocation - { lat, lng }
 * @param {number} coneAngle - Cone angle in degrees (default 45°)
 * @returns {boolean}
 */
export const isWithinDirectionalCone = (
  userLocation,
  userHeading,
  placeLocation,
  coneAngle = 45
) => {
  const bearing = calculateBearing(userLocation, placeLocation);
  const angleDiff = Math.abs(userHeading - bearing);

  // Handle wrap-around at 0/360 degrees
  const normalizedDiff = Math.min(angleDiff, 360 - angleDiff);

  return normalizedDiff <= coneAngle;
};

/**
 * Apply spatial filtering to places based on Nearby Mode settings
 * @param {Array} places - Array of place objects
 * @param {Object} nearbyState - Nearby mode state
 * @param {number} radius - Radius in kilometers (default 5km)
 * @returns {Array} Filtered places
 */
export const applySpatialFilter = (places, nearbyState, radius = 5) => {
  if (!nearbyState.isNearbyActive || !nearbyState.userLocation) {
    return places;
  }

  let filtered = places;

  // Filter by distance (radius)
  filtered = filtered.filter((place) => {
    if (!place.location || !place.location.lat || !place.location.lng) {
      return false;
    }

    const distance = calculateDistance(
      nearbyState.userLocation,
      place.location
    );
    return distance <= radius;
  });

  // Filter by directional cone (mobile only)
  if (
    nearbyState.nearbyModeType === "directional" &&
    nearbyState.deviceHeading !== null
  ) {
    filtered = filtered.filter((place) => {
      return isWithinDirectionalCone(
        nearbyState.userLocation,
        nearbyState.deviceHeading,
        place.location,
        45 // 45 degree cone
      );
    });
  }

  // Filter by category if selected
  if (nearbyState.nearbyCategory) {
    filtered = filtered.filter(
      (place) =>
        place.category &&
        place.category.toLowerCase() ===
          nearbyState.nearbyCategory.toLowerCase()
    );
  }

  return filtered;
};

/**
 * Helper: Convert degrees to radians
 */
const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Helper: Convert radians to degrees
 */
const toDegrees = (radians) => {
  return radians * (180 / Math.PI);
};
