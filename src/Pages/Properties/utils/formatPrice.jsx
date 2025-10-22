// utils/formatPrice.js
export const formatPrice = (value) => {
  if (!value || isNaN(value)) return "Price on Request";

  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(2)} Cr`; // Crore (exact, 2 decimals)
  } else if (value >= 100000) {
    return `${(value / 100000).toFixed(2)} L`; // Lakh (exact, 2 decimals)
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)} K`; // Thousand (exact, 2 decimals)
  } else {
    return value.toString();
  }
};
