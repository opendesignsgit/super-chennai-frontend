

const Question = require("../models/Question");


// exports.addQuestion = async (req, res) => {
//   try {
//     const { question_text, correct_answer } = req.body;

//     if (!question_text || !correct_answer) {
//       return res.status(400).json({ message: "Both fields required" });
//     }

//     const id = await Question.addQuestion(question_text, correct_answer);

//     res.json({
//       message: "Question added successfully",
//       question_id: id
//     });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.addQuestion = async (req, res) => {
  try {
    const { question_text, correct_answer, options } = req.body;

    if (!question_text || !correct_answer || !options) {
      return res.status(400).json({ message: "question_text, correct_answer and options are required" });
    }

    // Ensure options is array
    if (!Array.isArray(options)) {
      return res.status(400).json({ message: "options must be an array" });
    }

    const id = await Question.addQuestion(question_text, correct_answer, options);

    res.json({
      message: "Question added successfully",
      question_id: id
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.getAll();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.deleteQuestion = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deleted = await Question.deleteQuestion(id);

//     if (deleted === 0) {
//       return res.status(404).json({ message: "Question not found" });
//     }

//     res.json({ message: "Question deleted successfully" });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Question.softDelete(id);

    if (result === 0) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json({ message: "Question removed (soft delete)" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// const Question = require("../models/Question");

// exports.getQuestions = async (req, res) => {
//   try {
//     const questions = await Question.getAll();
//     res.json(questions);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// controllers/questionController.js