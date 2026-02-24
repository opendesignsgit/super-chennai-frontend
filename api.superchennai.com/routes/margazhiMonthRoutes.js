const express = require("express");
const router = express.Router();
const { uploadMargazhi } = require("../config/multer");

const {
  submitEntry,
  getEntries,
  getEntry,
  deleteEntry,
} = require("../controllers/margazhiMonthController");

router.post("/margazhi/submit", uploadMargazhi.array("images", 3), submitEntry);
router.get("/margazhi", getEntries);
router.get("/:id", getEntry);

/* Delete */
router.delete("/:id", deleteEntry);


module.exports = router;
