import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import previewTextContent from './previewTextContent';
import type { RootState } from '../../store';

export const textSlice = createSlice({
  name: 'text',
  initialState: previewTextContent,
  reducers: {
    setText: (_state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
})

export const { setText } = textSlice.actions;

export const selectText = (state: RootState) => state.text;

export default textSlice.reducer;
