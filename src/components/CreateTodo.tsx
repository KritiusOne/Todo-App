import React, { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void

}
export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onAddTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      className='new-todo'
      value={inputValue}
      onChange={(e) => { setInputValue(e.target.value) }}
      placeholder='¿que deseas hacer?'
      autoFocus
      />
    </form>
  )
}
