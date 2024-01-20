import { type TodoID, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: (id: TodoID) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted }) => {
  return <div className="view">
    <input type="checkbox" checked={completed} className="toggle" onChange={(e) => {
      handleCompleted({ id, completed: e.target.checked })
    }} />
    <label> {title} </label>
    <button className='destroy' onClick={() => { handleRemove({ id }) }} />
  </div>
}
