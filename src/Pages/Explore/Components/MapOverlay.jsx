import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 13.0827,
  lng: 80.2707,
};

// Get API key from environment or use placeholder
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

export default function MapOverlay({
  isActive,
  userLocation,
  deviceHeading,
  nearbyModeType,
  places,
  radiusKm,
  onPlaceClick,
  onClose,
}) {
  const [map, setMap] = useState(null);

  const center = userLocation || defaultCenter;

  useEffect(() => {
    if (map && userLocation) {
      map.panTo(userLocation);
    }
  }, [map, userLocation]);

  if (!isActive) {
    return null;
  }

  // Circle options for radius
  const circleOptions = {
    strokeColor: "#4285F4",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#4285F4",
    fillOpacity: 0.15,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: radiusKm * 1000, // Convert km to meters
  };

  // Custom marker icon for user location
  const userMarkerIcon = {
    path: "M 0,0 m -5,0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
    fillColor: "#4285F4",
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
    scale: 2,
  };

  return (
    <div className="map-overlay">
      <div className="map-overlay-header">
        <h3>Nearby Places</h3>
        <button className="map-close-btn" onClick={onClose}>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="map-container">
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
            onLoad={(map) => setMap(map)}
            options={{
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: true,
            }}
          >
            {/* User location marker */}
            {userLocation && (
              <>
                <Marker
                  position={userLocation}
                  icon={userMarkerIcon}
                  title="Your Location"
                  zIndex={1000}
                />
                
                {/* Radius circle */}
                <Circle
                  center={userLocation}
                  options={circleOptions}
                />
              </>
            )}

            {/* Place markers */}
            {places.map((place) => {
              if (!place.coordinates) return null;
              
              // Build icon configuration
              const iconConfig = {
                url: getCategoryIcon(place.category),
              };
              
              // Add scaledSize only if Google Maps API is loaded
              if (window.google?.maps) {
                iconConfig.scaledSize = new window.google.maps.Size(30, 30);
              }
              
              return (
                <Marker
                  key={place.id}
                  position={place.coordinates}
                  title={place.title}
                  onClick={() => onPlaceClick(place)}
                  icon={iconConfig}
                />
              );
            })}
          </GoogleMap>
        </LoadScript>

        {/* Directional cone indicator overlay (mobile) */}
        {nearbyModeType === "directional" && deviceHeading !== null && (
          <div className="directional-indicator">
            <div 
              className="compass-cone"
              style={{ transform: `rotate(${deviceHeading}deg)` }}
            >
              <div className="cone-shape"></div>
            </div>
          </div>
        )}
      </div>

      {/* Place count indicator */}
      <div className="map-place-count">
        {places.length} {places.length === 1 ? "place" : "places"} nearby
      </div>
    </div>
  );
}

/**
 * Get marker icon URL based on category
 */
function getCategoryIcon(category) {
  const icons = {
    cafe: "https://maps.google.com/mapfiles/ms/icons/coffee.png",
    restaurant: "https://maps.google.com/mapfiles/ms/icons/restaurant.png",
    temple: "https://maps.google.com/mapfiles/ms/icons/homegardenbusiness.png",
    beach: "https://maps.google.com/mapfiles/ms/icons/beach.png",
    mall: "https://maps.google.com/mapfiles/ms/icons/shopping.png",
    park: "https://maps.google.com/mapfiles/ms/icons/tree.png",
    museum: "https://maps.google.com/mapfiles/ms/icons/arts.png",
    hotel: "https://maps.google.com/mapfiles/ms/icons/lodging.png",
    coworking: "https://maps.google.com/mapfiles/ms/icons/office.png",
    gym: "https://maps.google.com/mapfiles/ms/icons/sportvenue.png",
    hospital: "https://maps.google.com/mapfiles/ms/icons/hospitals.png",
    school: "https://maps.google.com/mapfiles/ms/icons/schools.png",
  };
  
  return icons[category] || "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
}
