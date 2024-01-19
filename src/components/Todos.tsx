import { type TodoID, type ListOfTodo } from '../types'
import { Todo } from './Todo'
interface Props {
  todos: ListOfTodo
  handleDeleteTodo: (id: TodoID) => void
}
export const Todos: React.FC<Props> = ({ todos, handleDeleteTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}> <Todo id={todo.id} completed={todo.completed} title={todo.title} handleRemove={handleDeleteTodo} /> </li>)
      }
    </ul>
  )
}
