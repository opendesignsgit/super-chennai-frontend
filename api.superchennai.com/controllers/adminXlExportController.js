// const Post = require("../models/post");
// const Payment = require("../models/payment");
// const exportToExcel = require("../utils/exportToExcel");

// const downloadAdminExcel = async (req, res) => {
//   try {
//     const posts = await Post.getAllPosts();
//     const payments = await Payment.getAllPayments();

//     const buffer = await exportToExcel({ posts, payments });

//     res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//     res.setHeader("Content-Disposition", "attachment; filename=admin-data.xlsx");
//     res.send(buffer);
//   } catch (error) {
//     console.error("Excel Export Error:", error);
//     res.status(500).json({ success: false, message: "Failed to generate Excel file" });
//   }
// };

// module.exports = { downloadAdminExcel };
