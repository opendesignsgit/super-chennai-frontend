/**
 * Map sort option to API sort param
 * @param {string} sortBy - "newest" | "oldest" | "upcoming"
 * @returns {string} API sort string
 */
export const mapSortToApi = (sortBy) => {
  switch (sortBy) {
    case "upcoming":
      return "event.eventDates.date"; // ascending = nearest first

    case "past":
      return "-event.eventDates.date"; // past events DESC (latest past first)
    case "newest":
      return "-createdAt"; // latest added first

    case "oldest":
      return "createdAt"; // oldest added first

    default:
      return "";
  }
};