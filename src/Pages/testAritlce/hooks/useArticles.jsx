import { useEffect, useState } from "react";
import { fetchArticles, fetchFeaturedArticle } from "../services/articleApi";
import {  fetchArticleBySlug } from "../services/articleApi";


const extractAds = (article) => {
  const blocks = article?.content?.root?.children || [];

  return blocks
    .filter((b) => b.type === "block" && b.fields?.blockType === "adBlock")
    .map((b) => ({
      position: b.fields.position, // left | right | inline
      ads: b.fields.ads || [],
    }));
};

export const useArticles = (page) => {
  const [featured, setFeatured] = useState(null);
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const [feat, list] = await Promise.all([
        fetchFeaturedArticle(),
        fetchArticles(page),
      ]);

      setFeatured(feat);
      setArticles(list?.docs || []);
      setTotalPages(list?.totalPages || 1);

      const extractedAds = feat ? extractAds(feat) : [];
      setAds(extractedAds);

      setLoading(false);
    };

    loadData();
  }, [page]);

  return {
    featured,
    articles,
    ads,
    totalPages,
    loading,
  };
};

export const useArticleBySlug = (slug) => {

  const [article, setArticle] = useState(null);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
    console.log("api use rece",article)
  useEffect(() => {
    if (!slug) return;

    const loadArticle = async () => {
      setLoading(true);

      try {
        const data = await fetchArticleBySlug(slug);

        setArticle(data);

        // extract ads from content blocks
        const extractedAds = data ? extractAds(data) : [];
        setAds(extractedAds);
      } catch (error) {
        console.error("Error fetching article by slug:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  return {
    article,
    ads,
    loading,
  };
};





