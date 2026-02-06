import { API_BASE_URL } from "../../../../config";

export const fetchArticlePageAds = async () => {
  const params = new URLSearchParams({
    "where[showOnArticles][equals]": "true",
    "where[Adsstatus][equals]": "active",
    "sort": "showPriority",
  });

  const res = await fetch(`${API_BASE_URL}/api/ads?${params.toString()}`);
  return res.json();
};
