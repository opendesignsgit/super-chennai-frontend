import axios from "axios";
import { API_BASE_URL } from "../../../../config";

export const getIconOfTheMonth = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/iconOfMonth`);
    console.log("datafrom api",res)
    return res.data?.docs || [];
  } catch (err) {
    console.error("Error fetching Icon Of Month list:", err);
    return [];
  }
};

export const getIconOfMonthBySlug = async (slug) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/iconOfMonth`, {
      params: {
        "where[slug][equals]": slug,
      },
    });

    return res.data?.docs?.[0] || null;
  } catch (err) {
    console.error("Error fetching Icon Of Month by slug:", err);
    return null;
  }
};
