import { useState } from 'react'

const mockToDO = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '1',
    title: 'Todo 2',
    completed: false
  }
]
function App (): JSX.Element {
  const [todos, setTodos] = useState(mockToDO)
  return (
    <div>
      TODO con Typescript
    </div>
  )
}

export default App
