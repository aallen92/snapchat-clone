import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
  name: 'preview',
  initialState: {
    displayLength: 10,
    displayTimeSet: false,
  },
  reducers: {
    setDisplayLength: (state, action) => {
        state.displayLength = action.payload;
    },
    setDisplayTimeSet: (state, action) => {
        state.displayTimeSet = action.payload;
    }
  },
});

export const { setDisplayLength, setDisplayTimeSet } = previewSlice.actions;

export const selectDisplayLength = (state) => state.preview.displayLength;
export const selectDisplayTimeSet = (state) => state.preview?.displayTimeSet;

export default previewSlice.reducer;