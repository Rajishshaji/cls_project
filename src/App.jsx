import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashborad'
import Counter from './components/Counter'

function App(){
    const [name,setName] = useState ("maverick")
    const [occ,setOcc] = useState("student")
    function nameChange() {
        setName("LEO")
        setOcc("Developer")
        console.log=(name)
    }
    return(
    
       <Dashboard name={name} occ={occ} nameChange={nameChange}>
        
       </Dashboard>
    )
}

export default App
