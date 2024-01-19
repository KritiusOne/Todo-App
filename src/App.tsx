import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoID } from './types'
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
    title: 'Todo 3',
    completed: false
  }
]
function App (): JSX.Element {
  const [todos, setTodos] = useState(mockToDO)
  const handleDeleteTodo = ({ id }: TodoID): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <Todos handleDeleteTodo={handleDeleteTodo}
      todos={todos} />
    </div>

  )
}

export default App
