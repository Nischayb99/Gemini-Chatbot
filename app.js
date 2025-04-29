import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userInput = req.body.message;
  const selectedModel = req.body.model || "models/gemini-1.5-pro";

  try {
    const model = genAI.getGenerativeModel({ model: selectedModel });
    const result = await model.generateContent(userInput);
    const response = await result.response;
    const text = response.text();
    res.json({ reply: text });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ reply: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//C:\Users\nischay\GitHub\Gemini-Chatbot\Assets\Dark-Mode.png