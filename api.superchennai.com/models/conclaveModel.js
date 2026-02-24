const db = require("../config/db");

exports.findByPhone = (phone, otp, expiry) => {
  return db("conclave_entries")
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



exports.verifyOtpByPhone = async (data) => {
  const {
    phone,
    otp,
    name,
    email,
    companyName, 
    designation,
    linkedinUrl,
  } = data;

   // ?? HARD VALIDATION (model-level)
  if (!name || !email) {
    return null; // OTP submit stop here
  }


  const entry = await db("conclave_entries")
    .where({ phone, otp })
    .andWhere("otp_expires_at", ">", new Date())
    .first();

  if (!entry) return null;

  const [updated] = await db("conclave_entries")
    .where({ phone })
    .update({
      name,
      email,
       company_name: companyName,
      designation,
      linkedin_url: linkedinUrl,
      is_mobile_verified: true,
      otp: null,
      otp_expires_at: null,
      updated_at: new Date(),
    })
    .returning("*");

  return updated;
};


/* CREATE */
exports.createEntry = (data) => {
  return db("conclave_entries")
    .insert({
      name: data.name,
      email: data.email,
      company_name: data.companyName, 
      designation: data.designation,
      linkedin_url: data.linkedinUrl,
      phone: data.phone,
      otp: data.otp || null,
    })
    .returning("*");
};

/* GET ALL */
exports.getAllEntries = () => {
  return db("conclave_entries")
    .select("*")
    .orderBy("created_at", "desc");
};

/* GET ONE */
exports.getEntryById = (id) => {
  return db("conclave_entries")
    .where({ id })
    .first();
};

/* DELETE */
exports.deleteEntry = (id) => {
  return db("conclave_entries")
    .where({ id })
    .del()
    .returning("*");
};
