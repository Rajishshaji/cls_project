import { useState } from 'react'
function ColorPicker() {
const [color, setColor] = useState("bg-gray-300");

return (
<div className="flex flex-col items-center justify-center mim-h-screen gap-6">

<h1 className="text-2x1 font-bold">Simple Color Picker</h1>

{/*Color Box*/}
<div className={`w-48 h-48 rounded-x1 ${color}`}>

{/* Button */}
<button 
    onClick={()=> setColor("bg-red-500")}
    className="px-4 py-2 bg-red-500 text-black rounded-lg ">
        Red 
</button>

<button
    onClick={()=> setColor("bg-blue-500")}
    className="px-4 py-2 bg-blue-500 text-black rounded-lg">
        Blue 
</button>

<button
    onClick={()=> setColor("bg-green-500")}
    className="px-4 py-2 bg-green-500 text-black rounded-lg">
        Green
</button>
    </div>
</div>
)
}
export default ColorPicker;