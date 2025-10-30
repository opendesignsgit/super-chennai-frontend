import axios from "axios";
import { API_BASE_URL } from "../../../../config";

const API_URL = `${API_BASE_URL}/api`;

/**
 * ✅ Fetch all events (with optional filters and sorting)
 */
export const fetchEvents = async (filters = {}, sortBy = "") => {
  try {
    const params = { limit: 0 };

    // ✅ Filter by location
    if (filters.locations?.length) {
      params["where[event.details.location][in]"] = filters.locations.join(",");
    }

    // ✅ Filter by category (if applicable)
    if (filters.categories?.length) {
      params["where[event.category][in]"] = filters.categories.join(",");
    }
    

    // ✅ Optional sorting
    if (sortBy) {
      params["sort"] = sortBy;
    }

    const { data } = await axios.get(`${API_URL}/events`, { params });

    // ✅ Return structured pagination + data
    return {
      docs: data?.docs || [],
      totalDocs: data?.totalDocs || 0,
      totalPages: data?.totalPages || 1,
      page: data?.page || 1,
      limit: data?.limit || 10,
      hasNextPage: data?.hasNextPage || false,
      hasPrevPage: data?.hasPrevPage || false,
      nextPage: data?.nextPage || null,
      prevPage: data?.prevPage || null,
    };
  } catch (error) {
    console.error("❌ Error fetching events:", error);
    return {
      docs: [],
      totalDocs: 0,
      totalPages: 1,
      page: 1,
      limit: 10,
    };
  }
};

/**
 * ✅ Fetch a single event by ID
 */
export const fetchEventById = async (id) => {
  if (!id) return null;
  try {
    const { data } = await axios.get(`${API_URL}/events/${id}`);
    return data || null;
  } catch (error) {
    console.error("❌ Error fetching event by ID:", error);
    return null;
  }
};

/**
 * ✅ Fetch a single event by slug
 */
export const fetchEventBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const { data } = await axios.get(`${API_URL}/events`, {
      params: { "where[slug][equals]": slug },
    });

    // ✅ Always return the first document
    return data?.docs?.[0] || null;
  } catch (error) {
    console.error("❌ Error fetching event by slug:", error);
    return null;
  }
};

/**
 * ✅ Fetch all event locations
 */
export const fetchEventLocations = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/locations`, {
      params: { limit: 0 },
    });
    return data?.docs || [];
  } catch (error) {
    console.error("❌ Error fetching event locations:", error);
    return [];
  }
};

/**
 * ✅ Fetch all event categories
 */
export const fetchEventCategories = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/eventsCategories`, {
      params: { limit: 0 },
    });
    return data?.docs || [];
  } catch (error) {
    console.error("❌ Error fetching event eventsCategories:", error);
    return [];
  }
};