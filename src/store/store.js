import { ENV } from '@/constant/environments';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import popupReducer from './reducers/popupReducer';
import userReducer from './reducers/userReducer';
import watchReducer from './reducers/watchReducer';
import customerReducer from './reducers/customerReducer';
import counterReducer from './reducers/counterReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: popupReducer,
    user: userReducer,
    watch: watchReducer,
    customer: customerReducer,
    counter: counterReducer,
  },
  devTools: ENV === 'development',
});

export default store;
