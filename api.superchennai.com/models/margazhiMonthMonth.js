const db = require("../config/db");

exports.createEntry = (data) => {
  return db("margazhi_entries")
    .insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
       country_code: data.countryCode, 
      message: data.message,
      images: data.images, 
    })
    .returning("*");
};

exports.getAllEntries = () => {
  return db("margazhi_entries")
    .select("*")
    .orderBy("created_at", "desc");
};

/* GET ONE */
exports.getEntryById = (id) => {
  return db("margazhi_entries")
    .where({ id })
    .first();
};

/* DELETE */
exports.deleteEntry = (id) => {
  return db("margazhi_entries")
    .where({ id })
    .del()
    .returning("*");
};