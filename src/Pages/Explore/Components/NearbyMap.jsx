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

  // Update map center when user location changes
  useEffect(() => {
    if (mapRef.current && userLocation) {
      mapRef.current.panTo(userLocation);
    }
  }, [userLocation]);

  const onMapLoad = (map) => {
    mapRef.current = map;
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
      zoom={14}
      center={center}
      onLoad={onMapLoad}
      options={{
        disableDefaultUI: false,
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
