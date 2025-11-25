import { useEffect, useState } from "react";
import { getContestBySlug } from "../Services/superchennaiContest";

export const useContestBySlug = (slug) => {
  const [contest, setContest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) fetchData(slug);
  }, [slug]);

  const fetchData = async (slug) => {
    const data = await getContestBySlug(slug);
    setContest(data);
    setLoading(false);
  };

  return { contest, loading };
};
