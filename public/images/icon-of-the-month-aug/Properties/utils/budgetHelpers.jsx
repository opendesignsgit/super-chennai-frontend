/**
 * Update budget filter
 * @param {Object} filters - current filters object
 * @param {string} type - "minBudget" | "maxBudget"
 * @param {string|number} value - new value
 * @returns {Object} updated filters
 */
export const updateBudget = (filters, type, value) => {
  const numValue = Number(value);
  return { ...filters, [type]: numValue };
};
