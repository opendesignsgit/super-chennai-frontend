import { API_BASE_URL } from "../../../../config";

/* ==============================
   ARTICLE API SERVICES
============================== */

export const fetchFeaturedArticle = async () => {
  const res = await fetch(
    `${API_BASE_URL}/articles?featured=true&limit=1`
  );
  const data = await res.json();
  return data?.docs?.[0] || null;
};

export const fetchArticles = async (page = 1, limit = 9) => {
  const res = await fetch(
    `${API_BASE_URL}/articles?page=${page}&limit=${limit}`
  );
  return res.json();
};
