import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import { FaCheck } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:500}}>
      <TodoCreate/>
      <TodoList/>
    </div>
  )
}

export default App
