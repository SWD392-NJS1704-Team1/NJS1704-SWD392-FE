import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

// eslint-disable-next-line react-refresh/only-export-components
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state[action.payload] = true;
    },
    closePopup: (state, action) => {
      state[action.payload] = false;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer: popupReducer } = popupSlice;
// Extract and export each action creator by name
export const { openPopup, closePopup } = actions;
// Export the reducer, either as a default or named export
export default popupReducer;
