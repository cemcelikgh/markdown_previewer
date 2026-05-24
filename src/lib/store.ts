import { configureStore } from '@reduxjs/toolkit';
import textReducer from './features/textSlice/textSlice';
import displayReducer from './features/displaySlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      text: textReducer,
      display: displayReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
