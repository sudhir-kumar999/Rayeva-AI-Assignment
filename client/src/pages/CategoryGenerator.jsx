import { useState } from "react";
import { generateCategory } from "../services/api";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

export default function CategoryGenerator(){

const [productName,setProductName]=useState("");
const [description,setDescription]=useState("");
const [result,setResult]=useState(null);
const [loading,setLoading]=useState(false);

const handleGenerate = async ()=>{

setLoading(true);

try{

const res = await generateCategory({
 productName,
 description
});

setResult(res.data.data);

}
catch(err){
console.log(err)
alert("Error generating category");

}

setLoading(false);

};

return(

<div className="p-10 max-w-xl mx-auto">

<h2 className="text-2xl font-bold mb-6">
AI Category Generator
</h2>

<input
className="border p-3 w-full mb-4"
placeholder="Product Name"
value={productName}
onChange={(e)=>setProductName(e.target.value)}
/>

<textarea
className="border p-3 w-full mb-4"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<button
className="bg-blue-600 text-white px-6 py-2 rounded"
onClick={handleGenerate}
>

Generate

</button>

{loading && <Loader/>}

{result && <ResultCard data={result}/>}

</div>

);

}