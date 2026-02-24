const path = require("path");
const fs = require("fs");
const Quiz = require("../models/quizModel"); 
const Post = require("../models/post");
const generateReceiptId = require("../utils/generateReceiptId");
// const sendThankYouEmail = require("../utils/sendThankYouEmail");

const sendQuizThankYouEmail  =require("../utils/sendQuizThankYouEmail")
const exportToExcel = require("../utils/exportToExcel");
const cleanOldExports = require("../utils/cleanOldExports");

const BASE_URL = process.env.BASE_URL || "http://api.superchennai.com";


const createQuiz = async (req, res) => {
  try {
    const { name, name2, email, phone, message } = req.body;

    let paymentImage = null;

    // Payment Image Upload (if any)
    if (req.file) {
      paymentImage = `${req.protocol}://${req.get("host")}/uploads/quizImages/${
        req.file.filename
      }`;
    } else {
      console.warn("No file received from frontend");
    }

    // Generate unique receipt ID
    const receipt_id = generateReceiptId();

    // 1. Save quiz form submission
    const newSubmission = await Quiz.createQuiz({
      name,
      name2,
      email,
      phone,
      message,
      payment_image: paymentImage,
      receipt_id,
      is_quiz_form: true  
    });

    // 2. Fetch data to export
    const posts = await Post.getAllPosts();
    const payments = await Quiz.getAllQuizEntries();

    // 3. Generate Excel
    // const excelBuffer = await exportToExcel({ posts, submissions });
    const excelBuffer = await exportToExcel({ posts, payments });


    // 4. Save Excel file
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const excelFilename = `quiz-submissions-${timestamp}.xlsx`;
    const exportPath = path.join(
      __dirname,
      `../public/exports/${excelFilename}`
    );
    fs.writeFileSync(exportPath, excelBuffer);

    // 5. Send email after successful submission
    await sendQuizThankYouEmail({
      name,
      name2,
      email,
      phone,
      message,
      payment_image: paymentImage,
      excelDownloadLink: `${BASE_URL}/exports/${excelFilename}`,
      receipt_id,
    });

    res.status(201).json({ success: true, data: newSubmission });
  } catch (error) {
    console.error("Quiz Submission Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getAllQuiz = async (req, res) => {
  try {
    const data = await Quiz.getAllQuizEntries();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Fetch Quiz Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch submissions" });
  }
};

const deleteQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Quiz.deleteById(id);

    if (deleted) {
      res.status(200).json({ success: true, message: `Entry with ID ${id} deleted.` });
    } else {
      res.status(404).json({ success: false, message: "Not found." });
    }
  } catch (error) {
    console.error("Delete Quiz Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete entry" });
  }
};

module.exports = { createQuiz, getAllQuiz, deleteQuizById };
