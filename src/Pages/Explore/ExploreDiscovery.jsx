import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChatInterface from "./Components/ChatInterface";
import ChatInput from "./Components/ChatInput";
import DiscoveryResults from "./Components/DiscoveryResults";
import DetailOffcanvas from "./Components/DetailOffcanvas";
import NearbyMap from "./Components/NearbyMap";
import mockPlaces from "./data/mockPlaces";
import { getLocationCoordinates } from "./utils/helpers";
import "./Styles/ExploreDiscovery.css";

export default function ExploreDiscovery() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Message state (visual only)
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi, I'm your Chennai guide. What would you like to explore today?",
    },
  ]);

  // Active filters (functional state)
  const [filters, setFilters] = useState({
    category: null,
    location: null,
    ratingMin: null,
    tags: [],
  });

  // UI state
  const [mode, setMode] = useState("ai"); // "ai" or "nearby"
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isThinking, setIsThinking] = useState(false); // Loading state for message processing
  const [lastFilterChange, setLastFilterChange] = useState(null); // Track last filter change for fallback

  // Nearby Mode state
  const [nearbyState, setNearbyState] = useState({
    userLocation: null,
    radius: 2000, // 2km default in meters
    deviceHeading: null,
    nearbyModeType: null, // "directional" or "radius"
    gpsWatchId: null,
    selectedCategory: null,
  });

  const orientationListenerRef = useRef(null);
  const isFirstGPSLockRef = useRef(true);

  // Session storage key
  const SESSION_KEY = "explore_chat_session";
  const MODE_KEY = "explore_mode";
  const SESSION_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

  // Load messages, filters, and mode from session storage on mount
  useEffect(() => {
    const savedSession = sessionStorage.getItem(SESSION_KEY);
    const savedMode = sessionStorage.getItem(MODE_KEY);
    
    if (savedSession) {
      try {
        const { messages: savedMessages, filters: savedFilters, timestamp } = JSON.parse(savedSession);
        const now = Date.now();
        
        // Check if session is still valid (within 1 hour)
        if (now - timestamp < SESSION_EXPIRY) {
          setMessages(savedMessages);
          setFilters(savedFilters);
        } else {
          // Session expired, clear it
          sessionStorage.removeItem(SESSION_KEY);
          sessionStorage.removeItem(MODE_KEY);
        }
      } catch (error) {
        console.error("Error loading session:", error);
        sessionStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(MODE_KEY);
      }
    }
    
    // Restore mode if it was saved
    if (savedMode) {
      const parsedMode = JSON.parse(savedMode);
      if (parsedMode.mode === "nearby" && parsedMode.timestamp) {
        const now = Date.now();
        // Check if mode was saved recently (within 1 hour)
        if (now - parsedMode.timestamp < SESSION_EXPIRY) {
          // Set mode immediately and start GPS tracking
          setMode("nearby");
          // Start GPS tracking after a brief delay to ensure component is mounted
          setTimeout(() => {
            isFirstGPSLockRef.current = true;
            startGPSTracking();
            detectOrientationSupport();
          }, 100);
        } else {
          sessionStorage.removeItem(MODE_KEY);
        }
      }
    }
  }, []);

  // Save messages and filters to session storage whenever they change
  useEffect(() => {
    // Don't save if we're on initial welcome message only
    if (messages.length > 1 || filters.category || filters.location || filters.ratingMin || filters.tags.length > 0) {
      const sessionData = {
        messages,
        filters,
        timestamp: Date.now()
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    }
  }, [messages, filters]);

  // Save mode to session storage whenever it changes
  useEffect(() => {
    const modeData = {
      mode,
      timestamp: Date.now()
    };
    sessionStorage.setItem(MODE_KEY, JSON.stringify(modeData));
  }, [mode]);

  // Parse slug on mount if present
  useEffect(() => {
    if (slug) {
      const parsedFilters = parseSlug(slug);
      if (parsedFilters) {
        setFilters(parsedFilters);
        // Add AI message based on slug
        const aiMessage = generateAIResponse(parsedFilters);
        setMessages([
          {
            role: "ai",
            text: "Hi, I'm your Chennai guide. What would you like to explore today?",
          },
          {
            role: "ai",
            text: aiMessage,
          },
        ]);
      } else {
        // Invalid slug format, redirect to /explore
        navigate("/explore", { replace: true });
      }
    }
  }, [slug, navigate]);

  // Parse slug format: {category}-places-near-{location} OR {categories}-in-{location}
  const parseSlug = (slug) => {
    // Try new pattern first: {categories}-in-{location}
    const newPattern = /^(.+)-in-(.+)$/;
    const newMatch = slug.match(newPattern);
    if (newMatch) {
      // De-pluralize category if needed
      let category = newMatch[1].replace(/-/g, " ");
      // Remove trailing 's' for common plurals
      if (category.endsWith("s") && category !== "s") {
        // Handle special cases
        const singularMap = {
          "cafes": "cafe",
          "restaurants": "restaurant",
          "temples": "temple",
          "beaches": "beach",
          "malls": "mall",
          "parks": "park",
          "museums": "museum",
          "hotels": "hotel",
          "gyms": "gym",
          "hospitals": "hospital",
          "schools": "school",
        };
        category = singularMap[category] || category.slice(0, -1);
      }
      return {
        category: category,
        location: newMatch[2].replace(/-/g, " "),
        ratingMin: null,
        tags: [],
      };
    }
    
    // Fall back to old pattern: {category}-places-near-{location}
    const oldPattern = /^(.+)-places-near-(.+)$/;
    const oldMatch = slug.match(oldPattern);
    if (oldMatch) {
      return {
        category: oldMatch[1].replace(/-/g, " "),
        location: oldMatch[2].replace(/-/g, " "),
        ratingMin: null,
        tags: [],
      };
    }
    return null;
  };

  // Build slug from filters - NEW FORMAT: {categories}-in-{location}
  const buildSlug = (filters) => {
    if (filters.category && filters.location) {
      // Pluralize category correctly
      const pluralMap = {
        "cafe": "cafes",
        "restaurant": "restaurants",
        "temple": "temples",
        "beach": "beaches",
        "mall": "malls",
        "park": "parks",
        "museum": "museums",
        "hotel": "hotels",
        "coworking": "coworking-spaces",
        "gym": "gyms",
        "hospital": "hospitals",
        "school": "schools",
      };
      const pluralCategory = pluralMap[filters.category] || `${filters.category}s`;
      const categorySlug = pluralCategory.replace(/\s+/g, "-");
      const locationSlug = filters.location.replace(/\s+/g, "-");
      return `${categorySlug}-in-${locationSlug}`;
    }
    return null;
  };

  // Update URL without reload using History API
  // Only update if we're on a sub-route (not /explore parent)
  const updateURLSlug = (filters) => {
    // Only update URL if we're already on a sub-route (not parent /explore)
    if (location.pathname === "/explore") {
      // Don't change URL on parent route
      return;
    }
    
    const slug = buildSlug(filters);
    if (slug) {
      const newPath = `/explore/${slug}`;
      if (location.pathname !== newPath) {
        window.history.pushState({ filters }, "", newPath);
      }
    }
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.filters) {
        setFilters(event.state.filters);
        const aiResponse = generateAIResponse(event.state.filters);
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: aiResponse,
          },
        ]);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Detect if message is a greeting
  const isGreeting = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "namaste"];
    return greetings.some((greeting) => lowerMessage === greeting || lowerMessage.startsWith(greeting + " "));
  };

  // Generate greeting response
  const generateGreetingResponse = () => {
    return "Hi! What would you like to explore in Chennai today?";
  };

  // Check if any filters were detected
  const hasDetectedFilters = (oldFilters, newFilters) => {
    return (
      oldFilters.category !== newFilters.category ||
      oldFilters.location !== newFilters.location ||
      oldFilters.ratingMin !== newFilters.ratingMin ||
      oldFilters.tags.length !== newFilters.tags.length
    );
  };

  // Generate smart suggestions for recovery - only include suggestions with results
  const generateSmartSuggestions = () => {
    const categoryExamples = ["cafe", "restaurant", "beach", "temple", "mall"];
    const locationExamples = ["nungambakkam", "adyar", "ecr", "mylapore", "vadapalani"];
    
    const allSuggestions = [
      `${categoryExamples[0]} near ${locationExamples[0]}`,
      `${categoryExamples[1]} near ${locationExamples[1]}`,
      `${categoryExamples[2]} near ${locationExamples[2]}`,
      `quiet ${categoryExamples[0]} in ${locationExamples[1]}`,
      `${categoryExamples[3]} near ${locationExamples[3]}`,
      `${categoryExamples[1]} rating above 4`,
    ];
    
    // Filter suggestions to only include those that would return results
    const validSuggestions = [];
    for (const suggestion of allSuggestions) {
      // Parse the suggestion to extract filters
      const testFilters = parseUserMessage(suggestion);
      
      // Check if this combination has results
      const hasResults = mockPlaces.some(place => {
        if (testFilters.category && place.category !== testFilters.category) return false;
        if (testFilters.location && place.location.toLowerCase() !== testFilters.location.toLowerCase()) return false;
        if (testFilters.ratingMin && place.rating < testFilters.ratingMin) return false;
        if (testFilters.tags && testFilters.tags.length > 0) {
          const hasAllTags = testFilters.tags.every(tag =>
            place.tags.some(placeTag => placeTag.toLowerCase() === tag.toLowerCase())
          );
          if (!hasAllTags) return false;
        }
        return true;
      });
      
      if (hasResults) {
        validSuggestions.push(suggestion);
      }
      
      // Stop when we have 3 valid suggestions
      if (validSuggestions.length >= 3) break;
    }
    
    return validSuggestions;
  };

  // Generate unmatched input response
  const generateUnmatchedResponse = () => {
    return "I couldn't understand that yet. Try something like:";
  };

  // Log for future AI training
  const logInteraction = (userMessage, detectedFilters, finalFilters, matched) => {
    if (process.env.NODE_ENV === "development") {
      console.log("=== Interaction Log ===");
      console.log("User Message:", userMessage);
      console.log("Detected Filters:", detectedFilters);
      console.log("Final Filters:", finalFilters);
      console.log("Matched:", matched);
      console.log("======================");
    }
  };

  // Parse user message and update filters with REPLACEMENT logic
  const parseUserMessage = (message) => {
    // Start with current filters
    const newFilters = { ...filters };
    const lowerMessage = message.toLowerCase();

    // REPLACEMENT FILTER: Category detection
    // If a category is detected, it REPLACES the previous category
    const categories = ["cafe", "restaurant", "temple", "beach", "mall", "park", "museum", 
                        "hotel", "coworking", "gym", "hospital", "school"];
    let categoryDetected = false;
    categories.forEach((cat) => {
      if (lowerMessage.includes(cat)) {
        newFilters.category = cat;
        categoryDetected = true;
      }
    });

    // REPLACEMENT FILTER: Location detection (common Chennai areas)
    // If a location is detected, it REPLACES the previous location
    const locations = [
      "nungambakkam", "adyar", "t nagar", "mylapore", "anna nagar", 
      "velachery", "tambaram", "guindy", "porur", "egmore",
      "triplicane", "besant nagar", "alwarpet", "kodambakkam", "saidapet",
      "vadapalani", "ashok nagar", "kk nagar", "perungudi", "sholinganallur",
      "omr", "ecr", "royapettah", "teynampet", "mandaveli",
      "west mambalam", "chrompet", "st thomas mount", "pallavaram", "marina",
      "thiruvanmiyur", "palavakkam", "injambakkam", "thoraipakkam", "madipakkam",
    ];
    let locationDetected = false;
    locations.forEach((loc) => {
      if (lowerMessage.includes(loc)) {
        newFilters.location = loc;
        locationDetected = true;
      }
    });

    // REPLACEMENT FILTER: Rating detection
    // If a rating is detected, it REPLACES the previous rating
    const ratingMatch = lowerMessage.match(/rating.*?(\d+\.?\d*)|over\s+(\d+\.?\d*)|above\s+(\d+\.?\d*)/);
    if (ratingMatch) {
      const rating = ratingMatch[1] || ratingMatch[2] || ratingMatch[3];
      newFilters.ratingMin = parseFloat(rating);
    }

    // ACCUMULATING FILTER: Tag detection
    // Tags are ADDED to the list, not replaced (avoiding duplicates)
    const tags = ["quiet", "peaceful", "modern", "traditional", "open now", "wifi", 
                  "outdoor", "family-friendly", "romantic", "cozy"];
    tags.forEach((tag) => {
      if (lowerMessage.includes(tag)) {
        // Only add if not already present (avoid duplicates)
        if (!newFilters.tags.includes(tag)) {
          newFilters.tags = [...newFilters.tags, tag];
        }
      }
    });

    return newFilters;
  };

  // Generate AI response based on filters
  const generateAIResponse = (filters) => {
    const parts = [];
    
    // Pluralize categories correctly
    const pluralizeCategory = (category) => {
      const pluralMap = {
        cafe: "cafes",
        restaurant: "restaurants",
        temple: "temples",
        beach: "beaches",
        mall: "malls",
        park: "parks",
        museum: "museums",
      };
      return pluralMap[category] || `${category}s`;
    };
    
    if (filters.category && filters.location) {
      parts.push(`Showing ${pluralizeCategory(filters.category)} near ${filters.location}`);
    } else if (filters.category) {
      parts.push(`Showing ${pluralizeCategory(filters.category)}`);
    } else if (filters.location) {
      parts.push(`Showing places near ${filters.location}`);
    }

    if (filters.ratingMin) {
      parts.push(`rated above ${filters.ratingMin}`);
    }

    if (filters.tags && filters.tags.length > 0) {
      const tagStr = filters.tags.join(", ");
      parts.push(`that are ${tagStr}`);
    }

    return parts.length > 0 ? parts.join(" ") : "Showing all places";
  };

  // Handle user message submission
  const handleSendMessage = (userMessage) => {
    // Show thinking loader
    setIsThinking(true);

    // Add user message to conversation
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // Small delay to show thinking loader
    setTimeout(() => {
      // Check if message is a greeting
      if (isGreeting(userMessage)) {
        const greetingResponse = generateGreetingResponse();
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: greetingResponse,
          },
        ]);
        setIsThinking(false);
        logInteraction(userMessage, {}, filters, true);
        return;
      }

      // Parse message and detect filters
      const oldFilters = { ...filters };
      const updatedFilters = parseUserMessage(userMessage);
      
      // Check if any filters were detected
      const matched = hasDetectedFilters(oldFilters, updatedFilters);

      if (!matched) {
        // No filters detected - show recovery message with suggestions
        const suggestions = generateSmartSuggestions();
        
        // Only show suggestions if we have valid ones
        if (suggestions.length > 0) {
          const unmatchedResponse = generateUnmatchedResponse();
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: unmatchedResponse,
              suggestions: suggestions,
            },
          ]);
        } else {
          // No valid suggestions, show generic message
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: "I couldn't understand that. Please try describing what you're looking for, like 'cafe near adyar' or 'temple in mylapore'.",
            },
          ]);
        }
        
        setIsThinking(false);
        logInteraction(userMessage, updatedFilters, filters, false);
        return;
      }

      // Filters detected - update state
      setFilters(updatedFilters);
      setLastFilterChange({ filters: updatedFilters, previousFilters: oldFilters });

      // Update URL slug dynamically
      updateURLSlug(updatedFilters);

      // Generate and add AI response
      const aiResponse = generateAIResponse(updatedFilters);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: aiResponse,
        },
      ]);

      setIsThinking(false);
      logInteraction(userMessage, updatedFilters, updatedFilters, true);
    }, 300); // Small delay to show thinking animation
  };

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  };

  // Calculate bearing from user to place
  const calculateBearing = (lat1, lon1, lat2, lon2) => {
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);

    return ((θ * 180) / Math.PI + 360) % 360; // Bearing in degrees
  };

  // Check if place is within directional cone
  const isInDirectionalCone = (placeBearing, deviceHeading, coneAngle = 45) => {
    let angle = Math.abs(placeBearing - deviceHeading);
    if (angle > 180) angle = 360 - angle;
    return angle <= coneAngle;
  };

  // Filter nearby places based on mode
  const filterNearbyPlaces = () => {
    if (!nearbyState.userLocation) return [];

    const { userLocation, radius, deviceHeading, nearbyModeType, selectedCategory } = nearbyState;

    return mockPlaces.filter((place) => {
      // Category filter
      if (selectedCategory && place.category !== selectedCategory) {
        return false;
      }

      // Get coordinates for Chennai places (using location names as proxy)
      // In a real implementation, places would have lat/lng coordinates
      const placeCoords = getLocationCoordinates(place.location);
      if (!placeCoords) return false;

      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        placeCoords.lat,
        placeCoords.lng
      );

      // Radius filter
      if (distance > radius) return false;

      // Directional filter for mobile
      if (nearbyModeType === "directional" && deviceHeading !== null) {
        const bearing = calculateBearing(
          userLocation.lat,
          userLocation.lng,
          placeCoords.lat,
          placeCoords.lng
        );
        return isInDirectionalCone(bearing, deviceHeading, 45);
      }

      return true;
    });
  };

  // Start GPS tracking
  const startGPSTracking = () => {
    if (!navigator.geolocation) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ Geolocation is not supported by your browser. Please use a modern browser like Chrome, Firefox, or Safari.",
        },
      ]);
      return;
    }

    setIsThinking(true);
    setMessages((prev) => [
      ...prev,
      {
        role: "ai",
        text: "Finding places near you...",
      },
    ]);

    // Request GPS permission and start watching position
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setNearbyState((prev) => ({
          ...prev,
          userLocation,
          gpsWatchId: watchId,
        }));

        setIsThinking(false);

        // Only show message on first GPS lock
        if (isFirstGPSLockRef.current) {
          isFirstGPSLockRef.current = false;
          setMessages((prev) => [
            ...prev.slice(0, -1), // Remove "Finding places" message
            {
              role: "ai",
              text: "📍 Location found! Select a category to discover nearby places.",
            },
          ]);
        }
      },
      (error) => {
        console.error("GPS Error:", error);
        setIsThinking(false);
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            role: "ai",
            text: "Unable to get your location. Please enable location services and try again.",
          },
        ]);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // Stop GPS tracking
  const stopGPSTracking = () => {
    if (nearbyState.gpsWatchId) {
      navigator.geolocation.clearWatch(nearbyState.gpsWatchId);
    }
    if (orientationListenerRef.current) {
      window.removeEventListener("deviceorientationabsolute", orientationListenerRef.current, true);
      window.removeEventListener("deviceorientation", orientationListenerRef.current, true);
      orientationListenerRef.current = null;
    }
  };

  // Detect device orientation support
  const detectOrientationSupport = () => {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      // iOS 13+ requires permission
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            setupOrientationListener();
            setNearbyState((prev) => ({ ...prev, nearbyModeType: "directional" }));
          } else {
            setNearbyState((prev) => ({ ...prev, nearbyModeType: "radius" }));
          }
        })
        .catch(() => {
          setNearbyState((prev) => ({ ...prev, nearbyModeType: "radius" }));
        });
    } else if (window.DeviceOrientationEvent) {
      // Other devices with orientation support
      setupOrientationListener();
      setNearbyState((prev) => ({ ...prev, nearbyModeType: "directional" }));
    } else {
      // No orientation support - use radius mode
      setNearbyState((prev) => ({ ...prev, nearbyModeType: "radius" }));
    }
  };

  // Setup device orientation listener
  const setupOrientationListener = () => {
    orientationListenerRef.current = (event) => {
      let heading = null;
      
      if (event.webkitCompassHeading !== undefined) {
        // iOS - webkitCompassHeading gives true compass heading (0-360)
        heading = event.webkitCompassHeading;
        console.log('iOS compass heading:', heading);
      } else if (event.alpha !== null) {
        // Android and other devices
        // event.alpha: rotation around z-axis (0-360)
        // For compass heading, we need to account for device orientation
        // If absolute is true, alpha is relative to true north
        // If absolute is false or undefined, alpha is relative to device's initial position
        
        if (event.absolute) {
          // Absolute orientation - alpha is relative to true north
          // alpha = 0 means device is pointing north
          // We want heading where 0 = north, 90 = east, 180 = south, 270 = west
          heading = event.alpha;
        } else {
          // Relative orientation - need to use compass if available
          // Fall back to alpha but it won't be accurate for compass direction
          heading = event.alpha;
        }
        
        // Normalize heading to 0-360 range
        heading = (heading + 360) % 360;
        console.log('Android/Other heading:', heading, 'absolute:', event.absolute);
      }

      if (heading !== null) {
        setNearbyState((prev) => ({
          ...prev,
          deviceHeading: heading,
        }));
      }
    };

    // Request absolute orientation if available
    if (typeof DeviceOrientationEvent !== "undefined") {
      window.addEventListener("deviceorientationabsolute", orientationListenerRef.current, true);
    }
    window.addEventListener("deviceorientation", orientationListenerRef.current, true);
  };

  // Handle mode switch
  const handleModeSwitch = (newMode) => {
    if (newMode === "nearby") {
      setMode(newMode);
      isFirstGPSLockRef.current = true; // Reset for new session
      startGPSTracking();
      detectOrientationSupport();
    } else {
      // Switching back to AI mode
      setMode(newMode);
      stopGPSTracking();
      isFirstGPSLockRef.current = true; // Reset for next session
      setNearbyState({
        userLocation: null,
        radius: 2000,
        deviceHeading: null,
        nearbyModeType: null,
        gpsWatchId: null,
        selectedCategory: null,
      });
    }
  };

  // Handle category chip click in Nearby mode
  const handleCategoryChipClick = (category) => {
    setNearbyState((prev) => ({
      ...prev,
      selectedCategory: category,
    }));
  };

  // Get unique categories from mockPlaces
  const getUniqueCategories = () => {
    const categories = [...new Set(mockPlaces.map((place) => place.category))];
    return categories.sort();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (nearbyState.gpsWatchId) {
        navigator.geolocation.clearWatch(nearbyState.gpsWatchId);
      }
      if (orientationListenerRef.current) {
        window.removeEventListener("deviceorientationabsolute", orientationListenerRef.current, true);
        window.removeEventListener("deviceorientation", orientationListenerRef.current, true);
      }
    };
  }, [nearbyState.gpsWatchId]);

  // Handle place card click
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowOffcanvas(true);
  };

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="explore-discovery-page">
      {/* Hero Banner or Map */}
      {mode === "ai" ? (
        <div className="hero-banner">
          <img
            src="/images/Visit-Images/visitBanner.jpg"
            alt="Explore Chennai"
            className="hero-banner-image"
          />
          <div className="hero-banner-overlay">
            <h1>Explore Chennai</h1>
            <p>Discover the best places with AI-assisted discovery</p>
          </div>
        </div>
      ) : (
        <div className="nearby-map-container">
          <NearbyMap
            userLocation={nearbyState.userLocation}
            places={filterNearbyPlaces()}
            onPlaceClick={handlePlaceClick}
            deviceHeading={nearbyState.deviceHeading}
            radius={nearbyState.radius}
            nearbyModeType={nearbyState.nearbyModeType}
          />
        </div>
      )}

      <div className="explore-container">
        {/* Main Content Area - Full Width */}
        <main className="explore-main">
          {/* Chat Interface with integrated results */}
          <ChatInterface 
            messages={messages} 
            filters={filters}
            mode={mode}
            onPlaceClick={handlePlaceClick}
            isThinking={isThinking}
            onSuggestionClick={handleSendMessage}
            nearbyPlaces={mode === "nearby" ? filterNearbyPlaces() : []}
          />
        </main>
      </div>

      {/* Chat Input - Sticky at bottom */}
      <ChatInput
        mode={mode}
        onSendMessage={handleSendMessage}
        onModeSwitch={handleModeSwitch}
        categories={getUniqueCategories()}
        selectedCategory={nearbyState.selectedCategory}
        onCategoryClick={handleCategoryChipClick}
      />

      {/* Detail Offcanvas */}
      <DetailOffcanvas
        place={selectedPlace}
        isOpen={showOffcanvas}
        onClose={() => setShowOffcanvas(false)}
      />
    </div>
  );
}
