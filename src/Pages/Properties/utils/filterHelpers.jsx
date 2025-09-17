/**
 * Toggles a value in an array (used for checkbox filters)
 * @param {Array} currentValues - current selected values
 * @param {any} value - value to toggle
 * @returns {Array} updated array
 */
export const toggleArrayValue = (currentValues, value) => {
  const set = new Set(currentValues);
  if (set.has(value)) set.delete(value);
  else set.add(value);
  return Array.from(set);
};
