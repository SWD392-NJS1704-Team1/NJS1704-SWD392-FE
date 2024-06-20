import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

// eslint-disable-next-line react-refresh/only-export-components
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: userReducer } = userSlice;
export const { setSearchValue } = actions;
export default userReducer;
