import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import { Compass } from "lucide-react";
import "../../../assets/Css/ExplorePage.css";

/**
 * MapOverlay Component - Shows user location, radius, and place pins
 * Appears as an overlay when Nearby mode is active
 */
const MapOverlay = ({
  userLocation,
  places,
  radius = 5,
  deviceHeading = null,
  nearbyModeType = "radius",
  onPlaceClick,
}) => {
  const [map, setMap] = useState(null);
  const [mapCenter, setMapCenter] = useState(userLocation);

  useEffect(() => {
    if (userLocation) {
      setMapCenter(userLocation);
    }
  }, [userLocation]);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const circleOptions = {
    strokeColor: "#a44294",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#a44294",
    fillOpacity: 0.15,
  };

  // Custom marker icon for user location
  const userMarkerIcon = {
    path: window.google?.maps?.SymbolPath?.CIRCLE || 0,
    fillColor: "#4285F4",
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
    scale: 10,
  };

  // Custom marker icon for places
  const placeMarkerIcon = {
    path: window.google?.maps?.SymbolPath?.CIRCLE || 0,
    fillColor: "#EA4335",
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
    scale: 8,
  };

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  if (!userLocation) {
    return (
      <div className="map-overlay">
        <div className="map-loading">
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  // Convert radius from km to meters
  const radiusInMeters = radius * 1000;

  return (
    <div className="map-overlay">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={14}
          onLoad={onLoad}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          {/* User location marker */}
          <Marker
            position={userLocation}
            icon={userMarkerIcon}
            title="Your location"
          />

          {/* Radius circle */}
          <Circle
            center={userLocation}
            radius={radiusInMeters}
            options={circleOptions}
          />

          {/* Place markers */}
          {places.map((place) => {
            if (!place.location) return null;
            return (
              <Marker
                key={place.id}
                position={place.location}
                icon={placeMarkerIcon}
                title={place.title}
                onClick={() => onPlaceClick(place)}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>

      {/* Compass indicator for mobile directional mode */}
      {nearbyModeType === "directional" && deviceHeading !== null && (
        <div className="compass-indicator">
          <Compass
            size={32}
            style={{
              transform: `rotate(${deviceHeading}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      )}

      {/* Map attribution */}
      <div className="map-attribution">
        Map data provided by Google © 2026
      </div>
    </div>
  );
};

MapOverlay.propTypes = {
  userLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
  radius: PropTypes.number,
  deviceHeading: PropTypes.number,
  nearbyModeType: PropTypes.oneOf(["radius", "directional"]),
  onPlaceClick: PropTypes.func.isRequired,
};

export default MapOverlay;
