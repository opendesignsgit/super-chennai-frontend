const express = require("express");
const router = express.Router();
const { uploadQuiz } = require("../config/multer");

const {
  createQuiz,
  getAllQuiz,
  deleteQuizById
} = require("../controllers/createQuizController");

router.post("/quiz", uploadQuiz.single("quizImage"), createQuiz);
router.get("/quiz", getAllQuiz);
router.delete("/quiz/:id", deleteQuizById);

module.exports = router;
