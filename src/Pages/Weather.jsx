// import React, { useEffect, useState } from "react";

// const SimpleWeather = () => {
//   const [weather, setWeather] = useState("");

//   useEffect(() => {
//     fetch("https://wttr.in/Chennai?format=3") // e.g., Chennai: 29°C, Clear
//       .then((res) => res.text())
//       .then((text) => setWeather(text))
//       .catch((err) => setWeather("Failed to load weather"));
//   }, []);

//   return (
//     <div className="bg-blue-100 text-black p-4 rounded weather-widget">
//       <h3 className="font-bold mb-2">🌤 Live Weather</h3>
//       <p>{weather}</p>
//     </div>
//   );
// };

// export default SimpleWeather;
import React, { useEffect, useState } from "react";

const SimpleWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        const res = await fetch("https://wttr.in/Chennai?format=3", {
          signal: controller.signal,
          headers: {
            "Accept": "text/plain",
          },
        });

        // Check HTTP status
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const text = await res.text();

        // Basic validation (avoid empty or weird responses)
        if (!text || text.length > 100) {
          throw new Error("Invalid weather response");
        }

        setWeather(text.trim());
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to fetch weather data");
          console.error("Weather fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Cleanup (prevents memory leaks)
    return () => controller.abort();
  }, []);

  return (
    <div className="bg-blue-100 text-black p-4 rounded weather-widget">
      <h3 className="font-bold mb-2">🌤 Live Weather</h3>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && <p>{weather}</p>}
    </div>
  );
};

export default SimpleWeather;