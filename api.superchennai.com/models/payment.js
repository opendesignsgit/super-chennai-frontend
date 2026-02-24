const db = require("../config/db");

const createPayment = async (data) => {
  const [result] = await db('payments').insert(data).returning('*');
  return result;
};

const getAllPayments = async () => {
  return await db('payments').select('*').orderBy('created_at', 'desc');
};
const deleteById = async (id) => {
  const result = await db('payments').where({ id }).del();
  return result > 0;
};


module.exports = { createPayment, getAllPayments,deleteById, };
