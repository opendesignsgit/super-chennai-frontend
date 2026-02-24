const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/adminController");
const adminAuth = require("../../middleware/adminAuthMiddlewre");

router.post("/all-users", adminAuth, adminController.getAllUserData);

module.exports = router;
