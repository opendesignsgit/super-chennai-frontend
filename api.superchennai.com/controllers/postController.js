const fs = require("fs");
const path = require("path");
const Post = require("../models/post");
const Payment = require("../models/payment");
const sendEmail = require("../utils/sendEmail");
const exportToExcel = require("../utils/exportToExcel");
const cleanOldExports = require("../utils/cleanOldExports");
const BASE_URL = process.env.BASE_URL || "http://api.superchennai.com";

const createPost = async (req, res) => {
  try {
    const { name, email, mobile, description, newsletter, video } = req.body;
        const image = req.file ? req.file.filename : null;

    const newPost = await Post.createPost({
      name,
      email,
      mobile,
      video,
      image,
      description,
      newsletter: newsletter === true || newsletter === "true",
    });

    const posts = await Post.getAllPosts();
    const payments = await Payment.getAllPayments();
    const excelBuffer = await exportToExcel({ posts, payments });
    // Save Excel
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const excelFilename = `submissions-${timestamp}.xlsx`;
    const exportPath = path.join(
      __dirname,
      `../public/exports/${excelFilename}`
    );
    fs.writeFileSync(exportPath, excelBuffer);

    await sendEmail({
      name,
      email,
      mobile,
      video,
      image: image ? `${BASE_URL}/uploads/images/${image}` : null,
      description,
      newsletter,
      excelDownloadLink: `${BASE_URL}/exports/${excelFilename}`,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
};

const downloadPostsXLS = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    const payments = await Payment.getAllPayments(); // ✅ also include payments
    const buffer = await exportToExcel({ posts, payments });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=posts.xlsx");
    res.send(buffer);
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({ success: false, message: "Failed to generate XLS" });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Post.deleteById(id);

    if (deleted) {
      res
        .status(200)
        .json({ success: true, message: `Post with ID ${id} deleted.` });
    } else {
      res
        .status(404)
        .json({ success: false, message: `Post with ID ${id} not found.` });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ success: false, message: "Failed to delete post" });
  }
};

module.exports = { createPost, getAllPosts, downloadPostsXLS, deletePostById };

// PORT=3001 pm2 start "npm run build && npm run start" --name superchennai-cms

// PORT=3000 pm2 start "npm start" --name superchennai-api

// PORT=3000 pm2 start "npm run build && npm start" --name superchennai-api
