import { Link } from "react-router-dom";

export default function Home(){

return(

<div className="p-10 text-center">

<h1 className="text-3xl font-bold mb-4">
AI Product Tools
</h1>

<p className="mb-10 text-gray-600">
Generate product categories and B2B proposals using AI
</p>

<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

{/* Category AI Card */}

<Link to="/category">

<div className="bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition duration-300 border">

<h2 className="text-xl font-semibold mb-4">
AI Category Generator
</h2>

<p className="text-gray-600">
Automatically generate product category, sub-category,
SEO tags and sustainability filters using AI.
</p>

</div>

</Link>


{/* Proposal AI Card */}

<Link to="/proposal">

<div className="bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition duration-300 border">

<h2 className="text-xl font-semibold mb-4">
AI B2B Proposal Generator
</h2>

<p className="text-gray-600">
Generate sustainable corporate gift proposals with
budget allocation and environmental impact insights.
</p>

</div>

</Link>

</div>

</div>

);

}