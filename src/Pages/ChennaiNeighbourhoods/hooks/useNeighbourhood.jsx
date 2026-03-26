// import { useEffect, useState } from "react"

// import { getNeighbourhood } from "../api/neighbourhoodApi";

// export function useNeighbourhood({ location }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!location) return;

//     setLoading(true);

//     getNeighbourhood({
//       "where[locations][equals]": location,
//       depth: 2,
//       limit: 50,
//     })
//       .then((res) => {
//         setData(res.data.docs);
//       })
//       .finally(() => setLoading(false));
//   }, [location]);

//   return { data, loading };
// }

import { useEffect, useState } from "react";
import { getNeighbourhood } from "../api/neighbourhoodApi";

export function useNeighbourhood({ location }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location) return;

    setLoading(true);

    getNeighbourhood({
      "where[locations][equals]": location,
      depth: 2,
      limit: 100,
      sort: "-priorityRank",
    })
      .then((res) => {
        setData(res.data.docs || []);
      })
      .catch(() => {
        setData([]);
      })
      .finally(() => setLoading(false));
  }, [location]);

  return { data, loading };
}