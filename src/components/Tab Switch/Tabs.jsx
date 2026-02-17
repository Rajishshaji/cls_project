import { useState } from "react";

function Tabs(){
    const [activeTab,setAcitveTab] = useState("home")
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-6 w-96">
            {/* Tabs*/}
        <div className="flex justify-around mb-6">
            
            <button 
            onclick ={()=> setAcitveTab("home")}
            className= {`px-4 py-2 rounded-lg ${
                activeTab === "home"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            >
            home 
            </button>

            <button
            onclick ={()=> setAcitveTab("about")}
            className= {`px-4 py-2 rounded-lg ${
                activeTab === "about"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            > 
            About
            </button>
            
            <button
                onclick ={()=> setAcitveTab("contact")}
            className= {`px-4 py-2 rounded-lg ${
                activeTab === "contact"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`} 
            >
                contact
            </button>
            </div> 
            {/* conditional rendering*/}      
            <div className="text-center text-lg">
                {activeTab ==="home" &&<p> welcome to the home page</p>}
                {activeTab ==="about" &&<p> this is the about page</p>}
                {activeTab ==="contact" &&<p> contact us at contact@example.com</p>}
            </div>
        </div>
        </div>
    )
}
export default Tabs