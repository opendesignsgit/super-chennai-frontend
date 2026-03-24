import axios from "axios"

const API = axios.create({
  baseURL: "https://dev-cms.superchennai.com/api",
})

export const getNeighbourhood = (params) =>
  API.get("/neighbourhood", { params })

export const getCategories = () =>
  API.get("/neighbourhood-categories")

export const getLocations = () =>
  API.get("/chennaiNeighbourhoodlocations")