import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./NearbyMap.css";

// Fix default marker icon issue with Leaflet
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

export default function NearbyMap({
  userLocation,
  nearbyPlaces,
  deviceHeading,
  radius,
  modeType,
  onPlaceClick,
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const circleRef = useRef(null);
  const coneRef = useRef(null);
  const userMarkerRef = useRef(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const defaultCenter = [13.0827, 80.2707]; // Chennai center
    const center = userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter;

    // Create map
    const map = L.map(mapContainerRef.current, {
      center: center,
      zoom: 13,
      zoomControl: true,
    });

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update map center when user location changes
  useEffect(() => {
    if (!mapRef.current || !userLocation) return;
    mapRef.current.setView([userLocation.lat, userLocation.lng], 13);
  }, [userLocation]);

  // Update user marker
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old user marker
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
    }

    // Add new user marker
    if (userLocation) {
      const marker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .bindPopup("Your Location")
        .addTo(mapRef.current);
      userMarkerRef.current = marker;
    }
  }, [userLocation]);

  // Update radius circle
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old circle
    if (circleRef.current) {
      mapRef.current.removeLayer(circleRef.current);
      circleRef.current = null;
    }

    // Add new circle
    if (userLocation) {
      const circle = L.circle([userLocation.lat, userLocation.lng], {
        radius: radius * 1000, // Convert km to meters
        color: "#6f42c1",
        fillColor: "#6f42c1",
        fillOpacity: 0.05,
        weight: 2,
      }).addTo(mapRef.current);
      circleRef.current = circle;
    }
  }, [userLocation, radius]);

  // Update directional cone
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old cone
    if (coneRef.current) {
      mapRef.current.removeLayer(coneRef.current);
      coneRef.current = null;
    }

    // Add new cone for directional mode
    if (modeType === "directional" && userLocation && deviceHeading !== null) {
      const points = [];
      points.push([userLocation.lat, userLocation.lng]); // Start at user location

      const coneAngle = 45;
      const startAngle = deviceHeading - coneAngle;
      const endAngle = deviceHeading + coneAngle;
      const steps = 20;

      for (let i = 0; i <= steps; i++) {
        const angle = startAngle + (endAngle - startAngle) * (i / steps);
        const radians = (angle * Math.PI) / 180;

        // Calculate point at radius distance in this direction
        const lat = userLocation.lat + (radius / 111) * Math.cos(radians);
        const lng =
          userLocation.lng +
          (radius / (111 * Math.cos((userLocation.lat * Math.PI) / 180))) * Math.sin(radians);

        points.push([lat, lng]);
      }

      points.push([userLocation.lat, userLocation.lng]); // Close the cone

      const cone = L.polygon(points, {
        color: "#6f42c1",
        fillColor: "#6f42c1",
        fillOpacity: 0.1,
        weight: 2,
      }).addTo(mapRef.current);
      coneRef.current = cone;
    }
  }, [userLocation, deviceHeading, radius, modeType]);

  // Update place markers
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    markersRef.current.forEach((marker) => {
      mapRef.current.removeLayer(marker);
    });
    markersRef.current = [];

    // Add new markers
    nearbyPlaces.forEach((place) => {
      if (!place.coordinates) return;

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon: placeIcon })
        .bindPopup(
          `
          <div class="map-popup">
            <h6>${place.title}</h6>
            <p class="mb-1">${place.category}</p>
            <p class="mb-1">${place.location}</p>
            <p class="mb-0">⭐ ${place.rating}</p>
            ${
              place.distance !== undefined
                ? `<p class="mb-0 text-muted">
                ${
                  place.distance < 1
                    ? `${(place.distance * 1000).toFixed(0)}m away`
                    : `${place.distance.toFixed(1)}km away`
                }
              </p>`
                : ""
            }
          </div>
        `
        )
        .on("click", () => {
          onPlaceClick(place);
        })
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, [nearbyPlaces, onPlaceClick]);

  return (
    <div className="nearby-map-container">
      <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
}
