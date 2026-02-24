// models/AppUser.js
const db = require("../config/db");

class AppUser {
  static async create(data) {
    const [id] = await db("app_users")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
        subscribed_newsletter: data.subscribed_newsletter,
        password: data.password,
      })
      .returning("id");

    return id; // knex returns array
  }

  static async findByEmail(email) {
    const user = await db("app_users")
      .where({ email })
      .first();
    return user;
  }
}

module.exports = AppUser;
