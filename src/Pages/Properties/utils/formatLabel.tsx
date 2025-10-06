export const formatLabel = (val: { toString: () => string; }) => {
  if (!val) return "";

  return val
    .toString()
    .replace(/[_-]/g, " ") // underscores & dashes → spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase → separate words
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim()
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};
