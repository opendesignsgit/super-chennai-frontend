import { useEffect, useState } from "react";
import { getContests } from "../Services/superchennaiContest";

export const useContests = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getContests();
    setContests(data);
    setLoading(false);
  };

  return { contests, loading };
};
