import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import cameraReducer from '../features/cameraSlice';
import previewReducer from '../features/previewSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer,
    preview: previewReducer,
  },
});