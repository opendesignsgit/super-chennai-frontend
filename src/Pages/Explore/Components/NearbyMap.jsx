import { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, Circle } from "@react-google-maps/api";
import { getLocationCoordinates, CHENNAI_CENTER } from "../utils/helpers";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

export default function NearbyMap({
  userLocation,
  places,
  onPlaceClick,
  deviceHeading,
  radius,
  nearbyModeType,
}) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Check if API key is configured
  if (!apiKey) {
    return (
      <div className="map-error">
        <p>Google Maps API key not configured.</p>
        <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
          Please add <code>VITE_GOOGLE_MAPS_API_KEY</code> to your .env file.
        </p>
      </div>
    );
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const mapRef = useRef(null);

  const center = userLocation || CHENNAI_CENTER;

  // Calculate zoom level based on radius to fit the circle in view
  const getZoomForRadius = (radiusInMeters) => {
    // Approximate zoom levels for different radii
    // These values ensure the radius circle fits comfortably in the viewport
    if (radiusInMeters <= 500) return 15;
    if (radiusInMeters <= 1000) return 14;
    if (radiusInMeters <= 2000) return 13;
    if (radiusInMeters <= 5000) return 12;
    return 11;
  };

  const zoomLevel = getZoomForRadius(radius);

  // Update map center and zoom when user location or radius changes
  useEffect(() => {
    if (mapRef.current && userLocation) {
      // Pan to user location
      mapRef.current.panTo(userLocation);
      
      // Set appropriate zoom level
      mapRef.current.setZoom(zoomLevel);
      
      // Fit bounds to show the entire radius circle with some padding
      const bounds = new window.google.maps.LatLngBounds();
      const center = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
      
      // Calculate points on the circle boundary (north, south, east, west)
      const latOffset = (radius / 111320); // 1 degree latitude ≈ 111.32 km
      const lngOffset = (radius / (111320 * Math.cos(userLocation.lat * Math.PI / 180)));
      
      bounds.extend(new window.google.maps.LatLng(userLocation.lat + latOffset, userLocation.lng));
      bounds.extend(new window.google.maps.LatLng(userLocation.lat - latOffset, userLocation.lng));
      bounds.extend(new window.google.maps.LatLng(userLocation.lat, userLocation.lng + lngOffset));
      bounds.extend(new window.google.maps.LatLng(userLocation.lat, userLocation.lng - lngOffset));
      
      // Fit bounds with padding
      mapRef.current.fitBounds(bounds, {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      });
    }
  }, [userLocation, radius, zoomLevel]);

  const onMapLoad = (map) => {
    mapRef.current = map;
    
    // Set initial zoom level
    if (userLocation) {
      map.setZoom(zoomLevel);
    }
  };

  if (loadError) {
    return <div className="map-error">Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="map-loading">Loading map...</div>;
  }

  // Get marker icon based on place category
  const getMarkerIcon = (category) => {
    const iconMap = {
      cafe: "☕",
      restaurant: "🍽️",
      temple: "🛕",
      beach: "🏖️",
      mall: "🛍️",
      park: "🌳",
      museum: "🏛️",
      hotel: "🏨",
      coworking: "💼",
      gym: "💪",
      hospital: "🏥",
      school: "🏫",
    };
    return iconMap[category] || "📍";
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={zoomLevel}
      center={center}
      onLoad={onMapLoad}
      options={{
        disableDefaultUI: false,
        zoomControl: false, // Disable zoom controls
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
        gestureHandling: 'none', // Disable all gestures including zoom
        scrollwheel: false, // Disable zoom with scroll wheel
        disableDoubleClickZoom: true, // Disable zoom on double click
      }}
    >
      {/* User location marker */}
      {userLocation && (
        <>
          <Marker
            position={userLocation}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#4285F4",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            }}
            title="You are here"
          />
          
          {/* Radius circle */}
          <Circle
            center={userLocation}
            radius={radius}
            options={{
              fillColor: "#4285F4",
              fillOpacity: 0.1,
              strokeColor: "#4285F4",
              strokeOpacity: 0.3,
              strokeWeight: 2,
            }}
          />
        </>
      )}

      {/* Place markers */}
      {places.map((place) => {
        const coords = getLocationCoordinates(place.location);
        if (!coords) return null;

        return (
          <Marker
            key={place.id}
            position={coords}
            title={place.title}
            onClick={() => onPlaceClick(place)}
            label={{
              text: getMarkerIcon(place.category),
              fontSize: "20px",
            }}
          />
        );
      })}
    </GoogleMap>
  );
}
