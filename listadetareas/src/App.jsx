import { useState } from 'react'
import './App.css'
import TaskContainer from './components/TaskContainer/TaskContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskContainer />
    </>
  )
}

export default App
