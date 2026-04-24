import { API_BASE_URL } from "../../../../config";

export const fetchFeaturedArticle = async () => {
  const res = await fetch(`${API_BASE_URL}/api/articles?featured=true&limit=1`);
  const data = await res.json();
  return data.docs?.[0];
};

export const fetchArticles = async (page = 1, limit = 9) => {
  const res = await fetch(`${API_BASE_URL}/api/articles?page=${page}&limit=${limit}`);
  return res.json();
};


// export const fetchArticleBySlug = async (slug) => {
//   try {
//     const res = await fetch(
//       `${API_BASE_URL}/api/articles?where[slug][equals]=${slug}&depth=3`,
//     );

//     const data = await res.json();
//     return data?.docs?.[0] || null;

    

//   } catch (error) {
//     console.error("Error fetching article by slug:", error);
//     return null;
//   }
// };


export const fetchArticleBySlug = async (slug) => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/articles?where[slug][equals]=${slug}&depth=3`,
    );

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();

    const article = data?.docs?.[0] || null;

    // 🔥 DEBUG (check mobileSettings)
    console.log("FULL ARTICLE RESPONSE:", article);

    return article;

  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return null;
  }
};