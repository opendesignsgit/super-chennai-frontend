const express = require("express");
const router = express.Router();
const {upload} = require("../config/multer");
const { createPayment, getAllPayments,deletePaymentById, } = require("../controllers/paymentController");

router.post("/payments", upload.single("paymentImage"), createPayment);
router.get("/payments", getAllPayments);
router.delete("/payments/:id", deletePaymentById);

module.exports = router;
