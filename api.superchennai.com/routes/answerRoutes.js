const express = require("express");
const router = express.Router();
const answerController = require("../controllers/answerController");
const auth = require("../middleware/authMiddlewre"); // JWT middleware

// Submit an answer
router.post("/submit", auth, answerController.submitAnswer);

// Get logged-in user's results
router.get("/results", auth, answerController.getResults);

module.exports = router;






// const express = require("express");
// const router = express.Router();
// const { submitAnswers } = require("../controllers/answerController");
// const auth = require("../middleware/authMiddlewre");

// router.post("/submit", auth, submitAnswers);

// module.exports = router;
