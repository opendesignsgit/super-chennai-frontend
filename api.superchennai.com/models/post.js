const knex = require('../config/db');

const createPost = async (data) => {
  return await knex('posts').insert(data).returning('*');
};
const getAllPosts = () => {
  return knex('posts').orderBy('created_at', 'desc');
};
const deleteById = async (id) => {
  const result = await knex("posts").where({ id }).del();
  return result > 0;
};
module.exports = {
  createPost,getAllPosts,deleteById
};
