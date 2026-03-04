import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.GEMINI_API_KEY)

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export const callGemini = async (prompt) => {

 const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite"
 });

 const result = await model.generateContent(prompt);

 return result.response.text();

};