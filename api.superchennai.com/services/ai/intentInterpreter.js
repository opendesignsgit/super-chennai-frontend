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

const DEFAULT_AI_PROVIDER = "OPENAI";

let _openai = null;
let _groq = null;
let _googleAI = null;

function getOpenAIClient() {
  if (!_openai) {
    const { OpenAI } = require("openai");
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _openai;
}

function getGroqClient() {
  if (!_groq) {
    const Groq = require("groq-sdk");
    _groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  return _groq;
}

function getGoogleAIClient() {
  if (!_googleAI) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    _googleAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
  }
  return _googleAI;
}

function parseJSON(text) {
  const jsonMatch = text.match(/\{[\s\S]*?\}/);
  if (!jsonMatch) throw new Error("AI returned no JSON object: " + text);
  return JSON.parse(jsonMatch[0]);
}

async function interpretWithOpenAI(message) {
  const completion = await getOpenAIClient().chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: message },
    ],
  });
  return parseJSON(completion.choices[0].message.content);
}

async function interpretWithGroq(message) {
  const completion = await getGroqClient().chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: message },
    ],
  });
  return parseJSON(completion.choices[0].message.content);
}

async function interpretWithGoogleAI(message) {
  const model = getGoogleAIClient().getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(SYSTEM_PROMPT + "\n\nUser: " + message);
  return parseJSON(result.response.text());
}

async function interpretUserQuery(message) {
  const provider = (process.env.AI_PROVIDER || DEFAULT_AI_PROVIDER).toUpperCase();
  try {
    if (provider === "GROQ") {
      return await interpretWithGroq(message);
    } else if (provider === "GOOGLE_AI") {
      return await interpretWithGoogleAI(message);
    } else {
      return await interpretWithOpenAI(message);
    }
  } catch (err) {
    console.error("AI provider error (" + provider + "):", err);
    // Return empty object on failure so the frontend retains its previous filters
    return {};
  }
}

module.exports = { interpretUserQuery };
