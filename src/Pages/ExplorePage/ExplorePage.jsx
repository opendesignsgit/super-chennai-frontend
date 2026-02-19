import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ChatInput from "./components/ChatInput";
import PlaceGrid from "./components/PlaceGrid";
import MapOverlay from "./components/MapOverlay";
import NearbyCategoryChips from "./components/NearbyCategoryChips";
import DetailPanel from "./components/DetailPanel";
import { useNearbyMode } from "./hooks/useNearbyMode";
import { useDeviceOrientation } from "./hooks/useDeviceOrientation";
import { applySpatialFilter } from "./utils/spatialFilters";
import "../../assets/Css/ExplorePage.css";

/**
 * ExplorePage Component - Main Explore AI Discovery page
 * Supports both AI Mode (default) and Nearby Mode (extension layer)
 */
const ExplorePage = () => {
  // AI Mode state (separate from Nearby state)
  const [allPlaces, setAllPlaces] = useState([]);
  const [aiFilteredPlaces, setAiFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);

  // Nearby Mode state (non-invasive extension layer)
  const {
    nearbyState,
    toggleNearbyMode,
    setDeviceHeading,
    setNearbyCategory,
    setNearbyModeType,
  } = useNearbyMode();

  // Device orientation for mobile directional mode
  const { heading, isSupported: isOrientationSupported } = useDeviceOrientation(
    nearbyState.isNearbyActive
  );

  // Detail panel state
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Update device heading when orientation changes
  useEffect(() => {
    if (heading !== null && nearbyState.isNearbyActive) {
      setDeviceHeading(heading);
    }
  }, [heading, nearbyState.isNearbyActive, setDeviceHeading]);

  // Update nearby mode type based on device support
  useEffect(() => {
    if (nearbyState.isNearbyActive) {
      setNearbyModeType(isOrientationSupported ? "directional" : "radius");
    }
  }, [nearbyState.isNearbyActive, isOrientationSupported, setNearbyModeType]);

  // Fetch places on mount
  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API endpoint
      // For now, using mock data
      const mockPlaces = generateMockPlaces();
      setAllPlaces(mockPlaces);
      setAiFilteredPlaces(mockPlaces);
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  // Generate mock places for development
  const generateMockPlaces = () => {
    const categories = ["restaurants", "cafes", "shopping", "entertainment", "hotels"];
    const places = [];
    
    for (let i = 1; i <= 20; i++) {
      places.push({
        id: i,
        title: `The Writer's Cafe ${i}`,
        image: `/images/explore/placeholder-${(i % 4) + 1}.jpg`,
        rating: 3.0 + Math.random() * 2,
        status: Math.random() > 0.3 ? "Open Now" : "Closed",
        category: categories[Math.floor(Math.random() * categories.length)],
        description: `A wonderful place to visit in Chennai. Experience ${categories[i % categories.length]} at its finest.`,
        address: `${i} Mount Road, Chennai, Tamil Nadu 600002`,
        phone: `+91 44 1234 ${5600 + i}`,
        location: {
          // Generate locations around Chennai (13.0827°N, 80.2707°E)
          lat: 13.0827 + (Math.random() - 0.5) * 0.1,
          lng: 80.2707 + (Math.random() - 0.5) * 0.1,
        },
      });
    }
    
    return places;
  };

  // Derived visiblePlaces based on active mode
  const visiblePlaces = useMemo(() => {
    if (nearbyState.isNearbyActive) {
      // Apply spatial filtering for Nearby mode
      return applySpatialFilter(allPlaces, nearbyState);
    } else {
      // Use AI filtered places for AI mode
      return aiFilteredPlaces;
    }
  }, [nearbyState, allPlaces, aiFilteredPlaces]);

  // Handle chat message (AI Mode)
  const handleSendMessage = (message) => {
    if (nearbyState.isNearbyActive) return; // Chat disabled in Nearby mode

    // Add message to chat history
    setChatHistory([...chatHistory, { role: "user", content: message }]);

    // TODO: Send to AI backend and filter places based on response
    // For now, just log the message
    console.log("AI Message:", message);

    // Mock AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I found some great ${message.toLowerCase()} options for you!`,
        },
      ]);
    }, 500);
  };

  // Handle Nearby mode toggle
  const handleToggleNearby = () => {
    toggleNearbyMode();
  };

  // Handle place card "View on Map" click
  const handleViewOnMap = (place) => {
    setSelectedPlace(place);
    setIsPanelOpen(true);
  };

  // Handle map marker click
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setIsPanelOpen(true);
  };

  // Handle category selection in Nearby mode
  const handleCategorySelect = (category) => {
    setNearbyCategory(category);
  };

  // Close detail panel
  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedPlace(null), 300); // Delay to allow animation
  };

  return (
    <div className="explore-page">
      {/* Hero Section - Always visible */}
      <div className="explore-hero">
        <div className="explore-hero-content">
          <h1 className="explore-hero-title">Explore Chennai</h1>
          <p className="explore-hero-subtitle">
            Discover the best places with AI-assisted discovery
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="explore-content-container">
        {/* Nearby Category Chips - Only visible in Nearby mode */}
        {nearbyState.isNearbyActive && (
          <NearbyCategoryChips
            selectedCategory={nearbyState.nearbyCategory}
            onCategorySelect={handleCategorySelect}
          />
        )}

        {/* Content Grid */}
        <div className="explore-content-grid">
          {/* Map Overlay - Only visible in Nearby mode */}
          {nearbyState.isNearbyActive && nearbyState.userLocation && (
            <div className="explore-map-section">
              <MapOverlay
                userLocation={nearbyState.userLocation}
                places={visiblePlaces}
                radius={5}
                deviceHeading={nearbyState.deviceHeading}
                nearbyModeType={nearbyState.nearbyModeType}
                onPlaceClick={handlePlaceClick}
              />
            </div>
          )}

          {/* Places Grid - Always visible */}
          <div className="explore-places-section">
            {loading ? (
              <div className="explore-loading">
                <p>Loading places...</p>
              </div>
            ) : (
              <PlaceGrid places={visiblePlaces} onViewOnMap={handleViewOnMap} />
            )}
          </div>
        </div>

        {/* Chat Input - Always visible, disabled when Nearby active */}
        <ChatInput
          onSendMessage={handleSendMessage}
          isNearbyActive={nearbyState.isNearbyActive}
          onToggleNearby={handleToggleNearby}
          disabled={nearbyState.isNearbyActive}
        />
      </div>

      {/* Detail Panel - Reused offcanvas pattern */}
      <DetailPanel
        place={selectedPlace}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </div>
  );
};

export default ExplorePage;
