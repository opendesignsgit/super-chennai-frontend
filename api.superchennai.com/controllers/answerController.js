const UserAnswer = require("../models/UserAnswer");
const db = require("../config/db"); 

exports.submitAnswer = async (req, res) => {
  try {
    const user_id = req.user.id; // from JWT middleware
    const { question_id, user_answer } = req.body;

    if (!question_id || !user_answer) {
      return res
        .status(400)
        .json({ error: "question_id and user_answer required" });
    }

    const already = await UserAnswer.hasAnswered(user_id, question_id);
    if (already) {
      return res.status(400).json({
        message: "You have already answered this question",
        question_id,
      });
    }

    const result = await UserAnswer.submitAnswer({
      user_id,
      question_id,
      user_answer,
    });

    res.json({
      message: "Answer submitted",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResults = async (req, res) => {
  try {
    const user_id = req.user.id;

    // ?? Fetch user details from app_users table
    const user = await db("app_users")
      .select("name", "email")
      .where("id", user_id)
      .first();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch answers with questions
    const results = await UserAnswer.getUserResults(user_id);

    res.json({
      user_id,
      name: user.name, // ?? fixed
      email: user.email, // optional
      total_answered: results.length,
      results,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
