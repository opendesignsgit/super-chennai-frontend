const db = require("../config/db");

/* CREATE */
exports.createEntry = (data) => {
  return db("hotshot_chennai_entries")
    .insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      country_code: data.countryCode,
      message: data.message,
      linkedin_url: data.linkedinUrl,
      location_url: data.locationUrl,
      images: data.images,
    })
    .returning("*");
};

/* GET ALL */
exports.getAllEntries = () => {
  return db("hotshot_chennai_entries")
    .select("*")
    .orderBy("created_at", "desc");
};

/* GET ONE */
exports.getEntryById = (id) => {
  return db("hotshot_chennai_entries")
    .where({ id })
    .first();
};

/* DELETE */
exports.deleteEntry = (id) => {
  return db("hotshot_chennai_entries")
    .where({ id })
    .del()
    .returning("*");
};
