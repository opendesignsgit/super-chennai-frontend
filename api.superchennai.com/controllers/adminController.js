const db = require("../config/db"); 

exports.getAllUserData = async (req, res) => {
  try {
    const rows = await db("user_answers")
      .join("app_users", "user_answers.user_id", "app_users.id")
      .join("questions", "user_answers.question_id", "questions.id")
      .select(
        "app_users.id as user_id",
        "app_users.name",
        "app_users.email",
        "app_users.phone",
        "questions.id as question_id",
        "questions.question_text",
        "user_answers.user_answer as answer",
        "user_answers.is_correct",
        "user_answers.created_at" 
      )
      .orderBy("app_users.id");

    res.json({ data: rows });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
