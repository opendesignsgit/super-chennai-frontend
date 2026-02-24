const SYSTEM_PROMPT = `
You are a Chennai Places Discovery Assistant.

Convert user messages into structured filters.

Allowed output JSON:

{
  "category": "",
  "location": "",
  "rating": null,
  "tags": []
}

Examples:

"cafe near nungambakkam"
→ { "category":"cafe", "location":"nungambakkam" }

"restaurants rating over 4"
→ { "category":"restaurant", "rating":4 }

"quiet cafe near adyar"
→ { "category":"cafe", "location":"adyar", "tags":["quiet"] }

Return ONLY JSON.
`;

function parseAIContent(content) {
  try {
    return JSON.parse(content);
  } catch {
    throw new Error("AI returned invalid JSON: " + content);
  }
}

// ── OPENAI ──────────────────────────────────────────────────────────────────
let openaiClient = null;
async function interpretWithOpenAI(message) {
  if (!openaiClient) {
    const { OpenAI } = require("openai");
    openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  const completion = await openaiClient.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: message },
    ],
  });
  return parseAIContent(completion.choices[0].message.content);
}

// ── GROQ ─────────────────────────────────────────────────────────────────────
let groqClient = null;
async function interpretWithGroq(message) {
  if (!groqClient) {
    const Groq = require("groq-sdk");
    groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  const completion = await groqClient.chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: message },
    ],
  });
  return parseAIContent(completion.choices[0].message.content);
}

// ── GOOGLE AI ────────────────────────────────────────────────────────────────
let googleModel = null;
async function interpretWithGoogleAI(message) {
  if (!googleModel) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    googleModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }
  const result = await googleModel.generateContent(
    SYSTEM_PROMPT + "\n\nUser: " + message
  );
  return parseAIContent(result.response.text());
}

// ── PROVIDER ROUTER ──────────────────────────────────────────────────────────
async function interpretUserQuery(message) {
  const provider = (process.env.AI_PROVIDER || "OPENAI").toUpperCase();

  switch (provider) {
    case "GROQ":
      return interpretWithGroq(message);
    case "GOOGLE_AI":
      return interpretWithGoogleAI(message);
    case "OPENAI":
    default:
      return interpretWithOpenAI(message);
  }
}

module.exports = { interpretUserQuery };
