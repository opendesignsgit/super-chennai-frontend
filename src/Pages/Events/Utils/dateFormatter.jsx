export const formatEventDate = (isoString) => {
  const date = new Date(isoString);
  const options = { month: "long", year: "numeric" };
  const monthYear = date.toLocaleString("en-US", options);     // September - 2025
  const day = date.getDate();                                   // 21
  const weekday = date.toLocaleString("en-US", { weekday: "long" }); // Saturday

  return { monthYear, day, weekday };
};



// MULTI DATE FORMATER ###############

// ✅ Reusable Event Date Formatter Component

export default function FormattedEventDates({ dates = [], className = "" }) {
  if (!Array.isArray(dates) || dates.length === 0) return <span></span>;

  const formattedDates = [...new Set(
    dates
      .map((d) => d.date || d) 
      .sort((a, b) => new Date(a) - new Date(b))
      .map((date) =>
        new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      )
  )].join(" | ");

  return <span className={className}>{formattedDates}</span>;
}

