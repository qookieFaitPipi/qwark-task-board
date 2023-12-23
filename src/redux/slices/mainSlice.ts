import { createSlice } from '@reduxjs/toolkit'

// types
import { MainSliceState } from '../../@types/types';

const initialState: MainSliceState = {
  users: [],
  tasks: [],
  pickedUser: undefined,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload.tasks;
      state.pickedUser = action.payload.pickedUser
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task: any) => task.id !== action.payload.id);
    },

  },
})

export const { setUsers, setTasks, addTask, deleteTask } = mainSlice.actions

export default mainSlice.reducer 