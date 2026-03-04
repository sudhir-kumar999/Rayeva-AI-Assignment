import express from "express";
import { categoryGenerator } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/generate", categoryGenerator);

export default router;