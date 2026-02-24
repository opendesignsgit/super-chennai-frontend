const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppUser = require("../models/AppUser");
const transporter = require("../config/mailer"); 
const db = require("../config/db");
const crypto = require("crypto");
const thankYouMail = require("../utils/registerThanksmail");
const sendSms = require("../utils/sendSms");

exports.register = async (req, res) => {
  try {
    const { name, email, phone, location, subscribed_newsletter, password } =
      req.body;

    const existing = await AppUser.findByEmail(email);
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await AppUser.create({
      name,
      email,
      phone,
      location,
      subscribed_newsletter,
      password: hashed,
    });

    const mail = thankYouMail({ name });

    transporter
      .sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: mail.subject,
        html: mail.html,
      })
      .catch(console.error);

    res.json({ message: "Registered successfully", user_id: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AppUser.findByEmail(email);
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // find user
    const user = await db("app_users").where({ email }).first();
    if (!user) {
      // Optional: create user automatically if you want OTP-login without register
      // const [newId] = await db("app_users").insert({ email }).returning("id");
      // user = await db("app_users").where({ id: newId }).first();
      return res.status(404).json({ message: "User not found. Please register first." });
    }

    // Optionally throttle sending: disallow re-send if existing OTP still valid for > (e.g.) 1 minute
    const now = new Date();
    if (user.otp_expires && new Date(user.otp_expires) > now) {
      // still valid - optionally allow resend, here we'll allow resend but you can restrict
      // return res.status(429).json({ message: "OTP already sent. Please wait before requesting again." });
    }

    const otp = generateOtp();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save otp + expiry to DB
    await db("app_users")
      .where({ email })
      .update({ otp, otp_expires: expires });

    // Send email
    const html = `
      <p>Your login OTP is: <strong>${otp}</strong></p>
      <p>This code will expire in 10 minutes.</p>
      <p>If you didn't request this, ignore this email.</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Your login OTP",
      html,
    });

    return res.json({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("sendOtp error:", err);
    return res.status(500).json({ error: err.message });
  }
};

exports.sendOtpMobile = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone)
      return res.status(400).json({ message: "Mobile number required" });

    const user = await db("app_users").where({ phone }).first();
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const otp = generateOtp();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    await db("app_users")
      .where({ id: user.id })
      .update({ otp, otp_expires: expires });

    // ?? Template text must match DLT
    const message = `Dear User, Your one-time password (otp) is ${otp}. Please don't share with anyone. Super Chennai.`;

    await sendSms(phone, message);

    res.json({ message: "OTP sent to mobile number" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

    const user = await db("app_users")
      .where({ email, otp })
      .andWhere("otp_expires", ">", new Date())
      .first();

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Clear otp fields
    await db("app_users")
      .where({ id: user.id })
      .update({ otp: null, otp_expires: null });

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      message: "OTP verified. Login successful.",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("verifyOtp error:", err);
    return res.status(500).json({ error: err.message });
  }
};

exports.verifyOtpMobile = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const user = await db("app_users")
      .where({ phone, otp })
      .andWhere("otp_expires", ">", new Date())
      .first();

    if (!user)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    await db("app_users")
      .where({ id: user.id })
      .update({ otp: null, otp_expires: null });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, phone: user.phone },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await db("app_users").where({ email }).first();
    if (!user) return res.status(404).json({ message: "User not found" });

    // Create a token
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000); // 1 hour

    // Save token in DB
    await db("app_users")
      .where({ email })
      .update({ reset_token: token, reset_expires: expires });

    // Send email
    // const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;
     const resetLink = `https://superchennai.com/reset-password/${token}`;


    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset",
      html: `<p>Click this link to reset your password:</p>
             <a href="${resetLink}">${resetLink}</a>
             <p>This link expires in 1 hour.</p>`,
    });

    res.json({ message: "Password reset link sent to your email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Find user by token and check expiry
    const user = await db("app_users")
      .where({ reset_token: token })
      .andWhere("reset_expires", ">", new Date())
      .first();

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    // Hash new password
    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password and remove reset token
    await db("app_users")
      .where({ id: user.id })
      .update({ password: hashedPassword, reset_token: null, reset_expires: null });

    res.json({ message: "Password updated successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};






