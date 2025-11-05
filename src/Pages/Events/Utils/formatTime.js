export const formatEventTime = (dateString) => {
  if (!dateString) return null;

  try {
    return new Date(dateString).toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } catch (error) {
    console.error("Time formatting error:", error);
    return "N/A";
  }
};
