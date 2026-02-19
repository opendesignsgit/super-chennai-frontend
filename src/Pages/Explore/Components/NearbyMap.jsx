import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./NearbyMap.css";

// Fix default marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom user location marker
const userIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom place marker
const placeIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to update map view
function MapUpdater({ center, zoom }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  
  return null;
}

// Component to draw directional cone
function DirectionalCone({ userLocation, deviceHeading, radius, coneAngle = 45 }) {
  const map = useMap();
  const coneRef = useRef(null);
  
  useEffect(() => {
    if (!userLocation || deviceHeading === null) {
      if (coneRef.current) {
        map.removeLayer(coneRef.current);
        coneRef.current = null;
      }
      return;
    }
    
    // Remove previous cone
    if (coneRef.current) {
      map.removeLayer(coneRef.current);
    }
    
    // Calculate cone points
    const points = [];
    points.push([userLocation.lat, userLocation.lng]); // Start at user location
    
    // Generate arc points for the cone
    const startAngle = deviceHeading - coneAngle;
    const endAngle = deviceHeading + coneAngle;
    const steps = 20;
    
    for (let i = 0; i <= steps; i++) {
      const angle = startAngle + (endAngle - startAngle) * (i / steps);
      const radians = (angle * Math.PI) / 180;
      
      // Calculate point at radius distance in this direction
      const lat = userLocation.lat + (radius / 111) * Math.cos(radians);
      const lng = userLocation.lng + (radius / (111 * Math.cos(userLocation.lat * Math.PI / 180))) * Math.sin(radians);
      
      points.push([lat, lng]);
    }
    
    points.push([userLocation.lat, userLocation.lng]); // Close the cone
    
    // Draw cone polygon
    coneRef.current = L.polygon(points, {
      color: "#6f42c1",
      fillColor: "#6f42c1",
      fillOpacity: 0.1,
      weight: 2,
    }).addTo(map);
    
    return () => {
      if (coneRef.current) {
        map.removeLayer(coneRef.current);
      }
    };
  }, [userLocation, deviceHeading, radius, coneAngle, map]);
  
  return null;
}

export default function NearbyMap({
  userLocation,
  nearbyPlaces,
  deviceHeading,
  radius,
  modeType,
  onPlaceClick,
}) {
  const defaultCenter = [13.0827, 80.2707]; // Chennai center
  const mapCenter = userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter;
  
  return (
    <div className="nearby-map-container">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapUpdater center={mapCenter} zoom={13} />
        
        {/* User location marker */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
        
        {/* Radius circle */}
        {userLocation && (
          <Circle
            center={[userLocation.lat, userLocation.lng]}
            radius={radius * 1000} // Convert km to meters
            pathOptions={{
              color: "#6f42c1",
              fillColor: "#6f42c1",
              fillOpacity: 0.05,
              weight: 2,
            }}
          />
        )}
        
        {/* Directional cone for mobile */}
        {modeType === "directional" && deviceHeading !== null && (
          <DirectionalCone
            userLocation={userLocation}
            deviceHeading={deviceHeading}
            radius={radius}
            coneAngle={45}
          />
        )}
        
        {/* Place markers */}
        {nearbyPlaces.map((place) => {
          if (!place.coordinates) return null;
          
          return (
            <Marker
              key={place.id}
              position={[place.coordinates.lat, place.coordinates.lng]}
              icon={placeIcon}
              eventHandlers={{
                click: () => onPlaceClick(place),
              }}
            >
              <Popup>
                <div className="map-popup">
                  <h6>{place.title}</h6>
                  <p className="mb-1">{place.category}</p>
                  <p className="mb-1">{place.location}</p>
                  <p className="mb-0">⭐ {place.rating}</p>
                  {place.distance !== undefined && (
                    <p className="mb-0 text-muted">
                      {place.distance < 1
                        ? `${(place.distance * 1000).toFixed(0)}m away`
                        : `${place.distance.toFixed(1)}km away`}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
