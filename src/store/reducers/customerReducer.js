import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

// eslint-disable-next-line react-refresh/only-export-components
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: customerReducer } = customerSlice;
export const { setSearchValue } = actions;
export default customerReducer;
