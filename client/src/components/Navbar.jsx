import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(){

const [menuOpen,setMenuOpen] = useState(false);

return(

<nav className="bg-gray-900 text-white relative">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<h1 className="font-bold text-xl">Rayeva AI</h1>

{/* Desktop Menu */}
<div className="hidden md:flex space-x-6">
<Link to="/" className="hover:text-blue-400">Home</Link>
<Link to="/category" className="hover:text-blue-400">Category AI</Link>
<Link to="/proposal" className="hover:text-blue-400">Proposal AI</Link>
</div>

{/* Hamburger */}
<button
className="md:hidden text-2xl"
onClick={()=>setMenuOpen(true)}
>
☰
</button>

</div>

{/* Overlay Menu */}
{menuOpen && (

<div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center space-y-8 text-xl z-50">

<button
className="absolute top-6 right-6 text-3xl"
onClick={()=>setMenuOpen(false)}
>
✕
</button>

<Link to="/" onClick={()=>setMenuOpen(false)} className="hover:text-blue-400">
Home
</Link>

<Link to="/category" onClick={()=>setMenuOpen(false)} className="hover:text-blue-400">
Category AI
</Link>

<Link to="/proposal" onClick={()=>setMenuOpen(false)} className="hover:text-blue-400">
Proposal AI
</Link>

</div>

)}

</nav>

);

}