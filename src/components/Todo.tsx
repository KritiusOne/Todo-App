import { type TodoID, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: (id: TodoID) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove }) => {
  return <div className="view">
    <input type="checkbox" checked={completed} className="toggle" onChange={() => {}} />
    <label> {title} </label>
    <button className='destroy' onClick={() => { handleRemove({ id }) }} />
  </div>
}
