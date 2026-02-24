const fs = require("fs");
const path = require("path");

const EXPORT_DIR = path.join(__dirname, "../public/exports");
const MAX_AGE_DAYS = 7;

const cleanOldExports = () => {
  const files = fs.readdirSync(EXPORT_DIR);

  const now = new Date();

  files.forEach((file) => {
    if (file.endsWith(".xlsx")) {
      const filePath = path.join(EXPORT_DIR, file);
      const stats = fs.statSync(filePath);
      const fileAgeMs = now - stats.mtime;

      const maxAgeMs = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

      if (fileAgeMs > maxAgeMs) {
        fs.unlinkSync(filePath);
        console.log(`🗑️ Deleted old file: ${file}`);
      }
    }
  });
};

module.exports = cleanOldExports;
