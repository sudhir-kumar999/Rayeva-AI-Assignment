export default function ResultCard({data}){

return(

<div className="bg-white shadow p-6 rounded mt-6">

<pre className="text-sm">
{JSON.stringify(data,null,2)}
</pre>

</div>

);

}