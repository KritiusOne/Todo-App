import { type TodoID, type ListOfTodo, type Todo as TodoType } from '../types'
import { Todo } from './Todo'
interface Props {
  todos: ListOfTodo
  handleDeleteTodo: (id: TodoID) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todos: React.FC<Props> = ({ todos, handleDeleteTodo, handleCompleted }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => {
          return (
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
              <Todo id={todo.id} completed={todo.completed} title={todo.title} handleRemove={handleDeleteTodo} handleCompleted={handleCompleted} />
            </li>
          )
        })
      }
    </ul>
  )
}
