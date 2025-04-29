import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`;

async function listModels() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log("Available Models:\n");
    data.models.forEach((model) => {
      console.log(`- ${model.name}`);
    });
  } catch (err) {
    console.error("Error fetching models:", err);
  }
}

listModels();
