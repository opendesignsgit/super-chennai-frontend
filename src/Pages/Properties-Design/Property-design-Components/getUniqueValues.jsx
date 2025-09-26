export const getUniqueValues = (data, key) => {
  const allValues = data.flatMap((item) =>
    Array.isArray(item[key]) ? item[key] : item[key]
  );
  return [...new Set(allValues)];
};
