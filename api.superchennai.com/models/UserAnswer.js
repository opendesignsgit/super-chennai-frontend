
const db = require("../config/db");

class UserAnswer {
  static async hasAnswered(user_id, question_id) {
    return await db("user_answers").where({ user_id, question_id }).first();
  }
  
  static async submitAnswer(data) {
    const { user_id, question_id, user_answer } = data;

    // Fetch correct answer
    const question = await db("questions").where({ id: question_id }).first();

    if (!question) {
      throw new Error("Question not found");
    }

    const exists = await this.hasAnswered(user_id, question_id);
    if (exists) {
      throw new Error("You have already answered this question");
    }

    const is_correct =
      question.correct_answer.trim().toLowerCase() ===
      user_answer.trim().toLowerCase();

    // Insert user answer
    const inserted = await db("user_answers")
      .insert({
        user_id,
        question_id,
        user_answer,
        is_correct,
      })
      .returning("*");

    return inserted[0];
  }

  static async getUserResults(user_id) {
    return await db("user_answers")
      .join("questions", "user_answers.question_id", "questions.id")
      .select(
        "questions.question_text",
        "questions.correct_answer",
        "user_answers.user_answer",
        "user_answers.is_correct"
      )
      .where("user_answers.user_id", user_id);
  }
}

module.exports = UserAnswer;

