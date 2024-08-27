
import { useState } from 'react'
import './App.css'

function App() {
  const [timer,setTimer] = useState(0);

  const startTimer = () =>{
    
  }
  return (
    <>
       <div>Time:{timer}</div>
      <button onClick={startTimer}>start</button>
      <button>stop</button>
      <button>reset</button>
    </>
  )
}

export default App
