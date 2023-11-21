import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskListContainer from './components/TaskListContainer/TaskListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskListContainer/>
    </>
  )
}

export default App
