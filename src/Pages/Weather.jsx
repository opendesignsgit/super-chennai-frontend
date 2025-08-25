import React, { useEffect, useState } from "react";

const SimpleWeather = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch("https://wttr.in/Chennai?format=3") // e.g., Chennai: 29°C, Clear
      .then((res) => res.text())
      .then((text) => setWeather(text))
      .catch((err) => setWeather("Failed to load weather"));
  }, []);

  return (
    <div className="bg-blue-100 text-black p-4 rounded weather-widget">
      <h3 className="font-bold mb-2">🌤 Live Weather</h3>
      <p>{weather}</p>
    </div>
  );
};

export default SimpleWeather;
