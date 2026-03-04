import express from "express";
import cors from "cors";

import categoryRoutes from "./src/routes/categoryRoutes.js";
import proposalRoutes from "./src/routes/proposalRoutes.js";

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "https://rayeva-ai-front.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(express.json());

app.use("/api/category", categoryRoutes);
app.use("/api/proposal", proposalRoutes);

export default app;