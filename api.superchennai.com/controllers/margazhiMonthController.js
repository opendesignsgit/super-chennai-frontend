const sendMailForMargazh = require("../utils/registerThanksmail");
const fs = require("fs");
const path = require("path");

const Margazhi = require("../models/margazhiMonthMonth");
const exportToExcel = require("../utils/exportToExcel");
const Post = require("../models/post");
const Quiz = require("../models/quizModel");

const {
  createEntry,
  getAllEntries,
  getEntryById,
  deleteEntry,
} = require("../models/margazhiMonthMonth");

exports.submitEntry = async (req, res) => {
  try {
    const { name, email, countryCode, phone, message } = req.body;

    if (!name || !email || !phone || !countryCode) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields missing" });
    }

    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "At least one image required" });
    }

    const images = req.files.map((file) => ({
      filename: file.filename,
      originalName: file.originalname,
      path: `/uploads/margazhimonth/${file.filename}`,
      size: file.size,
      mimeType: file.mimetype,
    }));

    const [entry] = await createEntry({
      name,
      email,
      phone,
      countryCode,
      message: message || null,
      images: JSON.stringify(images),
    });

  /* 4️⃣ Fetch ALL data for Excel (IMPORTANT) */
    const posts = await Post.getAllPosts();
    const payments = await Quiz.getAllQuizEntries();
    const margazhiEntries = await Margazhi.getAllEntries();

    /* 5️⃣ Generate Excel */
    const excelBuffer = await exportToExcel({
      posts,
      payments,
      margazhiEntries,
    });

    /* 6️⃣ Save Excel */
    const exportDir = path.join(__dirname, "../public/exports");
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const excelFilename = `margazhi-submissions-${timestamp}.xlsx`;
    const exportPath = path.join(exportDir, excelFilename);

    fs.writeFileSync(exportPath, excelBuffer);
    try {
      await sendMailForMargazh({ name, email });
    } catch (mailError) {
      console.error("Mail Error:", mailError);
    }

    return res.status(201).json({
      success: true,
      message: "Entry submitted successfully",
      data: entry,
    });
  } catch (error) {
    console.error("Submit Entry Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const data = await getAllEntries();
    return res.json({ success: true, data });
  } catch (error) {
    console.error("Get Entries Error:", error);
    return res.status(500).json({ success: false });
  }
};

/* ================= GET ONE ================= */
exports.getEntry = async (req, res) => {
  try {
    const entry = await getEntryById(req.params.id);

    if (!entry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    return res.json({ success: true, data: entry });
  } catch (error) {
    console.error("Get Entry Error:", error);
    return res.status(500).json({ success: false });
  }
};

/* ================= DELETE ================= */
exports.deleteEntry = async (req, res) => {
  try {
    const [entry] = await deleteEntry(req.params.id);

    if (!entry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    /* Delete images from disk */
    const images = JSON.parse(entry.images);
    images.forEach((img) => {
      const filePath = path.join(__dirname, "..", img.path);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    return res.json({
      success: true,
      message: "Entry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Entry Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



