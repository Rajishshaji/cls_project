import { useState } from "react";

function Greeting() {
    const[greeting, setGreeting] = useState("");
    const [time, setTime] = useState("");

    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();

            const hour = now.getHours();
            const min = now.getMinutes().toString().padStary(2, "0");
            const secs = now.getMinutes().toString().padStary(2, "0");

            if(hour < 12){
                setGreeting("Good Moring")
            }else if (hour >= 12 && hour < 17){
                setGreeting("Good Afternoon");
            }else if (hour >= 12 && hour < 20){
                setGreeting("Good Evening")
            }else {
                setGreeting("Good Ni8");
            }
            
            setTime(`${hour,toString().padStart(2, "0")}:${min}:${secs}`);
        }, 1000);

        return()=> clearInterval(interval);
    }, []);

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div></div>



        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    )


}
export default Greeting;