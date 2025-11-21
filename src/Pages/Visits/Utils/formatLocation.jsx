export const cleanLocationLink = (link = "") => {
  if (!link) return "#";

  // If link contains an iframe embed, extract only the src=""
  const match = link.match(/src="([^"]+)"/);

  if (match && match[1]) {
    return match[1]; // just the Google Maps URL
  }

  return link; // normal link
};
export const formatLocation = (locations = []) => {
  if (!Array.isArray(locations) || locations.length === 0)
    return "No locations";

  return locations
    .map((loc) => {
      const label = loc?.label || "Unknown";
      const cleanLink = cleanLocationLink(loc?.link);

      return `<a href="${cleanLink}" class="text-blue-600 underline" target="_blank" rel="noopener noreferrer">${label}</a>`;
    })
    .join(", ");
};

