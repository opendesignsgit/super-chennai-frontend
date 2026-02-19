// Geolocation utilities for Nearby Mode

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - First point latitude
 * @param {number} lon1 - First point longitude
 * @param {number} lat2 - Second point latitude
 * @param {number} lon2 - Second point longitude
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
};

/**
 * Convert degrees to radians
 * @param {number} deg - Degrees
 * @returns {number} Radians
 */
const toRad = (deg) => {
  return deg * (Math.PI / 180);
};

/**
 * Calculate bearing/angle from user location to place
 * @param {number} lat1 - User latitude
 * @param {number} lon1 - User longitude
 * @param {number} lat2 - Place latitude
 * @param {number} lon2 - Place longitude
 * @returns {number} Bearing in degrees (0-360)
 */
export const calculateBearing = (lat1, lon1, lat2, lon2) => {
  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  
  let bearing = Math.atan2(y, x);
  bearing = bearing * (180 / Math.PI);
  bearing = (bearing + 360) % 360;
  
  return bearing;
};

/**
 * Check if angle is within a cone (±45°)
 * @param {number} bearing - Bearing to place
 * @param {number} heading - Device heading
 * @param {number} coneAngle - Half-angle of cone (default 45°)
 * @returns {boolean} True if within cone
 */
export const isWithinCone = (bearing, heading, coneAngle = 45) => {
  let diff = Math.abs(bearing - heading);
  if (diff > 180) {
    diff = 360 - diff;
  }
  return diff <= coneAngle;
};

/**
 * Request user's geolocation
 * @returns {Promise<{lat: number, lng: number}>} User coordinates
 */
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
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
 * Watch user's location for continuous updates
 * @param {Function} callback - Called with new position
 * @returns {number} Watch ID for clearing
 */
export const watchUserLocation = (callback) => {
  if (!navigator.geolocation) {
    return null;
  }
  
  return navigator.geolocation.watchPosition(
    (position) => {
      callback({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    (error) => {
      console.error("Error watching location:", error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
};

/**
 * Check if device supports orientation without requiring permission
 * @returns {boolean} True if supported without permission (Android/desktop), false if requires permission (iOS)
 */
export const supportsOrientation = () => {
  return typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission !== "function";
};

/**
 * Request device orientation permission (iOS)
 * @returns {Promise<boolean>} True if granted
 */
export const requestOrientationPermission = async () => {
  if (typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function") {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      return permission === "granted";
    } catch (error) {
      console.error("Error requesting orientation permission:", error);
      return false;
    }
  }
  return true; // Non-iOS devices don't need permission
};

/**
 * Get device heading from orientation event
 * @param {DeviceOrientationEvent} event - Orientation event
 * @returns {number|null} Heading in degrees (0-360) or null
 */
export const getHeadingFromOrientation = (event) => {
  if (event.webkitCompassHeading !== undefined) {
    // iOS
    return event.webkitCompassHeading;
  } else if (event.alpha !== null) {
    // Android and others
    return 360 - event.alpha;
  }
  return null;
};

/**
 * Assign mock coordinates to places based on Chennai location
 * This is a mock implementation - in production, places would have real coordinates
 * @param {Array} places - Array of place objects
 * @returns {Array} Places with coordinates
 */
export const assignMockCoordinates = (places) => {
  // Chennai center coordinates
  const chennaiCenter = { lat: 13.0827, lng: 80.2707 };
  
  // Location coordinates mapping (approximate)
  const locationCoords = {
    "Nungambakkam": { lat: 13.0569, lng: 80.2425 },
    "Adyar": { lat: 13.0067, lng: 80.2572 },
    "T Nagar": { lat: 13.0418, lng: 80.2341 },
    "Mylapore": { lat: 13.0339, lng: 80.2619 },
    "Anna Nagar": { lat: 13.0878, lng: 80.2089 },
    "Velachery": { lat: 12.9756, lng: 80.2172 },
    "Tambaram": { lat: 12.9226, lng: 80.1275 },
    "Guindy": { lat: 13.0067, lng: 80.2206 },
    "Porur": { lat: 13.0356, lng: 80.1572 },
    "Egmore": { lat: 13.0732, lng: 80.2609 },
    "Triplicane": { lat: 13.0544, lng: 80.2774 },
    "Besant Nagar": { lat: 13.0009, lng: 80.2669 },
    "Alwarpet": { lat: 13.0338, lng: 80.2503 },
    "Kodambakkam": { lat: 13.0517, lng: 80.2256 },
    "Saidapet": { lat: 13.0211, lng: 80.2231 },
    "Vadapalani": { lat: 13.0504, lng: 80.2121 },
    "Ashok Nagar": { lat: 13.0354, lng: 80.2096 },
    "KK Nagar": { lat: 13.0389, lng: 80.2027 },
    "Perungudi": { lat: 12.9621, lng: 80.2400 },
    "Sholinganallur": { lat: 12.9009, lng: 80.2279 },
    "OMR": { lat: 12.9350, lng: 80.2353 },
    "ECR": { lat: 12.8946, lng: 80.2447 },
    "Royapettah": { lat: 13.0530, lng: 80.2619 },
    "Teynampet": { lat: 13.0389, lng: 80.2480 },
    "Mandaveli": { lat: 13.0242, lng: 80.2644 },
    "West Mambalam": { lat: 13.0334, lng: 80.2281 },
    "Chrompet": { lat: 12.9517, lng: 80.1371 },
    "St Thomas Mount": { lat: 13.0022, lng: 80.1978 },
    "Pallavaram": { lat: 12.9675, lng: 80.1491 },
    "Marina": { lat: 13.0475, lng: 80.2824 },
    "Thiruvanmiyur": { lat: 12.9838, lng: 80.2588 },
    "Palavakkam": { lat: 12.9691, lng: 80.2522 },
    "Injambakkam": { lat: 12.9153, lng: 80.2481 },
    "Thoraipakkam": { lat: 12.9365, lng: 80.2340 },
    "Madipakkam": { lat: 12.9622, lng: 80.1986 },
    "Virugambakkam": { lat: 13.0572, lng: 80.2030 },
    "Arumbakkam": { lat: 13.0670, lng: 80.2105 },
    "Saligramam": { lat: 13.0536, lng: 80.2006 },
    "Koyambedu": { lat: 13.0694, lng: 80.1948 },
  };
  
  return places.map(place => {
    const baseCoords = locationCoords[place.location] || chennaiCenter;
    
    // Add small random offset to spread places within area
    const latOffset = (Math.random() - 0.5) * 0.01; // ~0.5km variance
    const lngOffset = (Math.random() - 0.5) * 0.01;
    
    return {
      ...place,
      coordinates: {
        lat: baseCoords.lat + latOffset,
        lng: baseCoords.lng + lngOffset,
      },
    };
  });
};
