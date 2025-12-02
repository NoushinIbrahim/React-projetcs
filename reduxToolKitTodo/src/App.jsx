import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './compnents/Addtodo'
import Todo from './compnents/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about reducx toolkit</h1>
      <Addtodo />
      <Todo />
    </>
  )
}

export default App
