import { useState, useEffect } from "react";

/**
 * Custom hook to detect device orientation and heading
 * Returns heading in degrees (0-360) where 0 is North
 */
export const useDeviceOrientation = (isActive) => {
  const [heading, setHeading] = useState(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    // Check if DeviceOrientationEvent is supported
    if (typeof DeviceOrientationEvent !== "undefined") {
      // Check for iOS 13+ permission requirement
      if (
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              setIsSupported(true);
            }
          })
          .catch(console.error);
      } else {
        // Non-iOS or older iOS
        setIsSupported(true);
      }
    }

    const handleOrientation = (event) => {
      // Get compass heading
      // event.alpha is the rotation around z-axis (0-360)
      // event.webkitCompassHeading is iOS specific
      let compassHeading = event.webkitCompassHeading || event.alpha;

      if (compassHeading !== null && compassHeading !== undefined) {
        // Normalize to 0-360
        compassHeading = compassHeading % 360;
        if (compassHeading < 0) compassHeading += 360;
        setHeading(compassHeading);
      }
    };

    if (isSupported && isActive) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, [isActive, isSupported]);

  return { heading, isSupported };
};
