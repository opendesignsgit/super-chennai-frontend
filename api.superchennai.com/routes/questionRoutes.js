
// const express = require("express");
// const router = express.Router();
// const { getQuestions } = require("../controllers/questionController");
// const { addQuestion } = require("../controllers/questionController");

// const auth = require("../middleware/authMiddlewre");
// const deleteQuestion = require("../controllers/questionController");


// // fetch questions (frontend)
// router.get("/", auth, getQuestions);

// // add a new question (admin)
// router.post("/add", auth, addQuestion);

// router.delete("/delete/:id", auth, deleteQuestion);


// module.exports = router;



const express = require("express");
const router = express.Router();

const questionController = require("../controllers/questionController");
const auth = require("../middleware/authMiddlewre");  

// fetch questions (frontend)
router.get("/", auth, questionController.getQuestions);

// add a new question (admin)
router.post("/add", auth, questionController.addQuestion);

// delete question by ID
router.delete("/delete/:id", auth, questionController.deleteQuestion);

module.exports = router;

