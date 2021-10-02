import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    selectedImage: null,
    displayTime: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state) => {
      state.selectedImage = null;
    },
    setDisplayTime: (state, action) => {
      state.displayTime = action.payload;
    }
  },
});

export const { login, logout, selectImage, resetImage, setDisplayTime } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectSelectedImage = (state) => state.app.selectedImage;
export const selectDisplayTime = (state) => state.app.displayTime;

export default appSlice.reducer;
