const {
  getAllEntries,
  getEntryById,
  deleteEntry,
  verifyOtpByPhone,
  findByPhone
} = require("../models/conclaveModel");
const sendSms = require("../utils/sendSms");
const { generateOtp, getOtpExpiry } = require("../utils/otp");

const {
  sendConclaveRegistrationMail,
} = require("../utils/conclaveMailer");


exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Mobile number required",
      });
    }

    const otp = generateOtp();
    const expiry = getOtpExpiry(5);

    await findByPhone(phone, otp, expiry);

    const smsMessage = `Dear User, Your one-time password (otp) is ${otp}. Please don't share with anyone. Super Chennai.`;

    await sendSms(phone, smsMessage);

    return res.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("Send OTP Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};

/* SUBMIT */

exports.verifyOtpAndSubmit = async (req, res) => {
  try {
    const {
      name,
      email,
      companyName,
      designation,
      linkedinUrl,
      phone,
      otp,
    } = req.body;

    if (
      !name ||
      !email ||
      // !companyName ||
      // !designation ||
      // !linkedinUrl ||
      !phone ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    //  STRICT VALIDATION (final submit)

     if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: "Phone and OTP are required",
      });
    }

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are mandatory",
      });
    }


const entry = await verifyOtpByPhone(req.body);

    if (!entry) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    await sendConclaveRegistrationMail({
      name: entry.name,
      email: entry.email,
    });

    return res.status(201).json({
      success: true,
      message: "Mobile verified & registration successful",
      data: entry,
    });
  } catch (error) {
    console.error("Verify OTP Error:", error);
    return res.status(500).json({
      success: false,
      message: "OTP verification failed",
    });
  }
};


/* GET ALL */
exports.getEntriesAll = async (req, res) => {
  try {
    const data = await getAllEntries();
    return res.json({ success: true, data });
  } catch (error) {
    console.error("Get Conclave Entries Error:", error);
    return res.status(500).json({ success: false });
  }
};

/* GET ONE */
exports.getEntry = async (req, res) => {
  try {
    const entry = await getEntryById(req.params.id);

    if (!entry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    return res.json({ success: true, data: entry });
  } catch (error) {
    console.error("Get Conclave Entry Error:", error);
    return res.status(500).json({ success: false });
  }
};

/* DELETE */
exports.deleteEntry = async (req, res) => {
  try {
    const [entry] = await deleteEntry(req.params.id);

    if (!entry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    return res.json({
      success: true,
      message: "Entry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Conclave Entry Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
