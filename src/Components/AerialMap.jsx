import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 12.9716,
  lng: 77.5946
};

function AerialMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        mapTypeId="satellite" // Arial / Satellite view
      >
        {/* Add markers or overlays here if needed */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(AerialMap);
