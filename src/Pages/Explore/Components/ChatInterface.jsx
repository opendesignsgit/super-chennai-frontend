import { useRef, useEffect } from "react";
import Slider from "react-slick";
import PlaceCard from "./PlaceCard";
import mockPlaces from "../data/mockPlaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ChatInterface({ messages, filters, mode, onPlaceClick }) {
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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

  // Split places into two rows for slider
  const midPoint = Math.ceil(displayPlaces.length / 2);
  const firstRow = displayPlaces.slice(0, midPoint);
  const secondRow = displayPlaces.slice(midPoint);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

            {/* Show results slider after AI response if filters are active */}
            {message.role === "ai" && 
             index === messages.length - 1 && 
             displayPlaces.length > 0 && (
              <div className="results-slider-container">
                {/* First Row */}
                {firstRow.length > 0 && (
                  <div className="slider-row">
                    <Slider {...sliderSettings}>
                      {firstRow.map((place) => (
                        <div key={place.id} className="slider-item">
                          <PlaceCard place={place} onClick={() => onPlaceClick(place)} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}

                {/* Second Row */}
                {secondRow.length > 0 && (
                  <div className="slider-row">
                    <Slider {...sliderSettings}>
                      {secondRow.map((place) => (
                        <div key={place.id} className="slider-item">
                          <PlaceCard place={place} onClick={() => onPlaceClick(place)} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
