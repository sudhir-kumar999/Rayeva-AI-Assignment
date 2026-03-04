import { useState } from "react";
import { generateProposal } from "../services/api";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

export default function ProposalGenerator(){

const [budget,setBudget]=useState("");
const [employees,setEmployees]=useState("");
const [goal,setGoal]=useState("");

const [result,setResult]=useState(null);
const [loading,setLoading]=useState(false);

const handleGenerate = async ()=>{

setLoading(true);

try{

const res = await generateProposal({
 budget,
 employees,
 goal
});

setResult(res.data.data);

}
catch(err){
console.log(err)
alert("AI generation failed");

}

setLoading(false);

};

return(

<div className="p-10 max-w-xl mx-auto">

<h2 className="text-2xl font-bold mb-6">
AI B2B Proposal Generator
</h2>

<input
className="border p-3 w-full mb-4"
placeholder="Budget"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
/>

<input
className="border p-3 w-full mb-4"
placeholder="Employees"
value={employees}
onChange={(e)=>setEmployees(e.target.value)}
/>

<textarea
className="border p-3 w-full mb-4"
placeholder="Goal"
value={goal}
onChange={(e)=>setGoal(e.target.value)}
/>

<button
className="bg-green-600 text-white px-6 py-2 rounded"
onClick={handleGenerate}
>

Generate Proposal

</button>

{loading && <Loader/>}

{result && <ResultCard data={result}/>}

</div>

);

}