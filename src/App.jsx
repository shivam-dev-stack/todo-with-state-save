import { useState } from 'react'

import TaskManager from './TaskManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskManager />
    </>
  )
}

export default App
