import { useEffect, useState } from "react";
import { getIconOfTheMonth } from "../Services/superchennaiContest";

export const useIconOfTheMonth = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getIconOfTheMonth();
    setItems(data);
    setLoading(false);
  };

  return { items, loading };
};
