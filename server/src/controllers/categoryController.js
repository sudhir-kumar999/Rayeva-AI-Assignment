import { generateCategory } from "../services/categoryService.js";

export const categoryGenerator = async (req, res) => {

 try {

 const { productName, description } = req.body;

 const result = await generateCategory(productName, description);

 console.log("run")
 res.json({
   success: true,
   data: result
 });

 } catch (error) {
console.log("ERROR:", error);
 res.status(500).json({
   error: "AI generation failed"
 });

 }

};