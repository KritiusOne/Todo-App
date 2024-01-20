import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, type TodoID, type FiltersValue, type Todo, type TodoTitle } from './types'
import { FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
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
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]
function App (): JSX.Element {
  const [todos, setTodos] = useState(mockToDO)
  const [filterSelected, setFilterSelected] = useState<FiltersValue>(FILTERS.ALL)
  const activeTodos = todos.filter(todo => !todo.completed).length
  const completedTodos = todos.length - activeTodos
  const handleFilterChange = (filter: FiltersValue): void => {
    setFilterSelected(filter)
  }
  const handleDeleteTodo = ({ id }: TodoID): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodo = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo, completed
        }
      }
      return todo
    })
    setTodos(newTodo)
  }
  const filteredTodo = todos.filter(todo => {
    if (filterSelected === FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === FILTERS.COMPLETED) return todo.completed
    return todo
  })
  const onClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  const CreateTodo = ({ title }: TodoTitle): void => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div className='todoapp'>
      <Header onAddTodo={CreateTodo}/>
      <Todos handleDeleteTodo={handleDeleteTodo}
      todos={filteredTodo} handleCompleted={handleCompleted}
      />
      <Footer
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        activeCounts={activeTodos}
        completeCounts={completedTodos}
        onClearCompleted={onClearCompleted}
      />
    </div>

  )
}

export default App
