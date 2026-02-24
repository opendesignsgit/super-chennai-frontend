import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChatInterface from "./Components/ChatInterface";
import ChatInput from "./Components/ChatInput";
import DiscoveryResults from "./Components/DiscoveryResults";
import DetailOffcanvas from "./Components/DetailOffcanvas";
import NearbyMap from "./Components/NearbyMap";
import NearbyCategoryChips from "./Components/NearbyCategoryChips";
import mockPlaces from "./data/mockPlaces";
import { 
  getUserLocation, 
  supportsOrientation, 
  requestOrientationPermission,
  getHeadingFromOrientation,
  assignMockCoordinates 
} from "./utils/geolocation";
import { 
  filterByRadius, 
  filterByDirectionalCone, 
  getUniqueCategories,
  sortByDistance 
} from "./utils/nearbyFiltering";
import "./Styles/ExploreDiscovery.css";
import "leaflet/dist/leaflet.css";

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

  // Nearby Mode State
  const [nearbyState, setNearbyState] = useState({
    isNearbyActive: false,
    userLocation: null,
    deviceHeading: null,
    nearbyCategory: null,
    nearbyModeType: "radius", // "radius" or "directional"
    nearbyRadius: 2, // Default 2km
  });
  
  const [placesWithCoords, setPlacesWithCoords] = useState([]);
  const orientationListenerRef = useRef(null);

  // Session storage key
  const SESSION_KEY = "explore_chat_session";
  const SESSION_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

  // Load messages, filters, and mode from session storage on mount
  useEffect(() => {
    const savedSession = sessionStorage.getItem(SESSION_KEY);
    if (savedSession) {
      try {
        const { messages: savedMessages, filters: savedFilters, mode: savedMode, timestamp } = JSON.parse(savedSession);
        const now = Date.now();
        
        // Check if session is still valid (within 1 hour)
        if (now - timestamp < SESSION_EXPIRY) {
          setMessages(savedMessages);
          setFilters(savedFilters);
          
          // Restore mode if it was nearby (will trigger initialization via separate effect)
          if (savedMode === "nearby") {
            setMode("nearby");
          }
        } else {
          // Session expired, clear it
          sessionStorage.removeItem(SESSION_KEY);
        }
      } catch (error) {
        console.error("Error loading session:", error);
        sessionStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  // Initialize nearby mode when mode is set to nearby (for both manual switch and session restore)
  useEffect(() => {
    const initializeNearbyMode = async () => {
      if (mode === "nearby" && !nearbyState.isNearbyActive) {
        try {
          // Request GPS permission and get user location
          const location = await getUserLocation();
          
          // Detect device orientation support
          const hasOrientation = supportsOrientation();
          let modeType = "radius"; // Default to radius mode
          
          if (hasOrientation) {
            // Request orientation permission (iOS)
            const permissionGranted = await requestOrientationPermission();
            if (permissionGranted) {
              modeType = "directional";
              
              // Add orientation listener
              const handleOrientation = (event) => {
                const heading = getHeadingFromOrientation(event);
                setNearbyState(prev => ({
                  ...prev,
                  deviceHeading: heading,
                }));
              };
              
              window.addEventListener('deviceorientation', handleOrientation);
              orientationListenerRef.current = handleOrientation;
            }
          }
          
          // Initialize places with coordinates (mock for now)
          const coordPlaces = assignMockCoordinates(mockPlaces);
          setPlacesWithCoords(coordPlaces);
          
          // Update nearby state
          setNearbyState({
            isNearbyActive: true,
            userLocation: location,
            deviceHeading: null,
            nearbyCategory: null,
            nearbyModeType: modeType,
            nearbyRadius: 2,
          });
          
          // Add message only if not restoring from session
          const savedSession = sessionStorage.getItem(SESSION_KEY);
          if (!savedSession || !savedSession.includes('"mode":"nearby"')) {
            setMessages((prev) => [
              ...prev,
              {
                role: "ai",
                text: `Nearby Mode activated! ${modeType === "directional" ? "Point your device to discover places" : "Showing places within 2km"}`,
              },
            ]);
          }
        } catch (error) {
          console.error("Error initializing Nearby Mode:", error);
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: "Could not access your location. Please enable location permissions and try again.",
            },
          ]);
          // Revert to AI mode if location access failed
          setMode("ai");
        }
      }
    };

    initializeNearbyMode();
  }, [mode, nearbyState.isNearbyActive]);

  // Save messages, filters, and mode to session storage whenever they change
  useEffect(() => {
    // Don't save if we're on initial welcome message only
    if (messages.length > 1 || filters.category || filters.location || filters.ratingMin || filters.tags.length > 0 || mode === "nearby") {
      const sessionData = {
        messages,
        filters,
        mode,
        timestamp: Date.now()
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    }
  }, [messages, filters, mode]);

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
  const handleSendMessage = async (userMessage) => {
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

    // Check if message is a greeting (no API call needed)
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

    try {
      // Call AI interpret endpoint
      const response = await fetch(
        "https://api.superchennai.com/ai/interpret",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      if (!response.ok) {
        throw new Error("AI interpret request failed");
      }

      const aiFilters = await response.json();

      // Map AI response fields to internal filter shape
      const mappedFilters = {
        category: aiFilters.category || null,
        location: aiFilters.location || null,
        ratingMin: aiFilters.rating != null ? aiFilters.rating : null,
        tags: Array.isArray(aiFilters.tags) ? aiFilters.tags : [],
      };

      // Merge with active filters (progressive refinement)
      const oldFilters = { ...filters };
      const updatedFilters = {
        ...oldFilters,
        ...(mappedFilters.category !== null && { category: mappedFilters.category }),
        ...(mappedFilters.location !== null && { location: mappedFilters.location }),
        ...(mappedFilters.ratingMin !== null && { ratingMin: mappedFilters.ratingMin }),
        tags: [
          ...oldFilters.tags,
          ...mappedFilters.tags.filter((t) => !oldFilters.tags.includes(t)),
        ],
      };

      // Check if any filters were detected
      const matched = hasDetectedFilters(oldFilters, updatedFilters);

      if (!matched) {
        // No filters detected - show recovery message with suggestions
        const suggestions = generateSmartSuggestions();
        if (suggestions.length > 0) {
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: generateUnmatchedResponse(),
              suggestions,
            },
          ]);
        } else {
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
    } catch (e) {
      // Fallback to rule-based parsing on API failure
      console.error("AI interpret API failed, falling back to rule-based parsing:", e);
      const oldFilters = { ...filters };
      const updatedFilters = parseUserMessage(userMessage);
      const matched = hasDetectedFilters(oldFilters, updatedFilters);

      if (!matched) {
        const suggestions = generateSmartSuggestions();
        if (suggestions.length > 0) {
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: generateUnmatchedResponse(),
              suggestions,
            },
          ]);
        } else {
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

      setFilters(updatedFilters);
      setLastFilterChange({ filters: updatedFilters, previousFilters: oldFilters });
      updateURLSlug(updatedFilters);

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
    }
  };

  // Handle mode switch
  const handleModeSwitch = (newMode) => {
    if (newMode === "ai") {
      // Switching back to AI mode
      setMode(newMode);
      
      // Clean up orientation listener
      if (orientationListenerRef.current) {
        window.removeEventListener('deviceorientation', orientationListenerRef.current);
        orientationListenerRef.current = null;
      }
      
      // Reset nearby state
      setNearbyState({
        isNearbyActive: false,
        userLocation: null,
        deviceHeading: null,
        nearbyCategory: null,
        nearbyModeType: "radius",
        nearbyRadius: 2,
      });
    } else {
      // Switching to nearby mode - just set the mode, initialization happens in useEffect
      setMode(newMode);
    }
  };

  // Handle place card click
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowOffcanvas(true);
  };

  // Handle nearby category selection
  const handleNearbyCategorySelect = (category) => {
    setNearbyState(prev => ({
      ...prev,
      nearbyCategory: category,
    }));
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (orientationListenerRef.current) {
        window.removeEventListener('deviceorientation', orientationListenerRef.current);
      }
    };
  }, []);

  // Calculate nearby places based on mode
  const getNearbyPlaces = () => {
    if (!nearbyState.isNearbyActive || !nearbyState.userLocation) {
      return [];
    }

    let filtered = [];
    
    if (nearbyState.nearbyModeType === "directional" && nearbyState.deviceHeading !== null) {
      // Directional mode
      filtered = filterByDirectionalCone(
        placesWithCoords,
        nearbyState.userLocation,
        nearbyState.deviceHeading,
        nearbyState.nearbyRadius,
        nearbyState.nearbyCategory
      );
    } else {
      // Radius mode
      filtered = filterByRadius(
        placesWithCoords,
        nearbyState.userLocation,
        nearbyState.nearbyRadius,
        nearbyState.nearbyCategory
      );
    }

    // Sort by distance
    return sortByDistance(filtered, nearbyState.userLocation);
  };

  // Get available categories from nearby places
  const getAvailableCategories = () => {
    if (!nearbyState.isNearbyActive || !nearbyState.userLocation) {
      return [];
    }

    // Get all places within radius (ignoring category filter)
    const allNearby = filterByRadius(
      placesWithCoords,
      nearbyState.userLocation,
      nearbyState.nearbyRadius
    );

    return getUniqueCategories(allNearby);
  };

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="explore-discovery-page">
      {/* Hero Banner - Hide in Nearby Mode */}
      {!nearbyState.isNearbyActive && (
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
      )}

      {/* Nearby Mode - Map and Category Chips */}
      {nearbyState.isNearbyActive && (
        <>
          <NearbyMap
            userLocation={nearbyState.userLocation}
            nearbyPlaces={getNearbyPlaces()}
            deviceHeading={nearbyState.deviceHeading}
            radius={nearbyState.nearbyRadius}
            modeType={nearbyState.nearbyModeType}
            onPlaceClick={handlePlaceClick}
          />
          
          <NearbyCategoryChips
            availableCategories={getAvailableCategories()}
            selectedCategory={nearbyState.nearbyCategory}
            onCategorySelect={handleNearbyCategorySelect}
          />
        </>
      )}

      {/* AI Mode - Chat Interface */}
      {!nearbyState.isNearbyActive && (
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
            />
          </main>
        </div>
      )}

      {/* Chat Input - Sticky at bottom */}
      <ChatInput
        mode={mode}
        onSendMessage={handleSendMessage}
        onModeSwitch={handleModeSwitch}
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
