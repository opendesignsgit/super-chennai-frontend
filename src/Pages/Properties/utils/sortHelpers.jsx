/**
 * Map sort option to API sort param
 * @param {string} sortBy - "newest" | "oldest" | "price-asc" | "price-desc"
 * @returns {string} API sort string
 */
export const mapSortToApi = (sortBy) => {
  switch (sortBy) {
    case "newest":
      return "-createdAt";
    case "oldest":
      return "createdAt";
    case "price-asc":
      return "minBudget";
    case "price-desc":
      return "-minBudget";
    default:
      return "";
  }
};
