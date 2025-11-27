
import { useEffect, useState } from "react";

export default function useDevice(breakpoints = { mobile: 640, tablet: 1024 }) {
const [device, setDevice] = useState("desktop");

useEffect(() => {
const checkDevice = () => {
if (typeof window === "undefined") return;
const width = window.innerWidth;
if (width < breakpoints.mobile) setDevice("mobile");
else if (width < breakpoints.tablet) setDevice("tablet");
else setDevice("desktop");
};


checkDevice();
window.addEventListener("resize", checkDevice);
return () => window.removeEventListener("resize", checkDevice);


}, [breakpoints]);

return device; 
}