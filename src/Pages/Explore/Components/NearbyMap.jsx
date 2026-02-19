import { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, Circle } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 13.0827,
  lng: 80.2707,
};

export default function NearbyMap({
  userLocation,
  places,
  onPlaceClick,
  deviceHeading,
  radius,
  nearbyModeType,
}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE",
  });

  const mapRef = useRef(null);

  const center = userLocation || defaultCenter;

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

  // Mock coordinates for places (using location names)
  const getMockCoordinates = (locationName) => {
    const locationCoords = {
      nungambakkam: { lat: 13.0569, lng: 80.2426 },
      adyar: { lat: 13.0067, lng: 80.2572 },
      "t nagar": { lat: 13.0418, lng: 80.2341 },
      mylapore: { lat: 13.0339, lng: 80.2669 },
      "anna nagar": { lat: 13.0850, lng: 80.2101 },
      velachery: { lat: 12.9750, lng: 80.2210 },
      tambaram: { lat: 12.9226, lng: 80.1196 },
      guindy: { lat: 13.0067, lng: 80.2206 },
      porur: { lat: 13.0381, lng: 80.1570 },
      egmore: { lat: 13.0732, lng: 80.2609 },
      triplicane: { lat: 13.0545, lng: 80.2780 },
      "besant nagar": { lat: 13.0010, lng: 80.2669 },
      alwarpet: { lat: 13.0339, lng: 80.2530 },
      kodambakkam: { lat: 13.0515, lng: 80.2254 },
      saidapet: { lat: 13.0213, lng: 80.2231 },
      vadapalani: { lat: 13.0504, lng: 80.2121 },
      "ashok nagar": { lat: 13.0354, lng: 80.2093 },
      "kk nagar": { lat: 13.0285, lng: 80.2028 },
      perungudi: { lat: 12.9611, lng: 80.2425 },
      sholinganallur: { lat: 12.9008, lng: 80.2272 },
      omr: { lat: 12.9516, lng: 80.2201 },
      ecr: { lat: 12.8497, lng: 80.2445 },
      royapettah: { lat: 13.0569, lng: 80.2662 },
      teynampet: { lat: 13.0389, lng: 80.2480 },
      mandaveli: { lat: 13.0223, lng: 80.2596 },
      "west mambalam": { lat: 13.0313, lng: 80.2283 },
      chrompet: { lat: 12.9519, lng: 80.1420 },
      "st thomas mount": { lat: 13.0006, lng: 80.2020 },
      pallavaram: { lat: 12.9675, lng: 80.1491 },
      marina: { lat: 13.0499, lng: 80.2824 },
      thiruvanmiyur: { lat: 12.9830, lng: 80.2595 },
      palavakkam: { lat: 12.9716, lng: 80.2550 },
      injambakkam: { lat: 12.9119, lng: 80.2478 },
      thoraipakkam: { lat: 12.9380, lng: 80.2340 },
      madipakkam: { lat: 12.9625, lng: 80.1986 },
    };

    return locationCoords[locationName?.toLowerCase()] || null;
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
        const coords = getMockCoordinates(place.location);
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
