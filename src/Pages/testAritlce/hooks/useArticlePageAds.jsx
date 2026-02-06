
import { useEffect, useState } from "react";
import { fetchArticlePageAds } from "../services/adsApi";

export const useArticlePageAds = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAds = async () => {
      setLoading(true);

      try {
        const res = await fetchArticlePageAds();
        setAds(res?.docs || []);
      } catch (err) {
        console.error("Failed to load article ads", err);
      } finally {
        setLoading(false);
      }
    };

    loadAds();
  }, []);

  return {
    ads,
    loading,
  };
};