import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashborad'

function App(){
    let name = "maverick"
    let occ = "student"
    return(
    
       <Dashboard name={name} occ={occ}>
        
       </Dashboard>
    )
}

export default App
