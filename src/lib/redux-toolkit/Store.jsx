import { configureStore } from "@reduxjs/toolkit";
import PopupSlice from "./slices/PopupSlice";

export const Store = configureStore({
    reducer: {
        popup: PopupSlice,
    },
});