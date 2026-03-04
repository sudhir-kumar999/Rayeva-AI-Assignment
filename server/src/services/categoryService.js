import { callGemini } from "./aiService.js";
import Product from "../models/Product.js";
import AILog from "../models/AILog.js";
import { categoryPrompt } from "../prompts/categoryPrompt.js";

export const generateCategory = async (productName, description) => {

 const prompt = categoryPrompt(productName, description);

 const aiResponse = await callGemini(prompt);

 console.log("AI Response:", aiResponse);

 // Extract JSON from response
 const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);

 const data = JSON.parse(jsonMatch[0]);

 const product = await Product.create({
  productName,
  description,
  ...data
 });

 await AILog.create({
  module: "category-generator",
  prompt,
  response: aiResponse
 });

 return product;

};