export declare interface Todo {
  id: string
  title: string
  completed: boolean
}
export type TodoID = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
export declare type ListOfTodo = Todo[]
