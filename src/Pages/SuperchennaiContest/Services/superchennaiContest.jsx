import axios from "axios";
import { API_BASE_URL } from "../../../../config";

export const getContests = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/superchennaiContests`);
    return res.data?.docs || [];
  } catch (err) {
    console.error("Error fetching contests:", err);
    return [];
  }
};

// export const getContestBySlug = async (slug) => {
//   try {
//     const res = await axios.get(`${API_BASE_URL}/api/superchennaiContests/${slug}`);
//     return res.data || null;
//   } catch (err) {
//     console.error("Error fetching contest:", err);
//     return null;
//   }
// };

export const getContestBySlug = async (slug) => {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/api/superchennaiContests`,
      {
        params: {
          'where[slug][equals]': slug
        }
      }
    );

    return res.data?.docs?.[0] || null;
  } catch (err) {
    console.error("Error fetching contest:", err);
    return null;
  }
};

