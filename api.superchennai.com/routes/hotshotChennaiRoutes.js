const express = require("express");
const router = express.Router();
const { uploadHotshotChennai } = require("../config/multer");

const {
  submitEntry,
  getEntriesAll,
  getEntry,
  deleteEntry,
} = require("../controllers/hotshotChennaiController");

/* CREATE */
router.post(
  "/hotshot-chennai/submit",
  uploadHotshotChennai.array("images", 5),
  submitEntry
);

/* READ */
router.get("/hotshot-chennai", getEntriesAll);
router.get("/hotshot-chennai/:id", getEntry);

/* DELETE */
router.delete("/hotshot-chennai/:id", deleteEntry);

module.exports = router;
