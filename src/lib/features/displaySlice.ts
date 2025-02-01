import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    editor: true,
    previewer: true
  },
  reducers: {
    toggleEditorDisplay: (state, action: PayloadAction<boolean>) => {
      state.editor = action.payload;
    },
    togglePreviewerDisplay: (state, action: PayloadAction<boolean>) => {
      state.previewer = action.payload;
    }
  }
})

export const { toggleEditorDisplay, togglePreviewerDisplay } = displaySlice.actions;

export const selectDisplay = (state: RootState) => state.display;

export default displaySlice.reducer;
