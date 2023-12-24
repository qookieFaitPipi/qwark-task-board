import { createSlice } from '@reduxjs/toolkit'

// types
import { BoxSliceState } from '../../@types/types';

const initialState: BoxSliceState = {
  taskBoxState: undefined,
  updateTaskId: undefined,
}

export const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    setUpdateTaskId: (state, action) => {
      state.updateTaskId = action.payload;
    },
    selectTaskBoxState: (state, action) => {
      state.taskBoxState = action.payload;
    }
  },
})

export const { setUpdateTaskId, selectTaskBoxState } = boxSlice.actions

export default boxSlice.reducer 