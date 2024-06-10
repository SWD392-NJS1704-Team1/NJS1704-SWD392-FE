// ref: https://vitejs.dev/guide/env-and-mode.html
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const ENV = import.meta.env.VITE_ENV;
export const LOGIN = import.meta.env.VITE_LOGIN_USER_API;

// User API
export const ADDUSER = import.meta.env.VITE_REGISTER_USER_API;
export const DELETEUSER = import.meta.env.VITE_DELETE_USER_API;
export const USERLIST = import.meta.env.VITE_GET_USER_LIST_API;
export const GETUSERINFO = import.meta.env.VITE_GET_USER_INFO_API;
export const UPDATEUSER = import.meta.env.VITE_UPDATE_USER_API;

// Costumer API
export const ADDCUSTOMER = import.meta.env.VITE_ADD_CUSTOMER_API;

// Product API
export const PRODUCTS_LIST = import.meta.env.VITE_GET_ALL_PRODUCT;
export const ADD_PRODUCT = import.meta.env.VITE_ADD_PRODUCT;

// Counter API
export const COUNTERLIST = import.meta.env.VITE_GET_COUNTER_LIST_API;