import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatInterface from "./Components/ChatInterface";
import ChatInput from "./Components/ChatInput";
import DiscoveryResults from "./Components/DiscoveryResults";
import DetailOffcanvas from "./Components/DetailOffcanvas";
import "./Styles/ExploreDiscovery.css";

export default function ExploreDiscovery() {
  const { slug } = useParams();
  const navigate = useNavigate();

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

  // Parse user message and update filters
  const parseUserMessage = (message) => {
    const newFilters = { ...filters };
    const lowerMessage = message.toLowerCase();

    // Category detection
    const categories = ["cafe", "restaurant", "temple", "beach", "mall", "park", "museum"];
    categories.forEach((cat) => {
      if (lowerMessage.includes(cat)) {
        newFilters.category = cat;
      }
    });

    // Location detection (common Chennai areas)
    const locations = [
      "nungambakkam",
      "adyar",
      "t nagar",
      "mylapore",
      "anna nagar",
      "velachery",
      "tambaram",
    ];
    locations.forEach((loc) => {
      if (lowerMessage.includes(loc)) {
        newFilters.location = loc;
      }
    });

    // Rating detection
    const ratingMatch = lowerMessage.match(/rating.*?(\d+\.?\d*)/);
    if (ratingMatch) {
      newFilters.ratingMin = parseFloat(ratingMatch[1]);
    }

    // Tag detection
    const tags = ["quiet", "peaceful", "modern", "traditional", "open now", "wifi"];
    tags.forEach((tag) => {
      if (lowerMessage.includes(tag) && !newFilters.tags.includes(tag)) {
        newFilters.tags.push(tag);
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
    // Add user message to conversation
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // Parse message and update filters (accumulate, don't replace)
    const updatedFilters = parseUserMessage(userMessage);
    setFilters(updatedFilters);

    // Generate and add AI response
    const aiResponse = generateAIResponse(updatedFilters);
    setMessages((prev) => [
      ...prev,
      {
        role: "ai",
        text: aiResponse,
      },
    ]);
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
