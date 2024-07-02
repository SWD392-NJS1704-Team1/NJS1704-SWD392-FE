import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

// eslint-disable-next-line react-refresh/only-export-components
const watchSlice = createSlice({
  name: 'watch',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: watchReducer } = watchSlice;
export const { setSearchValue } = actions;
export default watchReducer;
