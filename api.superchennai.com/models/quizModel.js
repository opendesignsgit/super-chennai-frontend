const db = require("../config/db");

const TABLE_NAME = "quiz_forms";

const createQuiz = async (data) => {
  const [result] = await db(TABLE_NAME).insert(data).returning("*");
  return result;
};

// Renamed to match controller calls
const getAllQuizEntries = async () => {
  return await db(TABLE_NAME).select("*").orderBy("created_at", "desc");
};

// Renamed to match controller calls
const deleteById = async (id) => {
  const result = await db(TABLE_NAME).where({ id }).del();
  return result > 0;
};

module.exports = { createQuiz, getAllQuizEntries, deleteById };
