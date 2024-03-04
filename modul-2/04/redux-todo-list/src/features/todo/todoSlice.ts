import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITodos } from '../../interface'
import { v4 as uuidv4 } from 'uuid'

const initialState: ITodos = {
  todos: [
    {
      id: '2b27fdfb-f51f-49ac-a061-25c3f55e4be0',
      title: 'Title todo yang pertama',
      isDone: true,
    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        isDone: false,
      };

      state.todos = [...state.todos, newTodo];
    },
    updateTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(td => td.id == action.payload ? {...td, isDone: !td.isDone} : td);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(td => td.id != action.payload);
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
