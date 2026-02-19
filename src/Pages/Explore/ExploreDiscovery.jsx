import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChatInterface from "./Components/ChatInterface";
import ChatInput from "./Components/ChatInput";
import DiscoveryResults from "./Components/DiscoveryResults";
import DetailOffcanvas from "./Components/DetailOffcanvas";
import MapOverlay from "./Components/MapOverlay";
import NearbyCategoryChips from "./Components/NearbyCategoryChips";
import mockPlaces from "./data/mockPlaces";
import {
  getUserLocation,
  isDeviceOrientationSupported,
  requestDeviceOrientationPermission,
  applyNearbySpatialFilter,
} from "./utils/spatialUtils";
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

  // Active filters (functional state - for AI mode)
  const [filters, setFilters] = useState({
    category: null,
    location: null,
    ratingMin: null,
    tags: [],
  });

  // NEARBY STATE (Non-Invasive Extension Layer)
  const [nearbyState, setNearbyState] = useState({
    isNearbyActive: false,
    userLocation: null,
    deviceHeading: null,
    nearbyCategory: null,
    nearbyModeType: "radius", // "radius" or "directional"
  });

  // UI state
  const [mode, setMode] = useState("ai"); // "ai" or "nearby"
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isThinking, setIsThinking] = useState(false); // Loading state for message processing
  const [lastFilterChange, setLastFilterChange] = useState(null); // Track last filter change for fallback

  // Session storage key
  const SESSION_KEY = "explore_chat_session";
  const SESSION_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

  // Load messages and filters from session storage on mount
  useEffect(() => {
    const savedSession = sessionStorage.getItem(SESSION_KEY);
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
        }
      } catch (error) {
        console.error("Error loading session:", error);
        sessionStorage.removeItem(SESSION_KEY);
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

  // Device orientation handler
  useEffect(() => {
    if (nearbyState.isNearbyActive && nearbyState.nearbyModeType === "directional") {
      const handleOrientation = (event) => {
        // Use webkitCompassHeading for iOS, alpha for Android
        const heading = event.webkitCompassHeading || event.alpha || 0;
        setNearbyState((prev) => ({
          ...prev,
          deviceHeading: heading,
        }));
      };

      window.addEventListener("deviceorientation", handleOrientation);
      return () => window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, [nearbyState.isNearbyActive, nearbyState.nearbyModeType]);

  // Handle mode switch
  const handleModeSwitch = async (newMode) => {
    setMode(newMode);
    
    if (newMode === "nearby") {
      // Activate Nearby Mode
      try {
        // Request user location
        const userLoc = await getUserLocation();
        
        // Detect device orientation support
        const orientationSupported = isDeviceOrientationSupported();
        let modeType = "radius";
        
        if (orientationSupported) {
          const granted = await requestDeviceOrientationPermission();
          if (granted) {
            modeType = "directional";
          }
        }
        
        // Update nearby state
        setNearbyState({
          isNearbyActive: true,
          userLocation: userLoc,
          deviceHeading: null,
          nearbyCategory: null,
          nearbyModeType: modeType,
        });
        
        // Add system message
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            text: `📍 Nearby mode activated. Showing places within 5km${
              modeType === "directional" ? " in your direction" : ""
            }.`,
          },
        ]);
      } catch (error) {
        console.error("Failed to activate nearby mode:", error);
        // Fallback to AI mode
        setMode("ai");
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            text: "Could not access your location. Please enable location permissions and try again.",
          },
        ]);
      }
    } else {
      // Deactivate Nearby Mode - restore AI mode
      setNearbyState({
        isNearbyActive: false,
        userLocation: null,
        deviceHeading: null,
        nearbyCategory: null,
        nearbyModeType: "radius",
      });
    }
  };

  // Handle place card click
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowOffcanvas(true);
  };

  // Handle nearby category selection
  const handleNearbyCategorySelect = (categoryId) => {
    setNearbyState((prev) => ({
      ...prev,
      nearbyCategory: categoryId,
    }));
  };

  // Handle map overlay close
  const handleMapClose = () => {
    setMode("ai");
    setNearbyState({
      isNearbyActive: false,
      userLocation: null,
      deviceHeading: null,
      nearbyCategory: null,
      nearbyModeType: "radius",
    });
  };

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Calculate visible places based on mode
  const visiblePlaces =
    nearbyState.isNearbyActive
      ? applyNearbySpatialFilter(mockPlaces, nearbyState, 5) // 5km radius
      : mockPlaces; // Use all places for AI mode filtering

  return (
    <div className="explore-discovery-page">
      {/* Hero Banner */}
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

      {/* Map Overlay (Nearby Mode) */}
      <MapOverlay
        isActive={nearbyState.isNearbyActive}
        userLocation={nearbyState.userLocation}
        deviceHeading={nearbyState.deviceHeading}
        nearbyModeType={nearbyState.nearbyModeType}
        places={visiblePlaces}
        radiusKm={5}
        onPlaceClick={handlePlaceClick}
        onClose={handleMapClose}
      />

      {/* Nearby Category Chips (Nearby Mode) */}
      {nearbyState.isNearbyActive && (
        <NearbyCategoryChips
          selectedCategory={nearbyState.nearbyCategory}
          onCategorySelect={handleNearbyCategorySelect}
        />
      )}

      {/* Chat Input - Sticky at bottom */}
      <ChatInput
        mode={mode}
        onSendMessage={handleSendMessage}
        onModeSwitch={handleModeSwitch}
        disabled={nearbyState.isNearbyActive}
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
