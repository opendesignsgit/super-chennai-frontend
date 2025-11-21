import axios from "axios";
import { API_BASE_URL } from "../../../../../config";

export const getRestaurants = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/visitDetails`);
    return res.data?.docs || [];
  } catch (error) {
    console.error("Failed to fetch restaurants", error);
    return [];
  }
};
