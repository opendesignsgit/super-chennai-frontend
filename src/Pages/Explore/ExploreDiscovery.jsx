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
        setMessages((prev) => [
          ...prev,
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
    
    if (filters.category && filters.location) {
      parts.push(`Showing ${filters.category}s near ${filters.location}`);
    } else if (filters.category) {
      parts.push(`Showing ${filters.category}s`);
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
        <div className="explore-content">
          {/* Left Sidebar - Placeholder for Phase 1 */}
          <aside className="explore-sidebar">
            <div className="sidebar-placeholder">
              <h3>Quick Filters</h3>
              <p>Coming soon...</p>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="explore-main">
            {/* Chat Interface */}
            <ChatInterface messages={messages} />

            {/* Results Grid */}
            <DiscoveryResults
              filters={filters}
              mode={mode}
              onPlaceClick={handlePlaceClick}
            />

            {/* Chat Input */}
            <ChatInput
              mode={mode}
              onSendMessage={handleSendMessage}
              onModeSwitch={handleModeSwitch}
            />
          </main>
        </div>
      </div>

      {/* Detail Offcanvas */}
      <DetailOffcanvas
        place={selectedPlace}
        isOpen={showOffcanvas}
        onClose={() => setShowOffcanvas(false)}
      />
    </div>
  );
}
