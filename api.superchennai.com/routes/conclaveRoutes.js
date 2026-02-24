const express = require("express");
const router = express.Router();

const {
  sendOtp,
  verifyOtpAndSubmit,
  getEntriesAll,
  getEntry,
  deleteEntry,
} = require("../controllers/conclaveController");

/* OTP */
router.post("/conclave/send-otp", sendOtp);
router.post("/conclave/verify-otp", verifyOtpAndSubmit);

/* ADMIN */
router.get("/conclave", getEntriesAll);
router.get("/conclave/:id", getEntry);
router.delete("/conclave/:id", deleteEntry);

module.exports = router;
