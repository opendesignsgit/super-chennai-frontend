// const axios = require("axios");

// module.exports = async function sendSms(mobile, message) {
//   const url = "https://www.smsintegra.net/api/smsapi.aspx";

//   const params = {
//     uid: process.env.SMS_UID,
//     pwd: process.env.SMS_PWD,
//     mobile,
//     msg: message,
//     sid: process.env.SMS_SID,
//     type: 0,
//     dtTimeNow: new Date().toISOString(),
//     entityid: process.env.SMS_ENTITY_ID,
//     tempid: process.env.SMS_TEMPLATE_ID,
//   };

//   await axios.get(url, { params });
// };
const axios = require("axios");

module.exports = async function sendSms(mobile, message) {
  const url = "https://www.smsintegra.net/api/smsapi.aspx";

  const params = {
    uid: process.env.SMS_UID,
    pwd: process.env.SMS_PWD,
    mobile,
    msg: message,
    sid: process.env.SMS_SID,
    type: 0,
    dtTimeNow: new Date().toISOString(),
    entityid: process.env.SMS_ENTITY_ID,
    tempid: process.env.SMS_TEMPLATE_ID,
  };

  try {
    console.log("📤 Sending SMS with params:", params);

    const response = await axios.get(url, { params });

    console.log("✅ SMSIntegra RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    console.error("❌ SMSIntegra ERROR:");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error("Message:", error.message);
    }

    throw error; // important so caller knows it failed
  }
};
