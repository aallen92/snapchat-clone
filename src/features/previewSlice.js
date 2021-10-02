import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
  name: 'preview',
  initialState: {
    displayLength: 10,
  },
  reducers: {
    setDisplayLength: (state, action) => {
      state.displayLength = action.payload;
    },
  },
});

export const { setDisplayLength } = previewSlice.actions;

export const selectDisplayLength = (state) => state.preview.displayLength;

export default previewSlice.reducer;