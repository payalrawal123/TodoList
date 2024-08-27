
import { useState } from 'react'
import './App.css'

function App() {
  const [timer,setTimer] = useState(0);
  return (
    <>
       <div>Time:{timer}</div>
      <button onClick={handleStart}>start</button>
      <button>stop</button>
      <button>reset</button>
    </>
  )
}

export default App
