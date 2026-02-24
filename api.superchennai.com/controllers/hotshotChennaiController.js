const fs = require("fs");
const path = require("path");

const HotshotChennai = require("../models/hotshotChennaiModel");

const exportToExcel = require("../utils/exportToExcel");
const Post = require("../models/post");
const Quiz = require("../models/quizModel");
const Margazhi = require("../models/margazhiMonthMonth");

const sendHotshotMail = require("../utils/hotshotThanksMail");

const { createEntry, getAllEntries, getEntryById, deleteEntry } =
  HotshotChennai;

exports.submitEntry = async (req, res) => {
  try {
    const isValidUrl = (url) => /^https?:\/\/.+/.test(url);

    const {
      name,
      email,
      countryCode,
      phone,
      message,
      linkedinUrl,
      locationUrl,
    } = req.body;

    if (!name || !email || !phone || !countryCode) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image required",
      });
    }

    //     if (linkedinUrl && !isValidUrl(linkedinUrl)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid LinkedIn URL",
    //   });
    // }

    // if (locationUrl && !isValidUrl(locationUrl)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid Location URL",
    //   });
    // }

    const images = req.files.map((file) => ({
      filename: file.filename,
      originalName: file.originalname,
      path: `/uploads/hotshotchennai/${file.filename}`,
      size: file.size,
      mimeType: file.mimetype,
    }));

    /* 1?? Save Entry */
    const [entry] = await createEntry({
      name,
      email,
      phone,
      countryCode,
      message: message || null,
      linkedinUrl: linkedinUrl || null,
      locationUrl: locationUrl || null,
      images: JSON.stringify(images),
    });

    /* 2?? FETCH DATA FIRST (IMPORTANT ORDER) */
    const posts = await Post.getAllPosts();
    const payments = await Quiz.getAllQuizEntries();
    const margazhiEntries = await Margazhi.getAllEntries();
    const hotshotEntries = await HotshotChennai.getAllEntries();

    /* 3?? GENERATE EXCEL */
    const excelBuffer = await exportToExcel({
      posts,
      payments,
      margazhiEntries,
      hotshotEntries,
    });

    /* 4?? SAVE EXCEL */
    const exportDir = path.join(__dirname, "../public/exports");
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const excelFilename = `hotshot-chennai-${timestamp}.xlsx`;
    const exportPath = path.join(exportDir, excelFilename);

    fs.writeFileSync(exportPath, excelBuffer);

    /* 5?? SEND MAIL (NON-BLOCKING) */
    try {
      await sendHotshotMail({ name, email });
    } catch (err) {
      console.error("Hotshot Mail Error:", err);
    }

    return res.status(201).json({
      success: true,
      message: "Hotshot Chennai entry submitted successfully",
      data: entry,
    });
  } catch (error) {
    console.error("Submit Hotshot Entry Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/* GET ALL */
exports.getEntriesAll = async (req, res) => {
  try {
    const data = await getAllEntries();
    return res.json({ success: true, data });
  } catch (error) {
    console.error("Get Entries Error:", error);
    return res.status(500).json({ success: false });
  }
};

/* GET ONE */
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

/* DELETE */
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
