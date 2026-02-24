const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  sendOtp,
  verifyOtp,
  sendOtpMobile,
  verifyOtpMobile

} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.post("/send-otp-mobile", sendOtpMobile);
router.post("/verify-otp-mobile", verifyOtpMobile);


module.exports = router;
