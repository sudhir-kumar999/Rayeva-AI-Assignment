import { generateProposalService } from "../services/proposalService.js";

export const generateProposal = async (req, res) => {

 try {

  const { budget, employees, goal } = req.body;

  const proposal = await generateProposalService(
   budget,
   employees,
   goal
  );

  res.json({
   success: true,
   data: proposal
  });

 } catch (error) {
console.log("PROPOSAL ERROR:", error);
  res.status(500).json({
   error: "Proposal generation failed"
  });

 }

};