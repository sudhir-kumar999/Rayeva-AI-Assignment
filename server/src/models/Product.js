import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

 productName: String,

 description: String,

 primary_category: String,

 sub_category: String,

 tags: [String],

 sustainability_filters: [String]

});

export default mongoose.model("Product", productSchema);