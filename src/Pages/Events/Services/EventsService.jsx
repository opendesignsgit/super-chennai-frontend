
import axios from "axios";
import { API_BASE_URL } from "../../../../config";
import {mapSortToApi} from "../Utils/sortHelper"
const API_URL = `${API_BASE_URL}/api`;

/**
 * ✅ Fetch all events (with optional filters and sorting)
 */

export const fetchEvents = async (filters = {}, sortBy = "upcoming") => {
  try {
    const params = { limit: 0 };

    console.log("🔵 Sending filters to backend:", filters);

    // =========================
    // 🎯 CATEGORY FILTER
    // =========================
    if (filters.categories?.length) {
      params["where[event.eventsCategory.id][in]"] =
        filters.categories.join(",");
    }

    // =========================
    // 🎯 LANGUAGE FILTER
    // =========================
    if (filters.languages?.length) {
      // Adjust "language" field to your actual schema key
      params["where[event.details.language][in]"] = filters.languages.join(",");
    }

    // =========================
    // ✅ DATE FILTER FOR MULTI-DATE EVENTS
    // =========================
    if (
      filters.date &&
      Array.isArray(filters.date) &&
      filters.date.length > 0
    ) {
      const today = new Date();
      let ranges = [];

      filters.date.forEach((preset) => {
        let start = new Date();
        let end = new Date();

        if (preset === "Today") {
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
        }

        if (preset === "Tomorrow") {
          start.setDate(start.getDate() + 1);
          start.setHours(0, 0, 0, 0);

          end = new Date(start);
          end.setHours(23, 59, 59, 999);
        }

        if (preset === "This Weekend") {
          const day = today.getDay();
          const saturday = new Date(today);
          saturday.setDate(today.getDate() + ((6 - day + 7) % 7));
          saturday.setHours(0, 0, 0, 0);

          const sunday = new Date(saturday);
          sunday.setDate(saturday.getDate() + 1);
          sunday.setHours(23, 59, 59, 999);

          start = saturday;
          end = sunday;
        }

        ranges.push({ start, end });
      });

      params["where[or]"] = ranges.map((r) => ({
        "event.eventDates.date": {
          greater_than_equal: r.start.toISOString(),
          less_than_equal: r.end.toISOString(),
        },
      }));
    }

    // =========================
    // 🎯 CUSTOM DATE RANGE FILTER
    // =========================

    if (filters.startDate && filters.endDate) {
      const start = new Date(filters.startDate);
      const end = new Date(filters.endDate);
      end.setHours(23, 59, 59, 999);

      params["where[event.eventDates.date][greater_than_equal]"] =
        start.toISOString();
      params["where[event.eventDates.date][less_than_equal]"] =
        end.toISOString();
    }

    // =========================
    // 🎯 LOCATION FILTER
    // =========================
    if (filters.locations?.length) {
      params["where[event.details.location][in]"] = filters.locations.join(",");
    }

    // =========================
    // 🎯 PRICE FILTER
    // =========================
    if (filters.price) {
      switch (filters.price) {
        case "Free":
          params["where[event.details.price][equals]"] = 0;
          break;
        case "Under ₹500":
          params["where[event.details.price][lte]"] = 500;
          break;
        case "₹500 - ₹1000":
          params["where[event.details.price][between]"] = "500,1000";
          break;
        default:
          break;
      }
    }

    // =========================
    // 🎯 FREE ENTRY / FAMILY FRIENDLY
    // =========================
    if (filters.freeEntry) {
      params["where[event.details.isFree][equals]"] = true;
    }

    if (filters.familyFriendly) {
      params["where[event.details.familyFriendly][equals]"] = true;
    }

    // =========================
    // 🔄 SORTING OPTIONS
    // =========================
    // Sorting
    const apiSort = mapSortToApi(sortBy);
    if (apiSort) params.sort = apiSort;
    
    if (sortBy === "upcoming") {
      const today = new Date().toISOString();
      params["where[event.eventDates.date][greater_than_equal]"] = today;
    }

    // =========================
    // 📅 OLD EVENTS FILTER
    // =========================

    if (filters.showOldEvents) {
      const today = new Date();
      params["where[event.eventDates.date][less_than]"] = today.toISOString();
    }
    console.log("🛰️ Final params sent to API:", params);
    const { data } = await axios.get(`${API_URL}/events`, { params });
    console.log(" API returned:", data?.docs?.length, "events");

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
    console.error(" Error fetching events:", error);
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

    // ✅ Return first document if found
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

// ################################################################
// ######################### OLD VERSIONS  ########################
// ################################################################

// import axios from "axios";
// import { API_BASE_URL } from "../../../../config";

// const API_URL = `${API_BASE_URL}/api`;

// /**
//  * ✅ Fetch all events (with optional filters and sorting)
//  */
// export const fetchEvents = async (filters = {}, sortBy = "") => {
//   try {
//     const params = { limit: 0 };

//     console.log("🔵 Sending filters to backend:", filters);

//     // =========================
//     // 🎯 CATEGORY FILTER
//     // =========================
//     if (filters.categories?.length) {
//       params["where[event.eventsCategory.id][in]"] =
//         filters.categories.join(",");
//     }

//     // =========================
//     // 🎯 LANGUAGE FILTER
//     // =========================
//     if (filters.languages?.length) {
//       // Adjust "language" field to your actual schema key
//       params["where[event.details.language][in]"] = filters.languages.join(",");
//     }

//     // =========================
//     // ✅ DATE FILTER FOR MULTI-DATE EVENTS
//     // =========================
//     if (
//       filters.date &&
//       Array.isArray(filters.date) &&
//       filters.date.length > 0
//     ) {
//       const today = new Date();
//       let ranges = [];

//       filters.date.forEach((preset) => {
//         let start = new Date();
//         let end = new Date();

//         if (preset === "Today") {
//           start.setHours(0, 0, 0, 0);
//           end.setHours(23, 59, 59, 999);
//         }

//         if (preset === "Tomorrow") {
//           start.setDate(start.getDate() + 1);
//           start.setHours(0, 0, 0, 0);

//           end = new Date(start);
//           end.setHours(23, 59, 59, 999);
//         }

//         if (preset === "This Weekend") {
//           const day = today.getDay();
//           const saturday = new Date(today);
//           saturday.setDate(today.getDate() + ((6 - day + 7) % 7));
//           saturday.setHours(0, 0, 0, 0);

//           const sunday = new Date(saturday);
//           sunday.setDate(saturday.getDate() + 1);
//           sunday.setHours(23, 59, 59, 999);

//           start = saturday;
//           end = sunday;
//         }

//         ranges.push({ start, end });
//       });

//       // ✅ Payload CMS OR filter for eventDates array
//       params["where[or]"] = ranges.map((r) => ({
//         "event.eventDates.date": {
//           greater_than_equal: r.start.toISOString(),
//           less_than_equal: r.end.toISOString(),
//         },
//       }));
//     }

//     // =========================
//     // 🎯 CUSTOM DATE RANGE FILTER
//     // =========================
//     if (filters.startDate && filters.endDate) {
//       const start = new Date(filters.startDate);
//       const end = new Date(filters.endDate);
//       end.setHours(23, 59, 59, 999); 

//       params["where[event.eventDates][greater_than_equal]"] =
//         start.toISOString();
//       params["where[event.eventDates][less_than_equal]"] = end.toISOString();
//     }

//     // =========================
//     // 🎯 LOCATION FILTER
//     // =========================
//     if (filters.locations?.length) {
//       params["where[event.details.location][in]"] = filters.locations.join(",");
//     }

//     // =========================
//     // 🎯 PRICE FILTER
//     // =========================
//     if (filters.price) {
//       switch (filters.price) {
//         case "Free":
//           params["where[event.details.price][equals]"] = 0;
//           break;
//         case "Under ₹500":
//           params["where[event.details.price][lte]"] = 500;
//           break;
//         case "₹500 - ₹1000":
//           params["where[event.details.price][between]"] = "500,1000";
//           break;
//         default:
//           break;
//       }
//     }

//     // =========================
//     // 🎯 DATE FILTER
//     // =========================
//     if (filters.date) {
//       const today = new Date();
//       let start = null;
//       let end = null;

//       if (filters.date === "Today") {
//         start = new Date(today.setHours(0, 0, 0, 0));
//         end = new Date(today.setHours(23, 59, 59, 999));
//       } else if (filters.date === "Tomorrow") {
//         start = new Date();
//         start.setDate(start.getDate() + 1);
//         start.setHours(0, 0, 0, 0);
//         end = new Date(start);
//         end.setHours(23, 59, 59, 999);
//       } else if (filters.date === "This Weekend") {
//         const currentDay = today.getDay();
//         const daysUntilSaturday = 6 - currentDay;
//         start = new Date(today);
//         start.setDate(today.getDate() + daysUntilSaturday);
//         start.setHours(0, 0, 0, 0);

//         end = new Date(start);
//         end.setDate(start.getDate() + 1);
//         end.setHours(23, 59, 59, 999);
//       }

//       if (start && end) {
//         params["where[event.eventDate][greater_than_equal]"] =
//           start.toISOString();
//         params["where[event.eventDate][less_than_equal]"] = end.toISOString();
//       }
//     }

//     // =========================
//     // 🎯 FREE ENTRY / FAMILY FRIENDLY
//     // =========================
//     if (filters.freeEntry) {
//       params["where[event.details.isFree][equals]"] = true;
//     }

//     if (filters.familyFriendly) {
//       params["where[event.details.familyFriendly][equals]"] = true;
//     }

//     // =========================
//     // 🎯 SORTING
//     // =========================
//     if (sortBy) {
//       params["sort"] = sortBy;
//     }

//     // =========================
//     // 📅 OLD EVENTS FILTER
//     // =========================
//     if (filters.showOldEvents) {
//       const today = new Date();
//       params["where[event.eventDate][less_than]"] = today.toISOString();
//     }

//     console.log("🛰️ Final params sent to API:", params);

//     const { data } = await axios.get(`${API_URL}/events`, { params });

//     console.log("✅ API returned:", data?.docs?.length, "events");

//     return {
//       docs: data?.docs || [],
//       totalDocs: data?.totalDocs || 0,
//       totalPages: data?.totalPages || 1,
//       page: data?.page || 1,
//       limit: data?.limit || 10,
//       hasNextPage: data?.hasNextPage || false,
//       hasPrevPage: data?.hasPrevPage || false,
//       nextPage: data?.nextPage || null,
//       prevPage: data?.prevPage || null,
//     };
//   } catch (error) {
//     console.error("❌ Error fetching events:", error);
//     return {
//       docs: [],
//       totalDocs: 0,
//       totalPages: 1,
//       page: 1,
//       limit: 10,
//     };
//   }
// };

// /**
//  * ✅ Fetch a single event by ID
//  */
// export const fetchEventById = async (id) => {
//   if (!id) return null;
//   try {
//     const { data } = await axios.get(`${API_URL}/events/${id}`);
//     return data || null;
//   } catch (error) {
//     console.error("❌ Error fetching event by ID:", error);
//     return null;
//   }
// };


// /**
//  * ✅ Fetch a single event by slug
//  */
// export const fetchEventBySlug = async (slug) => {
//   if (!slug) return null;

//   try {
//     const { data } = await axios.get(`${API_URL}/events`, {
//       params: { "where[slug][equals]": slug },
//     });

//     // ✅ Return first document if found
//     return data?.docs?.[0] || null;
//   } catch (error) {
//     console.error("❌ Error fetching event by slug:", error);
//     return null;
//   }
// };


// /**
//  * ✅ Fetch all event locations
//  */
// export const fetchEventLocations = async () => {
//   try {
//     const { data } = await axios.get(`${API_URL}/locations`, {
//       params: { limit: 0 },
//     });
//     return data?.docs || [];
//   } catch (error) {
//     console.error("❌ Error fetching event locations:", error);
//     return [];
//   }
// };

// /**
//  * ✅ Fetch all event categories
//  */
// export const fetchEventCategories = async () => {
//   try {
//     const { data } = await axios.get(`${API_URL}/eventsCategories`, {
//       params: { limit: 0 },
//     });
//     return data?.docs || [];
//   } catch (error) {
//     console.error("❌ Error fetching event eventsCategories:", error);
//     return [];
//   }
// };