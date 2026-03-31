// import { useEffect, useState } from "react"
// import { getLocations } from "../api/neighbourhoodApi"

// export function useLocations() {
//   const [locations, setLocations] = useState([])

//   useEffect(() => {
//     getLocations().then(res =>
//       setLocations(res.data.docs)
//     )
//   }, [])

//   return locations
// }

import { useEffect, useState } from "react";
import { getLocations } from "../api/neighbourhoodApi";

export function useLocations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchLocations() {
      try {
        const res = await getLocations();

        if (!mounted) return;

        setLocations(res?.data?.docs || []);
      } catch (err) {
        console.error("Locations API error:", err);
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchLocations();

    return () => {
      mounted = false;
    };
  }, []);

  return { locations, loading, error };
}