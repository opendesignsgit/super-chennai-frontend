import axios from "axios";
import { mapSortToApi } from "../utils/sortHelpers";

//   const API_URL =
// window.location.hostname === "localhost"
//   ? "http://localhost:3000/api"
//   : "https://demo.superchennai.com/api";

const API_URL = "https://demo.superchennai.com/api";

export const fetchProperties = async (filters = {}, sortBy = "") => {
  const params = {};

  // Budget
  if (filters.minBudget != null) {
    params["where[price][greater_than_equal]"] = filters.minBudget;
  }
  if (filters.maxBudget != null) {
    params["where[price][less_than_equal]"] = filters.maxBudget;
  }

  // Locations (relationship)
  if (filters.locations?.length) {
    params["where[location][in]"] = filters.locations.join(",");
  }

  // BHK (relationship)
  if (filters.bhk?.length) {
    params["where[bhk][in]"] = filters.bhk.join(",");
  }

  // Property Type (relationship)
  if (filters.propertyTypes?.length) {
    params["where[propertyType][in]"] = filters.propertyTypes.join(",");
  }

  // Sorting
  const apiSort = mapSortToApi(sortBy);
  if (apiSort) params["sort"] = apiSort;

  const { data } = await axios.get(`${API_URL}/properties`, { params });

  return data.docs || [];
};

export const fetchPropertyById = async (id) => {
  if (!id) return null;
  const { data } = await axios.get(`${API_URL}/properties/${id}`);
  return data || null;
};

export const fetchPropertyBySlug = async (slug) => {
  if (!slug) return null;

  const { data } = await axios.get(`${API_URL}/properties`, {
    params: {
      "where[slug][equals]": slug,
    },
  });

  return data.docs?.[0] || null;
};


export const fetchLocations = async () => {
  const { data } = await axios.get(`${API_URL}/locations`);
  return data.docs || [];
};

// FILTER DATA FETEC
export const fetchPropertyTypes = async () => {
  const { data } = await axios.get(`${API_URL}/propertyTypes`);
  return data.docs || [];
};

// Fetch BHK Options (make sure you have a collection or enum for this in Payload)
export const fetchBhkOptions = async () => {
  const { data } = await axios.get(`${API_URL}/bhkTypes`);
  return data.docs || [];
};
