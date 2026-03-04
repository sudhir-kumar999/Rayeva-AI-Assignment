import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 item:String,
 description:String,
 unit_cost:Number,
 quantity:Number,
 total_cost:Number
});

const proposalSchema = new mongoose.Schema({

 budget:Number,

 employees:Number,

 goal:String,

 product_mix:[productSchema],

 budget_allocation:Object,

 estimated_sustainability_impact:Object,

 impact_summary:String

});

export default mongoose.model("Proposal",proposalSchema);