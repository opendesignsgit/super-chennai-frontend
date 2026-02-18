import { getPlacesByFilter, getNearbyPlaces } from './mockExploreData';

// Mock AI handler - processes user query and returns relevant places
export const mockAIHandler = (query, category = null, location = null) => {
  // If category and location are provided (from slug), use them
  if (category && location) {
    const places = getPlacesByFilter(category, location);
    const locationDisplay = location.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // If no places found for specific location, fallback to category-only results
    // This ensures users always see relevant results even if location filter is too specific
    return {
      message: `Here are some ${category} places near ${locationDisplay}.`,
      places: places.length > 0 ? places : getPlacesByFilter(category),
      query: query || `${category} near ${location}`
    };
  }

  // Parse user query to extract intent
  const lowerQuery = query.toLowerCase();

  // Check for specific categories
  if (lowerQuery.includes('peaceful') || lowerQuery.includes('quiet') || lowerQuery.includes('calm')) {
    const cafePlaces = getPlacesByFilter('cafe');
    const parkPlaces = getPlacesByFilter('park');
    return {
      message: 'Here are some peaceful places in Chennai.',
      places: [...parkPlaces, ...cafePlaces].slice(0, 6),
      query
    };
  }

  if (lowerQuery.includes('beach')) {
    const places = getPlacesByFilter('beach');
    return {
      message: 'Here are some beautiful beaches in Chennai.',
      places,
      query
    };
  }

  if (lowerQuery.includes('cafe') || lowerQuery.includes('coffee')) {
    const places = getPlacesByFilter('cafe');
    return {
      message: 'Here are some great cafes in Chennai.',
      places,
      query
    };
  }

  if (lowerQuery.includes('park') || lowerQuery.includes('garden')) {
    const places = getPlacesByFilter('park');
    return {
      message: 'Here are some parks and gardens in Chennai.',
      places,
      query
    };
  }

  if (lowerQuery.includes('temple') || lowerQuery.includes('worship')) {
    const places = getPlacesByFilter('temple');
    return {
      message: 'Here are some temples in Chennai.',
      places,
      query
    };
  }

  if (lowerQuery.includes('restaurant') || lowerQuery.includes('food') || lowerQuery.includes('eat')) {
    const places = getPlacesByFilter('restaurant');
    return {
      message: 'Here are some great restaurants in Chennai.',
      places,
      query
    };
  }

  if (lowerQuery.includes('shopping') || lowerQuery.includes('mall')) {
    const places = getPlacesByFilter('shopping');
    return {
      message: 'Here are some shopping destinations in Chennai.',
      places,
      query
    };
  }

  // Default: return mixed results
  const places = getPlacesByFilter();
  return {
    message: 'Here are some interesting places in Chennai.',
    places: places.slice(0, 6),
    query
  };
};

// Mock Nearby handler - returns places based on "nearby" logic (Phase 1: random selection)
export const mockNearbyHandler = () => {
  const places = getNearbyPlaces();
  return {
    message: 'Showing places nearby.',
    places,
    query: 'nearby places'
  };
};
