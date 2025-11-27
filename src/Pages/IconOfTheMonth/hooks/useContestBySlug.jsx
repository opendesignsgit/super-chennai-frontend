import { useEffect, useState } from "react";
import { getIconOfMonthBySlug } from "../Services/superchennaiContest";

export const useIconBySlug = (slug) => {
  const [IconOfMonthData, setIcon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const data = await getIconOfMonthBySlug(slug);
      setIcon(data);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  return { IconOfMonthData, loading };
};
