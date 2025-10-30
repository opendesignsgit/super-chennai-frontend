import axios from "axios";
import { mapSortToApi } from "../utils/sortHelpers";
import { API_BASE_URL } from "../config"


const API_URL = `${API_BASE_URL}/api`


export const fetchProperties = async (filters = {}, sortBy = "") => {
  
  const params = { limit: 0 };

  // Budget
  // if (filters.minBudget != null) {
  //   params["where[price][greater_than_equal]"] = filters.minBudget;
  // }
  // if (filters.maxBudget != null) {
  //   params["where[price][less_than_equal]"] = filters.maxBudget;
  // }

  // Locations (relationship)
  if (filters.locations?.length) {
    params["where[location][in]"] = filters.locations.join(",");
  }

  if (filters.bhk?.length) {
    params["where[bhk.value][in]"] = filters.bhk.join(",");
  }
  // Purpose (sale / rent / lease)
  if (filters.purpose?.length) {
    params["where[purpose][in]"] = filters.purpose.join(",");
  }

  // Property Type (relationship)
  if (filters.propertyTypes?.length) {
    params["where[propertyType.value][in]"] = filters.propertyTypes.join(",");
  }

  if (filters.furnishing?.length) {
    params["where[furnishing][in]"] = filters.furnishing.join(",");
  }

  if (filters.possessionStatus?.length) {
    params["where[society.possessionStatus][in]"] =
      filters.possessionStatus.join(",");
  }

  if (filters.ownership?.length) {
    params["where[ownership][in]"] = filters.ownership.join(",");
  }

  // DIMENTIONAL ###
  if (filters.plotDimensions) {
    const { length, width } = filters.plotDimensions;
    if (length) params["where[dimensions.length][greater_than_equal]"] = length;
    if (width) params["where[dimensions.width][greater_than_equal]"] = width;
  }

  if (filters.bathroomFeatures) {
    if (filters.bathroomFeatures.jacuzzi) {
      params["where[bathroomFeatures.jacuzzi][equals]"] = true;
    }
    if (filters.bathroomFeatures.bathtubs) {
      params["where[bathroomFeatures.bathtubs][greater_than_equal]"] = 1;
    }
    if (filters.bathroomFeatures.heatedFlooring) {
      params["where[bathroomFeatures.heatedFlooring][equals]"] = true;
    }
  }

  if (filters.facing?.length) {
    params["where[facing][in]"] = filters.facing.join(",");
  }

  // PARKING outer
  if (filters.parking?.length) {
    filters.parking.forEach((p) => {
      switch (p) {
        case "coveredParking":
          params["where[parkingOutdoor.coveredParking][greater_than_equal]"] =
            1;
          break;
        case "openParking":
          params["where[parkingOutdoor.openParking][greater_than_equal]"] = 1;
          break;
        case "visitorParking":
          params["where[parkingOutdoor.visitorParking][equals]"] = true;
          break;
        case "evCharging":
          params["where[parkingOutdoor.evCharging][equals]"] = true;
          break;
        default:
          break;
      }
    });
  }

  // AMNETIES ###

  if (filters.amenities?.length) {
    filters.amenities.forEach((a) => {
      switch (a) {
        case "elevator":
          params["where[buildingAmenities.elevator][equals]"] = true;
          break;
        case "security":
          params["where[buildingAmenities.security][equals]"] = true;
          break;
        case "swimmingpool":
          params["where[buildingAmenities.swimmingPool][equals]"] = true;
          break;
        case "gym":
          params["where[buildingAmenities.gym][equals]"] = true;
          break;
        case "playarea":
          params["where[buildingAmenities.playArea][equals]"] = true;
          break;
        case "clubhouse":
          params["where[buildingAmenities.clubhouse][equals]"] = true;
          break;
        case "garden":
          params["where[buildingAmenities.garden][equals]"] = true;
          break;
        case "intercom":
          params["where[buildingAmenities.intercom][equals]"] = true;
          break;
        case "firesafety":
          params["where[buildingAmenities.fireSafety][equals]"] = true;
          break;
        default:
          break;
      }
    });
  }

  // APLLIENYCES
  if (filters.appliances?.length) {
    filters.appliances.forEach((a) => {
      switch (a) {
        case "acunits":
          params["where[appliances.acUnits][greater_than_equal]"] = 1;
          break;
        case "fridge":
          params["where[appliances.fridgeCount][greater_than_equal]"] = 1;
          break;
        case "washingmachine":
          params["where[appliances.washingMachine][equals]"] = true;
          break;
        case "dishwasher":
          params["where[appliances.dishwasher][equals]"] = true;
          break;
        case "microwave":
          params["where[appliances.microwaveCount][greater_than_equal]"] = 1;
          break;
        case "tv":
          params["where[appliances.tvCount][greater_than_equal]"] = 1;
          break;
        case "geyser":
          params["where[appliances.geyserCount][greater_than_equal]"] = 1;
          break;
        case "powerbackup":
          params["where[appliances.powerBackup][equals]"] = true;
          break;
        case "solar":
          params["where[appliances.solar][equals]"] = true;
          break;
        case "waterpurifier":
          params["where[appliances.waterPurifier][greater_than_equal]"] = 1;
          break;
        default:
          break;
      }
    });
  }

  // AGE OF PROPRTY
  if (filters.ageOfProperty) {
    params["where[ageOfProperty][equals]"] = filters.ageOfProperty;
  }

  if (filters.interiors?.length) {
    filters.interiors.forEach((i) => {
      switch (i) {
        case "modularkitchen":
          params["where[interiors.modularKitchen][equals]"] = true;
          break;
        case "wardrobes":
          params["where[interiors.wardrobes][greater_than_equal]"] = 1;
          break;
        case "falseceiling":
          params["where[interiors.falseCeiling][equals]"] = true;
          break;
        case "decorativelighting":
          params["where[interiors.decorativeLighting][equals]"] = true;
          break;
        case "curtainsblinds":
          params["where[interiors.curtainsBlinds][equals]"] = true;
          break;
        case "woodenflooring":
          params["where[interiors.woodenFlooring][equals]"] = true;
          break;
        case "wallpaper":
          params["where[interiors.wallpaper][equals]"] = true;
          break;
        case "poojaroom":
          params["where[interiors.poojaRoom][equals]"] = true;
          break;
        case "studyroom":
          params["where[interiors.studyRoom][equals]"] = true;
          break;
        default:
          break;
      }
    });
  }

  // Sorting
  const apiSort = mapSortToApi(sortBy);
  if (apiSort) params["sort"] = apiSort;

  const { data } = await axios.get(`${API_URL}/properties`, { params });

  // return data.docs || [];
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
  // const { data } = await axios.get(`${API_URL}/locations`);
  const { data } = await axios.get(`${API_URL}/locations`, {
    params: { limit: 0 }, 
  });
  return data.docs || [];
};

// FILTER DATA FETEC
export const fetchPropertyTypes = async () => {
  // const { data } = await axios.get(`${API_URL}/propertyTypes`);
   const { data } = await axios.get(`${API_URL}/propertyTypes`, {
    params: { limit: 0 },
  });
  return data.docs || [];
};

// Fetch BHK Options (make sure you have a collection or enum for this in Payload)
export const fetchBhkOptions = async () => {
  // const { data } = await axios.get(`${API_URL}/bhkTypes`);
  const { data } = await axios.get(`${API_URL}/bhkTypes`, {
    params: { limit: 0 },
  });
  return data.docs || [];
};
