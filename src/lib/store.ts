import { configureStore } from '@reduxjs/toolkit';
import textReducer from './features/text/textSlice';
import displayReducer from './features/displaySlice';

export const store = configureStore({
  reducer: {
    text: textReducer,
    display: displayReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
