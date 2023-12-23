import { createSlice } from '@reduxjs/toolkit'

// types
import { BoxSliceState } from '../../@types/types';

const initialState: BoxSliceState = {
  infoBoxState: undefined,
  pickedTaskId: undefined,
}

export const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    pickTaskId: (state, action) => {
      state.pickedTaskId = action.payload;
    },
    selectBoxState: (state, action) => {
      state.infoBoxState = action.payload;
    }
  },
})

export const { pickTaskId, selectBoxState } = boxSlice.actions

export default boxSlice.reducer 