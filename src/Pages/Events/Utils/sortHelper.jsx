/**
 * Map sort option to API sort param
 * @param {string} sortBy - "newest" | "oldest" | "upcoming"
 * @returns {string} API sort string
 */
export const mapSortToApi = (sortBy) => {
  switch (sortBy) {
    case "newest":
      return "-createdAt";  // latest first
    case "oldest":
      return "createdAt";   // oldest first
    case "upcoming":
      return "event.eventDates.date"; // sort by earliest event date

    default:
      return "-createdAt"; // fallback sorting
  }
};
