import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ediIniTexCod from './ediIniTexCod';
import type { RootState } from '../../store';

export const textSlice = createSlice({
  name: 'text',
  initialState: ediIniTexCod,
  reducers: {
    setText: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setText } = textSlice.actions;
export const selectText = (state: RootState) => state.text;
export default textSlice.reducer;
