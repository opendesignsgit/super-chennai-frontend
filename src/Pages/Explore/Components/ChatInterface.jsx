import { useRef, useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import mockPlaces from "../data/mockPlaces";

export default function ChatInterface({ messages, filters, mode, onPlaceClick, isThinking, onSuggestionClick }) {
  const messagesEndRef = useRef(null);
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isThinking]);

  // Use the imported mock data instead of inline data
  // Filter places based on active filters
  const filteredPlaces = mockPlaces.filter((place) => {
    if (filters.category && place.category !== filters.category) {
      return false;
    }
    if (filters.location && place.location.toLowerCase() !== filters.location.toLowerCase()) {
      return false;
    }
    if (filters.ratingMin && place.rating < filters.ratingMin) {
      return false;
    }
    if (filters.tags && filters.tags.length > 0) {
      const hasAllTags = filters.tags.every((tag) =>
        place.tags.some((placeTag) => placeTag.toLowerCase() === tag.toLowerCase())
      );
      if (!hasAllTags) {
        return false;
      }
    }
    return true;
  });

  // Helper to check if any filters are active
  const hasActiveFilters = (filters) => {
    return Object.values(filters).some((v) => {
      if (Array.isArray(v)) {
        return v.length > 0;
      }
      return v !== null && v !== undefined;
    });
  };

  // Show places if filters are active
  const displayPlaces = hasActiveFilters(filters) ? filteredPlaces : [];

  // Save scroll position before filter changes
  useEffect(() => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  }, [filters]);

  // Restore scroll position after re-render
  useEffect(() => {
    if (sliderRef.current && scrollPosition > 0) {
      sliderRef.current.scrollLeft = scrollPosition;
    }
  }, [displayPlaces, scrollPosition]);

  return (
    <div className="chat-interface">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index}>
            <div
              className={`message ${message.role === "ai" ? "message-ai" : "message-user"}`}
            >
              <div className="message-content">
                {message.role === "ai" && (
                  <div className="message-avatar">
                    <span className="ai-icon">🤖</span>
                  </div>
                )}
                <div className="message-text">{message.text}</div>
              </div>
            </div>

            {/* Show suggestions if present */}
            {message.role === "ai" && message.suggestions && message.suggestions.length > 0 && (
              <div className="suggestions-container">
                {message.suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    className="suggestion-chip"
                    onClick={() => onSuggestionClick(suggestion)}
                  >
                    • {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Show results slider after AI response if filters are active */}
            {message.role === "ai" && 
             index === messages.length - 1 && 
             !isThinking &&
             displayPlaces.length > 0 && (
              <div className="results-slider-container">
                {/* Single Row Horizontal Slider */}
                <div className="places-slider" ref={sliderRef}>
                  {displayPlaces.map((place) => (
                    <div key={place.id} className="place-card-wrapper">
                      <PlaceCard place={place} onClick={() => onPlaceClick(place)} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Show "no results" message if filters active but no places found */}
            {message.role === "ai" && 
             index === messages.length - 1 && 
             !isThinking &&
             hasActiveFilters(filters) &&
             displayPlaces.length === 0 && (
              <div className="no-results-message">
                <p>No exact matches found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        ))}
        
        {/* Thinking loader */}
        {isThinking && (
          <div className="message message-ai">
            <div className="message-content">
              <div className="message-avatar">
                <span className="ai-icon">🤖</span>
              </div>
              <div className="message-text thinking-loader">
                <span className="thinking-dot"></span>
                <span className="thinking-dot"></span>
                <span className="thinking-dot"></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
