import { useEffect, useState } from "react";
import { getNeighbourhood } from "../api/neighbourhoodApi";

export function useAllNeighbourhood() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getNeighbourhood({
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
  }, []);

  return { data, loading };
}