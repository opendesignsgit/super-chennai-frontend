const Tesseract = require("tesseract.js");

const validatePaymentImage = async (filePath) => {
  try {
    const result = await Tesseract.recognize(filePath, "eng");
    const extractedText = result.data.text.toLowerCase();

    return (
      extractedText.includes("payment successful") ||
      extractedText.includes("receipt") ||
      extractedText.includes("upi payment") ||
      extractedText.includes("transaction id")
    );
  } catch (err) {
    console.error("OCR validation failed:", err);
    return false;
  }
};

module.exports = validatePaymentImage;
