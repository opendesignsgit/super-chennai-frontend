// utils/formatPrice.js
export const formatPrice = (value) => {
  if (!value || isNaN(value)) return "Price on Request";

  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(1)} Cr`; // Crore
  } else if (value >= 100000) {
    return `${(value / 100000).toFixed(1)} L`; // Lakh
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)} K`; // Thousand
  } else {
    return value.toString();
  }
};
