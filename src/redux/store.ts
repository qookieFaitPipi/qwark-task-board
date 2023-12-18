import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// slices
import userSlice from './slices/userSlice';
import mainSlice from './slices/mainSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    mainSlice: mainSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();