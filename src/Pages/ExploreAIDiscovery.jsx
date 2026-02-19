import { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Circle, Marker, Polygon } from "@react-google-maps/api";
import axios from "axios";
import "../assets/Css/ExploreAIDiscovery.css";
import { motion, AnimatePresence } from "framer-motion";

const ExploreAIDiscovery = () => {
  // Mode state: 'ai' or 'nearby'
  const [mode, setMode] = useState("ai");
  
  // Chat state
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  
  // Location & orientation state
  const [userLocation, setUserLocation] = useState(null);
  const [deviceHeading, setDeviceHeading] = useState(null);
  const [supportsOrientation, setSupportsOrientation] = useState(false);
  const [radius, setRadius] = useState(2000); // 2km default
  const [nearbyModeType, setNearbyModeType] = useState("radius"); // 'radius' or 'directional'
  
  // Places & categories state
  const [places, setPlaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  
  // Detail panel state
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  
  // Map state
  const mapRef = useRef(null);
  const watchIdRef = useRef(null);
  
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  // ========== MODE SWITCHING ==========
  const switchToNearby = () => {
    setMode("nearby");
    requestGPSPermission();
    detectOrientation();
  };

  const switchToAI = () => {
    setMode("ai");
    // Clean up GPS and orientation
    if (watchIdRef.current) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    window.removeEventListener("deviceorientation", handleOrientation);
    setUserLocation(null);
    setDeviceHeading(null);
    setSelectedCategory(null);
  };

  // ========== GPS ==========
  const requestGPSPermission = () => {
    setIsThinking(true);
    
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setIsThinking(false);
      return;
    }

    // Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        
        // Watch position for updates
        watchIdRef.current = navigator.geolocation.watchPosition(
          (pos) => {
            setUserLocation({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
          },
          (error) => console.error("GPS watch error:", error),
          { enableHighAccuracy: true, maximumAge: 0 }
        );
        
        fetchNearbyPlaces(coords);
        setIsThinking(false);
      },
      (error) => {
        console.error("GPS error:", error);
        alert("Please enable location permissions to use Nearby mode");
        setIsThinking(false);
        setMode("ai");
      }
    );
  };

  // ========== DEVICE ORIENTATION ==========
  const detectOrientation = () => {
    if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 13+ requires permission
      window.DeviceOrientationEvent.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            setSupportsOrientation(true);
            setNearbyModeType("directional");
            window.addEventListener("deviceorientation", handleOrientation);
          } else {
            setNearbyModeType("radius");
          }
        })
        .catch(() => {
          setNearbyModeType("radius");
        });
    } else if (window.DeviceOrientationEvent) {
      // Android and other browsers
      setSupportsOrientation(true);
      setNearbyModeType("directional");
      window.addEventListener("deviceorientation", handleOrientation);
    } else {
      setNearbyModeType("radius");
    }
  };

  const handleOrientation = (event) => {
    if (event.alpha !== null) {
      // alpha is the compass heading (0-360)
      setDeviceHeading(event.alpha);
    } else if (event.webkitCompassHeading !== undefined) {
      // iOS Safari
      setDeviceHeading(event.webkitCompassHeading);
    }
  };

  // ========== FETCH CATEGORIES ==========
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch from Payload CMS - adjust endpoint as needed
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/categories`);
        
        // If API doesn't exist yet, use fallback
        if (response.data && response.data.docs) {
          setCategories(response.data.docs);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Fallback categories
        setCategories([
          { id: 1, name: "Gym", slug: "gym" },
          { id: 2, name: "ATM", slug: "atm" },
          { id: 3, name: "Hospital", slug: "hospital" },
          { id: 4, name: "Mall", slug: "mall" },
          { id: 5, name: "Cafe", slug: "cafe" },
          { id: 6, name: "Restaurant", slug: "restaurant" },
          { id: 7, name: "Beach", slug: "beach" },
          { id: 8, name: "Park", slug: "park" },
          { id: 9, name: "Temple", slug: "temple" },
        ]);
      }
    };

    fetchCategories();
  }, []);

  // ========== FETCH PLACES ==========
  const fetchNearbyPlaces = async (location) => {
    try {
      setIsThinking(true);
      // Fetch from API - adjust endpoint as needed
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/places`, {
        params: {
          lat: location.lat,
          lng: location.lng,
          radius: radius,
        },
      });

      if (response.data && response.data.docs) {
        setPlaces(response.data.docs);
      } else {
        // Mock data for development
        setPlaces([
          {
            id: 1,
            name: "The Writer's Cafe",
            category: "cafe",
            lat: location.lat + 0.01,
            lng: location.lng + 0.01,
            rating: 3.6,
            status: "Open Now",
            image: "/images/cafe-placeholder.jpg",
          },
          {
            id: 2,
            name: "The Writer's Cafe 3",
            category: "cafe",
            lat: location.lat - 0.01,
            lng: location.lng + 0.005,
            rating: 4.8,
            status: "Open Now",
            image: "/images/cafe-placeholder.jpg",
          },
        ]);
      }
      setIsThinking(false);
    } catch (error) {
      console.error("Error fetching places:", error);
      setIsThinking(false);
    }
  };

  // ========== FILTERING LOGIC ==========
  useEffect(() => {
    if (mode !== "nearby" || !userLocation || places.length === 0) {
      setFilteredPlaces([]);
      return;
    }

    let filtered = places;

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(place => place.category === selectedCategory);
    }

    // Distance filter
    filtered = filtered.filter(place => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        place.lat,
        place.lng
      );
      return distance <= radius;
    });

    // Directional filter (mobile)
    if (nearbyModeType === "directional" && deviceHeading !== null) {
      filtered = filtered.filter(place => {
        const bearing = calculateBearing(
          userLocation.lat,
          userLocation.lng,
          place.lat,
          place.lng
        );
        const diff = Math.abs(normalizeAngle(bearing - deviceHeading));
        return diff <= 45; // ±45° cone
      });
    }

    setFilteredPlaces(filtered);
  }, [mode, userLocation, places, selectedCategory, deviceHeading, nearbyModeType, radius]);

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

  // Calculate bearing between two coordinates
  const calculateBearing = (lat1, lon1, lat2, lon2) => {
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x =
      Math.cos(φ1) * Math.sin(φ2) -
      Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);

    return ((θ * 180) / Math.PI + 360) % 360; // Bearing in degrees
  };

  // Normalize angle to 0-360
  const normalizeAngle = (angle) => {
    angle = angle % 360;
    if (angle > 180) angle -= 360;
    if (angle < -180) angle += 360;
    return Math.abs(angle);
  };

  // ========== CATEGORY CHIP HANDLER ==========
  const handleCategoryClick = (categorySlug) => {
    setIsThinking(true);
    setSelectedCategory(categorySlug === selectedCategory ? null : categorySlug);
    setTimeout(() => setIsThinking(false), 500);
  };

  // ========== PLACE DETAIL HANDLER ==========
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowDetailPanel(true);
  };

  // ========== AI CHAT HANDLERS ==========
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: "user", content: chatInput };
    setChatHistory([...chatHistory, userMessage]);
    setChatInput("");
    
    setIsThinking(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "assistant",
        content: "I can help you discover amazing places in Chennai! Try switching to Nearby mode for location-based discovery.",
      };
      setChatHistory(prev => [...prev, aiMessage]);
      setIsThinking(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    // Voice input implementation would go here
    alert("Voice input feature - implement with Web Speech API");
  };

  // Calculate cone polygon points for directional mode
  const getConePolygon = () => {
    if (!userLocation || !deviceHeading || nearbyModeType !== "directional") return [];

    const points = [];
    const radiusInDegrees = radius / 111320; // Convert meters to degrees (approximate)
    
    // Center point
    points.push(userLocation);

    // Left edge of cone (heading - 45°)
    const leftAngle = (deviceHeading - 45) * Math.PI / 180;
    points.push({
      lat: userLocation.lat + radiusInDegrees * Math.cos(leftAngle),
      lng: userLocation.lng + radiusInDegrees * Math.sin(leftAngle),
    });

    // Arc points (from -45° to +45°)
    for (let angle = deviceHeading - 45; angle <= deviceHeading + 45; angle += 5) {
      const rad = angle * Math.PI / 180;
      points.push({
        lat: userLocation.lat + radiusInDegrees * Math.cos(rad),
        lng: userLocation.lng + radiusInDegrees * Math.sin(rad),
      });
    }

    // Right edge of cone (heading + 45°)
    const rightAngle = (deviceHeading + 45) * Math.PI / 180;
    points.push({
      lat: userLocation.lat + radiusInDegrees * Math.cos(rightAngle),
      lng: userLocation.lng + radiusInDegrees * Math.sin(rightAngle),
    });

    return points;
  };

  // ========== CLEANUP ==========
  useEffect(() => {
    return () => {
      if (watchIdRef.current) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div className="explore-ai-discovery">
      {/* Hero Banner (AI Mode Only) */}
      {mode === "ai" && (
        <section className="explore-hero-banner">
          <div className="hero-overlay">
            <h1>Explore Chennai</h1>
            <p>Discover the best places with AI-assisted discovery</p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="explore-content">
        <div className="container">
          {/* Map Section (Nearby Mode Only) */}
          {mode === "nearby" && userLocation && (
            <div className="map-places-grid">
              <div className="map-container">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={userLocation}
                    zoom={14}
                    onLoad={(map) => (mapRef.current = map)}
                  >
                    {/* User location marker */}
                    <Marker
                      position={userLocation}
                      icon={{
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: "#4285F4",
                        fillOpacity: 1,
                        strokeColor: "#FFFFFF",
                        strokeWeight: 2,
                      }}
                    />

                    {/* Radius circle */}
                    <Circle
                      center={userLocation}
                      radius={radius}
                      options={{
                        strokeColor: "#00FF00",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#00FF00",
                        fillOpacity: 0.15,
                      }}
                    />

                    {/* Directional cone (mobile) */}
                    {nearbyModeType === "directional" && deviceHeading !== null && (
                      <Polygon
                        paths={getConePolygon()}
                        options={{
                          strokeColor: "#FF6B00",
                          strokeOpacity: 0.8,
                          strokeWeight: 2,
                          fillColor: "#FF6B00",
                          fillOpacity: 0.25,
                        }}
                      />
                    )}

                    {/* Place markers */}
                    {filteredPlaces.map((place) => (
                      <Marker
                        key={place.id}
                        position={{ lat: place.lat, lng: place.lng }}
                        onClick={() => handlePlaceClick(place)}
                        icon={{
                          path: window.google.maps.SymbolPath.CIRCLE,
                          scale: 6,
                          fillColor: selectedCategory === place.category ? "#FF0000" : "#00AA00",
                          fillOpacity: 1,
                          strokeColor: "#FFFFFF",
                          strokeWeight: 2,
                        }}
                      />
                    ))}
                  </GoogleMap>
                </LoadScript>

                {/* Compass indicator for directional mode */}
                {nearbyModeType === "directional" && deviceHeading !== null && (
                  <div className="compass-indicator">
                    <div
                      className="compass-arrow"
                      style={{ transform: `rotate(${deviceHeading}deg)` }}
                    >
                      ↑
                    </div>
                  </div>
                )}
              </div>

              {/* Place Cards */}
              <div className="place-cards-container">
                {isThinking && (
                  <div className="thinking-loader">
                    <div className="loader-spinner"></div>
                    <p>Finding places near you...</p>
                  </div>
                )}

                {!isThinking && filteredPlaces.length === 0 && (
                  <div className="no-places">
                    <p>No places found. Try selecting a different category or adjusting filters.</p>
                  </div>
                )}

                {!isThinking && filteredPlaces.map((place) => (
                  <div key={place.id} className="place-card" onClick={() => handlePlaceClick(place)}>
                    <div className="place-image">
                      <img src={place.image} alt={place.name} onError={(e) => {
                        e.target.src = "/images/placeholder.jpg";
                      }} />
                    </div>
                    <div className="place-info">
                      <h3>{place.name}</h3>
                      <div className="place-rating">
                        <span className="rating-value">{place.rating}</span>
                        <span className="rating-stars">★★★★☆</span>
                      </div>
                      <div className="place-status">{place.status}</div>
                      <button className="view-on-map-btn">View on Map</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat History (AI Mode) */}
          {mode === "ai" && (
            <div className="chat-history">
              {chatHistory.length === 0 && (
                <div className="empty-chat">
                  <p>Ask me anything about Chennai...</p>
                </div>
              )}
              {chatHistory.map((message, index) => (
                <div key={index} className={`chat-message ${message.role}`}>
                  <div className="message-content">{message.content}</div>
                </div>
              ))}
              {isThinking && mode === "ai" && (
                <div className="chat-message assistant">
                  <div className="message-content thinking">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Category Chips (Nearby Mode Only) */}
      {mode === "nearby" && (
        <div className="category-chips-section">
          <div className="container">
            <div className="category-chips">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-chip ${selectedCategory === category.slug ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat Input Section */}
      <div className="chat-input-section">
        <div className="container">
          <form className="chat-input-form" onSubmit={handleChatSubmit}>
            <button type="button" className="add-btn" disabled={mode === "nearby"}>
              +
            </button>
            <input
              type="text"
              placeholder="Ask Chennai anything..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              disabled={mode === "nearby"}
            />
            <div className="input-actions">
              <button
                type="button"
                className={`mode-toggle ${mode === "ai" ? "active" : ""}`}
                onClick={switchToAI}
              >
                AI
              </button>
              <button
                type="button"
                className={`mode-toggle ${mode === "nearby" ? "active" : ""}`}
                onClick={switchToNearby}
              >
                Nearby
              </button>
              <button
                type="button"
                className="voice-btn"
                onClick={handleVoiceInput}
                disabled={mode === "nearby"}
              >
                🎤
              </button>
              <button type="button" className="settings-btn">
                ⚙️
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Detail Panel (Offcanvas) */}
      <AnimatePresence>
        {showDetailPanel && selectedPlace && (
          <motion.div
            className="detail-panel-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetailPanel(false)}
          >
            <motion.div
              className="detail-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-panel-btn" onClick={() => setShowDetailPanel(false)}>
                ×
              </button>
              <div className="detail-panel-content">
                <img src={selectedPlace.image} alt={selectedPlace.name} onError={(e) => {
                  e.target.src = "/images/placeholder.jpg";
                }} />
                <h2>{selectedPlace.name}</h2>
                <div className="detail-rating">
                  <span className="rating-value">{selectedPlace.rating}</span>
                  <span className="rating-stars">★★★★☆</span>
                </div>
                <div className="detail-status">{selectedPlace.status}</div>
                <p className="detail-description">
                  Discover this amazing {selectedPlace.category} in Chennai. 
                  Experience the best that the city has to offer.
                </p>
                <button className="get-directions-btn">Get Directions</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreAIDiscovery;
