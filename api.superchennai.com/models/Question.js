const db = require("../config/db");

class Question {



// static async getAll() {
//   const rows = await db("questions").select("id", "question_text", "options");

//   return rows.map((q) => ({
//     id: q.id,
//     question_text: q.question_text,
//     options: Array.isArray(q.options) ? q.options : []
//   }));
// }

static async getAll() {
  const rows = await db("questions")
    .select("id", "question_text", "options")
    .where({ is_active: true });

  return rows.map(q => ({
    id: q.id,
    question_text: q.question_text,
    options: Array.isArray(q.options) ? q.options : []
  }));
}




static async addQuestion(question_text, correct_answer, options) {
  // Convert JS array -> PostgreSQL array literal
  const formattedOptions = `{${options.map(o => `"${o}"`).join(",")}}`;

  const [id] = await db("questions")
    .insert({
      question_text,
      correct_answer,
      options: formattedOptions
    })
    .returning("id");

  return id;
}

static async deleteQuestion(id) {
  return await db("questions").where({ id }).del();
}


static async softDelete(id) {
  return await db("questions")
    .where({ id })
    .update({ is_active: false });
}


  static async getCorrectAnswer(question_id) {
    return await db("questions")
      .where({ id: question_id })
      .select("correct_answer")
      .first();
  }
}

module.exports = Question;   
