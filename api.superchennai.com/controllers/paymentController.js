
const path = require("path");
const fs = require("fs");
const Payment = require("../models/payment");
const Post = require("../models/post"); 
const validatePaymentImage = require("../validations/validatePaymentImage");
const generateReceiptId = require("../utils/generateReceiptId");
const sendThankYouEmail = require("../utils/sendThankYouEmail");
const exportToExcel = require("../utils/exportToExcel");
const cleanOldExports = require("../utils/cleanOldExports");
const BASE_URL = process.env.BASE_URL || "http://api.superchennai.com";

const createPayment = async (req, res) => {
  try {
    const { name, phone, email,no_of_persons  } = req.body;
    let paymentImage = null;

   // cleanOldExports();

    // Validate uploaded image if any
    // Validate uploaded image if any
    // if (req.file) {
    //   const isValid = await validatePaymentImage(req.file.path);
    //   if (!isValid) {
    //     fs.unlinkSync(req.file.path);
    //     return res.status(400).json({
    //       success: false,
    //       message: "Uploaded image does not appear to be a valid payment receipt.",
    //     });
    //   }
    //   paymentImage = `${req.protocol}://${req.get("host")}/uploads/payments/${req.file.filename}`;
    // }

    if (req.file) {
      paymentImage = `${req.protocol}://${req.get("host")}/uploads/payments/${
        req.file.filename
      }`;
    }

    // Generate receipt ID
    const receipt_id = generateReceiptId();

    // 1. Save payment to DB
    const newPayment = await Payment.createPayment({
      name,
      phone,
      email,
      no_of_persons,
      payment_image: paymentImage,
      receipt_id,
    });

    // 2. Fetch all posts & payments
    const posts = await Post.getAllPosts();
    const payments = await Payment.getAllPayments();

    // 3. Generate Excel with both
    const excelBuffer = await exportToExcel({ posts, payments });

    // 4. Save file
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const excelFilename = `submissions-${timestamp}.xlsx`;
    const exportPath = path.join(__dirname, `../public/exports/${excelFilename}`);
    fs.writeFileSync(exportPath, excelBuffer);

    // 5. Send thank you email with download link
    await sendThankYouEmail({
      name,
      email,
      receipt_id,
      phone,
      no_of_persons,
      payment_image: paymentImage,
      excelDownloadLink: `${BASE_URL}/exports/${excelFilename}`,
    });

    res.status(201).json({ success: true, data: newPayment });
  } catch (error) {
    console.error("Payment Upload Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.getAllPayments();
    res.status(200).json({ success: true, data: payments });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch payments" });
  }
};

const deletePaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Payment.deleteById(id); 

    if (deleted) {
      res.status(200).json({ success: true, message: `Payment with ID ${id} deleted.` });
    } else {
      res.status(404).json({ success: false, message: `Payment with ID ${id} not found.` });
    }
  } catch (error) {
    console.error("Delete Payment Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete payment" });
  }
};

module.exports = { createPayment, getAllPayments,deletePaymentById, };




// const path = require("path");
// const fs = require("fs");
// const Payment = require("../models/payment");
// const Post = require("../models/post"); 
// const validatePaymentImage = require("../validations/validatePaymentImage");
// const generateReceiptId = require("../utils/generateReceiptId");
// const sendThankYouEmail = require("../utils/sendThankYouEmail");
// const exportToExcel = require("../utils/exportToExcel");
// const cleanOldExports = require("../utils/cleanOldExports");
// const BASE_URL = process.env.BASE_URL || "http://api.superchennai.com";

// const createPayment = async (req, res) => {
//   try {
//     const { name, phone, email,no_of_persons  } = req.body;
//     let paymentImage = null;

//    // cleanOldExports();

//     // Validate uploaded image if any
//     // Validate uploaded image if any
//     // if (req.file) {
//     //   const isValid = await validatePaymentImage(req.file.path);
//     //   if (!isValid) {
//     //     fs.unlinkSync(req.file.path);
//     //     return res.status(400).json({
//     //       success: false,
//     //       message: "Uploaded image does not appear to be a valid payment receipt.",
//     //     });
//     //   }
//     //   paymentImage = `${req.protocol}://${req.get("host")}/uploads/payments/${req.file.filename}`;
//     // }

//     if (req.file) {
//       paymentImage = `${req.protocol}://${req.get("host")}/uploads/payments/${
//         req.file.filename
//       }`;
//     }

//     // Generate receipt ID
//     const receipt_id = generateReceiptId();

//     // 1. Save payment to DB
//     const newPayment = await Payment.createPayment({
//       name,
//       phone,
//       email,
//       no_of_persons,
//       payment_image: paymentImage,
//       receipt_id,
//     });

//     // 2. Fetch all posts & payments
//     const posts = await Post.getAllPosts();
//     const payments = await Payment.getAllPayments();

//     // 3. Generate Excel with both
//     const excelBuffer = await exportToExcel({ posts, payments });

//     // 4. Save file
//     const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
//     const excelFilename = `submissions-${timestamp}.xlsx`;
//     const exportPath = path.join(__dirname, `../public/exports/${excelFilename}`);
//     fs.writeFileSync(exportPath, excelBuffer);

//     // 5. Send thank you email with download link
//     await sendThankYouEmail({
//       name,
//       email,
//       receipt_id,
//       phone,
//       no_of_persons,
//       payment_image: paymentImage,
//       excelDownloadLink: `${BASE_URL}/exports/${excelFilename}`,
//     });

//     res.status(201).json({ success: true, data: newPayment });
//   } catch (error) {
//     console.error("Payment Upload Error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// const getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.getAllPayments();
//     res.status(200).json({ success: true, data: payments });
//   } catch (error) {
//     console.error("Fetch error:", error);
//     res.status(500).json({ success: false, message: "Failed to fetch payments" });
//   }
// };

// const deletePaymentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Payment.deleteById(id); 

//     if (deleted) {
//       res.status(200).json({ success: true, message: `Payment with ID ${id} deleted.` });
//     } else {
//       res.status(404).json({ success: false, message: `Payment with ID ${id} not found.` });
//     }
//   } catch (error) {
//     console.error("Delete Payment Error:", error);
//     res.status(500).json({ success: false, message: "Failed to delete payment" });
//   }
// };

// module.exports = { createPayment, getAllPayments,deletePaymentById, };
