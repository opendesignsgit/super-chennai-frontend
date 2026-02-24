const express = require("express");
const { interpretUserQuery } = require("../services/ai/intentInterpreter");

const router = express.Router();

router.post("/interpret", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({ error: true, message: "message is required" });
    }
    const filters = await interpretUserQuery(message);
    res.json(filters);
  } catch (e) {
    console.error("AI interpret error:", e);
    res.status(500).json({ error: true });
  }
});

module.exports = router;
