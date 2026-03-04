import mongoose from "mongoose";

const aiLogSchema = new mongoose.Schema({

 module: String,
 prompt: String,
 response: String,
 createdAt: {
  type: Date,
  default: Date.now
 }

});

export default mongoose.model("AILog", aiLogSchema);