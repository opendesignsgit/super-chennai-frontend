export const formatDateTime = (isoString) => {
  if (!isoString) return { date: "-", time: "-" };

  const dateObj = new Date(isoString);

  const date = dateObj.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const time = dateObj.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return { date, time };
};
