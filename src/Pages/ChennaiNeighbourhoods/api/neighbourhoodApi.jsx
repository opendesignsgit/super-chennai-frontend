import axios from "axios"
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

const API = axios.create({
  baseURL: `${API_BASE_URL_API_TEST_DEV}/api`,
});



export const getNeighbourhood = (params) =>
  API.get("/neighbourhood", { params })


export const getCategories = () =>
  API.get("/neighbourhood-categories")

export const getLocations = () =>
  API.get("/chennaiNeighbourhoodlocations")