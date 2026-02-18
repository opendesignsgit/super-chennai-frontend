import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChatInterface from "./Components/ChatInterface";
import ChatInput from "./Components/ChatInput";
import DiscoveryResults from "./Components/DiscoveryResults";
import DetailOffcanvas from "./Components/DetailOffcanvas";
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

  // Parse slug format: {category}-places-near-{location}
  const parseSlug = (slug) => {
    const pattern = /^(.+)-places-near-(.+)$/;
    const match = slug.match(pattern);
    if (match) {
      return {
        category: match[1].replace(/-/g, " "),
        location: match[2].replace(/-/g, " "),
        ratingMin: null,
        tags: [],
      };
    }
    return null;
  };

  // Build slug from filters
  const buildSlug = (filters) => {
    if (filters.category && filters.location) {
      const category = filters.category.replace(/\s+/g, "-");
      const location = filters.location.replace(/\s+/g, "-");
      return `${category}-places-near-${location}`;
    }
    return null;
  };

  // Update URL without reload using History API
  const updateURLSlug = (filters) => {
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

  // Generate smart suggestions for recovery
  const generateSmartSuggestions = () => {
    const categoryExamples = ["cafe", "restaurant", "beach", "temple", "mall"];
    const locationExamples = ["nungambakkam", "adyar", "ecr", "mylapore", "vadapalani"];
    
    const suggestions = [
      `${categoryExamples[Math.floor(Math.random() * categoryExamples.length)]} near ${locationExamples[Math.floor(Math.random() * locationExamples.length)]}`,
      `quiet ${categoryExamples[Math.floor(Math.random() * categoryExamples.length)]} in ${locationExamples[Math.floor(Math.random() * locationExamples.length)]}`,
      `${categoryExamples[Math.floor(Math.random() * categoryExamples.length)]} rating above 4`,
    ];
    
    return suggestions.slice(0, 3);
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
        const unmatchedResponse = generateUnmatchedResponse();
        const suggestions = generateSmartSuggestions();
        
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: unmatchedResponse,
            suggestions: suggestions,
          },
        ]);
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

  // Handle mode switch
  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    if (newMode === "nearby") {
      // Phase 1: Mock nearby results
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Showing places near you (mock data)",
        },
      ]);
    }
  };

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
      {/* Logo and Back Button */}
      <div className="explore-header">
        <img 
          src="/images/super-chennai-logo-final.png" 
          alt="SuperChennai" 
          className="explore-logo"
        />
        <button className="back-button" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </button>
      </div>

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
