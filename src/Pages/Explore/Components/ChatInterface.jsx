import { useRef } from "react";
import Slider from "react-slick";
import PlaceCard from "./PlaceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ChatInterface({ messages, filters, mode, onPlaceClick }) {
  const messagesEndRef = useRef(null);

  // Mock data for demonstration
  const mockPlaces = [
    {
      id: 1,
      title: "The Writer's Cafe",
      category: "cafe",
      location: "Nungambakkam",
      rating: 4.8,
      image: "/images/Visit-Images/places-to-visit.jpg",
      status: "Open Now",
      tags: ["quiet", "wifi", "peaceful"],
      description: "A quiet place to read near Adyar, maybe with good coffee",
      vibe: { quiet: 5, modern: 4 },
    },
    {
      id: 2,
      title: "Backyard Cafe",
      category: "cafe",
      location: "Adyar",
      rating: 4.6,
      image: "/images/Visit-Images/food.jpg",
      status: "Open Now",
      tags: ["outdoor", "modern"],
      description: "Modern cafe with outdoor seating",
      vibe: { quiet: 3, modern: 5 },
    },
    {
      id: 3,
      title: "Marina Beach",
      category: "beach",
      location: "Marina",
      rating: 4.5,
      image: "/images/Visit-Images/marina-beach.jpg",
      status: "Open Now",
      tags: ["outdoor", "peaceful"],
      description: "Beautiful beach for evening walks",
      vibe: { quiet: 4, modern: 2 },
    },
    {
      id: 4,
      title: "Kapaleeshwarar Temple",
      category: "temple",
      location: "Mylapore",
      rating: 4.9,
      image: "/images/Visit-Images/places-to-visit.jpg",
      status: "Open Now",
      tags: ["traditional", "peaceful"],
      description: "Historic temple with beautiful architecture",
      vibe: { quiet: 4, modern: 1 },
    },
    {
      id: 5,
      title: "Express Avenue Mall",
      category: "mall",
      location: "Royapettah",
      rating: 4.7,
      image: "/images/Visit-Images/shopping.jpg",
      status: "Open Now",
      tags: ["modern", "shopping"],
      description: "Large shopping mall with many stores",
      vibe: { quiet: 2, modern: 5 },
    },
    {
      id: 6,
      title: "Guindy National Park",
      category: "park",
      location: "Guindy",
      rating: 4.4,
      image: "/images/Visit-Images/things-to-do.jpg",
      status: "Open Now",
      tags: ["outdoor", "peaceful", "quiet"],
      description: "Natural park in the city",
      vibe: { quiet: 5, modern: 2 },
    },
  ];

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
