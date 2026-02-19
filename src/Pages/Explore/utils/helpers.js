// Shared location coordinates for Chennai
// This maps common Chennai area names to their GPS coordinates

export const CHENNAI_LOCATIONS = {
  nungambakkam: { lat: 13.0569, lng: 80.2426 },
  adyar: { lat: 13.0067, lng: 80.2572 },
  "t nagar": { lat: 13.0418, lng: 80.2341 },
  mylapore: { lat: 13.0339, lng: 80.2669 },
  "anna nagar": { lat: 13.0850, lng: 80.2101 },
  velachery: { lat: 12.9750, lng: 80.2210 },
  tambaram: { lat: 12.9226, lng: 80.1196 },
  guindy: { lat: 13.0067, lng: 80.2206 },
  porur: { lat: 13.0381, lng: 80.1570 },
  egmore: { lat: 13.0732, lng: 80.2609 },
  triplicane: { lat: 13.0545, lng: 80.2780 },
  "besant nagar": { lat: 13.0010, lng: 80.2669 },
  alwarpet: { lat: 13.0339, lng: 80.2530 },
  kodambakkam: { lat: 13.0515, lng: 80.2254 },
  saidapet: { lat: 13.0213, lng: 80.2231 },
  vadapalani: { lat: 13.0504, lng: 80.2121 },
  "ashok nagar": { lat: 13.0354, lng: 80.2093 },
  "kk nagar": { lat: 13.0285, lng: 80.2028 },
  perungudi: { lat: 12.9611, lng: 80.2425 },
  sholinganallur: { lat: 12.9008, lng: 80.2272 },
  omr: { lat: 12.9516, lng: 80.2201 },
  ecr: { lat: 12.8497, lng: 80.2445 },
  royapettah: { lat: 13.0569, lng: 80.2662 },
  teynampet: { lat: 13.0389, lng: 80.2480 },
  mandaveli: { lat: 13.0223, lng: 80.2596 },
  "west mambalam": { lat: 13.0313, lng: 80.2283 },
  chrompet: { lat: 12.9519, lng: 80.1420 },
  "st thomas mount": { lat: 13.0006, lng: 80.2020 },
  pallavaram: { lat: 12.9675, lng: 80.1491 },
  marina: { lat: 13.0499, lng: 80.2824 },
  thiruvanmiyur: { lat: 12.9830, lng: 80.2595 },
  palavakkam: { lat: 12.9716, lng: 80.2550 },
  injambakkam: { lat: 12.9119, lng: 80.2478 },
  thoraipakkam: { lat: 12.9380, lng: 80.2340 },
  madipakkam: { lat: 12.9625, lng: 80.1986 },
};

// Default center point for Chennai
export const CHENNAI_CENTER = {
  lat: 13.0827,
  lng: 80.2707,
};

// Get coordinates for a location name
export const getLocationCoordinates = (locationName) => {
  if (!locationName) return null;
  return CHENNAI_LOCATIONS[locationName.toLowerCase()] || null;
};

// Utility to capitalize first letter
export const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
