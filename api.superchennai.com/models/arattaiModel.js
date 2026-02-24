const db = require("../config/db");

/* Insert / Update OTP */
exports.findByPhone = (phone, otp, expiry) => {
  return db("arattai_entries")
    .insert({
      phone,
      otp,
      otp_expires_at: expiry,
      is_mobile_verified: false,
    })
    .onConflict("phone")
    .merge({
      otp,
      otp_expires_at: expiry,
      is_mobile_verified: false,
    });
};

/* OTP Verify */
exports.verifyOtpByPhone = async (data) => {
  const { phone, otp, name, email, age, gender } = data;

  // Hard validation
  if (!name || !email || !age || !gender) {
    return null;
  }

  const entry = await db("arattai_entries")
    .where({ phone, otp })
    .andWhere("otp_expires_at", ">", new Date())
    .first();

  if (!entry) return null;

  const [updated] = await db("arattai_entries")
    .where({ phone })
    .update({
      name,
      email,
      age,
      gender,
      is_mobile_verified: true,
      otp: null,
      otp_expires_at: null,
      updated_at: new Date(),
    })
    .returning("*");

  return updated;
};

/* GET ALL */
exports.getAllEntries = () => {
  return db("arattai_entries")
    .select("*")
    .orderBy("created_at", "desc");
};

/* GET ONE */
exports.getEntryById = (id) => {
  return db("arattai_entries")
    .where({ id })
    .first();
};

/* DELETE */
exports.deleteEntry = (id) => {
  return db("arattai_entries")
    .where({ id })
    .del()
    .returning("*");
};