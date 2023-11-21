import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskContainer from './components/TaskContainer/TaskContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskContainer/>
    </>
  )
}

export default App
