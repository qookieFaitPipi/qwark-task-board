import { createSlice } from '@reduxjs/toolkit'

// types
import { UserSliceState } from '../../@types/types';

const initialState: UserSliceState = {
  userLogin: undefined,
  accessToken: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload.userLogin;
      document.cookie = "userLogin=" + action.payload.userLogin;

    },
    logout: (state) => {
      state.userLogin = undefined;
      state.accessToken = undefined;
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer 