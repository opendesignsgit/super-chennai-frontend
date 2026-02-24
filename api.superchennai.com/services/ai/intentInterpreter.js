const { OpenAI } = require("openai");

let openai = null;

function getClient() {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

async function interpretUserQuery(message) {
  const completion = await getClient().chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      {
        role: "system",
        content: `
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
`,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  let parsed;
  try {
    parsed = JSON.parse(completion.choices[0].message.content);
  } catch (parseError) {
    throw new Error("AI returned invalid JSON: " + completion.choices[0].message.content);
  }
  return parsed;
}

module.exports = { interpretUserQuery };
