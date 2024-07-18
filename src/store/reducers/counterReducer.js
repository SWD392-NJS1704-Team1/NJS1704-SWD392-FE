import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

// eslint-disable-next-line react-refresh/only-export-components
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: counterReducer } = counterSlice;
export const { setSearchValue } = actions;
export default counterReducer;
