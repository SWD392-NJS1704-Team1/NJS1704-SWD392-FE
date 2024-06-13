import { ENV } from "@/constant/environments";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import popupReducer from "./reducers/popupReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: popupReducer,
    user: userReducer,
  },
  devTools: ENV === "development",
});

export default store;
