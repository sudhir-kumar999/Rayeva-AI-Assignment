import express from "express";
import { generateProposal } from "../controllers/proposalController.js";

const router = express.Router();

/*
 POST API
 Generate B2B Proposal using AI
*/

router.post("/generate", generateProposal);

export default router;