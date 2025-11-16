import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setcounter] = useState(0);

  // let Counter = 0;

  const addvalue =()=>{
    // Counter = Counter+1

    setcounter(Counter+1)
    if (Counter >= 20) {
      setcounter(Counter = 0)
      alert("Counter cannot go above 20!");
    }
    
  }
  const removevalue =()=>{
    // Counter = Counter+1

    setcounter(Counter -1)
    if (Counter <= -0) {
      setcounter((Counter = 0))
      alert('counter is zero')
    }
    
  }


  return (
    <>
      <h1>Counter Value: {Counter}</h1>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
      <p>Counter Value is {Counter}</p>
    </>
  )
}

export default App
