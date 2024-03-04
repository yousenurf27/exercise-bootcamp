export interface ITodo {
  id: string,
  title: string,
  isDone: boolean,
}

export interface ITodos {
  [todos: string]: ITodo[]
}
