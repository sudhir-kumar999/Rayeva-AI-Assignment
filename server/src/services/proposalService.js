import { callGemini } from "./aiService.js";
import Proposal from "../models/Proposal.js";
import AILog from "../models/AILog.js";
import { proposalPrompt } from "../prompts/proposalPrompt.js";

export const generateProposalService = async (budget, employees, goal) => {

 const prompt = proposalPrompt(budget, employees, goal);

 const aiResponse = await callGemini(prompt);

 console.log("AI Response:", aiResponse);

 // Extract JSON from markdown
 const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);

 const data = JSON.parse(jsonMatch[0]);

 const proposal = await Proposal.create({
  budget,
  employees,
  goal,
  ...data
 });

 await AILog.create({
  module: "proposal-generator",
  prompt,
  response: aiResponse
 });

 return proposal;

};