const express = require("express");
const router = express.Router();

const {
  sendOtp,
  verifyOtpAndSubmit,
  getEntriesAll,
  getEntry,
  deleteEntry,
} = require("../controllers/arattaiController");

/* OTP */
router.post("/arattai/send-otp", sendOtp);
router.post("/arattai/verify-otp", verifyOtpAndSubmit);

/* ADMIN */
router.get("/arattai", getEntriesAll);
router.get("/arattai/:id", getEntry);
router.delete("/arattai/:id", deleteEntry);

module.exports = router;