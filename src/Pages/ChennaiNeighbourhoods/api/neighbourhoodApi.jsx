import axios from "axios"
import { API_BASE_URL } from "../../../../config";

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});



export const getNeighbourhood = (params) =>
  API.get("/neighbourhood", { params })


export const getCategories = () =>
  API.get("/neighbourhood-categories")

export const getLocations = () =>
  API.get("/chennaiNeighbourhoodlocations")