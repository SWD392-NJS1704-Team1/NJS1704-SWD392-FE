// ref: https://vitejs.dev/guide/env-and-mode.html
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const ENV = import.meta.env.VITE_ENV;
export const LOGIN = import.meta.env.VITE_LOGIN_USER_API;

// User API
export const ADDUSER = import.meta.env.VITE_REGISTER_USER_API;
export const DELETEUSER = import.meta.env.VITE_DELETE_USER_API;
export const USERLIST = import.meta.env.VITE_GET_USER_LIST_API;
export const PRODUCTS_LIST = import.meta.env.VITE_GET_ALL_PRODUCT;
export const ADD_PRODUCT = import.meta.env.VITE_ADD_PRODUCT;

// Costumer API
export const ADDCUSTOMER = import.meta.env.VITE_ADD_CUSTOMER_API;