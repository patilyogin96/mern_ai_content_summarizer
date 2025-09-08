
import { useEffect } from 'react'
import './App.css'

function App() {

const checkServer =async ()=>{
 const data = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/health`)
 console.log("data", data);
 
}
  useEffect(()=>{},[])
  checkServer()

  return (
    <>
    <div>Yogin</div>

    </>
  )
}

export default App
