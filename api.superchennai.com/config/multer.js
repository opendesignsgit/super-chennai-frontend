const multer = require("multer");
const path = require("path");
const fs = require("fs");

const margazhiDir = path.join(__dirname, "../uploads/margazhimonth");

if (!fs.existsSync(margazhiDir)) {
  fs.mkdirSync(margazhiDir, { recursive: true });
}

const margazhiStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, margazhiDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const margazhiFileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpeg", "image/jpg"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Only PNG / JPG / JPEG files allowed"), false);
};

const uploadMargazhi = multer({
  storage: margazhiStorage,
  fileFilter: margazhiFileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB max
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/payments");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const quizStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/quizImages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpeg", "image/jpg"];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files allowed"), false);
  }
};

/* ================= COMMON FILTER ================= */
const imageFileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpeg", "image/jpg"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Only PNG / JPG / JPEG files allowed"), false);
};

/* ================= HOTSHOT CHENNAI ================= */
const hotshotDir = path.join(__dirname, "../uploads/hotshotchennai");
if (!fs.existsSync(hotshotDir)) {
  fs.mkdirSync(hotshotDir, { recursive: true });
}

const hotshotStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, hotshotDir),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const uploadHotshotChennai = multer({
  storage: hotshotStorage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});


const uploadQuiz = multer({ storage: quizStorage });
const upload = multer({ storage, fileFilter });
// module.exports = upload;
module.exports = { upload, uploadQuiz,uploadMargazhi,uploadHotshotChennai };






// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// /* ================= COMMON FILTER ================= */
// const imageFileFilter = (req, file, cb) => {
//   const allowed = ["image/png", "image/jpeg", "image/jpg"];
//   if (allowed.includes(file.mimetype)) cb(null, true);
//   else cb(new Error("Only PNG / JPG / JPEG files allowed"), false);
// };

// /* ================= MARGAZHI ================= */
// const margazhiDir = path.join(__dirname, "../uploads/margazhimonth");
// if (!fs.existsSync(margazhiDir)) {
//   fs.mkdirSync(margazhiDir, { recursive: true });
// }

// const margazhiStorage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, margazhiDir),
//   filename: (req, file, cb) =>
//     cb(null, `${Date.now()}-${file.originalname}`),
// });

// const uploadMargazhi = multer({
//   storage: margazhiStorage,
//   fileFilter: imageFileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 },
// });

// /* ================= HOTSHOT CHENNAI ================= */
// const hotshotDir = path.join(__dirname, "../uploads/hotshotchennai");
// if (!fs.existsSync(hotshotDir)) {
//   fs.mkdirSync(hotshotDir, { recursive: true });
// }

// const hotshotStorage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, hotshotDir),
//   filename: (req, file, cb) =>
//     cb(null, `${Date.now()}-${file.originalname}`),
// });

// const uploadHotshotChennai = multer({
//   storage: hotshotStorage,
//   fileFilter: imageFileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 },
// });

// /* ================= QUIZ ================= */
// const quizStorage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/quizImages"),
//   filename: (req, file, cb) =>
//     cb(null, `${Date.now()}-${file.originalname}`),
// });

// const uploadQuiz = multer({ storage: quizStorage });

// /* ================= PAYMENTS ================= */
// const paymentStorage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/payments"),
//   filename: (req, file, cb) =>
//     cb(null, `${Date.now()}-${file.originalname}`),
// });

// const upload = multer({
//   storage: paymentStorage,
//   fileFilter: imageFileFilter,
// });

// /* ================= EXPORTS ================= */
// module.exports = {
//   upload,
//   uploadQuiz,
//   uploadMargazhi,
//   uploadHotshotChennai,
// };
