// Spatial utilities for Nearby Mode

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {Object} coords1 - {lat, lng}
 * @param {Object} coords2 - {lat, lng}
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (coords1, coords2) => {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLng = toRad(coords2.lng - coords1.lng);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coords1.lat)) *
    Math.cos(toRad(coords2.lat)) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Convert degrees to radians
 */
const toRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Calculate bearing (angle) from user location to place
 * @param {Object} userLocation - {lat, lng}
 * @param {Object} placeLocation - {lat, lng}
 * @returns {number} Bearing in degrees (0-360)
 */
export const calculateBearing = (userLocation, placeLocation) => {
  const lat1 = toRad(userLocation.lat);
  const lat2 = toRad(placeLocation.lat);
  const dLng = toRad(placeLocation.lng - userLocation.lng);
  
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  
  const bearing = Math.atan2(y, x);
  const degrees = (bearing * 180) / Math.PI;
  
  // Normalize to 0-360
  return (degrees + 360) % 360;
};

/**
 * Check if a place is within directional cone
 * @param {number} placeBearing - Bearing to the place
 * @param {number} deviceHeading - Device heading
 * @param {number} coneAngle - Half-angle of the cone (default 45°)
 * @returns {boolean}
 */
export const isWithinDirectionalCone = (
  placeBearing,
  deviceHeading,
  coneAngle = 45
) => {
  // Normalize both to 0-360
  const normalizedPlaceBearing = (placeBearing + 360) % 360;
  const normalizedHeading = (deviceHeading + 360) % 360;
  
  // Calculate the angular difference
  let diff = Math.abs(normalizedPlaceBearing - normalizedHeading);
  if (diff > 180) {
    diff = 360 - diff;
  }
  
  return diff <= coneAngle;
};

/**
 * Apply nearby spatial filter to places
 * @param {Array} places - All places
 * @param {Object} nearbyState - Nearby state object
 * @param {number} radiusKm - Radius in kilometers (default 5km)
 * @returns {Array} Filtered places
 */
export const applyNearbySpatialFilter = (
  places,
  nearbyState,
  radiusKm = 5
) => {
  const { userLocation, deviceHeading, nearbyCategory, nearbyModeType } = nearbyState;
  
  if (!userLocation) {
    return [];
  }
  
  let filtered = places.filter((place) => {
    // Filter by category if specified
    if (nearbyCategory && place.category !== nearbyCategory) {
      return false;
    }
    
    // Check distance
    if (!place.coordinates) {
      return false;
    }
    
    const distance = calculateDistance(userLocation, place.coordinates);
    if (distance > radiusKm) {
      return false;
    }
    
    // If directional mode and heading available, check cone
    if (nearbyModeType === "directional" && deviceHeading !== null) {
      const bearing = calculateBearing(userLocation, place.coordinates);
      if (!isWithinDirectionalCone(bearing, deviceHeading)) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort by distance (closest first)
  filtered.sort((a, b) => {
    const distA = calculateDistance(userLocation, a.coordinates);
    const distB = calculateDistance(userLocation, b.coordinates);
    return distA - distB;
  });
  
  return filtered;
};

/**
 * Get user's current location
 * @returns {Promise<{lat, lng}>}
 */
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser"));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};

/**
 * Check if device orientation is supported
 * @returns {boolean}
 */
export const isDeviceOrientationSupported = () => {
  return (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) || (
    "ondeviceorientation" in window
  );
};

/**
 * Request device orientation permission (iOS 13+)
 * @returns {Promise<boolean>}
 */
export const requestDeviceOrientationPermission = async () => {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      return permission === "granted";
    } catch (error) {
      console.error("Device orientation permission denied:", error);
      return false;
    }
  }
  // For non-iOS devices, assume supported
  return isDeviceOrientationSupported();
};
